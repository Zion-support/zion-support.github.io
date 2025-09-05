
import { useState } from 'react',
import { useForm } from 'react-hook-form',
import { Button } from '@/components/ui/button',
import { Form } from '@/components/ui/form',
import { Certification } from '@/types/resume',
import { Loader2 } from 'lucide-react',
import { useResume } from '@/hooks/useResume',
import { Alert, AlertDescription } from '@/components/ui/alert',
import { zodResolver } from '@hookform/resolvers/zod',
import { format } from 'date-fns',
import { CertificationsList } from './CertificationsList',
import { CertificationFormFields } from './CertificationFormFields',
import { CertificationFormValues, certificationSchema } from './types',

interface CertificationsFormProps {
  resumeId: string,
  certifications: Certification[],
  onComplete: () => void,
  onBack: () => void
}

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume(),
  const [editingId, setEditingId] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),

  // Helper function to format dates as strings for form inputs
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '',
    if (typeof dateValue === 'string') return dateValue,
    return format(dateValue, 'yyyy-MM-dd')
  },

  const form = useForm<CertificationFormValues>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: '',
      issuing_organization: '',
      issue_date: '',
      expiration_date: '',
      credential_id: '',
      credential_url: ''}}),

  const handleAddOrUpdate = async (data: CertificationFormValues) => {
    try {
      setError(null),
      let success,

      const certData: Certification = {
        name: data.name,
        issuing_organization: data.issuing_organization,
        issue_date: data.issue_date || undefined,
        expiration_date: data.expiration_date || undefined,
        credential_id: data.credential_id,
        credential_url: data.credential_url},

      if (editingId) {
        success = await updateCertification(editingId, certData)
      } else {
        success = await addCertification(resumeId, certData)
      }

      if (success) {
        form.reset({
          name: '',
          issuing_organization: '',
          issue_date: '',
          expiration_date: '',
          credential_id: '',
          credential_url: ''}),
        setEditingId(null)
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    }
  },

  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id!),
    form.reset({
      ...cert,
      issue_date: formatDateValue(cert.issue_date),
      expiration_date: formatDateValue(cert.expiration_date)})
  },

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id)
    }
  },

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>Certifications & Licenses</h2>
        <p className=&quot;text-muted-foreground&quot;>
          Add any professional certifications, licenses, or credentials you have earned.
        </p>
      </div>

      {certifications.length > 0 && (
        <CertificationsList 
          certifications={certifications} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      )}

      <div className=&quot;bg-muted/40 p-6 rounded-lg&quot;>
        <h3 className=&quot;text-md font-medium mb-4&quot;>
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className=&quot;space-y-4&quot;>
            <CertificationFormFields form={form} />

            {error && <Alert variant=&quot;destructive&quot;><AlertDescription>{error}</AlertDescription></Alert>}

            <div className=&quot;flex justify-between pt-2&quot;>
              <Button
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={() => {
                  if (editingId) {
                    setEditingId(null),
                    form.reset({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
                      credential_url: ''})
                  } else {
                    onBack()
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>

              <div className=&quot;flex gap-2&quot;>
                <Button type=&quot;submit&quot; disabled={isLoading}>
                  {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type=&quot;button&quot; onClick={onComplete}>
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}


<<<<<<< HEAD
import { useState } from 'react',
import { useForm } from 'react-hook-form',
import { Button } from '@/components/ui/button',
import { Form } from '@/components/ui/form',
import { Certification } from '@/types/resume',
import { Loader2 } from 'lucide-react'
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
=======


interface CertificationsFormProps {_resumeId: string;
  certifications: Certification[];
  onComplete: () => void;
  onBack: () => void;}

export function CertificationsForm(_{_resumeId, _certifications, _onComplete, _onBack}: CertificationsFormProps) {_const { addCertification, _updateCertification, _deleteCertification, _isLoading} = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper function to format dates as strings for form inputs
  const _formatDateValue = (_dateValue: string | Date | undefined): string => {_if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, _'yyyy-MM-dd');};

  const _form = useForm<CertificationFormValues>({_resolver: zodResolver(certificationSchema), _defaultValues: {
      name: '', _issuing_organization: '', _issue_date: '', _expiration_date: '', _credential_id: '', _credential_url: ''}});

  const _handleAddOrUpdate = async (_data: CertificationFormValues) => {_try {
      setError(null);
      let success;

      const certData: Certification = {
        name: data.name, _issuing_organization: data.issuing_organization, _issue_date: data.issue_date || undefined, _expiration_date: data.expiration_date || undefined, _credential_id: data.credential_id, _credential_url: data.credential_url};

      if (editingId) {_success = await updateCertification(editingId, _certData);} else {_success = await addCertification(resumeId, _certData);}

      if (success) {_form.reset({
          name: '', _issuing_organization: '', _issue_date: '', _expiration_date: '', _credential_id: '', _credential_url: ''});
        setEditingId(null);
      }
    } catch (err: unknown) {_setError(err.message || 'An error occurred');}
  };

  const _handleEdit = (_cert: Certification) => {_setEditingId(cert.id!);
    form.reset({
      ...cert, _issue_date: formatDateValue(cert.issue_date), _expiration_date: formatDateValue(cert.expiration_date)});
  };

  const _handleDelete = async (_id: string) => {_if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>Certifications & Licenses</h2>
        <p className=&quot;text-muted-foreground&quot;>
          Add any professional certifications, licenses, or credentials you have earned.
        </p>
      </div>

      {_certifications.length > 0 && (
        <CertificationsList 
          certifications={certifications} 
          onEdit={_handleEdit} 
          onDelete={_handleDelete} 
        />
      )}

<<<<<<< HEAD
      <div className=&quot;bg-muted/40 p-6 rounded-lg&quot;>
        <h3 className=&quot;text-md font-medium mb-4&quot;>
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className=&quot;space-y-4&quot;>
            <CertificationFormFields form={form} />

            {error && <Alert variant=&quot;destructive&quot;><AlertDescription>{error}</AlertDescription></Alert>}
=======
      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {_editingId ? 'Update Certification' : 'Add Certification'}
        </h3>

        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <CertificationFormFields form={_form} />

            {_error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

            <div className=&quot;flex justify-between pt-2&quot;>
              <Button
<<<<<<< HEAD
                type=&quot;button&quot;
                variant=&quot;outline&quot;
                onClick={() => {
=======
                type="button"
                variant="outline"
                onClick={_() => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  if (editingId) {
                    setEditingId(null),
                    form.reset({
<<<<<<< HEAD
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
                      credential_url: ''})
                  } else {
                    onBack()
                  }
=======
                      name: '', _issuing_organization: '', _issue_date: '', _expiration_date: '', _credential_id: '', _credential_url: ''});
                  } else {_onBack();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                }}
              >
                {_editingId ? 'Cancel' : 'Back'}
              </Button>

<<<<<<< HEAD
              <div className=&quot;flex gap-2&quot;>
                <Button type=&quot;submit&quot; disabled={isLoading}>
                  {isLoading && <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type=&quot;button&quot; onClick={onComplete}>
=======
              <div className="flex gap-2">
                <Button type="submit" disabled={_isLoading}>
                  {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {_editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type="button" onClick={_onComplete}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

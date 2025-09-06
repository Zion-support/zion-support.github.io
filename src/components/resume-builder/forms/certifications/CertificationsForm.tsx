
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { Button  } from '@/components/ui/button';
import { Form  } from '@/components/ui/form';
import { Certification  } from '@/types/resume';
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Certification } from '@/types/resume'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Loader2 } from 'lucide-react'
import { useResume  } from '@/hooks/useResume';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { zodResolver  } from '@hookform/resolvers/zod';
import { format  } from 'date-fns';
import { CertificationsList  } from './CertificationsList';
import { CertificationFormFields  } from './CertificationFormFields';
import { CertificationFormValues, certificationSchema } from './types';
interface CertificationsFormProps {
  resumeId: string;
  certifications: Certification[];
  onComplete: () => void;
  onBack: () => void

export function CertificationsForm({
  resumeId
  certifications
  onComplete
  onBack
}: CertificationsFormProps) {
  const {
    addCertification
    updateCertification
    deleteCertification
    isLoading
  } = useResume()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  // Helper function to format dates as strings for form inputs
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return ''
    if (typeof dateValue === 'string') return dateValue
    return format(dateValue, 'yyyy-MM-dd')
  }
  const form = useForm<CertificationFormValues>({
    resolver: zodResolver(certificationSchema)
    defaultValues: {
      name: ''
      issuing_organization: ''
      issue_date: ''
      expiration_date: ''
      credential_id: ''
      credential_url: ''
    }
  })
  const handleAddOrUpdate = async (data: CertificationFormValues,) => {
    try {
      setError(null)
      let success
      const certData: Certification = {
        name: data.name
        issuing_organization: data.issuing_organization
        issue_date: data.issue_date |undefined
        expiration_date: data.expiration_date |undefined
        credential_id: data.credential_id
        credential_url: data.credential_url
      }
      if (editingId) {
        success = await updateCertification(editingId, certData)
      } else {
        success = await addCertification(resumeId, certData)
      }
      if (success) {
        form.reset({
          name: ''
          issuing_organization: ''
          issue_date: ''
          expiration_date: ''
          credential_id: ''
          credential_url: ''
        })
        setEditingId(null)
      }
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { Button  } from '@/components/ui/button';
import { Form  } from '@/components/ui/form';
import { Certification  } from '@/types/resume';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      setError(err.message |'An error occurred')
    }
  }
  const handleEdit = (cert: Certification) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      setError(err.message || 'An error occurred');
    };
  };
  const handleEdit = (cert: Certification) => {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    setEditingId(cert.id!);    form.reset({
      ...cert
  }
  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id!)
    form.reset({
      issue_date: formatDateValue(cert.issue_date)
      expiration_date: formatDateValue(cert.expiration_date)
    })
  }
  const handleDelete = async (id: string,) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id)
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { Button } from '@/components/ui/button',;
import { Form } from '@/components/ui/form',;
import { Certification } from '@/types/resume',;
import { Loader2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { format } from 'date-fns',;
import { CertificationsList } from './CertificationsList',;
import { CertificationFormFields } from './CertificationFormFields',;
import { CertificationFormValues, certificationSchema } from './types',;
interface CertificationsFormProps {;
  resumeId: string,;
  certifications: Certification[],;
  onComplete: () => void,;
  onBack: () => void;
}
;
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
  // Helper function to format dates as strings for form inputs;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '',;
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd');
  },;
  const form = useForm<CertificationFormValues>({;
    resolver: zodResolver(certificationSchema),;
    defaultValues: {;
      name: '',;
      issuing_organization: '',;
      issue_date: '',;
      expiration_date: '',;
      credential_id: '',;
      credential_url: ''}}),;
  const handleAddOrUpdate = async (data: CertificationFormValues) => {;
    try {;
      setError(null),;
      let success,;
      const certData: Certification = {;
        name: data.name,;
        issuing_organization: data.issuing_organization,;
        issue_date: data.issue_date || undefined,;
        expiration_date: data.expiration_date || undefined,;
        credential_id: data.credential_id,;
        credential_url: data.credential_url},;
      if (editingId) {;
        success = await updateCertification(editingId, certData);
      } else {;
        success = await addCertification(resumeId, certData);
      }
;
      if (success) {;
        form.reset({;
          name: '',;
          issuing_organization: '',;
          issue_date: '',;
          expiration_date: '',;
          credential_id: '',;
          credential_url: ''}),;
        setEditingId(null);
      }
    } catch (err: any) {;
      setError(err.message || 'An error occurred');
    }
  },;
  const handleEdit = (cert: Certification) => {;
    setEditingId(cert.id!),;
    form.reset({;
      ...cert,;
      issue_date: formatDateValue(cert.issue_date),;
      expiration_date: formatDateValue(cert.expiration_date)});
  },;
  const handleDelete = async (id: string) => {;
    if (confirm('Are you sure you want to delete this certification?')) {;
      await deleteCertification(id);
    }
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>
        <p className="text-muted-foreground">
          Add any professional certifications, licenses, or credentials you have earned.
        </p>
      </div>
      {certifications.length > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      )}
      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <CertificationsList
          certifications={certifications}
          onEdit={handleEdit}
          onDelete={handleDelete}        />
      )}
      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <CertificationsList 
          certifications={certifications} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      )}

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       )}

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
>>>>>>>           {editingId ? 'Update Certification' : 'Add Certification'}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {editingId ? 'Update Certification' : 'Add Certification'}
>>>>>>>         </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <CertificationFormFields form={form} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">

              <Button
=======
            <div className='flex justify-between pt-2'>
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
>>>>>>> 
            <div className="flex justify-between pt-2">
>>>>>>>               <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className='flex justify-between pt-2'>

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
              <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                type="button"
                variant="outline"
                onClick={() => {
                  if (editingId) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
                    setEditingId(null)
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                    setEditingId(null)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    form.reset({
                      name: ''
                      issuing_organization: ''
                      issue_date: ''
                      expiration_date: ''
                      credential_id: ''
                      credential_url: ''
                    })

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     form.reset({
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              <Button
                type='button'
                variant='outline'
                onClick={() => {
                  if (editingId) {


                    setEditingId(null),
                    setEditingId(null),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    form.reset({
>>>>>>>                       name: '',
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    setEditingId(null),
                    setEditingId(null),
                    form.reset({
                      name: '',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                      credential_url: ''})
                      credential_url: '',
                    })
>>>>>>>                   } else {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  } else {
>>>>>>>                     onBack()
      <div className='bg-muted/40 p-6 rounded-lg'>;
        <h3 className='text-md font-medium mb-4'>;
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>;

        <Form {...form}>;
          <form
            onSubmit={form && form.handleSubmit(handleAddOrUpdate)}
            className='space-y-4'>;
            <CertificationFormFields form={form} />;

            {error && (;
              <Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>;
            )}

            <div className='flex justify-between pt-2'>;
              <Button
                type='button'
                variant='outline'
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
                    form && form.reset({;
                      name: '',;
                      issuing_organization: '',;
                      issue_date: '',;
                      expiration_date: '',;
                      credential_id: '',;
                      credential_url: '',;
                    });
                  } else {;
                    onBack();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      credential_url: ''})
                      credential_url: '',
                    })
                      credential_url: ''})
                  } else {
                    onBack()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
<<<<<<< HEAD

              </Button>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
              </Button>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>
                <Button type='button' onClick={onComplete}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                   Next
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type="button" onClick={onComplete}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  Next
>>>>>>>                 </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}> {
  editingId ? 'Cancel' : 'Back'
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>)
}'"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
}
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

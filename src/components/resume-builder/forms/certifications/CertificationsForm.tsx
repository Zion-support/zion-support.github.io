<<<<<<< HEAD


=======
<<<<<<< HEAD

<<<<<<< HEAD
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { Button  } from '@/components/ui/button';
import { Form  } from '@/components/ui/form';
import { Certification  } from '@/types/resume';
=======
<<<<<<< HEAD
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Certification } from '@/types/resume'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      setError(err.message |'An error occurred')
    }
  }
  const handleEdit = (cert: Certification) => {
=======
      setError(err.message || 'An error occurred');
    };
  };
  const handleEdit = (cert: Certification) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (

    <div className='space-y-6'>;
      <div>;
        <h2 className='text-xl font-semibold mb-2'>;
          Certifications & Licenses;
        </h2>;
        <p className='text-muted-foreground'>;
          Add any professional certifications, licenses, or credentials you have;
          earned.;
        </p>;
      </div>;

      {certifications && certifications.length > 0 && (;

        <CertificationsList
          certifications={certifications}
          onEdit={handleEdit}
<<<<<<< HEAD
          onDelete={handleDelete}        />;
      )}



=======
          onDelete={handleDelete}        />
<<<<<<< HEAD
      )}
      <div className='bg-muted/40 p-6 rounded-lg'>
        <h3 className='text-md font-medium mb-4'>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        <CertificationsList 
          certifications={certifications} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      )}

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAddOrUpdate)}
            className='space-y-4'
          >
            <CertificationFormFields form={form} />
<<<<<<< HEAD



=======
<<<<<<< HEAD
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
<<<<<<< HEAD
            <div className='flex justify-between pt-2'>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}


            <div className="flex justify-between pt-2">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <Button
                type='button'
                variant='outline'
                onClick={() => {
                  if (editingId) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    setEditingId(null)
<<<<<<< HEAD
                    form.reset({
                      name: ''
                      issuing_organization: ''
                      issue_date: ''
                      expiration_date: ''
                      credential_id: ''
                      credential_url: ''
                    })
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


                    setEditingId(null),
=======
=======
                    setEditingId(null),
<<<<<<< HEAD


=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                    form.reset({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
                      credential_url: ''})
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
                      credential_url: '',
                    })
=======
                      credential_url: ''})
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  } else {
                    onBack()
=======

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
                  }
                }}
              >;
                {editingId ? 'Cancel' : 'Back'}

              </Button>


              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type="button" onClick={onComplete}>
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )

              </Button>;

              <div className='flex gap-2'>;
                <Button type='submit' disabled={isLoading}>;
                  {isLoading && (;
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                  )}
                  {editingId ? 'Update' : 'Add'} Certification;
                </Button>;

                <Button type='button' onClick={onComplete}>;
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
    </div>;
  );

}> {;
  editingId ? 'Cancel' : 'Back' ;
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) ;
}'"}

=======
      // Check condition
if ( {) {
  $2
}
        form.reset ({
          name: '',
          issuing_organization: '',
          issue_date: '',
          expiration_date: '',
          credential_id: '',
          credential_url: '',
        });
        setEditingId (null);
      }
    } catch (err: any) {
      set_error (err.message || 'An error occurred');
    }
  }
  const handle_edit = (cert: Certification) =>: any {
    setEditingId (cert.id!);    form.reset ({
      ...cert,
  }
  const handle_edit = (cert: Certification) =>: any {
    setEditingId (cert.id!);
    form.reset ({
      issue_date: formatDateValue (cert.issue_date),
      expiration_date: formatDateValue (cert.expiration_date),
    });
  }
  const handle_delete = async (id: string, ) => {
    if () {) {
  $2
}
      await delete_certification (id);
    }
  }
  return (
    <div className='space - y-6'>;
      <div>;
        <h2 className='text - xl font - semibold mb - 2'>;
          Certifications & Licenses;
        </h2>;
        <p className='text - muted - foreground'>;
          Add any professional certifications, licenses, or credentials you have;
          earned.;
        </p>;
      </div>;
      {certifications.length > 0 && (
        <CertificationsList;
          certifications={certifications}
          on_edit={handle_edit}
          on_delete={handle_delete}        />)}
      <div className='bg - muted / 40 p - 6 rounded - lg'>;
        <h3 className='text - md font - medium mb - 4'>;
          {editing_id ? 'Update Certification' : 'Add Certification'}
        </h3>;
        <Form {...form}>;
          <form;
            on_submit={form.handle_submit (handleAddOrUpdate)}
            className='space - y-4';
          >;
            <CertificationFormFields form={form} />;
            {error && (
              <Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>)}
            <div className='flex justify - between pt - 2'>;
              <Button;
                type='button';
                variant='outline';
                on_click={() => {
                  // Check condition
if ( {) {
  $2
}
                    setEditingId (null);
                    form.reset ({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
                      credential_url: '',
                    });
                  } else {
                    on_back ();
                  }
                }}
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
              <div className='flex gap - 2'>;
                <Button type='submit' disabled={is_loading}>;
                  {is_loading && (
                    <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />)}
                  {editing_id ? 'Update' : 'Add'} Certification;
                </Button>;
                <Button type='button' on_click={on_complete}>;
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
    </div>);
}> {
  editing_id ? 'Cancel' : 'Back';
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>);
}'"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

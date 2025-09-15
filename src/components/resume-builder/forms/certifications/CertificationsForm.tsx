
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
    return format(dateValue, 'yyyy-MM-dd'),
  },
=======
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Certification } from '@/types/resume';
import { Loader2 } from 'lucide-react'
import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';

import { CertificationsList } from './CertificationsList';
import { CertificationFormFields } from './CertificationFormFields';
import { CertificationFormValues, certificationSchema } from './types';

interface CertificationsFormProps {
  resumeId: string;
  certifications: Certification[];
  onComplete: () => void;
  onBack: () => void;
}

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper function to format dates as strings for form inputs
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, 'yyyy-MM-dd');
  };
>>>>>>> origin/auto/autonomy-17186719616

  const form = useForm<CertificationFormValues>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      name: '',
      issuing_organization: '',
      issue_date: '',
      expiration_date: '',
      credential_id: '',
<<<<<<< HEAD
      credential_url: ''}}),

  const handleAddOrUpdate = async (data: CertificationFormValues) => {
    try {
      setError(null),
      let success,
=======
      credential_url: '',
    },
  });

  const handleAddOrUpdate = async (data: CertificationFormValues) => {
    try {
      setError(null);
      let success;
>>>>>>> origin/auto/autonomy-17186719616

      const certData: Certification = {
        name: data.name,
        issuing_organization: data.issuing_organization,
        issue_date: data.issue_date || undefined,
        expiration_date: data.expiration_date || undefined,
        credential_id: data.credential_id,
<<<<<<< HEAD
        credential_url: data.credential_url},

      if (editingId) {
        success = await updateCertification(editingId, certData),
      } else {
        success = await addCertification(resumeId, certData),
=======
        credential_url: data.credential_url,
      };

      if (editingId) {
        success = await updateCertification(editingId, certData);
      } else {
        success = await addCertification(resumeId, certData);
>>>>>>> origin/auto/autonomy-17186719616
      }

      if (success) {
        form.reset({
          name: '',
          issuing_organization: '',
          issue_date: '',
          expiration_date: '',
          credential_id: '',
<<<<<<< HEAD
          credential_url: ''}),
        setEditingId(null),
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
      expiration_date: formatDateValue(cert.expiration_date)}),
  },

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id)
    }
  },
=======
          credential_url: '',
        });
        setEditingId(null);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    }
  };

  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id!);
    form.reset({
      ...cert,
      issue_date: formatDateValue(cert.issue_date),
      expiration_date: formatDateValue(cert.expiration_date),
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>
        <p className="text-muted-foreground">
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

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <CertificationFormFields form={form} />

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (editingId) {
<<<<<<< HEAD
                    setEditingId(null),
=======
                    setEditingId(null);
>>>>>>> origin/auto/autonomy-17186719616
                    form.reset({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
<<<<<<< HEAD
                      credential_url: ''}),
                  } else {
                    onBack(),
=======
                      credential_url: '',
                    });
                  } else {
                    onBack();
>>>>>>> origin/auto/autonomy-17186719616
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
<<<<<<< HEAD


              </Button>
              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>
                <Button type='button' onClick={onComplete}>
=======
              </Button>
>>>>>>> origin/auto/autonomy-17186719616

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type="button" onClick={onComplete}>
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}

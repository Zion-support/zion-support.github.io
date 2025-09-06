
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { Button  } from '@/components/ui/button';
import { Form  } from '@/components/ui/form';
import { Certification  } from '@/types/resume';
import { Loader2  } from 'lucide-react';
import { useResume  } from '@/hooks/useResume';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { zodResolver  } from '@hookform/resolvers/zod';
import { format  } from 'date-fns';
import { CertificationsList  } from './CertificationsList';
import { CertificationFormFields  } from './CertificationFormFields';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CertificationFormValues, certificationSchema } from './types';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { CertificationFormValues, certificationSchema } from './types';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from '@/components/ui/button';
import {Form} from '@/components/ui/form';
import {Certification} from '@/types/resume';
import {Loader2} from 'lucide-react';
import {useResume} from '@/hooks/useResume';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {zodResolver} from '@hookform/resolvers/zod';
import {format} from 'date-fns';
import {CertificationsList} from './CertificationsList';
import {CertificationFormFields} from './CertificationFormFields';
import {CertificationFormValues, certificationSchema} from './types';
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CertificationsFormProps {
=======
import { CertificationFormValues, certificationSchema } from './types';interface CertificationsFormProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { CertificationFormValues, certificationSchema } from './types';interface CertificationsFormProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useState  } from 'react';'
import { useForm  } from 'react-hook-form';'
import { Button  } from '@/components/ui/button';'
import { Form  } from '@/components/ui/form';'
import { Certification  } from '@/types/resume';'
import { Loader2  } from 'lucide-react';'
import { useResume  } from '@/hooks/useResume';'
import { Alert, AlertDescription  } from '@/components/ui/alert';'
import { zodResolver  } from '@hookform/resolvers/zod';'
import { format  } from 'date-fns';'
import { CertificationsList  } from './CertificationsList';'
import { CertificationFormFields  } from './CertificationFormFields';'
import { CertificationFormValues, certificationSchema } from './types';
'
import {useState} from 'react';'
import {useForm} from 'react-hook-form';'
import {Button} from '@/components/ui/button';'
import {Form} from '@/components/ui/form';'
import {Certification} from '@/types/resume';'
import {Loader2} from 'lucide-react';'
import {useResume} from '@/hooks/useResume';'
import {Alert, AlertDescription} from '@/components/ui/alert';'
import {zodResolver} from '@hookform/resolvers/zod';'
import {format} from 'date-fns';'
import {CertificationsList} from './CertificationsList';'
import {CertificationFormFields} from './CertificationFormFields';'
import {CertificationFormValues, certificationSchema} from './types';
=======


interface CertificationsFormProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface CertificationsFormProps {}
  resumeId: string;
  certifications: Certification[]
  onComplete: () => void;
  onBack: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
import {use_form} from 'react - hook - form';
import {Button} from '@/components / ui / button';
import {Form} from '@/components / ui / form';
import {Certification} from '@/types / resume';
import {Loader2} from 'lucide-react';
import {use_resume} from '@/hooks / use_resume';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {zod_resolver} from '@hookform / resolvers / zod';
import {format} from 'date - fns';
import {CertificationsList} from './CertificationsList';
<<<<<<< HEAD
=======
'
import {useState} from 'react';'
import {use_form} from 'react - hook - form';'
import {Button} from '@/components / ui / button';'
import {Form} from '@/components / ui / form';'
import {Certification} from '@/types / resume';'
import {Loader2} from 'lucide-react';'
import {use_resume} from '@/hooks / use_resume';'
import {Alert, AlertDescription} from '@/components / ui / alert';'
import {zod_resolver} from '@hookform / resolvers / zod';'
import {format} from 'date - fns';'
import {CertificationsList} from './CertificationsList';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {CertificationFormFields} from './CertificationFormFields';



<<<<<<< HEAD
<<<<<<< HEAD
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD


=======
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function CertificationsForm() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // Helper function to format dates as strings for form inputs
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '';
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
      credential_url: ''}})
  const handleAddOrUpdate = async (data: CertificationFormValues) => {
    try {
      setError(null);
      let success
      const certData: Certification = {
        name: data.name
        issuing_organization: data.issuing_organization
        issue_date: data.issue_date |undefined
        expiration_date: data.expiration_date |undefined
        credential_id: data.credential_id
        credential_url: data.credential_url}
      if (editingId) {
        success = await updateCertification(editingId, certData)
      } else {
        success = await addCertification(resumeId, certData)
<<<<<<< HEAD

=======
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { Button } from '@/components/ui/button',;
import { Form } from '@/components/ui/form',;
import { Certification } from '@/types/resume',;
import { Loader2 } from 'lucide-react',;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
import {CertificationFormValues, certification_schema} from './types';
interface CertificationsFormProps {}
=======

import {CertificationFormValues, certification_schema} from './types';
interface CertificationsFormProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  resume_id: string,
  certifications: Certification[],
  on_complete: () => void,
  on_back: () => void;
<<<<<<< HEAD


}
export /**;
 * CertificationsForm - Function description;
 */
function CertificationsForm() {}
=======
}
export /**
 * CertificationsForm - Function description
 */
function CertificationsForm() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { add_certification, update_certification, delete_certification, is_loading } = use_resume ();
  const [editing_id, setEditingId] = useState < string | null>(null);
  const [error, set_error] = useState < string | null>(null);
;
  // Helper function to format dates as strings for form inputs;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
      if (success) {}
        form.reset({'
          name: '''
          issuing_organization: '''
          issue_date: '''
          expiration_date: '''
          credential_id: '''
          credential_url: ''})
        setEditingId(null)
      }
    } catch (err: any) {'
      setError(err.message |'An error occurred')
    }
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
      }
      if (success) {
        form.reset({
          name: ''
          issuing_organization: ''
          issue_date: ''
          expiration_date: ''
          credential_id: ''
          credential_url: ''})
        setEditingId(null)
      }
    } catch (err: any) {
      setError(err.message |'An error occurred')
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      }


  };



<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleEdit = (cert: Certification) => {
=======


  const handleEdit = (cert: Certification) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setEditingId(cert.id!);
    form.reset({}
      ...cert;
      issue_date: formatDateValue(cert.issue_date)
      expiration_date: formatDateValue(cert.expiration_date)})
  }
  const handleDelete = async (id: string) => {'
    if (confirm('Are you sure you want to delete this certification?')) {}
      await deleteCertification(id)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




  // Helper function to format dates as strings for form inputs;
<<<<<<< HEAD
  const formatDateValue = (dateValue: string | Date | undefined): string => {;'
    if (!dateValue) return '';'
    if (typeof dateValue === 'string') return dateValue,;'
=======
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return format(dateValue, 'yyyy-MM-dd');
  };


<<<<<<< HEAD


  const form = useForm<CertificationFormValues>({;
    resolver: zodResolver(certificationSchema),;
    defaultValues: {;'
      name: '',;'
      issuing_organization: '',;'
      issue_date: '',;'
      expiration_date: '',;'
      credential_id: '',;'
      credential_url: ''}}),;




=======
  const form = useForm<CertificationFormValues>({;
    resolver: zodResolver(certificationSchema),;
    defaultValues: {;
      name: '',;
      issuing_organization: '',;
      issue_date: '',;
      expiration_date: '',;
      credential_id: '',;
      credential_url: ''}}),;


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleAddOrUpdate = async (data: CertificationFormValues) => {;
    try {;
      setError(null);
      let success,;


<<<<<<< HEAD


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const certData: Certification = {;
        name: data && data.name,;
        issuing_organization: data && data.issuing_organization,;
        issue_date: data && data.issue_date || undefined,;
        expiration_date: data && data.expiration_date || undefined,;
        credential_id: data && data.credential_id,;
        credential_url: data && data.credential_url},;


<<<<<<< HEAD


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (editingId) {;
        success = await updateCertification(editingId, certData);
      } else {;
        success = await addCertification(resumeId, certData);
      }


<<<<<<< HEAD


      if (success) {;
        form && form.reset({;'
          name: '',;'
          issuing_organization: '',;'
          issue_date: '',;'
          expiration_date: '',;'
          credential_id: '',;'
          credential_url: ''}),;
        setEditingId(null);
      }
    } catch (err: any) {;'
=======
      if (success) {;
        form && form.reset({;
          name: '',;
          issuing_organization: '',;
          issue_date: '',;
          expiration_date: '',;
          credential_id: '',;
          credential_url: ''}),;
        setEditingId(null);
      }
    } catch (err: any) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setError(err && err.message || 'An error occurred');
    }
  };


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },;

  const handleEdit = (cert: Certification) => {;
    setEditingId(cert && cert.id!);
    form && form.reset({;
      ...cert,;
      issue_date: formatDateValue(cert && cert.issue_date),;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      expiration_date: formatDateValue(cert && cert.expiration_date)});
  };


  const handleDelete = async (id: string) => {;'
    if (confirm('Are you sure you want to delete this certification?')) {;
      await deleteCertification(id);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      expiration_date: formatDateValue(cert && cert.expiration_date)});
  };

  const handleDelete = async (id: string) => {;
    if (confirm('Are you sure you want to delete this certification?')) {;
      await deleteCertification(id);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
  },




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      expiration_date: formatDateValue(cert && cert.expiration_date)})
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      expiration_date: formatDateValue(cert && cert.expiration_date)})
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (

    }
  }
  };
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




  return (

  }
  return (

import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { Button } from '@/components/ui/button',;
import { Form } from '@/components/ui/form',;
import { Certification } from '@/types/resume',;
import { Loader2 } from 'lucide-react',;
import { useResume } from '@/hooks/useResume',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { format } from 'date-fns',;
;
import { CertificationsList } from './CertificationsList',;
import { CertificationFormFields } from './CertificationFormFields',;
import { CertificationFormValues, certificationSchema } from './types',;
;
interface CertificationsFormProps {;
  resumeId:string,;
  certifications:Certification[],;
  onComplete:() => void,;
  onBack:() => void;
}
;
export function CertificationsForm({ resumeId, certifications, onComplete, onBack } CertificationsFormProps) {;
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
;
  // Helper function to format dates as strings for form inputs;
  const formatDateValue = (dateValue:string | Date | undefined):string => {;
    if (!dateValue) return '',;
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd'),;
  },;
;
  const form = useForm<CertificationFormValues>({;
    resolver:zodResolver(certificationSchema),;
    defaultValues:{;
      name:'',;
      issuing_organization:'',;
      issue_date:'',;
      expiration_date:'',;
      credential_id:'',;
      credential_url:''}}),;
;
  const handleAddOrUpdate = async (data:CertificationFormValues) => {;
    try {;
      setError(null),;
      let success,;
;
      const certData:Certification = {;
        name:data.name,;
        issuing_organization:data.issuing_organization,;
        issue_date:data.issue_date || undefined,;
        expiration_date:data.expiration_date || undefined,;
        credential_id:data.credential_id,;
        credential_url:data.credential_url},;
;
      if (editingId) {;
        success = await updateCertification(editingId, certData),;
      } else {;
        success = await addCertification(resumeId, certData),;
      } else {
        success = await add_certification (resume_id, cert_data);
      }
    }
  },;
;
  const handleEdit = (cert:Certification) => {;
    setEditingId(cert.id!),;
    form.reset({;
      ...cert,;
      issue_date:formatDateValue(cert.issue_date),;
      expiration_date:formatDateValue(cert.expiration_date)}),;
  },;
;
  const handleDelete = async (id:string) => {;
    if (confirm('Are you sure you want to delete this certification?')) {;
      await deleteCertification(id);
    }
  },;
;
  return (;
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>;
        <p className="text-muted-foreground">;
          Add any professional certifications, licenses, or credentials you have earned.;
        </p>;
      </div>;
=======

      }
    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>;

        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <CertificationFormFields form={form} />;

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">;

  }
  return (
              <Button
                type="button"
=======
  }
  return (

              <Button;
                type="button""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                variant="outline"
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                    form && form.reset({;'
                      name: '',;'
                      issuing_organization: '',;'
                      issue_date: '',;'
                      expiration_date: '',;'
                      credential_id: '',;'
=======

                    form && form.reset({;
                      name: '',;
                      issuing_organization: '',;
                      issue_date: '',;
                      expiration_date: '',;
                      credential_id: '',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      credential_url: ''});
                  } else {;
                    onBack();

<<<<<<< HEAD


                  }
                }}
              >;'
                {editingId ? 'Cancel' : 'Back'}

<<<<<<< HEAD
=======
  },

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
                    setEditingId(null),
                    form.reset({
                      name: ''
                      issuing_organization: ''
                      issue_date: ''
                      expiration_date: ''
                      credential_id: ''

                      credential_url: ''})
                  } else {
                    onBack()
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>
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
  )
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  }
                }}
              >;
                {editingId ? 'Cancel' : 'Back'}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </Button>;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
<<<<<<< HEAD
=======
              </Button>;"
              <div className="flex gap-2">;"
                <Button type="submit" disabled={isLoading}>;"
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  {editingId ? 'Update' : 'Add'} Certification;
                </Button>;"
                <Button type="button" onClick={onComplete}>;
      // Check condition;
if ( {) {}
  $2;
}
        form.reset ({'
          name: '','
          issuing_organization: '','
          issue_date: '','
          expiration_date: '','
          credential_id: '','
          credential_url: ''}),
        setEditingId (null);
      }
    } catch (err: any) {'
=======
                  {editingId ? 'Update' : 'Add'} Certification;
                </Button>;
                <Button type="button" onClick={onComplete}>;
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
          credential_url: ''}),
        setEditingId (null);
      }
    } catch (err: any) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      set_error (err.message || 'An error occurred');
    }
  }
;
<<<<<<< HEAD
  const handle_edit = (cert: Certification) =>: any {}
    setEditingId (cert.id!);
    form.reset ({}
=======
  const handle_edit = (cert: Certification) =>: any {
    setEditingId (cert.id!);
    form.reset ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ...cert,
      issue_date: formatDateValue (cert.issue_date),
      expiration_date: formatDateValue (cert.expiration_date)});
  }
;
<<<<<<< HEAD
  const handle_delete = async (id: string) => {}
    if () {) {}
  $2;
=======
  const handle_delete = async (id: string) => {
    if () {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      await delete_certification (id);
    }
  }
;
<<<<<<< HEAD
  return ("
    <div className="space - y-6">;
      <div>;"
        <h2 className="text - xl font - semibold mb - 2">Certifications & Licenses</h2>;"
=======
  return (
    <div className="space - y-6">;
      <div>;
        <h2 className="text - xl font - semibold mb - 2">Certifications & Licenses</h2>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <p className="text - muted - foreground">;
          Add any professional certifications, licenses, or credentials you have earned.;
        </p>;
      </div>;
      {certifications.length > 0 && (
        <CertificationsList;
          certifications={certifications}
          on_edit={handle_edit}
          on_delete={handle_delete}
<<<<<<< HEAD
        />)}"
      <div className="bg - muted / 40 p - 6 rounded - lg">;"
        <h3 className="text - md font - medium mb - 4">;'
          {editing_id ? 'Update Certification' : 'Add Certification'}
        </h3>;
        <Form {...form}>;"
          <form on_submit={form.handle_submit (handleAddOrUpdate)} className="space - y-4">;
            <CertificationFormFields form={form} />;"
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}"
            <div className="flex justify - between pt - 2">;
              <Button;"
                type="button";"
                variant="outline";
                on_click={() => {}
                  // Check condition;
if ( {) {}
  $2;
}
                    setEditingId (null);
                    form.reset ({'
                      name: '','
                      issuing_organization: '','
                      issue_date: '','
                      expiration_date: '','
                      credential_id: '','
                      credential_url: ''});
                  } else {}
                    on_back ();
                  }
                }}
              >;'
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;"
              <div className="flex gap - 2">;"
                <Button type="submit" disabled={is_loading}>;"
                  {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}'
                  {editing_id ? 'Update' : 'Add'} Certification;
                </Button>;"
=======
        />)}
      <div className="bg - muted / 40 p - 6 rounded - lg">;
        <h3 className="text - md font - medium mb - 4">;
          {editing_id ? 'Update Certification' : 'Add Certification'}
        </h3>;
        <Form {...form}>;
          <form on_submit={form.handle_submit (handleAddOrUpdate)} className="space - y-4">;
            <CertificationFormFields form={form} />;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
            <div className="flex justify - between pt - 2">;
              <Button;
                type="button";
                variant="outline";
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
                      credential_url: ''});
                  } else {
                    on_back ();
                  }
                }}
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
              <div className="flex gap - 2">;
                <Button type="submit" disabled={is_loading}>;
                  {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
                  {editing_id ? 'Update' : 'Add'} Certification;
                </Button>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Button type="button" on_click={on_complete}>;
;
      {certifications.length > 0 && (;
        <CertificationsList ;
          certifications={certifications} ;
          onEdit={handleEdit} ;
          onDelete={handleDelete} ;
        />;
      )}
<<<<<<< HEAD
;"
      <div className="bg-muted/40 p-6 rounded-lg">;"
        <h3 className="text-md font-medium mb-4">;'
          {editingId ? 'Update Certification' :'Add Certification'}
        </h3>;
;
        <Form {...form}>;"
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <CertificationFormFields form={form} />;
;"
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
;"
            <div className="flex justify-between pt-2">;
              <Button;"
                type="button";"
=======
;
      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Certification' :'Add Certification'}
        </h3>;
;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <CertificationFormFields form={form} />;
;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
;
            <div className="flex justify-between pt-2">;
              <Button;
                type="button";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                variant="outline";
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null),;
<<<<<<< HEAD
                    form.reset({;'
                      name:'',;'
                      issuing_organization:'',;'
                      issue_date:'',;'
                      expiration_date:'',;'
                      credential_id:'',;'
=======
                    form.reset({;
                      name:'',;
                      issuing_organization:'',;
                      issue_date:'',;
                      expiration_date:'',;
                      credential_id:'',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      credential_url:''}),;
                  } else {;
                    onBack(),;
                  }
                }}
<<<<<<< HEAD
              >;'
                {editingId ? 'Cancel' :'Back'}
              </Button>;
;"
              <div className="flex gap-2">;"
                <Button type="submit" disabled={isLoading}>;"
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}'
                  {editingId ? 'Update' :'Add'} Certification;
                </Button>;
;"
=======
              >;
                {editingId ? 'Cancel' :'Back'}
              </Button>;
;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' :'Add'} Certification;
                </Button>;
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Button type="button" onClick={onComplete}>;
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
<<<<<<< HEAD
    </div>;"
  ),; return (<div className="space-y-6" > <div> <h2 className="text-xl font-semibold mb-2" >Certifications & Licenses</h2> <p className="text-muted-foreground" > Add any professional certifications, licenses, or credentials you have earned. </p> </div> {}
  certifications.length > 0 && (<CertificationsList certifications= {}
  certifications;
}onEdit= {}
  handleEdit;
}onDelete= {}
  handleDelete;
}/>) "
}<div className="flex justify-between pt-2" > <Button if (editingId) {}
  setEditingId (null);
form.reset ({}
}



}> {'
=======
    </div>;
  ),; return (<div className="space-y-6" > <div> <h2 className="text-xl font-semibold mb-2" >Certifications & Licenses</h2> <p className="text-muted-foreground" > Add any professional certifications, licenses, or credentials you have earned. </p> </div> {
  certifications.length > 0 && (<CertificationsList certifications= {
  certifications 
}onEdit= {
  handleEdit 
}onDelete= {
  handleDelete 
}/>) 
}<div className="flex justify-between pt-2" > <Button if (editingId) {
  setEditingId (null);
form.reset ({
  
}

}> {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  editingId ? 'Cancel' : 'Back' 
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) 
}
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

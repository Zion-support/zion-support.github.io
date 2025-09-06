<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx


<<<<<<< HEAD
=======

=======

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
import { CertificationFormValues, certificationSchema } from './types';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface CertificationsFormProps {

  resumeId: string
  certifications: Certification[]
  onComplete: () => void

  onBack: () => void
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
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
import {CertificationFormFields} from './CertificationFormFields';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx



export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
import {CertificationFormValues, certification_schema} from './types';
interface CertificationsFormProps {
  resume_id: string,
  certifications: Certification[],
  on_complete: () => void,
  on_back: () => void;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export /**
 * CertificationsForm - Function description
 */
function CertificationsForm() {
  const { add_certification, update_certification, delete_certification, is_loading } = use_resume ();
  const [editing_id, setEditingId] = useState < string | null>(null);
  const [error, set_error] = useState < string | null>(null);
;
  // Helper function to format dates as strings for form inputs;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
<<<<<<< HEAD
=======
}
;
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
  // Helper function to format dates as strings for form inputs;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }


  };



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  };

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id!);
    form.reset({
      ...cert
      issue_date: formatDateValue(cert.issue_date)
      expiration_date: formatDateValue(cert.expiration_date)})
  }
  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id)
<<<<<<< HEAD


========
  const formatDateValue = (date_value: string | Date | undefined): string => {
    // Check condition
if (return '') {
  $2
}
    // Check condition
if (return date_value, ) {
  $2
}
    return format (date_value, 'yyyy - MM - dd');
  }
;
  const form = use_form < CertificationFormValues>({
    resolver: zod_resolver (certification_schema),
    default_values: {
      name: '',
      issuing_organization: '',
      issue_date: '',
      expiration_date: '',
      credential_id: '',
      credential_url: ''}}),
  const handleAddOrUpdate = async (data: CertificationFormValues) => {
    try {
      set_error (null);
      let success,
      const cert_data: Certification = {
        name: data.name,
        issuing_organization: data.issuing_organization,
        issue_date: data.issue_date || undefined,
        expiration_date: data.expiration_date || undefined,
        credential_id: data.credential_id,
        credential_url: data.credential_url},
      // Check condition
if ( {) {
  $2
}
        success = await update_certification (editing_id, cert_data);
      } else {
        success = await add_certification (resume_id, cert_data);
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
  // Helper function to format dates as strings for form inputs;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd');
  };
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
      setError(null);
      let success,;
      const certData: Certification = {;
        name: data && data.name,;
        issuing_organization: data && data.issuing_organization,;
        issue_date: data && data.issue_date || undefined,;
        expiration_date: data && data.expiration_date || undefined,;
        credential_id: data && data.credential_id,;
        credential_url: data && data.credential_url},;
      if (editingId) {;
        success = await updateCertification(editingId, certData);
      } else {;
        success = await addCertification(resumeId, certData);
      }
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
      setError(err && err.message || 'An error occurred');
    }
<<<<<<< HEAD

=======
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx

=======
    }

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  },;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
  const handleEdit = (cert: Certification) => {;
    setEditingId(cert && cert.id!);
    form && form.reset({;
      ...cert,;
      issue_date: formatDateValue(cert && cert.issue_date),;
      expiration_date: formatDateValue(cert && cert.expiration_date)});
  };
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleDelete = async (id: string) => {;
    if (confirm('Are you sure you want to delete this certification?')) {;
      await deleteCertification(id);
    }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx

  },
<<<<<<< HEAD

=======




>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (

========
  }
  return (
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
      }
;
      if (success) {;
        form.reset({;
          name:'',;
          issuing_organization:'',;
          issue_date:'',;
          expiration_date:'',;
          credential_id:'',;
          credential_url:''}),;
        setEditingId(null),;      }
    } catch (err:any) {;
      setError(err.message || 'An error occurred');
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>;
        <p className="text-muted-foreground">;
          Add any professional certifications, licenses, or credentials you have earned.;
        </p>;
      </div>;
<<<<<<< HEAD
      {certifications && certifications.length > 0 && (;
        <CertificationsList
          certifications={certifications} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />;
      )}
      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <CertificationFormFields form={form} />;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
            <div className="flex justify-between pt-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
              <Button
                type="button"
                variant="outline"
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
                    form && form.reset({;
                      name: '',;
                      issuing_organization: '',;
                      issue_date: '',;
                      expiration_date: '',;
                      credential_id: '',;
                      credential_url: ''});
                  } else {;
                    onBack();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
                  }
                }}
              >;
                {editingId ? 'Cancel' : 'Back'}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx

              </Button>;

              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
========
              </Button>;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
                  {editingId ? 'Update' : 'Add'} Certification;
                </Button>;
                <Button type="button" onClick={onComplete}>;
      // Check condition
if ( {) {
  $2
=======


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
      set_error (err.message || 'An error occurred');
    }
  }
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx

========
  const handle_edit = (cert: Certification) =>: any {
    setEditingId (cert.id!);
    form.reset ({
      ...cert,
      issue_date: formatDateValue (cert.issue_date),
      expiration_date: formatDateValue (cert.expiration_date)});
  }
;
  const handle_delete = async (id: string) => {
    if () {) {
  $2
}
      await delete_certification (id);
    }
  }
;
  return (
    <div className="space - y-6">;
      <div>;
        <h2 className="text - xl font - semibold mb - 2">Certifications & Licenses</h2>;
        <p className="text - muted - foreground">;
          Add any professional certifications, licenses, or credentials you have earned.;
        </p>;
      </div>;
      {certifications.length > 0 && (
        <CertificationsList;
          certifications={certifications}
          on_edit={handle_edit}
          on_delete={handle_delete}
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
                <Button type="button" on_click={on_complete}>;
=======
;
      {certifications.length > 0 && (;
        <CertificationsList ;
          certifications={certifications} ;
          onEdit={handleEdit} ;
          onDelete={handleDelete} ;
        />;
      )}
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
                variant="outline";
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null),;
                    form.reset({;
                      name:'',;
                      issuing_organization:'',;
                      issue_date:'',;
                      expiration_date:'',;
                      credential_id:'',;
                      credential_url:''}),;
                  } else {;
                    onBack(),;
                  }
                }}
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
                <Button type="button" onClick={onComplete}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
    </div>);
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}> {
  editingId ? 'Cancel' : 'Back' 
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/certifications/CertificationsForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

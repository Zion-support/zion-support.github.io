<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface CertificationsFormProps {

  resumeId: string
  certifications: Certification[]
  onComplete: () => void

  onBack: () => void
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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



export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;
<<<<<<< HEAD


=======
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
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

import {CertificationFormValues, certification_schema} from './types';
interface CertificationsFormProps {
  resume_id: string,
  certifications: Certification[],
  on_complete: () => void,
  on_back: () => void;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }


  };



<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  };

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Helper function to format dates as strings for form inputs;
  const formatDateValue = (dateValue: string | Date | undefined): string => {;
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue,;
    return format(dateValue, 'yyyy-MM-dd');
  };
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const form = useForm<CertificationFormValues>({;
    resolver: zodResolver(certificationSchema),;
    defaultValues: {;
      name: '',;
      issuing_organization: '',;
      issue_date: '',;
      expiration_date: '',;
      credential_id: '',;
      credential_url: ''}}),;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleAddOrUpdate = async (data: CertificationFormValues) => {;
    try {;
      setError(null);
      let success,;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      const certData: Certification = {;
        name: data && data.name,;
        issuing_organization: data && data.issuing_organization,;
        issue_date: data && data.issue_date || undefined,;
        expiration_date: data && data.expiration_date || undefined,;
        credential_id: data && data.credential_id,;
        credential_url: data && data.credential_url},;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (editingId) {;
        success = await updateCertification(editingId, certData);
      } else {;
        success = await addCertification(resumeId, certData);
      }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  };
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }

  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },;

  const handleEdit = (cert: Certification) => {;
    setEditingId(cert && cert.id!);
    form && form.reset({;
      ...cert,;
      issue_date: formatDateValue(cert && cert.issue_date),;
      expiration_date: formatDateValue(cert && cert.expiration_date)});
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  const handleDelete = async (id: string) => {;
    if (confirm('Are you sure you want to delete this certification?')) {;
      await deleteCertification(id);
    }
  },




<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

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
=======
      } else {
        success = await add_certification (resume_id, cert_data);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      }
    }
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Button
                type="button"
                variant="outline"
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    form && form.reset({;
                      name: '',;
                      issuing_organization: '',;
                      issue_date: '',;
                      expiration_date: '',;
                      credential_id: '',;
                      credential_url: ''});
                  } else {;
                    onBack();
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  }
                }}
              >;
                {editingId ? 'Cancel' : 'Back'}
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </Button>;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
      set_error (err.message || 'An error occurred');
    }
  }
;
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
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
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

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}> {
  editingId ? 'Cancel' : 'Back' 
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) 
}
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

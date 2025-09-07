<<<<<<< HEAD
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

interface CertificationsFormProps {

interface CertificationsFormProps {}
  resumeId: string;
  certifications: Certification[]
  onComplete: () => void;
  onBack: () => void;
}

=======
<<<<<<< HEAD

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Certification } from '@/types/resume';
import { Loader2 } from 'lucide-react';
import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CertificationsList } from './CertificationsList';
import { CertificationFormFields } from './CertificationFormFields';
import { CertificationFormValues, certificationSchema } from './types';
interface CertificationsFormProps {
  resumeId: string,
  certifications: Certification[],
  onComplete: () => void,
  onBack: () => void
}

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume($2);
  const [editingId, setEditingId] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),

  // Helper function to format dates as strings for form inputs
  const formatDateValue = $2;
    if (typeof dateValue = $2;
    return format(dateValue, 'yyyy-MM-dd')
  },

  const form = useForm<CertificationFormValues>({
    resolver: zodResolver($2);
    defaultValues: {
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface CertificationsFormProps {

interface CertificationsFormProps {}
  resumeId: string;
  certifications: Certification[]
  onComplete: () => void;
  onBack: () => void;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD

=======
<<<<<<< HEAD
  // Helper function to format dates as strings for form inputs
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

'
import {CertificationFormValues, certification_schema} from './types';
interface CertificationsFormProps {}

import {CertificationFormValues, certification_schema} from './types';
interface CertificationsFormProps {

  resume_id: string,
  certifications: Certification[],
  on_complete: () => void,
  on_back: () => void;

  const { add_certification, update_certification, delete_certification, is_loading } = use_resume ();
  const [editing_id, setEditingId] = useState < string | null>(null);
  const [error, set_error] = useState < string | null>(null);
;
  // Helper function to format dates as strings for form inputs;

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

      }

  };

}
  };
  };

  const handleEdit = (cert: Certification) => {

    setEditingId(cert.id!);
    form.reset({}
      ...cert;
      issue_date: formatDateValue(cert.issue_date)
      expiration_date: formatDateValue(cert.expiration_date)})
  }
  const handleDelete = async (id: string) => {'
    if (confirm('Are you sure you want to delete this certification?')) {}
      await deleteCertification(id)

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
  // Helper function to format dates as strings for form inputs;

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
  };

    }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

'
import {CertificationFormValues, certification_schema} from './types';
interface CertificationsFormProps {}

import {CertificationFormValues, certification_schema} from './types';
interface CertificationsFormProps {

  resume_id: string,
  certifications: Certification[],
  on_complete: () => void,
  on_back: () => void;

  const { add_certification, update_certification, delete_certification, is_loading } = use_resume ();
  const [editing_id, setEditingId] = useState < string | null>(null);
  const [error, set_error] = useState < string | null>(null);
;
  // Helper function to format dates as strings for form inputs;
<<<<<<< HEAD
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
<<<<<<< HEAD
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

=======

<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

      }

  };

}
  };
  };

<<<<<<< HEAD
  }
  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleEdit = (cert: Certification) => {

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
>>>>>>> merged-prs-20250907-203621
      name: '',
      issuing_organization: '',
      issue_date: '',
      expiration_date: '',
      credential_id: '',
      credential_url: ''}}),
<<<<<<< HEAD

  const handleAddOrUpdate = async (data: CertificationFormValues) => {
    try {
      setError($2);
      let success,

      const certData: Certification = $2;
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
        form.reset($2);
        setEditingId(null)
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    }
  },

  const handleEdit = (cert: Certification) => {
    setEditingId($2);
    form.reset($2);
      expiration_date: formatDateValue(cert.expiration_date)})
  },

  const handleDelete = $2;
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
=======
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
=======

<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Helper function to format dates as strings for form inputs;

    return format(dateValue, 'yyyy-MM-dd');
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleAddOrUpdate = async (data: CertificationFormValues) => {;
    try {;
      setError(null);
      let success,;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const certData: Certification = {;
        name: data && data.name,;
        issuing_organization: data && data.issuing_organization,;
        issue_date: data && data.issue_date || undefined,;
        expiration_date: data && data.expiration_date || undefined,;
        credential_id: data && data.credential_id,;
        credential_url: data && data.credential_url},;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (editingId) {;
        success = await updateCertification(editingId, certData);
      } else {;
        success = await addCertification(resumeId, certData);
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const handleEdit = (cert: Certification) => {;
    setEditingId(cert && cert.id!);
    form && form.reset({;
      ...cert,;
      issue_date: formatDateValue(cert && cert.issue_date),;
<<<<<<< HEAD

    }
  },

  return (

}
=======
<<<<<<< HEAD
=======
      expiration_date: formatDateValue(cert && cert.expiration_date)});
  };
<<<<<<< HEAD
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======



>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      } else {
        success = await add_certification (resume_id, cert_data);
      expiration_date: formatDateValue(cert && cert.expiration_date)})
};
  return (
      }
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    }
  },

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

<<<<<<< HEAD
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
      expiration_date: formatDateValue(cert && cert.expiration_date)})
};
  return (
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>;
        <p className="text-muted-foreground">;
          Add any professional certifications, licenses, or credentials you have earned.;
        </p>;
      </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
                      credential_url: ''});
                  } else {;
                    onBack();

              </Button>;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

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

      set_error (err.message || 'An error occurred');
    }
  }
;

      ...cert,
      issue_date: formatDateValue (cert.issue_date),
      expiration_date: formatDateValue (cert.expiration_date)});
  }
;

}
      await delete_certification (id);
    }
  }
;

        <p className="text - muted - foreground">;
          Add any professional certifications, licenses, or credentials you have earned.;
        </p>;
      </div>;
      {certifications.length > 0 && (
        <CertificationsList;
          certifications={certifications}

          on_edit={handle_edit}
          on_delete={handle_delete}

                <Button type="button" on_click={on_complete}>;
;
      {certifications.length > 0 && (;

        <CertificationsList ;
          certifications={certifications} ;
          onEdit={handleEdit} ;
          onDelete={handleDelete} ;

                variant="outline";
                onClick={() => {;
                  if (editingId) {;
=======
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Button
                type="button"
                variant="outline"
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    form && form.reset({;
                      name: '',;
                      issuing_organization: '',;
                      issue_date: '',;
                      expiration_date: '',;
                      credential_id: '',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      credential_url: ''});
                  } else {;
                    onBack();
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  }
                }}
              >;
                {editingId ? 'Cancel' : 'Back'}
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
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
                    setEditingId($2);
                    form.reset({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
=======
                    setEditingId(null),
                    form.reset({
                      name: ''
                      issuing_organization: ''
                      issue_date: ''
                      expiration_date: ''
                      credential_id: ''

>>>>>>> merged-prs-20250907-203621
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
}
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </Button>;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

                  {editingId ? 'Update' : 'Add'} Certification;
<<<<<<< HEAD
                </Button>;"
                <Button type="button" onClick={onComplete}>;
      // Check condition;
if ( {) {}
  $2;
=======
                </Button>;
                <Button type="button" onClick={onComplete}>;
      // Check condition
if ( {) {
  $2


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

      set_error (err.message || 'An error occurred');
    }
  }
;
<<<<<<< HEAD

=======
  const handle_edit = (cert: Certification) =>: any {
    setEditingId (cert.id!);
    form.reset ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      ...cert,
      issue_date: formatDateValue (cert.issue_date),
      expiration_date: formatDateValue (cert.expiration_date)});
  }
;
<<<<<<< HEAD

=======
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
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
      await delete_certification (id);
    }
  }
;

<<<<<<< HEAD
        <p className="text - muted - foreground">;
          Add any professional certifications, licenses, or credentials you have earned.;
        </p>;
      </div>;
      {certifications.length > 0 && (
        <CertificationsList;
          certifications={certifications}

          on_edit={handle_edit}
          on_delete={handle_delete}

                <Button type="button" on_click={on_complete}>;
;
      {certifications.length > 0 && (;

        <CertificationsList ;
          certifications={certifications} ;
          onEdit={handleEdit} ;
          onDelete={handleDelete} ;

                variant="outline";
                onClick={() => {;
                  if (editingId) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    setEditingId(null),;

                      credential_url:''}),;
                  } else {;
                    onBack(),;
                  }
                }}

                <Button type="button" onClick={onComplete}>;
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;

  certifications.length > 0 && (<CertificationsList certifications= {
  certifications;
}onEdit= {
  handleEdit;
}onDelete= {
  handleDelete;)
}/>) 
}<div className="flex justify-between pt-2" > <Button if (editingId) {"
} Next  </div> </div> </form>  </div> </div>) "
pr-12325
</div>
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) "

}> {

  editingId ? 'Cancel' : 'Back' 
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) 
}
}
}
<<<<<<< HEAD
;
=======
;
=======
<<<<<<< HEAD
}> {
  editingId ? 'Cancel' : 'Back' 
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) 
}
}
}
;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Certification  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';
export function useCertifications() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add certifications')
      return false
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Certification } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useCertifications() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to add certifications'),;
      return false;
    try {
      const { error } = await supabase
        .from('certifications')
        .insert({
      return showSuccessToast("Certification added", "Your certification has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add certification')
    } finally {
      setIsLoading(false)
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('certifications');
        .insert({;
          resume_id: resumeId,;
          name: cert.name,;
          issuing_organization: cert.issuing_organization,;
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,;
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,;
          credential_id: cert.credential_id,;
          credential_url: cert.credential_url;
        }),;
      if (error) throw error,;
      return showSuccessToast("Certification added", "Your certification has been added to your resume");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not add certification');
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateCertification = async (certId: string, cert: Certification): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update certifications'),;
      return false;
    try {
      const { error } = await supabase
        .from('certifications')
        .update({
      return showSuccessToast("Certification updated", "Your certification has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update certification')
    } finally {
      setIsLoading(false)
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('certifications');
        .update({;
          name: cert.name,;
          issuing_organization: cert.issuing_organization,;
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,;
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,;
          credential_id: cert.credential_id,;
          credential_url: cert.credential_url;
        });
        .eq('id', certId),;
      if (error) throw error,;
      return showSuccessToast("Certification updated", "Your certification has been updated");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not update certification');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteCertification = async (certId: string): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete certifications'),;
      return false;
    try {
      const { error } = await supabase
        .from('certifications')
        .delete()
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete certification')
    } finally {
      setIsLoading(false)
  }
}
;
    try {
      const { error } = await supabase;
        .from ('certifications');
        .insert ({
          resume_id: resume_id;
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB (cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB (cert.expiration_date) : null;
          credential_id: cert.credential_id,
          credential_url: cert.credential_url;
        });
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Certification added", "Your certification has been added to your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not add certification');
    } finally {
      setIsLoading (false);
    }
  }
;
  const update_certification = async (cert_id: string, cert: Certification): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to update certifications'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('certifications');
        .update ({
          name: cert.name;
          issuing_organization: cert.issuing_organization;
          issue_date: cert.issue_date ? formatDateForDB (cert.issue_date) : null;
          expiration_date: cert.expiration_date ? formatDateForDB (cert.expiration_date) : null;
          credential_id: cert.credential_id,
          credential_url: cert.credential_url;
        });
        .eq ('id', cert_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Certification updated", "Your certification has been updated");
    } catch (e: any) {
      return handleResumeError (e, 'Could not update certification');
    } finally {
      setIsLoading (false);
    }
  }
;
  const delete_certification = async (cert_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete certifications'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('certifications');
        .delete ();
        .eq ('id', cert_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Certification deleted", "Your certification has been removed from your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not delete certification');
    } finally {
      setIsLoading (false);
    }
  }
;
  return {
    is_loading;
    error;
    add_certification;
    update_certification;
    delete_certification;

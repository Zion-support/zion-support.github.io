
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { Certification } from '@/types/resume',
import { useAuth } from '@/hooks/useAuth',
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',

export function useCertifications() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add certifications'),
      return false
    }
=======

export function useCertifications() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to add certifications');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('certifications')
<<<<<<< HEAD
        .insert({
          resume_id: resumeId,
          name: cert.name,
          issuing_organization: cert.issuing_organization,
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,
          credential_id: cert.credential_id,
          credential_url: cert.credential_url
        }),
=======
        .insert({_resume_id: resumeId, _name: cert.name, _issuing_organization: cert.issuing_organization, _issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null, _expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null, _credential_id: cert.credential_id, _credential_url: cert.credential_url});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Certification added", "Your certification has been added to your resume")
=======
      return showSuccessToast(&quot;Certification added&quot;, &quot;Your certification has been added to your resume&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not add certification')
    } finally {
      setIsLoading(false)
    }
  },
  
  const updateCertification = async (certId: string, cert: Certification): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update certifications'),
      return false
    }
=======
      return showSuccessToast("Certification added", "Your certification has been added to your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not add certification');} finally {_setIsLoading(false);}
  };
  
  const _updateCertification = async (certId: string, cert: Certification): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update certifications');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('certifications')
<<<<<<< HEAD
        .update({
          name: cert.name,
          issuing_organization: cert.issuing_organization,
          issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null,
          expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null,
          credential_id: cert.credential_id,
          credential_url: cert.credential_url
        })
        .eq('id', certId),
=======
        .update({_name: cert.name, _issuing_organization: cert.issuing_organization, _issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null, _expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null, _credential_id: cert.credential_id, _credential_url: cert.credential_url})
        .eq('id', certId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Certification updated", "Your certification has been updated")
=======
      return showSuccessToast(&quot;Certification updated&quot;, &quot;Your certification has been updated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not update certification')
    } finally {
      setIsLoading(false)
    }
  },
  
  const deleteCertification = async (certId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete certifications'),
      return false
    }
=======
      return showSuccessToast("Certification updated", "Your certification has been updated");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not update certification');} finally {_setIsLoading(false);}
  };
  
  const _deleteCertification = async (certId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete certifications');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('certifications')
        .delete()
        .eq('id', certId),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume")
=======
      return showSuccessToast(&quot;Certification deleted&quot;, &quot;Your certification has been removed from your resume&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete certification')
    } finally {
      setIsLoading(false)
    }
  },

  return {
    isLoading,
    error,
    addCertification,
    updateCertification,
    deleteCertification
  }
=======
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not delete certification');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _addCertification, _updateCertification, _deleteCertification};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

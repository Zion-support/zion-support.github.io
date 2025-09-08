export function useCertifications() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
      return false    try {
      const { error } = await supabase
        .from('certifications')
        .insert({;
    setIsLoading(true),;
    setError(null),;
    try {;
    }
    
    setIsLoading(true),
    setError(null),
          return showSuccessToast("Certification updated", "Your certification has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update certification')
    } finally {
      setIsLoading(false)    try {
      const { error } = await supabase
        .from('certifications')
        .delete()import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Certification} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';

import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * use_certifications - Function description;
 */
function use_certifications() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);

;
  const add_certification = async (resume_id: string, cert: Certification): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}
      set_error ('You must be logged in to add certifications'),
      return false;
    }
  },;
  return {;
    isLoading,;
    error,;
    addCertification;
    updateCertification;
    deleteCertification;
  }
}  }
}
    setIsLoading (true);
    set_error (null);
;

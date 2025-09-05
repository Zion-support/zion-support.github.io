
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { Education } from '@/types/resume',
import { useAuth } from '@/hooks/useAuth',
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',

export function useEducation() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const addEducation = async (resumeId: string, education: Education): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add education'),
      return false
    }
=======

export function useEducation() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _addEducation = async (resumeId: string, education: Education): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to add education');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('education')
<<<<<<< HEAD
        .insert({
          resume_id: resumeId,
          institution: education.institution,
          degree: education.degree,
          field_of_study: education.field_of_study,
          start_date: formatDateForDB(education.start_date),
          end_date: education.is_current ? null : formatDateForDB(education.end_date),
          is_current: education.is_current,
          description: education.description,
          institution_logo_url: education.institution_logo_url,
          location: education.location
        }),
=======
        .insert({_resume_id: resumeId, _institution: education.institution, _degree: education.degree, _field_of_study: education.field_of_study, _start_date: formatDateForDB(education.start_date), _end_date: education.is_current ? null : formatDateForDB(education.end_date), _is_current: education.is_current, _description: education.description, _institution_logo_url: education.institution_logo_url, _location: education.location});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Education added", "Your education has been added to your resume")
=======
      return showSuccessToast(&quot;Education added&quot;, &quot;Your education has been added to your resume&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not add education')
    } finally {
      setIsLoading(false)
    }
  },
  
  const updateEducation = async (eduId: string, education: Education): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update education'),
      return false
    }
=======
      return showSuccessToast("Education added", "Your education has been added to your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not add education');} finally {_setIsLoading(false);}
  };
  
  const _updateEducation = async (eduId: string, education: Education): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update education');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('education')
<<<<<<< HEAD
        .update({
          institution: education.institution,
          degree: education.degree,
          field_of_study: education.field_of_study,
          start_date: formatDateForDB(education.start_date),
          end_date: education.is_current ? null : formatDateForDB(education.end_date),
          is_current: education.is_current,
          description: education.description,
          institution_logo_url: education.institution_logo_url,
          location: education.location
        })
        .eq('id', eduId),
=======
        .update({_institution: education.institution, _degree: education.degree, _field_of_study: education.field_of_study, _start_date: formatDateForDB(education.start_date), _end_date: education.is_current ? null : formatDateForDB(education.end_date), _is_current: education.is_current, _description: education.description, _institution_logo_url: education.institution_logo_url, _location: education.location})
        .eq('id', eduId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Education updated", "Your education has been updated")
=======
      return showSuccessToast(&quot;Education updated&quot;, &quot;Your education has been updated&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not update education')
    } finally {
      setIsLoading(false)
    }
  },
  
  const deleteEducation = async (eduId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete education'),
      return false
    }
=======
      return showSuccessToast("Education updated", "Your education has been updated");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not update education');} finally {_setIsLoading(false);}
  };
  
  const _deleteEducation = async (eduId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete education');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('education')
        .delete()
        .eq('id', eduId),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Education deleted", "Your education has been removed from your resume")
=======
      return showSuccessToast(&quot;Education deleted&quot;, &quot;Your education has been removed from your resume&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete education')
    } finally {
      setIsLoading(false)
    }
  },

  return {
    isLoading,
    error,
    addEducation,
    updateEducation,
    deleteEducation
  }
=======
      return showSuccessToast("Education deleted", "Your education has been removed from your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not delete education');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _addEducation, _updateEducation, _deleteEducation};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

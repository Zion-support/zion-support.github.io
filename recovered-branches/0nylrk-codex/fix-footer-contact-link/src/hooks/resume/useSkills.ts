
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { Skill } from '@/types/resume',
import { useAuth } from '@/hooks/useAuth',
import { handleResumeError, showSuccessToast } from './useResumeUtils',

export function useSkills() {
  const { user } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills'),
      return false
    }
=======

export function useSkills() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to add skills');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('resume_skills')
<<<<<<< HEAD
        .insert({
          resume_id: resumeId,
          name: skill.name,
          proficiency: skill.proficiency,
          category: skill.category,
          years_experience: skill.years_experience
        }),
=======
        .insert({_resume_id: resumeId, _name: skill.name, _proficiency: skill.proficiency, _category: skill.category, _years_experience: skill.years_experience});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Skill added", "Your skill has been added to your resume")
=======
      return showSuccessToast(&quot;Skill added&quot;, &quot;Your skill has been added to your resume&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not add skill')
    } finally {
      setIsLoading(false)
    }
  },
  
  const deleteSkill = async (skillId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete skills'),
      return false
    }
=======
      return showSuccessToast("Skill added", "Your skill has been added to your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not add skill');} finally {_setIsLoading(false);}
  };
  
  const _deleteSkill = async (skillId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete skills');
      return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    setError(null),
    
    try {_const { error} = await supabase
        .from('resume_skills')
        .delete()
        .eq('id', skillId),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")
=======
      return showSuccessToast(&quot;Skill deleted&quot;, &quot;Your skill has been removed from your resume&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete skill')
    } finally {
      setIsLoading(false)
    }
  },

  return {
    isLoading,
    error,
    addSkill,
    deleteSkill
  }
=======
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not delete skill');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _addSkill, _deleteSkill};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}


<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Skill  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { handleResumeError, showSuccessToast } from './useResumeUtils';
export function useSkills() {
=======
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Skill} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {handleResumeError, showSuccessToast} from './useResumeUtils';
export function useSkills() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills')
      return false
<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Skill } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useSkills() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to add skills'),;
      return false;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    
    setIsLoading(true),
    setError(null),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert({
<<<<<<< HEAD
          resume_id: resumeId;
          name: skill.name;
          proficiency: skill.proficiency;
          category: skill.category
          years_experience: skill.years_experience
        });
      if (error) throw error;
=======
          resume_id: resumeId,
          name: skill.name,
          proficiency: skill.proficiency,
          category: skill.category,
          years_experience: skill.years_experience
        }),
      
      if (error) throw error,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return showSuccessToast("Skill added", "Your skill has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add skill')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
    }
  }
  const deleteSkill = async (skillId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete skills')
      return false
<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('resume_skills');
        .insert({;
          resume_id: resumeId,;
          name: skill.name,;
          proficiency: skill.proficiency,;
          category: skill.category,;
          years_experience: skill.years_experience;
        }),;
      if (error) throw error,;
      return showSuccessToast("Skill added", "Your skill has been added to your resume");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not add skill');
    } finally {;
      setIsLoading(false);
    }
  },;
  const deleteSkill = async (skillId: string): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete skills'),;
      return false;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    
    setIsLoading(true),
    setError(null),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    try {
      const { error } = await supabase
        .from('resume_skills')
        .delete()
<<<<<<< HEAD
        .eq('id', skillId);
      if (error) throw error;
=======
        .eq('id', skillId),
      
      if (error) throw error,
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete skill')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
    }
  }
  return {
    isLoading;
    error;
    addSkill;

    deleteSkill
<<<<<<< HEAD
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;
        .from('resume_skills');
        .delete();
        .eq('id', skillId),;
      if (error) throw error,;
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume");
    } catch (e: any) {;
      return handleResumeError(e, 'Could not delete skill');
    } finally {;
      setIsLoading(false);
    }
  },;
  return {;
    isLoading,;
    error;
    addSkill;
    deleteSkill;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

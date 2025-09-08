import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Skill  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD




=======
export function useSkills() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills')
export function useSkills() {
  const { user } = useAuth($2);
  const [isLoading, setIsLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
    }
    
    setIsLoading($2);
    setError($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Skill} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {handleResumeError, showSuccessToast} from './useResumeUtils';
export function useSkills() {;

<<<<<<< HEAD


  const { user } = useAuth();


  const [error, setError] = useState<string | null>(null);
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills')
      return false



=======
  const { user } = useAuth();

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Skill } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;

import { handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useSkills() { return null; }

  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {;
<<<<<<< HEAD

    if (!user) {;
      setError('You must be logged in to add skills'),;
      return false;



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    


    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert({



          name: skill && skill.name;
          proficiency: skill && skill.proficiency;
          category: skill && skill.category,
          years_experience: skill && skill.years_experience


        });
      if (error) throw error;


      return showSuccessToast("Skill added", "Your skill has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add skill')
    } finally {
      setIsLoading(false)


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      return showSuccessToast('Skill added', 'Your skill has been added to your resume');
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    
    setIsLoading(true),
    setError(null),

<<<<<<< HEAD

    }
    




=======

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Skill } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;
import { handleResumeError, showSuccessToast } from './useResumeUtils',;
;
export function useSkills() {;
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const addSkill = async (resumeId:string, skill:Skill):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to add skills'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('resume_skills');
        .insert({;
          resume_id:resumeId,;
          name:skill.name,;
          proficiency:skill.proficiency,;
          category:skill.category,;
          years_experience:skill.years_experience;
        }),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Skill added", "Your skill has been added to your resume"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not add skill'),;
    } finally {;
      setIsLoading(false),;    }
  },;
  ;
  const deleteSkill = async (skillId:string):Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to delete skills'),;
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      const { error } = await supabase;
        .from('resume_skills');
        .delete();
        .eq('id', skillId),;
      ;
      if (error) throw error,;
      ;
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume"),;
    } catch (e:any) {;
      return handleResumeError(e, 'Could not delete skill'),;
    } finally {;
      setIsLoading(false),;
    }


>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {
      const { error } = await supabase
        .from('resume_skills')
        .delete()
<<<<<<< HEAD


=======
        .eq($2);
      if (error) throw error,
      
      return showSuccessToast('Skill deleted', 'Your skill has been removed from your resume')
        .eq('id', skillId),
      
      if (error) throw error,
      
        .eq('id', skillId),
      
      if (error) throw error,
>>>>>>> origin/cursor/delete-old-data-records-6bba

      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")

    } catch (e: any) {
      return handleResumeError(e, 'Could not delete skill')
    } finally {
      setIsLoading(false)

<<<<<<< HEAD






  },;
  return {;
    isLoading,;
    error;
    addSkill;
    deleteSkill;



  }
}

;

        .from ('resume_skills');
        .insert ({}

          resume_id: resume_id;
          name: skill.name;
          proficiency: skill.proficiency;
          category: skill.category,
          years_experience: skill.years_experience;
        });
;

      setIsLoading (false);
    }
  }
;

      set_error ('You must be logged in to delete skills'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;

      setIsLoading (false);
    }
  }
;

    is_loading;
    error;
    add_skill;
    delete_skill;


=======
    }
  },

  return {
    isLoading;
    error;
    addSkill;
    deleteSkill;

  }
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba

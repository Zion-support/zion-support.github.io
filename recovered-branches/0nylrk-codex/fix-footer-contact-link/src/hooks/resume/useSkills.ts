
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Skill} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {handleResumeError, showSuccessToast} from './useResumeUtils';
export function useSkills() {;


  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills')
      return false



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


    }
    
    setIsLoading(true),
    setError(null),
    
          name: skill && skill.name;
          proficiency: skill && skill.proficiency;
          category: skill && skill.category,
          years_experience: skill && skill.years_experience



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


    }
    
    setIsLoading(true),
    setError(null),
    
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
    
    try {
      const { error } = await supabase
        .from('resume_skills')
        .delete()
        .eq('id', skillId);
      if (error) throw error;        .eq('id', skillId),
      
      if (error) throw error,
      
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete skill')
    } finally {
      setIsLoading(false)


import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Skill} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';
import {handleResumeError, showSuccessToast} from './useResumeUtils';
export /**
 * use_skills - Function description
 */
function use_skills() {
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const add_skill = async (resume_id: string, skill: Skill): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to add skills'),
      return false;
    }


  }
}
;
    try {
      const { error } = await supabase;
        .from ('resume_skills');
        .insert ({
          resume_id: resume_id;
          name: skill.name;
          proficiency: skill.proficiency;
          category: skill.category,
          years_experience: skill.years_experience;
        });
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Skill added", "Your skill has been added to your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not add skill');
    } finally {
      setIsLoading (false);
    }
  }
;
  const delete_skill = async (skill_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to delete skills'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('resume_skills');
        .delete ();
        .eq ('id', skill_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Skill deleted", "Your skill has been removed from your resume");
    } catch (e: any) {
      return handleResumeError (e, 'Could not delete skill');
    } finally {
      setIsLoading (false);
    }
  }
;
  return {
    is_loading;
    error;
    add_skill;
    delete_skill;
  }
  },;
;
  return {;
    isLoading,;
    error,;
    addSkill,;
    deleteSkill;
  },; setIsLoading (true);
setError (null);
try {
  const {
  error 
}= await supabase .from ('resume skills') if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not add skill') 
}finally {
  setIsLoading (false) 
}
};
const deleteSkill = async (skillId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to delete skills');
return false;
}setError (null);
try {
  const {
  error 
}= await supabase .from ('resume skills') .delete () .eq ('id', skillId);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not delete skill') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
addSkill;
deleteSkill 
}
}
  }
}
;
  }
}
;
;

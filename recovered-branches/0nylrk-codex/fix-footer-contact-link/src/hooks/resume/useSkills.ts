<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Skill  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
<<<<<<< HEAD
export function useSkills() {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Skill} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {handleResumeError, showSuccessToast} from './useResumeUtils';
export function useSkills() {;
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth();
=======
export function useSkills() {  const { user } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function useSkills() {  const { user } = useAuth();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills')
<<<<<<< HEAD
<<<<<<< HEAD
      return false
<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
    }
    setIsLoading(true);
    setError(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }

    setIsLoading(true),
    setError(null),
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert({
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          name: skill && skill.name;
          proficiency: skill && skill.proficiency;
          category: skill && skill.category,
          years_experience: skill && skill.years_experience

<<<<<<< HEAD
        });
      if (error) throw error;
=======

=======

          resume_id: resumeId;
          name: skill.name;
          proficiency: skill.proficiency;
          category: skill.category
          years_experience: skill.years_experience
        });
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          resume_id: resumeId,
          name: skill.name,
          proficiency: skill.proficiency,
          category: skill.category,
          years_experience: skill.years_experience
        }),
      
      if (error) throw error,
      
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return showSuccessToast("Skill added", "Your skill has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add skill')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  }
  const deleteSkill = async (skillId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete skills')
      return false
    }
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
      return false    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return false    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD
    
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    try {
      const { error } = await supabase
        .from('resume_skills')
        .delete()
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
        .eq('id', skillId);
      if (error) throw error;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        .eq('id', skillId),
      
      if (error) throw error,
      
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")
=======
          return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete skill')
    } finally {
      setIsLoading(false)import {useState} from 'react';
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  const add_skill = async (resume_id: string, skill: Skill): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
      set_error ('You must be logged in to add skills'),
      return false;
    }

=======
    }
  }
  return {
    isLoading;
    error;
    addSkill;

    deleteSkill
  }
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },;
  return {;
    isLoading,;
    error;
    addSkill;
    deleteSkill;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
<<<<<<< HEAD
}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
    setIsLoading (true);
    set_error (null);
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

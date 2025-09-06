<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useSkills.ts


<<<<<<< HEAD
=======

import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Skill  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { handleResumeError, showSuccessToast } from './useResumeUtils';
export function useSkills() {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Skill} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {handleResumeError, showSuccessToast} from './useResumeUtils';
export function useSkills() {;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills')
      return false
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    }
    setIsLoading(true);
    setError(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    }
    setIsLoading(true);
    setError(null);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
          name: skill && skill.name;
          proficiency: skill && skill.proficiency;
          category: skill && skill.category,
          years_experience: skill && skill.years_experience

========
<<<<<<< HEAD
name: skill && skill.name;
          proficiency: skill && skill.proficiency;
          category: skill && skill.category,
          years_experience: skill && skill.years_experience
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useSkills.ts
        });
      if (error) throw error;
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          resume_id: resumeId;
          name: skill.name;
          proficiency: skill.proficiency;
          category: skill.category
          years_experience: skill.years_experience
        });
      if (error) throw error;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          resume_id: resumeId,
          name: skill.name,
          proficiency: skill.proficiency,
          category: skill.category,
          years_experience: skill.years_experience
        }),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return showSuccessToast("Skill added", "Your skill has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add skill')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useSkills.ts

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
    setIsLoading(true);
    setError(null);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useSkills.ts
=======
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const { error } = await supabase
        .from('resume_skills')
        .delete()
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
        .eq('id', skillId);
      if (error) throw error;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        .eq('id', skillId);
      if (error) throw error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .eq('id', skillId),
      
      if (error) throw error,
      
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete skill')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useSkills.ts

<<<<<<< HEAD
=======



=======
========
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
  }
  return {
    isLoading;
    error;
    addSkill;
<<<<<<< HEAD
    deleteSkill
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useSkills.ts
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
  const add_skill = async (resume_id: string, skill: Skill): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
}
      set_error ('You must be logged in to add skills'),
      return false;
    }

=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  return {;
    isLoading,;
    error;
    addSkill;
    deleteSkill;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD

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
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useSkills.ts
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useSkills.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

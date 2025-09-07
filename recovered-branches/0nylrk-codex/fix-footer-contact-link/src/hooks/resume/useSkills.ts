import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Skill  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { handleResumeError, showSuccessToast } from './useResumeUtils';
<<<<<<< HEAD
export function useSkills() {  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
    }
    
    setIsLoading($2);
    setError($2);
=======
=======
<<<<<<< HEAD
=======
=======
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Skill  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { handleResumeError, showSuccessToast } from './useResumeUtils';
export function useSkills() {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Skill} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {handleResumeError, showSuccessToast} from './useResumeUtils';
export function useSkills() {;
<<<<<<< HEAD

  const { user } = useAuth();

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

>>>>>>> origin/chore/fix-lint-and-merge
    }

    setIsLoading(true),
    setError(null),
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user } = useAuth();

<<<<<<< HEAD
=======
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> origin/chore/fix-lint-and-merge
=======
    if (!user) {;
      setError('You must be logged in to add skills'),;
      return false;


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert($2);
      if (error) throw error,
      
      return showSuccessToast('Skill added', 'Your skill has been added to your resume')
    } catch (e: any) {
      return handleResumeError(e, 'Could not add skill')
    } finally {
      setIsLoading(false)
      return false    try {
      const { error } = await supabase
        .from('resume_skills')
<<<<<<< HEAD
        .insert({;
=======
        .insert({}
          name: skill && skill.name;
          proficiency: skill && skill.proficiency;
          category: skill && skill.category,
          years_experience: skill && skill.years_experience;
          resume_id: resumeId,
          name: skill.name,
          proficiency: skill.proficiency,
          category: skill.category,
          years_experience: skill.years_experience;
        }),
      
      if (error) throw error,

      return showSuccessToast("Skill added", "Your skill has been added to your resume")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not add skill')
    } finally {}
      setIsLoading(false)

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
=======


<<<<<<< HEAD
    }
  }
  const deleteSkill = async (skillId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to delete skills')
      return false
    }
    setIsLoading(true);
    setError(null);
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;

>>>>>>> origin/resolved-merge-conflicts
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

    }
    
    setIsLoading(true),
    setError(null),
<<<<<<< HEAD
    }
  },
  
  const deleteSkill = async (skillId: string): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
    }
    
    setIsLoading($2);
    setError($2);
=======

<<<<<<< HEAD
    }
    
    setIsLoading(true),
    setError(null),
=======
>>>>>>> merged-prs-20250907-203621
    }
    
<<<<<<< HEAD
    setIsLoading(true),
    setError(null),
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    try {
      const { error } = await supabase
        .from('resume_skills')
        .delete()
<<<<<<< HEAD
        .eq($2);
      if (error) throw error,
      
      return showSuccessToast('Skill deleted', 'Your skill has been removed from your resume')
=======

<<<<<<< HEAD
        .eq('id', skillId),
      
      if (error) throw error,

=======
<<<<<<< HEAD
        .eq('id', skillId),
      
      if (error) throw error,
=======
<<<<<<< HEAD
        .eq('id', skillId);
      if (error) throw error;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .eq('id', skillId),
      
      if (error) throw error,
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")

>>>>>>> origin/resolved-merge-conflicts
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete skill')
    } finally {
      setIsLoading(false)
<<<<<<< HEAD
          return showSuccessToast('Skill deleted', 'Your skill has been removed from your resume')
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
;
  const add_skill = async (resume_id: string, skill: Skill): Promise < boolean> => {
    // Check condition
if ( {) {
  $2
=======
<<<<<<< HEAD

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Skill} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';

import {handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * use_skills - Function description;
 */
function use_skills() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);

;

}

  },;
  return {;
    isLoading,;
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    }
  },

  return {
    isLoading;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    error;
    addSkill;
    deleteSkill;

  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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

  }
}
    setIsLoading (true);
    set_error (null);
;
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
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Skill} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';

import {handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * use_skills - Function description;
 */
function use_skills() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);

;

}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },;
  return {;
    isLoading,;
    error;
    addSkill;
    deleteSkill;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
  }
}
}
;
<<<<<<< HEAD
=======
  }
}
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

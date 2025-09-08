<<<<<<< HEAD
=======
import { useState  } from 'react';'
import { supabase  } from '@/integrations/supabase/client';'
import { Resume, ResumeBasicInfo  } from '@/types/resume';'
import { useAuth  } from '@/hooks/useAuth';'
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';'
>>>>>>> origin/cursor/delete-old-data-records-6bba


import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { Resume, ResumeBasicInfo  } from '@/types/resume';
import { useAuth  } from '@/hooks/useAuth';
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils';


import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {Resume, ResumeBasicInfo} from '@/types/resume';
import {useAuth} from '@/hooks/useAuth';
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export function useResumeActions() {;

<<<<<<< HEAD


  const { user } = useAuth();


  const [error, setError] = useState<string | null>(null);
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to create a resume')
      return null



=======
  const { user } = useAuth();


>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { Resume, ResumeBasicInfo } from '@/types/resume',;
import { useAuth } from '@/hooks/useAuth',;

import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;
export function useResumeActions() { return null; }

  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {;
<<<<<<< HEAD

    if (!user) {;
      setError('You must be logged in to create a resume'),;
      return null;



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({

<<<<<<< HEAD

=======
    try {}
      const { data, error } = await supabase'
        .from('talent_resumes')
        .insert({}
>>>>>>> origin/cursor/delete-old-data-records-6bba

          user_id: user && user.id;
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        })

        .select('id')
        .single();
      if (error) throw error;
      showSuccessToast("Resume created", "Your resume has been created successfully");

<<<<<<< HEAD


    }
    
    setIsLoading($2);
    setError($2);
    try {

      const { data, error } = await supabase;
        .from ('talent_resumes');
        .insert ({
          user_id: user.id;
          title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;
        });
        .select ('id');
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      showSuccessToast ("Resume created", "Your resume has been created successfully");
;
      return data.id;
    } catch (e: any) {
      return handleResumeError (e, 'Could not create resume') ? null : null;
    } finally {
      setIsLoading (false);
    }
  }

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;
        .from('talent_resumes');
        .insert({;
          user_id: user.id,;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });
        .select('id');
        .single(),;
      if (error) throw error,;
      showSuccessToast("Resume created", "Your resume has been created successfully"),;
      return data.id;
    } catch (e: any) {;
      return handleResumeError(e, 'Could not create resume') ? null : null;
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a resume'),;
      return false;

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    
    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {
      const { error } = await supabase
        .from('talent_resumes')
        .update({

<<<<<<< HEAD
=======
        })'
        .eq('id', resumeId)'
        .eq('user_id', user && user.id);

      return data && data.id
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {Resume, ResumeBasicInfo} from '@/types / resume';
import {use_auth} from '@/hooks / use_auth';

import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * useResumeActions - Function description;
 */
function useResumeActions() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
export /**
 * useResumeActions - Function description
 */
function useResumeActions() {
  }
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const create_resume = async ('basic_info': ResumeBasicInfo): Promise < string | null> => {
    }
    
    setIsLoading($2);
    setError($2);
    try {
      const { data, error } = await supabase
        .from('talent_resumes')
        .insert({
          user_id: user.id,
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary
        })
        .select('id')
        .single(),
      
      if (error) throw error,
      
      showSuccessToast("Resume created", "Your resume has been created successfully"),
      
      return data.id
    } catch (e: any) {
      return handleResumeError(e, 'Could not create resume') ? null : null
    } finally {
      setIsLoading(false)

    }
  }
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to update a resume')
      return false
    }
    setIsLoading(true);
    setError(null);
;
    setIsLoading(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase;
        .from('talent_resumes');
        .insert({;
          user_id: user.id,;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });
        .select('id');
        .single(),;
      if (error) throw error,;
      showSuccessToast("Resume created", "Your resume has been created successfully"),;
      return data.id;
    } catch (e: any) {;
      return handleResumeError(e, 'Could not create resume') ? null : null;
    } finally {;
      setIsLoading(false);
    }
  },;
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {;
    if (!user) {;
      setError('You must be logged in to update a resume'),;
      return false;


    }
    
    setIsLoading(true),
    setError(null),


    try {
      const { error } = await supabase
        .from('talent_resumes')
        .update({
          title: basicInfo.title;
          headline: basicInfo.headline
          summary: basicInfo.summary
        })
        .eq('id', resumeId)
        .eq('user_id', user.id);
      if (error) throw error;
          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary
        })
        .eq('id', resumeId)
        .eq('user_id', user.id),
      
      if (error) throw error,
      
      return showSuccessToast("Resume updated", "Your resume information has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update resume')
    } finally {
      setIsLoading(false)
        })'
        .eq('id', resumeId)'
        .eq('user_id', user && user.id);
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
import {formatDateForDB, handleResumeError, showSuccessToast} from './useResumeUtils';
export /**;
 * useResumeActions - Function description;
 */
function useResumeActions() {}
  const { user } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState < string | null>(null);

    // Check condition
}
if ( {) {
  $2
}
      set_error ('You must be logged in to create a resume'),'
      return null;
    }
    setIsLoading (true);
    set_error (null);
;
    try {
      }
      const { data, error } = await supabase;
        .from ('talent_resumes');'
        .insert ({
          }
          'user_id': user.id;
          'title': basic_info.title;
          'headline': basic_info.headline,
          'summary': basic_info.summary;
        });
        .select ('id');'
        .single ();
;
      // Check condition,
if (throw error) {
  $2
}
      showSuccessToast ('Resume created', 'Your resume has been created successfully');'
;
      return data.id;
    } catch ('e': any) {
      }
      return handleResumeError (e, 'Could not create resume') ? null : null;'
    } finally {
      }
      setIsLoading (false);
    }
          user_id: user.id;
          title: basicInfo.title;
          headline: basicInfo.headline
          summary: basicInfo.summary
        })
        .select('id')
        .single($2);
      if (error) throw error,
      
      showSuccessToast($2);
      return data.id
    } catch (e: any) {
      return handleResumeError(e, 'Could not create resume') ? null : null
    } finally {
      setIsLoading(false)
    }
  },
  
  const updateBasicInfo = async (resumeId: string, basicInfo: ResumeBasicInfo): Promise<boolean> => {
    if (!user) {
      setError($2);
      return false
    }
    
    setIsLoading($2);
    setError($2);
    try {
      const { error } = await supabase
        .from('talent_resumes')
        .update({
  }    try {
}
const { error } = await supabase;
        .from('talent_resumes')'
        .update({
      }
      if (error) throw error;
      return showSuccessToast('Resume updated', 'Your resume information has been updated')'
    } catch ('e': any) {
}
return handleResumeError(e, 'Could not update resume');'
    } finally {
      }
      setIsLoading(false)
          'title': basicInfo && basicInfo.title;
          'headline': basicInfo && basicInfo.headline,
          'summary': basicInfo && basicInfo.summary;
    'title': basicInfo.title,
          'headline': basicInfo.headline,
          'summary': basicInfo.summary
        })
        .eq('id', resumeId)'
        .eq('user_id', user && user.id);'
      if (error) throw error,
      return showSuccessToast('Resume updated', 'Your resume information has been updated');'
    setIsLoading(true),;
    setError(null),;
    try {;
      }
      const { error } = await supabase;
        .from('talent_resumes');'
        .update({;
          }
          'title': basicInfo.title,;
          'headline': basicInfo.headline,;
          'summary': basicInfo.summary;
        });
        .eq('id', resumeId);'
        .eq('user_id', user.id),;'
      if (error) throw error,;
      return showSuccessToast('Resume updated', 'Your resume information has been updated');'
    } catch ('e': any) {;
      }
      return handleResumeError(e, 'Could not update resume');'
    } finally {;
      }
      setIsLoading(false);
    }
  },;
  const setActiveResume = async ('resumeId': string): Promise<boolean> => {;
    }
    if (!user) {;
      }
      setError('You must be logged in to set active resume'),;'
      return false;
    }
    
    setIsLoading(true),
    setError(null),
        try {
      // First, set all user's resumes to inactive'
}
const { 'error': resetError } = await supabase;
        .from('talent_resumes')'
        .update({ 'is_active': false })        .eq('user_id', user.id),'
      if (resetError) throw resetError,
      // Then, set the selected resume as active,
const { error } = await supabase;
        .from('talent_resumes')'
        .update({ 'is_active': true })
        .eq('id', resumeId);'
  const setActiveResume = async ('resume_id': string): Promise < boolean> => {
    // Check condition
}
if ( {) {
  $2
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
          title: basicInfo && basicInfo.title;
          headline: basicInfo && basicInfo.headline,
          summary: basicInfo && basicInfo.summary

          title: basicInfo.title,
          headline: basicInfo.headline,
          summary: basicInfo.summary

        })
        .eq('id', resumeId)
        .eq('user_id', user && user.id);
<<<<<<< HEAD

      if (error) throw error;
      return showSuccessToast("Resume updated", "Your resume information has been updated")

=======


      if (error) throw error,

      return showSuccessToast("Resume updated", "Your resume information has been updated")


>>>>>>> origin/cursor/delete-old-data-records-6bba
;
  const updateBasicInfo = async (resume_id: string, basic_info: ResumeBasicInfo): Promise < boolean> => {}
    // Check condition;
if ( {) {}
  $2;
}'

      set_error ('You must be logged in to update a resume'),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return false;
    }
    setIsLoading (true);
    set_error (null);
<<<<<<< HEAD

=======
  $2
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const { error } = await supabase;
        .from ('talent_resumes');
        .update ({
          title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;
        });
        .eq ('id', resume_id);
        .eq ('user_id', user.id);
;
    try {
      // First, set all user's resumes to inactive;'
      }
      const { 'error': reset_error } = await supabase;
        .from ('talent_resumes');'
        .update ({ 'is_active': false });
        .eq ('user_id', user.id);'
;
      // Check condition,
if (throw reset_error) {
  $2
}
      // Then, set the selected resume as active;
      const { error } = await supabase;
        .from ('talent_resumes');'
        .update ({ 'is_active': true });
        .eq ('id', resume_id);'
        .eq ('user_id', user.id);'
;
      // Check condition,
if (throw error) {
  $2
}
      return showSuccessToast ('Active resume set', 'Your selected resume is now marked as active');'
    } catch ('e': any) {
      }
      return handleResumeError (e, 'Could not set active resume');'
    } finally {
<<<<<<< HEAD

      setIsLoading(false)



=======
      }
      setIsLoading (false);
    }

if (throw reset_error) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
;

    }
  }
  const setActiveResume = async (resumeId: string): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to set active resume')
      return false
    }
    setIsLoading(true);
    setError(null);

    }
    setIsLoading(true);
    setError(null);

;

    setIsLoading(true),;
    setError(null),;
    try {;
      const { error } = await supabase;'
        .from('talent_resumes');
        .update({;
          title: basicInfo.title,;
          headline: basicInfo.headline,;
          summary: basicInfo.summary;
        });'
        .eq('id', resumeId);'
        .eq('user_id', user.id),;
      if (error) throw error,;"
      return showSuccessToast("Resume updated", "Your resume information has been updated");
    } catch (e: any) {;'
      return handleResumeError(e, 'Could not update resume');
    } finally {;
      setIsLoading(false);
    }
  },;
  const setActiveResume = async (resumeId: string): Promise<boolean> => {;
    if (!user) {;'
      setError('You must be logged in to set active resume'),;
      return false;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    
    setIsLoading(true),
    setError(null),

<<<<<<< HEAD
    


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    try {

      // First, set all user's resumes to inactive
      const { error: resetError } = await supabase
        .from('talent_resumes')

<<<<<<< HEAD
        .update({ is_active: false })


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Then, set the selected resume as active
      const { error } = await supabase
        .from('talent_resumes')
        .update({ is_active: true })

<<<<<<< HEAD
        .eq('id', resumeId)
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        .eq('user_id', user && user.id);

      if (error) throw error;"
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
<<<<<<< HEAD





=======


'

        .eq('user_id', user.id);
      if (error) throw error;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .eq('user_id', user.id),
      
      if (error) throw error,

<<<<<<< HEAD
      
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
    } catch (e: any) {'
      return handleResumeError(e, 'Could not set active resume')
    } finally {}
      setIsLoading(false)
<<<<<<< HEAD




=======
        .eq('user_id', user && user.id);
      if (error) throw error;
      return showSuccessToast("Active resume set", "Your selected resume is now marked as active")
>>>>>>> origin/cursor/delete-old-data-records-6bba
;

  const setActiveResume = async (resume_id: string): Promise < boolean> => {
    // Check condition
if ( {) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  $2
}

      set_error ('You must be logged in to set active resume'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;
    try {'
      // First, set all user's resumes to inactive;
      const { error: reset_error } = await supabase;'
        .from ('talent_resumes');
        .update ({ is_active: false });'
        .eq ('user_id', user.id);
;
      // Check condition;
if (throw reset_error) {}
  $2;
}
      // Then, set the selected resume as active;
<<<<<<< HEAD

      const { error } = await supabase;'
        .from ('talent_resumes');
        .update ({ is_active: true });'
        .eq ('id', resume_id);'
        .eq ('user_id', user.id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Active resume set", "Your selected resume is now marked as active");

      setIsLoading (false);

  return {}

=======
      const { error } = await supabase;

    } finally {
      }
    } catch (e: any) {'
      return handleResumeError (e, 'Could not set active resume');
    } finally {}
      setIsLoading (false);

    is_loading;
    error;
    create_resume;
    updateBasicInfo;

    setActiveResume}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    createResume;
    updateBasicInfo;

<<<<<<< HEAD

    setActiveResume}

=======
    setActiveResume}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
import { useState } from 'react';'
import { supabase } from '@/integrations/supabase/client';'
import { Resume, ResumeBasicInfo } from '@/types/resume',;'
import { useAuth } from '@/hooks/useAuth',;'
import { formatDateForDB, handleResumeError, showSuccessToast } from './useResumeUtils',;'
;
export function useResumeActions() {;
  }
  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const createResume = async ('basicInfo':ResumeBasicInfo):Promise<string | null> => {;
    }
    if (!user) {;
      }
      setError('You must be logged in to create a resume'),;'
      return null;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      }
      const { data, error } = await supabase;
        .from('talent_resumes');'
        .insert({;
          }
          'user_id':user.id,;
          'title':basicInfo.title,;
          'headline':basicInfo.headline,;
          'summary':basicInfo.summary;
        });
        .select('id');'
        .single(),;
      ;
      if (error) throw error,;
      ;
      showSuccessToast('Resume created', 'Your resume has been created successfully'),;'
      ;
      return data.id,;
    } catch ('e':any) {;
      }
      return handleResumeError(e, 'Could not create resume') ? null :null,;'
    } finally {;
      }
      setIsLoading(false),;
    }
  },;
  ;
  const updateBasicInfo = async ('resumeId':string, 'basicInfo':ResumeBasicInfo):Promise<boolean> => {;
    }
    if (!user) {;
      }
      setError('You must be logged in to update a resume'),;'
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      }
      const { error } = await supabase;
        .from('talent_resumes');'
        .update({;
          }
          'title':basicInfo.title,;
          'headline':basicInfo.headline,;
          'summary':basicInfo.summary;
        });
        .eq('id', resumeId);'
        .eq('user_id', user.id),;'
      ;
      if (error) throw error,;
      ;
      return showSuccessToast('Resume updated', 'Your resume information has been updated'),;'
    } catch ('e':any) {;
      }
      return handleResumeError(e, 'Could not update resume'),;'
    } finally {;
      }
      setIsLoading(false),;    }
  },;
  ;
  const setActiveResume = async ('resumeId':string):Promise<boolean> => {;
    }
    if (!user) {;
      }
      setError('You must be logged in to set active resume'),;'
      return false;
    }
    ;
    setIsLoading(true),;
    setError(null),;
    ;
    try {;
      // First, set all user's resumes to inactive;'
      }
      const { 'error':resetError } = await supabase;
        .from('talent_resumes');'
        .update({ 'is_active':false });
        .eq('user_id', user.id),;'
      ;
      if (resetError) throw resetError,;
      ;
      // Then, set the selected resume as active;
      const { error } = await supabase;
        .from('talent_resumes');'
        .update({ 'is_active':true });
        .eq('id', resumeId);'
        .eq('user_id', user.id),;'
      ;
      if (error) throw error,;
      ;
      return showSuccessToast('Active resume set', 'Your selected resume is now marked as active'),;'
    } catch ('e':any) {;
      }
      return handleResumeError(e, 'Could not set active resume'),;'
    } finally {;
      }
      setIsLoading(false),;
    }
  },;
;
  return {;
    }
    isLoading,;
    error,;
    createResume,;
    updateBasicInfo,;
    setActiveResume},; setIsLoading (true);
setError (null);
try {
  }
  const {
  }
  data, error
}= await supabase .from ('talent resumes') .insert ({'
  }
  user 'id': user.id, 'title': basicInfo.title, 'headline': basicInfo.headline, 'summary': basicInfo.summary
}) .select ('id') .single ();'
if (error) throw error;
setIsLoading (true);
setError (null);
try {
<<<<<<< HEAD
  const {
  error 
}= await supabase .from ('talent resumes') .update ({
  title: basicInfo.title, headline: basicInfo.headline, summary: basicInfo.summary 
}) .eq ('id', resumeId) .eq ('user id', user.id);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not update resume') 
}finally {
  setIsLoading (false) 
}
};
const setActiveResume = async (resumeId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to set active resume');
return false;
}setError (null);
try {
  //First, set all user's resumes to inactive const {
  error: resetError 
}= await supabase .from ('talent resumes') if (resetError) throw resetError;
// Then, set the selected resume as active const {
  error 
}= await supabase .from ('talent resumes') .update ({
  is active: true 
}) .eq ('id', resumeId) .eq ('user id', user.id);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not set active resume') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
createResume;
updateBasicInfo;
setActiveResume 
}
}
}
}
;
=======
    createResume;
    updateBasicInfo;

    setActiveResume}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
    isLoading;
    error;
;
    setIsLoading(true),;
    setError(null),;

      return handleResumeError(e, 'Could not set active resume');
    } finally {;
      setIsLoading(false);
    }

  return {;

    isLoading,;
    error,;
    createResume;
    updateBasicInfo;

    setActiveResume}

}

setError (null);
try {
  }
  const {
  }
  error
}= await supabase .from ('talent resumes') .update ({'
  }
  'title': basicInfo.title, 'headline': basicInfo.headline, 'summary': basicInfo.summary
}) .eq ('id', resumeId) .eq ('user id', user.id);'
if (error) throw error;
}catch ('e': any) {
}
return handleResumeError (e, 'Could not update resume');'
}finally {
  }
  setIsLoading (false)
}
};
const setActiveResume = async ('resumeId': string) : Promise<boolean> => {
  }
  if (!user) {
  }
  setError ('You must be logged in to set active resume');'
return false;
}setError (null);
try {
  //First, set all user's resumes to inactive const {'
  }
  'error': resetError
}= await supabase .from ('talent resumes') if (resetError) throw resetError;'
// Then, set the selected resume as active const {
  }
  error
}= await supabase .from ('talent resumes') .update ({'
  }
  is 'active': true
}) .eq ('id', resumeId) .eq ('user id', user.id);'
if (error) throw error;
}catch ('e': any) {
}
return handleResumeError (e, 'Could not set active resume');'
}finally {
  }
  setIsLoading (false)
}
};
return {
  }
  isLoading;
error;
createResume;
updateBasicInfo;
setActiveResume
}
}
}
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

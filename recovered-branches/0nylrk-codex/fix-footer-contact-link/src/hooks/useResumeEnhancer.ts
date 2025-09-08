
<<<<<<< HEAD
=======
export function useResumeEnhancer() {;

export function useResumeEnhancer() {;

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';
export function useResumeEnhancer() {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const enhanceContent = async (
    content: string
    type: EnhancementType = 'general';
    context?: string
  ): Promise<string | null> => {
    setIsEnhancing(true);
    setError(null)
    try {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      const { data, error } = await supabase && supabase.functions.invoke('resume-enhancer', {
        body: { 
          content, 
          enhancementType: type,

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          context

        }
      });
      if (error) {
<<<<<<< HEAD

        throw new Error(error && error.message)
      }


=======
        throw new Error(error && error.message)
      }

>>>>>>> origin/cursor/delete-old-data-records-6bba
      return data && data.enhancedContent
    } catch (err: any) {
      setError(err && err.message || 'Failed to enhance content'),
      console && console.error('Enhancement error:', err);

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return null
    } finally {

      setIsEnhancing(false)
    }
  }
  return {}
    enhanceContent;
    isEnhancing;


<<<<<<< HEAD
    error

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';

type EnhancementType = 'summary' | 'work - description' | 'skill - categorization' | 'general';
;
export /**;
 * useResumeEnhancer - Function description;
 */
function useResumeEnhancer() {}

  const [is_enhancing, setIsEnhancing] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const enhance_content = async (

        }
      });
;
      // Check condition;
if ( {) {}
  $2;
}
        throw new Error (error.message);
      }
      return data.enhanced_content;
    } catch (err: any) {'
      set_error (err.message || 'Failed to enhance content'),'
      console.error ('Enhancement error:', err);
      return null;
    } finally {}
      setIsEnhancing (false);
    }
  }
;
  return {}
    enhance_content;
    is_enhancing;
    error;

  }
}

  }
}

<<<<<<< HEAD
=======

import { useState } from 'react',;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
}
          context;
        }
      }),;
      if (error) {;
        throw new Error(error.message);
      }
;
      return data.enhancedContent;
    } catch (err: any) {;'
      setError(err.message || 'Failed to enhance content'),;'
      console.error('Enhancement error:', err),;
      return null;
    } finally {;
      setIsEnhancing(false);
    }
  },;
  return {;
    enhanceContent;
    isEnhancing;
    error;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
;
type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general',;
;
export function useResumeEnhancer() {;
  const [isEnhancing, setIsEnhancing] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const enhanceContent = async (;
    content:string, ;
    type:EnhancementType = 'general',;
    context?:string;
  ):Promise<string | null> => {;
    setIsEnhancing(true),;
    setError(null),;
    ;
    try {;
      const { data, error } = await supabase.functions.invoke('resume-enhancer', {;
        body:{ ;
          content, ;
          enhancementType:type,;
          context;
        }
      }),;
      ;
      if (error) {;
        throw new Error(error.message),;
      }
      ;
      return data.enhancedContent,;
    } catch (err:any) {;
      setError(err.message || 'Failed to enhance content'),;
      console.error('Enhancement error:', err),;
      return null,;
    } finally {;
      setIsEnhancing(false),;
    }
  },;
  ;
  return {;
    enhanceContent,;
    isEnhancing,;
    error;
  },;
} const enhanceContent = async (content: string, type: EnhancementType = 'general', context?: string) : Promise<string | null> => {
  setIsEnhancing (true);
setError (null);
try {
  
}
          context;
        }
      }),;
      if (error) {;
        throw new Error(error.message);
      }
;
      return data.enhancedContent;
    } catch (err: any) {;
      setError(err.message || 'Failed to enhance content'),;
      console.error('Enhancement error:', err),;
      return null;
    } finally {;
      setIsEnhancing(false);
    }
  },;
  return {;
    enhanceContent;
    isEnhancing;
    error;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
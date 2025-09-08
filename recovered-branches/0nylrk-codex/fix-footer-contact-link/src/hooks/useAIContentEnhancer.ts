

import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
type EnhancementType =
  | 'resume-summary'
  | 'work-description'
  | 'job-post'
  | 'proposal'
  | 'general';
  enhancementType: EnhancementType;
  content?: string;
  context?: string
  instructions?: string
}

import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from '@/hooks / use - toast';
type EnhancementType =;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  | 'resume - summary';'
  | 'work - description';'
  | 'job - post';'
  | 'proposal';'
  | 'general';'
;
          content;
          enhancementType;
          context,
instructions
        }
      });
<<<<<<< HEAD

    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';

      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed",
  description: errorMessageimport { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from '@/hooks/use-toast',;
type EnhancementType =;

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',;

import { supabase } from '@/integrations/supabase/client',;

import { toast } from '@/hooks/use-toast',;
type EnhancementType =;'
  | 'resume-summary';'
  | 'work-description';'
  | 'job-post';'
  | 'proposal';'
  | 'general',;'
export interface AIEnhancementOptions {;
  }
  'enhancementType': EnhancementType,;
  content?: string,;
  context?: string,;
  instructions?: string;
}
;
export function useAIContentEnhancer() {;
  }
  const [isEnhancing, setIsEnhancing] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const enhanceContent = async ({;
    }
    enhancementType,;
    content = '',;'
    context = '',;'
    instructions = '';'
  }: AIEnhancementOptions): Promise<string | null> => {;
    }
    setIsEnhancing(true),;
    setError(null),;
    try {;
      }
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {;'
        }
        'body': {;
          }
          content,;
          enhancementType,;
          context,;
          instructions;
        }
      }),;
      if (error) {;
        throw new Error(error.message);        variant: "destructive"
      });
      console && console.error('Enhancement 'error':', err);'
return null;
    } finally {
      }
      setIsEnhancing(false)
  context?: string,
  instructions?: string;
}
export /**
 * useAIContentEnhancer - Function description
 */
function useAIContentEnhancer() {
  const [is_enhancing, setIsEnhancing] = useState (false);
  const [error, set_error] = useState < string | null>(null);  }
}
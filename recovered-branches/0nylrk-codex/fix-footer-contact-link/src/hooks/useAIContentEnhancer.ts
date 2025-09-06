

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {toast} from '@/hooks/use-toast';
type EnhancementType =
  | 'resume-summary'
  | 'work-description'
  | 'job-post'
  | 'proposal'
  | 'general';

<<<<<<< HEAD
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from '@/hooks / use - toast';
type EnhancementType =;
  | 'resume - summary';
  | 'work - description';
  | 'job - post';
  | 'proposal';
  | 'general';
;

export interface AIEnhancementOptions {
  enhancement_type: EnhancementType;
=======


export interface AIEnhancementOptions {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  enhancementType: EnhancementType;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  content?: string;
<<<<<<< HEAD
  context?: string
  instructions?: string
}

=======



export function useAIContentEnhancer() {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const enhanceContent = async ({
    enhancementType;
    content = '';
    context = '';
    instructions = ''
  }: AIEnhancementOptions): Promise<string | null> => {
    setIsEnhancing(true);
    setError(null);
    try {

      const { data, error } = await supabase && supabase.functions.invoke('ai-content-enhancer', {
        body: { 

          content;
          enhancementType;
          context
          instructions
        }
      });
      if (error) {
<<<<<<< HEAD
        throw new Error(error.message)

=======

      
      return data && data.enhancedContent
    } catch (err: any) {
      const errorMessage = err && err.message || 'Failed to enhance content';

      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed";
        description: errorMessage
=======
        throw new Error(error.message)


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from '@/hooks/use-toast',;
type EnhancementType =;
  | 'resume-summary';
  | 'work-description';
  | 'job-post';
  | 'proposal';
  | 'general',;
export interface AIEnhancementOptions {;
  enhancementType: EnhancementType,;
  content?: string,;
  context?: string,;
  instructions?: string;
}
;
export function useAIContentEnhancer() {;
  const [isEnhancing, setIsEnhancing] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const enhanceContent = async ({;
    enhancementType,;
    content = '',;
    context = '',;
    instructions = '';
  }: AIEnhancementOptions): Promise<string | null> => {;
    setIsEnhancing(true),;
    setError(null),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-content-enhancer', {;
        body: {;
          content,;
          enhancementType,;
          context,;
          instructions;
        }
      }),;
      if (error) {;
        throw new Error(error.message);

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }
      
      return data.enhancedContent
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to enhance content',
      setError(errorMessage),
      toast({
        title: "AI Enhancement Failed",
        description: errorMessage,
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        variant: "destructive"
      });
      console && console.error('Enhancement error:', err);
      return null
    } finally {
      setIsEnhancing(false)

<<<<<<< HEAD
=======
  context?: string,
  instructions?: string;
}
export /**
 * useAIContentEnhancer - Function description
 */
function useAIContentEnhancer() {
  const [is_enhancing, setIsEnhancing] = useState (false);
  const [error, set_error] = useState < string | null>(null);
=======


=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
  const enhance_content = async ({
    enhancement_type;
    content = '';
    context = '';
    instructions = '';
  }: AIEnhancementOptions): Promise < string | null> => {
    setIsEnhancing (true);
    set_error (null);
;
    try {
      const { data, error } = await supabase.functions.invoke ('ai - content - enhancer', {
        body: {
          content;
          enhancement_type;
          context,
          instructions;
        }
      });
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      return data.enhanced_content;
    } catch (err: any) {
      const error_message = err.message || 'Failed to enhance content';
      set_error (error_message);
      toast ({
        title: "AI Enhancement Failed";
        description: error_message,
        variant: "destructive";
      });
      console.error ('Enhancement error:', err);
      return null;
    } finally {
      setIsEnhancing (false);
    }

  },;
  return {;
    enhanceContent;
    isEnhancing;
    error;

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
;
<<<<<<< HEAD

=======
  return {
    enhance_content;
    is_enhancing;
    error;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee



import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';


import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';



interface AIEnhancementButtonProps {

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';




import {useState} from 'react';

import {Button} from '@/components / ui / button';
export function AIEnhancementButton({;

  buttonText?: string;

  className?: string;
export function AIEnhancementButton({




  currentContent;
pr-12325

}
export function AIEnhancementButton({
export function AIEnhancementButton({;
  enhancementType;
  context;
  onEnhanced;



    setError(null);
      currentContent;
      enhancementType;
      context;
    );



    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  };




  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?: string,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;
  className?: string;
}


export function AIEnhancementButton({
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = "Enhance with AI",

  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),


      setError('Please enter at least some basic content before enhancing'),
      return;
    }



  return (
    <Button

      type="button"
      variant="ghost"

      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}

      onClick={handleEnhance}

import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';

  enhancement_type: 'summary' | 'work - description' | 'skill - categorization' | 'general',
  context?: string;
  on_enhanced: (enhanced_content: string) => void,
  button_text?: string;
  class_name?: string;
}
export /**;
 * AIEnhancementButton - Function description;
 */
function AIEnhancementButton() {}
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const [error, set_error] = useState < string | null>(null);
;






<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AIEnhancementButtonProps {

  currentContent: string
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general'
  context?: string;
  onEnhanced: (enhancedContent: string) => void

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Sparkles, Loader2} from 'lucide-react';

export function AIEnhancementButton({;


<<<<<<< HEAD
<<<<<<< HEAD
  buttonText?: string;
  className?: string
}
export function AIEnhancementButton({

export function AIEnhancementButton({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  currentContent;
  enhancementType;
  context;
  onEnhanced;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  buttonText = "Enhance with AI";


  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;

      setError('Please enter at least some basic content before enhancing');
      return;
    }



<<<<<<< HEAD
<<<<<<< HEAD
  buttonText = "Enhance with AI";
  className;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;
      setError('Please enter at least some basic content before enhancing');
      return;
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setError(null);
    const enhancedContent = await enhanceContent(;
      currentContent;
      enhancementType;
      context;
    );
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  };


<<<<<<< HEAD
<<<<<<< HEAD
  buttonText = "Enhance with AI";
  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
  const handleEnhance = async () => {
    if (!currentContent |currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing');
      return
    }
    setError(null);
    const enhancedContent = await enhanceContent(
      currentContent;
      enhancementType;
      context
    );
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }
  }

  buttonText = "Enhance with AI";
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react',;
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
interface AIEnhancementButtonProps {;
  currentContent: string,;
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
  
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
      return
    }
<<<<<<< HEAD
<<<<<<< HEAD
    
    setError(null);
    const enhancedContent = await enhanceContent(
      currentContent;
      enhancementType;
      context
    );
    
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }
  };
;
    setError(null),;
    const enhancedContent = await enhanceContent(;
      currentContent,;
      enhancementType,;
      context;
    );
    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  },

  
  
  
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react',;
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
;
interface AIEnhancementButtonProps {;
  currentContent:string,;
  enhancementType:'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?:string,;
  onEnhanced:(enhancedContent:string) => void,;
  buttonText?:string,;
  className?:string;
}
;
export function AIEnhancementButton({;
  currentContent,;
  enhancementType,;
  context,;
  onEnhanced,;
  buttonText = "Enhance with AI",;
  className;
} AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const handleEnhance = async () => {;
    if (!currentContent || currentContent.trim().length < 10) {;
      setError('Please enter at least some basic content before enhancing'),;
      return,;
    }
    ;
    setError(null),;
    const enhancedContent = await enhanceContent(;
      currentContent,;
      enhancementType,;
      context;
    ),;
    ;
    if (enhancedContent) {;
      onEnhanced(enhancedContent),;
    }
  },;
  ;
  return (;
    <Button;
      type="button";
      variant="ghost";
      size="sm";
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >;
=======
      disabled={isEnhancing}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {isEnhancing ? (;
        <Loader2 className="h-3 w-3 animate-spin" />;
      ) :(;
        <Sparkles className="h-3 w-3" />;
      )}

      <span className="text-xs">{buttonText}</span>;
    </Button>;


}
=======
      disabled={isEnhancing}>;
      {isEnhancing ? (;
        <Loader2 className="h-3 w-3 animate-spin" />;
      ) : (;
        <Sparkles className="h-3 w-3" />;
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
interface AIEnhancementButtonProps {
  current_content: string,
  enhancement_type: 'summary' | 'work - description' | 'skill - categorization' | 'general',
  context?: string;
  on_enhanced: (enhanced_content: string) => void,
  button_text?: string;
  class_name?: string;
}
export /**
 * AIEnhancementButton - Function description
 */
function AIEnhancementButton() {
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const [error, set_error] = useState < string | null>(null);
;
<<<<<<< HEAD
<<<<<<< HEAD
  const handle_enhance = async () => {
    // Check condition
if (.length < 10) {) {
  $2
}
      set_error ('Please enter at least some basic content before enhancing');
      return;
    }
    set_error (null);
    const enhanced_content = await enhance_content (
      current_content;
      enhancement_type;
      context);
;
    // Check condition
if ( {) {
  $2
}
      on_enhanced (enhanced_content);
    }
  }
;
  return (
    <Button;
      type="button";
      variant="ghost";
      size="sm";
      className={`h - 6 gap - 1 text - primary hover:text - primary ${class_name}`}
      on_click={handle_enhance}
      disabled={is_enhancing}
    >;
      {is_enhancing ? (
        <Loader2 className="h - 3 w - 3 animate - spin" />) : (
        <Sparkles className="h - 3 w - 3" />)}
      <span className="text - xs">{button_text}</span>;
    </Button>);
}
  ),;}
 currentContent;
enhancementType;
context);
) : (<Sparkles className="h-3 w-3" />) 
}</Button>) 
}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <Sparkles className="h-3 w-3" />
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
}
}
;
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from '@/components/ui/button'
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer'
interface AIEnhancementButtonProps {
  currentContent: string
  enhancementType:
    | 'summary'
    | 'work-description'
    | 'skill-categorization'
    | 'general'
  context?: string
  onEnhanced: (enhancedContent: string) => void
  buttonText?: string
  className?: string
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


export function AIEnhancementButton({
=======
import { Button } from '@/components/ui/button'
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer'
interface AIEnhancementButtonProps {
  currentContent: string
  enhancementType:
    | 'summary'
    | 'work-description'
    | 'skill-categorization'
    | 'general'
  context?: string
  onEnhanced: (enhancedContent: string) => void
  buttonText?: string
  className?: string
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
interface AIEnhancementButtonProps {
  currentContent: string;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string
export function AIEnhancementButton({

  currentContent
  enhancementType
  context
  onEnhanced
  buttonText = 'Enhance with AI'
  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer()
  const [error, setError] = useState<string | null>(null)
  const handleEnhance = async () => {
    if (!currentContent |currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing')
<<<<<<< HEAD
<<<<<<< HEAD
xport function AIEnhancementButton({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2 } from 'lucide-react';
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = "Enhance with AI",
  className
}: AIEnhancementButtonProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { enhanceContent, isEnhancing } = useResumeEnhancer()
  const [error, setError] = useState<string | null>(null)
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing')
      return;
    }

    setError(null)
    const enhancedContent = await enhanceContent(
      currentContent,
      enhancementType,
      context
    )
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),
  
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      return
=======
>>>>>>>       return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
    setError(null)
    const enhancedContent = await enhanceContent(
      currentContent
      enhancementType
      context
    )
    if (enhancedContent) {
      onEnhanced(enhancedContent)
<<<<<<< HEAD
interface AIEnhancementButtonProps {;
  currentContent: string;
  enhancementType:;
    | 'summary';
    | 'work-description';
    | 'skill-categorization';
    | 'general';
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
export function AIEnhancementButton(): any ({;
  currentContent,;
  enhancementType,;
  context,;
  onEnhanced,;
  buttonText = 'Enhance with AI',;
  className,;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);

  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;
      setError('Please enter at least some basic content before enhancing');
      return;
    }
<<<<<<< HEAD

  return (
=======
  }

>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    }
  }

  },
  
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (

=======
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}
>>>>>>>     >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <Sparkles className="h-3 w-3" />
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Sparkles className='h-3 w-3' />;
      )};
      <span className='text-xs'>{buttonText}</span>;
    </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Sparkles className="h-3 w-3" />
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

;

=======
;
}
>>>>>>> 
    }
  }



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  },
  

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (


      onClick={handleEnhance}
      disabled={isEnhancing}


    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (


        <Sparkles className="h-3 w-3" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      )}

      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
}

    <Button;
      type="button";
      variant="ghost";
      size="sm";
      className={`h - 6 gap - 1 text - primary hover:text - primary ${class_name}`}
      on_click = {handle_enhance, }
      disabled = {is_enhancing, }
    >;
      {is_enhancing ? (
        <Loader2 className='h - 3 w - 3 animate - spin' />) : (
        <Sparkles className='h - 3 w - 3' />)}
      <span className='text - xs'>{button_text}</span>;
    </Button>);      on_click={handle_enhance}
      disabled={is_enhancing}
    >;
      {is_enhancing ? (
        <Loader2 className="h - 3 w - 3 animate - spin" />) : (
        <Sparkles className="h - 3 w - 3" />)}
      <span className="text - xs">{button_text}</span>;
    </Button>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  )
}
;

;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  )
}
;
;
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6


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
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';interface AIEnhancementButtonProps {

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';interface AIEnhancementButtonProps {


interface AIEnhancementButtonProps {}
  currentContent: string'
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general'
  context?: string;
onEnhanced: (enhancedContent: string) => void

  buttonText?: string;
  className?: string
}


import {useState} from 'react';
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';

}
  currentContent: string;,
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
import {Button} from '@/components / ui / button';
export function AIEnhancementButton({;

  buttonText?: string;
  buttonText?: string;
  className?: string;
export function AIEnhancementButton({

export function AIEnhancementButton({;
  currentContent;
pr-12325

}
export function AIEnhancementButton({
export function AIEnhancementButton({;
  enhancementType;
  context;
  onEnhanced;

  enhancementType;
  context;
  onEnhanced;

const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;

      setError('Please enter at least some basic content before enhancing');
      return;
    }

    setError(null);
    const enhancedContent = await enhanceContent(;
      currentContent;
      enhancementType;
      context;
    );

    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  };

  buttonText = "Enhance with AI";
  className;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);'
      setError('Please enter at least some basic content before enhancing');
      return;
    }
    setError(null);
    const enhancedContent = await enhanceContent(;
      currentContent;
      enhancementType;
      context;
    );

    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  };


'
import { useState } from 'react',;'
import { Button } from '@/components/ui/button',;'
import { Sparkles, Loader2 } from 'lucide-react',;'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
interface AIEnhancementButtonProps {;
  currentContent: string,;'
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?: string,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;
  className?: string;
}

export function AIEnhancementButton({}
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
      return;
    }

  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
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
  return (
    <Button
      <Button
      <Button

  return (
    <Button
      type="button"
      variant="ghost"

  return (
    <Button"
      type="button""
      variant="ghost""
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
"
        <Sparkles className="h-3 w-3" />;
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
      <span className="text-xs">{buttonText}</span>;
    </Button>;

}
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
      onClick={handleEnhance}import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
      onClick={handleEnhance}import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
      onClick={handleEnhance}
      disabled={isEnhancing}>;
      {isEnhancing ? (;
        <Loader2 className="h-3 w-3 animate-spin" />;
      ) : (;
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
      {isEnhancing ? (;
        <Loader2 className="h-3 w-3 animate-spin" />;
      ) :(;
        <Sparkles className="h-3 w-3" />;
      )}

      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );

}
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
interface AIEnhancementButtonProps {
  current_content: string,

'
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
interface AIEnhancementButtonProps {}
  current_content: string,'
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
'"`

      type="button"""
      variant="ghost"""
      size="sm""
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}>;
        <Loader2 className="h-3 w-3 animate-spin" />;"
</Loader2>"
        <Sparkles className="h-3 w-3" />;"
      <span className="text-xs">{buttonText}</span>;"
    ;)
  const [error, set_error] = useState < string | null>(null);

"`;
pr-12325
"



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface AIEnhancementButtonProps {
=======
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';interface AIEnhancementButtonProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';interface AIEnhancementButtonProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface AIEnhancementButtonProps {}
  currentContent: string'
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general'
  context?: string;
onEnhanced: (enhancedContent: string) => void
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  buttonText?: string;
  className?: string
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from 'react';
=======
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';

}
  currentContent: string;,
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {Button} from '@/components / ui / button';
export function AIEnhancementButton({;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  buttonText?: string;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  buttonText?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  className?: string;
export function AIEnhancementButton({

export function AIEnhancementButton({;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  currentContent;
pr-12325

}
export function AIEnhancementButton({
export function AIEnhancementButton({;
  enhancementType;
  context;
  onEnhanced;

=======
  enhancementType;
  context;
  onEnhanced;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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

<<<<<<< HEAD

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
<<<<<<< HEAD
  onEnhanced,
  buttonText = "Enhance with AI",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),
const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
      return;
    }
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
      return
    }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Button
=======
      <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <Button
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  return (
    <Button
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      type="button"
      variant="ghost"
=======

  return (
    <Button"
      type="button""
      variant="ghost""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
<<<<<<< HEAD
      onClick={handleEnhance}
"
        <Sparkles className="h-3 w-3" />;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
      <span className="text-xs">{buttonText}</span>;
    </Button>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
=======
      onClick={handleEnhance}import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      onClick={handleEnhance}import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface AIEnhancementButtonProps {
  current_content: string,
=======

'
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
interface AIEnhancementButtonProps {}
  current_content: string,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

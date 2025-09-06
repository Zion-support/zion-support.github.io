<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx

<<<<<<< HEAD

=======
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
=======

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X  } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {

  options: AIEnhancementOptions
  onEnhanced: (enhancedContent: string) => void

  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx


export function AIEnhancementButton(): any ({;

========
interface AIEnhancementButtonProps {;
  options: AIEnhancementOptions,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  contentLength?: number;
}
export function AIEnhancementButton(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
  options;
  onEnhanced;
  buttonText = "Enhance with AI";
  className;
  variant = "ghost";
  size = "sm";
  contentLength = 10;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
<<<<<<< HEAD
<<<<<<< HEAD

  contentLength?: number
}

<<<<<<< HEAD
export function AIEnhancementButton({

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  contentLength?: number
}

export function AIEnhancementButton({;
  options;
  onEnhanced;
  buttonText = "Enhance with AI";
  className;
  variant = "ghost";
  size = "sm";
export function AIEnhancementButton({
  options;
  onEnhanced;

  buttonText = "Enhance with AI";
  className;
  variant = "ghost";
  size = "sm";
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  options,
  onEnhanced,
  buttonText = "Enhance with AI",
  className,
  variant = "ghost",
  size = "sm",
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),
  const [showActions, setShowActions] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleEnhance = async () => {
    if ((!options.content |options.content.trim().length < contentLength) &&
        (!options.context |options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      });
      return
    }
    const enhancedContent = await enhanceContent(options);
    if (enhancedContent) {
      setGeneratedContent(enhancedContent);
      setShowActions(true)
    }
  }
  };
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }),
      return
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',;
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
import { toast } from '@/hooks/use-toast',;
interface AIEnhancementButtonProps {;
  options: AIEnhancementOptions,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;
  className?: string,;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",;
  size?: "default" | "sm" | "lg" | "icon",;
  contentLength?: number;
}
;
export function AIEnhancementButton({;
  options,;
  onEnhanced,;
  buttonText = "Enhance with AI",;
  className,;
  variant = "ghost",;
  size = "sm",;
  contentLength = 10;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const [showActions, setShowActions] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
  const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;
=======
  const handleEnhance = async () => {;
    if ((!options.content || options.content.trim().length < contentLength) &&;
        (!options.context || options.context.trim().length < contentLength)) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({;
        title: "Not enough content",;
        description: `Please enter at least ${contentLength} characters before enhancing.`,;
        variant: "destructive";
<<<<<<< HEAD
      });
      return;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx


    const enhancedContent = await enhanceContent(options);

    if (enhancedContent) {;

      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }

  },

<<<<<<< HEAD
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
=======
      }),;
      return;
    }
;
    const enhancedContent = await enhanceContent(options),;
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent),;
      setShowActions(true);
    }
  },
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const handleRegenerate = async () => {
    await handleEnhance()
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
  
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null)
<<<<<<< HEAD

=======

  };

=======

  },
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  }

  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (showActions) {
    return (
      <div className="flex gap-2 items-center">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20"
        >
          <Check className="h-4 w-4 mr-1" />
          Apply
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={isEnhancing}
        >
          {isEnhancing ? (
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-1" />
          )}
          Regenerate
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20"
        >
          <X className="h-4 w-4 mr-1" />
          Cancel
        </Button>
      </div>
    )
  }
  return (
    <Button
      type="button"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },;
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent),;
      setShowActions(false),;
      setGeneratedContent(null),;
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }
  },;
  const handleRegenerate = async () => {;
    await handleEnhance();
  },;
  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };
  if (showActions) {;
    return (;
      <div className="flex gap-2 items-center">;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20"
        >
          <Check className="h-4 w-4 mr-1" />
          Apply
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={isEnhancing}
        >;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20";
        >;
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    );
  }
;
  return (;
    <Button;
      type="button";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
  },;

========
    const enhancedContent = await enhanceContent(options);
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }
  };
  const handleRegenerate = async () => {;
    await handleEnhance();
  };
  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };
  if (showActions) {;
    return (
      <div className="flex gap-2 items-center">;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={isEnhancing}>;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
=======

import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',;
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
import { toast } from '@/hooks/use-toast',;
;
interface AIEnhancementButtonProps {;
  options:AIEnhancementOptions,;
  onEnhanced:(enhancedContent:string) => void,;
  buttonText?:string,;
  className?:string,;
  variant?:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link",;
  size?:"default" | "sm" | "lg" | "icon",;
  contentLength?:number;
}
;
export function AIEnhancementButton({;
  options,;
  onEnhanced,;
  buttonText = "Enhance with AI",;
  className,;
  variant = "ghost",;
  size = "sm",;
  contentLength = 10;
} AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const [showActions, setShowActions] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
  ;
  const handleEnhance = async () => {;
    if ((!options.content || options.content.trim().length < contentLength) && ;
        (!options.context || options.context.trim().length < contentLength)) {;
      toast({;
        title:"Not enough content",;
        description:`Please enter at least ${contentLength} characters before enhancing.`,;
        variant:"destructive";
      }),;
      return,;
    }
    ;
    const enhancedContent = await enhanceContent(options),;
    ;
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent),;
      setShowActions(true),;
    }
  },;
  ;
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent),;
      setShowActions(false),;
      setGeneratedContent(null),;
      toast({;
        title:"Content applied",;
        description:"AI-enhanced content has been applied."}),;
    }
  },;
  ;
  const handleRegenerate = async () => {;
    await handleEnhance(),;
  },;
  ;
  const handleCancel = () => {;
    setShowActions(false),;
    setGeneratedContent(null),;
  },;
  ;
  if (showActions) {;
    return (;
      <div className="flex gap-2 items-center">;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20";
        >;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20";
          disabled={isEnhancing}
        >;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
<<<<<<< HEAD
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;
=======
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleCancel}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20";
        >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
  }



=======
========
<<<<<<< HEAD
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components / icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks / useAIContentEnhancer';
import {toast} from '@/hooks / use - toast';
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  on_enhanced: (enhanced_content: string) => void,
  button_text?: string;
  class_name?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  content_length?: number;
}
export /**
 * AIEnhancementButton - Function description
 */
function AIEnhancementButton() {
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
  const [show_actions, setShowActions] = useState (false);
  const [generated_content, setGeneratedContent] = useState < string | null>(null);
;
  const handle_enhance = async () => {
    if (.length < content_length) &&) {
  $2
}
        (!options.context || options.context.trim ().length < content_length)) {
      toast ({
        title: "Not enough content",
        description: `Please enter at least ${content_length} characters before enhancing.`,
        variant: "destructive";
      });
      return;
    }
    const enhanced_content = await enhance_content (options);
;
    // Check condition
if ( {) {
  $2
}
      setGeneratedContent (enhanced_content);
      setShowActions (true);
    }
  }
;
  const handle_accept = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_enhanced (generated_content);
      setShowActions (false);
      setGeneratedContent (null);
      toast ({
        title: "Content applied",
        description: "AI - enhanced content has been applied."});
    }
  }
;
  const handle_regenerate = async () => {
    await handle_enhance ();
  }
;
  const handle_cancel = () =>: any {
    setShowActions (false);
    setGeneratedContent (null);
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex gap - 2 items - center">;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click={handle_accept}
          className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";
        >;
          <Check className="h - 4 w - 4 mr - 1" />;
          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click={handle_regenerate}
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          disabled={is_enhancing}
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin" />) : (
            <RefreshCw className="h - 4 w - 4 mr - 1" />)}
          Regenerate;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click={handle_cancel}
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray - 100 / 20";
        >;
          <X className="h - 4 w - 4 mr - 1" />;
          Cancel;
        </Button>;
      </div>);
  }
  return (
    <Button;
      type="button";



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      variant={variant}
      size={size}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
      className={`gap - 1 ${class_name}`}
      on_click={handle_enhance}
      disabled={is_enhancing}
    >;
      {is_enhancing ? (
        <Loader2 className="h - 4 w - 4 animate - spin" />) : (
        <Sparkles className="h - 4 w - 4" />)}
      <span className="text - xs">{button_text}</span>;
    </Button>);
=======
  }
  ;
  return (;
    <Button;
      type="button";      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >;
      {isEnhancing ? (;
        <Loader2 className="h-4 w-4 animate-spin" />;
      ) :(;
        <Sparkles className="h-4 w-4" />;
      )}
      <span className="text-xs">{buttonText}</span>;
    </Button>;
  ),; 
}export function AIEnhancementButton ({
  options;
onEnhanced;
buttonText = "Enhance with AI";
className;
variant = "ghost";
size = "sm";
contentLength = 10 
}: AIEnhancementButtonProps) {
  const {
  enhanceContent, isEnhancing 
}= useAIContentEnhancer ();
const [showActions, setShowActions] = useState (false);
const [generatedContent, setGeneratedContent] = useState<string | null> (null);
if ( (!options.content || options.content.trim () .length < contentLength) && (!options.context || options.context.trim () .length < contentLength) ) {
  toast ({
  variant: "destructive" 
});
return 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
};
<Button type="button" variant="ghost" size="sm" onClick= {
  handleAccept 
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) 
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) 
}return (<Button) : (<Sparkles className=" h-4 w-4" />) 
}</Button>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ai-enhancement/AIEnhancementButton.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

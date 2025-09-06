<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer'
import { toast } from '@/hooks/use-toast'
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions
  onEnhanced: (enhancedContent: string) => void
  buttonText?: string
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";  contentLength?: number

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function AIEnhancementButton({
  options
  onEnhanced
  buttonText = "Enhance with AI"
  className
  variant = "ghost"
  size = "sm"
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer()
  const [showActions, setShowActions] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string | null>(null)
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,

import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  contentLength?: number
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}
export function AIEnhancementButton({

=======
>>>>>>> }
export function AIEnhancementButton({
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
export function AIEnhancementButton({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
export function AIEnhancementButton({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  options
  onEnhanced
  buttonText = "Enhance with AI"
  className
  variant = "ghost"
  size = "sm"
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer()
  const [showActions, setShowActions] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string | null>(null)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   const handleEnhance = async () => {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleEnhance = async () => {
>>>>>>>     if ((!options.content |options.content.trim().length < contentLength) &&
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  options,
  onEnhanced,
  buttonText = "Enhance with AI",
  className,
  variant = "ghost",
  size = "sm",
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),
  const [showActions, setShowActions] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),
  
  const handleEnhance = async () => {
=======
const handleEnhance = async () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    if ((!options.content |options.content.trim().length < contentLength) &&
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        (!options.context |options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
      toast({
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      })
      return;
    }
    const enhancedContent = await enhanceContent(options)
    if (enhancedContent) {
      setGeneratedContent(enhancedContent)
      setShowActions(true)
    }
  }
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent)
      setShowActions(false)
      setGeneratedContent(null)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>       toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }
=======
  import { useState } from 'react';
import { Button } from '@/components / ui / button';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }),
      return
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';
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
  const handleEnhance = async () => {;
    if ((!options.content || options.content.trim().length < contentLength) &&;
        (!options.context || options.context.trim().length < contentLength)) {;
      toast({;
        title: "Not enough content",;
        description: `Please enter at least ${contentLength} characters before enhancing.`,;
        variant: "destructive";
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
      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }
  }
  const handleRegenerate = async () => {
    await handleEnhance()
  }
  const handleCancel = () => {
    setShowActions(false)
    setGeneratedContent(null)
  }

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
  
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  },
<<<<<<< HEAD
<<<<<<< HEAD

  if (showActions) {
=======
  
>>>>>>>   if (showActions) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
  if (showActions) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  return (
    <Button
      type="button"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  return (
    <Button
      type="button"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      variant = {variant,}
      size = {size,}
      className={`gap-1 ${className}`}
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}
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
  
  return (
    <Button
      type="button"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  },;
========
<<<<<<< HEAD
import { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks / useAIContentEnhancer';
import { toast } from '@/hooks / use - toast';
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  on_enhanced: (enhanced_content: string) => void,
  button_text?: string;
  class_name?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";  content_length?: number;
}
export /**
 * AIEnhancementButton - Function description
 */
function AIEnhancementButton() {
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
  const [show_actions, setShowActions] = useState (false);
  const [generated_content, setGeneratedContent] = useState < string | null>(null);
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
    // Check condition
if ( {) {
  $2
}
      setGeneratedContent (enhanced_content);
      setShowActions (true);
    }
  }
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
  const handle_regenerate = async () => {
    await handle_enhance ();
  }
  const handle_cancel = () =>: any {
    setShowActions (false);
    setGeneratedContent (null);
  }
  import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {;
  options: AIEnhancementOptions,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";  contentLength?: number;
}
export function AIEnhancementButton(): any ({;
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
  const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;
      toast({;
        title: "Not enough content",;
        description: `Please enter at least ${contentLength} characters before enhancing.`,;
        variant: "destructive";
      });
      return;
    }
    const enhancedContent = await enhanceContent(options);
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }
<<<<<<< HEAD
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ai-enhancement/AIEnhancementButton.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent),;
      setShowActions(false),;
      setGeneratedContent(null),;
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },;
  const handleRegenerate = async () => {;
    await handleEnhance();
  },;
<<<<<<< HEAD
========
  };
  const handleRegenerate = async () => {;
    await handleEnhance();
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ai-enhancement/AIEnhancementButton.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };
  if (showActions) {;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
    return (;
  if (showActions) {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ai-enhancement/AIEnhancementButton.tsx
=======

  },
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),


      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }


  },
  
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  },
  


  if (showActions) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    return (
>>>>>>>       <div className="flex gap-2 items-center">;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick = {handleAccept,}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick = {handleRegenerate,}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled = {isEnhancing,}>;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
=======

import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react';
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick = {handleCancel,}
<<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ai-enhancement/AIEnhancementButton.tsx
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleCancel}
<<<<<<< HEAD
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20";
        >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20";
        >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    ),;
=======
    );
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx


  return (
    <Button
      type="button"
      variant = {variant,}
      size = {size,}
========
  ;
  return (;
    <Button;
      type="button";      variant={variant}
      size={size}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ai-enhancement/AIEnhancementButton.tsx
      className={`gap-1 ${className}`}
<<<<<<< HEAD
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}>;
      {isEnhancing ? (;
        <Loader2 className="h-4 w-4 animate-spin" />;
      ) : (;
=======
      onClick={handleEnhance}
      disabled={isEnhancing}
    >;
      {isEnhancing ? (;
        <Loader2 className="h-4 w-4 animate-spin" />;
      ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Sparkles className="h-4 w-4" />;
      )}
<<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ai-enhancement/AIEnhancementButton.tsx
      <span className="text-xs">{buttonText}</span>;
    </Button>;
<<<<<<< HEAD
  );
};";
<Buttontype="button" variant="ghost" size="sm" onClick={
  handleAccept "
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20"> <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;
}</Button>) ;
}"}
<<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx

<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ai-enhancement/AIEnhancementButton.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
          on_click = {handle_accept, }
          className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";
        >;
          <Check className="h - 4 w - 4 mr - 1" />;
          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_regenerate, }
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          disabled = {is_enhancing, }
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
          on_click = {handle_cancel, }
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray - 100 / 20";
        >;
          <X className="h - 4 w - 4 mr - 1" />;
          Cancel;
        </Button>;
      </div>),
  }
  return (
    <Button;
<<<<<<< HEAD
=======
    );
  }
;
  return (;
    <Button;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      type="button";
      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>>     >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      type="button";
      variant = {variant, }
      size = {size, }
      className={`gap - 1 ${class_name}`}
      on_click = {handle_enhance, }
      disabled = {is_enhancing, }
    >;
      {is_enhancing ? (
        <Loader2 className="h - 4 w - 4 animate - spin" />) : (
        <Sparkles className="h - 4 w - 4" />)}
      <span className="text - xs">{button_text}</span>;
    </Button>);
}";
<Button type="button" variant="ghost" size="sm" on_click={
  handle_accept ";
}className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20" > <Check className="h - 4 w - 4 mr - 1" /> Apply </Button> <Button) : (<RefreshCw className="h - 4 w - 4 mr - 1" />) ";
}Regenerate </Button> <Button h - 4 w - 4 mr - 1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h - 4 w - 4" />);
}</Button>);
}"}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

    >
>>>>>>>       {isEnhancing ? (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    >
      {isEnhancing ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
<<<<<<< HEAD
      <span className="text-xs">{buttonText}</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    </Button>;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Button>
  )
    </Button>;
  );
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
};"
<Button type="button" variant="ghost" size="sm" onClick={
  handleAccept "
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) "
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) "
}return (<Button) : (<Sparkles className=" h-4 w-4" />)
}</Button>)
}"}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementButton.tsx
<<<<<<< HEAD

=======
}
;
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),; ;
}export function AIEnhancementButton ({;
  options;
onEnhanced;
buttonText = "Enhance with AI";
className;";
variant = "ghost";";
size = "sm";
contentLength = 10 ;
}: AIEnhancementButtonProps) {;
  const {;
  enhanceContent, isEnhancing ;
}= useAIContentEnhancer ();
const [showActions, setShowActions] = useState (false);
const [generatedContent, setGeneratedContent] = useState<string | null> (null);
if ( (!options.content || options.content.trim () .length < contentLength) && (!options.context || options.context.trim () .length < contentLength) ) {;
  toast ({";
  variant: "destructive" ;
});
return ;
}
}
};";
<Button type="button" variant="ghost" size="sm" onClick={;
  handleAccept ";
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;
}</Button>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/ai-enhancement/AIEnhancementButton.tsx
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
;
    </Button>
  )
}
;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
      <span className="text-xs">{buttonText}</span>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

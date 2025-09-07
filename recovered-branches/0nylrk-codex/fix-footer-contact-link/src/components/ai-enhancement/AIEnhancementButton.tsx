import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X  } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {

import {toast} from '@/hooks/use-toast';

  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;

  buttonText?: string;
  className?: string;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';
<<<<<<< HEAD
interface AIEnhancementButtonProps {;
  options: AIEnhancementOptions,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  contentLength?: number;
}
=======

  options;

  onEnhanced;
"
  buttonText = "Enhance with AI";
  className;"
  variant = "ghost";"
  size = "sm";
  contentLength = 10;

import { useState  } from 'react';''
import { Button  } from '@/components/ui/button';''
import { Sparkles, Loader2, RefreshCw, Check, X  } from '@/components/icons';''
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';''
import { toast } from '@/hooks/use-toast';'
interface AIEnhancementButtonProps {
  // TODO: Implement
}'
import {useState} from 'react';''
import {Button} from '@/components/ui/button';''
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';''
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';''
import {toast} from '@/hooks/use-toast';'
  options: AIEnhancementOptions;,
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";""
  size?: "default" | "sm" | "lg" | "icon";""
export function AIEnhancementButton(): any ({;
  options;
  onEnhanced;

  buttonText = "Enhance with AI";"
  className;"
  variant = "ghost";""
  size = "sm";"
  contentLength = 10;)
pr-12325
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
<<<<<<< HEAD
=======

import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',

interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",

export function AIEnhancementButton({;
  options;
  onEnhanced;"
  buttonText = "Enhance with AI";
  className;"
  variant = "ghost";"
  size = "sm";
export function AIEnhancementButton({};
  options;
  onEnhanced;

  const handleEnhance = async () => {

    if ((!options.content |options.content.trim().length < contentLength) &&
        (!options.context |options.context.trim().length < contentLength)) {}
      toast({"
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`"
        variant: "destructive"

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
  },;

      }),
      return'
import { useState } from 'react',;'
import { Button } from '@/components/ui/button',;'
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',;'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;'

import { toast } from '@/hooks/use-toast',;
interface AIEnhancementButtonProps {;
  options: AIEnhancementOptions,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;

  size?: "default" | "sm" | "lg" | "icon",;
  contentLength?: number;
}
<<<<<<< HEAD
export function AIEnhancementButton() {
  }
  options,
  onEnhanced,
  buttonText = "Enhance with AI","
  className,
variant = "ghost",;"
  size = "sm","
  contentLength = 10
}: AIEnhancementButtonProps) {
}
const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
const [showActions, setShowActions] = useState(false),;
const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
        return;
=======
;

  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const [showActions, setShowActions] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
<<<<<<< HEAD
  const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;
  const handleEnhance = async () => {;
    if ((!options.content || options.content.trim().length < contentLength) &&;
        (!options.context || options.context.trim().length < contentLength)) {;
=======

      });
      return;

>>>>>>> origin/chore/fix-lint-and-merge
    }
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }

  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }

  const handleRegenerate = async () => {
    await handleEnhance()
  }

  },

  const handleRegenerate = async () => {}
    await handleEnhance()
  },

  };

  },

    return (

      <div className="flex gap-2 items-center">
        <Button"
          type="button""
          variant="ghost""
          size="sm"
          onClick={handleAccept}"
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20"
        >"
          <Check className="h-4 w-4 mr-1" />
          Apply;
        </Button>
        <Button"
          type="button""
          variant="ghost""
          size="sm"
          onClick={handleRegenerate}"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={isEnhancing}
        >
          {isEnhancing ? ("
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : ("
            <RefreshCw className="h-4 w-4 mr-1" />
          )}
          Regenerate;
        </Button>
        <Button"
          type="button""
          variant="ghost""
          size="sm"
          onClick={handleCancel}"
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20"
        >"
          <X className="h-4 w-4 mr-1" />
          Cancel;
        </Button>
      </div>
    )
  }
  return (
    <Button"
      type="button"

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

  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }
<<<<<<< HEAD
  },;
  const handleRegenerate = async () => {;
    await handleEnhance();
  },;
=======
  };

  const handleRegenerate = async () => {;
    await handleEnhance();
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };
<<<<<<< HEAD
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
=======

  if (showActions) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
<<<<<<< HEAD
          disabled={isEnhancing}
        >;
=======
          disabled={isEnhancing}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
<<<<<<< HEAD
          Regenerate
        </Button>
=======
          Regenerate;
        </Button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
<<<<<<< HEAD
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20";
        >;
=======
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    );
  }
<<<<<<< HEAD
;
  return (;
    <Button;
      type="button";
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
  },;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const enhancedContent = await enhanceContent(options);
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }
  };
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({;
        title: "Content applied",
        description: "AI-enhanced content has been applied."});
    }
  };
  const handleRegenerate = async () => {;
    await handleEnhance();
  };

    return ("
      <div className="flex gap-2 items-center">;
        <Button"
          type="button""
          variant="ghost""
          size="sm"
          onClick={handleAccept}"
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;"
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button"
          type="button""
          variant="ghost""
          size="sm"
          onClick={handleRegenerate}"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={isEnhancing}>;
          {isEnhancing ? (;"
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;

'
import { useState } from 'react',;'
import { Button } from '@/components/ui/button',;'
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',;'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;'
import { toast } from '@/hooks/use-toast',;
;
interface AIEnhancementButtonProps {;
  options:AIEnhancementOptions,;
  onEnhanced:(enhancedContent:string) => void,;
  buttonText?:string,;
  className?:string,;"
  variant?:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link",;"
  size?:"default" | "sm" | "lg" | "icon",;
  contentLength?:number;
}
;
export function AIEnhancementButton() { return null; }
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const [showActions, setShowActions] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
  ;
  const handleEnhance = async () => {;
    if ((!options.content || options.content.trim().length < contentLength) && ;
        (!options.context || options.context.trim().length < contentLength)) {;
      toast({;"
        title:"Not enough content",;`
        description:`Please enter at least ${contentLength} characters before enhancing.`,;"
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
      toast({;"
        title:"Content applied",;"
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
    return (;"
      <div className="flex gap-2 items-center">;
        <Button;"
          type="button";"
          variant="ghost";"
          size="sm";
          onClick={handleAccept}"
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20";
        >;"
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button;"
          type="button";"
          variant="ghost";"
          size="sm";
          onClick={handleRegenerate}"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20";
          disabled={isEnhancing}
        >;
          {isEnhancing ? (;"
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) :(;
"
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;

        <Button;"
          type="button";"
          variant="ghost";"
          size="sm";
          onClick={handleCancel}"
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20";
        >;

"
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;

  return (
    <Button;"
      type="button";

      variant={variant}
      size={size}
"
      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
}

`
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? ("
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : ("
        <Sparkles className="h-4 w-4" />
      )}"
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
}
}
;

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
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    );
  }
    }
  };
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({;
        title: "Content applied",
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
}
;
      variant={variant}
      size={size}
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
        title: "Content applied"",)"
  description: "AI-enhanced content has been applied."})"

  const handleRegenerate = async () => {
    await handleEnhance()

  const handleCancel = () => {
    setGeneratedContent(null)

  if (showActions) {
    return ("
      <div className="flex gap-2 items-center">"
</div>
        <Button;"
          type="button"""
          variant="ghost"""
          size="sm""
          onClick={handleAccept}"
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20""
        >
"
          <Check className="h-4 w-4 mr-1" />"

          onClick={handleRegenerate}"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20""
          disabled={isEnhancing}
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />"
</Loader2>"
            <RefreshCw className="h-4 w-4 mr-1" />"

          onClick={handleCancel}"
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20""
          <X className="h-4 w-4 mr-1" />"

      type="button""
  },;
  const handleAccept = () => {;
      <div className="flex gap-2 items-center">;"
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;"
          <Check className="h-4 w-4 mr-1" />;"

          disabled={isEnhancing}>;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;"
</Loader2>
    if ((!options.content || options.content.trim().length < contentLength) && ;
        (!options.context || options.context.trim().length < contentLength)) {;
        title:"Not enough content",;"`;
        description:`Please enter at least ${contentLength} characters before enhancing.`,;"
        variant:"destructive";")
      }),;
      return,;
    const enhancedContent = await enhanceContent(options),;
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent),;
      setShowActions(true),;
    if (generatedContent) {;
      onEnhanced(generatedContent),;
      setShowActions(false),;
      setGeneratedContent(null),;
        title:"Content applied",;")"
        description:"AI-enhanced content has been applied."}),;"
  const handleRegenerate = async () => {;
    await handleEnhance(),;
  const handleCancel = () => {;
  if (showActions) {;
    return (;"
          type="button";""
          variant="ghost";""
          size="sm";"
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20";"
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
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleCancel}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20";
        >;
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    );
  }

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
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleCancel}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20";
        >;
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>);
  }
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
  return (
    <Button;
      type="button";
      variant={variant}
      size={size}

      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
}

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
}
}
;

}return (<Button) : (<Sparkles className=" h-4 w-4" />) 
}</Button>) 
}
}
}
;
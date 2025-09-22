
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X  } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
<<<<<<< HEAD
<<<<<<< HEAD
  size?: "default" | "sm" | "lg" | "icon";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';
<<<<<<< HEAD

  options;
=======
  size?: "default" | "sm" | "lg" | "icon";  options;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  size?: "default" | "sm" | "lg" | "icon";  options;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
"
  buttonText = "Enhance with AI";
  className;"
  variant = "ghost";"
  size = "sm";
  contentLength = 10;
}: AIEnhancementButtonProps) {}
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  options,
  onEnhanced,"
  buttonText = "Enhance with AI",
  className,"
  variant = "ghost","
  size = "sm",
  contentLength = 10;
}: AIEnhancementButtonProps) {}
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),
  const [showActions, setShowActions] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleEnhance = async () => {
    if ((!options.content |options.content.trim().length < contentLength) &&
        (!options.context |options.context.trim().length < contentLength)) {}
      toast({"
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`"
        variant: "destructive"

=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

};

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }),
      return'
import { useState } from 'react',;'
import { Button } from '@/components/ui/button',;'
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',;'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;'
=======
      }),
      return
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',;
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from '@/hooks/use-toast',;
interface AIEnhancementButtonProps {;
  options: AIEnhancementOptions,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;
className?: string,;"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",;"
  size?: "default" | "sm" | "lg" | "icon",;
  contentLength?: number;
}
;
export function AIEnhancementButton() { return null; }
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const [showActions, setShowActions] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),;

const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;

      toast({;"
        title: "Not enough content",;`
        description: `Please enter at least ${contentLength} characters before enhancing.`,;"
        variant: "destructive";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      });
      return;
=======
        return;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        return;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;
      toast({;
        title: "Not enough content",;
        description: `Please enter at least ${contentLength} characters before enhancing.`,;
        variant: "destructive";
      });
      return;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }

},
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  const handleRegenerate = async () => {
    await handleEnhance()
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },
=======
    return (  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    return (  },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const handleRegenerate = async () => {}
    await handleEnhance()
  },

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null)

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  };

  },

},

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (showActions) {
=======

  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null)  if (showActions) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null)

  };

  },

  if (showActions) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
=======
  if (showActions) {}
    return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  },;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
toast({;
        title: "Content applied",,
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
    <Button;
      type="button";
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Button;"
      type="button";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
};
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};"
<Button type="button" variant="ghost" size="sm" onClick= {}
  handleAccept "
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) "
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) "
=======
      className={`gap - 1 ${class_name}`}
      on_click={handle_enhance}
      disabled={is_enhancing}
    >;
      {is_enhancing ? (
        <Loader2 className="h - 4 w - 4 animate - spin" />) : (
        <Sparkles className="h - 4 w - 4" />)}
      <span className="text - xs">{button_text}</span>;
    </Button>);
}
}
;
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

          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20";"
            <RefreshCw className="h-4 w-4 mr-1" />;"

          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;"

          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20";"
          <X className="h-4 w-4 mr-1" />;"

      </div>;"

      type="button";"
      variant={variant}
      size={size}
      <span className="text-xs">{buttonText}</span>;"

    ;"
        <Loader2 className="h-4 w-4 animate-spin" />"
        <Sparkles className="h-4 w-4" />"
      <span className="text-xs">{buttonText}</span>"
    )"
        <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
</Loader2>)"
        <Sparkles className="h - 4 w - 4" />)}"
      <span className="text - xs">{button_text}</span>;"
    );
      type="button";      variant={variant}"
      size={size}`;
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
        <Loader2 className="h-4 w-4 animate-spin" />;"
        <Sparkles className="h-4 w-4" />;"
const [generatedContent, setGeneratedContent] = useState<string | null> (null);
if ( (!options.content || options.content.trim () .length < contentLength) && (!options.context || options.context.trim () .length < contentLength) ) {
  toast ({"
  variant: "destructive"")

}
};
<Button type="button" variant="ghost" size="sm" onClick= {
  handleAccept 
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) 
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}return (<Button) : (<Sparkles className=" h-4 w-4" />) 
}</Button>) 
}
}
}
;
}
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

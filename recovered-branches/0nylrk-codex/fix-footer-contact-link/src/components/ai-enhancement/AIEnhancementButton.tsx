import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X  } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD
interface AIEnhancementButtonProps {

import {toast} from '@/hooks/use-toast';
=======
<<<<<<< HEAD
interface AIEnhancementButtonProps {
=======
interface AIEnhancementButtonProps {

<<<<<<< HEAD
import {toast} from '@/hooks/use-toast';
=======
<<<<<<< HEAD



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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;

  buttonText?: string;
  className?: string;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';
<<<<<<< HEAD

  options;

=======
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

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
export function AIEnhancementButton(): any ({;

  options;
  onEnhanced;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function AIEnhancementButton(): any ({;
  options;
  onEnhanced;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  buttonText = "Enhance with AI";"
  className;"
  variant = "ghost";""
  size = "sm";"
  contentLength = 10;)
pr-12325
<<<<<<< HEAD
=======
=======
  buttonText = "Enhance with AI";
  className;
  variant = "ghost";
  size = "sm";
  contentLength = 10;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',

<<<<<<< HEAD
interface AIEnhancementButtonProps {
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface AIEnhancementButtonProps {
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
  contentLength?: number
}
export function AIEnhancementButton({
  options,
  onEnhanced,
  buttonText = $2;
=======
<<<<<<< HEAD

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

=======
  contentLength?: number
}

<<<<<<< HEAD
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
  contentLength = 10
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),
  const [showActions, setShowActions] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),


  
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
  };

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
=======
=======

  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
export function AIEnhancementButton() {
  }
  options,
  onEnhanced,
  buttonText = "Enhance with AI","
>>>>>>> merged-prs-20250907-203621
  className,
  variant = $2;
  size = $2;
  contentLength = 10
}: AIEnhancementButtonProps) {
<<<<<<< HEAD
  const { enhanceContent, isEnhancing } = useAIContentEnhancer($2);
  const [showActions, setShowActions] = useState($2);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null),
  
  const handleEnhance = async () => {
    if ((!options.content || options.content.trim().length < contentLength) && 
        (!options.context || options.context.trim().length < contentLength)) {
      toast($2);
      return
    }
    
    const enhancedContent = await enhanceContent($2);
    if (enhancedContent) {
      setGeneratedContent($2);
      setShowActions(true)
    }
  },
=======
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

=======
<<<<<<< HEAD
  const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;
  const handleEnhance = async () => {;
    if ((!options.content || options.content.trim().length < contentLength) &&;
        (!options.context || options.context.trim().length < contentLength)) {;
=======

<<<<<<< HEAD
=======
  const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({;
        title: "Not enough content",;
        description: `Please enter at least ${contentLength} characters before enhancing.`,;
        variant: "destructive";
<<<<<<< HEAD


  
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      });
      return;

>>>>>>> origin/chore/fix-lint-and-merge
    }
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }

<<<<<<< HEAD
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
=======
<<<<<<< HEAD
=======
  },



>>>>>>> merged-prs-20250907-203621
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleAccept = () => {
    if (generatedContent) {
<<<<<<< HEAD
      onEnhanced($2);
      setShowActions($2);
      setGeneratedContent($2);
      toast({
        title: "Content applied",
        description: "AI-enhanced content has been applied."})
    }
  },
  
  const handleRegenerate = $2;
  const handleCancel = () => {
    setShowActions($2);
    setGeneratedContent(null)
  },
  
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
=======
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }

<<<<<<< HEAD
  const handleRegenerate = async () => {
    await handleEnhance()
  }

  },

  const handleRegenerate = async () => {}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  const handleRegenerate = async () => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    await handleEnhance()
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
<<<<<<< HEAD

  };

  },

=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleRegenerate = async () => {
    await handleEnhance()
  }

  },
<<<<<<< HEAD

  const handleRegenerate = async () => {}
    await handleEnhance()
  },

  };

=======
  
<<<<<<< HEAD
=======


  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  }

  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (showActions) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
          disabled={isEnhancing}
        >
          {isEnhancing ? ("
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : ("
=======
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
>>>>>>> merged-prs-20250907-203621
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
<<<<<<< HEAD
=======
<<<<<<< HEAD
          disabled={isEnhancing}>;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
=======
>>>>>>> merged-prs-20250907-203621
          disabled={isEnhancing}
        >
          {isEnhancing ? (
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <RefreshCw className="h-4 w-4 mr-1" />
          )}
          Regenerate;
        </Button>
<<<<<<< HEAD
        <Button"
          type="button""
          variant="ghost""
          size="sm"
          onClick={handleCancel}"
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20"
        >"
          <X className="h-4 w-4 mr-1" />
          Cancel;
=======
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20"
        >
          <X className="h-4 w-4 mr-1" />
          Cancel
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </Button>
      </div>
    )
  }
  return (
<<<<<<< HEAD
    <Button"
      type="button"

=======
    <Button
      type="button"
<<<<<<< HEAD
=======
<<<<<<< HEAD
  },;
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent),;
      setShowActions(false),;
      setGeneratedContent(null),;
=======

  },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    </Button>
  )
}
=======
    </Button>
  )
  },;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    const enhancedContent = await enhanceContent(options);
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent);
      setShowActions(true);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { toast } from '@/hooks/use-toast',;
;
interface AIEnhancementButtonProps {;
  options:AIEnhancementOptions,;
  onEnhanced:(enhancedContent:string) => void,;
  buttonText?:string,;
<<<<<<< HEAD
  className?:string,;
  variant?:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link",;
  size?:"default" | "sm" | "lg" | "icon",;
  contentLength?:number;
}
}
;
      variant={variant}
      size={size}
=======
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };
  if (showActions) {;
<<<<<<< HEAD
return (
=======
    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',;
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
import { toast } from '@/hooks/use-toast',;
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Button;
          type="button";
          variant="ghost";
          size="sm";
<<<<<<< HEAD
          on_click={handle_accept}
          className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";
        >;
          <Check className="h - 4 w - 4 mr - 1" />;
=======
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20";
        >;
          <Check className="h-4 w-4 mr-1" />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
<<<<<<< HEAD
          on_click={handle_regenerate}
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          disabled={is_enhancing}
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin" />) : (
            <RefreshCw className="h - 4 w - 4 mr - 1" />)}
=======
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20";
          disabled={isEnhancing}
        >;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) :(;
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          Regenerate;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
<<<<<<< HEAD
          on_click={handle_cancel}
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray - 100 / 20";
        >;
          <X className="h - 4 w - 4 mr - 1" />;
          Cancel;
        </Button>;
=======
          onClick={handleCancel}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20";
        >;
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
      </div>;
    );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
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

}
;

<<<<<<< HEAD
}
};
<Button type="button" variant="ghost" size="sm" onClick= {
  handleAccept 
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) 
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}return (<Button) : (<Sparkles className=" h-4 w-4" />) 
}</Button>) 
}
}
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X  } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD

interface AIEnhancementButtonProps {


=======
interface AIEnhancementButtonProps {

import {toast} from '@/hooks/use-toast';


  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;

  buttonText?: string;
  className?: string;

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';
<<<<<<< HEAD


  options;


export function AIEnhancementButton(): any ({;
  options;
  onEnhanced;

  buttonText = "Enhance with AI";
  className;
  variant = "ghost";
  size = "sm";
  contentLength = 10;

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',


<<<<<<< HEAD


interface AIEnhancementButtonProps {

=======
interface AIEnhancementButtonProps {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

}
const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
const [showActions, setShowActions] = useState(false),;
const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
        return;

=======
export function AIEnhancementButton() {
  }
  options,
  onEnhanced,
  buttonText = "Enhance with AI","
  className,
  variant = $2;
  size = $2;
  contentLength = 10
}: AIEnhancementButtonProps) {

      });
      return;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }

<<<<<<< HEAD

  },




  




  const handleAccept = () => {
    if (generatedContent) {

      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
=======

  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
>>>>>>> origin/cursor/delete-old-data-records-6bba

      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }



<<<<<<< HEAD
=======
  },

  };

  },

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleRegenerate = async () => {
    await handleEnhance()
  }

  },
<<<<<<< HEAD

  

  },



=======


  const handleRegenerate = async () => {}
    await handleEnhance()
  },

  };

  },

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"


<<<<<<< HEAD
=======
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }
<<<<<<< HEAD

  };

  const handleRegenerate = async () => {;
    await handleEnhance();
  };


=======
  },;
  const handleRegenerate = async () => {;
    await handleEnhance();
  },;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };
<<<<<<< HEAD


  if (showActions) {;

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
<<<<<<< HEAD

          disabled={isEnhancing}>;

=======
          disabled={isEnhancing}
        >;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
<<<<<<< HEAD

          Regenerate;
        </Button>;

=======
          Regenerate
        </Button>
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleCancel}
<<<<<<< HEAD

          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;

          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    );
  }

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </Button>
  )
  },;


<<<<<<< HEAD
=======
}return (<Button) : (<Sparkles className=" h-4 w-4" />) 
}</Button>) 
}
}
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba

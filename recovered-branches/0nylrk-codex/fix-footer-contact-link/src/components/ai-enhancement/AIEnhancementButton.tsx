
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X  } from '@/components/icons';
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';

  options: AIEnhancementOptions
  onEnhanced: (enhancedContent: string) => void

  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
<<<<<<< HEAD
  size?: "default" | "sm" | "lg" | "icon";
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2, RefreshCw, Check, X} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';
import {toast} from '@/hooks/use-toast';


export function AIEnhancementButton(): any ({;

  options;
=======
  size?: "default" | "sm" | "lg" | "icon";  options;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD


import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Sparkles, Loader2, RefreshCw, Check, X } from '@/components/icons',
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',
import { toast } from '@/hooks/use-toast',



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions,
  onEnhanced: (enhancedContent: string) => void,
  buttonText?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  size?: "default" | "sm" | "lg" | "icon",
  contentLength?: number
}
<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  
  const handleEnhance = async () => {
    if ((!options.content |options.content.trim().length < contentLength) &&
        (!options.context |options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive"



  };

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

  const handleEnhance = async () => {;
    if ((!options && options.content || options && options.content.trim().length < contentLength) && ;
        (!options && options.context || options && options.context.trim().length < contentLength)) {;
      toast({;
        title: "Not enough content",;
        description: `Please enter at least ${contentLength} characters before enhancing.`,;
        variant: "destructive";
      });
      return;
=======
        return;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    }

  },

<<<<<<< HEAD


  


=======
  

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  
  const handleAccept = () => {
    if (generatedContent) {
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
<<<<<<< HEAD
  
  const handleAccept = () => {
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
  },  const handleAccept = () => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    if (generatedContent) {
      onEnhanced(generatedContent),
      setShowActions(false),
      setGeneratedContent(null),
<<<<<<< HEAD
      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }


  },
=======
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }
    return (  },
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  

<<<<<<< HEAD

  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null)

  };


  },
  

  if (showActions) {
=======
  const handleCancel = () => {
    setShowActions(false);
    setGeneratedContent(null)  if (showActions) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

  },;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({;
<<<<<<< HEAD
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
=======
        title: "Content applied",,
  description: "AI-enhanced content has been applied."});
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
  };

  const handleRegenerate = async () => {;
<<<<<<< HEAD
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



          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
  return (
=======
    await handleEnhance()
};

  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null)
};

  if (showActions) {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <Button;
      type="button";
      variant={variant}
      size={size}
<<<<<<< HEAD

      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
      variant={variant}
<<<<<<< HEAD
      size={size}
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
const [generatedContent, setGeneratedContent] = useState<string | null> (null);
if ( (!options.content || options.content.trim () .length < contentLength) && (!options.context || options.context.trim () .length < contentLength) ) {
  toast ({
  variant: "destructive" 
});
return 
}

}
;

}
};
<Button type="button" variant="ghost" size="sm" onClick= {
  handleAccept 
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) 
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) 
}return (<Button) : (<Sparkles className=" h-4 w-4" />) 
}</Button>) 
}
}
}
;
}
=======
      size={size}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

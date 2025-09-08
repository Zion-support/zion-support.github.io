
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';


import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface AIEnhancementButtonProps {

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';

import {Button} from '@/components / ui / button';
export function AIEnhancementButton({;

  buttonText?: string;

  className?: string;
export function AIEnhancementButton({

<<<<<<< HEAD



=======
  buttonText?: string;
  className?: string
}
export function AIEnhancementButton({

export function AIEnhancementButton({;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  currentContent;
pr-12325

}
export function AIEnhancementButton({
export function AIEnhancementButton({;
  enhancementType;
  context;
  onEnhanced;
<<<<<<< HEAD



=======
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);'
      setError('Please enter at least some basic content before enhancing');
      return;
    }
  buttonText = "Enhance with AI";


  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;

      setError('Please enter at least some basic content before enhancing');
      return;
    }



  buttonText = "Enhance with AI";
  className;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;
      setError('Please enter at least some basic content before enhancing');
      return;
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setError(null);
      currentContent;
      enhancementType;
      context;
    );
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  };


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?: string,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;
  className?: string;
}


<<<<<<< HEAD
export function AIEnhancementButton({
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = "Enhance with AI",

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      setError('Please enter at least some basic content before enhancing'),
      return;
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
;
    setError(null),;
      currentContent,;
      enhancementType,;
      context;
    );
    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  },


>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <Button

      type="button"
      variant="ghost"

      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
<<<<<<< HEAD

      onClick={handleEnhance}
=======


      <span className="text-xs">{buttonText}</span>;
    </Button>;

}

>>>>>>> origin/cursor/delete-old-data-records-6bba

import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';

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


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

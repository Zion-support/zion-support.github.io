import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sparkles, Loader2} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';
<<<<<<< HEAD
=======

interface AIEnhancementButtonProps {

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2  } from 'lucide-react';

import {useState} from 'react';

import {Button} from '@/components / ui / button';
export function AIEnhancementButton({;

  buttonText?: string;

  className?: string;
export function AIEnhancementButton({

<<<<<<< HEAD
  buttonText?: string;
  className?: string
}
export function AIEnhancementButton({

export function AIEnhancementButton({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    setError(null);
      currentContent;
      enhancementType;
      context;
    );
<<<<<<< HEAD
=======

    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    }
  };

  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general',;
  context?: string,;
  onEnhanced: (enhancedContent: string) => void,;
  buttonText?: string,;
  className?: string;
}

  className
}: AIEnhancementButtonProps) {
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),

      setError('Please enter at least some basic content before enhancing'),
      return;
    }
<<<<<<< HEAD
    
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

  
  
  
=======

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

      type="button"
      variant="ghost"

      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}

      <span className="text-xs">{buttonText}</span>;
    </Button>;

}

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
  const handle_enhance = async () => {
    // Check condition
if (.length < 10) {) {
  $2
}
      set_error ('Please enter at least some basic content before enhancing');
      return;
    }
    set_error (null);
    const enhanced_content = await enhance_content (
      current_content;
      enhancement_type;
      context);
;
    // Check condition
if ( {) {
  $2
}
      on_enhanced (enhanced_content);
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
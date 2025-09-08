

    }
    setError(null)
    const enhancedContent = await enhanceContent(

    )
    if (enhancedContent) {}
      onEnhanced(enhancedContent)
interface AIEnhancementButtonProps {;
  currentContent: string;,
  enhancementType:;

    | 'general';
  context?: string;
  onEnhanced: (enhancedContent:,  string) => void;,
  buttonText?: string;
  className?: string;
export function AIEnhancementButton(): any ({;
  currentContent,;
  enhancementType,;
  context,;
  onEnhanced,;'
  buttonText = 'Enhance with AI',;
  className,;
}:,  AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();,
  const [error, setError] = useState<string | null>(null);
  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;'
      setError('Please enter at least some basic content before enhancing');
      return;
    }
  }


    }
  }

  },
  
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <Sparkles className="h-3 w-3" />
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
        <Sparkles className='h-3 w-3' />;
      )};
      <span className='text-xs'>{buttonText}</span>;
    </Button>;
  );      onClick={handleEnhance}
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

import { Button } from '@/components / ui / button';

import { useResumeEnhancer } from '@/hooks / useResumeEnhancer';

    | 'general';
  context?: string;
  on_enhanced: (enhanced_content:,  string) => void;,
  className,;)
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
</string>
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;
      setError('Please enter at least some basic content before enhancing');

import { Button } from '@/components/ui/ button';
import { useResumeEnhancer } from '@/hooks/ useResumeEnhancer';
interface AIEnhancementButtonProps {
  // TODO: Implement
  current_content: string;,
  enhancement_type:;
    | 'work - description';
    | 'skill - categorization';
pr-12325
  on_enhanced: (enhanced_content: string) => void;
  button_text?: string;
  class_name?: string;

  const [error, set_error] = useState < string | null>(null);

  const handle_enhance = async () => {
    // Check condition
if (.length < 10) {) {
  $2
}
;

}
      on_enhanced (enhanced_content);
    }

  }

  },

  return (

      onClick={handleEnhance}
      disabled={isEnhancing}

    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (

        <Sparkles className="h-3 w-3" />
      )}

      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
}

    <Button;
      type="button";
      variant="ghost";
      size="sm";
      className={`h - 6 gap - 1 text - primary hover:text - primary ${class_name}`}
      on_click = {handle_enhance, }
      disabled = {is_enhancing, }
    >;
      {is_enhancing ? (
        <Loader2 className='h - 3 w - 3 animate - spin' />) : (
        <Sparkles className='h - 3 w - 3' />)}
      <span className='text - xs'>{button_text}</span>;
    </Button>);      on_click={handle_enhance}
      disabled={is_enhancing}
    >;
      {is_enhancing ? (
        <Loader2 className="h - 3 w - 3 animate - spin" />) : (
        <Sparkles className="h - 3 w - 3" />)}
      <span className="text - xs">{button_text}</span>;
    </Button>);
}

  )
}
;




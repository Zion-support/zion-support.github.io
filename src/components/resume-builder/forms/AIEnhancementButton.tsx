<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import { Sparkles, Loader2 } from 'lucide-react'
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer'
interface AIEnhancementButtonProps {
  currentContent: string
  enhancementType:
    | 'summary'
    | 'work-description'
    | 'skill-categorization'
    | 'general'
  context?: string
  onEnhanced: (enhancedContent: string) => void
  buttonText?: string
  className?: string
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4



<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function AIEnhancementButton({
  currentContent,
  enhancementType,
  context,
  onEnhanced,
  buttonText = "Enhance with AI",
  className
}: AIEnhancementButtonProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { enhanceContent, isEnhancing } = useResumeEnhancer()
  const [error, setError] = useState<string | null>(null)
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing')
      return;
    }

    setError(null)
    const enhancedContent = await enhanceContent(
      currentContent,
      enhancementType,
      context
    )
    if (enhancedContent) {
      onEnhanced(enhancedContent)
    }
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const [error, setError] = useState<string | null>(null),
  
  const handleEnhance = async () => {
    if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing'),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return
    }
    setError(null)
    const enhancedContent = await enhanceContent(
      currentContent
      enhancementType
      context
    )
    if (enhancedContent) {
      onEnhanced(enhancedContent)
=======
interface AIEnhancementButtonProps {;
  currentContent: string;
  enhancementType:;
    | 'summary';
    | 'work-description';
    | 'skill-categorization';
    | 'general';
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
export function AIEnhancementButton(): any ({;
  currentContent,;
  enhancementType,;
  context,;
  onEnhanced,;
  buttonText = 'Enhance with AI',;
  className,;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);

  const handleEnhance = async () => {;
    if (!currentContent || currentContent && currentContent.trim().length < 10) {;
      setError('Please enter at least some basic content before enhancing');
      return;
    }


=======
import { Button } from '@/components / ui / button';
import { Sparkles, Loader2 } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks / useResumeEnhancer';
interface AIEnhancementButtonProps {
  current_content: string;
  enhancement_type:;
    | 'summary';
    | 'work - description';
    | 'skill - categorization';
    | 'general';
  context?: string;
  on_enhanced: (enhanced_content: string) => void;
  button_text?: string;
  class_name?: string;
export /**
 * AIEnhancementButton - Function description
 */
function AIEnhancementButton() {
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const [error, set_error] = useState < string | null>(null);
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
      current_content,
      enhancement_type,
      context);
    // Check condition
if ( {) {
  $2
}
      on_enhanced (enhanced_content);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }


=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (


      onClick={handleEnhance}
      disabled={isEnhancing}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
<<<<<<< HEAD
        <Sparkles className="h-3 w-3" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <Sparkles className='h-3 w-3' />;
      )};
      <span className='text-xs'>{buttonText}</span>;
    </Button>;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        <Sparkles className="h-3 w-3" />
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
  )
}
<<<<<<< HEAD
=======
  )
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

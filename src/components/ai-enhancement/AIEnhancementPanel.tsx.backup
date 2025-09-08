
interface AIEnhancementPanelProps {  title: string;
  defaultOptions: AIEnhancementOptions;
  onApply: (content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
interface AIEnhancementPanelProps {;
  title: string,;
  defaultOptions: AIEnhancementOptions,;
  onApply: (content: string) => void,;
  onClose?: () => void,;
  showInstructions?: boolean,;
  initialContent?: string;
}
;
export function AIEnhancementPanel({;  title,;
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
    })
  }
  const handleApply = () => {
    onApply(generatedContent)
    if (onClose) onClose()
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
      [field]: e.target.value})
  },

  const handleApply = () => {
    onApply(generatedContent),
    if (onClose) onClose()
  },

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input area */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Content to enhance</label>
          <Textarea

            placeholder="Enter your content to enhance..."
            className="min-h-[100px]"
            value={options.content}
            onChange={(e) => handleInputChange(e, 'content')}
          />;
        </div>;
        {/* Context input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Context (optional)</label>
          <Textarea
            placeholder="Add any relevant context to guide the AI..."
            className="min-h-[60px]"
            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}
          />;
        </div>;

        {/* Instructions input (optional) */}
        {showInstructions && (;
          <div className='space-y-2'>;
            <label className='text-sm font-medium'>;
              Special instructions (optional);
            </label>;
            <Input

              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options.instructions}

          disabled={isEnhancing || (!options.content && !options.context)}        >

              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}

        {/* Generate button */}

          {isEnhancing ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Enhancing...
            </>
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />
              Generate Enhanced Content
            </>
          )}
        </Button>}

    <Card className='w - full max - w-2xl mx - auto'>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <Sparkles className='h - 5 w - 5 text - primary' />;
          {title}
        </CardTitle>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
        {/* Input area */}
        <div className='space - y-2'>;
          <label className='text - sm font - medium'>Content to enhance</label>;
          <Textarea;
            placeholder='Enter your content to enhance...';
            className='min - h-[100px]';
            value={options.content}
            on_change={e => handleInputChange (e, 'content')}          />;
        </div>;
        {/* Context input */}
        <div className='space - y-2'>;
          <label className='text - sm font - medium'>Context (optional)</label>;
          <Textarea;
            placeholder='Add any relevant context to guide the AI...';
            className='min - h-[60px]';
            value={options.context}
            on_change={e => handleInputChange (e, 'context')}          />;
        </div>;
        {/* Instructions input (optional) */}
        {show_instructions && (
          <div className='space - y-2'>;
            <label className='text - sm font - medium'>;
              Special instructions (optional);
            </label>;
            <Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}
              on_change={e => handleInputChange (e, 'instructions')}            />;
          </div>)}
        {/* Generate button */}
        <Button;
          on_click={handle_generate}
          className='w - full';
          disabled={is_enhancing || (!options.content && !options.context)}        >;
          {is_enhancing ? (
            <>;
              <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />;
              Enhancing...;
            </>) : (
            <>;
              <Sparkles className='mr - 2 h - 4 w - 4' />;
              Generate Enhanced Content;
            </>)}
        </Button>;
        {/* Output area */}
        {generated_content && (
          <div className='space - y-2 mt - 4'>;
            <div className='flex justify - between items - center'>;
              <label className='text - sm font - medium'>Generated content</label>;
              <Button;
                variant='ghost';
                size='sm';
                on_click={handle_copy}
                className='h - 8'              >;
                {copied ? (
                  <>;
                    <Check className='h - 4 w - 4 mr - 1' /> Copied;
                  </>) : (
                  <>;
                    <Copy className='h - 4 w - 4 mr - 1' /> Copy;
                  </>)}
              </Button>;
            </div>;
            <div className='relative'>;
              <Textarea;
                value={generated_content}
                on_change={e => setGeneratedContent (e.target.value)}
                className='min - h-[200px]'              />;
            </div>;
          </div>)}
      </CardContent>;
      {generated_content && (
        <CardFooter className='flex justify - between'>;
          {on_close && (
            <Button variant='outline' on_click={on_close}>;
              Cancel;
            </Button>)}
          <Button on_click={handle_apply}>Apply to Form</Button>;
        </CardFooter>)}
    </Card>);
}

      )};
    </Card>;
  )
};

          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
<<<<<<< HEAD
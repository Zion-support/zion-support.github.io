import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';

export function AIEnhancementPanel({
  title,
  defaultOptions,
  onApply,
  onClose,
  showInstructions = true,
  initialContent = '',
}: AIEnhancementPanelProps) {
  const [options, setOptions] = useState<AIEnhancementOptions>({
    ...defaultOptions,
    content: initialContent || defaultOptions.content,
  });
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

  const handleGenerate = async () => {
    const result = await enhanceContent(options);
    if (result) {
      setGeneratedContent(result);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions
  ,) => {
    setOptions({
      ...options,
      [field]: e.target.value,
    });
  };

  const handleApply = () => {
    onApply(generatedContent);
    if (onClose) onClose();
  };

  const handleCopy = () => {

  return (
    <Card className='w-full max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Sparkles className='h-5 w-5 text-primary' />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Input area */}
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Content to enhance</label>
          <Textarea

          />
        </div>

        {/* Context input */}
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Context (optional)</label>
          <Textarea

          />
        </div>

        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className='space-y-2'>
            <label className='text-sm font-medium'>
              Special instructions (optional)
            </label>
            <Input
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"

            />
          </div>
        )}

        {/* Generate button */}

        >
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
        </Button>

        {/* Output area */}
        {generatedContent && (

              >
                {copied ? (
                  <>
                    <Check className='h-4 w-4 mr-1' /> Copied
                  </>
                ) : (
                  <>
                    <Copy className='h-4 w-4 mr-1' /> Copy
                  </>
                )}
              </Button>
            </div>
            <div className='relative'>
              <Textarea

              />
            </div>
          </div>
        )}
      </CardContent>

      {generatedContent && (
        <CardFooter className='flex justify-between'>
          {onClose && (
            <Button variant='outline' onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
      )}
    </Card>
  );
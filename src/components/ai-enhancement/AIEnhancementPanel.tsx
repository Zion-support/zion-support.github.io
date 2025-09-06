<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
interface AIEnhancementPanelProps {;
  title: string,;
  defaultOptions: AIEnhancementOptions,;
  onApply: (content: string) => void,;
  onClose?: () => void,;
  showInstructions?: boolean,;
  initialContent?: string;
=======
import React, { useState } from 'react';
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardFooter,;
} from '@/components/ui/card';import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import {;
  useAIContentEnhancer,;
  AIEnhancementOptions,;
} from '@/hooks/useAIContentEnhancer';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

interface AIEnhancementPanelProps {  title: string;
  defaultOptions: AIEnhancementOptions;
  onApply: (content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
<<<<<<< HEAD
  useAIContentEnhancer,
  AIEnhancementOptions,
} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementPanelProps {
  title: string;
  default_options: AIEnhancementOptions;
  on_apply: (content: string) => void;
  on_close?: () => void;
  show_instructions?: boolean;
  initial_content?: string;
export /**
 * AIEnhancementPanel - Function description
 */
function AIEnhancementPanel() {
  const [options, set_options] = useState < AIEnhancementOptions>({
    ...default_options,
    content: initial_content || default_options.content,
  });
  const [generated_content, setGeneratedContent] = useState < string>('');
  const [copied, set_copied] = useState (false);
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
  const handle_generate = async () => {
    const result = await enhance_content (options);
    // Check condition
if ( {) {
  $2
}
      setGeneratedContent (result);
    }
  }
  const handleInputChange = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions;
  , ) =>: any {
    set_options ({
      ...options,
      [field]: e.target.value,
    });

  }
  const handle_apply = () =>: any {
    on_apply (generated_content);
    if (on_close ()) {
  $2
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
export function AIEnhancementPanel({;
  title,;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;
<<<<<<< HEAD
  initialContent = '';
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions,;
    content: initialContent || defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result);
    }
  },

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
<<<<<<< HEAD
      ...options,
      [field]: e.target.value})
  },

<<<<<<< HEAD
  const handleApply = () => {
    onApply(generatedContent),
    if (onClose) onClose()
  },

=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
<<<<<<< HEAD
  },
=======
      ...options,



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      [field]: e.target.value})
  },

  const handleApply = () => {
    onApply(generatedContent),
    if (onClose) onClose()
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options.instructions}
<<<<<<< HEAD
=======

          disabled={isEnhancing || (!options.content && !options.context)}        >

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
<<<<<<< HEAD
;
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Generate button */}
<<<<<<< HEAD
        <Button 
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}
        >
<<<<<<< HEAD
          {isEnhancing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

          {isEnhancing ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              Enhancing...
            </>
          ) : (
            <>
<<<<<<< HEAD
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Enhanced Content
            </>
          )}
        </Button>;
=======
              <Sparkles className='mr-2 h-4 w-4' />
              Generate Enhanced Content
            </>
          )}
<<<<<<< HEAD
        </Button>
          disabled={isEnhancing || (!options && options.content && !options && options.context)}>;
          {isEnhancing ? (;
            <>;
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
              Enhancing...;
            </>;
          ) : (;
            <>;
              <Sparkles className='mr-2 h-4 w-4' />;
              Generate Enhanced Content;
            </>;
          )}
        </Button>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Output area */}

        {generatedContent && (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Generated content</label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCopy}
                className="h-8"
              >


                {copied ? (
                  <><Check className="h-4 w-4 mr-1" /> Copied</>
                ) : (
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>
                )}
              </Button>
            </div>
            <div className="relative">
              <Textarea
                value={generatedContent}
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]"
              />


            </div>
          </div>
        )}


      
<<<<<<< HEAD
      {generatedContent && (
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
=======


      {generatedContent && (
        <CardFooter className='flex justify-between'>
          {onClose && (
            <Button variant='outline' onClick={onClose}>
              Cancel
            </Button>
      </CardContent>;

      {generatedContent && (;
        <CardFooter className='flex justify-between'>;
          {onClose && (;
            <Button variant='outline' onClick={onClose}>;
              Cancel;
            </Button>;
          )}

    </Card>;
  );
}
=======
        </Button>}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
<<<<<<< HEAD
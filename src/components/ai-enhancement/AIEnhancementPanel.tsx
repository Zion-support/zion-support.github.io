
<<<<<<< HEAD
=======
import React, { useState } from 'react'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardFooter
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from '@/components/ui/card'; import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sparkles, Loader2, Copy, Check } from 'lucide-react'
  useAIContentEnhancer
  AIEnhancementOptions
} from '@/hooks/useAIContentEnhancer'

interface AIEnhancementPanelProps {;
  title: string;
  defaultOptions: AIEnhancementOptions;
  onApply: (content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components / ui / card'; import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components / ui / card';
import { Textarea } from '@/components / ui / textarea';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
  }
  const handle_copy = () =>: any {
    navigator.clipboard.write_text (generated_content);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }

  initialContent?: string;
export function AIEnhancementPanel(): any ({;
  title,;
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;
  initialContent = '',;
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions,;
    content: initialContent || defaultOptions && defaultOptions.content,;
  });
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

  const handleGenerate = async () => {;
    const result = await enhanceContent(options);
    if (result) {;
      setGeneratedContent(result);
    }
  };

<<<<<<< HEAD
=======

            value={options && options.content}
            onChange={e => handleInputChange(e, 'content')}          />;
        </div>;


        {/* Context input */}
        <div className='space-y-2'>;
          <label className='text-sm font-medium'>Context (optional)</label>;
          <Textarea
            placeholder='Add any relevant context to guide the AI...'
            className='min-h-[60px]'

            value={options && options.context}
            onChange={e => handleInputChange(e, 'context')}          />;
        </div>;


>>>>>>>   const handleInputChange = (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleInputChange = (
>>>>>>>     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
<<<<<<< HEAD

=======
      ...options
      [field]: e.target.value
      [field]: e.target.value,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
      ...options,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      [field]: e.target.value})
  },


  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <Card className="w-full max-w-2xl mx-auto">
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

        {/* Instructions input (optional) */}
=======
            placeholder='Enter your content to enhance...'
            className='min-h-[100px]'
            value={options.content}
            onChange={e => handleInputChange(e, 'content')}          />
        </div>
        {/* Context input */}
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Context (optional)</label>
          <Textarea
            placeholder='Add any relevant context to guide the AI...'
            className='min-h-[60px]'
            value={options.context}
            onChange={e => handleInputChange(e, 'context')}          />
        </div>
>>>>>>>         {/* Instructions input (optional) */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        {/* Instructions input (optional) */}
        {showInstructions && (;
          <div className='space-y-2'>;
            <label className='text-sm font-medium'>;
              Special instructions (optional);
            </label>;
>>>>>>>             <Input

              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options.instructions}
<<<<<<< HEAD

=======
          disabled={isEnhancing |(!options.content && !options.context)}        >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}

        {/* Generate button */}
        <Button 
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}
        >
<<<<<<< HEAD

=======
>>>>>>>           {isEnhancing ? (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {isEnhancing ? (
>>>>>>>             <>
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
<<<<<<< HEAD

                {copied ? (
=======
          <div className='space-y-2 mt-4'>
            <div className='flex justify-between items-center'>
              <label className='text-sm font-medium'>Generated content</label>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleCopy}
                className='h-8'              >
>>>>>>>                 {copied ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <><Check className="h-4 w-4 mr-1" /> Copied</>
                ) : (
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                )}
              </Button>;
            </div>;
            <div className='relative'>;
              <Textarea
                value={generatedContent}
<<<<<<< HEAD

            </div>
=======
                onChange={e => setGeneratedContent(e.target.value)}
                className='min-h-[200px]'              />
>>>>>>>             </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        )}
      </CardContent>
<<<<<<< HEAD

      {generatedContent && (
=======
>>>>>>>       {generatedContent && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <CardFooter className="flex justify-between">
ursor/fix-website-loading-errors-and-merge-6662
      {generatedContent && (
        <CardFooter className='flex justify-between'>
>>>>>>>           {onClose && (
            <Button variant='outline' onClick={onClose}>
              Cancel
            </Button>
          )}
<<<<<<< HEAD

          <Button onClick={handleApply}>;
=======
      )}
    </Card>
  )
}
      )};
    </Card>;
  );
};

>>>>>>>           <Button onClick={handleApply}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

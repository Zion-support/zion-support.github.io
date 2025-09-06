<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from 'react'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardFooter
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,;
  CardFooter;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
} from '@/components/ui/card'; import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sparkles, Loader2, Copy, Check } from 'lucide-react'
  useAIContentEnhancer
  AIEnhancementOptions
} from '@/hooks/useAIContentEnhancer'
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

<<<<<<< HEAD
interface AIEnhancementPanelProps {;
=======
interface AIEnhancementPanelProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  title: string;
  defaultOptions: AIEnhancementOptions;
  onApply: (content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;
<<<<<<< HEAD

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
=======
  initialContent?: string
export function AIEnhancementPanel({

  title
  defaultOptions
  onApply
  onClose
  showInstructions = true
  initialContent = ''
}: AIEnhancementPanelProps) {
  const [options, setOptions] = useState<AIEnhancementOptions>({
    ...defaultOptions
    content: initialContent |defaultOptions.content
  })
  const [generatedContent, setGeneratedContent] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const { enhanceContent, isEnhancing } = useAIContentEnhancer()
  const handleGenerate = async () => {
    const result = await enhanceContent(options)
    if (result) {
      setGeneratedContent(result)
    }
  }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
  }
  const handle_copy = () =>: any {
    navigator.clipboard.write_text (generated_content);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }

  initialContent?: string;
export function AIEnhancementPanel(): any ({;
=======
;
export function AIEnhancementPanel({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  title,;
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;
<<<<<<< HEAD
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


<<<<<<< HEAD
>>>>>>>   const handleInputChange = (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleInputChange = (
>>>>>>>     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
=======
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


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      ...options
      [field]: e.target.value
      [field]: e.target.value,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      ...options
      [field]: e.target.value
      ...options,
<<<<<<< HEAD
      [field]: e.target.value,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
      ...options,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      [field]: e.target.value})
  },

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      ...options,
      [field]: e.target.value})
  },

  const handleApply = () => {
    onApply(generatedContent),
    if (onClose) onClose()
  },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <Card className="w-full max-w-2xl mx-auto">
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

  return (
    <Card className="w-full max-w-2xl mx-auto">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Instructions input (optional) */}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options.instructions}
              onChange={e => handleInputChange(e, 'instructions')}            />
          </div>
        )}
        {/* Generate button */}
        <Button
          onClick={handleGenerate}
          className='w-full'
          disabled={isEnhancing |(!options.content && !options.context)}        >
          disabled={isEnhancing || (!options.content && !options.context)}        >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>           {isEnhancing ? (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {isEnhancing ? (
>>>>>>>             <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          {isEnhancing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Enhancing...
            </>
          ) : (
            <>
<<<<<<< HEAD
              <Sparkles className='mr-2 h-4 w-4' />
=======
              <Sparkles className="mr-2 h-4 w-4" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Generate Enhanced Content
            </>
          )}
        </Button>
<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        {/* Output area */}
        {generatedContent && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                {copied ? (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='space-y-2 mt-4'>
            <div className='flex justify-between items-center'>
              <label className='text-sm font-medium'>Generated content</label>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleCopy}
                className='h-8'              >
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
                onChange={e => setGeneratedContent(e.target.value)}
                className='min-h-[200px]'              />
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]"
              />
            </div>
          </div>
        )}
      </CardContent>
      
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      {generatedContent && (
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Cancel
            </Button>
<<<<<<< HEAD
=======
      </CardContent>;

      {generatedContent && (;
        <CardFooter className='flex justify-between'>;
          {onClose && (;
            <Button variant='outline' onClick={onClose}>;
              Cancel;
            </Button>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
          <Button onClick={handleApply}>;
=======
=======
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      )}
    </Card>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
    </Card>;
  );
}

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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      )};
    </Card>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>>           <Button onClick={handleApply}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <Button onClick={handleApply}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

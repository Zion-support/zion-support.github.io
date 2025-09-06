<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from 'react'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardFooter
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,;
  CardFooter;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from '@/components/ui/card'; import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sparkles, Loader2, Copy, Check } from 'lucide-react'
  useAIContentEnhancer
  AIEnhancementOptions
} from '@/hooks/useAIContentEnhancer'

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
<<<<<<< HEAD
<<<<<<< HEAD

=======
      ...options
      [field]: e.target.value
      [field]: e.target.value,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      ...options
      [field]: e.target.value
=======
      ...options,
<<<<<<< HEAD
      [field]: e.target.value,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
      ...options,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      [field]: e.target.value})
  },

=======
=======
<<<<<<< HEAD
      ...options,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
>>>>>>>     <Card className="w-full max-w-2xl mx-auto">
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

        {/* Instructions input (optional) */}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options.instructions}
<<<<<<< HEAD
              onChange={e => handleInputChange(e, 'instructions')}            />
          </div>
        )}
        {/* Generate button */}
        <Button
          onClick={handleGenerate}
          className='w-full'
<<<<<<< HEAD
          disabled={isEnhancing |(!options.content && !options.context)}        >
=======
          disabled={isEnhancing || (!options.content && !options.context)}        >
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
        {/* Output area */}
        {generatedContent && (
<<<<<<< HEAD
<<<<<<< HEAD

                {copied ? (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className='space-y-2 mt-4'>
            <div className='flex justify-between items-center'>
              <label className='text-sm font-medium'>Generated content</label>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleCopy}
                className='h-8'              >
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
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Generated content</label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCopy}
                className="h-8"
              >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
                onChange={e => setGeneratedContent(e.target.value)}
                className='min-h-[200px]'              />
=======
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]"
              />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </div>
          </div>
        )}
      </CardContent>
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {generatedContent && (
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Cancel
            </Button>
          )}
<<<<<<< HEAD
<<<<<<< HEAD

          <Button onClick={handleApply}>;
=======
=======
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )}
    </Card>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      )};
    </Card>;
  );
};
<<<<<<< HEAD

>>>>>>>           <Button onClick={handleApply}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          <Button onClick={handleApply}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
;
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

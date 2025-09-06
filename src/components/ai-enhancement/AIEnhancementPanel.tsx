<<<<<<< HEAD
<<<<<<< HEAD
=======

import React, { useState } from 'react'
import {
  Card
  CardContent
  CardHeader
  CardTitle
  CardFooter
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,;
  CardFooter;
} from '@/components/ui/card'; import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sparkles, Loader2, Copy, Check } from 'lucide-react'
  useAIContentEnhancer
  AIEnhancementOptions
} from '@/hooks/useAIContentEnhancer'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======

=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface AIEnhancementPanelProps {
  title: string;
  defaultOptions: AIEnhancementOptions;
  onApply: (content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;
<<<<<<< HEAD
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
export function AIEnhancementPanel({;
  title,;
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;

<<<<<<< HEAD
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
<<<<<<< HEAD
      ...options
      [field]: e.target.value
      [field]: e.target.value,
      ...options
      [field]: e.target.value
      ...options,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
          disabled={isEnhancing |(!options.content && !options.context)}        >
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            onChange={(e) => handleInputChange(e, 'context')}
          />;
        </div>;

<<<<<<< HEAD

          disabled={isEnhancing || (!options.content && !options.context)}        >

=======
        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          disabled={isEnhancing || (!options.content && !options.context)}        >

              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
        {/* Generate button */}
<<<<<<< HEAD
        <Button 
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}
        >
ursor/fix-website-loading-errors-and-merge-6662
          {isEnhancing ? (
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          {isEnhancing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enhancing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Enhanced Content
            </>
          )}
        </Button>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
        )}


      


=======
        {/* Output area */}
        {generatedContent && (
          <div className='space-y-2 mt-4'>
            <div className='flex justify-between items-center'>
              <label className='text-sm font-medium'>Generated content</label>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleCopy}
                className='h-8'              >
                onChange={e => setGeneratedContent(e.target.value)}
                className='min-h-[200px]'              />
          </div>
        )}
      </CardContent>
        <CardFooter className="flex justify-between">
ursor/fix-website-loading-errors-and-merge-6662
      {generatedContent && (
        <CardFooter className='flex justify-between'>
            <Button variant='outline' onClick={onClose}>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Generated content</label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCopy}
                className="h-8"
              >
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
            </div>
          </div>
        )}
      </CardContent>
<<<<<<< HEAD
      
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


      {generatedContent && (
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </CardContent>;

      {generatedContent && (;
        <CardFooter className='flex justify-between'>;
          {onClose && (;
            <Button variant='outline' onClick={onClose}>;
              Cancel;
            </Button>;
<<<<<<< HEAD
=======
          )}
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
      )}
    </Card>
  )
}
    </Card>;
  );
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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

<<<<<<< HEAD
          <Button onClick={handleApply}>;
=======
      )};
    </Card>;
  );
};
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

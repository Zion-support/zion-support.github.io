<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react';
import {;
  Card,;
  CardContent,;
  CardHeader,;
  CardTitle,;
  CardFooter,;'
} from '@/components/ui/card';import React, { useState } from 'react';'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';'
import { Textarea } from '@/components/ui/textarea';'
import { Button } from '@/components/ui/button';'
import { Input } from '@/components/ui/input';'
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';

  useAIContentEnhancer,;
  AIEnhancementOptions,;'
} from '@/hooks/useAIContentEnhancer';

<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
interface AIEnhancementPanelProps {  title: string;

=======
<<<<<<< HEAD
interface AIEnhancementPanelProps {
=======
interface AIEnhancementPanelProps {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  title: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
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
=======

import {}

  Card,
  CardContent,
  CardHeader,
  CardTitle,

  default_options: AIEnhancementOptions;
  on_apply: (content: string) => void;
  on_close?: () => void;
  show_instructions?: boolean;
  initial_content?: string;

  const [generated_content, setGeneratedContent] = useState < string>('');
    content: initial_content || default_options.content,)
  });
  const [generated_content, setGeneratedContent] = useState < string>();
pr-12325
  const [copied, set_copied] = useState (false);
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
  const handle_generate = async () => {}
    const result = await enhance_content (options);
    // Check condition;
if ( {) {}
  $2;
}
      setGeneratedContent (result);
    }
  }
  const handleInputChange = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions;
  , ) =>: any {}
    set_options ({}
      ...options,
      [field]: e.target.value,
    });
  }
  const handle_apply = () =>: any {}
    on_apply (generated_content);

<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
=======
  initialContent?: string;
export function AIEnhancementPanel(): any ({;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
  title,;

  defaultOptions,;
  onApply,;
  onClose,;
<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx

=======
  showInstructions = true,;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
  initialContent = '',;

}: AIEnhancementPanelProps) {;

  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions,;

  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result);
    }

<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            value={options && options.content}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
            onChange={e => handleInputChange(e, 'content')}          />;
        </div>;

            onChange={e => handleInputChange(e, 'context')}          />;
        </div>;
<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof,  AIEnhancementOptions
  ) => {
    setOptions({
      ...options,
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
      ...options,
      [field]: e.target.value})
  },

      ...options,
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
=======

      ...options,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
  return (
    <Card className='w-full max-w-2xl mx-auto'>'
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>'
          <Sparkles className='h-5 w-5 text-primary' />'
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>'
        {/* Input area */}
        <div className='space-y-2'>'
          <label className='text-sm font-medium'>Content to enhance</label>'
          <Textarea
<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
            placeholder="Enter your content to enhance...""
            className="min-h-[100px]"",
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            placeholder="Enter your content to enhance..."
            className="min-h-[100px]"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
            value={options.content}
            onChange={(e) => handleInputChange(e, 'content')}'
          />;
        </div>;
        {/* Context input */}
        <div className='space-y-2'>'
          <label className='text-sm font-medium'>Context (optional)</label>'
          <Textarea
            placeholder='Add any relevant context to guide the AI...''
            className='min-h-[60px]'',
            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}'
          />;
        </div>;
        {/* Instructions input (optional) */}
<<<<<<< HEAD
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
=======
        {showInstructions && (;
          <div className='space-y-2'>;
            <label className='text-sm font-medium'>;
              Special instructions (optional);
            </label>;
            <Input placeholder='E.g., 'Make it more conversational' or 'Focus on leadership skills'''
              value={options.instructions}
          disabled={isEnhancing || (!options.content && !options.context)} />
              onChange={(e) => handleInputChange(e, 'instructions')}'
            />;
          </div>;
        )}
        {/* Generate button */}
        <Button
          onClick={handleGenerate}
          className='w-full' '
  initialContent = '';
}: AIEnhancementPanelProps) {;
    ...defaultOptions,;
    content: initialContent || defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
    if (result) {;
      setGeneratedContent(result);
    }
  },


    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)

    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },

      ...options,
      [field]: e.target.value})
  },

  const handleApply = () => {
    onApply(generatedContent),
    if (onClose) onClose()
  },

    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },

  initialContent?: string
export function AIEnhancementPanel({
  title;
  defaultOptions;
  onApply;
  onClose;
  showInstructions;

  return (
    <Card className='w-full max-w-2xl mx-auto'>
      <CardHeader>'
        <CardTitle className='flex items-center gap-2'>'
          <Sparkles className='h-5 w-5 text-primary' />
          {title}
        </CardTitle>
      </CardHeader>'
      <CardContent className='space-y-4'>
        {/* Input area */}'
        <div className='space-y-2'>'
          <label className='text-sm font-medium'>Content to enhance</label>

            placeholder='Enter your content to enhance...'

            className='min-h-[100px]'
            value={options.content}'
            onChange={(e) => handleInputChange(e, 'content')}
          />;
        </div>;
        {/* Context input */}'
        <div className='space-y-2'>'
          <label className='text-sm font-medium'>Context (optional)</label>
          <Textarea'
            placeholder='Add any relevant context to guide the AI...''
            className='min-h-[60px]'
            value={options.context}'
            onChange={(e) => handleInputChange(e, 'context')}
          />;
        </div>;

        {/* Instructions input (optional) */}

        {showInstructions && (
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Special instructions (optional)</label>
            <Input

              placeholder='E.g., 'Make it more conversational' or 'Focus on leadership skills''
  initialContent = ,;')
}: AIEnhancementPanelProps) {;
)
  const [generatedContent, setGeneratedContent] = useState<string>();
</string>
        </div>;
        <div className='space-y-2'>;
</div>
          <label className='text-sm font-medium'>Context (optional)</label>;
          <Textarea;
            placeholder='Add any relevant context to guide the AI...
            className='min-h-[60px]
            value={options && options.context}
            onChange={e => handleInputChange(e, 'context')}          />;

<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

    <Card className='w-full max-w-2xl mx-auto'>'

      <CardHeader>
'
        <CardTitle className='flex items-center gap-2'>'
          <Sparkles className='h-5 w-5 text-primary' />'

      <CardContent className='space-y-4'>'
        <div className='space-y-2'>'
</div>'
          <label className='text-sm font-medium'>Content to enhance</label>'
          <Textarea;'
            placeholder='Enter your content to enhance...'''
            className='min-h-[100px]''
            value={options.content}'
            onChange={(e) => handleInputChange(e, 'content')}

          <label className='text-sm font-medium'>Context (optional)</label>'
            placeholder='Add any relevant context to guide the AI...'''
            className='min-h-[60px]''
            value={options.context}'
            onChange={(e) => handleInputChange(e, 'context')}

            <label className='text-sm font-medium'>;
</label>
            </label>;
            <Input;
              placeholder='E.g., 'Make it more conversational' or 'Focus on leadership skills'''
pr-12325
              value={options.instructions}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          disabled={isEnhancing || (!options.content && !options.context)}        >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx

              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}

        {/* Generate button */}

        <Button 
          onClick={handleGenerate} 

          className='w-full' 
          disabled={isEnhancing || !options.content && !options.context}
        >
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
          {isEnhancing ? (
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
=======

<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
          {isEnhancing ? (
            <>'
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          {isEnhancing ? (
            <>
<<<<<<< HEAD
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
=======
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
              Enhancing...
        <Button;
          onClick={handleGenerate} '
          className='w-full''
          disabled={isEnhancing || !options.content && !options.context}
        >

            <>'
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
</Loader2>
pr-12325
            </>
          ) : (
<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx

=======
            <>
<<<<<<< HEAD
              <Sparkles className="mr-2 h-4 w-4" />
=======
              <Sparkles className='mr-2 h-4 w-4' />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
              Generate Enhanced Content
            </>
          )}
        </Button>;

              <Sparkles className='mr-2 h-4 w-4' />
              Generate Enhanced Content;
            </>
          )}

        </Button>
          disabled={isEnhancing || (!options && options.content && !options && options.context)}>;
          {isEnhancing ? (;
            <>;'
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
              Enhancing...;
            </>;
          ) : (;
            <>;'
              <Sparkles className='mr-2 h-4 w-4' />;
              Generate Enhanced Content;
            </>;
          )}
        </Button>;

        {/* Output area */}
        {generatedContent && (
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">

              <label className='text-sm font-medium'>Generated content</label>
              <Button '
                variant='ghost' '
                size='sm' 
                onClick={handleCopy}'
                className='h-8'
              >
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
                {copied ? (

                  <><Check className='h-4 w-4 mr-1' /> Copied</>
                ) : ('
                  <><Copy className='h-4 w-4 mr-1' /> Copy</>
                )}
<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx

              </Button>
            </div>
            <div className="relative">
=======
<<<<<<< HEAD
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
=======
              </Button>;
            </div>;
            <div className='relative'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
              <Textarea

                value={generatedContent}

                onChange={(e) => setGeneratedContent(e.target.value)}

                className='min-h-[200px]'
              />

            </div>
          </div>
        )}

<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


      {generatedContent && (
<<<<<<< HEAD
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
=======
        <CardFooter className='flex justify-between'>
          {onClose && (
            <Button variant='outline' onClick={onClose}>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
              Cancel
            </Button>
          )}

      {generatedContent && (

        <CardFooter className='flex justify-between'>
          {onClose && ('
            <Button variant='outline' onClick={onClose}>
              Cancel;
            </Button>

      </CardContent>;

        <CardFooter className='flex justify-between'>;
          {onClose && (;'
            <Button variant='outline' onClick={onClose}>;
              Cancel;
            </Button>;
          )}
<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx
=======
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
      )}
    </Card>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx
    </Card>;
  );

}

    <Card className='w - full max - w-2xl mx - auto'>;
      <CardHeader>;'
        <CardTitle className='flex items - center gap - 2'>;'
          <Sparkles className='h - 5 w - 5 text - primary' />;
          {title}
        </CardTitle>;
      </CardHeader>;'
      <CardContent className='space - y-4'>;
        {/* Input area */}'
        <div className='space - y-2'>;'
          <label className='text - sm font - medium'>Content to enhance</label>;

            className='min - h-[100px]';
            value={options.content}'
            on_change={e => handleInputChange (e, 'content')}          />;
        </div>;
        {/* Context input */}'
        <div className='space - y-2'>;'
          <label className='text - sm font - medium'>Context (optional)</label>;

            className='min - h-[60px]';
            value={options.context}'
            on_change={e => handleInputChange (e, 'context')}          />;
        </div>;
        {/* Instructions input (optional) */}
        {show_instructions && ('
          <div className='space - y-2'>;'
            <label className='text - sm font - medium'>;
              Special instructions (optional);
            </label>;

          </div>)}
        {/* Generate button */}
        <Button;
          on_click={handle_generate}'
          className='w - full';
          disabled={is_enhancing || (!options.content && !options.context)}        >;
          {is_enhancing ? (
            <>;'
              <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />;
              Enhancing...;
            </>) : (
            <>;'
              <Sparkles className='mr - 2 h - 4 w - 4' />;
              Generate Enhanced Content;
            </>)}
        </Button>;
        {/* Output area */}
        {generated_content && ('
          <div className='space - y-2 mt - 4'>;'
            <div className='flex justify - between items - center'>;'
              <label className='text - sm font - medium'>Generated content</label>;

                size='sm';
                on_click={handle_copy}'
                className='h - 8'              >;
                {copied ? (
                  <>;'
                    <Check className='h - 4 w - 4 mr - 1' /> Copied;
                  </>) : (
                  <>;'
                    <Copy className='h - 4 w - 4 mr - 1' /> Copy;
                  </>)}
              </Button>;
            </div>;'
            <div className='relative'>;
              <Textarea;
                value={generated_content}

            </div>;
          </div>)}
      </CardContent>;
      {generated_content && ('
        <CardFooter className='flex justify - between'>;
          {on_close && ('
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
<<<<<<< HEAD:src-disabled/components/ai-enhancement/AIEnhancementPanel.tsx

;
    </Card>
  );
=======
    </Card>;
  );
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ai-enhancement/AIEnhancementPanel.tsx

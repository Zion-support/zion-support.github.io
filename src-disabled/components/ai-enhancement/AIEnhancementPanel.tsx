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
import {;
=======

  title: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
  useAIContentEnhancer,;
  AIEnhancementOptions,;'
} from '@/hooks/useAIContentEnhancer';
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

interface AIEnhancementPanelProps {  title: string;
=======

:src/components/ai-enhancement/AIEnhancementPanel.tsx
  title: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
interface AIEnhancementPanelProps {;
  title: string;,
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
  defaultOptions: AIEnhancementOptions;
  onApply: (content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
<<<<<<< HEAD
import React, { useState } from 'react';
import {}
  Card,
  CardContent,
  CardHeader,
  CardTitle,
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
  CardFooter,';
} from '@/components / ui / card'; import React, { useState } from 'react';'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components / ui / card';'
import { Textarea } from '@/components / ui / textarea';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
  useAIContentEnhancer,
  AIEnhancementOptions,'
} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementPanelProps {}
  title: string;
  default_options: AIEnhancementOptions;
  on_apply: (content: string) => void;
  on_close?: () => void;
  show_instructions?: boolean;
  initial_content?: string;
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
export /**;
 * AIEnhancementPanel - Function description;
 */
function AIEnhancementPanel() {}
  const [options, set_options] = useState < AIEnhancementOptions>({}
    ...default_options,
    content: initial_content || default_options.content,
  });'
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
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
    if (on_close ()) {
  $2
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
export function AIEnhancementPanel({;

:src/components/ai-enhancement/AIEnhancementPanel.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  initialContent?: string;
export function AIEnhancementPanel(): any ({;

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
}
;
export function AIEnhancementPanel({;
    // Check condition;
if ( {) {
  $2;
      setGeneratedContent (result);
  const handleInputChange = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions;)
  , ) =>: any {
  // TODO: Implement
    set_options ({
      ...options,
      [field]: e.target.value,)

  const handle_apply = () =>: any {
  // TODO: Implement
    on_apply (generated_content);
    if (on_close ()) {
  const handle_copy = () =>: any {
  // TODO: Implement
    navigator.clipboard.write_text (generated_content);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);

  initialContent?: string;
export function AIEnhancementPanel(): any ({;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
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
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
  showInstructions = true,;
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  initialContent = '';
  initialContent = '',;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions,;
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
    content: initialContent || defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
=======
  });
  const [generatedContent, setGeneratedContent] = useState<string>('');,
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result);
    }
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
  },
=======

:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            value={options && options.content}
            onChange={e => handleInputChange(e, 'content')}          />;
        </div>;
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

        {/* Context input */}'
        <div className='space-y-2'>;'
          <label className='text-sm font-medium'>Context (optional)</label>;
          <Textarea'
            placeholder='Add any relevant context to guide the AI...''
            className='min-h-[60px]'

            value={options && options.context}'
            onChange={e => handleInputChange(e, 'context')}          />;
        </div>;
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof,  AIEnhancementOptions
  ) => {
    setOptions({
      ...options,
  return (
    <Card className="w-full max-w-2xl mx-auto">"
      <CardHeader>
        <CardTitle className="flex items-center gap-2">"
          <Sparkles className="h-5 w-5 text-primary" />"
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">"
        {/* Input area */}
        <div className="space-y-2">"
          <label className="text-sm font-medium">Content to enhance</label>"
          <Textarea
            placeholder="Enter your content to enhance...""
            className="min-h-[100px]"",
            value={options.content}
            onChange={(e) => handleInputChange(e, 'content')}'
          />;
        </div>;
        {/* Context input */}
        <div className="space-y-2">"
          <label className="text-sm font-medium">Context (optional)</label>"
          <Textarea
            placeholder="Add any relevant context to guide the AI...""
            className="min-h-[60px]"",
            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}'
          />;
        </div>;
        {/* Instructions input (optional) */}
        {showInstructions && (;
          <div className='space-y-2'>;
            <label className='text-sm font-medium'>;
              Special instructions (optional);
            </label>;
            <Input placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'""
              value={options.instructions}
          disabled={isEnhancing || (!options.content && !options.context)} />
              onChange={(e) => handleInputChange(e, 'instructions')}'
            />;
          </div>;
        )}
        {/* Generate button */}
        <Button
          onClick={handleGenerate}
          className="w-full" "
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

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
  const handleInputChange = (
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  },
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

  initialContent?: string
export function AIEnhancementPanel({
  title;
  defaultOptions;
  onApply;
  onClose;
  showInstructions;
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>"
        <CardTitle className="flex items-center gap-2">"
          <Sparkles className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>"
      <CardContent className="space-y-4">
        {/* Input area */}"
        <div className="space-y-2">"
          <label className="text-sm font-medium">Content to enhance</label>
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
          <Textarea
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
            placeholder="Enter your content to enhance..."
=======
          <Textarea;
"
            placeholder="Enter your content to enhance...""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ai-enhancement/AIEnhancementPanel.tsx
            className="min-h-[100px]"
            value={options.content}'
            onChange={(e) => handleInputChange(e, 'content')}
          />;
        </div>;
        {/* Context input */}"
        <div className="space-y-2">"
          <label className="text-sm font-medium">Context (optional)</label>
          <Textarea"
            placeholder="Add any relevant context to guide the AI...""
            className="min-h-[60px]"
            value={options.context}'
            onChange={(e) => handleInputChange(e, 'context')}
          />;
        </div>;
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
{/* Instructions input (optional) */}
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
  initialContent = ,;')
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
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

    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

    <Card className="w-full max-w-2xl mx-auto">"

      <CardHeader>
"
        <CardTitle className="flex items-center gap-2">"
          <Sparkles className="h-5 w-5 text-primary" />"

      <CardContent className="space-y-4">"
        <div className="space-y-2">"
</div>"
          <label className="text-sm font-medium">Content to enhance</label>"
          <Textarea;"
            placeholder="Enter your content to enhance..."""
            className="min-h-[100px]""
            value={options.content}"
            onChange={(e) => handleInputChange(e, 'content')}

          <label className="text-sm font-medium">Context (optional)</label>"
            placeholder="Add any relevant context to guide the AI..."""
            className="min-h-[60px]""
            value={options.context}"
            onChange={(e) => handleInputChange(e, 'context')}

            <label className='text-sm font-medium'>;
</label>
            </label>;
            <Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'""
pr-12325
              value={options.instructions}
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
;
        {/* Generate button */}
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        <Button 
          onClick={handleGenerate}
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}
        >
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
          {isEnhancing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

          {isEnhancing ? (
            <>'
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          {isEnhancing ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />'
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
              Enhancing...
        <Button;
          onClick={handleGenerate} "
          className="w-full""
          disabled={isEnhancing || !options.content && !options.context}
        >

            <>"
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
</Loader2>
pr-12325
            </>
          ) : (
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
            <>
<<<<<<< HEAD
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Enhanced Content
            </>
          )}
        </Button>;
              <Sparkles className='mr-2 h-4 w-4' />
              Generate Enhanced Content;
            </>
          )}
:src/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
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
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Output area */}
        {generatedContent && (
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
=======
"
          <div className="space-y-2 mt-4">"
            <div className="flex justify-between items-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ai-enhancement/AIEnhancementPanel.tsx
              <label className="text-sm font-medium">Generated content</label>
              <Button "
                variant="ghost" "
                size="sm" 
                onClick={handleCopy}"
                className="h-8"
              >
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementPanel.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
                {copied ? (
=======
                {copied ? ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ai-enhancement/AIEnhancementPanel.tsx
                  <><Check className="h-4 w-4 mr-1" /> Copied</>
                ) : ("
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>
                )}
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
</Button>
            </div>
            <div className="relative">
              <Textarea
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
                value={generatedContent}
=======

            </>)
          )}
            <>;
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
            </>;
          ) : (;
              <Sparkles className='mr-2 h-4 w-4' />;

            </>;)
        ;
          <div className="space-y-2 mt-4">"
            <div className="flex justify-between items-center">"
              <label className="text-sm font-medium">Generated content</label>"
              <Button;"
                variant="ghost"""
                size="sm""
                onClick={handleCopy}"
                className="h-8""
                  <><Check className="h-4 w-4 mr-1" /> Copied</>"
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>"

            </div>;"
            <div className='relative'>;
pr-12325
                value={generatedContent}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
                onChange={(e) => setGeneratedContent(e.target.value)}
=======
                onChange={(e) => setGeneratedContent(e.target.value)}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ai-enhancement/AIEnhancementPanel.tsx
                className="min-h-[200px]"
              />
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
            </div>
          </div>
        )}

:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD

{generatedContent && (
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
      {generatedContent && (
=======
      {generatedContent && ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ai-enhancement/AIEnhancementPanel.tsx
        <CardFooter className='flex justify-between'>
          {onClose && ('
            <Button variant='outline' onClick={onClose}>
              Cancel;
            </Button>
:src/components/ai-enhancement/AIEnhancementPanel.tsx
</CardContent>;
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

      {generatedContent && (;'
        <CardFooter className='flex justify-between'>;
          {onClose && (;'
            <Button variant='outline' onClick={onClose}>;
              Cancel;
            </Button>;
          )}
    </Card>;
  );
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD:src/components/ai-enhancement/AIEnhancementPanel.tsx
}
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ai-enhancement/AIEnhancementPanel.tsx
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
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
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
          <Textarea;'
            placeholder='Enter your content to enhance...';'
            className='min - h-[100px]';
            value={options.content}'
            on_change={e => handleInputChange (e, 'content')}          />;
        </div>;
        {/* Context input */}'
        <div className='space - y-2'>;'
          <label className='text - sm font - medium'>Context (optional)</label>;
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
          <Textarea;'
            placeholder='Add any relevant context to guide the AI...';'
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
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
            <Input;'"
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}'
              on_change={e => handleInputChange (e, 'instructions')}            />;
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
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
              <Button;'
                variant='ghost';'
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
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
                on_change={e => setGeneratedContent (e.target.value)}'
                className='min - h-[200px]'              />;
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
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
    </Card>;
  );
}
<<<<<<< HEAD:src_backup/components/ai-enhancement/AIEnhancementPanel.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </Card>;
  );
}
;
}}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx
;
    </Card>
  );
:src/components/ai-enhancement/AIEnhancementPanel.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ai-enhancement/AIEnhancementPanel.tsx
=======

                    <Check className='h - 4 w - 4 mr - 1' /> Copied;

                    <Copy className='h - 4 w - 4 mr - 1' /> Copy;
                value={generated_content}
                on_change={e => setGeneratedContent (e.target.value)}

        <CardFooter className='flex justify - between'>;

            <Button variant='outline' on_click={on_close}>;

          <Button on_click={handle_apply}>Apply to Form;
    );
          <Button onClick={handleApply}>;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ai-enhancement/AIEnhancementPanel.tsx

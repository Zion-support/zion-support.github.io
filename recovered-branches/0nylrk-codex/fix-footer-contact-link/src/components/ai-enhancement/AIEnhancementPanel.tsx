
<<<<<<< HEAD

=======
export function AIEnhancementPanel({;
export function AIEnhancementPanel({;

export function AIEnhancementPanel(): any ({;


import {Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Sparkles, Loader2, Copy, Check} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';

interface AIEnhancementPanelProps {;
  title: string,;
  defaultOptions: AIEnhancementOptions,;
  onApply: (content: string) => void,;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from 'react';
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}

<<<<<<< HEAD


export function AIEnhancementPanel(): any ({;



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  title;
  defaultOptions;
  onApply;
  onClose;
    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

<<<<<<< HEAD

  showInstructions = true;

=======

    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();


>>>>>>> origin/cursor/delete-old-data-records-6bba
    const result = await enhanceContent(options);

    if (result) {
      setGeneratedContent(result)
    }
<<<<<<< HEAD


  }
};

=======
  };

  }
  };

>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',;

import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface AIEnhancementPanelProps {;
  title: string,;
  defaultOptions: AIEnhancementOptions,;
  onApply: (content: string) => void,;
  onClose?: () => void,;
  showInstructions?: boolean,;
  initialContent?: string;
}
;
export function AIEnhancementPanel() { return null; }
    content: initialContent || defaultOptions.content}),;'
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
<<<<<<< HEAD




=======
  const handleGenerate = async () => {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const result = await enhanceContent(options);
    if (result) {;
      setGeneratedContent(result);
    }


<<<<<<< HEAD
  },

    const result = await enhanceContent(options);

  const handleGenerate = async () => {;
    const result = await enhanceContent(options);

    if (result) {;
      setGeneratedContent(result);
    }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions;
  ) => {}
    setOptions({}
      ...options;
      [field]: e.target.value})

  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result);
    }
  },




=======


  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result);
    }
  },


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
      ...options
      [field]: e.target.value})

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)


<<<<<<< HEAD
  };
=======
  },

  return (

  return (

>>>>>>> origin/cursor/delete-old-data-records-6bba

    <Card className="w-full max-w-2xl mx-auto">;

          <Sparkles className="h-5 w-5 text-primary" />;

          {title}
        </CardTitle>;
      </CardHeader>;"
      <CardContent className="space-y-4">;
        {/* Input area */}"
        <div className="space-y-2">;"
          <label className="text-sm font-medium">Content to enhance</label>;


        {/* Context input */}
        <div className="space-y-2">;

          <label className="text-sm font-medium">Context (optional)</label>;
          <Textarea"
            placeholder="Add any relevant context to guide the AI...""
            className="min-h-[60px]"
            value={options && options.context}'
            onChange={(e) => handleInputChange(e, 'context')}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Instructions input (optional) */}
        {showInstructions && (;"
          <div className="space-y-2">;"
            <label className="text-sm font-medium">Special instructions (optional)</label>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
}
  },

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000)
  }
  },


<<<<<<< HEAD
=======
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
          />
        </div>
        {/* Context input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Context (optional)</label>
          <Textarea
            placeholder="Add any relevant context to guide the AI..."
            className="min-h-[60px]"
            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}
          />
        </div>
        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options.instructions}
              onChange={(e) => handleInputChange(e, 'instructions')}
            />
          </div>
        )}
        {/* Generate button */}
        <Button
          onClick={handleGenerate}
          className="w-full"
          disabled={isEnhancing |!options.content && !options.context}
>>>>>>> origin/cursor/delete-old-data-records-6bba


        {/* Generate button */}
        <Button 
          onClick={handleGenerate} 

          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}

<<<<<<< HEAD


        >
          {isEnhancing ? (

            <>"

=======
        >
          {isEnhancing ? (
            <>"
        >
          {isEnhancing ? (
            <>
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enhancing...
            </>
          ) : (
<<<<<<< HEAD

            <>"
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Enhanced Content;

=======
            <>"
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Enhanced Content;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </>
          )}
        </Button>
        {/* Output area */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {generatedContent && ("
          <div className="space-y-2 mt-4">"
            <div className="flex justify-between items-center">"
              <label className="text-sm font-medium">Generated content</label>
              <Button"
                variant="ghost""
                size="sm"

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
          {isEnhancing ? (;
            <>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Enhancing...;
            </>;

<<<<<<< HEAD
          ) :(;
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Enhanced Content;
            </>;          )}
        </Button>;
;
        {/* Output area */}
        {generatedContent && (;
          <div className="space-y-2 mt-4">;
            <div className="flex justify-between items-center">;
              <label className="text-sm font-medium">Generated content</label>;
              <Button ;
                variant="ghost" ;
                size="sm" ;
                onClick={handleCopy}
                className="h-8";
              >;
                {copied ? (;
                  <><Check className="h-4 w-4 mr-1" /> Copied</>;
                ) :(;
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>;
                )}
              </Button>;
            </div>;
            <div className="relative">;
              <Textarea;
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]";
              />;
            </div>;
          </div>;
        )}
      </CardContent>;
      ;
      {generatedContent && (;
        <CardFooter className="flex justify-between">;
          {onClose && (;
            <Button variant="outline" onClick={onClose}>;
              Cancel;
          )}
            </Button>;          )}
          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components / ui / card';
import {Textarea} from '@/components / ui / textarea';
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {Sparkles, Loader2, Copy, Check} from '@/components / icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementPanelProps {
  title: string,
  default_options: AIEnhancementOptions,
  on_apply: (content: string) => void,
  on_close?: () => void;
  show_instructions?: boolean;
  initial_content?: string;
}
export /**
 * AIEnhancementPanel - Function description
 */
function AIEnhancementPanel() {
  const [options, set_options] = useState < AIEnhancementOptions>({
    ...default_options;
    content: initial_content || default_options.content}),
  const [generated_content, setGeneratedContent] = useState < string>('');
  const [copied, set_copied] = useState (false);
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
;
  const handle_generate = async () => {
    const result = await enhance_content (options);
    // Check condition
if ( {) {
  $2
}
      setGeneratedContent (result);
    }
  }
;
  const handleInputChange = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions) =>: any {
    set_options ({
      ...options,
      [field]: e.target.value});
  }
;
  const handle_apply = () =>: any {
    on_apply (generated_content);
    if (on_close ()) {
  $2
}
  }
;
  const handle_copy = () =>: any {
    navigator.clipboard.write_text (generated_content);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }
;
  return (
    <Card className="w - full max - w-2xl mx - auto">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Sparkles className="h - 5 w - 5 text - primary" />;
          {title}
        </CardTitle>;
      </CardHeader>;
      <CardContent className="space - y-4">;
        {/* Input area */}
        <div className="space - y-2">;
          <label className="text - sm font - medium">Content to enhance</label>;
          <Textarea;
            placeholder="Enter your content to enhance...";
            className="min - h-[100px]";
            value={options.content}
            on_change={(e) => handleInputChange (e, 'content')}
          />;
        </div>;
        {/* Context input */}
        <div className="space - y-2">;
          <label className="text - sm font - medium">Context (optional)</label>;
          <Textarea;
            placeholder="Add any relevant context to guide the AI...";
            className="min - h-[60px]";
            value={options.context}
            on_change={(e) => handleInputChange (e, 'context')}
          />;
        </div>;
        {/* Instructions input (optional) */}
        {show_instructions && (
          <div className="space - y-2">;
            <label className="text - sm font - medium">Special instructions (optional)</label>;
            <Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              on_change={(e) => handleInputChange (e, 'instructions')}

          </div>)}

          className="w - full";
          disabled={is_enhancing || !options.content && !options.context}
        >;
          {is_enhancing ? (

              <Sparkles className="mr - 2 h - 4 w - 4" />;
              Generate Enhanced Content;
            </>)}
        </Button>;
        {/* Output area */}

                className="min - h-[200px]";
              />;
            </div>;
          </div>)}
      </CardContent>;

            <Button variant="outline" on_click={on_close}>;
              Cancel;
            </Button>)}

          <Button on_click={handle_apply}>;
            Apply to Form;
          </Button>;
        </CardFooter>)}
    </Card>);

}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

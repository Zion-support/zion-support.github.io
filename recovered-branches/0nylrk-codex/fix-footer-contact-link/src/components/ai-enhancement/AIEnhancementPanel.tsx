
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

import React, { useState } from 'react';
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}


  title;
  defaultOptions;
  onApply;
  onClose;
    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();


    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();


    const result = await enhanceContent(options);

    if (result) {
      setGeneratedContent(result)
    }
  };

  }
  };

import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',;

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
export function AIEnhancementPanel() { return null; }
    content: initialContent || defaultOptions.content}),;'
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
  const handleGenerate = async () => {;
    const result = await enhanceContent(options);
    if (result) {;
      setGeneratedContent(result);
    }




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
      ...options
      [field]: e.target.value})

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)


  },

  return (

  return (


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

        {/* Instructions input (optional) */}
        {showInstructions && (;"
          <div className="space-y-2">;"
            <label className="text-sm font-medium">Special instructions (optional)</label>;


            <Input'"
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
'


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


        {/* Generate button */}
        <Button 
          onClick={handleGenerate} 

          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}

        >
          {isEnhancing ? (
            <>"
        >
          {isEnhancing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enhancing...
            </>
          ) : (
            <>"
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Enhanced Content;
            </>
          )}
        </Button>
        {/* Output area */}
        {generatedContent && ("
          <div className="space-y-2 mt-4">"
            <div className="flex justify-between items-center">"
              <label className="text-sm font-medium">Generated content</label>
              <Button"
                variant="ghost""
                size="sm"


          {isEnhancing ? (;
            <>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Enhancing...;
            </>;


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

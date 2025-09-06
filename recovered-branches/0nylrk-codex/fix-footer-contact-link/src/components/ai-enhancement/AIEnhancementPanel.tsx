<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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

  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}


export function AIEnhancementPanel(): any ({;

=======

=======
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2


export function AIEnhancementPanel({;

import React, { useState } from 'react';
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD


export function AIEnhancementPanel({;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title;
  defaultOptions;
  onApply;
  onClose;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  showInstructions = true;
  initialContent = '';
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions;
<<<<<<< HEAD

    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

<<<<<<< HEAD
=======
=======
=======
    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

  showInstructions = true;
  initialContent = ''
}: AIEnhancementPanelProps) {
  const [options, setOptions] = useState<AIEnhancementOptions>({
    ...defaultOptions;
    content: initialContent |defaultOptions.content})
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const handleGenerate = async () => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const result = await enhanceContent(options);
=======
export function AIEnhancementPanel({;    const result = await enhanceContent(options);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (result) {
      setGeneratedContent(result)
    }

  }
};

<<<<<<< HEAD
  };

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
export function AIEnhancementPanel({;
  title,;
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;
  initialContent = '';
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions,;
    content: initialContent || defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;

  const handleGenerate = async () => {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    const result = await enhanceContent(options);
    if (result) {;
      setGeneratedContent(result);
    }

  },

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  const handleGenerate = async () => {;
=======

  const handleGenerate = async () => {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const result = await enhanceContent(options);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (result) {;
      setGeneratedContent(result);
    }

<<<<<<< HEAD



<<<<<<< HEAD
  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result);
    }
  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
      ...options
      [field]: e.target.value})
<<<<<<< HEAD

  const handleApply = () => {
    onApply(generatedContent);
    if (onClose) onClose()

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
<<<<<<< HEAD
=======
<<<<<<< HEAD

  };

  const handleInputChange = (;
    e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
    field: keyof AIEnhancementOptions;
  ) => {;
    setOptions({;
      ...options,;
      [field]: e && e.target.value});
  };

  const handleApply = () => {;
    onApply(generatedContent);
    if (onClose) onClose();
  };

  const handleCopy = () => {;
    navigator && navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


  return (
<<<<<<< HEAD
=======

import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',;
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;
;
interface AIEnhancementPanelProps {;
  title:string,;
  defaultOptions:AIEnhancementOptions,;
  onApply:(content:string) => void,;
  onClose?:() => void,;
  showInstructions?:boolean,;
  initialContent?:string;
}
;
export function AIEnhancementPanel({;
  title,;
  defaultOptions,;
  onApply,;
  onClose,;
  showInstructions = true,;
  initialContent = '';
} AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions,;
    content:initialContent || defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>(''),;
  const [copied, setCopied] = useState(false),;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
;
  const handleGenerate = async () => {;
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result),;
    }
  },;
;
  const handleInputChange = (;
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
    field:keyof AIEnhancementOptions;
  ) => {;
    setOptions({;
      ...options,;
      [field]:e.target.value}),;
  },;
;
  const handleApply = () => {;
    onApply(generatedContent),;
    if (onClose) onClose(),;
  },;
;
  const handleCopy = () => {;
    navigator.clipboard.writeText(generatedContent),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000),;
  },;
;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <Card className="w-full max-w-2xl mx-auto">;
      <CardHeader>;
=======
  return (      <CardHeader>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <CardTitle className="flex items-center gap-2">;
          <Sparkles className="h-5 w-5 text-primary" />;
          {title}
        </CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {/* Input area */}
        <div className="space-y-2">;
          <label className="text-sm font-medium">Content to enhance</label>;
        {/* Context input */}
        <div className="space-y-2">;
          <label className="text-sm font-medium">Context (optional)</label>;
          <Textarea
            placeholder="Add any relevant context to guide the AI..."
            className="min-h-[60px]"
            value={options && options.context}
            onChange={(e) => handleInputChange(e, 'context')}

          />;
        </div>;
<<<<<<< HEAD


=======
          />;
        </div>;
          <Textarea;
            placeholder="Enter your content to enhance...";
            className="min-h-[100px]";            value={options.content}
            onChange={(e) => handleInputChange(e, 'content')}
          />;
        </div>;
;
        {/* Context input */}
        <div className="space-y-2">;
          <label className="text-sm font-medium">Context (optional)</label>;
          <Textarea;
            placeholder="Add any relevant context to guide the AI...";
            className="min-h-[60px]";            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}
          />;
        </div>;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Instructions input (optional) */}
        {showInstructions && (;
          <div className="space-y-2">;
            <label className="text-sm font-medium">Special instructions (optional)</label>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Input
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
=======
            <Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            <Input
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
<<<<<<< HEAD

=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

  }
  },

  const handleApply = () => {
    onApply(generatedContent),
    if (onClose) onClose()
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        {/* Generate button */}
        <Button 
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        >
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
        {/* Output area */}
        {generatedContent && (
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Generated content</label>
              <Button
                variant="ghost"
                size="sm"
          {isEnhancing ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Enhancing...;
            </>;
          ) : (;
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Enhanced Content;
            </>;
          )}
        </Button>;                className="min-h-[200px]";
              />;
            </div>;
          </div>;
        )}

      </CardContent>;
      {generatedContent && (;
        <CardFooter className="flex justify-between">;
          {onClose && (;
            <Button variant="outline" onClick={onClose}>;
              Cancel;
            </Button>;

          )}          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}

    </Card>;
  );
}
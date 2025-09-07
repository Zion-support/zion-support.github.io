<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Sparkles, Loader2, Copy, Check} from '@/components/icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks/useAIContentEnhancer';

<<<<<<< HEAD
interface AIEnhancementPanelProps {;
  title: string,;
  defaultOptions: AIEnhancementOptions,;
  onApply: (content: string) => void,;

<<<<<<< HEAD
=======
export function AIEnhancementPanel(): any ({;



import React, { useState } from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React, { useState } from 'react';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


export function AIEnhancementPanel({;

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React, { useState } from 'react';
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD


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
=======

export function AIEnhancementPanel({;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  title;
  defaultOptions;
  onApply;
  onClose;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
  showInstructions = true;
  initialContent = '';
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
    ...defaultOptions;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    content: initialContent || defaultOptions && defaultOptions.content}),;
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

<<<<<<< HEAD
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
=======
export function AIEnhancementPanel({;    const result = await enhanceContent(options);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    const result = await enhanceContent(options);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export function AIEnhancementPanel({;    const result = await enhanceContent(options);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    if (result) {
      setGeneratedContent(result)
    }

  }
};

<<<<<<< HEAD
<<<<<<< HEAD
  };

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',;
=======
export function AIEnhancementPanel() { return null; }
    if (result) {}
      setGeneratedContent(result)
    }



  };

'
import React, { useState } from 'react',;'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;'
import { Textarea } from '@/components/ui/textarea',;'
import { Button } from '@/components/ui/button',;'
import { Input } from '@/components/ui/input',;'
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
  const handleGenerate = async () => {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const result = await enhanceContent(options);
    if (result) {;
      setGeneratedContent(result);
    }

  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const result = await enhanceContent(options);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



  const handleGenerate = async () => {;
=======
const handleGenerate = async () => {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  const handleGenerate = async () => {;
    const result = await enhanceContent(options);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (result) {;
      setGeneratedContent(result);
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD




<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions;
  ) => {}
    setOptions({}
      ...options;
      [field]: e.target.value})
<<<<<<< HEAD
<<<<<<< HEAD

  const handleApply = () => {
    onApply(generatedContent);
    if (onClose) onClose()

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  const handleCopy = () => {}
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


  return (


  return (

    <Card className="w-full max-w-2xl mx-auto">;
<<<<<<< HEAD
      <CardHeader>;
=======
  return (      <CardHeader>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (      <CardHeader>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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

  },

  return (
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
  return (
    <Card className="w-full max-w-2xl mx-auto">;
      <CardHeader>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  return (      <CardHeader>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <CardTitle className="flex items-center gap-2">;
=======
      <CardHeader>;"
        <CardTitle className="flex items-center gap-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Sparkles className="h-5 w-5 text-primary" />;

          {title}
        </CardTitle>;
      </CardHeader>;"
      <CardContent className="space-y-4">;
        {/* Input area */}"
        <div className="space-y-2">;"
          <label className="text-sm font-medium">Content to enhance</label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Textarea
            placeholder="Enter your content to enhance..."
            className="min-h-[100px]"
            value={options && options.content}
            onChange={(e) => handleInputChange(e, 'content')}

          />;
        </div>;

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
/>;
        </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {/* Context input */}
        <div className="space-y-2">;
=======

          <Textarea"
            placeholder="Enter your content to enhance...""
            className="min-h-[100px]"
            value={options && options.content}'
            onChange={(e) => handleInputChange(e, 'content')}



        {/* Context input */}"
        <div className="space-y-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <label className="text-sm font-medium">Context (optional)</label>;
          <Textarea"
            placeholder="Add any relevant context to guide the AI...""
            className="min-h-[60px]"
            value={options && options.context}'
            onChange={(e) => handleInputChange(e, 'context')}
<<<<<<< HEAD

          />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



        {/* Instructions input (optional) */}
        {showInstructions && (;"
          <div className="space-y-2">;"
            <label className="text-sm font-medium">Special instructions (optional)</label>;


            <Input'"
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
'
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
        {/* Instructions input (optional) */}
        {showInstructions && (;
          <div className="space-y-2">;
            <label className="text-sm font-medium">Special instructions (optional)</label>;
            <Input
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
<Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}
            <Input
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
}
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


        {/* Generate button */}
        <Button;
          onClick={handleGenerate} "
=======
=======
  const handleApply = () => {
    onApply(generatedContent),
    if (onClose) onClose()
  }
  },
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        >
          {isEnhancing ? (
            <>"
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
onClick={handleGenerate} 
          className="w-full" 
          disabled={isEnhancing || !options && options.content && !options && options.context}>;
;
        {/* Generate button */}
        <Button ;
          onClick={handleGenerate} ;
          className="w-full" ;
          disabled={isEnhancing || !options.content && !options.context}
        >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          {isEnhancing ? (;
            <>;"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Enhancing...;
            </>;
<<<<<<< HEAD
          ) : (;
            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Enhanced Content;
            </>;
          )}
<<<<<<< HEAD
        </Button>;                className="min-h-[200px]";
=======



        {/* Output area */}
        {generatedContent && (;"
          <div className="space-y-2 mt-4">;"
            <div className="flex justify-between items-center">;"
              <label className="text-sm font-medium">Generated content</label>;

                onClick={handleCopy}"
                className="h-8">;
                {copied ? (;"
                  <><Check className="h-4 w-4 mr-1" /> Copied</>;
                ) : (;


"
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>;
                )}
              </Button>;
            </div>;"
            <div className="relative">;


"
                className="min-h-[200px]";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        </Button>;

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
              <Button
                variant="ghost" 
                size="sm" 
{/* Generate button */}
        <Button
                onClick={handleCopy}
                className="h-8">;
                {copied ? (;
                  <><Check className="h-4 w-4 mr-1" /> Copied</>;
                ) : (;
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
              <Textarea
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e && e.target.value)}
<Textarea;
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]";
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        </Button>;                className="min-h-[200px]";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              />;
            </div>;
          </div>;
        )}

<<<<<<< HEAD
      </CardContent>;

</CardContent>;
      ;
      {generatedContent && (;
=======
      {generatedContent && (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <CardFooter className="flex justify-between">;
          {onClose && (;"
            <Button variant="outline" onClick={onClose}>;
              Cancel;
<<<<<<< HEAD
            </Button>;

<<<<<<< HEAD
          )}          <Button onClick={handleApply}>;
=======



          <Button onClick={handleApply}>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          )}
)}
            </Button>;          )}
          <Button onClick={handleApply}>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          )}          <Button onClick={handleApply}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}

<<<<<<< HEAD
    </Card>;
  );
}
<<<<<<< HEAD
=======

'
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components / ui / card';'
import {Textarea} from '@/components / ui / textarea';'
import {Button} from '@/components / ui / button';'
import {Input} from '@/components / ui / input';'
import {Sparkles, Loader2, Copy, Check} from '@/components / icons';'
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementPanelProps {}
=======

</Card>;
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from '@/components / ui / card';
import {Textarea} from '@/components / ui / textarea';
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {Sparkles, Loader2, Copy, Check} from '@/components / icons';
import {useAIContentEnhancer, AIEnhancementOptions} from '@/hooks / useAIContentEnhancer';
interface AIEnhancementPanelProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: string,
  default_options: AIEnhancementOptions,
  on_apply: (content: string) => void,
  on_close?: () => void;
  show_instructions?: boolean;
  initial_content?: string;
export function AIEnhancementPanel(): any ({;



export function AIEnhancementPanel({;
)



import React, { useState } from 'react';')




  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
export /**;
 * AIEnhancementPanel - Function description;
 */
function AIEnhancementPanel() {}
  const [options, set_options] = useState < AIEnhancementOptions>({}
    ...default_options;
    content: initial_content || default_options.content}),'
=======
export /**
 * AIEnhancementPanel - Function description
 */
function AIEnhancementPanel() {
  const [options, set_options] = useState < AIEnhancementOptions>({
    ...default_options;
    content: initial_content || default_options.content}),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [generated_content, setGeneratedContent] = useState < string>('');
  const [copied, set_copied] = useState (false);
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
;
<<<<<<< HEAD
  const handle_generate = async () => {}
    const result = await enhance_content (options);
    // Check condition;
if ( {) {}
  $2;
=======
=======




export function AIEnhancementPanel({;
  title;
  defaultOptions;
  onApply;
  onClose;

  showInstructions = true;
  initialContent = ;')
}: AIEnhancementPanelProps) {;
  const [options, setOptions] = useState<AIEnhancementOptions>({;
  const [generatedContent, setGeneratedContent] = useState<string>();
</string>
  const [generatedContent, setGeneratedContent] = useState<string>(),;
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

    e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;

    <Card className="w-full max-w-2xl mx-auto">;"

      <CardHeader>;
"
        <CardTitle className="flex items-center gap-2">;"
          <Sparkles className="h-5 w-5 text-primary" />;"

        ;
      ;"
      <CardContent className="space-y-4">;"
        <div className="space-y-2">;"
</div>"
          <label className="text-sm font-medium">Content to enhance</label>;"
          <Textarea;"
            placeholder="Enter your content to enhance..."""
            className="min-h-[100px]""
            value={options && options.content}"
            onChange={(e) => handleInputChange(e, 'content')}

        </div>;
          <label className="text-sm font-medium">Context (optional)</label>;"
            placeholder="Add any relevant context to guide the AI..."""
            className="min-h-[60px]""
            value={options && options.context}"
            onChange={(e) => handleInputChange(e, 'context')}

            <label className="text-sm font-medium">Special instructions (optional)</label>;"
            <Input;"
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'""
              value={options && options.instructions}
              value={options && options.instructions}"
              onChange={(e) => handleInputChange(e, 'instructions')}

        <Button;
          onClick={handleGenerate} 
          className="w-full""
          disabled={isEnhancing || !options.content && !options.context}


        >

            <>"
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
</Loader2>
            </>
          ) : (
              <Sparkles className="mr-2 h-4 w-4" />"

            </>)
          )}
          <div className="space-y-2 mt-4">"
            <div className="flex justify-between items-center">"
              <label className="text-sm font-medium">Generated content</label>"
              <Button;"
                variant="ghost"""
                size="sm""
          {isEnhancing ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
            </>;)
          ) : (;
            <>;"
              <Sparkles className="mr-2 h-4 w-4" />;"

          <div className="space-y-2 mt-4">;"
            <div className="flex justify-between items-center">;"
              <label className="text-sm font-medium">Generated content</label>;"
        {/* Generate button */}
                onClick={handleCopy}"
                className="h-8">;"
                  <><Check className="h-4 w-4 mr-1" /> Copied</>;"
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>;"

            </div>;"
            <div className="relative">;"
</div>
              <Textarea;
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e && e.target.value)}

        <CardFooter className="flex justify-between">;"
            <Button variant="outline" onClick={onClose}>;"

          <Button onClick={handleApply}>;

  const [options, set_options] = useState < AIEnhancementOptions>({
    ...default_options;)
    content: initial_content || default_options.content}),"
  const [generated_content, setGeneratedContent] = useState < string>();
  const [copied, set_copied] = useState (false);
  const { enhance_content, is_enhancing } = useAIContentEnhancer ();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handle_generate = async () => {
    const result = await enhance_content (options);
    // Check condition;
if ( {) {
<<<<<<< HEAD
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
=======
  $2;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      setGeneratedContent (result);
  const handleInputChange = (
<<<<<<< HEAD
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,
<<<<<<< HEAD
    field: keyof AIEnhancementOptions) =>: any {}
    set_options ({}
=======
=======
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    field: keyof AIEnhancementOptions) =>: any {
  // TODO: Implement
    set_options ({
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ...options,
      [field]: e.target.value});
  }
;
<<<<<<< HEAD
  const handle_apply = () =>: any {}
    on_apply (generated_content);
    if (on_close ()) {}
  $2;
}
  }
;
  const handle_copy = () =>: any {}
=======
=======
      ...options,)
      [field]: e.target.value});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handle_apply = () =>: any {
  // TODO: Implement
    on_apply (generated_content);
    if (on_close ()) {
  const handle_copy = () =>: any {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    navigator.clipboard.write_text (generated_content);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }
;
<<<<<<< HEAD
  return ("
    <Card className="w - full max - w-2xl mx - auto">;
      <CardHeader>;"
        <CardTitle className="flex items - center gap - 2">;"
          <Sparkles className="h - 5 w - 5 text - primary" />;
          {title}
        </CardTitle>;
      </CardHeader>;"
      <CardContent className="space - y-4">;
        {/* Input area */}"
        <div className="space - y-2">;"
          <label className="text - sm font - medium">Content to enhance</label>;
          <Textarea;"
            placeholder="Enter your content to enhance...";"
            className="min - h-[100px]";
            value={options.content}'
            on_change={(e) => handleInputChange (e, 'content')}
          />;
        </div>;
        {/* Context input */}"
        <div className="space - y-2">;"
          <label className="text - sm font - medium">Context (optional)</label>;
          <Textarea;"
            placeholder="Add any relevant context to guide the AI...";"
            className="min - h-[60px]";
            value={options.context}'
=======
=======
  // TODO: Implement
    navigator.clipboard.write_text (generated_content);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <Card className="w - full max - w-2xl mx - auto">;"

        <CardTitle className="flex items - center gap - 2">;"
          <Sparkles className="h - 5 w - 5 text - primary" />;"

      <CardContent className="space - y-4">;"
        <div className="space - y-2">;"
          <label className="text - sm font - medium">Content to enhance</label>;"
            placeholder="Enter your content to enhance...";""
            className="min - h-[100px]";"
            value={options.content})"
            on_change={(e) => handleInputChange (e, 'content')}
<<<<<<< HEAD
          />;
        </div>;
        {/* Context input */}
        <div className="space - y-2">;
          <label className="text - sm font - medium">Context (optional)</label>;
          <Textarea;
            placeholder="Add any relevant context to guide the AI...";
            className="min - h-[60px]";
            value={options.context}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            on_change={(e) => handleInputChange (e, 'context')}
          />;
        </div>;
        {/* Instructions input (optional) */}
<<<<<<< HEAD
        {show_instructions && ("
          <div className="space - y-2">;"
            <label className="text - sm font - medium">Special instructions (optional)</label>;
            <Input;'"
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}'
=======
        {show_instructions && (
          <div className="space - y-2">;
            <label className="text - sm font - medium">Special instructions (optional)</label>;
            <Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

          <label className="text - sm font - medium">Context (optional)</label>;"
            placeholder="Add any relevant context to guide the AI...";""
            className="min - h-[60px]";"
            value={options.context}"
            on_change={(e) => handleInputChange (e, 'context')}

            <label className="text - sm font - medium">Special instructions (optional)</label>;"
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";"
              value={options.instructions}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              on_change={(e) => handleInputChange (e, 'instructions')}

          </div>)}
<<<<<<< HEAD
        {/* Generate button */}
        <Button;
<<<<<<< HEAD
          on_click={handle_generate}"
=======
          on_click={handle_generate}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          className="w - full";
          disabled={is_enhancing || !options.content && !options.context}
        >;
          {is_enhancing ? (
<<<<<<< HEAD
            <>;"
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
              Enhancing...;
            </>) : (
            <>;"
=======
            <>;
              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
              Enhancing...;
            </>) : (
            <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Sparkles className="mr - 2 h - 4 w - 4" />;
              Generate Enhanced Content;
            </>)}
        </Button>;
        {/* Output area */}
<<<<<<< HEAD
        {generated_content && ("
          <div className="space - y-2 mt - 4">;"
            <div className="flex justify - between items - center">;"
              <label className="text - sm font - medium">Generated content</label>;
              <Button;"
                variant="ghost";"
                size="sm";
                on_click={handle_copy}"
                className="h - 8";
              >;
                {copied ? ("
                  <><Check className="h - 4 w - 4 mr - 1" /> Copied</>) : ("
                  <><Copy className="h - 4 w - 4 mr - 1" /> Copy</>)}
              </Button>;
            </div>;"
            <div className="relative">;
              <Textarea;
                value={generated_content}
                on_change={(e) => setGeneratedContent (e.target.value)}"
=======
        {generated_content && (
          <div className="space - y-2 mt - 4">;
            <div className="flex justify - between items - center">;
              <label className="text - sm font - medium">Generated content</label>;
              <Button;
                variant="ghost";
                size="sm";
                on_click={handle_copy}
                className="h - 8";
              >;
                {copied ? (
                  <><Check className="h - 4 w - 4 mr - 1" /> Copied</>) : (
                  <><Copy className="h - 4 w - 4 mr - 1" /> Copy</>)}
              </Button>;
            </div>;
            <div className="relative">;
              <Textarea;
                value={generated_content}
                on_change={(e) => setGeneratedContent (e.target.value)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                className="min - h-[200px]";
              />;
            </div>;
          </div>)}
      </CardContent>;
<<<<<<< HEAD
      {generated_content && ("
        <CardFooter className="flex justify - between">;
          {on_close && ("
=======
      {generated_content && (
        <CardFooter className="flex justify - between">;
          {on_close && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Button variant="outline" on_click={on_close}>;
              Cancel;
            </Button>)}
=======
          on_click={handle_generate}
          className="w - full";"
          disabled={is_enhancing || !options.content && !options.context}
        >;

              <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;"
            </>) : (
              <Sparkles className="mr - 2 h - 4 w - 4" />;"
            </>)}
          <div className="space - y-2 mt - 4">;"
            <div className="flex justify - between items - center">;"
              <label className="text - sm font - medium">Generated content</label>;"
                variant="ghost";""
                size="sm";"
                on_click={handle_copy}"
                className="h - 8";"
                  <><Check className="h - 4 w - 4 mr - 1" /> Copied</>) : ("
)"
                  <><Copy className="h - 4 w - 4 mr - 1" /> Copy</>)}"

                value={generated_content}
                on_change={(e) => setGeneratedContent (e.target.value)}

        <CardFooter className="flex justify - between">;"
            <Button variant="outline" on_click={on_close}>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <Button on_click={handle_apply}>;
            Apply to Form;
          </Button>;
        </CardFooter>)}
    </Card>);
}
<<<<<<< HEAD



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  ),;}
 value= {
  options.instructions 
}onChange= {
  (e) => handleInputChange (e, 'instructions') 

    );
}/> </div>) 
}<Button > {
  isEnhancing ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enhancing... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Generate Enhanced Content </>)"
</Loader2>"
} <Button variant="ghost" size="sm" onClick= {"
  handleCopy;"
}className="h-8" >) : (<><Copy className="h-4 w-4 mr-1" /> Copy</>)"
} </div> <div className="relative" > <Textarea /> </div> </div>)"
} {"
  onClose && (<Button variant="outline" onClick= {"
  onClose;)
}> Cancel ) 
}<Button onClick= {
  handleApply;
}> Apply to Form  ) 
}) "
                  <><Check className="h-4 w-4 mr-1" /> Copied</>"
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>"

            <div className="relative">"
                onChange={(e) => setGeneratedContent(e.target.value)}

        <CardFooter className="flex justify-between">"
            <Button variant="outline" onClick={onClose}>"

          <Button onClick={handleApply}>

pr-12325
</Button>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </Card>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

<<<<<<< HEAD
=======
export function AIEnhancementPanel(): any ({;



import React, { useState } from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}


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
    if (result) {
      setGeneratedContent(result)
    }

  };


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
  return (
    <Card className="w-full max-w-2xl mx-auto">;
      <CardHeader>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


        {/* Instructions input (optional) */}
        {showInstructions && (;
          <div className="space-y-2">;
            <label className="text-sm font-medium">Special instructions (optional)</label>;
            <Input
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
            <Input
              placeholder="E && E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options && options.instructions}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}

<<<<<<< HEAD
=======
<<<<<<< HEAD


        {/* Generate button */}
        <Button;
          onClick={handleGenerate} "
=======


        {/* Generate button */}
        <Button 
          onClick={handleGenerate} 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}


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
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
                  <><Copy className="h-4 w-4 mr-1" /> Copy</>;
                )}
              </Button>;
            </div>;
            <div className="relative">;
              <Textarea
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e && e.target.value)}
                className="min-h-[200px]";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              />;
            </div>;
          </div>;
        )}

<<<<<<< HEAD
      </CardContent>;

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
          <Button onClick={handleApply}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
}
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
  const handle_generate = async () => {
    const result = await enhance_content (options);
    // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
      setGeneratedContent (result);
    }
  }
;
  const handleInputChange = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,
<<<<<<< HEAD
    field: keyof AIEnhancementOptions) =>: any {}
    set_options ({}
=======
    field: keyof AIEnhancementOptions) =>: any {
    set_options ({
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
  const handle_apply = () =>: any {
    on_apply (generated_content);
    if (on_close ()) {
  $2
}
  }
;
  const handle_copy = () =>: any {
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
              on_change={(e) => handleInputChange (e, 'instructions')}
            />;
          </div>)}
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
}/> </div>) 
}{
  /* Generate button */ 
}<Button > {
  isEnhancing ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enhancing... </>) : (<> <Sparkles className="mr-2 h-4 w-4" /> Generate Enhanced Content </>) 
}</Button> <Button variant="ghost" size="sm" onClick= {
  handleCopy 
}className="h-8" >) : (<><Copy className="h-4 w-4 mr-1" /> Copy</>) 
}</Button> </div> <div className="relative" > <Textarea /> </div> </div>) 
}</CardContent> {
  onClose && (<Button variant="outline" onClick= {
  onClose 
}> Cancel </Button>) 
}<Button onClick= {
  handleApply 
}> Apply to Form </Button> </CardFooter>) 
}</Card>) 
}
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
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]"
              />
            </div>
          </div>
        )}
      </CardContent>
      {generatedContent && (
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button onClick={handleApply}>
            Apply to Form
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


<<<<<<< HEAD
import React, { useState } from 'react',
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',
import { Textarea } from '@/components/ui/textarea',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',

interface AIEnhancementPanelProps {
  title: string,
  defaultOptions: AIEnhancementOptions,
  onApply: (content: string) => void,
  onClose?: () => void,
  showInstructions?: boolean,
  initialContent?: string
}

export function AIEnhancementPanel({
  title,
  defaultOptions,
  onApply,
  onClose,
  showInstructions = true,
  initialContent = ''
}: AIEnhancementPanelProps) {
  const [options, setOptions] = useState<AIEnhancementOptions>({
    ...defaultOptions,
    content: initialContent || defaultOptions.content}),
  const [generatedContent, setGeneratedContent] = useState<string>(''),
  const [copied, setCopied] = useState(false),
  const { enhanceContent, isEnhancing } = useAIContentEnhancer(),

  const handleGenerate = async () => {
    const result = await enhanceContent(options),
    if (result) {
      setGeneratedContent(result)
    }
  },

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
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
    <Card className=&quot;w-full max-w-2xl mx-auto&quot;>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <Sparkles className=&quot;h-5 w-5 text-primary&quot; />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        {/* Input area */}
        <div className=&quot;space-y-2&quot;>
          <label className=&quot;text-sm font-medium&quot;>Content to enhance</label>
          <Textarea
            placeholder=&quot;Enter your content to enhance...&quot;
            className=&quot;min-h-[100px]&quot;
            value={options.content}
            onChange={(e) => handleInputChange(e, 'content')}
          />
        </div>

        {/* Context input */}
        <div className=&quot;space-y-2&quot;>
          <label className=&quot;text-sm font-medium&quot;>Context (optional)</label>
          <Textarea
            placeholder=&quot;Add any relevant context to guide the AI...&quot;
            className=&quot;min-h-[60px]&quot;
            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}
          />
        </div>

        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className=&quot;space-y-2&quot;>
            <label className=&quot;text-sm font-medium&quot;>Special instructions (optional)</label>
            <Input
              placeholder=&quot;E.g., 'Make it more conversational' or 'Focus on leadership skills'&quot;
=======
import React, {_useState} from 'react';

interface AIEnhancementPanelProps {_title: string;
  defaultOptions: AIEnhancementOptions;
  onApply: (_content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;}

export function AIEnhancementPanel(_{_title, _defaultOptions, _onApply, _onClose, _showInstructions = true, _initialContent = ''}: AIEnhancementPanelProps) {_const [options, _setOptions] = useState<AIEnhancementOptions>({
    ...defaultOptions, _content: initialContent || defaultOptions.content});
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const {_enhanceContent, _isEnhancing} = useAIContentEnhancer();

  const _handleGenerate = async () => {_const _result = await enhanceContent(options);
    if (result) {
      setGeneratedContent(result);}
  };

  const _handleInputChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, _field: keyof AIEnhancementOptions) => {_setOptions({
      ...options, _[field]: e.target.value});
  };

  const _handleApply = () => {_onApply(generatedContent);
    if (onClose) onClose();};

  const _handleCopy = () => {_navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout__(() => setCopied(false), _2000);};

  return (_<Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          {_title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {_/* Input area */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Content to enhance</label>
          <Textarea
            placeholder="Enter your content to enhance..."
            className="min-h-[100px]"
            value={_options.content}
            onChange={_(e) => handleInputChange(e, _'content')}
          />
        </div>

        {_/* Context input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Context (optional)</label>
          <Textarea
            placeholder="Add any relevant context to guide the AI..."
            className="min-h-[60px]"
            value={_options.context}
            onChange={_(_e) => handleInputChange(e, _'context')}
          />
        </div>

        {_/* Instructions input (optional) */}
        {_showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
              placeholder="E.g., _'Make it more conversational' or 'Focus on leadership skills'"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              value={options.instructions}
              onChange={_(_e) => handleInputChange(e, _'instructions')}
            />
          </div>
        )}

        {_/* Generate button */}
        <Button 
<<<<<<< HEAD
          onClick={handleGenerate} 
          className=&quot;w-full&quot; 
          disabled={isEnhancing || !options.content && !options.context}
=======
          onClick={_handleGenerate} 
          className="w-full" 
          disabled={_isEnhancing || !options.content && !options.context}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_isEnhancing ? (
            <>
              <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
              Enhancing...
            </>
          ) : (
            <>
              <Sparkles className=&quot;mr-2 h-4 w-4&quot; />
              Generate Enhanced Content
            </>
          )}
        </Button>

<<<<<<< HEAD
        {/* Output area */}
        {generatedContent && (
          <div className=&quot;space-y-2 mt-4&quot;>
            <div className=&quot;flex justify-between items-center&quot;>
              <label className=&quot;text-sm font-medium&quot;>Generated content</label>
=======
        {_/* Output area */}
        {_generatedContent && (
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Generated content</label>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Button 
                variant=&quot;ghost&quot; 
                size=&quot;sm&quot; 
                onClick={handleCopy}
                className=&quot;h-8&quot;
              >
<<<<<<< HEAD
                {copied ? (
                  <><Check className=&quot;h-4 w-4 mr-1&quot; /> Copied</>
=======
                {_copied ? (
                  <><Check className="h-4 w-4 mr-1" /> Copied</>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ) : (
                  <><Copy className=&quot;h-4 w-4 mr-1&quot; /> Copy</>
                )}
              </Button>
            </div>
            <div className=&quot;relative&quot;>
              <Textarea
<<<<<<< HEAD
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                className=&quot;min-h-[200px]&quot;
=======
                value={_generatedContent}
                onChange={_(_e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </div>
          </div>
        )}
      </CardContent>
      
<<<<<<< HEAD
      {generatedContent && (
        <CardFooter className=&quot;flex justify-between&quot;>
=======
      {_generatedContent && (
        <CardFooter className="flex justify-between">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          {onClose && (
            <Button variant=&quot;outline&quot; onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button onClick={_handleApply}>
            Apply to Form
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

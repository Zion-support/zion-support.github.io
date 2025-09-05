
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer';

interface AIEnhancementPanelProps {
  title: string;
  defaultOptions: AIEnhancementOptions;
  onApply: (content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
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
    content: initialContent || defaultOptions.content});
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();

  const handleGenerate = async () => {
    const result = await enhanceContent(options);
    if (result) {
      setGeneratedContent(result);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
      ...options,
      [field]: e.target.value});
  };

  const handleApply = () => {
    onApply(generatedContent);
    if (onClose) onClose();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              value={options.instructions}
              onChange={(e) => handleInputChange(e, 'instructions')}
            />
          </div>
        )}

        {/* Generate button */}
        <Button 
          onClick={handleGenerate} 
          className=&quot;w-full&quot; 
          disabled={isEnhancing || !options.content && !options.context}
        >
          {isEnhancing ? (
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

        {/* Output area */}
        {generatedContent && (
          <div className=&quot;space-y-2 mt-4&quot;>
            <div className=&quot;flex justify-between items-center&quot;>
              <label className=&quot;text-sm font-medium&quot;>Generated content</label>
              <Button 
                variant=&quot;ghost&quot; 
                size=&quot;sm&quot; 
                onClick={handleCopy}
                className=&quot;h-8&quot;
              >
                {copied ? (
                  <><Check className=&quot;h-4 w-4 mr-1&quot; /> Copied</>
                ) : (
                  <><Copy className=&quot;h-4 w-4 mr-1&quot; /> Copy</>
                )}
              </Button>
            </div>
            <div className=&quot;relative&quot;>
              <Textarea
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                className=&quot;min-h-[200px]&quot;
              />
            </div>
          </div>
        )}
      </CardContent>
      
      {generatedContent && (
        <CardFooter className=&quot;flex justify-between&quot;>
          {onClose && (
            <Button variant=&quot;outline&quot; onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button onClick={handleApply}>
            Apply to Form
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

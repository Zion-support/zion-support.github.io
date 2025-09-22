
import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
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
    <Card className="w-full max-w-2xl mx-auto">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Sparkles className="h-5 w-5 text-primary" />;
          {title}
        </CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {/* Input area */}
        <div className="space-y-2">;
          <label className="text-sm font-medium">Content to enhance</label>;
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
            <Input;
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'";
              value={options.instructions}
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
;
        {/* Generate button */}

            </div>;
          </div>;
        )}
      </CardContent>;


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

        {/* Instructions input (optional) */}
        {showInstructions && (;
          <div className="space-y-2">;
            <label className="text-sm font-medium">Special instructions (optional)</label>;

              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}
;
        {/* Generate button */}

          {isEnhancing ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Enhancing...;
            </>;

        {/* Output area */}
        {generatedContent && (;
          <div className="space-y-2 mt-4">;
            <div className="flex justify-between items-center">;
              <label className="text-sm font-medium">Generated content</label>;

                  <><Copy className="h-4 w-4 mr-1" /> Copy</>;
                )}
              </Button>;
            </div>;
            <div className="relative">;

                className="min-h-[200px]";
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

          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;

<<<<<<< HEAD
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,;
  CardFooter;
} from '@/components/ui/card'; import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sparkles, Loader2, Copy, Check } from 'lucide-react'
  useAIContentEnhancer
  AIEnhancementOptions
} from '@/hooks/useAIContentEnhancer'

interface AIEnhancementPanelProps {
  title: string;
  defaultOptions: AIEnhancementOptions;
  onApply: (content: string) => void;
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string
export function AIEnhancementPanel({

  title
  defaultOptions
  onApply
  onClose
  showInstructions = true
  initialContent = ''
}: AIEnhancementPanelProps) {
  const [options, setOptions] = useState<AIEnhancementOptions>({
    ...defaultOptions
    content: initialContent |defaultOptions.content
  })
  const [generatedContent, setGeneratedContent] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const { enhanceContent, isEnhancing } = useAIContentEnhancer()
  const handleGenerate = async () => {
    const result = await enhanceContent(options)
    if (result) {
      setGeneratedContent(result)
    }
  }
=======
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    const result = await enhanceContent(options),;
    if (result) {;
      setGeneratedContent(result);
    }
  },

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    field: keyof AIEnhancementOptions
  ) => {
    setOptions({
      ...options,
<<<<<<< HEAD
      [field]: e.target.value,
    })
  }
  const handleApply = () => {
    onApply(generatedContent)
    if (onClose) onClose()
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
            placeholder='Enter your content to enhance...'
            className='min-h-[100px]'
            value={options.content}
            onChange={e => handleInputChange(e, 'content')}          />
        </div>
        {/* Context input */}
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Context (optional)</label>
          <Textarea
            placeholder='Add any relevant context to guide the AI...'
            className='min-h-[60px]'
            value={options.context}
            onChange={e => handleInputChange(e, 'context')}          />
        </div>
=======
            placeholder="Enter your content to enhance..."
            className="min-h-[100px]"
            value={options.content}
            onChange={(e) => handleInputChange(e, 'content')}
          />;
        </div>;
        {/* Context input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Context (optional)</label>
          <Textarea
            placeholder="Add any relevant context to guide the AI..."
            className="min-h-[60px]"
            value={options.context}
            onChange={(e) => handleInputChange(e, 'context')}
          />;
        </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        {/* Instructions input (optional) */}
        {showInstructions && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Special instructions (optional)</label>
            <Input
              placeholder="E.g., 'Make it more conversational' or 'Focus on leadership skills'"
              value={options.instructions}
<<<<<<< HEAD
              onChange={e => handleInputChange(e, 'instructions')}            />
          </div>
        )}
        {/* Generate button */}
        <Button
          onClick={handleGenerate}
          className='w-full'
          disabled={isEnhancing || (!options.content && !options.context)}        >
=======
              onChange={(e) => handleInputChange(e, 'instructions')}
            />;
          </div>;
        )}

        {/* Generate button */}
        <Button 
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isEnhancing || !options.content && !options.context}
        >
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
          <div className='space-y-2 mt-4'>
            <div className='flex justify-between items-center'>
              <label className='text-sm font-medium'>Generated content</label>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleCopy}
                className='h-8'              >
=======
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Generated content</label>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCopy}
                className="h-8"
              >
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
                onChange={e => setGeneratedContent(e.target.value)}
                className='min-h-[200px]'              />
=======
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="min-h-[200px]"
              />
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            </div>
          </div>
        )}
      </CardContent>
<<<<<<< HEAD
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      {generatedContent && (
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
<<<<<<< HEAD
          <Button onClick={handleApply}>Apply to Form</Button>
        </CardFooter>
      )};
    </Card>;
  );
};
=======
          <Button onClick={handleApply}>;
            Apply to Form;
          </Button>;
        </CardFooter>;
      )}
    </Card>;
  );
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1



export function AIEnhancementPanel({;

import React, { useState } from 'react';
  onClose?: () => void;
  showInstructions?: boolean;
  initialContent?: string;
}

export function AIEnhancementPanel({;    const result = await enhanceContent(options);
    if (result) {
      setGeneratedContent(result)
    }

  }
};

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




=======
  const handleGenerate = async () => {;
    const result = await enhanceContent(options);
    if (result) {;
      setGeneratedContent(result);
    }


<<<<<<< HEAD
  },

    if (result) {;
      setGeneratedContent(result);
    }

  return (      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
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

          />;
        </div>;
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
          {isEnhancing ? (;
            <>;"
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
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
import React, { useState } from 'react',;
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card',;
import { Textarea } from '@/components/ui/textarea',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Sparkles, Loader2, Copy, Check } from '@/components/icons',;

import { useAIContentEnhancer, AIEnhancementOptions } from '@/hooks/useAIContentEnhancer',;

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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enhancing...
            </>
          ) : (
  );
}

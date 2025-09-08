import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AIListingGeneratorProps {
  onGenerate: (listing: string) => void;
  className?: string;
}

export function AIListingGenerator({ onGenerate, className }: AIListingGeneratorProps) {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) return;

    setIsGenerating(true);
    
    try {
      // Simulate AI generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const generatedListing = `AI Generated Listing for: ${description}
      
This is a professionally crafted listing that highlights the key features and benefits of your product. The AI has analyzed your description and created an optimized listing that will attract more customers.

Key Features:
- Professional presentation
- SEO optimized content
- Compelling call-to-action
- Market-tested language

Generated at: ${new Date().toLocaleString()}`;
      
      onGenerate(generatedListing);
    } catch (error) {
      console.error('Failed to generate listing:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>AI Listing Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Describe your product or service
          </label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a brief description of what you're offering..."
            className="min-h-[100px]"
          />
        </div>
        
        <Button
          onClick={handleGenerate}
          disabled={!description.trim() || isGenerating}
          className="w-full"
        >
          {isGenerating ? 'Generating...' : 'Generate AI Listing'}
        </Button>
      </CardContent>
    </Card>
  );
}
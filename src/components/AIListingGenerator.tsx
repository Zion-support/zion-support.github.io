import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Sparkles, ArrowRight } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client"
import { Badge } from "@/components/ui/badge"
import { logErrorToProduction } from '@/utils/productionLogger';

interface GeneratedContent {
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
}

interface AIListingGeneratorProps {
  onApplyGenerated: (content: GeneratedContent) => void;
  initialValues?: Partial<GeneratedContent>;
}

export function AIListingGenerator({ onApplyGenerated, initialValues }: AIListingGeneratorProps) {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [category, setCategory] = useState(initialValues?.category || '');
  const [keyFeatures, setKeyFeatures] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!title || !category) {
      toast('Please fill in title and category', 'error');
      return;
    }
    
    setIsLoading(true);
    try {
      // Mock AI generation - replace with actual API call
      const mockContent: GeneratedContent = {
        title: `Optimized ${title}`,
        description: `Professional ${title} service for ${targetAudience || 'businesses'}. ${keyFeatures || 'High-quality, reliable service.'}`,
        price: 100,
        category,
        tags: [category, 'professional', 'service']
      };
      
      setGeneratedContent(mockContent);
      toast('Content generated successfully!', 'success');
    } catch (error) {
      logErrorToProduction('Error generating content:', error);
      toast('Failed to generate content', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast('Content applied to your listing!', 'success');
    }
  };

  return (
    <div className='space-y-6'>
      <Card className='border border-zion-blue-light bg-zion-blue-dark'>
        <CardHeader>
          <CardTitle className='flex items-center text-white'>
            <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />
            AI Listing Optimizer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your service title"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">
              Category
            </label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter service category"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">
              Key Features (Optional)
            </label>
            <Textarea
              id="keyFeatures"
              value={keyFeatures}
              onChange={(e) => setKeyFeatures(e.target.value)}
              placeholder="Describe key features"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">
              Target Audience (Optional)
            </label>
            <Input
              id="targetAudience"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="Who is this for?"
            />
          </div>
          <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Optimized Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
          </CardHeader>
        </Card>
      )}

      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle className="text-white">Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
              <p className="text-white">{generatedContent.description}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {generatedContent.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleApply}>
              Apply to My Listing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
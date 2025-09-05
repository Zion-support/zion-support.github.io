import React, { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Sparkles } from 'lucide-react'
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { AIListingForm } from &quot;./AIListingForm&quot;;
import { GeneratedContentDisplay } from &quot;./GeneratedContentDisplay&quot;;
import { LoadingContentSkeleton } from &quot;./LoadingContentSkeleton&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';


interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number;
  };
  keyPoints: string[];
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  };
}

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  const handleGenerate = async ({
    title,
    category,
    keyFeatures,
    targetAudience
  }: {
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;
  }) => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      });

      if (error) {
        throw new Error(error.message);
      }
      
      if (data && (data as any).error) {
        throw new Error((data as any).error);
      }

      setGeneratedContent((data as any)?.generated || null);
      toast({
        title: &quot;Content Generated&quot;,
        description: &quot;AI has created optimized listing content for you.&quot;
      });
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error });
      toast({
        title: &quot;Generation Failed&quot;,
        description: error instanceof Error ? error.message : &quot;Failed to generate content. Please try again.&quot;,
        variant: &quot;destructive&quot;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: &quot;Content Applied&quot;,
        description: &quot;The generated content has been applied to your listing.&quot;
      });
    }
  };

  return (
    <div className=&quot;space-y-6&quot;>
      <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark&quot;>
        <CardHeader>
          <CardTitle className=&quot;flex items-center text-white&quot;>
            <Sparkles className=&quot;h-5 w-5 mr-2 text-zion-cyan&quot; />
            AI Listing Optimizer
          </CardTitle>
          <p className=&quot;text-sm text-zion-slate-light&quot;>
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent>
          <AIListingForm 
            onSubmit={handleGenerate} 
            isLoading={isLoading} 
            initialValues={initialValues}
          />
        </CardContent>
      </Card>

      {isLoading && <LoadingContentSkeleton />}

      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
    </div>
  );
}

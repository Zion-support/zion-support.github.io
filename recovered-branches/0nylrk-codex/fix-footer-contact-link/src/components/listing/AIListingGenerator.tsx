
<<<<<<< HEAD
import React{ useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CardContentCardHeaderCardTitle } from "@/components/ui/card";
=======
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { AIListingForm } from "./AIListingForm";
import { GeneratedContentDisplay } from "./GeneratedContentDisplay";
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";

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

<<<<<<< HEAD
export function AIListingGenerator({ onApplyGeneratedinitialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast();
  const [isLoadingsetIsLoading] = useState(false);
  const [generatedContentsetGeneratedContent] = useState<GeneratedContent | null>(null);
=======
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
      const { dataerror } = await supabase.functions.invoke('ai-listing-generator'{
        body: { titlecategorykeyFeaturestargetAudience }
=======
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
>>>>>>> origin/auto/autonomy-17186719616
      });

      if (error) {
        throw new Error(error.message);
      }
      
      if (data.error) {
        throw new Error(data.error);
      }

      setGeneratedContent(data.generated);
      toast({
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      });
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating content:"error);
=======
      console.error("Error generating content:", error);
>>>>>>> origin/auto/autonomy-17186719616
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: "Content Applied",
        description: "The generated content has been applied to your listing."
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
          <p className="text-sm text-zion-slate-light">
<<<<<<< HEAD
            Provide basic information and let AI generate optimizedSEO-friendly content for your listing
=======
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
>>>>>>> origin/auto/autonomy-17186719616
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

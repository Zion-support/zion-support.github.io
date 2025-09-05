
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
=======
import React, { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Sparkles } from &quot;lucide-react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { AIListingForm } from &quot;./AIListingForm&quot;;
import { GeneratedContentDisplay } from &quot;./GeneratedContentDisplay&quot;;
import { LoadingContentSkeleton } from &quot;./LoadingContentSkeleton&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void,
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null),

  const handleGenerate = async ({
    title,
    category,
    keyFeatures,
    targetAudience
  }: {
    title: string,
    category: string,
    keyFeatures: string,
    targetAudience: string
  }) => {
    setIsLoading(true),
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      }),

      if (error) {
        throw new Error(error.message)
      }
      
      if (data.error) {
        throw new Error(data.error)
      }

      setGeneratedContent(data.generated),
      toast({
<<<<<<< HEAD
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      console.error("Error generating content:", error),
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive"
      })
=======
        title: &quot;Content Generated&quot;,
        description: &quot;AI has created optimized listing content for you.&quot;
      });
    } catch (error) {
      console.error(&quot;Error generating content:&quot;, error);
      toast({
        title: &quot;Generation Failed&quot;,
        description: error instanceof Error ? error.message : &quot;Failed to generate content. Please try again.&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),
      toast({
<<<<<<< HEAD
        title: "Content Applied",
        description: "The generated content has been applied to your listing."
      })
=======
        title: &quot;Content Applied&quot;,
        description: &quot;The generated content has been applied to your listing.&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React, {_useState} from "react";

interface GeneratedContent {_description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number;};
  keyPoints: string[];
}

interface AIListingGeneratorProps {_onApplyGenerated?: (_content: GeneratedContent) => void;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;};
}

export function AIListingGenerator(_{_onApplyGenerated, _initialValues = {} }: AIListingGeneratorProps) {_const { toast} = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  const _handleGenerate = async (_{_title, _category, _keyFeatures, _targetAudience}: {_title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;}) => {_setIsLoading(true);
    
    try {
      const { data, _error} = await supabase.functions.invoke('ai-listing-generator', {_body: { title, _category, _keyFeatures, _targetAudience}
      });

      if (error) {_throw new Error(error.message);}
      
      if (data.error) {_throw new Error(data.error);}

      setGeneratedContent(data.generated);
      toast({_title: "Content Generated", _description: "AI has created optimized listing content for you."});
    } catch (error) {_toast({
        title: "Generation Failed", _description: error instanceof Error ? error.message : "Failed to generate content. Please try again.", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };

  const _handleApply = () => {_if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: "Content Applied", _description: "The generated content has been applied to your listing."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

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
            onSubmit={_handleGenerate} 
            isLoading={_isLoading} 
            initialValues={_initialValues}
          />
        </CardContent>
      </Card>

      {_isLoading && <LoadingContentSkeleton />}

      {_generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={_handleApply} />
      )}
    </div>
  )
}

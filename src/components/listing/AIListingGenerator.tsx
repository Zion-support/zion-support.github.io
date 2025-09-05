import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',interface GeneratedContent {
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
      
      if (data && (data as any).error) {
        throw new Error((data as any).error)
      }

      setGeneratedContent((data as any)?.generated || null),
      toast({
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      })    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error }),
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive"
      })    } finally {
      setIsLoading(false)
    }
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),
      toast({
        title: "Content Applied",
        description: "The generated content has been applied to your listing."
      })import React, {_useState} from "react";

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
      
      if (data && (data as any).error) {_throw new Error((data as any).error);}

      setGeneratedContent((data as any)?.generated || null);
      toast({_title: "Content Generated", _description: "AI has created optimized listing content for you."});
    } catch (error) {_logErrorToProduction('Error generating content:', _{ data: error});
      toast({_title: "Generation Failed", _description: error instanceof Error ? error.message : "Failed to generate content. Please try again.", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };

  const _handleApply = () => {_if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: "Content Applied", _description: "The generated content has been applied to your listing."});
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





>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Sparkles} from "lucide-react";
import {supabase} from "@/integrations/supabase/client";
import {AIListingForm} from "./AIListingForm";
import {GeneratedContentDisplay} from "./GeneratedContentDisplay";
import {LoadingContentSkeleton} from "./LoadingContentSkeleton";
  description: string
  tags: string[]
  suggestedPrice: {
    min: number

    max: number
  }
  keyPoints: string[]
}
interface AIListingGeneratorProps {

  onApplyGenerated?: (content: GeneratedContent) => void

  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
  }
}

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const handleGenerate = async ({
    title;
    category;
    keyFeatures;
    targetAudience
  }: {
    title: string
    category: string
    keyFeatures: string
    targetAudience: string
  }) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      });
      if (error) {
        throw new Error(error.message)
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Sparkles } from "lucide-react",;
import { supabase } from "@/integrations/supabase/client",;
import { AIListingForm } from "./AIListingForm",;
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",;
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;

=======

      }
      if (data.error) {
        throw new Error(data.error)
      }



      if (error) {;
        throw new Error(error && error.message);
      }

      if (data && data.error) {;
        throw new Error(data && data.error);
      }

      setGeneratedContent(data && data.generated);      toast({;
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent);
      toast({;
        title: "Content Applied",;
        description: "The generated content has been applied to your listing.";
      });

    }
  }
=======
  },


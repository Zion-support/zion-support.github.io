:src_backup/components/listing/AIListingGenerator.tsx
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',
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
import { Sparkles } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client",;
import { AIListingForm } from "./AIListingForm",;
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",;
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface GeneratedContent {;
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { AIListingForm } from './AIListingForm';
import { GeneratedContentDisplay } from './GeneratedContentDisplay';
import { LoadingContentSkeleton } from './LoadingContentSkeleton';
import { logErrorToProduction } from '@/utils/productionLogger';

interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
origin/cursor/automate-test-improve-and-merge-code-2533
    max: number
:src/components/listing/AIListingGenerator.tsx
  }
  keyPoints: string[]
  }
  keyPoints: string[],
}
interface AIListingGeneratorProps {
:src/components/listing/AIListingGenerator.tsx
interface GeneratedContent {,
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
max: number;
  },;
  keyPoints: string[];
}
;
interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;
title?: string,;
    category?: string,;
    keyFeatures?: string,;
    targetAudience?: string;
  initialValues?: {
origin/cursor/automate-test-improve-and-merge-code-2533
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
  }
}
;
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null),;
  const handleGenerate = async ({;
    title,;
    category,;
    keyFeatures,;
    targetAudience;
  }: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
  }) => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      }),;
      if (error) {;
        throw new Error(error.message);
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const handleGenerate = async ({
    title
    category
    keyFeatures
    targetAudience
  }: {
    title: string
    category: string
    keyFeatures: string
    targetAudience: string  }) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {
        body: { title, category, key_features, target_audience }
      });
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      if (data && (data as any).error) {
        throw new Error((data as any).error)
      }

      setGeneratedContent((data as any)?.generated || null)
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',      toast({

  }) => {
    setIsLoading(true)
    try {

toast({
        title: "Content Generated"
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error })
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again."
        variant: "destructive"
      })
      // Check condition
if (.error) {) {
  $2
}
        throw new Error ((data as any).error);
      }
;
      if (data && (data as any).error) {;
        throw new Error((data as any).error);
      }

      setGeneratedContent((data as any)?.generated || null),
      toast({
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error }),
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
:src/components/listing/AIListingGenerator.tsx
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),

:src/components/listing/AIListingGenerator.tsx
      toast({
        title: "Content Applied",
        description: "The generated content has been applied to your listing."
      })
:src/components/listing/AIListingGenerator.tsx
    }
  },
  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent>
          <AIListingForm 
            onSubmit={handleGenerate} 
            isLoading={isLoading} 
;
      setGeneratedContent((data as any)?.generated || null),;

export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);,
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const handleGenerate = async ({;
    title;
    category;
    keyFeatures;
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',
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
import { Sparkles } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client",;
import { AIListingForm } from "./AIListingForm",;
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",;
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
  },;
  keyPoints: string[];
}
;
interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;
    title?: string,;
    category?: string,;
    keyFeatures?: string,;
    targetAudience?: string;
  }
}
;
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null),;
  const handleGenerate = async ({;
    title,;
    category,;
    keyFeatures,;
    targetAudience;
  }: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
  }) => {;
    setIsLoading(true);    ;
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      });
      if (error) {;
        throw new Error(error && error.message);
      }
      if (data && (data as,  any).error) {;
        throw new Error((data as,  any).error);
      }
      setGeneratedContent((data as,  any)?.generated || null);
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      }),;
      if (error) {;
        throw new Error(error.message);
      }
;
      if (data && (data as any).error) {;
        throw new Error((data as any).error);
      }

:src_backup/components/listing/AIListingGenerator.tsx
      setGeneratedContent((data as any)?.generated || null);
      setGeneratedContent((data as any)?.generated || null),
      toast({
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error }),
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),
      toast({
        title: "Content Applied",
        description: "The generated content has been applied to your listing."
      })
    }
  },

  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent>
          <AIListingForm 
            onSubmit={handleGenerate} 
            isLoading={isLoading} 
;
      setGeneratedContent((data as any)?.generated || null),;
      toast({;
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error }),;
      toast({;
        title: "Generation Failed",;
:src/components/listing/AIListingGenerator.tsx
description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",;
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;
:src_backup/components/listing/AIListingGenerator.tsx

        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
:src/components/listing/AIListingGenerator.tsx
  },;
  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent),;
      toast({;
        title: "Content Applied";
        description: "The generated content has been applied to your listing.";
      });
    }
  };
  return (;
    }
  },
  return (
:src_backup/components/listing/AIListingGenerator.tsx

    <div className="space-y-6">;
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;
        <CardHeader>;
          <CardTitle className="flex items-center text-white">;
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text-sm text-zion-slate-light">;
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;
:src_backup/components/listing/AIListingGenerator.tsx
          <AIListingForm;
            onSubmit={handleGenerate} ;
            isLoading={isLoading} ;
            initialValues={initialValues}
:src_backup/components/listing/AIListingGenerator.tsx

          <AIListingForm
            onSubmit = {handleGenerate,}
            isLoading = {isLoading,}
            initialValues = {initialValues,}
:src_backup/components/listing/AIListingGenerator.tsx

          <AIListingForm 

          <AIListingForm
      {isLoading && <LoadingContentSkeleton />}
          />;
        </CardContent>;
      </Card>;      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
:src_backup/components/listing/AIListingGenerator.tsx

<div className="space-y-6">;
      <Card className="border border - zion - blue - light bg - zion - blue-dark">;
        <CardHeader>;
          <CardTitle className="flex items - center text-white">;
            <Sparkles className="h - 5 w - 5 mr - 2 text - zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text - sm text - zion - slate-light">;
            Provide basic information and let AI generate optimized, SEO - friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;
          <AIListingForm;
            on_submit = {handle_generate, }
            is_loading = {is_loading, }
            initial_values = {initial_values, }
          />;
        </CardContent>;
      </Card>;
      {is_loading && <LoadingContentSkeleton />}
      {generated_content && !is_loading && (
        <GeneratedContentDisplay content={generated_content} on_apply={handle_apply} />)}
    </div>);
}: AIListingGeneratorProps) {
  const {
  toast;
}= use_toast ();
const [is_loading, setIsLoading] = useState (false);,
const [generated_content, setGeneratedContent] = useState < GeneratedContent | null> (null);
const handle_generate = async ({
  title;
category;
key_features;
target_audience;
}: {
  title: string;,
category: string;,
key_features: string;,
target_audience: string;
:src_backup/components/listing/AIListingGenerator.tsx

}) => {
  setIsLoading (true)
try {
  const {
:src_backup/components/listing/AIListingGenerator.tsx

  data, error;
}= await supabase.functions.invoke ('ai - listing - generator', {'
  body: {,
  title, category,  key_features, target_audience;
});
// Check condition
if ( {) {
  $2
}
  throw new Error (error.message);
}// Check condition
if (.error) {) {
  $2
}
  throw new Error ( (data as,  any) .error);
}setGeneratedContent ( (data as,  any) ?.generated || null);
toast ({
:src_backup/components/listing/AIListingGenerator.tsx
}catch (error) {'
  logErrorToProduction ('Error generating content:', {

          />;
        </CardContent>;
      </Card>;
      {isLoading && <LoadingContentSkeleton />}
;
      {generatedContent && !isLoading && (;
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />;
      )}
    </div>;
  );
:src_backup/components/listing/AIListingGenerator.tsx
}finally {;
  setIsLoading (false) ;
};
const handleApply = () => {;
  if (generatedContent &&,  onApplyGenerated) {;
  onApplyGenerated (generatedContent);
toast ({;
};
return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingFormonSubmit= {"
  handleGenerate
}isLoading= {
  isLoading
}initialValues= {
  initialValues
}/> </CardContent> </Card> {;
  isLoading && <LoadingContentSkeleton /> ;
}{;
  generatedContent && !isLoading && (<GeneratedContentDisplaycontent= {
  generatedContent
}onApply= {
  handleApply
}/>) ;
}</div>) ;
}'";
:src_backup/components/listing/AIListingGenerator.tsx

  data: error;
});
toast ({
}finally {
  setIsLoading (false);
}
:src_backup/components/listing/AIListingGenerator.tsx
const handle_apply = () =>: any {
  // Check condition
if ( {) {
  $2
}
  onApplyGenerated (generated_content);
toast ({
}
:src/components/listing/AIListingGenerator.tsx
}
}
}
}
    </div>;
  );
}
:src/components/listing/AIListingGenerator.tsx
;
;
:src_backup/components/listing/AIListingGenerator.tsx

return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm onSubmit= {
  handleGenerate
}isLoading= {
  isLoading
}initialValues= {
  initialValues
}/> </CardContent> </Card> {
  isLoading && <LoadingContentSkeleton />
}{
  generatedContent && !isLoading && (<GeneratedContentDisplay content= {
  generatedContent
}onApply= {
  handleApply
}/>)
}</div>)
}'"
:src/components/listing/AIListingGenerator.tsx

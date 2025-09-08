<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { AIListingForm } from './AIListingForm';
import { GeneratedContentDisplay } from './GeneratedContentDisplay';
import { LoadingContentSkeleton } from './LoadingContentSkeleton';
import { logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
=======
import React, { useState } from 'react;
import { useToast } from @/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;
import { Sparkles } from lucide-react';
import { supabase } from '@/integrations/supabase/client;
import { AIListingForm } from ./AIListingForm';
import { GeneratedContentDisplay } from './GeneratedContentDisplay;
import { LoadingContentSkeleton } from ./LoadingContentSkeleton';
import { logErrorToProduction } from '@/utils/productionLogger;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


interface GeneratedContent {
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  description: string,
  tags: string[],
  suggested_price: {
    min: number,
    max: number;
>>>>>>> origin/cursor/delete-old-data-records-6bba



  }

  keyPoints: string[]

}
interface AIListingGeneratorProps {

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
interface GeneratedContent {;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface GeneratedContent {;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
<<<<<<< HEAD

=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    max: number;
  };
  keyPoints: string[];
}

interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent,) => void,;
  initialValues?: {;
>>>>>>> origin/cursor/delete-old-data-records-6bba


  keyPoints: string[];
}
;
interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;

  initialValues?: {
origin/cursor/automate-test-improve-and-merge-code-2533
    title?: string;

<<<<<<< HEAD

=======
interface GeneratedContent  {description: string;
  tags: string[];
  suggestedPrice: {min: number;
import React, { useState } from 'react';
import { useToast  } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Sparkles  } from 'lucide-react';
import { supabase  } from '@/integrations/supabase/client';
import { AIListingForm  } from './AIListingForm';
import { GeneratedContentDisplay  } from './GeneratedContentDisplay';
import { LoadingContentSkeleton  } from './LoadingContentSkeleton';
import { logErrorToProduction  } from '@/utils/productionLogger';
interface GeneratedContent  {description: string;
  tags: string[];
  suggestedPrice: {min: number;max: number;
  description: string,tags: string[],suggested_price: {min: number,max: number;}
  keyPoints: string[];
}
interface AIListingGeneratorProps  {interface GeneratedContent  {description: string,tags: string[],suggestedPrice: {min: number,max: number;
  }keyPoints: string[];
}interface AIListingGeneratorProps  {onApplyGenerated?: (content: GeneratedContent,) => void,initialValues?: {onApplyGenerated?: (content: GeneratedContent) => void;
  initialValues?: {title?: string;
    category?: string;
    keyFeatures?: string;
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    targetAudience?: string;
=======
    category?: string;
    keyFeatures?: string;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
    targetAudience?: string

  }
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD

  onApplyGenerated?: (content: GeneratedContent, ) => void,
  initial_values?: {
    title?: string;
}export function AIListingGenerator() {const { toast } = useToast()const [isLoading, setIsLoading] = useState(false)const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)const handleGenerate = async ({title;
    category;
    keyFeatures;
    targetAudience;
  }: {title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;
  onApplyGenerated?: (content: GeneratedContent, ) => void,initial_values?: {title?: string;
    category?: string;
    key_features?: string;
    target_audience?: string;
  }
export /**;
 * AIListingGenerator - Function description;
 */;
function AIListingGenerator() {const { toast } = use_toast ()const [is_loading, setIsLoading] = useState (false)const [generated_content, setGeneratedContent] = useState < GeneratedContent | null>(null)const handle_generate = async ({title;
    category;
    key_features;
    target_audience;
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
  }: {
:src_backup/components/listing/AIListingGenerator.tsx
=======
  }: {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    title: string,
    category: string,
    key_features: string,
    target_audience: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba


    title: string
    category: string
    keyFeatures: string
    targetAudience: string  }) => {
    setIsLoading(true)
    try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
      const { data, error } = await supabase.functions.invoke(ai-listing-generator', {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        body: { title, category, keyFeatures, targetAudience }
      })
      if (error) {
        throw new Error(error.message)
      }
>>>>>>> origin/cursor/delete-old-data-records-6bba

<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
  }: {title: string,category: string,key_features: string,target_audience: string;}) => {setIsLoading(true)try {const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {body: { title, category, key_features, target_audience }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }: {title: string,category: string,key_features: string,target_audience: string;}) => {setIsLoading(true)try {const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {body: { title, category, key_features, target_audience }
  }: {title: string,category: string,key_features: string,target_audience: string;}) => {setIsLoading(true)try {const { data, error } = await supabase.functions.invoke (ai - listing - generator', {body: { title, category, key_features, target_audience }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      })// Check condition;
if ( {) {$2;
}
        throw new Error (error.message)}
      if (data && (data as any).error) {throw new Error((data as any).error)}setGeneratedContent((data as any)?.generated || null)import React, { useState } from "react",import { useToast } from "@/hooks/use-toast",import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",import { supabase } from "@/integrations/supabase/client",import { AIListingForm } from "./AIListingForm",import { GeneratedContentDisplay } from "./GeneratedContentDisplay",import { LoadingContentSkeleton } from "./LoadingContentSkeleton",import {logErrorToProduction} from '@/utils/productionLogger',const { data, error } = await supabase.functions.invoke('ai-listing-generator', {body: { title, category, keyFeatures, targetAudience }
      })if (error) {throw new Error(error.message)}toast({title: "Content Generated";
        description: "AI has created optimized listing content for you.";
      })} catch (error) {logErrorToProduction('Error generating content:', { data: error })toast({title: "Generation Failed";
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.";
        variant: "destructive";
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
      });
        description: "AI has created optimized listing content for you."
=======
      });
        description: AI has created optimized listing content for you."
=======
>>>>>>> merged-prs-20250907-203621
        description: "AI has created optimized listing content for you."
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
export function AIListingGenerator({ onApplyGenerated, initialValues;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
      setGeneratedContent((data as any)?.generated || null);

      toast({;
        title: "Content Generated",
        description: "AI has created optimized listing content for you.";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      setGeneratedContent((data as any)?.generated || null);

      toast({
        title: "Content Generated,
        description: AI has created optimized listing content for you.";
=======
>>>>>>> merged-prs-20250907-203621
      toast({;
        title: "Content Generated",
        description: "AI has created optimized listing content for you.";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error }),;
      toast({;
<<<<<<< HEAD



      <Card className=border border-zion-blue-light bg-zion-blue-dark">;
=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;
        title: "Generation Failed,
        description: error instanceof Error ? error && error.message : Failed to generate content. Please try again.",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
  };

  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent);
      toast({;
        title: "Content Applied",;
        description: "The generated content has been applied to your listing.";
      });

  const handle_apply = () =>: any {
    // Check condition
if ( {) {
  $2
      })// Check condition;
if (.error) {) {$2;
}
        throw new Error ((data as any).error)}
      setGeneratedContent ((data as any)?.generated || null)toast ({title: "Content Generated",description: "AI has created optimized listing content for you.";
      })} catch (error) {logErrorToProduction ('Error generating content:', { data: error }),toast ({title: "Generation Failed",description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",variant: "destructive";
      })} finally {setIsLoading(false)}},const handleApply = () => {if (generatedContent && onApplyGenerated) {onApplyGenerated(generatedContent),toast({title: "Content Applied";
        description: "The generated content has been applied to your listing.";
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      });
    }
  },

    }

  },




  return (


<<<<<<< HEAD
    <div className="space-y-6">;
      })export function AIListingGenerator({ onApplyGenerated, initialValues;return (<div className="space-y-6">;
        title: "Generation Failed",
=======
    <div className="space-y-6>;
      })export function AIListingGenerator({ onApplyGenerated, initialValues;return (<div className=space-y-6">;
        title: "Generation Failed,
=======
>>>>>>> merged-prs-20250907-203621
        title: "Generation Failed",
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      <Card className="border border-zion-blue-light bg-zion-blue-dark">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <CardHeader>;
          <CardTitle className="flex items-center text-white">;
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text-sm text-zion-slate-light">;
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
        <CardContent>;

:src_backup/components/listing/AIListingGenerator.tsx
=======
        <CardContent>;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <AIListingForm;
            onSubmit={handleGenerate} ;
            isLoading={isLoading} ;
            initialValues={initialValues}

          <AIListingForm
            onSubmit = {handleGenerate,}
            isLoading = {isLoading,}
            initialValues = {initialValues,}

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          <AIListingForm 
>>>>>>> origin/cursor/delete-old-data-records-6bba


      {isLoading && <LoadingContentSkeleton />}

      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
    <div className="space - y-6">;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className="space - y-6">;
    <div className=space - y-6">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <CardContent>onSubmit = {handleGenerate}
            isLoading = {isLoading}
            initialValues = {initialValues}
          />;
        </CardContent>;
      </Card>;
            onSubmit={handleGenerate}isLoading={isLoading}setGeneratedContent((data as any)?.generated || null),export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {const { toast } = useToast()const [isLoading, setIsLoading] = useState(false)const [generatedContent, setGeneratedContent]  = useState<GeneratedContent | null>(null)const handleGenerate = async ({title;
    category;
    keyFeatures;
    targetAudience;
  }: {title: string,category: string,keyFeatures: string,targetAudience: string;
  }) => {setIsLoading(true)try {const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {body: { title, category, keyFeatures, targetAudience }
      })if (error) {throw new Error(error && error.message)}if (data && (data as any).error) {throw new Error((data as any).error)}setGeneratedContent((data as any)?.generated || null)toast({title: "Content Generated",description: "AI has created optimized listing content for you.";
      })} catch (error) {logErrorToProduction('Error generating content:', { data: error }),toast({title: "Generation Failed",description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",variant: "destructive";
      })} finally {setIsLoading(false)}}const handleApply = () => {if (generatedContent && onApplyGenerated) {onApplyGenerated(generatedContent)toast({title: "Content Applied",description: "The generated content has been applied to your listing.";
      })const handle_apply = () =>: any {// Check condition;
if ( {) {$2;
}
      onApplyGenerated (generated_content)toast ({title: "Content Applied",description: "The generated content has been applied to your listing.";
      })}
  }}},return (<div className="space-y-6">;
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
        <CardContent>;<AIListingForm;
            onSubmit={handleGenerate}isLoading={isLoading}initialValues={initialValues}
          />;
        </CardContent>;
      </Card>;<AIListingForm;
            onSubmit = {handleGenerate}
            isLoading = {isLoading}
            initialValues = {initialValues}<AIListingForm;
      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (<GeneratedContentDisplay content={generatedContent} onApply={handleApply} />;
<<<<<<< HEAD
      )}<div className="space - y-6">;
      <Card className="border border - zion - blue - light bg - zion - blue - dark">;
=======
      )}<div className="space - y-6>;
      <Card className=border border - zion - blue - light bg - zion - blue - dark">;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {generated_content && !is_loading && (<GeneratedContentDisplay content={generated_content} on_apply={handle_apply} />)}
    </div>)}: AIListingGeneratorProps) {const {toast;
}= use_toast ()const [is_loading, setIsLoading] = useState (false)const [generated_content, setGeneratedContent] = useState < GeneratedContent | null> (null)const handle_generate = async ({title;
category;
key_features;
target_audience;
}: {title: string;
category: string;
key_features: string;
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

}) => {
  setIsLoading (true)
try {
  const {

  data, error;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
}= await supabase.functions.invoke ('ai - listing - generator', {
  body: {
}= await supabase.functions.invoke ('ai - listing - generator', {'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
}= await supabase.functions.invoke ('ai - listing - generator', {
  body: {
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
}= await supabase.functions.invoke ('ai - listing - generator', {'
}= await supabase.functions.invoke ('ai - listing - generator, {
  body: {}= await supabase.functions.invoke (ai - listing - generator', {'
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  body: {,
  title, category,  key_features, target_audience;
});
// Check condition
if ( {) {
  $2
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
target_audience: string;}) => {setIsLoading (true)try {const {}catch (error) {';
  logErrorToProduction ('Error generating content:', {data, error;
}= await supabase.functions.invoke ('ai - listing - generator', {body: {title, category,  key_features, target_audience;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
target_audience: string;}) => {setIsLoading (true)try {const {}catch (error) {';
  logErrorToProduction ('Error generating content:', {data, error;
}= await supabase.functions.invoke ('ai - listing - generator', {body: {title, category,  key_features, target_audience;
target_audience: string;}) => {setIsLoading (true)try {const {}catch (error) {;
  logErrorToProduction (Error generating content:', {data, error;
}= await supabase.functions.invoke ('ai - listing - generator, {body: {title, category,  key_features, target_audience;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
})// Check condition;
if ( {) {$2;
}
  throw new Error (error.message)}// Check condition;
if (.error) {) {$2;
}
  throw new Error ( (data as any) .error)}setGeneratedContent ( (data as any) ?.generated || null)toast ({}catch (error) {';
  logErrorToProduction ('Error generating content:', {/>;
        </CardContent>;
      </Card>;{isLoading && <LoadingContentSkeleton />}{generatedContent && !isLoading && (<GeneratedContentDisplay content={generatedContent} onApply={handleApply} />;
      )}
    </div>;
  )}: AIListingGeneratorProps) {const {toast ;
}= useToast ()const [isLoading, setIsLoading] = useState (false)const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null> (null)const handleGenerate = async ({title;
category;
keyFeatures;
targetAudience ;
}: {title: string;
category: string;
keyFeatures: string;
targetAudience: string ;
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
}) => {;
=======
}) => {;
}) => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  setIsLoading (true);
try {;
  const {;
  data, error ;
}= await supabase && supabase.functions.invoke ('ai-listing-generator', {;
  body: {;
  title, category,  keyFeatures, targetAudience ;

});
if (error) {;
  throw new Error (error && error.message) ;
}if (data && (data as any) .error) {;
  throw new Error ( (data as any) .error) ;
}setGeneratedContent ( (data as any) ?.generated || null);
toast ({;

}catch (error) {';
  logErrorToProduction ('Error generating content:', {;
  data: error ;
});
toast ({;

}finally {;
  setIsLoading (false) ;

};
const handleApply = () => {;
  if (generatedContent && onApplyGenerated) {;
  onApplyGenerated (generatedContent);
toast ({;


};
return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingFormonSubmit= {
  handleGenerate 
}isLoading= {
  isLoading 
}initialValues= {
  initialValues 
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
  throw new Error (error.message);
}// Check condition
if (.error) {) {
  $2
}
  throw new Error ( (data as,  any) .error);
}setGeneratedContent ( (data as,  any) ?.generated || null);
toast ({

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  generatedContent 
}onApply= {
  handleApply 
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
  generatedContent
}onApply= {
  handleApply
}/>) ;
}</div>) ;
}'";

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


  data: error;

});
toast ({
}finally {
  setIsLoading (false);

}

const handle_apply = () =>: any {
  // Check condition
if ( {) {
  $2
}
  onApplyGenerated (generated_content);
<<<<<<< HEAD


=======
<<<<<<< HEAD
toast ({
}
}'";
};
=======
<<<<<<< HEAD
toast ({
=======
<<<<<<< HEAD
toast ({}
}'";
}
=======
toast ({
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

;

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/listing/AIListingGenerator.tsx
=======
<<<<<<< HEAD
}'"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
}) => {setIsLoading (true)try {const {data, error ;
}= await supabase && supabase.functions.invoke ('ai-listing-generator', {body: {title, category,  keyFeatures, targetAudience ;})if (error) {throw new Error (error && error.message)}if (data && (data as any) .error) {throw new Error ( (data as any) .error)}setGeneratedContent ( (data as any) ?.generated || null)toast ({}catch (error) {';
  logErrorToProduction ('Error generating content:', {data: error ;
})toast ({}finally {setIsLoading (false)}const handleApply = () => {if (generatedContent && onApplyGenerated) {onApplyGenerated (generatedContent)toast ({}return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingFormonSubmit= {handleGenerate;
}isLoading= {isLoading;
}initialValues= {initialValues;
}/> </CardContent> </Card> {isLoading && <LoadingContentSkeleton /> ;
}{generatedContent && !isLoading && (<GeneratedContentDisplaycontent= {generatedContent;
}onApply= {handleApply;
}/>)}</div>)}'";data: error;
})toast ({}finally {setIsLoading (false)}const handle_apply = () =>: any {// Check condition;
if ( {) {$2;
}
  onApplyGenerated (generated_content)toast ({}}'";
}}}
}
}</div>;
  )};return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm onSubmit= {handleGenerate;
}isLoading= {isLoading;
}initialValues= {initialValues;
}/> </CardContent> </Card> {isLoading && <LoadingContentSkeleton />;
}{generatedContent && !isLoading && (<GeneratedContentDisplay content= {generatedContent;
}onApply= {handleApply;
}/>)}</div>)}'";
}'"
=======
}'"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

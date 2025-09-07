import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
<<<<<<< HEAD

interface GeneratedContent {

=======
<<<<<<< HEAD
import { GeneratedContentDisplay } from "./GeneratedContentDisplay";
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
interface GeneratedContent {
=======

interface GeneratedContent {

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  description: string,
  tags: string[],
  suggestedPrice: {}
    min: number,;
    max: number;
  },
  keyPoints: string[]

interface GeneratedContent {
  // TODO: Implement
}
  description: string,
  tags: string[],
  suggestedPrice: {,
  min: number,
    max: number;
<<<<<<< HEAD
=======
=======


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Sparkles} from "lucide-react";
import {supabase} from "@/integrations/supabase/client";
import {AIListingForm} from "./AIListingForm";
import {GeneratedContentDisplay} from "./GeneratedContentDisplay";
import {LoadingContentSkeleton} from "./LoadingContentSkeleton";
<<<<<<< HEAD
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay";
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
interface GeneratedContent {
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
interface GeneratedContent {
>>>>>>> merged-prs-20250907-203621
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
<<<<<<< HEAD
    max: number},
=======
    max: number
  },
>>>>>>> merged-prs-20250907-203621
  keyPoints: string[]
}

  description: string
  tags: string[]
  suggestedPrice: {
    min: number

    max: number
  }
  keyPoints: string[]
}
interface AIListingGeneratorProps {
<<<<<<< HEAD
  onApplyGenerated?: (content: GeneratedContent) => void,
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast($2);
  const [isLoading, setIsLoading] = useState($2);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null),
=======

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  };
  keyPoints: string[];
}

interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  }
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;

    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  }
}

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from './react';
import { use_toast } from '@/hooks / use - toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Sparkles } from './lucide-react';
import { supabase } from '@/integrations / supabase / client';
import { AIListingForm } from './AIListingForm';
import { GeneratedContentDisplay } from './GeneratedContentDisplay';
<<<<<<< HEAD

import { LoadingContentSkeleton } from './LoadingContentSkeleton';
interface GeneratedContent {}
  description: string,
  tags: string[],
  suggested_price: {}

    min: number,
    max: number;
  }
  key_points: string[];
}

    title?: string;
    category?: string;
    key_features?: string;
    target_audience?: string;
  }
}

  const { toast } = use_toast ();
  const [is_loading, setIsLoading] = useState (false);
  const [generated_content, setGeneratedContent] = useState < GeneratedContent | null>(null);
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

        description: "AI has created optimized listing content for you."
      })
    } catch (error) {"
      console.error("Error generating content:", error);
      toast({"
        title: "Generation Failed""
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.""
        variant: "destructive"

    } finally {
      setIsLoading(false)
    }
  }
  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
=======

import { LoadingContentSkeleton } from './LoadingContentSkeleton';
interface GeneratedContent {}
  description: string,
  tags: string[],
  suggested_price: {}

    min: number,
    max: number;
  }
  key_points: string[];
}

    title?: string;
    category?: string;
    key_features?: string;
    target_audience?: string;
  }
}

  const { toast } = use_toast ();
  const [is_loading, setIsLoading] = useState (false);
  const [generated_content, setGeneratedContent] = useState < GeneratedContent | null>(null);
;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handle_generate = async ({
    title;
    category;
    key_features;
    target_audience;
  }: {
    title: string,
    category: string,
    key_features: string,
    target_audience: string;
  }) => {
    setIsLoading (true);
;
    try {
      const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {
        body: { title, category, key_features, target_audience }
      });
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      if (data.error) {
        throw new Error(data.error)
      }

<<<<<<< HEAD
      setGeneratedContent($2);
      toast({
        title: "Content Generated"
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      console.error($2);
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated($2);
=======




<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setGeneratedContent(data.generated);
      toast({
        title: "Content Generated"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {"
      console.error("Error generating content:", error);
      toast({"
        title: "Generation Failed""
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.""
        variant: "destructive"

    } finally {
      setIsLoading(false)
    }
  }
  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
    } finally {
      setIsLoading(false)
    }
  }
  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
>>>>>>> merged-prs-20250907-203621
      toast({
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  },
=======
  }
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <AIListingForm
            onSubmit={handleGenerate}
            isLoading={isLoading}
;
      setGeneratedContent(data.generated),;
      toast({;
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
      console.error("Error generating content:", error),;
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",;
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
=======
<<<<<<< HEAD

=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
      // Check condition;
if ( {) {}
  $2;
}
        throw new Error (error.message);
      }
      // Check condition;
if ( {) {}
  $2;

}
        throw new Error (data.error);
      }
      setGeneratedContent (data.generated);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      setIsLoading (false);
    }
  }

<<<<<<< HEAD
=======
=======
      toast ({
        title: "Content Generated",
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {
      console.error ("Error generating content:", error);
      toast ({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive";
      });
    } finally {
      setIsLoading (false);
    }
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleGenerate = async ({;
    title;
    category;
    keyFeatures;
    targetAudience;
  }: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
  }) => {;
    setIsLoading(true);
<<<<<<< HEAD

      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      });

      if (error) {;
        throw new Error(error && error.message);
      }

      if (data && data.error) {;
        throw new Error(data && data.error);
      }

      setGeneratedContent(data && data.generated);

=======
<<<<<<< HEAD

=======
    try {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      });
      if (error) {;
        throw new Error(error && error.message);
      }
      if (data && data.error) {;
        throw new Error(data && data.error);
      }
      setGeneratedContent(data && data.generated);
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <AIListingForm
            onSubmit={handleGenerate}
            isLoading={isLoading}
          <AIListingForm 
            onSubmit={handleGenerate} 
            isLoading={isLoading} 
;
      setGeneratedContent(data.generated),;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({;
        title: "Content Generated",
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      console.error("Error generating content:", error),;
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      console && console.error("Error generating content:", error);
      toast({;
        title: "Generation Failed",
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent);
      toast({;
        title: "Content Applied",
        description: "The generated content has been applied to your listing.";
      });

    }
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-6">;

  return (

}
  }
  return (
<<<<<<< HEAD
=======
=======

  return (

<<<<<<< HEAD
    }
  }
  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-6">;

      <Card className="border border-zion-blue-light bg-zion-blue-dark">;
        <CardHeader>;"
          <CardTitle className="flex items-center text-white">;"
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;"
          <p className="text-sm text-zion-slate-light">;
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;

            onSubmit={handleGenerate} 
            isLoading={isLoading} 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

          <AIListingForm 
            onSubmit={handleGenerate} 
            isLoading={isLoading} 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            initialValues={initialValues}
          />;
        </CardContent>;
      </Card>;
      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (;
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />;
<<<<<<< HEAD
      )}
=======
<<<<<<< HEAD
      )}
=======
      )}



    </div>;
  );
}
;
  const handle_apply = () =>: any {
    // Check condition
if ( {) {
  $2
}
      onApplyGenerated (generated_content);
      toast ({
        title: "Content Applied",
        description: "The generated content has been applied to your listing.";
      });
    }
  }
;
  return (
    <div className="space - y-6">;
      <Card className="border border - zion - blue - light bg - zion - blue - dark">;
        <CardHeader>;
          <CardTitle className="flex items - center text - white">;
            <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text - sm text - zion - slate - light">;
            Provide basic information and let AI generate optimized, SEO - friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;
          <AIListingForm;
            on_submit={handle_generate}
            is_loading={is_loading}
            initial_values={initial_values}
          />;
        </CardContent>;
      </Card>;
      {is_loading && <LoadingContentSkeleton />}
      {generated_content && !is_loading && (
        <GeneratedContentDisplay content={generated_content} on_apply={handle_apply} />)}
    </div>);

<<<<<<< HEAD
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Sparkles } from "lucide-react",;
import { supabase } from "@/integrations/supabase/client",;
import { AIListingForm } from "./AIListingForm",;
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",;
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",;
;
interface GeneratedContent {;
  description:string,;
  tags:string[],;
  suggestedPrice:{;
    min:number,;
    max:number;
  },;
  keyPoints:string[];
}
;
interface AIListingGeneratorProps {;
  onApplyGenerated?:(content:GeneratedContent) => void,;
  initialValues?:{;
    title?:string,;
    category?:string,;
    keyFeatures?:string,;
    targetAudience?:string;
  },;
}
;
export function AIListingGenerator({ onApplyGenerated, initialValues = {} } AIListingGeneratorProps) {;
  const { toast } = useToast(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null),;
;
  const handleGenerate = async ({;
    title,;
    category,;
    keyFeatures,;
    targetAudience;
  } {;
    title:string,;
    category:string,;
    keyFeatures:string,;
    targetAudience:string;
  }) => {;
    setIsLoading(true),;
    ;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body:{ title, category, keyFeatures, targetAudience }
      }),;
;
      if (error) {;
        throw new Error(error.message),;
      }
      ;
      if (data.error) {;
        throw new Error(data.error),;
      }
;
      setGeneratedContent(data.generated),;
      toast({;
        title:"Content Generated",;
        description:"AI has created optimized listing content for you.";
      }),;
    } catch (error) {;
      console.error("Error generating content:", error),;
      toast({;
        title:"Generation Failed",;
        description:error instanceof Error ? error.message :"Failed to generate content. Please try again.",;
        variant:"destructive";
      }),;
    } finally {;
      setIsLoading(false),;
>>>>>>> merged-prs-20250907-203621
    }
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
          <AIListingForm;
            onSubmit={handleGenerate} ;
            isLoading={isLoading} ;
            initialValues={initialValues}
          />
        </CardContent>
      </Card>
      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
    </div>
  )
}
<<<<<<< HEAD
=======
    </div>;
  );
}
;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

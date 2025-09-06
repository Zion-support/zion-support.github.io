<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
import {logErrorToProduction} from '@/utils/productionLogger';

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface GeneratedContent {

  description: string
  tags: string[]
  suggestedPrice: {
    min: number

    max: number
  }
  keyPoints: string[]
}
interface AIListingGeneratorProps {

  onApplyGenerated?: (content: GeneratedContent,) => void

  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
  }
}

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
    targetAudience: string
  }) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      })
      if (error) {
        throw new Error(error.message)
      }
      if (data && (data as any).error) {
        throw new Error((data as any).error)
      }
<<<<<<< HEAD
<<<<<<< HEAD

      setGeneratedContent((data as any)?.generated || null)

=======
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
import {logErrorToProduction} from '@/utils/productionLogger';
      setGeneratedContent((data as any)?.generated |null)
      setGeneratedContent((data as any)?.generated || null)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      setGeneratedContent((data as any)?.generated |null)
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',

      setGeneratedContent((data as any)?.generated || null)
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> >>>>>>>       toast({
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
>>>>>>>         title: "Content Generated"
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error })
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again."
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      toast({
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>       toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
    }
<<<<<<< HEAD

  return (
=======
  }

>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
          <AIListingForm
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            onSubmit = {handleGenerate,}
            isLoading = {isLoading,}
            initialValues = {initialValues,}
          />
        </CardContent>
      </Card>
<<<<<<< HEAD

=======
          <AIListingForm 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            onSubmit={handleGenerate} 
            isLoading={isLoading} 
;
      setGeneratedContent((data as any)?.generated || null),;
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
<<<<<<< HEAD

export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

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
    setIsLoading(true);    ;
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      });

      if (error) {;
        throw new Error(error && error.message);
      }

      if (data && (data as any).error) {;
        throw new Error((data as any).error);
      }

      setGeneratedContent((data as any)?.generated || null);
>>>>>>>       toast({;
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error }),;
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;
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
}
      onApplyGenerated (generated_content);
      toast ({
        title: "Content Applied",
        description: "The generated content has been applied to your listing.";
      });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  },

<<<<<<< HEAD
<<<<<<< HEAD
    }

  },




>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
          <AIListingForm 
            onSubmit = {handleGenerate,}
            isLoading = {isLoading,}
            initialValues = {initialValues,}
          />
        </CardContent>
      </Card>
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
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",;
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          />;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
  )
}: AIListingGeneratorProps) {
  const {
  toast
}= useToast ()
const [isLoading, setIsLoading] = useState (false)
const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null> (null)
const handleGenerate = async ({
  title
category
keyFeatures
targetAudience
}: {
  title: string
category: string
keyFeatures: string
targetAudience: string
}) => {
  setIsLoading (true)
try {
  const {
  data, error
}= await supabase.functions.invoke ('ai-listing-generator', {
  body: {
  title, category,  keyFeatures, targetAudience
})
if (error) {
  throw new Error (error.message)
}if (data && (data as any) .error) {
  throw new Error ( (data as any) .error)
}setGeneratedContent ( (data as any) ?.generated |null)
toast ({
}catch (error) {'
  logErrorToProduction ('Error generating content:', {
  data: error
})
toast ({
}finally {
  setIsLoading (false)
}
const handleApply = () => {
  if (generatedContent && onApplyGenerated) {
  onApplyGenerated (generatedContent)
toast ({
}
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  handleApply
}/>)
}</div>)
}'"
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </div>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  handleApply 
}/>) 
}</div>) 
}'";
};
}
}
}
}
}
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

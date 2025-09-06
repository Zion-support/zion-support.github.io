<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
<<<<<<< HEAD
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
import {logErrorToProduction} from '@/utils/productionLogger';
=======
<<<<<<< HEAD
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
import {logErrorToProduction} from '@/utils/productionLogger';
=======
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface GeneratedContent {

  description: string
  tags: string[]
  suggestedPrice: {
    min: number

    max: number
  }
  key_points: string[];
}
interface AIListingGeneratorProps {

  onApplyGenerated?: (content: GeneratedContent,) => void

  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
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
      setGeneratedContent((data as any)?.generated |null)
=======
<<<<<<< HEAD
      setGeneratedContent((data as any)?.generated |null)
=======
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

      setGeneratedContent((data as any)?.generated || null)
=======
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
    } finally {
      setIsLoading (false);
    }
  }
  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
<<<<<<< HEAD
      onApplyGenerated(generatedContent)
=======
      onApplyGenerated(generatedContent),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
          <AIListingForm
=======
          <AIListingForm 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            onSubmit = {handleGenerate,}
            isLoading = {isLoading,}
            initialValues = {initialValues,}
          />
        </CardContent>
      </Card>
=======
<<<<<<< HEAD
          <AIListingForm 
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

  return (
<<<<<<< HEAD
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
            onSubmit = {handleGenerate,}
            isLoading = {isLoading,}
            initialValues = {initialValues,}
          />
        </CardContent>
      </Card>
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
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
  setIsLoading (true);
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
}catch (error) {';
  logErrorToProduction ('Error generating content:', {
  data: error
})
toast ({
}finally {
  setIsLoading (false)
  data: error;
});
toast ({
}finally {
  setIsLoading (false);
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
  handleApply
}/>)
}</div>)
}'"
}
<<<<<<< HEAD
return (<div className="space - y-6" > <Card className="border border - zion - blue - light bg - zion - blue - dark" > <CardHeader> <CardTitle className="flex items - center text - white" > <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" /> AI Listing Optimizer </CardTitle> <p className="text - sm text - zion - slate - light" > Provide basic information and let AI generate optimized, SEO - friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm on_submit= {
  handle_generate;
}is_loading= {
  is_loading;
}initial_values= {
  initial_values;
}/> </CardContent> </Card> {
  is_loading && <LoadingContentSkeleton />;
}{
  generated_content && !is_loading && (<GeneratedContentDisplay content= {
  generated_content;
}on_apply= {
  handle_apply;
}/>);
}</div>);
}'";
}
=======
  onApplyGenerated (generated_content);
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
  handleApply
}/>)
}</div>)
}'"
}
=======
  handleApply 
}/>) 
}</div>) 
}'";
}

}
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

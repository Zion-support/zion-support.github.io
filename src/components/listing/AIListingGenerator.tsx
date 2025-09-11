<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
import {logErrorToProduction} from '@/utils/productionLogger';

interface GeneratedContent {

  description: string
  tags: string[]
  suggestedPrice: {
    min: number

    max: number
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface GeneratedContent {
  description: string,
  tags: string[],
  suggested_price: {
    min: number,
    max: number;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  keyPoints: string[]
}
interface AIListingGeneratorProps {

<<<<<<< HEAD
<<<<<<< HEAD
  onApplyGenerated?: (content: GeneratedContent,) => void

  initialValues?: {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
  };
  keyPoints: string[];
}

interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent,) => void,;
  initialValues?: {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
  }
}

<<<<<<< HEAD
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
    title: string
    category: string
    keyFeatures: string
    targetAudience: string
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  onApplyGenerated?: (content: GeneratedContent, ) => void,
  initial_values?: {
    title?: string;
    category?: string;
    key_features?: string;
    target_audience?: string;
  }
}
export /**
 * AIListingGenerator - Function description
 */
function AIListingGenerator() {
  const { toast } = use_toast ();
  const [is_loading, setIsLoading] = useState (false);
  const [generated_content, setGeneratedContent] = useState < GeneratedContent | null>(null);
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      })
      if (error) {
        throw new Error(error.message)
      }
<<<<<<< HEAD
      if (data && (data as any).error) {
        throw new Error((data as any).error)
      }
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
import {logErrorToProduction} from '@/utils/productionLogger';
      setGeneratedContent((data as any)?.generated |null)
      setGeneratedContent((data as any)?.generated || null)
      setGeneratedContent((data as any)?.generated |null)
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',

      setGeneratedContent((data as any)?.generated || null)
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Sparkles } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton",
import {logErrorToProduction} from '@/utils/productionLogger',
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
  }) => {
    setIsLoading (true);
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
=======
      toast({
        title: "Content Generated"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      setGeneratedContent ((data as any)?.generated || null);
      toast ({
        title: "Content Generated",
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {
      logErrorToProduction ('Error generating content:', { data: error }),
      toast ({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive";
      });
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent)
<<<<<<< HEAD
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
          <AIListingForm 
            onSubmit={handleGenerate} 
            isLoading={isLoading} 
;
      setGeneratedContent((data as any)?.generated || null),;
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),


      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
<<<<<<< HEAD
<<<<<<< HEAD
    }
  }
=======
=======
    }
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

    }

  },




  return (

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          <AIListingForm;
            onSubmit={handleGenerate} ;
            isLoading={isLoading} ;
            initialValues={initialValues}
          />;
        </CardContent>;
      </Card>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <AIListingForm
            onSubmit = {handleGenerate,}
            isLoading = {isLoading,}
            initialValues = {initialValues,}


          <AIListingForm 


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>
  )
}: AIListingGeneratorProps) {
  const {
<<<<<<< HEAD
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
=======

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  toast;
}= use_toast ();
const [is_loading, setIsLoading] = useState (false);
const [generated_content, setGeneratedContent] = useState < GeneratedContent | null> (null);
const handle_generate = async ({
  title;
category;
key_features;
target_audience;
}: {
  title: string;
category: string;
key_features: string;
target_audience: string;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}) => {
  setIsLoading (true)
try {
  const {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  data, error;
}= await supabase.functions.invoke ('ai - listing - generator', {
  body: {
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
  throw new Error ( (data as any) .error);
}setGeneratedContent ( (data as any) ?.generated || null);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
toast ({
}catch (error) {'
  logErrorToProduction ('Error generating content:', {

          />;
        </CardContent>;
      </Card>;

      {isLoading && <LoadingContentSkeleton />}

      {generatedContent && !isLoading && (;
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />;
      )}
    </div>;
  );

}: AIListingGeneratorProps) {;
  const {;
  toast ;
}= useToast ();
const [isLoading, setIsLoading] = useState (false);
const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null> (null);
const handleGenerate = async ({;
  title;
category;
keyFeatures;
targetAudience ;
}: {;
  title: string;
category: string;
keyFeatures: string;
targetAudience: string ;
}) => {;
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

  data: error;
});
toast ({
}finally {
  setIsLoading (false);
}
<<<<<<< HEAD
const handleApply = () => {
  if (generatedContent && onApplyGenerated) {
  onApplyGenerated (generatedContent)
toast ({
}
<<<<<<< HEAD
  handleApply
}/>)
}</div>)
}'"
}
ursor/fix-website-loading-errors-and-merge-6662
  handleApply 
}/>) 
}</div>) 
}'";
};
}
=======

}'";
};
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
}
}
}
<<<<<<< HEAD
    </div>;
  );
}
;
=======

const handle_apply = () =>: any {
  // Check condition
if ( {) {
  $2
}
  onApplyGenerated (generated_content);
toast ({
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}'";
}

}
}
}
}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

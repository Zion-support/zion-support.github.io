<<<<<<< HEAD
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { AIListingForm } from './AIListingForm';
import { GeneratedContentDisplay } from './GeneratedContentDisplay';
import { LoadingContentSkeleton } from './LoadingContentSkeleton';
import { logErrorToProduction } from '@/utils/productionLogger';
import React, { useState } from 'react;
import { useToast } from @/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;
import { Sparkles } from lucide-react';
import { supabase } from '@/integrations/supabase/client;
import { AIListingForm } from ./AIListingForm';
import { GeneratedContentDisplay } from './GeneratedContentDisplay;
import { LoadingContentSkeleton } from ./LoadingContentSkeleton';
import { logErrorToProduction } from '@/utils/productionLogger;

=======
>>>>>>> origin/chore/fix-lint-and-merge
interface GeneratedContent {

import React, { useState } from react';
import { useToast } from '@/hooks/use-toast;
import { Card, CardContent, CardHeader, CardTitle } from @/components/ui/card';
import { Sparkles } from 'lucide-react;
import { supabase } from @/integrations/supabase/client';
import { AIListingForm } from './AIListingForm;
import { GeneratedContentDisplay } from ./GeneratedContentDisplay';
import { LoadingContentSkeleton } from './LoadingContentSkeleton;
import { logErrorToProduction } from @/utils/productionLogger';

interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
origin/cursor/automate-test-improve-and-merge-code-2533
    max: number
<<<<<<< HEAD
  description: string,
  tags: string[],
  suggested_price: {
    min: number,
    max: number;

=======
>>>>>>> origin/chore/fix-lint-and-merge

  }

  keyPoints: string[]

}
interface AIListingGeneratorProps {

<<<<<<< HEAD
interface GeneratedContent {;
=======
>>>>>>> origin/chore/fix-lint-and-merge
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
<<<<<<< HEAD
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number;
  }
  keyPoints: string[];
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent,) => void,
  initialValues?: {

=======
>>>>>>> origin/chore/fix-lint-and-merge

  keyPoints: string[];
}
interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void,
  initialValues?: {

  initialValues?: {
origin/cursor/automate-test-improve-and-merge-code-2533
    title?: string;
<<<<<<< HEAD

interface GeneratedContent  {description: string;
  tags: string[];
  suggestedPrice: {min: number;
import { useToast  } from @/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card;
import { Sparkles  } from lucide-react';
import { supabase  } from '@/integrations/supabase/client;
import { AIListingForm  } from ./AIListingForm';
import { GeneratedContentDisplay  } from './GeneratedContentDisplay;
import { LoadingContentSkeleton  } from ./LoadingContentSkeleton';
import { logErrorToProduction  } from '@/utils/productionLogger;
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
    targetAudience?: string;
=======
    category?: string;
    keyFeatures?: string;
>>>>>>> origin/chore/fix-lint-and-merge
    targetAudience?: string

  }
}

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
}
export /**;
 * AIListingGenerator - Function description;
 */;
function AIListingGenerator() {const { toast } = use_toast ()const [is_loading, setIsLoading] = useState (false)const [generated_content, setGeneratedContent] = useState < GeneratedContent | null>(null)const handle_generate = async ({title;
    category;
    key_features;
    target_audience;
  }: {
    title: string,
    category: string,
    key_features: string,
    target_audience: string;


  }) => {
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
    title: string
    category: string
    keyFeatures: string
    targetAudience: string  }) => {
    setIsLoading(true)
    try {
<<<<<<< HEAD
      const { data, error } = await supabase.functions.invoke(ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      })
      if (error) {
        throw new Error(error.message)
      }





      toast({
=======
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

>>>>>>> origin/chore/fix-lint-and-merge
      setGeneratedContent((data as any)?.generated || null)
import React, { useState } from "react,
import { useToast } from @/hooks/use-toast",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card,
import { Sparkles } from 'lucide-react
import { supabase } from @/integrations/supabase/client",
import { AIListingForm } from "./AIListingForm,
import { GeneratedContentDisplay } from ./GeneratedContentDisplay",
import { LoadingContentSkeleton } from "./LoadingContentSkeleton,
import {logErrorToProduction} from @/utils/productionLogger',      toast({

        title: Content Generated"
        description: "AI has created optimized listing content for you.
      })
    } catch (error) {
      logErrorToProduction('Error generating content:, { data: error })
      toast({
        title: Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.
        variant: destructive"
      })
      // Check condition
if (.error) {) {
  $2
}
        throw new Error ((data as any).error);

      }
      if (data && (data as any).error) {
        throw new Error((data as any).error);
      }

      setGeneratedContent((data as any)?.generated || null),
      toast({
        title: "Content Generated",
<<<<<<< HEAD
  }: {title: string,category: string,key_features: string,target_audience: string;}) => {setIsLoading(true)try {const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {body: { title, category, key_features, target_audience }
  }: {title: string,category: string,key_features: string,target_audience: string;}) => {setIsLoading(true)try {const { data, error } = await supabase.functions.invoke (ai - listing - generator', {body: { title, category, key_features, target_audience }
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
      });
        description: AI has created optimized listing content for you."
=======
        description: "AI has created optimized listing content for you."
>>>>>>> origin/chore/fix-lint-and-merge
      })
    } catch (error) {
      logErrorToProduction(Error generating content:', { data: error }),
      toast({
        title: "Generation Failed,
        description: error instanceof Error ? error.message : Failed to generate content. Please try again.",
        variant: "destructive
      })
    } finally {
      setIsLoading(false)
    }

<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),

<<<<<<< HEAD


      toast({
        title: Content Applied"
        description: "The generated content has been applied to your listing.
      })
export function AIListingGenerator({ onApplyGenerated, initialValues;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
  return (
    <div className=space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark>
        <CardHeader>
          <CardTitle className=flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan />
            AI Listing Optimizer
          </CardTitle>
          <p className=text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent>
          <AIListingForm 
            onSubmit={handleGenerate} 
            isLoading={isLoading}
      setGeneratedContent((data as any)?.generated || null),

export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);,
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const handleGenerate = async ({
    title;
    category;
    keyFeatures;
import {logErrorToProduction} from @/utils/productionLogger',
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
import React, { useState } from react",
import { useToast } from "@/hooks/use-toast,
import { Card, CardContent, CardHeader, CardTitle } from @/components/ui/card",
import { supabase } from "@/integrations/supabase/client,
import { AIListingForm } from ./AIListingForm",
import { GeneratedContentDisplay } from "./GeneratedContentDisplay,
import { LoadingContentSkeleton } from ./LoadingContentSkeleton",
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number;
  },
  keyPoints: string[];
}
interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void,
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string;
  }
}
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast(),
  const [isLoading, setIsLoading] = useState(false),
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null),
    title,
    category,
    keyFeatures,
    targetAudience;
  }: {
    title: string,
    category: string,
    keyFeatures: string,
    targetAudience: string;
  }) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator, {
        body: { title, category, keyFeatures, targetAudience }
      });
      if (error) {
        throw new Error(error && error.message);
      }
      if (data && (data as,  any).error) {
        throw new Error((data as,  any).error);
      }
      setGeneratedContent((data as,  any)?.generated || null);
    setIsLoading(true),
    try {
        body: { title, category, keyFeatures, targetAudience }
      }),
      if (error) {
        throw new Error(error.message);
      }
      if (data && (data as any).error) {
        throw new Error((data as any).error);
      }

<<<<<<< HEAD
      setGeneratedContent((data as any)?.generated || null);

      toast({
        title: "Content Generated,
        description: AI has created optimized listing content for you.";
=======
      toast({;
        title: "Content Generated",
        description: "AI has created optimized listing content for you.";
>>>>>>> origin/chore/fix-lint-and-merge
      });
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error }),;
      toast({;
<<<<<<< HEAD
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;
        title: "Generation Failed,
        description: error instanceof Error ? error && error.message : Failed to generate content. Please try again.",

        variant: "destructive;
      });
    } finally {
      setIsLoading(false);
    }
  }

    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: Content Applied",
        description: "The generated content has been applied to your listing.;
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
      });
    }
  }}

  },




  return (


    <div className="space-y-6>;
      })export function AIListingGenerator({ onApplyGenerated, initialValues;return (<div className=space-y-6">;
        title: "Generation Failed,
=======
        title: "Generation Failed",
>>>>>>> origin/chore/fix-lint-and-merge

      <Card className=border border-zion-blue-light bg-zion-blue-dark">;
        <CardHeader>;
          <CardTitle className="flex items-center text-white>;
            <Sparkles className=h-5 w-5 mr-2 text-zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text-sm text-zion-slate-light>;
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;

          <AIListingForm;
            onSubmit={handleGenerate}
            isLoading={isLoading}
            initialValues={initialValues}

          <AIListingForm
            onSubmit = {handleGenerate}
            isLoading = {isLoading}
            initialValues = {initialValues}

<<<<<<< HEAD

          <AIListingForm 



=======
>>>>>>> origin/chore/fix-lint-and-merge
      {isLoading && <LoadingContentSkeleton />}

      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}

<<<<<<< HEAD
    <div className="space - y-6">;
    <div className=space - y-6">;
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
  }) => {setIsLoading(true)try {const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator, {body: { title, category, keyFeatures, targetAudience }
      })if (error) {throw new Error(error && error.message)}if (data && (data as any).error) {throw new Error((data as any).error)}setGeneratedContent((data as any)?.generated || null)toast({title: "Content Generated,description: AI has created optimized listing content for you.";
      })} catch (error) {logErrorToProduction(Error generating content:', { data: error }),toast({title: "Generation Failed,description: error instanceof Error ? error && error.message : Failed to generate content. Please try again.",variant: "destructive;
      })} finally {setIsLoading(false)}}const handleApply = () => {if (generatedContent && onApplyGenerated) {onApplyGenerated(generatedContent)toast({title: Content Applied",description: "The generated content has been applied to your listing.;
      })const handle_apply = () =>: any {// Check condition;
if ( {) {$2;
}
      onApplyGenerated (generated_content)toast ({title: Content Applied",description: "The generated content has been applied to your listing.;
      })}
  }}},return (<div className=space-y-6">;
      <Card className="border border-zion-blue-light bg-zion-blue-dark>;
        <CardHeader>;
          <CardTitle className=flex items-center text-white">;
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className=text-sm text-zion-slate-light">;
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
      )}<div className="space - y-6>;
      <Card className=border border - zion - blue - light bg - zion - blue - dark">;
=======
>>>>>>> origin/chore/fix-lint-and-merge
        <CardHeader>;
          <CardTitle className="flex items - center text-white>;
            <Sparkles className=h - 5 w - 5 mr - 2 text - zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text - sm text - zion - slate-light>;
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
      {generated_content && !is_loading && (<GeneratedContentDisplay content={generated_content} on_apply={handle_apply} />)}
    </div>)}: AIListingGeneratorProps) {const {toast;
}= use_toast ()const [is_loading, setIsLoading] = useState (false)const [generated_content, setGeneratedContent] = useState < GeneratedContent | null> (null)const handle_generate = async ({title;
category;
key_features;
target_audience;
}: {title: string;
category: string;
key_features: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
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

  data, error;
<<<<<<< HEAD
}= await supabase.functions.invoke ('ai - listing - generator', {
  body: {
=======
>>>>>>> origin/chore/fix-lint-and-merge
}= await supabase.functions.invoke ('ai - listing - generator', {'
}= await supabase.functions.invoke ('ai - listing - generator, {
  body: {}= await supabase.functions.invoke (ai - listing - generator', {'
  body: {,
  title, category,  key_features, target_audience;
});
// Check condition
if ( {) {
  $2
<<<<<<< HEAD
target_audience: string;}) => {setIsLoading (true)try {const {}catch (error) {';
  logErrorToProduction ('Error generating content:', {data, error;
}= await supabase.functions.invoke ('ai - listing - generator', {body: {title, category,  key_features, target_audience;
target_audience: string;}) => {setIsLoading (true)try {const {}catch (error) {;
  logErrorToProduction (Error generating content:', {data, error;
}= await supabase.functions.invoke ('ai - listing - generator, {body: {title, category,  key_features, target_audience;
})// Check condition;
if ( {) {$2;
}
  throw new Error (error.message)}// Check condition;
if (.error) {) {$2;
}
  throw new Error ( (data as any) .error)}setGeneratedContent ( (data as any) ?.generated || null)toast ({}catch (error) {;
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
}) => {;
}) => {
  setIsLoading (true);
try {
  data, error ;
}= await supabase && supabase.functions.invoke (ai-listing-generator, {
  body: {
  title, category,  keyFeatures, targetAudience ;

});
if (error) {
  throw new Error (error && error.message) ;
}if (data && (data as any) .error) {
  throw new Error ( (data as any) .error) ;
}setGeneratedContent ( (data as any) ?.generated || null);
toast ({}catch (error) {';
  logErrorToProduction ('Error generating content:, {
  data: error ;
});
toast ({}finally {
  setIsLoading (false) ;

}
  if (generatedContent && onApplyGenerated) {
  onApplyGenerated (generatedContent);
toast ({}
return (<div className=space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark > <CardHeader> <CardTitle className=flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan /> AI Listing Optimizer </CardTitle> <p className=text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingFormonSubmit= {
  handleGenerate 
}isLoading= {
  isLoading 
}initialValues= {
  initialValues 
=======
>>>>>>> origin/chore/fix-lint-and-merge
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
      {generatedContent && !isLoading && (;
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />;
      )}
    </div>;
  );

}finally {
  setIsLoading (false) ;
}
  if (generatedContent &&,  onApplyGenerated) {
  onApplyGenerated (generatedContent);
toast ({}
return (<div className="space-y-6 > <Card className=border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white > <Sparkles className=h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingFormonSubmit= {
  handleGenerate
}isLoading= {
  isLoading
}initialValues= {
  initialValues
}/> </CardContent> </Card> {
  isLoading && <LoadingContentSkeleton /> ;
}{
  generatedContent && !isLoading && (<GeneratedContentDisplaycontent= {
<<<<<<< HEAD
  generatedContent 
}onApply= {
  handleApply 
=======
>>>>>>> origin/chore/fix-lint-and-merge
  generatedContent
}onApply= {
  handleApply
}/>) ;
}</div>) ;
}";

<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
  data: error;

});
toast ({}finally {
  setIsLoading (false);

}

  // Check condition
if ( {) {
  $2
}
  onApplyGenerated (generated_content);
<<<<<<< HEAD
toast ({}
}'";
}
=======
toast ({
>>>>>>> origin/chore/fix-lint-and-merge
}

return (<div className=space-y-6 > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className=flex items-center text-white > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className=text-sm text-zion-slate-light > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm onSubmit= {
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
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
}) => {setIsLoading (true)try {const {data, error ;
}= await supabase && supabase.functions.invoke (ai-listing-generator, {body: {title, category,  keyFeatures, targetAudience ;})if (error) {throw new Error (error && error.message)}if (data && (data as any) .error) {throw new Error ( (data as any) .error)}setGeneratedContent ( (data as any) ?.generated || null)toast ({}catch (error) {';
  logErrorToProduction ('Error generating content:, {data: error ;
})toast ({}finally {setIsLoading (false)}const handleApply = () => {if (generatedContent && onApplyGenerated) {onApplyGenerated (generatedContent)toast ({}return (<div className="space-y-6 > <Card className=border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white > <Sparkles className=h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingFormonSubmit= {handleGenerate;
}isLoading= {isLoading;
}initialValues= {initialValues;
}/> </CardContent> </Card> {isLoading && <LoadingContentSkeleton /> ;
}{generatedContent && !isLoading && (<GeneratedContentDisplaycontent= {generatedContent;
}onApply= {handleApply;
}/>)}</div>)};data: error;
})toast ({}finally {setIsLoading (false)}const handle_apply = () =>: any {// Check condition;
if ( {) {$2;
}
  onApplyGenerated (generated_content)toast ({}}'";
}}}
}
}
}</div>;
  )}return (<div className="space-y-6 > <Card className=border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white > <Sparkles className=h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm onSubmit= {handleGenerate;
}isLoading= {isLoading;
}initialValues= {initialValues;
}/> </CardContent> </Card> {isLoading && <LoadingContentSkeleton />;
}{generatedContent && !isLoading && (<GeneratedContentDisplay content= {generatedContent;
}onApply= {handleApply;
}/>)}</div>)}';
}'"
=======
}'"
>>>>>>> origin/chore/fix-lint-and-merge

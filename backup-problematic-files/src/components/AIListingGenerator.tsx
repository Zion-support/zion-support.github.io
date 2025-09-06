<<<<<<< HEAD
import React, { useState } from 'react';
import { use_toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import Skeleton from '@/components / ui / skeleton';
import { Sparkles, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations / supabase / client';
import { Badge } from '@/components / ui / badge';
import { logErrorToProduction } from '@/utils / production_logger';
interface GeneratedContent {
  description: string;
tags: string[];
suggested_price: {
  min: number;
max: number;
}
key_points: string[];
}interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void;
initial_values?: {
  title?: string;
category?: string;
key_features?: string;
target_audience?: string;
export /**
 * AIListingGenerator - Function description
 */
function AIListingGenerator() {
  const { toast } = use_toast ();
  const [title, set_title] = useState (initial_values.title || '');
  const [category, set_category] = useState (initial_values.category || '');
  const [key_features, setKeyFeatures] = useState (
    initial_values.key_features || '');
  const [target_audience, setTargetAudience] = useState (
    initial_values.target_audience || '');
  const [is_loading, setIsLoading] = useState (false);
  const [generated_content, setGeneratedContent] = useState (
    null as GeneratedContent | null);
  const handleInputChange = (
    e: { target: { value: string } },
    field: string) =>: any {
    switch (field) {      case 'title':;
        set_title (e.target.value);
        break;
      case 'category':;
        set_category (e.target.value);
        break;
      case 'key_features':;
        setKeyFeatures (e.target.value);
        break;
      case 'target_audience':;
        setTargetAudience (e.target.value);
        break;
    }
  }
  const handle_generate = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading (true);
    try {
      const { data, error } = await supabase.functions.invoke (
        'ai - listing - generator',
        {
          body: { title, category, key_features, target_audience },
        }
      );
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      // Check condition
if (?.error) {) {
  $2
}
        throw new Error ((data as any).error);
      }
      setGeneratedContent ((data as any)?.generated || null);
      toast ({
        title: 'Content Generated',
        description: 'AI has created optimized listing content for you.',
      });
    } catch (error) {
      logErrorToProduction ('Error generating content:', { data: error });
      toast ({
        title: 'Generation Failed',
        description:;
          error instanceof Error;
            ? error.message;
            : 'Failed to generate content. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading (false);
    }
  }
import React, { useState, useMemo } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';
import { Sparkles, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { logErrorToProduction } from '@/utils/productionLogger';
interface GeneratedContent {;
  description: string;
tags: string[];
suggestedPrice: {;
  min: number;
max: number ;
};
keyPoints: string[] ;
}interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void;
initialValues?: {;
  title?: string;
category?: string;
keyFeatures?: string;
targetAudience?: string ;
export function AIListingGenerator(): any ({;
  onApplyGenerated,;
  initialValues = {},;
}: AIListingGeneratorProps) {;
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues && initialValues.title || '');
  const [category, setCategory] = useState(initialValues && initialValues.category || '');
  const [keyFeatures, setKeyFeatures] = useState(;
    initialValues && initialValues.keyFeatures || '';
  );
  const [targetAudience, setTargetAudience] = useState(;
    initialValues && initialValues.targetAudience || '';
  );
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(;
    null as GeneratedContent | null;
  );
  const handleInputChange = (;
    e: { target: { value: string } },;
    field: string;
  ) => {;
    switch (field) {      case 'title':;
        setTitle(e && e.target.value);
        break;
      case 'category':;
        setCategory(e && e.target.value);
        break;
      case 'keyFeatures':;
        setKeyFeatures(e && e.target.value);
        break;
      case 'targetAudience':;
        setTargetAudience(e && e.target.value);
        break;
  const handle_apply = () =>: any {
    // Check condition
if ( {) {
  $2
}
      onApplyGenerated (generated_content);
      toast ({
        title: 'Content Applied',
        description: 'The generated content has been applied to your listing.',
      });
    }
  };
  const handleGenerate = async () => {;
    if (!title || !category) {;
      toast({;
        title: 'Missing required fields',;
        description: 'Please provide at least a title and category.',;
        variant: 'destructive',;
      });
      return;
    }
    setIsLoading(true);
    try {;
      const { data, error } = await supabase && supabase.functions.invoke(;
        'ai-listing-generator',;
        {;
          body: { title, category, keyFeatures, targetAudience },;
        }
      );
      if (error) {;
        throw new Error(error && error.message);
      }
      if ((data as any)?.error) {;
        throw new Error((data as any).error);
      }
      setGeneratedContent((data as any)?.generated || null);
      toast({;
        title: 'Content Generated',;
        description: 'AI has created optimized listing content for you.',;
      });
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error });
      toast({;
        title: 'Generation Failed',;
        description:;
          error instanceof Error;
            ? error && error.message;
            : 'Failed to generate content. Please try again.',;
        variant: 'destructive',;
      });
    } finally {;
      setIsLoading(false);
    }
  };
  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent);
      toast({;
        title: 'Content Applied',;
        description: 'The generated content has been applied to your listing.',;
      });
    }
  }
}
export function AIListingGenerator({ onApplyGenerated, initialValues;
  return (
    <div className='space-y-6'>;
      <Card className='border border-zion-blue-light bg-zion-blue-dark'>;
        <CardHeader>;
          <CardTitle className='flex items-center text-white'>;
            <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className='text-sm text-zion-slate-light'>;
            Provide basic information and let AI generate optimized,;
            SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent className='space-y-4'>;
          <div className='space-y-2'>;
            <label
              htmlFor='title'
              className='text-sm font-medium text-zion-slate-light'>;
              Title;
            </label>;
=======
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import Skeleton from "@/components/ui/skeleton",;
import { Sparkles, ArrowRight } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client",;
import { Badge } from "@/components/ui/badge",;
import {logErrorToProduction} from '@/utils/productionLogger',;
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
  const [title, setTitle] = useState(initialValues.title || ""),;
  const [category, setCategory] = useState(initialValues.category || ""),;
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),;
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),;
  const [isLoading, setIsLoading] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),;
;
  const handleInputChange = (e:{ target:{ value:string } }, field:string) => {;
    switch(field) {;
      case 'title':;
        setTitle(e.target.value),;
        break,;
      case 'category':;
        setCategory(e.target.value),;
        break,;
      case 'keyFeatures':;
        setKeyFeatures(e.target.value),;
        break,;
      case 'targetAudience':;
        setTargetAudience(e.target.value),;
        break;
    }
  },;
;
  const handleGenerate = async () => {;
    if (!title || !category) {;
      toast({;
        title:"Missing required fields",;
        description:"Please provide at least a title and category.",;
        variant:"destructive";
      }),;
      return,;
    }
;
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
      if ((data as any)?.error) {;
        throw new Error((data as any).error),;
      }
;
      setGeneratedContent((data as any)?.generated || null),;
      toast({;
        title:"Content Generated",;
        description:"AI has created optimized listing content for you.";
      }),;
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data:error }),;
      toast({;
        title:"Generation Failed",;
        description:error instanceof Error ? error.message :"Failed to generate content. Please try again.",;
        variant:"destructive";
      }),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent),;
      toast({;
        title:"Content Applied",;
        description:"The generated content has been applied to your listing.";
      }),;
    }
  },;
;
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
        <CardContent className="space-y-4">;
          <div className="space-y-2">;
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
            <Input;
              id="title";
              value={title}
              onChange={(e) => handleInputChange(e, 'title')}
              placeholder="Enter your product or service title";
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;
            <Input;
              id="category";
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder="e.g. AI Tool, Digital Product, Service";
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;
            <Textarea;
              id="keyFeatures";
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
              placeholder="Briefly describe the main features or benefits";
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;
            <Input;
              id="targetAudience";
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder="e.g. Developers, Marketers, Startups";
              className="bg-zion-blue border border-zion-blue-light text-white";}
}export function AIListingGenerator ({;
  onApplyGenerated, initialValues = {;
  ;
}

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
  const [isLoading, setIsLoading] = useState(false),
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);

  const _handleInputChange = (_e: {_target: { value: string} }, _field: string) => {_switch(field) {
      case 'title':
        setTitle(e.target.value),
        break,
      case 'category':
        setCategory(e.target.value),
        break,
      case 'keyFeatures':
        setKeyFeatures(e.target.value),
        break,
      case 'targetAudience':
        setTargetAudience(e.target.value),
        break
    }
  },
  const _handleGenerate = async () => {_if (!title || !category) {
      toast({
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      }),
      return      return;
    }

    setIsLoading(true),
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      }),

      if (error) {
        throw new Error(error.message)
      }
      
      if ((data as any)?.error) {
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
      })    try {_const { data, _error} = await supabase.functions.invoke('ai-listing-generator', {_body: { title, _category, _keyFeatures, _targetAudience}
      });

      if (error) {_throw new Error(error.message);}
      
      if ((data as any)?.error) {_throw new Error((data as any).error);}

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
      <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark&quot;>        <CardHeader>
          <CardTitle className=&quot;flex items-center text-white&quot;>
            <Sparkles className=&quot;h-5 w-5 mr-2 text-zion-cyan&quot; />
            AI Listing Optimizer
          </CardTitle>
          <p className=&quot;text-sm text-zion-slate-light&quot;>
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing          </p>
        </CardHeader>
        <CardContent className=&quot;space-y-4&quot;>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;title&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Title</label>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Input
              id=&quot;title&quot;
              value={title}
<<<<<<< HEAD
              onChange={e => handleInputChange(e, 'title')}
              placeholder='Enter your product or service title';
              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}            />;
          </div>;
          <div className='space-y-2'>;
            <label
              htmlFor='category'
              className='text-sm font-medium text-zion-slate-light'>;
              Category;
            </label>;
=======
              onChange={(e) => handleInputChange(e, 'title')}
              placeholder=&quot;Enter your product or service title&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
              disabled={isLoading}            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;category&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Category</label>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Input
              id=&quot;category&quot;
              value={category}
<<<<<<< HEAD
              onChange={e => handleInputChange(e, 'category')}
              placeholder='e && e.g. AI Tool, Digital Product, Service';
              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}            />;
          </div>;
          <div className='space-y-2'>;
            <label
              htmlFor='keyFeatures'
              className='text-sm font-medium text-zion-slate-light'>;
              Key Features (Optional);
            </label>;
=======
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder=&quot;e.g. AI Tool, Digital Product, Service&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
              disabled={isLoading}            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;keyFeatures&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Key Features (Optional)</label>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Textarea
              id=&quot;keyFeatures&quot;
              value={keyFeatures}
<<<<<<< HEAD
              onChange={e => handleInputChange(e, 'keyFeatures')}
              placeholder='Briefly describe the main features or benefits';
              className='bg-zion-blue border border-zion-blue-light text-white min-h-20';
              disabled={isLoading}            />;
          </div>;
          <div className='space-y-2'>;
            <label
              htmlFor='targetAudience'
              className='text-sm font-medium text-zion-slate-light'>;
              Target Audience (Optional);
            </label>;
=======
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
              placeholder=&quot;Briefly describe the main features or benefits&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
              disabled={isLoading}            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;targetAudience&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Target Audience (Optional)</label>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Input
              id=&quot;targetAudience&quot;
              value={targetAudience}
<<<<<<< HEAD
              onChange={e => handleInputChange(e, 'targetAudience')}
              placeholder='e && e.g. Developers, Marketers, Startups';
              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}
            />;
          </div>;
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
            className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'>;
            {isLoading ? (;
              <>Generating Optimized Content...</>;
            ) : (;
              <>;
                <Sparkles className='h-4 w-4 mr-2' />;
=======
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder=&quot;e.g. Developers, Marketers, Startups&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
              disabled={isLoading}
            />;
          </div>;
          <Button ;
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2";
          >;
            {isLoading ? (;
              <>Generating Optimized Content...</>;
            ) :(;
              <>;
                <Sparkles className="h-4 w-4 mr-2" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                Generate Optimized Content;
              </>;
            )}
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      {isLoading && (;
        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>;
          <CardHeader>;
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />;
          </CardHeader>;
          <CardContent className='space-y-4'>;
            <Skeleton className='h-32 w-full bg-zion-blue-light/20' />;
            <div className='flex flex-wrap gap-2'>;
              {[...Array(5)].map((_, i) => (;
                <Skeleton key={i} className='h-6 w-16 bg-zion-blue-light/20' />;
              ))}
            </div>;
            <Skeleton className='h-8 w-1/3 bg-zion-blue-light/20' />;
            <div className='space-y-2'>;
              {[...Array(3)].map((_, i) => (;
                <Skeleton
    <div className='space - y-6'>;
      <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
        <CardHeader>;
          <CardTitle className='flex items - center text - white'>;
            <Sparkles className='h - 5 w - 5 mr - 2 text - zion - cyan' />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className='text - sm text - zion - slate - light'>;
            Provide basic information and let AI generate optimized,
            SEO - friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent className='space - y-4'>;
          <div className='space - y-2'>;
            <label;
              html_for='title';
              className='text - sm font - medium text - zion - slate - light';
            >;
              Title;
            </label>;
            <Input;
              id='title';
              value={title}
              on_change={e => handleInputChange (e, 'title')}
              placeholder='Enter your product or service title';
              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}            />;
          </div>;
          <div className='space - y-2'>;
            <label;
              html_for='category';
              className='text - sm font - medium text - zion - slate - light';
            >;
              Category;
            </label>;
            <Input;
              id='category';
              value={category}
              on_change={e => handleInputChange (e, 'category')}
              placeholder='e.g. AI Tool, Digital Product, Service';
              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}            />;
          </div>;
          <div className='space - y-2'>;
            <label;
              html_for='key_features';
              className='text - sm font - medium text - zion - slate - light';
            >;
              Key Features (Optional);
            </label>;
            <Textarea;
              id='key_features';
              value={key_features}
              on_change={e => handleInputChange (e, 'key_features')}
              placeholder='Briefly describe the main features or benefits';
              className='bg - zion - blue border border - zion - blue - light text - white min - h-20';
              disabled={is_loading}            />;
          </div>;
          <div className='space - y-2'>;
            <label;
              html_for='target_audience';
              className='text - sm font - medium text - zion - slate - light';
            >;
              Target Audience (Optional);
            </label>;
            <Input;
              id='target_audience';
              value={target_audience}
              on_change={e => handleInputChange (e, 'target_audience')}
              placeholder='e.g. Developers, Marketers, Startups';
              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}
            />;
          </div>;
          <Button;
            on_click={handle_generate}
            disabled={is_loading || !title || !category}
            className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2'          >;
            {is_loading ? (
              <>Generating Optimized Content...</>) : (
              <>;
                <Sparkles className='h - 4 w - 4 mr - 2' />;
                Generate Optimized Content;
              </>)}
          </Button>;
        </CardContent>;
      </Card>;
      {is_loading && (
        <Card className='border border - zion - blue - light bg - zion - blue - dark overflow - hidden'>;
          <CardHeader>;
            <Skeleton className='h - 8 w - 3/4 bg - zion - blue - light / 20' />;
          </CardHeader>;
          <CardContent className='space - y-4'>;
            <Skeleton className='h - 32 w - full bg - zion - blue - light / 20' />;
            <div className='flex flex - wrap gap - 2'>;
              {[...Array (5)].map ((_, i) => (
                <Skeleton key={i} className='h - 6 w - 16 bg - zion - blue - light / 20' />))}
            </div>;
            <Skeleton className='h - 8 w - 1/3 bg - zion - blue - light / 20' />;
            <div className='space - y-2'>;
              {[...Array (3)].map ((_, i) => (
                <Skeleton;
                  key={i}
                  className='h - 6 w - full bg - zion - blue - light / 20';
                />              ))}
            </div>;
          </CardContent>;
      {generatedContent && !isLoading && (;
        <Card className='border border-zion-blue-light bg-zion-blue-dark'>;
          <CardHeader>;
            <CardTitle className='text-white'>Generated Content</CardTitle>;
          </CardHeader>;
          <CardContent className='space-y-4'>;
            <div>;
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Description;
              </h3>;
              <p className='text-white'>{generatedContent && generatedContent.description}</p>;
            </div>;
            <div>;
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Tags;
              </h3>;
              <div className='flex flex-wrap gap-2'>;
                {generatedContent && generatedContent.tags.map((tag, index) => (                  <Badge key={index}>{tag}</Badge>;
                ))}
              </div>;
            </div>;
            <div>;
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Suggested Price Range;
              </h3>;
              <p className='text-white'>;
                ${generatedContent && generatedContent.suggestedPrice.min && min.toFixed(2)} - $;
                {generatedContent && generatedContent.suggestedPrice.max && max.toFixed(2)}
              </p>;
            </div>;
            <div>;
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Key Selling Points;
              </h3>;
              <ul className='list-disc pl-5 text-white space-y-1'>;
                {generatedContent && generatedContent.keyPoints.map((point, index) => (                  <li key={index}>{point}</li>;
                ))}
        </Card>)}
      {generated_content && !is_loading && (
        <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
          <CardHeader>;
            <CardTitle className='text - white'>Generated Content</CardTitle>;
          </CardHeader>;
          <CardContent className='space - y-4'>;
            <div>;
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Description;
              </h3>;
              <p className='text - white'>{generated_content.description}</p>;
            </div>;
            <div>;
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Tags;
              </h3>;
              <div className='flex flex - wrap gap - 2'>;
                {generated_content.tags.map ((tag, index) => (                  <Badge key={index}>{tag}</Badge>))}
              </div>;
            </div>;
            <div>;
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Suggested Price Range;
              </h3>;
              <p className='text - white'>;
                ${generated_content.suggested_price.min.to_fixed (2)} - $;
                {generated_content.suggested_price.max.to_fixed (2)}
              </p>;
            </div>;
            <div>;
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Key Selling Points;
              </h3>;
              <ul className='list - disc pl - 5 text - white space - y-1'>;
                {generated_content.key_points.map ((point, index) => (                  <li key={index}>{point}</li>))}
=======
;
      {isLoading && (;
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">;
          <CardHeader>;
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />;
          </CardHeader>;
          <CardContent className="space-y-4">;
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />;
            <div className="flex flex-wrap gap-2">;
              {[...Array(5)].map((_, i) => (;
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />;
              ))}
            </div>;
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;
            <div className="space-y-2">;
              {[...Array(3)].map((_, i) => (;
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />;
              ))}
            </div>;
          </CardContent>;
        </Card>;
      )}
;
      {generatedContent && !isLoading && (;
        <Card className="border border-zion-blue-light bg-zion-blue-dark">;
          <CardHeader>;
            <CardTitle className="text-white">Generated Content</CardTitle>;
          </CardHeader>;
          <CardContent className="space-y-4">;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;
              <p className="text-white">{generatedContent.description}</p>;
            </div>;
            ;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
              <div className="flex flex-wrap gap-2">;
                {generatedContent.tags.map((tag, index) => (;
                  <Badge key={index}>{tag}</Badge>;
                ))}
              </div>;
            </div>;
            ;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>;
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>;
            </div>;
            ;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>;
              <ul className="list-disc pl-5 text-white space-y-1">;
                {generatedContent.keyPoints.map((point, index) => (;
                  <li key={index}>{point}</li>;
                ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;
            <Button;
<<<<<<< HEAD
              on_click={handle_apply}
              className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white'            >;
              Apply to My Listing;
              <ArrowRight className='ml - 2 h - 4 w - 4' />;
            </Button>;
          </CardFooter>;
        </Card>)}
    </div>);
  target: {
  value: string;
}, field: string) => {
  switch (field) {
  case 'title': set_title (e.target.value);
break;';
case 'category': set_category (e.target.value);
break;';
case 'key_features': setKeyFeatures (e.target.value);
break;';
case 'target_audience': const handle_generate = async () => {
  // Check condition
if ( {) {
  $2
}
  toast ({
  return;
}setIsLoading (true);
}catch (error) {';
  logErrorToProduction ('Error generating content:', {
    </div>;
  );
  target: {;
  value: string ;
}, field: string) => {;
  switch (field) {;
  case 'title': setTitle (e && e.target.value);
break;';
case 'category': setCategory (e && e.target.value);
break;';
case 'keyFeatures': setKeyFeatures (e && e.target.value);
break;';
case 'targetAudience': const handleGenerate = async () => {;
  if (!title || !category) {;
  toast ({;
  return;
}setIsLoading (true);
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
<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {";
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) ";
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) ) ;
}</div> </CardContent> </Card>) ";
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {;
  generatedContent && generatedContent.description ;
}</p> </div> <div>) ) ;
}</div> </div> <div>) ) ";
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>) ;
}</div>) ;
}'"  );
};
  );
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
toast ({
}
<CardHeader> <CardTitle className="flex items - center text - white" > <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space - y-4" > <div className="space - y-2" > <label html_for="title" className="text - sm font - medium text - zion - slate - light" >Title</label> <Input /> </div> <div className="space - y-2" > <label html_for="category" className="text - sm font - medium text - zion - slate - light" >Category</label> <Input /> </div> <div className="space - y-2" > <label html_for="key_features" className="text - sm font - medium text - zion - slate - light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space - y-2" > <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light" >Target Audience (Optional) </label> <Input > {";
  is_loading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h - 4 w - 4 mr - 2" /> Generate Optimized Content </>) ";
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h - 8 w - 3/4 bg - zion - blue - light / 20" /> </CardHeader>) );
}</div> </CardContent> </Card>) ";
}<CardHeader> <CardTitle className="text - white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space - y-4" > <div> <h3 className="text - sm font - medium text - zion - slate - light mb - 2" >Description</h3> <p className="text - white" > {
  generated_content.description;
}</p> </div> <div>) );
}</div> </div> <div>) ) ";
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml - 2 h - 4 w - 4" /> </Button> </CardFooter> </Card>);
}</div>);
}'"  );
}
  );
}
=======
              onClick={handleApply}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white";
            >;
              Apply to My Listing;
              <ArrowRight className="ml-2 h-4 w-4" />;
            </Button>;
          </CardFooter>;
        </Card>;
      )}
    </div>;
  ),;}
}: AIListingGeneratorProps) {;
  const [isLoading,  setIsLoading] = useState (false);
const [generatedContent, setGeneratedContent] = useState (null as GeneratedContent | null);
  target: {;
  value: string ;
}
}, field: string) => {;
  switch (field) {;
  case 'title': setTitle (e.target.value);
break;';
case 'category': setCategory (e.target.value);
break;';
case 'keyFeatures': setKeyFeatures (e.target.value);
break;';
case 'targetAudience': const handleGenerate = async () => {;
  if (!title || !category) {;
  toast ({;
  return;
}setIsLoading (true);
}catch (error) {';
  logErrorToProduction ('Error generating content:', {;
  data: error ;
});
toast ({;
  ;
}finally {;
  setIsLoading (false) ;
}
};
const handleApply = () => {;
  if (generatedContent && onApplyGenerated) {;
  onApplyGenerated (generatedContent);
toast ({;
  ;
}
};
<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {";
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) ";
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) ) ;
}</div> </CardContent> </Card>) ";
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {;
  generatedContent.description ;
}</p> </div> <div>) ) ;
}</div> </div> <div>) ) ";
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>) ;
}</div>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

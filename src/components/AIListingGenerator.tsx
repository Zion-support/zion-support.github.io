<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import Skeleton from '@/components/ui/skeleton'
import { Sparkles, ArrowRight } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { Badge } from "@/components/ui/badge";
import {logErrorToProduction} from '@/utils/productionLogger';
interface GeneratedContent {

  description: string
tags: string[]
suggestedPrice: {
  min: number
max: number
}
keyPoints: string[]
}interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void
initialValues?: {
  title?: string
category?: string
keyFeatures?: string
targetAudience?: string
export function AIListingGenerator({
  onApplyGenerated
  initialValues = {}
}: AIListingGeneratorProps) {
  const { toast } = useToast()
  const [title, setTitle] = useState(initialValues.title |'')
  const [category, setCategory] = useState(initialValues.category |'')
  const [keyFeatures, setKeyFeatures] = useState(
    initialValues.keyFeatures |''
  )
  const [targetAudience, setTargetAudience] = useState(
    initialValues.targetAudience |''
  )
  const [isLoading, setIsLoading] = useState(false)
  const [generatedContent, setGeneratedContent] = useState(
    null as GeneratedContent | null
  )
  const handleInputChange = (
    e: { target: { value: string } }
    field: string
  ) => {
    switch (field) {      case 'title':
        setTitle(e.target.value)
        break
      case 'category':
        setCategory(e.target.value)
        break
      case 'keyFeatures':
        setKeyFeatures(e.target.value)
        break
      case 'targetAudience':
        setTargetAudience(e.target.value)
        break
    }
  }
  const handleGenerate = async () => {
    if (!title || !category) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',
      })
      return;
    }

    setIsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke(
        'ai-listing-generator',
        {
          body: { title, category, keyFeatures, targetAudience },
        }
      )
      if (error) {
        throw new Error(error.message)
      }

      if ((data as any)?.error) {
        throw new Error((data as any).error)
      }

      setGeneratedContent((data as any)?.generated || null)
      toast({
        title: 'Content Generated',
        description: 'AI has created optimized listing content for you.',
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error })
      toast({
        title: 'Generation Failed',
        description:
          error instanceof Error
            ? error.message
            : 'Failed to generate content. Please try again.',
        variant: 'destructive',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import Skeleton from "@/components/ui/skeleton",
import { Sparkles, ArrowRight } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",
import { Badge } from "@/components/ui/badge",
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

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
  const [isLoading, setIsLoading] = useState(false),
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),

  const handleInputChange = (e: { target: { value: string } }, field: string) => {
    switch(field) {
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const handleGenerate = async () => {
    if (!title |!category) {
      toast({

      })
    } finally {
      setIsLoading(false)
    }

=======
>>>>>>>   const handleGenerate = async () => {
    if (!title |!category) {
      toast({
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleGenerate = async () => {
    if (!title |!category) {
      toast({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const handleGenerate = async () => {
    if (!title |!category) {
      toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        title: 'Missing required fields'
        description: 'Please provide at least a title and category.'
        variant: 'destructive'
      })
      return
    }
    setIsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke(
        'ai-listing-generator'
        {
          body: { title, category, keyFeatures, targetAudience }
        }
      )
      if (error) {
        throw new Error(error.message)
      }
      if ((data as any)?.error) {
        throw new Error((data as any).error)
      }
      setGeneratedContent((data as any)?.generated |null)
      toast({
        title: 'Content Generated'
        description: 'AI has created optimized listing content for you.'
      })
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error })
      toast({
        title: 'Generation Failed'
        description:
          error instanceof Error
            ? error.message
            : 'Failed to generate content. Please try again.'
        variant: 'destructive'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>       })
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     } finally {
      setIsLoading (false);
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      }),
      return
;
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast(),;
  const [title, setTitle] = useState(initialValues.title || ""),;
  const [category, setCategory] = useState(initialValues.category || ""),;
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),;
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),;
  const [isLoading, setIsLoading] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),;
  const handleInputChange = (e: { target: { value: string } }, field: string) => {;
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
  const handleGenerate = async () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";
      }),;
      return;
    }
;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      }),;
      if (error) {;
        throw new Error(error.message);
      }
;
      if ((data as any)?.error) {;
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
  }
  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent)
      toast({
        title: 'Content Applied'
        description: 'The generated content has been applied to your listing.'
      })
    }
  }
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
    <div className="space-y-6">
=======
>>>>>>> 
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
}

export function AIListingGenerator({ onApplyGenerated, initialValues;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (



>>>>>>>   return (
>>>>>>>     <div className="space-y-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="space-y-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          <p className='text-sm text-zion-slate-light'>
            Provide basic information and let AI generate optimized
            SEO-friendly content for your listing
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <p className='text-sm text-zion-slate-light'>
            Provide basic information and let AI generate optimized
            SEO-friendly content for your listing
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
            <Input
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
            <Input

          </div>
          <div className="space-y-2">
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
            <Textarea

          </div>
          <div className="space-y-2">
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
            <Input

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id='title'
              value={title}
              onChange={e => handleInputChange(e, 'title')}
              placeholder='Enter your product or service title'
              className='bg-zion-blue border border-zion-blue-light text-white'
              disabled={isLoading}            />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
            <Input
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id="title"
              value={title}
              onChange={(e) => handleInputChange(e, 'title')}
              placeholder="Enter your product or service title"
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
            <Input
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id='category'
              value={category}
              onChange={e => handleInputChange(e, 'category')}
              placeholder='e.g. AI Tool, Digital Product, Service'
              className='bg-zion-blue border border-zion-blue-light text-white'
              disabled={isLoading}            />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           </div>
          <div className="space-y-2">
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
            <Textarea
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id="category"
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder="e.g. AI Tool, Digital Product, Service"
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
            <Textarea
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id='keyFeatures'
              value={keyFeatures}
              onChange={e => handleInputChange(e, 'keyFeatures')}
              placeholder='Briefly describe the main features or benefits'
              className='bg-zion-blue border border-zion-blue-light text-white min-h-20'
              disabled={isLoading}            />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           </div>
          <div className="space-y-2">
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
            <Input
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id="keyFeatures"
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
              placeholder="Briefly describe the main features or benefits"
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
            <Input
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id='targetAudience'
              value={targetAudience}
              onChange={e => handleInputChange(e, 'targetAudience')}
              placeholder='e.g. Developers, Marketers, Startups'
              className='bg-zion-blue border border-zion-blue-light text-white'
              disabled={isLoading}
            />
          </div>
          <Button
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
            className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'          >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             {isLoading ? (
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
            <Input

              id="category"
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder="e.g. AI Tool, Digital Product, Service"
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />

>>>>>>>           </div>
          <div className="space-y-2">
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
            <Textarea

              id="keyFeatures"
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
              placeholder="Briefly describe the main features or benefits"
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
              disabled={isLoading}
            />

>>>>>>>           </div>
          <div className="space-y-2">
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
            <Input

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              id="targetAudience"
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder="e.g. Developers, Marketers, Startups"
              className="bg-zion-blue border border-zion-blue-light text-white"
;
      setGeneratedContent((data as any)?.generated || null),;
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
  };

  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent);
      toast({;
        title: 'Content Applied',;
        description: 'The generated content has been applied to your listing.',;
      });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
            <Input
              id='title'
              value={title}
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
            <Input
              id='category'
              value={category}
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
            <Textarea
              id='keyFeatures'
              value={keyFeatures}
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
            <Input
              id='targetAudience'
              value={targetAudience}
              onChange={e => handleInputChange(e, 'targetAudience')}
              placeholder='e && e.g. Developers, Marketers, Startups';
              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}
            />;
          </div>;
          <Button
            onClick={handleGenerate}

            disabled={isLoading || !title || !category}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
          >


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {isLoading ? (
>>>>>>>               <>Generating Optimized Content...</>
            ) : (
              <>
                <Sparkles className='h-4 w-4 mr-2' />
=======
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
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;
          <Button;
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
          >
            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Generate Optimized Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>
      {isLoading && (
<<<<<<< HEAD
        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>
          <CardHeader>
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />
          </CardHeader>
<<<<<<< HEAD

=======
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
          </CardHeader>
          <CardContent className='space-y-4'>
            <Skeleton className='h-32 w-full bg-zion-blue-light/20' />
            <div className='flex flex-wrap gap-2'>
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className='h-6 w-16 bg-zion-blue-light/20' />
              ))}
            </div>
            <Skeleton className='h-8 w-1/3 bg-zion-blue-light/20' />
            <div className='space-y-2'>
              {[...Array(3)].map((_, i) => (
                <Skeleton
                  key={i}
                  className='h-6 w-full bg-zion-blue-light/20'
                />              ))}
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardContent className="space-y-4">
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />
              ))}
            </div>
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
              ))}
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      )}

      {generatedContent && !isLoading && (
=======
>>>>>>>       )}

>>>>>>>       {generatedContent && !isLoading && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      )}

      {generatedContent && !isLoading && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Card className="border border-zion-blue-light bg-zion-blue-dark">
          <CardHeader>
            <CardTitle className="text-white">Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
              <p className="text-white">{generatedContent.description}</p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div>
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
                Tags
              </h3>
              <div className='flex flex-wrap gap-2'>
                {generatedContent.tags.map((tag, index) => (                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {generatedContent.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
            
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>             <div>
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
                Suggested Price Range
              </h3>
              <p className='text-white'>
                ${generatedContent.suggestedPrice.min.toFixed(2)} - $
                {generatedContent.suggestedPrice.max.toFixed(2)}
              </p>
            </div>
>>>>>>>             <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div>
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
                Key Selling Points
              </h3>
              <ul className='list-disc pl-5 text-white space-y-1'>
                {generatedContent.keyPoints.map((point, index) => (                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleApply}
              className='w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white'            >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               Apply to My Listing
ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                {generatedContent.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Button;
              onClick={handleApply}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
            >
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

              Apply to My Listing
>>>>>>>               <ArrowRight className="ml-2 h-4 w-4" />
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              Apply to My Listing
              <ArrowRight className="ml-2 h-4 w-4" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>
          </CardFooter>
        </Card>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

break;'
=======
=======
    </div>
  )
  target: {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    </div>
  )
  target: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  value: string
}, field: string) => {
  switch (field) {
  case 'title': setTitle (e.target.value)
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
reak;'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  value: string ;
}, field: string) => {;
  switch (field) {;
  case 'title': setTitle (e.target.value);
break;'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
case 'category': setCategory (e.target.value)
break;'
case 'keyFeatures': setKeyFeatures (e.target.value)
break;'
case 'targetAudience': const handleGenerate = async () => {
  if (!title |!category) {
<<<<<<< HEAD
            <Button;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  toast ({
  return;
}setIsLoading (true);
}catch (error) {';
=======
  toast ({
  return;
}setIsLoading (true)
}catch (error) {'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {"
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) "
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) )
}</div> </CardContent> </Card>) "
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {
  generatedContent.description
}</p> </div> <div>) )
}</div> </div> <div>) ) "
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>)
}</div>)
}'"  )
}
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
}

=======
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

}
    </div>;
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

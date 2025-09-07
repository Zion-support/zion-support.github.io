<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
})
      // Check condition;
if (?.error) {) {}
  $2;
}
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
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

  const handleGenerate = async () => {
    if (!title || !category) {
      toast({
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
=======

      }
      setGeneratedContent ((data as any)?.generated || null);
      toast ({}
        title: 'Content Generated','
        description: 'AI has created optimized listing content for you.',
      });
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
    } catch (error) {

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        throw new Error ((data as any).error);

      }
      setGeneratedContent ((data as any)?.generated || null);
      toast ({
        title: 'Content Generated',
        description: 'AI has created optimized listing content for you.',
      });
    } catch (error) {


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
    } catch (error) {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
      logErrorToProduction('Error generating content:', { data: error }),
      toast({}
        title: "Generation Failed","
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.","
        variant: "destructive"
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
      })
    } finally {
      setIsLoading(false)
    }
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

      })
    } finally {}
      setIsLoading (false);
    }

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

import React, { useState, useMemo } from 'react';
import React, { useState } from 'react';
origin/cursor/automate-test-improve-and-merge-code-2533
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
=======
'
import React, { useState, useMemo } from 'react';'
import { useToast } from '@/hooks/use-toast';'
import { Button } from '@/components/ui/button';'
import { Input } from '@/components/ui/input';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
import { Textarea } from '@/components/ui/textarea';
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';'
import Skeleton from '@/components/ui/skeleton';'
import { Sparkles, ArrowRight } from 'lucide-react';'
import { supabase } from '@/integrations/supabase/client';'
import { Badge } from '@/components/ui/badge';'
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
  const { toast } = useToast();'
  const [title, setTitle] = useState(initialValues && initialValues.title || '');'
  const [category, setCategory] = useState(initialValues && initialValues.category || '');
  const [keyFeatures, setKeyFeatures] = useState(;'
    initialValues && initialValues.keyFeatures || '';
  );
  const [targetAudience, setTargetAudience] = useState(;'
    initialValues && initialValues.targetAudience || '';
  );
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(;
    null as GeneratedContent | null;
  );

  const handleInputChange = (;
    e: { target: { value: string } },;
    field: string;
  ) => {;'
    switch (field) {      case 'title':;
        setTitle(e && e.target.value);
        break;'
      case 'category':;
        setCategory(e && e.target.value);
        break;'
      case 'keyFeatures':;
        setKeyFeatures(e && e.target.value);
        break;'
      case 'targetAudience':;
        setTargetAudience(e && e.target.value);
        break;
  const handle_apply = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      onApplyGenerated (generated_content);
      toast ({'
        title: 'Content Applied','
        description: 'The generated content has been applied to your listing.',
      });
    }
  };

  const handleGenerate = async () => {;
    if (!title || !category) {;

  }

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },

  const handleApply = () => {}
    if (generatedContent && onApplyGenerated) {}
      onApplyGenerated(generatedContent),
      toast({"
        title: "Content Applied","
        description: "The generated content has been applied to your listing."
      })
    }
  },
<<<<<<< HEAD
=======
        throw new Error ((data as any).error);
      }
      setGeneratedContent ((data as any)?.generated || null);
      toast ({
        title: 'Content Generated',
        description: 'AI has created optimized listing content for you.',
      });
    } catch (error) {

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


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx

  return ("
    <div className="space-y-6">"
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>"
          <CardTitle className="flex items-center text-white">"
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer;
          </CardTitle>
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing

<<<<<<< HEAD:src/components/AIListingGenerator.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
"
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
          </p>
        </CardHeader>"
        <CardContent className="space-y-4">"
          <div className="space-y-2">"
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <Input

<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
            <Input;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
              id="title"
              value={title}'
              onChange={(e) => handleInputChange(e, 'title')}"
              placeholder="Enter your product or service title""
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
            <Input
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
              id="category"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======

          </div>"
          <div className="space-y-2">"
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
            <Input;
"
              id="category"
              value={category}'
              onChange={(e) => handleInputChange(e, 'category')}"
              placeholder="e.g. AI Tool, Digital Product, Service""
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />

          </div>"
          <div className="space-y-2">"
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
            <Textarea;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
              id="keyFeatures"
              value={keyFeatures}'
              onChange={(e) => handleInputChange(e, 'keyFeatures')}"
              placeholder="Briefly describe the main features or benefits""
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
              disabled={isLoading}
            />
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
          </div>
          <div className="space-y-2">
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
            <Input
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
              id="targetAudience"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder="e.g. Developers, Marketers, Startups"
              className="bg-zion-blue border border-zion-blue-light text-white"
;
      setGeneratedContent((data as any)?.generated || null),;
      toast({;
<<<<<<< HEAD
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
=======
        title: 'Missing required fields',,
  description: 'Please provide at least a title and category.',;
=======

          </div>"
          <div className="space-y-2">"
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
            <Input;
"
              id="targetAudience"
              value={targetAudience}'
              onChange={(e) => handleInputChange(e, 'targetAudience')}"
              placeholder="e.g. Developers, Marketers, Startups""
              className="bg-zion-blue border border-zion-blue-light text-white"
;
      setGeneratedContent((data as any)?.generated || null),;
      toast({;'
        title: 'Missing required fields',;'
        description: 'Please provide at least a title and category.',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
        variant: 'destructive',;
      });
      return;
    }

    setIsLoading(true);

    try {;
      const { data, error } = await supabase && supabase.functions.invoke(;'
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
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
      toast({;
        title: 'Content Generated',,
  description: 'AI has created optimized listing content for you.',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      });
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error }),;
      toast({;
<<<<<<< HEAD
        title: "Generation Failed",;
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",;
        variant: "destructive";
=======
        title: 'Generation Failed',,
  description:;
=======
      toast({;'
        title: 'Content Generated',;'
        description: 'AI has created optimized listing content for you.',;
      });
    } catch (error) {;'
      logErrorToProduction('Error generating content:', { data: error });
      toast({;'
        title: 'Generation Failed',;
        description:;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
          error instanceof Error;
            ? error && error.message;'
            : 'Failed to generate content. Please try again.',;'
        variant: 'destructive',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
  },;
=======
  };

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
      onApplyGenerated(generatedContent),;
      toast({;
<<<<<<< HEAD
        title: "Content Applied";
        description: "The generated content has been applied to your listing.";
=======
        title: 'Content Applied',,
  description: 'The generated content has been applied to your listing.',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      onApplyGenerated(generatedContent);
      toast({;'
        title: 'Content Applied',;'
        description: 'The generated content has been applied to your listing.',;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
      });
    }
<<<<<<< HEAD
  };
  return (;
    <div className="space-y-6">;
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;
=======

import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import Skeleton from '@/components/ui/skeleton'
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
import { Sparkles, ArrowRight } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client",;
import { Badge } from "@/components/ui/badge";
import {logErrorToProduction} from '@/utils/productionLogger';
interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number
  },
  keyPoints: string[]
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
origin/cursor/automate-test-improve-and-merge-code-2533
  }
}
export function AIListingGenerator({ onApplyGenerated, initialValues;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
  return (
'
    <div className='space-y-6'>;'
=======

  return (
    <div className='space-y-6'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
      <Card className='border border-zion-blue-light bg-zion-blue-dark'>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
        <CardHeader>;'
          <CardTitle className='flex items-center text-white'>;'
            <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />;
            AI Listing Optimizer;
          </CardTitle>;'
          <p className='text-sm text-zion-slate-light'>;
            Provide basic information and let AI generate optimized,;
            SEO-friendly content for your listing;
          </p>;
        </CardHeader>;'
        <CardContent className='space-y-4'>;'
          <div className='space-y-2'>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

            <label'
=======
            <label
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              htmlFor='title''
              className='text-sm font-medium text-zion-slate-light'>;
              Title;
            </label>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <Input'
              id='title'
              value={title}'
              onChange={e => handleInputChange(e, 'title')}'
              placeholder='Enter your product or service title';'
=======
            <Input id='title''
              value={title}
              onChange={e = /> handleInputChange(e, 'title')}'
              placeholder='Enter your product or service title';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}            />;
          </div>;'
          <div className='space-y-2'>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <label'
=======
            <label
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              htmlFor='category''
              className='text-sm font-medium text-zion-slate-light'>;
              Category;
            </label>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <Input'
              id='category'
              value={category}'
              onChange={e => handleInputChange(e, 'category')}'
              placeholder='e && e.g. AI Tool, Digital Product, Service';'
=======
            <Input id='category''
              value={category}
              onChange={e = /> handleInputChange(e, 'category')}'
              placeholder='e && e.g. AI Tool, Digital Product, Service';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}            />;
          </div>;'
          <div className='space-y-2'>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <label'
=======
            <label
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              htmlFor='keyFeatures''
              className='text-sm font-medium text-zion-slate-light'>;
              Key Features (Optional);
            </label>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <Textarea'
              id='keyFeatures'
              value={keyFeatures}'
              onChange={e => handleInputChange(e, 'keyFeatures')}'
              placeholder='Briefly describe the main features or benefits';'
=======
            <Textarea
              id='keyFeatures''
              value={keyFeatures}
              onChange={e => handleInputChange(e, 'keyFeatures')}'
              placeholder='Briefly describe the main features or benefits';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              className='bg-zion-blue border border-zion-blue-light text-white min-h-20';
              disabled={isLoading}            />;
          </div>;'
          <div className='space-y-2'>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <label'
=======
            <label
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              htmlFor='targetAudience''
              className='text-sm font-medium text-zion-slate-light'>;
              Target Audience (Optional);
            </label>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <Input'
              id='targetAudience'
              value={targetAudience}'
              onChange={e => handleInputChange(e, 'targetAudience')}'
              placeholder='e && e.g. Developers, Marketers, Startups';'
=======
            <Input id='targetAudience''
              value={targetAudience}
              onChange={e = /> handleInputChange(e, 'targetAudience')}'
              placeholder='e && e.g. Developers, Marketers, Startups';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}
            />;
          </div>;
          <Button;
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2""
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

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            disabled={isLoading || !title || !category}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
          >
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
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

  const handleGenerate = async () => {
    if (!title || !category) {
      toast({
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
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
            <Input
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
              id="targetAudience"
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder="e.g. Developers, Marketers, Startups"
              className="bg-zion-blue border border-zion-blue-light text-white"
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
              <>
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
=======
                <Sparkles className='h-4 w-4 mr-2' />'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Optimized Content
=======
              <>'
                <Sparkles className='h-4 w-4 mr-2' />
                Generate Optimized Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
              </>
            )}
          </Button>
        </CardContent>
      </Card>
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

      {isLoading && (
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
=======
      )}
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">          <CardHeader>
=======
      {isLoading && ('
        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>
          <CardHeader>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </CardHeader>
<<<<<<< HEAD
=======

            disabled={isLoading || !title || !category}'
=======
        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>'
      )}
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>
          <CardHeader>
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />'
          </CardHeader>
            disabled={isLoading || !title || !category}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
            className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'>;
            {isLoading ? (;
              <>Generating Optimized Content...</>;
            ) : (;
              <>;'
                <Sparkles className='h-4 w-4 mr-2' />;
                Generate Optimized Content;
              </>;
            )}
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

      {isLoading && (;'
=======
      {isLoading && (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>;
          <CardHeader>;'
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
          </CardHeader>;'
          <CardContent className='space-y-4'>;'
            <Skeleton className='h-32 w-full bg-zion-blue-light/20' />;'
            <div className='flex flex-wrap gap-2'>;
              {[...Array(5)].map((_, i) => (;'
=======
          </CardHeader>;
          <CardContent className='space-y-4'>;
            <Skeleton className='h-32 w-full bg-zion-blue-light/20' />;
            <div className='flex flex-wrap gap-2'>;,
              {[...Array(5)].map((_, i) => (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
                <Skeleton key={i} className='h-6 w-16 bg-zion-blue-light/20' />;
              ))}
            </div>;'
            <Skeleton className='h-8 w-1/3 bg-zion-blue-light/20' />;'
            <div className='space-y-2'>;
              {[...Array(3)].map((_, i) => (;
                <Skeleton'
    <div className='space - y-6'>;'
      <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
        <CardHeader>;'
          <CardTitle className='flex items - center text - white'>;'
            <Sparkles className='h - 5 w - 5 mr - 2 text - zion - cyan' />;
            AI Listing Optimizer;
          </CardTitle>;'
          <p className='text - sm text - zion - slate - light'>;
            Provide basic information and let AI generate optimized,
            SEO - friendly content for your listing;
          </p>;
        </CardHeader>;'
        <CardContent className='space - y-4'>;'
          <div className='space - y-2'>;
            <label;'
              html_for='title';'
              className='text - sm font - medium text - zion - slate - light';
            >;
              Title;
            </label>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <Input;'
              id='title';
              value={title}'
              on_change={e => handleInputChange (e, 'title')}'
              placeholder='Enter your product or service title';'
=======
            <Input ;
              id='title';
              value={title}
              on_change={e = /> handleInputChange (e, 'title')}'
              placeholder='Enter your product or service title';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}            />;
          </div>;'
          <div className='space - y-2'>;
            <label;'
              html_for='category';'
              className='text - sm font - medium text - zion - slate - light';
            >;
              Category;
            </label>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <Input;'
              id='category';
              value={category}'
              on_change={e => handleInputChange (e, 'category')}'
              placeholder='e.g. AI Tool, Digital Product, Service';'
=======
            <Input ;
              id='category';
              value={category}
              on_change={e = /> handleInputChange (e, 'category')}'
              placeholder='e.g. AI Tool, Digital Product, Service';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}            />;
          </div>;'
          <div className='space - y-2'>;
            <label;'
              html_for='key_features';'
              className='text - sm font - medium text - zion - slate - light';
            >;
              Key Features (Optional);
            </label>;
            <Textarea;'
              id='key_features';
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
              value={key_features}'
              on_change={e => handleInputChange (e, 'key_features')}'
              placeholder='Briefly describe the main features or benefits';'
=======
              value={key_features}
              on_change={e => handleInputChange (e, 'key_features')}'
              placeholder='Briefly describe the main features or benefits';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              className='bg - zion - blue border border - zion - blue - light text - white min - h-20';
              disabled={is_loading}            />;
          </div>;'
          <div className='space - y-2'>;
            <label;'
              html_for='target_audience';'
              className='text - sm font - medium text - zion - slate - light';
            >;
              Target Audience (Optional);
            </label>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            <Input;'
              id='target_audience';
              value={target_audience}'
              on_change={e => handleInputChange (e, 'target_audience')}'
              placeholder='e.g. Developers, Marketers, Startups';'
=======
            <Input ;
              id='target_audience';
              value={target_audience}
              on_change={e = /> handleInputChange (e, 'target_audience')}'
              placeholder='e.g. Developers, Marketers, Startups';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}
            />;
          </div>;
          <Button;
            on_click={handle_generate}
            disabled={is_loading || !title || !category}'
            className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2'          >;
            {is_loading ? (
              <>Generating Optimized Content...</>) : (
              <>;'
                <Sparkles className='h - 4 w - 4 mr - 2' />;
                Generate Optimized Content;
              </>)}
          </Button>;
        </CardContent>;
      </Card>;
      {is_loading && ('
        <Card className='border border - zion - blue - light bg - zion - blue - dark overflow - hidden'>;
          <CardHeader>;'
            <Skeleton className='h - 8 w - 3/4 bg - zion - blue - light / 20' />;
          </CardHeader>;'
          <CardContent className='space - y-4'>;'
            <Skeleton className='h - 32 w - full bg - zion - blue - light / 20' />;'
            <div className='flex flex - wrap gap - 2'>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
              {[...Array (5)].map ((_, i) => ('
                <Skeleton key={i} className='h - 6 w - 16 bg - zion - blue - light / 20' />))}
            </div>;'
            <Skeleton className='h - 8 w - 1/3 bg - zion - blue - light / 20' />;'
            <div className='space - y-2'>;
=======
              {[...Array (5)].map ((_, i) => (
                <Skeleton key={i} className='h - 6 w - 16 bg - zion - blue - light / 20' />))}'
            </div>;
            <Skeleton className='h - 8 w - 1/3 bg - zion - blue - light / 20' />;
            <div className='space - y-2'>;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              {[...Array (3)].map ((_, i) => (
                <Skeleton;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
                  key={i}
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
                  key={i}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
=======
                  className='h-6 w-full bg-zion-blue-light/20'
                />              ))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
                  className='h - 6 w - full bg - zion - blue - light / 20';
                />              ))}
            </div>;
          </CardContent>;
          <CardContent className="space-y-4">"
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />"
            <div className="flex flex-wrap gap-2">"
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />"
              ))}
            </div>
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />"
            <div className="space-y-2">"
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />"

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

<<<<<<< HEAD:src/components/AIListingGenerator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
      {isLoading && (
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
          </CardHeader>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
          <CardContent className="space-y-4">
=======
                  className='h-6 w-full bg-zion-blue-light/20'
                />              ))}          <CardContent className="space-y-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />
=======
"
          <CardContent className="space-y-4">"
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => ("
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />
              ))}
            </div>"
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />"
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => ("
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
              ))}
            </div>;
          </CardContent>;
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
        </Card>;

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
        </Card>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
      )}

      {generatedContent && !isLoading && ("
        <Card className="border border-zion-blue-light bg-zion-blue-dark">
          <CardHeader>"
            <CardTitle className="text-white">Generated Content</CardTitle>
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
          </CardHeader>
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
          </CardHeader>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
          <CardContent className="space-y-4">
            <div>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>"
              <p className="text-white">{generatedContent.description}</p>
=======
      )}
      {generatedContent && !isLoading && (
        <Card className="border border-zion-blue-light bg-zion-blue-dark">"
          <CardHeader>
            <CardTitle className="text-white">Generated Content</CardTitle>"
          </CardHeader>
          <CardContent className="space-y-4">"
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>"
              <p className="text-white">{generatedContent.description}</p>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
            </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
            
            <div>'
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
                Suggested Price Range;
              </h3>'
              <p className='text-white'>
=======
            <div>
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>'
                Suggested Price Range
              </h3>
              <p className='text-white'>'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
                ${generatedContent.suggestedPrice.min.toFixed(2)} - $
                {generatedContent.suggestedPrice.max.toFixed(2)}
              </p>
            </div>
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx


      {generatedContent && !isLoading && (;'
=======
      {generatedContent && !isLoading && (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
        <Card className='border border-zion-blue-light bg-zion-blue-dark'>;
          <CardHeader>;'
            <CardTitle className='text-white'>Generated Content</CardTitle>;
          </CardHeader>;'
          <CardContent className='space-y-4'>;
            <div>;'
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Description;
              </h3>;'
              <p className='text-white'>{generatedContent && generatedContent.description}</p>;
            </div>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

            <div>;'
=======
            <div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Tags;
              </h3>;'
              <div className='flex flex-wrap gap-2'>;
                {generatedContent && generatedContent.tags.map((tag, index) => (                  <Badge key={index}>{tag}</Badge>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            


<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
            <div>
<<<<<<< HEAD
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {generatedContent.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
            
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
=======
            <div>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
=======
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
=======

            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>"
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
            </div>
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            
            <div>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>"
              <ul className="list-disc pl-5 text-white space-y-1">
                {generatedContent.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
=======
        </Card>;                ))}
=======

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
=======
=======
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>"
              <ul className="list-disc pl-5 text-white space-y-1">"
                {generatedContent.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </div>;
            </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
            <div>;
=======
            <div>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Suggested Price Range;
              </h3>;'
              <p className='text-white'>;
                ${generatedContent && generatedContent.suggestedPrice.min && min.toFixed(2)} - $;
                {generatedContent && generatedContent.suggestedPrice.max && max.toFixed(2)}
              </p>;
            </div>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

            <div>;'
=======
            <div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Key Selling Points;
              </h3>;'
              <ul className='list-disc pl-5 text-white space-y-1'>;
                {generatedContent && generatedContent.keyPoints.map((point, index) => (                  <li key={index}>{point}</li>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
                ))}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </Card>)}
      {generated_content && !is_loading && ('
        <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
          <CardHeader>;'
            <CardTitle className='text - white'>Generated Content</CardTitle>;
          </CardHeader>;'
          <CardContent className='space - y-4'>;
            <div>;'
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Description;
              </h3>;'
              <p className='text - white'>{generated_content.description}</p>;
            </div>;
            <div>;'
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Tags;
              </h3>;'
              <div className='flex flex - wrap gap - 2'>;
                {generated_content.tags.map ((tag, index) => (                  <Badge key={index}>{tag}</Badge>))}
              </div>;
            </div>;
            <div>;'
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Suggested Price Range;
              </h3>;'
              <p className='text - white'>;
                ${generated_content.suggested_price.min.to_fixed (2)} - $;
                {generated_content.suggested_price.max.to_fixed (2)}
              </p>;
            </div>;
            <div>;'
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
                Key Selling Points;
              </h3>;'
              <ul className='list - disc pl - 5 text - white space - y-1'>;
                {generated_content.key_points.map ((point, index) => (                  <li key={index}>{point}</li>))}
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      {generatedContent && !isLoading && (
        <Card className="border border-zion-blue-light bg-zion-blue-dark">
          <CardHeader>
            <CardTitle className="text-white">Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
              <p className="text-white">{generatedContent.description}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {generatedContent.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                {generatedContent.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
            <Button;
              onClick={handleApply}"
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
            >

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
            <Button;
              onClick={handleApply}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white""
            >
              Apply to My Listing
              <ArrowRight className="ml-2 h-4 w-4" />"
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
            >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              Apply to My Listing
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              Apply to My Listing"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
  value: string ;
}, field: string) => {;
  switch (field) {;'
  case 'title': setTitle (e.target.value);
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

break;'
case 'category': setCategory (e.target.value)
break;'
case 'keyFeatures': setKeyFeatures (e.target.value)
break;'
case 'targetAudience': const handleGenerate = async () => {
=======
  value: string ;
}, field: string) => {;,
  switch (field) {;
  case 'title': setTitle (e.target.value);
break;''
case 'category': setCategory (e.target.value)'
break;''
case 'keyFeatures': setKeyFeatures (e.target.value)'
break;''
case 'targetAudience': const handleGenerate = async () => {'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
  if (!title |!category) {
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
=======
=======
=======
'
break;''
case 'category': setCategory (e.target.value)'
break;''
case 'keyFeatures': setKeyFeatures (e.target.value)'
break;''
case 'targetAudience': const handleGenerate = async () => {}
  if (!title |!category) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
            <Button;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
              on_click={handle_apply}'
              className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white'            >;
              Apply to My Listing;'
=======
              on_click={handle_apply}
              className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white'            >;',
              Apply to My Listing;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
              <ArrowRight className='ml - 2 h - 4 w - 4' />;
            </Button>;
          </CardFooter>;
        </Card>)}
    </div>);
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
  target: {}
  value: string;
}, field: string) => {}
  switch (field) {'
  case 'title': set_title (e.target.value);'
break;';'
case 'category': set_category (e.target.value);'
break;';'
case 'key_features': setKeyFeatures (e.target.value);'
break;';'
case 'target_audience': const handle_generate = async () => {}
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx

=======
  target: {,
  value: string;
}, field: string) => {,
  switch (field) {
  case 'title': set_title (e.target.value);
break;';
case 'category': set_category (e.target.value);
break;';
case 'key_features': setKeyFeatures (e.target.value);
break;';
case 'target_audience': const handle_generate = async () => {'
  // Check condition
if ( {) {
  $2
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
  toast ({
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  toast ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
  return;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
}setIsLoading (true);'
}catch (error) {';'
  logErrorToProduction ('Error generating content:', {}
=======
}setIsLoading (true);
}catch (error) {';
  logErrorToProduction ('Error generating content:', {'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
    </div>;
    </div>
origin/cursor/automate-test-improve-and-merge-code-2533
  );
  target: {;,
  value: string ;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx

}, field: string) => {;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
=======
}, field: string) => {;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
  switch (field) {;
  case 'title': setTitle (e && e.target.value);
break;';
case 'category': setCategory (e && e.target.value);
break;';
case 'keyFeatures': setKeyFeatures (e && e.target.value);
  case 'title': setTitle (e.target.value);
break;';
case 'category': setCategory (e.target.value);
break;';
case 'keyFeatures': setKeyFeatures (e.target.value);
origin/cursor/automate-test-improve-and-merge-code-2533
break;';
=======
  switch (field) {;'
  case 'title': setTitle (e && e.target.value);'
break;';'
case 'category': setCategory (e && e.target.value);'
break;';'
case 'keyFeatures': setKeyFeatures (e && e.target.value);'
break;';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
case 'targetAudience': const handleGenerate = async () => {;
  if (!title || !category) {;
  toast ({;
  return;
}setIsLoading (true);'
}catch (error) {';'
  logErrorToProduction ('Error generating content:', {;
  data: error ;
});
toast ({;

  ;
origin/cursor/automate-test-improve-and-merge-code-2533
}finally {;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
  setIsLoading (false) 
=======
  setIsLoading (false) ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
};
const handleApply = () => {;
  if (generatedContent &&,  onApplyGenerated) {;
  onApplyGenerated (generatedContent);
<<<<<<< HEAD
toast ({
=======
toast ({;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
  ;
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {";
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) ";
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) ) ;
}</div> </CardContent> </Card>) ";
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {;
  generatedContent && generatedContent.description ;
  generatedContent.description ;
origin/cursor/automate-test-improve-and-merge-code-2533
}</p> </div> <div>) ) ;
}</div> </div> <div>) ) ";
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>) ;
}</div>) ;
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
<<<<<<< HEAD
}'"  )
=======
<<<<<<< HEAD
=======
};"
<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {";"
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) ";"
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) ) ;"
}</div> </CardContent> </Card>) ";"
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {;
  generatedContent && generatedContent.description ;
}</p> </div> <div>) ) ;"
}</div> </div> <div>) ) ";"
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>) ;
}</div>) ;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
}'"  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
  );

  data: error;
});
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD
  data: error
})
=======
}'"  );
};
  );
  data: error;
});
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
    </div>;
  );
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
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
    </div>;
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
=======
toast ({
}finally {
=======
toast ({}
}finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
  setIsLoading (false);
}
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx

<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
const handle_apply = () =>: any {
  // Check condition
if ( {) {
  $2
=======
const handle_apply = () =>: any {}
  // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx
}
  onApplyGenerated (generated_content);
toast ({}
}
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
"
<CardHeader> <CardTitle className="flex items - center text - white" > <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space - y-4" > <div className="space - y-2" > <label html_for="title" className="text - sm font - medium text - zion - slate - light" >Title</label> <Input /> </div> <div className="space - y-2" > <label html_for="category" className="text - sm font - medium text - zion - slate - light" >Category</label> <Input /> </div> <div className="space - y-2" > <label html_for="key_features" className="text - sm font - medium text - zion - slate - light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space - y-2" > <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light" >Target Audience (Optional) </label> <Input > {";"
  is_loading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h - 4 w - 4 mr - 2" /> Generate Optimized Content </>) ";"
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h - 8 w - 3/4 bg - zion - blue - light / 20" /> </CardHeader>) );"
}</div> </CardContent> </Card>) ";"
}<CardHeader> <CardTitle className="text - white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space - y-4" > <div> <h3 className="text - sm font - medium text - zion - slate - light mb - 2" >Description</h3> <p className="text - white" > {}
=======
<CardHeader> <CardTitle className="flex items - center text - white" > <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space - y-4" > <div className="space - y-2" > <label html_for="title" className="text - sm font - medium text - zion - slate - light" >Title</label> <Input /> </div> <div className="space - y-2" > <label html_for="category" className="text - sm font - medium text - zion - slate - light" >Category</label> <Input /> </div> <div className="space - y-2" > <label html_for="key_features" className="text - sm font - medium text - zion - slate - light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space - y-2" > <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light" >Target Audience (Optional) </label> <Input > {";
  is_loading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h - 4 w - 4 mr - 2" /> Generate Optimized Content </>) ";
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h - 8 w - 3/4 bg - zion - blue - light / 20" /> </CardHeader>) );
}</div> </CardContent> </Card>) ";
}<CardHeader> <CardTitle className="text - white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space - y-4" > <div> <h3 className="text - sm font - medium text - zion - slate - light mb - 2" >Description</h3> <p className="text - white" > {"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/AIListingGenerator.tsx
  generated_content.description;
}</p> </div> <div>) );"
}</div> </div> <div>) ) ";"
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml - 2 h - 4 w - 4" /> </Button> </CardFooter> </Card>);
}</div>);'"
}'"  );
}
  );
<<<<<<< HEAD:src_backup/components/AIListingGenerator.tsx
}
}}}}}
    </div>;
  );
}
}'"
<<<<<<< HEAD:src/components/AIListingGenerator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/AIListingGenerator.tsx
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/AIListingGenerator.tsx

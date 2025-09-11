



<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Sparkles, ArrowRight} from "@/components/icons";
import {supabase} from "@/integrations/supabase/client";
import {Badge} from "@/components/ui/badge";
<<<<<<< HEAD
<<<<<<< HEAD
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
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Skeleton } from "@/components/ui/skeleton",
import { Sparkles, ArrowRight } from "@/components/icons",
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
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

  onApplyGenerated?: (content: GeneratedContent) => void

  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
import { supabase } from "@/integrations/supabase/client",
import { Badge } from "@/components/ui/badge",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
<<<<<<< HEAD
<<<<<<< HEAD
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void,
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
  }
}

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Sparkles, ArrowRight } from "@/components/icons",;
import { supabase } from "@/integrations/supabase/client",;
import { Badge } from "@/components/ui/badge",;
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
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title |"");
  const [category, setCategory] = useState(initialValues.category |"");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures |"");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience |"");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
  const [isLoading, setIsLoading] = useState(false),
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
        setTargetAudience(e.target.value)
        break
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  const handleInputChange = (e: { target: { value: string } }, field: string) => {
    switch(field) {
      case 'title':
        setTitle(e.target.value);
  const [title, setTitle] = useState(initialValues && initialValues.title || "");
  const [category, setCategory] = useState(initialValues && initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);
  const handleInputChange = (e: { target: { value: string } }, field: string) => {;
    switch(field) {;
      case 'title':;
        setTitle(e && e.target.value);
        break;
      case 'category':;
        setCategory(e && e.target.value);
        break;
      case 'keyFeatures':;
        setKeyFeatures(e && e.target.value);
        break;
      case 'targetAudience':;
        setTargetAudience(e && e.target.value),;
        break;
  }
  },

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleGenerate = async () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."
        variant: "destructive"
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
      return
    }
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      });
      if (error) {
        throw new Error(error.message)
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    }
  };
    }
  },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleGenerate = async () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";
<<<<<<< HEAD
<<<<<<< HEAD
    setIsLoading(true);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      return;
    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from './react';
import { use_toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Skeleton } from '@/components / ui / skeleton';
import { Sparkles, ArrowRight } from '@/components / icons';
import { supabase } from '@/integrations / supabase / client';
import { Badge } from '@/components / ui / badge';
interface GeneratedContent {
  description: string,
  tags: string[],
  suggested_price: {
    min: number,
    max: number;
  }
  key_points: string[];
}
interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void,
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
  const [title, set_title] = useState (initial_values.title || "");
  const [category, set_category] = useState (initial_values.category || "");
  const [key_features, setKeyFeatures] = useState (initial_values.key_features || "");
  const [target_audience, setTargetAudience] = useState (initial_values.target_audience || "");
  const [is_loading, setIsLoading] = useState (false);
  const [generated_content, setGeneratedContent] = useState (null as GeneratedContent | null);
;
  const handleInputChange = (e: { target: { value: string } }, field: string) =>: any {
    switch (field) {
      case 'title':;
        set_title (e.target.value);
        break;
      case 'category':;
        set_category (e.target.value);
        break;
      case 'key_features':;
        setKeyFeatures (e.target.value);
        break;
      case 'target_audience':;
        setTargetAudience (e.target.value),
        break;
    }
  }
;
  const handle_generate = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive";
      });
      return;
    }
    setIsLoading (true);
;
<<<<<<< HEAD
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Sparkles, ArrowRight } from "@/components/icons",;
import { supabase } from "@/integrations/supabase/client",;
import { Badge } from "@/components/ui/badge",;
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
}export function AIListingGenerator ({
  onApplyGenerated, initialValues = {
  
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
    
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {
        body: { title, category, key_features, target_audience }
      });
<<<<<<< HEAD
<<<<<<< HEAD
      }),;
      return;
    }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      }),;
      if (error) {;
        throw new Error(error.message);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      if (data.error) {
        throw new Error(data.error)
      }
<<<<<<< HEAD



      setGeneratedContent(data.generated),


<<<<<<< HEAD
      setGeneratedContent(data.generated);

      setGeneratedContent(data.generated),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      setGeneratedContent(data.generated);

      setGeneratedContent(data.generated),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Content Generated"
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error generating content:", error),
=======
      console.error("Error generating content:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.error("Error generating content:", error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again."
        variant: "destructive"
      })
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      // Check condition
if ( {) {
  $2
}
        throw new Error (data.error);
      }
      setGeneratedContent (data.generated);
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
    } finally {
      setIsLoading(false)
    }

  },



  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
<<<<<<< HEAD
  }
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    } finally {
      setIsLoading(false)
    }
  }
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
<<<<<<< HEAD


    try {;
      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
    }

  },

<<<<<<< HEAD
    }
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
          <Button 

;
      setGeneratedContent(data.generated),;

              disabled={isLoading}
            />
          </div>
          <Button
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
          <Button 
;
      setGeneratedContent(data.generated),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <Button 

=======
;
      setGeneratedContent(data.generated),;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({;
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error generating content:", error),;
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console && console.error("Error generating content:", error);
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent);
      toast({;
        title: "Content Applied",;
        description: "The generated content has been applied to your listing.";
      });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (
<<<<<<< HEAD
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
        <CardContent className="space-y-4">;
          <div className="space-y-2">;
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
<<<<<<< HEAD
<<<<<<< HEAD
      }),

      if (error) {
        throw new Error(error.message)
      }
      
      if (data.error) {
        throw new Error(data.error)
      }

      setGeneratedContent(data.generated),
      toast({
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      console.error("Error generating content:", error),
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
      
      if (data.error) {_throw new Error(data.error);}

      setGeneratedContent(data.generated);
      toast({_title: "Content Generated", _description: "AI has created optimized listing content for you."});
    } catch (error) {_toast({
        title: "Generation Failed", _description: error instanceof Error ? error.message : "Failed to generate content. Please try again.", _variant: "destructive"});
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
            <Input
              id=&quot;title&quot;
              value={title}
              onChange={(e) => handleInputChange(e, 'title')}
            <Input;
              id="title";
=======
            <Input
              id="title"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <Input
              id="title"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              value={title}
              onChange={(e) => handleInputChange(e, 'title')}
              placeholder="Enter your product or service title";
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;
<<<<<<< HEAD
<<<<<<< HEAD
              placeholder=&quot;Enter your product or service title&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
              disabled={isLoading}            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;category&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Category</label>
            <Input
              id=&quot;category&quot;
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
            <Input;
              id="category";
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder="e.g. AI Tool, Digital Product, Service";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              id="category"
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder="e && e.g. AI Tool, Digital Product, Service";
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;
<<<<<<< HEAD
<<<<<<< HEAD
              placeholder=&quot;e.g. AI Tool, Digital Product, Service&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
              disabled={isLoading}            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;keyFeatures&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Key Features (Optional)</label>
            <Textarea
              id=&quot;keyFeatures&quot;
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
            <Textarea;
              id="keyFeatures";
=======
            <Textarea
              id="keyFeatures"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <Textarea
              id="keyFeatures"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
              placeholder="Briefly describe the main features or benefits";
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;
<<<<<<< HEAD
<<<<<<< HEAD
              placeholder=&quot;Briefly describe the main features or benefits&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
              disabled={isLoading}            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;targetAudience&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Target Audience (Optional)</label>
            <Input
              id=&quot;targetAudience&quot;
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}


            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              id="targetAudience"
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder="e && e.g. Developers, Marketers, Startups";
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}

            />;
          </div>;
          <Button;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            onClick={handleGenerate}
<<<<<<< HEAD
            disabled={isLoading |!title |!category}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            disabled={isLoading || !title || !category}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
          >
            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Optimized Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>
      {isLoading && (
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
            </div>
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;
          </div>;
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;
            {isLoading ? (;
              <>Generating Optimized Content...</>;
            ) : (;
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
                Generate Optimized Content;
              </>;
            )}
          </Button>;
        </CardContent>;
      </Card>;
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


<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>
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
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {generatedContent && !isLoading && (;
        <Card className="border border-zion-blue-light bg-zion-blue-dark">;
          <CardHeader>;
            <CardTitle className="text-white">Generated Content</CardTitle>;
          </CardHeader>;
          <CardContent className="space-y-4">;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-white">{generatedContent.description}</p>;
            </div>;
            ;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
              <div className="flex flex-wrap gap-2">;
                {generatedContent.tags.map((tag, index) => (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <p className="text-white">{generatedContent && generatedContent.description}</p>;
            </div>;

            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
              <div className="flex flex-wrap gap-2">;
                {generatedContent && generatedContent.tags.map((tag, index) => (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>;
                ))}
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>;
              <p className="text-white">${generatedContent && generatedContent.suggestedPrice.min && min.toFixed(2)} - ${generatedContent && generatedContent.suggestedPrice.max && max.toFixed(2)}</p>;
            </div>;

            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>;
              <ul className="list-disc pl-5 text-white space-y-1">;
                {generatedContent && generatedContent.keyPoints.map((point, index) => (;
                  <li key={index}>{point}</li>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                ))}
=======
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
        <CardContent className="space - y-4">;
          <div className="space - y-2">;
            <label html_for="title" className="text - sm font - medium text - zion - slate - light">Title</label>;
            <Input;
              id="title";
              value={title}
              on_change={(e) => handleInputChange (e, 'title')}
              placeholder="Enter your product or service title";
              className="bg - zion - blue border border - zion - blue - light text - white";
              disabled={is_loading}
            />;
          </div>;
          <div className="space - y-2">;
            <label html_for="category" className="text - sm font - medium text - zion - slate - light">Category</label>;
            <Input;
              id="category";
              value={category}
              on_change={(e) => handleInputChange (e, 'category')}
              placeholder="e.g. AI Tool, Digital Product, Service";
              className="bg - zion - blue border border - zion - blue - light text - white";
              disabled={is_loading}
            />;
          </div>;
          <div className="space - y-2">;
            <label html_for="key_features" className="text - sm font - medium text - zion - slate - light">Key Features (Optional)</label>;
            <Textarea;
              id="key_features";
              value={key_features}
              on_change={(e) => handleInputChange (e, 'key_features')}
              placeholder="Briefly describe the main features or benefits";
              className="bg - zion - blue border border - zion - blue - light text - white min - h-20";
              disabled={is_loading}
            />;
          </div>;
          <div className="space - y-2">;
            <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light">Target Audience (Optional)</label>;
            <Input;
              id="target_audience";
              value={target_audience}
              on_change={(e) => handleInputChange (e, 'target_audience')}
              placeholder="e.g. Developers, Marketers, Startups";
              className="bg - zion - blue border border - zion - blue - light text - white";
              disabled={is_loading}
            />;
          </div>;
          <Button;
            on_click={handle_generate}
            disabled={is_loading || !title || !category}
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2";
          >;
            {is_loading ? (
              <>Generating Optimized Content...</>) : (
              <>;
                <Sparkles className="h - 4 w - 4 mr - 2" />;
                Generate Optimized Content;
              </>)}
          </Button>;
        </CardContent>;
      </Card>;
      {is_loading && (
        <Card className="border border - zion - blue - light bg - zion - blue - dark overflow - hidden">;
          <CardHeader>;
            <Skeleton className="h - 8 w - 3/4 bg - zion - blue - light / 20" />;
          </CardHeader>;
          <CardContent className="space - y-4">;
            <Skeleton className="h - 32 w - full bg - zion - blue - light / 20" />;
            <div className="flex flex - wrap gap - 2">;
              {[...Array (5)].map ((_, i) => (
                <Skeleton key={i} className="h - 6 w - 16 bg - zion - blue - light / 20" />))}
            </div>;
            <Skeleton className="h - 8 w - 1/3 bg - zion - blue - light / 20" />;
            <div className="space - y-2">;
              {[...Array (3)].map ((_, i) => (
                <Skeleton key={i} className="h - 6 w - full bg - zion - blue - light / 20" />))}
            </div>;
          </CardContent>;
        </Card>)}
      {generated_content && !is_loading && (
        <Card className="border border - zion - blue - light bg - zion - blue - dark">;
          <CardHeader>;
            <CardTitle className="text - white">Generated Content</CardTitle>;
          </CardHeader>;
          <CardContent className="space - y-4">;
            <div>;
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Description</h3>;
              <p className="text - white">{generated_content.description}</p>;
            </div>;
            <div>;
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Tags</h3>;
              <div className="flex flex - wrap gap - 2">;
                {generated_content.tags.map ((tag, index) => (
                  <Badge key={index} className="bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30">{tag}</Badge>))}
              </div>;
            </div>;
            <div>;
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Suggested Price Range</h3>;
              <p className="text - white">${generated_content.suggested_price.min.to_fixed (2)} - ${generated_content.suggested_price.max.to_fixed (2)}</p>;
            </div>;
            <div>;
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Key Selling Points</h3>;
              <ul className="list - disc pl - 5 text - white space - y-1">;
                {generated_content.key_points.map ((point, index) => (
                  <li key={index}>{point}</li>))}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Button;
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
  ),;}: AIListingGeneratorProps) {
  const [isLoading, setIsLoading] = useState (false);
const [generatedContent, setGeneratedContent] = useState (null as GeneratedContent | null);
  target: {
  value: string 
}
}, field: string) => {
  switch (field) {
  case 'title': setTitle (e.target.value);
break;
case 'category': setCategory (e.target.value);
break;
case 'keyFeatures': setKeyFeatures (e.target.value);
break;
case 'targetAudience': const handleGenerate = async () => {
  if (!title || !category) {
  toast ({
  return;
}setIsLoading (true);
}finally {
  setIsLoading (false) 
}
};
const handleApply = () => {
  if (generatedContent && onApplyGenerated) {
  onApplyGenerated (generatedContent);
toast ({
  
}
};
<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) 
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) ) 
}</div> </CardContent> </Card>) 
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {
  generatedContent.description 
}</p> </div> <div>) ) 
}</div> </div> <div>) ) 
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>) 
}</div>) 
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleApply}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
            >
              Apply to My Listing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Button;
              on_click={handle_apply}
              className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white";
            >;
              Apply to My Listing;
              <ArrowRight className="ml - 2 h - 4 w - 4" />;
            </Button>;
          </CardFooter>;
        </Card>)}
    </div>);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
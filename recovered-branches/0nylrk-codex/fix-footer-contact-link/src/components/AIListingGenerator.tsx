<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD


<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Sparkles, ArrowRight} from "@/components/icons";
import {supabase} from "@/integrations/supabase/client";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {Badge} from "@/components/ui/badge";
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {Badge} from "@/components/ui/badge";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
  };
  keyPoints: string[];
}
<<<<<<< HEAD
=======



import React, { useState } from "react";"
import {useToast} from "@/hooks/use-toast";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Textarea} from "@/components/ui/textarea";"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Skeleton} from "@/components/ui/skeleton";"
import {Sparkles, ArrowRight} from "@/components/icons";"
import {supabase} from "@/integrations/supabase/client";"
import {Badge} from "@/components/ui/badge";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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

=======
export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Skeleton } from "@/components/ui/skeleton",
import { Sparkles, ArrowRight } from "@/components/icons",
<<<<<<< HEAD
=======
import { supabase } from "@/integrations/supabase/client";
=======
"
import React, { useState } from "react","
import { useToast } from "@/hooks/use-toast","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Textarea } from "@/components/ui/textarea","
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Skeleton } from "@/components/ui/skeleton","
import { Sparkles, ArrowRight } from "@/components/icons",";
import { supabase } from "@/integrations/supabase/client";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from "@/components/ui/badge";
interface GeneratedContent {}
  description: string;
  tags: string[]
  suggestedPrice: {}
    min: number;
    max: number;
  }
  keyPoints: string[]
interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
  };
  keyPoints: string[];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;

    title?: string;
    category?: string;
    keyFeatures?: string;
<<<<<<< HEAD
<<<<<<< HEAD
    targetAudience?: string
import { supabase } from "@/integrations/supabase/client",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    targetAudience?: string;
  }
}

export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface GeneratedContent {
=======

interface GeneratedContent {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  description: string,
  tags: string[],
  suggestedPrice: {}
    min: number,
    max: number;
  },
  keyPoints: string[]
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void,
  initialValues?: {
=======

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",;
=======
import {Badge} from "@/components/ui/badge";import React, { useState } from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {Badge} from "@/components/ui/badge";import React, { useState } from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { supabase } from "@/integrations/supabase/client",
import { Badge } from "@/components/ui/badge",
    targetAudience?: string;
  }
}

export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]

import React, { useState } from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Sparkles, ArrowRight } from "@/components/icons",;
import { supabase } from "@/integrations/supabase/client",;
=======
"
import React, { useState } from "react",;"
import { useToast } from "@/hooks/use-toast",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { Sparkles, ArrowRight } from "@/components/icons",;"
import { supabase } from "@/integrations/supabase/client",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from "@/components/ui/badge",;
interface GeneratedContent {;
  description: string,;
  tags: string[],;
  suggestedPrice: {;
    min: number,;
    max: number;
  },;
  keyPoints: string[];
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<<<<<<< HEAD
<<<<<<< HEAD
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
<<<<<<< HEAD
=======
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title |"");
  const [category, setCategory] = useState(initialValues.category |"");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures |"");
=======
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {};
  const { toast } = useToast();"
  const [title, setTitle] = useState(initialValues.title |"");"
  const [category, setCategory] = useState(initialValues.category |"");"
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures |"");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience |"");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);
  const { toast } = useToast(),"
  const [title, setTitle] = useState(initialValues.title || ""),"
  const [category, setCategory] = useState(initialValues.category || ""),"
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),"
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
  const [isLoading, setIsLoading] = useState(false),
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        break;
=======
=======


  const handleInputChange = (e: { target: { value: string } }, field: string) => {
    switch(field) {
      case 'title':
        setTitle(e.target.value);
  const [title, setTitle] = useState(initialValues && initialValues.title || "");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [category, setCategory] = useState(initialValues && initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);

  const handleInputChange = (e: { target: { value: string } }, field: string) => {;
    switch(field) {;
      case 'title':;
        setTitle(e && e.target.value);
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const handleGenerate = async () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."
        variant: "destructive"
      });
        break;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      case 'category':;
        setCategory(e && e.target.value);
        break;
      case 'keyFeatures':;
        setKeyFeatures(e && e.target.value);
        break;
      case 'targetAudience':;
        setTargetAudience(e && e.target.value),;
        break;
<<<<<<< HEAD


<<<<<<< HEAD
  },



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



  const handleInputChange = (e: { target: { value: string } }, field: string) => {}
    switch(field) {}
      case 'title':
<<<<<<< HEAD
<<<<<<< HEAD
        setTitle(e.target.value);
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [title, setTitle] = useState(initialValues && initialValues.title || "");
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [category, setCategory] = useState(initialValues && initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");
=======
"
  const [title, setTitle] = useState(initialValues && initialValues.title || "");"
  const [category, setCategory] = useState(initialValues && initialValues.category || "");"
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);

  const handleInputChange = (e: { target: { value: string } }, field: string) => {;
    switch(field) {;'
      case 'title':;
        setTitle(e && e.target.value);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleGenerate = async () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."
=======


  const handleGenerate = async () => {}
    if (!title |!category) {}
      toast({"
        title: "Missing required fields""
        description: "Please provide at least a title and category.""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      });
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        break;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

        break;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case 'category':;
        setCategory(e && e.target.value);
        break;'
      case 'keyFeatures':;
        setKeyFeatures(e && e.target.value);
        break;'
      case 'targetAudience':;
        setTargetAudience(e && e.target.value),;
        break;

<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },



  const handleGenerate = async () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."
        variant: "destructive"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const handleGenerate = async () => {}
    if (!title |!category) {}
      toast({"
        title: "Missing required fields""
        description: "Please provide at least a title and category.""
        variant: "destructive"


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      });
      return;
    }
    try {'
      const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {}
        body: { title, category, key_features, target_audience }
      });
<<<<<<< HEAD
      if (error) {
        throw new Error(error.message)
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
  };

  const handleGenerate = async () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      });
      return;
    }

    setIsLoading(true);
import React, { useState } from './react';
import { use_toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Skeleton } from '@/components / ui / skeleton';
import { Sparkles, ArrowRight } from '@/components / icons';
import { supabase } from '@/integrations / supabase / client';
=======

  const handleGenerate = async () => {;
    if (!title || !category) {;
      toast({;"
        title: "Missing required fields",;"
        description: "Please provide at least a title and category.",;"
        variant: "destructive";
'
import React, { useState } from './react';'
import { use_toast } from '@/hooks / use - toast';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Textarea } from '@/components / ui / textarea';'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { Skeleton } from '@/components / ui / skeleton';'
import { Sparkles, ArrowRight } from '@/components / icons';'
import { supabase } from '@/integrations / supabase / client';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from '@/components / ui / badge';
interface GeneratedContent {}
  description: string,
  tags: string[],
  suggested_price: {}
    min: number,
    max: number;
  }
  key_points: string[];
}
interface AIListingGeneratorProps {}
  onApplyGenerated?: (content: GeneratedContent) => void,
  initial_values?: {}
    title?: string;
    category?: string;
    key_features?: string;
    target_audience?: string;
  }
}
export /**;
 * AIListingGenerator - Function description;
 */
function AIListingGenerator() {}
  const { toast } = use_toast ();"
  const [title, set_title] = useState (initial_values.title || "");"
  const [category, set_category] = useState (initial_values.category || "");"
  const [key_features, setKeyFeatures] = useState (initial_values.key_features || "");"
  const [target_audience, setTargetAudience] = useState (initial_values.target_audience || "");
  const [is_loading, setIsLoading] = useState (false);
  const [generated_content, setGeneratedContent] = useState (null as GeneratedContent | null);
;
  const handleInputChange = (e: { target: { value: string } }, field: string) =>: any {}
    switch (field) {'
      case 'title':;
        set_title (e.target.value);
        break;'
      case 'category':;
        set_category (e.target.value);
        break;'
      case 'key_features':;
        setKeyFeatures (e.target.value);
        break;'
      case 'target_audience':;
        setTargetAudience (e.target.value),
        break;
    }
  }
;
  const handle_generate = async () => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Missing required fields","
        description: "Please provide at least a title and category.","
        variant: "destructive";
      });
      return;
    }
    setIsLoading (true);
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    setIsLoading(true),;
    ;
    try {;'
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body:{ title, category, keyFeatures, targetAudience }
      }),;
      if (error) {;
      }
      ;
      if (data.error) {;
        throw new Error(data.error),;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      }

;
    setIsLoading(true),;
    try {;'
=======
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
    
    try {
      const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {
        body: { title, category, key_features, target_audience }
      });

;
    setIsLoading(true),;
    try {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      }),;
      if (error) {;
        throw new Error(error.message);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
      if (data.error) {}
        throw new Error(data.error)
      }
<<<<<<< HEAD

=======
=======


      }
      if (data.error) {
        throw new Error(data.error)
      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



      setGeneratedContent(data.generated),


<<<<<<< HEAD

<<<<<<< HEAD
      setGeneratedContent(data.generated),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({
        title: "Content Generated"
=======
      toast({"
        title: "Content Generated""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {}
      toast({"
        title: "Generation Failed""
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.""
=======
      toast({
        title: "Content Generated"
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      console.error("Error generating content:", error);
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again."
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"
      })

;
<<<<<<< HEAD
      // Check condition;
if ( {) {}
  $2;
}
        throw new Error (error.message);
      }
      // Check condition;
if ( {) {}
  $2;
=======
      // Check condition
if ( {) {
  $2
}
        throw new Error (error.message);
      }
      // Check condition
if ( {) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
        throw new Error (data.error);
      }
      setGeneratedContent (data.generated);
<<<<<<< HEAD
      toast ({"
        title: "Content Generated","
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {"
      console.error ("Error generating content:", error);
      toast ({"
        title: "Generation Failed","
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.","
        variant: "destructive";
      });



    } finally {}
      setIsLoading (false);
    }
  }

    } finally {}
      setIsLoading(false)
    }
<<<<<<< HEAD
=======

  },



  const handleApply = () => {}
    if (generatedContent && onApplyGenerated) {}
      onApplyGenerated(generatedContent);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      }    } finally {
      setIsLoading (false);
    }
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }    } finally {
      setIsLoading (false);
    }
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

    } finally {
      setIsLoading(false)
    }

  },



  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })


    try {;
      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      });

      if (error) {;
        throw new Error(error && error.message);
      }

      if (data && data.error) {;
        throw new Error(data && data.error);
      }

<<<<<<< HEAD
      setGeneratedContent(data && data.generated);    }
=======

      toast({"
        title: "Content Applied""
        description: "The generated content has been applied to your listing."
      })


    try {;'
      const { data, error } = await supabase && supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }

    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  },
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
<<<<<<< HEAD
=======
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  return ("
    <div className="space-y-6">"
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>"
          <CardTitle className="flex items-center text-white">"
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer;
          </CardTitle>"
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
          </p>
        </CardHeader>"
        <CardContent className="space-y-4">"
          <div className="space-y-2">"
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
            <Input"
              id="title"
              value={title}'
              onChange={(e) => handleInputChange(e, 'title')}"
              placeholder="Enter your product or service title""
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />
          </div>"
          <div className="space-y-2">"
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
            <Input"
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
            <Textarea"
              id="keyFeatures"
              value={keyFeatures}'
              onChange={(e) => handleInputChange(e, 'keyFeatures')}"
              placeholder="Briefly describe the main features or benefits""
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
              disabled={isLoading}
            />
          </div>"
          <div className="space-y-2">"
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
            <Input"
              id="targetAudience"
              value={targetAudience}'
              onChange={(e) => handleInputChange(e, 'targetAudience')}"
              placeholder="e.g. Developers, Marketers, Startups""
              className="bg-zion-blue border border-zion-blue-light text-white"
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

          <Button 

=======
;
      setGeneratedContent(data.generated),;

=======
          <Button 

;
      setGeneratedContent(data.generated),;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              disabled={isLoading}
            />
          </div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      setGeneratedContent(data && data.generated);
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

          <Button 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
          <Button 
<<<<<<< HEAD
<<<<<<< HEAD
=======

          <Button 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          <Button;
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
          <Button;
          <Button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
      setGeneratedContent(data.generated),;

      toast({;"
        title: "Content Generated",;"
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
"
      console && console.error("Error generating content:", error);
      toast({;"
        title: "Generation Failed",;"
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;


"
=======

          <Button 

;
      setGeneratedContent(data.generated),;

      toast({;
        title: "Content Generated",;
        description: "AI has created optimized listing content for you.";
      });
    } catch (error) {;
      console && console.error("Error generating content:", error);
      toast({;
        title: "Generation Failed",;
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive";
      });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  };

  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent);
<<<<<<< HEAD
      toast({;"
        title: "Content Applied",;"
        description: "The generated content has been applied to your listing.";
      });
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      toast({;
        title: "Content Applied",;
        description: "The generated content has been applied to your listing.";
      });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
  }

  return (
<<<<<<< HEAD


"
    <div className="space-y-6">;"
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;
        <CardHeader>;"
          <CardTitle className="flex items-center text-white">;"
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;"
          <p className="text-sm text-zion-slate-light">;
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing;
          </p>;
        </CardHeader>;"
        <CardContent className="space-y-4">;"
          <div className="space-y-2">;"
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;



            <Input"
              id="title"
              value={title}'
              onChange={(e) => handleInputChange(e, 'title')}


"
              placeholder="Enter your product or service title";"
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;"
          <div className="space-y-2">;"
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;



            <Input"
              id="category"
              value={category}'
              onChange={(e) => handleInputChange(e, 'category')}

"
              placeholder="e && e.g. AI Tool, Digital Product, Service";
"
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;"
          <div className="space-y-2">;"
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;



            <Textarea"
              id="keyFeatures"
              value={keyFeatures}'
              onChange={(e) => handleInputChange(e, 'keyFeatures')}


"
              placeholder="Briefly describe the main features or benefits";"
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
              disabled={isLoading}
            />;
          </div>;"
          <div className="space-y-2">;"
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;

            <Input"
              id="targetAudience"
              value={targetAudience}'
              onChange={(e) => handleInputChange(e, 'targetAudience')}
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}


<<<<<<< HEAD
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
            <Input;
              id="targetAudience";
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder="e.g. Developers, Marketers, Startups";
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
        <CardContent className="space-y-4">;
          <div className="space-y-2">;
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
            <Input
              id="title"
              value={title}
              onChange={(e) => handleInputChange(e, 'title')}
              placeholder="Enter your product or service title";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;
<<<<<<< HEAD
          <Button;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="space-y-2">;
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;
            <Input
              id="category"
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder="e && e.g. AI Tool, Digital Product, Service";
              placeholder="e && e.g. AI Tool, Digital Product, Service";
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;
            <Textarea
              id="keyFeatures"
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
              placeholder="Briefly describe the main features or benefits";
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;
            <Input
              id="targetAudience"
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
          >
            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (
<<<<<<< HEAD
              <>"
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Optimized Content;
=======
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Optimized Content
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </>
            )}
          </Button>
        </CardContent>
      </Card>
<<<<<<< HEAD
      {isLoading && ("
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
          <CardHeader>"
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
          </CardHeader>"
          <CardContent className="space-y-4">"
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />"
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => ("
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />

            />;
          </div>;
          <Button;
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}"
=======
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
            />;
          </div>;
          <Button
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;
            {isLoading ? (;
              <>Generating Optimized Content...</>;
            ) : (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <>;
=======

              <>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Sparkles className="h-4 w-4 mr-2" />;
                Generate Optimized Content;
              </>;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            )}
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
                ))}
=======
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {isLoading && (;
=======

      {isLoading && (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">;
          <CardHeader>;"
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />;
          </CardHeader>;"
          <CardContent className="space-y-4">;"
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />;"
            <div className="flex flex-wrap gap-2">;
              {[...Array(5)].map((_, i) => (;"
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />;
<<<<<<< HEAD
<<<<<<< HEAD
=======



              ))}
            </div>;"
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;"
            <div className="space-y-2">;
              {[...Array(3)].map((_, i) => (;"
=======
              ))}
            </div>;
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;
            <div className="space-y-2">;
              {[...Array(3)].map((_, i) => (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />;
              ))}
            </div>;
          </CardContent>;
        </Card>;
      )}

<<<<<<< HEAD



<<<<<<< HEAD
      {generatedContent && !isLoading && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {generatedContent && !isLoading && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Card className="border border-zion-blue-light bg-zion-blue-dark">
          <CardHeader>"
            <CardTitle className="text-white">Generated Content</CardTitle>
          </CardHeader>"
          <CardContent className="space-y-4">
            <div>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>"
              <p className="text-white">{generatedContent.description}</p>
            </div>
            <div>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>"
              <div className="flex flex-wrap gap-2">
                {generatedContent.tags.map((tag, index) => ("
                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>
                ))}
              </div>
            </div>
            <div>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>"
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>
            <div>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>"
              <ul className="list-disc pl-5 text-white space-y-1">
                {generatedContent.keyPoints.map((point, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
                  <li key={index}>{point}</li>      {generatedContent && !isLoading && (;
=======
                  <li key={index}>{point}</li>



      {generatedContent && !isLoading && (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  <li key={index}>{point}</li>
;
      {generatedContent && !isLoading && (;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  <li key={index}>{point}</li>      {generatedContent && !isLoading && (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Card className="border border-zion-blue-light bg-zion-blue-dark">;
          <CardHeader>;"
            <CardTitle className="text-white">Generated Content</CardTitle>;
          </CardHeader>;"
          <CardContent className="space-y-4">;
            <div>;"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;
<<<<<<< HEAD
              <p className="text-white">{generatedContent && generatedContent.description}</p>;
            </div>;

            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
              <div className="flex flex-wrap gap-2">;
<<<<<<< HEAD
                {generatedContent && generatedContent.tags.map((tag, index) => (;                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>;
=======
"
                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                {generatedContent && generatedContent.tags.map((tag, index) => (;
<p className="text-white">{generatedContent.description}</p>;
            </div>;
            ;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;
              <div className="flex flex-wrap gap-2">;
                {generatedContent.tags.map((tag, index) => (;
                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                {generatedContent && generatedContent.tags.map((tag, index) => (;                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                ))}
              </div>;
            </div>;

<<<<<<< HEAD
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>;
              <p className="text-white">${generatedContent && generatedContent.suggestedPrice.min && min.toFixed(2)} - ${generatedContent && generatedContent.suggestedPrice.max && max.toFixed(2)}</p>;
            </div>;

            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>;
              <ul className="list-disc pl-5 text-white space-y-1">;
                {generatedContent && generatedContent.keyPoints.map((point, index) => (;
                  <li key={index}>{point}</li>;
                ))}
))}
;
                ))};
  const handle_apply = () =>: any {
    // Check condition
if ( {) {
  $2
=======
;
  const handle_apply = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
      onApplyGenerated (generated_content);
      toast ({"
        title: "Content Applied","
        description: "The generated content has been applied to your listing.";
      });
    }
  }
;
<<<<<<< HEAD
  return (
    <div className="space-y-6">;
      <Card className="border border - zion - blue - light bg - zion - blue-dark">;
        <CardHeader>;
          <CardTitle className="flex items - center text-white">;
            <Sparkles className="h - 5 w - 5 mr - 2 text - zion-cyan" />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className="text - sm text - zion - slate-light">;
            Provide basic information and let AI generate optimized, SEO - friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent className="space-y-4">;
          <div className="space-y-2">;
            <label html_for="title" className="text - sm font - medium text - zion - slate-light">Title</label>;
            <Input;
              id="title";
              value={title}
              on_change={(e) => handleInputChange (e, 'title')}
              placeholder="Enter your product or service title";
              className="bg - zion - blue border border - zion - blue - light text-white";
              disabled={is_loading}
            />;
          </div>;
          <div className="space-y-2">;
            <label html_for="category" className="text - sm font - medium text - zion - slate-light">Category</label>;
            <Input;
              id="category";
              value={category}
              on_change={(e) => handleInputChange (e, 'category')}
              placeholder="e.g. AI Tool, Digital Product, Service";
              className="bg - zion - blue border border - zion - blue - light text-white";
              disabled={is_loading}
            />;
          </div>;
          <div className="space-y-2">;
            <label html_for="key_features" className="text - sm font - medium text - zion - slate-light">Key Features (Optional)</label>;
            <Textarea;
              id="key_features";
              value={key_features}
              on_change={(e) => handleInputChange (e, 'key_features')}
              placeholder="Briefly describe the main features or benefits";
              className="bg - zion - blue border border - zion - blue - light text - white min-h-20";
              disabled={is_loading}
            />;
          </div>;
          <div className="space-y-2">;
            <label html_for="target_audience" className="text - sm font - medium text - zion - slate-light">Target Audience (Optional)</label>;
            <Input;
              id="target_audience";
              value={target_audience}
              on_change={(e) => handleInputChange (e, 'target_audience')}
              placeholder="e.g. Developers, Marketers, Startups";
<<<<<<< HEAD
<<<<<<< HEAD
              className="bg - zion - blue border border - zion - blue - light text-white";
=======
  return ("
    <div className="space - y-6">;"
      <Card className="border border - zion - blue - light bg - zion - blue - dark">;
        <CardHeader>;"
          <CardTitle className="flex items - center text - white">;"
            <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" />;
            AI Listing Optimizer;
          </CardTitle>;"
          <p className="text - sm text - zion - slate - light">;
            Provide basic information and let AI generate optimized, SEO - friendly content for your listing;
          </p>;
        </CardHeader>;"
        <CardContent className="space - y-4">;"
          <div className="space - y-2">;"
            <label html_for="title" className="text - sm font - medium text - zion - slate - light">Title</label>;
            <Input;"
              id="title";
              value={title}'
              on_change={(e) => handleInputChange (e, 'title')}"
              placeholder="Enter your product or service title";"
              className="bg - zion - blue border border - zion - blue - light text - white";
=======
              className="bg - zion - blue border border - zion - blue - light text-white";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              disabled={is_loading}
            />;
          </div>;"
          <div className="space - y-2">;"
            <label html_for="category" className="text - sm font - medium text - zion - slate - light">Category</label>;
            <Input;"
              id="category";
              value={category}'
              on_change={(e) => handleInputChange (e, 'category')}"
              placeholder="e.g. AI Tool, Digital Product, Service";"
              className="bg - zion - blue border border - zion - blue - light text - white";
              disabled={is_loading}
            />;
          </div>;"
          <div className="space - y-2">;"
            <label html_for="key_features" className="text - sm font - medium text - zion - slate - light">Key Features (Optional)</label>;
            <Textarea;"
              id="key_features";
              value={key_features}'
              on_change={(e) => handleInputChange (e, 'key_features')}"
              placeholder="Briefly describe the main features or benefits";"
              className="bg - zion - blue border border - zion - blue - light text - white min - h-20";
              disabled={is_loading}
            />;
          </div>;"
          <div className="space - y-2">;"
            <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light">Target Audience (Optional)</label>;
            <Input;"
              id="target_audience";
              value={target_audience}'
              on_change={(e) => handleInputChange (e, 'target_audience')}"
              placeholder="e.g. Developers, Marketers, Startups";"
              className="bg - zion - blue border border - zion - blue - light text - white";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              className="bg - zion - blue border border - zion - blue - light text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              disabled={is_loading}
            />;
          </div>;
          <Button;
            on_click={handle_generate}
<<<<<<< HEAD
            disabled={is_loading || !title || !category}
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt-2";
          >;
            {is_loading ? (
              <>Generating Optimized Content...</>) : (
              <>;
<<<<<<< HEAD
<<<<<<< HEAD
                <Sparkles className="h - 4 w - 4 mr-2" />;
=======
            disabled={is_loading || !title || !category}"
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2";
          >;
            {is_loading ? (
              <>Generating Optimized Content...</>) : (
              <>;"
                <Sparkles className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <Sparkles className="h - 4 w - 4 mr - 2" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                <Sparkles className="h - 4 w - 4 mr-2" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Generate Optimized Content;
              </>)}
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      {is_loading && (
        <Card className="border border - zion - blue - light bg - zion - blue - dark overflow-hidden">;
          <CardHeader>;
            <Skeleton className="h - 8 w - 3/4 bg - zion - blue-light / 20" />;
          </CardHeader>;
          <CardContent className="space-y-4">;
            <Skeleton className="h - 32 w - full bg - zion - blue-light / 20" />;
            <div className="flex flex - wrap gap-2">;
              {[...Array (5)].map ((_, i) => (
                <Skeleton key={i} className="h - 6 w - 16 bg - zion - blue-light / 20" />))}
            </div>;
            <Skeleton className="h - 8 w - 1/3 bg - zion - blue-light / 20" />;
            <div className="space-y-2">;
              {[...Array (3)].map ((_, i) => (
                <Skeleton key={i} className="h - 6 w - full bg - zion - blue-light / 20" />))}
            </div>;
          </CardContent>;
        </Card>)}
      {generated_content && !is_loading && (
        <Card className="border border - zion - blue - light bg - zion - blue-dark">;
          <CardHeader>;
            <CardTitle className="text-white">Generated Content</CardTitle>;
          </CardHeader>;
          <CardContent className="space-y-4">;
            <div>;
              <h3 className="text - sm font - medium text - zion - slate - light mb-2">Description</h3>;
              <p className="text-white">{generated_content.description}</p>;
            </div>;
            <div>;
              <h3 className="text - sm font - medium text - zion - slate - light mb-2">Tags</h3>;
              <div className="flex flex - wrap gap-2">;
                {generated_content.tags.map ((tag, index) => (
                  <Badge key={index} className="bg - zion - purple / 20 text - zion - purple hover:bg - zion-purple / 30">{tag}</Badge>))}
              </div>;
            </div>;
            <div>;
              <h3 className="text - sm font - medium text - zion - slate - light mb-2">Suggested Price Range</h3>;
              <p className="text-white">${generated_content.suggested_price.min.to_fixed (2)} - ${generated_content.suggested_price.max.to_fixed (2)}</p>;
            </div>;
            <div>;
              <h3 className="text - sm font - medium text - zion - slate - light mb-2">Key Selling Points</h3>;
              <ul className="list - disc pl - 5 text - white space-y-1">;
                {generated_content.key_points.map ((point, index) => (
                  <li key={index}>{point}</li>))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            ;
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;}
=======
      {is_loading && ("
        <Card className="border border - zion - blue - light bg - zion - blue - dark overflow - hidden">;
          <CardHeader>;"
            <Skeleton className="h - 8 w - 3/4 bg - zion - blue - light / 20" />;
          </CardHeader>;"
          <CardContent className="space - y-4">;"
            <Skeleton className="h - 32 w - full bg - zion - blue - light / 20" />;"
            <div className="flex flex - wrap gap - 2">;
              {[...Array (5)].map ((_, i) => ("
                <Skeleton key={i} className="h - 6 w - 16 bg - zion - blue - light / 20" />))}
            </div>;"
            <Skeleton className="h - 8 w - 1/3 bg - zion - blue - light / 20" />;"
            <div className="space - y-2">;
              {[...Array (3)].map ((_, i) => ("
                <Skeleton key={i} className="h - 6 w - full bg - zion - blue - light / 20" />))}
            </div>;
          </CardContent>;
        </Card>)}
      {generated_content && !is_loading && ("
        <Card className="border border - zion - blue - light bg - zion - blue - dark">;
          <CardHeader>;"
            <CardTitle className="text - white">Generated Content</CardTitle>;
          </CardHeader>;"
          <CardContent className="space - y-4">;
            <div>;"
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Description</h3>;"
              <p className="text - white">{generated_content.description}</p>;
            </div>;
            <div>;"
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Tags</h3>;"
              <div className="flex flex - wrap gap - 2">;
                {generated_content.tags.map ((tag, index) => ("
                  <Badge key={index} className="bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30">{tag}</Badge>))}
              </div>;
            </div>;
            <div>;"
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Suggested Price Range</h3>;"
              <p className="text - white">${generated_content.suggested_price.min.to_fixed (2)} - ${generated_content.suggested_price.max.to_fixed (2)}</p>;
            </div>;
            <div>;"
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Key Selling Points</h3>;"
              <ul className="list - disc pl - 5 text - white space - y-1">;
                {generated_content.key_points.map ((point, index) => (
                  <li key={index}>{point}</li>))}



              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;



}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;}
  // TODO: Implement
  suggested_price: {,
  key_points: string[];
interface AIListingGeneratorProps {
  // TODO: Implement
  onApplyGenerated?: (content: GeneratedContent) => void,
  initial_values?: {
    key_features?: string;
    target_audience?: string;
export /**
 * AIListingGenerator - Function description;
 */
function AIListingGenerator() {
  const { toast } = use_toast ();
  const [title, set_title] = useState (initial_values.title || "");""
  const [category, set_category] = useState (initial_values.category || "");""
  const [key_features, setKeyFeatures] = useState (initial_values.key_features || "");""
  const [target_audience, setTargetAudience] = useState (initial_values.target_audience || "");"
  const [is_loading, setIsLoading] = useState (false);
  const [generated_content, setGeneratedContent] = useState (null as GeneratedContent | null);
  const handleInputChange = (e: { target: { value: string } }, field: string) =>: any {
  // TODO: Implement
    switch (field) {"
        set_title (e.target.value);
        set_category (e.target.value);
      case 'key_features':;
        setKeyFeatures (e.target.value);
      case 'target_audience':;
        setTargetAudience (e.target.value),
  const handle_generate = async () => {
    // Check condition;
if ( {) {
  $2;
      toast ({
        title: "Missing required fields",""
        description: "Please provide at least a title and category.",""
    setIsLoading (true);

    setIsLoading(true),;
    try {;"
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body:{ title, category, keyFeatures, targetAudience })
      }),;
      if (error) {;
      if (data.error) {;
        throw new Error(data.error),;
      }
;
      setGeneratedContent(data.generated),;
        title:"Content Generated",;""
        description:"AI has created optimized listing content for you.";")
    } catch (error) {;"
      console.error("Error generating content:", error),;"
      toast({;"
        title:"Generation Failed",;""
        description:error instanceof Error ? error.message :"Failed to generate content. Please try again.",;""
        variant:"destructive";")
    } finally {;
      setIsLoading(false),;
  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent),;
        title:"Content Applied",;""
        description:"The generated content has been applied to your listing.";")
  return (;"
    <div className="space-y-6">;"
</div>"
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;"

        <CardHeader>;
          <CardTitle className="flex items-center text-white">;"
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;"

          ;"
          <p className="text-sm text-zion-slate-light">;"
</p>
          </p>;
        <CardContent className="space-y-4">;"
          <div className="space-y-2">;"
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;"
            <Input;"
              id="title";"
              value={title})"
              onChange={(e) => handleInputChange(e, 'title')}

          </div>;
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;"
              id="category";"
              value={category}"
              onChange={(e) => handleInputChange(e, 'category')}

            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;"
            <Textarea;"
              id="keyFeatures";"
              value={keyFeatures}"
              onChange={(e) => handleInputChange(e, 'keyFeatures')}

            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;"
              id="targetAudience";"
              value={targetAudience}"
              onChange={(e) => handleInputChange(e, 'targetAudience')}

    <div className="space-y-6">"
      <Card className="border border-zion-blue-light bg-zion-blue-dark">"

        <CardHeader>
          <CardTitle className="flex items-center text-white">"
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />"

          <p className="text-sm text-zion-slate-light">"
        <CardContent className="space-y-4">"
          <div className="space-y-2">"
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>"
              id="title""
              value={title}"

          </div>
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>"
              id="category""

            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>"
              id="keyFeatures""

            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>"
              id="targetAudience""

          <Button;
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}

        title: "Content Generated",;""
        description: "AI has created optimized listing content for you.";")
      console && console.error("Error generating content:", error);"
        title: "Generation Failed",;""
        description: error instanceof Error ? error && error.message : "Failed to generate content. Please try again.",;""
      setIsLoading(false);







              <>Generating Optimized Content...</>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />"

              </>)
            )}
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">"

            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />"

            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />"
            <div className="flex flex-wrap gap-2">"
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />"

            disabled={isLoading || !title || !category}"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;"

              <>Generating Optimized Content...</>;
            ) : (;
              <>;"
                <Sparkles className="h-4 w-4 mr-2" />;"

              </>;)
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">;"

            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />;"

            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />;"
            <div className="flex flex-wrap gap-2">;"
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />;"

            </div>;"
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;"
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />;"


            <CardTitle className="text-white">Generated Content"

            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>""
              <p className="text-white">{generatedContent.description}</p>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>""
                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>""
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>""
              <ul className="list-disc pl-5 text-white space-y-1">"
</ul>
                  <li key={index}>{point}</li>"

            <CardTitle className="text-white">Generated Content;"

            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;""
              <p className="text-white">{generatedContent && generatedContent.description}</p>;"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>;""
                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag};"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>;""
              <p className="text-white">${generatedContent && generatedContent.suggestedPrice.min && min.toFixed(2)} - ${generatedContent && generatedContent.suggestedPrice.max && max.toFixed(2)}</p>;"
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>;""
              <ul className="list-disc pl-5 text-white space-y-1">;"
                  <li key={index}>{point}</li>;"
    <div className="space - y-6">;"
      <Card className="border border - zion - blue - light bg - zion - blue - dark">;"

          <CardTitle className="flex items - center text - white">;"
            <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" />;"

          <p className="text - sm text - zion - slate - light">;"
        <CardContent className="space - y-4">;"
          <div className="space - y-2">;"
            <label html_for="title" className="text - sm font - medium text - zion - slate - light">Title</label>;"
              on_change={(e) => handleInputChange (e, 'title')}

            <label html_for="category" className="text - sm font - medium text - zion - slate - light">Category</label>;"
              on_change={(e) => handleInputChange (e, 'category')}

            <label html_for="key_features" className="text - sm font - medium text - zion - slate - light">Key Features (Optional)</label>;"
              id="key_features";"
              value={key_features}"
              on_change={(e) => handleInputChange (e, 'key_features')}

            <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light">Target Audience (Optional)</label>;"
              id="target_audience";"
              value={target_audience}"
              on_change={(e) => handleInputChange (e, 'target_audience')}

            on_click={handle_generate}
            disabled={is_loading || !title || !category}
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2";"
          >;

              <>Generating Optimized Content...</>) : (
                <Sparkles className="h - 4 w - 4 mr - 2" />;"
)
              </>)}
        <Card className="border border - zion - blue - light bg - zion - blue - dark overflow - hidden">;"

            <Skeleton className="h - 8 w - 3/4 bg - zion - blue - light / 20" />;"

            <Skeleton className="h - 32 w - full bg - zion - blue - light / 20" />;"
            <div className="flex flex - wrap gap - 2">;"
                <Skeleton key={i} className="h - 6 w - 16 bg - zion - blue - light / 20" />))}"

            <Skeleton className="h - 8 w - 1/3 bg - zion - blue - light / 20" />;"
                <Skeleton key={i} className="h - 6 w - full bg - zion - blue - light / 20" />))}"

        )}"

            <CardTitle className="text - white">Generated Content;"

              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Description</h3>;""
              <p className="text - white">{generated_content.description}</p>;"
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Tags</h3>;""
                  <Badge key={index} className="bg - zion - purple / 20 text - zion - purple hover:bg - zion - purple / 30">{tag}))}"
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Suggested Price Range</h3>;""
              <p className="text - white">${generated_content.suggested_price.min.to_fixed (2)} - ${generated_content.suggested_price.max.to_fixed (2)}</p>;"
              <h3 className="text - sm font - medium text - zion - slate - light mb - 2">Key Selling Points</h3>;""
              <ul className="list - disc pl - 5 text - white space - y-1">;"
                  <li key={index}>{point}</li>))}
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>;"
                  <li key={index}>{point}</li>;
              </ul>;
          <CardFooter>;


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
}
              on_click={handle_apply}"
              className="w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white";"
              <ArrowRight className="ml - 2 h - 4 w - 4" />;"

    </div>);"
pr-12325

<<<<<<< HEAD
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

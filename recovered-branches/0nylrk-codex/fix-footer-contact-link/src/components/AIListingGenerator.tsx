




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



}

interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void,;
  initialValues?: {;

    title?: string;
    category?: string;
    keyFeatures?: string;



    targetAudience?: string;
  }
}

export function AIListingGenerator(): any ({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast();


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]




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
  }
  },

  const handleGenerate = async () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."
        variant: "destructive"
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      return;
    }

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

    try {
      const { data, error } = await supabase.functions.invoke ('ai - listing - generator', {
        body: { title, category, key_features, target_audience }
      });

;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body: { title, category, keyFeatures, targetAudience }
      }),;
      if (error) {;
        throw new Error(error.message);





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
      }
      if (data.error) {
        throw new Error(data.error)
      }
      setGeneratedContent(data.generated);

      setGeneratedContent(data.generated),
      toast({
        title: "Content Generated"
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      console.error("Error generating content:", error);
      toast({
        title: "Generation Failed"
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again."
        variant: "destructive"
      })

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

    } finally {
      setIsLoading (false);
    }
  }

    } finally {
      setIsLoading(false)
    }
  }
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: "Content Applied"
        description: "The generated content has been applied to your listing."
      })
    }
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  return (
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
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}
            />;
          </div>;
          <div className="space-y-2">;
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;
            <Input
              id="category"
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
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
              placeholder="e && e.g. Developers, Marketers, Startups";
              className="bg-zion-blue border border-zion-blue-light text-white";
              disabled={isLoading}

            />;
          </div>;
          <Button;





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
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

                ))}

              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;

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

}
<<<<<<< HEAD
import React{ useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import { CardContentCardFooterCardHeaderCardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SparklesArrowRight } from "@/components/icons";
=======
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles, ArrowRight } from "@/components/icons";
>>>>>>> origin/auto/autonomy-17186719616
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";

interface GeneratedContent {
  description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number;
  };
  keyPoints: string[];
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  };
}

<<<<<<< HEAD
export function AIListingGenerator({ onApplyGeneratedinitialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast();
  const [titlesetTitle] = useState(initialValues.title || "");
  const [categorysetCategory] = useState(initialValues.category || "");
  const [keyFeaturesetKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudiencesetTargetAudience] = useState(initialValues.targetAudience || "");
  const [isLoadingsetIsLoading] = useState(false);
  const [generatedContentsetGeneratedContent] = useState(null as GeneratedContent | null);

  const handleInputChange = (e: { target: { value: string } }field: string) => {
=======
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);

  const handleInputChange = (e: { target: { value: string } }, field: string) => {
>>>>>>> origin/auto/autonomy-17186719616
    switch(field) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'category':
        setCategory(e.target.value);
        break;
      case 'keyFeatures':
        setKeyFeatures(e.target.value);
        break;
      case 'targetAudience':
        setTargetAudience(e.target.value);
        break;
    }
  };

  const handleGenerate = async () => {
    if (!title || !category) {
      toast({
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
<<<<<<< HEAD
      const { dataerror } = await supabase.functions.invoke('ai-listing-generator'{
        body: { titlecategorykeyFeaturestargetAudience }
=======
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
>>>>>>> origin/auto/autonomy-17186719616
      });

      if (error) {
        throw new Error(error.message);
      }
      
      if (data.error) {
        throw new Error(data.error);
      }

      setGeneratedContent(data.generated);
      toast({
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      });
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating content:"error);
=======
      console.error("Error generating content:", error);
>>>>>>> origin/auto/autonomy-17186719616
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: "Content Applied",
        description: "The generated content has been applied to your listing."
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
          <p className="text-sm text-zion-slate-light">
<<<<<<< HEAD
            Provide basic information and let AI generate optimizedSEO-friendly content for your listing
=======
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
>>>>>>> origin/auto/autonomy-17186719616
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
            <Input
              id="title"
              value={title}
<<<<<<< HEAD
              onChange={(e) => handleInputChange(e'title')}
=======
              onChange={(e) => handleInputChange(e, 'title')}
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
              onChange={(e) => handleInputChange(e'category')}
              placeholder="e.g. AI ToolDigital ProductService"
=======
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder="e.g. AI Tool, Digital Product, Service"
>>>>>>> origin/auto/autonomy-17186719616
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
            <Textarea
              id="keyFeatures"
              value={keyFeatures}
<<<<<<< HEAD
              onChange={(e) => handleInputChange(e'keyFeatures')}
=======
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
              onChange={(e) => handleInputChange(e'targetAudience')}
              placeholder="e.g. DevelopersMarketersStartups"
=======
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder="e.g. Developers, Marketers, Startups"
>>>>>>> origin/auto/autonomy-17186719616
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />
          </div>
          <Button 
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
<<<<<<< HEAD
              {[...Array(5)].map((_i) => (
=======
              {[...Array(5)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />
              ))}
            </div>
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
            <div className="space-y-2">
<<<<<<< HEAD
              {[...Array(3)].map((_i) => (
=======
              {[...Array(3)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                {generatedContent.tags.map((tagindex) => (
=======
                {generatedContent.tags.map((tag, index) => (
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
                {generatedContent.keyPoints.map((pointindex) => (
=======
                {generatedContent.keyPoints.map((point, index) => (
>>>>>>> origin/auto/autonomy-17186719616
                  <li key={index}>{point}</li>
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
  );
}
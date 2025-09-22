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
  description: string;,;
  tags: string[];,;
  suggestedPrice: {;,
  min: number;,;
    max:number;
  },;
  keyPoints:string[];
}
interface AIListingGeneratorProps {;
  onApplyGenerated?:(content: GeneratedContent) => void;,;
  initialValues?:{;
    title?:string,;
    category?:string,;
    keyFeatures?:string,;
    targetAudience?:string;
export function AIListingGenerator({ onApplyGenerated, initialValues = {} } AIListingGeneratorProps) {;
  const { toast } = useToast(),;"
  const [title, setTitle] = useState(initialValues.title || ""),;""
  const [category, setCategory] = useState(initialValues.category || ""),;""
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),;""
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),;"
  const [isLoading, setIsLoading] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),;
  const handleInputChange = (e: { target:{ value:string ;} }, field:string) => {;
    switch(field) {;"
      case 'title':;
        setTitle(e.target.value),;
        break,;
      case 'category':;
        setCategory(e.target.value),;
      case 'keyFeatures':;
        setKeyFeatures(e.target.value),;
      case 'targetAudience':;
        setTargetAudience(e.target.value),;
        break;
  const handleGenerate = async () => {;
    if (!title || !category) {;
      toast({;
title:"Missing required fields",;
        description:"Please provide at least a title and category.",;
        variant:"destructive";
        title: "Missing required fields";,;""
        description: "Please provide at least a title and category.";,;""
        variant:"destructive";")
pr-12325
      }),;
      return,;
    setIsLoading(true),;
    try {;"
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body: { title;, category, keyFeatures, targetAudience })
      if (error) {;
        throw new Error(error.message),;
      if (data.error) {;
        throw new Error(data.error),;
      setGeneratedContent(data.generated),;
      toast({;
title:"Content Generated",;
        description:"AI has created optimized listing content for you.";
  description:"AI has created optimized listing content for you.";
      }),;
    } catch (error) {;
      console.error("Error generating content: ";, error),;
      toast({;
        title:"Generation Failed",;
        description:error instanceof Error ? error.message :"Failed to generate content. Please try again.",;
        variant:"destructive";
      }),;
        title: "Content Generated";,;""
        description:"AI has created optimized listing content for you.";")
    } catch (error) {;"
      console.error("Error generating content: ";, error),;"
      toast({;"
        title: "Generation Failed";,;""
        description: error instanceof Error ? error.message :"Failed to generate content. Please try again.";,;""
pr-12325
    } finally {;
      setIsLoading(false),;
  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent),;
      toast({;
        title:"Content Applied",;
        description:"The generated content has been applied to your listing.";
  description:"The generated content has been applied to your listing.";
      }),;
    }
  },;
;
  return (;
    <div className="space-y-6">;
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;
        title: "Content Applied";,;""
        description:"The generated content has been applied to your listing.";")
  return (;"
    <div className="space-y-6">;"
</div>"
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;"

pr-12325
        <CardHeader>;
"
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

    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }

            <Input
              id=&quot;title&quot;
              value={title}
              onChange={(e) => handleInputChange(e, 'title')}

            <Input
              id=&quot;category&quot;
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}

            <Textarea
              id=&quot;keyFeatures&quot;
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}

            <Input
              id=&quot;targetAudience&quot;
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}

              <>;
                <Sparkles className="h-4 w-4 mr-2" />;
                Generate Optimized Content;
              </>;
            )}
          </Button>;
        </CardContent>;
      </Card>;

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

      {generatedContent && !isLoading && (;
        <Card className="border border-zion-blue-light bg-zion-blue-dark">;
          <CardHeader>;
            <CardTitle className="text-white">Generated Content</CardTitle>;
          </CardHeader>;
          <CardContent className="space-y-4">;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;

                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>;
                ))}
              </div>;
            </div>;

              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;
            <Button;

}

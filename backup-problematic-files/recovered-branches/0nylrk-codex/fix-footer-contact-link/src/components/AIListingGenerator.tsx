import React, { useState } from "react",;""
import { useToast } from "@/hooks/use-toast",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;""
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Skeleton } from "@/components/ui/skeleton",;""
import { Sparkles, ArrowRight } from "@/components/icons",;""
import { supabase } from "@/integrations/supabase/client",;""
import { Badge } from "@/components/ui/badge",;"
;
interface GeneratedContent {;
  description:string,;
  tags:string[],;
  suggestedPrice: {;,
  min:number,;
    max:number;
  },;
  keyPoints:string[];
}
interface AIListingGeneratorProps {;
  onApplyGenerated?:(content:GeneratedContent) => void,;
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
  const handleInputChange = (e:{ target:{ value:string } }, field:string) => {;
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
        title:"Missing required fields",;""
        description:"Please provide at least a title and category.",;""
        variant:"destructive";")
      }),;
      return,;
    setIsLoading(true),;
    try {;"
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
        body:{ title, category, keyFeatures, targetAudience })
      if (error) {;
        throw new Error(error.message),;
      if (data.error) {;
        throw new Error(data.error),;
      setGeneratedContent(data.generated),;
        title:"Content Generated",;""
        description:"AI has created optimized listing content for you.";")
    } catch (error) {;"
      console.error("Error generating content:", error),;"
      toast({;"
        title:"Generation Failed",;""
        description:error instanceof Error ? error.message :"Failed to generate content. Please try again.",;""
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

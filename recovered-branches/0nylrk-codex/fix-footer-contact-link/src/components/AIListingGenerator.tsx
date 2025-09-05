<<<<<<< HEAD
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Skeleton } from "@/components/ui/skeleton",
import { Sparkles, ArrowRight } from "@/components/icons",
import { supabase } from "@/integrations/supabase/client",
import { Badge } from "@/components/ui/badge",
=======
import React, { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { Sparkles, ArrowRight } from &quot;@/components/icons&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface GeneratedContent {
  description: string,
  tags: string[],
  suggestedPrice: {
    min: number,
    max: number
  },
  keyPoints: string[]
}

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void,
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
<<<<<<< HEAD
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
  const [isLoading, setIsLoading] = useState(false),
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),
=======
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || "&quot;);
  const [category, setCategory] = useState(initialValues.category || "&quot;);
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "&quot;);
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "&quot;);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
<<<<<<< HEAD
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      }),
      return
=======
        title: &quot;Missing required fields&quot;,
        description: &quot;Please provide at least a title and category.&quot;,
        variant: &quot;destructive&quot;
      });
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsLoading(true),
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }
      }),

      if (error) {
        throw new Error(error.message)
      }
      
      if (data.error) {
        throw new Error(data.error)
      }

      setGeneratedContent(data.generated),
      toast({
<<<<<<< HEAD
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      })
    } catch (error) {
      console.error("Error generating content:", error),
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",
        variant: "destructive"
      })
=======
        title: &quot;Content Generated&quot;,
        description: &quot;AI has created optimized listing content for you.&quot;
      });
    } catch (error) {
      console.error(&quot;Error generating content:&quot;, error);
      toast({
        title: &quot;Generation Failed&quot;,
        description: error instanceof Error ? error.message : &quot;Failed to generate content. Please try again.&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent),
      toast({
<<<<<<< HEAD
        title: "Content Applied",
        description: "The generated content has been applied to your listing."
      })
=======
        title: &quot;Content Applied&quot;,
        description: &quot;The generated content has been applied to your listing.&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  return (
    <div className=&quot;space-y-6&quot;>
      <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark&quot;>
        <CardHeader>
          <CardTitle className=&quot;flex items-center text-white&quot;>
            <Sparkles className=&quot;h-5 w-5 mr-2 text-zion-cyan&quot; />
            AI Listing Optimizer
          </CardTitle>
          <p className=&quot;text-sm text-zion-slate-light&quot;>
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent className=&quot;space-y-4&quot;>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;title&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Title</label>
            <Input
              id=&quot;title&quot;
              value={title}
              onChange={(e) => handleInputChange(e, 'title')}
              placeholder=&quot;Enter your product or service title&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
              disabled={isLoading}
            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;category&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Category</label>
            <Input
              id=&quot;category&quot;
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder=&quot;e.g. AI Tool, Digital Product, Service&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
              disabled={isLoading}
            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;keyFeatures&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Key Features (Optional)</label>
            <Textarea
              id=&quot;keyFeatures&quot;
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
              placeholder=&quot;Briefly describe the main features or benefits&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
              disabled={isLoading}
            />
          </div>
          <div className=&quot;space-y-2&quot;>
            <label htmlFor=&quot;targetAudience&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Target Audience (Optional)</label>
            <Input
              id=&quot;targetAudience&quot;
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder=&quot;e.g. Developers, Marketers, Startups&quot;
              className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
              disabled={isLoading}
            />
          </div>
          <Button 
            onClick={handleGenerate}
            disabled={isLoading || !title || !category}
            className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2&quot;
          >
            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (
              <>
                <Sparkles className=&quot;h-4 w-4 mr-2&quot; />
                Generate Optimized Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {isLoading && (
        <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark overflow-hidden&quot;>
          <CardHeader>
            <Skeleton className=&quot;h-8 w-3/4 bg-zion-blue-light/20&quot; />
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <Skeleton className=&quot;h-32 w-full bg-zion-blue-light/20&quot; />
            <div className=&quot;flex flex-wrap gap-2&quot;>
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className=&quot;h-6 w-16 bg-zion-blue-light/20&quot; />
              ))}
            </div>
            <Skeleton className=&quot;h-8 w-1/3 bg-zion-blue-light/20&quot; />
            <div className=&quot;space-y-2&quot;>
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className=&quot;h-6 w-full bg-zion-blue-light/20&quot; />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {generatedContent && !isLoading && (
        <Card className=&quot;border border-zion-blue-light bg-zion-blue-dark&quot;>
          <CardHeader>
            <CardTitle className=&quot;text-white&quot;>Generated Content</CardTitle>
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <div>
              <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Description</h3>
              <p className=&quot;text-white&quot;>{generatedContent.description}</p>
            </div>
            
            <div>
              <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Tags</h3>
              <div className=&quot;flex flex-wrap gap-2&quot;>
                {generatedContent.tags.map((tag, index) => (
                  <Badge key={index} className=&quot;bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30&quot;>{tag}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Suggested Price Range</h3>
              <p className=&quot;text-white&quot;>${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>
            
            <div>
              <h3 className=&quot;text-sm font-medium text-zion-slate-light mb-2&quot;>Key Selling Points</h3>
              <ul className=&quot;list-disc pl-5 text-white space-y-1&quot;>
                {generatedContent.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleApply}
              className=&quot;w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white&quot;
            >
              Apply to My Listing
              <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
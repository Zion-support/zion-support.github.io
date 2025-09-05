
import React, { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Sparkles } from 'lucide-react'

interface AIListingFormProps {
  onSubmit: (formData: {
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;
  }) => void;
  isLoading: boolean;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  };
}

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || "&quot;);
  const [category, setCategory] = useState(initialValues.category || "&quot;);
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "&quot;);
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "&quot;);

  const handleSubmit = () => {
    if (!title || !category) {
      toast({
        title: &quot;Missing required fields&quot;,
        description: &quot;Please provide at least a title and category.&quot;,
        variant: &quot;destructive&quot;
      });
      return;
    }

    onSubmit({
      title,
      category,
      keyFeatures,
      targetAudience
    });
  };

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;title&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Title</label>
        <Input
          id=&quot;title&quot;
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setCategory(e.target.value)}
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
          onChange={(e) => setKeyFeatures(e.target.value)}
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
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder=&quot;e.g. Developers, Marketers, Startups&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}
        />
      </div>
      <Button 
        onClick={handleSubmit}
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
    </div>
  );
}


<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from "lucide-react",
=======
import React, { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Sparkles } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface AIListingFormProps {
  onSubmit: (formData: {
    title: string,
    category: string,
    keyFeatures: string,
    targetAudience: string
  }) => void,
  isLoading: boolean,
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
<<<<<<< HEAD
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
=======
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || "&quot;);
  const [category, setCategory] = useState(initialValues.category || "&quot;);
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "&quot;);
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React, {_useState} from "react";

interface AIListingFormProps {_onSubmit: (_formData: {
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;}) => void;
  isLoading: boolean;
  initialValues?: {_title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;};
}

export function AIListingForm(_{_onSubmit, _isLoading, _initialValues = {} }: AIListingFormProps) {_const { toast} = useToast();
  const [title, setTitle] = useState(initialValues.title || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleSubmit = () => {_if (!title || !category) {
      toast({
<<<<<<< HEAD
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
=======
        title: "Missing required fields", _description: "Please provide at least a title and category.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

<<<<<<< HEAD
    onSubmit({
      title,
      category,
      keyFeatures,
      targetAudience
    })
  },

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
=======
    onSubmit({_title, _category, _keyFeatures, _targetAudience});
  };

  return (_<div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
        <Input
          id="title"
          value={_title}
          onChange={_(e) => setTitle(e.target.value)}
          placeholder="Enter your product or service title"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={_isLoading}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;category&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Category</label>
        <Input
<<<<<<< HEAD
          id=&quot;category&quot;
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder=&quot;e.g. AI Tool, Digital Product, Service&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}
=======
          id="category"
          value={_category}
          onChange={_(_e) => setCategory(e.target.value)}
          placeholder="e.g. AI Tool, Digital Product, Service"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={_isLoading}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;keyFeatures&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Key Features (Optional)</label>
        <Textarea
<<<<<<< HEAD
          id=&quot;keyFeatures&quot;
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}
          placeholder=&quot;Briefly describe the main features or benefits&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
          disabled={isLoading}
=======
          id="keyFeatures"
          value={_keyFeatures}
          onChange={_(_e) => setKeyFeatures(e.target.value)}
          placeholder="Briefly describe the main features or benefits"
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
          disabled={_isLoading}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;targetAudience&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Target Audience (Optional)</label>
        <Input
<<<<<<< HEAD
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
=======
          id="targetAudience"
          value={_targetAudience}
          onChange={_(_e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={_isLoading}
        />
      </div>
      <Button 
        onClick={_handleSubmit}
        disabled={_isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        {_isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
            <Sparkles className=&quot;h-4 w-4 mr-2&quot; />
            Generate Optimized Content
          </>
        )}
      </Button>
    </div>
  )
}

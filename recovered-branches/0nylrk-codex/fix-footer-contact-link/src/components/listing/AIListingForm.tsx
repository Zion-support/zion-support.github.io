<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string

<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles} from "lucide-react";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from "lucide-react",
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string
<<<<<<< HEAD

=======
<<<<<<< HEAD
  }) => void;
  isLoading: boolean

  }) => void,
  isLoading: boolean,
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

<<<<<<< HEAD
=======

=======

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {

<<<<<<< HEAD
=======
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "");
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title |"");
  const [category, setCategory] = useState(initialValues.category |"");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures |"");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience |"");
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleSubmit = () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."
        variant: "destructive"
      }),
      return
    }
    onSubmit({
      title,
      category,
      keyFeatures,
      targetAudience
    })
<<<<<<< HEAD
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  },

<<<<<<< HEAD
=======
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setCategory(e.target.value)}
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
          onChange={(e) => setKeyFeatures(e.target.value)}
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
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
<<<<<<< HEAD
=======
<<<<<<< HEAD

      <Button 

=======
=======
      <Button 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          disabled={isLoading}
        />
      </div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Button
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
      <Button 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      <Button 

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles } from "lucide-react",;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface AIListingFormProps {;
  onSubmit: (formData: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
<<<<<<< HEAD
<<<<<<< HEAD
  }) => void;
  isLoading: boolean,;
  initialValues?: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  }
}

export function AIListingForm(): any ({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
  const { toast } = useToast();
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [title, setTitle] = useState(initialValues && initialValues.title || "");
  const [category, setCategory] = useState(initialValues && initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");
<<<<<<< HEAD

=======
  }) => void,;
  isLoading: boolean,;
  initialValues?: {;
    title?: string,;
    category?: string,;
    keyFeatures?: string,;
    targetAudience?: string;
  }
}
;
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
  const { toast } = useToast(),;
  const [title, setTitle] = useState(initialValues.title || ""),;
  const [category, setCategory] = useState(initialValues.category || ""),;
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),;
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleSubmit = () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      });
      return;
    }

<<<<<<< HEAD

=======
      });
      return;
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    onSubmit({;
      title;
      category;
      keyFeatures;
      targetAudience;
    });
  };
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="space-y-4">;
      <div className="space-y-2">;
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e && e.target.value)}
          placeholder="Enter your product or service title";
<<<<<<< HEAD
=======

import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles } from "lucide-react",;
;
interface AIListingFormProps {;
  onSubmit:(formData:{;
    title:string,;
    category:string,;
    keyFeatures:string,;
    targetAudience:string;
  }) => void,;
  isLoading:boolean,;
  initialValues?:{;
    title?:string,;
    category?:string,;
    keyFeatures?:string,;
    targetAudience?:string;
  },;
}
;
export function AIListingForm({ onSubmit, isLoading, initialValues = {} } AIListingFormProps) {;
  const { toast } = useToast(),;
  const [title, setTitle] = useState(initialValues.title || ""),;
  const [category, setCategory] = useState(initialValues.category || ""),;
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),;
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),;
;
  const handleSubmit = () => {;
    if (!title || !category) {;
      toast({;
        title:"Missing required fields",;
        description:"Please provide at least a title and category.",;
        variant:"destructive";
      }),;
      return,;
      }),;
      return;
    }
;
    onSubmit({;
      title,;
      category,;
      keyFeatures;
      targetAudience;
    });
  };
  return (;
    <div className="space-y-4">;
      <div className="space-y-2">;
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
        <Input;
          id="title";
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your product or service title";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;
<<<<<<< HEAD
        <Input;
          id="category";
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          onChange={(e) => setKeyFeatures(e.target.value)}
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
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;
<<<<<<< HEAD
      <div className="space-y-2">;
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;
=======
          onChange={(e) => setTitle(e.target.value)}
          placeholder=&quot;Enter your product or service title&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;category&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Category</label>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <Input
          id="category"
          value={category}
<<<<<<< HEAD
=======
        <Input
          id="category"
          value={category}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          onChange={(e) => setCategory(e && e.target.value)}
          placeholder="e && e.g. AI Tool, Digital Product, Service";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;
<<<<<<< HEAD
=======
          onChange={(e) => setCategory(e.target.value)}
          placeholder=&quot;e.g. AI Tool, Digital Product, Service&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;keyFeatures&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Key Features (Optional)</label>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <Textarea
          id="keyFeatures"
          value={keyFeatures}
<<<<<<< HEAD
=======
        <Textarea
          id="keyFeatures"
          value={keyFeatures}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          onChange={(e) => setKeyFeatures(e && e.target.value)}
          placeholder="Briefly describe the main features or benefits";
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;
<<<<<<< HEAD
=======
          onChange={(e) => setKeyFeatures(e.target.value)}
          placeholder=&quot;Briefly describe the main features or benefits&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;targetAudience&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Target Audience (Optional)</label>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <Input
          id="targetAudience"
          value={targetAudience}
<<<<<<< HEAD
          onChange={(e) => setTargetAudience(e && e.target.value)}
          placeholder="e && e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}

        />;
      </div>;
      <Button;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
<<<<<<< HEAD
=======
      <Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <Input
          id="targetAudience"
          value={targetAudience}
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        />;
      </div>;
      <Button
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;
        {isLoading ? (;
          <>Generating Optimized Content...</>;
        ) : (;
<<<<<<< HEAD
=======
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder=&quot;e.g. Developers, Marketers, Startups&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}
        />;
      </div>;
      <Button ;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2";
      >;
        {isLoading ? (;
          <>Generating Optimized Content...</>;
        ) :(;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <>;
            <Sparkles className="h-4 w-4 mr-2" />;
            Generate Optimized Content;
          </>;
        )}


      </Button>;
    </div>;
<<<<<<< HEAD
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from './react';
import { use_toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Sparkles } from './lucide-react';
interface AIListingFormProps {
  on_submit: (form_data: {
    title: string,
    category: string,
    key_features: string,
    target_audience: string;
  }) => void;
  is_loading: boolean,
  initial_values?: {
    title?: string;
    category?: string;
    key_features?: string;
    target_audience?: string;
  }
}
export /**
 * AIListingForm - Function description
 */
function AIListingForm() {
  const { toast } = use_toast ();
  const [title, set_title] = useState (initial_values.title || "");
  const [category, set_category] = useState (initial_values.category || "");
  const [key_features, setKeyFeatures] = useState (initial_values.key_features || "");
  const [target_audience, setTargetAudience] = useState (initial_values.target_audience || "");
;
<<<<<<< HEAD



=======
  const handle_submit = () =>: any {
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
    on_submit ({
      title;
      category;
      key_features;
      target_audience;
    });
  }
;
  return (
    <div className="space - y-4">;
      <div className="space - y-2">;
        <label html_for="title" className="text - sm font - medium text - zion - slate - light">Title</label>;
        <Input;
          id="title";
          value={title}
          on_change={(e) => set_title (e.target.value)}
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
          on_change={(e) => set_category (e.target.value)}
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
          on_change={(e) => setKeyFeatures (e.target.value)}
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
          on_change={(e) => setTargetAudience (e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups";
          className="bg - zion - blue border border - zion - blue - light text - white";
          disabled={is_loading}
        />;
      </div>;
      <Button;
        on_click={handle_submit}
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
    </div>);
  ),;}export function AIListingForm ({
  onSubmit, isLoading, initialValues = {
  
}
}: AIListingFormProps) {
  if (!title || !category) {
  toast ({
  return;
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) 
}</Button> </div>) 
}
      </Button>
    </div>
  )
}
      </Button>;
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

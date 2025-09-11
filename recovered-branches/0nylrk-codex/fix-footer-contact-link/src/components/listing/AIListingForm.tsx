
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles} from "lucide-react";
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from "lucide-react",
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string
  }) => void;
  isLoading: boolean

  }) => void,
  isLoading: boolean,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

<<<<<<< HEAD

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "");
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  },

<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
      <Button 

          disabled={isLoading}
        />
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
      <Button 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <Button 

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles } from "lucide-react",;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AIListingFormProps {;
  onSubmit: (formData: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }) => void;
  isLoading: boolean,;
  initialValues?: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  }
}

export function AIListingForm(): any ({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
  const { toast } = useToast();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [title, setTitle] = useState(initialValues && initialValues.title || "");
  const [category, setCategory] = useState(initialValues && initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSubmit = () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";
<<<<<<< HEAD
<<<<<<< HEAD
      });
      return;
    }
    onSubmit({;
      title;
      category;
      keyFeatures;
      targetAudience;
    });
  };
  return (
    <div className="space-y-4">;
      <div className="space-y-2">;
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      });
      return;
    }


    onSubmit({;
      title;
      category;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      keyFeatures;
      targetAudience;
    });
  };
<<<<<<< HEAD
<<<<<<< HEAD
  return (;
    <div className="space-y-4">;
      <div className="space-y-2">;
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
        <Input;
          id="title";
          value={title}
          onChange={(e) => setTitle(e.target.value)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  return (
    <div className="space-y-4">;
      <div className="space-y-2">;
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e && e.target.value)}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          placeholder="Enter your product or service title";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Input;
          id="category";
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. AI Tool, Digital Product, Service";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Input
          id="category"
          value={category}
          onChange={(e) => setCategory(e && e.target.value)}
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
        <Textarea;
          id="keyFeatures";
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Textarea
          id="keyFeatures"
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e && e.target.value)}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          placeholder="Briefly describe the main features or benefits";
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Input;
          id="targetAudience";
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;
          onChange={(e) => setTitle(e.target.value)}
          placeholder=&quot;Enter your product or service title&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;category&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Category</label>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <Input
          id=&quot;category&quot;
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder=&quot;e.g. AI Tool, Digital Product, Service&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;keyFeatures&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Key Features (Optional)</label>
        <Textarea
          id=&quot;keyFeatures&quot;
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}
          placeholder=&quot;Briefly describe the main features or benefits&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;targetAudience&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Target Audience (Optional)</label>
        <Input
          id=&quot;targetAudience&quot;
          value={targetAudience}


        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
<<<<<<< HEAD
      <Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <Input
          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e && e.target.value)}
          placeholder="e && e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}

        />;
      </div>;
      <Button;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        onClick={handleSubmit}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
      </div>;
      <Button
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;
        {isLoading ? (;
          <>Generating Optimized Content...</>;
        ) : (;
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
          <>;
            <Sparkles className="h-4 w-4 mr-2" />;
            Generate Optimized Content;
          </>;
        )}


<<<<<<< HEAD
      </Button>;
    </div>;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </Button>
    </div>
  )
}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </Button>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

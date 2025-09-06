<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx


<<<<<<< HEAD
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles} from "lucide-react";
=======
<<<<<<< HEAD

  }) => void,
  isLoading: boolean,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
=======
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from "lucide-react",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string
<<<<<<< HEAD
  }) => void;
  isLoading: boolean

=======
  }) => void,
  isLoading: boolean,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "");
=======
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
<<<<<<< HEAD
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title |"");
  const [category, setCategory] = useState(initialValues.category |"");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures |"");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience |"");
=======
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
=======
      <Button 

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
          disabled={isLoading}
        />
      </div>
<<<<<<< HEAD
      <Button
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
=======
      <Button 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles } from "lucide-react",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface AIListingFormProps {;
  onSubmit: (formData: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
<<<<<<< HEAD
  }) => void;
  isLoading: boolean,;
  initialValues?: {;
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  }
}
export function AIListingForm(): any ({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
  const { toast } = useToast();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx
  const [title, setTitle] = useState(initialValues && initialValues.title || "");
  const [category, setCategory] = useState(initialValues && initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleSubmit = () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx

      });
      return;
    }


========
      });
      return;
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx
    onSubmit({;
      title;
      category;
      keyFeatures;
      targetAudience;
    });
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx
  return (
    <div className="space-y-4">;
      <div className="space-y-2">;
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
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
=======
      }),;
      return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
;
    onSubmit({;
      title,;
      category,;
<<<<<<< HEAD
      keyFeatures,;
      targetAudience;
    }),;
  },;
;
=======
      keyFeatures;
      targetAudience;
    });
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="space-y-4">;
      <div className="space-y-2">;
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;
        <Input;
          id="title";
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
<<<<<<< HEAD
          className="bg-zion-blue border border-zion-blue-light text-white";  onSubmit: (formData: {
  title: string;
category: string;
keyFeatures: string;
targetAudience: string 
}) => void;
isLoading: boolean;
initialValues?: {
  title?: string;
category?: string;
keyFeatures?: string;
targetAudience?: string 
}

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),import React, {_useState} from "react";

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

  const _handleSubmit = () => {_if (!title || !category) {
      toast({
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      }),
      return      return;
    }

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Input
          id=&quot;title&quot;
          value={title}
<<<<<<< HEAD
          onChange={(e) => setTitle(e && e.target.value)}
          placeholder="Enter your product or service title";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Input
          id=&quot;category&quot;
          value={category}
<<<<<<< HEAD
          onChange={(e) => setCategory(e && e.target.value)}
          placeholder="e && e.g. AI Tool, Digital Product, Service";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;
=======
          onChange={(e) => setCategory(e.target.value)}
          placeholder=&quot;e.g. AI Tool, Digital Product, Service&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;keyFeatures&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Key Features (Optional)</label>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Textarea
          id=&quot;keyFeatures&quot;
          value={keyFeatures}
<<<<<<< HEAD
          onChange={(e) => setKeyFeatures(e && e.target.value)}
          placeholder="Briefly describe the main features or benefits";
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;
=======
          onChange={(e) => setKeyFeatures(e.target.value)}
          placeholder=&quot;Briefly describe the main features or benefits&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;targetAudience&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Target Audience (Optional)</label>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Input
          id=&quot;targetAudience&quot;
          value={targetAudience}
<<<<<<< HEAD
          onChange={(e) => setTargetAudience(e && e.target.value)}
          placeholder="e && e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx

        />;
      </div>;
      <Button;

<<<<<<< HEAD
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      <Button;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx
        />;
      </div>;
      <Button
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;
        {isLoading ? (;
          <>Generating Optimized Content...</>;
        ) : (;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <>;
            <Sparkles className="h-4 w-4 mr-2" />;
            Generate Optimized Content;
          </>;
        )}
=======


      </Button>;
    </div>;
<<<<<<< HEAD
  );
}
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/listing/AIListingForm.tsx
=======
<<<<<<< HEAD
      </Button>
    </div>
  )
}
=======
      </Button>;
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from "react";

import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles} from "lucide-react";


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
<<<<<<< HEAD

import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from "lucide-react",

=======
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from "lucide-react",


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

  initialValues?: {

    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  const handleSubmit = () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."

        variant: "destructive"
      }),;
      return;
    }
    onSubmit({}
      title,
      category,
      keyFeatures,
      targetAudience;
    })
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <div className="space-y-4">
      <div className="space-y-2">

        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
        <Input"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}"
          placeholder="Enter your product or service title""
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
      </div>"
      <div className="space-y-2">"
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
        <Input"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}"
          placeholder="e.g. AI Tool, Digital Product, Service""
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
      </div>"
      <div className="space-y-2">"
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
        <Textarea"
          id="keyFeatures"
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}"
          placeholder="Briefly describe the main features or benefits""
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
          disabled={isLoading}
        />
      </div>"
      <div className="space-y-2">"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
        <Input"
          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}"
          placeholder="e.g. Developers, Marketers, Startups""
          className="bg-zion-blue border border-zion-blue-light text-white"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          disabled={isLoading}
        />
      </div>

      <Button
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
      <Button 

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;

import { Sparkles } from "lucide-react",;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface AIListingFormProps {;
  onSubmit: (formData: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;

<<<<<<< HEAD

    title?: string;
    category?: string;


export function AIListingForm(): any ({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
  const { toast } = useToast();


  const [title, setTitle] = useState(initialValues && initialValues.title || "");
  const [category, setCategory] = useState(initialValues && initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");



  const handleSubmit = () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";


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
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e && e.target.value)}

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
          onChange={(e) => setCategory(e && e.target.value)}
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
          onChange={(e) => setKeyFeatures(e && e.target.value)}


=======
    title?: string;
    category?: string;

>>>>>>> origin/cursor/delete-old-data-records-6bba
          placeholder="Briefly describe the main features or benefits";

          className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
          disabled={isLoading}
        />;
      </div>;"
      <div className="space-y-2">;"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;

<<<<<<< HEAD

=======
          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e && e.target.value)}
          placeholder="e && e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}

        />;
      </div>;

        onClick={handleSubmit}
        disabled={isLoading |!title |!category}

  const handleSubmit = () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."

        variant: "destructive"
      }),;
      return;
    }
    onSubmit({}
      title,
      category,
      keyFeatures,
      targetAudience;
    })


  return (
    <div className="space-y-4">
      <div className="space-y-2">

        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
        <Input"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}"
          placeholder="Enter your product or service title""
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
      </div>"
      <div className="space-y-2">"
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
        <Input"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}"
          placeholder="e.g. AI Tool, Digital Product, Service""
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
      </div>"
      <div className="space-y-2">"
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
        <Textarea"
          id="keyFeatures"
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}"
          placeholder="Briefly describe the main features or benefits""
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
          disabled={isLoading}
        />
      </div>"
      <div className="space-y-2">"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
        <Input"
          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}"
          placeholder="e.g. Developers, Marketers, Startups""
          className="bg-zion-blue border border-zion-blue-light text-white"
      <Button 

          disabled={isLoading}
        />
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}

import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;

import { Sparkles } from "lucide-react",;
interface AIListingFormProps {;
  onSubmit: (formData: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;


    title?: string;
    category?: string;

          placeholder="Briefly describe the main features or benefits";

          className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
          disabled={isLoading}
        />;
      </div>;"
      <div className="space-y-2">;"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;


          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;

          id="targetAudience"
          value={targetAudience}
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
>>>>>>> origin/cursor/delete-old-data-records-6bba

        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
      >
        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <>"
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content;
          </>
        )}

<<<<<<< HEAD
=======
        />;
      </div>;
      <Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}"

        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;
        {isLoading ? (;
          <>Generating Optimized Content...</>;
        ) : (;


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


import React, { useState } from './react';
import { use_toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
      </Button>;
    </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Sparkles } from './lucide-react';
interface AIListingFormProps {}
  on_submit: (form_data: {}
    title: string,
    category: string,
    key_features: string,
    target_audience: string;
  }) => void;
  is_loading: boolean,
  initial_values?: {}
    title?: string;
    category?: string;
    key_features?: string;
    target_audience?: string;
  }
}
export /**;
 * AIListingForm - Function description;
 */
function AIListingForm() {}
  const { toast } = use_toast ();"
  const [title, set_title] = useState (initial_values.title || "");"
  const [category, set_category] = useState (initial_values.category || "");"
  const [key_features, setKeyFeatures] = useState (initial_values.key_features || "");"
  const [target_audience, setTargetAudience] = useState (initial_values.target_audience || "");

;

  const handle_submit = () =>: any {
    // Check condition
if ( {) {
  $2

interface AIListingFormProps {
  // TODO: Implement
}
  onSubmit: (formData: {,
  title: string;
    category: string;,
  keyFeatures: string;
    targetAudience: string;
import React, { useState } from "react";""
import {useToast} from "@/hooks/use-toast";""
import {Button} from "@/components/ui/button";""
import {Input} from "@/components/ui/input";""
import {Textarea} from "@/components/ui/textarea";""
import {Sparkles} from "lucide-react";""
import React, { useState } from "react",""
import { useToast } from "@/hooks/use-toast",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Textarea } from "@/components/ui/textarea";""
import { Sparkles } from "lucide-react";""
import { Textarea } from "@/components/ui/textarea",""
import { Sparkles } from "lucide-react","
  // TODO: Implement
    targetAudience: string;)
  }) => void;
  isLoading: boolean;
  }) => void,
  isLoading: boolean,

<<<<<<< HEAD
=======

  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

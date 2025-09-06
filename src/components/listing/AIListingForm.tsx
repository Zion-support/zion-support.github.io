<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
return (

        disabled={isLoading || !title || !category}
        className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'>        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2";
          id="title";

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
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Key Features (Optional)">Key Features (Optional)</label>;
        <Textarea



          id="keyFeatures"
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e && e.target.value)}
          placeholder="Briefly describe the main features or benefits";
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
          disabled={isLoading}

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
=======
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from 'lucide-react'
interface AIListingFormProps {
  onSubmit: (formData: {
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string
  }) => void,
  isLoading: boolean,
import { Sparkles } from 'lucide-react'
interface AIListingFormProps {
  onSubmit: (formData: {
    title: string
    category: string
    keyFeatures: string
    targetAudience: string;
  }) => void;
  isLoading: boolean;  initialValues?: {
    title?: string
    category?: string
    keyFeatures?: string
    targetAudience?: string
  };    title: string,
    category: string,
    keyFeatures: string,
    targetAudience: string
  },) => void,
  isLoading: boolean,
    title?: string
    category?: string
    keyFeatures?: string
    targetAudience?: string
  }
export function AIListingForm({
  onSubmit,
  isLoading,
  initialValues = {},
}: AIListingFormProps) {
  const { toast } = useToast()
  const [title, setTitle] = useState(initialValues.title || '')
  const [category, setCategory] = useState(initialValues.category || '')
  const [keyFeatures, setKeyFeatures] = useState(
    initialValues.keyFeatures || ''
  )
  const [targetAudience, setTargetAudience] = useState(
    initialValues.targetAudience || ''
  )
  const handleSubmit = () => {
    if (!title || !category) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',  const [title, setTitle] = useState(initialValues.title || "")
  const [category, setCategory] = useState(initialValues.category || "")
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "")
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "")
  const handleSubmit = () => {
    if (!title || !category) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',
      return;
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from 'lucide-react'
import { Star } from 'lucide-react';

interface AIListingFormProps {
  onSubmit: (formData: {
    title: string,
    category: string,
    keyFeatures: string,
    targetAudience: string
  }) => void;
  isLoading: boolean,
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
  }
}

<<<<<<< HEAD

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) { const { toast  } = useToast(),
  const [ title, setTitle ] = useState(initialValues.title || ""),
  const [ category, setCategory ] = useState(initialValues.category || ""),
  const [ keyFeatures, setKeyFeatures ] = useState(initialValues.keyFeatures || ""),
  const [ targetAudience, setTargetAudience ] = useState(initialValues.targetAudience || ""),


  const handleSubmit = () => {
    if (!title || !category) {
      toast({
=======
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }) => void
  isLoading: boolean;  initialValues?: {
    title?: string
    category?: string
    keyFeatures?: string
    targetAudience?: string
  };    title: string
    category: string
    keyFeatures: string
    targetAudience: string
  },) => void
  isLoading: boolean
    title?: string
    category?: string
    keyFeatures?: string
    targetAudience?: string
  }
export function AIListingForm({
  onSubmit
  isLoading
  initialValues = {}
}: AIListingFormProps) {
  const { toast } = useToast()
  const [title, setTitle] = useState(initialValues.title |'')
  const [category, setCategory] = useState(initialValues.category |'')
  const [keyFeatures, setKeyFeatures] = useState(
    initialValues.keyFeatures |''
  )
  const [targetAudience, setTargetAudience] = useState(
    initialValues.targetAudience |''
  )
  const handleSubmit = () => {
    if (!title |!category) {
      toast({
      return
    }
    onSubmit({
    })
  }

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <label
          htmlFor='title'
          className='text-sm font-medium text-zion-slate-light'
        >
          Title
        </label>
        <Input
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Enter your product or service title'
          className='bg-zion-blue border border-zion-blue-light text-white'
          disabled={isLoading}        />
      </div>
      <div className='space-y-2'>
        <label
          htmlFor='category'
          className='text-sm font-medium text-zion-slate-light'
        >
          Category
        </label>
        <Input
          id='category'
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder='e.g. AI Tool, Digital Product, Service'
          className='bg-zion-blue border border-zion-blue-light text-white'
          disabled={isLoading}        />
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      });
=======
      targetAudience
    })
  },

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
import { Sparkles } from 'lucide-react'
import { Star } from 'lucide-react';

interface AIListingFormProps {
  onSubmit: (formData: {
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string
  }) => void,
  isLoading: boolean,
import { Sparkles } from 'lucide-react'
interface AIListingFormProps {
  onSubmit: (formData: {
    title: string
    category: string
    keyFeatures: string
    targetAudience: string;
  }) => void;
  isLoading: boolean;  initialValues?: {
    title?: string
    category?: string
    keyFeatures?: string
    targetAudience?: string
  };    title: string,
    category: string,
    keyFeatures: string,
    targetAudience: string
  }) => void;
  isLoading: boolean,
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string
  }
}

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return
    }

    onSubmit({
      targetAudience
    })
  },

  return (
    <div className="space-y-4">
      </div>
      <div className="space-y-2">
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
        <Input
<<<<<<< HEAD
<<<<<<< HEAD

=======
          id="title"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your product or service title"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
=======
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
          id='keyFeatures'
          value={keyFeatures}
          onChange={e => setKeyFeatures(e.target.value)}
          placeholder='Briefly describe the main features or benefits'
          className='bg-zion-blue border border-zion-blue-light text-white min-h-20'
          disabled={isLoading}        />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Title">Title</label>
        <Input
          value={title}
          on_change={e => set_title (e.target.value)}
          placeholder='Enter your product or service title';
          className='bg - zion - blue border border - zion - blue - light text - white';
          disabled={is_loading}        />;
      </div>;
      <div className='space - y-2'>;
        <label;
          html_for='category';
          className='text - sm font - medium text - zion - slate - light';
        >;
          Category;
        </label>;
        <Input;
          id='category';
          value={category}
          on_change={e => set_category (e.target.value)}
          placeholder='e.g. AI Tool, Digital Product, Service';
          className='bg - zion - blue border border - zion - blue - light text - white';
          disabled={is_loading}        />;
      </div>;
      <div className='space - y-2'>;
        <label;
          html_for='key_features';
          className='text - sm font - medium text - zion - slate - light';
        >;
          Key Features (Optional);
        </label>;
        <Textarea;
          id='key_features';
          value={key_features}
          on_change={e => setKeyFeatures (e.target.value)}
          placeholder='Briefly describe the main features or benefits';
          className='bg - zion - blue border border - zion - blue - light text - white min - h-20';
          disabled={is_loading}        />;
      </div>;
      <div className='space - y-2'>;
        <label;
          html_for='target_audience';
          className='text - sm font - medium text - zion - slate - light';
        >;
          Target Audience (Optional);
        </label>;
        <Input;
          id='target_audience';
          value={target_audience}
          on_change={e => setTargetAudience (e.target.value)}
          placeholder='e.g. Developers, Marketers, Startups';
          className='bg - zion - blue border border - zion - blue - light text - white';
          disabled={is_loading}
        />;
      </div>;
      <Button;
        on_click={handle_submit}
        disabled={is_loading || !title || !category}
        className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2'      >        className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2";
          id="title";
          value={title}
          on_change={(e) => set_title (e.target.value)}
          placeholder="Enter your product or service title";
          className="bg - zion - blue border border - zion - blue - light text - white";
          disabled={is_loading}
        />;
      </div>;
      <div className="space - y-2">;
        <label html_for="category" className="text - sm font - medium text - zion - slate - light" html_for="input - Category">Category</label>;
        <Input;
          id="category";
          value={category}


<<<<<<< HEAD
<<<<<<< HEAD
=======
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
          id='targetAudience'
          value={targetAudience}
          onChange={e => setTargetAudience(e.target.value)}
          placeholder='e.g. Developers, Marketers, Startups'
          className='bg-zion-blue border border-zion-blue-light text-white'
          disabled={isLoading}
        />
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
        className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'      >        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your product or service title"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Category">Category</label>
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
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Key Features (Optional)">Key Features (Optional)</label>
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
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Target Audience (Optional)">Target Audience (Optional)</label>
        <Input
          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
      </div>
      <Button 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles } from 'lucide-react';
interface AIListingFormProps {;
  onSubmit: (formData: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
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
  const handleSubmit = () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";
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
          placeholder="Enter your product or service title"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Category">Category</label>
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
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Key Features (Optional)">Key Features (Optional)</label>
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
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Target Audience (Optional)">Target Audience (Optional)</label>
        <Input
          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD

          placeholder="e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";

          disabled={isLoading}

=======
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
          placeholder="e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />
      </div>
      <Button
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        />;
      </div>;
      <Button;

        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
        disabled={isLoading || !title || !category}

          disabled={isLoading}
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
      >
        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
<<<<<<< HEAD
<<<<<<< HEAD

            <Sparkles className="h-4 w-4 mr-2" />

=======
            <Sparkles className='h-4 w-4 mr-2' />            Generate Optimized Content            <Sparkles className="h-4 w-4 mr-2" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            Generate Optimized Content
          </>
        )}
      </Button>
    </div>
  )
}: AIListingFormProps) {
  if (!title |!category) {
  toast ({
  return
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {"
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>)
}</Button> </div>)
}'"
}
        />;
      </div>;
      <Button
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;
        {isLoading ? (;
          <>Generating Optimized Content...</>;
        ) : (;
          <>;
            <Sparkles className='h-4 w-4 mr-2' />            Generate Optimized Content            <Sparkles className="h-4 w-4 mr-2" />;
            Generate Optimized Content;
          </>;
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) 
}</Button> </div>) 
}'";
};
}
}
}

            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content
          </>
        )}
      </Button>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD


}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          on_change={(e) => set_category (e.target.value)}
          placeholder="e.g. AI Tool, Digital Product, Service";
          className="bg - zion - blue border border - zion - blue - light text - white";
          disabled={is_loading}
        />;
      </div>;
      <div className="space - y-2">;
        <label html_for="key_features" className="text - sm font - medium text - zion - slate - light" html_for="input - Key Features (Optional)">Key Features (Optional)</label>;
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
        <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light" html_for="input - Target Audience (Optional)">Target Audience (Optional)</label>;
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
            <Sparkles className='h - 4 w - 4 mr - 2' />            Generate Optimized Content            <Sparkles className="h - 4 w - 4 mr - 2" />;
            Generate Optimized Content;
          </>)}
      </Button>;
    </div>);
}: AIListingFormProps) {
  // Check condition
if ( {) {
  $2
}
  toast ({
  return;
}/> </div> <div className="space - y-2" > <label html_for="category" className="text - sm font - medium text - zion - slate - light" >Category</label> <Input /> </div> <div className="space - y-2" > <label html_for="key_features" className="text - sm font - medium text - zion - slate - light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space - y-2" > <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light" >Target Audience (Optional) </label> <Input > {";
  is_loading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h - 4 w - 4 mr - 2" /> Generate Optimized Content </>);
}</Button> </div>);
}'";
}
}
<<<<<<< HEAD
;
=======
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

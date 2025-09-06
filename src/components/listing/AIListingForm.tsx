<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from 'lucide-react';
<<<<<<< HEAD
=======
=======

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from 'lucide-react'
import { Star } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface AIListingFormProps {
  onSubmit: (formData: {
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;
  }) => void;
<<<<<<< HEAD
  isLoading: boolean;  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  };
=======
<<<<<<< HEAD
  isLoading: boolean;
=======

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  isLoading: boolean,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
<<<<<<< HEAD
<<<<<<< HEAD
    targetAudience?: string;
  };
=======
    targetAudience?: string
  }
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function AIListingForm({
  onSubmit,
  isLoading,
  initialValues = {},
}: AIListingFormProps) {
  const { toast } = useToast();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [title, setTitle] = useState(initialValues.title || '');
  const [category, setCategory] = useState(initialValues.category || '');
  const [keyFeatures, setKeyFeatures] = useState(
    initialValues.keyFeatures || ''
  );
  const [targetAudience, setTargetAudience] = useState(
    initialValues.targetAudience || ''
  );
<<<<<<< HEAD
  const handleSubmit = () => {
    if (!title || !category) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',
=======
=======
    targetAudience?: string
  }
}


export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) { const { toast  } = useToast(),
  const [ title, setTitle ] = useState(initialValues.title || ""),
  const [ category, setCategory ] = useState(initialValues.category || ""),
  const [ keyFeatures, setKeyFeatures ] = useState(initialValues.keyFeatures || ""),
  const [ targetAudience, setTargetAudience ] = useState(initialValues.targetAudience || ""),

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [title, setTitle] = useState(initialValues.title || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "");
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const handleSubmit = () => {
    if (!title || !category) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',
=======
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      });
      return;
    }

    onSubmit({
      title,
      category,
      keyFeatures,
      targetAudience,
    });
  };

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
          disabled={isLoading}
        />
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
          disabled={isLoading}
        />
      </div>
      <div className='space-y-2'>
        <label
          htmlFor='keyFeatures'
          className='text-sm font-medium text-zion-slate-light'
        >
          Key Features (Optional)
        </label>
        <Textarea
          id='keyFeatures'
          value={keyFeatures}
          onChange={e => setKeyFeatures(e.target.value)}
          placeholder='Briefly describe the main features or benefits'
          className='bg-zion-blue border border-zion-blue-light text-white min-h-20'
          disabled={isLoading}
        />
      </div>
      <div className='space-y-2'>
        <label
          htmlFor='targetAudience'
          className='text-sm font-medium text-zion-slate-light'
        >
          Target Audience (Optional)
        </label>
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
        disabled={isLoading || !title || !category}
<<<<<<< HEAD
        className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'      >
=======
<<<<<<< HEAD
        className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'
=======
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      });
      return
    }

    onSubmit({
      title;
      category;
      keyFeatures;
      targetAudience
    })
  };


  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Title">Title</label>
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
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
<<<<<<< HEAD
            <Sparkles className='h-4 w-4 mr-2' />            Generate Optimized Content
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <Sparkles className='h-4 w-4 mr-2' />
=======
            <Sparkles className="h-4 w-4 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Sparkles className="h-4 w-4 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Generate Optimized Content
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </>
        )}
      </Button>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

}: AIListingFormProps) {;
  if (!title || !category) {;
  toast ({;
  return;
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {";
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) ;
}</Button> </div>) ;
<<<<<<< HEAD
}'"
=======
}'"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

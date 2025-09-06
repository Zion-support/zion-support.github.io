<<<<<<< HEAD
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface AIListingFormProps {
  onSubmit: (formData: {
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;
  }) => void;
  isLoading: boolean;  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;
  };
=======
=======

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from 'lucide-react';
interface AIListingFormProps {
  onSubmit: (formData: {
    title: string,
    category: string,
    keyFeatures: string,
    targetAudience: string
  },) => void,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  isLoading: boolean,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
<<<<<<< HEAD
    targetAudience?: string;
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export function AIListingForm({
  onSubmit,
  isLoading,
  initialValues = {},
}: AIListingFormProps) {
  const { toast } = useToast();
  const [title, setTitle] = useState(initialValues.title || '');
  const [category, setCategory] = useState(initialValues.category || '');
  const [keyFeatures, setKeyFeatures] = useState(
    initialValues.keyFeatures || ''
  );
  const [targetAudience, setTargetAudience] = useState(
    initialValues.targetAudience || ''
  );
  const handleSubmit = () => {
    if (!title || !category) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',
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
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',
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
<<<<<<< HEAD
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Enter your product or service title'
          className='bg-zion-blue border border-zion-blue-light text-white'
          disabled={isLoading}
=======
          id="title"
          value = {title,}
          onChange = {(e,) => setTitle(e.target.value),}
          placeholder="Enter your product or service title"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled = {isLoading,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
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
<<<<<<< HEAD
          id='category'
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder='e.g. AI Tool, Digital Product, Service'
          className='bg-zion-blue border border-zion-blue-light text-white'
          disabled={isLoading}
=======
          id="category"
          value = {category,}
          onChange = {(e,) => setCategory(e.target.value),}
          placeholder="e.g. AI Tool, Digital Product, Service"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled = {isLoading,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
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
<<<<<<< HEAD
          id='keyFeatures'
          value={keyFeatures}
          onChange={e => setKeyFeatures(e.target.value)}
          placeholder='Briefly describe the main features or benefits'
          className='bg-zion-blue border border-zion-blue-light text-white min-h-20'
          disabled={isLoading}
=======
          id="keyFeatures"
          value = {keyFeatures,}
          onChange = {(e,) => setKeyFeatures(e.target.value),}
          placeholder="Briefly describe the main features or benefits"
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
          disabled = {isLoading,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
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
<<<<<<< HEAD
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
        className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'      >
=======
=======
          id="targetAudience"
          value = {targetAudience,}
          onChange = {(e,) => setTargetAudience(e.target.value),}
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled = {isLoading,}
        />
      </div>
      <Button 
        onClick = {handleSubmit,}
        disabled = {isLoading || !title || !category,}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
            <Sparkles className='h-4 w-4 mr-2' />            Generate Optimized Content
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

}: AIListingFormProps) {;
  if (!title || !category) {;
  toast ({;
  return;
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {";
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) ;
}</Button> </div>) ;
}'"
=======
}
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

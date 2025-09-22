<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from 'lucide-react';
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx

interface AIListingFormProps {
  onSubmit: (formData: {
    title: string;
    category: string;
    keyFeatures: string;

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
      targetAudience
    })
  };


  return (
    <div className="space-y-4">
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
return (
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from 'lucide-react'

<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
<<<<<<< HEAD
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
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),

  const handleSubmit = () => {
    if (!title || !category) {
      toast({
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
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
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
        <Input
          id="category"
=======
        disabled={isLoading || !title || !category}
        className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'>        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2";",
          id="title";
        <Input id="category""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
          value={category}
          onChange={(e) = /> setCategory(e.target.value)}
          placeholder="e.g. AI Tool, Digital Product, Service""
          className="bg-zion-blue border border-zion-blue-light text-white""
          disabled={isLoading}
        />
      </div>
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
<<<<<<< HEAD
      <div className="space-y-2">
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
        <Textarea
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          id="keyFeatures"
=======
      <div className="space-y-2">"
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>"
        <Textarea
          id="keyFeatures""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}
          placeholder="Briefly describe the main features or benefits"
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
          disabled={isLoading}
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
import { Sparkles } from 'lucide-react'
=======
import { Sparkles } from 'lucide-react''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
import { Star } from 'lucide-react';
interface AIListingFormProps {
  onSubmit: (formData: {,

import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from 'lucide-react'

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
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx

export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) { const { toast  } = useToast(),
  const [ title, setTitle ] = useState(initialValues.title || ""),
  const [ category, setCategory ] = useState(initialValues.category || ""),
  const [ keyFeatures, setKeyFeatures ] = useState(initialValues.keyFeatures || ""),
  const [ targetAudience, setTargetAudience ] = useState(initialValues.targetAudience || ""),

=======
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }:,  AIListingFormProps) { const { toast  } = useToast(),
  const [ title, setTitle ] = useState(initialValues.title || ""),",
  const [ category, setCategory ] = useState(initialValues.category || ""),",
  const [ keyFeatures, setKeyFeatures ] = useState(initialValues.keyFeatures || ""),",
  const [ targetAudience, setTargetAudience ] = useState(initialValues.targetAudience || ""),"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
  const handleSubmit = () => {
    if (!title || !category) {
      toast({
        title: "Missing required fields","
        description: "Please provide at least a title and category.","
        variant: "destructive""
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
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx

  return (
    <div className="space-y-4">
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
        />
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
      </div>
      <div className="space-y-2">
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
        <Input

<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your product or service title"
          className="bg-zion-blue border border-zion-blue-light text-white"
=======
  return (
    <div className="space-y-4">"
        />
      </div>
      <div className="space-y-2">"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>"
        <Input value={title}
          onChange={(e) = /> setTitle(e.target.value)}
          placeholder="Enter your product or service title""
          className="bg-zion-blue border border-zion-blue-light text-white""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">"
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Title">Title</label>"
        <Input id="title""
    <div className='space - y-4' />;
      <div className='space - y-2'>;
        <label;
          html_for='title';
          className='text - sm font - medium text - zion - slate - light';
        >;
          Title;
        </label>;
        <Input ;
          id='title';
          value={title}
          on_change={e = /> set_title (e.target.value)}
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
        <Input ;
          id='category';
          value={category}
          on_change={e = /> set_category (e.target.value)}
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
        <Input ;
          id='target_audience';
          value={target_audience}
          on_change={e = /> setTargetAudience (e.target.value)}
          placeholder='e.g. Developers, Marketers, Startups';
          className='bg - zion - blue border border - zion - blue - light text - white';
          disabled={is_loading}
        />;
      </div>;
      <Button;
        on_click={handle_submit}
        disabled={is_loading || !title || !category}
        className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2'      >        className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2";",
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
        <Input ;
          id="category";
          value={category}
          id="targetAudience""
          value={targetAudience}
          onChange={(e) = /> setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups""
          className="bg-zion-blue border border-zion-blue-light text-white""
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles } from 'lucide-react';
interface AIListingFormProps {;
  onSubmit: (formData: {;,
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
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }:,  AIListingFormProps) {;
  const { toast } = useToast(),;,
  const [title, setTitle] = useState(initialValues.title || ""),;,
  const [category, setCategory] = useState(initialValues.category || ""),;,
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),;,
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
        <Input ;
          id="title";
          value={title}
          onChange={(e) = /> setTitle(e.target.value)}
          placeholder="Enter your product or service title""
          className="bg-zion-blue border border-zion-blue-light text-white""
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">"
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Category">Category</label>"
        <Input id="category""
          value={category}
          onChange={(e) = /> setCategory(e.target.value)}
          placeholder="e.g. AI Tool, Digital Product, Service""
          className="bg-zion-blue border border-zion-blue-light text-white""
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">"
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Key Features (Optional)">Key Features (Optional)</label>"
        <Textarea
          id="keyFeatures""
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}
          placeholder="Briefly describe the main features or benefits""
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20""
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Target Audience (Optional)">Target Audience (Optional)</label>"
        <Input id="targetAudience""
          value={targetAudience}
          onChange={(e) = /> setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;
      <Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2""
      >
        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
            <Sparkles className="h-4 w-4 mr-2" />"
            Generate Optimized Content
          </>
        )}
      </Button>
    </div>
  )
}: AIListingFormProps) {
  if (!title |!category) {
  toast ({
  return;
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {""
}}}}))
  }) => void,
  isLoading: boolean,
  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}

<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),

  const handleSubmit = () => {
    if (!title || !category) {
      toast({
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
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
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx

<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
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
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;
        <Textarea;
          id="keyFeatures";
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
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
=======
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Key Features (Optional)">Key Features (Optional)</label>
        <Textarea
          id="keyFeatures"
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
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
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
          placeholder="e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD
        />;
      </div>;
      <Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
=======

<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
        />;
      </div>;
      <Button;
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
        disabled={isLoading || !title || !category}

          disabled={isLoading}
        onClick={handleSubmit}
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx

<<<<<<< HEAD
          disabled={isLoading}
        onClick={handleSubmit}
=======

        disabled={isLoading || !title || !category}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        disabled={isLoading || !title || !category}
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
      <Button
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'
origin/cursor/automate-test-improve-and-merge-code-2533
      >
        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content
          </>
        )}
      </Button>;
    </div>;
  );
}
;

<Sparkles className='h-4 w-4 mr-2' />
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
            Generate Optimized Content
          </>
        )}
      </Button>
    </div>
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
  )
}: AIListingFormProps) {
  if (!title |!category) {
  toast ({
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx

<<<<<<< HEAD
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content
          </>
        )}
      </Button>;
    </div>;
  );
=======
  return;
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
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
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) 
}</Button> </div>) 
}'";
};
}
}
}

<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content
          </>
        )}
      </Button>;
    </div>;
  );
<<<<<<< HEAD:src_backup/components/listing/AIListingForm.tsx
}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
  return;
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {"

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx
=======
  return;
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/listing/AIListingForm.tsx
  );
}: AIListingFormProps) {;
  if (!title || !category) {;
  toast ({;
  return;
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {";
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) ;
}</Button> </div>) ;
}'"
<<<<<<< HEAD:src/components/listing/AIListingForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/listing/AIListingForm.tsx

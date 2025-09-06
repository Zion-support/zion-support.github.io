<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
=======
import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
=======
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Sparkles } from 'lucide-react'
interface AIListingFormProps {
  onSubmit: (formData: {
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string
<<<<<<< HEAD
=======
  }) => void,
  isLoading: boolean,
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

=======
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
    if (!title || !category) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD

      return

    }
    onSubmit({

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title: 'Missing required fields'
        description: 'Please provide at least a title and category.'
        variant: 'destructive',  const [title, setTitle] = useState(initialValues.title |"")
  const [category, setCategory] = useState(initialValues.category |"")
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures |"")
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience |"")
  const handleSubmit = () => {
    if (!title |!category) {
      toast({
        title: 'Missing required fields'
        description: 'Please provide at least a title and category.'
        variant: 'destructive'
=======
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      }),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      return
<<<<<<< HEAD
>>>>>>>     }
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    onSubmit({
<<<<<<< HEAD
      title
      category
      keyFeatures
      targetAudience
<<<<<<< HEAD
      targetAudience,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      title,
      category,
      keyFeatures,
<<<<<<< HEAD
      targetAudience,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      targetAudience
    })
  };

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      targetAudience
    })
  },
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
<<<<<<< HEAD
<<<<<<< HEAD

      </div>
=======
>>>>>>>       </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

      </div>
      <div className="space-y-2">
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
        <Input

          id="targetAudience"
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          id='keyFeatures'
          value={keyFeatures}
          onChange={e => setKeyFeatures(e.target.value)}
          placeholder='Briefly describe the main features or benefits'
          className='bg-zion-blue border border-zion-blue-light text-white min-h-20'
          disabled={isLoading}        />
<<<<<<< HEAD
>>>>>>>       </div>
      <div className="space-y-2">
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
        <Input
ursor/fix-website-loading-errors-and-merge-6662
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" htmlFor="input-Title">Title</label>
        <Input
          id="title"
    <div className='space - y-4'>;
      <div className='space - y-2'>;
        <label;
          html_for='title';
          className='text - sm font - medium text - zion - slate - light';
        >;
          Title;
        </label>;
        <Input;
          id='title';
>>>>>>>           value={title}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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


>>>>>>>           id="targetAudience"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

          value={title}
=======
>>>>>>>           value={title}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          id="keyFeatures"
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}
          placeholder="Briefly describe the main features or benefits"
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
          disabled={isLoading}
        />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </div>
      <div className="space-y-2">
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
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
        disabled={isLoading |!title |!category}
        className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'      >        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
          id="title"
<<<<<<< HEAD
=======
          value={title}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

          disabled={isLoading}

        onClick={handleSubmit}

        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
=======
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={isLoading}
        />
      </div>
<<<<<<< HEAD
      <Button
>>>>>>>         onClick={handleSubmit}
        disabled={isLoading |!title |!category}
        onClick={handleSubmit}

        disabled={isLoading || !title || !category}

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>         className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      <Button 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
=======
          placeholder="e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          disabled={isLoading}
<<<<<<< HEAD
        />
      </div>
      <Button
=======
        />;
      </div>;
      <Button;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        onClick={handleSubmit}
<<<<<<< HEAD
        disabled={isLoading |!title |!category}
=======
        disabled={isLoading || !title || !category}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      >
        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
            <Sparkles className='h-4 w-4 mr-2' />            Generate Optimized Content            <Sparkles className="h-4 w-4 mr-2" />
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
}/> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {"
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>)
}</Button> </div>)
}'"
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content
          </>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) 
}</Button> </div>) 
}'";
};
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content
          </>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        )}
      </Button>;
    </div>;
  );
<<<<<<< HEAD


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

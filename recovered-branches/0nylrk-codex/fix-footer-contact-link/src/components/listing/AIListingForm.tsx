
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { useState } from "react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { Textarea } from "@/components/ui/textarea",
import { Sparkles } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface AIListingFormProps {
  onSubmit: (formData: {

    title: string
    category: string
    keyFeatures: string
    targetAudience: string
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }) => void;
  isLoading: boolean

  }) => void,
  isLoading: boolean,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  initialValues?: {
=======
interface AIListingFormProps {}
  onSubmit: (formData: {}
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;
import React, { useState } from "react";"
import {useToast} from "@/hooks/use-toast";"
import {Button} from "@/components/ui/button";"
import {Input} from "@/components/ui/input";"
import {Textarea} from "@/components/ui/textarea";"
import {Sparkles} from "lucide-react";

"
import React, { useState } from "react","
import { useToast } from "@/hooks/use-toast","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input",";
import { Textarea } from "@/components/ui/textarea";"
import { Sparkles } from "lucide-react";"
import { Textarea } from "@/components/ui/textarea","
import { Sparkles } from "lucide-react",
interface AIListingFormProps {}
  onSubmit: (formData: {};
    title: string;
    category: string;
    keyFeatures: string;
    targetAudience: string;
  initialValues?: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string;
  }
}

<<<<<<< HEAD
=======

=======

<<<<<<< HEAD
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
=======

  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string
  }
}


export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleSubmit = () => {
    if (!title |!category) {
      toast({
        title: "Missing required fields"
        description: "Please provide at least a title and category."
<<<<<<< HEAD
=======
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {}
  const handleSubmit = () => {}
    if (!title |!category) {}
      toast({"
        title: "Missing required fields""
        description: "Please provide at least a title and category.""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="space-y-4">
      <div className="space-y-2">
=======


  return ("
    <div className="space-y-4">"
      <div className="space-y-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

      <Button 

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
      <Button 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          disabled={isLoading}
        />
      </div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

      <Button 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      <Button 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button 

          disabled={isLoading}
        />
      </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <Button
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
      <Button 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

      <Button 

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      <Button 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

      <Button;
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
      <Button;
"
import React, { useState } from "react",;"
import { useToast } from "@/hooks/use-toast",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Sparkles } from "lucide-react",;



=======
import { Sparkles } from "lucide-react",;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface AIListingFormProps {;
  onSubmit: (formData: {;
    title: string,;
    category: string,;
    keyFeatures: string,;
    targetAudience: string;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    title?: string;
    category?: string;
=======
import { Sparkles } from "lucide-react",;    category?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Sparkles } from "lucide-react",;    category?: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  }) => void;
  isLoading: boolean,;
  initialValues?: {;
    title?: string;
    category?: string;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { Sparkles } from "lucide-react",;    category?: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    keyFeatures?: string;



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
interface AIListingFormProps {
  // TODO: Implement
}
  onSubmit: (formData: {,
  title: string;
    category: string;,
  keyFeatures: string;
    targetAudience: string;)
  }) => void;
  isLoading: boolean;
  }) => void,
  isLoading: boolean,

  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string;
  }
}

export function AIListingForm(): any ({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
  const { toast } = useToast();          onChange={(e) => setKeyFeatures(e && e.target.value)}
=======
  const { toast } = useToast();

  const [title, setTitle] = useState(initialValues && initialValues.title || "");
  const [category, setCategory] = useState(initialValues && initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");

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

      });
      return;
    }

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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const { toast } = useToast();          onChange={(e) => setKeyFeatures(e && e.target.value)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          placeholder="Briefly describe the main features or benefits";
=======
  const { toast } = useToast();
"
  const [title, setTitle] = useState(initialValues && initialValues.title || "");"
  const [category, setCategory] = useState(initialValues && initialValues.category || "");"
  const [keyFeatures, setKeyFeatures] = useState(initialValues && initialValues.keyFeatures || "");"
  const [targetAudience, setTargetAudience] = useState(initialValues && initialValues.targetAudience || "");

  const handleSubmit = () => {;
    if (!title || !category) {;
      toast({;"
        title: "Missing required fields",;"
        description: "Please provide at least a title and category.",;"
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



  return ("
    <div className="space-y-4">;"
      <div className="space-y-2">;"
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;

        <Input"
          id="title"
          value={title}
          onChange={(e) => setTitle(e && e.target.value)}"
          placeholder="Enter your product or service title";
"
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;"
      <div className="space-y-2">;"
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;

        <Input"
          id="category"
          value={category}

          onChange={(e) => setCategory(e && e.target.value)}"
          placeholder="e && e.g. AI Tool, Digital Product, Service";"
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;"
      <div className="space-y-2">;"
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;

        <Textarea"
          id="keyFeatures"
          value={keyFeatures}

          onChange={(e) => setKeyFeatures(e && e.target.value)}"
          placeholder="Briefly describe the main features or benefits";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
          disabled={isLoading}
        />;
      </div>;"
      <div className="space-y-2">;"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Input;
          id="targetAudience";
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;
onChange={(e) => setTitle(e.target.value)}
          placeholder=&quot;Enter your product or service title&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;category&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Category</label>
        <Input
          id="category"
          value={category}
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
onChange={(e) => setCategory(e.target.value)}
          placeholder=&quot;e.g. AI Tool, Digital Product, Service&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;keyFeatures&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Key Features (Optional)</label>
        <Textarea
          id="keyFeatures"
          value={keyFeatures}
        <Textarea
          id="keyFeatures"
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e && e.target.value)}
          placeholder="Briefly describe the main features or benefits";
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20";
          disabled={isLoading}
        />;
      </div>;
      <div className="space-y-2">;
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;
onChange={(e) => setKeyFeatures(e.target.value)}
          placeholder=&quot;Briefly describe the main features or benefits&quot;
          className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-20&quot;
          disabled={isLoading}        />
      </div>
      <div className=&quot;space-y-2&quot;>
        <label htmlFor=&quot;targetAudience&quot; className=&quot;text-sm font-medium text-zion-slate-light&quot;>Target Audience (Optional)</label>
        <Input
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          id="targetAudience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e && e.target.value)}
          placeholder="e && e.g. Developers, Marketers, Startups";
          className="bg-zion-blue border border-zion-blue-light text-white";
          disabled={isLoading}

        />;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Button;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

        <Input"
          id="targetAudience"
          value={targetAudience}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <Button;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <Input
=======
      <Button;        <Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <Button;        <Input
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


        <Input"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <Input
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
        <Input
      <Button;        <Input
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          id="targetAudience"
          value={targetAudience}
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
      >
        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>"
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content;
          </>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        />;
      </div>;
      <Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}"
=======

        />;
      </div>;
      <Button
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;
        {isLoading ? (;
          <>Generating Optimized Content...</>;
        ) : (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          onChange={(e) => setTargetAudience(e.target.value)}
=======
onChange={(e) => setTargetAudience(e.target.value)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <>;
=======

          <>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Sparkles className="h-4 w-4 mr-2" />;
            Generate Optimized Content;
          </>;
        )}

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
=======

import React, { useState } from './react';'
import { use_toast } from '@/hooks / use - toast';'
import { Button } from '@/components / ui / button';'
import { Input } from '@/components / ui / input';'
import { Textarea } from '@/components / ui / textarea';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  initialValues?: {
    title?: string,
    category?: string,
    keyFeatures?: string,
    targetAudience?: string;


<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {

  const handleSubmit = () => {
    if (!title |!category) {
      toast({"
        title: "Missing required fields"","
  description: "Please provide at least a title and category."""
        variant: "destructive"")
      }),
      return;
    onSubmit({
      title,
      category,
      keyFeatures,
      targetAudience;)
    })

  },


  return ("
    <div className="space-y-4">"
</div>"
      <div className="space-y-2">"
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>"
        <Input;"
          id="title""
          value={title})
          onChange={(e) => setTitle(e.target.value)}

        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>"
          id="category""
          value={category}
          onChange={(e) => setCategory(e.target.value)}

        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>"
        <Textarea;"
          id="keyFeatures""
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}

        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>"
          id="targetAudience""
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}

      <Button;
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
      <Button;"
import React, { useState } from "react",;""
import { useToast } from "@/hooks/use-toast",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;""
import { Sparkles } from "lucide-react",;"
interface AIListingFormProps {;
  onSubmit: (formData: {;,
  title: string,;
    category: string,;
    keyFeatures: string,;
"
    <div className="space-y-4">;"
      <div className="space-y-2">;"
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;"
          value={title}
          onChange={(e) => setTitle(e && e.target.value)}

      </div>;"
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;"
          id="category";"

        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;"
          id="keyFeatures";"

        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;"
          id="targetAudience";"

          onChange={(e) => setCategory(e && e.target.value)}

          onChange={(e) => setKeyFeatures(e && e.target.value)}

          onChange={(e) => setTargetAudience(e && e.target.value)}

      </div>;


        disabled={isLoading |!title |!category}"
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2""
      >

          <>Generating Optimized Content...</>
        ) : (
          <>"
            <Sparkles className="h-4 w-4 mr-2" />"

          </>)
        )}

        />;
        disabled={isLoading || !title || !category}"
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;"

          <>Generating Optimized Content...</>;
        ) : (;
          <>;"
            <Sparkles className="h-4 w-4 mr-2" />;"

          </>;)


      ;
pr-12325
        )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </Button>;
    </div>);
  ),;}export function AIListingForm ({
  onSubmit, isLoading, initialValues = {
<<<<<<< HEAD
  
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

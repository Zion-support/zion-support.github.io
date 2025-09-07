



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


export function AIListingForm({ onSubmit, isLoading, initialValues = {} }: AIListingFormProps) {

  const handleSubmit = () => {
    if (!title |!category) {
      toast({"
        title: "Missing required fields"","
  description: "Please provide at least a title and category."""
        variant: "destructive"")
      }),
      return;
    }
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
</div>"
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>"
        <Input;"
          id="title""
          value={title})
          onChange={(e) => setTitle(e.target.value)}
</Input>
      </div>"
      <div className="space-y-2">"
</div>"
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>"
        <Input;"
          id="category""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
</Input>
      </div>"
      <div className="space-y-2">"
</div>"
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>"
        <Textarea;"
          id="keyFeatures""
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}
</Textarea>
      </div>"
      <div className="space-y-2">"
</div>"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>"
        <Input;"
          id="targetAudience""
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
</Input>
      <Button;
      <Button;
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
      <Button;
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
    targetAudience: string;)
  }) => void;
</Button>"
    <div className="space-y-4">;"
</div>"
      <div className="space-y-2">;"
</div>"
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>;"
        <Input;"
          id="title""
          value={title}
          onChange={(e) => setTitle(e && e.target.value)}
</Input>
      </div>;"
      <div className="space-y-2">;"
</div>"
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;"
        <Input;"
          id="category";"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
</Input>
      </div>;"
      <div className="space-y-2">;"
</div>"
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;"
        <Textarea;"
          id="keyFeatures";"
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e.target.value)}
</Textarea>
      </div>;"
      <div className="space-y-2">;"
</div>"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;"
        <Input;"
          id="targetAudience";"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
</Input>
      </div>;"
      <div className="space-y-2">;"
</div>"
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>;"
        <Input;"
          id="category""
          value={category}
          onChange={(e) => setCategory(e && e.target.value)}
</Input>
      </div>;"
      <div className="space-y-2">;"
</div>"
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>;"
        <Textarea;"
          id="keyFeatures""
          value={keyFeatures}
          onChange={(e) => setKeyFeatures(e && e.target.value)}
</Textarea>
      </div>;"
      <div className="space-y-2">;"
</div>"
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>;"
        <Input;"
          id="targetAudience""
          value={targetAudience}
          onChange={(e) => setTargetAudience(e && e.target.value)}
</Input>
      </div>;
      <Button;


        onClick={handleSubmit}
        disabled={isLoading |!title |!category}
        <Input;"
          id="targetAudience""
          value={targetAudience}
        onClick={handleSubmit}
        disabled={isLoading |!title |!category}"
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2""
      >
</Button>
          <>Generating Optimized Content...</>
        ) : (
          <>"
            <Sparkles className="h-4 w-4 mr-2" />"
</Sparkles>
          </>)
        )}

        />;
      </div>;
      <Button;
        onClick={handleSubmit}
        disabled={isLoading || !title || !category}"
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2">;"
</Button>
          <>Generating Optimized Content...</>;
        ) : (;
          <>;"
            <Sparkles className="h-4 w-4 mr-2" />;"
</Sparkles>
          </>;)
        )}


      </Button>;
    </div>;"
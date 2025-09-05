
import React, {_useState} from "react";

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
        title: "Missing required fields", _description: "Please provide at least a title and category.", _variant: "destructive"});
      return;
    }

    onSubmit({_title, _category, _keyFeatures, _targetAudience});
  };

  return (_<div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
        <Input
          id="title"
          value={_title}
          onChange={_(e) => setTitle(e.target.value)}
          placeholder="Enter your product or service title"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={_isLoading}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
        <Input
          id="category"
          value={_category}
          onChange={_(_e) => setCategory(e.target.value)}
          placeholder="e.g. AI Tool, Digital Product, Service"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={_isLoading}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
        <Textarea
          id="keyFeatures"
          value={_keyFeatures}
          onChange={_(_e) => setKeyFeatures(e.target.value)}
          placeholder="Briefly describe the main features or benefits"
          className="bg-zion-blue border border-zion-blue-light text-white min-h-20"
          disabled={_isLoading}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
        <Input
          id="targetAudience"
          value={_targetAudience}
          onChange={_(_e) => setTargetAudience(e.target.value)}
          placeholder="e.g. Developers, Marketers, Startups"
          className="bg-zion-blue border border-zion-blue-light text-white"
          disabled={_isLoading}
        />
      </div>
      <Button 
        onClick={_handleSubmit}
        disabled={_isLoading || !title || !category}
        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
      >
        {_isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Optimized Content
          </>
        )}
      </Button>
    </div>
  );
}

import React, {_useState} from "react";
import Skeleton from "@/components/ui/skeleton";


interface GeneratedContent {_description: string;
  tags: string[];
  suggestedPrice: {
    min: number;
    max: number;};
  keyPoints: string[];
}

interface AIListingGeneratorProps {_onApplyGenerated?: (_content: GeneratedContent) => void;
  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;
    targetAudience?: string;};
}

export function AIListingGenerator(_{_onApplyGenerated, _initialValues = {} }: AIListingGeneratorProps) {_const { toast} = useToast();
  const [title, setTitle] = useState(initialValues.title || "");
  const [category, setCategory] = useState(initialValues.category || "");
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || "");
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || "");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null);

  const _handleInputChange = (_e: {_target: { value: string} }, _field: string) => {_switch(field) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'category':
        setCategory(e.target.value);
        break;
      case 'keyFeatures':
        setKeyFeatures(e.target.value);
        break;
      case 'targetAudience':
        setTargetAudience(e.target.value);
        break;}
  };

  const _handleGenerate = async () => {_if (!title || !category) {
      toast({
        title: "Missing required fields", _description: "Please provide at least a title and category.", _variant: "destructive"});
      return;
    }

    setIsLoading(true);
    
    try {_const { data, _error} = await supabase.functions.invoke('ai-listing-generator', {_body: { title, _category, _keyFeatures, _targetAudience}
      });

      if (error) {_throw new Error(error.message);}
      
      if ((data as any)?.error) {_throw new Error((data as any).error);}

      setGeneratedContent((data as any)?.generated || null);
      toast({_title: "Content Generated", _description: "AI has created optimized listing content for you."});
    } catch (error) {_logErrorToProduction('Error generating content:', _{ data: error});
      toast({_title: "Generation Failed", _description: error instanceof Error ? error.message : "Failed to generate content. Please try again.", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };

  const _handleApply = () => {_if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: "Content Applied", _description: "The generated content has been applied to your listing."});
    }
  };

  return (_<div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, _SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
            <Input
              id="title"
              value={_title}
              onChange={_(e) => handleInputChange(e, _'title')}
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
              onChange={_(_e) => handleInputChange(e, _'category')}
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
              onChange={_(_e) => handleInputChange(e, _'keyFeatures')}
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
              onChange={_(_e) => handleInputChange(e, _'targetAudience')}
              placeholder="e.g. Developers, Marketers, Startups"
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={_isLoading}
            />
          </div>
          <Button 
            onClick={_handleGenerate}
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
        </CardContent>
      </Card>

      {_isLoading && (
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map(_(_, _i) => (
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />
              ))}
            </div>
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
            <div className="space-y-2">
              {_[...Array(3)].map(_(_, _i) => (
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {_generatedContent && !isLoading && (_<Card className="border border-zion-blue-light bg-zion-blue-dark">
          <CardHeader>
            <CardTitle className="text-white">Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
              <p className="text-white">{generatedContent.description}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {_generatedContent.tags.map((tag, _index) => (
                  <Badge key={index}>{_tag}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
              <p className="text-white">${_generatedContent.suggestedPrice.min.toFixed(2)} - ${_generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                {_generatedContent.keyPoints.map(_(point, _index) => (
                  <li key={index}>{_point}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={_handleApply}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
            >
              Apply to My Listing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
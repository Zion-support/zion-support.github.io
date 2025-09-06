interface GeneratedContent {
  description: string;
tags: string[];
suggestedPrice: {;
  min: number;
max: number ;
};
keyPoints: string[] ;
}interface AIListingGeneratorProps {;
  onApplyGenerated?: (content: GeneratedContent) => void;
initialValues?: {;
  title?: string;
category?: string;
keyFeatures?: string;
targetAudience?: string ;

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
        break;
    }
  };

  const handleGenerate = async () => {
    if (!title || !category) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide at least a title and category.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        'ai-listing-generator',
        {
          body: { title, category, keyFeatures, targetAudience },
        }
      );

      if (error) {
        throw new Error(error.message);
      }

      if ((data as any)?.error) {
        throw new Error((data as any).error);
      }

      setGeneratedContent((data as any)?.generated || null);
      toast({
        title: 'Content Generated',
        description: 'AI has created optimized listing content for you.',
      });
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error });
      toast({
        title: 'Generation Failed',
        description:
          error instanceof Error
            ? error.message
            : 'Failed to generate content. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = () => {
    if (generatedContent && onApplyGenerated) {
      onApplyGenerated(generatedContent);
      toast({
        title: 'Content Applied',
        description: 'The generated content has been applied to your listing.',
      });
    }
  };

  return (
    <div className='space-y-6'>
      <Card className='border border-zion-blue-light bg-zion-blue-dark'>
        <CardHeader>
          <CardTitle className='flex items-center text-white'>
            <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />
            AI Listing Optimizer
          </CardTitle>
          <p className='text-sm text-zion-slate-light'>
            Provide basic information and let AI generate optimized,
            SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <label
              htmlFor='title'
              className='text-sm font-medium text-zion-slate-light'
            >
              Title
            </label>
            <Input

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

          >
            {isLoading ? (
              <>Generating Optimized Content...</>
            ) : (
              <>
                <Sparkles className='h-4 w-4 mr-2' />
                Generate Optimized Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {isLoading && (
        <Card className='border border-zion-blue-light bg-zion-blue-dark overflow-hidden'>
          <CardHeader>
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />
          </CardHeader>

              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {generatedContent && !isLoading && (
        <Card className='border border-zion-blue-light bg-zion-blue-dark'>
          <CardHeader>
            <CardTitle className='text-white'>Generated Content</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div>
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
                Description
              </h3>
              <p className='text-white'>{generatedContent.description}</p>
            </div>

            <div>

                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
                Suggested Price Range
              </h3>
              <p className='text-white'>
                ${generatedContent.suggestedPrice.min.toFixed(2)} - $
                {generatedContent.suggestedPrice.max.toFixed(2)}
              </p>
            </div>

            <div>

                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button

            >
              Apply to My Listing
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
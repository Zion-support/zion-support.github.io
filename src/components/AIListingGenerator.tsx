

  const handleGenerate = async () => {
    if (!title |!category) {
      toast({

      })
    } finally {
      setIsLoading (false);
    }

  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>

=======
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
            <Input

          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
            <Input

          </div>
          <div className="space-y-2">
            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
            <Textarea

          </div>
          <div className="space-y-2">
            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
            <Input

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

      )}

      {generatedContent && !isLoading && (
        <Card className="border border-zion-blue-light bg-zion-blue-dark">
          <CardHeader>
            <CardTitle className="text-white">Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
              <p className="text-white">{generatedContent.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
            </div>

              Apply to My Listing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

break;'
case 'category': setCategory (e.target.value)
break;'
case 'keyFeatures': setKeyFeatures (e.target.value)
break;'
case 'targetAudience': const handleGenerate = async () => {
  if (!title |!category) {
            <Button;
              on_click={handle_apply}
              className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white'            >;
              Apply to My Listing;
              <ArrowRight className='ml - 2 h - 4 w - 4' />;
            </Button>;
          </CardFooter>;
        </Card>)}
    </div>);
  target: {
  value: string;
}, field: string) => {
  switch (field) {
  case 'title': set_title (e.target.value);
break;';
case 'category': set_category (e.target.value);
break;';
case 'key_features': setKeyFeatures (e.target.value);
break;';
case 'target_audience': const handle_generate = async () => {
  // Check condition
if ( {) {
  $2
}
  toast ({
  return;
}setIsLoading (true);
}catch (error) {';
  logErrorToProduction ('Error generating content:', {
<<<<<<< HEAD
  data: error
})
toast ({
}finally {
  setIsLoading (false)
}
const handleApply = () => {
  if (generatedContent && onApplyGenerated) {
  onApplyGenerated (generatedContent)
toast ({
}
<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {"
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) "
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) )
}</div> </CardContent> </Card>) "
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {
  generatedContent.description
}</p> </div> <div>) )
}</div> </div> <div>) ) "
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>)
}</div>)
}'"  )
}
  )
}

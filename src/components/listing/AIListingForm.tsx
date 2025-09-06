isLoading: boolean,

  initialValues?: {
    title?: string;
    category?: string;
    keyFeatures?: string;

  const handleSubmit = () => {
    if (!title || !category) {
      toast({

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

        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"

      >

        {isLoading ? (
          <>Generating Optimized Content...</>
        ) : (
          <>
            <Sparkles className='h-4 w-4 mr-2' />            Generate Optimized Content

            Generate Optimized Content

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

}
})
      // Check condition
if (?.error) {) {
  $2
}
        throw new Error ((data as any).error);
      setGeneratedContent ((data as any)?.generated || null);
      toast ({
        title: 'Content Generated',
        description: 'AI has created optimized listing content for you.',
      });
    } catch (error) {

export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {
  const { toast } = useToast(),
  const [title, setTitle] = useState(initialValues.title || ""),
  const [category, setCategory] = useState(initialValues.category || ""),
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),
  const [isLoading, setIsLoading] = useState(false),
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),

  const handleInputChange = (e: { target: { value: string } }, field: string) => {
    switch(field) {
      case 'title':
        setTitle(e.target.value),
        break,
      case 'category':
        setCategory(e.target.value),
      case 'keyFeatures':
        setKeyFeatures(e.target.value),
      case 'targetAudience':
        setTargetAudience(e.target.value),
        break
  },

  const handleGenerate = async () => {
    if (!title |!category) {
      toast({
        title: 'Missing required fields'
        description: 'Please provide at least a title and category.'
        variant: 'destructive'
      return
    setIsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke(
        'ai-listing-generator'
        {
          body: { title, category, keyFeatures, targetAudience }
      )
      if (error) {
        throw new Error(error.message)
      if ((data as any)?.error) {
        throw new Error((data as any).error)
      setGeneratedContent((data as any)?.generated |null)
        title: 'Content Generated'
        description: 'AI has created optimized listing content for you.'
      logErrorToProduction('Error generating content:', { data: error })
        title: 'Generation Failed'
        description:
          error instanceof Error
            ? error.message
            : 'Failed to generate content. Please try again.'
        title: "Missing required fields",
        description: "Please provide at least a title and category.",
        variant: "destructive"
      }),
;
export function AIListingGenerator({ onApplyGenerated, initialValues = {} }: AIListingGeneratorProps) {;
  const { toast } = useToast(),;
  const [title, setTitle] = useState(initialValues.title || ""),;
  const [category, setCategory] = useState(initialValues.category || ""),;
  const [keyFeatures, setKeyFeatures] = useState(initialValues.keyFeatures || ""),;
  const [targetAudience, setTargetAudience] = useState(initialValues.targetAudience || ""),;
  const [isLoading, setIsLoading] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState(null as GeneratedContent | null),;
  const handleInputChange = (e: { target: { value: string } }, field: string) => {;
    switch(field) {;
      case 'title':;
        setTitle(e.target.value),;
        break,;
      case 'category':;
        setCategory(e.target.value),;
      case 'keyFeatures':;
        setKeyFeatures(e.target.value),;
      case 'targetAudience':;
        setTargetAudience(e.target.value),;
        break;
  },;
  const handleGenerate = async () => {;
    if (!title || !category) {;
      toast({;
        title: "Missing required fields",;
        description: "Please provide at least a title and category.",;
        variant: "destructive";
      }),;
      return;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {;
      if (error) {;
        throw new Error(error.message);
      if ((data as any)?.error) {;
        throw new Error((data as any).error);

      setGeneratedContent((data as any)?.generated || null),
        title: "Content Generated",
        description: "AI has created optimized listing content for you."
      logErrorToProduction('Error generating content:', { data: error }),
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content. Please try again.",

    } finally {
      setIsLoading (false);

  return (
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
          <p className='text-sm text-zion-slate-light'>
            Provide basic information and let AI generate optimized
            SEO-friendly content for your listing
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized, SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-zion-slate-light">Title</label>
            <Input
              id='title'
              value={title}
              onChange={e => handleInputChange(e, 'title')}
              placeholder='Enter your product or service title'
              className='bg-zion-blue border border-zion-blue-light text-white'
              disabled={isLoading}            />
              id="title"
              onChange={(e) => handleInputChange(e, 'title')}
              placeholder="Enter your product or service title"
              className="bg-zion-blue border border-zion-blue-light text-white"
              disabled={isLoading}
            />

          </div>
            <label htmlFor="category" className="text-sm font-medium text-zion-slate-light">Category</label>
              id='category'
              value={category}
              onChange={e => handleInputChange(e, 'category')}
              placeholder='e.g. AI Tool, Digital Product, Service'
              id="category"
              onChange={(e) => handleInputChange(e, 'category')}
              placeholder="e.g. AI Tool, Digital Product, Service"

            <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light">Key Features (Optional)</label>
            <Textarea
              id='keyFeatures'
              value={keyFeatures}
              onChange={e => handleInputChange(e, 'keyFeatures')}
              placeholder='Briefly describe the main features or benefits'
              className='bg-zion-blue border border-zion-blue-light text-white min-h-20'
              id="keyFeatures"
              onChange={(e) => handleInputChange(e, 'keyFeatures')}
              placeholder="Briefly describe the main features or benefits"
              className="bg-zion-blue border border-zion-blue-light text-white min-h-20"

            <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light">Target Audience (Optional)</label>
              id='targetAudience'
              value={targetAudience}
              onChange={e => handleInputChange(e, 'targetAudience')}
              placeholder='e.g. Developers, Marketers, Startups'
          <Button
            onClick={handleGenerate}
            disabled={isLoading |!title |!category}
            className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2'          >
              id="targetAudience"
              onChange={(e) => handleInputChange(e, 'targetAudience')}
              placeholder="e.g. Developers, Marketers, Startups"
      setGeneratedContent((data as any)?.generated || null),;
        title: 'Missing required fields',;
        description: 'Please provide at least a title and category.',;
        variant: 'destructive',;

    setIsLoading(true);

      const { data, error } = await supabase && supabase.functions.invoke(;
        'ai-listing-generator',;
        {;
          body: { title, category, keyFeatures, targetAudience },;
      );

        throw new Error(error && error.message);

      setGeneratedContent((data as any)?.generated || null);
        title: 'Content Generated',;
        description: 'AI has created optimized listing content for you.',;
    } catch (error) {;
      logErrorToProduction('Error generating content:', { data: error });
        title: 'Generation Failed',;
        description:;
          error instanceof Error;
            ? error && error.message;
            : 'Failed to generate content. Please try again.',;
    } finally {;
      setIsLoading(false);
  };

  const handleApply = () => {;
    if (generatedContent && onApplyGenerated) {;
      onApplyGenerated(generatedContent);
        title: 'Content Applied',;
        description: 'The generated content has been applied to your listing.',;

export function AIListingGenerator({ onApplyGenerated, initialValues;

    <div className='space-y-6'>;
      <Card className='border border-zion-blue-light bg-zion-blue-dark'>;
        <CardHeader>;
          <CardTitle className='flex items-center text-white'>;
            <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />;
            AI Listing Optimizer;
          </CardTitle>;
          <p className='text-sm text-zion-slate-light'>;
            Provide basic information and let AI generate optimized,;
            SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent className='space-y-4'>;
          <div className='space-y-2'>;

            <label
              htmlFor='title'
              className='text-sm font-medium text-zion-slate-light'>;
              Title;
            </label>;
              placeholder='Enter your product or service title';
              className='bg-zion-blue border border-zion-blue-light text-white';
              disabled={isLoading}            />;
          </div>;
              htmlFor='category'
              Category;
              placeholder='e && e.g. AI Tool, Digital Product, Service';
              htmlFor='keyFeatures'
              Key Features (Optional);
              placeholder='Briefly describe the main features or benefits';
              className='bg-zion-blue border border-zion-blue-light text-white min-h-20';
              htmlFor='targetAudience'
              Target Audience (Optional);
              placeholder='e && e.g. Developers, Marketers, Startups';
            />;

            disabled={isLoading || !title || !category}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white mt-2"
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
            <Skeleton className='h-8 w-3/4 bg-zion-blue-light/20' />
          <CardContent className='space-y-4'>
            <Skeleton className='h-32 w-full bg-zion-blue-light/20' />
            <div className='flex flex-wrap gap-2'>
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className='h-6 w-16 bg-zion-blue-light/20' />
              ))}
            <Skeleton className='h-8 w-1/3 bg-zion-blue-light/20' />;
              {[...Array(3)].map((_, i) => (;
                <Skeleton
    <div className='space - y-6'>;
      <Card className='border border - zion - blue - light bg - zion - blue - dark'>;
          <CardTitle className='flex items - center text - white'>;
            <Sparkles className='h - 5 w - 5 mr - 2 text - zion - cyan' />;
          <p className='text - sm text - zion - slate - light'>;
            Provide basic information and let AI generate optimized,
            SEO - friendly content for your listing;
        <CardContent className='space - y-4'>;
          <div className='space - y-2'>;
            <label;
              html_for='title';
              className='text - sm font - medium text - zion - slate - light';
            >;
            <Input;
              id='title';
              on_change={e => handleInputChange (e, 'title')}
              className='bg - zion - blue border border - zion - blue - light text - white';
              disabled={is_loading}            />;
              html_for='category';
              id='category';
              on_change={e => handleInputChange (e, 'category')}
              placeholder='e.g. AI Tool, Digital Product, Service';
              html_for='key_features';
            <Textarea;
              id='key_features';
              value={key_features}
              on_change={e => handleInputChange (e, 'key_features')}
              className='bg - zion - blue border border - zion - blue - light text - white min - h-20';
              html_for='target_audience';
              id='target_audience';
              value={target_audience}
              on_change={e => handleInputChange (e, 'target_audience')}
              placeholder='e.g. Developers, Marketers, Startups';
              disabled={is_loading}
          <Button;
            on_click={handle_generate}
            disabled={is_loading || !title || !category}
            className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white mt - 2'          >;
            {is_loading ? (
              <>Generating Optimized Content...</>) : (
              <>;
                <Sparkles className='h - 4 w - 4 mr - 2' />;
                Generate Optimized Content;
              </>)}
          </Button>;
        </CardContent>;
      </Card>;
      {is_loading && (
        <Card className='border border - zion - blue - light bg - zion - blue - dark overflow - hidden'>;
            <Skeleton className='h - 8 w - 3/4 bg - zion - blue - light / 20' />;
            <Skeleton className='h - 32 w - full bg - zion - blue - light / 20' />;
            <div className='flex flex - wrap gap - 2'>;
              {[...Array (5)].map ((_, i) => (
                <Skeleton key={i} className='h - 6 w - 16 bg - zion - blue - light / 20' />))}
            <Skeleton className='h - 8 w - 1/3 bg - zion - blue - light / 20' />;
              {[...Array (3)].map ((_, i) => (
                <Skeleton;
                  key={i}
                  className='h-6 w-full bg-zion-blue-light/20'
                />              ))}

            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />
            <div className="flex flex-wrap gap-2">
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />

      {generatedContent && !isLoading && (
            <CardTitle className="text-white">Generated Content</CardTitle>
            <div>
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>
              <p className="text-white">{generatedContent.description}</p>

              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
                Suggested Price Range
              </h3>
              <p className='text-white'>
                ${generatedContent.suggestedPrice.min.toFixed(2)} - $
                {generatedContent.suggestedPrice.max.toFixed(2)}

      {generatedContent && !isLoading && (;
            <CardTitle className='text-white'>Generated Content</CardTitle>;
            <div>;
              <h3 className='text-sm font-medium text-zion-slate-light mb-2'>;
                Description;
              </h3>;
              <p className='text-white'>{generatedContent && generatedContent.description}</p>;

                Tags;
              <div className='flex flex-wrap gap-2'>;
                {generatedContent && generatedContent.tags.map((tag, index) => (                  <Badge key={index}>{tag}</Badge>;

              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Suggested Price Range</h3>
              <p className="text-white">${generatedContent.suggestedPrice.min.toFixed(2)} - ${generatedContent.suggestedPrice.max.toFixed(2)}</p>
                Key Selling Points
              <ul className='list-disc pl-5 text-white space-y-1'>
                {generatedContent.keyPoints.map((point, index) => (                  <li key={index}>{point}</li>
              </ul>
          <CardFooter>
              onClick={handleApply}
              className='w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white'            >

              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Key Selling Points</h3>
              <ul className="list-disc pl-5 text-white space-y-1">
                {generatedContent.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>

                Suggested Price Range;
              <p className='text-white'>;
                ${generatedContent && generatedContent.suggestedPrice.min && min.toFixed(2)} - $;
                {generatedContent && generatedContent.suggestedPrice.max && max.toFixed(2)}

                Key Selling Points;
              <ul className='list-disc pl-5 text-white space-y-1'>;
                {generatedContent && generatedContent.keyPoints.map((point, index) => (                  <li key={index}>{point}</li>;
        </Card>)}
      {generated_content && !is_loading && (
            <CardTitle className='text - white'>Generated Content</CardTitle>;
              <h3 className='text - sm font - medium text - zion - slate - light mb - 2'>;
              <p className='text - white'>{generated_content.description}</p>;
                {generated_content.tags.map ((tag, index) => (                  <Badge key={index}>{tag}</Badge>))}
              <p className='text - white'>;
                ${generated_content.suggested_price.min.to_fixed (2)} - $;
                {generated_content.suggested_price.max.to_fixed (2)}
              <ul className='list - disc pl - 5 text - white space - y-1'>;
                {generated_content.key_points.map ((point, index) => (                  <li key={index}>{point}</li>))}
              </ul>;
          <CardFooter>;

              className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"

              Apply to My Listing
              <ArrowRight className="ml-2 h-4 w-4" />
          </CardFooter>

  value: string ;
}, field: string) => {;
  switch (field) {;
  case 'title': setTitle (e.target.value);

break;'
case 'category': setCategory (e.target.value)
case 'keyFeatures': setKeyFeatures (e.target.value)
case 'targetAudience': const handleGenerate = async () => {
              on_click={handle_apply}
              className='w - full bg - gradient - to - r from - zion - cyan to - zion - cyan - dark hover:from - zion - cyan - light hover:to - zion - cyan text - white'            >;
              Apply to My Listing;
              <ArrowRight className='ml - 2 h - 4 w - 4' />;
          </CardFooter>;
    </div>);
  target: {
  value: string;
}, field: string) => {
  switch (field) {
  case 'title': set_title (e.target.value);
break;';
case 'category': set_category (e.target.value);
case 'key_features': setKeyFeatures (e.target.value);
case 'target_audience': const handle_generate = async () => {
if ( {) {
}setIsLoading (true);
}catch (error) {';
  logErrorToProduction ('Error generating content:', {

  target: {;

  case 'title': setTitle (e && e.target.value);
case 'category': setCategory (e && e.target.value);
case 'keyFeatures': setKeyFeatures (e && e.target.value);
case 'targetAudience': const handleGenerate = async () => {;
  toast ({;
  logErrorToProduction ('Error generating content:', {;
  data: error ;

}finally {;
  setIsLoading (false) ;

  onApplyGenerated (generatedContent);

<CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <label htmlFor="title" className="text-sm font-medium text-zion-slate-light" >Title</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="category" className="text-sm font-medium text-zion-slate-light" >Category</label> <Input /> </div> <div className="space-y-2" > <label htmlFor="keyFeatures" className="text-sm font-medium text-zion-slate-light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space-y-2" > <label htmlFor="targetAudience" className="text-sm font-medium text-zion-slate-light" >Target Audience (Optional) </label> <Input > {";
  isLoading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h-4 w-4 mr-2" /> Generate Optimized Content </>) ";
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" /> </CardHeader>) ) ;
}</div> </CardContent> </Card>) ";
}<CardHeader> <CardTitle className="text-white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space-y-4" > <div> <h3 className="text-sm font-medium text-zion-slate-light mb-2" >Description</h3> <p className="text-white" > {;
  generatedContent && generatedContent.description ;
}</p> </div> <div>) ) ;
}</div> </div> <div>) ) ";
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml-2 h-4 w-4" /> </Button> </CardFooter> </Card>) ;
}</div>) ;
}'"  );

  data: error;
}finally {

<CardHeader> <CardTitle className="flex items - center text - white" > <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" /> AI Listing Optimizer </CardTitle> </p> </CardHeader> <CardContent className="space - y-4" > <div className="space - y-2" > <label html_for="title" className="text - sm font - medium text - zion - slate - light" >Title</label> <Input /> </div> <div className="space - y-2" > <label html_for="category" className="text - sm font - medium text - zion - slate - light" >Category</label> <Input /> </div> <div className="space - y-2" > <label html_for="key_features" className="text - sm font - medium text - zion - slate - light" >Key Features (Optional) </label> <Textarea /> </div> <div className="space - y-2" > <label html_for="target_audience" className="text - sm font - medium text - zion - slate - light" >Target Audience (Optional) </label> <Input > {";
  is_loading ? (<>Generating Optimized Content...</>) : (<> <Sparkles className="h - 4 w - 4 mr - 2" /> Generate Optimized Content </>) ";
}</Button> </CardContent> </Card> <CardHeader> <Skeleton className="h - 8 w - 3/4 bg - zion - blue - light / 20" /> </CardHeader>) );
}<CardHeader> <CardTitle className="text - white" >Generated Content</CardTitle> </CardHeader> <CardContent className="space - y-4" > <div> <h3 className="text - sm font - medium text - zion - slate - light mb - 2" >Description</h3> <p className="text - white" > {
  generated_content.description;
}</p> </div> <div>) );
}</ul> </div> </CardContent> <CardFooter> <Button > Apply to My Listing <ArrowRight className="ml - 2 h - 4 w - 4" /> </Button> </CardFooter> </Card>);
}</div>);

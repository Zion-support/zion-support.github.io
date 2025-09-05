 interface GeneratedContent {
  description: string;
tags: string[];
suggestedPrice: {
  min: number;
max: number 
};
keyPoints: string[] 
}interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void;
initialValues?: {
  title?: string;
category?: string;
keyFeatures?: string;
targetAudience?: string 
}
}export function AIListingGenerator ({
  onApplyGenerated, initialValues = {
  
}
}: AIListingGeneratorProps) {
  const {
  toast 
}= useToast ();
const [isLoading, setIsLoading] = useState (false);
const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null> (null);
const handleGenerate = async ({
  title;
category;
keyFeatures;
targetAudience 
}: {
  title: string;
category: string;
keyFeatures: string;
targetAudience: string 
}) => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase.functions.invoke ('ai-listing-generator', {
  body: {
  title, category, keyFeatures, targetAudience 
}
});
if (error) {
  throw new Error (error.message) 
}if (data.error) {
  throw new Error (data.error) 
}setGeneratedContent (data.generated);
toast ({
  
}finally {
  setIsLoading (false) 
}
};
const handleApply = () => {
  if (generatedContent && onApplyGenerated) {
  onApplyGenerated (generatedContent);
toast ({
  
}
};
return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized, SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm onSubmit= {
  handleGenerate 
}isLoading= {
  isLoading 
}initialValues= {
  initialValues 
}/> </CardContent> </Card> {
  isLoading && <LoadingContentSkeleton /> 
}{
  generatedContent && !isLoading && (<GeneratedContentDisplay content= {
  generatedContent 
}onApply= {
  handleApply 
}/>) 
}</div>) 
}
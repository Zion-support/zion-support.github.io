import React, { useState } from "react",;
import { useToast } from "@/hooks/use-toast";,
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";,
import { Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";,
import { AIListingForm } from "./AIListingForm";,
import { GeneratedContentDisplay } from "./GeneratedContentDisplay";,
import { LoadingContentSkeleton } from "./LoadingContentSkeleton";
import { logErrorToProduction } from '@/utils/productionLogger';
interface GeneratedContent {
max: number;
}
<<<<<<< HEAD
keyPoints: string[];
}
interface AIListingGeneratorProps {
initialValues?: {
title?: string;
category?: string;
keyFeatures?: string;
targetAudience?: string,
=======
}
}
  keyPoints: string[]
}
interface AIListingGeneratorProps {initialValues?: {
    title?: string;
    category?: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
    keyFeatures?: string;}
    targetAudience?: string}
}
return (
<<<<<<< HEAD
<div className="space-y-6">
<Card className="border border-zion-blue-light bg-zion-blue-dark">
<CardHeader>
<CardTitle className="flex items-center text-white">
<Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
AI Listing Optimizer;
</CardTitle>
<p className="text-sm text-zion-slate-light">
Provide basic information and let AI generate optimized SEO-friendly content for your listing;
</p>
</CardHeader>
<CardContent>
<AIListingForm,
onSubmit = {handleGenerate,}
isLoading = {isLoading,}
initialValues = {initialValues,}
/>
</CardContent>
</Card>
{isLoading && <LoadingContentSkeleton />}
{generatedContent && !isLoading && (
<GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
)}
</div>
)
}: AIListingGeneratorProps) {
const {
toast,
}= useToast ()
const [isLoading, setIsLoading] = useState (false)
const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null> (null)
const handleGenerate = async ({
title;
category;
keyFeatures,
targetAudience,
}: {
title: string,
=======
    <div className="space-y-6">
      <Card className="border border-zion-blue-light bg-zion-blue-dark">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
            AI Listing Optimizer
          </CardTitle>
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized SEO-friendly content for your listing
          </p>
        </CardHeader>
        <CardContent>
          <AIListingForm
onSubmit = {handleGenerate}
            isLoading = {isLoading}
            initialValues = {initialValues}
          />
        </CardContent>
      </Card>
      {isLoading && <LoadingContentSkeleton />}
      {generatedContent && !isLoading && (
        <GeneratedContentDisplay content={generatedContent} onApply={handleApply} />
      )}
    </div>
  )
}: AIListingGeneratorProps) {const {
  toast}= useToast ()
const [isLoading, setIsLoading] = useState (false)
const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null> (null)
const handleGenerate = async ({title,
category
keyFeatures,
targetAudience}: {
  title: string,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
category: string,
keyFeatures: string;
targetAudience: string;
<<<<<<< HEAD
}) => {
setIsLoading (true)
try {
const {
data error,
}= await supabase.functions.invoke ('ai-listing-generator', {
body: {
title category  keyFeatures targetAudience,
})
=======
}) => {setIsLoading (true)
try {
  const {
  data error}= await supabase.functions.invoke ('ai-listing-generator', {body: {
  title category  keyFeatures targetAudience})
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
if (error) {
throw new Error (error.message)
}if (data && (data as any) .error) {
throw new Error ( (data as any) .error)
}setGeneratedContent ( (data as any) ?.generated |null)
toast ({
}catch (error) {';
logErrorToProduction ('Error generating content:', {
data: error;
})
toast ({
}finally {
setIsLoading (false)
}
const handleApply: any = () => {
if (generatedContent && onApplyGenerated) {
onApplyGenerated (generatedContent)
toast ({
}
<<<<<<< HEAD
return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm onSubmit= {
handleGenerate,
}isLoading= {
isLoading,
}initialValues= {
initialValues,
}/> </CardContent> </Card> {
isLoading && <LoadingContentSkeleton />
}{
generatedContent && !isLoading && (<GeneratedContentDisplay content= {
generatedContent,
}onApply= {
handleApply,
}/>)
=======
return (<div className="space-y-6" > <Card className="border border-zion-blue-light bg-zion-blue-dark" > <CardHeader> <CardTitle className="flex items-center text-white" > <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" /> AI Listing Optimizer </CardTitle> <p className="text-sm text-zion-slate-light" > Provide basic information and let AI generate optimized SEO-friendly content for your listing </p> </CardHeader> <CardContent> <AIListingForm onSubmit= {handleGenerate}isLoading= {isLoading}initialValues= {initialValues}/> </CardContent> </Card> {
  isLoading && <LoadingContentSkeleton />
}{generatedContent && !isLoading && (<GeneratedContentDisplay content= {
  generatedContent}onApply= {handleApply}/>)
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}</div>)
}'";
}}}}))
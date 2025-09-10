
import React, { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from 'lucide-react'
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from 'next/router';
import {logErrorToProduction} from '@/utils/productionLogger';
import React, { useState, useEffect } from 'react;
import { Header } from "@/components/Header;
import { Button } from @/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select;
import { Textarea } from @/components/ui/textarea";
import { Input } from "@/components/ui/input;
import { Switch } from @/components/ui/switch";
import { Label } from "@/components/ui/label;
import { Tabs, TabsContent, TabsList, TabsTrigger } from @/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card;
import { toast } from sonner";
import { Loader2 } from lucide-react'
import { supabase } from "@/integrations/supabase/client;
import { useAuth } from @/hooks/useAuth";
import { ScrollArea } from "@/components/ui/scroll-area;
import { useRouter } from 'next/router;
import {logErrorToProduction} from @/utils/productionLogger';
export default function ContentGenerator() {

  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [contentType, setContentType] = useState<'blog' | 'newsletter' | 'serviceDescription' | 'faq'>('blog');
  const [customPrompt, setCustomPrompt] = useState('');
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [autoPublish, setAutoPublish] = useState(false);
  const [includeImage, setIncludeImage] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewContent, setPreviewContent] = useState<any>(null);
  const [testEmail, setTestEmail] = useState('');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login?redirect=/content-generator")
    }
  }, [user, isLoading, router]);

  const generateContent = async () => {
    setIsGenerating(true);
    setPreviewContent(null);
    
    try {
      const keywordsArray = keywords.split().map(k => k.trim()).filter(k => k.length > 0);
      const { data, error } = await supabase.functions.invoke('generate-seo-content', {
        body: {
          contentType;
          userPrompt: customPrompt || topic, // Use customPrompt if available, else topic
          keywords: keywordsArray,
          // autoPublish and includeImage are not explicitly used by 'generate-seo-content'
          // but we can leave them here, the backend will ignore them if not needed.
          autoPublish;
          includeImage: contentType === 'blog' ? includeImage : false
        }
      });
      
      if (error) throw error;
      
      setPreviewContent(data), // Expecting { generatedContent: "..." }
      toast.success(`Content for "${contentType}" generated successfully!`)
    } catch (error) {
      logErrorToProduction('Error generating content:', { data: error }),
      toast.error("Failed to generate content. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  };

  const sendTestNewsletter = async () => {
    if (!testEmail) {
      toast.error("Please enter a test email address");
      return
    }
    
    if (!previewContent) {
      toast.error("Generate newsletter content first");
      return
    }
    
    try {
      const { data, error } = await supabase.functions.invoke('send-newsletter', {
        body: {
          subject: previewContent.subject,
          previewText: previewContent.previewText,
          body: previewContent.body,
          testMode: true,
          testEmail
        }
      });
      
      if (error) throw error;
      
      toast.success(`Test newsletter sent to ${testEmail}!`)
    } catch (error) {
      logErrorToProduction('Error sending test newsletter:', { data: error }),
      toast.error("Failed to send test newsletter. Please try again.")
    }
  };


      <div className="min-h-screen bg-zion-blue py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8">Content Generator</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="bg-zion-blue-dark border border-zion-blue-light">
      <div className="min-h-screen bg-zion-blue py-12>
        <div className=container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8>Content Generator</h1>
          
          <div className=grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1>
              <Card className=bg-zion-blue-dark border border-zion-blue-light">


                  <div className="space-y-2">
                    <Label htmlFor="customPrompt" className="text-white">Detailed Instructions / Custom Prompt (Optional)</Label>

                  
                  <div className="space-y-2">
                    <Label htmlFor="customPrompt" className="text-white">Detailed Instructions / Custom Prompt (Optional)</Label>

                  {contentType === 'blog' && (

                  
                  {contentType === 'blog' && (

                      
                      <div className="flex items-center justify-between">
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>
                        <Switch
                          id="includeImage"


                  {contentType === 'newsletter' && (
                    <div className="space-y-2">
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>

                  
                  {contentType === 'newsletter' && (
                    <div className="space-y-2">
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>

            <div className="lg:col-span-2">
              <Card className="bg-zion-blue-dark border border-zion-blue-light h-full">

            
            <div className="lg:col-span-2">
              <Card className="bg-zion-blue-dark border border-zion-blue-light h-full">
    </>
:src_backup/pages/ContentGenerator.tsx

    </>
  )
}


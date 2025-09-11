

import React, { useState } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Textarea } from "@/components/ui/textarea",
import { Input } from "@/components/ui/input",
import { Switch } from "@/components/ui/switch",
import { Label } from "@/components/ui/label",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { toast } from "sonner",
import { Loader2 } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
export default function ContentGenerator() {
=======
=======
  const { user, isLoading } = useAuth();

  const navigate = useNavigate();
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');
  const [customPrompt, setCustomPrompt] = useState('');
  const [topic, setTopic] = useState('');
  const [autoPublish, setAutoPublish] = useState(false);
  const [includeImage, setIncludeImage] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewContent, setPreviewContent] = useState<any>(null);
  const [testEmail, setTestEmail] = useState('');

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoading && !user) {

=======


=======
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('generate-content', {;
      
      if (error) throw error,
      
      setPreviewContent(data),
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`)
    } catch (error) {
      console.error("Error generating content:", error),
      toast.error("Failed to generate content. Please try again.")
    } finally {
      setIsGenerating(false)
    }

=======
  }
  },
  const sendTestNewsletter = async () => {
    if (!testEmail) {
      toast.error("Please enter a test email address");
      return
    }
    if (!previewContent) {
      toast.error("Generate newsletter content first");
      return

  };

  const sendTestNewsletter = async () => {
    if (!testEmail) {
      toast.error("Please enter a test email address"),
      return
    }
    if (!previewContent) {
      toast.error("Generate newsletter content first"),
      return
    }
    try {
      const { data, error } = await supabase.functions.invoke('send-newsletter', {
        body: {
          subject: previewContent.subject
          previewText: previewContent.previewText
          body: previewContent.body
          testMode: true
          testEmail
        }
      });
      if (error) throw error;
=======
==============
=======


=======      }),;
      if (error) throw error,;
      setPreviewContent(data),;
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {;
      console.error("Error generating content:", error),;
      toast.error("Failed to generate content. Please try again.");
    } finally {;
      setIsGenerating(false);
    }
  },;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const sendTestNewsletter = async () => {;
    if (!testEmail) {;
      toast && toast.error("Please enter a test email address");
      return;
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    if (!previewContent) {;
      toast && toast.error("Generate newsletter content first");
      return;
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('send-newsletter', {;
        body: {;
          subject: previewContent && previewContent.subject,;
          previewText: previewContent && previewContent.previewText,;
          body: previewContent && previewContent.body,;
          testMode: true,;
          testEmail;
        }

      
      if (error) throw error,

  const sendTestNewsletter = async () => {;
    if (!testEmail) {;
      toast.error("Please enter a test email address"),;
      return;
    }
;
    if (!previewContent) {;
      toast.error("Generate newsletter content first"),;
      return;
    }
;
    try {;
      const { data, error } = await supabase.functions.invoke('send-newsletter', {;
        body: {;
          subject: previewContent.subject,;
          previewText: previewContent.previewText,;
          body: previewContent.body,;
          testMode: true,;
          testEmail;
        }
      }),
=======
=======      }),



  },

      if (error) throw error;

import React, { useState } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { Button } from "@/components/ui/button",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Textarea } from "@/components/ui/textarea",;
import { Input } from "@/components/ui/input",;
import { Switch } from "@/components/ui/switch",;
import { Label } from "@/components/ui/label",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { toast } from "sonner",;
import { Loader2 } from "lucide-react",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { useNavigate } from "react-router-dom",;
;
export default function ContentGenerator() {;
  const { user, isLoading } = useAuth(),;
  const navigate = useNavigate(),;
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog'),;
  const [customPrompt, setCustomPrompt] = useState(''),;
  const [topic, setTopic] = useState(''),;
  const [autoPublish, setAutoPublish] = useState(false),;
  const [includeImage, setIncludeImage] = useState(true),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [previewContent, setPreviewContent] = useState<any>(null),;
  const [testEmail, setTestEmail] = useState(''),;
;
  // Redirect if not logged in;
  React.useEffect(() => {;
    if (!isLoading && !user) {;
      toast.error("You must be logged in to access this page"),;
      navigate("/login?redirect=/content-generator"),;
    }
  }, [user, isLoading, navigate]),;
;
  const generateContent = async () => {;
    setIsGenerating(true),;
    setPreviewContent(null),;
    ;
    try {;
      const { data, error } = await supabase.functions.invoke('generate-content', {;
        body:{;
          contentType,;
          prompt:customPrompt || undefined,;
          topic:topic || undefined,;
          autoPublish,;
          includeImage:contentType === 'blog' ? includeImage :false;
        }
      }),;
      ;
      if (error) throw error,;
      ;
      setPreviewContent(data),;
      toast.success(`${contentType === 'blog' ? 'Blog post' :'Newsletter'} generated successfully!`),;
    } catch (error) {;
      console.error("Error generating content:", error),;
      toast.error("Failed to generate content. Please try again."),;
    } finally {;
      setIsGenerating(false),;
    }
  },;
;
  const sendTestNewsletter = async () => {;
    if (!testEmail) {;
      toast.error("Please enter a test email address"),;
      return,;
    }
    ;
    if (!previewContent) {;
      toast.error("Generate newsletter content first"),;
      return,;
    }
    ;
    try {;
      const { data, error } = await supabase.functions.invoke('send-newsletter', {;
        body:{;
          subject:previewContent.subject,;
          previewText:previewContent.previewText,;
          body:previewContent.body,;
          testMode:true,;
          testEmail;
        }
      }),;
      ;
      if (error) throw error,;
      ;
      toast.success(`Test newsletter sent to ${testEmail}!`),;
    } catch (error) {;
      console.error("Error sending test newsletter:", error),;
      toast.error("Failed to send test newsletter. Please try again."),;
    }
  },;
;
  // Check if user is still loading;
  if (isLoading) {;
    return (;
=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  // Check if user is still loading;
  if (isLoading) {;
    return (
  // Check if user is still loading
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">
          <div className="animate-pulse text-white">Loading...</div>
        </div>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8">Content Generator</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="bg-zion-blue-dark border border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="text-white">Content Settings</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Configure what type of content you want to generate.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contentType" className="text-white">Content Type</Label>
                    <Select value={contentType} onValueChange={(value) => setContentType(value as 'blog' | 'newsletter')}>
                      <SelectTrigger id="contentType" className="bg-zion-blue border border-zion-blue-light text-white">
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                        <SelectItem value="blog" className="text-white">Blog Post</SelectItem>
                        <SelectItem value="newsletter" className="text-white">Email Newsletter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topic" className="text-white">Topic (Optional)</Label>
=======
=======    );
  }
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      }),;
      if (error) throw error,;
      toast.success(`Test newsletter sent to ${testEmail}!`);
    } catch (error) {;
      console.error("Error sending test newsletter:", error);
      toast.error("Failed to send test newsletter. Please try again.");
    }
  };
  // Check if user is still loading;
  if (isLoading) {;
    return (;
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="animate-pulse text-white">Loading...</div>;
        </div>;
        <Footer />;
      </>;
    );
  }
;
  return (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12">;
        <div className="container mx-auto px-4">;
          <h1 className="text-3xl font-bold text-white mb-8">Content Generator</h1>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            <div className="lg:col-span-1">;
              <Card className="bg-zion-blue-dark border border-zion-blue-light">;
                <CardHeader>;
                  <CardTitle className="text-white">Content Settings</CardTitle>;
                  <CardDescription className="text-zion-slate-light">;
                    Configure what type of content you want to generate.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent className="space-y-6">;
                  <div className="space-y-2">;
                    <Label htmlFor="contentType" className="text-white">Content Type</Label>;
                    <Select value={contentType} onValueChange={(value) => setContentType(value as 'blog' | 'newsletter')}>;
                      <SelectTrigger id="contentType" className="bg-zion-blue border border-zion-blue-light text-white">;
                        <SelectValue placeholder="Select content type" />;
                      </SelectTrigger>;
                      <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                        <SelectItem value="blog" className="text-white">Blog Post</SelectItem>;
                        <SelectItem value="newsletter" className="text-white">Email Newsletter</SelectItem>;
                      </SelectContent>;
                    </Select>;
                  </div>;
                  <div className="space-y-2">;
                    <Label htmlFor="topic" className="text-white">Topic (Optional)</Label>;                    <Input
                      id="topic"
                      placeholder={contentType === 'blog' ? "e && e.g., Hiring AI Freelancers" : "e && e.g., May Platform Updates"}
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      value={topic}

                      onChange={(e) => setTopic(e && e.target.value)}
                    />;
                  </div>;

                  <div className="space-y-2">;
                    <Label htmlFor="customPrompt" className="text-white">Custom Prompt (Optional)</Label>;

                      onChange={(e) => setCustomPrompt(e && e.target.value)}
                    />;
                  </div>;

                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;
                    </>;
                  )}

                  


=======
                    </>
                  )}
                                    {contentType === 'newsletter' && (
                    <div className="space-y-2">
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>
=======

                  {contentType === 'newsletter' && (;
                    <div className="space-y-2">;
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                      <Input
                        id="testEmail"
                        type="email"
                        placeholder="your@email && email.com"
                        className="bg-zion-blue border border-zion-blue-light text-white"
                        value={testEmail}
                        onChange={(e) => setTestEmail(e && e.target.value)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

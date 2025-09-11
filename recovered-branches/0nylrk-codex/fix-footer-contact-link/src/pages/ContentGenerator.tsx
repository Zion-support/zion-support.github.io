
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {toast} from "sonner";
import {Loader2} from "lucide-react";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useNavigate} from "react-router-dom";
export default function ContentGenerator() {;
<<<<<<< HEAD
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { ScrollArea } from "@/components/ui/scroll-area",
import { useNavigate } from "react-router-dom",
export default function ContentGenerator() {
  const { user, isLoading } = useAuth(),
  const navigate = useNavigate(),
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog'),
  const [customPrompt, setCustomPrompt] = useState(''),
  const [topic, setTopic] = useState(''),
  const [autoPublish, setAutoPublish] = useState(false),
  const [includeImage, setIncludeImage] = useState(true),
  const [isGenerating, setIsGenerating] = useState(false),
  const [previewContent, setPreviewContent] = useState<any>(null),
  const [testEmail, setTestEmail] = useState(''),
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoading && !user) {
<<<<<<< HEAD
<<<<<<< HEAD
      toast.error("You must be logged in to access this page"),
      navigate("/login?redirect=/content-generator")
    }
  }, [user, isLoading, navigate]);
  const generateContent = async () => {
    setIsGenerating(true);
    setPreviewContent(null);
    try {
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: {
          contentType
          prompt: customPrompt |undefined
          topic: topic |undefined
          autoPublish;
          includeImage: contentType === 'blog' ? includeImage : false
        }
      });
      if (error) throw error;
      setPreviewContent(data);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast.error("You must be logged in to access this page");
      navigate("/login?redirect=/content-generator")


=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Redirect if not logged in;
  React && React.useEffect(() => {;
    if (!isLoading && !user) {;
      toast && toast.error("You must be logged in to access this page");
      navigate("/login?redirect=/content-generator");
    }
  }, [user, isLoading, navigate]);
<<<<<<< HEAD
<<<<<<< HEAD
  const generateContent = async () => {;
    setIsGenerating(true);
    setPreviewContent(null);
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('generate-content', {;
  // Redirect if not logged in;
  React.useEffect(() => {;
    if (!isLoading && !user) {;
      toast.error("You must be logged in to access this page"),;
      navigate("/login?redirect=/content-generator");
    }
  }, [user, isLoading, navigate]),;
  const generateContent = async () => {;
    setIsGenerating(true),;
    setPreviewContent(null),;
    try {;
      const { data, error } = await supabase.functions.invoke('generate-content', {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const generateContent = async () => {;
    setIsGenerating(true);
    setPreviewContent(null);

    try {;
      const { data, error } = await supabase && supabase.functions.invoke('generate-content', {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        body: {;
          contentType,;
          prompt: customPrompt || undefined,;
          topic: topic || undefined,;
<<<<<<< HEAD
<<<<<<< HEAD
      });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          autoPublish;
          includeImage: contentType === 'blog' ? includeImage : false;
        }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (error) throw error;
=======
      if (error) throw error;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setPreviewContent(data);
      toast && toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {;
      console && console.error("Error generating content:", error);
      toast && toast.error("Failed to generate content. Please try again.");
    } finally {;
      setIsGenerating(false);
    }

<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
      if (error) throw error,
      
      setPreviewContent(data),

          autoPublish,;
          includeImage: contentType === 'blog' ? includeImage : false;
        }
      }),
=======
      }),



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      if (error) throw error,
      
      setPreviewContent(data),
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`)
    } catch (error) {
      console.error("Error generating content:", error),
      toast.error("Failed to generate content. Please try again.")
    } finally {
      setIsGenerating(false)
    }
<<<<<<< HEAD

  },


=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const sendTestNewsletter = async () => {
    if (!testEmail) {
      toast.error("Please enter a test email address");
      return
    }
    if (!previewContent) {
      toast.error("Generate newsletter content first");
      return

  };

<<<<<<< HEAD


<<<<<<< HEAD
  }
  },

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }),;
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
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const sendTestNewsletter = async () => {;
    if (!testEmail) {;
      toast && toast.error("Please enter a test email address");
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!previewContent) {;
      toast && toast.error("Generate newsletter content first");
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('send-newsletter', {;
        body: {;
          subject: previewContent && previewContent.subject,;
          previewText: previewContent && previewContent.previewText,;
          body: previewContent && previewContent.body,;
          testMode: true,;
          testEmail;
        }

<<<<<<< HEAD
<<<<<<< HEAD

      
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }),



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      if (error) throw error,
      
      toast.success(`Test newsletter sent to ${testEmail}!`)
    } catch (error) {
      console.error("Error sending test newsletter:", error),
      toast.error("Failed to send test newsletter. Please try again.")
    }
<<<<<<< HEAD
<<<<<<< HEAD
      });
      if (error) throw error;
=======
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

      if (error) throw error;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast && toast.success(`Test newsletter sent to ${testEmail}!`);
    } catch (error) {;
      console && console.error("Error sending test newsletter:", error);
      toast && toast.error("Failed to send test newsletter. Please try again.");
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }

  // Check if user is still loading;
  if (isLoading) {;
    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
          <div className="animate-pulse text-white">Loading...</div>;
        </div>;
        <Footer />;
      </>;
<<<<<<< HEAD
<<<<<<< HEAD
    ),;
  }
  }
  },

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
  }
  return (

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Input
                      id="topic"
                      placeholder={contentType === 'blog' ? "e.g., Hiring AI Freelancers" : "e.g., May Platform Updates"}
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customPrompt" className="text-white">Custom Prompt (Optional)</Label>
                    <Textarea
                      id="customPrompt"
                      placeholder="Enter a custom prompt for the AI..."
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]"
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                    />
                  </div>
                  {contentType === 'blog' && (
                    <>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="autoPublish" className="text-white">Auto-Publish</Label>
                        <Switch
                          id="autoPublish"
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>
                        <Switch
                          id="includeImage"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }),;
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
<<<<<<< HEAD
<<<<<<< HEAD
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12">;
        <div className="container mx-auto px-4">;
          <h1 className="text-3xl font-bold text-white mb-8">Content Generator</h1>;
<<<<<<< HEAD
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                      onChange={(e) => setTopic(e && e.target.value)}
                    />;
                  </div>;
                  <div className="space-y-2">;
                    <Label htmlFor="customPrompt" className="text-white">Custom Prompt (Optional)</Label>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <div className="space-y-2">;
                    <Label htmlFor="topic" className="text-white">Topic (Optional)</Label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    <Input
                      id="topic"
                      placeholder={contentType === 'blog' ? "e && e.g., Hiring AI Freelancers" : "e && e.g., May Platform Updates"}
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      value={topic}

                      onChange={(e) => setTopic(e && e.target.value)}
                    />;
                  </div>;

                  <div className="space-y-2">;
                    <Label htmlFor="customPrompt" className="text-white">Custom Prompt (Optional)</Label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Textarea
                      id="customPrompt"
                      placeholder="Enter a custom prompt for the AI..."
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]"
                      value={customPrompt}
<<<<<<< HEAD
<<<<<<< HEAD
                      onChange={(e) => setCustomPrompt(e && e.target.value)}
                    />;
                  </div>;
                  ;
                  <div className="space-y-2">;
                    <Label htmlFor="topic" className="text-white">Topic (Optional)</Label>;
                    <Input;
                      id="topic";
                      placeholder={contentType === 'blog' ? "e.g., Hiring AI Freelancers" : "e.g., May Platform Updates"}
                      className="bg-zion-blue border border-zion-blue-light text-white";
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />;
                  </div>;
                  <div className="space-y-2">;
                    <Label htmlFor="customPrompt" className="text-white">Custom Prompt (Optional)</Label>;
                    <Textarea;
                      id="customPrompt";
                      placeholder="Enter a custom prompt for the AI...";
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]";
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                    />;
                  </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      onChange={(e) => setCustomPrompt(e && e.target.value)}
                    />;
                  </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {contentType === 'blog' && (;
                    <>;
                      <div className="flex items-center justify-between">;
                        <Label htmlFor="autoPublish" className="text-white">Auto-Publish</Label>;
<<<<<<< HEAD
<<<<<<< HEAD
                        <Switch;
                          id="autoPublish";
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
                        <Switch;
                          id="autoPublish";
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        <Switch
                          id="autoPublish"
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        />;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>;
                        <Switch;
                          id="includeImage";
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className="flex items-center justify-between">
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>
                        />;
                      </div>;
                      ;
                      <div className="flex items-center justify-between">;
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>;
                        <Switch;
                          id="includeImage";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        />
                      </div>
<<<<<<< HEAD
                      <div className="flex items-center justify-between">
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>
=======
                        />;
                      </div>;

                      <div className="flex items-center justify-between">;
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                        <Switch
                          id="includeImage"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;
                    </>;
                  )}

<<<<<<< HEAD
                  ;
                  {contentType === 'newsletter' && (;
                    <div className="space-y-2">;
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>;
                      <Input;
                        id="testEmail";
                        type="email";
                        placeholder="your@email.com";
                        className="bg-zion-blue border border-zion-blue-light text-white";
                        value={testEmail}
                        onChange={(e) => setTestEmail(e.target.value)}
=======

                  


=======
                    </>
                  )}
                  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />;
                    </div>;
                  )}
                </CardContent>;
                <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Button;
                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                  >;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button
                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {isGenerating ? (;
                      <>;
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                        Generating...;
                      </>;
<<<<<<< HEAD
<<<<<<< HEAD
                    ) :(;
                      <>Generate {contentType === 'blog' ? 'Blog Post' :'Newsletter'}</>;
                    )}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ) : (;
                      <>Generate {contentType === 'blog' ? 'Blog Post' : 'Newsletter'}</>;
                    )}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Button>;
                </CardFooter>;
              </Card>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="lg:col-span-2">;
              <Card className="bg-zion-blue-dark border border-zion-blue-light h-full">;
                <CardHeader>;
                  <CardTitle className="text-white">Content Preview</CardTitle>;
                  <CardDescription className="text-zion-slate-light">;
                    Generated content will appear here.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  {isGenerating ? (;
                    <div className="flex flex-col items-center justify-center py-12">;
                      <Loader2 className="h-8 w-8 animate-spin text-zion-purple mb-4" />;
                      <p className="text-zion-slate-light">Generating content...</p>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                  ) :previewContent ? (;
=======
                  ) : previewContent ? (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  ) : previewContent ? (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    contentType === 'blog' ? (;
                      <div className="space-y-4">;
                        <Tabs defaultValue="preview" className="w-full">;
                          <TabsList className="bg-zion-blue-light/30 w-full">;
                            <TabsTrigger value="preview">Preview</TabsTrigger>;
                            <TabsTrigger value="markdown">Markdown</TabsTrigger>;
                            <TabsTrigger value="metadata">Metadata</TabsTrigger>;
                          </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
                          ;
                          <TabsContent value="preview" className="pt-4">;
                            <ScrollArea className="h-[500px] pr-4">;
                              <div className="space-y-4">;
                                <h2 className="text-2xl font-bold text-white">{previewContent.title}</h2>;
                                <p className="text-zion-slate-light">{previewContent.metaDescription}</p>;
                                <div ;
                                  className="prose prose-invert max-w-none";
                                  dangerouslySetInnerHTML={{ ;
                                    __html:previewContent.body;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          <TabsContent value="preview" className="pt-4">;
                            <ScrollArea className="h-[500px] pr-4">;
                              <div className="space-y-4">;
                                <h2 className="text-2xl font-bold text-white">{previewContent && previewContent.title}</h2>;
                                <p className="text-zion-slate-light">{previewContent && previewContent.metaDescription}</p>;
                                <div
                                  className="prose prose-invert max-w-none"
                                  dangerouslySetInnerHTML={{ 
                                    __html: previewContent && previewContent.body
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                      .replace(/^#{1,6}\s+(.+)$/gm, "<h$1>$2</h$1>");
                                      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
                                      .replace(/\*(.+?)\*/g, "<em>$1</em>");
                                      .replace(/^-\s+(.+)$/gm, "<li>$1</li>");
                                      .replace(/\n\n/g, "<br><br>");
                                  }}
                                />;
                              </div>;
                            </ScrollArea>;
                          </TabsContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                          ;
                          <TabsContent value="markdown" className="pt-4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;
                                {previewContent.body}
                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;
                          ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          <TabsContent value="markdown" className="pt-4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;
                                {previewContent && previewContent.body}
                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <TabsContent value="metadata" className="pt-4">;
                            <div className="space-y-4">;
                              <div>;
                                <h3 className="text-white font-semibold mb-1">Title</h3>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                <p className="text-zion-slate-light">{previewContent && previewContent.title}</p>;
                              </div>;

                              <div>;
                                <h3 className="text-white font-semibold mb-1">Meta Description</h3>;
                                <p className="text-zion-slate-light">{previewContent && previewContent.metaDescription}</p>;
                              </div>;

                              <div>;
                                <h3 className="text-white font-semibold mb-1">Tags</h3>;
                                <div className="flex flex-wrap gap-2">;
                                  {previewContent && previewContent.tags.map((tag: string, index: number) => (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                    <span
                                      key={index}
                                      className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan">;
                                      {tag}
<<<<<<< HEAD
<<<<<<< HEAD
                                <p className="text-zion-slate-light">{previewContent.title}</p>;
                              </div>;
                              ;
                              <div>;
                                <h3 className="text-white font-semibold mb-1">Meta Description</h3>;
                                <p className="text-zion-slate-light">{previewContent.metaDescription}</p>;
                              </div>;
                              ;
                              <div>;
                                <h3 className="text-white font-semibold mb-1">Tags</h3>;
                                <div className="flex flex-wrap gap-2">;
                                  {previewContent.tags.map((tag:string, index:number) => (;
                                    <span ;
                                      key={index}
                                      className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan";
                                    >;                                      {tag}
                                    </span>;
                                  ))}
                                </div>;
                              </div>;
                              ;
                              {previewContent.tweetSummary && (;
                                <div>;
                                  <h3 className="text-white font-semibold mb-1">Tweet Summary</h3>;
                                  <p className="text-zion-slate-light">{previewContent.tweetSummary}</p>;
                                </div>;
                              )}
                              ;
                              {previewContent.imagePrompt && (;
                                <div>;
                                  <h3 className="text-white font-semibold mb-1">Image Prompt</h3>;
                                  <p className="text-zion-slate-light">{previewContent.imagePrompt}</p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                    </span>;
                                  ))}

                                </div>;
                              </div>;

                              {previewContent && previewContent.tweetSummary && (;
                                <div>;
                                  <h3 className="text-white font-semibold mb-1">Tweet Summary</h3>;
                                  <p className="text-zion-slate-light">{previewContent && previewContent.tweetSummary}</p>;
                                </div>;
                              )}

                              {previewContent && previewContent.imagePrompt && (;
                                <div>;
                                  <h3 className="text-white font-semibold mb-1">Image Prompt</h3>;
                                  <p className="text-zion-slate-light">{previewContent && previewContent.imagePrompt}</p>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                </div>;
                              )}
                            </div>;
                          </TabsContent>;
                        </Tabs>;
                      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                    ) :(;
=======
                    ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="space-y-4">;
                        <Tabs defaultValue="preview" className="w-full">;
                          <TabsList className="bg-zion-blue-light/30 w-full">;
                            <TabsTrigger value="preview">Preview</TabsTrigger>;
                            <TabsTrigger value="html">HTML</TabsTrigger>;
                          </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
                          ;
                          <TabsContent value="preview" className="pt-4">;
                            <div className="bg-white rounded-lg p-6 text-black">;
                              <h2 className="text-xl font-bold">{previewContent.subject}</h2>;
                              <p className="text-gray-500 text-sm mt-2">{previewContent.previewText}</p>;
                              <div className="border-t border-gray-200 my-4"></div>;
                              <div ;
                                className="prose max-w-none";
                                dangerouslySetInnerHTML={{ __html:previewContent.body }}
                              />;
                              <div className="mt-6">;
                                <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
                                  {previewContent.cta || "Visit Zion Marketplace"}
                                </Button>;
                              </div>;
                            </div>;
                            ;
                            <div className="mt-4 flex justify-end">;
                              <Button;
                                onClick={sendTestNewsletter}
                                disabled={!testEmail}
                                className="bg-zion-blue-light hover:bg-zion-blue text-white";
                              >;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          <TabsContent value="preview" className="pt-4">;
                            <div className="bg-white rounded-lg p-6 text-black">;
                              <h2 className="text-xl font-bold">{previewContent && previewContent.subject}</h2>;
                              <p className="text-gray-500 text-sm mt-2">{previewContent && previewContent.previewText}</p>;
                              <div className="border-t border-gray-200 my-4"></div>;
                              <div
                                className="prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: previewContent && previewContent.body }}
                              />;
                              <div className="mt-6">;
                                <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
                                  {previewContent && previewContent.cta || "Visit Zion Marketplace"}
                                </Button>;
                              </div>;
                            </div>;

                            <div className="mt-4 flex justify-end">;
                              <Button
                                onClick={sendTestNewsletter}
                                disabled={!testEmail}
                                className="bg-zion-blue-light hover:bg-zion-blue text-white">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                                Send Test to {testEmail || "your email"}
                              </Button>;
                            </div>;
                          </TabsContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                          ;
                          <TabsContent value="html" className="pt-4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;
                                {previewContent.body}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          <TabsContent value="html" className="pt-4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;
                                {previewContent && previewContent.body}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;
                        </Tabs>;
                      </div>;
                    );
<<<<<<< HEAD
<<<<<<< HEAD
                        <svg
                          xmlns="http://www && www.w3.org/2000/svg"
                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />
                      </div>
                    </>
                  )}
                  
                  {contentType === 'newsletter' && (
                    <div className="space-y-2">
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>
                      <Input
                        id="testEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-zion-blue border border-zion-blue-light text-white"
                        value={testEmail}
                        onChange={(e) => setTestEmail(e.target.value)}
                      />
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>Generate {contentType === 'blog' ? 'Blog Post' : 'Newsletter'}</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="lg:col-span-2">
              <Card className="bg-zion-blue-dark border border-zion-blue-light h-full">
                <CardHeader>
                  <CardTitle className="text-white">Content Preview</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Generated content will appear here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-zion-purple mb-4" />
                      <p className="text-zion-slate-light">Generating content...</p>
                    </div>
                  ) : previewContent ? (
                    contentType === 'blog' ? (
                      <div className="space-y-4">
                        <Tabs defaultValue="preview" className="w-full">
                          <TabsList className="bg-zion-blue-light/30 w-full">
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="markdown">Markdown</TabsTrigger>
                            <TabsTrigger value="metadata">Metadata</TabsTrigger>
                          </TabsList>
                          <TabsContent value="preview" className="pt-4">
                            <ScrollArea className="h-[500px] pr-4">
                              <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white">{previewContent.title}</h2>
                                <p className="text-zion-slate-light">{previewContent.metaDescription}</p>
                                <div
                                  className="prose prose-invert max-w-none"
                                  dangerouslySetInnerHTML={{
                                    __html: previewContent.body
                                      .replace(/^#{1,6}\s+(.+)$/gm, "<h$1>$2</h$1>")
                                      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                                      .replace(/\*(.+?)\*/g, "<em>$1</em>")
                                      .replace(/^-\s+(.+)$/gm, "<li>$1</li>")
                                      .replace(/\n\n/g, "<br><br>")
                                  }}
                                />
                              </div>
                            </ScrollArea>
                          </TabsContent>
                          <TabsContent value="markdown" className="pt-4">
                            <ScrollArea className="h-[500px]">
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">
                                {previewContent.body}
                              </pre>
                            </ScrollArea>
                          </TabsContent>
                          <TabsContent value="metadata" className="pt-4">
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-white font-semibold mb-1">Title</h3>
                                <p className="text-zion-slate-light">{previewContent.title}</p>
                              </div>
                              <div>
                                <h3 className="text-white font-semibold mb-1">Meta Description</h3>
                                <p className="text-zion-slate-light">{previewContent.metaDescription}</p>
                              </div>
                              <div>
                                <h3 className="text-white font-semibold mb-1">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                  {previewContent.tags.map((tag: string, index: number) => (
                                    <span
                                      key={index}
                                      className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              {previewContent.tweetSummary && (
                                <div>
                                  <h3 className="text-white font-semibold mb-1">Tweet Summary</h3>
                                  <p className="text-zion-slate-light">{previewContent.tweetSummary}</p>
                                </div>
                              )}
                              {previewContent.imagePrompt && (
                                <div>
                                  <h3 className="text-white font-semibold mb-1">Image Prompt</h3>
                                  <p className="text-zion-slate-light">{previewContent.imagePrompt}</p>
                                </div>
                              )}
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Tabs defaultValue="preview" className="w-full">
                          <TabsList className="bg-zion-blue-light/30 w-full">
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="html">HTML</TabsTrigger>
                          </TabsList>
                          <TabsContent value="preview" className="pt-4">
                            <div className="bg-white rounded-lg p-6 text-black">
                              <h2 className="text-xl font-bold">{previewContent.subject}</h2>
                              <p className="text-gray-500 text-sm mt-2">{previewContent.previewText}</p>
                              <div className="border-t border-gray-200 my-4"></div>
                              <div
                                className="prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: previewContent.body }}
                              />
                              <div className="mt-6">
                                <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                                  {previewContent.cta |"Visit Zion Marketplace"}
                                </Button>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button
                                onClick={sendTestNewsletter}
                                disabled={!testEmail}
                                className="bg-zion-blue-light hover:bg-zion-blue text-white"
                              >
                                Send Test to {testEmail |"your email"}
                              </Button>
                            </div>
                          </TabsContent>
                          <TabsContent value="html" className="pt-4">
                            <ScrollArea className="h-[500px]">
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">
                                {previewContent.body}
                              </pre>
                            </ScrollArea>
                          </TabsContent>
                        </Tabs>
                      </div>
                    )
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ) : (;
                    <div className="flex flex-col items-center justify-center py-12 text-center">;
                      <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4">;

                        <svg
                          xmlns="http://www && www.w3.org/2000/svg"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
<<<<<<< HEAD
<<<<<<< HEAD
                  ) :(;
                    <div className="flex flex-col items-center justify-center py-12 text-center">;
                      <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4">;
                        <svg;
                          xmlns="http://www.w3.org/2000/svg";
                          width="24";
                          height="24";
                          viewBox="0 0 24 24";
                          fill="none";
                          stroke="currentColor";
                          strokeWidth="2";
                          strokeLinecap="round";
                          strokeLinejoin="round";
                          className="h-8 w-8 text-zion-purple";
                        >;
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />;
=======
                          className="h-8 w-8 text-zion-purple">;
                          <path d="M14 && M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7 && 2V7.5L14.5 2z" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                          className="h-8 w-8 text-zion-purple">;
                          <path d="M14 && M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7 && 2V7.5L14.5 2z" />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <polyline points="14 2 14 8 20 8" />;
                          <path d="M12 18v-6" />;
                          <path d="M8 15h8" />;
                        </svg>;
                      </div>;
                      <h3 className="text-white font-medium mb-2">No Content Generated Yet</h3>;
                      <p className="text-zion-slate-light max-w-md">;
                        Use the settings panel to configure your content and click "Generate" to create AI-powered content.;
                      </p>;
                    </div>;
                  )}
<<<<<<< HEAD

import React, { useState } from 'react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { Button } from '@/components / ui / button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Textarea } from '@/components / ui / textarea';
import { Input } from '@/components / ui / input';
import { Switch } from '@/components / ui / switch';
import { Label } from '@/components / ui / label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { toast } from './sonner';
import { Loader2 } from './lucide-react';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { ScrollArea } from '@/components / ui / scroll - area';
import { use_navigate } from './react-router-dom';
export default /**
 * ContentGenerator - Function description
 */
function ContentGenerator() {
  const { user, is_loading } = use_auth ();
  const navigate = use_navigate ();
  const [content_type, setContentType] = useState<'blog' | 'newsletter'>('blog');
  const [custom_prompt, setCustomPrompt] = useState ('');
  const [topic, set_topic] = useState ('');
  const [auto_publish, setAutoPublish] = useState (false);
  const [include_image, setIncludeImage] = useState (true);
  const [is_generating, setIsGenerating] = useState (false);
  const [preview_content, setPreviewContent] = useState < any>(null);
  const [test_email, setTestEmail] = useState ('');
;
  // Redirect if not logged in;
  React.useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("You must be logged in to access this page");
      navigate ("/login?redirect=/content - generator");
    }
  }, [user, is_loading, navigate]);
;
  const generate_content = async () => {
    setIsGenerating (true);
    setPreviewContent (null);
;
    try {
      const { data, error } = await supabase.functions.invoke ('generate - content', {
        body: {
          content_type,
          prompt: custom_prompt || undefined,
          topic: topic || undefined,
          auto_publish;
          include_image: content_type === 'blog' ? include_image : false;
        }
      });
;
      // Check condition
if (throw error) {
  $2
}
      setPreviewContent (data);
      toast.success (`${content_type === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {
      console.error ("Error generating content:", error);
      toast.error ("Failed to generate content. Please try again.");
    } finally {
      setIsGenerating (false);
    }
  }
;
  const sendTestNewsletter = async () => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("Please enter a test email address");
      return;
    }
    // Check condition
if ( {) {
  $2
}
      toast.error ("Generate newsletter content first");
      return;
    }
    try {
      const { data, error } = await supabase.functions.invoke ('send - newsletter', {
        body: {
          subject: preview_content.subject,
          preview_text: preview_content.preview_text,
          body: preview_content.body,
          test_mode: true,
          test_email;
        }
      });
;
      // Check condition
if (throw error) {
  $2
}
      toast.success (`Test newsletter sent to ${test_email}!`);
    } catch (error) {
      console.error ("Error sending test newsletter:", error);
      toast.error ("Failed to send test newsletter. Please try again.");
    }
  }
;
  // Check if user is still loading;
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <Header />;
        <div className="min - h-screen bg - zion - blue flex items - center justify - center">;
          <div className="animate - pulse text - white">Loading...</div>;
        </div>;
        <Footer />;
      </>);
  }
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue py - 12">;
        <div className="container mx - auto px - 4">;
          <h1 className="text - 3xl font - bold text - white mb - 8">Content Generator</h1>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
            <div className="lg:col - span - 1">;
              <Card className="bg - zion - blue - dark border border - zion - blue - light">;
                <CardHeader>;
                  <CardTitle className="text - white">Content Settings</CardTitle>;
                  <CardDescription className="text - zion - slate - light">;
                    Configure what type of content you want to generate.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent className="space - y-6">;
                  <div className="space - y-2">;
                    <Label html_for="content_type" className="text - white">Content Type</Label>;
                    <Select value={content_type} onValueChange={(value) => setContentType (value as 'blog' | 'newsletter')}>;
                      <SelectTrigger id="content_type" className="bg - zion - blue border border - zion - blue - light text - white">;
                        <SelectValue placeholder="Select content type" />;
                      </SelectTrigger>;
                      <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;
                        <SelectItem value="blog" className="text - white">Blog Post</SelectItem>;
                        <SelectItem value="newsletter" className="text - white">Email Newsletter</SelectItem>;
                      </SelectContent>;
                    </Select>;
                  </div>;
                  <div className="space - y-2">;
                    <Label html_for="topic" className="text - white">Topic (Optional)</Label>;
                    <Input;
                      id="topic";
                      placeholder={content_type === 'blog' ? "e.g., Hiring AI Freelancers" : "e.g., May Platform Updates"}
                      className="bg - zion - blue border border - zion - blue - light text - white";
                      value={topic}
                      on_change={(e) => set_topic (e.target.value)}
                    />;
                  </div>;
                  <div className="space - y-2">;
                    <Label html_for="custom_prompt" className="text - white">Custom Prompt (Optional)</Label>;
                    <Textarea;
                      id="custom_prompt";
                      placeholder="Enter a custom prompt for the AI...";
                      className="bg - zion - blue border border - zion - blue - light text - white min - h-[100px]";
                      value={custom_prompt}
                      on_change={(e) => setCustomPrompt (e.target.value)}
                    />;
                  </div>;
                  {content_type === 'blog' && (
                    <>;
                      <div className="flex items - center justify - between">;
                        <Label html_for="auto_publish" className="text - white">Auto - Publish</Label>;
                        <Switch;
                          id="auto_publish";
                          checked={auto_publish}
                          onCheckedChange={setAutoPublish}
                        />;
                      </div>;
                      <div className="flex items - center justify - between">;
                        <Label html_for="include_image" className="text - white">Generate Image Prompt</Label>;
                        <Switch;
                          id="include_image";
                          checked={include_image}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;
                    </>)}
                  {content_type === 'newsletter' && (
                    <div className="space - y-2">;
                      <Label html_for="test_email" className="text - white">Test Email</Label>;
                      <Input;
                        id="test_email";
                        type="email";
                        placeholder="your@email.com";
                        className="bg - zion - blue border border - zion - blue - light text - white";
                        value={test_email}
                        on_change={(e) => setTestEmail (e.target.value)}
                      />;
                    </div>)}
                </CardContent>;
                <CardFooter>;
                  <Button;
                    on_click={generate_content}
                    disabled={is_generating}
                    className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                  >;
                    {is_generating ? (
                      <>;
                        <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                        Generating...;
                      </>) : (
                      <>Generate {content_type === 'blog' ? 'Blog Post' : 'Newsletter'}</>)}
                  </Button>;
                </CardFooter>;
              </Card>;
            </div>;
            <div className="lg:col - span - 2">;
              <Card className="bg - zion - blue - dark border border - zion - blue - light h - full">;
                <CardHeader>;
                  <CardTitle className="text - white">Content Preview</CardTitle>;
                  <CardDescription className="text - zion - slate - light">;
                    Generated content will appear here.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  {is_generating ? (
                    <div className="flex flex - col items - center justify - center py - 12">;
                      <Loader2 className="h - 8 w - 8 animate - spin text - zion - purple mb - 4" />;
                      <p className="text - zion - slate - light">Generating content...</p>;
                    </div>) : preview_content ? (
                    content_type === 'blog' ? (
                      <div className="space - y-4">;
                        <Tabs default_value="preview" className="w - full">;
                          <TabsList className="bg - zion - blue - light / 30 w - full">;
                            <TabsTrigger value="preview">Preview</TabsTrigger>;
                            <TabsTrigger value="markdown">Markdown</TabsTrigger>;
                            <TabsTrigger value="metadata">Metadata</TabsTrigger>;
                          </TabsList>;
                          <TabsContent value="preview" className="pt - 4">;
                            <ScrollArea className="h-[500px] pr - 4">;
                              <div className="space - y-4">;
                                <h2 className="text - 2xl font - bold text - white">{preview_content.title}</h2>;
                                <p className="text - zion - slate - light">{preview_content.meta_description}</p>;
                                <div;
                                  className="prose prose - invert max - w-none";
                                  dangerouslySetInnerHTML={{
                                    __html: preview_content.body;
                                      .replace (/^#{1, 6}\s+(.+)$/gm, "<h$1>$2</h$1>");
                                      .replace (/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
                                      .replace (/\*(.+?)\*/g, "<em>$1</em>");
                                      .replace (/^-\s+(.+)$/gm, "<li>$1</li>");
                                      .replace (/\n\n / g, "<br><br>");
                                  }}
                                />;
                              </div>;
                            </ScrollArea>;
                          </TabsContent>;
                          <TabsContent value="markdown" className="pt - 4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg - zion - blue whitespace - pre - wrap p - 4 rounded - md text - zion - slate - light overflow - auto">;
                                {preview_content.body}
                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;
                          <TabsContent value="metadata" className="pt - 4">;
                            <div className="space - y-4">;
                              <div>;
                                <h3 className="text - white font - semibold mb - 1">Title</h3>;
                                <p className="text - zion - slate - light">{preview_content.title}</p>;
                              </div>;
                              <div>;
                                <h3 className="text - white font - semibold mb - 1">Meta Description</h3>;
                                <p className="text - zion - slate - light">{preview_content.meta_description}</p>;
                              </div>;
                              <div>;
                                <h3 className="text - white font - semibold mb - 1">Tags</h3>;
                                <div className="flex flex - wrap gap - 2">;
                                  {preview_content.tags.map ((tag: string, index: number) => (
                                    <span;
                                      key={index}
                                      className="bg - zion - blue - light px - 2 py - 1 rounded - md text - xs text - zion - cyan";
                                    >;
                                      {tag}
                                    </span>))}
                                </div>;
                              </div>;
                              {preview_content.tweet_summary && (
                                <div>;
                                  <h3 className="text - white font - semibold mb - 1">Tweet Summary</h3>;
                                  <p className="text - zion - slate - light">{preview_content.tweet_summary}</p>;
                                </div>)}
                              {preview_content.image_prompt && (
                                <div>;
                                  <h3 className="text - white font - semibold mb - 1">Image Prompt</h3>;
                                  <p className="text - zion - slate - light">{preview_content.image_prompt}</p>;
                                </div>)}
                            </div>;
                          </TabsContent>;
                        </Tabs>;
                      </div>) : (
                      <div className="space - y-4">;
                        <Tabs default_value="preview" className="w - full">;
                          <TabsList className="bg - zion - blue - light / 30 w - full">;
                            <TabsTrigger value="preview">Preview</TabsTrigger>;
                            <TabsTrigger value="html">HTML</TabsTrigger>;
                          </TabsList>;
                          <TabsContent value="preview" className="pt - 4">;
                            <div className="bg - white rounded - lg p - 6 text - black">;
                              <h2 className="text - xl font - bold">{preview_content.subject}</h2>;
                              <p className="text - gray - 500 text - sm mt - 2">{preview_content.preview_text}</p>;
                              <div className="border - t border - gray - 200 my - 4"></div>;
                              <div;
                                className="prose max - w-none";
                                dangerouslySetInnerHTML={{ __html: preview_content.body }}
                              />;
                              <div className="mt - 6">;
                                <Button className="bg - zion - purple hover:bg - zion - purple - dark text - white">;
                                  {preview_content.cta || "Visit Zion Marketplace"}
                                </Button>;
                              </div>;
                            </div>;
                            <div className="mt - 4 flex justify - end">;
                              <Button;
                                on_click={sendTestNewsletter}
                                disabled={!test_email}
                                className="bg - zion - blue - light hover:bg - zion - blue text - white";
                              >;
                                Send Test to {test_email || "your email"}
                              </Button>;
                            </div>;
                          </TabsContent>;
                          <TabsContent value="html" className="pt - 4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg - zion - blue whitespace - pre - wrap p - 4 rounded - md text - zion - slate - light overflow - auto">;
                                {preview_content.body}
                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;
                        </Tabs>;
                      </div>)) : (
                    <div className="flex flex - col items - center justify - center py - 12 text - center">;
                      <div className="bg - zion - blue - light / 20 p - 6 rounded - full mb - 4">;
                        <svg;
                          xmlns="http://www.w3.org / 2000 / svg";
                          width="24";
                          height="24";
                          view_box="0 0 24 24";
                          fill="none";
                          stroke="current_color";
                          stroke_width="2";
                          stroke_linecap="round";
                          stroke_linejoin="round";
                          className="h - 8 w - 8 text - zion - purple";
                        >;
                          <path d="M14.5 2H6a2 2 0 0 0 - 2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 - 2V7.5L14.5 2z" />;
                          <polyline points="14 2 14 8 20 8" />;
                          <path d="M12 18v - 6" />;
                          <path d="M8 15h8" />;
                        </svg>;
                      </div>;
                      <h3 className="text - white font - medium mb - 2">No Content Generated Yet</h3>;
                      <p className="text - zion - slate - light max - w-md">;
                        Use the settings panel to configure your content and click "Generate" to create AI - powered content.;
                      </p>;
                    </div>)}

<<<<<<< HEAD
                          className="h-8 w-8 text-zion-purple"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M12 18v-6" />
                          <path d="M8 15h8" />
                        </svg>
                      </div>
                      <h3 className="text-white font-medium mb-2">No Content Generated Yet</h3>
                      <p className="text-zion-slate-light max-w-md">
                        Use the settings panel to configure your content and click "Generate" to create AI-powered content.
                      </p>
                    </div>
                  )}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  ),; export default function ContentGenerator () {
  const {
  user, isLoading 
}= useAuth ();
const navigate = useNavigate ();
const [contentType, setContentType] = useState<'blog' | 'newsletter'> ('blog');
const [customPrompt, setCustomPrompt] = useState ('');
const [topic, setTopic] = useState ('');
const [autoPublish, setAutoPublish] = useState (false);
const [includeImage, setIncludeImage] = useState (true);
const [isGenerating, setIsGenerating] = useState (false);
const [previewContent, setPreviewContent] = useState<any> (null);
const [testEmail, setTestEmail] = useState ('');
//Redirect if not logged in React.useEffect ( () => {
  if (!isLoading && !user) {
  
}
;

}, [user, isLoading, navigate]);
const generateContent = async () => {
  setIsGenerating (true);
setPreviewContent (null);
try {
  const {
  data, error 
}= await supabase.functions.invoke ('generate-content', {
  body: {
  contentType;
prompt: customPrompt || undefined;
topic: topic || undefined;
autoPublish;
includeImage: contentType === 'blog'? includeImage : false 
}
});
}finally {
  setIsGenerating (false) 
}
};
const sendTestNewsletter = async () => {
  if (!testEmail) {
  
}try {
  const {
  data, error 
}= await supabase.functions.invoke ('send-newsletter', {
  body: {
  subject: previewContent.subject;
previewText: previewContent.previewText;
body: previewContent.body;
testMode: true;
testEmail 
}
});
}
};
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading...</div> </div> <Footer /> </> return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12" > <div className="container mx-auto px-4" > <h1 className="text-3xl font-bold text-white mb-8" >Content Generator</h1> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" > <div className="lg:col-span-1" > <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardHeader> <CardTitle className="text-white" >Content Settings</CardTitle> <CardDescription className="text-zion-slate-light" > Configure what type of content you want to generate. </CardDescription> </CardHeader> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="blog" className="text-white" >Blog Post</SelectItem> <SelectItem value="newsletter" className="text-white" >Email Newsletter</SelectItem> </SelectContent> </Select> </div> <div className="space-y-2" > <Label htmlFor="topic" className="text-white" >Topic (Optional) </Label> <Input /> </div> <div className="space-y-2" > <Label htmlFor="customPrompt" className="text-white" >Custom Prompt (Optional) </Label> <Textarea /> </div> {
  contentType === 'blog'&& (<> <div className="flex items-center justify-between" > <Label htmlFor="autoPublish" className="text-white" >Auto-Publish</Label> <Switch id="autoPublish" checked= {
  autoPublish 
}onCheckedChange= {
  setAutoPublish 
}/> </div> <div className="flex items-center justify-between" > <Label htmlFor="includeImage" className="text-white" >Generate Image Prompt</Label> <Switch /> </div> </>) 
}<Input id="testEmail" type="email" placeholder="your@email.com" className="bg-zion-blue border border-zion-blue-light text-white" value= {
  testEmail 
}onChange= {
  (e) => setTestEmail (e.target.value) 
}/> </div>) 
}</CardContent> <CardFooter> <Button > {
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating... </>) : (<>Generate {
  contentType === 'blog'? 'Blog Post': 'Newsletter' 
}</>) 
}</Button> </CardFooter> </Card> </div> <div className="lg:col-span-2" > <Card className="bg-zion-blue-dark border border-zion-blue-light h-full" > <CardHeader> <CardTitle className="text-white" >Content Preview</CardTitle> <CardDescription className="text-zion-slate-light" > Generated content will appear here. </CardDescription> </CardHeader> <CardContent> </div>) : previewContent ? (contentType === 'blog' ? (<div className="space-y-4" > <Tabs defaultValue="preview" className="w-full" > <TabsList className="bg-zion-blue-light/30 w-full" > <TabsTrigger value="preview" >Preview</TabsTrigger> <TabsTrigger value="markdown" >Markdown</TabsTrigger> <TabsTrigger value="metadata" >Metadata</TabsTrigger> </TabsList> 
}
}/> </div> </ScrollArea> </TabsContent> </pre> </ScrollArea> </TabsContent> <TabsContent value="metadata" className="pt-4" > <div className="space-y-4" > <div> <span key= {
  index 
}className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan" > {
  tag 
}</span>) ) 
}</div> </div> {
  previewContent.tweetSummary && (<div> <h3 className="text-white font-semibold mb-1" >Tweet Summary</h3> <p className="text-zion-slate-light" > {
  previewContent.tweetSummary 
}</p> </div>) 
}{
  previewContent.imagePrompt && (<div> <h3 className="text-white font-semibold mb-1" >Image Prompt</h3> <p className="text-zion-slate-light" > {
  previewContent.imagePrompt 
}</p> </div>) 
}</div> </TabsContent> </Tabs> </div>) : (<div className="space-y-4" > <Tabs defaultValue="preview" className="w-full" > <TabsList className="bg-zion-blue-light/30 w-full" > <TabsTrigger value="preview" >Preview</TabsTrigger> <TabsTrigger value="html" >HTML</TabsTrigger> </TabsList> </Button> </div> </div> <div className="mt-4 flex justify-end" > <Button </Button> </div> </TabsContent> </pre> </ScrollArea> </TabsContent> </Tabs> </div>) ) : (<div className="flex flex-col items-center justify-center py-12 text-center" > <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4" > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-zion-purple" > <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /> <polyline points="14 2 14 8 20 8" /> <path d="M12 18v-6" /> <path d="M8 15h8" /> </svg> </div> <h3 className="text-white font-medium mb-2" >No Content Generated Yet</h3> <p className="text-zion-slate-light max-w-md" > Use the settings panel to configure your content and click "Generate" to create AI-powered content. </p> </div>) 
}</CardContent> </Card> </div> </div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </>);
}

=======
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from 'react';
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {Button} from "@/components/ui/button";"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
import {Textarea} from "@/components/ui/textarea";"
import {Input} from "@/components/ui/input";"
import {Switch} from "@/components/ui/switch";"
import {Label} from "@/components/ui/label";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {toast} from "sonner";"
import {Loader2} from "lucide-react";"
import {supabase} from "@/integrations/supabase/client";"
import {useAuth} from "@/hooks/useAuth";"
import {ScrollArea} from "@/components/ui/scroll-area";"
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD
export default function ContentGenerator() {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default function ContentGenerator() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user, isLoading } = useAuth();

  const navigate = useNavigate();'
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');'
  const [customPrompt, setCustomPrompt] = useState('');'
=======

  const { user, isLoading } = useAuth();

  const navigate = useNavigate();
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');
  const [customPrompt, setCustomPrompt] = useState('');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [topic, setTopic] = useState('');
  const [autoPublish, setAutoPublish] = useState(false);
  const [includeImage, setIncludeImage] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
<<<<<<< HEAD
  const [previewContent, setPreviewContent] = useState<any>(null);'
  const [testEmail, setTestEmail] = useState('');
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const [previewContent, setPreviewContent] = useState<any>(null);
  const [testEmail, setTestEmail] = useState('');



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
export default function ContentGenerator() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
import React, { useState } from 'react',"
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { Button } from "@/components/ui/button","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { Textarea } from "@/components/ui/textarea","
import { Input } from "@/components/ui/input","
import { Switch } from "@/components/ui/switch","
import { Label } from "@/components/ui/label","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { toast } from "sonner","
import { Loader2 } from "lucide-react","
import { supabase } from "@/integrations/supabase/client","
import { useAuth } from "@/hooks/useAuth",";
import { ScrollArea } from "@/components/ui/scroll-area";"
import { useNavigate } from "react-router-dom";
export default function ContentGenerator() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user, isLoading } = useAuth();

  const navigate = useNavigate();'
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');'
  const [customPrompt, setCustomPrompt] = useState('');'
=======
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
export default function ContentGenerator() {
  const { user, isLoading } = useAuth();

  const navigate = useNavigate();
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');
  const [customPrompt, setCustomPrompt] = useState('');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [topic, setTopic] = useState('');
  const [autoPublish, setAutoPublish] = useState(false);
  const [includeImage, setIncludeImage] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
<<<<<<< HEAD
  const [previewContent, setPreviewContent] = useState<any>(null);'
  const [testEmail, setTestEmail] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const [previewContent, setPreviewContent] = useState<any>(null);
  const [testEmail, setTestEmail] = useState('');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoading && !user) {
      toast.error("You must be logged in to access this page");
      navigate("/login?redirect=/content-generator")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======


=======
=======
      toast.error("You must be logged in to access this page"),
      navigate("/login?redirect=/content-generator")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoading && !user) {
      toast.error("You must be logged in to access this page"),
<<<<<<< HEAD
=======


  // Redirect if not logged in;
  React.useEffect(() => {}
    if (!isLoading && !user) {"
      toast.error("You must be logged in to access this page"),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      navigate("/login?redirect=/content-generator")




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
'
import React, { useState } from 'react',;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { Button } from "@/components/ui/button",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Input } from "@/components/ui/input",;"
import { Switch } from "@/components/ui/switch",;"
import { Label } from "@/components/ui/label",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { toast } from "sonner",;"
import { Loader2 } from "lucide-react",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { ScrollArea } from "@/components/ui/scroll-area",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useNavigate } from "react-router-dom",;
export default function ContentGenerator() { return null; }
  const { user, isLoading } = useAuth(),;
  const navigate = useNavigate(),;'
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog'),;'
  const [customPrompt, setCustomPrompt] = useState(''),;'
  const [topic, setTopic] = useState(''),;
  const [autoPublish, setAutoPublish] = useState(false),;
  const [includeImage, setIncludeImage] = useState(true),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [previewContent, setPreviewContent] = useState<any>(null),;'
  const [testEmail, setTestEmail] = useState(''),;
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Redirect if not logged in;
  React && React.useEffect(() => {;
    if (!isLoading && !user) {;"
      toast && toast.error("You must be logged in to access this page");"
      navigate("/login?redirect=/content-generator");
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }, [user, isLoading, navigate]);

=======
  }, [user, isLoading, navigate]);

  const generateContent = async () => {;
    setIsGenerating(true);
    setPreviewContent(null);

    try {;
      const { data, error } = await supabase && supabase.functions.invoke('generate-content', {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        body: {;
          contentType,;
          prompt: customPrompt || undefined,;
          topic: topic || undefined,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          autoPublish;
          includeImage: contentType === 'blog' ? includeImage : false;
        }
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


          autoPublish;'
          includeImage: contentType === 'blog' ? includeImage : false;
        }
      });
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setPreviewContent(data);
=======
  }, [user, isLoading, navigate]);      setPreviewContent(data);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }, [user, isLoading, navigate]);      setPreviewContent(data);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      setPreviewContent(data);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          autoPublish;
          includeImage: contentType === 'blog' ? includeImage : false;
        }


      if (error) throw error;


      });
      if (error) throw error;
          autoPublish;
          includeImage: contentType === 'blog' ? includeImage : false;
        }
      });
      setPreviewContent(data);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast && toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {;"
      console && console.error("Error generating content:", error);"
      toast && toast.error("Failed to generate content. Please try again.");
    } finally {;
      setIsGenerating(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }

<<<<<<< HEAD
      }),
<<<<<<< HEAD
=======



=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    }

      }),



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
      if (error) throw error,
      
      setPreviewContent(data),

<<<<<<< HEAD
          autoPublish,;'
          includeImage: contentType === 'blog' ? includeImage : false;
        }
      }),
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      if (error) throw error,
<<<<<<< HEAD

      setPreviewContent(data),
<<<<<<< HEAD

=======
=======
      
      setPreviewContent(data),'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`)
    } catch (error) {"
      console.error("Error generating content:", error),"
      toast.error("Failed to generate content. Please try again.")
    } finally {}
      setIsGenerating(false)
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const sendTestNewsletter = async () => {
    if (!testEmail) {
=======
  const sendTestNewsletter = async () => {}
    if (!testEmail) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.error("Please enter a test email address");
      return;
    }
    if (!previewContent) {"
      toast.error("Generate newsletter content first");
<<<<<<< HEAD
      return
<<<<<<< HEAD
=======

=======
      return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          autoPublish,;
          includeImage: contentType === 'blog' ? includeImage : false;
        }
      }),
      
      if (error) throw error,
      
      setPreviewContent(data),
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`)
    } catch (error) {
      console.error("Error generating content:", error),
      toast.error("Failed to generate content. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  const sendTestNewsletter = async () => {
    if (!testEmail) {
      toast.error("Please enter a test email address");
      return
    }
    if (!previewContent) {
      toast.error("Generate newsletter content first");
      return

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  };



<<<<<<< HEAD

<<<<<<< HEAD
  const sendTestNewsletter = async () => {
    if (!testEmail) {
      toast.error("Please enter a test email address"),
      return
    }
    if (!previewContent) {
      toast.error("Generate newsletter content first"),
      return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }),;
      if (error) throw error,;
      setPreviewContent(data),;'`
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {;"
      console.error("Error generating content:", error),;"
=======
      }),;
      if (error) throw error,;
      setPreviewContent(data),;
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {;
      console.error("Error generating content:", error),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error("Failed to generate content. Please try again.");
    } finally {;
      setIsGenerating(false);
    }
<<<<<<< HEAD

  const sendTestNewsletter = async () => {;
    if (!testEmail) {;"
=======
  },;

  const sendTestNewsletter = async () => {;
    if (!testEmail) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast && toast.error("Please enter a test email address");
      return;
    }

<<<<<<< HEAD
    if (!previewContent) {;"
=======
    if (!previewContent) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast && toast.error("Generate newsletter content first");
      return;
    }

<<<<<<< HEAD
    try {;'
=======
    try {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      }),
=======
<<<<<<< HEAD
      }),



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      
      if (error) throw error,
      
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
      }),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



      
      if (error) throw error,
<<<<<<< HEAD
      `
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.success(`Test newsletter sent to ${testEmail}!`)
    } catch (error) {"
      console.error("Error sending test newsletter:", error),"
      toast.error("Failed to send test newsletter. Please try again.")
    }

      if (error) throw error;
`
      toast && toast.success(`Test newsletter sent to ${testEmail}!`);
    } catch (error) {;"
      console && console.error("Error sending test newsletter:", error);"
      toast && toast.error("Failed to send test newsletter. Please try again.");

'
import React, { useState } from 'react',;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { Button } from "@/components/ui/button",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Input } from "@/components/ui/input",;"
import { Switch } from "@/components/ui/switch",;"
import { Label } from "@/components/ui/label",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { toast } from "sonner",;"
import { Loader2 } from "lucide-react",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { ScrollArea } from "@/components/ui/scroll-area",;"
import { useNavigate } from "react-router-dom",;
;
export default function ContentGenerator() { return null; }
  const { user, isLoading } = useAuth(),;
  const navigate = useNavigate(),;'
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog'),;'
  const [customPrompt, setCustomPrompt] = useState(''),;'
=======
      
      toast.success(`Test newsletter sent to ${testEmail}!`)
    } catch (error) {
      console.error("Error sending test newsletter:", error),
      toast.error("Failed to send test newsletter. Please try again.")
    }

  },


      });
      if (error) throw error;

      toast && toast.success(`Test newsletter sent to ${testEmail}!`);
    } catch (error) {;
      console && console.error("Error sending test newsletter:", error);
      toast && toast.error("Failed to send test newsletter. Please try again.");
    }
  }

  // Check if user is still loading;
  if (isLoading) {;

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [topic, setTopic] = useState(''),;
  const [autoPublish, setAutoPublish] = useState(false),;
  const [includeImage, setIncludeImage] = useState(true),;
  const [isGenerating, setIsGenerating] = useState(false),;
<<<<<<< HEAD
  const [previewContent, setPreviewContent] = useState<any>(null),;'
=======
  const [previewContent, setPreviewContent] = useState<any>(null),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [testEmail, setTestEmail] = useState(''),;
;
  // Redirect if not logged in;
  React.useEffect(() => {;
<<<<<<< HEAD
    if (!isLoading && !user) {;"
      toast.error("You must be logged in to access this page"),;"
=======
    if (!isLoading && !user) {;
      toast.error("You must be logged in to access this page"),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      navigate("/login?redirect=/content-generator"),;
    }
  }, [user, isLoading, navigate]),;
;
  const generateContent = async () => {;
    setIsGenerating(true),;
    setPreviewContent(null),;
    ;
<<<<<<< HEAD
    try {;'
=======
    try {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const { data, error } = await supabase.functions.invoke('generate-content', {;
        body:{;
          contentType,;
          prompt:customPrompt || undefined,;
          topic:topic || undefined,;
<<<<<<< HEAD
          autoPublish,;'
=======
          autoPublish,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          includeImage:contentType === 'blog' ? includeImage :false;
        }
      }),;
      ;
      if (error) throw error,;
      ;
<<<<<<< HEAD
      setPreviewContent(data),;'`
=======
      setPreviewContent(data),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.success(`${contentType === 'blog' ? 'Blog post' :'Newsletter'} generated successfully!`),;
    } catch (error) {;
    }
  },;
;
  const sendTestNewsletter = async () => {;
<<<<<<< HEAD
    if (!testEmail) {;"
=======
    if (!testEmail) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error("Please enter a test email address"),;
      return,;
    }
    ;
<<<<<<< HEAD
    if (!previewContent) {;"
=======
    if (!previewContent) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error("Generate newsletter content first"),;
      return,;
    }
    ;
<<<<<<< HEAD
    try {;'
=======
    try {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      ;`
      toast.success(`Test newsletter sent to ${testEmail}!`),;
    } catch (error) {;"
      console.error("Error sending test newsletter:", error),;"
=======
      ;
      toast.success(`Test newsletter sent to ${testEmail}!`),;
    } catch (error) {;
      console.error("Error sending test newsletter:", error),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error("Failed to send test newsletter. Please try again."),;
    }
  },;
;
  // Check if user is still loading;
  if (isLoading) {;
    return (
      <>;
<<<<<<< HEAD
        <Header />;"
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;"
=======
        <Header />;
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="animate-pulse text-white">Loading...</div>;
        </div>;
        <Footer />;
      </>;
<<<<<<< HEAD

=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    );
  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <Input
=======
    }                    <Input
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }                    <Input
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                    <Input
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      id="topic"
                      placeholder={contentType === 'blog' ? "e.g., Hiring AI Freelancers" : "e.g., May Platform Updates"}
=======

                    <Input"
                      id="topic"'"
                      placeholder={contentType === 'blog' ? "e.g., Hiring AI Freelancers" : "e.g., May Platform Updates"}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>"
                  <div className="space-y-2">"
                    <Label htmlFor="customPrompt" className="text-white">Custom Prompt (Optional)</Label>
                    <Textarea"
                      id="customPrompt""
                      placeholder="Enter a custom prompt for the AI...""
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]"
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                    />
                  </div>'
                  {contentType === 'blog' && (
                    <>"
                      <div className="flex items-center justify-between">"
                        <Label htmlFor="autoPublish" className="text-white">Auto-Publish</Label>
                        <Switch"
                          id="autoPublish"
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
                        />
                      </div>"
                      <div className="flex items-center justify-between">"
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>
                        <Switch"
                          id="includeImage"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }),;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      }),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (error) throw error,;
=======

      }),;
      if (error) throw error,;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast.success(`Test newsletter sent to ${testEmail}!`);
    } catch (error) {;"
      console.error("Error sending test newsletter:", error);"
      toast.error("Failed to send test newsletter. Please try again.");
    }
  };
  // Check if user is still loading;
  if (isLoading) {;
    return (;
      <>;
        <Header />;"
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;"
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue py-12">;"
        <div className="container mx-auto px-4">;"
          <h1 className="text-3xl font-bold text-white mb-8">Content Generator</h1>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            <div className="lg:col-span-1">;
=======
"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
            <div className="lg:col-span-1">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Card className="bg-zion-blue-dark border border-zion-blue-light">;
                <CardHeader>;"
                  <CardTitle className="text-white">Content Settings</CardTitle>;"
                  <CardDescription className="text-zion-slate-light">;
                    Configure what type of content you want to generate.;
                  </CardDescription>;
                </CardHeader>;"
                <CardContent className="space-y-6">;"
                  <div className="space-y-2">;"
                    <Label htmlFor="contentType" className="text-white">Content Type</Label>;'
                    <Select value={contentType} onValueChange={(value) => setContentType(value as 'blog' | 'newsletter')}>;"
                      <SelectTrigger id="contentType" className="bg-zion-blue border border-zion-blue-light text-white">;"
                        <SelectValue placeholder="Select content type" />;
                      </SelectTrigger>;"
                      <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;"
                        <SelectItem value="blog" className="text-white">Blog Post</SelectItem>;"
                        <SelectItem value="newsletter" className="text-white">Email Newsletter</SelectItem>;
                      </SelectContent>;
                    </Select>;
                  </div>;

<<<<<<< HEAD
                  <div className="space-y-2">;
                    <Label htmlFor="topic" className="text-white">Topic (Optional)</Label>;
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

                    <Textarea
                      id="customPrompt"
                      placeholder="Enter a custom prompt for the AI..."
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]"
                      value={customPrompt}

                      onChange={(e) => setCustomPrompt(e && e.target.value)}
                    />;
                  </div>;

                  {contentType === 'blog' && (;
                    <>;
                      <div className="flex items-center justify-between">;
                        <Label htmlFor="autoPublish" className="text-white">Auto-Publish</Label>;

                        <Switch
                          id="autoPublish"
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
<<<<<<< HEAD
=======
                    <Input"
                      id="topic"'"
                      placeholder={contentType === 'blog' ? "e && e.g., Hiring AI Freelancers" : "e && e.g., May Platform Updates"}"
                      className="bg-zion-blue border border-zion-blue-light text-white"
                      value={topic}

                      onChange={(e) => setTopic(e && e.target.value)}
                    />;
                  </div>;
"
                  <div className="space-y-2">;"
                    <Label htmlFor="customPrompt" className="text-white">Custom Prompt (Optional)</Label>;



                    <Textarea"
                      id="customPrompt""
                      placeholder="Enter a custom prompt for the AI...""
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]"
                      value={customPrompt}
'
                  {contentType === 'blog' && (;
                    <>;"
                      <div className="flex items-center justify-between">;"
                        <Label htmlFor="autoPublish" className="text-white">Auto-Publish</Label>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        />;
                      </div>;"
                      <div className="flex items-center justify-between">;"
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>;
<<<<<<< HEAD
                        <Switch;
<<<<<<< HEAD
<<<<<<< HEAD
                          id="includeImage";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
                        <Switch;"
                          id="includeImage";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />
                      </div>'
                  {contentType === 'newsletter' && ("
                    <div className="space-y-2">"
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>
'
                  {contentType === 'newsletter' && (;"
                    <div className="space-y-2">;"
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>;
                        <Switch"
                          id="includeImage"



                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;
                    </>;
                  )}
<<<<<<< HEAD
<<<<<<< HEAD

=======

                        />;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>;
                        <Switch;
                          id="includeImage";


                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />
                      </div>
                  {contentType === 'newsletter' && (
                    <div className="space-y-2">
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>

                  {contentType === 'newsletter' && (;
                    <div className="space-y-2">;
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <Switch
                          id="includeImage"
                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;
                    </>;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

                  
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



                      <Input"
                        id="testEmail""
                        type="email""
                        placeholder="your@email && email.com""
                        className="bg-zion-blue border border-zion-blue-light text-white"
                        value={testEmail}
                        onChange={(e) => setTestEmail(e && e.target.value)}



=======
                  )}


                  


                  {contentType === 'newsletter' && (
                    <div className="space-y-2">
                      <Label htmlFor="testEmail" className="text-white">Test Email</Label>
                      <Input
                        id="testEmail"
                        type="email"
                        placeholder="your@email && email.com"
                        className="bg-zion-blue border border-zion-blue-light text-white"
                        value={testEmail}
                        onChange={(e) => setTestEmail(e && e.target.value)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      />;
                    </div>;
                  )}
                </CardContent>;
                <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Button
                    onClick={generateContent}
=======
                          id="includeImage";                    onClick={generateContent}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                          id="includeImage";                    onClick={generateContent}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                  <Button;
=======
                  <Button
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                    {isGenerating ? (;
                      <>;
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                        Generating...;
                      </>;
                    ) : (;
                      <>Generate {contentType === 'blog' ? 'Blog Post' : 'Newsletter'}</>;
                    )}

                  </Button>;
                </CardFooter>;
              </Card>;
            </div>;

            <div className="lg:col-span-2">;
=======

                  <Button;
                    onClick={generateContent}
                    disabled={isGenerating}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;



                    {isGenerating ? (;
                      <>;"
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                        Generating...;
                      </>;

                  </Button>;
                </CardFooter>;
              </Card>;
            </div>;
"
            <div className="lg:col-span-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Card className="bg-zion-blue-dark border border-zion-blue-light h-full">;
                <CardHeader>;"
                  <CardTitle className="text-white">Content Preview</CardTitle>;"
                  <CardDescription className="text-zion-slate-light">;
                    Generated content will appear here.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  {isGenerating ? (;"
                    <div className="flex flex-col items-center justify-center py-12">;"
                      <Loader2 className="h-8 w-8 animate-spin text-zion-purple mb-4" />;"
                      <p className="text-zion-slate-light">Generating content...</p>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                  ) : previewContent ? (;                    contentType === 'blog' ? (;
=======
                  ) : previewContent ? (;
                    contentType === 'blog' ? (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <div className="space-y-4">;
                        <Tabs defaultValue="preview" className="w-full">;
                          <TabsList className="bg-zion-blue-light/30 w-full">;
                            <TabsTrigger value="preview">Preview</TabsTrigger>;
                            <TabsTrigger value="markdown">Markdown</TabsTrigger>;
                            <TabsTrigger value="metadata">Metadata</TabsTrigger>;
                          </TabsList>;

                          <TabsContent value="preview" className="pt-4">;
                            <ScrollArea className="h-[500px] pr-4">;
                              <div className="space-y-4">;
                                <h2 className="text-2xl font-bold text-white">{previewContent && previewContent.title}</h2>;
                                <p className="text-zion-slate-light">{previewContent && previewContent.metaDescription}</p>;
                                <div
                                  className="prose prose-invert max-w-none"
                                  dangerouslySetInnerHTML={{ 
                                    __html: previewContent && previewContent.body
                                      .replace(/^#{1,6}\s+(.+)$/gm, "<h$1>$2</h$1>");
                                      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
                                      .replace(/\*(.+?)\*/g, "<em>$1</em>");
                                      .replace(/^-\s+(.+)$/gm, "<li>$1</li>");
=======
'
                    contentType === 'blog' ? (;"
                      <div className="space-y-4">;"
                        <Tabs defaultValue="preview" className="w-full">;"
                          <TabsList className="bg-zion-blue-light/30 w-full">;"
                            <TabsTrigger value="preview">Preview</TabsTrigger>;"
                            <TabsTrigger value="markdown">Markdown</TabsTrigger>;"
                            <TabsTrigger value="metadata">Metadata</TabsTrigger>;
                          </TabsList>;
"
                                      .replace(/^#{1,6}\s+(.+)$/gm, "<h$1>$2</h$1>");"
                                      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");"
                                      .replace(/\*(.+?)\*/g, "<em>$1</em>");"
                                      .replace(/^-\s+(.+)$/gm, "<li>$1</li>");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                                      .replace(/\n\n/g, "<br><br>");
                                  }}
                                />;
                              </div>;
                            </ScrollArea>;
                          </TabsContent>;
<<<<<<< HEAD

                          <TabsContent value="markdown" className="pt-4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;
                                {previewContent && previewContent.body}
                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;

                          <TabsContent value="metadata" className="pt-4">;
=======
"
                          <TabsContent value="metadata" className="pt-4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                            <div className="space-y-4">;
                              <div>;"
                                <h3 className="text-white font-semibold mb-1">Title</h3>;
<<<<<<< HEAD
                                <p className="text-zion-slate-light">{previewContent && previewContent.title}</p>;
                              </div>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
                              <div>;
                                <h3 className="text-white font-semibold mb-1">Tags</h3>;
                                <div className="flex flex-wrap gap-2">;
                                  {previewContent && previewContent.tags.map((tag: string, index: number) => (;

                    ) : (;
                      <>Generate {contentType === 'blog' ? 'Blog Post' : 'Newsletter'}</>;
                    )}
                                    <span
                                      key={index}
                                      className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan">;
                                      {tag}
                                    </span>;
                                  ))}
<<<<<<< HEAD
=======
                    ) : (;'
                      <>Generate {contentType === 'blog' ? 'Blog Post' : 'Newsletter'}</>;
                    )}

                                    <span;
                                      key={index}"
                                      className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan">;
                                      {tag}

                                </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

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
                                </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                              )}
                            </div>;
                          </TabsContent>;
                        </Tabs>;
                      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                    ) : (;                      <div className="space-y-4">;
=======
                    ) : (;
                      <div className="space-y-4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        <Tabs defaultValue="preview" className="w-full">;
                          <TabsList className="bg-zion-blue-light/30 w-full">;
                            <TabsTrigger value="preview">Preview</TabsTrigger>;
                            <TabsTrigger value="html">HTML</TabsTrigger>;
                          </TabsList>;

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
<<<<<<< HEAD
                                className="bg-zion-blue-light hover:bg-zion-blue text-white">;                                Send Test to {testEmail || "your email"}
=======
"
                      <div className="space-y-4">;"
                        <Tabs defaultValue="preview" className="w-full">;"
                          <TabsList className="bg-zion-blue-light/30 w-full">;"
                            <TabsTrigger value="preview">Preview</TabsTrigger>;"
                            <TabsTrigger value="html">HTML</TabsTrigger>;
                          </TabsList>;
"
                                Send Test to {testEmail || "your email"}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                                className="bg-zion-blue-light hover:bg-zion-blue text-white">;
                                Send Test to {testEmail || "your email"}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                              </Button>;
                            </div>;
                          </TabsContent>;

<<<<<<< HEAD
                          <TabsContent value="html" className="pt-4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;
<<<<<<< HEAD
                                {previewContent && previewContent.body}                              </pre>;
=======
                              </pre>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                                {previewContent && previewContent.body}
                              </pre>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            </ScrollArea>;
                          </TabsContent>;
                        </Tabs>;
                      </div>;
                    );
<<<<<<< HEAD
                  ) : (;
                    <div className="flex flex-col items-center justify-center py-12 text-center">;
                      <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4">;

                        <svg
<<<<<<< HEAD
                          xmlns="http://www && www.w3.org/2000/svg"                                    </span>;
=======


                                    </span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                          xmlns="http://www && www.w3.org/2000/svg"
                                    </span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                  ))}
                        <svg"
                          xmlns="http://www && www.w3.org/2000/svg"
<<<<<<< HEAD
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
<<<<<<< HEAD
                          strokeLinejoin="round"                </CardContent>;
=======
"
                          width="24""
                          height="24""
                          viewBox="0 0 24 24""
                          fill="none""
                          stroke="currentColor""
                          strokeWidth="2""
                          strokeLinecap="round""
                          strokeLinejoin="round"


"
                          <polyline points="14 2 14 8 20 8" />;"
                          <path d="M12 18v-6" />;"
                          <path d="M8 15h8" />;
                        </svg>;
                      </div>;"
                      <h3 className="text-white font-medium mb-2">No Content Generated Yet</h3>;"
                      <p className="text-zion-slate-light max-w-md">;"
                        Use the settings panel to configure your content and click "Generate" to create AI-powered content.;
                      </p>;
'
import React, { useState } from 'react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { Button } from '@/components / ui / button';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'
import { Textarea } from '@/components / ui / textarea';'
import { Input } from '@/components / ui / input';'
import { Switch } from '@/components / ui / switch';'
import { Label } from '@/components / ui / label';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { toast } from './sonner';'
import { Loader2 } from './lucide-react';'
import { supabase } from '@/integrations / supabase / client';'
import { use_auth } from '@/hooks / use_auth';'
import { ScrollArea } from '@/components / ui / scroll - area';'
import { use_navigate } from './react-router-dom';
export default /**;
 * ContentGenerator - Function description;
 */
function ContentGenerator() {}
  const { user, is_loading } = use_auth ();
  const navigate = use_navigate ();'
  const [content_type, setContentType] = useState<'blog' | 'newsletter'>('blog');'
  const [custom_prompt, setCustomPrompt] = useState ('');'
=======
                          strokeLinejoin="round"
                          className="h-8 w-8 text-zion-purple">;
                          <path d="M14 && M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7 && 2V7.5L14.5 2z" />;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [topic, set_topic] = useState ('');
  const [auto_publish, setAutoPublish] = useState (false);
  const [include_image, setIncludeImage] = useState (true);
  const [is_generating, setIsGenerating] = useState (false);
<<<<<<< HEAD
  const [preview_content, setPreviewContent] = useState < any>(null);'
  const [test_email, setTestEmail] = useState ('');
;
  // Redirect if not logged in;
  React.useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("You must be logged in to access this page");"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      navigate ("/login?redirect=/content - generator");
    }
  }, [user, is_loading, navigate]);
;
<<<<<<< HEAD
  const generate_content = async () => {}
    setIsGenerating (true);
    setPreviewContent (null);
;
    try {'
      const { data, error } = await supabase.functions.invoke ('generate - content', {}
        body: {}
          content_type,
          prompt: custom_prompt || undefined,
          topic: topic || undefined,
          auto_publish;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          include_image: content_type === 'blog' ? include_image : false;
        }
      });
;
<<<<<<< HEAD
      // Check condition;
if (throw error) {}
  $2;
}
      setPreviewContent (data);'`
      toast.success (`${content_type === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {"
      console.error ("Error generating content:", error);"
      toast.error ("Failed to generate content. Please try again.");
    } finally {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsGenerating (false);
    }
  }
;
<<<<<<< HEAD
  const sendTestNewsletter = async () => {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("Please enter a test email address");
      return;
    }
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("Generate newsletter content first");
      return;
    }
    try {'
      const { data, error } = await supabase.functions.invoke ('send - newsletter', {}
        body: {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          subject: preview_content.subject,
          preview_text: preview_content.preview_text,
          body: preview_content.body,
          test_mode: true,
          test_email;
        }
      });
;
<<<<<<< HEAD
      // Check condition;
if (throw error) {}
  $2;
}`
      toast.success (`Test newsletter sent to ${test_email}!`);
    } catch (error) {"
      console.error ("Error sending test newsletter:", error);"
=======
      // Check condition
if (throw error) {
  $2
}
      toast.success (`Test newsletter sent to ${test_email}!`);
    } catch (error) {
      console.error ("Error sending test newsletter:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error ("Failed to send test newsletter. Please try again.");
    }
  }
;
  // Check if user is still loading;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <>;
        <Header />;"
        <div className="min - h-screen bg - zion - blue flex items - center justify - center">;"
=======
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <Header />;
        <div className="min - h-screen bg - zion - blue flex items - center justify - center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="animate - pulse text - white">Loading...</div>;
        </div>;
        <Footer />;
      </>);
  }
  return (
    <>;
<<<<<<< HEAD
      <Header />;"
      <div className="min - h-screen bg - zion - blue py - 12">;"
        <div className="container mx - auto px - 4">;"
          <h1 className="text - 3xl font - bold text - white mb - 8">Content Generator</h1>;"
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;"
            <div className="lg:col - span - 1">;"
              <Card className="bg - zion - blue - dark border border - zion - blue - light">;
                <CardHeader>;"
                  <CardTitle className="text - white">Content Settings</CardTitle>;"
                  <CardDescription className="text - zion - slate - light">;
                    Configure what type of content you want to generate.;
                  </CardDescription>;
                </CardHeader>;"
                <CardContent className="space - y-6">;"
                  <div className="space - y-2">;"
                    <Label html_for="content_type" className="text - white">Content Type</Label>;'
                    <Select value={content_type} onValueChange={(value) => setContentType (value as 'blog' | 'newsletter')}>;"
                      <SelectTrigger id="content_type" className="bg - zion - blue border border - zion - blue - light text - white">;"
                        <SelectValue placeholder="Select content type" />;
                      </SelectTrigger>;"
                      <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;"
                        <SelectItem value="blog" className="text - white">Blog Post</SelectItem>;"
                        <SelectItem value="newsletter" className="text - white">Email Newsletter</SelectItem>;
                      </SelectContent>;
                    </Select>;
                  </div>;"
                  <div className="space - y-2">;"
                    <Label html_for="topic" className="text - white">Topic (Optional)</Label>;
                    <Input;"
                      id="topic";'"
                      placeholder={content_type === 'blog' ? "e.g., Hiring AI Freelancers" : "e.g., May Platform Updates"}"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      className="bg - zion - blue border border - zion - blue - light text - white";
                      value={topic}
                      on_change={(e) => set_topic (e.target.value)}
                    />;
<<<<<<< HEAD
                  </div>;"
                  <div className="space - y-2">;"
                    <Label html_for="custom_prompt" className="text - white">Custom Prompt (Optional)</Label>;
                    <Textarea;"
                      id="custom_prompt";"
                      placeholder="Enter a custom prompt for the AI...";"
=======
                  </div>;
                  <div className="space - y-2">;
                    <Label html_for="custom_prompt" className="text - white">Custom Prompt (Optional)</Label>;
                    <Textarea;
                      id="custom_prompt";
                      placeholder="Enter a custom prompt for the AI...";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      className="bg - zion - blue border border - zion - blue - light text - white min - h-[100px]";
                      value={custom_prompt}
                      on_change={(e) => setCustomPrompt (e.target.value)}
                    />;
<<<<<<< HEAD
                  </div>;'
                  {content_type === 'blog' && (
                    <>;"
                      <div className="flex items - center justify - between">;"
                        <Label html_for="auto_publish" className="text - white">Auto - Publish</Label>;
                        <Switch;"
=======
                  </div>;
                  {content_type === 'blog' && (
                    <>;
                      <div className="flex items - center justify - between">;
                        <Label html_for="auto_publish" className="text - white">Auto - Publish</Label>;
                        <Switch;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          id="auto_publish";
                          checked={auto_publish}
                          onCheckedChange={setAutoPublish}
                        />;
<<<<<<< HEAD
                      </div>;"
                      <div className="flex items - center justify - between">;"
                        <Label html_for="include_image" className="text - white">Generate Image Prompt</Label>;
                        <Switch;"
=======
                      </div>;
                      <div className="flex items - center justify - between">;
                        <Label html_for="include_image" className="text - white">Generate Image Prompt</Label>;
                        <Switch;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          id="include_image";
                          checked={include_image}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;
<<<<<<< HEAD
                    </>)}'
                  {content_type === 'newsletter' && ("
                    <div className="space - y-2">;"
                      <Label html_for="test_email" className="text - white">Test Email</Label>;
                      <Input;"
                        id="test_email";"
                        type="email";"
                        placeholder="your@email.com";"
=======
                    </>)}
                  {content_type === 'newsletter' && (
                    <div className="space - y-2">;
                      <Label html_for="test_email" className="text - white">Test Email</Label>;
                      <Input;
                        id="test_email";
                        type="email";
                        placeholder="your@email.com";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        className="bg - zion - blue border border - zion - blue - light text - white";
                        value={test_email}
                        on_change={(e) => setTestEmail (e.target.value)}
                      />;
                    </div>)}
                </CardContent>;
                <CardFooter>;
                  <Button;
                    on_click={generate_content}
<<<<<<< HEAD
                    disabled={is_generating}"
                    className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                  >;
                    {is_generating ? (
                      <>;"
                        <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                        Generating...;
                      </>) : ('
=======
                    disabled={is_generating}
                    className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                  >;
                    {is_generating ? (
                      <>;
                        <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                        Generating...;
                      </>) : (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <>Generate {content_type === 'blog' ? 'Blog Post' : 'Newsletter'}</>)}
                  </Button>;
                </CardFooter>;
              </Card>;
<<<<<<< HEAD
            </div>;"
            <div className="lg:col - span - 2">;"
              <Card className="bg - zion - blue - dark border border - zion - blue - light h - full">;
                <CardHeader>;"
                  <CardTitle className="text - white">Content Preview</CardTitle>;"
=======
            </div>;
            <div className="lg:col - span - 2">;
              <Card className="bg - zion - blue - dark border border - zion - blue - light h - full">;
                <CardHeader>;
                  <CardTitle className="text - white">Content Preview</CardTitle>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <CardDescription className="text - zion - slate - light">;
                    Generated content will appear here.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
<<<<<<< HEAD
                  {is_generating ? ("
                    <div className="flex flex - col items - center justify - center py - 12">;"
                      <Loader2 className="h - 8 w - 8 animate - spin text - zion - purple mb - 4" />;"
                      <p className="text - zion - slate - light">Generating content...</p>;
                    </div>) : preview_content ? ('
                    content_type === 'blog' ? ("
                      <div className="space - y-4">;"
                        <Tabs default_value="preview" className="w - full">;"
                          <TabsList className="bg - zion - blue - light / 30 w - full">;"
                            <TabsTrigger value="preview">Preview</TabsTrigger>;"
                            <TabsTrigger value="markdown">Markdown</TabsTrigger>;"
                            <TabsTrigger value="metadata">Metadata</TabsTrigger>;
                          </TabsList>;"
                          <TabsContent value="preview" className="pt - 4">;"
                            <ScrollArea className="h-[500px] pr - 4">;"
                              <div className="space - y-4">;"
                                <h2 className="text - 2xl font - bold text - white">{preview_content.title}</h2>;"
                                <p className="text - zion - slate - light">{preview_content.meta_description}</p>;
                                <div;"
                                  className="prose prose - invert max - w-none";
                                  dangerouslySetInnerHTML={{}
                                    __html: preview_content.body;"
                                      .replace (/^#{1, 6}\s+(.+)$/gm, "<h$1>$2</h$1>");"
                                      .replace (/\*\*(.+?)\*\*/g, "<strong>$1</strong>");"
                                      .replace (/\*(.+?)\*/g, "<em>$1</em>");"
                                      .replace (/^-\s+(.+)$/gm, "<li>$1</li>");"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                      .replace (/\n\n / g, "<br><br>");
                                  }}
                                />;
                              </div>;
                            </ScrollArea>;
<<<<<<< HEAD
                          </TabsContent>;"
                          <TabsContent value="markdown" className="pt - 4">;"
                            <ScrollArea className="h-[500px]">;"
=======
                          </TabsContent>;
                          <TabsContent value="markdown" className="pt - 4">;
                            <ScrollArea className="h-[500px]">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                              <pre className="bg - zion - blue whitespace - pre - wrap p - 4 rounded - md text - zion - slate - light overflow - auto">;
                                {preview_content.body}
                              </pre>;
                            </ScrollArea>;
<<<<<<< HEAD
                          </TabsContent>;"
                          <TabsContent value="metadata" className="pt - 4">;"
                            <div className="space - y-4">;
                              <div>;"
                                <h3 className="text - white font - semibold mb - 1">Title</h3>;"
                                <p className="text - zion - slate - light">{preview_content.title}</p>;
                              </div>;
                              <div>;"
                                <h3 className="text - white font - semibold mb - 1">Meta Description</h3>;"
                                <p className="text - zion - slate - light">{preview_content.meta_description}</p>;
                              </div>;
                              <div>;"
                                <h3 className="text - white font - semibold mb - 1">Tags</h3>;"
                                <div className="flex flex - wrap gap - 2">;
                                  {preview_content.tags.map ((tag: string, index: number) => (
                                    <span;
                                      key={index}"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                      className="bg - zion - blue - light px - 2 py - 1 rounded - md text - xs text - zion - cyan";
                                    >;
                                      {tag}
                                    </span>))}
                                </div>;
                              </div>;
                              {preview_content.tweet_summary && (
<<<<<<< HEAD
                                <div>;"
                                  <h3 className="text - white font - semibold mb - 1">Tweet Summary</h3>;"
                                  <p className="text - zion - slate - light">{preview_content.tweet_summary}</p>;
                                </div>)}
                              {preview_content.image_prompt && (
                                <div>;"
                                  <h3 className="text - white font - semibold mb - 1">Image Prompt</h3>;"
=======
                                <div>;
                                  <h3 className="text - white font - semibold mb - 1">Tweet Summary</h3>;
                                  <p className="text - zion - slate - light">{preview_content.tweet_summary}</p>;
                                </div>)}
                              {preview_content.image_prompt && (
                                <div>;
                                  <h3 className="text - white font - semibold mb - 1">Image Prompt</h3>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                                  <p className="text - zion - slate - light">{preview_content.image_prompt}</p>;
                                </div>)}
                            </div>;
                          </TabsContent>;
                        </Tabs>;
<<<<<<< HEAD
                      </div>) : ("
                      <div className="space - y-4">;"
                        <Tabs default_value="preview" className="w - full">;"
                          <TabsList className="bg - zion - blue - light / 30 w - full">;"
                            <TabsTrigger value="preview">Preview</TabsTrigger>;"
                            <TabsTrigger value="html">HTML</TabsTrigger>;
                          </TabsList>;"
                          <TabsContent value="preview" className="pt - 4">;"
                            <div className="bg - white rounded - lg p - 6 text - black">;"
                              <h2 className="text - xl font - bold">{preview_content.subject}</h2>;"
                              <p className="text - gray - 500 text - sm mt - 2">{preview_content.preview_text}</p>;"
                              <div className="border - t border - gray - 200 my - 4"></div>;
                              <div;"
                                className="prose max - w-none";
                                dangerouslySetInnerHTML={{ __html: preview_content.body }}
                              />;"
                              <div className="mt - 6">;"
                                <Button className="bg - zion - purple hover:bg - zion - purple - dark text - white">;"
                                  {preview_content.cta || "Visit Zion Marketplace"}
                                </Button>;
                              </div>;
                            </div>;"
                            <div className="mt - 4 flex justify - end">;
                              <Button;
                                on_click={sendTestNewsletter}
                                disabled={!test_email}"
                                className="bg - zion - blue - light hover:bg - zion - blue text - white";
                              >;"
                                Send Test to {test_email || "your email"}
                              </Button>;
                            </div>;
                          </TabsContent>;"
                          <TabsContent value="html" className="pt - 4">;"
                            <ScrollArea className="h-[500px]">;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                              <pre className="bg - zion - blue whitespace - pre - wrap p - 4 rounded - md text - zion - slate - light overflow - auto">;
                                {preview_content.body}
                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;
                        </Tabs>;
<<<<<<< HEAD
                      </div>)) : ("
                    <div className="flex flex - col items - center justify - center py - 12 text - center">;"
                      <div className="bg - zion - blue - light / 20 p - 6 rounded - full mb - 4">;
                        <svg;"
                          xmlns="http://www.w3.org / 2000 / svg";"
                          width="24";"
                          height="24";"
                          view_box="0 0 24 24";"
                          fill="none";"
                          stroke="current_color";"
                          stroke_width="2";"
                          stroke_linecap="round";"
                          stroke_linejoin="round";"
                          className="h - 8 w - 8 text - zion - purple";
                        >;"
                          <path d="M14.5 2H6a2 2 0 0 0 - 2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 - 2V7.5L14.5 2z" />;"
                          <polyline points="14 2 14 8 20 8" />;"
                          <path d="M12 18v - 6" />;"
                          <path d="M8 15h8" />;
                        </svg>;
                      </div>;"
                      <h3 className="text - white font - medium mb - 2">No Content Generated Yet</h3>;"
                      <p className="text - zion - slate - light max - w-md">;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        Use the settings panel to configure your content and click "Generate" to create AI - powered content.;
                      </p>;
                    </div>)}

<<<<<<< HEAD

"
                          className="h-8 w-8 text-zion-purple"
                        >"
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />"
                          <polyline points="14 2 14 8 20 8" />"
                          <path d="M12 18v-6" />"
                          <path d="M8 15h8" />
                        </svg>
                      </div>"
                      <h3 className="text-white font-medium mb-2">No Content Generated Yet</h3>"
                      <p className="text-zion-slate-light max-w-md">"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        Use the settings panel to configure your content and click "Generate" to create AI-powered content.
                      </p>
                    </div>
                  )}
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



                </CardContent>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                </CardContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

<<<<<<< HEAD
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    </>;
  ),; export default function ContentGenerator () {}
  const {};
  user, isLoading;
}= useAuth ();
const navigate = useNavigate ();'
const [contentType, setContentType] = useState<'blog' | 'newsletter'> ('blog');'
const [customPrompt, setCustomPrompt] = useState ('');'
=======
}

    </>;
  ),; export default function ContentGenerator () {
  const {
  user, isLoading 
}= useAuth ();
const navigate = useNavigate ();
const [contentType, setContentType] = useState<'blog' | 'newsletter'> ('blog');
const [customPrompt, setCustomPrompt] = useState ('');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const [topic, setTopic] = useState ('');
const [autoPublish, setAutoPublish] = useState (false);
const [includeImage, setIncludeImage] = useState (true);
const [isGenerating, setIsGenerating] = useState (false);
<<<<<<< HEAD
const [previewContent, setPreviewContent] = useState<any> (null);'
const [testEmail, setTestEmail] = useState ('');
//Redirect if not logged in React.useEffect ( () => {}
  if (!isLoading && !user) {}
=======
const [previewContent, setPreviewContent] = useState<any> (null);
const [testEmail, setTestEmail] = useState ('');
//Redirect if not logged in React.useEffect ( () => {
  if (!isLoading && !user) {
  
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;

}, [user, isLoading, navigate]);
<<<<<<< HEAD
const generateContent = async () => {}
  setIsGenerating (true);
setPreviewContent (null);
try {}
  const {}
  data, error '
}= await supabase.functions.invoke ('generate-content', {}
  body: {}
  contentType;
prompt: customPrompt || undefined;
topic: topic || undefined;
autoPublish;'
includeImage: contentType === 'blog'? includeImage : false;
}
});
}finally {}
  setIsGenerating (false) 
}
};
const sendTestNewsletter = async () => {}
  if (!testEmail) {}
}try {}
  const {}
  data, error '
}= await supabase.functions.invoke ('send-newsletter', {}
  body: {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  subject: previewContent.subject;
previewText: previewContent.previewText;
body: previewContent.body;
testMode: true;
<<<<<<< HEAD
testEmail;
}
});
}
};"
return (<> <Header /> <div className="min-h-screen bg-zion-blue flex items-center justify-center" > <div className="animate-pulse text-white" >Loading...</div> </div> <Footer /> </> return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12" > <div className="container mx-auto px-4" > <h1 className="text-3xl font-bold text-white mb-8" >Content Generator</h1> <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" > <div className="lg:col-span-1" > <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardHeader> <CardTitle className="text-white" >Content Settings</CardTitle> <CardDescription className="text-zion-slate-light" > Configure what type of content you want to generate. </CardDescription> </CardHeader> </SelectTrigger> <SelectContent className="bg-zion-blue-dark border border-zion-blue-light" > <SelectItem value="blog" className="text-white" >Blog Post</SelectItem> <SelectItem value="newsletter" className="text-white" >Email Newsletter</SelectItem> </SelectContent> </Select> </div> <div className="space-y-2" > <Label htmlFor="topic" className="text-white" >Topic (Optional) </Label> <Input /> </div> <div className="space-y-2" > <Label htmlFor="customPrompt" className="text-white" >Custom Prompt (Optional) </Label> <Textarea /> </div> {'"
  contentType === 'blog'&& (<> <div className="flex items-center justify-between" > <Label htmlFor="autoPublish" className="text-white" >Auto-Publish</Label> <Switch id="autoPublish" checked= {}
  autoPublish;
}onCheckedChange= {}
  setAutoPublish "
}/> </div> <div className="flex items-center justify-between" > <Label htmlFor="includeImage" className="text-white" >Generate Image Prompt</Label> <Switch /> </div> </>) "
}<Input id="testEmail" type="email" placeholder="your@email.com" className="bg-zion-blue border border-zion-blue-light text-white" value= {}
  testEmail;
}onChange= {}
  (e) => setTestEmail (e.target.value) 
}/> </div>) 
}</CardContent> <CardFooter> <Button > {"
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating... </>) : (<>Generate {'
  contentType === 'blog'? 'Blog Post': 'Newsletter' 
}</>) '"
}</Button> </CardFooter> </Card> </div> <div className="lg:col-span-2" > <Card className="bg-zion-blue-dark border border-zion-blue-light h-full" > <CardHeader> <CardTitle className="text-white" >Content Preview</CardTitle> <CardDescription className="text-zion-slate-light" > Generated content will appear here. </CardDescription> </CardHeader> <CardContent> </div>) : previewContent ? (contentType === 'blog' ? (<div className="space-y-4" > <Tabs defaultValue="preview" className="w-full" > <TabsList className="bg-zion-blue-light/30 w-full" > <TabsTrigger value="preview" >Preview</TabsTrigger> <TabsTrigger value="markdown" >Markdown</TabsTrigger> <TabsTrigger value="metadata" >Metadata</TabsTrigger> </TabsList> 
}"
}/> </div> </ScrollArea> </TabsContent> </pre> </ScrollArea> </TabsContent> <TabsContent value="metadata" className="pt-4" > <div className="space-y-4" > <div> <span key= {}
  index "
}className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan" > {}
  tag;
}</span>) ) 
}</div> </div> {"
  previewContent.tweetSummary && (<div> <h3 className="text-white font-semibold mb-1" >Tweet Summary</h3> <p className="text-zion-slate-light" > {}
  previewContent.tweetSummary;
}</p> </div>) 
}{"
  previewContent.imagePrompt && (<div> <h3 className="text-white font-semibold mb-1" >Image Prompt</h3> <p className="text-zion-slate-light" > {}
  previewContent.imagePrompt;
}</p> </div>) "
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}</div> </TabsContent> </Tabs> </div>) : (<div className="space-y-4" > <Tabs defaultValue="preview" className="w-full" > <TabsList className="bg-zion-blue-light/30 w-full" > <TabsTrigger value="preview" >Preview</TabsTrigger> <TabsTrigger value="html" >HTML</TabsTrigger> </TabsList> </Button> </div> </div> <div className="mt-4 flex justify-end" > <Button </Button> </div> </TabsContent> </pre> </ScrollArea> </TabsContent> </Tabs> </div>) ) : (<div className="flex flex-col items-center justify-center py-12 text-center" > <div className="bg-zion-blue-light/20 p-6 rounded-full mb-4" > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-zion-purple" > <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /> <polyline points="14 2 14 8 20 8" /> <path d="M12 18v-6" /> <path d="M8 15h8" /> </svg> </div> <h3 className="text-white font-medium mb-2" >No Content Generated Yet</h3> <p className="text-zion-slate-light max-w-md" > Use the settings panel to configure your content and click "Generate" to create AI-powered content. </p> </div>) 
}</CardContent> </Card> </div> </div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

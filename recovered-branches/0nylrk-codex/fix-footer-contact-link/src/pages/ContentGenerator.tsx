<<<<<<< HEAD


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

export default function ContentGenerator() {;
=======
class ErrorBoundary extends React.Component {

import {useNavigate} from "react-router-dom";

  const { user, isLoading } = useAuth();

  const navigate = useNavigate();'
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');'
  const [customPrompt, setCustomPrompt] = useState('');'

>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [topic, setTopic] = useState('');
  const [autoPublish, setAutoPublish] = useState(false);
  const [includeImage, setIncludeImage] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

<<<<<<< HEAD
  const [previewContent, setPreviewContent] = useState<any>(null);
  const [testEmail, setTestEmail] = useState('');
=======
  const navigate = useNavigate();'
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');'
  const [customPrompt, setCustomPrompt] = useState('');'

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

  const { user, isLoading } = useAuth();

  const navigate = useNavigate();'
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');'
  const [customPrompt, setCustomPrompt] = useState('');'

  const [topic, setTopic] = useState('');
  const [autoPublish, setAutoPublish] = useState(false);
  const [includeImage, setIncludeImage] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

import { ScrollArea } from "@/components/ui/scroll-area",
import { useNavigate } from "react-router-dom",
export default function ContentGenerator() {
  // Redirect if not logged in
}
React.useEffect(() => {
    }
    if (!isLoading && !user) {
  const { user, isLoading } = useAuth();

  const navigate = useNavigate();
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog');
  const [customPrompt, setCustomPrompt] = useState('');
  const [topic, setTopic] = useState('');
  const [autoPublish, setAutoPublish] = useState(false);
  const [includeImage, setIncludeImage] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);


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
>>>>>>> origin/cursor/delete-old-data-records-6bba


  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoading && !user) {

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
      toast.error("You must be logged in to access this page");
      navigate("/login?redirect=/content-generator")
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoading && !user) {
      toast.error("You must be logged in to access this page"),

      navigate("/login?redirect=/content-generator")


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
export default function ContentGenerator() { return null; }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Redirect if not logged in;
  React && React.useEffect(() => {;
    if (!isLoading && !user) {;"
      toast && toast.error("You must be logged in to access this page");"
      navigate("/login?redirect=/content-generator");
    }

<<<<<<< HEAD
  }, [user, isLoading, navigate]);
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        body: {;
          contentType,;
          prompt: customPrompt || undefined,;
          topic: topic || undefined,;
<<<<<<< HEAD


=======


          autoPublish;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
          includeImage: contentType === 'blog' ? includeImage : false;
        }
      });


<<<<<<< HEAD


      if (error) throw error;
      setPreviewContent(data);

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast && toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {;"
      console && console.error("Error generating content:", error);"
      toast && toast.error("Failed to generate content. Please try again.");
    } finally {;
      setIsGenerating(false);

<<<<<<< HEAD

=======

      if (error) throw error,
      
      setPreviewContent(data),

      if (error) throw error,
>>>>>>> origin/cursor/delete-old-data-records-6bba


      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`)
    } catch (error) {"
      console.error("Error generating content:", error),"
      toast.error("Failed to generate content. Please try again.")
    } finally {}
      setIsGenerating(false)
    }

<<<<<<< HEAD

  },


  const sendTestNewsletter = async () => {
    if (!testEmail) {

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast.error("Please enter a test email address");
      return;
    }
    if (!previewContent) {"
      toast.error("Generate newsletter content first");

  };


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }),;
      if (error) throw error,;
      setPreviewContent(data),;'`
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {;"
      console.error("Error generating content:", error),;"

      toast.error("Failed to generate content. Please try again.");
    } finally {;
      setIsGenerating(false);
    }

<<<<<<< HEAD
  },;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      toast && toast.error("Please enter a test email address");
      return;
    }
<<<<<<< HEAD



      toast && toast.error("Generate newsletter content first");
      return;
    }



=======
    if (!previewContent) {;
      toast && toast.error("Generate newsletter content first");
      return;
    }
    try {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const { data, error } = await supabase && supabase.functions.invoke('send-newsletter', {;
        body: {;
          subject: previewContent && previewContent.subject,;
          previewText: previewContent && previewContent.previewText,;
          body: previewContent && previewContent.body,;
          testMode: true,;
          testEmail;
        }


<<<<<<< HEAD

=======
      if (error) throw error,

      if (error) throw error,

  const [topic, setTopic] = useState(''),;
  const [autoPublish, setAutoPublish] = useState(false),;
  const [includeImage, setIncludeImage] = useState(true),;
  const [isGenerating, setIsGenerating] = useState(false),;

  const [testEmail, setTestEmail] = useState(''),;
;
  // Redirect if not logged in;
  React.useEffect(() => {;

      navigate("/login?redirect=/content-generator"),;
    }
  }, [user, isLoading, navigate]),;
;
  const generateContent = async () => {;
    setIsGenerating(true),;
    setPreviewContent(null),;
    ;


      const { data, error } = await supabase.functions.invoke('generate-content', {;
        body:{;
          contentType,;
          prompt:customPrompt || undefined,;
          topic:topic || undefined,;

          includeImage:contentType === 'blog' ? includeImage :false;
        }
      }),;
      ;
      if (error) throw error,;
      ;


      toast.success(`${contentType === 'blog' ? 'Blog post' :'Newsletter'} generated successfully!`),;
    } catch (error) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  },;
;
  const sendTestNewsletter = async () => {;

      toast.error("Please enter a test email address"),;
      return,;
    }
    ;

      toast.error("Generate newsletter content first"),;
      return,;
    }
    ;

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

      toast.error("Failed to send test newsletter. Please try again."),;
    }
  },;
;
  // Check if user is still loading;
  if (isLoading) {;
    return (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <>;

          <div className="animate-pulse text-white">Loading...</div>;
        </div>;
        <Footer />;
      </>;

<<<<<<< HEAD

                    <Input

                      id="topic"
                      placeholder={contentType === 'blog' ? "e.g., Hiring AI Freelancers" : "e.g., May Platform Updates"}

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



      }),;

      if (error) throw error,;

      toast.success(`Test newsletter sent to ${testEmail}!`);
    } catch (error) {;"
      console.error("Error sending test newsletter:", error);"
      toast.error("Failed to send test newsletter. Please try again.");
    }
</any>'
  const [contentType, setContentType] = useState<'blog' | 'newsletter'>('blog'),;''
  const [customPrompt, setCustomPrompt] = useState(''),;''
  const [topic, setTopic] = useState(''),;'
  const [autoPublish, setAutoPublish] = useState(false),;
  const [includeImage, setIncludeImage] = useState(true),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [previewContent, setPreviewContent] = useState<any>(null),;
</any>
      <>;
        <Header />;

        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;"
</div>"
          <div className="animate-pulse text-white">Loading...</div>;"
        </div>;
        <Footer />;

      </>;
    ),;
  },

  // Check if user is still loading;
  if (isLoading) {
    return (
      <>
        <Header />
"
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">"
          <div className="animate-pulse text-white">Loading...</div>"
        </div>
        <Footer />

      </>)
    )
    );
                    <Input;"
                      id="topic"""
                      placeholder={contentType === 'blog' ? "e.g., Hiring AI Freelancers" : "e.g., May Platform Updates"}""
                      className="bg-zion-blue border border-zion-blue-light text-white""
                      value={topic})
                      onChange={(e) => setTopic(e.target.value)}

                  <div className="space-y-2">"
                    <Label htmlFor="customPrompt" className="text-white">Custom Prompt (Optional)"
                    <Textarea;"
                      id="customPrompt"""
                      placeholder="Enter a custom prompt for the AI..."""
                      className="bg-zion-blue border border-zion-blue-light text-white min-h-[100px]""
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}

                    <>"
                      <div className="flex items-center justify-between">"
                        <Label htmlFor="autoPublish" className="text-white">Auto-Publish"
                        <Switch;"
                          id="autoPublish""
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
                        />

                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt"
                          id="includeImage""
      }),;
      if (error) throw error,;
      toast.success(`Test newsletter sent to ${testEmail}!`);
    } catch (error) {;"
      console.error("Error sending test newsletter:", error);""
      toast.error("Failed to send test newsletter. Please try again.");"
pr-12325

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
</Switch>
        <Header />;
</Header>"
        <div className="min-h-screen bg-zion-blue flex items-center justify-center">;"
</div>"
          <div className="animate-pulse text-white">Loading...</div>;"
        </div>;
        <Footer />;
</Footer>
      </>;)
    );

  }
;
  return (;



    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue py-12">;"
        <div className="container mx-auto px-4">;"
          <h1 className="text-3xl font-bold text-white mb-8">Content Generator</h1>;



          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            <div className="lg:col-span-1">;

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



                        />;
                      </div>;"
                      <div className="flex items-center justify-between">;"
                        <Label htmlFor="includeImage" className="text-white">Generate Image Prompt</Label>;

                        <Switch;
                          id="includeImage";

                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;
                    </>;
                  )}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
                      />;
                    </div>;
                  )}
                </CardContent>;
                <CardFooter>;

                  <Button
                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;

=======

                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
<Button;
                          id="includeImage";                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                  <Button;
                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple";"
                  >;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    {isGenerating ? (;
                      <>;
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                        Generating...;
                      </>;

                    ) : (;
                      <>Generate {contentType === 'blog' ? 'Blog Post' : 'Newsletter'}</>;
                    )}


<<<<<<< HEAD
=======
) :(;
                      <>Generate {contentType === 'blog' ? 'Blog Post' :'Newsletter'}</>;
                    )}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </Button>;
                </CardFooter>;
              </Card>;
            </div>;

<<<<<<< HEAD

=======
            ;

;
                </CardFooter>;
              </Card>;
            </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <div className="lg:col-span-2">;

              <Card className="bg-zion-blue-dark border border-zion-blue-light h-full">;
                <CardHeader>;"
                  <CardTitle className="text-white">Content Preview</CardTitle>;"
                  <CardDescription className="text-zion-slate-light">;"
                    Generated content will appear here.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  {isGenerating ? (;
                    <div className="flex flex-col items-center justify-center py-12">;"
                      <Loader2 className="h-8 w-8 animate-spin text-zion-purple mb-4" />;"
                      <p className="text-zion-slate-light">Generating content...</p>;"
                    </div>;

                  {isGenerating ? (;"
                    <div className="flex flex-col items-center justify-center py-12">;"
                      <Loader2 className="h-8 w-8 animate-spin text-zion-purple mb-4" />;"
                      <p className="text-zion-slate-light">Generating content...</p>;
                    </div>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
                                      .replace(/^#{1,6}\s+(.+)$/gm, "<h$1>$2</h$1>");
                                    __html: previewContent && previewContent.body                                      .replace(/^#{1,6}\s+(.+)$/gm, "<h$1>$2</h$1>");
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


=======

                                {previewContent && previewContent.body}
                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;
                          <TabsContent value="metadata" className="pt-4">;"
                            <div className="space-y-4">;"
                              <div>;
                                <h3 className="text-white font-semibold mb-1">Title</h3>;"
                                <p className="text-zion-slate-light">{previewContent && previewContent.title}</p>;"
                              </div>;

                              <div>;
                                <h3 className="text-white font-semibold mb-1">Meta Description</h3>;"
                                <p className="text-zion-slate-light">{previewContent && previewContent.metaDescription}</p>;"
                              </div>;

                              <div>;
                                <h3 className="text-white font-semibold mb-1">Tags</h3>;"
                                <div className="flex flex-wrap gap-2">;"
                                  {previewContent && previewContent.tags.map(("tag": string, "index": number) => (;
                                    <span
}
key={index}
                                      className="bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan">;"
                                      {tag}
                                    </span>;
                                  ))}
                                </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                            <div className="space-y-4">;
                              <div>;"
                                <h3 className="text-white font-semibold mb-1">Title</h3>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                              )}
                            </div>;
                          </TabsContent>;
                        </Tabs>;
                      </div>;


                        <Tabs defaultValue="preview" className="w-full">;
                          <TabsList className="bg-zion-blue-light/30 w-full">;
                            <TabsTrigger value="preview">Preview</TabsTrigger>;
                            <TabsTrigger value="html">HTML</TabsTrigger>;
                          </TabsList>;

<<<<<<< HEAD

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

                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"


  const [auto_publish, setAutoPublish] = useState (false);
  const [include_image, setIncludeImage] = useState (true);
  const [is_generating, setIsGenerating] = useState (false);

      navigate ("/login?redirect=/content - generator");
    }
  }, [user, is_loading, navigate]);
;

  const generate_content = async () => {
    setIsGenerating (true);
    setPreviewContent (null);
    try {
  // TODO: Implement
}"
      const { data, error } = await supabase.functions.invoke ('generate - content', {
        body: {
          content_type,
          prompt: custom_prompt || undefined,
          topic: topic || undefined,
          auto_publish;

          include_image: content_type === 'blog' ? include_image : false;
        })
      });

if (throw error) {
      setPreviewContent (data);`;
      toast.success (`${content_type === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`);
    } catch (error) {
      console.error ("Error generating content:", error);""
      toast.error ("Failed to generate content. Please try again.");"
    } finally {

  const sendTestNewsletter = async () => {
    // Check condition;
      toast.error ("Please enter a test email address");"
      return;
    // Check condition;
      toast.error ("Generate newsletter content first");"
  // TODO: Implement
      const { data, error } = await supabase.functions.invoke ('send - newsletter', {

          preview_text: preview_content.preview_text,
          body: preview_content.body,
          test_mode: true,
          test_email;

      toast.error ("Failed to send test newsletter. Please try again.");
    }
  }
;
  // Check if user is still loading;

          <div className="animate - pulse text - white">Loading...</div>;
        </div>;
        <Footer />;
      </>);
  }
  return (
    <>;

                      className="bg - zion - blue border border - zion - blue - light text - white";
                      value={topic}
                      on_change={(e) => set_topic (e.target.value)}
                    />;

                      className="bg - zion - blue border border - zion - blue - light text - white min - h-[100px]";
                      value={custom_prompt}
                      on_change={(e) => setCustomPrompt (e.target.value)}
                    />;

                          id="auto_publish";
                          checked={auto_publish}
                          onCheckedChange={setAutoPublish}
                        />;

                          id="include_image";
                          checked={include_image}
                          onCheckedChange={setIncludeImage}
                        />;
                      </div>;

                        className="bg - zion - blue border border - zion - blue - light text - white";
                        value={test_email}

                        on_change={(e) => setTestEmail (e.target.value)}

                    </div>)}

                    on_click={generate_content}

                      <>Generate {content_type === 'blog' ? 'Blog Post' : 'Newsletter'}</>)}
                  </Button>;
                </CardFooter>;
              </Card>;

                  <CardDescription className="text - zion - slate - light">;
                    Generated content will appear here.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;

                                      .replace (/\n\n / g, "<br><br>");
                                  }}
                                />;
                              </div>;
                            </ScrollArea>;

                              <pre className="bg - zion - blue whitespace - pre - wrap p - 4 rounded - md text - zion - slate - light overflow - auto">;
                                {preview_content.body}
                              </pre>;
                            </ScrollArea>;

                                      className="bg - zion - blue - light px - 2 py - 1 rounded - md text - xs text - zion - cyan";
                                    >;
                                      {tag}
                                    </span>))}
                                </div>;
                              </div>;
                              {preview_content.tweet_summary && (

                                  <p className="text - zion - slate - light">{preview_content.image_prompt}</p>;
                                </div>)}
                            </div>;
                          </TabsContent>;
                        </Tabs>;

                                dangerouslySetInnerHTML={{ __html: preview_content.body }}
                              <div className="mt - 6">;"
                                <Button className="bg - zion - purple hover:bg - zion - purple - dark text - white">;"

                            <div className="mt - 4 flex justify - end">;"
                                on_click={sendTestNewsletter}

                        Use the settings panel to configure your content and click "Generate" to create AI - powered content.;
                      </p>;
                    </div>)}


=======
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
                            <div className="mt-4 flex justify-end">;"
                              <Button,
onClick={sendTestNewsletter}
                                disabled={!testEmail}
                                className="bg-zion-blue-light "hover":bg-zion-blue text-white">;                                Send Test to {testEmail || "your email"}"
                              </Button>;
                            </div>;
                          </TabsContent>;
                          <TabsContent value="html" className="pt-4">;"
                            <ScrollArea className="h-[500px]">;"
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;"
                                {previewContent && previewContent.body}                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;
                        </Tabs>;
                      </div>;
                    );
                  ) : (;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD
=======

                          <TabsContent value="html" className="pt - 4">;"
                        ;)
                      </div>)) : ("
                    <div className="flex flex - col items - center justify - center py - 12 text - center">;"
                      <div className="bg - zion - blue - light / 20 p - 6 rounded - full mb - 4">;"
                          xmlns="http://www.w3.org / 2000 / svg";""
                          width="24";""
                          height="24";""
                          view_box="0 0 24 24";""
                          fill="none";""
                          stroke="current_color";""
                          stroke_width="2";""
                          stroke_linecap="round";""
                          stroke_linejoin="round";""
                          className="h - 8 w - 8 text - zion - purple";"
                          <path d="M14.5 2H6a2 2 0 0 0 - 2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 - 2V7.5L14.5 2z" />;"
                          <path d="M12 18v - 6" />;"
                      <h3 className="text - white font - medium mb - 2">No Content Generated Yet</h3>;""
                      <p className="text - zion - slate - light max - w-md">;"
                      </p>;)
                    </div>)}"
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />"
                          <polyline points="14 2 14 8 20 8" />"
                          <path d="M12 18v-6" />"
                          <path d="M8 15h8" />"
                      <h3 className="text-white font-medium mb-2">No Content Generated Yet</h3>""
                      <p className="text-zion-slate-light max-w-md">"
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
                </CardContent>;
=======
  )
}

>>>>>>> origin/cursor/delete-old-data-records-6bba

              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD


    </>;
  ),; export default function ContentGenerator () {}
  const {};
  user, isLoading;
}= useAuth ();
const navigate = useNavigate ();'
const [contentType, setContentType] = useState<'blog' | 'newsletter'> ('blog');'
const [customPrompt, setCustomPrompt] = useState ('');'

;
    </>;

  ),; export default function ContentGenerator () {
  const {
  // TODO: Implement
  user, isLoading;
}= useAuth ();
const navigate = useNavigate ();"
const [contentType, setContentType] = useState<'blog' | 'newsletter'> ('blog');

const [autoPublish, setAutoPublish] = useState (false);
const [includeImage, setIncludeImage] = useState (true);
const [isGenerating, setIsGenerating] = useState (false);

}
;

=======

    </>);
}
}
;

}, [user, isLoading, navigate]);
}, [user, isLoading, navigate]);
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
}onChange= {
  (e) => setTestEmail (e.target.value) 

}/> </div>) 
} <CardFooter> <Button > {
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating... </>) : (<>Generate {"
</Loader2>)
}</>) "
}   </div> <div className="lg:col-span-2" > <Card className="bg-zion-blue-dark border border-zion-blue-light h-full" > <CardHeader> <CardTitle className="text-white" >Content Preview <CardDescription className="text-zion-slate-light" > Generated content will appear here.   <CardContent> </div>) : previewContent ? (contentType === 'blog' ? (<div className="space-y-4" > <Tabs defaultValue="preview" className="w-full" > <TabsList className="bg-zion-blue-light/30 w-full" > <TabsTrigger value="preview" >Preview <TabsTrigger value="markdown" >Markdown <TabsTrigger value="metadata" >Metadata ""
}/> </div>   </pre>   <TabsContent value="metadata" className="pt-4" > <div className="space-y-4" > <div> <span key= {"
}</span>) ) 

}</CardContent> </Card> </div> </div> </div> </div> <Footer /> </>) 
</Footer>
    </>;
  );
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba

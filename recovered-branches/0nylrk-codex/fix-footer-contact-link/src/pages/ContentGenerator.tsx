
<<<<<<< HEAD
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
import { ScrollArea } from "@/components/ui/scroll-area",
import { useNavigate } from "react-router-dom",
=======
import React, { useState } from 'react';
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { toast } from &quot;sonner&quot;;
import { Loader2 } from &quot;lucide-react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { ScrollArea } from &quot;@/components/ui/scroll-area&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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

  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoading && !user) {
<<<<<<< HEAD
      toast.error("You must be logged in to access this page"),
      navigate("/login?redirect=/content-generator")
=======
      toast.error(&quot;You must be logged in to access this page&quot;);
      navigate(&quot;/login?redirect=/content-generator&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  }, [user, isLoading, navigate]),

  const generateContent = async () => {
    setIsGenerating(true),
    setPreviewContent(null),
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: {
          contentType,
          prompt: customPrompt || undefined,
          topic: topic || undefined,
          autoPublish,
          includeImage: contentType === 'blog' ? includeImage : false
        }
      }),
      
      if (error) throw error,
      
      setPreviewContent(data),
      toast.success(`${contentType === 'blog' ? 'Blog post' : 'Newsletter'} generated successfully!`)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating content:", error),
      toast.error("Failed to generate content. Please try again.")
=======
      console.error(&quot;Error generating content:&quot;, error);
      toast.error(&quot;Failed to generate content. Please try again.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsGenerating(false)
    }
  },

  const sendTestNewsletter = async () => {
    if (!testEmail) {
<<<<<<< HEAD
      toast.error("Please enter a test email address"),
      return
    }
    
    if (!previewContent) {
      toast.error("Generate newsletter content first"),
      return
=======
      toast.error(&quot;Please enter a test email address&quot;);
      return;
    }
    
    if (!previewContent) {
      toast.error(&quot;Generate newsletter content first&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
      }),
      
      if (error) throw error,
      
      toast.success(`Test newsletter sent to ${testEmail}!`)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error sending test newsletter:", error),
      toast.error("Failed to send test newsletter. Please try again.")
=======
      console.error(&quot;Error sending test newsletter:&quot;, error);
      toast.error(&quot;Failed to send test newsletter. Please try again.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Check if user is still loading
  if (isLoading) {
    return (
      <>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue flex items-center justify-center&quot;>
          <div className=&quot;animate-pulse text-white&quot;>Loading...</div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue py-12&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h1 className=&quot;text-3xl font-bold text-white mb-8&quot;>Content Generator</h1>
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;lg:col-span-1&quot;>
              <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                <CardHeader>
                  <CardTitle className=&quot;text-white&quot;>Content Settings</CardTitle>
                  <CardDescription className=&quot;text-zion-slate-light&quot;>
                    Configure what type of content you want to generate.
                  </CardDescription>
                </CardHeader>
                <CardContent className=&quot;space-y-6&quot;>
                  <div className=&quot;space-y-2&quot;>
                    <Label htmlFor=&quot;contentType&quot; className=&quot;text-white&quot;>Content Type</Label>
                    <Select value={contentType} onValueChange={(value) => setContentType(value as 'blog' | 'newsletter')}>
                      <SelectTrigger id=&quot;contentType&quot; className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;>
                        <SelectValue placeholder=&quot;Select content type&quot; />
                      </SelectTrigger>
                      <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                        <SelectItem value=&quot;blog&quot; className=&quot;text-white&quot;>Blog Post</SelectItem>
                        <SelectItem value=&quot;newsletter&quot; className=&quot;text-white&quot;>Email Newsletter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className=&quot;space-y-2&quot;>
                    <Label htmlFor=&quot;topic&quot; className=&quot;text-white&quot;>Topic (Optional)</Label>
                    <Input
                      id=&quot;topic&quot;
                      placeholder={contentType === 'blog' ? &quot;e.g., Hiring AI Freelancers&quot; : &quot;e.g., May Platform Updates&quot;}
                      className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                  
                  <div className=&quot;space-y-2&quot;>
                    <Label htmlFor=&quot;customPrompt&quot; className=&quot;text-white&quot;>Custom Prompt (Optional)</Label>
                    <Textarea
                      id=&quot;customPrompt&quot;
                      placeholder=&quot;Enter a custom prompt for the AI...&quot;
                      className=&quot;bg-zion-blue border border-zion-blue-light text-white min-h-[100px]&quot;
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                    />
                  </div>
                  
                  {contentType === 'blog' && (
                    <>
                      <div className=&quot;flex items-center justify-between&quot;>
                        <Label htmlFor=&quot;autoPublish&quot; className=&quot;text-white&quot;>Auto-Publish</Label>
                        <Switch
                          id=&quot;autoPublish&quot;
                          checked={autoPublish}
                          onCheckedChange={setAutoPublish}
                        />
                      </div>
                      
                      <div className=&quot;flex items-center justify-between&quot;>
                        <Label htmlFor=&quot;includeImage&quot; className=&quot;text-white&quot;>Generate Image Prompt</Label>
                        <Switch
                          id=&quot;includeImage&quot;
                          checked={includeImage}
                          onCheckedChange={setIncludeImage}
                        />
                      </div>
                    </>
                  )}
                  
                  {contentType === 'newsletter' && (
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;testEmail&quot; className=&quot;text-white&quot;>Test Email</Label>
                      <Input
                        id=&quot;testEmail&quot;
                        type=&quot;email&quot;
                        placeholder=&quot;your@email.com&quot;
                        className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;
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
                    className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
                        Generating...
                      </>
                    ) : (
                      <>Generate {contentType === 'blog' ? 'Blog Post' : 'Newsletter'}</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className=&quot;lg:col-span-2&quot;>
              <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light h-full&quot;>
                <CardHeader>
                  <CardTitle className=&quot;text-white&quot;>Content Preview</CardTitle>
                  <CardDescription className=&quot;text-zion-slate-light&quot;>
                    Generated content will appear here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className=&quot;flex flex-col items-center justify-center py-12&quot;>
                      <Loader2 className=&quot;h-8 w-8 animate-spin text-zion-purple mb-4&quot; />
                      <p className=&quot;text-zion-slate-light&quot;>Generating content...</p>
                    </div>
                  ) : previewContent ? (
                    contentType === 'blog' ? (
                      <div className=&quot;space-y-4&quot;>
                        <Tabs defaultValue=&quot;preview&quot; className=&quot;w-full&quot;>
                          <TabsList className=&quot;bg-zion-blue-light/30 w-full&quot;>
                            <TabsTrigger value=&quot;preview&quot;>Preview</TabsTrigger>
                            <TabsTrigger value=&quot;markdown&quot;>Markdown</TabsTrigger>
                            <TabsTrigger value=&quot;metadata&quot;>Metadata</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value=&quot;preview&quot; className=&quot;pt-4&quot;>
                            <ScrollArea className=&quot;h-[500px] pr-4&quot;>
                              <div className=&quot;space-y-4&quot;>
                                <h2 className=&quot;text-2xl font-bold text-white&quot;>{previewContent.title}</h2>
                                <p className=&quot;text-zion-slate-light&quot;>{previewContent.metaDescription}</p>
                                <div 
                                  className=&quot;prose prose-invert max-w-none&quot;
                                  dangerouslySetInnerHTML={{ 
                                    __html: previewContent.body
                                      .replace(/^#{1,6}\s+(.+)$/gm, &quot;<h$1>$2</h$1>&quot;)
                                      .replace(/\*\*(.+?)\*\*/g, &quot;<strong>$1</strong>&quot;)
                                      .replace(/\*(.+?)\*/g, &quot;<em>$1</em>&quot;)
                                      .replace(/^-\s+(.+)$/gm, &quot;<li>$1</li>&quot;)
                                      .replace(/\n\n/g, &quot;<br><br>&quot;)
                                  }}
                                />
                              </div>
                            </ScrollArea>
                          </TabsContent>
                          
                          <TabsContent value=&quot;markdown&quot; className=&quot;pt-4&quot;>
                            <ScrollArea className=&quot;h-[500px]&quot;>
                              <pre className=&quot;bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto&quot;>
                                {previewContent.body}
                              </pre>
                            </ScrollArea>
                          </TabsContent>
                          
                          <TabsContent value=&quot;metadata&quot; className=&quot;pt-4&quot;>
                            <div className=&quot;space-y-4&quot;>
                              <div>
                                <h3 className=&quot;text-white font-semibold mb-1&quot;>Title</h3>
                                <p className=&quot;text-zion-slate-light&quot;>{previewContent.title}</p>
                              </div>
                              
                              <div>
                                <h3 className=&quot;text-white font-semibold mb-1&quot;>Meta Description</h3>
                                <p className=&quot;text-zion-slate-light&quot;>{previewContent.metaDescription}</p>
                              </div>
                              
                              <div>
                                <h3 className=&quot;text-white font-semibold mb-1&quot;>Tags</h3>
                                <div className=&quot;flex flex-wrap gap-2&quot;>
                                  {previewContent.tags.map((tag: string, index: number) => (
                                    <span 
                                      key={index}
                                      className=&quot;bg-zion-blue-light px-2 py-1 rounded-md text-xs text-zion-cyan&quot;
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              {previewContent.tweetSummary && (
                                <div>
                                  <h3 className=&quot;text-white font-semibold mb-1&quot;>Tweet Summary</h3>
                                  <p className=&quot;text-zion-slate-light&quot;>{previewContent.tweetSummary}</p>
                                </div>
                              )}
                              
                              {previewContent.imagePrompt && (
                                <div>
                                  <h3 className=&quot;text-white font-semibold mb-1&quot;>Image Prompt</h3>
                                  <p className=&quot;text-zion-slate-light&quot;>{previewContent.imagePrompt}</p>
                                </div>
                              )}
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    ) : (
                      <div className=&quot;space-y-4&quot;>
                        <Tabs defaultValue=&quot;preview&quot; className=&quot;w-full&quot;>
                          <TabsList className=&quot;bg-zion-blue-light/30 w-full&quot;>
                            <TabsTrigger value=&quot;preview&quot;>Preview</TabsTrigger>
                            <TabsTrigger value=&quot;html&quot;>HTML</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value=&quot;preview&quot; className=&quot;pt-4&quot;>
                            <div className=&quot;bg-white rounded-lg p-6 text-black&quot;>
                              <h2 className=&quot;text-xl font-bold&quot;>{previewContent.subject}</h2>
                              <p className=&quot;text-gray-500 text-sm mt-2&quot;>{previewContent.previewText}</p>
                              <div className=&quot;border-t border-gray-200 my-4&quot;></div>
                              <div 
                                className=&quot;prose max-w-none&quot;
                                dangerouslySetInnerHTML={{ __html: previewContent.body }}
                              />
                              <div className=&quot;mt-6&quot;>
                                <Button className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;>
                                  {previewContent.cta || &quot;Visit Zion Marketplace&quot;}
                                </Button>
                              </div>
                            </div>
                            
                            <div className=&quot;mt-4 flex justify-end&quot;>
                              <Button
                                onClick={sendTestNewsletter}
                                disabled={!testEmail}
                                className=&quot;bg-zion-blue-light hover:bg-zion-blue text-white&quot;
                              >
                                Send Test to {testEmail || &quot;your email&quot;}
                              </Button>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value=&quot;html&quot; className=&quot;pt-4&quot;>
                            <ScrollArea className=&quot;h-[500px]&quot;>
                              <pre className=&quot;bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto&quot;>
                                {previewContent.body}
                              </pre>
                            </ScrollArea>
                          </TabsContent>
                        </Tabs>
                      </div>
                    )
                  ) : (
                    <div className=&quot;flex flex-col items-center justify-center py-12 text-center&quot;>
                      <div className=&quot;bg-zion-blue-light/20 p-6 rounded-full mb-4&quot;>
                        <svg
                          xmlns=&quot;http://www.w3.org/2000/svg&quot;
                          width=&quot;24&quot;
                          height=&quot;24&quot;
                          viewBox=&quot;0 0 24 24&quot;
                          fill=&quot;none&quot;
                          stroke=&quot;currentColor&quot;
                          strokeWidth=&quot;2&quot;
                          strokeLinecap=&quot;round&quot;
                          strokeLinejoin=&quot;round&quot;
                          className=&quot;h-8 w-8 text-zion-purple&quot;
                        >
                          <path d=&quot;M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z&quot; />
                          <polyline points=&quot;14 2 14 8 20 8&quot; />
                          <path d=&quot;M12 18v-6&quot; />
                          <path d=&quot;M8 15h8&quot; />
                        </svg>
                      </div>
                      <h3 className=&quot;text-white font-medium mb-2&quot;>No Content Generated Yet</h3>
                      <p className=&quot;text-zion-slate-light max-w-md&quot;>
                        Use the settings panel to configure your content and click &quot;Generate&quot; to create AI-powered content.
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

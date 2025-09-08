

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
  const [previewContent, setPreviewContent] = useState<any>(null);
  const [testEmail, setTestEmail] = useState('');
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



  }, [user, isLoading, navigate]);




      if (error) throw error;
      setPreviewContent(data);



  },


  const sendTestNewsletter = async () => {
    if (!testEmail) {




  },;



      toast && toast.error("Generate newsletter content first");
      return;
    }






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

                      />;
                    </div>;
                  )}
                </CardContent>;
                <CardFooter>;

                  <Button
                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;







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


                </CardContent>;


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


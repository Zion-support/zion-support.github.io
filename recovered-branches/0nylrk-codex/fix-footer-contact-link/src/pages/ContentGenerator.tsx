  // Redirect if not logged in
  React.useEffect(() => {
    if (!isLoading && !user) {
      toast.error("You must be logged in to access this page");
      navigate("/login?redirect=/content-generator")
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

                          id="includeImage";                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                  <Button;
                    onClick={generateContent}
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple";"
                  >;
                </CardFooter>;
              </Card>;
            </div>;
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
                  ) : previewContent ? (;                    contentType === 'blog' ? (;
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


                                className="bg-zion-blue-light hover:bg-zion-blue text-white">;                                Send Test to {testEmail || "your email"}
                              </Button>;
                            </div>;
                          </TabsContent>;

                          <TabsContent value="html" className="pt-4">;
                            <ScrollArea className="h-[500px]">;
                              <pre className="bg-zion-blue whitespace-pre-wrap p-4 rounded-md text-zion-slate-light overflow-auto">;
                                {previewContent && previewContent.body}                              </pre>;
                            </ScrollArea>;
                          </TabsContent>;
                        </Tabs>;
                      </div>;
                    );
                  ) : (;

                        <svg
                          xmlns="http://www && www.w3.org/2000/svg"                                    </span>;
                                  ))}
                        <svg
                          xmlns="http://www && www.w3.org/2000/svg"
                          strokeLinejoin="round"                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

    </>);
}

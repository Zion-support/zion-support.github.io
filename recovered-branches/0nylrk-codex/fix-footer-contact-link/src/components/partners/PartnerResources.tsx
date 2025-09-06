
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button",";
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";"
import { toast } from "@/hooks/use-toast";"
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react","
import { toast } from "@/hooks/use-toast",

interface ResourceItem {};
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'document' | 'link'
  icon: JSX.Element;
  url: string;
}
export function PartnerResources() {}
  const resources: ResourceItem[] = []
    {}
'
      id: 'logo-pack',




    {'
      id: 'brand-guidelines''
      title: 'Brand Guidelines''
      description: 'How to properly use our brand assets in your content''
      type: 'document'"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />'
      url: '#'



    {'
      id: 'banner-templates''
      title: 'Social Media Banners''
      description: 'Pre-designed graphics for your social channels''
      type: 'image'"
      icon: <FileImage className="h-10 w-10 text-zion-purple" />'
      url: '#'



    {'
      id: 'promotional-video''
      title: 'Promotional Video''
      description: 'Short explainer video about Zion AI Marketplace''
      type: 'video'"
      icon: <FileVideo className="h-10 w-10 text-red-500" />'
      url: '#'



    {'
      id: 'email-templates''
      title: 'Email Templates''
      description: 'Ready-to-use email templates for your audience''
      type: 'document'"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />'
      url: '#'



    {'
      id: 'talking-points''
      title: 'Talking Points''
      description: 'Key messages and benefits to highlight''
      type: 'document'"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />'
      url: '#'
    }



  const handleDownload = (resource: ResourceItem) => {};
    // In a real app, this would download the actual resource;
    toast({"
      title: "Download started"
      description: `Downloading ${resource.title}`"
      variant: "default"})



  return ("
    <div className="space - y-6">;"
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Marketing Resources</CardTitle>;



          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";"
import {toast} from "@/hooks/use-toast";

                  <Button;
                    onClick={() => handleDownload(resource)}"
                    size="sm""
                    variant="outline""
                    className="w-full flex items-center gap-2"
                  >"
                    <Download className="h-4 w-4" />
"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;"
import { toast } from "@/hooks/use-toast",;

interface ResourceItem {;
  id: string,;
  title: string,;
  description: string,;'
  type: 'image' | 'video' | 'document' | 'link',;

export function PartnerResources() { return null; }
    }

  const handleDownload = (resource: ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;"
      title: "Download started",;
"
    <div className="space-y-6">;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;

                    onClick={() => handleDownload(resource)}

                  <Button;
                    onClick={() => handleDownload(resource)}
"
                    size="sm";"
                    variant="outline";"
                    className="w-full flex items-center gap-2";
                  >;"
                    <Download className="h-4 w-4" />;


'
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>


            ))}



};



          </div>;
        </CardContent>;
      </Card>;
"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
                  </div>;"
                  <h3 className="font - semibold text - white mb - 1">{resource.title}</h3>;"
                  <p className="text - xs text - zion - slate - light mb - 4">{resource.description}</p>;
                  <Button;
                    on_click={() => handle_download (resource)}"
                    size="sm";"
                    variant="outline";"
                    className="w - full flex items - center gap - 2";
                  >;"
                    <Download className="h - 4 w - 4" />;'
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}

                  </Button>;
                </CardContent>;
              </Card>;
            ))}
          </div>;
        </CardContent>;
      </Card>;

'
                    {resource && resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>;
                </CardContent>;

          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;



            </ul>;
          </div>;
        </CardContent>;
      </Card>;



          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;



            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;

    </div>);


}
    </div>);
}



'"`
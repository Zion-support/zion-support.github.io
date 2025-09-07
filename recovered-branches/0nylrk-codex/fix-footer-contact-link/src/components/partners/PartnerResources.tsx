<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";
interface ResourceItem {
  id: string,
  title: string,
  description: string,
  type: 'image' | 'video' | 'document' | 'link',
  icon: JSX.Element,
  url: string}

export function PartnerResources() {
  const resources: ResourceItem[] = [
    {
      id: 'logo-pack',
      title: 'Zion AI Logo Pack',
      description: 'Official logos in various formats (PNG, SVG, JPG)',
      type: 'image',
      icon: <FileImage className = $2;
      url: '#'
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      description: 'How to properly use our brand assets in your content',
      type: 'document',
      icon: <FileText className = $2;
      url: '#'
    },
    {
      id: 'banner-templates',
      title: 'Social Media Banners',
      description: 'Pre-designed graphics for your social channels',
      type: 'image',
      icon: <FileImage className = $2;
      url: '#'
    },
    {
      id: 'promotional-video',
      title: 'Promotional Video',
      description: 'Short explainer video about Zion AI Marketplace',
      type: 'video',
      icon: <FileVideo className = $2;
      url: '#'
    },
    {
      id: 'email-templates',
      title: 'Email Templates',
      description: 'Ready-to-use email templates for your audience',
      type: 'document',
      icon: <FileText className = $2;
      url: '#'
    },
    {
      id: 'talking-points',
      title: 'Talking Points',
      description: 'Key messages and benefits to highlight',
      type: 'document',
      icon: <FileText className = $2;
      url: '#'
    }
  ],

  const handleDownload = (resource: ResourceItem) => {
    // In a real app, this would download the actual resource
    toast({
      title: "Download started",
      description: `Downloading ${resource.title}`,
      variant: "default"})
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",

<<<<<<< HEAD
import { toast } from "@/hooks/use-toast",
=======
<<<<<<< HEAD
import { toast } from "@/hooks/use-toast",
=======
<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",
import { toast } from "@/hooks/use-toast",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ResourceItem {

  id: string
  title: string
  description: string
  type: 'image' | 'video' | 'document' | 'link'
  icon: JSX.Element

  url: string
}
export function PartnerResources() {
  const resources: ResourceItem[] = [
    {

<<<<<<< HEAD
      type: 'image',
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,
      url: '#'
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      id: 'logo-pack',

    {

      id: 'brand-guidelines'
      title: 'Brand Guidelines'
      description: 'How to properly use our brand assets in your content'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />

      url: '#'

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {
      id: 'banner-templates'
      title: 'Social Media Banners'
      description: 'Pre-designed graphics for your social channels'
      type: 'image'
      icon: <FileImage className="h-10 w-10 text-zion-purple" />
      url: '#'

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {

      id: 'promotional-video'
      title: 'Promotional Video'
      description: 'Short explainer video about Zion AI Marketplace'
      type: 'video'
      icon: <FileVideo className="h-10 w-10 text-red-500" />
      url: '#'

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {
      id: 'email-templates'
      title: 'Email Templates'
      description: 'Ready-to-use email templates for your audience'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
      url: '#'

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {
      id: 'talking-points'
      title: 'Talking Points'
      description: 'Key messages and benefits to highlight'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />

      url: '#'

  ],

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
  ];
  ],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleDownload = (resource: ResourceItem) => {

    // In a real app, this would download the actual resource
    toast({
      title: "Download started"
      description: `Downloading ${resource.title}`
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      variant: "default"})
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
;
interface ResourceItem {;
  id:string,;
  title:string,;
  description:string,;
  type:'image' | 'video' | 'document' | 'link',;
  icon:JSX.Element,;
  url:string;
}
;
export function PartnerResources() {;
  const resources:ResourceItem[] = [;
    {;
      id:'logo-pack',;
      title:'Zion AI Logo Pack',;
      description:'Official logos in various formats (PNG, SVG, JPG)',;
      type:'image',;
      icon:<FileImage className="h-10 w-10 text-zion-purple" />,;
      url:'#';
    },;
    {;
      id:'brand-guidelines',;
      title:'Brand Guidelines',;
      description:'How to properly use our brand assets in your content',;
      type:'document',;
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;
      url:'#';
    },;
    {;
      id:'banner-templates',;
      title:'Social Media Banners',;
      description:'Pre-designed graphics for your social channels',;
      type:'image',;
      icon:<FileImage className="h-10 w-10 text-zion-purple" />,;
      url:'#';
    },;
    {;
      id:'promotional-video',;
      title:'Promotional Video',;
      description:'Short explainer video about Zion AI Marketplace',;
      type:'video',;
      icon:<FileVideo className="h-10 w-10 text-red-500" />,;
      url:'#';
    },;
    {;
      id:'email-templates',;
      title:'Email Templates',;
      description:'Ready-to-use email templates for your audience',;
      type:'document',;
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;
      url:'#';
    },;
    {;
      id:'talking-points',;
      title:'Talking Points',;
      description:'Key messages and benefits to highlight',;
      type:'document',;
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;
      url:'#';
    }
  ],;
;
  const handleDownload = (resource:ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title:"Download started",;
      description:`Downloading ${resource.title}`,;
      variant:"default"}),;
  },;
;
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  },

  return (
    <div className="space - y-6">;

      <Card className="bg - zion - blue - dark border - zion - blue - light">;

        <CardHeader>;
          <CardTitle > Marketing Resources</CardTitle>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
=======
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
            {resources.map ((resource) => (
              <Card key={resource.id} className="bg - zion - blue border - zion - blue - light overflow - hidden">;
                <CardContent className="p - 6 flex flex - col items - center text - center">;
                  <div className="mb - 4">;
                    {resource.icon}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
  }
>>>>>>> merged-prs-20250907-203621
  },

  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Marketing Resources</CardTitle>
          <CardDescription>
            Download brand assets and marketing materials to promote Zion AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>
<<<<<<< HEAD
                  <Button 
                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Promotion Guidelines</CardTitle>
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <Button

                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"

                    className="w-full flex items-center gap-2"

                    <Download className="h-4 w-4" />
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;

import { toast } from "@/hooks/use-toast",;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ResourceItem {;
  id: string,;
  title: string,;
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
<<<<<<< HEAD
  icon: JSX.Element,;
  url: string;
}
;
=======
  icon: JSX && JSX.Element,;
  url: string;
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function PartnerResources() {;
  const resources: ResourceItem[] = [;
    {;
      id: 'logo-pack',;
      title: 'Zion AI Logo Pack',;
<<<<<<< HEAD
      description: 'Official logos in various formats (PNG, SVG, JPG)',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    },;
=======
      description: 'Official logos in various formats (PNG, SVG, JPG)';
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      id: 'brand-guidelines',;
      title: 'Brand Guidelines',;
      description: 'How to properly use our brand assets in your content',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      id: 'banner-templates',;
      title: 'Social Media Banners',;
      description: 'Pre-designed graphics for your social channels',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      id: 'promotional-video',;
      title: 'Promotional Video',;
      description: 'Short explainer video about Zion AI Marketplace',;
      type: 'video',;
      icon: <FileVideo className="h-10 w-10 text-red-500" />,;
      url: '#';
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      id: 'email-templates',;
      title: 'Email Templates',;
      description: 'Ready-to-use email templates for your audience',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {;
      id: 'talking-points',;
      title: 'Talking Points',;
      description: 'Key messages and benefits to highlight',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    }
<<<<<<< HEAD
  ],;
=======
  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleDownload = (resource: ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",;
<<<<<<< HEAD
      description: `Downloading ${resource.title}`;
      variant: "default"});
  };
  return (;
=======
      description: `Downloading ${resource && resource.title}`,;
      variant: "default"});
  };

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="space-y-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
>>>>>>> origin/chore/fix-lint-and-merge
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
        <CardContent>;

                  </Button>
                </CardContent>
              </Card>                  </Button>;
                </CardContent>;

        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>
}
          </div>;
        </CardContent>;
      </Card>;

=======
        <CardContent>;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;
<<<<<<< HEAD

                    className="w-full flex items-center gap-2";
                  >;"
                    <Download className="h-4 w-4" />;

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;
            {resources.map((resource) => (;
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;
                <CardContent className="p-6 flex flex-col items-center text-center">;
                  <div className="mb-4">;
                    {resource.icon}
                  </div>;
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>;
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>;
                  <Button;
=======
            {resources && resources.map((resource) => (;
              <Card key={resource && resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;
                <CardContent className="p-6 flex flex-col items-center text-center">;
                  <div className="mb-4">;
                    {resource && resource.icon}
                  </div>;
                  <h3 className="font-semibold text-white mb-1">{resource && resource.title}</h3>;
                  <p className="text-xs text-zion-slate-light mb-4">{resource && resource.description}</p>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <Button
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    onClick={() => handleDownload(resource)}
                    size="sm";
                    variant="outline";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    className="w-full flex items-center gap-2";
                  >;"
                    <Download className="h-4 w-4" />;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>
<<<<<<< HEAD

            ))}
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Promotion Guidelines</CardTitle>
>>>>>>> merged-prs-20250907-203621
          <CardDescription>
            Best practices for promoting the Zion AI Marketplace
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Do's</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
              <li>Use our official brand assets from the resources provided</li>
              <li>Share your unique referral link in your content</li>
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>
              <li>Be transparent that you're a partner and may earn from referrals</li>
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>
            </ul>
          </div>
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
              <li>Make unrealistic promises about earnings or results</li>
              <li>Use manipulative or misleading marketing tactics</li>
              <li>Spam your referral link across unrelated content</li>
              <li>Modify or alter our brand assets in unauthorized ways</li>
              <li>Create fake accounts or use bots to generate referrals</li>
            </ul>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Partner Support</CardTitle>
          <CardDescription>
            Need help with your affiliate marketing? Contact our partner support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center py-6">
          <p className="text-zion-slate-light mb-4">
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.
            Feel free to reach out if you have questions about promotions, resources, or payment.
          </p>
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">
            Contact Partner Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          </div>
        </CardContent>
      </Card>
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Promotion Guidelines</CardTitle>
          <CardDescription>
            Best practices for promoting the Zion AI Marketplace
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Do's</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
              <li>Use our official brand assets from the resources provided</li>
              <li>Share your unique referral link in your content</li>
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>
              <li>Be transparent that you're a partner and may earn from referrals</li>
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
              <li>Make unrealistic promises about earnings or results</li>
              <li>Use manipulative or misleading marketing tactics</li>
              <li>Spam your referral link across unrelated content</li>
              <li>Modify or alter our brand assets in unauthorized ways</li>
              <li>Create fake accounts or use bots to generate referrals</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Partner Support</CardTitle>
          <CardDescription>
            Need help with your affiliate marketing? Contact our partner support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center py-6">
          <p className="text-zion-slate-light mb-4">
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.
            Feel free to reach out if you have questions about promotions, resources, or payment.
          </p>
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">
            Contact Partner Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )

};

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
                    {resource.type === 'link' ? 'Visit Link' :'Download'}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>;
        </CardContent>;
      </Card>;
"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;

                  <p className="text - xs text - zion - slate - light mb - 4">{resource.description}</p>;
                  <Button;
                    on_click={() => handle_download (resource)}"
                    size="sm";"
                    variant="outline";"
                    className="w - full flex items - center gap - 2";
                  >;"
                    <Download className="h - 4 w - 4" />;'
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Button>;

                </CardContent>;
              </Card>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Promotion Guidelines</CardTitle>;
=======
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
<<<<<<< HEAD
          <CardTitle>Promotion Guidelines</CardTitle>;
};
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
=======
          <CardTitle > Promotion Guidelines</CardTitle>;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
};
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
>>>>>>> origin/chore/fix-lint-and-merge
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
                    <Download className="h - 4 w - 4" />;"
=======
<<<<<<< HEAD

=======
                    <Download className="h - 4 w - 4" />;"
=======
        <CardContent className="space-y-4">;
          <div className="space-y-2">;
            <h3 className="text-lg font-semibold text-white">Do's</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;
              <li>Use our official brand assets from the resources provided</li>;
              <li>Share your unique referral link in your content</li>;
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;
              <li>Be transparent that you're a partner and may earn from referrals</li>;
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
          </div>;
          <div className="space-y-2">;
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;
              <li>Make unrealistic promises about earnings or results</li>;
              <li>Use manipulative or misleading marketing tactics</li>;
              <li>Spam your referral link across unrelated content</li>;
              <li>Modify or alter our brand assets in unauthorized ways</li>;
              <li>Create fake accounts or use bots to generate referrals</li>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <li > Use our official brand assets from the resources provided</li>;
              <li > Share your unique referral link in your content</li>;
              <li > Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;"
              <li > Be transparent that you're a partner and may earn from referrals</li>;
              <li > Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
            <h3 className="text - lg font - semibold text - white">Don'ts</h3>;
pr-12325
          </div>;'
          <div className="space - y-2">;"
</div>"
            <h3 className="text - lg font - semibold text - white">Don'ts</h3>;''
            <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light">;"
</ul>
>>>>>>> origin/chore/fix-lint-and-merge
              <li > Make unrealistic promises about earnings or results</li>;
              <li > Use manipulative or misleading marketing tactics</li>;
              <li > Spam your referral link across unrelated content</li>;
              <li > Modify or alter our brand assets in unauthorized ways</li>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<CardContent className="space-y-4">;
          <div className="space-y-2">;
            <h3 className="text-lg font-semibold text-white">Do's</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;
              <li>Use our official brand assets from the resources provided</li>;
              <li>Share your unique referral link in your content</li>;
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;
              <li>Be transparent that you're a partner and may earn from referrals</li>;
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
          </div>;
          <div className="space-y-2">;
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;
              <li>Make unrealistic promises about earnings or results</li>;
              <li>Use manipulative or misleading marketing tactics</li>;
              <li>Spam your referral link across unrelated content</li>;
              <li>Modify or alter our brand assets in unauthorized ways</li>;
              <li>Create fake accounts or use bots to generate referrals</li>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </ul>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
=======

<<<<<<< HEAD
=======
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Partner Support</CardTitle>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
        <CardContent className="flex flex-col items-center text-center py-6">;
          <p className="text-zion-slate-light mb-4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">;
=======

        <CardContent className="flex flex - col items - center text - center py - 6">;
          <p className="text - zion - slate - light mb - 4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg - zion - purple hover: bg - zion - purple - dark">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;

    </div>);
    </div>;]"
pr-12325

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>);
}

    </div>;
  );
}
<<<<<<< HEAD
}
=======
}
=======

}

<<<<<<< HEAD
    </div>);
    </div>;
  ); interface ResourceItem {
  id: string;
title: string;
description: string;
type: 'image' | 'video' | 'document' | 'link';
icon: JSX.Element;
url: string 
}const resources: ResourceItem[] = [ {
  const handleDownload = (resource: ResourceItem) => {
  //In a real app, this would download the actual resource toast ({
  
};
}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>) 
}
    </div>;
  );
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

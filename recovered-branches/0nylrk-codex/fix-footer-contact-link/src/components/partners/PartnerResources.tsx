<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";
=======
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
<<<<<<< HEAD

      id: 'logo-pack'
      title: 'Zion AI Logo Pack'
      description: 'Official logos in various formats (PNG, SVG, JPG)';
      type: 'image'
      icon: <FileImage className="h-10 w-10 text-zion-purple" />
      url: '#'
    }
=======
      id: 'logo-pack',
<<<<<<< HEAD
      title: 'Zion AI Logo Pack',;
      description: 'Official logos in various formats (PNG, SVG, JPG)';
=======
      title: 'Zion AI Logo Pack',
      description: 'Official logos in various formats (PNG, SVG, JPG)',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      type: 'image',
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,
      url: '#'
    },
<<<<<<< HEAD
=======

      id: 'logo-pack',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 'brand-guidelines'
      title: 'Brand Guidelines'
      description: 'How to properly use our brand assets in your content'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
      url: '#'
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 'banner-templates'
      title: 'Social Media Banners'
      description: 'Pre-designed graphics for your social channels'
      type: 'image'
      icon: <FileImage className="h-10 w-10 text-zion-purple" />
      url: '#'
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 'promotional-video'
      title: 'Promotional Video'
      description: 'Short explainer video about Zion AI Marketplace'
      type: 'video'
      icon: <FileVideo className="h-10 w-10 text-red-500" />
      url: '#'
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 'email-templates'
      title: 'Email Templates'
      description: 'Ready-to-use email templates for your audience'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
      url: '#'
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: 'talking-points'
      title: 'Talking Points'
      description: 'Key messages and benefits to highlight'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
      url: '#'
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======


  ],



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  ];
=======
  ],

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleDownload = (resource: ResourceItem) => {
    // In a real app, this would download the actual resource
    toast({
      title: "Download started"
      description: `Downloading ${resource.title}`
      variant: "default"})
<<<<<<< HEAD


  },



=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Download, FileImage, FileText, FileType, FileVideo, Link } from './lucide-react';
import { toast } from '@/hooks / use - toast';
interface ResourceItem {
  id: string,
  title: string,
  description: string,
  type: 'image' | 'video' | 'document' | 'link',
  icon: JSX.Element,
  url: string;
}
export /**
 * PartnerResources - Function description
 */
function PartnerResources() {
  const resources: ResourceItem[] = [;
    {
      id: 'logo - pack',
      title: 'Zion AI Logo Pack',
      description: 'Official logos in various formats (PNG, SVG, JPG)';
      type: 'image',
      icon: <FileImage className="h - 10 w - 10 text - zion - purple" />,
      url: '#';
    }
    {
      id: 'brand - guidelines',
      title: 'Brand Guidelines',
      description: 'How to properly use our brand assets in your content',
      type: 'document',
      icon: <FileText className="h - 10 w - 10 text - zion - cyan" />,
      url: '#';
    }
    {
      id: 'banner - templates',
      title: 'Social Media Banners',
      description: 'Pre - designed graphics for your social channels',
      type: 'image',
      icon: <FileImage className="h - 10 w - 10 text - zion - purple" />,
      url: '#';
    }
    {
      id: 'promotional - video',
      title: 'Promotional Video',
      description: 'Short explainer video about Zion AI Marketplace',
      type: 'video',
      icon: <FileVideo className="h - 10 w - 10 text - red - 500" />,
      url: '#';
    }
    {
      id: 'email - templates',
      title: 'Email Templates',
      description: 'Ready - to - use email templates for your audience',
      type: 'document',
      icon: <FileText className="h - 10 w - 10 text - zion - cyan" />,
      url: '#';
    }
    {
      id: 'talking - points',
      title: 'Talking Points',
      description: 'Key messages and benefits to highlight',
      type: 'document',
      icon: <FileText className="h - 10 w - 10 text - zion - cyan" />,
      url: '#';
    }
  ];
;
  const handle_download = (resource: ResourceItem) =>: any {
    // In a real app, this would download the actual resource;
    toast ({
      title: "Download started",
      description: `Downloading ${resource.title}`,
      variant: "default"});
  }
;
  return (
    <div className="space - y-6">;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Marketing Resources</CardTitle>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
            {resources.map ((resource) => (
              <Card key={resource.id} className="bg - zion - blue border - zion - blue - light overflow - hidden">;
                <CardContent className="p - 6 flex flex - col items - center text - center">;
                  <div className="mb - 4">;
                    {resource.icon}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";
=======
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Button
                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ResourceItem {;
  id: string,;
  title: string,;
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
<<<<<<< HEAD
  icon: JSX && JSX.Element,;
  url: string;
}
=======
  icon: JSX.Element,;
  url: string;
}
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function PartnerResources() {;
  const resources: ResourceItem[] = [;
    {;
      id: 'logo-pack',;
      title: 'Zion AI Logo Pack',;
<<<<<<< HEAD
      description: 'Official logos in various formats (PNG, SVG, JPG)';
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    };
=======
      description: 'Official logos in various formats (PNG, SVG, JPG)',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: 'brand-guidelines',;
      title: 'Brand Guidelines',;
      description: 'How to properly use our brand assets in your content',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
<<<<<<< HEAD
    };
=======
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: 'banner-templates',;
      title: 'Social Media Banners',;
      description: 'Pre-designed graphics for your social channels',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
<<<<<<< HEAD
    };
=======
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: 'promotional-video',;
      title: 'Promotional Video',;
      description: 'Short explainer video about Zion AI Marketplace',;
      type: 'video',;
      icon: <FileVideo className="h-10 w-10 text-red-500" />,;
      url: '#';
<<<<<<< HEAD
    };
=======
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: 'email-templates',;
      title: 'Email Templates',;
      description: 'Ready-to-use email templates for your audience',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
<<<<<<< HEAD
    };
=======
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: 'talking-points',;
      title: 'Talking Points',;
      description: 'Key messages and benefits to highlight',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    }
<<<<<<< HEAD
  ];
=======
  ],;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleDownload = (resource: ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",;
<<<<<<< HEAD
      description: `Downloading ${resource && resource.title}`,;
      variant: "default"});
  };
  return (
=======
      description: `Downloading ${resource.title}`;
      variant: "default"});
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;
<<<<<<< HEAD
            {resources && resources.map((resource) => (;
              <Card key={resource && resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;
                <CardContent className="p-6 flex flex-col items-center text-center">;
                  <div className="mb-4">;
                    {resource && resource.icon}
                  </div>;
                  <h3 className="font-semibold text-white mb-1">{resource && resource.title}</h3>;
                  <p className="text-xs text-zion-slate-light mb-4">{resource && resource.description}</p>;
                  <Button
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {resources.map((resource) => (;
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;
                <CardContent className="p-6 flex flex-col items-center text-center">;
                  <div className="mb-4">;
                    {resource.icon}
                  </div>;
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>;
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>;
<<<<<<< HEAD
                  <Button ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <Button;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    onClick={() => handleDownload(resource)}
                    size="sm";
                    variant="outline";
                    className="w-full flex items-center gap-2";
                  >;
                    <Download className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
<<<<<<< HEAD
=======
            ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======


};


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
                    {resource && resource.type === 'link' ? 'Visit Link' : 'Download'}
=======
                    {resource.type === 'link' ? 'Visit Link' :'Download'}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </Button>;
                </CardContent>;
              </Card>;
            ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
                  </div>;
                  <h3 className="font - semibold text - white mb - 1">{resource.title}</h3>;
                  <p className="text - xs text - zion - slate - light mb - 4">{resource.description}</p>;
                  <Button;
                    on_click={() => handle_download (resource)}
                    size="sm";
                    variant="outline";
                    className="w - full flex items - center gap - 2";
                  >;
                    <Download className="h - 4 w - 4" />;
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>;
                </CardContent>;
              </Card>))}
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Promotion Guidelines</CardTitle>;
=======
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
        <CardContent className="space - y-4">;
          <div className="space - y-2">;
            <h3 className="text - lg font - semibold text - white">Do's</h3>;
            <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light">;
              <li > Use our official brand assets from the resources provided</li>;
              <li > Share your unique referral link in your content</li>;
              <li > Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;
              <li > Be transparent that you're a partner and may earn from referrals</li>;
              <li > Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
          </div>;
          <div className="space - y-2">;
            <h3 className="text - lg font - semibold text - white">Don'ts</h3>;
            <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light">;
              <li > Make unrealistic promises about earnings or results</li>;
              <li > Use manipulative or misleading marketing tactics</li>;
              <li > Spam your referral link across unrelated content</li>;
              <li > Modify or alter our brand assets in unauthorized ways</li>;
              <li > Create fake accounts or use bots to generate referrals</li>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="space-y-2">;
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;
              <li>Make unrealistic promises about earnings or results</li>;
              <li>Use manipulative or misleading marketing tactics</li>;
              <li>Spam your referral link across unrelated content</li>;
              <li>Modify or alter our brand assets in unauthorized ways</li>;
              <li>Create fake accounts or use bots to generate referrals</li>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </ul>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Partner Support</CardTitle>;

========
<<<<<<< HEAD
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Partner Support</CardTitle>;
=======
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
=======
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
        <CardContent className="flex flex - col items - center text - center py - 6">;
          <p className="text - zion - slate - light mb - 4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg - zion - purple hover: bg - zion - purple - dark">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <CardContent className="flex flex-col items-center text-center py-6">;
          <p className="text-zion-slate-light mb-4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
<<<<<<< HEAD
          <Button className="bg-zion-purple hover:bg-zion-purple-dark">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
=======
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
    </div>;
  );

=======

    </div>);

}
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>);
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
=======
    </div>;
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

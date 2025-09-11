


<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      id: 'logo-pack'
      title: 'Zion AI Logo Pack'
      description: 'Official logos in various formats (PNG, SVG, JPG)';
      type: 'image'
      icon: <FileImage className="h-10 w-10 text-zion-purple" />
      url: '#'
    }
      id: 'logo-pack',
      title: 'Zion AI Logo Pack',;
      description: 'Official logos in various formats (PNG, SVG, JPG)';
      title: 'Zion AI Logo Pack',
      description: 'Official logos in various formats (PNG, SVG, JPG)',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      type: 'image',
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,
      url: '#'
    },
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      id: 'logo-pack',


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'brand-guidelines'
      title: 'Brand Guidelines'
      description: 'How to properly use our brand assets in your content'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
      url: '#'
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'banner-templates'
      title: 'Social Media Banners'
      description: 'Pre-designed graphics for your social channels'
      type: 'image'
      icon: <FileImage className="h-10 w-10 text-zion-purple" />
      url: '#'
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'promotional-video'
      title: 'Promotional Video'
      description: 'Short explainer video about Zion AI Marketplace'
      type: 'video'
      icon: <FileVideo className="h-10 w-10 text-red-500" />
      url: '#'
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'email-templates'
      title: 'Email Templates'
      description: 'Ready-to-use email templates for your audience'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
      url: '#'
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: 'talking-points'
      title: 'Talking Points'
      description: 'Key messages and benefits to highlight'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
      url: '#'
    }
<<<<<<< HEAD


  ],



<<<<<<< HEAD
  ];
  ],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];
  ],

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleDownload = (resource: ResourceItem) => {
    // In a real app, this would download the actual resource
    toast({
      title: "Download started"
      description: `Downloading ${resource.title}`
      variant: "default"})
<<<<<<< HEAD
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
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  },



=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <div className="space - y-6">;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Marketing Resources</CardTitle>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
            {resources.map ((resource) => (
              <Card key={resource.id} className="bg - zion - blue border - zion - blue - light overflow - hidden">;
                <CardContent className="p - 6 flex flex - col items - center text - center">;
                  <div className="mb - 4">;
                    {resource.icon}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
  }
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button
                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ResourceItem {;
  id: string,;
  title: string,;
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
<<<<<<< HEAD
<<<<<<< HEAD
  icon: JSX.Element,;
  url: string;
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  icon: JSX && JSX.Element,;
  url: string;
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function PartnerResources() {;
  const resources: ResourceItem[] = [;
    {;
      id: 'logo-pack',;
      title: 'Zion AI Logo Pack',;
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Official logos in various formats (PNG, SVG, JPG)',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      description: 'Official logos in various formats (PNG, SVG, JPG)';
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: 'brand-guidelines',;
      title: 'Brand Guidelines',;
      description: 'How to properly use our brand assets in your content',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: 'banner-templates',;
      title: 'Social Media Banners',;
      description: 'Pre-designed graphics for your social channels',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: 'promotional-video',;
      title: 'Promotional Video',;
      description: 'Short explainer video about Zion AI Marketplace',;
      type: 'video',;
      icon: <FileVideo className="h-10 w-10 text-red-500" />,;
      url: '#';
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: 'email-templates',;
      title: 'Email Templates',;
      description: 'Ready-to-use email templates for your audience',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
<<<<<<< HEAD
<<<<<<< HEAD
    },;
=======
    };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: 'talking-points',;
      title: 'Talking Points',;
      description: 'Key messages and benefits to highlight',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    }
<<<<<<< HEAD
<<<<<<< HEAD
  ],;
=======
  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleDownload = (resource: ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",;
<<<<<<< HEAD
<<<<<<< HEAD
      description: `Downloading ${resource.title}`;
      variant: "default"});
  };
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      description: `Downloading ${resource && resource.title}`,;
      variant: "default"});
  };

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    onClick={() => handleDownload(resource)}
                    size="sm";
                    variant="outline";
                    className="w-full flex items-center gap-2";
                  >;
                    <Download className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>
<<<<<<< HEAD
<<<<<<< HEAD
            ))}
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


};


<<<<<<< HEAD
<<<<<<< HEAD
                    {resource.type === 'link' ? 'Visit Link' :'Download'}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
          </div>;
        </CardContent>;
      </Card>;

      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
=======
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </Button>;
                </CardContent>;
              </Card>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  </Button>;
                </CardContent>;
              </Card>))}
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Promotion Guidelines</CardTitle>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </ul>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Partner Support</CardTitle>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
        <CardContent className="flex flex-col items-center text-center py-6">;
          <p className="text-zion-slate-light mb-4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <CardContent className="flex flex - col items - center text - center py - 6">;
          <p className="text - zion - slate - light mb - 4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg - zion - purple hover: bg - zion - purple - dark">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;

    </div>);

}
<<<<<<< HEAD

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
=======
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

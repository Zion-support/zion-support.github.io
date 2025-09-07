<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button",";
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";"
import { toast } from "@/hooks/use-toast";"
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "@/hooks/use-toast",

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { toast } from "@/hooks/use-toast",

<<<<<<< HEAD



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ResourceItem {

  id: string
  title: string
  description: string
<<<<<<< HEAD
=======
interface ResourceItem {};
  id: string;
  title: string;
  description: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  type: 'image' | 'video' | 'document' | 'link'
  icon: JSX.Element;
  url: string;
}
<<<<<<< HEAD
=======
  type: 'image' | 'video' | 'document' | 'link'
  icon: JSX.Element

  url: string
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function PartnerResources() {
  const resources: ResourceItem[] = [
    {

<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      type: 'image',
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,
      url: '#'
    },
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      id: 'logo-pack',


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {
=======
import { toast } from "@/hooks/use-toast",    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { toast } from "@/hooks/use-toast",    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      id: 'brand-guidelines'
      title: 'Brand Guidelines'
      description: 'How to properly use our brand assets in your content'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      url: '#'



<<<<<<< HEAD

    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      url: '#'


    },


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

<<<<<<< HEAD

    },
=======
    {'
      id: 'banner-templates''
      title: 'Social Media Banners''
      description: 'Pre-designed graphics for your social channels''
      type: 'image'"
      icon: <FileImage className="h-10 w-10 text-zion-purple" />'
      url: '#'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
=======
      url: '#'    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      url: '#'    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


    },


    {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      id: 'promotional-video'
      title: 'Promotional Video'
      description: 'Short explainer video about Zion AI Marketplace'
      type: 'video'
      icon: <FileVideo className="h-10 w-10 text-red-500" />
      url: '#'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD


    },
<<<<<<< HEAD
=======
    {'
      id: 'promotional-video''
      title: 'Promotional Video''
      description: 'Short explainer video about Zion AI Marketplace''
      type: 'video'"
      icon: <FileVideo className="h-10 w-10 text-red-500" />'
      url: '#'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

<<<<<<< HEAD

    },
=======
    {'
      id: 'email-templates''
      title: 'Email Templates''
      description: 'Ready-to-use email templates for your audience''
      type: 'document'"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />'
      url: '#'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


    },


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      id: 'talking-points'
      title: 'Talking Points'
      description: 'Key messages and benefits to highlight'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
=======
    {'
      id: 'talking-points''
      title: 'Talking Points''
      description: 'Key messages and benefits to highlight''
      type: 'document'"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      url: '#'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  ],



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  ];
  ],
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleDownload = (resource: ResourceItem) => {
=======
    }  const handleDownload = (resource: ResourceItem) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }  const handleDownload = (resource: ResourceItem) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const handleDownload = (resource: ResourceItem) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // In a real app, this would download the actual resource
    toast({
      title: "Download started"
      description: `Downloading ${resource.title}`
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      variant: "default"})
<<<<<<< HEAD
<<<<<<< HEAD
=======
      variant: "default"})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  },



<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="space - y-6">;
=======



  const handleDownload = (resource: ResourceItem) => {};
    // In a real app, this would download the actual resource;
    toast({"
      title: "Download started"
      description: `Downloading ${resource.title}`"
      variant: "default"})



  return ("
    <div className="space - y-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
=======
      variant: "default"})  return (
    <div className="space-y-6">;
      <Card className="bg - zion - blue - dark border - zion - blue-light">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      variant: "default"})  return (
    <div className="space-y-6">;
      <Card className="bg - zion - blue - dark border - zion - blue-light">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <CardHeader>;
          <CardTitle > Marketing Resources</CardTitle>;
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
;
interface ResourceItem {;
  id:string,;
  title:string,,
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
      title:'Zion AI Logo Pack',,
  description:'Official logos in various formats (PNG, SVG, JPG)',;
      type:'image',;
      icon:<FileImage className="h-10 w-10 text-zion-purple" />,;
      url:'#';
    },;
    {;
      id:'brand-guidelines',;
      title:'Brand Guidelines',,
  description:'How to properly use our brand assets in your content',;
      type:'document',;
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;
      url:'#';
    },;
    {;
      id:'banner-templates',;
      title:'Social Media Banners',,
  description:'Pre-designed graphics for your social channels',;
      type:'image',;
      icon:<FileImage className="h-10 w-10 text-zion-purple" />,;
      url:'#';
    },;
    {;
      id:'promotional-video',;
      title:'Promotional Video',,
  description:'Short explainer video about Zion AI Marketplace',;
      type:'video',;
      icon:<FileVideo className="h-10 w-10 text-red-500" />,;
      url:'#';
    },;
    {;
      id:'email-templates',;
      title:'Email Templates',,
  description:'Ready-to-use email templates for your audience',;
      type:'document',;
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;
      url:'#';
    },;
    {;
      id:'talking-points',;
      title:'Talking Points',,
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
      title:"Download started",,
  description:`Downloading ${resource.title}`,;
      variant:"default"}),;
  },;
;
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <Button
=======
=======                  <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======                  <Button
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
    <div className="space - y-6">;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Marketing Resources</CardTitle>;
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
            {resources.map ((resource) => (
              <Card key={resource.id} className="bg - zion - blue border - zion - blue - light overflow - hidden">;
                <CardContent className="p - 6 flex flex - col items - center text - center">;
                  <div className="mb - 4">;
                    {resource.icon}

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";
                  <Button
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
type: 'image',
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,
      url: '#'
    },
      id: 'logo-pack',

    {


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"
=======



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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="w-full flex items-center gap-2"
<<<<<<< HEAD
                  >"
=======
    <div className=\"space-y-6\" />;
      <Card className=\"bg-zion-blue-dark border-zion-blue-light\" />;
        <CardHeader />;
          <CardTitle />Marketing Resources</CardTitle>;
import {Button} from \"@/components/ui/button\";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from \"lucide-react\";
import {toast} from \"@/hooks/use-toast\";
onClick={() = /> handleDownload(resource)}
                    size=\"sm\"
                    variant=\"outline\"
                    className=\"w-full flex items-center gap-2\"
                  >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <Download className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;
=======
"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "@/hooks/use-toast",;

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                    <Download className=\"h-4 w-4\" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface ResourceItem {;
  id: string,;
  title: string,,
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
  icon: JSX && JSX.Element,;
  url: string;
}

icon: JSX.Element,;
  url: string;
}
;
  icon: JSX && JSX.Element,;}
  url: string;}
}
export function PartnerResources() {;
  const resources: ResourceItem[] = [;
    {;
      id: 'logo-pack',;
      title: 'Zion AI Logo Pack',;
      description: 'Official logos in various formats (PNG, SVG, JPG)';
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    };
description: 'Official logos in various formats (PNG, SVG, JPG)',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    },;
    {;
      title: 'Zion AI Logo Pack',,
  description: 'Official logos in various formats (PNG, SVG, JPG)';
      type: 'image',;
      icon: <FileImage className=\"h-10 w-10 text-zion-purple\" />,;}
      url: '#'}
};    {;
      id: 'brand-guidelines',;
      title: 'Brand Guidelines',,
  description: 'How to properly use our brand assets in your content',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    };
},;
    {;
      icon: <FileText className=\"h-10 w-10 text-zion-cyan\" />,;}
      url: '#'}
};    {;
      id: 'banner-templates',;
      title: 'Social Media Banners',,
  description: 'Pre-designed graphics for your social channels',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    };
},;
    {;
      icon: <FileImage className=\"h-10 w-10 text-zion-purple\" />,;}
      url: '#'}
};    {;
      id: 'promotional-video',;
      title: 'Promotional Video',,
  description: 'Short explainer video about Zion AI Marketplace',;
      type: 'video',;
      icon: <FileVideo className="h-10 w-10 text-red-500" />,;
      url: '#';
    };
},;
    {;
      icon: <FileVideo className=\"h-10 w-10 text-red-500\" />,;}
      url: '#'}
};    {;
      id: 'email-templates',;
      title: 'Email Templates',,
  description: 'Ready-to-use email templates for your audience',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    };
},;
    {;
      icon: <FileText className=\"h-10 w-10 text-zion-cyan\" />,;}
      url: '#'}
};    {;
      id: 'talking-points',;
      title: 'Talking Points',,
  description: 'Key messages and benefits to highlight',;
      type: 'document',;
      icon: <FileText className=\"h-10 w-10 text-zion-cyan\" />,;}
      url: '#';}
    }
  ];

],;
  const handleDownload = (resource: ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",;
      description: `Downloading ${resource && resource.title}`,;
      variant: "default"});
  };

<<<<<<< HEAD
  return (    <div className="space-y-6">;
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
description: `Downloading ${resource.title}`;
      variant: "default"});
  };
  return (;
    <div className="space-y-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;"
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
                    onClick={() => handleDownload(resource)}
                  <Button
                    onClick={() => handleDownload(resource)}
                    size="sm";
                    variant="outline";
=======

                    onClick={() => handleDownload(resource)}

                  <Button;
                    onClick={() => handleDownload(resource)}
"
                    size="sm";"
                    variant="outline";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="w-full flex items-center gap-2";
                  >;"
                    <Download className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>


            ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


};


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </div>;
        </CardContent>;
      </Card>;
"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                  </div>;
                  <h3 className="font - semibold text - white mb - 1">{resource.title}</h3>;
=======
                  </div>;"
                  <h3 className="font - semibold text - white mb - 1">{resource.title}</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======

                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
<<<<<<< HEAD
              </Card>                  </Button>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>                  </Button>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              </Card>
            ))}
            ))}
</div>
        </CardContent>
      </Card>
      <Card className="bg-zion-blue-dark border-zion-blue-light">
  const handleDownload = (;
    // In a real app, this would download the actual resource;
    toast({;
      title: \"Download started\",,) => {
  return $3;}
}
  description: `Downloading ${resource && resource.title}`,;
      variant: \"default\"})
};
  return (    <div className=\"space-y-6\" />;
      <Card className=\"bg-zion-blue-dark border-zion-blue-light\" />;
        <CardHeader />;
          <CardTitle />Marketing Resources</CardTitle>;
          <CardDescription />;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent />;
          <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-4\" />;
            {resources && resources.map((resource) => (;}
              <Card key={resource && resource.id} className=\"bg-zion-blue border-zion-blue-light overflow-hidden\" />;
                <CardContent className=\"p-6 flex flex-col items-center text-center\" />;
                  <div className=\"mb-4\" />;
                    {resource && resource.icon}
                  </div>;
                  <h3 className=\"font-semibold text-white mb-1\" />{resource && resource.title}</h3>;
                  <p className=\"text-xs text-zion-slate-light mb-4\" />{resource && resource.description}</p>;
                  <Button                    onClick={() = /> handleDownload(resource)}
                  <Button;
onClick={() = /> handleDownload(resource)}
                    size=\"sm\";
                    variant=\"outline\";
                    className=\"w-full flex items-center gap-2\";
                  >;
                    <Download className=\"h-4 w-4\" />;
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>                  </Button>;
                </CardContent>;
;
      <Card className=\"bg-zion-blue-dark border-zion-blue-light\" />;
        <CardHeader />;
          <CardTitle />Promotion Guidelines</CardTitle>
};
          </div>;
        </CardContent>;
      </Card>;
      <Card className=\"bg-zion-blue-dark border-zion-blue-light\" />;
        <CardHeader />;
          <CardTitle />Promotion Guidelines</CardTitle>;
          <CardDescription />;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;
        <CardContent className=\"space-y-4\" />;
          <div className=\"space-y-2\" />;
            <h3 className=\"text - lg font - semibold text-white\" />Do's</h3>;
            <ul className=\"list - disc pl - 5 space - y-1 text - zion - slate-light\" />;
              <li  /> Use our official brand assets from the resources provided</li>;
              <li  /> Share your unique referral link in your content</li>;
              <li  /> Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;
              <li  /> Be transparent that you're a partner and may earn from referrals</li>;
              <li  /> Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
          </div>;
          <div className="space-y-2">;
            <h3 className="text - lg font - semibold text-white">Don'ts</h3>;
            <ul className="list - disc pl - 5 space - y-1 text - zion - slate-light">;
          <div className=\"space-y-2\" />;
            <h3 className=\"text - lg font - semibold text-white\" />Don'ts</h3>;
            <ul className=\"list - disc pl - 5 space - y-1 text - zion - slate-light\" />;
              <li  /> Make unrealistic promises about earnings or results</li>;
              <li  /> Use manipulative or misleading marketing tactics</li>;
              <li  /> Spam your referral link across unrelated content</li>;
              <li  /> Modify or alter our brand assets in unauthorized ways</li>;
              <li  /> Create fake accounts or use bots to generate referrals</li>;          <CardDescription />;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;





import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";""
import {toast} from "@/hooks/use-toast";""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";""
import { toast } from "@/hooks/use-toast";""
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",""
import { toast } from "@/hooks/use-toast","
interface ResourceItem {
  // TODO: Implement
}
  id: string;,
  title: string;
  description: string;,"
  type: 'image' | 'video' | 'document' | 'link
  icon: JSX.Element;,
  url: string;
export function PartnerResources() {
  const resources: ResourceItem[] = [
    {


      id: 'logo-pack',
      id: 'brand-guidelines,
  title: 'Brand Guidelines
      description: 'How to properly use our brand assets in your content,
  type: 'document
      icon: <FileText className="h-10 w-10 text-zion-cyan" />"
"
      icon: <FileImage className="h-10 w-10 text-zion-purple" />"
      icon: <FileVideo className="h-10 w-10 text-red-500" />"
    <div className="space - y-6">;"
</div>"
      <Card className="bg - zion - blue - dark border - zion - blue - light">;"

        <CardHeader>;

          <CardTitle > Marketing Resources;
          <CardDescription>;

          ;
        <CardContent>;
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;"
              <Card key={resource.id} className="bg - zion - blue border - zion - blue - light overflow - hidden">;"
                <CardContent className="p - 6 flex flex - col items - center text - center">;"
                  <div className="mb - 4">;"
</div>
                  <Button;
                    onClick={() => handleDownload(resource)}
                    <Download className="h-4 w-4" />"
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;"
      icon: <FileVideo className="h-10 w-10 text-red-500" />,;"
    <div className="space-y-6">;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"


          <CardTitle>Marketing Resources;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;"
              <Card key={resource && resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;"
                <CardContent className="p-6 flex flex-col items-center text-center">;"
                  <div className="mb-4">;"
                  </div>;"
                  <h3 className="font-semibold text-white mb-1">{resource && resource.title}</h3>;""
                  <p className="text-xs text-zion-slate-light mb-4">{resource && resource.description}</p>;"
                  <Button;"
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;"
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>;""
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>;"

                    <Download className="h-4 w-4" />;"

      <Card className="bg-zion-blue-dark border-zion-blue-light">"

        <CardHeader>

          <CardTitle>Promotion Guidelines
          <CardDescription>

        <CardContent className="space-y-4">"
          <div className="space-y-2">"
            <h3 className="text-lg font-semibold text-white">Do's</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">"
</ul>
              <li>Use our official brand assets from the resources provided</li>
              <li>Share your unique referral link in your content</li>
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>"
              <li>Be transparent that you're a partner and may earn from referrals</li>
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>
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
            ))}


          <CardTitle>Partner Support

        <CardContent className="flex flex-col items-center text-center py-6">"
          <p className="text-zion-slate-light mb-4">"
</p>
          </p>"
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">"

          </div>;
      ;"


          <CardTitle>Promotion Guidelines;
                  <h3 className="font - semibold text - white mb - 1">{resource.title}</h3>;""
                  <p className="text - xs text - zion - slate - light mb - 4">{resource.description}</p>;"
                    on_click={() => handle_download (resource)}
                    size="sm";
                    variant="outline";
                    className="w - full flex items - center gap - 2";
                  >;
                    <Download className="h - 4 w - 4" />;
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
{resource.type === 'link' ? 'Visit Link' :'Download'}
                  </Button>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </CardContent>;
              </Card>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Promotion Guidelines</CardTitle>;
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
};
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                    {resource && resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>;
                </CardContent>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    {resource && resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>;
                </CardContent>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;
                    <Download className="h - 4 w - 4" />;"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <CardContent className="space-y-4">;
          <div className="space-y-2">;
            <h3 className="text - lg font - semibold text-white">Do's</h3>;
            <ul className="list - disc pl - 5 space - y-1 text - zion - slate-light">;
=======
        <CardContent className="space - y-4">;
          <div className="space - y-2">;
            <h3 className="text - lg font - semibold text - white">Do's</h3>;
            <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


          <CardTitle > Promotion Guidelines;"





        <CardContent className="space - y-4">;"
          <div className="space - y-2">;"
            <h3 className="text - lg font - semibold text - white">Do's</h3>;
            <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
              <li > Make unrealistic promises about earnings or results</li>;
              <li > Use manipulative or misleading marketing tactics</li>;
              <li > Spam your referral link across unrelated content</li>;
              <li > Modify or alter our brand assets in unauthorized ways</li>;
<<<<<<< HEAD
              <li > Create fake accounts or use bots to generate referrals</li>;          <CardDescription>;
=======

=======
              <li > Create fake accounts or use bots to generate referrals</li>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
            </ul>;
          </div>;
        </CardContent>;
      </Card>;

<<<<<<< HEAD


          <CardDescription>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
        </CardHeader>;


=======
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle > Partner Support</CardTitle>;

;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;
              <li > Create fake accounts or use bots to generate referrals</li>;          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;
              <li > Create fake accounts or use bots to generate referrals</li>;


<CardContent className="flex flex-col items-center text-center py-6">;
          <p className="text-zion-slate-light mb-4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
<<<<<<< HEAD
          <Button className="bg - zion - purple hover: bg - zion - purple - dark">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
          <CardTitle > Partner Support;

        <CardContent className="flex flex - col items - center text - center py - 6">;"
          <p className="text - zion - slate - light mb - 4">;"
          </p>;"
          <Button className="bg - zion - purple hover: bg - zion - purple - dark">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    </div>);
    </div>;]"
pr-12325

}
    </div>);
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </div>;
  );
}
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

    </div>);


}
    </div>);
}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        </CardHeader>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        </CardHeader>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

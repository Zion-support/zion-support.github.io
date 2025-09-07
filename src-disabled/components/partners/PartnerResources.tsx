interface ResourceItem {;
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
  Download,
  FileImage,
  FileText,
  FileType,
  FileVideo,
  Link,
} from 'lucide-react';
import { toast } from '@/hooks / use - toast';

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'document' | 'link';
<<<<<<< HEAD
  icon: JSX.Element;
export function PartnerResources() {
  const resources: ResourceItem[] = [
    {

      id: 'logo-pack'
      title: 'Zion AI Logo Pack'
      description: 'Official logos in various formats (PNG, SVG, JPG)'
      type: 'image'
      icon: <FileImage className='h-10 w-10 text-zion-purple' />
      url: '#'
    }
    {
      id: 'brand-guidelines'
      title: 'Brand Guidelines'
      description: 'How to properly use our brand assets in your content'
      type: 'document'
      icon: <FileText className='h-10 w-10 text-zion-cyan' />
      url: '#'
    }
    {
      id: 'banner-templates'
      title: 'Social Media Banners'
      description: 'Pre-designed graphics for your social channels'
      type: 'image'
      icon: <FileImage className='h-10 w-10 text-zion-purple' />
      url: '#'
    }
    {
      id: 'promotional-video'
      title: 'Promotional Video'
      description: 'Short explainer video about Zion AI Marketplace'
      type: 'video'
      icon: <FileVideo className='h-10 w-10 text-red-500' />
      url: '#'
    }
    {
      id: 'email-templates'
      title: 'Email Templates'
      description: 'Ready-to-use email templates for your audience'
      type: 'document'
      icon: <FileText className='h-10 w-10 text-zion-cyan' />
      url: '#'
    }
    {
      id: 'talking-points'
      title: 'Talking Points'
      description: 'Key messages and benefits to highlight'
      type: 'document'
      icon: <FileText className='h-10 w-10 text-zion-cyan' />
      url: '#'
    }
  ]
  const handleDownload = (resource: ResourceItem,) => {
    // In a real app, this would download the actual resource
    toast({
      title: 'Download started'
      description: `Downloading ${resource.title}`
      variant: 'default'
    })
  }
=======

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
import { Button } from "@/components/ui/button";
=======
  icon: JSX.Element;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  url: string;
export /**
 * PartnerResources - Function description
 */
function PartnerResources() {
  const resources: ResourceItem[] = [;


import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react'

import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
  Download
  FileImage
  FileText
  FileType
  FileVideo
  Link
} from 'lucide-react'
import { toast } from '@/hooks/use-toast'

interface ResourceItem {
  id: string;,
  title: string;,
  description: string;,
  type: 'image' | 'video' | 'document' | 'link';',
  icon: JSX.Element;,
  url: string;,
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'document' | 'link';
  icon: JSX.Element;

import { toast } from "@/hooks/use-toast",
interface ResourceItem {

  id: string,
  title: string,
  description: string,"
  type: 'image' | 'video' | 'document' | 'link',
  icon: JSX.Element,
<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
=======
  url: string
}

<<<<<<< HEAD
xport function PartnerResources() {
  const resources: ResourceItem[] = [
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
interface ResourceItem {
  id: string,
  title: string,
  description: string,
  type: 'image' | 'video' | 'document' | 'link',
  icon: JSX.Element,
  url: string
}

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function PartnerResources() {
  const resources: ResourceItem[] = [
    {
<<<<<<< HEAD

=======
<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
=======
      id: 'logo-pack',
      title: 'Zion AI Logo Pack',
      description: 'Official logos in various formats (PNG, SVG, JPG)',
      type: 'image',
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,
      url: '#'
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      description: 'How to properly use our brand assets in your content',
      type: 'document',
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,
      url: '#'
    },
    {
      id: 'banner-templates',
      title: 'Social Media Banners',
      description: 'Pre-designed graphics for your social channels',
      type: 'image',
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,
      url: '#'
    },
    {
      id: 'promotional-video',
      title: 'Promotional Video',
      description: 'Short explainer video about Zion AI Marketplace',
      type: 'video',
      icon: <FileVideo className="h-10 w-10 text-red-500" />,
      url: '#'
    },
    {
      id: 'email-templates',
      title: 'Email Templates',
      description: 'Ready-to-use email templates for your audience',
      type: 'document',
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,
      url: '#'
    },
    {
      id: 'talking-points',
      title: 'Talking Points',
      description: 'Key messages and benefits to highlight',
      type: 'document',
<<<<<<< HEAD
      icon: <FileText className='h-10 w-10 text-zion-cyan' />,
      url: '#',
    },
  ]
  const handleDownload = (resource: ResourceItem,) => {
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,
      url: '#'
    }
  ],
  icon: JSX && JSX.Element;

  const handleDownload = (resource: ResourceItem) => {
    toast({
      title: "Download started",
=======

  icon: JSX && JSX.Element;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // In a real app, this would download the actual resource
    toast({
      title: "Download started",
      description: `Downloading ${resource.title}`,
<<<<<<< HEAD
      variant: 'default',
    })
  }
      variant: "default"})
  },
      variant: "default"})
  },
=======

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
      id: 'logo-pack';
      title: 'Zion AI Logo Pack';
      description: 'Official logos in various formats (PNG, SVG, JPG)',
      type: 'image';
      icon: <FileImage className;
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx

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
<<<<<<< HEAD
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {resources.map(resource => (
              <Card
                key={resource.id}
                className='bg-zion-blue border-zion-blue-light overflow-hidden'
              >
                <CardContent className='p-6 flex flex-col items-center text-center'>
                  <div className='mb-4'>{resource.icon}</div>
                  <h3 className='font-semibold text-white mb-1'>
                    {resource.title}
                  </h3>
                  <p className='text-xs text-zion-slate-light mb-4'>
                    {resource.description}
                  </p>
                  <Button
                    onClick={() => handleDownload(resource)}
                    size='sm'
                    variant='outline'
                    className='w-full flex items-center gap-2'                  >
                    <Download className='h-4 w-4' />
=======

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {resources.map((resource) => (
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">"
                <CardContent className="p-6 flex flex-col items-center text-center">"
                  <div className="mb-4">"
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>"
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>"
                  <Button
                    onClick={() => handleDownload(resource)}
                    size="sm""
                    variant="outline""
                    className="w-full flex items-center gap-2""
                  >
                    <Download className="h-4 w-4" />"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
interface ResourceItem {;
  id: string,;
  title: string,;
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
  icon: JSX.Element,;

  return (
    <div className="space-y-6">"
      <Card className="bg-zion-blue-dark border-zion-blue-light">"
        <CardHeader>
          <CardTitle>Marketing Resources</CardTitle>
          <CardDescription>
            Download brand assets and marketing materials to promote Zion AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">"
            {resources.map((resource) => (
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">"
                <CardContent className="p-6 flex flex-col items-center text-center">"
                  <div className="mb-4">"
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>"
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>"
                  <Button
                    onClick={() => handleDownload(resource)}
                    size="sm""
                    variant="outline""
                    className="w-full flex items-center gap-2""
                  >
                    <Download className="h-4 w-4" />"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>
                  <Button 
                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
>>>>>>> origin/chore/fix-lint-and-merge
interface ResourceItem {;
  id: string,;
  title: string,;
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
  icon: JSX.Element,;
  url: string;

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
}
;
export function PartnerResources() {;,
  const resources: ResourceItem[] = [;,
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>
                  <Button 
                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
interface ResourceItem {;
  id: string,;
  title: string,;
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
  icon: JSX.Element,;
  url: string;
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
export function PartnerResources() {;
  const resources: ResourceItem[] = [;
    {;
      id: 'logo-pack',;
      title: 'Zion AI Logo Pack',;
      description: 'Official logos in various formats (PNG, SVG, JPG)',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    },;
    {;
      id: 'brand-guidelines',;
      title: 'Brand Guidelines',;
      description: 'How to properly use our brand assets in your content',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    },;
    {;
      id: 'banner-templates',;
      title: 'Social Media Banners',;
      description: 'Pre-designed graphics for your social channels',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    },;
    {;
      id: 'promotional-video',;
      title: 'Promotional Video',;
      description: 'Short explainer video about Zion AI Marketplace',;
      type: 'video',;
      icon: <FileVideo className="h-10 w-10 text-red-500" />,;
      url: '#';
    },;
    {;
      id: 'email-templates',;
      title: 'Email Templates',;
      description: 'Ready-to-use email templates for your audience',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    },;
    {;
      id: 'talking-points',;
      title: 'Talking Points',;
      description: 'Key messages and benefits to highlight',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    }
  ],;
<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
  const handleDownload = (resource:,  ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",
      description: `Downloading ${resource.title}`;`
=======
  const handleDownload = (resource: ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",;
      description: `Downloading ${resource.title}`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
      variant: "default"});
  };
  return (
    <div className='space - y-6'>;
      <Card className='bg - zion - blue - dark border - zion - blue - light'>;
        <CardHeader>;
          <CardTitle > Marketing Resources</CardTitle>;
  const handleDownload = (resource: ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",
      description: `Downloading ${resource.title}`;
      variant: "default"});
  };
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;

<<<<<<< HEAD
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                    size="sm";
                    variant="outline";
                    className="w-full flex items-center gap-2";
                  >;
                    <Download className="h-4 w-4" />;
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}

                  </Button>
                </CardContent>
              </Card>
            ))}
<<<<<<< HEAD
          </div>
        </CardContent>
      </Card>
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
ursor/fix-website-loading-errors-and-merge-6662
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
=======

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
      <Card className="bg-zion-blue-dark border-zion-blue-light">

        <CardHeader>
<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
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
                  <Button 
                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
interface ResourceItem {;
  id: string,;
  title: string,,
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
  icon: JSX.Element,;
  url: string;        <CardHeader>
          <CardTitle>Promotion Guidelines</CardTitle>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
          <CardDescription>
            Best practices for promoting the Zion AI Marketplace
          </CardDescription>
        </CardHeader>
<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
        <CardContent className="space-y-4">"
          <div className="space-y-2">"
            <h3 className="text-lg font-semibold text-white">Do's</h3>'
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">"
              <li>Use our official brand assets from the resources provided</li>
              <li>Share your unique referral link in your content</li>
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>
              <li>Be transparent that you're a partner and may earn from referrals</li>'
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>
            </ul>
          </div>
          <div className="space-y-2">"
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>'
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">"
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Do's</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
              <li>Use our official brand assets from the resources provided</li>
              <li>Share your unique referral link in your content</li>
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>
=======
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Do's</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
              <li>Use our official brand assets from the resources provided</li>
              <li>Share your unique referral link in your content</li>
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
              <li>Be transparent that you're a partner and may earn from referrals</li>
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>
            </ul>
          </div>
<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
=======
<<<<<<< HEAD
          <div className='space-y-2'>
            <h3 className='text-lg font-semibold text-white'>Don'ts</h3>
            <ul className='list-disc pl-5 space-y-1 text-zion-slate-light'>
ursor/fix-website-loading-errors-and-merge-6662
          <div className='space-y-2'>
            <h3 className='text-lg font-semibold text-white'>Don'ts</h3>
            <ul className='list-disc pl-5 space-y-1 text-zion-slate-light'>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">

              <li>Make unrealistic promises about earnings or results</li>
<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx

              <li>Use manipulative or misleading marketing tactics</li>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
              <li>Spam your referral link across unrelated content</li>
              <li>Modify or alter our brand assets in unauthorized ways</li>
              <li>Create fake accounts or use bots to generate referrals</li>
            </ul>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
ursor/fix-website-loading-errors-and-merge-6662
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
=======

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      <Card className="bg-zion-blue-dark border-zion-blue-light">


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
        <CardHeader>
          <CardDescription>
            Need help with your affiliate marketing? Contact our partner support team.
          </CardDescription>
        </CardHeader>
<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
        <CardContent className="flex flex-col items-center text-center py-6">"
          <p className="text-zion-slate-light mb-4">"
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.
            Feel free to reach out if you have questions about promotions, resources, or payment.
          </p>
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">",
        <CardContent className="flex flex-col items-center text-center py-6">
          <p className="text-zion-slate-light mb-4">
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.
            Feel free to reach out if you have questions about promotions, resources, or payment.
          </p>
=======
        <CardContent className="flex flex-col items-center text-center py-6">
          <p className="text-zion-slate-light mb-4">
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.
            Feel free to reach out if you have questions about promotions, resources, or payment.
          </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">
            Contact Partner Support
          </Button>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>) ;
}'"};
}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>)
}'"}
  );
}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>) ;
}'"};
  )
}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>)
}'"}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;

        </CardContent>;
      </Card>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
=======
          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;
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

        <CardContent className='space - y-4'>;
          <div className='space - y-2'>;
            <h3 className='text - lg font - semibold text - white'>Do's</h3>;
            <ul className='list - disc pl - 5 space - y-1 text - zion - slate - light'>;
              <li > Use our official brand assets from the resources provided</li>;
              <li > Share your unique referral link in your content</li>;

              <li>;
                Highlight the benefits of the Zion AI Marketplace for both;
                talent and clients;
              </li>;
              <li>;
                Be transparent that you're a partner and may earn from referrals;
              </li>;
              <li>;
                Focus on how the platform can help your audience solve their AI;
                talent needs;
              </li>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
            </ul>;
          </div>;

          <div className='space - y-2'>;
            <h3 className='text - lg font - semibold text - white'>Don'ts</h3>;
            <ul className='list - disc pl - 5 space - y-1 text - zion - slate - light'>;
              <li>;
</li>
              </li>;
            </ul>;
            <h3 className='text - lg font - semibold text - white'>Don'ts</h3>;
pr-12325
              <li > Make unrealistic promises about earnings or results</li>;
              <li > Use manipulative or misleading marketing tactics</li>;
              <li > Spam your referral link across unrelated content</li>;
              <li > Modify or alter our brand assets in unauthorized ways</li>;
              <li > Create fake accounts or use bots to generate referrals</li>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </ul>;

          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
=======

      <Card className='bg - zion - blue - dark border - zion - blue - light'>;

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
        <CardHeader>;

          <CardTitle>Partner Support</CardTitle>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
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

<<<<<<< HEAD:src-disabled/components/partners/PartnerResources.tsx
            Contact Partner Support;
          </Button>;
        </CardContent>;
<<<<<<< HEAD
      </Card>;
=======
      </Card>;
=======
        <CardContent className='flex flex - col items - center text - center py - 6'>;
          <p className='text - zion - slate - light mb - 4'>;

            Our partner success team is available to help you maximize your;
            partnership with Zion AI Marketplace. Feel free to reach out if you;
            have questions about promotions, resources, or payment.;
          </p>;

          <Button className='bg - zion - purple hover:bg - zion - purple - dark'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
    </div>;
  );
}
  )
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



    </div>);
}</div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> <CardTitle > Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space - y-4" > <div className="space - y-2" > <h3 className="text - lg font - semibold text - white" >Do's</h3> <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light" > <li > Use our official brand assets from the resources provided</li> <li > Share your unique referral link in your content</li> <li > Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li > Be transparent that you're a partner and may earn from referrals</li> <li > Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space - y-2" > <h3 className="text - lg font - semibold text - white" >Don'ts</h3> <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light" > <li > Make unrealistic promises about earnings or results</li> <li > Use manipulative or misleading marketing tactics</li> <li > Spam your referral link across unrelated content</li> <li > Modify or alter our brand assets in unauthorized ways</li> <li > Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> <CardTitle > Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex - col items - center text - center py - 6" > <p className="text - zion - slate - light mb - 4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>);
}'"}

<<<<<<< HEAD
  )
=======
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/partners/PartnerResources.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

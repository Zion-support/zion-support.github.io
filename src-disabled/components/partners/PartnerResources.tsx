<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'document' | 'link';

<<<<<<< HEAD
  icon: JSX.Element;
  url: string;
export /**
 * PartnerResources - Function description
 */
function PartnerResources() {
  const resources: ResourceItem[] = [;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button";
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react'
import { toast } from "@/hooks/use-toast";
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
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
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx

origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
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

<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
interface ResourceItem {
=======
export function PartnerResources() {
  const resources: ResourceItem[] = [
    {
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react
import { toast } from "@/hooks/use-toast","
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
  id: string,
  title: string,
  description: string,"
  type: 'image' | 'video' | 'document' | 'link',
  icon: JSX.Element,

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export function PartnerResources() {
  const resources: ResourceItem[] = [
    {
<<<<<<< HEAD
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
<<<<<<< HEAD
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,
      url: '#'
    }
  ],

  const handleDownload = (resource: ResourceItem) => {
=======

  icon: JSX && JSX.Element;
=======
export function PartnerResources() {]
  const resources: ResourceItem[] = [
    {
pr-12325
      id: 'logo-pack',
      title: 'Zion AI Logo Pack',
      description: 'Official logos in various formats (PNG, SVG, JPG)',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  icon: JSX && JSX.Element;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======




export function PartnerResources() {
  const resources: ResourceItem[] = [
    {

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
    // In a real app, this would download the actual resource
    toast({
      title: "Download started",
      description: `Downloading ${resource.title}`,
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      variant: "default"})
  },
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx






<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
      id: 'logo-pack';
      title: 'Zion AI Logo Pack';
      description: 'Official logos in various formats (PNG, SVG, JPG)',
      type: 'image';
      icon: <FileImage className;
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
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
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
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
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
  url: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
  url: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
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
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
}
;
export function PartnerResources() {;,
  const resources: ResourceItem[] = [;,
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
  const handleDownload = (resource:,  ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",;
      description: `Downloading ${resource.title}`;`
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
      title: "Download started",;
      description: `Downloading ${resource.title}`;
      variant: "default"});
  };
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
=======

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
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
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
<<<<<<< HEAD
                  </Button>;
                </CardContent>;
              </Card>;
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zion-blue-dark border-zion-blue-light">
=======
=======
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
                  </Button>
                </CardContent>
              </Card>
            ))}
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx


      <Card className="bg-zion-blue-dark border-zion-blue-light">


<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,
      url: '#'
    }
  ],

  const handleDownload = (resource: ResourceItem) => {

  const handleDownload = (resource: ResourceItem) => {

      variant: "default"})
  },
  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
      <Card className="bg-zion-blue-dark border-zion-blue-light">"
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>;
                </CardContent>;
              </Card>;
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
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
  title: string,,
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
  icon: JSX.Element,;
  url: string;        <CardHeader>
          <CardTitle>Promotion Guidelines</CardTitle>
          <CardDescription>
            Best practices for promoting the Zion AI Marketplace
          </CardDescription>
        </CardHeader>
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
              <li>Be transparent that you're a partner and may earn from referrals</li>
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>
            </ul>
          </div>
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
=======

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,"
"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,"
      icon: <FileVideo className="h-10 w-10 text-red-500" />,"
    <div className="space-y-6">"
</div>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">"

        <CardHeader>

          <CardTitle>Marketing Resources
          <CardDescription>

        <CardContent>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">"
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">"
                <CardContent className="p-6 flex flex-col items-center text-center">"
                  <div className="mb-4">"
</div>
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>""
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>"
                  <Button;
                    onClick={() => handleDownload(resource)}
                    <Download className="h-4 w-4" />"



      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;"
      icon: <FileVideo className="h-10 w-10 text-red-500" />,;"
    <div className='space - y-6'>;
      <Card className='bg - zion - blue - dark border - zion - blue - light'>;

        <CardHeader>;

          <CardTitle > Marketing Resources;
          <CardDescription>;

          ;
        <CardContent>;


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;"
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;"
                <CardContent className="p-6 flex flex-col items-center text-center">;"
                  <div className="mb-4">;"
                  </div>;"
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>;""
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>;"
                    <Download className="h-4 w-4" />;"



          <CardTitle>Promotion Guidelines

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
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
              <li>Make unrealistic promises about earnings or results</li>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <li>Use manipulative or misleading marketing tactics</li>
              <li>Spam your referral link across unrelated content</li>
              <li>Modify or alter our brand assets in unauthorized ways</li>
              <li>Create fake accounts or use bots to generate referrals</li>
            </ul>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      <Card className="bg-zion-blue-dark border-zion-blue-light">
=======
      <Card className="bg-zion-blue-dark border-zion-blue-light">

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
      <Card className="bg-zion-blue-dark border-zion-blue-light">"

      <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
        <CardHeader>
          <CardTitle>Partner Support</CardTitle>
          <CardDescription>
            Need help with your affiliate marketing? Contact our partner support team.
          </CardDescription>
        </CardHeader>
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
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">
            Contact Partner Support
          </Button>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
          </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </CardContent>;
      </Card>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          <div className='grid md:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {resources.map (resource => (




          <CardTitle>Partner Support

        <CardContent className="flex flex-col items-center text-center py-6">"
          <p className="text-zion-slate-light mb-4">"
</p>
          </p>"
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">"


          </div>;
      ;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"


          <CardTitle>Promotion Guidelines;"
          <div className='grid md:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
pr-12325
              <Card;
                key={resource.id}
                className='bg - zion - blue border - zion - blue - light overflow - hidden';
              >;
                <CardContent className='p - 6 flex flex - col items - center text - center'>;
                  <div className='mb - 4'>{resource.icon}</div>;
                  <h3 className='font - semibold text - white mb - 1'>;
                    {resource.title}
                  </h3>;
                  <p className='text - xs text - zion - slate - light mb - 4'>;
                    {resource.description}
                  </p>;
                  <Button;
                    on_click={() => handle_download (resource)}
                    size='sm';
                    variant='outline';
                    className='w - full flex items - center gap - 2'                  >;
                    <Download className='h - 4 w - 4' />;
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}'
                  </Button>;
                </CardContent>;
              </Card>))}
          </div>;
        </CardContent>;
      </Card>;
      <Card className='bg - zion - blue - dark border - zion - blue - light'>;
        <CardHeader>;
          <CardTitle > Promotion Guidelines</CardTitle>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
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
=======
=======
        <CardContent className='space - y-4'>;

                <CardContent className='p - 6 flex flex - col items - center text - center'>;

                  <div className='mb - 4'>{resource.icon}</div>;
                  <h3 className='font - semibold text - white mb - 1'>;
</h3>
                  </h3>;
                  <p className='text - xs text - zion - slate - light mb - 4'>;
                  </p>;
                    on_click={() => handle_download (resource)}

                    <Download className='h - 4 w - 4' />;

              ))}


          <CardTitle > Promotion Guidelines;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx

        <CardContent className='space - y-4'>;

pr-12325
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
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
            </ul>;
          </div>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
          <div className="space-y-2">;
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;
              <li>Make unrealistic promises about earnings or results</li>;
              <li>Use manipulative or misleading marketing tactics</li>;
              <li>Spam your referral link across unrelated content</li>;
              <li>Modify or alter our brand assets in unauthorized ways</li>;
              <li>Create fake accounts or use bots to generate referrals</li>;
=======

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
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
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
            </ul>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
      <Card className='bg - zion - blue - dark border - zion - blue - light'>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
        <CardHeader>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
=======
          <CardTitle > Partner Support</CardTitle>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
          <CardTitle>Partner Support</CardTitle>;
          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
        <CardContent className="flex flex-col items-center text-center py-6">;
          <p className="text-zion-slate-light mb-4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">;
=======

<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          <Button className='bg - zion - purple hover:bg - zion - purple - dark'>;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======
        <CardContent className='flex flex - col items - center text - center py - 6'>;
          <p className='text - zion - slate - light mb - 4'>;
            Our partner success team is available to help you maximize your;
            partnership with Zion AI Marketplace. Feel free to reach out if you;
            have questions about promotions, resources, or payment.;
          </p>;
          <Button className='bg - zion - purple hover:bg - zion - purple - dark'>;',
        <CardContent className="flex flex-col items-center text-center py-6">;
          <p className="text-zion-slate-light mb-4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}
=======

    </div>);
}</div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue-light" > <CardHeader> <CardTitle > Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text - lg font - semibold text-white" >Do's</h3> <ul className="list - disc pl - 5 space - y-1 text - zion - slate-light" > <li > Use our official brand assets from the resources provided</li> <li > Share your unique referral link in your content</li> <li > Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li > Be transparent that you're a partner and may earn from referrals</li> <li > Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text - lg font - semibold text-white" >Don'ts</h3> <ul className="list - disc pl - 5 space - y-1 text - zion - slate-light" > <li > Make unrealistic promises about earnings or results</li> <li > Use manipulative or misleading marketing tactics</li> <li > Spam your referral link across unrelated content</li> <li > Modify or alter our brand assets in unauthorized ways</li> <li > Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue-light" > <CardHeader> <CardTitle > Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex - col items - center text - center py-6" > <p className="text - zion - slate - light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>);
}'"}
<<<<<<< HEAD

  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
    </div>);
}</div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> <CardTitle > Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space - y-4" > <div className="space - y-2" > <h3 className="text - lg font - semibold text - white" >Do's</h3> <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light" > <li > Use our official brand assets from the resources provided</li> <li > Share your unique referral link in your content</li> <li > Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li > Be transparent that you're a partner and may earn from referrals</li> <li > Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space - y-2" > <h3 className="text - lg font - semibold text - white" >Don'ts</h3> <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light" > <li > Make unrealistic promises about earnings or results</li> <li > Use manipulative or misleading marketing tactics</li> <li > Spam your referral link across unrelated content</li> <li > Modify or alter our brand assets in unauthorized ways</li> <li > Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> <CardTitle > Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex - col items - center text - center py - 6" > <p className="text - zion - slate - light mb - 4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>);
}'"}"
  )
}}}}})))))]]
    </div>;
  );
}
}'"}

<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx
  )
  );

}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>) ;
}'"
<<<<<<< HEAD:src/components/partners/PartnerResources.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/partners/PartnerResources.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/partners/PartnerResources.tsx
=======

          <CardTitle > Partner Support;

        <CardContent className='flex flex - col items - center text - center py - 6'>;

          <p className='text - zion - slate - light mb - 4'>;
          <Button className='bg - zion - purple hover:bg - zion - purple - dark'>;

    </div>);
}</div>   <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> <CardTitle > Promotion Guidelines <CardDescription> Best practices for promoting the Zion AI Marketplace   <CardContent className="space - y-4" > <div className="space - y-2" > <h3 className="text - lg font - semibold text - white" >Do's</h3> <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light" > <li > Use our official brand assets from the resources provided</li> <li > Share your unique referral link in your content</li> <li > Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li > Be transparent that you're a partner and may earn from referrals</li> <li > Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space - y-2" > <h3 className="text - lg font - semibold text - white" >Don'ts</h3> <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light" > <li > Make unrealistic promises about earnings or results</li> <li > Use manipulative or misleading marketing tactics</li> <li > Spam your referral link across unrelated content</li> <li > Modify or alter our brand assets in unauthorized ways</li> <li > Create fake accounts or use bots to generate referrals</li> </ul> </div>   <Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> <CardTitle > Partner Support <CardDescription> Need help with your affiliate marketing? Contact our partner support team.   <CardContent className="flex flex - col items - center text - center py - 6" > <p className="text - zion - slate - light mb - 4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support    </div>);"]"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/partners/PartnerResources.tsx

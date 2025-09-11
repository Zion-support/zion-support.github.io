<<<<<<< HEAD
<<<<<<< HEAD
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRef, useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Download, Link, Plus } from 'lucide-react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Copy, Download, Link, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useReferrals } from '@/hooks/useReferrals';
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger,;
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';

<<<<<<< HEAD
<<<<<<< HEAD
import { toast } from '@/hooks/use-toast'
import { useReferrals } from '@/hooks/useReferrals'
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
export function PartnerReferralLinks() {
  const {
    referralCode
    getReferralLink
    copyReferralLink
    shareOnSocialMedia
  } = useReferrals()
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function PartnerReferralLinks() {;
  const {;
    referralCode,;
    getReferralLink,;
    copyReferralLink,;
    shareOnSocialMedia,;
  } = useReferrals();
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string>('default');
  const [customParam, setCustomParam] = useState<string>('');
  const [generatedLinks, setGeneratedLinks] = useState<;
<<<<<<< HEAD
<<<<<<< HEAD
    { name: string; link: string }[]
  >([])
  // Get the base referral link
  const baseLink = getReferralLink()
  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);    toast({
      title: 'Link copied!'
      description: 'The referral link has been copied to your clipboard'
      variant: 'default'
    })
  }
  const handleGenerateLink = () => {
    if (baseLink) {
      const url = new URL(baseLink)
      // Add custom campaign parameter if selected
      if (selectedCampaign !== 'default') {
        url.searchParams.append('campaign', selectedCampaign)
      }
      // Add custom parameter if provided
      if (customParam) {
        url.searchParams.append('source', customParam)
      }
      const newLink = {
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ''}`
        link: url.toString()
      }
      setGeneratedLinks(prev => [...prev, newLink])
      setIsDialogOpen(false)
      setCustomParam('')
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    { name: string; link: string }[];
  >([]);

  // Get the base referral link;
  const baseLink = getReferralLink();

  const handleCopyLink = (link: string) => {;
    navigator && navigator.clipboard.writeText(link);    toast({;
      title: 'Link copied!',;
      description: 'The referral link has been copied to your clipboard',;
      variant: 'default',;
    });
  };

  const handleGenerateLink = () => {;
    if (baseLink) {;
      const url = new URL(baseLink);

      // Add custom campaign parameter if selected;
      if (selectedCampaign !== 'default') {;
        url && url.searchParams.append('campaign', selectedCampaign);
      }

      // Add custom parameter if provided;
      if (customParam) {;
        url && url.searchParams.append('source', customParam);
      }

      const newLink = {;
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ''}`,;
        link: url && url.toString(),;
      };

      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam('');
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  };

  const handleDownloadLinks = () => {;
    const allLinks = [{ name: 'Default', link: baseLink }, ...generatedLinks];

    const csvContent = [;
      'Name,Link',;
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`),;
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL && URL.createObjectURL(blob);
    const link = document && document.createElement('a');
    link && link.setAttribute('href', url);
    link && link.setAttribute('download', 'zion_referral_links && zion_referral_links.csv');
    link && link.style.visibility = 'hidden';
    document && document.body.appendChild(link);
    link && link.click();
    document && document.body.removeChild(link);
  };

  return (

              className='flex items-center gap-2'>;
              <Download className='h-4 w-4' />;
    <div className='space - y-6'>;
      <Card className='bg - zion - blue - dark border - zion - blue - light'>;

import { useRef, useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",

import { Copy, Download, Link, Plus } from 'lucide-react'


import { useRef, useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Download, Link, Plus } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
import { useReferrals } from "@/hooks/useReferrals",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
import { Label } from "@/components/ui/label",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function PartnerReferralLinks() {
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals(),
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default"),
  const [customParam, setCustomParam] = useState<string>(""),
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
  
  // Get the base referral link
  const baseLink = getReferralLink(),
  
  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link),
    toast({
      title: "Link copied!",
      description: "The referral link has been copied to your clipboard",
      variant: "default"
    })
  },
  
  const handleGenerateLink = () => {
    if (baseLink) {
      const url = new URL(baseLink),
      
      // Add custom campaign parameter if selected
      if (selectedCampaign !== "default") {
        url.searchParams.append("campaign", selectedCampaign)
<<<<<<< HEAD
<<<<<<< HEAD
      
      // Add custom parameter if provided
      if (customParam) {
        url.searchParams.append("source", customParam)
      }
      
      const newLink = {
        url.searchParams.append('source', customParam)
      }
      
      const newLink = {
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ''}`,
        link: url.toString(),
      }
      setGeneratedLinks(prev => [...prev, newLink])
      setIsDialogOpen(false)
      setCustomParam('')
    }
  }
  const handleDownloadLinks = () => {
    const allLinks = [{ name: 'Default', link: baseLink }, ...generatedLinks]
    const csvContent = [
      'Name,Link',
      ...allLinks.map(l => `${l.name},${l.link}`),
    ].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', 'zion_referral_links.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`,
        link: url.toString()
      },
      
      setGeneratedLinks(prev => [...prev, newLink]),
      setIsDialogOpen(false),
      setCustomParam("")
    }
  },
  
  const handleDownloadLinks = () => {
    const allLinks = [
      { name: "Default", link: baseLink },
      ...generatedLinks
    ],
    
    const csvContent = [
      "Name,Link",
      ...allLinks.map(l => `${l.name},${l.link}`)
    ].join("\n"),
    
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),
    const link = document.createElement("a"),
    link.setAttribute("href", url),
    link.setAttribute("download", "zion_referral_links.csv"),
    link.style.visibility = 'hidden',
    document.body.appendChild(link),
    link.click(),
    document.body.removeChild(link)
  },
  return (
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Referral Link</span>
      }
      
      // Add custom parameter if provided
      if (customParam) {
        url.searchParams.append("source", customParam)
      }
      
      const newLink = {
        url.searchParams.append('source', customParam)
        url.searchParams.append("source", customParam)
      }
      
      const newLink = {
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ''}`,
        link: url.toString(),
      }
      setGeneratedLinks(prev => [...prev, newLink])
      setIsDialogOpen(false)
      setCustomParam('')
    }
  }
  const handleDownloadLinks = () => {
    const allLinks = [{ name: 'Default', link: baseLink }, ...generatedLinks]
    const csvContent = [
      'Name,Link',
      ...allLinks.map(l => `${l.name},${l.link}`),
    ].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', 'zion_referral_links.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`,
        link: url.toString()
      },
      
      setGeneratedLinks(prev => [...prev, newLink]),
      setIsDialogOpen(false),
      setCustomParam("")
    }
  },
  
  const handleDownloadLinks = () => {
    const allLinks = [
      { name: "Default", link: baseLink },
      ...generatedLinks
    ],
    
    const csvContent = [
      "Name,Link",
      ...allLinks.map(l => `${l.name},${l.link}`)
    ].join("\n"),
    
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),
    const link = document.createElement("a"),
    link.setAttribute("href", url),
    link.setAttribute("download", "zion_referral_links.csv"),
    link.style.visibility = 'hidden',
    document.body.appendChild(link),
    link.click(),
    document.body.removeChild(link)
  },
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



      }
      
      // Add custom parameter if provided
      if (customParam) {




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Referral Link</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              variant='outline'
              size='sm'
              onClick={handleDownloadLinks}
              className='flex items-center gap-2'            >
              <Download className='h-4 w-4' />
              Export Links
            </Button>
          </CardTitle>
          <CardDescription>
            Share this link with your audience to earn rewards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex space-x-2'>
            <Input value={baseLink} readOnly className='font-mono text-sm' />
            <Button variant='outline' onClick={() => handleCopyLink(baseLink)}>
              <Copy className='h-4 w-4' />
              <span className='sr-only'>Copy</span>            </Button>
          </div>
        </CardContent>
      </Card>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-white'>
          Custom Campaign Links
        </h3>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button 
              variant="outline" 
              size="sm" 
import { useRef, useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Download, Link, Plus } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
import { useReferrals } from "@/hooks/useReferrals",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;
import { Label } from "@/components/ui/label",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
export function PartnerReferralLinks() {;
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals(),;
  const [isDialogOpen, setIsDialogOpen] = useState(false),;
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default"),;
  const [customParam, setCustomParam] = useState<string>(""),;
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),;
  // Get the base referral link;
  const baseLink = getReferralLink(),;
  const handleCopyLink = (link: string) => {;
    navigator.clipboard.writeText(link),;
    toast({;
      title: "Link copied!",;
      description: "The referral link has been copied to your clipboard",;
      variant: "default";
    });
  },;
  const handleGenerateLink = () => {;
    if (baseLink) {;
      const url = new URL(baseLink),;
      // Add custom campaign parameter if selected;
      if (selectedCampaign !== "default") {;
        url.searchParams.append("campaign", selectedCampaign);
      }
;
      // Add custom parameter if provided;
      if (customParam) {;
        url.searchParams.append("source", customParam);
      }
;
      const newLink = {;
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`,;
        link: url.toString();
      },;
      setGeneratedLinks(prev => [...prev, newLink]),;
      setIsDialogOpen(false),;
      setCustomParam("");
    }
  },;
  const handleDownloadLinks = () => {;
    const allLinks = [;
      { name: "Default", link: baseLink },;
      ...generatedLinks;
    ],;
    const csvContent = [;
      "Name,Link",;
      ...allLinks.map(l => `${l.name},${l.link}`);
    ].join("\n"),;
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),;
    const url = URL.createObjectURL(blob),;
    const link = document.createElement("a"),;
    link.setAttribute("href", url),;
    link.setAttribute("download", "zion_referral_links.csv"),;
    link.style.visibility = 'hidden',;
    document.body.appendChild(link),;
    link.click();
    document.body.removeChild(link);
  };
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="flex items-center justify-between">;
            <span>Your Referral Link</span>;
            <Button;
              variant='outline';
              size='sm';
              on_click={handleDownloadLinks}
              className='flex items - center gap - 2'            >;
              <Download className='h - 4 w - 4' />;
              Export Links;
            </Button>;
          </CardTitle>;
          <CardDescription>Share this link with your audience to earn rewards</CardDescription>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="flex space-x-2">;
            <Input;
              value={baseLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" onClick={() => handleCopyLink(baseLink)}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Custom Campaign Links</h3>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <div className='flex space - x-2'>;
            <Input value={base_link} read_only className='font - mono text - sm' />;
            <Button variant='outline' on_click={() => handleCopyLink (base_link)}>;
              <Copy className='h - 4 w - 4' />;
              <span className='sr - only'>Copy</span>            </Button>;
          </div>;
        </CardContent>;
      </Card>;
      <div className='flex justify - between items - center'>;
        <h3 className='text - lg font - semibold text - white'>;
          Custom Campaign Links;
        </h3>;
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
          <DialogTrigger as_child>;
            <Button;
              variant='outline';
              size='sm';
              className='flex items - center gap - 2';
            >;
              <Plus className='h - 4 w - 4' />;
              Create New Link;
            </Button>;
          </DialogTrigger>;
          <DialogContent className='sm:max - w-md bg - zion - blue border - zion - blue - light'>;
            <DialogHeader>;
              <DialogTitle > Create Custom Campaign Link</DialogTitle>;

              <DialogDescription>;
                Generate a trackable link for specific marketing campaigns;
              </DialogDescription>;
            </DialogHeader>;

            <div className='grid gap - 4 py - 4'>;
              <div className='grid gap - 2'>;
                <Label html_for='campaign'>Campaign Type</Label>;
                <Select;
                  value={selected_campaign}
                  onValueChange={setSelectedCampaign}                >;

                  <SelectTrigger id='campaign'>;
                    <SelectValue placeholder='Select campaign type' />;
                  </SelectTrigger>;
                  <SelectContent>;
                    <SelectItem value='default'>General (Default)</SelectItem>;
                    <SelectItem value='youtube'>YouTube</SelectItem>;
                    <SelectItem value='newsletter'>Newsletter</SelectItem>;
                    <SelectItem value='blog'>Blog</SelectItem>;
                    <SelectItem value='podcast'>Podcast</SelectItem>;
                    <SelectItem value='social'>Social Media</SelectItem>;
                  </SelectContent>;
                </Select>;
              </div>;

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Custom Campaign Links</h3>


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create New Link
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light">
            <DialogHeader>
              <DialogTitle>Create Custom Campaign Link</DialogTitle>
              <DialogDescription>
                Generate a trackable link for specific marketing campaigns
              </DialogDescription>
            </DialogHeader>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='grid gap-4 py-4'>
              <div className='grid gap-2'>
                <Label htmlFor='campaign'>Campaign Type</Label>
                <Select
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}                >
                  <SelectTrigger id='campaign'>
                    <SelectValue placeholder='Select campaign type' />
<<<<<<< HEAD
                  </SelectTrigger>
            <div className='grid gap-4 py-4'>
              <div className='grid gap-2'>
                <Label htmlFor='campaign'>Campaign Type</Label>
                <Select
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}                >
                  <SelectTrigger id='campaign'>
                    <SelectValue placeholder='Select campaign type' />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="campaign">Campaign Type</Label>
                <Select 
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}
                >
                  <SelectTrigger id="campaign">
                    <SelectValue placeholder="Select campaign type" />

                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">General (Default)</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="newsletter">Newsletter</SelectItem>
                    <SelectItem value="blog">Blog</SelectItem>
                    <SelectItem value="podcast">Podcast</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='grid gap-2'>
                <Label htmlFor='custom'>Custom Parameter (Optional)</Label>
                <Input
                  id='custom'
                  placeholder='spring_campaign, video_123, etc.'
                  value={customParam}
                  onChange={e => setCustomParam(e.target.value)}                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type='button'
                variant='secondary'
                onClick={() => setIsDialogOpen(false)}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="grid gap-2">
                <Label htmlFor="custom">Custom Parameter (Optional)</Label>
                <Input 
                  id="custom" 
                  placeholder="spring_campaign, video_123, etc." 
                  value={customParam}
                  onChange={(e) => setCustomParam(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="button" 
                variant="secondary" 
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="button" 
                onClick={handleGenerateLink}
                className="bg-zion-purple hover:bg-zion-purple-dark"

              >
                Cancel
              </Button>
              <Button
                type='button'
                onClick={handleGenerateLink}
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-zion-purple hover:bg-zion-purple-dark'              >
                Generate Link
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
                    <span>{item.name |'Campaign Link'}</span>                  </div>
      <div className="grid gap-4">
        {generatedLinks.length > 0 ? (
          generatedLinks.map((item, index) => (
      <div className='grid gap-4'>
        {generatedLinks.length > 0 ? (
          generatedLinks.map((item, index) => (
            <Card
              key={index}
              className='bg-zion-blue-dark border-zion-blue-light'
            >
              <CardHeader className='pb-2'>
                <CardTitle className='text-base flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Link className='h-4 w-4 text-zion-purple' />
                    <span>{item.name |'Campaign Link'}</span>                  </div>
                    <span>{item.name || 'Campaign Link'}</span>                  </div>

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                    <span>{item.name || 'Campaign Link'}</span>                  </div>


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid gap-4">
        {generatedLinks.length > 0 ? (
          generatedLinks.map((item, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Link className="h-4 w-4 text-zion-purple" />
                    <span>{item.name || "Campaign Link"}</span>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                </CardTitle>
=======



                </CardTitle>
              </CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CardContent className='pb-4'>
                <div className='flex space-x-2'>
                className='bg-zion-purple hover:bg-zion-purple-dark'>;
                Generate Link;
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;

      <div className='grid gap-4'>;
        {generatedLinks && generatedLinks.length > 0 ? (;
          generatedLinks && generatedLinks.map((item, index) => (;
            <Card
              key={index}
              className='bg-zion-blue-dark border-zion-blue-light'>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-base flex items-center justify-between'>;
                  <div className='flex items-center gap-2'>;
                    <Link className='h-4 w-4 text-zion-purple' />;
                    <span>{item && item.name || 'Campaign Link'}</span>                  </div>;
                </CardTitle>;
              </CardHeader>;
              <CardContent className='pb-4'>;
                <div className='flex space-x-2'>;
<<<<<<< HEAD
<<<<<<< HEAD
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex space-x-2">
                  <Input
                    value={item.link}
                    readOnly
=======
                  <Input
                    value={item.link}
                    readOnly

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="font-mono text-xs"
                  />
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => handleCopyLink(item.link)}                  >
                    <Copy className='h-4 w-4' />
                    <span className='sr-only'>Copy</span>
<<<<<<< HEAD
=======
                  <Input
                    value={item.link}
                    readOnly

                    className="font-mono text-xs"
                  />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleCopyLink(item.link)}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="bg-zion-blue/20 border-dashed border-zion-blue-light">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <p className="text-zion-slate-light text-center mb-4">
                Create custom campaign links to track different marketing efforts
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
              <Button
                variant='outline'
=======

              <Button 
                variant="outline"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Button
                variant='outline'
                onClick={() => setIsDialogOpen(true)}
                className='flex items-center gap-2'              >
                <Plus className='h-4 w-4' />
                Create First Link
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}//Add custom parameter if provided if (customParam) {
}const newLink = {
  name: `$ {
  selectedCampaign
}$ {
  customParam ? `-$ {
  customParam
}`: ""
}`
}
}
...generatedLinks ]
link.style.visibility = 'hidden'
document.body.appendChild (link)
link.click ()
document.body.removeChild (link)
};"
  baseLink "
}readOnly className="font-mono text-sm"/> <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card> <div className="flex justify-between items-center"> <DialogTrigger asChild> <Button variant=" outline"size=" sm"className="flex items-center gap-2"> <Plus className="h-4 w-4"/> Create New Link </Button> </DialogTrigger> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Create Custom Campaign Link</DialogTitle> <DialogDescription> Generate a trackable link for specific marketing campaigns </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4"> <div className="grid gap-2"> <Label htmlFor=" campaign">Campaign Type</Label> <Select value= {
  selectedCampaign
}onValueChange= {
  setSelectedCampaign "
}> <SelectTrigger id=" campaign"> <SelectValue placeholder=" Select campaign type"/> </SelectTrigger> <SelectContent> <SelectItem value=" default">General (Default) </SelectItem> <SelectItem value=" youtube">YouTube</SelectItem> <SelectItem value=" newsletter">Newsletter</SelectItem> <SelectItem value=" blog">Blog</SelectItem> <SelectItem value=" podcast">Podcast</SelectItem> <SelectItem value=" social">Social Media</SelectItem> </SelectContent> </Select> </div> <div className="grid gap-2"> <Label htmlFor=" custom">Custom Parameter (Optional) </Label> <Input /> </div> </div> <DialogFooter> <Button > Cancel </Button> <Button className="bg-zion-purple hover:bg-zion-purple-dark"> Generate Link </Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className="grid gap-4"> {
  generatedLinks.length > 0 ? (generatedLinks.map ( (item, index) => (<Card key= {
  index "
}className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-base flex items-center justify-between"> <div className="flex items-center gap-2"> </div> </CardTitle> </CardHeader> <CardContent className="pb-4"> <div className="flex space-x-2"> <Input value= {
  item.link "
}readOnly className="font-mono text-xs"/> <Button > <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card>) ) ) : (<Card className="bg-zion-blue/20 border-dashed border-zion-blue-light"> <CardContent className="flex flex-col items-center justify-center p-6"> <p className="text-zion-slate-light text-center mb-4"> Create custom campaign links to track different marketing efforts </p> <Button className="flex items-center gap-2"> <Plus className="h-4 w-4" /> Create First Link </Button> </CardContent> </Card>)
}</div> </div>)
}'"}
              <Button 
                variant="outline"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2";
              >;
                <Plus className="h-4 w-4" />;
                Create First Link;
              </Button>;
            </CardContent>;
          </Card>;
        )}

      </div>;
    </div>;
  );

}//Add custom parameter if provided if (customParam) {;

}const newLink = {;
  name: `$ {;
  selectedCampaign ;
}$ {;
  customParam ? `-$ {;
  customParam ;
}`: "" ;
}`;
};

};
...generatedLinks ];
link && link.style.visibility = 'hidden';
document && document.body.appendChild (link);
link && link.click ();
document && document.body.removeChild (link);
};";
  baseLink ";
}readOnly className="font-mono text-sm"/> <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card> <div className="flex justify-between items-center"> <DialogTrigger asChild> <Button variant=" outline"size=" sm"className="flex items-center gap-2"> <Plus className="h-4 w-4"/> Create New Link </Button> </DialogTrigger> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Create Custom Campaign Link</DialogTitle> <DialogDescription> Generate a trackable link for specific marketing campaigns </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4"> <div className="grid gap-2"> <Label htmlFor=" campaign">Campaign Type</Label> <Selectvalue= {
  selectedCampaign 
}onValueChange= {
  setSelectedCampaign "
}> <SelectTrigger id=" campaign"> <SelectValue placeholder=" Select campaign type"/> </SelectTrigger> <SelectContent> <SelectItem value=" default">General (Default) </SelectItem> <SelectItem value=" youtube">YouTube</SelectItem> <SelectItem value=" newsletter">Newsletter</SelectItem> <SelectItem value=" blog">Blog</SelectItem> <SelectItem value=" podcast">Podcast</SelectItem> <SelectItem value=" social">Social Media</SelectItem> </SelectContent> </Select> </div> <div className="grid gap-2"> <Label htmlFor=" custom">Custom Parameter (Optional) </Label> <Input /> </div> </div> <DialogFooter> <Button > Cancel </Button> <Button className="bg-zion-purple hover:bg-zion-purple-dark"> Generate Link </Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className="grid gap-4"> {;
  generatedLinks && generatedLinks.length > 0 ? (generatedLinks && generatedLinks.map ( (item, index) => (<Cardkey= {
  index "
}className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-base flex items-center justify-between"> <div className="flex items-center gap-2"> </div> </CardTitle> </CardHeader> <CardContent className="pb-4"> <div className="flex space-x-2"> <Inputvalue= {
  item && item.link "
}readOnly className="font-mono text-xs"/> <Button > <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card>) ) ) : (<Card className="bg-zion-blue/20 border-dashed border-zion-blue-light"> <CardContent className="flex flex-col items-center justify-center p-6"> <p className="text-zion-slate-light text-center mb-4"> Create custom campaign links to track different marketing efforts </p> <Button className="flex items-center gap-2"> <Plus className="h-4 w-4" /> Create First Link </Button> </CardContent> </Card>) ;
}</div> </div>) ;
}'"}

              <div className='grid gap - 2'>;
                <Label html_for='custom'>Custom Parameter (Optional)</Label>;
                <Input;
                  id='custom';
                  placeholder='spring_campaign, video_123, etc.';
                  value={custom_param}
                  on_change={e => setCustomParam (e.target.value)}                />;
              </div>;
            </div>;
            <DialogFooter>;
              <Button;
                type='button';
                variant='secondary';
                on_click={() => setIsDialogOpen (false)}
<<<<<<< HEAD
<<<<<<< HEAD
              <Button 
                variant="outline"
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >;
                <Plus className="h-4 w-4" />;
                Create First Link;
              </Button>;
            </CardContent>;
          </Card>;
        )}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
    </div>;
  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}const new_link = {
  name: `$ {
  selected_campaign;
}$ {
  custom_param ? `-$ {
  custom_param;
}`: "";
}`;
}
}
...generated_links ];
link.style.visibility = 'hidden';
document.body.append_child (link);
link.click ();
document.body.remove_child (link);
}";
  base_link ";
}read_only className="font - mono text - sm"/> <Copy className="h - 4 w - 4"/> <span className="sr - only">Copy</span> </Button> </div> </CardContent> </Card> <div className="flex justify - between items - center"> <DialogTrigger as_child> <Button variant=" outline"size=" sm"className="flex items - center gap - 2"> <Plus className="h - 4 w - 4"/> Create New Link </Button> </DialogTrigger> <DialogContent className="sm:max - w-md bg - zion - blue border - zion - blue - light"> <DialogHeader> <DialogTitle > Create Custom Campaign Link</DialogTitle> <DialogDescription> Generate a trackable link for specific marketing campaigns </DialogDescription> </DialogHeader> <div className="grid gap - 4 py - 4"> <div className="grid gap - 2"> <Label html_for=" campaign">Campaign Type</Label> <Select value= {
  selected_campaign;
}onValueChange= {
  setSelectedCampaign ";
}> <SelectTrigger id=" campaign"> <SelectValue placeholder=" Select campaign type"/> </SelectTrigger> <SelectContent> <SelectItem value=" default">General (Default) </SelectItem> <SelectItem value=" youtube">YouTube</SelectItem> <SelectItem value=" newsletter">Newsletter</SelectItem> <SelectItem value=" blog">Blog</SelectItem> <SelectItem value=" podcast">Podcast</SelectItem> <SelectItem value=" social">Social Media</SelectItem> </SelectContent> </Select> </div> <div className="grid gap - 2"> <Label html_for=" custom">Custom Parameter (Optional) </Label> <Input /> </div> </div> <DialogFooter> <Button > Cancel </Button> <Button className="bg - zion - purple hover:bg - zion - purple - dark"> Generate Link </Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className="grid gap - 4"> {
  generated_links.length > 0 ? (generated_links.map ( (item, index) => (<Card key= {
  index ";
}className="bg - zion - blue - dark border - zion - blue - light"> <CardHeader className="pb - 2"> <CardTitle className="text - base flex items - center justify - between"> <div className="flex items - center gap - 2"> </div> </CardTitle> </CardHeader> <CardContent className="pb - 4"> <div className="flex space - x-2"> <Input value= {
  item.link ";
}read_only className="font - mono text - xs"/> <Button > <Copy className="h - 4 w - 4"/> <span className="sr - only">Copy</span> </Button> </div> </CardContent> </Card>) ) ) : (<Card className="bg - zion - blue / 20 border - dashed border - zion - blue - light"> <CardContent className="flex flex - col items - center justify - center p - 6"> <p className="text - zion - slate - light text - center mb - 4"> Create custom campaign links to track different marketing efforts </p> <Button className="flex items - center gap - 2"> <Plus className="h - 4 w - 4" /> Create First Link </Button> </CardContent> </Card>);
}</div> </div>);
}'"}
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

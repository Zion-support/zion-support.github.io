<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

<<<<<<< HEAD
import { useRef, useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Download, Link, Plus } from "lucide-react",
import { toast } from "@/hooks/use-toast",
import { useReferrals } from "@/hooks/useReferrals",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Download, Link, Plus} from "lucide-react";
import {toast} from "@/hooks/use-toast";
import {useReferrals} from "@/hooks/useReferrals";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
export function PartnerReferralLinks() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useRef, useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Download, Link, Plus } from "lucide-react",
import { toast } from "@/hooks/use-toast",
import { useReferrals } from "@/hooks/useReferrals",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
<<<<<<< HEAD
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export function PartnerReferralLinks() {
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([])
  // Get the base referral link
  const baseLink = getReferralLink();
=======
import { Label } from "@/components/ui/label",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",

export function PartnerReferralLinks() {
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals(),
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default"),
  const [customParam, setCustomParam] = useState<string>(""),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
  
  // Get the base referral link
  const baseLink = getReferralLink(),
<<<<<<< HEAD
<<<<<<< HEAD

=======
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    toast({
      title: "Link copied!"
      description: "The referral link has been copied to your clipboard"
      variant: "default"
    })
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
  }
  const handleGenerateLink = () => {
    if (baseLink) {
      const url = new URL(baseLink);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  
  const handleGenerateLink = () => {
    if (baseLink) {
      const url = new URL(baseLink),
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Add custom campaign parameter if selected
      if (selectedCampaign !== "default") {
        url.searchParams.append("campaign", selectedCampaign)
      }
      // Add custom parameter if provided
      if (customParam) {
        url.searchParams.append("source", customParam)
      }
      const newLink = {
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`
        link: url.toString()
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),;
  // Get the base referral link;
  const baseLink = getReferralLink();
  const handleCopyLink = (link: string) => {;
    navigator && navigator.clipboard.writeText(link),;
    toast({;
      title: "Link copied!",;
      description: "The referral link has been copied to your clipboard",;
      variant: "default";
    });
  };
  const handleGenerateLink = () => {;
    if (baseLink) {;
      const url = new URL(baseLink);
      // Add custom campaign parameter if selected;
      if (selectedCampaign !== "default") {;
        url && url.searchParams.append("campaign", selectedCampaign);
      }
      // Add custom parameter if provided;
      if (customParam) {;
        url && url.searchParams.append("source", customParam);
      }
      const newLink = {;
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`,;
        link: url && url.toString();
      };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("");
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx


=======
<<<<<<< HEAD
      }
      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("")
    }
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      },
      
      setGeneratedLinks(prev => [...prev, newLink]),
      setIsDialogOpen(false),
      setCustomParam("")
    }
  },
  
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleDownloadLinks = () => {
    const allLinks = [
      { name: "Default", link: baseLink }
      ...generatedLinks
<<<<<<< HEAD

<<<<<<< HEAD
    const csvContent = [
      "Name,Link",
      ...allLinks.map(l => `${l.name},${l.link}`)
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
  };
  const handleDownloadLinks = () => {;
    const allLinks = [;
      { name: "Default", link: baseLink },;
      ...generatedLinks;
    ];
    const csvContent = [;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

      "Name,Link";
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);
    ].join("\n");


    ],
    

    const csvContent = [
      "Name,Link",
      ...allLinks.map(l => `${l.name},${l.link}`)

=======
<<<<<<< HEAD
    ];
=======
    ],
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const csvContent = [
      "Name,Link",
      ...allLinks.map(l => `${l.name},${l.link}`)
<<<<<<< HEAD
    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "zion_referral_links.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Referral Link</span>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
            <Button
              variant="outline"
              size="sm"
=======
            <Button 
              variant="outline" 
              size="sm" 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useRef, useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Download, Link, Plus } from "lucide-react",;
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
<<<<<<< HEAD
=======

========
      "Name,Link";
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);
    ].join("\n");
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL && URL.createObjectURL(blob);
    const link = document && document.createElement("a");
    link && link.setAttribute("href", url);
    link && link.setAttribute("download", "zion_referral_links && zion_referral_links.csv");
    link && link.style.visibility = 'hidden';
    document && document.body.appendChild(link);
    link && link.click();
    document && document.body.removeChild(link);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  };
  return (
=======
import { useRef, useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Download, Link, Plus } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
import { useReferrals } from "@/hooks/useReferrals",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;
import { Label } from "@/components/ui/label",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
;
export function PartnerReferralLinks() {;
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals(),;
  const [isDialogOpen, setIsDialogOpen] = useState(false),;
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default"),;
  const [customParam, setCustomParam] = useState<string>(""),;
  const [generatedLinks, setGeneratedLinks] = useState<{name:string, link:string}[]>([]),;
  ;
  // Get the base referral link;
  const baseLink = getReferralLink(),;
  ;
  const handleCopyLink = (link:string) => {;
    navigator.clipboard.writeText(link),;
    toast({;
      title:"Link copied!",;
      description:"The referral link has been copied to your clipboard",;
      variant:"default";
    }),;
  },;
  ;
  const handleGenerateLink = () => {;
    if (baseLink) {;
      const url = new URL(baseLink),;
      ;
      // Add custom campaign parameter if selected;
      if (selectedCampaign !== "default") {;
        url.searchParams.append("campaign", selectedCampaign),;
      }
      ;
      // Add custom parameter if provided;
      if (customParam) {;
        url.searchParams.append("source", customParam),;
      }
      ;
      const newLink = {;
        name:`${selectedCampaign}${customParam ? `-${customParam}` :""}`,;
        link:url.toString();
      },;
      ;
      setGeneratedLinks(prev => [...prev, newLink]),;
      setIsDialogOpen(false),;
      setCustomParam(""),;
    }
  },;
  ;
  const handleDownloadLinks = () => {;
    const allLinks = [;
      { name:"Default", link:baseLink },;
      ...generatedLinks;
    ],;
    ;
    const csvContent = [;
      "Name,Link",;
      ...allLinks.map(l => `${l.name},${l.link}`);
    ].join("\n"),;
    ;
    const blob = new Blob([csvContent], { type:'text/csv,charset=utf-8,' }),;
    const url = URL.createObjectURL(blob),;
    const link = document.createElement("a"),;
    link.setAttribute("href", url),;
    link.setAttribute("download", "zion_referral_links.csv"),;
    link.style.visibility = 'hidden',;
    document.body.appendChild(link),;
    link.click(),;
    document.body.removeChild(link),;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="flex items-center justify-between">;
            <span>Your Referral Link</span>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
            <Button;
              variant="outline";
              size="sm";

=======
            <Button
              variant="outline" 
              size="sm" 

=======

            <Button 
              variant="outline" 
              size="sm" 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
            <Button
              variant="outline" 
              size="sm" 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
              onClick={handleDownloadLinks}
              className="flex items-center gap-2">;
=======
            <Button ;
              variant="outline" ;
              size="sm" ;
              onClick={handleDownloadLinks}
              className="flex items-center gap-2";
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Download className="h-4 w-4" />;
              Export Links;
            </Button>;
          </CardTitle>;
          <CardDescription>Share this link with your audience to earn rewards</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex space-x-2">;
<<<<<<< HEAD
=======
            <Button;
              variant="outline";
              size="sm";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              onClick={handleDownloadLinks}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export Links
            </Button>
          </CardTitle>
          <CardDescription>Share this link with your audience to earn rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Input
              value={baseLink}
              readOnly
              className="font-mono text-sm"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

========
=======
            <Input;
              value={baseLink}
              readOnly;
              className="font-mono text-sm";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
            />;
            <Button variant="outline" onClick={() => handleCopyLink(baseLink)}>;
              <Copy className="h-4 w-4" />;
              <span className="sr-only">Copy</span>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="flex justify-between items-center">;
        <h3 className="text-lg font-semibold text-white">Custom Campaign Links</h3>;
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
          <DialogTrigger asChild>;
            <Button variant="outline" size="sm" className="flex items-center gap-2">;
              <Plus className="h-4 w-4" />;
              Create New Link;
            </Button>;
          </DialogTrigger>;
          <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light">;
            <DialogHeader>;
              <DialogTitle>Create Custom Campaign Link</DialogTitle>;
              <DialogDescription>;
                Generate a trackable link for specific marketing campaigns;
              </DialogDescription>;
            </DialogHeader>;
            <div className="grid gap-4 py-4">;
              <div className="grid gap-2">;
                <Label htmlFor="campaign">Campaign Type</Label>;
<<<<<<< HEAD
                <Select
=======
                <Select ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}>;
import { useRef, useState } from './react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Copy, Download, Link, Plus } from './lucide-react';
import { toast } from '@/hooks / use - toast';
import { useReferrals } from '@/hooks / useReferrals';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
import { Label } from '@/components / ui / label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
export /**
 * PartnerReferralLinks - Function description
 */
function PartnerReferralLinks() {
  const { referral_code, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals ();
  const [isDialogOpen, setIsDialogOpen] = useState (false);
  const [selected_campaign, setSelectedCampaign] = useState < string>("default");
  const [custom_param, setCustomParam] = useState < string>("");
  const [generated_links, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
  // Get the base referral link;
  const base_link = getReferralLink ();
;
  const handleCopyLink = (link: string) =>: any {
    navigator.clipboard.write_text (link),
    toast ({
      title: "Link copied!",
      description: "The referral link has been copied to your clipboard",
      variant: "default";
    });
  }
;
  const handleGenerateLink = () =>: any {
    // Check condition
if ( {) {
  $2
}
      const url = new URL (base_link);
;
      // Add custom campaign parameter if selected;
      // Check condition
if ( {) {
  $2
}
        url.search_params.append ("campaign", selected_campaign);
      }
      // Add custom parameter if provided;
      // Check condition
if ( {) {
  $2
}
        url.search_params.append ("source", custom_param);
      }
      const new_link = {
        name: `${selected_campaign}${custom_param ? `-${custom_param}` : ""}`,
        link: url.to_string ();
      }
;
      setGeneratedLinks (prev => [...prev, new_link]);
      setIsDialogOpen (false);
      setCustomParam ("");
    }
  }
;
  const handleDownloadLinks = () =>: any {
    const all_links = [;
      { name: "Default", link: base_link },
      ...generated_links;
    ];
;
    const csv_content = [;
      "Name, Link";
      ...all_links.map (l => `${l.name}, ${l.link}`);
    ].join ("\n");
;
    const blob = new Blob ([csv_content], { type: 'text / csv, charset = utf - 8, ' });
    const url = URL.createObjectURL (blob);
    const link = document.create_element ("a");
    link.set_attribute ("href", url);
    link.set_attribute ("download", "zion_referral_links.csv");
    link.style.visibility = 'hidden';
    document.body.append_child (link);
    link.click ();
    document.body.remove_child (link);
  }
;
  return (
    <div className="space - y-6">;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
          <CardTitle className="flex items - center justify - between">;
            <span > Your Referral Link</span>;
            <Button;
              variant="outline";
              size="sm";
              on_click={handleDownloadLinks}
              className="flex items - center gap - 2";
            >;
              <Download className="h - 4 w - 4" />;
              Export Links;
            </Button>;
          </CardTitle>;
          <CardDescription > Share this link with your audience to earn rewards</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex space - x-2">;
            <Input;
              value={base_link}
              read_only;
              className="font - mono text - sm";
            />;
            <Button variant="outline" on_click={() => handleCopyLink (base_link)}>;
              <Copy className="h - 4 w - 4" />;
              <span className="sr - only">Copy</span>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;
      <div className="flex justify - between items - center">;
        <h3 className="text - lg font - semibold text - white">Custom Campaign Links</h3>;
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
          <DialogTrigger as_child>;
            <Button variant="outline" size="sm" className="flex items - center gap - 2">;
              <Plus className="h - 4 w - 4" />;
              Create New Link;
            </Button>;
          </DialogTrigger>;
          <DialogContent className="sm:max - w-md bg - zion - blue border - zion - blue - light">;
            <DialogHeader>;
              <DialogTitle > Create Custom Campaign Link</DialogTitle>;
              <DialogDescription>;
                Generate a trackable link for specific marketing campaigns;
              </DialogDescription>;
            </DialogHeader>;
            <div className="grid gap - 4 py - 4">;
              <div className="grid gap - 2">;
                <Label html_for="campaign">Campaign Type</Label>;
                <Select;
                  value={selected_campaign}
                  onValueChange={setSelectedCampaign}
                >;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
                  <SelectTrigger id="campaign">;
                    <SelectValue placeholder="Select campaign type" />;
                  </SelectTrigger>;
                  <SelectContent>;
                    <SelectItem value="default">General (Default)</SelectItem>;
                    <SelectItem value="youtube">YouTube</SelectItem>;
                    <SelectItem value="newsletter">Newsletter</SelectItem>;
                    <SelectItem value="blog">Blog</SelectItem>;
                    <SelectItem value="podcast">Podcast</SelectItem>;
                    <SelectItem value="social">Social Media</SelectItem>;
                  </SelectContent>;
                </Select>;
              </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
              <div className="grid gap - 2">;
                <Label html_for="custom">Custom Parameter (Optional)</Label>;
                <Input;
                  id="custom";
                  placeholder="spring_campaign, video_123, etc.";
                  value={custom_param}
                  on_change={(e) => setCustomParam (e.target.value)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

========
=======
              <div className="grid gap-2">;
                <Label htmlFor="custom">Custom Parameter (Optional)</Label>;
                <Input ;
                  id="custom" ;
                  placeholder="spring_campaign, video_123, etc." ;
                  value={customParam}
                  onChange={(e) => setCustomParam(e.target.value)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
                />;
              </div>;
            </div>;
            <DialogFooter>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
              <Button;
                type="button";
                variant="secondary";
                on_click={() => setIsDialogOpen (false)}
              >;
                Cancel;
              </Button>;
              <Button;
                type="button";
                on_click={handleGenerateLink}
                className="bg - zion - purple hover:bg - zion - purple - dark";
=======
              <Button ;
                type="button" ;
                variant="secondary" ;
                onClick={() => setIsDialogOpen(false)}
              >;
                Cancel;
              </Button>;
              <Button ;
                type="button" ;
                onClick={handleGenerateLink}
                className="bg-zion-purple hover:bg-zion-purple-dark";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
                Generate Link;
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

                  />;
                  <Button
<<<<<<< HEAD
=======
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
                Generate Link
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4">
        {generatedLinks.length > 0 ? (
          generatedLinks.map((item, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Link className="h-4 w-4 text-zion-purple" />
                    <span>{item.name |"Campaign Link"}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex space-x-2">
                  <Input
                    value={item.link}
                    readOnly
                    className="font-mono text-xs"
                  />
                  <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopyLink(item.link)}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy</span>
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

=======
========
<<<<<<< HEAD
                  />;
                  <Button
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleCopyLink(item && item.link)}
=======
;
      <div className="grid gap-4">;
        {generatedLinks.length > 0 ? (;
          generatedLinks.map((item, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="pb-2">;
                <CardTitle className="text-base flex items-center justify-between">;
                  <div className="flex items-center gap-2">;
                    <Link className="h-4 w-4 text-zion-purple" />;
                    <span>{item.name || "Campaign Link"}</span>;
                  </div>;
                </CardTitle>;
              </CardHeader>;
              <CardContent className="pb-4">;
                <div className="flex space-x-2">;
                  <Input;
                    value={item.link}
                    readOnly;
                    className="font-mono text-xs";
                  />;
                  <Button ;
                    variant="outline" ;
                    size="sm" ;
                    onClick={() => handleCopyLink(item.link)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  >;
                    <Copy className="h-4 w-4" />;
                    <span className="sr-only">Copy</span>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
          ));
<<<<<<< HEAD
        ) : (;
=======
        ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <Card className="bg-zion-blue/20 border-dashed border-zion-blue-light">;
            <CardContent className="flex flex-col items-center justify-center p-6">;
              <p className="text-zion-slate-light text-center mb-4">;
                Create custom campaign links to track different marketing efforts;
              </p>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerReferralLinks.tsx
              <Button
=======

              <Button 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                variant="outline"
=======
              <Button ;
                variant="outline";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
  );
      <div className="grid gap - 4">;
        {generated_links.length > 0 ? (
          generated_links.map ((item, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - blue - light">;
              <CardHeader className="pb - 2">;
                <CardTitle className="text - base flex items - center justify - between">;
                  <div className="flex items - center gap - 2">;
                    <Link className="h - 4 w - 4 text - zion - purple" />;
                    <span>{item.name || "Campaign Link"}</span>;
                  </div>;
                </CardTitle>;
              </CardHeader>;
              <CardContent className="pb - 4">;
                <div className="flex space - x-2">;
                  <Input;
                    value={item.link}
                    read_only;
                    className="font - mono text - xs";
                  />;
                  <Button;
                    variant="outline";
                    size="sm";
                    on_click={() => handleCopyLink (item.link)}
                  >;
                    <Copy className="h - 4 w - 4" />;
                    <span className="sr - only">Copy</span>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>))) : (
          <Card className="bg - zion - blue / 20 border - dashed border - zion - blue - light">;
            <CardContent className="flex flex - col items - center justify - center p - 6">;
              <p className="text - zion - slate - light text - center mb - 4">;
                Create custom campaign links to track different marketing efforts;
              </p>;
              <Button;
                variant="outline";
                on_click={() => setIsDialogOpen (true)}
                className="flex items - center gap - 2";
              >;
                <Plus className="h - 4 w - 4" />;
                Create First Link;
              </Button>;
            </CardContent>;
          </Card>)}
      </div>;
    </div>);
=======
  ),; export function PartnerReferralLinks () {
  const {
  referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia 
}= useReferrals ();
const [isDialogOpen, setIsDialogOpen] = useState (false);
};
}//Add custom parameter if provided if (customParam) {
  
}const newLink = {
  name: `$ {
  selectedCampaign 
}$ {
  customParam ? `-$ {
  customParam 
}`: "" 
}`;
};
}
};
...generatedLinks ];
link.style.visibility = 'hidden';
document.body.appendChild (link);
link.click ();
document.body.removeChild (link);
};
  baseLink 
}readOnly className="font-mono text-sm"/> <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card> <div className="flex justify-between items-center"> <DialogTrigger asChild> <Button variant=" outline"size=" sm"className="flex items-center gap-2"> <Plus className="h-4 w-4"/> Create New Link </Button> </DialogTrigger> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Create Custom Campaign Link</DialogTitle> <DialogDescription> Generate a trackable link for specific marketing campaigns </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4"> <div className="grid gap-2"> <Label htmlFor=" campaign">Campaign Type</Label> <Select value= {
  selectedCampaign 
}onValueChange= {
  setSelectedCampaign 
}> <SelectTrigger id=" campaign"> <SelectValue placeholder=" Select campaign type"/> </SelectTrigger> <SelectContent> <SelectItem value=" default">General (Default) </SelectItem> <SelectItem value=" youtube">YouTube</SelectItem> <SelectItem value=" newsletter">Newsletter</SelectItem> <SelectItem value=" blog">Blog</SelectItem> <SelectItem value=" podcast">Podcast</SelectItem> <SelectItem value=" social">Social Media</SelectItem> </SelectContent> </Select> </div> <div className="grid gap-2"> <Label htmlFor=" custom">Custom Parameter (Optional) </Label> <Input /> </div> </div> <DialogFooter> <Button > Cancel </Button> <Button className="bg-zion-purple hover:bg-zion-purple-dark"> Generate Link </Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className="grid gap-4"> {
  generatedLinks.length > 0 ? (generatedLinks.map ( (item, index) => (<Card key= {
  index 
}className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-base flex items-center justify-between"> <div className="flex items-center gap-2"> </div> </CardTitle> </CardHeader> <CardContent className="pb-4"> <div className="flex space-x-2"> <Input value= {
  item.link 
}readOnly className="font-mono text-xs"/> <Button > <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card>) ) ) : (<Card className="bg-zion-blue/20 border-dashed border-zion-blue-light"> <CardContent className="flex flex-col items-center justify-center p-6"> <p className="text-zion-slate-light text-center mb-4"> Create custom campaign links to track different marketing efforts </p> <Button className="flex items-center gap-2"> <Plus className="h-4 w-4" /> Create First Link </Button> </CardContent> </Card>) 
}</div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
              <Button
=======
              <Button 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                variant="outline"
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Create First Link
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
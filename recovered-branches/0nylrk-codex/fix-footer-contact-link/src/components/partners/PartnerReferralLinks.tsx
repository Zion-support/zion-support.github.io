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
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
  
  // Get the base referral link
  const baseLink = getReferralLink(),
  
  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    toast({
      title: "Link copied!"
      description: "The referral link has been copied to your clipboard"
      variant: "default"
    })
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
      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("");
    }
  const handleDownloadLinks = () => {
    const allLinks = [
      { name: "Default", link: baseLink }
      ...generatedLinks

  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Referral Link</span>
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
  };

  return (
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="flex items-center justify-between">;
            <span>Your Referral Link</span>;
            <Button
              variant="outline" 
              size="sm" 


            <Button 
              variant="outline" 
              size="sm" 

      "Name,Link";
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);
    ].join("\n");
              onClick={handleDownloadLinks}
              className="flex items-center gap-2">;
              <Download className="h-4 w-4" />;
              Export Links;
            </Button>;
          </CardTitle>;
          <CardDescription>Share this link with your audience to earn rewards</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex space-x-2">;
            <Input
              value={baseLink}
              readOnly
              className="font-mono text-sm"
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
                />;
              </div>;
            </div>;
            <DialogFooter>;
                variant="outline"
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2";
              >;
                <Plus className="h-4 w-4" />;
                Create First Link;
              </Button>;
                    <span>{item.name || "Campaign Link"}</span>;
                  </div>;
                </CardTitle>;
              </CardHeader>;
                  >;
                    <Copy className="h - 4 w - 4" />;
                    <span className="sr - only">Copy</span>;
                  </Button>;
                </div>;
              </CardContent>;
}
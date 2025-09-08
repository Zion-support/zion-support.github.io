

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


  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");



  const handleCopyLink = (link: string) => {

    navigator.clipboard.writeText(link)
    toast({"
      title: "Link copied!""
      description: "The referral link has been copied to your clipboard""

      variant: "default"
    })



  },
  

  const handleGenerateLink = () => {
    if (baseLink) {

      // Add custom campaign parameter if selected
      if (selectedCampaign !== "default") {

        url.searchParams.append("campaign", selectedCampaign)
      }
      // Add custom parameter if provided;
      if (customParam) {"
        url.searchParams.append("source", customParam)
      }
      const newLink = {"
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`

      setIsDialogOpen(false);

      setCustomParam("");

      setCustomParam("")
    }
  },

  const handleDownloadLinks = () => {
    const allLinks = [
      { name: "Default", link: baseLink }
      ...generatedLinks

  const handleDownloadLinks = () => {;
    const allLinks = [;"
      { name: "Default", link: baseLink },;
      ...generatedLinks;
    ];
"
    ].join("\n"),
    
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),"
    const link = document.createElement("a"),"
    link.setAttribute("href", url),"
    link.setAttribute("download", "zion_referral_links.csv"),'
    link.style.visibility = 'hidden',
    document.body.appendChild(link),
    link.click(),
    document.body.removeChild(link)
  },

  return ("
    <div className="space-y-6">"
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>"
          <CardTitle className="flex items-center justify-between">
            <span>Your Referral Link</span>

            <Button
              variant="outline"
              size="sm"
            <Button 
              variant="outline" 
              size="sm" 
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
      title: "Link copied!",
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

    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL && URL.createObjectURL(blob);"
    const link = document && document.createElement("a");"
    link && link.setAttribute("href", url);"
    link && link.setAttribute("download", "zion_referral_links && zion_referral_links.csv");'
    link && link.style.visibility = 'hidden';
    document && document.body.appendChild(link);
    link && link.click();
    document && document.body.removeChild(link);

  };
"
import { useRef, useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Input } from "@/components/ui/input",;"
import { Copy, Download, Link, Plus } from "lucide-react",;"
import { toast } from "@/hooks/use-toast",;"
import { useReferrals } from "@/hooks/useReferrals",;"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;"
import { Label } from "@/components/ui/label",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
;
export function PartnerReferralLinks() { return null; }
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals(),;
  const [isDialogOpen, setIsDialogOpen] = useState(false),;"
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default"),;"
  const [customParam, setCustomParam] = useState<string>(""),;
  const [generatedLinks, setGeneratedLinks] = useState<{name:string, link:string}[]>([]),;
  ;
  // Get the base referral link;
  const baseLink = getReferralLink(),;
  ;
  const handleCopyLink = (link:string) => {;
    navigator.clipboard.writeText(link),;
    toast({;"
      title:"Link copied!",;"
      description:"The referral link has been copied to your clipboard",;"
      variant:"default";
    }),;
  },;
  ;
  const handleGenerateLink = () => {;
    if (baseLink) {;
      const url = new URL(baseLink),;
      ;
      // Add custom campaign parameter if selected;"
      if (selectedCampaign !== "default") {;"
        url.searchParams.append("campaign", selectedCampaign),;
      }
      ;
      // Add custom parameter if provided;
      if (customParam) {;"
        url.searchParams.append("source", customParam),;
      }
      ;
      const newLink = {;"`
        name:`${selectedCampaign}${customParam ? `-${customParam}` :""}`,;
        link:url.toString();
      },;
      ;
      setGeneratedLinks(prev => [...prev, newLink]),;
      setIsDialogOpen(false),;"
      setCustomParam(""),;
    }
  },;
  ;
  const handleDownloadLinks = () => {;
    const allLinks = [;"
      { name:"Default", link:baseLink },;
      ...generatedLinks;
    ],;
    ;
    const csvContent = [;"
      "Name,Link",;`
      ...allLinks.map(l => `${l.name},${l.link}`);"
    ].join("\n"),;
    ;'
    const blob = new Blob([csvContent], { type:'text/csv,charset=utf-8,' }),;
    const url = URL.createObjectURL(blob),;"
    const link = document.createElement("a"),;"
    link.setAttribute("href", url),;"
    link.setAttribute("download", "zion_referral_links.csv"),;'
    link.style.visibility = 'hidden',;
    document.body.appendChild(link),;
  };
"
    <div className="space-y-6">;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;

              onClick={handleDownloadLinks}
              className="flex items-center gap-2">;
<Button
              variant="outline" 
              size="sm" 
              onClick={handleDownloadLinks}
              className="flex items-center gap-2">;
            <Button ;
              variant="outline" ;
              size="sm" ;
              onClick={handleDownloadLinks}
              className="flex items-center gap-2";
            >;
      "Name,Link";
              className="flex items-center gap-2">;      "Name,Link";
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);

    ].join("\n");
              onClick={handleDownloadLinks}"
              className="flex items-center gap-2">;

              <Download className="h-4 w-4" />;
              Export Links;

      // Add custom campaign parameter if selected;"
      if (selectedCampaign !== "default") {""
        url.searchParams.append("campaign", selectedCampaign)"
      }
      // Add custom parameter if provided;
      if (customParam) {"
        url.searchParams.append("source", customParam)"
      }
      const newLink = {"
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`"
        link: url.toString()



  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),;
  // Get the base referral link;
  const baseLink = getReferralLink();
  const handleCopyLink = (link: string) => {;
    navigator && navigator.clipboard.writeText(link),;
    toast({;"
      title: "Link copied!",""
      description: "The referral link has been copied to your clipboard",;""
      variant: "default";")
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

      if (customParam) {;"
        url && url.searchParams.append("source", customParam);"
      }

      const newLink = {;
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`,;
        link: url && url.toString();
      };

      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);"
      setCustomParam("");"
    }



      },
      setGeneratedLinks(prev => [...prev, newLink]),
      setIsDialogOpen(false),"
      setCustomParam("")"
    }
  },

  

  const handleDownloadLinks = () => {

    const allLinks = [
      { name: "Default", link: baseLink }
      ...generatedLinks

  const handleDownloadLinks = () => {;
    const allLinks = [;"
      { name: "Default", link: baseLink },;"
      ...generatedLinks;]
    ];

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

            </Button>;
          </CardTitle>;
          <CardDescription>Share this link with your audience to earn rewards</CardDescription>;
        </CardHeader>;
        <CardContent>;"
          <div className="flex space-x-2">;


            <Input
              value={baseLink}
              readOnly

            <Input;
              value={baseLink}
              readOnly"
              className="font-mono text-sm"



              <span className="sr-only">Copy</span>;
            </Button>;
          </div>;
        </CardContent>;
      </Card>;

;
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
                <Select ;
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
export /**;
 * PartnerReferralLinks - Function description;
 */
function PartnerReferralLinks() {}
  const { referral_code, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals ();
  const [isDialogOpen, setIsDialogOpen] = useState (false);"
  const [selected_campaign, setSelectedCampaign] = useState < string>("default");"

  const [custom_param, setCustomParam] = useState < string>("");
  const [generated_links, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
  // Get the base referral link;
  const base_link = getReferralLink ();
;

      variant: "default";
    });
  }
;

}
      const url = new URL (base_link);
;
      // Add custom campaign parameter if selected;

        name: `${selected_campaign}${custom_param ? `-${custom_param}` : ""}`,
        link: url.to_string ();
      }
;
      setGeneratedLinks (prev => [...prev, new_link]);

      setCustomParam ("");
    }
  }
;

      { name: "Default", link: base_link },
      ...generated_links;
    ];
;

    link.style.visibility = 'hidden';
    document.body.append_child (link);
    link.click ();
    document.body.remove_child (link);
  }
;

              <Download className="h - 4 w - 4" />;
              Export Links;
            </Button>;
          </CardTitle>;
          <CardDescription > Share this link with your audience to earn rewards</CardDescription>;
        </CardHeader>;

              <span className="sr - only">Copy</span>;
            </Button>;
          </div>;
        </CardContent>;

          <DialogContent className="sm:max - w-md bg - zion - blue border - zion - blue - light">;
            <DialogHeader>;
              <DialogTitle > Create Custom Campaign Link</DialogTitle>;
              <DialogDescription>;
                Generate a trackable link for specific marketing campaigns;
              </DialogDescription>;

                <Label html_for="campaign">Campaign Type</Label>;
                <Select;
                  value={selected_campaign}
                  onValueChange={setSelectedCampaign}
                >;
                  <SelectTrigger id="campaign">;

                    <SelectValue placeholder="Select campaign type" />;
                  </SelectTrigger>;
                  <SelectContent>;"
                    <SelectItem value="default">General (Default)</SelectItem>;"
                    <SelectItem value="youtube">YouTube</SelectItem>;"
                    <SelectItem value="newsletter">Newsletter</SelectItem>;"
                    <SelectItem value="blog">Blog</SelectItem>;"
                    <SelectItem value="podcast">Podcast</SelectItem>;"
                    <SelectItem value="social">Social Media</SelectItem>;
                  </SelectContent>;
                </Select>;
              </div>;

              <div className="grid gap-2">;

                <Label htmlFor="custom">Custom Parameter (Optional)</Label>;
                <Input ;
                  id="custom" ;
                  placeholder="spring_campaign, video_123, etc." ;
                  value={customParam}
                  onChange={(e) => setCustomParam(e.target.value)}
                />;
              </div>;
            </div>;
            <DialogFooter>;
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
              >;


                Generate Link;
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;

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
                  >;
                    <Copy className="h-4 w-4" />;
                    <span className="sr-only">Copy</span>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
          ));



}
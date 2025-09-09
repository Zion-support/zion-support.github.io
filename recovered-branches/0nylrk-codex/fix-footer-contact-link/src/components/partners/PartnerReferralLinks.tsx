import {useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Download, Link, Plus} from "lucide-react";
import {toast} from "@/hooks/use-toast";
import {useReferrals} from "@/hooks/useReferrals";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    toast({
      title: "Link copied!"
      description: "The referral link has been copied to your clipboard"
      variant: "default"
    })

  },
  

      const url = new URL(baseLink),
      

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
        link: url.toString()      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);

      setCustomParam("");
    }  const handleDownloadLinks = () => {
    const allLinks = [
      { name: "Default", link: baseLink }
      ...generatedLinks      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="flex items-center justify-between">;
            <span>Your Referral Link</span>;
            <Button
              variant="outline" 
              size="sm" 

            <Button 
              variant="outline" 
              size="sm" 

              onClick={handleDownloadLinks}
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



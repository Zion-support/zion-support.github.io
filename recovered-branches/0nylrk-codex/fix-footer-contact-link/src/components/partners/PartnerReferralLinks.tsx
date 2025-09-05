<<<<<<< HEAD
<<<<<<< HEAD
import { useRef, useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Download, Link, Plus } from "lucide-react",
import { toast } from "@/hooks/use-toast",
import { useReferrals } from "@/hooks/useReferrals",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
import { Label } from "@/components/ui/label",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",

export function PartnerReferralLinks() {
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals(),
  const [isDialogOpen, setIsDialogOpen] = useState(false),
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default"),
  const [customParam, setCustomParam] = useState<string>(""),
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
=======
import { useRef, useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Copy, Download, Link, Plus } from &quot;lucide-react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { useReferrals } from &quot;@/hooks/useReferrals&quot;;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from &quot;@/components/ui/dialog&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function PartnerReferralLinks() {_const { referralCode, _getReferralLink, _copyReferralLink, _shareOnSocialMedia} = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
<<<<<<< HEAD
  const [selectedCampaign, setSelectedCampaign] = useState<string>(&quot;default&quot;);
  const [customParam, setCustomParam] = useState<string>("&quot;);
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Get the base referral link
  const baseLink = getReferralLink(),
  
  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link),
    toast({
<<<<<<< HEAD
      title: "Link copied!",
      description: "The referral link has been copied to your clipboard",
      variant: "default"
    })
  },
=======
      title: &quot;Link copied!&quot;,
      description: &quot;The referral link has been copied to your clipboard&quot;,
      variant: &quot;default&quot;
    });
=======
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");
  const [generatedLinks, setGeneratedLinks] = useState<{_name: string, _link: string}[]>([]);
  
  // Get the base referral link
  const _baseLink = getReferralLink();
  
  const _handleCopyLink = (_link: string) => {_navigator.clipboard.writeText(link);
    toast({
      title: "Link copied!", _description: "The referral link has been copied to your clipboard", _variant: "default"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
  const handleGenerateLink = () => {
    if (baseLink) {
      const url = new URL(baseLink),
=======
  const _handleGenerateLink = () => {_if (baseLink) {
      const _url = new window.URL(baseLink);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Add custom campaign parameter if selected
<<<<<<< HEAD
      if (selectedCampaign !== "default") {
<<<<<<< HEAD
        url.searchParams.append("campaign", selectedCampaign)
=======
      if (selectedCampaign !== &quot;default&quot;) {
        url.searchParams.append(&quot;campaign&quot;, selectedCampaign);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      // Add custom parameter if provided
      if (customParam) {
<<<<<<< HEAD
        url.searchParams.append("source", customParam)
=======
        url.searchParams.append(&quot;source&quot;, customParam);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      const newLink = {
        name: `${selectedCampaign}${customParam ? `-${customParam}` : "&quot;}`,
=======
        url.searchParams.append("campaign", _selectedCampaign);}
      
      // Add custom parameter if provided
      if (customParam) {_url.searchParams.append("source", _customParam);}
      
      const _newLink = {_name: `${selectedCampaign}${_customParam ? `-${customParam}` : ""}`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        link: url.toString()
      },
      
<<<<<<< HEAD
      setGeneratedLinks(prev => [...prev, newLink]),
      setIsDialogOpen(false),
      setCustomParam("")
=======
      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
<<<<<<< HEAD
  const handleDownloadLinks = () => {
    const allLinks = [
      { name: &quot;Default&quot;, link: baseLink },
=======
  const _handleDownloadLinks = () => {_const _allLinks = [
      { name: "Default", _link: baseLink},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ...generatedLinks
    ],
    
<<<<<<< HEAD
    const csvContent = [
      &quot;Name,Link&quot;,
      ...allLinks.map(l => `${l.name},${l.link}`)
<<<<<<< HEAD
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
    ].join(&quot;\n&quot;);
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement(&quot;a&quot;);
    link.setAttribute(&quot;href&quot;, url);
    link.setAttribute(&quot;download&quot;, &quot;zion_referral_links.csv");
=======
    const _csvContent = [
      "Name,Link",
      ...allLinks.map(l => `${_l.name},${_l.link}`)
    ].join("\n");
    
    const _blob = new Blob([csvContent], {_type: 'text/csv;charset=utf-8;'});
    const _url = window.URL.createObjectURL(blob);
    const _link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "zion_referral_links.csv");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (_<div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between&quot;>
            <span>Your Referral Link</span>
            <Button 
<<<<<<< HEAD
              variant=&quot;outline&quot; 
              size=&quot;sm" 
              onClick={handleDownloadLinks}
=======
              variant="outline" 
              size="sm" 
              onClick={_handleDownloadLinks}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
            <Input
              value={_baseLink}
              readOnly
              className="font-mono text-sm&quot;
            />
<<<<<<< HEAD
            <Button variant=&quot;outline" onClick={() => handleCopyLink(baseLink)}>
=======
            <Button variant="outline" onClick={_() => handleCopyLink(baseLink)}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
<<<<<<< HEAD
        <h3 className="text-lg font-semibold text-white&quot;>Custom Campaign Links</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
=======
        <h3 className="text-lg font-semibold text-white">Custom Campaign Links</h3>
        <Dialog open={_isDialogOpen} onOpenChange={_setIsDialogOpen}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <DialogTrigger asChild>
            <Button variant=&quot;outline&quot; size=&quot;sm" className="flex items-center gap-2">
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
              <div className="grid gap-2&quot;>
                <Label htmlFor=&quot;campaign&quot;>Campaign Type</Label>
                <Select 
                  value={_selectedCampaign}
                  onValueChange={_setSelectedCampaign}
                >
                  <SelectTrigger id=&quot;campaign&quot;>
                    <SelectValue placeholder=&quot;Select campaign type&quot; />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value=&quot;default&quot;>General (Default)</SelectItem>
                    <SelectItem value=&quot;youtube&quot;>YouTube</SelectItem>
                    <SelectItem value=&quot;newsletter&quot;>Newsletter</SelectItem>
                    <SelectItem value=&quot;blog&quot;>Blog</SelectItem>
                    <SelectItem value=&quot;podcast&quot;>Podcast</SelectItem>
                    <SelectItem value=&quot;social">Social Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2&quot;>
                <Label htmlFor=&quot;custom&quot;>Custom Parameter (Optional)</Label>
                <Input 
<<<<<<< HEAD
                  id=&quot;custom&quot; 
                  placeholder=&quot;spring_campaign, video_123, etc.&quot; 
                  value={customParam}
                  onChange={(e) => setCustomParam(e.target.value)}
=======
                  id="custom" 
                  placeholder="spring_campaign, video_123, etc." 
                  value={_customParam}
                  onChange={_(_e) => setCustomParam(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
<<<<<<< HEAD
                type=&quot;button&quot; 
                variant=&quot;secondary&quot; 
                onClick={() => setIsDialogOpen(false)}
=======
                type="button" 
                variant="secondary" 
                onClick={_() => setIsDialogOpen(false)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Cancel
              </Button>
              <Button 
<<<<<<< HEAD
                type=&quot;button" 
                onClick={handleGenerateLink}
=======
                type="button" 
                onClick={_handleGenerateLink}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                className="bg-zion-purple hover:bg-zion-purple-dark"
              >
                Generate Link
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {_generatedLinks.length > 0 ? (_generatedLinks.map((item, _index) => (_<Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center justify-between">
                  <div className="flex items-center gap-2">
<<<<<<< HEAD
                    <Link className="h-4 w-4 text-zion-purple&quot; />
                    <span>{item.name || &quot;Campaign Link"}</span>
=======
                    <Link className="h-4 w-4 text-zion-purple" />
                    <span>{_item.name || "Campaign Link"}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex space-x-2">
                  <Input
                    value={_item.link}
                    readOnly
                    className="font-mono text-xs&quot;
                  />
                  <Button 
<<<<<<< HEAD
                    variant=&quot;outline&quot; 
                    size=&quot;sm" 
                    onClick={() => handleCopyLink(item.link)}
=======
                    variant="outline" 
                    size="sm" 
                    onClick={_() => handleCopyLink(item.link)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (_<Card className="bg-zion-blue/20 border-dashed border-zion-blue-light">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <p className="text-zion-slate-light text-center mb-4&quot;>
                Create custom campaign links to track different marketing efforts
              </p>
              <Button 
<<<<<<< HEAD
                variant=&quot;outline"
                onClick={() => setIsDialogOpen(true)}
=======
                variant="outline"
                onClick={_() => setIsDialogOpen(true)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
}
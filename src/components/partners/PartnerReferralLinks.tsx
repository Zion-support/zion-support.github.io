import { useRef, useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Copy, Download, Link, Plus } from 'lucide-react'
import { toast } from &quot;@/hooks/use-toast&quot;;
import { useReferrals } from &quot;@/hooks/useReferrals&quot;;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from &quot;@/components/ui/dialog&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;

export function PartnerReferralLinks() {
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string>(&quot;default&quot;);
  const [customParam, setCustomParam] = useState<string>("&quot;);
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]);
  
  // Get the base referral link
  const baseLink = getReferralLink();
  
  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast({
      title: &quot;Link copied!&quot;,
      description: &quot;The referral link has been copied to your clipboard&quot;,
      variant: &quot;default&quot;
    });
  };
  
  const handleGenerateLink = () => {
    if (baseLink) {
      const url = new URL(baseLink);
      
      // Add custom campaign parameter if selected
      if (selectedCampaign !== &quot;default&quot;) {
        url.searchParams.append(&quot;campaign&quot;, selectedCampaign);
      }
      
      // Add custom parameter if provided
      if (customParam) {
        url.searchParams.append(&quot;source&quot;, customParam);
      }
      
      const newLink = {
        name: `${selectedCampaign}${customParam ? `-${customParam}` : "&quot;}`,
        link: url.toString()
      };
      
      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("&quot;);
    }
  };
  
  const handleDownloadLinks = () => {
    const allLinks = [
      { name: &quot;Default&quot;, link: baseLink },
      ...generatedLinks
    ];
    
    const csvContent = [
      &quot;Name,Link&quot;,
      ...allLinks.map(l => `${l.name},${l.link}`)
    ].join(&quot;\n&quot;);
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement(&quot;a&quot;);
    link.setAttribute(&quot;href&quot;, url);
    link.setAttribute(&quot;download&quot;, &quot;zion_referral_links.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between&quot;>
            <span>Your Referral Link</span>
            <Button 
              variant=&quot;outline&quot; 
              size=&quot;sm" 
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
            <Input
              value={baseLink}
              readOnly
              className="font-mono text-sm&quot;
            />
            <Button variant=&quot;outline" onClick={() => handleCopyLink(baseLink)}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white&quot;>Custom Campaign Links</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}
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
                  id=&quot;custom&quot; 
                  placeholder=&quot;spring_campaign, video_123, etc.&quot; 
                  value={customParam}
                  onChange={(e) => setCustomParam(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                type=&quot;button&quot; 
                variant=&quot;secondary&quot; 
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type=&quot;button" 
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
                    <Link className="h-4 w-4 text-zion-purple&quot; />
                    <span>{item.name || &quot;Campaign Link"}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex space-x-2">
                  <Input
                    value={item.link}
                    readOnly
                    className="font-mono text-xs&quot;
                  />
                  <Button 
                    variant=&quot;outline&quot; 
                    size=&quot;sm" 
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
              <p className="text-zion-slate-light text-center mb-4&quot;>
                Create custom campaign links to track different marketing efforts
              </p>
              <Button 
                variant=&quot;outline"
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
  );
}
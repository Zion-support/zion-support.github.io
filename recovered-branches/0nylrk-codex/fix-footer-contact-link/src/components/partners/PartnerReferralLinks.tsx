
export function PartnerReferralLinks() {_const { referralCode, _getReferralLink, _copyReferralLink, _shareOnSocialMedia} = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");
  const [generatedLinks, setGeneratedLinks] = useState<{_name: string, _link: string}[]>([]);
  
  // Get the base referral link
  const _baseLink = getReferralLink();
  
  const _handleCopyLink = (_link: string) => {_navigator.clipboard.writeText(link);
    toast({
      title: "Link copied!", _description: "The referral link has been copied to your clipboard", _variant: "default"});
  };
  
  const _handleGenerateLink = () => {_if (baseLink) {
      const _url = new window.URL(baseLink);
      
      // Add custom campaign parameter if selected
      if (selectedCampaign !== "default") {
        url.searchParams.append("campaign", _selectedCampaign);}
      
      // Add custom parameter if provided
      if (customParam) {_url.searchParams.append("source", _customParam);}
      
      const _newLink = {_name: `${selectedCampaign}${_customParam ? `-${customParam}` : ""}`,
        link: url.toString()
      };
      
      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("");
    }
  };
  
  const _handleDownloadLinks = () => {_const _allLinks = [
      { name: "Default", _link: baseLink},
      ...generatedLinks
    ];
    
    const _csvContent = [
      "Name,Link",
      ...allLinks.map(l => `${_l.name},${_l.link}`)
    ].join("\n");
    
    const _blob = new Blob([csvContent], {_type: 'text/csv;charset=utf-8;'});
    const _url = window.URL.createObjectURL(blob);
    const _link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "zion_referral_links.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (_<div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Referral Link</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={_handleDownloadLinks}
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
              className="font-mono text-sm"
            />
            <Button variant="outline" onClick={_() => handleCopyLink(baseLink)}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Custom Campaign Links</h3>
        <Dialog open={_isDialogOpen} onOpenChange={_setIsDialogOpen}>
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
                  value={_selectedCampaign}
                  onValueChange={_setSelectedCampaign}
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
                  value={_customParam}
                  onChange={_(_e) => setCustomParam(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="button" 
                variant="secondary" 
                onClick={_() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="button" 
                onClick={_handleGenerateLink}
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
                    <Link className="h-4 w-4 text-zion-purple" />
                    <span>{_item.name || "Campaign Link"}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex space-x-2">
                  <Input
                    value={_item.link}
                    readOnly
                    className="font-mono text-xs"
                  />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={_() => handleCopyLink(item.link)}
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
              <p className="text-zion-slate-light text-center mb-4">
                Create custom campaign links to track different marketing efforts
              </p>
              <Button 
                variant="outline"
                onClick={_() => setIsDialogOpen(true)}
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
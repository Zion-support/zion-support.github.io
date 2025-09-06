
import { Copy, Download, Link, Plus } from 'lucide-react'

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

      }
      
      // Add custom parameter if provided
      if (customParam) {

      }
      
      const newLink = {

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
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Referral Link</span>

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

              >
                Cancel
              </Button>
              <Button
                type='button'
                onClick={handleGenerateLink}
                className='bg-zion-purple hover:bg-zion-purple-dark'              >
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
                    <span>{item.name || "Campaign Link"}</span>
                  </div>

                </CardTitle>
              </CardHeader>
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
                  <Input
                    value = {item && item.link,}
                    readOnly

                    className="font-mono text-xs"
                  />

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


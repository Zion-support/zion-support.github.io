
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;
  const [partners, setPartners] = useState<PartnerProfile[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();
  const fetchPartners = async () => {
    try {
      setIsLoading(true);
      // In a real application, check admin permissions here
            id: '1',
            user_id: 'user1',
            name: 'AI Bytes',
            status: 'pending',
            social_media: { twitter: '@aibytes', youtube: 'AI Bytes' },
            website: 'aibytes.com',
            bio: 'We create AI tutorials and insights for developers.',
            payout_method: 'paypal',
            fraud_flags: 0,
          {
            id: '2',
            user_id: 'user2',
            name: 'ML Academy',
            status: 'approved',
            niche: 'Machine Learning Education',
            audience_size: 'over100k',
            social_media: { twitter: '@mlacademy', youtube: 'ML Academy' },
            website: 'mlacademy.edu',
            bio: 'Premiere online academy for machine learning enthusiasts.',
            payout_method: 'bank',
            fraud_flags: 0,
          {
            id: '3',
            user_id: 'user3',
            name: 'Tech Insights',
            status: 'rejected',
            social_media: { twitter: '@techinsights' },
            website: 'techinsights.io',
            bio: 'We share insights about the latest in tech.',
            payout_method: 'crypto',
            fraud_flags: 2,
          {
            id: '4',
            user_id: 'user4',
            name: 'CodeMaster',
            status: 'approved',
            social_media: { youtube: 'CodeMaster', linkedin: 'codemaster' },
            website: 'codemaster.dev',
            bio: 'Learn to code with our expert tutorials.',
            payout_method: 'paypal',
            fraud_flags: 0,
          {
            id: '5',
            user_id: 'user5',
            name: 'AI Daily',
            status: 'pending',
            social_media: { twitter: '@aidaily', instagram: '@aidailynews' },
            website: 'aidaily.news',
            bio: 'Daily updates on the world of artificial intelligence.',
            payout_method: 'platform_credit',
            fraud_flags: 1,

  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {
    try {
      // In a real app, this would update the database
      filterPartners(
        partners.map(p => p.id === partnerId ? { ...p, status } : p),
        activeTab,
        searchQuery
      }
    } catch (error) {
      console.error("Error updating partner status:", error);
      toast({
      
      filterPartners(
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),
        activeTab,
        searchQuery
  const getAudienceSizeLabel = (size: string) => {
    switch (size) {
      case 'under1k': return 'Under 1,000';
      case '1k-10k': return '1,000 - 10,000';
      case '10k-50k': return '10,000 - 50,000';
      case '50k-100k': return '50,000 - 100,000';
      case 'over100k': return 'Over 100,000';
      default: return size;
    }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="container max-w-7xl py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Management</h1>
          <p className="text-zion-slate-light">Approve and manage affiliate partners</p>
        </div>
      </div>
      <Card className="bg-zion-blue-dark border-zion-blue-light mb-8">
        <CardHeader className="pb-3">
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Pending Applications
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                  {partners.filter(p => p.status === 'pending').length}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
                  Partners waiting for review and approval
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Active Partners
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                  {partners.filter(p => p.status === 'approved').length}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
                  Currently approved and active partners
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Fraud Flags
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
                  Total potential fraud flags detected
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader className="pb-3 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <CardTitle>Partners</CardTitle>
            <CardDescription>Manage partnership applications and settings</CardDescription>
          </div>
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" />
              <Input
                placeholder="Search partners..."
                className="pl-8"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus} 
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
            <TabsContent value="all" className="space-y-4">
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      {/* Partner Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-lg bg-zion-blue border-zion-blue-light">
          <DialogHeader>
            <DialogTitle>Partner Details</DialogTitle>
            <DialogDescription>
              Review the details of the partner application
            </DialogDescription>
          </DialogHeader>
          {selectedPartner && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Name</p>
                  <p className="font-medium text-white">{selectedPartner.name}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Status</p>
                  <div>{getStatusBadge(selectedPartner.status)}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Niche</p>
                  <p className="text-white">{selectedPartner.niche}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Audience Size</p>
                  <p className="text-white">{getAudienceSizeLabel(selectedPartner.audience_size)}</p>
                </div>
              </div>
              {selectedPartner.website && (
                <div>
                  <p className="text-xs text-zion-slate-light">Website</p>
                  <p className="text-zion-cyan">{selectedPartner.website}</p>
                </div>
              )}
              {selectedPartner.social_media && Object.keys(selectedPartner.social_media).length > 0 && (
                <div>
                  <p className="text-xs text-zion-slate-light">Social Media</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedPartner.social_media).map(([platform, handle]) => (
                      <p key={platform} className="text-white">
                        <span className="font-medium">{platform}: </span>
                        {handle}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {selectedPartner.fraud_flags && selectedPartner.fraud_flags > 0 && (
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">
                  <AlertTitle className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Potential Fraud Detected ({selectedPartner.fraud_flags})
                  </AlertTitle>
                  <AlertDescription>
                    This application has triggered our fraud detection system. Review carefully before approving.
                  </AlertDescription>
                </Alert>
              )}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'approved')}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              )}
            </div>
  );
}

interface PartnerTableProps {
function PartnerTable({ 
  partners, 
  isLoading, 
  onViewDetails, 
  getFraudFlagBadge
}: PartnerTableProps) {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-zion-slate-light">Loading partner data...</p>
      </div>
                  className="text-zion-slate-light hover:text-white"
                >
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
                  size="sm"
                  onClick={() => onViewDetails(partner)}
                >
                  View
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}

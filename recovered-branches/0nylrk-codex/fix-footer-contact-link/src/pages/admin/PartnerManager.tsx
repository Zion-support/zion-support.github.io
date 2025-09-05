
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth",
import { useNavigate } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",
import { toast } from "@/hooks/use-toast",
import { Check, Flag, Search, Settings, X } from "lucide-react",
import { supabase } from "@/integrations/supabase/client",
=======
import { useState, useEffect } from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from &quot;@/components/ui/dialog&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Alert, AlertDescription, AlertTitle } from &quot;@/components/ui/alert&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { Check, Flag, Search, Settings, X } from &quot;lucide-react&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PartnerProfile {
  id: string,
  user_id: string,
  name: string,
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,
  social_media?: Record<string string>,
  website?: string,
  bio?: string,
  payout_method?: string,
  fraud_flags?: number,
  commission_rate?: number
}

export default function PartnerManager() {
<<<<<<< HEAD
  const [partners, setPartners] = useState<PartnerProfile[]>([]),
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [searchQuery, setSearchQuery] = useState(""),
  const [activeTab, setActiveTab] = useState("pending"),
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),
  const [isDetailsOpen, setIsDetailsOpen] = useState(false),
  const [isSettingsOpen, setIsSettingsOpen] = useState(false),
  const [commissionRate, setCommissionRate] = useState(25),
  const { user, isAuthenticated } = useAuth(),
  const navigate = useNavigate(),

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"),
      return
=======
  const [partners, setPartners] = useState<PartnerProfile[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [activeTab, setActiveTab] = useState(&quot;pending&quot;);
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(&quot;/login&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
=======

interface PartnerProfile {_id: string;
  user_id: string;
  name: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  niche: string;
  audience_size: string;
  social_media?: Record<string, _string>;
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;
  commission_rate?: number;}

export default function PartnerManager() {_const [partners, _setPartners] = useState<PartnerProfile[]>([]);
  const [filteredPartners, _setFilteredPartners] = useState<PartnerProfile[]>([]);
  const [isLoading, _setIsLoading] = useState(true);
  const [searchQuery, _setSearchQuery] = useState("");
  const [activeTab, _setActiveTab] = useState("pending");
  const [selectedPartner, _setSelectedPartner] = useState<PartnerProfile | null>(null);
  const [isDetailsOpen, _setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, _setIsSettingsOpen] = useState(false);
  const [commissionRate, _setCommissionRate] = useState(25);
  const { user, _isAuthenticated} = useAuth();
  const _navigate = useNavigate();

  useEffect__(() => {_if (!isAuthenticated) {
      navigate("/login");
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    fetchPartners()
  }, [isAuthenticated, navigate]),

<<<<<<< HEAD
  const fetchPartners = async () => {
    try {
      setIsLoading(true),
      // In a real application, check admin permissions here
=======
  const _fetchPartners = async () => {_try {
      setIsLoading(true);
      // In a real application, _check admin permissions here
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      const { data, _error} = await supabase
        .from('partner_profiles')
        .select('*')
<<<<<<< HEAD
        .order('created_at', { ascending: false }),
=======
        .order('created_at', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (error) throw error,
      
      // If no data is returned, use mock data
      if (!data || data.length === 0) {_const mockData: PartnerProfile[] = [
          {
            id: '1', _user_id: 'user1', _name: 'AI Bytes', _status: 'pending', _created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), _niche: 'AI Tutorials', _audience_size: '10k-50k', _social_media: { twitter: '@aibytes', _youtube: 'AI Bytes'},
            website: 'aibytes.com',
            bio: 'We create AI tutorials and insights for developers.',
            payout_method: 'paypal',
            fraud_flags: 0,
            commission_rate: 25
          },
          {_id: '2', _user_id: 'user2', _name: 'ML Academy', _status: 'approved', _created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), _niche: 'Machine Learning Education', _audience_size: 'over100k', _social_media: { twitter: '@mlacademy', _youtube: 'ML Academy'},
            website: 'mlacademy.edu',
            bio: 'Premiere online academy for machine learning enthusiasts.',
            payout_method: 'bank',
            fraud_flags: 0,
            commission_rate: 30
          },
          {_id: '3', _user_id: 'user3', _name: 'Tech Insights', _status: 'rejected', _created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), _niche: 'Technology News', _audience_size: '1k-10k', _social_media: { twitter: '@techinsights'},
            website: 'techinsights.io',
            bio: 'We share insights about the latest in tech.',
            payout_method: 'window.crypto',
            fraud_flags: 2,
            commission_rate: 20
          },
          {_id: '4', _user_id: 'user4', _name: 'CodeMaster', _status: 'approved', _created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), _niche: 'Coding Tutorials', _audience_size: '50k-100k', _social_media: { youtube: 'CodeMaster', _linkedin: 'codemaster'},
            website: 'codemaster.dev',
            bio: 'Learn to code with our expert tutorials.',
            payout_method: 'paypal',
            fraud_flags: 0,
            commission_rate: 25
          },
          {_id: '5', _user_id: 'user5', _name: 'AI Daily', _status: 'pending', _created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), _niche: 'AI News', _audience_size: '10k-50k', _social_media: { twitter: '@aidaily', _instagram: '@aidailynews'},
            website: 'aidaily.news',
            bio: 'Daily updates on the world of artificial intelligence.',
            payout_method: 'platform_credit',
            fraud_flags: 1,
            commission_rate: 20
          }
        ],
        
<<<<<<< HEAD
        setPartners(mockData),
        filterPartners(mockData, activeTab, searchQuery)
      } else {
        setPartners(data as PartnerProfile[]),
        filterPartners(data as PartnerProfile[], activeTab, searchQuery)
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error fetching partners:", error),
      toast({
        title: "Error",
        description: "Failed to load partner data",
        variant: "destructive"})
=======
      console.error(&quot;Error fetching partners:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load partner data&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {
    let filtered = partners,
=======
        setPartners(mockData);
        filterPartners(mockData, activeTab, searchQuery);
      } else {_setPartners(data as PartnerProfile[]);
        filterPartners(data as PartnerProfile[], _activeTab, _searchQuery);}
    } catch (error) {_toast({
        title: "Error", _description: "Failed to load partner data", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };

  const _filterPartners = (_partners: PartnerProfile[], _status: string, _query: string) => {_let _filtered = partners;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Filter by status
<<<<<<< HEAD
    if (status !== "all") {
<<<<<<< HEAD
      filtered = filtered.filter(p => p.status === status)
=======
    if (status !== &quot;all&quot;) {
      filtered = filtered.filter(p => p.status === status);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase(),
=======
      filtered = filtered.filter(p => p.status === status);}
    
    // Filter by search query
    if (query) {_const _lowerQuery = query.toLowerCase();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.niche.toLowerCase().includes(lowerQuery) ||
        p.bio?.toLowerCase().includes(lowerQuery) ||
        p.website?.toLowerCase().includes(lowerQuery)
<<<<<<< HEAD
      )
    }
=======
      );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setFilteredPartners(filtered)
  },

<<<<<<< HEAD
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value),
    filterPartners(partners, activeTab, e.target.value)
  },

  const handleTabChange = (value: string) => {
    setActiveTab(value),
    filterPartners(partners, value, searchQuery)
  },

  const handleViewDetails = (partner: PartnerProfile) => {
    setSelectedPartner(partner),
    setIsDetailsOpen(true)
  },

  const handleOpenSettings = (partner: PartnerProfile) => {
    setSelectedPartner(partner),
    setCommissionRate(partner.commission_rate || 25),
    setIsSettingsOpen(true)
  },
=======
  const _handleSearch = (_e: React.ChangeEvent<HTMLInputElement>) => {_setSearchQuery(e.target.value);
    filterPartners(partners, _activeTab, _e.target.value);};

  const _handleTabChange = (_value: string) => {_setActiveTab(value);
    filterPartners(partners, _value, _searchQuery);};

  const _handleViewDetails = (_partner: PartnerProfile) => {_setSelectedPartner(partner);
    setIsDetailsOpen(true);};

  const _handleOpenSettings = (_partner: PartnerProfile) => {_setSelectedPartner(partner);
    setCommissionRate(partner.commission_rate || 25);
    setIsSettingsOpen(true);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleUpdateStatus = async (_partnerId: string, _status: 'approved' | 'rejected') => {_try {
      // In a real app, _this would update the database
      setPartners(partners.map(p => 
<<<<<<< HEAD
        p.id === partnerId ? { ...p, status } : p
      )),
=======
        p.id === partnerId ? { ...p, _status} : p
      ));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      filterPartners(
        partners.map(p => p.id === partnerId ? {_...p, _status} : p),
        activeTab,
        searchQuery
      ),
      
<<<<<<< HEAD
      toast({
        title: status === 'approved' ? &quot;Partner Approved&quot; : &quot;Partner Rejected&quot;,
        description: `The partner has been ${status}.`,
<<<<<<< HEAD
        variant: status === 'approved' ? "default" : "destructive"}),
=======
        variant: status === 'approved' ? &quot;default&quot; : &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Close the dialog if open
      if (isDetailsOpen && selectedPartner?.id === partnerId) {
        setIsDetailsOpen(false)
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error updating partner status:", error),
      toast({
        title: "Error",
        description: "Failed to update partner status",
        variant: "destructive"})
=======
      console.error(&quot;Error updating partner status:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update partner status&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      toast({_title: status === 'approved' ? "Partner Approved" : "Partner Rejected", _description: `The partner has been ${status}.`,
        variant: status === 'approved' ? "default" : "destructive"});
      
      // Close the dialog if open
      if (isDetailsOpen && selectedPartner?.id === partnerId) {_setIsDetailsOpen(false);}
    } catch (error) {_toast({
        title: "Error", _description: "Failed to update partner status", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const handleSaveSettings = async () => {
    if (!selectedPartner) return,
=======
  const _handleSaveSettings = async () => {_if (!selectedPartner) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    try {
      // Update commission rate
      setPartners(partners.map(p => 
<<<<<<< HEAD
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p
      )),
=======
        p.id === selectedPartner.id ? { ...p, _commission_rate: commissionRate} : p
      ));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      filterPartners(
        partners.map(p => p.id === selectedPartner.id ? {_...p, _commission_rate: commissionRate} : p),
        activeTab,
        searchQuery
      ),
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Settings Updated",
        description: "Partner settings have been updated successfully.",
        variant: "default"}),
=======
        title: &quot;Settings Updated&quot;,
        description: &quot;Partner settings have been updated successfully.&quot;,
        variant: &quot;default&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      setIsSettingsOpen(false)
    } catch (error) {
<<<<<<< HEAD
      console.error("Error updating partner settings:", error),
      toast({
        title: "Error",
        description: "Failed to update partner settings",
        variant: "destructive"})
=======
      console.error(&quot;Error updating partner settings:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update partner settings&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      toast({_title: "Settings Updated", _description: "Partner settings have been updated successfully.", _variant: "default"});
      
      setIsSettingsOpen(false);
    } catch (error) {_toast({
        title: "Error", _description: "Failed to update partner settings", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const getAudienceSizeLabel = (size: string) => {
    switch (size) {
      case 'under1k': return 'Under 1,000',
      case '1k-10k': return '1,000 - 10,000',
      case '10k-50k': return '10,000 - 50,000',
      case '50k-100k': return '50,000 - 100,000',
      case 'over100k': return 'Over 100,000',
      default: return size
    }
  },
=======
  const _getAudienceSizeLabel = (_size: string) => {_switch (size) {
      case 'under1k': return 'Under 1, _000';
      case '1k-10k': return '1, _000 - 10, _000';
      case '10k-50k': return '10, _000 - 50, _000';
      case '50k-100k': return '50, _000 - 100, _000';
      case 'over100k': return 'Over 100, _000';
      default: return size;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusBadge = (_status: string) => {_switch (status) {
      case 'pending':
<<<<<<< HEAD
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>,
      case 'approved':
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>,
      case 'rejected':
        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>,
      default:
        return <Badge variant="outline">{status}</Badge>
=======
        return <Badge variant=&quot;outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600&quot;>Pending</Badge>;
      case 'approved':
        return <Badge variant=&quot;outline" className="bg-green-900/30 text-green-500 border-green-600&quot;>Approved</Badge>;
      case 'rejected':
        return <Badge variant=&quot;outline" className="bg-red-900/30 text-red-500 border-red-600&quot;>Rejected</Badge>;
      default:
        return <Badge variant=&quot;outline&quot;>{status}</Badge>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

<<<<<<< HEAD
  const getFraudFlagBadge = (flags: number = 0) => {
    if (flags === 0) return null,
=======
  const _getFraudFlagBadge = (_flags: number = 0) => {_if (flags === 0) return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return (
      <Badge variant=&quot;outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">
        <Flag className="h-3 w-3" />
        {flags}
      </Badge>
    )
  },

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
                  {_partners.filter(p => p.status === 'pending').length}
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
                  {_partners.filter(p => p.status === 'approved').length}
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
                  {_partners.reduce(_(total, _p) => total + (p.fraud_flags || 0), _0)}
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
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light&quot; />
              <Input
                placeholder=&quot;Search partners..."
                className="pl-8"
                value={_searchQuery}
                onChange={_handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full md:w-auto&quot;>
              <TabsTrigger value=&quot;pending&quot;>Pending</TabsTrigger>
              <TabsTrigger value=&quot;approved&quot;>Approved</TabsTrigger>
              <TabsTrigger value=&quot;rejected&quot;>Rejected</TabsTrigger>
              <TabsTrigger value=&quot;all&quot;>All</TabsTrigger>
=======
          <Tabs value={_activeTab} onValueChange={_handleTabChange} className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </TabsList>
            
            <TabsContent value=&quot;pending" className="space-y-4&quot;>
              <PartnerTable 
                partners={_filteredPartners} 
                isLoading={_isLoading}
                onViewDetails={_handleViewDetails}
                onUpdateStatus={_handleUpdateStatus}
                onOpenSettings={_handleOpenSettings}
                getStatusBadge={_getStatusBadge}
                getFraudFlagBadge={_getFraudFlagBadge}
              />
            </TabsContent>
            
            <TabsContent value=&quot;approved" className="space-y-4&quot;>
              <PartnerTable 
                partners={_filteredPartners} 
                isLoading={_isLoading}
                onViewDetails={_handleViewDetails}
                onUpdateStatus={_handleUpdateStatus}
                onOpenSettings={_handleOpenSettings}
                getStatusBadge={_getStatusBadge}
                getFraudFlagBadge={_getFraudFlagBadge}
              />
            </TabsContent>
            
            <TabsContent value=&quot;rejected" className="space-y-4&quot;>
              <PartnerTable 
                partners={_filteredPartners} 
                isLoading={_isLoading}
                onViewDetails={_handleViewDetails}
                onUpdateStatus={_handleUpdateStatus} 
                onOpenSettings={_handleOpenSettings}
                getStatusBadge={_getStatusBadge}
                getFraudFlagBadge={_getFraudFlagBadge}
              />
            </TabsContent>
            
            <TabsContent value=&quot;all" className="space-y-4">
              <PartnerTable 
                partners={_filteredPartners} 
                isLoading={_isLoading}
                onViewDetails={_handleViewDetails}
                onUpdateStatus={_handleUpdateStatus}
                onOpenSettings={_handleOpenSettings}
                getStatusBadge={_getStatusBadge}
                getFraudFlagBadge={_getFraudFlagBadge}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {_/* Partner Details Dialog */}
      <Dialog open={_isDetailsOpen} onOpenChange={_setIsDetailsOpen}>
        <DialogContent className="sm:max-w-lg bg-zion-blue border-zion-blue-light">
          <DialogHeader>
            <DialogTitle>Partner Details</DialogTitle>
            <DialogDescription>
              Review the details of the partner application
            </DialogDescription>
          </DialogHeader>
          
          {_selectedPartner && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Name</p>
                  <p className="font-medium text-white">{selectedPartner.name}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Status</p>
                  <div>{_getStatusBadge(selectedPartner.status)}</div>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-zion-slate-light">Bio</p>
<<<<<<< HEAD
                <p className="text-white&quot;>{selectedPartner.bio || &quot;No bio provided"}</p>
=======
                <p className="text-white">{_selectedPartner.bio || "No bio provided"}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Niche</p>
                  <p className="text-white">{_selectedPartner.niche}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Audience Size</p>
                  <p className="text-white">{_getAudienceSizeLabel(selectedPartner.audience_size)}</p>
                </div>
              </div>
              
              {_selectedPartner.website && (
                <div>
                  <p className="text-xs text-zion-slate-light">Website</p>
                  <p className="text-zion-cyan">{selectedPartner.website}</p>
                </div>
              )}
              
              {_selectedPartner.social_media && Object.keys(selectedPartner.social_media).length > 0 && (
                <div>
                  <p className="text-xs text-zion-slate-light">Social Media</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedPartner.social_media).map(_([platform, _handle]) => (
                      <p key={platform} className="text-white">
                        <span className="font-medium">{_platform}: </span>
                        {_handle}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Payout Method</p>
<<<<<<< HEAD
                  <p className="text-white capitalize&quot;>{selectedPartner.payout_method || &quot;Not specified"}</p>
=======
                  <p className="text-white capitalize">{_selectedPartner.payout_method || "Not specified"}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Commission Rate</p>
                  <p className="text-white">{_selectedPartner.commission_rate || 25}%</p>
                </div>
              </div>
              
              {_selectedPartner.fraud_flags && selectedPartner.fraud_flags > 0 && (
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
              
<<<<<<< HEAD
              {selectedPartner.status === 'pending' && (
                <div className="flex justify-end gap-2 mt-4&quot;>
                  <Button 
                    variant=&quot;destructive" 
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'rejected')}
=======
              {_selectedPartner.status === 'pending' && (_<div className="flex justify-end gap-2 mt-4">
                  <Button 
                    variant="destructive" 
                    onClick={() => handleUpdateStatus(selectedPartner.id, _'rejected')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={_() => handleUpdateStatus(selectedPartner.id, _'approved')}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {_/* Partner Settings Dialog */}
      <Dialog open={_isSettingsOpen} onOpenChange={_setIsSettingsOpen}>
        <DialogContent className="bg-zion-blue border-zion-blue-light">
          <DialogHeader>
            <DialogTitle>Partner Settings</DialogTitle>
            <DialogDescription>
              Configure commission rates and other settings
            </DialogDescription>
          </DialogHeader>
          
          {_selectedPartner && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white">Partner Name</label>
                <p className="text-zion-slate-light">{selectedPartner.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-white&quot; htmlFor=&quot;commission-rate&quot;>
                  Commission Rate (%)
                </label>
                <Input
<<<<<<< HEAD
                  id=&quot;commission-rate&quot;
                  type=&quot;number&quot;
                  min=&quot;1&quot;
                  max=&quot;50"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(parseInt(e.target.value))}
=======
                  id="commission-rate"
                  type="number"
                  min="1"
                  max="50"
                  value={_commissionRate}
                  onChange={_(_e) => setCommissionRate(parseInt(e.target.value))}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
                <p className="text-xs text-zion-slate-light mt-1&quot;>
                  Percentage of reward granted to this partner for successful referrals
                </p>
              </div>
              
              <DialogFooter>
<<<<<<< HEAD
                <Button variant=&quot;outline" onClick={() => setIsSettingsOpen(false)}>
=======
                <Button variant="outline" onClick={_() => setIsSettingsOpen(false)}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Cancel
                </Button>
                <Button onClick={_handleSaveSettings} className="bg-zion-purple hover:bg-zion-purple-dark">
                  Save Changes
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

<<<<<<< HEAD
interface PartnerTableProps {
  partners: PartnerProfile[],
  isLoading: boolean,
  onViewDetails: (partner: PartnerProfile) => void,
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void,
  onOpenSettings: (partner: PartnerProfile) => void,
  getStatusBadge: (status: string) => JSX.Element,
  getFraudFlagBadge: (flags?: number) => JSX.Element | null
}
=======
interface PartnerTableProps {_partners: PartnerProfile[];
  isLoading: boolean;
  onViewDetails: (_partner: PartnerProfile) => void;
  onUpdateStatus: (_partnerId: string, _status: 'approved' | 'rejected') => void;
  onOpenSettings: (_partner: PartnerProfile) => void;
  getStatusBadge: (_status: string) => JSX.Element;
  getFraudFlagBadge: (_flags?: number) => JSX.Element | null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

function PartnerTable(_{_partners, _isLoading, _onViewDetails, _onUpdateStatus, _onOpenSettings, _getStatusBadge, _getFraudFlagBadge}: PartnerTableProps) {_if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-zion-slate-light">Loading partner data...</p>
      </div>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  if (partners.length === 0) {_return (
      <div className="text-center py-8">
        <p className="text-zion-slate-light">No partners found.</p>
      </div>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (_<Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Name</TableHead>
          <TableHead>Niche</TableHead>
          <TableHead>Audience</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {_partners.map((partner) => (
          <TableRow key={partner.id} className="border-zion-blue-light hover:bg-zion-blue-light/10">
            <TableCell className="font-medium text-white">
              <div className="flex items-center gap-2">
                {_partner.name}
                {_getFraudFlagBadge(partner.fraud_flags)}
              </div>
            </TableCell>
            <TableCell>{_partner.niche}</TableCell>
            <TableCell>
<<<<<<< HEAD
              {partner.audience_size.replace('k,000').replace('- - ').replace('overOver ')}
=======
              {_partner.audience_size.replace('k', _', _000').replace('-', _' - ').replace('over', _'Over ')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </TableCell>
            <TableCell>{_getStatusBadge(partner.status)}</TableCell>
            <TableCell>
              {_new Date(partner.created_at).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
<<<<<<< HEAD
              <div className="flex justify-end gap-2&quot;>
                {partner.status === 'pending' && (
                  <>
                    <Button 
                      variant=&quot;ghost&quot;
                      size=&quot;sm"
                      onClick={() => onUpdateStatus(partner.id, 'rejected')}
=======
              <div className="flex justify-end gap-2">
                {_partner.status === 'pending' && (_<>
                    <Button 
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, _'rejected')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      className="text-red-500 hover:text-red-600 hover:bg-red-900/20"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only&quot;>Reject</span>
                    </Button>
                    <Button 
<<<<<<< HEAD
                      variant=&quot;ghost&quot;
                      size=&quot;sm"
                      onClick={() => onUpdateStatus(partner.id, 'approved')}
=======
                      variant="ghost"
                      size="sm"
                      onClick={_() => onUpdateStatus(partner.id, _'approved')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      className="text-green-500 hover:text-green-600 hover:bg-green-900/20"
                    >
                      <Check className="h-4 w-4" />
                      <span className="sr-only&quot;>Approve</span>
                    </Button>
                  </>
                )}
                
                <Button 
<<<<<<< HEAD
                  variant=&quot;ghost&quot; 
                  size=&quot;sm"
                  onClick={() => onOpenSettings(partner)}
=======
                  variant="ghost" 
                  size="sm"
                  onClick={_() => onOpenSettings(partner)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  className="text-zion-slate-light hover:text-white"
                >
                  <Settings className="h-4 w-4" />
                  <span className="sr-only&quot;>Settings</span>
                </Button>
                
                <Button 
<<<<<<< HEAD
                  variant=&quot;outline&quot; 
                  size=&quot;sm"
                  onClick={() => onViewDetails(partner)}
=======
                  variant="outline" 
                  size="sm"
                  onClick={_() => onViewDetails(partner)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  View
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

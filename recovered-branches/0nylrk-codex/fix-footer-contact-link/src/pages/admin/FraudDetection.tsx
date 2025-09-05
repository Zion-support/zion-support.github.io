import React, {_useState, _useEffect} from "react";

// Import refactored components
import {_FraudStatsCards, _FraudFilters, _FraudFlagsTable, _FraudTabContent} from "@/components/admin/fraud-detection";

export default function FraudDetection() {_const [flags, _setFlags] = useState<FraudFlag[]>([]);
  const [filteredFlags, _setFilteredFlags] = useState<FraudFlag[]>([]);
  const [isLoading, _setIsLoading] = useState(true);
  const [searchQuery, _setSearchQuery] = useState("");
  const [statusFilter, _setStatusFilter] = useState<string | null>(null);
  const [severityFilter, _setSeverityFilter] = useState<string | null>(null);
  const [contentTypeFilter, _setContentTypeFilter] = useState<string | null>(null);
  const [stats, _setStats] = useState<FraudStats>({
    total_flags: 0, _pending_flags: 0, _suspicious_count: 0, _dangerous_count: 0, _false_positives: 0, _actioned_count: 0});

  // Fetch fraud flags
  const _fetchFraudFlags = async () => {_setIsLoading(true);
    try {
      const { data, _error} = await supabase
        .from("fraud_flags")
        .select("*")
        .order("timestamp", {_ascending: false});

      if (error) throw error;

      setFlags(data || []);
      setFilteredFlags(data || []);
      
      // Calculate stats
      const newStats: FraudStats = {_total_flags: data?.length || 0, _pending_flags: data?.filter(flag => flag.status === 'pending').length || 0, _suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length || 0, _dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length || 0, _false_positives: data?.filter(flag => flag.is_false_positive).length || 0, _actioned_count: data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length || 0};
      setStats(newStats);
      
    } catch (error) {_toast({
        title: "Error", _description: "Failed to load fraud detection data", _variant: "destructive"});
    } finally {_setIsLoading(false);}
  };

  useEffect__(() => {_fetchFraudFlags();}, []);

  // Apply filters
  useEffect__(() => {_let _result = [...flags];

    // Apply search filter
    if (searchQuery) {
      const _query = searchQuery.toLowerCase();
      result = result.filter(_(flag) =>
          flag.user_email?.toLowerCase().includes(query) ||
          flag.content_excerpt.toLowerCase().includes(query) ||
          flag.reason.toLowerCase().includes(query)
      );}

    // Apply status filter
    if (statusFilter) {_result = result.filter(_(flag) => flag.status === statusFilter);}

    // Apply severity filter
    if (severityFilter) {_result = result.filter(_(flag) => flag.severity === severityFilter);}

    // Apply content type filter
    if (contentTypeFilter) {_result = result.filter(_(flag) => flag.content_type === contentTypeFilter);}

    setFilteredFlags(result);
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]);

  const _handleAction = async (_flagId: string, _action: 'warning' | 'suspension' | 'ban' | 'ignore') => {_try {
      const _status = action === 'ignore' ? 'ignored' : 'actioned';
      const _actionTaken = action === 'ignore' ? 'none' : action;
      
      const { error} = await supabase
        .from("fraud_flags")
        .update({_status, _action_taken: actionTaken, _reviewed_at: new Date().toISOString(), _// In a real app, _you'd get the current user's ID
          reviewed_by: 'admin'})
        .eq("id", flagId);

      if (error) throw error;

      toast({_title: "Flag updated", _description: `Action '${action}' was applied successfully.`});
      
      // Refresh the data
      fetchFraudFlags();
      
    } catch (error) {_toast({
        title: "Error", _description: "Failed to update flag", _variant: "destructive"});
    }
  };

  const _resetFilters = () => {_setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null);};

  const _hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);

  return (
    <AppLayout>
      <SEO 
        title="Fraud Detection | Admin Dashboard" 
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace" 
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Fraud Detection
            </h1>
            <p className="text-zion-slate-light mt-2">
              Monitor suspicious activities and protect the marketplace from fraud and abuse
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button 
              onClick={_fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"
              disabled={_isLoading}
            >
              Refresh Data
            </Button>
          </div>
        </div>
        
        {_/* Stats Cards */}
        <FraudStatsCards stats={_stats} />
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Flags</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>
            <TabsTrigger value="actioned">Actioned</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            {_/* Search and Filters */}
            <FraudFilters
              searchQuery={_searchQuery}
              setSearchQuery={_setSearchQuery}
              statusFilter={_statusFilter}
              setStatusFilter={_setStatusFilter}
              severityFilter={_severityFilter}
              setSeverityFilter={_setSeverityFilter}
              contentTypeFilter={_contentTypeFilter}
              setContentTypeFilter={_setContentTypeFilter}
              resetFilters={_resetFilters}
            />
            
            {_/* Flags Table */}
            <Card>
              <CardContent className="p-0">
                <FraudFlagsTable
                  flags={_filteredFlags}
                  isLoading={_isLoading}
                  hasFilters={_hasFilters}
                  resetFilters={_resetFilters}
                  onAction={_handleAction}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pending">
            <FraudTabContent tabValue="pending" />
          </TabsContent>
          
          <TabsContent value="dangerous">
            <FraudTabContent tabValue="dangerous" />
          </TabsContent>
          
          <TabsContent value="actioned">
            <FraudTabContent tabValue="actioned" />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}

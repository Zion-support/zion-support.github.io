<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Card, CardContent } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { FraudFlag, FraudStats } from "@/types/fraud",
=======
import React, { useState, useEffect } from &quot;react&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { FraudFlag, FraudStats } from &quot;@/types/fraud&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

// Import refactored components
import {
  FraudStatsCards,
  FraudFilters,
  FraudFlagsTable,
  FraudTabContent
<<<<<<< HEAD
} from "@/components/admin/fraud-detection",

export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [searchQuery, setSearchQuery] = useState(""),
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),
=======
} from &quot;@/components/admin/fraud-detection&quot;;

export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]);
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [severityFilter, setSeverityFilter] = useState<string | null>(null);
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  const [stats, setStats] = useState<FraudStats>({
    total_flags: 0,
    pending_flags: 0,
    suspicious_count: 0,
    dangerous_count: 0,
    false_positives: 0,
    actioned_count: 0}),

  // Fetch fraud flags
  const fetchFraudFlags = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
<<<<<<< HEAD
        .from("fraud_flags")
        .select("*")
        .order("timestamp", { ascending: false }),
=======
        .from(&quot;fraud_flags&quot;)
        .select(&quot;*&quot;)
        .order(&quot;timestamp&quot;, { ascending: false });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      if (error) throw error,

      setFlags(data || []),
      setFilteredFlags(data || []),
      
      // Calculate stats
<<<<<<< HEAD
      const newStats: FraudStats = {
        total_flags: data?.length || 0,
        pending_flags: data?.filter(flag => flag.status === 'pending').length || 0,
        suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length || 0,
        dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length || 0,
        false_positives: data?.filter(flag => flag.is_false_positive).length || 0,
        actioned_count: data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length || 0},
      setStats(newStats)
      
    } catch (error) {
<<<<<<< HEAD
      console.error("Error fetching fraud flags:", error),
      toast({
        title: "Error",
        description: "Failed to load fraud detection data",
        variant: "destructive"})
=======
      console.error(&quot;Error fetching fraud flags:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load fraud detection data&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  useEffect(() => {
    fetchFraudFlags()
  }, []),

  // Apply filters
  useEffect(() => {
    let result = [...flags],

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase(),
      result = result.filter(
        (flag) =>
          flag.user_email?.toLowerCase().includes(query) ||
          flag.content_excerpt.toLowerCase().includes(query) ||
          flag.reason.toLowerCase().includes(query)
      )
    }

    // Apply status filter
    if (statusFilter) {
      result = result.filter((flag) => flag.status === statusFilter)
    }

    // Apply severity filter
    if (severityFilter) {
      result = result.filter((flag) => flag.severity === severityFilter)
    }

    // Apply content type filter
    if (contentTypeFilter) {
      result = result.filter((flag) => flag.content_type === contentTypeFilter)
    }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setFilteredFlags(result)
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),

<<<<<<< HEAD
  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
    try {
      const status = action === 'ignore' ? 'ignored' : 'actioned',
      const actionTaken = action === 'ignore' ? 'none' : action,
      
      const { error } = await supabase
        .from(&quot;fraud_flags&quot;)
        .update({
          status,
          action_taken: actionTaken,
          reviewed_at: new Date().toISOString(),
          // In a real app, you'd get the current user's ID
          reviewed_by: 'admin'
        })
<<<<<<< HEAD
        .eq("id", flagId),
=======
        .eq(&quot;id&quot;, flagId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _handleAction = async (_flagId: string, _action: 'warning' | 'suspension' | 'ban' | 'ignore') => {_try {
      const _status = action === 'ignore' ? 'ignored' : 'actioned';
      const _actionTaken = action === 'ignore' ? 'none' : action;
      
      const { error} = await supabase
        .from("fraud_flags")
        .update({_status, _action_taken: actionTaken, _reviewed_at: new Date().toISOString(), _// In a real app, _you'd get the current user's ID
          reviewed_by: 'admin'})
        .eq("id", flagId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      if (error) throw error,

<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Flag updated",
        description: `Action '${action}' was applied successfully.`}),
=======
        title: &quot;Flag updated&quot;,
        description: `Action '${action}' was applied successfully.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      toast({_title: "Flag updated", _description: `Action '${action}' was applied successfully.`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Refresh the data
      fetchFraudFlags()
      
<<<<<<< HEAD
    } catch (error) {
<<<<<<< HEAD
      console.error("Error updating fraud flag:", error),
      toast({
        title: "Error",
        description: "Failed to update flag",
        variant: "destructive"})
=======
      console.error(&quot;Error updating fraud flag:&quot;, error);
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to update flag&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    } catch (error) {_toast({
        title: "Error", _description: "Failed to update flag", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const resetFilters = () => {
<<<<<<< HEAD
    setSearchQuery(""),
    setStatusFilter(null),
    setSeverityFilter(null),
    setContentTypeFilter(null)
  },
=======
    setSearchQuery("&quot;);
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),
=======
  const _resetFilters = () => {_setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null);};

  const _hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <AppLayout>
      <SEO 
        title=&quot;Fraud Detection | Admin Dashboard&quot; 
        description=&quot;Monitor and manage fraud detection alerts on the Zion AI Marketplace&quot; 
      />
      
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex flex-col md:flex-row items-start md:items-center justify-between mb-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent&quot;>
              Fraud Detection
            </h1>
            <p className=&quot;text-zion-slate-light mt-2&quot;>
              Monitor suspicious activities and protect the marketplace from fraud and abuse
            </p>
          </div>
          
          <div className=&quot;mt-4 md:mt-0&quot;>
            <Button 
<<<<<<< HEAD
              onClick={fetchFraudFlags} 
              className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;
              disabled={isLoading}
=======
              onClick={_fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"
              disabled={_isLoading}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Refresh Data
            </Button>
          </div>
        </div>
        
        {_/* Stats Cards */}
        <FraudStatsCards stats={_stats} />
        
        <Tabs defaultValue=&quot;all&quot; className=&quot;mb-8&quot;>
          <TabsList>
            <TabsTrigger value=&quot;all&quot;>All Flags</TabsTrigger>
            <TabsTrigger value=&quot;pending&quot;>Pending Review</TabsTrigger>
            <TabsTrigger value=&quot;dangerous&quot;>Dangerous</TabsTrigger>
            <TabsTrigger value=&quot;actioned&quot;>Actioned</TabsTrigger>
          </TabsList>
          
<<<<<<< HEAD
          <TabsContent value=&quot;all&quot; className=&quot;mt-6&quot;>
            {/* Search and Filters */}
=======
          <TabsContent value="all" className="mt-6">
            {_/* Search and Filters */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
              <CardContent className=&quot;p-0&quot;>
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
          
          <TabsContent value=&quot;pending&quot;>
            <FraudTabContent tabValue=&quot;pending&quot; />
          </TabsContent>
          
          <TabsContent value=&quot;dangerous&quot;>
            <FraudTabContent tabValue=&quot;dangerous&quot; />
          </TabsContent>
          
          <TabsContent value=&quot;actioned&quot;>
            <FraudTabContent tabValue=&quot;actioned&quot; />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}

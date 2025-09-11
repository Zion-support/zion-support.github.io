
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";
import { supabase } from "@/integrations/supabase/client",
import { FraudFlag, FraudStats } from "@/types/fraud",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

// Import refactored components
import {
  FraudStatsCards,
  FraudFilters,
  FraudFlagsTable,
  FraudTabContent
} from "@/components/admin/fraud-detection",

export default function FraudDetection() {;
  const [flags, setFlags] = useState<FraudFlag[]>([]);
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [severityFilter, setSeverityFilter] = useState<string | null>(null);
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null);
export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true),
  const [searchQuery, setSearchQuery] = useState(""),
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),
  const [stats, setStats] = useState<FraudStats>({

    total_flags: 0
    pending_flags: 0
    suspicious_count: 0
    dangerous_count: 0
    false_positives: 0
    actioned_count: 0})
  // Fetch fraud flags
  const fetchFraudFlags = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("fraud_flags")
        .select("*")
        .order("timestamp", { ascending: false })
      if (error) throw error;
      setFlags(data |[]);
      setFilteredFlags(data |[]);
        .order("timestamp", { ascending: false }),

      if (error) throw error,

      setFlags(data || []),
      setFilteredFlags(data || []),
      
      // Calculate stats
      const newStats: FraudStats = {
        total_flags: data?.length |0
        pending_flags: data?.filter(flag => flag.status === 'pending').length |0
        suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length |0
        dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length |0
        false_positives: data?.filter(flag => flag.is_false_positive).length |0
        actioned_count: data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length |0}
      setStats(newStats)
    } catch (error) {
      console.error("Error fetching fraud flags:", error);
      toast({
        title: "Error"
        description: "Failed to load fraud detection data"
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchFraudFlags()
  }, []);
  // Apply filters
  useEffect(() => {
    let result = [...flags];
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (flag) =>
          flag.user_email?.toLowerCase().includes(query) |
          flag.content_excerpt.toLowerCase().includes(query) |
          flag.reason.toLowerCase().includes(query)
      )
import React, { useState, useEffect } from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { FraudFlag, FraudStats } from "@/types/fraud",;
// Import refactored components;
import {;
  FraudStatsCards,;
  FraudFilters,;
  FraudFlagsTable,;
  FraudTabContent;
} from "@/components/admin/fraud-detection",;
export default function FraudDetection() {;
  const [flags, setFlags] = useState<FraudFlag[]>([]),;
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [statusFilter, setStatusFilter] = useState<string | null>(null),;
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),;
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),;
  const [stats, setStats] = useState<FraudStats>({;
    total_flags: 0,;
    pending_flags: 0,;
    suspicious_count: 0,;
    dangerous_count: 0,;
    false_positives: 0,;
    actioned_count: 0}),;
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase;
        .from("fraud_flags");
        .select("*");
        .order("timestamp", { ascending: false }),;
      if (error) throw error,;
      setFlags(data || []),;
      setFilteredFlags(data || []),;
      // Calculate stats;
      const newStats: FraudStats = {;
        total_flags: data?.length || 0,;
        pending_flags: data?.filter(flag => flag.status === 'pending').length || 0,;
        suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length || 0,;
        dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length || 0,;
        false_positives: data?.filter(flag => flag.is_false_positive).length || 0,;
        actioned_count: data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length || 0},;
      setStats(newStats);
    } catch (error) {;
      console.error("Error fetching fraud flags:", error),;
      toast({;
        title: "Error",;
        description: "Failed to load fraud detection data",;
        variant: "destructive"});
    } finally {;
      setIsLoading(false);
    }
  },;
  useEffect(() => {;
    fetchFraudFlags();
  }, []),;
  // Apply filters;
  useEffect(() => {;
    let result = [...flags],;
    // Apply search filter;
    if (searchQuery) {;
      const query = searchQuery.toLowerCase(),;
      result = result.filter(;
        (flag) =>;
          flag.user_email?.toLowerCase().includes(query) ||;
          flag.content_excerpt.toLowerCase().includes(query) ||;
          flag.reason.toLowerCase().includes(query);
      );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
    setFilteredFlags(result)
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]);
  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
    try {
      const status = action === 'ignore' ? 'ignored' : 'actioned';
      const actionTaken = action === 'ignore' ? 'none' : action
      const { error } = await supabase
        .from("fraud_flags")
        .update({
          status;
          action_taken: actionTaken
          reviewed_at: new Date().toISOString()
          // In a real app, you'd get the current user's ID
          reviewed_by: 'admin'
        })
        .eq("id", flagId);
      if (error) throw error;



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {FraudFlag, FraudStats} from "@/types/fraud";

// Import refactored components;
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";

export default function FraudDetection() {;
  const [flags, setFlags] = useState<FraudFlag[]>([]);
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [severityFilter, setSeverityFilter] = useState<string | null>(null);
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null);
  const [stats, setStats] = useState<FraudStats>({;
    total_flags: 0,;
    pending_flags: 0,;
    suspicious_count: 0,;
    dangerous_count: 0,;
    false_positives: 0,;
    actioned_count: 0}),;




      toast({
        title: "Flag updated"
        description: `Action '${action}' was applied successfully.`})
      // Refresh the data
      fetchFraudFlags()
    } catch (error) {
      console.error("Error updating fraud flag:", error);
      toast({
        title: "Error"
        description: "Failed to update flag"
        variant: "destructive"})
    }
  }
  },

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)
  }
  const hasFilters = !!(searchQuery |statusFilter |severityFilter |contentTypeFilter);
  },

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),

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
              onClick={fetchFraudFlags}
              className="bg-zion-purple hover:bg-zion-purple-light"
            <Button 
              onClick={fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"


              disabled={isLoading}
            >
              Refresh Data
            </Button>
          </div>
        </div>
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Flags</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>
            <TabsTrigger value="actioned">Actioned</TabsTrigger>
          </TabsList>
          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          <TabsContent value="all" className="mt-6">
=======

      toast({;
        title: "Flag updated",;
        description: `Action '${action}' was applied successfully.`}),;

      // Refresh the data;
      fetchFraudFlags();

    } catch (error) {;
      console && console.error("Error updating fraud flag:", error);
      toast({;
        title: "Error",;
        description: "Failed to update flag",;
        variant: "destructive"});
    }
  };

  const resetFilters = () => {;
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null);
  };

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);

  return (
    <AppLayout>;
      <SEO
        title="Fraud Detection | Admin Dashboard" 
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace" 
      />;

      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;
          <div>;
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Fraud Detection;
            </h1>;
            <p className="text-zion-slate-light mt-2">;
              Monitor suspicious activities and protect the marketplace from fraud and abuse;
            </p>;
          </div>;

          <div className="mt-4 md:mt-0">;
            <Button
              onClick={fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"
              disabled={isLoading}>;
              Refresh Data;
            </Button>;
          </div>;
        </div>;

        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;

        <Tabs defaultValue="all" className="mb-8">;
=======
import React, { useState, useEffect } from './react';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { Card, CardContent } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Button } from '@/components / ui / button';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { FraudFlag, FraudStats } from '@/types / fraud';
// Import refactored components;
import { FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent } from '@/components / admin / fraud - detection';
;
export default /**
 * FraudDetection - Function description
 */
function FraudDetection() {
  const [flags, set_flags] = useState < FraudFlag[]>([]);
  const [filtered_flags, setFilteredFlags] = useState < FraudFlag[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [search_query, setSearchQuery] = useState ("");
  const [status_filter, setStatusFilter] = useState < string | null>(null);
  const [severity_filter, setSeverityFilter] = useState < string | null>(null);
  const [contentTypeFilter, setContentTypeFilter] = useState < string | null>(null);
  const [stats, set_stats] = useState < FraudStats>({
    total_flags: 0,
    pending_flags: 0,
    suspicious_count: 0,
    dangerous_count: 0,
    false_positives: 0,
    actioned_count: 0}),
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {
    setIsLoading (true);
    try {
      const { data, error } = await supabase;
        .from ("fraud_flags");
        .select ("*");
        .order ("timestamp", { ascending: false }),
      // Check condition
if (throw error) {
  $2
}
      set_flags (data || []);
      setFilteredFlags (data || []);
;
      // Calculate stats;
      const new_stats: FraudStats = {
        total_flags: data?.length || 0,
        pending_flags: data?.filter (flag => flag.status === 'pending').length || 0,
        suspicious_count: data?.filter (flag => flag.severity === 'suspicious').length || 0,
        dangerous_count: data?.filter (flag => flag.severity === 'dangerous').length || 0,
        false_positives: data?.filter (flag => flag.is_false_positive).length || 0,
        actioned_count: data?.filter (flag => flag.action_taken && flag.action_taken !== 'none').length || 0},
      set_stats (new_stats);
    } catch (error) {
      console.error ("Error fetching fraud flags:", error);
      toast ({
        title: "Error",
        description: "Failed to load fraud detection data",
        variant: "destructive"});
    } finally {
      setIsLoading (false);
    }
  }
;
  useEffect (() => {
    fetchFraudFlags ();
  }, []);
;
  // Apply filters;
  useEffect (() => {
    let result = [...flags];
;
    // Apply search filter;
    // Check condition
if ( {) {
  $2
}
      const query = search_query.toLowerCase ();
      result = result.filter (
        (flag) =>;
          flag.user_email?.toLowerCase ().includes (query) ||;
          flag.content_excerpt.toLowerCase ().includes (query) ||;
          flag.reason.toLowerCase ().includes (query));
    }
    // Apply status filter;
    // Check condition
if ( {) {
  $2
}
      result = result.filter ((flag) => flag.status === status_filter);
    }
    // Apply severity filter;
    // Check condition
if ( {) {
  $2
}
      result = result.filter ((flag) => flag.severity === severity_filter);
    }
    // Apply content type filter;
    // Check condition
if ( {) {
  $2
}
      result = result.filter ((flag) => flag.content_type === contentTypeFilter);
    }
    setFilteredFlags (result);
  }, [flags, search_query, status_filter, severity_filter, contentTypeFilter]);
;
  const handle_action = async (flag_id: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
    try {
      const status = action === 'ignore' ? 'ignored' : 'actioned';
      const action_taken = action === 'ignore' ? 'none' : action,
      const { error } = await supabase;
        .from ("fraud_flags");
        .update ({
          status;
          action_taken: action_taken,
          reviewed_at: new Date ().toISOString (),
          // In a real app, you'd get the current user's ID;
          reviewed_by: 'admin';
        });
        .eq ("id", flag_id);
;
      // Check condition
if (throw error) {
  $2
}
      toast ({
        title: "Flag updated",
        description: `Action '${action}' was applied successfully.`}),
      // Refresh the data;
      fetchFraudFlags ();
    } catch (error) {
      console.error ("Error updating fraud flag:", error);
      toast ({
        title: "Error",
        description: "Failed to update flag",
        variant: "destructive"});
    }
  }
;
  const reset_filters = () =>: any {
    setSearchQuery ("");
    setStatusFilter (null);
    setSeverityFilter (null);
    setContentTypeFilter (null);
  }
;
  const has_filters = !!(search_query || status_filter || severity_filter || contentTypeFilter);
;
  return (
    <AppLayout>;
      <SEO;
        title="Fraud Detection | Admin Dashboard";
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace";
      />;
      <div className="container mx - auto px - 4 py - 8">;
        <div className="flex flex - col md:flex - row items - start md:items - center justify - between mb - 8">;
          <div>;
            <h1 className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent">;
              Fraud Detection;
            </h1>;
            <p className="text - zion - slate - light mt - 2">;
              Monitor suspicious activities and protect the marketplace from fraud and abuse;
            </p>;
          </div>;
          <div className="mt - 4 md:mt - 0">;
            <Button;
              on_click={fetchFraudFlags}
              className="bg - zion - purple hover:bg - zion - purple - light";
              disabled={is_loading}
            >;
              Refresh Data;
            </Button>;
          </div>;
        </div>;
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
        <Tabs default_value="all" className="mb - 8">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          <TabsList>;
            <TabsTrigger value="all">All Flags</TabsTrigger>;
            <TabsTrigger value="pending">Pending Review</TabsTrigger>;
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>;
            <TabsTrigger value="actioned">Actioned</TabsTrigger>;
          </TabsList>;

          <TabsContent value="all" className="mt - 6">;

            {/* Search and Filters */}
            <FraudFilters;
              search_query={search_query}
              setSearchQuery={setSearchQuery}
              status_filter={status_filter}
              setStatusFilter={setStatusFilter}
              severity_filter={severity_filter}
              setSeverityFilter={setSeverityFilter}
              contentTypeFilter={contentTypeFilter}
              setContentTypeFilter={setContentTypeFilter}

            />;


            {/* Flags Table */}
            <Card>;
              <CardContent className="p-0">;
                <FraudFlagsTable
                  flags={filteredFlags}
                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}
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
  )
}
}
;

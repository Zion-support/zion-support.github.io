import React, { useState, useEffect } from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Card, CardContent } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client";
import { FraudFlag, FraudStats } from "@/types/fraud";
// Import refactored components
import {
  FraudStatsCards,
  FraudFilters,
  FraudFlagsTable,
  FraudTabContent
} from "@/components/admin/fraud-detection",

export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

  const [stats, setStats] = useState<FraudStats>({
import {
  FraudStatsCards;
  FraudFilters;
  FraudFlagsTable;
  FraudTabContent
} from "@/components/admin/fraud-detection",

export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),
  const [isLoading, setIsLoading] = useState($2);
  const [searchQuery, setSearchQuery] = useState($2);
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),
  const [stats, setStats] = useState<FraudStats>({
    total_flags: 0,
    pending_flags: 0,
    suspicious_count: 0,
    dangerous_count: 0,
    false_positives: 0,
    actioned_count: 0}),

    total_flags: 0
    pending_flags: 0
    suspicious_count: 0
    dangerous_count: 0
    false_positives: 0
    actioned_count: 0})
  // Fetch fraud flags
  const fetchFraudFlags = async () => {
    setIsLoading($2);
    try {
      const { data, error } = await supabase
        .from("fraud_flags")
        .select("*")
        .order($2);
      if (error) throw error,

      setFlags($2);
      setFilteredFlags($2);
      // Calculate stats
      const newStats: FraudStats = $2;
        pending_flags: data ?.filter(flag = $2;
        suspicious_count: data ?.filter(flag = $2;
        dangerous_count: data ?.filter(flag = $2;
        false_positives: data ?.filter(flag = $2;
        actioned_count: data ?.filter(flag = $2;
      setStats(newStats)
      
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to load fraud detection data",
        variant: "destructive"})
    } finally {
      setIsLoading(false)
    }
  },

  useEffect(() => {
    fetchFraudFlags()
  }, []),

  // Apply filters
  useEffect(() => {
    let result = $2;
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase($2);
      result = result.filter(
        (flag) =>
          flag.user_email?.toLowerCase().includes(query) |
          flag.content_excerpt.toLowerCase().includes(query) |
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

    setIsLoading(true);    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("fraud_flags")
        .select("*")      toast({
        title: "Flag updated"
        description: `Action '${action}' was applied successfully.`})
      // Refresh the data
      fetchFraudFlags()
    } catch (error) {
      console.error("Error updating fraud flag:", error),      console.error("Error updating fraud flag:", error),
      toast({
        title: "Error"
        description: "Failed to update flag"
        variant: "destructive"})
    }
  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)

    setFilteredFlags(result)
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),

  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
    try {
      const status = $2;
      const actionTaken = $2;
      const { error } = await supabase
        .from("fraud_flags")
        .update({
          status,
          action_taken: actionTaken,
          reviewed_at: new Date().toISOString($2);
          // In a real app, you'd get the current user's ID
          reviewed_by: 'admin'
        })
        .eq($2);
      if (error) throw error,

      toast($2);
      // Refresh the data
      fetchFraudFlags()
      
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to update flag",
        variant: "destructive"})
    }
  },

  const resetFilters = () => {
    setSearchQuery($2);
    setStatusFilter($2);
    setSeverityFilter($2);
    setContentTypeFilter(null)
  },

  const hasFilters = $2;
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
;
    setFilteredFlags(result);
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),;
  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {;
    try {;
      const status = action === 'ignore' ? 'ignored' : 'actioned',;
      const actionTaken = action === 'ignore' ? 'none' : action,;
      const { error } = await supabase;
        .from("fraud_flags");
        .update({;
          status,;
          action_taken: actionTaken,;
          reviewed_at: new Date().toISOString(),;
          // In a real app, you'd get the current user's ID;
          reviewed_by: 'admin';
        });
        .eq("id", flagId),;
      if (error) throw error,;
      toast({;
        title: "Flag updated",;
        description: `Action '${action}' was applied successfully.`}),;
      // Refresh the data;
      fetchFraudFlags();
    } catch (error) {;
      console.error("Error updating fraud flag:", error),;
      toast({;
        title: "Error",;
        description: "Failed to update flag",;
        variant: "destructive"});
    }
  },;
  const resetFilters = () => {;
    setSearchQuery(""),;
    setStatusFilter(null),;
    setSeverityFilter(null),;
    setContentTypeFilter(null);
  };
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);
  return (;
    <AppLayout>;
      <SEO;
        title="Fraud Detection | Admin Dashboard";
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace";
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
            <Button;
              onClick={fetchFraudFlags} ;
              className="bg-zion-purple hover:bg-zion-purple-light";
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
          </TabsList>        title: "Flag updated",,
  description: `Action '${action}' was applied successfully.`}),;

      // Refresh the data;
      fetchFraudFlags();

    } catch (error) {;
      console && console.error("Error updating fraud flag:", error);
      toast({;
        title: "Error",,
  description: "Failed to update flag",;
        variant: "destructive"});
    }
  };

  const resetFilters = () => {;
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)
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
              Refresh Data;
            </Button>;
          </div>;
        </div>;
        ;
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
        ;
        <Tabs defaultValue="all" className="mb-8">;
            <Card>;
              <CardContent className="p-0">;
          </TabsList>
          <TabsContent value="all" className="mt-6">
            {/* Search and Filters */}
            <FraudFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              severityFilter={severityFilter}
              setSeverityFilter={setSeverityFilter}
              contentTypeFilter={contentTypeFilter}
              setContentTypeFilter={setContentTypeFilter}
              resetFilters={resetFilters}
            />
            {/* Flags Table */}
            <Card>
              <CardContent className="p-0">
                <FraudFlagsTable
                  flags={filteredFlags}
                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}
              reset_filters={reset_filters}
            />;
            {/* Flags Table */}
            <Card>;
              <CardContent className="p-0">;
                <FraudFlagsTable;
                  flags={filtered_flags}
                  is_loading={is_loading}
                  has_filters={has_filters}
                  reset_filters={reset_filters}
                  on_action={handle_action}
                />;
              </CardContent>;
            </Card>;
          </TabsContent>;

          <TabsContent value="pending">;
            <FraudTabContent tab_value="pending" />;
          </TabsContent>;
          <TabsContent value="dangerous">;
            <FraudTabContent tab_value="dangerous" />;
          </TabsContent>;
          <TabsContent value="actioned">;
            <FraudTabContent tab_value="actioned" />;
          </TabsContent>;
        </Tabs>;
      </div>;
    </AppLayout>);
}
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

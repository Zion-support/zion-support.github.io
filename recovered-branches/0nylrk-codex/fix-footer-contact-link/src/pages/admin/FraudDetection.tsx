

import React, { useState, useEffect } from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client";
import { FraudFlag, FraudStats } from "@/types/fraud";
// Import refactored components

import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";
import { supabase } from "@/integrations/supabase/client",;
import { FraudFlag, FraudStats } from "@/types/fraud",;

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

    total_flags: 0
    pending_flags: 0
    suspicious_count: 0
    dangerous_count: 0
    false_positives: 0
    actioned_count: 0})
  // Fetch fraud flags
  const fetchFraudFlags = async () => {
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
                <FraudFlagsTable


import React, { useState, useEffect } from "react",""
import { AppLayout } from "@/layout/AppLayout",""
import { SEO } from "@/components/SEO",""
import { Card, CardContent } from "@/components/ui/card",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",""
import { Button } from "@/components/ui/button",""
import { toast } from "@/hooks/use-toast",""
import { supabase } from "@/integrations/supabase/client";""
import { FraudFlag, FraudStats } from "@/types/fraud";"
// Import refactored components;"
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";""
import { supabase } from "@/integrations/supabase/client",""
import { FraudFlag, FraudStats } from "@/types/fraud","
// Import refactored components;

import {
  // TODO: Implement
}
  FraudStatsCards,
  FraudFilters,

  FraudFlagsTable,
  FraudTabContent;"
} from "@/components/admin/fraud-detection","
export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),

  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

  const [flags, setFlags] = useState<FraudFlag[]>([]);

  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]);

  const [statusFilter, setStatusFilter] = useState<string | null>(null);
</string>
  const [severityFilter, setSeverityFilter] = useState<string | null>(null);
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null);


  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),

  const [stats, setStats] = useState<FraudStats>({
)
  const [flags, setFlags] = useState<FraudFlag[]>([]),;

  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),;

  const [statusFilter, setStatusFilter] = useState<string | null>(null),;
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),;
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),;
  const [stats, setStats] = useState<FraudStats>({;

      return <div>Something went wrong.</div>;)



    <AppLayout>

      <SEO;"
        title="Fraud Detection | Admin Dashboard"""
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace""
      />
"
      <div className="container mx-auto px-4 py-8">"
</div>"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">"
</div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">"
</h1>
            </h1>"
            <p className="text-zion-slate-light mt-2">"
</p>
          <div className="mt-4 md:mt-0">"
    <AppLayout>;

        title="Fraud Detection | Admin Dashboard";""
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace";"
      />;
      <div className="container mx-auto px-4 py-8">;"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;"
          <div>;
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;"
            </h1>;"
            <p className="text-zion-slate-light mt-2">;"
            </p>;
          </div>;"
          <div className="mt-4 md:mt-0">;"
            <Button;
              onClick={fetchFraudFlags} ;"
              className="bg-zion-purple hover:bg-zion-purple-light";"
              onClick={fetchFraudFlags} "
              className="bg-zion-purple hover:bg-zion-purple-light""
              disabled={isLoading}
            >

            
        <FraudStatsCards stats={stats} />
</Button>

            </Button>
          </div>
        </div>
        <FraudStatsCards stats={stats} />

</FraudStatsCards>"
        <Tabs defaultValue="all" className="mb-8">"

          <TabsList>
            <TabsTrigger value="all">All Flags""
            <TabsTrigger value="pending">Pending Review""
            <TabsTrigger value="dangerous">Dangerous""
            <TabsTrigger value="actioned">Actioned"
          


          

          <TabsContent value="all" className="mt-6">"




              disabled={isLoading}>;

            ;
          </div>;
        <FraudStatsCards stats={stats} />;

        <Tabs defaultValue="all" className="mb-8">;"
  const [flags, set_flags] = useState < FraudFlag[]>([]);
  const [filtered_flags, setFilteredFlags] = useState < FraudFlag[]>([]);
  const [is_loading, setIsLoading] = useState (true);"
  const [search_query, setSearchQuery] = useState ("");"
  const [status_filter, setStatusFilter] = useState < string | null>(null);
  const [severity_filter, setSeverityFilter] = useState < string | null>(null);
  const [contentTypeFilter, setContentTypeFilter] = useState < string | null>(null);
  const [stats, set_stats] = useState < FraudStats>({
    total_flags: 0,
    pending_flags: 0,
    suspicious_count: 0,
    dangerous_count: 0,
    false_positives: 0,)
    actioned_count: 0}),
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {
    setIsLoading (true);
    try {
  // TODO: Implement
      const { data, error } = await supabase;"
        .from ("fraud_flags");""
        .select ("*");""
        .order ("timestamp", { ascending: false }),"
      // Check condition;
if (throw error) {
  $2;
      set_flags (data || []);
      setFilteredFlags (data || []);
      // Calculate stats;
      const new_stats: FraudStats = {,
  total_flags: data?.length || 0,"
        pending_flags: data?.filter (flag => flag.status === 'pending').length || 0,
        suspicious_count: data?.filter (flag => flag.severity === 'suspicious').length || 0,
        dangerous_count: data?.filter (flag => flag.severity === 'dangerous').length || 0,
        false_positives: data?.filter (flag => flag.is_false_positive).length || 0,
        actioned_count: data?.filter (flag => flag.action_taken && flag.action_taken !== 'none').length || 0},
      set_stats (new_stats);
    } catch (error) {
      console.error ("Error fetching fraud flags:", error);"
      toast ({"
        title: "Error",""
        description: "Failed to load fraud detection data",")"
        variant: "destructive"});"
    } finally {
  // TODO: Implement
      setIsLoading (false);
  useEffect (() => {
    fetchFraudFlags ();
  }, []);
  // Apply filters;
    let result = [...flags];
    // Apply search filter;
    // Check condition;
if ( {) {
      const query = search_query.toLowerCase ();
      result = result.filter ()
        (flag) =>;
          flag.user_email?.toLowerCase ().includes (query) ||;
          flag.content_excerpt.toLowerCase ().includes (query) ||;
          flag.reason.toLowerCase ().includes (query));
    // Apply status filter;
    // Check condition;
      result = result.filter ((flag) => flag.status === status_filter);
    // Apply severity filter;
    // Check condition;
      result = result.filter ((flag) => flag.severity === severity_filter);
    // Apply content type filter;
    // Check condition;
      result = result.filter ((flag) => flag.content_type === contentTypeFilter);
    setFilteredFlags (result);
  }, [flags, search_query, status_filter, severity_filter, contentTypeFilter]);
;"
  const handle_action = async (flag_id: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
  // TODO: Implement
      const status = action === 'ignore' ? 'ignored' : 'actioned';
      const action_taken = action === 'ignore' ? 'none' : action,
      const { error } = await supabase;
        .from ("fraud_flags");"
        .update ({
          status;
          action_taken: action_taken,)
          reviewed_at: new Date ().toISOString (),"
          // In a real app, you'd get the current user's ID;
          reviewed_by: 'admin';
        });
        .eq ("id", flag_id);"
      // Check condition;
        title: "Flag updated",")"
        description: `Action '${action}' was applied successfully.`}),
      // Refresh the data;
      console.error ("Error updating fraud flag:", error);"
        description: "Failed to update flag",")"
  const reset_filters = () =>: any {
  // TODO: Implement
}"
    setSearchQuery ("");"
    setStatusFilter (null);
    setSeverityFilter (null);
    setContentTypeFilter (null);
  const has_filters = !!(search_query || status_filter || severity_filter || contentTypeFilter);
  return (

      <div className="container mx - auto px - 4 py - 8">;"
        <div className="flex flex - col md:flex - row items - start md:items - center justify - between mb - 8">;"
            <h1 className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent">;"
            <p className="text - zion - slate - light mt - 2">;"
          <div className="mt - 4 md:mt - 0">;"
              on_click={fetchFraudFlags}"
              className="bg - zion - purple hover:bg - zion - purple - light";"
              disabled={is_loading}
            >;

        <Tabs default_value="all" className="mb - 8">;"


          <TabsList>;
            <TabsTrigger value="all">All Flags;""
            <TabsTrigger value="pending">Pending Review;""
            <TabsTrigger value="dangerous">Dangerous;""
            <TabsTrigger value="actioned">Actioned;"
          <TabsContent value="all" className="mt - 6">;"

            <FraudFilters;
              search_query={search_query}
              setSearchQuery={setSearchQuery}
              status_filter={status_filter}
              setStatusFilter={setStatusFilter}
              severity_filter={severity_filter}
              setSeverityFilter={setSeverityFilter}
              contentTypeFilter={contentTypeFilter}
              setContentTypeFilter={setContentTypeFilter}


            <Card>;
              <CardContent className="p-0">;"


                <FraudFlagsTable;
pr-12325
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

</FraudFlagsTable>
            <Card>;
</Card>"
              <CardContent className="p - 0">;"
</CardContent>

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

              reset_filters={reset_filters}

              <CardContent className="p - 0">;"

                  flags={filtered_flags}
                  is_loading={is_loading}
                  has_filters={has_filters}
                  on_action={handle_action}


</FraudFlagsTable>
              </CardContent>;
            </Card>;

          </TabsContent>;"
          <TabsContent value="pending">;"
            <FraudTabContent tab_value="pending" />;"

          <TabsContent value="dangerous">;"
            <FraudTabContent tab_value="dangerous" />;"

          <TabsContent value="actioned">;"
            <FraudTabContent tab_value="actioned" />;"

      </div>;)
    );"
            <FraudTabContent tabValue="pending" />;"

            <FraudTabContent tabValue="dangerous" />;"

            <FraudTabContent tabValue="actioned" />;"

FraudTabContent const [stats, setStats] = useState<FraudStats> ({
Fraud Detection | Admin Dashboard"description=" Monitor and manage fraud detection alerts on the Zion AI Marketplace"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Fraud Detection </h1> <p className=" text-zion-slate-light mt-2"> Monitor suspicious activities and protect the marketplace from fraud and abuse </p> </div> <div className=" mt-4 md:mt-0"> <Button > Refresh Data  </div> </div> {"
}<FraudStatsCards stats= {
  stats;"
}/> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Flags <TabsTrigger value=" pending">Pending Review <TabsTrigger value=" dangerous">Dangerous <TabsTrigger value=" actioned">Actioned  <FraudFilters searchQuery= {"
}<Card> <CardContent className=" p-0"> <FraudFlagsTable flags= {"
)"
}/>    <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/>  <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/>  <TabsContent value=" actioned"> <FraudTabContent tabValue=" actioned" />   </div> )""`;
pr-12325
</Card>)"
}/> </CardContent> </Card> </TabsContent> <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/> </TabsContent> <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/> </TabsContent> <TabsContent value=" actioned"> <FraudTabContent tabValue=" actioned" /> </TabsContent> </Tabs> </div> </AppLayout>)""


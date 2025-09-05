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

      if (error) throw error,

      setFlags(data || []),
      setFilteredFlags(data || []),
      
      // Calculate stats
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
    }
;
    // Apply status filter;
    if (statusFilter) {;
      result = result.filter((flag) => flag.status === statusFilter);
    }
;
    // Apply severity filter;
    if (severityFilter) {;
      result = result.filter((flag) => flag.severity === severityFilter);
    }
;
    // Apply content type filter;
    if (contentTypeFilter) {;
      result = result.filter((flag) => flag.content_type === contentTypeFilter);
    }
<<<<<<< HEAD

    setFilteredFlags(result)
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),

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

      if (error) throw error,

      toast({
<<<<<<< HEAD
        title: "Flag updated",
        description: `Action '${action}' was applied successfully.`}),
=======
        title: &quot;Flag updated&quot;,
        description: `Action '${action}' was applied successfully.`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Refresh the data
      fetchFraudFlags()
      
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
    }
  },

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
              onClick={fetchFraudFlags} 
              className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              disabled={isLoading}
            >;
              Refresh Data;
            </Button>;
          </div>;
        </div>;
        {/* Stats Cards */}
<<<<<<< HEAD
        <FraudStatsCards stats={stats} />
        
        <Tabs defaultValue=&quot;all&quot; className=&quot;mb-8&quot;>
          <TabsList>
            <TabsTrigger value=&quot;all&quot;>All Flags</TabsTrigger>
            <TabsTrigger value=&quot;pending&quot;>Pending Review</TabsTrigger>
            <TabsTrigger value=&quot;dangerous&quot;>Dangerous</TabsTrigger>
            <TabsTrigger value=&quot;actioned&quot;>Actioned</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;all&quot; className=&quot;mt-6&quot;>
=======
        <FraudStatsCards stats={stats} />;
        <Tabs defaultValue="all" className="mb-8">;
          <TabsList>;
            <TabsTrigger value="all">All Flags</TabsTrigger>;
            <TabsTrigger value="pending">Pending Review</TabsTrigger>;
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>;
            <TabsTrigger value="actioned">Actioned</TabsTrigger>;
          </TabsList>;
          <TabsContent value="all" className="mt-6">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            {/* Search and Filters */}
            <FraudFilters;
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              severityFilter={severityFilter}
              setSeverityFilter={setSeverityFilter}
              contentTypeFilter={contentTypeFilter}
              setContentTypeFilter={setContentTypeFilter}
              resetFilters={resetFilters}
            />;
            {/* Flags Table */}
<<<<<<< HEAD
            <Card>
              <CardContent className=&quot;p-0&quot;>
                <FraudFlagsTable
=======
            <Card>;
              <CardContent className="p-0">;
                <FraudFlagsTable;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  flags={filteredFlags}
                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}
<<<<<<< HEAD
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
=======
                />;
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value="pending">;
            <FraudTabContent tabValue="pending" />;
          </TabsContent>;
          <TabsContent value="dangerous">;
            <FraudTabContent tabValue="dangerous" />;
          </TabsContent>;
          <TabsContent value="actioned">;
            <FraudTabContent tabValue="actioned" />;
          </TabsContent>;
        </Tabs>;
      </div>;
    </AppLayout>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
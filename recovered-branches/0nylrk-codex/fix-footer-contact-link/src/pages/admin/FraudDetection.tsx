<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {FraudFlag, FraudStats} from "@/types/fraud";

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Import refactored components
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
import { supabase } from "@/integrations/supabase/client",;
import { FraudFlag, FraudStats } from "@/types/fraud",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

// Import refactored components
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {
=======

import React, { useState, useEffect } from "react","
import { AppLayout } from "@/layout/AppLayout","
import { SEO } from "@/components/SEO","
import { Card, CardContent } from "@/components/ui/card","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { Button } from "@/components/ui/button","
import { toast } from "@/hooks/use-toast",";
import { supabase } from "@/integrations/supabase/client";"
import { FraudFlag, FraudStats } from "@/types/fraud";
// Import refactored components;
"
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";"
import { supabase } from "@/integrations/supabase/client","
import { FraudFlag, FraudStats } from "@/types/fraud",

;
// Import refactored components;
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  FraudStatsCards,
  FraudFilters,
  FraudFlagsTable,
  FraudTabContent"
} from "@/components/admin/fraud-detection",

export default function FraudDetection() {}
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [stats, setStats] = useState<FraudStats>({
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;
  const [stats, setStats] = useState<FraudStats>({};
    total_flags: 0;
    pending_flags: 0;
    suspicious_count: 0;
    dangerous_count: 0;
    false_positives: 0;
    actioned_count: 0})
// Fetch fraud flags
const fetchFraudFlags = async () => {
    setIsLoading(true);
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("fraud_flags")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        .select("*")
<<<<<<< HEAD
=======
        .select("*")

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .order("timestamp", { ascending: false }),

      if (error) throw error,

      setFlags(data || []),
      setFilteredFlags(data || []),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Calculate stats
      const newStats: FraudStats = {
        total_flags: data?.length |0
        pending_flags: data?.filter(flag => flag.status === 'pending').length |0
        suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length |0
        dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length |0
        false_positives: data?.filter(flag => flag.is_false_positive).length |0

        actioned_count: data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length |0}
      setStats(newStats)
    } catch (error) {}
"
      console.error("Error fetching fraud flags:", error);

      toast({"
        title: "Error""
        description: "Failed to load fraud detection data""
        variant: "destructive"})
    } finally {}
      setIsLoading(false)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState, useEffect } from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { FraudFlag, FraudStats } from "@/types/fraud",;
// Import refactored components;
import {;
  FraudStatsCards,;
  FraudFilters,;
  FraudFlagsTable,;
FraudTabContent;"
} from "@/components/admin/fraud-detection",;
export default function FraudDetection() { return null; }
    actioned_count: 0}),;
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {;
    setIsLoading(true),;
    try {;
const { data, error } = await supabase;"
        .from("fraud_flags");"
        .select("*");"
        .order("timestamp", { ascending: false }),;
      if (error) throw error,;
      setFlags(data || []),;
      setFilteredFlags(data || []),;
      // Calculate stats;
      const newStats: FraudStats = {;
total_flags: data?.length || 0,;'
        pending_flags: data?.filter(flag => flag.status === 'pending').length || 0,;'
        suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length || 0,;'
        dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length || 0,;
        false_positives: data?.filter(flag => flag.is_false_positive).length || 0,;'
        actioned_count: data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length || 0},;
      setStats(newStats);
    } catch (error) {;"
      console.error("Error fetching fraud flags:", error),;
      toast({;"
        title: "Error",;"
        description: "Failed to load fraud detection data",;"
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    // Apply status filter;
    if (statusFilter) {}
      result = result.filter((flag) => flag.status === statusFilter)
    }
    // Apply severity filter;
    if (severityFilter) {}
      result = result.filter((flag) => flag.severity === severityFilter)
    }
    // Apply content type filter;
    if (contentTypeFilter) {}
      result = result.filter((flag) => flag.content_type === contentTypeFilter)
    }
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }

static getDerivedStateFromError(error) {}
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}"
import React, { useState, useEffect } from "react";"
import {AppLayout} from "@/layout/AppLayout";"
import {SEO} from "@/components/SEO";"
import {Card, CardContent} from "@/components/ui/card";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {Button} from "@/components/ui/button";"
import {toast} from "@/hooks/use-toast";"
import {supabase} from "@/integrations/supabase/client";"
import {FraudFlag, FraudStats} from "@/types/fraud";

// Import refactored components;"
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";

export default function FraudDetection() { return null; }
    actioned_count: 0}),;

setFilteredFlags(result)
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),

  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
    try {
      const status = action === 'ignore' ? 'ignored' : 'actioned',
      const actionTaken = action === 'ignore' ? 'none' : action,

      const { error } = await supabase
        .from("fraud_flags")
        .update({
          status,
          action_taken: actionTaken,
          reviewed_at: new Date().toISOString(),
          // In a real app, you'd get the current user's ID
          reviewed_by: 'admin'
        })
        .eq("id", flagId),

      if (error) throw error,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      toast({
=======
        .select("*")      toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        .select("*")      toast({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      toast({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        title: "Flag updated"
=======

      toast({"
        title: "Flag updated"'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: `Action '${action}' was applied successfully.`})
      // Refresh the data;
      fetchFraudFlags()
} catch (error) {
      console.error("Error updating fraud flag:", error);
      console.error("Error updating fraud flag:", error),
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
},

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),

const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <AppLayout>
      <SEO"
        title="Fraud Detection | Admin Dashboard""
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace"
      />"
      <div className="container mx-auto px-4 py-8">"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>"
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Fraud Detection;
            </h1>"
            <p className="text-zion-slate-light mt-2">
              Monitor suspicious activities and protect the marketplace from fraud and abuse;
            </p>
          </div>"
          <div className="mt-4 md:mt-0">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
    setFilteredFlags(result);
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),;'
  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {;
    try {;'
      const status = action === 'ignore' ? 'ignored' : 'actioned',;'
      const actionTaken = action === 'ignore' ? 'none' : action,;
      const { error } = await supabase;"
=======

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

;
    setFilteredFlags(result);
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),;
  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {;
    try {;
      const status = action === 'ignore' ? 'ignored' : 'actioned',;
      const actionTaken = action === 'ignore' ? 'none' : action,;
      const { error } = await supabase;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .from("fraud_flags");
        .update({;
          status,;
          action_taken: actionTaken,;
reviewed_at: new Date().toISOString(),;'
          // In a real app, you'd get the current user's ID;'
          reviewed_by: 'admin';
        });"
        .eq("id", flagId),;
      if (error) throw error,;
      toast({;"
        title: "Flag updated",;'`
        description: `Action '${action}' was applied successfully.`}),;
      // Refresh the data;
      fetchFraudFlags();
    } catch (error) {;"
      console.error("Error updating fraud flag:", error),;
      toast({;"
        title: "Error",;"
        description: "Failed to update flag",;"
        variant: "destructive"});
    }
  },;
  const resetFilters = () => {;"
    setSearchQuery(""),;
    setStatusFilter(null),;
    setSeverityFilter(null),;
    setContentTypeFilter(null);
  };
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);
  return (;
    <AppLayout>;
<SEO;"
        title="Fraud Detection | Admin Dashboard";"
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace";
      />;"
      <div className="container mx-auto px-4 py-8">;"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;
          <div>;"
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Fraud Detection;
            </h1>;"
            <p className="text-zion-slate-light mt-2">;
              Monitor suspicious activities and protect the marketplace from fraud and abuse;
            </p>;
          </div>;"
          <div className="mt-4 md:mt-0">;
            <Button;
              onClick={fetchFraudFlags} ;"
              className="bg-zion-purple hover:bg-zion-purple-light";
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Button 
              onClick={fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              disabled={isLoading}
            >
              Refresh Data;
            </Button>
          </div>
        </div>
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />"
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>"
            <TabsTrigger value="all">All Flags</TabsTrigger>"
            <TabsTrigger value="pending">Pending Review</TabsTrigger>"
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>"
            <TabsTrigger value="actioned">Actioned</TabsTrigger>
<<<<<<< HEAD
          </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          <TabsContent value="all" className="mt-6">

"
          <TabsContent value="all" className="mt-6">

"
          <TabsContent value="all" className="mt-6">

      toast({;"
        title: "Flag updated",;'`
        description: `Action '${action}' was applied successfully.`}),;
=======
          </TabsList>        title: "Flag updated",,
  description: `Action '${action}' was applied successfully.`}),;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
<TabsContent value="all" className="mt-6">

        .eq("id", flagId);
      if (error) throw error;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <TabsContent value="all" className="mt-6">
      toast({;
        title: "Flag updated",;
        description: `Action '${action}' was applied successfully.`}),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      // Refresh the data;
      fetchFraudFlags();

    } catch (error) {;"
      console && console.error("Error updating fraud flag:", error);
toast({;
<<<<<<< HEAD
        title: "Error",,
  description: "Failed to update flag",;
=======
        title: "Error",,
  description: "Failed to update flag",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant: "destructive"});
    }
  };

  const resetFilters = () => {;"
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)
};

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);

  return (
    <AppLayout>;
      <SEO"
        title="Fraud Detection | Admin Dashboard" "
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace" 
      />;

<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">;
=======

"
      <div className="container mx-auto px-4 py-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;
          <div>;"
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Fraud Detection;
            </h1>;"
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <TabsList>;
            <TabsTrigger value="all">All Flags</TabsTrigger>;
            <TabsTrigger value="pending">Pending Review</TabsTrigger>;
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>;

            <TabsTrigger value="actioned">Actioned</TabsTrigger>;
          </TabsList>;

=======
            <TabsTrigger value="actioned">Actioned</TabsTrigger>;
          </TabsList>;

          <TabsContent value="all" className="mt - 6">;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {/* Search and Filters */}

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

{/* Flags Table */}

=======
            />;

            {/* Flags Table */}
            <Card>;
              <CardContent className="p-0">;
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
            {/* Flags Table */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Card>;
              <CardContent className="p-0">;
                <FraudFlagsTable

=======

            <Card>;
              <CardContent className="p-0">;"

                <FraudFlagsTable;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  flags={filteredFlags}

                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              reset_filters={reset_filters}
            />;
            {/* Flags Table */}
            <Card>;
<CardContent className="p-0">;
=======
              <CardContent className="p-0">;

</FraudFlagsTable>
            <Card>;
</Card>"
              <CardContent className="p - 0">;"
</CardContent>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <FraudFlagsTable;
                  flags={filtered_flags}
                  is_loading={is_loading}
                  has_filters={has_filters}
                  reset_filters={reset_filters}
                  on_action={handle_action}

=======
resetFilters={resetFilters}
            />;
            ;
            {/* Flags Table */}
            <Card>;
              <CardContent className="p-0">;
                <FraudFlagsTable;
                  flags={filteredFlags}                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
}

          ;"
          <TabsContent value="pending">;"
            <FraudTabContent tabValue="pending" />;
          </TabsContent>;
          ;"
          <TabsContent value="dangerous">;"
            <FraudTabContent tabValue="dangerous" />;
          </TabsContent>;
          ;"
          <TabsContent value="actioned">;"
            <FraudTabContent tabValue="actioned" />;
          </TabsContent>;
        </Tabs>;
      </div>;
    </AppLayout>;
),; //Import refactored components import {};
  FraudStatsCards;
FraudFilters;
FraudFlagsTable;
FraudTabContent const [stats, setStats] = useState<FraudStats> ({}
  total flags: 0;
pending flags: 0;
suspicious count: 0;
dangerous count: 0;
false positives: 0;
actioned count: 0;
});
//Fetch fraud flags const fetchFraudFlags = async () => {}
  setIsLoading (true);
try {}
  const {}
  data, error;
}= await supabase setFlags (data || []);
setFilteredFlags (data || []);
//Calculate stats;
}finally {}
  setIsLoading (false) 
}

}
;

};
useEffect ( () => {}
  fetchFraudFlags () 
}, []);
//Apply filters useEffect ( () => {}
  let result = [...flags];
//Apply search filter if (searchQuery) {}
  const query = searchQuery.toLowerCase ();
result = result.filter ( (flag) => flag.user email?.toLowerCase () .includes (query) || flag.content excerpt.toLowerCase () .includes (query) || flag.reason.toLowerCase () .includes (query) ) 
}//Apply status filter if (statusFilter) {}
  result = result.filter ( (flag) => flag.status === statusFilter) 
}//Apply severity filter if (severityFilter) {}
  result = result.filter ( (flag) => flag.severity === severityFilter) 
}//Apply content type filter if (contentTypeFilter) {}
  result = result.filter ( (flag) => flag.content type === contentTypeFilter) 
}
}, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]);
}catch (error) {}
  toast ({"
  title: "Error", description: "Failed to update flag", variant: "destructive" 
});
}
};
const hasFilters = !! (searchQuery || statusFilter || severityFilter || contentTypeFilter);"
Fraud Detection | Admin Dashboard"description=" Monitor and manage fraud detection alerts on the Zion AI Marketplace"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Fraud Detection </h1> <p className=" text-zion-slate-light mt-2"> Monitor suspicious activities and protect the marketplace from fraud and abuse </p> </div> <div className=" mt-4 md:mt-0"> <Button > Refresh Data </Button> </div> </div> {}
  /* Stats Cards */ 
}<FraudStatsCards stats= {}
  stats "
}/> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Flags</TabsTrigger> <TabsTrigger value=" pending">Pending Review</TabsTrigger> <TabsTrigger value=" dangerous">Dangerous</TabsTrigger> <TabsTrigger value=" actioned">Actioned</TabsTrigger> </TabsList> <FraudFilters searchQuery= {}
  searchQuery;
}setSearchQuery= {}
  setSearchQuery;
}statusFilter= {}
  statusFilter;
}setStatusFilter= {}
  setStatusFilter;
}severityFilter= {}
  severityFilter;
}setSeverityFilter= {}
  setSeverityFilter;
}contentTypeFilter= {}
  contentTypeFilter;
}setContentTypeFilter= {}
  setContentTypeFilter;
}resetFilters= {}
  resetFilters;
}/> {}
  /* Flags Table */ "
}<Card> <CardContent className=" p-0"> <FraudFlagsTable flags= {}
  filteredFlags;
}isLoading= {}
  isLoading;
}hasFilters= {}
  hasFilters;
}resetFilters= {}
  resetFilters;
}onAction= {}
  handleAction "
}<FraudStatsCards stats= {
  stats 
}/> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Flags</TabsTrigger> <TabsTrigger value=" pending">Pending Review</TabsTrigger> <TabsTrigger value=" dangerous">Dangerous</TabsTrigger> <TabsTrigger value=" actioned">Actioned</TabsTrigger> </TabsList> <FraudFilters searchQuery= {
  searchQuery 
}setSearchQuery= {
  setSearchQuery 
}statusFilter= {
  statusFilter 
}setStatusFilter= {
  setStatusFilter 
}severityFilter= {
  severityFilter 
}setSeverityFilter= {
  setSeverityFilter 
}contentTypeFilter= {
  contentTypeFilter 
}setContentTypeFilter= {
  setContentTypeFilter 
}resetFilters= {
  resetFilters 
}/> {
  /* Flags Table */ 
}<Card> <CardContent className=" p-0"> <FraudFlagsTable flags= {
  filteredFlags 
}isLoading= {
  isLoading 
}hasFilters= {
  hasFilters 
}resetFilters= {
  resetFilters 
}onAction= {
  handleAction 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}/> </CardContent> </Card> </TabsContent> <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/> </TabsContent> <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/> </TabsContent> <TabsContent value=" actioned"> <FraudTabContent tabValue=" actioned" /> </TabsContent> </Tabs> </div> </AppLayout>) 
}
}
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  stats;"
}/> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Flags <TabsTrigger value=" pending">Pending Review <TabsTrigger value=" dangerous">Dangerous <TabsTrigger value=" actioned">Actioned  <FraudFilters searchQuery= {"
}<Card> <CardContent className=" p-0"> <FraudFlagsTable flags= {"
)"
}/>    <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/>  <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/>  <TabsContent value=" actioned"> <FraudTabContent tabValue=" actioned" />   </div> )""`;
pr-12325
</Card>)"
}/> </CardContent> </Card> </TabsContent> <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/> </TabsContent> <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/> </TabsContent> <TabsContent value=" actioned"> <FraudTabContent tabValue=" actioned" /> </TabsContent> </Tabs> </div> </AppLayout>)""

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

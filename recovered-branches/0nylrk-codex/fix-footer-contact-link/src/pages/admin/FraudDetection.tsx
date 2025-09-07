<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState, useEffect } from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {FraudFlag, FraudStats} from "@/types/fraud";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { FraudFlag, FraudStats } from "@/types/fraud",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


export default function FraudDetection() {}
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
  // Fetch fraud flags
<<<<<<< HEAD
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
<<<<<<< HEAD


<<<<<<< HEAD
=======
        .order("timestamp", { ascending: false })
      if (error) throw error;
      setFlags(data |[]);
      setFilteredFlags(data |[]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {}
    setIsLoading(true);

    try {}
      const { data, error } = await supabase"
        .from("fraud_flags")"
        .select("*")
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        .select("*")


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .order("timestamp", { ascending: false }),

      if (error) throw error,

      setFlags(data || []),
      setFilteredFlags(data || []),
      


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======

      // Calculate stats;
      const newStats: FraudStats = {}
        total_flags: data?.length |0;
        pending_flags: data?.filter(flag => flag.status === 'pending').length |0'
        suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length |0'
        dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length |0;
        false_positives: data?.filter(flag => flag.is_false_positive).length |0'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        actioned_count: data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length |0}
      setStats(newStats)
    } catch (error) {
      console.error("Error fetching fraud flags:", error);
      console.error("Error fetching fraud flags:", error);
      toast({
        title: "Error"
        description: "Failed to load fraud detection data"
        variant: "destructive"})
    } finally {
      setIsLoading(false)


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState, useEffect } from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
<<<<<<< HEAD
=======
"
import React, { useState, useEffect } from "react",;"
import { AppLayout } from "@/layout/AppLayout",;"
import { SEO } from "@/components/SEO",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Button } from "@/components/ui/button",;"
import { toast } from "@/hooks/use-toast",;"
import { supabase } from "@/integrations/supabase/client",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { FraudFlag, FraudStats } from "@/types/fraud",;
// Import refactored components;
import {;
  FraudStatsCards,;
  FraudFilters,;
  FraudFlagsTable,;
<<<<<<< HEAD
  FraudTabContent;"
} from "@/components/admin/fraud-detection",;
export default function FraudDetection() { return null; }
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    actioned_count: 0}),;
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {;
    setIsLoading(true),;
    try {;
<<<<<<< HEAD
      const { data, error } = await supabase;"
        .from("fraud_flags");"
        .select("*");"
=======
      const { data, error } = await supabase;
        .from("fraud_flags");
        .select("*");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .order("timestamp", { ascending: false }),;
      if (error) throw error,;
      setFlags(data || []),;
      setFilteredFlags(data || []),;
      // Calculate stats;
      const newStats: FraudStats = {;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


    }
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

class ErrorBoundary extends React.Component {}
  constructor(props) {}
=======


    }
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

class ErrorBoundary extends React.Component {
  constructor(props) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    super(props);
    this.state = { hasError: false };
  }
  
<<<<<<< HEAD
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    actioned_count: 0}),;



<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
    } catch (error) {
      console.error("Error updating fraud flag:", error);
      console.error("Error updating fraud flag:", error),
      toast({
        title: "Error"
        description: "Failed to update flag"
        variant: "destructive"})
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const resetFilters = () => {
=======
    } catch (error) {}
"
      console.error("Error updating fraud flag:", error),

      toast({"
        title: "Error""
        description: "Failed to update flag""
        variant: "destructive"})
    }
  const resetFilters = () => {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <Button
              onClick={fetchFraudFlags}
              className="bg-zion-purple hover:bg-zion-purple-light"
            <Button 
              onClick={fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setSearchQuery(""),;
    setStatusFilter(null),;
    setSeverityFilter(null),;
    setContentTypeFilter(null);
  };
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);
  return (;
    <AppLayout>;
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
          </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          <TabsContent value="all" className="mt-6">
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          </TabsList>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


          

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          </TabsList>        title: "Flag updated",,
  description: `Action '${action}' was applied successfully.`}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      // Refresh the data;
      fetchFraudFlags();

    } catch (error) {;"
      console && console.error("Error updating fraud flag:", error);
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Error",,
  description: "Failed to update flag",;
=======
      toast({;"
        title: "Error",;"
        description: "Failed to update flag",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Error",;
        description: "Failed to update flag",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
.order("timestamp", { ascending:false }),;
;
      if (error) throw error,;
;
      setFlags(data || []),;
      setFilteredFlags(data || []),;
      ;
      // Calculate stats;
      const newStats:FraudStats = {;
        total_flags:data?.length || 0,;
        pending_flags:data?.filter(flag => flag.status === 'pending').length || 0,;
        suspicious_count:data?.filter(flag => flag.severity === 'suspicious').length || 0,;
        dangerous_count:data?.filter(flag => flag.severity === 'dangerous').length || 0,;
        false_positives:data?.filter(flag => flag.is_false_positive).length || 0,;
        actioned_count:data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length || 0},;
      setStats(newStats),;
      ;
    } catch (error) {;
      console.error("Error fetching fraud flags:", error),;
      toast({;
        title:"Error",;
        description:"Failed to load fraud detection data",;
        variant:"destructive"}),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  useEffect(() => {;
    fetchFraudFlags(),;
  }, []),;
;
  // Apply filters;
  useEffect(() => {;
    let result = [...flags],;
;
    // Apply search filter;
    if (searchQuery) {;
      const query = searchQuery.toLowerCase(),;
      result = result.filter(;
        (flag) =>;
          flag.user_email?.toLowerCase().includes(query) ||;
          flag.content_excerpt.toLowerCase().includes(query) ||;
          flag.reason.toLowerCase().includes(query);
      ),;
    }
;
    // Apply status filter;
    if (statusFilter) {;
      result = result.filter((flag) => flag.status === statusFilter),;
    }
;
    // Apply severity filter;
    if (severityFilter) {;
      result = result.filter((flag) => flag.severity === severityFilter),;
    }
;
    // Apply content type filter;
    if (contentTypeFilter) {;
      result = result.filter((flag) => flag.content_type === contentTypeFilter),;
    }
;
    setFilteredFlags(result),;
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),;
;
  const handleAction = async (flagId:string, action:'warning' | 'suspension' | 'ban' | 'ignore') => {;
    try {;
      const status = action === 'ignore' ? 'ignored' :'actioned',;
      const actionTaken = action === 'ignore' ? 'none' :action,;
      ;
      const { error } = await supabase;
        .from("fraud_flags");
        .update({;
          status,;
          action_taken:actionTaken,;
          reviewed_at:new Date().toISOString(),;
          // In a real app, you'd get the current user's ID;
          reviewed_by:'admin';
        });
        .eq("id", flagId),;
;
      if (error) throw error,;
;
      toast({;
        title:"Flag updated",;
        description:`Action '${action}' was applied successfully.`}),;
      ;
      // Refresh the data;
      fetchFraudFlags(),;
      ;
    } catch (error) {;
      console.error("Error updating fraud flag:", error),;
      toast({;
        title:"Error",;
        description:"Failed to update flag",;
        variant:"destructive"}),;
    }
  },;
;
  const resetFilters = () => {;
    setSearchQuery(""),;
    setStatusFilter(null),;
    setSeverityFilter(null),;
    setContentTypeFilter(null),;
  },;
;
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),;
;
  return (;
    <AppLayout>;
      <SEO ;
        title="Fraud Detection | Admin Dashboard" ;
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace" ;
      />;
      ;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

"
          <div className="mt-4 md:mt-0">;
            <Button;
              onClick={fetchFraudFlags} "
              className="bg-zion-purple hover:bg-zion-purple-light"
              disabled={isLoading}>;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

          <div className="mt-4 md:mt-0">;
            <Button
              onClick={fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"
              disabled={isLoading}>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
          <div className="mt-4 md:mt-0">;
            <Button ;
              onClick={fetchFraudFlags} ;
              className="bg-zion-purple hover:bg-zion-purple-light";
              disabled={isLoading}
            >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Refresh Data;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
              Refresh Data;
            </Button>;
          </div>;
        </div>;
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
        <Tabs default_value="all" className="mb - 8">;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        ;
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
        ;
        <Tabs defaultValue="all" className="mb-8">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        .eq("id", flagId);
      if (error) throw error;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        .eq("id", flagId);
      if (error) throw error;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <TabsList>;
            <TabsTrigger value="all">All Flags</TabsTrigger>;
            <TabsTrigger value="pending">Pending Review</TabsTrigger>;
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>;
<<<<<<< HEAD
=======


        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
"
        <Tabs defaultValue="all" className="mb-8">;'
import React, { useState, useEffect } from './react';'
import { AppLayout } from '@/layout / AppLayout';'
import { SEO } from '@/components / SEO';'
import { Card, CardContent } from '@/components / ui / card';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { Button } from '@/components / ui / button';'
import { toast } from '@/hooks / use - toast';'
import { supabase } from '@/integrations / supabase / client';'
import { FraudFlag, FraudStats } from '@/types / fraud';
// Import refactored components;'
import { FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent } from '@/components / admin / fraud - detection';
;
export default /**;
 * FraudDetection - Function description;
 */
function FraudDetection() {}
  const [flags, set_flags] = useState < FraudFlag[]>([]);
  const [filtered_flags, setFilteredFlags] = useState < FraudFlag[]>([]);
  const [is_loading, setIsLoading] = useState (true);"
  const [search_query, setSearchQuery] = useState ("");
  const [status_filter, setStatusFilter] = useState < string | null>(null);
  const [severity_filter, setSeverityFilter] = useState < string | null>(null);
  const [contentTypeFilter, setContentTypeFilter] = useState < string | null>(null);
  const [stats, set_stats] = useState < FraudStats>({}
    total_flags: 0,
    pending_flags: 0,
    suspicious_count: 0,
    dangerous_count: 0,
    false_positives: 0,
    actioned_count: 0}),
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {}
    setIsLoading (true);
    try {}
      const { data, error } = await supabase;"
        .from ("fraud_flags");"
        .select ("*");"
        .order ("timestamp", { ascending: false }),
      // Check condition;
if (throw error) {}
  $2;
}
      set_flags (data || []);
      setFilteredFlags (data || []);
;
      // Calculate stats;
      const new_stats: FraudStats = {}
        total_flags: data?.length || 0,'
        pending_flags: data?.filter (flag => flag.status === 'pending').length || 0,'
        suspicious_count: data?.filter (flag => flag.severity === 'suspicious').length || 0,'
        dangerous_count: data?.filter (flag => flag.severity === 'dangerous').length || 0,
        false_positives: data?.filter (flag => flag.is_false_positive).length || 0,'
        actioned_count: data?.filter (flag => flag.action_taken && flag.action_taken !== 'none').length || 0},
      set_stats (new_stats);
    } catch (error) {"
      console.error ("Error fetching fraud flags:", error);
      toast ({"
        title: "Error","
        description: "Failed to load fraud detection data","
        variant: "destructive"});
    } finally {}
      setIsLoading (false);
    }
  }
;
  useEffect (() => {}
    fetchFraudFlags ();
  }, []);
;
  // Apply filters;
  useEffect (() => {}
    let result = [...flags];
;
    // Apply search filter;
    // Check condition;
if ( {) {}
  $2;
}
      const query = search_query.toLowerCase ();
      result = result.filter (
        (flag) =>;
          flag.user_email?.toLowerCase ().includes (query) ||;
          flag.content_excerpt.toLowerCase ().includes (query) ||;
          flag.reason.toLowerCase ().includes (query));
    }
    // Apply status filter;
    // Check condition;
if ( {) {}
  $2;
}
      result = result.filter ((flag) => flag.status === status_filter);
    }
    // Apply severity filter;
    // Check condition;
if ( {) {}
  $2;
}
      result = result.filter ((flag) => flag.severity === severity_filter);
    }
    // Apply content type filter;
    // Check condition;
if ( {) {}
  $2;
}
      result = result.filter ((flag) => flag.content_type === contentTypeFilter);
    }
    setFilteredFlags (result);
  }, [flags, search_query, status_filter, severity_filter, contentTypeFilter]);
;'
  const handle_action = async (flag_id: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {}
    try {'
      const status = action === 'ignore' ? 'ignored' : 'actioned';'
      const action_taken = action === 'ignore' ? 'none' : action,
      const { error } = await supabase;"
        .from ("fraud_flags");
        .update ({}
          status;
          action_taken: action_taken,
          reviewed_at: new Date ().toISOString (),'
          // In a real app, you'd get the current user's ID;'
          reviewed_by: 'admin';
        });"
        .eq ("id", flag_id);
;
      // Check condition;
if (throw error) {}
  $2;
}
      toast ({"
        title: "Flag updated",'`
        description: `Action '${action}' was applied successfully.`}),
      // Refresh the data;
      fetchFraudFlags ();
    } catch (error) {"
      console.error ("Error updating fraud flag:", error);
      toast ({"
        title: "Error","
        description: "Failed to update flag","
        variant: "destructive"});
    }
  }
;
  const reset_filters = () =>: any {"
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
      <SEO;"
        title="Fraud Detection | Admin Dashboard";"
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace";
      />;"
      <div className="container mx - auto px - 4 py - 8">;"
        <div className="flex flex - col md:flex - row items - start md:items - center justify - between mb - 8">;
          <div>;"
            <h1 className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent">;
              Fraud Detection;
            </h1>;"
            <p className="text - zion - slate - light mt - 2">;
              Monitor suspicious activities and protect the marketplace from fraud and abuse;
            </p>;
          </div>;"
          <div className="mt - 4 md:mt - 0">;
            <Button;
              on_click={fetchFraudFlags}"
              className="bg - zion - purple hover:bg - zion - purple - light";
              disabled={is_loading}
            >;
              Refresh Data;
            </Button>;
          </div>;
        </div>;
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;"
        <Tabs default_value="all" className="mb - 8">;

"
        .eq("id", flagId);
      if (error) throw error;

          <TabsList>;"
            <TabsTrigger value="all">All Flags</TabsTrigger>;"
            <TabsTrigger value="pending">Pending Review</TabsTrigger>;"
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
          <TabsContent value="all" className="mt-6">;
            {/* Search and Filters */}
            <FraudFilters;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              setStatusFilter={setStatusFilter}
              severity_filter={severity_filter}
              setSeverityFilter={setSeverityFilter}
              contentTypeFilter={contentTypeFilter}
              setContentTypeFilter={setContentTypeFilter}

<<<<<<< HEAD

            {/* Flags Table */}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
            <Card>;"
              <CardContent className="p-0">;

                <FraudFlagsTable;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
                />
=======
/>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
              <CardContent className="p-0">;
=======

              reset_filters={reset_filters}
            />;
            {/* Flags Table */}
            <Card>;"
              <CardContent className="p - 0">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <CardContent className="p - 0">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
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
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
=======
}

}
;
          ;
          <TabsContent value="pending">;
            <FraudTabContent tabValue="pending" />;
          </TabsContent>;
          ;
          <TabsContent value="dangerous">;
            <FraudTabContent tabValue="dangerous" />;
          </TabsContent>;
          ;
          <TabsContent value="actioned">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <FraudTabContent tabValue="actioned" />;
          </TabsContent>;
        </Tabs>;
      </div>;
    </AppLayout>;
<<<<<<< HEAD
  ),; //Import refactored components import {};
  FraudStatsCards;
FraudFilters;
FraudFlagsTable;
FraudTabContent const [stats, setStats] = useState<FraudStats> ({}
=======
  ),; //Import refactored components import {
  FraudStatsCards;
FraudFilters;
FraudFlagsTable;
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  total flags: 0;
pending flags: 0;
suspicious count: 0;
dangerous count: 0;
false positives: 0;
<<<<<<< HEAD
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
=======
actioned count: 0 
});
//Fetch fraud flags const fetchFraudFlags = async () => {
  setIsLoading (true);
try {
  const {
  data, error 
}= await supabase setFlags (data || []);
setFilteredFlags (data || []);
//Calculate stats 
}finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  setIsLoading (false) 
}

}
;

};
<<<<<<< HEAD
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
=======
useEffect ( () => {
  fetchFraudFlags () 
}, []);
//Apply filters useEffect ( () => {
  let result = [...flags];
//Apply search filter if (searchQuery) {
  const query = searchQuery.toLowerCase ();
result = result.filter ( (flag) => flag.user email?.toLowerCase () .includes (query) || flag.content excerpt.toLowerCase () .includes (query) || flag.reason.toLowerCase () .includes (query) ) 
}//Apply status filter if (statusFilter) {
  result = result.filter ( (flag) => flag.status === statusFilter) 
}//Apply severity filter if (severityFilter) {
  result = result.filter ( (flag) => flag.severity === severityFilter) 
}//Apply content type filter if (contentTypeFilter) {
  result = result.filter ( (flag) => flag.content type === contentTypeFilter) 
}
}, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]);
}catch (error) {
  toast ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: "Error", description: "Failed to update flag", variant: "destructive" 
});
}
};
<<<<<<< HEAD
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
=======
const hasFilters = !! (searchQuery || statusFilter || severityFilter || contentTypeFilter);
Fraud Detection | Admin Dashboard"description=" Monitor and manage fraud detection alerts on the Zion AI Marketplace"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Fraud Detection </h1> <p className=" text-zion-slate-light mt-2"> Monitor suspicious activities and protect the marketplace from fraud and abuse </p> </div> <div className=" mt-4 md:mt-0"> <Button > Refresh Data </Button> </div> </div> {
  /* Stats Cards */ 
=======
Fraud Detection | Admin Dashboard"description=" Monitor and manage fraud detection alerts on the Zion AI Marketplace"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Fraud Detection </h1> <p className=" text-zion-slate-light mt-2"> Monitor suspicious activities and protect the marketplace from fraud and abuse </p> </div> <div className=" mt-4 md:mt-0"> <Button > Refresh Data  </div> </div> {"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState, useEffect } from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Card, CardContent } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client";
import { FraudFlag, FraudStats } from "@/types/fraud";
// Import refactored components

// Import refactored components

// Import refactored components

import {
=======
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client";
import { FraudFlag, FraudStats } from "@/types/fraud";
// Import refactored components
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

import { supabase } from "@/integrations/supabase/client";
import { FraudFlag, FraudStats } from "@/types/fraud";
// Import refactored components

import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";
import { supabase } from "@/integrations/supabase/client",
import { FraudFlag, FraudStats } from "@/types/fraud",

=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Import refactored components

// Import refactored components

import {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  FraudStatsCards,
  FraudFilters,
  FraudFlagsTable,
  FraudTabContent"
} from "@/components/admin/fraud-detection",

<<<<<<< HEAD
export default function FraudDetection() {}
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

=======
<<<<<<< HEAD
export default function FraudDetection() {}
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [stats, setStats] = useState<FraudStats>({

  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),
<<<<<<< HEAD

  const [stats, setStats] = useState<FraudStats>({

;
  const [stats, setStats] = useState<FraudStats>({};
    total_flags: 0;
    pending_flags: 0;
    suspicious_count: 0;
    dangerous_count: 0;
    false_positives: 0;
    actioned_count: 0})

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
    } catch (error) {}
"
      console.error("Error fetching fraud flags:", error);

      toast({"
        title: "Error""
        description: "Failed to load fraud detection data""
        variant: "destructive"})
    } finally {}
      setIsLoading(false)

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

    actioned_count: 0}),;
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {;
    setIsLoading(true),;
    try {;

        .order("timestamp", { ascending: false }),;
      if (error) throw error,;
      setFlags(data || []),;
      setFilteredFlags(data || []),;
      // Calculate stats;
      const newStats: FraudStats = {;

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

    super(props);
    this.state = { hasError: false };
  }

      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }

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

      toast({

        title: "Flag updated"

        description: `Action '${action}' was applied successfully.`})
      // Refresh the data;
      fetchFraudFlags()

  const resetFilters = () => {
=======
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [stats, setStats] = useState<FraudStats>({
>>>>>>> merged-prs-20250907-203621

    total_flags: 0
    pending_flags: 0
    suspicious_count: 0
    dangerous_count: 0
    false_positives: 0
    actioned_count: 0})
  // Fetch fraud flags
  const fetchFraudFlags = async () => {
<<<<<<< HEAD
    setIsLoading($2);
=======
<<<<<<< HEAD
    setIsLoading(true),
=======
    setIsLoading(true);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
    try {
      const { data, error } = await supabase
        .from("fraud_flags")
        .select("*")
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const [stats, setStats] = useState<FraudStats>({

;
  const [stats, setStats] = useState<FraudStats>({};
    total_flags: 0;
    pending_flags: 0;
    suspicious_count: 0;
    dangerous_count: 0;
    false_positives: 0;
    actioned_count: 0})

<<<<<<< HEAD
        .order("timestamp", { ascending: false })
      if (error) throw error;
      setFlags(data |[]);
      setFilteredFlags(data |[]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .order("timestamp", { ascending: false }),

      if (error) throw error,

      setFlags(data || []),
      setFilteredFlags(data || []),
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Calculate stats
      const newStats: FraudStats = {
        total_flags: data?.length |0
        pending_flags: data?.filter(flag => flag.status === 'pending').length |0
        suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length |0
        dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length |0
        false_positives: data?.filter(flag => flag.is_false_positive).length |0

        actioned_count: data?.filter(flag => flag.action_taken && flag.action_taken !== 'none').length |0}
      setStats(newStats)
<<<<<<< HEAD
    } catch (error) {}
"
      console.error("Error fetching fraud flags:", error);

      toast({"
        title: "Error""
        description: "Failed to load fraud detection data""
        variant: "destructive"})
    } finally {}
      setIsLoading(false)
=======
    } catch (error) {
<<<<<<< HEAD
      console.error("Error fetching fraud flags:", error),
=======
      console.error("Error fetching fraud flags:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Error"
        description: "Failed to load fraud detection data"
        variant: "destructive"})
    } finally {
      setIsLoading(false)

<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
      result = result.filter(
        (flag) =>
          flag.user_email?.toLowerCase().includes(query) |
          flag.content_excerpt.toLowerCase().includes(query) |
          flag.reason.toLowerCase().includes(query)
      )
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

    actioned_count: 0}),;
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {;
    setIsLoading(true),;
    try {;

        .order("timestamp", { ascending: false }),;
      if (error) throw error,;
      setFlags(data || []),;
      setFilteredFlags(data || []),;
      // Calculate stats;
      const newStats: FraudStats = {;

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
=======

<<<<<<< HEAD
    super(props);
    this.state = { hasError: false };
  }

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  render() {
    if (this.state.hasError) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this.props.children;
  }
<<<<<<< HEAD

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
<<<<<<< HEAD
// Import refactored components;
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";
=======

// Import refactored components;
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    actioned_count: 0}),;
<<<<<<< HEAD
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

>>>>>>> merged-prs-20250907-203621
    setFilteredFlags(result)
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),

  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
    try {
<<<<<<< HEAD
      const status = $2;
      const actionTaken = $2;
=======
      const status = action === 'ignore' ? 'ignored' : 'actioned',
      const actionTaken = action === 'ignore' ? 'none' : action,
      
>>>>>>> merged-prs-20250907-203621
      const { error } = await supabase
        .from("fraud_flags")
        .update({
          status,
          action_taken: actionTaken,
<<<<<<< HEAD
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
=======
          reviewed_at: new Date().toISOString(),
          // In a real app, you'd get the current user's ID
          reviewed_by: 'admin'
        })
        .eq("id", flagId),

      if (error) throw error,
=======

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

<<<<<<< HEAD
      if (error) throw error,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      toast({

        title: "Flag updated"

        description: `Action '${action}' was applied successfully.`})
      // Refresh the data;
      fetchFraudFlags()
<<<<<<< HEAD
=======
    } catch (error) {
<<<<<<< HEAD
      console.error("Error updating fraud flag:", error),
=======
      console.error("Error updating fraud flag:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Error"
        description: "Failed to update flag"
        variant: "destructive"})
    }


  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const resetFilters = () => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)

  },

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
  }
  },

  const resetFilters = () => {
    setSearchQuery(""),
    setStatusFilter(null),
    setSeverityFilter(null),
    setContentTypeFilter(null)
  }
  const hasFilters = !!(searchQuery |statusFilter |severityFilter |contentTypeFilter);
  },

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
            <Button
              onClick={fetchFraudFlags}
              className="bg-zion-purple hover:bg-zion-purple-light"
            <Button 
              onClick={fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"
>>>>>>> merged-prs-20250907-203621
;
    setFilteredFlags(result);
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),;
  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {;
    try {;
      const status = action === 'ignore' ? 'ignored' : 'actioned',;
<<<<<<< HEAD
=======
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {;
    setIsLoading(true);
import React, { useState, useEffect } from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Card, CardContent } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { FraudFlag, FraudStats } from "@/types/fraud",;
;
// Import refactored components;
import {;
  FraudStatsCards,;
  FraudFilters,;
  FraudFlagsTable,;
  FraudTabContent;
} from "@/components/admin/fraud-detection",;
;
export default function FraudDetection() {;
  const [flags, setFlags] = useState<FraudFlag[]>([]),;
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [statusFilter, setStatusFilter] = useState<string | null>(null),;
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),;
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),;
  const [stats, setStats] = useState<FraudStats>({;
    total_flags:0,;
    pending_flags:0,;
    suspicious_count:0,;
    dangerous_count:0,;
    false_positives:0,;
    actioned_count:0}),;
;
  // Fetch fraud flags;
  const fetchFraudFlags = async () => {;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase;
        .from("fraud_flags");
        .select("*");
>>>>>>> merged-prs-20250907-203621
      const actionTaken = action === 'ignore' ? 'none' : action,;
      const { error } = await supabase;
        .from("fraud_flags");
        .update({;
<<<<<<< HEAD
=======
          status;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
    setFilteredFlags(result);
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),;'
  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {;
    try {;'
      const status = action === 'ignore' ? 'ignored' : 'actioned',;'
      const actionTaken = action === 'ignore' ? 'none' : action,;
      const { error } = await supabase;"

        .from("fraud_flags");
        .update({;
          status,;
          action_taken: actionTaken,;

    setSearchQuery(""),;
    setStatusFilter(null),;
    setSeverityFilter(null),;
    setContentTypeFilter(null);
  };
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);
  return (;
    <AppLayout>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            <Button 
              onClick={fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              disabled={isLoading}
            >
              Refresh Data;
            </Button>
          </div>
        </div>
        {/* Stats Cards */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <FraudStatsCards stats={stats} />
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Flags</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>
            <TabsTrigger value="actioned">Actioned</TabsTrigger>
          </TabsList>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <FraudStatsCards stats={stats} />"
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>"
            <TabsTrigger value="all">All Flags</TabsTrigger>"
            <TabsTrigger value="pending">Pending Review</TabsTrigger>"
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>"
            <TabsTrigger value="actioned">Actioned</TabsTrigger>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          


          <TabsContent value="all" className="mt-6">

        .eq("id", flagId);
      if (error) throw error;
      toast({;
        title: "Flag updated",;
        description: `Action '${action}' was applied successfully.`}),;
      // Refresh the data;
      fetchFraudFlags();
=======

          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <TabsContent value="all" className="mt-6">
      toast({;
        title: "Flag updated",
        description: `Action '${action}' was applied successfully.`}),;

      // Refresh the data;
      fetchFraudFlags();

<<<<<<< HEAD
    } catch (error) {;"
=======
<<<<<<< HEAD
    } catch (error) {;"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      console && console.error("Error updating fraud flag:", error);

        variant: "destructive"});
    }
  };
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const resetFilters = () => {;"
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const resetFilters = () => {;
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null);
  };
<<<<<<< HEAD
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <AppLayout>;
      <SEO"
        title="Fraud Detection | Admin Dashboard" "
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace" 
      />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="container mx-auto px-4 py-8">;

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

=======
<<<<<<< HEAD
          ;
          <div className="mt-4 md:mt-0">;
            <Button ;
              onClick={fetchFraudFlags} ;
              className="bg-zion-purple hover:bg-zion-purple-light";
              disabled={isLoading}
=======

        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
        ;
        <Tabs defaultValue="all" className="mb-8">;
<<<<<<< HEAD

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              Refresh Data;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
        ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
        ;
        <Tabs defaultValue="all" className="mb-8">;
<<<<<<< HEAD

=======
=======
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
        <Tabs default_value="all" className="mb - 8">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <TabsList>;
            <TabsTrigger value="all">All Flags</TabsTrigger>;
            <TabsTrigger value="pending">Pending Review</TabsTrigger>;
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>;

            <TabsTrigger value="actioned">Actioned</TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          ;
          <TabsContent value="all" className="mt-6">;
            {/* Search and Filters */}
            <FraudFilters;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              setStatusFilter={setStatusFilter}
              severity_filter={severity_filter}
              setSeverityFilter={setSeverityFilter}
              contentTypeFilter={contentTypeFilter}
              setContentTypeFilter={setContentTypeFilter}
<<<<<<< HEAD

            <Card>;
              <CardContent className="p-0">;
=======
<<<<<<< HEAD
          
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                <FraudFlagsTable
                  flags={filteredFlags}
=======
=======

            <Card>;
              <CardContent className="p-0">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <FraudFlagsTable

                  flags={filteredFlags}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              reset_filters={reset_filters}
            />;
            {/* Flags Table */}
            <Card>;

                <FraudFlagsTable;
                  flags={filtered_flags}
                  is_loading={is_loading}
                  has_filters={has_filters}
                  reset_filters={reset_filters}
                  on_action={handle_action}
<<<<<<< HEAD

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                />;
              </CardContent>;
            </Card>;
          </TabsContent>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <FraudTabContent tabValue="actioned" />;
          </TabsContent>;
        </Tabs>;
      </div>;
    </AppLayout>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  total flags: 0;
pending flags: 0;
suspicious count: 0;
dangerous count: 0;
false positives: 0;

  setIsLoading (false) 
}

}
;

};

<<<<<<< HEAD
=======
=======
  ),; //Import refactored components import {
  FraudStatsCards;
FraudFilters;
FraudFlagsTable;
FraudTabContent const [stats, setStats] = useState<FraudStats> ({
  total flags: 0;
pending flags: 0;
suspicious count: 0;
dangerous count: 0;
false positives: 0;
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
  setIsLoading (false) 
}

}
;

<<<<<<< HEAD
};
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  title: "Error", description: "Failed to update flag", variant: "destructive" 
});
}
};
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
const hasFilters = !! (searchQuery || statusFilter || severityFilter || contentTypeFilter);
Fraud Detection | Admin Dashboard"description=" Monitor and manage fraud detection alerts on the Zion AI Marketplace"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Fraud Detection </h1> <p className=" text-zion-slate-light mt-2"> Monitor suspicious activities and protect the marketplace from fraud and abuse </p> </div> <div className=" mt-4 md:mt-0"> <Button > Refresh Data </Button> </div> </div> {
  /* Stats Cards */ 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> </CardContent> </Card> </TabsContent> <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/> </TabsContent> <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/> </TabsContent> <TabsContent value=" actioned"> <FraudTabContent tabValue=" actioned" /> </TabsContent> </Tabs> </div> </AppLayout>) 
}
}
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

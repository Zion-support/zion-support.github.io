import React, { useState, useEffect } from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Card, CardContent } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { FraudFlag, FraudStats } from "@/types/fraud",
// Import refactored components,
import {
  FraudStatsCards,
  FraudFilters,
  FraudFlagsTable,
  FraudTabContent
} from "@/components/admin/fraud-detection",

export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [searchQuery, setSearchQuery] = useState(""),
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),  const [stats, setStats] = useState<FraudStats>({
    totalflags: 0,
    pendingflags: 0,
    suspiciouscount: 0,
    dangerouscount: 0,
    falsepositives: 0,
    actionedcount: 0}),

  // Fetch fraud flags,
const fetchFraudFlags = async () => {
    setIsLoading(true),
    try {
      const { data, error } = await supabase
        .from("fraudflags")
        .select("*")
        .order("timestamp", { ascending: false }),import React, {useState, useEffect} from "react";

// Import refactored components,
import {FraudStatsCards, FraudFilters, FraudFlagsTable, FraudTabContent} from "@/components/admin/fraud-detection";

export default function FraudDetection() {const [flags, setFlags] = useState<FraudFlag[]>([]);
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [severityFilter, setSeverityFilter] = useState<string | null>(null);
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null);
  const [stats, setStats] = useState<FraudStats>({
    totalflags: 0, pending_flags: 0, suspicious_count: 0, dangerous_count: 0, false_positives: 0, actioned_count: 0});

  // Fetch fraud flags,
const fetchFraudFlags = async () => {setIsLoading(true);
    try {
      const { data, error} = await supabase
        .from("fraudflags")
        .select("*")
        .order("timestamp", {ascending: false});

      if (error) throw error,

      setFlags(data || []),
      setFilteredFlags(data || []),
      
      // Calculate stats,
const newStats: FraudStats = {
        totalflags: data?.length || 0,
        pendingflags: data?.filter(flag => flag.status === 'pending').length || 0,
        suspiciouscount: data?.filter(flag => flag.severity === 'suspicious').length || 0,
        dangerouscount: data?.filter(flag => flag.severity === 'dangerous').length || 0,
        falsepositives: data?.filter(flag => flag.isfalse_positive).length || 0,
        actionedcount: data?.filter(flag => flag.actiontaken && flag.actiontaken !== 'none').length || 0},
      setStats(newStats)
      
    } catch (error) {
      console.error("Error fetching fraud flags:", error),
      toast({
        title: "Error",
        description: "Failed to load fraud detection data",
        variant: "destructive"})    } finally {
      setIsLoading(false)
    }
  },

  useEffect(() => {
    fetchFraudFlags()
  }, []),

  // Apply filters,
useEffect(() => {
    let result = [...flags],

    // Apply search filter,
if (searchQuery) {
      const query = searchQuery.toLowerCase(),
      result = result.filter(
        (flag) =>
          flag.useremail?.toLowerCase().includes(query) ||
          flag.contentexcerpt.toLowerCase().includes(query) ||
          flag.reason.toLowerCase().includes(query)
      )
    }

    // Apply status filter,
if (statusFilter) {
      result = result.filter((flag) => flag.status === statusFilter)
    }

    // Apply severity filter,
if (severityFilter) {
      result = result.filter((flag) => flag.severity === severityFilter)
    }

    // Apply content type filter,
if (contentTypeFilter) {
      result = result.filter((flag) => flag.contenttype === contentTypeFilter)
    }
      const newStats: FraudStats = {total_flags: data?.length || 0, pending_flags: data?.filter(flag => flag.status === 'pending').length || 0, suspicious_count: data?.filter(flag => flag.severity === 'suspicious').length || 0, dangerous_count: data?.filter(flag => flag.severity === 'dangerous').length || 0, false_positives: data?.filter(flag => flag.isfalse_positive).length || 0, actioned_count: data?.filter(flag => flag.actiontaken && flag.actiontaken !== 'none').length || 0};
      setStats(newStats)
      
    } catch (error) {toast({
        title: "Error", description: "Failed to load fraud detection data", variant: "destructive"})
    } finally {setIsLoading(false)}
  };

  useEffect_(() => {fetchFraudFlags()}, []);

  // Apply filters,
useEffect_(() => {let result = [...flags];

    // Apply search filter,
if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(_(flag) =>
          flag.useremail?.toLowerCase().includes(query) ||
          flag.contentexcerpt.toLowerCase().includes(query) ||
          flag.reason.toLowerCase().includes(query)
      )}

    // Apply status filter,
if (statusFilter) {result = result.filter(_(flag) => flag.status === statusFilter)}

    // Apply severity filter,
if (severityFilter) {result = result.filter(_(flag) => flag.severity === severityFilter)}

    // Apply content type filter,
if (contentTypeFilter) {result = result.filter(_(flag) => flag.contenttype === contentTypeFilter)}

    setFilteredFlags(result)
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),

  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
    try {
      const status = action === 'ignore' ? 'ignored' : 'actioned',
      const actionTaken = action === 'ignore' ? 'none' : action,
      
      const { error } = await supabase
        .from(&quot;fraudflags&quot;)
        .update({
          status,
          actiontaken: actionTaken,
          reviewedat: new Date().toISOString(),
          // In a real app, you'd get the current user's ID,
reviewedby: 'admin'
        })
        .eq("id", flagId),  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {try {
      const status = action === 'ignore' ? 'ignored' : 'actioned';
      const actionTaken = action === 'ignore' ? 'none' : action;
      
      const { error} = await supabase
        .from("fraudflags")
        .update({status, action_taken: actionTaken, reviewed_at: new Date().toISOString(), _// In a real app, you'd get the current user's ID,
reviewedby: 'admin'})
        .eq("id", flagId);

      if (error) throw error,

      toast({
        title: "Flag updated",
        description: `Action '${action}' was applied successfully.`}),      toast({title: "Flag updated", description: `Action '${action}' was applied successfully.`});
      
      // Refresh the data,
fetchFraudFlags()
      
    } catch (error) {
      console.error("Error updating fraud flag:", error),
      toast({
        title: "Error",
        description: "Failed to update flag",
        variant: "destructive"})    } catch (error) {toast({
        title: "Error", description: "Failed to update flag", variant: "destructive"})
    }
  },

  const resetFilters = () => {
    setSearchQuery(""),
    setStatusFilter(null),
    setSeverityFilter(null),
    setContentTypeFilter(null)
  },
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),
  const resetFilters = () => {setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)};

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);

  return (
    <AppLayout>
      <SEO,
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
            <Button,
onClick={fetchFraudFlags} 
              className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;
              disabled={isLoading}            >
              Refresh Data
            </Button>
          </div>
        </div>
        
        {_/* Stats Cards */}
        <FraudStatsCards stats={stats} />
        
        <Tabs defaultValue=&quot;all&quot; className=&quot;mb-8&quot;>
          <TabsList>
            <TabsTrigger value=&quot;all&quot;>All Flags</TabsTrigger>
            <TabsTrigger value=&quot;pending&quot;>Pending Review</TabsTrigger>
            <TabsTrigger value=&quot;dangerous&quot;>Dangerous</TabsTrigger>
            <TabsTrigger value=&quot;actioned&quot;>Actioned</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;all&quot; className=&quot;mt-6&quot;>
            {/* Search and Filters */}            <FraudFilters,
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
            
            {_/* Flags Table */}
            <Card>
              <CardContent className=&quot;p-0&quot;>
                <FraudFlagsTable,
flags={filteredFlags}
                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}
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

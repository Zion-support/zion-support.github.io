<<<<<<< HEAD


=======

import React, { useState, useEffect } from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {FraudFlag, FraudStats} from "@/types/fraud";


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




>>>>>>> origin/cursor/delete-old-data-records-6bba
// Import refactored components

// Import refactored components

import {

  FraudStatsCards,
  FraudFilters,
  FraudFlagsTable,
  FraudTabContent"
} from "@/components/admin/fraud-detection",

<<<<<<< HEAD



=======

export default function FraudDetection() {}
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),


<<<<<<< HEAD

  const [stats, setStats] = useState<FraudStats>({


    total_flags: 0
    pending_flags: 0
    suspicious_count: 0
    dangerous_count: 0
    false_positives: 0
    actioned_count: 0})
  // Fetch fraud flags
  const fetchFraudFlags = async () => {


    try {
      const { data, error } = await supabase
        .from("fraud_flags")
        .select("*")


=======
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

  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


=======
        .order("timestamp", { ascending: false })
      if (error) throw error;
      setFlags(data |[]);
      setFilteredFlags(data |[]);
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .order("timestamp", { ascending: false }),

      if (error) throw error,

      setFlags(data || []),
      setFilteredFlags(data || []),
<<<<<<< HEAD

      

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    } catch (error) {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
    super(props);
    this.state = { hasError: false };
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

    actioned_count: 0}),;

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

=======

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


    actioned_count: 0}),;
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

    setFilteredFlags(result)
  }, [flags, searchQuery, statusFilter, severityFilter, contentTypeFilter]),

  const handleAction = async (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => {
    try {

      if (error) throw error,

      toast({

        title: "Flag updated"

        description: `Action '${action}' was applied successfully.`})
      // Refresh the data;
      fetchFraudFlags()


  const resetFilters = () => {

    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)

  },

  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter),


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


            <Button 
              onClick={fetchFraudFlags} 
              className="bg-zion-purple hover:bg-zion-purple-light"

>>>>>>> origin/cursor/delete-old-data-records-6bba
              disabled={isLoading}
            >
              Refresh Data;
            </Button>
          </div>
        </div>
        {/* Stats Cards */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <FraudStatsCards stats={stats} />"
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>"
            <TabsTrigger value="all">All Flags</TabsTrigger>"
            <TabsTrigger value="pending">Pending Review</TabsTrigger>"
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>"
            <TabsTrigger value="actioned">Actioned</TabsTrigger>


          <TabsContent value="all" className="mt-6">
      toast({;
        title: "Flag updated",
        description: `Action '${action}' was applied successfully.`}),;

      // Refresh the data;
      fetchFraudFlags();


<<<<<<< HEAD

    } catch (error) {;

=======
    } catch (error) {;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      console && console.error("Error updating fraud flag:", error);

        variant: "destructive"});
    }
  };
<<<<<<< HEAD

=======
  const resetFilters = () => {;"
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null)
};
  const resetFilters = () => {;
    setSearchQuery("");
    setStatusFilter(null);
    setSeverityFilter(null);
    setContentTypeFilter(null);
  };
  const hasFilters = !!(searchQuery || statusFilter || severityFilter || contentTypeFilter);
>>>>>>> origin/cursor/delete-old-data-records-6bba


  return (
    <AppLayout>;
      <SEO"
        title="Fraud Detection | Admin Dashboard" "
        description="Monitor and manage fraud detection alerts on the Zion AI Marketplace" 
      />;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

            >;
              Refresh Data;
            </Button>;
          </div>;
        </div>;
        ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Stats Cards */}
        <FraudStatsCards stats={stats} />;
        ;
        <Tabs defaultValue="all" className="mb-8">;


          <TabsList>;
            <TabsTrigger value="all">All Flags</TabsTrigger>;
            <TabsTrigger value="pending">Pending Review</TabsTrigger>;
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>;

            <TabsTrigger value="actioned">Actioned</TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
              setStatusFilter={setStatusFilter}
              severity_filter={severity_filter}
              setSeverityFilter={setSeverityFilter}
              contentTypeFilter={contentTypeFilter}
              setContentTypeFilter={setContentTypeFilter}

<<<<<<< HEAD

=======
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
                <FraudFlagsTable
                  flags={filteredFlags}
                <FraudFlagsTable

                  flags={filteredFlags}

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

                />;
              </CardContent>;
            </Card>;
          </TabsContent>;
<<<<<<< HEAD

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
=======


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

>>>>>>> origin/cursor/delete-old-data-records-6bba

            <FraudTabContent tabValue="actioned" />;
          </TabsContent>;
        </Tabs>;
      </div>;
    </AppLayout>;
<<<<<<< HEAD

  ),; //Import refactored components import {
  FraudStatsCards;
FraudFilters;
FraudFlagsTable;
FraudTabContent const [stats, setStats] = useState<FraudStats> ({
=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  total flags: 0;
pending flags: 0;
suspicious count: 0;
dangerous count: 0;
false positives: 0;
<<<<<<< HEAD
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



=======

  setIsLoading (false) 
}

}
;

};


  title: "Error", description: "Failed to update flag", variant: "destructive" 
});
}
};


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


}/> </CardContent> </Card> </TabsContent> <TabsContent value=" pending"> <FraudTabContent tabValue=" pending"/> </TabsContent> <TabsContent value=" dangerous"> <FraudTabContent tabValue=" dangerous"/> </TabsContent> <TabsContent value=" actioned"> <FraudTabContent tabValue=" actioned" /> </TabsContent> </Tabs> </div> </AppLayout>) 
}
}
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba

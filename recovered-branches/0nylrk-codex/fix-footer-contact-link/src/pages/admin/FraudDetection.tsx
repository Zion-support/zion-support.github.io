

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

import {

  FraudStatsCards,
  FraudFilters,
  FraudFlagsTable,
  FraudTabContent"
} from "@/components/admin/fraud-detection",

export default function FraudDetection() {
  const [flags, setFlags] = useState<FraudFlag[]>([]),
  const [filteredFlags, setFilteredFlags] = useState<FraudFlag[]>([]),

  const [stats, setStats] = useState<FraudStats>({

  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [severityFilter, setSeverityFilter] = useState<string | null>(null),
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(null),

  const [stats, setStats] = useState<FraudStats>({

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
    setIsLoading(true);    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("fraud_flags")
        .select("*")      toast({
        title: "Flag updated"

        description: `Action '${action}' was applied successfully.`})
      // Refresh the data;
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
              Refresh Data;
            </Button>
          </div>
        </div>
        {/* Stats Cards */}


    } catch (error) {;


            <FraudTabContent tab_value="actioned" />;
          </TabsContent>;
        </Tabs>;
      </div>;
    </AppLayout>);
}

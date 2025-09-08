





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





      

    } catch (error) {




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



    } catch (error) {;










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

  ),; //Import refactored components import {
  FraudStatsCards;
FraudFilters;
FraudFlagsTable;
FraudTabContent const [stats, setStats] = useState<FraudStats> ({
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




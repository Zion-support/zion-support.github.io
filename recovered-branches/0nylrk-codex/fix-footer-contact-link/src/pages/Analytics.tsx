

import React, { useState } from "react",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { AnalyticsContainer } from "@/components/analytics/AnalyticsContainer",
import { AnalyticsSummary } from "@/components/analytics/AnalyticsSummary",
import { PageViewsTable } from "@/components/analytics/PageViewsTable",
import { UserBehaviorStats } from "@/components/analytics/UserBehaviorStats",
import { PageViewsChart } from "@/components/analytics/PageViewsChart",
import { ConversionAnalysisChart } from "@/components/analytics/ConversionAnalysisChart";
import { ExportPanel } from "@/components/analytics/ExportPanel";
export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d');

  const { data: pageViewTrends } = useQuery({
    queryKey: ['page-views-trend', timeRange];
    queryFn: async () => {
      // Get daily page views for trend chart

      const days = null;

  return (
    <AnalyticsContainer>
      <AnalyticsSummary />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PageViewsChart
          data={pageViewTrends || []}
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />
        <PageViewsTable />
      </div>
      
      <div className="mb-6">
        <UserBehaviorStats />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ConversionAnalysisChart 
          data={conversionData || []} 
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />
        <ExportPanel />
      </div>
    </AnalyticsContainer>
  )
}
;
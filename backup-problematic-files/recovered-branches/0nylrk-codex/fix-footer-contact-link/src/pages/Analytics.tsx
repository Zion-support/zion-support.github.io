
import React, { useState } from "react",;
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { AnalyticsContainer } from "@/components/analytics/AnalyticsContainer",;
import { AnalyticsSummary } from "@/components/analytics/AnalyticsSummary",;
import { PageViewsTable } from "@/components/analytics/PageViewsTable",;
import { UserBehaviorStats } from "@/components/analytics/UserBehaviorStats",;
import { PageViewsChart } from "@/components/analytics/PageViewsChart",;
import { ConversionAnalysisChart } from "@/components/analytics/ConversionAnalysisChart",;
import { ExportPanel } from "@/components/analytics/ExportPanel",;
;
export default function Analytics() {;
  const [timeRange, setTimeRange] = useState('30d'),;
  ;
  const { data:pageViewTrends } = useQuery({;
    queryKey:['page-views-trend', timeRange],;
    queryFn:async () => {;
      // Get daily page views for trend chart;
      const days = parseInt(timeRange.replace('d', '')),;
      const startDate = new Date(),;
      startDate.setDate(startDate.getDate() - days),;
      ;
      const { data, error } = await supabase;
        .from('analytics_events');
        .select('created_at, path');
        .eq('event_typepage_view');

      const { data, error } = await supabase;
        .from('analytics_events');
        .select('created_at, metadata');
        .eq('event_typeconversion');

          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />;
        <PageViewsTable />;
      </div>;

          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />;

}
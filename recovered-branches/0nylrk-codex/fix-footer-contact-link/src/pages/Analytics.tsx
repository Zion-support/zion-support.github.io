<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

<<<<<<< HEAD

import React, { useState } from "react",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { AnalyticsContainer } from "@/components/analytics/AnalyticsContainer",
import { AnalyticsSummary } from "@/components/analytics/AnalyticsSummary",
import { PageViewsTable } from "@/components/analytics/PageViewsTable",
import { UserBehaviorStats } from "@/components/analytics/UserBehaviorStats",
import { PageViewsChart } from "@/components/analytics/PageViewsChart",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
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
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {AnalyticsContainer} from "@/components/analytics/AnalyticsContainer";
import {AnalyticsSummary} from "@/components/analytics/AnalyticsSummary";
import {PageViewsTable} from "@/components/analytics/PageViewsTable";
import {UserBehaviorStats} from "@/components/analytics/UserBehaviorStats";
import {PageViewsChart} from "@/components/analytics/PageViewsChart";
import {ConversionAnalysisChart} from "@/components/analytics/ConversionAnalysisChart";
import {ExportPanel} from "@/components/analytics/ExportPanel";
export default function Analytics() {;
  const [timeRange, setTimeRange] = useState('30d');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
import { ConversionAnalysisChart } from "@/components/analytics/ConversionAnalysisChart",
import { ExportPanel } from "@/components/analytics/ExportPanel",
export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d'),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { data: pageViewTrends } = useQuery({
    queryKey: ['page-views-trend', timeRange],
    queryFn: async () => {
      // Get daily page views for trend chart

<<<<<<< HEAD
=======
<<<<<<< HEAD

      const days = parseInt(timeRange.replace('d', ''));
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      const days = parseInt(timeRange.replace('d', '')),
      const startDate = new Date(),
      startDate.setDate(startDate.getDate() - days),
      
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      const { data, error } = await supabase
        .from('analytics_events')
        .select('created_at, path')
        .eq('event_typepage_view')
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .gte('created_at', startDate.toISOString());
      if (error) throw error;
      // Group by date
      const viewsByDate = {}
      data?.forEach(view => {
        const date = new Date(view.created_at).toISOString().split('T')[0];
        if (!viewsByDate[date]) viewsByDate[date] = { date, views: 0 }
        viewsByDate[date].views++
      });
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .gte('created_at', startDate.toISOString()),
        
      if (error) throw error,
      
      // Group by date
      const viewsByDate = {},
      data?.forEach(view => {
        const date = new Date(view.created_at).toISOString().split('T')[0],
        if (!viewsByDate[date]) viewsByDate[date] = { date, views: 0 },
        viewsByDate[date].views++
      }),
      
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Fill in missing dates
      const result = [],
      for (let i = 0, i < days, i++) {

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Fill in missing dates
      const result = [],
      for (let i = 0, i < days, i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        const date = new Date(),
        date.setDate(date.getDate() - i),
        const dateStr = date.toISOString().split('T')[0],
        
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        if (viewsByDate[dateStr]) {
          result.push(viewsByDate[dateStr])
        } else {
          result.push({ date: dateStr, views: 0 })
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
export default function Analytics() {;
  const [timeRange, setTimeRange] = useState('30d'),;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
  const { data: pageViewTrends } = useQuery({;
    queryKey: ['page-views-trend', timeRange];
    queryFn: async () => {;
      // Get daily page views for trend chart;
      const days = parseInt(timeRange && timeRange.replace('d', ''));
      const startDate = new Date();
      startDate && startDate.setDate(startDate && startDate.getDate() - days);
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  const { data: pageViewTrends } = useQuery({;
    queryKey: ['page-views-trend', timeRange],;
    queryFn: async () => {;
      // Get daily page views for trend chart;
      const days = parseInt(timeRange.replace('d', '')),;
      const startDate = new Date(),;
      startDate.setDate(startDate.getDate() - days),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const { data, error } = await supabase;
        .from('analytics_events');
        .select('created_at, path');
        .eq('event_typepage_view');
<<<<<<< HEAD
<<<<<<< HEAD
        .gte('created_at', startDate && startDate.toISOString());
      if (error) throw error;
      // Group by date;
      const viewsByDate = {};
      data?.forEach(view => {;
        const date = new Date(view && view.created_at).toISOString().split('T')[0];
        if (!viewsByDate[date]) viewsByDate[date] = { date, views: 0 },;
        viewsByDate[date].views++;
      });
      // Fill in missing dates;
      const result = [];
      for (let i = 0, i < days, i++) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

=======
        .gte('created_at', startDate.toISOString()),;
      if (error) throw error,;
      // Group by date;
      const viewsByDate = {},;
      data?.forEach(view => {;
        const date = new Date(view.created_at).toISOString().split('T')[0],;
        if (!viewsByDate[date]) viewsByDate[date] = { date, views: 0 },;
        viewsByDate[date].views++;
      }),;
      // Fill in missing dates;
      const result = [],;
      for (let i = 0, i < days, i++) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        const date = new Date(),;
        date.setDate(date.getDate() - i),;
        const dateStr = date.toISOString().split('T')[0],;
        if (viewsByDate[dateStr]) {;
          result.push(viewsByDate[dateStr]);
        } else {;
          result.push({ date: dateStr, views: 0 });
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
      }
      return result.sort((a, b) => a.date.localeCompare(b.date))
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
        const date = new Date();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
        date && date.setDate(date && date.getDate() - i);
        const dateStr = date && date.toISOString().split('T')[0];
        if (viewsByDate[dateStr]) {;
          result && result.push(viewsByDate[dateStr]);
        } else {;
          result && result.push({ date: dateStr, views: 0 });
        }
      }
      return result && result.sort((a, b) => a && a.date.localeCompare(b && b.date));
    }
  });
  const { data: conversionData } = useQuery({;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
    queryKey: ['conversion-data', timeRange];
    queryFn: async () => {;
      const days = parseInt(timeRange && timeRange.replace('d', ''));
      const startDate = new Date();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  });
  const { data: conversionData } = useQuery({
    queryKey: ['conversion-data', timeRange];
    queryFn: async () => {
      const days = parseInt(timeRange.replace('d', ''));
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      const { data, error } = await supabase
        .from('analytics_events')
        .select('created_at, metadata')
        .eq('event_typeconversion')
        .gte('created_at', startDate.toISOString());
      if (error) throw error;
      // Group by conversion type and date
      const conversionsByType = {}
      data?.forEach(item => {
        const date = new Date(item.created_at).toISOString().split('T')[0];
        const conversionType = item.metadata?.conversionType |'unknown';
        if (!conversionsByType[conversionType]) {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }),;
  const { data: conversionData } = useQuery({;
    queryKey: ['conversion-data', timeRange],;
    queryFn: async () => {;
      const days = parseInt(timeRange.replace('d', '')),;
      const startDate = new Date(),;
      startDate.setDate(startDate.getDate() - days),;
      const { data, error } = await supabase;
        .from('analytics_events');
        .select('created_at, metadata');
        .eq('event_typeconversion');
        .gte('created_at', startDate.toISOString()),;
      if (error) throw error,;
      // Group by conversion type and date;
      const conversionsByType = {},;
      data?.forEach(item => {;
        const date = new Date(item.created_at).toISOString().split('T')[0],;
        const conversionType = item.metadata?.conversionType || 'unknown',;
        if (!conversionsByType[conversionType]) {;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          conversionsByType[conversionType] = {}
        }
        if (!conversionsByType[conversionType][date]) {
          conversionsByType[conversionType][date] = 0
        }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        conversionsByType[conversionType][date]++
      });
      // Get all dates in range
      const dates = [];
      for (let i = 0, i < days, i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dates.push(date.toISOString().split('T')[0])
      }
      dates.sort();
      // Format data for chart
      return dates.map(date => {
        const result = { date }
        Object.keys(conversionsByType).forEach(type => {
          result[type] = conversionsByType[type][date] |0
        });
        return result
      })
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD

;
=======

        


        conversionsByType[conversionType][date]++
      });
      // Get all dates in range
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
      startDate && startDate.setDate(startDate && startDate.getDate() - days);
=======
        .gte('created_at', startDate.toISOString()),;
        ;
      if (error) throw error,;
      ;
      // Group by date;
      const viewsByDate = {},;
      data?.forEach(view => {;
        const date = new Date(view.created_at).toISOString().split('T')[0],;
        if (!viewsByDate[date]) viewsByDate[date] = { date, views:0 },;
        viewsByDate[date].views++,;
      }),;
      ;
      // Fill in missing dates;
      const result = [],;
      for (let i = 0, i < days, i++) {;
        const date = new Date(),;
        date.setDate(date.getDate() - i),;
        const dateStr = date.toISOString().split('T')[0],;
        ;
        if (viewsByDate[dateStr]) {;
          result.push(viewsByDate[dateStr]),;
        } else {;
          result.push({ date:dateStr, views:0 }),;
        }
      }
      ;
      return result.sort((a, b) => a.date.localeCompare(b.date)),;
    }
  }),;
  ;
  const { data:conversionData } = useQuery({;
    queryKey:['conversion-data', timeRange],;
    queryFn:async () => {;
      const days = parseInt(timeRange.replace('d', '')),;
      const startDate = new Date(),;
      startDate.setDate(startDate.getDate() - days),;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      const { data, error } = await supabase;
        .from('analytics_events');
        .select('created_at, metadata');
        .eq('event_typeconversion');
<<<<<<< HEAD
        .gte('created_at', startDate && startDate.toISOString());
      if (error) throw error;
      // Group by conversion type and date;
      const conversionsByType = {};
      data?.forEach(item => {;
        const date = new Date(item && item.created_at).toISOString().split('T')[0];
        const conversionType = item && item.metadata?.conversionType || 'unknown';
        if (!conversionsByType[conversionType]) {;
          conversionsByType[conversionType] = {}
        }
        if (!conversionsByType[conversionType][date]) {;
          conversionsByType[conversionType][date] = 0;
        }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
        conversionsByType[conversionType][date]++;
      });
      // Get all dates in range;
      const dates = [];
      for (let i = 0, i < days, i++) {;
        const date = new Date();
        date && date.setDate(date && date.getDate() - i);
        dates && dates.push(date && date.toISOString().split('T')[0]);
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
      dates && dates.sort();
      // Format data for chart;
      return dates && dates.map(date => {;
        const result = { date };
        Object && Object.keys(conversionsByType).forEach(type => {;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
        conversionsByType[conversionType][date]++;
      }),;
      // Get all dates in range;
      const dates = [],;
      for (let i = 0, i < days, i++) {;
        const date = new Date(),;
        date.setDate(date.getDate() - i),;
        dates.push(date.toISOString().split('T')[0]);
      }
      dates.sort(),;
      // Format data for chart;
      return dates.map(date => {;
        const result = { date },;
        Object.keys(conversionsByType).forEach(type => {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          result[type] = conversionsByType[type][date] || 0;
        });
        return result;
      });
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

    }

  }),
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (

========
    }
  });
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
    <AnalyticsContainer>;
      <AnalyticsSummary />;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

=======
    }
  }),

  return (
    <AnalyticsContainer>
      <AnalyticsSummary />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <PageViewsChart
          data={pageViewTrends |[]}
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />
        <PageViewsTable />
      </div>
      <div className="mb-6">
        <UserBehaviorStats />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <ConversionAnalysisChart
          data={conversionData |[]}
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        />
        <ExportPanel />
      </div>
    </AnalyticsContainer>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
        <ConversionAnalysisChart 
          data={conversionData || []} 
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        />;
        <ExportPanel />;
      </div>;
    </AnalyticsContainer>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

}
;

=======

========
        <PageViewsChart
          data={pageViewTrends |[]}
=======
        .gte('created_at', startDate.toISOString()),;
        ;
      if (error) throw error,;
      ;
      // Group by conversion type and date;
      const conversionsByType = {},;
      data?.forEach(item => {;
        const date = new Date(item.created_at).toISOString().split('T')[0],;
        const conversionType = item.metadata?.conversionType || 'unknown',;
        ;
        if (!conversionsByType[conversionType]) {;
          conversionsByType[conversionType] = {},;
        }
        ;
        if (!conversionsByType[conversionType][date]) {;
          conversionsByType[conversionType][date] = 0,;
        }
        ;
        conversionsByType[conversionType][date]++,;
      }),;
      ;
      // Get all dates in range;
      const dates = [],;
      for (let i = 0, i < days, i++) {;
        const date = new Date(),;
        date.setDate(date.getDate() - i),;
        dates.push(date.toISOString().split('T')[0]),;
      }
      dates.sort(),;
      ;
      // Format data for chart;
      return dates.map(date => {;
        const result = { date },;
        ;
        Object.keys(conversionsByType).forEach(type => {;
          result[type] = conversionsByType[type][date] || 0,;
        }),;
        ;
        return result,;
      }),;
    }
  }),;
;
  return (;
    <AnalyticsContainer>;
      <AnalyticsSummary />;
      ;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">;
        <PageViewsChart;
          data={pageViewTrends || []}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
        />;
        <PageViewsTable />;
      </div>;
<<<<<<< HEAD
      <div className="mb-6">;
        <UserBehaviorStats />;
      </div>;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">;
        <ConversionAnalysisChart
          data={conversionData || []} 
=======
      ;
      <div className="mb-6">;
        <UserBehaviorStats />;
      </div>;
      ;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">;
        <ConversionAnalysisChart ;
          data={conversionData || []} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          timeRange={timeRange}
import React, { useState } from './react';
import { use_query } from '@tanstack / react - query';
import { supabase } from '@/integrations / supabase / client';
import { AnalyticsContainer } from '@/components / analytics / AnalyticsContainer';
import { AnalyticsSummary } from '@/components / analytics / AnalyticsSummary';
import { PageViewsTable } from '@/components / analytics / PageViewsTable';
import { UserBehaviorStats } from '@/components / analytics / UserBehaviorStats';
import { PageViewsChart } from '@/components / analytics / PageViewsChart';
import { ConversionAnalysisChart } from '@/components / analytics / ConversionAnalysisChart';
import { ExportPanel } from '@/components / analytics / ExportPanel';
export default /**
 * Analytics - Function description
 */
function Analytics() {
  const [time_range, setTimeRange] = useState ('30d');
;
  const { data: pageViewTrends } = use_query ({
    query_key: ['page - views - trend', time_range];
    query_fn: async () => {
      // Get daily page views for trend chart;
      const days = parse_int (time_range.replace ('d', ''));
      const start_date = new Date ();
      start_date.set_date (start_date.get_date () - days);
;
      const { data, error } = await supabase;
        .from ('analytics_events');
        .select ('created_at, path');
        .eq ('event_typepage_view');
        .gte ('created_at', start_date.toISOString ());
;
      // Check condition
if (throw error) {
  $2
}
      // Group by date;
      const viewsByDate = {}
      data?.for_each (view => {
        const date = new Date (view.created_at).toISOString ().split ('T')[0];
        // Check condition
if (viewsByDate[date] = { date, views: 0 }, ) {
  $2
}
        viewsByDate[date].views++;
      });
;
      // Fill in missing dates;
      const result = [];
      for (let index = 0, i < days, i++) {
        const date = new Date ();
        date.set_date (date.get_date () - i);
        const date_str = date.toISOString ().split ('T')[0];
;
        // Check condition
if ( {) {
  $2
}
          result.push (viewsByDate[date_str]);
        } else {
          result.push ({ date: date_str, views: 0 });
        }
      }
      return result.sort ((a, b) => a.date.locale_compare (b.date));
    }
  });
;
  const { data: conversion_data } = use_query ({
    query_key: ['conversion - data', time_range];
    query_fn: async () => {
      const days = parse_int (time_range.replace ('d', ''));
      const start_date = new Date ();
      start_date.set_date (start_date.get_date () - days);
;
      const { data, error } = await supabase;
        .from ('analytics_events');
        .select ('created_at, metadata');
        .eq ('event_typeconversion');
        .gte ('created_at', start_date.toISOString ());
;
      // Check condition
if (throw error) {
  $2
}
      // Group by conversion type and date;
      const conversionsByType = {}
      data?.for_each (item => {
        const date = new Date (item.created_at).toISOString ().split ('T')[0];
        const conversion_type = item.metadata?.conversion_type || 'unknown';
;
        // Check condition
if ( {) {
  $2
}
          conversionsByType[conversion_type] = {}
        }
        // Check condition
if ( {) {
  $2
}
          conversionsByType[conversion_type][date] = 0;
        }
        conversionsByType[conversion_type][date]++;
      });
;
      // Get all dates in range;
      const dates = [];
      for (let index = 0, i < days, i++) {
        const date = new Date ();
        date.set_date (date.get_date () - i);
        dates.push (date.toISOString ().split ('T')[0]);
      }
      dates.sort ();
;
      // Format data for chart;
      return dates.map (date => {
        const result = { date }
;
        Object.keys (conversionsByType).for_each (type => {
          result[type] = conversionsByType[type][date] || 0;
        });
;
        return result;
      });
    }
  });
;
  return (
    <AnalyticsContainer>;
      <AnalyticsSummary />;
      <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6 mb - 6">;
        <PageViewsChart;
          data={pageViewTrends || []}
          time_range={time_range}
          onTimeRangeChange={setTimeRange}
        />;
<<<<<<< HEAD
        <PageViewsTable />;
      </div>;
      <div className="mb - 6">;
        <UserBehaviorStats />;
      </div>;
      <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 6 mb - 6">;
        <ConversionAnalysisChart;
          data={conversion_data || []}
          time_range={time_range}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
          onTimeRangeChange={setTimeRange}
        />;
        <ExportPanel />;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx




}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
    </AnalyticsContainer>);
=======
        <ExportPanel />;
      </div>;
    </AnalyticsContainer>;
  ),; export default function Analytics () {
  const [timeRange, setTimeRange] = useState ('30d');
data: pageViewTrends 
}= useQuery ({
  queryKey: ['page-views-trend', timeRange], queryFn: async () => {
  //Get daily page views for trend chart const {
  data, error 
}= await supabase .from ('analytics events') .select ('created at, path') .eq ('event typepage view') .gte ('created at', startDate.toISOString () );
if (error) throw error;
//Group by date 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
});
const {
  data, error 
}= await supabase .from ('analytics events') .select ('created at, metadata') .eq ('event typeconversion') .gte ('created at', startDate.toISOString () );
if (error) throw error;
//Group by conversion type and date if (!conversionsByType[conversionType]) {
  conversionsByType[conversionType] = {
  
}
}conversionsByType[conversionType][date]++ 
});
//Get all dates in range return result;
}) 
}
});
return (<AnalyticsContainer> <AnalyticsSummary /> <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" > <PageViewsChart data= {
  pageViewTrends || [] 
}timeRange= {
  timeRange 
}onTimeRangeChange= {
  setTimeRange 
}/> <PageViewsTable /> </div> <div className="mb-6" > <UserBehaviorStats /> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" > <ConversionAnalysisChart data= {
  conversionData || [] 
}timeRange= {
  timeRange 
}onTimeRangeChange= {
  setTimeRange 
}/> <ExportPanel /> </div> </AnalyticsContainer>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/Analytics.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

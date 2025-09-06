
=======
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
  

import React, { useState } from "react",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { AnalyticsContainer } from "@/components/analytics/AnalyticsContainer",
import { AnalyticsSummary } from "@/components/analytics/AnalyticsSummary",
import { PageViewsTable } from "@/components/analytics/PageViewsTable",
import { UserBehaviorStats } from "@/components/analytics/UserBehaviorStats",
import { PageViewsChart } from "@/components/analytics/PageViewsChart",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const { data: pageViewTrends } = useQuery({
    queryKey: ['page-views-trend', timeRange],
    queryFn: async () => {
      // Get daily page views for trend chart

        if (viewsByDate[dateStr]) {
          result.push(viewsByDate[dateStr])
        } else {
          result.push({ date: dateStr, views: 0 })

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      const result = [];
      for (let i = 0, i < days, i++) {;

        const date = new Date(),;
        date.setDate(date.getDate() - i),;
        const dateStr = date.toISOString().split('T')[0],;
        if (viewsByDate[dateStr]) {;
          result.push(viewsByDate[dateStr]);
        } else {;
          result.push({ date: dateStr, views: 0 });
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        }
      }
      return result.sort((a, b) => a.date.localeCompare(b.date))
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          conversionsByType[conversionType] = {}
        }
        if (!conversionsByType[conversionType][date]) {
          conversionsByType[conversionType][date] = 0
        }
        
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      const dates = [];
      for (let i = 0, i < days, i++) {;
        const date = new Date();
        date && date.setDate(date && date.getDate() - i);
        dates && dates.push(date && date.toISOString().split('T')[0]);
      }

      dates && dates.sort();

      // Format data for chart;
      return dates && dates.map(date => {;
        const result = { date };

        Object && Object.keys(conversionsByType).forEach(type => {;
          result[type] = conversionsByType[type][date] || 0;
        });

        return result;
      });

    }

  }),
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  return (

    <AnalyticsContainer>;
      <AnalyticsSummary />;

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">;

        <PageViewsChart
          data={pageViewTrends |[]}
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />
        <PageViewsTable />
      </div>
      <div className="mb-6">
        <UserBehaviorStats />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

        />
        <ExportPanel />
      </div>
    </AnalyticsContainer>
  )

          data={conversionData || []} 
          timeRange={timeRange}
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

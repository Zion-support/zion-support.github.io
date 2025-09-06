
import React from "react";
<<<<<<< HEAD
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
=======
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from "@/components/ui/card";

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
<<<<<<< HEAD
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>;
=======
interface PageViewsChartProps {;
  data: Array<{ date: string; views: number }>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  timeRange: string;
  onTimeRangeChange: (range: string) => void
}
<<<<<<< HEAD
export function PageViewsChart({
  data
  timeRange
  onTimeRangeChange
}: PageViewsChartProps) {
=======

export function PageViewsChart(): any ({;
  data,;
  timeRange,;
  onTimeRangeChange,;
}: PageViewsChartProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Daily page view statistics;
        </CardDescription>;
      </CardHeader>;
      <CardContent className="p-0 pb-4">;
        <AnalyticsChart
          title=""
          data={data |[]}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
    </Card>;
  );
}
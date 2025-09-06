<<<<<<< HEAD

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======
import React from "react";
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>;
  timeRange: string;
<<<<<<< HEAD
  onTimeRangeChange: (range: string) => void
}
=======
  onTimeRangeChange: (range: string) => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function PageViewsChart({
  data
  timeRange
  onTimeRangeChange
}: PageViewsChartProps) {
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>
        <CardDescription className="text-zion-slate-light">
          Daily page view statistics
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 pb-4">
        <AnalyticsChart
          title=""
          data={data |[]}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
  );
}
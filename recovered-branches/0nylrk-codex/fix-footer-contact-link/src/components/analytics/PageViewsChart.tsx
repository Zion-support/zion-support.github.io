
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { AnalyticsChart } from &quot;@/components/analytics/AnalyticsChart&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}

export function PageViewsChart({ data, timeRange, onTimeRangeChange }: PageViewsChartProps) {
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light overflow-hidden&quot;>
      <CardHeader className=&quot;pb-2&quot;>
        <CardTitle className=&quot;text-white text-lg&quot;>Page Views Trend</CardTitle>
        <CardDescription className=&quot;text-zion-slate-light&quot;>Daily page view statistics</CardDescription>
      </CardHeader>
      <CardContent className=&quot;p-0 pb-4&quot;>
        <AnalyticsChart 
          title=""
          data={data || []}
          dataKeys={['views']}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
  )
}

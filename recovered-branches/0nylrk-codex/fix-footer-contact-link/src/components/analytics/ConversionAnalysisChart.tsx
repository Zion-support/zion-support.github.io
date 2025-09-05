
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { AnalyticsChart } from &quot;@/components/analytics/AnalyticsChart&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ConversionAnalysisProps {
  data: Array<Record<string any>>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}
=======
import React from "react";

interface ConversionAnalysisProps {_data: Array<Record<string, _any>>;
  timeRange: string;
  onTimeRangeChange: (_range: string) => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function ConversionAnalysisChart(_{_data, _timeRange, _onTimeRangeChange}: ConversionAnalysisProps) {_const _dataKeys = data && data.length > 0
    ? Object.keys(data[0]).filter(key => key !== 'date')
    : [],

  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardHeader>
        <CardTitle className=&quot;text-white text-lg&quot;>Conversion Analysis</CardTitle>
        <CardDescription className=&quot;text-zion-slate-light&quot;>Track different conversion types</CardDescription>
      </CardHeader>
      <CardContent>
        <AnalyticsChart
          title="&quot;
          data={data || []}
<<<<<<< HEAD
          dataKeys={dataKeys}
          type=&quot;bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
=======
          dataKeys={_dataKeys}
          type="bar"
          timeRange={_timeRange}
          onTimeRangeChange={_onTimeRangeChange}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </CardContent>
    </Card>
  )
}


import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { AnalyticsChart } from &quot;@/components/analytics/AnalyticsChart&quot;;

interface ConversionAnalysisProps {
  data: Array<Record<string, any>>;
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
}

export function ConversionAnalysisChart({ data, timeRange, onTimeRangeChange }: ConversionAnalysisProps) {
  const dataKeys = data && data.length > 0
    ? Object.keys(data[0]).filter(key => key !== 'date')
    : [];

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
          dataKeys={dataKeys}
          type=&quot;bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
  );
}

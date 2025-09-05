
import React from "react";

interface PageViewsChartProps {_data: Array<{ date: string; views: number}>;
  timeRange: string;
  onTimeRangeChange: (_range: string) => void;
}

export function PageViewsChart(_{_data, _timeRange, _onTimeRangeChange}: PageViewsChartProps) {_return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>
        <CardDescription className="text-zion-slate-light">Daily page view statistics</CardDescription>
      </CardHeader>
      <CardContent className="p-0 pb-4">
        <AnalyticsChart 
          title=""
          data={data || []}
          dataKeys={_['views']}
          timeRange={_timeRange}
          onTimeRangeChange={_onTimeRangeChange}
        />
      </CardContent>
    </Card>
  );
}

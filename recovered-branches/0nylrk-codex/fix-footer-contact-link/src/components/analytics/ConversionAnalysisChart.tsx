
import React from "react";

interface ConversionAnalysisProps {_data: Array<Record<string, _any>>;
  timeRange: string;
  onTimeRangeChange: (_range: string) => void;}

export function ConversionAnalysisChart(_{_data, _timeRange, _onTimeRangeChange}: ConversionAnalysisProps) {_const _dataKeys = data && data.length > 0
    ? Object.keys(data[0]).filter(key => key !== 'date')
    : [];

  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white text-lg">Conversion Analysis</CardTitle>
        <CardDescription className="text-zion-slate-light">Track different conversion types</CardDescription>
      </CardHeader>
      <CardContent>
        <AnalyticsChart
          title=""
          data={data || []}
          dataKeys={_dataKeys}
          type="bar"
          timeRange={_timeRange}
          onTimeRangeChange={_onTimeRangeChange}
        />
      </CardContent>
    </Card>
  );
}

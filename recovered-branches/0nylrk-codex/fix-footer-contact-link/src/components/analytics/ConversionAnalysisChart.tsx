
<<<<<<< HEAD
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",;
;
interface ConversionAnalysisProps {;
  data:Array<Record<string any>>,;
  timeRange:string,;
  onTimeRangeChange:(range:string) => void;
}
;
export function ConversionAnalysisChart({ data, timeRange, onTimeRangeChange } ConversionAnalysisProps) {;
  const dataKeys = data && data.length > 0;
    ? Object.keys(data[0]).filter(key => key !== 'date');
    :[],;
;
  return (;
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-white text-lg">Conversion Analysis</CardTitle>;
        <CardDescription className="text-zion-slate-light">Track different conversion types</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <AnalyticsChart;
          title="";
          data={data || []}
          dataKeys={dataKeys}
          type="bar";
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
    </Card>;
  ),;
=======
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",interface ConversionAnalysisProps {
  data: Array<Record<string any>>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}
import React from "react";

interface ConversionAnalysisProps {_data: Array<Record<string, _any>>;
  timeRange: string;
  onTimeRangeChange: (_range: string) => void;}

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
          dataKeys={dataKeys}
          type=&quot;bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}        />
      </CardContent>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

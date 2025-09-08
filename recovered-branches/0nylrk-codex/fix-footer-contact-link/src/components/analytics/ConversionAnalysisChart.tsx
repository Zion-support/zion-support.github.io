  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { AnalyticsChart  } from '@/components / analytics / AnalyticsChart';  CardTitle,;
} from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
import React from './react';
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,';
} from '@/components / ui / card';'
import { AnalyticsChart  } from '@/components / analytics / AnalyticsChart';

  const dataKeys = data && data.length > 0
    ? Object.keys(data[0]).filter(key => key !== 'date')
    : [],

  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white text-lg">Conversion Analysis</CardTitle>
        <CardDescription className="text-zion-slate-light">Track different conversion types</CardDescription>
      </CardHeader>
      <CardContent>
        <AnalyticsChart
          title=""
          data={data |[]}
          dataKeys={dataKeys}
          type="bar"

export function ConversionAnalysisChart({ data, timeRange, onTimeRangeChange }: ConversionAnalysisProps) {
  const dataKeys = data && data.length > 0
    ? Object.keys(data[0]).filter(key => key !== 'date')
    : [],

  return (

      <CardHeader>;
        <CardTitle className="text - white text-lg">;
          Conversion Analysis;
        </CardTitle>;
        <CardDescription className="text - zion - slate-light">;
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",;
;

          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
    </Card>;

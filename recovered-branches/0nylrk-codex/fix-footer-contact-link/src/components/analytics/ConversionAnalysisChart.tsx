<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";
=======
<<<<<<< HEAD
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
interface ConversionAnalysisProps {
  data: Array<Record<string, any>>;
  timeRange: string;
<<<<<<< HEAD
  onTimeRangeChange: (range: string) => void
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
  onTimeRangeChange: (range: string) => void;
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

export function ConversionAnalysisChart({
  data
  timeRange
  onTimeRangeChange
}: ConversionAnalysisProps) {
  const dataKeys =
    data && data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== "date")
      : [];
=======
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ConversionAnalysisProps {
  data: Array<Record<string any>>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}

<<<<<<< HEAD
export function ConversionAnalysisChart({
  data,
  timeRange,
  onTimeRangeChange,
}: ConversionAnalysisProps) {
  const dataKeys =
    data && data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== "date");
      : [];
=======
export function ConversionAnalysisChart({ data, timeRange, onTimeRangeChange }: ConversionAnalysisProps) {
  const dataKeys = data && data.length > 0
    ? Object.keys(data[0]).filter(key => key !== 'date')
    : [],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
<<<<<<< HEAD
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
=======
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",;
interface ConversionAnalysisProps {;
  data: Array<Record<string any>>,;
  timeRange: string,;
  onTimeRangeChange: (range: string) => void;
}
;
export function ConversionAnalysisChart({ data, timeRange, onTimeRangeChange }: ConversionAnalysisProps) {;
  const dataKeys = data && data.length > 0;
    ? Object.keys(data[0]).filter(key => key !== 'date');
    : [];
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
          type="bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}
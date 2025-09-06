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
interface ConversionAnalysisProps {
  data: Array<Record<string, any>>;
  timeRange: string;
<<<<<<< HEAD
  onTimeRangeChange: (range: string) => void
}
<<<<<<< HEAD
=======
  onTimeRangeChange: (range: string) => void;
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export function ConversionAnalysisChart({ data, timeRange, onTimeRangeChange }: ConversionAnalysisProps) {
  const dataKeys = null;
=======
export function ConversionAnalysisChart({
  data
  timeRange
  onTimeRangeChange
}: ConversionAnalysisProps) {
  const dataKeys =
    data && data.length > 0
      ? Object.keys(data[0]).filter((key) => key !== "date")
      : [];
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white text-lg">
          Conversion Analysis
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Track different conversion types
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AnalyticsChart
          title=""
          data={data |[]}
          dataKeys={dataKeys}
          type="bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
  );
}
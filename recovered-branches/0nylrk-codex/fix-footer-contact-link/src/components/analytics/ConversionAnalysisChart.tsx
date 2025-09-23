
import React from "react";
<<<<<<< HEAD
import { CardContentCardDescriptionCardHeaderCardTitle } from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

interface ConversionAnalysisProps {
  data: Array<Record<stringany>>;
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

interface ConversionAnalysisProps {
  data: Array<Record<string, any>>;
>>>>>>> origin/auto/autonomy-17186719616
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
}

<<<<<<< HEAD
export function ConversionAnalysisChart({ datatimeRangeonTimeRangeChange }: ConversionAnalysisProps) {
=======
export function ConversionAnalysisChart({ data, timeRange, onTimeRangeChange }: ConversionAnalysisProps) {
>>>>>>> origin/auto/autonomy-17186719616
  const dataKeys = data && data.length > 0
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
          dataKeys={dataKeys}
          type="bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
  );
}

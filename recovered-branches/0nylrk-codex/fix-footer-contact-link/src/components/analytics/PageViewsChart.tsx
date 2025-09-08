import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;

} from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

interface PageViewsChartProps {

  data: Array<{ date: string, views: number }>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void;
}

  data,;
  timeRange,;
  onTimeRangeChange,;
}: PageViewsChartProps) {;
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",;


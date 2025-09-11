

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>;
  timeRange: string;
  onTimeRangeChange: (range: string) => void
}
export function PageViewsChart({
  data
  timeRange
  onTimeRangeChange
}: PageViewsChartProps) {


import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
=======
=======import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;

} from "@/components/ui/card";

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

interface PageViewsChartProps {;
  data: Array<{ date: string; views: number }>;

  timeRange: string;
  onTimeRangeChange: (range: string) => void
}

=======




<<<<<<< HEAD
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

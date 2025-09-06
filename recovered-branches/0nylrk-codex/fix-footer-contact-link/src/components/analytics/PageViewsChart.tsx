import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;

} from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

<<<<<<< HEAD

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;

} from "@/components/ui/card";

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
  timeRange: string;
  onTimeRangeChange: (range: string) => void
}


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}

<<<<<<< HEAD

export function PageViewsChart(): any ({;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  data,;
  timeRange,;
  onTimeRangeChange,;
}: PageViewsChartProps) {;
<<<<<<< HEAD
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Daily page view statistics;
        </CardDescription>;
      </CardHeader>;
      <CardContent className="p-0 pb-4">;
        <AnalyticsChart
          title=""



          data={data |[]}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",;
interface PageViewsChartProps {;
  data: Array<{ date: string, views: number }>,;
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
}
;
export function PageViewsChart({ data, timeRange, onTimeRangeChange }: PageViewsChartProps) {;
  return (;
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>;
        <CardDescription className="text-zion-slate-light">Daily page view statistics</CardDescription>;
      </CardHeader>;
      <CardContent className="p-0 pb-4">;
        <AnalyticsChart;
          title="";
<<<<<<< HEAD



          data={data || []}
          dataKeys={["views"]}
          data={data || []}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
=======
          data={data || []}
          dataKeys={["views"]}          onTimeRangeChange={onTimeRangeChange}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        />;
      </CardContent>;
    </Card>;
  );
    </Card>;

<<<<<<< HEAD

  );
import React from './react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { AnalyticsChart  } from '@/components / analytics / AnalyticsChart';
interface PageViewsChartProps {
  data: Array<{ date: string; views: number }>;
  time_range: string;
  onTimeRangeChange: (range: string) => void;
}
export /**
 * PageViewsChart - Function description
 */
function PageViewsChart() {
  return (
    <Card className="bg - zion - blue - dark border - zion - blue - light overflow - hidden">;
      <CardHeader className="pb - 2">;
        <CardTitle className="text - white text - lg">Page Views Trend</CardTitle>;
        <CardDescription className="text - zion - slate - light">;
          Daily page view statistics;
        </CardDescription>;
      </CardHeader>;
      <CardContent className="p - 0 pb - 4">;
        <AnalyticsChart;
          title="";
          data={data || []}
          data_keys={["views"]}
          time_range={time_range}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
    </Card>);
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

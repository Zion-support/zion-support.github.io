<<<<<<< HEAD
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


import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
} from "@/components/ui/card";
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
  timeRange: string;
  onTimeRangeChange: (range: string) => void
}
<<<<<<< HEAD
<<<<<<< HEAD
export function PageViewsChart({
  data
  timeRange
  onTimeRangeChange
}: PageViewsChartProps) {
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
=======

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}

export function PageViewsChart({ data, timeRange, onTimeRangeChange }: PageViewsChartProps) {
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
          data={data |[]}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
=======



=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
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
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          data={data || []}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
<<<<<<< HEAD
        />
      </CardContent>
        />;
      </CardContent>;
    </Card>;
  );
=======


=======
          data={data |[]}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    </Card>;
  );
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
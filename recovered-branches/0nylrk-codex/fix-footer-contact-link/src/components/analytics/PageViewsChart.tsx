
<<<<<<< HEAD

=======
import React from './react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

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

}

export function PageViewsChart({
  data
  timeRange
  onTimeRangeChange
}: PageViewsChartProps) {

interface PageViewsChartProps {

  data: Array<{ date: string, views: number }>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void;
}

export function PageViewsChart(): any ({;

  data,;
  timeRange,;
  onTimeRangeChange,;
}: PageViewsChartProps) {;
<<<<<<< HEAD



=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>
        <CardDescription className="text-zion-slate-light">Daily page view statistics</CardDescription>
      </CardHeader>
      <CardContent className="p-0 pb-4">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <AnalyticsChart

          title=""

          data={data |[]}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface PageViewsChartProps {;
  data: Array<{ date: string, views: number }>,;
  timeRange: string;

  onTimeRangeChange,;)
}: PageViewsChartProps) {;
  return ("
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;"
</Card>"
      <CardHeader className="pb-2">;"
</CardHeader>"
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>;""
        <CardDescription className="text-zion-slate-light">;"
</CardDescription>
        </CardDescription>;
      </CardHeader>;"
      <CardContent className="p-0 pb-4">;"
</CardContent>
        <AnalyticsChart;"
          title="""
          data={data |[]}"
          dataKeys={["views"]}"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
</AnalyticsChart>
      </CardContent>
    </Card>

  data: Array<{ date: string, views: number }>,;
  timeRange: string;,)
  onTimeRangeChange: (range: string) => void;
}
;

          data={data || []}
          dataKeys={["views"]}          onTimeRangeChange={onTimeRangeChange});
import React from './react';
import {});
import React from './react';
import {

  Card,
  CardContent,
  CardDescription,
  CardHeader,

  data: Array<{ date: string; views: number }>;
  time_range: string;
  onTimeRangeChange: (range: string) => void;
}

          data_keys={["views"]}
          time_range={time_range}
          onTimeRangeChange={onTimeRangeChange}
        />;
      </CardContent>;
    </Card>);

<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

<<<<<<< HEAD

=======
      </CardContent>;
    </Card>;
  );

}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

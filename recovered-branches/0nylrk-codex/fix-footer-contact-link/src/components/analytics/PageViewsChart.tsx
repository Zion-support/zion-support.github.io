<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx

<<<<<<< HEAD
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx

} from "@/components/ui/card";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

interface PageViewsChartProps {;
  data: Array<{ date: string; views: number }>;

  timeRange: string;
  onTimeRangeChange: (range: string) => void
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>;
  timeRange: string;
  onTimeRangeChange: (range: string) => void
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function PageViewsChart({
  data
  timeRange
  onTimeRangeChange
}: PageViewsChartProps) {
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}

<<<<<<< HEAD
<<<<<<< HEAD
export function PageViewsChart({ data, timeRange, onTimeRangeChange }: PageViewsChartProps) {

=======

========
} from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
interface PageViewsChartProps {;
  data: Array<{ date: string; views: number }>;
  timeRange: string;
  onTimeRangeChange: (range: string) => void
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx
export function PageViewsChart(): any ({;
  data,;
  timeRange,;
  onTimeRangeChange,;
}: PageViewsChartProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx
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
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function PageViewsChart({ data, timeRange, onTimeRangeChange }: PageViewsChartProps) {
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>
        <CardDescription className="text-zion-slate-light">Daily page view statistics</CardDescription>
      </CardHeader>
      <CardContent className="p-0 pb-4">
        <AnalyticsChart 
          title=""
          data={data |[]}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          data={data || []}
          dataKeys={["views"]}
=======

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",;
;
interface PageViewsChartProps {;
  data:Array<{ date:string, views:number }>,;
  timeRange:string,;
  onTimeRangeChange:(range:string) => void;
}
;
export function PageViewsChart({ data, timeRange, onTimeRangeChange } PageViewsChartProps) {;
  return (;
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>;
        <CardDescription className="text-zion-slate-light">Daily page view statistics</CardDescription>;
      </CardHeader>;
      <CardContent className="p-0 pb-4">;
        <AnalyticsChart ;
          title="";
          data={data || []}
          dataKeys={['views']}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}

<<<<<<< HEAD
        />;
      </CardContent>;

    </Card>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx

  );
=======

    </Card>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
========
}
=======
  ),;}
 interface PageViewsChartProps {
  data: Array< {
  date: string, views: number 
}>;
timeRange: string;
onTimeRangeChange: (range: string) => void 
}export function PageViewsChart ({
  data, timeRange, onTimeRangeChange 
}: PageViewsChartProps) {
  return (<Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden" > <CardHeader className="pb-2" > <CardTitle className="text-white text-lg" >Page Views Trend</CardTitle> <CardDescription className="text-zion-slate-light" >Daily page view statistics</CardDescription> p-0 pb-4"> <AnalyticsChart title="" data= {
  data || [] 
}dataKeys= {
  ['views'] 
}timeRange= {
  timeRange 
}onTimeRangeChange= {
  onTimeRangeChange 
}/> </CardContent> </Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/analytics/PageViewsChart.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          data={data || []}
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
        />;
      </CardContent>;
    </Card>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

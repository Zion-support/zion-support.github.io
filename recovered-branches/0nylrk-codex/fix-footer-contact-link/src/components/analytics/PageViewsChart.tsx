<<<<<<< HEAD
} from "@/components/ui/card";

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

=======
<<<<<<< HEAD
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
interface PageViewsChartProps {
  data: Array<{ date: string, views: number}>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}

export function PageViewsChart({ data, timeRange, onTimeRangeChange }: PageViewsChartProps) {
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
export function PageViewsChart({
  data
  timeRange
  onTimeRangeChange
}: PageViewsChartProps) {

<<<<<<< HEAD
=======

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",
=======
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from "@/components/ui/card";

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

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
=======
interface PageViewsChartProps {;
  data: Array<{ date: string; views: number }>;

  timeRange: string;
  onTimeRangeChange: (range: string) => void
}

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface PageViewsChartProps {
  data: Array<{ date: string, views: number }>,
  timeRange: string,
  onTimeRangeChange: (range: string) => void
}


} from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
interface PageViewsChartProps {;
  data: Array<{ date: string; views: number }>;
  timeRange: string;
  onTimeRangeChange: (range: string) => void
}
export function PageViewsChart(): any ({;
  data,;
  timeRange,;
  onTimeRangeChange,;
}: PageViewsChartProps) {;
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


          data={data || []}
          dataKeys={["views"]}

<<<<<<< HEAD
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
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}


    </Card>;


}
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
}
=======


    </Card>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
}
=======

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-lg">Page Views Trend</CardTitle>
        <CardDescription className="text-zion-slate-light">Daily page view statistics</CardDescription>
      </CardHeader>
      <CardContent className="p-0 pb-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <AnalyticsChart 
          title=""
          data={data |[]}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <AnalyticsChart

          title=""

          data={data |[]}

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          dataKeys={["views"]}
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;

import { AnalyticsChart } from "@/components/analytics/AnalyticsChart",;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

}
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
          data={data || []}
          dataKeys={["views"]}

      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
}
=======
>>>>>>> merged-prs-20250907-203621
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

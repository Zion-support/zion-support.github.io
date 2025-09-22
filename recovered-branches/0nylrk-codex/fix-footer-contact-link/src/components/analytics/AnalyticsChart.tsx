
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend  } from 'recharts';"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";"
import { useState } from "react";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from './react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface AnalyticsChartProps {

  title: string

  description?: string;
  data: any[]'
  type?: 'line' | 'bar';
  dataKeys: string[]

}
export function AnalyticsChart({
  title;

description
  data
  type = 'line';
  timeRange = '7d';
  onTimeRangeChange
}: AnalyticsChartProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);
<<<<<<< HEAD
  const colors = [
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57'
  ];
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);
  const colors = [
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57'
  ];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { useState } from './react';
interface AnalyticsChartProps {}
  title: string,

export function AnalyticsChart(): any ({ ;
  title;
  description, ;
  data, ;'
  type = 'line';
  dataKeys, ;
'
  timeRange = '7d';
  onTimeRangeChange;
}: AnalyticsChartProps) {;'
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",

=======
"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { useState } from "react",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { useState } from './react';
interface AnalyticsChartProps {
  title: string,

  description?: string;
  data: any[],;
  type?: 'line' | 'bar';

export function AnalyticsChart(): any ({ ;
  title;
  description, ;
  data, ;
  type = 'line';
  dataKeys, ;

  timeRange = '7d';
  onTimeRangeChange;
}: AnalyticsChartProps) {;
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);

  const colors = [;
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57';
  ];

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface AnalyticsChartProps {
=======

interface AnalyticsChartProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title: string,
  description?: string,
  data: any[],'
  type?: 'line' | 'bar',
  dataKeys: string[],
  timeRange?: string,;
  onTimeRangeChange?: (range: string) => void;
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
  description,
  data,

  description, 
data, 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  type = 'line',
  dataKeys,
  timeRange = '7d',
  onTimeRangeChange;
}: AnalyticsChartProps) {'
  const [chartType, setChartType] = useState<'line' | 'bar'>(type),
const colors = [
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57'
<<<<<<< HEAD
  ],
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
  const colors = [;
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57';
  ];
  return (

  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  return (  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { useState } from "react",;
;
interface AnalyticsChartProps {;
  title:string,;
  description?:string,;
  data:any[],;
  type?:'line' | 'bar',;
  dataKeys:string[],;
  timeRange?:string,;
  onTimeRangeChange?:(range:string) => void;
}
;
export function AnalyticsChart({ ;
  title,;
  description, ;
  data, ;
  type = 'line',;
  dataKeys, ;
  timeRange = '7d',;
  onTimeRangeChange;
} AnalyticsChartProps) {;
  const [chartType, setChartType] = useState<'line' | 'bar'>(type),;
  ;
  const colors = [;
    '#8884d8#82ca9d', '#ffc658#ff8042', '#0088fe#00C49F', '#FFBB28#FF8042', '#a4de6c#d0ed57';
  ],;
  ;
  return (;
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;
=======
"
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;"
      <CardHeader className="pb-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">;
          <div>;"
            <CardTitle className="text-white text-lg">{title}</CardTitle>;"
            {description && <CardDescription className="text-zion-slate-light">{description}</CardDescription>}
          </div>;"
          <div className="flex items-center gap-2">;
            {onTimeRangeChange && (;
              <Select value={timeRange} onValueChange={onTimeRangeChange}>;"
                <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">;"
                  <SelectValue placeholder="Time Range" />;
                </SelectTrigger>;"
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  data_keys: string[],
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  data_keys: string[],
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  time_range?: string;
  onTimeRangeChange?: (range: string) => void;
}
export /**;
 * AnalyticsChart - Function description;
 */
function AnalyticsChart() {
  const [chart_type, setChartType] = useState<'line' | 'bar'>(type);
;
  const colors = [;
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57';
  ];
;
  return (
    <Card className="bg - zion - blue - dark border - zion - blue - light overflow - hidden">;
      <CardHeader className="pb - 2">;
        <div className="flex flex - col sm:flex - row justify - between sm:items - center gap - 4">;
          <div>;
            <CardTitle className="text - white text - lg">{title}</CardTitle>;
            {description && <CardDescription className="text - zion - slate - light">{description}</CardDescription>}
          </div>;
          <div className="flex items - center gap - 2">;
            {onTimeRangeChange && (
              <Select value={time_range} onValueChange={onTimeRangeChange}>;
                <SelectTrigger className="w - 24 h - 8 text - xs bg - zion - blue border - zion - blue - light text - zion - slate - light">;
                  <SelectValue placeholder="Time Range" />;
                </SelectTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
                <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <SelectItem value="1d">1 Day</SelectItem>;
=======
                <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate-light">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate-light">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;
                  <SelectItem value="1d">1 Day</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <SelectItem value="7d">7 Days</SelectItem>;
                  <SelectItem value="30d">30 Days</SelectItem>;
                  <SelectItem value="90d">3 Months</SelectItem>;
=======
function AnalyticsChart() { return null; }
            <CardTitle className="text - white text - lg">{title}</CardTitle>;"
            {description && <CardDescription className="text - zion - slate - light">{description}</CardDescription>}
          </div>;"
          <div className="flex items - center gap - 2">;
            {onTimeRangeChange && (
              <Select value={time_range} onValueChange={onTimeRangeChange}>;"
                <SelectTrigger className="w - 24 h - 8 text - xs bg - zion - blue border - zion - blue - light text - zion - slate - light">;"
                  <SelectValue placeholder="Time Range" />;
                </SelectTrigger>;"
                <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;

"
                  <SelectItem value="1d">1 Day</SelectItem>;"
                  <SelectItem value="7d">7 Days</SelectItem>;"
                  <SelectItem value="30d">30 Days</SelectItem>;"
                  <SelectItem value="90d">3 Months</SelectItem>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <SelectItem value="365d">1 Year</SelectItem>;
<<<<<<< HEAD
                </SelectContent>;
'
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}"
                  textAnchor="end"

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
=======
                </SelectContent>;

                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",;
interface AnalyticsChartProps {;
  title: string,;
  description?: string,;
data: any[],;'
  type?: 'line' | 'bar',;
  dataKeys: string[],;
  timeRange?: string,;
  onTimeRangeChange?: (range: string) => void;
}
;
export function AnalyticsChart() { return null; }
            <CardTitle className="text-white text-lg">{title}</CardTitle>;"
            {description && <CardDescription className="text-zion-slate-light">{description}</CardDescription>}
          </div>;"
          <div className="flex items-center gap-2">;
            {onTimeRangeChange && (;
              <Select value={timeRange} onValueChange={onTimeRangeChange}>;"
                <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">;"
                  <SelectValue placeholder="Time Range" />;
                </SelectTrigger>;"
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;"
                  <SelectItem value="1d">1 Day</SelectItem>;"
                  <SelectItem value="7d">7 Days</SelectItem>;"
                  <SelectItem value="30d">30 Days</SelectItem>;"
                  <SelectItem value="90d">3 Months</SelectItem>;"
                  <SelectItem value="365d">1 Year</SelectItem>;
                </SelectContent>;
              </Select>;
            )}
'
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>;"
              <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">;"
                <SelectValue placeholder="Chart Type" />;
              </SelectTrigger>;"
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <SelectItem value="line">Line</SelectItem>;
=======

"
                <SelectItem value="line">Line</SelectItem>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>;
              <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">;
                <SelectValue placeholder="Chart Type" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
                <SelectItem value="line">Line</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <SelectItem value="bar">Bar</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
        </div>;
      </CardHeader>;

textAnchor="end";
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  height={50}
=======
                </SelectContent>;                  height={50}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                </SelectContent>;                  height={50}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  textAnchor="end";

                  height={50}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                />;
                <YAxis tick={{ fill: '#b1b9c6', fontSize: 12 }} />;
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: '#1a2332', 
                    borderColor: '#293445',
                    color: '#fff'
                  }} 
                />;
                <Legend />;
                {dataKeys && dataKeys.map((key, index) => (;

      <CardContent className="p-0">;
        <div className="h-72 w-full p-4">;
          <ResponsiveContainer width="100%" height="100%">;
            {chartType === 'line' ? (;
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis;
                  dataKey="date";
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end";
<<<<<<< HEAD
                  height={50}
                />
                <YAxis tick={{ fill: '#b1b9c6', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a2332'
                    borderColor: '#293445'
                    color: '#fff'
                  }}
                />
                <Legend />
                {dataKeys.map((key, index) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
"
      <CardContent className="p - 0">;"
        <div className="h - 72 w - full p - 4">;"
          <ResponsiveContainer width="100%" height="100%">;'
            {chart_type === 'line' ? (
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;"
                <CartesianGrid stroke_dasharray="3 3" stroke="#354151" />;
                <XAxis;"
                  data_key="date";'
                  tick={{ fill: '#b1b9c6', font_size: 12 }}

              </LineChart>;
            ) : (;
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;"
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis"
                  dataKey="date" '
                  tick={{ fill: '#b1b9c6', fontSize: 12 }} 
<<<<<<< HEAD
                />;
                <YAxis tick={{ fill: '#b1b9c6', font_size: 12 }} />;
                <Tooltip;
                  content_style={{'
                    background_color: '#1a2332','
                    border_color: '#293445','
=======
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={colors[index % colors && colors.length]}
=======

                    radius={[4, 4, 0, 0]}
stroke={colors[index % colors.length]}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            ) : (
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />
                <XAxis
dataKey="date" 
                  tick={{ fill: '#b1b9c6', fontSize: 12 }} 
                />;
                <YAxis tick={{ fill: '#b1b9c6', font_size: 12 }} />;
                <Tooltip;
                  content_style={{
                    background_color: '#1a2332',
                    border_color: '#293445',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    color: '#fff';
                  }}
                />;
                <Legend />;
                {data_keys.map ((key, index) => (
                  <Line;
key={key}"
                    type="monotone";
                    data_key={key}
                    stroke={colors[index % colors.length]}
                    active_dot={{ r: 8 }}
                    stroke_width={2}
                  />))}
              </LineChart>) : (
<BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;"
                <CartesianGrid stroke_dasharray="3 3" stroke="#354151" />;
                <XAxis;"
                  data_key="date";'
                  tick={{ fill: '#b1b9c6', font_size: 12 }}

                  angle={-30}"
                  text_anchor="end";
                  height={50}
                />;
'
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}"
                  textAnchor="end"
                  height={50}
                  <Line;
                    key={key}"
                    type="monotone"
                    dataKey={key}
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end"
                  height={50}
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    fill={colors[index % colors.length]}
                    radius={[4, 4, 0, 0]}
                  />
                ))}
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
          </ResponsiveContainer>;
        </div>;
      </CardContent>;
    </Card>;
  );
}
                  />))}
              </BarChart>)}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </ResponsiveContainer>;
        </div>;
      </CardContent>;
    </Card>);
"
      <CardContent className="p-0">;"
        <div className="h-72 w-full p-4">;"
          <ResponsiveContainer width="100%" height="100%">;'
            {chartType === 'line' ? (;
              <LineChart data={data} margin={{ top:5, right:30, left:20, bottom:25 }}>;"
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis ;"
                  dataKey="date" ;'
                  tick={{ fill:'#b1b9c6', fontSize:12 }}
                  angle={-30}"
                  textAnchor="end";
                  height={50}
                />;'
                <YAxis tick={{ fill:'#b1b9c6', fontSize:12 }} />;
                <Tooltip ;
                  contentStyle={{ ;'
                    backgroundColor:'#1a2332', ;'
                    borderColor:'#293445',;'
                    color:'#fff';
                  }} ;
/>;
                <Legend />;
                {dataKeys.map((key, index) => (;
                  <Line;
<<<<<<< HEAD
                    key={key}"
                    type="monotone";                    dataKey={key}
                    stroke={colors[index % colors.length]}
                    activeDot={{ r:8 }}
                    strokeWidth={2}
                  />;
                ))}
              </LineChart>;
            ) :(;
<BarChart data={data} margin={{ top:5, right:30, left:20, bottom:25 }}>;"
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis ;"
                  dataKey="date" ;'
                  tick={{ fill:'#b1b9c6', fontSize:12 }} ;
                  angle={-30}"
                  textAnchor="end";
                  height={50}
                />;'
                <YAxis tick={{ fill:'#b1b9c6', fontSize:12 }} />;
                <Tooltip ;
                  contentStyle={{ ;'
                    backgroundColor:'#1a2332', ;'
                    borderColor:'#293445',;'
              <BarChart data={data} margin={{ top:5, right:30, left:20, bottom:25 }}>;

                  tick={{ fill:'#b1b9c6', fontSize:12 }} ;
angle={-30}
                  textAnchor="end";
                  height={50}
                />;
                <YAxis tick={{ fill:'#b1b9c6', fontSize:12 }} />;
                <Tooltip ;
                  contentStyle={{ ;
                    backgroundColor:'#1a2332', ;
                    borderColor:'#293445',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    color:'#fff';
                  }} ;
                />;
                <Legend />;
                {dataKeys.map((key, index) => (;
                  <Bar ;
                    dataKey={key} ;
                    fill={colors[index % colors.length]} ;
                  />;                ))}
</BarChart>;
            )}
          </ResponsiveContainer>;
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  ),; interface AnalyticsChartProps {}
  title: string;
description?: string;
data: any[];'
type?: 'line' | 'bar';
dataKeys: string[];
timeRange?: string;
onTimeRangeChange?: (range: string) => void;
}export function AnalyticsChart() { return null; }
}</SelectTrigger> <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-zion-slate-light"> <SelectItem value=" line">Line</SelectItem> <SelectItem value=" bar" >Bar</SelectItem> </SelectContent> </Select> </div> </div> </CardHeader> /> <YAxis tick= {}
  {'
  fill: '#b1b9c6', fontSize: 12;
}
;

}/> <Tooltip contentStyle= {}
  {'
  backgroundColor: '#1a2332', borderColor: '#293445', color: '#fff' 
}
}/> <Legend /> {}
  dataKeys.map ( (key, index) => (<Line key= {}
  key;
}/> <YAxis tick= {}
  {'
  fill: '#b1b9c6', fontSize: 12;
}
}/> <Tooltip contentStyle= {}
  {'
  backgroundColor: '#1a2332', borderColor: '#293445', color: '#fff' 
}
}/> <Legend /> {}
  dataKeys.map ( (key, index) => (<Bar key= {}
  key;
}dataKey= {}
  key;
}fill= {}
  colors[index % colors.length] 
}radius= {}
  const [chartType, setChartType] = useState<'line' | 'bar'> (type);
const colors = [ '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57' ];
bg-zion-blue-dark border-zion-blue-light overflow-hidden"> <CardHeader className=" pb-2"> <div className=" flex flex-col sm:flex-row justify-between sm:items-center gap-4"> <div>  <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-zion-slate-light"> <SelectItem value=" 1d">1 Day <SelectItem value=" 7d">7 Days <SelectItem value=" 30d">30 Days <SelectItem value=" 90d">3 Months <SelectItem value=" 365d">1 Year  )"
} <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-zion-slate-light"> <SelectItem value=" line">Line <SelectItem value=" bar" >Bar   </div> </div>  /> <YAxis tick= {"
  {"
  fill: '#b1b9c6', fontSize: 12;

}/> <Tooltip contentStyle= {
  {
  backgroundColor: '#1a2332', borderColor: '#293445', color: '#fff
}/> <Legend /> {

  dataKeys.map ( (key, index) => (<Line key= {
  key;
}/> <YAxis tick= {

)
  dataKeys.map ( (key, index) => (<Bar key= {
}dataKey= {
}fill= {
  colors[index % colors.length] 
}radius= {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  [4, 4, 0, 0]
}/>) ) 
}</BarChart>) 
}</ResponsiveContainer> </div> </CardContent> </Card>) 
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  height={50}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}) 
} </div>  ) 
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

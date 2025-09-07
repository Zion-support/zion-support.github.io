import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend  } from 'recharts';"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";"
<<<<<<< HEAD
import { useState } from "react";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

import {useState} from "react";
'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'

import { useState } from './react';

  description?: string;
  data: any[]'
  type?: 'line' | 'bar';
  dataKeys: string[]

}

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';

import { useState } from './react';
interface AnalyticsChartProps {}
  title: string,

export function AnalyticsChart(): any ({ ;
=======
import { useState } from "react";

<<<<<<< HEAD
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
=======
<<<<<<< HEAD



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend  } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
<<<<<<< HEAD
=======
interface AnalyticsChartProps {

  title: string
  description?: string;
  data: any[]
  type?: 'line' | 'bar';
  dataKeys: string[]

  timeRange?: string;
  onTimeRangeChange?: (range: string) => void
}
export function AnalyticsChart({
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  title;
  description, ;
  data, ;'
  type = 'line';
<<<<<<< HEAD
  dataKeys, ;
'
  timeRange = '7d';
=======
  dataKeys
  timeRange = '7d';
  onTimeRangeChange
}: AnalyticsChartProps) {
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);
  const colors = [
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57'
  ];
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {useState} from "react";
'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'

import { useState } from './react';

  description?: string;
  data: any[]'
  type?: 'line' | 'bar';
  dataKeys: string[]

}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
<<<<<<< HEAD
interface AnalyticsChartProps {;
  title: string,;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';

import { useState } from './react';
interface AnalyticsChartProps {}
  title: string,
<<<<<<< HEAD

=======
  description?: string;
  data: any[],;
  type?: 'line' | 'bar';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function AnalyticsChart(): any ({ ;
  title;
  description, ;
  data, ;'
  type = 'line';
  dataKeys, ;
<<<<<<< HEAD
'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  timeRange = '7d';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onTimeRangeChange;
}: AnalyticsChartProps) {;'
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);

<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  const colors = [;
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57';
  ];


=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",

<<<<<<< HEAD
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",

=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
interface AnalyticsChartProps {

  title: string,
  description?: string,
  data: any[],'
  type?: 'line' | 'bar',
  dataKeys: string[],
<<<<<<< HEAD
  timeRange?: string,;
=======
<<<<<<< HEAD
  timeRange?: string,;
=======
  timeRange?: string,
  onTimeRangeChange?: (range: string) => void
}


export function AnalyticsChart({ 
  title,

<<<<<<< HEAD
export function AnalyticsChart({ ;
  title;
export function AnalyticsChart({ 
  title,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  description, 
  data, 
  type = 'line',
  dataKeys, 
  timeRange = '7d',
  onTimeRangeChange
}: AnalyticsChartProps) {
  const [chartType, setChartType] = useState<'line' | 'bar'>(type),
  
<<<<<<< HEAD
  const colors = $2;
=======
  const colors = [
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57'
  ],
  
<<<<<<< HEAD
  const colors = [;
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57';
  ];
  return (

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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">;
          <div>;
            <CardTitle className="text-white text-lg">{title}</CardTitle>;
            {description && <CardDescription className="text-zion-slate-light">{description}</CardDescription>}
          </div>;
          <div className="flex items-center gap-2">;
            {onTimeRangeChange && (;
              <Select value={timeRange} onValueChange={onTimeRangeChange}>;
                <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">;
                  <SelectValue placeholder="Time Range" />;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
<<<<<<< HEAD
=======
=======
  data_keys: string[],
  time_range?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onTimeRangeChange?: (range: string) => void;
}

  description, 

  timeRange = '7d',
  onTimeRangeChange;
}: AnalyticsChartProps) {'
  const [chartType, setChartType] = useState<'line' | 'bar'>(type),

  return (

  const colors = [;
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57';
  ];
  return (

  return (

    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
      <CardHeader className="pb-2">;

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </SelectTrigger>;"
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;

  data_keys: string[],

  time_range?: string;
  onTimeRangeChange?: (range: string) => void;
}
export /**;
 * AnalyticsChart - Function description;
 */

<<<<<<< HEAD
=======
=======
                </SelectTrigger>;
                <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <SelectItem value="1d">1 Day</SelectItem>;

                  <SelectItem value="7d">7 Days</SelectItem>;
                  <SelectItem value="30d">30 Days</SelectItem>;
                  <SelectItem value="90d">3 Months</SelectItem>;
<<<<<<< HEAD

                  <SelectItem value="365d">1 Year</SelectItem>;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;

import { useState } from "react",;
interface AnalyticsChartProps {;
  title: string,;
  description?: string,;

  type?: 'line' | 'bar',;
  dataKeys: string[],;
  timeRange?: string,;
  onTimeRangeChange?: (range: string) => void;
}
;

                  <SelectItem value="365d">1 Year</SelectItem>;
                </SelectContent>;
              </Select>;
            )}

                <SelectItem value="line">Line</SelectItem>;

                <SelectItem value="bar">Bar</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
        </div>;
      </CardHeader>;

                  height={50}

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

=======

<<<<<<< HEAD
                  <SelectItem value="365d">1 Year</SelectItem>;
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
  
>>>>>>> merged-prs-20250907-203621
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <CardTitle className="text-white text-lg">{title}</CardTitle>
            {description && <CardDescription className="text-zion-slate-light">{description}</CardDescription>}
          </div>
          <div className="flex items-center gap-2">
            {onTimeRangeChange && (
              <Select value={timeRange} onValueChange={onTimeRangeChange}>
                <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">
                  <SelectItem value="1d">1 Day</SelectItem>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="90d">3 Months</SelectItem>
                  <SelectItem value="365d">1 Year</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>
              <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">
                <SelectValue placeholder="Chart Type" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">
                <SelectItem value="line">Line</SelectItem>
                <SelectItem value="bar">Bar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-72 w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />
                <XAxis
                  dataKey="date"
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;

import { useState } from "react",;
interface AnalyticsChartProps {;
  title: string,;
  description?: string,;

  type?: 'line' | 'bar',;
  dataKeys: string[],;
  timeRange?: string,;
  onTimeRangeChange?: (range: string) => void;
}
;

                  <SelectItem value="365d">1 Year</SelectItem>;
                </SelectContent>;
              </Select>;
            )}
<<<<<<< HEAD
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>;
              </Select>;
            )}
            <Select value={chartType} onValueChange={(value:'line' | 'bar') => setChartType(value)}>;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>;
              <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">;
                <SelectValue placeholder="Chart Type" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
<<<<<<< HEAD
=======
=======
              </Select>)}
            <Select value={chart_type} onValueChange={(value: 'line' | 'bar') => setChartType (value)}>;
              <SelectTrigger className="w - 24 h - 8 text - xs bg - zion - blue border - zion - blue - light text - zion - slate - light">;
                <SelectValue placeholder="Chart Type" />;
              </SelectTrigger>;
              <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <SelectItem value="line">Line</SelectItem>;

                <SelectItem value="bar">Bar</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  height={50}
                />
                <YAxis tick={{ fill: '#b1b9c6', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a2332'
                    borderColor: '#293445'
                    color: '#fff'
                  }
                />
                <Legend />
                {dataKeys.map((key, index) => (
<<<<<<< HEAD

                    type="monotone"
                    dataKey={key}
"
      <CardContent className="p - 0">;"
        <div className="h - 72 w - full p - 4">;"
          <ResponsiveContainer width="100%" height="100%">;'
=======
=======

                  height={50}

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

<<<<<<< HEAD
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

                    type="monotone"
                    dataKey={key}
"
      <CardContent className="p - 0">;"
        <div className="h - 72 w - full p - 4">;"
          <ResponsiveContainer width="100%" height="100%">;'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
<<<<<<< HEAD
=======
                    stroke={colors[index % colors && colors.length]}
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />;
                ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <CardContent className="p - 0">;
        <div className="h - 72 w - full p - 4">;
          <ResponsiveContainer width="100%" height="100%">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {chart_type === 'line' ? (
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;"
                <CartesianGrid stroke_dasharray="3 3" stroke="#354151" />;
                <XAxis;"
                  data_key="date";'
                  tick={{ fill: '#b1b9c6', font_size: 12 }}
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  angle={-30}
                  text_anchor="end";
                  height={50}
=======

<<<<<<< HEAD
=======
                  angle={-30}
                  text_anchor="end";
                  height={50}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </LineChart>;
            ) : (;
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;"
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis"
                  dataKey="date" '
                  tick={{ fill: '#b1b9c6', fontSize: 12 }} 
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                />;

                <YAxis tick={{ fill: '#b1b9c6', font_size: 12 }} />;
                <Tooltip;
                  content_style={{'
                    background_color: '#1a2332','
                    border_color: '#293445','

                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            ) : (
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />
                <XAxis

                    type="monotone";
                    data_key={key}
                    stroke={colors[index % colors.length]}
                    active_dot={{ r: 8 }}
                    stroke_width={2}
                  />))}
              </LineChart>) : (
<<<<<<< HEAD

                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end"
                  height={50}
                  <Line
=======
<<<<<<< HEAD

                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
=======
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;
                <CartesianGrid stroke_dasharray="3 3" stroke="#354151" />;
                <XAxis;
                  data_key="date";
                  tick={{ fill: '#b1b9c6', font_size: 12 }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  angle={-30}
                  textAnchor="end"
                  height={50}
<<<<<<< HEAD
                  <Line
=======
                />;
<<<<<<< HEAD
                    stroke={colors[index % colors.length]}
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
                  angle={-30}
                  textAnchor="end"
                  height={50}
                />
                <YAxis tick={{ fill: '#b1b9c6', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a2332'
                    borderColor: '#293445'

                    color: '#fff'
                  }
                />
                <Legend />
                {dataKeys.map((key, index) => (
                  <Bar
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </ResponsiveContainer>;
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
=======
=======

                <YAxis tick={{ fill: '#b1b9c6', font_size: 12 }} />;
                <Tooltip;
                  content_style={{
                    background_color: '#1a2332',
                    border_color: '#293445',
                    color: '#fff';
                  }}
                />;
                <Legend />;
                {data_keys.map ((key, index) => (
                  <Bar;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    key={key}
                    type="monotone"
                    dataKey={key}
                    fill={colors[index % colors.length]}
                    radius={[4, 4, 0, 0]}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  />))}
              </BarChart>)}

          </ResponsiveContainer>;
        </div>;
      </CardContent>;
    </Card>);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                    color:'#fff';
                  }} ;

<<<<<<< HEAD
=======
=======
      <CardContent className="p-0">;
        <div className="h-72 w-full p-4">;
          <ResponsiveContainer width="100%" height="100%">;
            {chartType === 'line' ? (;
              <LineChart data={data} margin={{ top:5, right:30, left:20, bottom:25 }}>;
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis ;
                  dataKey="date" ;
                  tick={{ fill:'#b1b9c6', fontSize:12 }}
                  angle={-30}
                  textAnchor="end";
                  height={50}
                />;
                <YAxis tick={{ fill:'#b1b9c6', fontSize:12 }} />;
                <Tooltip ;
                  contentStyle={{ ;
                    backgroundColor:'#1a2332', ;
                    borderColor:'#293445',;
                    color:'#fff';
                  }} ;
                />;
                <Legend />;
                {dataKeys.map((key, index) => (;
                  <Line;
                    key={key}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    type="monotone";                    dataKey={key}
                    stroke={colors[index % colors.length]}
                    activeDot={{ r:8 }}
                    strokeWidth={2}
                  />;
                ))}
              </LineChart>;
            ) :(;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <BarChart data={data} margin={{ top:5, right:30, left:20, bottom:25 }}>;

                  tick={{ fill:'#b1b9c6', fontSize:12 }} ;

                  <Bar ;
                    dataKey={key} ;
                    fill={colors[index % colors.length]} ;
                  />;                ))}

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

}/>) ) 
}</BarChart>) 
}</ResponsiveContainer> </div> </CardContent> </Card>) 
}
<<<<<<< HEAD
;
=======
;
=======
              <BarChart data={data} margin={{ top:5, right:30, left:20, bottom:25 }}>;
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis ;
                  dataKey="date" ;
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
                    color:'#fff';
                  }} ;
                />;
                <Legend />;
                {dataKeys.map((key, index) => (;
                  <Bar ;
                    key={key}
                    dataKey={key} ;
                    fill={colors[index % colors.length]} ;
                    radius={[4, 4, 0, 0]}
                  />;                ))}
              </BarChart>;
            )}
          </ResponsiveContainer>;
        </div>;
      </CardContent>;
    </Card>;
  ),; interface AnalyticsChartProps {
  title: string;
description?: string;
data: any[];
type?: 'line' | 'bar';
dataKeys: string[];
timeRange?: string;
onTimeRangeChange?: (range: string) => void 
}export function AnalyticsChart ({
  title;
description;
data;
type = 'line';
dataKeys;
timeRange = '7d';
onTimeRangeChange 
}: AnalyticsChartProps) {
  const [chartType, setChartType] = useState<'line' | 'bar'> (type);
const colors = [ '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57' ];
bg-zion-blue-dark border-zion-blue-light overflow-hidden"> <CardHeader className=" pb-2"> <div className=" flex flex-col sm:flex-row justify-between sm:items-center gap-4"> <div> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-zion-slate-light"> <SelectItem value=" 1d">1 Day</SelectItem> <SelectItem value=" 7d">7 Days</SelectItem> <SelectItem value=" 30d">30 Days</SelectItem> <SelectItem value=" 90d">3 Months</SelectItem> <SelectItem value=" 365d">1 Year</SelectItem> </SelectContent> </Select>) 
}</SelectTrigger> <SelectContent className=" bg-zion-blue-dark border-zion-blue-light text-zion-slate-light"> <SelectItem value=" line">Line</SelectItem> <SelectItem value=" bar" >Bar</SelectItem> </SelectContent> </Select> </div> </div> </CardHeader> /> <YAxis tick= {
  {
  fill: '#b1b9c6', fontSize: 12 
}
;

<<<<<<< HEAD
}/> <Tooltip contentStyle= {
  {
  backgroundColor: '#1a2332', borderColor: '#293445', color: '#fff' 
}
}/> <Legend /> {
  dataKeys.map ( (key, index) => (<Line key= {
  key 
}/> <YAxis tick= {
  {
  fill: '#b1b9c6', fontSize: 12 
}
}/> <Tooltip contentStyle= {
  {
  backgroundColor: '#1a2332', borderColor: '#293445', color: '#fff' 
}
}/> <Legend /> {
  dataKeys.map ( (key, index) => (<Bar key= {
  key 
}dataKey= {
  key 
}fill= {
  colors[index % colors.length] 
}radius= {
  [4, 4, 0, 0] 
}/>) ) 
}</BarChart>) 
}</ResponsiveContainer> </div> </CardContent> </Card>) 
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

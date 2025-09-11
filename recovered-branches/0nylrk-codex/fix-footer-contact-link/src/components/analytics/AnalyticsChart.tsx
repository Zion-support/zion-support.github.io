
<<<<<<< HEAD
<<<<<<< HEAD



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend  } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
=======
=======



import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { useState } from './react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  title;

  description
  data
  type = 'line';
  dataKeys
  timeRange = '7d';
  onTimeRangeChange
}: AnalyticsChartProps) {
  const [chartType, setChartType] = useState<'line' | 'bar'>(type);
  const colors = [
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57'
  ];
<<<<<<< HEAD
=======
=======



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

<<<<<<< HEAD
=======

  const colors = [;
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57';
  ];
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AnalyticsChartProps {
  title: string,
  description?: string,
  data: any[],
  type?: 'line' | 'bar',
  dataKeys: string[],
  timeRange?: string,
  onTimeRangeChange?: (range: string) => void
}

<<<<<<< HEAD

export function AnalyticsChart({ 
  title,

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function AnalyticsChart({ ;
  title;
export function AnalyticsChart({ 
  title,
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  description, 
  data, 
  type = 'line',
  dataKeys, 
  timeRange = '7d',
  onTimeRangeChange
}: AnalyticsChartProps) {
  const [chartType, setChartType] = useState<'line' | 'bar'>(type),
  
  const colors = [
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57'
  ],
  
<<<<<<< HEAD
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
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
  data_keys: string[],
  time_range?: string;
  onTimeRangeChange?: (range: string) => void;
}
export /**
 * AnalyticsChart - Function description
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
                <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <SelectItem value="1d">1 Day</SelectItem>;
                  <SelectItem value="7d">7 Days</SelectItem>;
                  <SelectItem value="30d">30 Days</SelectItem>;
                  <SelectItem value="90d">3 Months</SelectItem>;
                  <SelectItem value="365d">1 Year</SelectItem>;
                </SelectContent>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end"

<<<<<<< HEAD
  
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
=======
=======
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor="end"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { useState } from "react",;
interface AnalyticsChartProps {;
  title: string,;
  description?: string,;
  data: any[],;
  type?: 'line' | 'bar',;
  dataKeys: string[],;
  timeRange?: string,;
  onTimeRangeChange?: (range: string) => void;
}
;
export function AnalyticsChart({;
  title,;
  description,;
  data,;
  type = 'line',;
  dataKeys,;
  timeRange = '7d',;
  onTimeRangeChange;
}: AnalyticsChartProps) {;
  const [chartType, setChartType] = useState<'line' | 'bar'>(type),;
  const colors = [;
    '#8884d8#82ca9d#ffc658#ff8042#0088fe#00C49F#FFBB28#FF8042', '#a4de6c#d0ed57';
  ],;
  return (;
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
                  <SelectItem value="1d">1 Day</SelectItem>;
                  <SelectItem value="7d">7 Days</SelectItem>;
                  <SelectItem value="30d">30 Days</SelectItem>;
                  <SelectItem value="90d">3 Months</SelectItem>;
                  <SelectItem value="365d">1 Year</SelectItem>;
                </SelectContent>;
              </Select>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>;
              </Select>;
            )}
            <Select value={chartType} onValueChange={(value:'line' | 'bar') => setChartType(value)}>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>;
              <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">;
                <SelectValue placeholder="Chart Type" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
              </Select>)}
            <Select value={chart_type} onValueChange={(value: 'line' | 'bar') => setChartType (value)}>;
              <SelectTrigger className="w - 24 h - 8 text - xs bg - zion - blue border - zion - blue - light text - zion - slate - light">;
                <SelectValue placeholder="Chart Type" />;
              </SelectTrigger>;
              <SelectContent className="bg - zion - blue - dark border - zion - blue - light text - zion - slate - light">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <SelectItem value="line">Line</SelectItem>;
                <SelectItem value="bar">Bar</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  textAnchor="end";


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    stroke={colors[index % colors && colors.length]}
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />;
                ))}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CardContent className="p - 0">;
        <div className="h - 72 w - full p - 4">;
          <ResponsiveContainer width="100%" height="100%">;
            {chart_type === 'line' ? (
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;
                <CartesianGrid stroke_dasharray="3 3" stroke="#354151" />;
                <XAxis;
                  data_key="date";
                  tick={{ fill: '#b1b9c6', font_size: 12 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  angle={-30}
                  text_anchor="end";
                  height={50}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  angle={-30}
                  text_anchor="end";
                  height={50}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </LineChart>;
            ) : (;
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis
                  dataKey="date" 
                  tick={{ fill: '#b1b9c6', fontSize: 12 }} 
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                />;
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
                  <Line;
                    key={key}
                    type="monotone";
                    data_key={key}
                    stroke={colors[index % colors.length]}
                    active_dot={{ r: 8 }}
                    stroke_width={2}
                  />))}
              </LineChart>) : (
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;
                <CartesianGrid stroke_dasharray="3 3" stroke="#354151" />;
                <XAxis;
                  data_key="date";
                  tick={{ fill: '#b1b9c6', font_size: 12 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  angle={-30}
                  text_anchor="end";
                  height={50}
                />;
<<<<<<< HEAD
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
                  }}
                />
                <Legend />
                {dataKeys.map((key, index) => (
                  <Bar
                    key={key}
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                    key={key}
                    data_key={key}
                    fill={colors[index % colors.length]}
                    radius={[4, 4, 0, 0]}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  />))}
              </BarChart>)}
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </ResponsiveContainer>;
        </div>;
      </CardContent>;
    </Card>);
<<<<<<< HEAD
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
                    type="monotone";                    dataKey={key}
                    stroke={colors[index % colors.length]}
                    activeDot={{ r:8 }}
                    strokeWidth={2}
                  />;
                ))}
              </LineChart>;
            ) :(;
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
=======
}

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts',
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { useState } from "react",
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { useState } from &quot;react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface AnalyticsChartProps {
  title: string,
  description?: string,
  data: any[],
  type?: 'line' | 'bar',
  dataKeys: string[],
  timeRange?: string,
  onTimeRangeChange?: (range: string) => void
}

export function AnalyticsChart({ 
  title,
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
  
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light overflow-hidden&quot;>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex flex-col sm:flex-row justify-between sm:items-center gap-4&quot;>
          <div>
            <CardTitle className=&quot;text-white text-lg&quot;>{title}</CardTitle>
            {description && <CardDescription className=&quot;text-zion-slate-light&quot;>{description}</CardDescription>}
          </div>
          <div className=&quot;flex items-center gap-2&quot;>
            {onTimeRangeChange && (
              <Select value={timeRange} onValueChange={onTimeRangeChange}>
                <SelectTrigger className=&quot;w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light&quot;>
                  <SelectValue placeholder=&quot;Time Range&quot; />
                </SelectTrigger>
                <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light text-zion-slate-light&quot;>
                  <SelectItem value=&quot;1d&quot;>1 Day</SelectItem>
                  <SelectItem value=&quot;7d&quot;>7 Days</SelectItem>
                  <SelectItem value=&quot;30d&quot;>30 Days</SelectItem>
                  <SelectItem value=&quot;90d&quot;>3 Months</SelectItem>
                  <SelectItem value=&quot;365d&quot;>1 Year</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>
              <SelectTrigger className=&quot;w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light&quot;>
                <SelectValue placeholder=&quot;Chart Type&quot; />
              </SelectTrigger>
              <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light text-zion-slate-light&quot;>
                <SelectItem value=&quot;line&quot;>Line</SelectItem>
                <SelectItem value=&quot;bar&quot;>Bar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className=&quot;p-0&quot;>
        <div className=&quot;h-72 w-full p-4&quot;>
          <ResponsiveContainer width=&quot;100%&quot; height=&quot;100%&quot;>
            {chartType === 'line' ? (
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray=&quot;3 3&quot; stroke=&quot;#354151&quot; />
                <XAxis 
                  dataKey=&quot;date&quot; 
                  tick={{ fill: '#b1b9c6', fontSize: 12 }}
                  angle={-30}
                  textAnchor=&quot;end&quot;
=======
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
            <Select value={chartType} onValueChange={(value: 'line' | 'bar') => setChartType(value)}>;
              <SelectTrigger className="w-24 h-8 text-xs bg-zion-blue border-zion-blue-light text-zion-slate-light">;
                <SelectValue placeholder="Chart Type" />;
              </SelectTrigger>;
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-zion-slate-light">;
                <SelectItem value="line">Line</SelectItem>;
                <SelectItem value="bar">Bar</SelectItem>;
              </SelectContent>;
            </Select>;
          </div>;
        </div>;
      </CardHeader>;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  height={50}
                />;
                <YAxis tick={{ fill: '#b1b9c6', fontSize: 12 }} />;
                <Tooltip;
                  contentStyle={{;
                    backgroundColor: '#1a2332',;
                    borderColor: '#293445',;
                    color: '#fff';
                  }} ;
                />;
                <Legend />;
                {dataKeys.map((key, index) => (;
                  <Line;
                    key={key}
<<<<<<< HEAD
                    type=&quot;monotone&quot;
=======
                    type="monotone";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    dataKey={key}
                    stroke={colors[index % colors.length]}
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />;
                ))}
<<<<<<< HEAD
              </LineChart>
            ) : (
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray=&quot;3 3&quot; stroke=&quot;#354151&quot; />
                <XAxis 
                  dataKey=&quot;date&quot; 
                  tick={{ fill: '#b1b9c6', fontSize: 12 }} 
                  angle={-30}
                  textAnchor=&quot;end&quot;
=======
              </LineChart>;
            ) : (;
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>;
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />;
                <XAxis;
                  dataKey="date";
                  tick={{ fill: '#b1b9c6', fontSize: 12 }} ;
                  angle={-30}
                  textAnchor="end";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  height={50}
                />;
                <YAxis tick={{ fill: '#b1b9c6', fontSize: 12 }} />;
                <Tooltip;
                  contentStyle={{;
                    backgroundColor: '#1a2332';
                    borderColor: '#293445';
                    color: '#fff';
                  }} ;
                />;
                <Legend />;
                {dataKeys.map((key, index) => (;
                  <Bar;
                    key={key}
                    dataKey={key} ;
                    fill={colors[index % colors.length]} ;
                    radius={[4, 4, 0, 0]}
                  />;
                ))}
              </BarChart>;
            )}
          </ResponsiveContainer>;
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
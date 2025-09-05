

interface AnalyticsChartProps {_title: string;
  description?: string;
  data: unknown[];
  type?: 'line' | 'bar';
  dataKeys: string[];
  timeRange?: string;
  onTimeRangeChange?: (_range: string) => void;}

export function AnalyticsChart(_{_title, _description, _data, _type = 'line', _dataKeys, _timeRange = '7d', _onTimeRangeChange}: AnalyticsChartProps) {_const [chartType, _setChartType] = useState<'line' | 'bar'>(type);
  
  const _colors = [
    '#8884d8', _'#82ca9d', _'#ffc658', _'#ff8042', _'#0088fe', _'#00C49F', _'#FFBB28', _'#FF8042', _'#a4de6c', _'#d0ed57'
  ];
  
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <CardTitle className="text-white text-lg">{title}</CardTitle>
            {_description && <CardDescription className="text-zion-slate-light">{description}</CardDescription>}
          </div>
          <div className="flex items-center gap-2">
            {_onTimeRangeChange && (
              <Select value={timeRange} onValueChange={_onTimeRangeChange}>
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
            <Select value={_chartType} onValueChange={_(_value: 'line' | 'bar') => setChartType(value)}>
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
            {_chartType === 'line' ? (_<LineChart data={data} margin={_{ top: 5, _right: 30, _left: 20, _bottom: 25}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />
                <XAxis 
                  dataKey="date" 
                  tick={_{ fill: '#b1b9c6', _fontSize: 12}}
                  angle={_-30}
                  textAnchor="end"
                  height={_50}
                />
                <YAxis tick={_{ fill: '#b1b9c6', _fontSize: 12}} />
                <Tooltip 
                  contentStyle={_{ 
                    backgroundColor: '#1a2332', _borderColor: '#293445', _color: '#fff'}} 
                />
                <Legend />
                {_dataKeys.map((key, _index) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={_key}
                    stroke={_colors[index % colors.length]}
                    activeDot={_{ r: 8}}
                    strokeWidth={_2}
                  />
                ))}
              </LineChart>
            ) : (_<BarChart data={_data} margin={_{ top: 5, _right: 30, _left: 20, _bottom: 25}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#354151" />
                <XAxis 
                  dataKey="date" 
                  tick={_{ fill: '#b1b9c6', _fontSize: 12}} 
                  angle={_-30}
                  textAnchor="end"
                  height={_50}
                />
                <YAxis tick={_{ fill: '#b1b9c6', _fontSize: 12}} />
                <Tooltip 
                  contentStyle={_{ 
                    backgroundColor: '#1a2332', _borderColor: '#293445', _color: '#fff'}} 
                />
                <Legend />
                {_dataKeys.map((key, _index) => (
                  <Bar 
                    key={key}
                    dataKey={_key} 
                    fill={_colors[index % colors.length]} 
                    radius={_[4, _4, _0, _0]}
                  />
                ))}
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

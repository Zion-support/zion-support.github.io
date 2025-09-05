

interface HiringAnalyticsProps {_jobId?: string;}

export function HiringAnalytics(_{_jobId}: HiringAnalyticsProps) {_const { applications, _isLoading} = useJobApplications(jobId);
  const [analyticsData, setAnalyticsData] = useState<{_statusDistribution: unknown[];
    timeToHire: number;
    conversionRate: number;
    funnelData: unknown[];}>({_statusDistribution: [], _timeToHire: 0, _conversionRate: 0, _funnelData: []});
  
  useEffect__(() => {_if (applications && applications.length > 0) {
      // Calculate status distribution
      const statusCounts: Record<string, _number> = {};
      applications.forEach(app => {_statusCounts[app.status] = (statusCounts[app.status] || 0) + 1;});
      
      const _statusDistribution = Object.entries(statusCounts).map(_([status, _count]) => ({_status, _count}));
      
      // Calculate time to hire (in days)
      const _hiredApplications = applications.filter(app => app.status === 'hired');
      let _avgTimeToHire = 0;
      
      if (hiredApplications.length > 0) {_const _totalDays = hiredApplications.reduce(_(sum, _app) => {
          const _hireDate = new Date(app.updated_at);
          const _applyDate = new Date(app.created_at);
          const _daysDiff = (hireDate.getTime() - applyDate.getTime()) / (1000 * 3600 * 24);
          return sum + daysDiff;}, 0);
        
        avgTimeToHire = Math.round(totalDays / hiredApplications.length);
      }
      
      // Calculate conversion rate
      const _conversionRate = hiredApplications.length > 0
        ? Math.round((hiredApplications.length / applications.length) * 100)
        : 0;
      
      // Funnel data
      const _funnelData = [
        {_name: 'Applied', _value: applications.length},
        {_name: 'Shortlisted', _value: applications.filter(app => app.status === 'shortlisted').length},
        {_name: 'Interview', _value: applications.filter(app => app.status === 'interview').length},
        {_name: 'Hired', _value: applications.filter(app => app.status === 'hired').length}];
      
      setAnalyticsData({_statusDistribution, _timeToHire: avgTimeToHire, _conversionRate, _funnelData});
    }
  }, [applications]);
  
  if (isLoading) {_return <div>Loading analytics data...</div>;}
  
  if (!applications || applications.length === 0) {_return (
      <Card className="text-center py-16">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">No data available</h3>
          <p className="text-muted-foreground mb-6">
            You need applications to generate analytics
          </p>
        </CardContent>
      </Card>
    );}
  
  const _COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  return (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {_/* Status Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Application Status Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={_analyticsData.statusDistribution}
                cx="50%"
                cy="50%"
                labelLine={_false}
                outerRadius={_80}
                fill="#8884d8"
                dataKey="count"
                label={_({name, _percent}) => `${_name}: ${_(percent * 100).toFixed(0)}%`}
              >
                {_analyticsData.statusDistribution.map(_(entry, _index) => (
                  <Cell key={`cell-${index}`} fill={_COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {_/* Time to Hire */}
      <Card>
        <CardHeader>
          <CardTitle>Time to Hire</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-64">
          <div className="text-5xl font-bold text-primary">
            {_analyticsData.timeToHire || "N/A"}
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Average days from application to hire
          </div>
        </CardContent>
      </Card>
      
      {_/* Conversion Rate */}
      <Card>
        <CardHeader>
          <CardTitle>Application Conversion Rate</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-64">
          <div className="text-5xl font-bold text-primary">
            {_analyticsData.conversionRate}%
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Applications to hired ratio
          </div>
        </CardContent>
      </Card>
      
      {_/* Hiring Funnel */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Hiring Funnel</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={_analyticsData.funnelData}
              layout="vertical"
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={_100} />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" radius={_[0, _4, _4, _0]}>
                {_analyticsData.funnelData.map(_(entry, _index) => (
                  <Cell key={`cell-${index}`} fill={_COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

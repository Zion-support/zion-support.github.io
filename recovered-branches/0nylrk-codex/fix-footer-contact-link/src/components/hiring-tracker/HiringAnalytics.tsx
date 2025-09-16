

interface HiringAnalyticsProps {
  jobId?: string;
}

export function HiringAnalytics({ jobId }: HiringAnalyticsProps) {
    statusDistribution: any[];
    timeToHire: number;
    conversionRate: number;
    funnelData: any[];
  }>({
    statusDistribution: [],
    timeToHire: 0,
    conversionRate: 0,
  
  useEffect(() => {
    if (applications && applications.length > 0) {
      // Calculate status distribution
      applications.forEach(app => {
        statusCounts[app.status] = (statusCounts[app.status] || 0) + 1;
      });
      
      
      // Calculate time to hire (in days)
      const hiredApplications = applications.filter(app => app.status === 'hired');
      let avgTimeToHire = 0;
      
      if (hiredApplications.length > 0) {
          const hireDate = new Date(app.updated_at);
          const applyDate = new Date(app.created_at);
          const daysDiff = (hireDate.getTime() - applyDate.getTime()) / (1000 * 3600 * 24);
          return sum + daysDiff;
        
        avgTimeToHire = Math.round(totalDays / hiredApplications.length);
      }
      
      // Calculate conversion rate
      const conversionRate = hiredApplications.length > 0
        ? Math.round((hiredApplications.length / applications.length) * 100)
        : 0;
      
      // Funnel data
      const funnelData = [
      
      setAnalyticsData({
        statusDistribution,
        timeToHire: avgTimeToHire,
        conversionRate,
  
  if (isLoading) {
    return <div>Loading analytics data...</div>;
  }
  
  if (!applications || applications.length === 0) {
    return (
      <Card className="text-center py-16">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">No data available</h3>
          <p className="text-muted-foreground mb-6">
            You need applications to generate analytics
          </p>
        </CardContent>
      </Card>
    );
  }
  
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Status Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Application Status Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={analyticsData.statusDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* Time to Hire */}
      <Card>
        <CardHeader>
          <CardTitle>Time to Hire</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-64">
          <div className="text-5xl font-bold text-primary">
            {analyticsData.timeToHire || "N/A"}
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Average days from application to hire
          </div>
        </CardContent>
      </Card>
      
      {/* Conversion Rate */}
      <Card>
        <CardHeader>
          <CardTitle>Application Conversion Rate</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-64">
          <div className="text-5xl font-bold text-primary">
            {analyticsData.conversionRate}%
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Applications to hired ratio
          </div>
        </CardContent>
      </Card>
      
      {/* Hiring Funnel */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Hiring Funnel</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={analyticsData.funnelData}
              layout="vertical"
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

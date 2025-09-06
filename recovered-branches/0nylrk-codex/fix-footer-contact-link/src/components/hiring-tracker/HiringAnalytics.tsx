
import { useState, useEffect } from "react";
import { useJobApplications } from "@/hooks/useJobApplications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
interface HiringAnalyticsProps {
  jobId?: string
}

export function HiringAnalytics({ jobId }: HiringAnalyticsProps) {
  const { applications, isLoading } = useJobApplications($2);
  const [analyticsData, setAnalyticsData] = useState<{
    statusDistribution: any[],
    timeToHire: number,
    conversionRate: number,
    funnelData: any[]
  }>({
    statusDistribution: [],
    timeToHire: 0,
    conversionRate: 0,
    funnelData: []}),
  
  useEffect(() => {
    if (applications && applications.length > 0) {
      // Calculate status distribution
      const statusCounts: Record<string, number> = {},
      applications.forEach(app = $2;
      const statusDistribution = Object.entries(statusCounts).map(([status, count]) => ({
        status,
        count})),
      
      // Calculate time to hire (in days)
      const hiredApplications = applications.filter($2);
      let avgTimeToHire = $2;
      if (hiredApplications.length > 0) {
        const totalDays = hiredApplications.reduce((sum, app) => {
          const hireDate = new Date($2);
          const applyDate = new Date($2);
          const daysDiff = $2;
          return sum + daysDiff
        }, 0),
        
        avgTimeToHire = $2;
      // Funnel data
      const funnelData = [
        { name: 'Applied', value: applications.length },
        { name: 'Shortlisted', value: applications.filter(app = $2;
        { name: 'Interview', value: applications.filter(app = $2;
        { name: 'Hired', value: applications.filter(app = $2;
      setAnalyticsData({
        statusDistribution,
        timeToHire: avgTimeToHire,
        conversionRate,
        funnelData})
    }
  }, [applications]),
  
  if (isLoading) {
    return <div>Loading analytics data...</div>
  }
  
  if (!applications || applications.length = $2;
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
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {analyticsData.statusDistribution.map((entry, index) => (
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
              <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]}>
                {analyticsData.funnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

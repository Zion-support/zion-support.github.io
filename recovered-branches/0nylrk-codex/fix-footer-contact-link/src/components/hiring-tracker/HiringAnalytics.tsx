
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts',
=======
import { useState, useEffect } from &quot;react&quot;;
import { useJobApplications } from &quot;@/hooks/useJobApplications&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface HiringAnalyticsProps {
  jobId?: string
}

export function HiringAnalytics({ jobId }: HiringAnalyticsProps) {
  const { applications, isLoading } = useJobApplications(jobId),
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
=======

interface HiringAnalyticsProps {_jobId?: string;}

export function HiringAnalytics(_{_jobId}: HiringAnalyticsProps) {_const { applications, _isLoading} = useJobApplications(jobId);
  const [analyticsData, setAnalyticsData] = useState<{_statusDistribution: unknown[];
    timeToHire: number;
    conversionRate: number;
    funnelData: unknown[];}>({_statusDistribution: [], _timeToHire: 0, _conversionRate: 0, _funnelData: []});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  useEffect__(() => {_if (applications && applications.length > 0) {
      // Calculate status distribution
<<<<<<< HEAD
      const statusCounts: Record<string number> = {},
      applications.forEach(app => {
        statusCounts[app.status] = (statusCounts[app.status] || 0) + 1
      }),
      
      const statusDistribution = Object.entries(statusCounts).map(([status, count]) => ({
        status,
        count})),
      
      // Calculate time to hire (in days)
      const hiredApplications = applications.filter(app => app.status === 'hired'),
      let avgTimeToHire = 0,
      
      if (hiredApplications.length > 0) {
        const totalDays = hiredApplications.reduce((sum, app) => {
          const hireDate = new Date(app.updated_at),
          const applyDate = new Date(app.created_at),
          const daysDiff = (hireDate.getTime() - applyDate.getTime()) / (1000 * 3600 * 24),
          return sum + daysDiff
        }, 0),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        avgTimeToHire = Math.round(totalDays / hiredApplications.length)
      }
      
      // Calculate conversion rate
      const _conversionRate = hiredApplications.length > 0
        ? Math.round((hiredApplications.length / applications.length) * 100)
        : 0,
      
      // Funnel data
<<<<<<< HEAD
      const funnelData = [
        { name: 'Applied', value: applications.length },
        { name: 'Shortlisted', value: applications.filter(app => app.status === 'shortlisted').length },
        { name: 'Interview', value: applications.filter(app => app.status === 'interview').length },
        { name: 'Hired', value: applications.filter(app => app.status === 'hired').length }],
      
      setAnalyticsData({
        statusDistribution,
        timeToHire: avgTimeToHire,
        conversionRate,
        funnelData})
=======
      const _funnelData = [
        {_name: 'Applied', _value: applications.length},
        {_name: 'Shortlisted', _value: applications.filter(app => app.status === 'shortlisted').length},
        {_name: 'Interview', _value: applications.filter(app => app.status === 'interview').length},
        {_name: 'Hired', _value: applications.filter(app => app.status === 'hired').length}];
      
      setAnalyticsData({_statusDistribution, _timeToHire: avgTimeToHire, _conversionRate, _funnelData});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [applications]),
  
<<<<<<< HEAD
  if (isLoading) {
    return <div>Loading analytics data...</div>
  }
  
  if (!applications || applications.length === 0) {
    return (
      <Card className=&quot;text-center py-16&quot;>
=======
  if (isLoading) {_return <div>Loading analytics data...</div>;}
  
  if (!applications || applications.length === 0) {_return (
      <Card className="text-center py-16">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <CardContent>
          <h3 className=&quot;text-lg font-semibold mb-2&quot;>No data available</h3>
          <p className=&quot;text-muted-foreground mb-6&quot;>
            You need applications to generate analytics
          </p>
        </CardContent>
      </Card>
<<<<<<< HEAD
    )
  }
  
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'],
  
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
      {/* Status Distribution */}
=======
    );}
  
  const _COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  return (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {_/* Status Distribution */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Card>
        <CardHeader>
          <CardTitle>Application Status Distribution</CardTitle>
        </CardHeader>
        <CardContent className=&quot;h-64&quot;>
          <ResponsiveContainer width=&quot;100%&quot; height=&quot;100%&quot;>
            <PieChart>
              <Pie
<<<<<<< HEAD
                data={analyticsData.statusDistribution}
                cx=&quot;50%&quot;
                cy=&quot;50%&quot;
                labelLine={false}
                outerRadius={80}
                fill=&quot;#8884d8&quot;
                dataKey=&quot;count&quot;
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
=======
                data={_analyticsData.statusDistribution}
                cx="50%"
                cy="50%"
                labelLine={_false}
                outerRadius={_80}
                fill="#8884d8"
                dataKey="count"
                label={_({name, _percent}) => `${_name}: ${_(percent * 100).toFixed(0)}%`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        <CardContent className=&quot;flex flex-col items-center justify-center h-64&quot;>
          <div className=&quot;text-5xl font-bold text-primary&quot;>
            {analyticsData.timeToHire || &quot;N/A&quot;}
=======
        <CardContent className="flex flex-col items-center justify-center h-64">
          <div className="text-5xl font-bold text-primary">
            {_analyticsData.timeToHire || "N/A"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <div className=&quot;text-sm text-muted-foreground mt-2&quot;>
            Average days from application to hire
          </div>
        </CardContent>
      </Card>
      
      {_/* Conversion Rate */}
      <Card>
        <CardHeader>
          <CardTitle>Application Conversion Rate</CardTitle>
        </CardHeader>
<<<<<<< HEAD
        <CardContent className=&quot;flex flex-col items-center justify-center h-64&quot;>
          <div className=&quot;text-5xl font-bold text-primary&quot;>
            {analyticsData.conversionRate}%
=======
        <CardContent className="flex flex-col items-center justify-center h-64">
          <div className="text-5xl font-bold text-primary">
            {_analyticsData.conversionRate}%
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <div className=&quot;text-sm text-muted-foreground mt-2&quot;>
            Applications to hired ratio
          </div>
        </CardContent>
      </Card>
      
<<<<<<< HEAD
      {/* Hiring Funnel */}
      <Card className=&quot;lg:col-span-3&quot;>
=======
      {_/* Hiring Funnel */}
      <Card className="lg:col-span-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <CardHeader>
          <CardTitle>Hiring Funnel</CardTitle>
        </CardHeader>
        <CardContent className=&quot;h-80&quot;>
          <ResponsiveContainer width=&quot;100%&quot; height=&quot;100%&quot;>
            <BarChart
<<<<<<< HEAD
              data={analyticsData.funnelData}
              layout=&quot;vertical&quot;
            >
              <XAxis type=&quot;number&quot; />
              <YAxis dataKey=&quot;name&quot; type=&quot;category&quot; width={100} />
              <Tooltip />
              <Bar dataKey=&quot;value&quot; fill=&quot;#8884d8&quot; radius={[0, 4, 4, 0]}>
                {analyticsData.funnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
=======
              data={_analyticsData.funnelData}
              layout="vertical"
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={_100} />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" radius={_[0, _4, _4, _0]}>
                {_analyticsData.funnelData.map(_(entry, _index) => (
                  <Cell key={`cell-${index}`} fill={_COLORS[index % COLORS.length]} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

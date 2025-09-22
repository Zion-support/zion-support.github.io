
import { useState, useEffect } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts',;
;
interface HiringAnalyticsProps {;
  jobId?:string,;
}
;
export function HiringAnalytics({ jobId } HiringAnalyticsProps) {;
  const { applications, isLoading } = useJobApplications(jobId),;
  const [analyticsData, setAnalyticsData] = useState<{;
    statusDistribution:any[],;
    timeToHire:number,;
    conversionRate:number,;
    funnelData:any[];
  }>({;
    statusDistribution:[],;
    timeToHire:0,;
    conversionRate:0,;
    funnelData:[]}),;
  ;
  useEffect(() => {;
    if (applications && applications.length > 0) {;
      // Calculate status distribution;
      const statusCounts:Record<string number> = {},;
      applications.forEach(app => {;
        statusCounts[app.status] = (statusCounts[app.status] || 0) + 1,;
      }),;
      ;
      const statusDistribution = Object.entries(statusCounts).map(([status, count]) => ({;
        status,;
        count})),;
      ;
      // Calculate time to hire (in days);
      const hiredApplications = applications.filter(app => app.status === 'hired'),;
      let avgTimeToHire = 0,;
      ;
      if (hiredApplications.length > 0) {;
        const totalDays = hiredApplications.reduce((sum, app) => {;
          const hireDate = new Date(app.updated_at),;
          const applyDate = new Date(app.created_at),;
          const daysDiff = (hireDate.getTime() - applyDate.getTime()) / (1000 * 3600 * 24),;
          return sum + daysDiff,;
        }, 0),;
        ;
        avgTimeToHire = Math.round(totalDays / hiredApplications.length),;
      }
      ;
      // Calculate conversion rate;
      const conversionRate = hiredApplications.length > 0;
        ? Math.round((hiredApplications.length / applications.length) * 100);
        :0,;
      ;
      // Funnel data;
      const funnelData = [;
        { name:'Applied', value:applications.length },;
        { name:'Shortlisted', value:applications.filter(app => app.status === 'shortlisted').length },;
        { name:'Interview', value:applications.filter(app => app.status === 'interview').length },;
        { name:'Hired', value:applications.filter(app => app.status === 'hired').length }],;
      ;
      setAnalyticsData({;
        statusDistribution,;
        timeToHire:avgTimeToHire,;
        conversionRate,;
        funnelData}),;
    }
  }, [applications]),;
  ;
  if (isLoading) {;
    return <div>Loading analytics data...</div>,;
  }
  ;
  if (!applications || applications.length === 0) {;
    return (;
      <Card className="text-center py-16">;
        <CardContent>;
          <h3 className="text-lg font-semibold mb-2">No data available</h3>;
          <p className="text-muted-foreground mb-6">;
            You need applications to generate analytics;
          </p>;
        </CardContent>;
      </Card>;

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
      {/* Status Distribution */}
      <Card>;
        <CardHeader>;
          <CardTitle>Application Status Distribution</CardTitle>;
        </CardHeader>;
        <CardContent className="h-64">;
          <ResponsiveContainer width="100%" height="100%">;
            <PieChart>;

                ))}
              </Pie>;
              <Tooltip />;
            </PieChart>;
          </ResponsiveContainer>;
        </CardContent>;
      </Card>;

      {/* Time to Hire */}
      <Card>;
        <CardHeader>;
          <CardTitle>Time to Hire</CardTitle>;
        </CardHeader>;
        <CardContent className="flex flex-col items-center justify-center h-64">;
          <div className="text-5xl font-bold text-primary">;

          </div>;
          <div className="text-sm text-muted-foreground mt-2">;
            Average days from application to hire;
          </div>;
        </CardContent>;
      </Card>;

      {/* Conversion Rate */}
      <Card>;
        <CardHeader>;
          <CardTitle>Application Conversion Rate</CardTitle>;
        </CardHeader>;
        <CardContent className="flex flex-col items-center justify-center h-64">;
          <div className="text-5xl font-bold text-primary">;

          </div>;
          <div className="text-sm text-muted-foreground mt-2">;
            Applications to hired ratio;
          </div>;
        </CardContent>;
      </Card>;

      {/* Hiring Funnel */}
      <Card className="lg:col-span-3">;
        <CardHeader>;
          <CardTitle>Hiring Funnel</CardTitle>;
        </CardHeader>;
        <CardContent className="h-80">;
          <ResponsiveContainer width="100%" height="100%">;

              <XAxis type="number" />;
              <YAxis dataKey="name" type="category" width={100} />;
              <Tooltip />;
              <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]}>;

              </Bar>;
            </BarChart>;
          </ResponsiveContainer>;
        </CardContent>;
      </Card>;

}
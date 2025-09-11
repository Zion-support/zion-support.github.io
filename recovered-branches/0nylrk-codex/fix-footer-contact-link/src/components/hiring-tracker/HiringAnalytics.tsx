
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
interface HiringAnalyticsProps {
  jobId?: string
}
export function HiringAnalytics({ jobId }: HiringAnalyticsProps) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState, useEffect } from './react';
import { useJobApplications } from '@/hooks / useJobApplications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import {PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

interface HiringAnalyticsProps {
  job_id?: string;
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState, useEffect} from "react";
import {useJobApplications} from "@/hooks/useJobApplications";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
<<<<<<< HEAD
<<<<<<< HEAD
interface HiringAnalyticsProps {
  jobId?: string
}

export function HiringAnalytics({ jobId }: HiringAnalyticsProps) {;
  const { applications, isLoading } = useJobApplications(jobId);
  const [analyticsData, setAnalyticsData] = useState<{

    statusDistribution: any[]
    timeToHire: number
    conversionRate: number
    funnelData: any[]
  }>({
    statusDistribution: []
    timeToHire: 0
    conversionRate: 0
    funnelData: []})
  useEffect(() => {
    if (applications && applications.length > 0) {
      // Calculate status distribution
      const statusCounts: Record<string, number> = {}
      applications.forEach(app => {
        statusCounts[app.status] = (statusCounts[app.status] |0) + 1
      });
      const statusDistribution = Object.entries(statusCounts).map(([status, count]) => ({
        status;
        count}));
      // Calculate time to hire (in days)
      const hiredApplications = applications.filter(app => app.status === 'hired');
      let avgTimeToHire = 0;
      if (hiredApplications.length > 0) {
        const totalDays = hiredApplications.reduce((sum, app) => {
          const hireDate = new Date(app.updated_at);
          const applyDate = new Date(app.created_at);
          const daysDiff = (hireDate.getTime() - applyDate.getTime()) / (1000 * 3600 * 24);
          return sum + daysDiff
        }, 0);
        avgTimeToHire = Math.round(totalDays / hiredApplications.length)
      }
      // Calculate conversion rate
      const conversionRate = hiredApplications.length > 0
        ? Math.round((hiredApplications.length / applications.length) * 100)
        : 0;
      // Funnel data
      const funnelData = [
        { name: 'Applied', value: applications.length }
        { name: 'Shortlisted', value: applications.filter(app => app.status === 'shortlisted').length }
        { name: 'Interview', value: applications.filter(app => app.status === 'interview').length }
        { name: 'Hired', value: applications.filter(app => app.status === 'hired').length }]
      setAnalyticsData({
        statusDistribution;
        timeToHire: avgTimeToHire
        conversionRate;
        funnelData})
    }
  }, [applications]);
  if (isLoading) {
    return <div>Loading analytics data...</div>
  }
  if (!applications |applications.length === 0) {
import { useState, useEffect } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts',

interface HiringAnalyticsProps {
  jobId?: string
import { useState, useEffect } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts',;
interface HiringAnalyticsProps {
  job_id?: string;
}
import {useState, useEffect} from "react";
import {useJobApplications} from "@/hooks/useJobApplications";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
interface HiringAnalyticsProps {;
  jobId?: string;
}
export function HiringAnalytics(): any ({ jobId }: HiringAnalyticsProps) {;
  const { applications, isLoading } = useJobApplications(jobId);
interface HiringAnalyticsProps {;
  jobId?: string;
}
;
export function HiringAnalytics({ jobId }: HiringAnalyticsProps) {;
  const { applications, isLoading } = useJobApplications(jobId),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface HiringAnalyticsProps {;
  jobId?: string;
}

export function HiringAnalytics(): any ({ jobId }: HiringAnalyticsProps) {;
  const { applications, isLoading } = useJobApplications(jobId);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [analyticsData, setAnalyticsData] = useState<{;
    statusDistribution: any[],;
    timeToHire: number,;
    conversionRate: number,;
    funnelData: any[];
  }>({;
    statusDistribution: [],;
    timeToHire: 0,;
    conversionRate: 0,;
    funnelData: []}),;
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {;
    if (applications && applications.length > 0) {;
      // Calculate status distribution;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  useEffect(() => {;
    if (applications && applications.length > 0) {;
      // Calculate status distribution;
      const statusCounts: Record<string, number> = {};
      applications && applications.forEach(app => {;
        statusCounts[app && app.status] = (statusCounts[app && app.status] || 0) + 1;
      });

      const statusDistribution = Object && Object.entries(statusCounts).map(([status, count]) => ({;
        status;
        count}));

      // Calculate time to hire (in days);
      const hiredApplications = applications && applications.filter(app => app && app.status === 'hired');
      let avgTimeToHire = 0;

      if (hiredApplications && hiredApplications.length > 0) {;
        const totalDays = hiredApplications && hiredApplications.reduce((sum, app) => {;
          const hireDate = new Date(app && app.updated_at);
          const applyDate = new Date(app && app.created_at);
          const daysDiff = (hireDate && hireDate.getTime() - applyDate && applyDate.getTime()) / (1000 * 3600 * 24);
          return sum + daysDiff;
        }, 0);

        avgTimeToHire = Math && Math.round(totalDays / hiredApplications && hiredApplications.length);
      }

      // Calculate conversion rate;
      const conversionRate = hiredApplications && hiredApplications.length > 0;
        ? Math && Math.round((hiredApplications && hiredApplications.length / applications.length) * 100);
        : 0;

      // Funnel data;
      const funnelData = [;
        { name: 'Applied', value: applications.length },;
        { name: 'Shortlisted', value: applications && applications.filter(app => app && app.status === 'shortlisted').length },;
        { name: 'Interview', value: applications && applications.filter(app => app && app.status === 'interview').length },;
        { name: 'Hired', value: applications && applications.filter(app => app && app.status === 'hired').length }],;

      setAnalyticsData({;
        statusDistribution;
        timeToHire: avgTimeToHire,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        conversionRate;
        funnelData});
    }
  }, [applications]);
<<<<<<< HEAD
<<<<<<< HEAD
  if (isLoading) {;
    return <div>Loading analytics data...</div>;
  }
  if (!applications || applications.length === 0) {;
    return (

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
      const statusCounts: Record<string number> = {},;
      applications.forEach(app => {;
        statusCounts[app.status] = (statusCounts[app.status] || 0) + 1;
      }),;
      const statusDistribution = Object.entries(statusCounts).map(([status, count]) => ({;
        status,;
        count})),;
      // Calculate time to hire (in days);
      const hiredApplications = applications.filter(app => app.status === 'hired'),;
      let avgTimeToHire = 0,;
      if (hiredApplications.length > 0) {;
        const totalDays = hiredApplications.reduce((sum, app) => {;
          const hireDate = new Date(app.updated_at),;
          const applyDate = new Date(app.created_at),;
          const daysDiff = (hireDate.getTime() - applyDate.getTime()) / (1000 * 3600 * 24),;


  }
  
  if (!applications || applications.length === 0) {

          return sum + daysDiff;
        }, 0),;
        avgTimeToHire = Math.round(totalDays / hiredApplications.length);
      }
;
      // Calculate conversion rate;
      const conversionRate = hiredApplications.length > 0;
        ? Math.round((hiredApplications.length / applications.length) * 100);
        : 0,;
      // Funnel data;
      const funnelData = [;
        { name: 'Applied', value: applications.length },;
        { name: 'Shortlisted', value: applications.filter(app => app.status === 'shortlisted').length },;
        { name: 'Interview', value: applications.filter(app => app.status === 'interview').length },;
        { name: 'Hired', value: applications.filter(app => app.status === 'hired').length }],;
      setAnalyticsData({;
        statusDistribution,;
        timeToHire: avgTimeToHire,;
        conversionRate,;
        funnelData});
    }
  }, [applications]);
  if (isLoading) {;
    return <div>Loading analytics data...</div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  if (isLoading) {;
    return <div>Loading analytics data...</div>;
  }

  if (!applications || applications.length === 0) {;

    return (
      <Card className="text-center py-16">;
        <CardContent>;
          <h3 className="text-lg font-semibold mb-2">No data available</h3>;
          <p className="text-muted-foreground mb-6">;
            You need applications to generate analytics;
          </p>;
        </CardContent>;
      </Card>;
    );
  }



  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'];

=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
  
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'],
  
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'];
  return (
    ),;
  }
  ;
  const COLORS = ['#0088FE#00C49F', '#FFBB28#FF8042', '#8884d8'],;
  ;
  return (;
=======
=======
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'],
  
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
      {/* Status Distribution */}
      <Card>;
        <CardHeader>;
          <CardTitle>Application Status Distribution</CardTitle>;
        </CardHeader>;
        <CardContent className="h-64">;
          <ResponsiveContainer width="100%" height="100%">;
            <PieChart>;
<<<<<<< HEAD
<<<<<<< HEAD
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'];

  
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'],
  
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
=======
              <Pie
                data={analyticsData && analyticsData.statusDistribution}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Pie
                data={analyticsData && analyticsData.statusDistribution}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
<<<<<<< HEAD
<<<<<<< HEAD
              <Pie;
                data={analyticsData.statusDistribution}
                cx="50%";
                cy="50%";
                labelLine={false}
                outerRadius={80}
                fill="#8884d8";
                dataKey="count";
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >;
                {analyticsData.statusDistribution.map((entry, index) => (;
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />;
                ))}
=======
              >;
                {analyticsData && analyticsData.statusDistribution.map((entry, index) => (;
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS && COLORS.length]} />;
                ))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Pie>;
              <Tooltip />;
            </PieChart>;
          </ResponsiveContainer>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Time to Hire */}
      <Card>;
        <CardHeader>;
          <CardTitle>Time to Hire</CardTitle>;
        </CardHeader>;
        <CardContent className="flex flex-col items-center justify-center h-64">;
          <div className="text-5xl font-bold text-primary">;
<<<<<<< HEAD
            {analyticsData.timeToHire || "N/A"}
=======
            {analyticsData && analyticsData.timeToHire || "N/A"}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
          <div className="text-sm text-muted-foreground mt-2">;
            Average days from application to hire;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Conversion Rate */}
      <Card>;
        <CardHeader>;
          <CardTitle>Application Conversion Rate</CardTitle>;
        </CardHeader>;
        <CardContent className="flex flex-col items-center justify-center h-64">;
          <div className="text-5xl font-bold text-primary">;
<<<<<<< HEAD
            {analyticsData.conversionRate}%;
=======
            {analyticsData && analyticsData.conversionRate}%;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
          <div className="text-sm text-muted-foreground mt-2">;
            Applications to hired ratio;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
      ;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Hiring Funnel */}
      <Card className="lg:col-span-3">;
        <CardHeader>;
          <CardTitle>Hiring Funnel</CardTitle>;
        </CardHeader>;
        <CardContent className="h-80">;
          <ResponsiveContainer width="100%" height="100%">;
<<<<<<< HEAD
            <BarChart;
              data={analyticsData.funnelData}
              layout="vertical";
            >;
=======
            <BarChart
              data={analyticsData && analyticsData.funnelData}
              layout="vertical">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <XAxis type="number" />;
              <YAxis dataKey="name" type="category" width={100} />;
              <Tooltip />;
              <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]}>;
<<<<<<< HEAD
export /**
 * HiringAnalytics - Function description
 */
function HiringAnalytics() {
  const { applications, is_loading } = useJobApplications (job_id);
  const [analytics_data, setAnalyticsData] = useState<{
    status_distribution: any[],
    timeToHire: number,
    conversion_rate: number,
    funnel_data: any[];
  }>({
    status_distribution: [],
    timeToHire: 0,
    conversion_rate: 0,
    funnel_data: []}),
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      // Calculate status distribution;
      const status_counts: Record < string, number> = {}
      applications.for_each (app => {
        status_counts[app.status] = (status_counts[app.status] || 0) + 1;
      });
;
      const status_distribution = Object.entries (status_counts).map (([status, count]) => ({
        status;
        count}));
;
      // Calculate time to hire (in days);
      const hired_applications = applications.filter (app => app.status === 'hired');
      let avgTimeToHire = 0;
;
      // Check condition
if ( {) {
  $2
}
        const total_days = hired_applications.reduce ((sum, app) => {
          const hire_date = new Date (app.updated_at);
          const apply_date = new Date (app.created_at);
          const days_diff = (hire_date.get_time () - apply_date.get_time ()) / (1000 * 3600 * 24);
          return sum + days_diff;
        }, 0);
;
        avgTimeToHire = Math.round (total_days / hired_applications.length);
      }
      // Calculate conversion rate;
      const conversion_rate = hired_applications.length > 0;
        ? Math.round ((hired_applications.length / applications.length) * 100);
        : 0;
;
      // Funnel data;
      const funnel_data = [;
        { name: 'Applied', value: applications.length },
        { name: 'Shortlisted', value: applications.filter (app => app.status === 'shortlisted').length },
        { name: 'Interview', value: applications.filter (app => app.status === 'interview').length },
        { name: 'Hired', value: applications.filter (app => app.status === 'hired').length }],
      setAnalyticsData ({
        status_distribution;
        timeToHire: avgTimeToHire,
        conversion_rate;
        funnel_data});
    }
  }, [applications]);
;
  // Check condition
if ( {) {
  $2
}
    return <div > Loading analytics data...</div>;
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className="text - center py - 16">;
        <CardContent>;
          <h3 className="text - lg font - semibold mb - 2">No data available</h3>;
          <p className="text - muted - foreground mb - 6">;
            You need applications to generate analytics;
          </p>;
        </CardContent>;
      </Card>);
  }
  const COLORS = ['#0088FE#00C49F#FFBB28#FF8042#8884d8'];
;
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
      {/* Status Distribution */}
      <Card>;
        <CardHeader>;
          <CardTitle > Application Status Distribution</CardTitle>;
        </CardHeader>;
        <CardContent className="h - 64">;
          <ResponsiveContainer width="100%" height="100%">;
            <PieChart>;
              <Pie;
                data={analytics_data.status_distribution}
                cx="50%";
                cy="50%";
                label_line={false}
                outer_radius={80}
                fill="#8884d8";
                data_key="count";
                label={({name, percent}) => `${name}: ${(percent * 100).to_fixed (0)}%`}
              >;
                {analytics_data.status_distribution.map ((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
              </Pie>;
              <Tooltip />;
            </PieChart>;
          </ResponsiveContainer>;
        </CardContent>;
      </Card>;
      {/* Time to Hire */}
      <Card>;
        <CardHeader>;
          <CardTitle > Time to Hire</CardTitle>;
        </CardHeader>;
        <CardContent className="flex flex - col items - center justify - center h - 64">;
          <div className="text - 5xl font - bold text - primary">;
            {analytics_data.timeToHire || "N / A"}
          </div>;
          <div className="text - sm text - muted - foreground mt - 2">;
            Average days from application to hire;
          </div>;
        </CardContent>;
      </Card>;
      {/* Conversion Rate */}
      <Card>;
        <CardHeader>;
          <CardTitle > Application Conversion Rate</CardTitle>;
        </CardHeader>;
        <CardContent className="flex flex - col items - center justify - center h - 64">;
          <div className="text - 5xl font - bold text - primary">;
            {analytics_data.conversion_rate}%;
          </div>;
          <div className="text - sm text - muted - foreground mt - 2">;
            Applications to hired ratio;
          </div>;
        </CardContent>;
      </Card>;
      {/* Hiring Funnel */}
      <Card className="lg:col - span - 3">;
        <CardHeader>;
          <CardTitle > Hiring Funnel</CardTitle>;
        </CardHeader>;
        <CardContent className="h - 80">;
          <ResponsiveContainer width="100%" height="100%">;
            <BarChart;
              data={analytics_data.funnel_data}
              layout="vertical";
            >;
              <XAxis type="number" />;
              <YAxis data_key="name" type="category" width={100} />;
              <Tooltip />;
              <Bar data_key="value" fill="#8884d8" radius={[0, 4, 4, 0]}>;
                {analytics_data.funnel_data.map ((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}

<<<<<<< HEAD
                {analyticsData.funnelData.map((entry, index) => (;
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />;
                ))}
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
            {analyticsData.timeToHire |"N/A"}
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
=======
                {analyticsData && analyticsData.funnelData.map((entry, index) => (;
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS && COLORS.length]} />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Bar>;
            </BarChart>;
          </ResponsiveContainer>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  ),; interface HiringAnalyticsProps {
  jobId?: string 
}export function HiringAnalytics ({
  jobId 
}: HiringAnalyticsProps) {
  const {
  applications, isLoading 
}= useJobApplications (jobId);
const [analyticsData, setAnalyticsData] = useState< {
  statusDistribution: any[];
timeToHire: number;
conversionRate: number;
funnelData: any[] 
}> ({
  statusDistribution: [];
timeToHire: 0;
conversionRate: 0;
funnelData: [] 
});
if (applications && applications.length > 0) {
  //Calculate status distribution avgTimeToHire = Math.round (totalDays / hiredApplications.length) 
}//Calculate conversion rate const conversionRate = hiredApplications.length > 0 ? Math.round ( (hiredApplications.length / applications.length) * 100) : 0;
//Funnel data 
}
;

}, [applications]);
<CardContent> <h3 className="text-lg font-semibold mb-2" >No data available</h3> <p className="text-muted-foreground mb-6" > You need applications to generate analytics </p> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Application Status Distribution</CardTitle> </CardHeader> <CardContent className="h-64" > <ResponsiveContainer width="100%" height="100%" > <PieChart> <Pie > {
  analyticsData.statusDistribution.map ( (entry, index) => (<Cell key= {
  `cell-$ {
  index 
}` 
}fill= {
  COLORS[index % COLORS.length] 
}/>) ) 
}</Pie> <Tooltip /> </PieChart> </ResponsiveContainer> </CardContent> </Card> {
  /* Time to Hire */ 
}<Card> <CardHeader> <CardTitle>Time to Hire</CardTitle> </CardHeader> </div> <div className="text-sm text-muted-foreground mt-2" > Average days from application to hire </div> </CardContent> </Card> {
  /* Conversion Rate */ 
}<Card> <CardHeader> <CardTitle>Application Conversion Rate</CardTitle> </CardHeader> </div> <div className="text-sm text-muted-foreground mt-2" > Applications to hired ratio </div> </CardContent> </Card> <CardHeader> <CardTitle>Hiring Funnel</CardTitle> </CardHeader> <CardContent className="h-80" > <ResponsiveContainer width="100%" height="100%" > <BarChart) ) 
}</Bar> </BarChart> </ResponsiveContainer> </CardContent> </Card> </div>) 
}
    </div>;
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </div>);
}

=======
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

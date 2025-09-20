'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell;
} from 'recharts';
import { 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  TrendingUp, 
  Globe,
  Smartphone,
  Monitor;
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number; color: string }>;
  deviceTypes: Array<{ device: string; percentage: number; color: string }>;
  hourlyData: Array<{ hour: string; views: number }>;
  weeklyData: Array<{ day: string; views: number }>;
}

const Analytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    hourlyData: [],
    weeklyData: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate analytics data loading
    const loadAnalyticsData = () => {
      // Simulate API call delay
      setTimeout(() => {
        setData({
          pageViews: Math.floor(Math.random() * 10000) + 5000,
          uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
          bounceRate: Math.random() * 30 + 20,
          avgSessionDuration: Math.random() * 300 + 120,
          topPages: [
            { page: '/', views: Math.floor(Math.random() * 2000) + 1000 },
            { page: '/services', views: Math.floor(Math.random() * 1500) + 800 },
            { page: '/about', views: Math.floor(Math.random() * 1000) + 500 },
            { page: '/contact', views: Math.floor(Math.random() * 800) + 300 },
            { page: '/blog', views: Math.floor(Math.random() * 600) + 200 },
          ],
          trafficSources: [
            { source: 'Direct', percentage: 45, color: '#8884d8' },
            { source: 'Search', percentage: 30, color: '#82ca9d' },
            { source: 'Social', percentage: 15, color: '#ffc658' },
            { source: 'Referral', percentage: 10, color: '#ff7300' },
          ],
          deviceTypes: [
            { device: 'Desktop', percentage: 60, color: '#8884d8' },
            { device: 'Mobile', percentage: 35, color: '#82ca9d' },
            { device: 'Tablet', percentage: 5, color: '#ffc658' },
          ],
          hourlyData: Array.from({ length: 24 }, (_, i) => ({
            hour: `${i}:00`,
            views: Math.floor(Math.random() * 100) + 20,
          })),
          weeklyData: [
            { day: 'Mon', views: Math.floor(Math.random() * 500) + 200 },
            { day: 'Tue', views: Math.floor(Math.random() * 500) + 200 },
            { day: 'Wed', views: Math.floor(Math.random() * 500) + 200 },
            { day: 'Thu', views: Math.floor(Math.random() * 500) + 200 },
            { day: 'Fri', views: Math.floor(Math.random() * 500) + 200 },
            { day: 'Sat', views: Math.floor(Math.random() * 300) + 100 },
            { day: 'Sun', views: Math.floor(Math.random() * 300) + 100 },
          ],
        });
        setIsLoading(false);
      }, 1000);
    };

    loadAnalyticsData();
  }, []);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-6xl mx-auto mb-8">
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading analytics...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Page Views</p>
                <p className="text-2xl font-bold">{data.pageViews.toLocaleString()}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
                <p className="text-2xl font-bold">{data.uniqueVisitors.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.2%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
                <p className="text-2xl font-bold">{data.bounceRate.toFixed(1)}%</p>
              </div>
              <MousePointer className="h-8 w-8 text-orange-500" />
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="text-red-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.1%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Session</p>
                <p className="text-2xl font-bold">{formatDuration(data.avgSessionDuration)}</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15.3%
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hourly Traffic */}
        <Card>
          <CardHeader>
            <CardTitle>Hourly Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Traffic */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources and Device Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.trafficSources}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ source, percentage }) => `${source}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {data.trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.deviceTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ device, percentage }) => `${device}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {data.deviceTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">#{index + 1}</Badge>
                  <span className="font-medium">{page.page}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{page.views.toLocaleString()} views</span>
                  <Globe className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
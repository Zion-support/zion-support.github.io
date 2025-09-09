import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Activity,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  Target
} from 'lucide-react';

interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growthRate: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number; conversion: number }>;
  userEngagement: Array<{ date: string; users: number; sessions: number }>;
  demographics: Array<{ age: string; percentage: number }>;
}

export default function Analytics() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalUsers: 0,
    activeUsers: 0,
    revenue: 0,
    growthRate: 0,
    conversionRate: 0,
    topPages: [],
    userEngagement: [],
    demographics: []
  });

  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    // Simulate loading analytics data
    const loadAnalytics = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAnalyticsData({
        totalUsers: 15420,
        activeUsers: 3247,
        revenue: 125000,
        growthRate: 12.5,
        conversionRate: 3.2,
        topPages: [
          { page: '/marketplace', views: 15420, conversion: 4.2 },
          { page: '/talent', views: 12850, conversion: 3.8 },
          { page: '/services', views: 9870, conversion: 2.9 },
          { page: '/about', views: 7650, conversion: 1.5 },
          { page: '/contact', views: 5430, conversion: 2.1 }
        ],
        userEngagement: [
          { date: '2024-01-01', users: 1200, sessions: 1800 },
          { date: '2024-01-02', users: 1350, sessions: 2100 },
          { date: '2024-01-03', users: 1100, sessions: 1650 },
          { date: '2024-01-04', users: 1400, sessions: 2200 },
          { date: '2024-01-05', users: 1250, sessions: 1900 },
          { date: '2024-01-06', users: 1300, sessions: 2000 },
          { date: '2024-01-07', users: 1450, sessions: 2300 }
        ],
        demographics: [
          { age: '18-24', percentage: 15 },
          { age: '25-34', percentage: 35 },
          { age: '35-44', percentage: 25 },
          { age: '45-54', percentage: 15 },
          { age: '55+', percentage: 10 }
        ]
      });
      
      setIsLoading(false);
    };

    loadAnalytics();
  }, [timeRange]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zion-blue p-6">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-zion-blue-dark rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-zion-blue-dark rounded"></div>
              ))}
            </div>
            <div className="h-96 bg-zion-blue-dark rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zion-blue p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-zion-slate-light">Monitor your platform performance and user engagement</p>
        </div>

        {/* Time Range Selector */}
        <div className="mb-6">
          <div className="flex space-x-2">
            {['1d', '7d', '30d', '90d', '1y'].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTimeRange(range)}
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Total Users</CardTitle>
              <Users className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{formatNumber(analyticsData.totalUsers)}</div>
              <p className="text-xs text-zion-slate-light">
                <span className="text-green-400">+{analyticsData.growthRate}%</span> from last period
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Active Users</CardTitle>
              <Activity className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{formatNumber(analyticsData.activeUsers)}</div>
              <p className="text-xs text-zion-slate-light">
                <span className="text-green-400">+8.2%</span> from last period
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{formatCurrency(analyticsData.revenue)}</div>
              <p className="text-xs text-zion-slate-light">
                <span className="text-green-400">+15.3%</span> from last period
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Conversion Rate</CardTitle>
              <Target className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{analyticsData.conversionRate}%</div>
              <p className="text-xs text-zion-slate-light">
                <span className="text-green-400">+0.8%</span> from last period
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Tables */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
            <TabsTrigger value="overview" className="data-[state=active]:bg-zion-purple/10">
              Overview
            </TabsTrigger>
            <TabsTrigger value="pages" className="data-[state=active]:bg-zion-purple/10">
              Top Pages
            </TabsTrigger>
            <TabsTrigger value="engagement" className="data-[state=active]:bg-zion-purple/10">
              User Engagement
            </TabsTrigger>
            <TabsTrigger value="demographics" className="data-[state=active]:bg-zion-purple/10">
              Demographics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <CardTitle className="text-white">User Growth Trend</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Daily active users over the selected period
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-zion-slate-light">
                    <div className="text-center">
                      <LineChart className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                      <p>Chart visualization would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <CardTitle className="text-white">Revenue Distribution</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Revenue breakdown by category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-zion-slate-light">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                      <p>Chart visualization would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pages" className="space-y-6">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-white">Top Performing Pages</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Pages with highest views and conversion rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.topPages.map((page, index) => (
                    <div key={page.page} className="flex items-center justify-between p-4 bg-zion-blue-light/10 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                          #{index + 1}
                        </Badge>
                        <span className="text-white font-medium">{page.page}</span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <span className="text-zion-slate-light">
                          {formatNumber(page.views)} views
                        </span>
                        <span className="text-zion-cyan">
                          {page.conversion}% conversion
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-white">User Engagement Over Time</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Daily user activity and session data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-zion-slate-light">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                    <p>Chart visualization would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demographics" className="space-y-6">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-white">User Demographics</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Age distribution of platform users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.demographics.map((demo) => (
                    <div key={demo.age} className="flex items-center justify-between">
                      <span className="text-white">{demo.age}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-zion-blue-light/20 rounded-full h-2">
                          <div 
                            className="bg-zion-cyan h-2 rounded-full" 
                            style={{ width: `${demo.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-zion-cyan text-sm w-12 text-right">
                          {demo.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Globe, 
  Smartphone,
  Monitor,
  Activity,
  Zap,
  Target,
  PieChart
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number; percentage: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceTypes: Array<{ device: string; users: number; percentage: number }>;
  realTimeUsers: number;
  hourlyData: Array<{ hour: string; visitors: number; pageViews: number }>;
  dailyData: Array<{ date: string; visitors: number; pageViews: number; conversions: number }>;
}

interface UserBehavior {
  sessionId: string;
  userId?: string;
  page: string;
  timestamp: Date;
  duration: number;
  actions: number;
  device: string;
  location: string;
  referrer: string;
}

const AdvancedAnalyticsSystem: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers: 0,
    hourlyData: [],
    dailyData: []
  });

  const [userBehaviors, setUserBehaviors] = useState<UserBehavior[]>([]);
  const [isRealTime, setIsRealTime] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [activeTab, setActiveTab] = useState('overview');

  const generateMockData = useCallback(() => {
    const now = new Date();
    
    // Generate hourly data for the last 24 hours
    const hourlyData = Array.from({ length: 24 }, (_, i) => {
      const hour = new Date(now.getTime() - (23 - i) * 60 * 60 * 1000);
      return {
        hour: hour.getHours().toString().padStart(2, '0') + ':00',
        visitors: Math.floor(Math.random() * 200) + 50,
        pageViews: Math.floor(Math.random() * 500) + 100
      };
    });

    // Generate daily data for the last 7 days
    const dailyData = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(now.getTime() - (6 - i) * 24 * 60 * 60 * 1000);
      return {
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        visitors: Math.floor(Math.random() * 1000) + 200,
        pageViews: Math.floor(Math.random() * 2000) + 500,
        conversions: Math.floor(Math.random() * 50) + 10
      };
    });

    const newAnalyticsData: AnalyticsData = {
      pageViews: 125847,
      uniqueVisitors: 8942,
      bounceRate: 32.5,
      avgSessionDuration: 4.2,
      conversionRate: 3.8,
      topPages: [
        { page: '/', views: 15420, percentage: 12.3 },
        { page: '/services', views: 12890, percentage: 10.2 },
        { page: '/about', views: 9870, percentage: 7.8 },
        { page: '/contact', views: 7650, percentage: 6.1 },
        { page: '/blog', views: 5430, percentage: 4.3 }
      ],
      trafficSources: [
        { source: 'Direct', visitors: 3240, percentage: 36.2 },
        { source: 'Google', visitors: 2890, percentage: 32.3 },
        { source: 'Social Media', visitors: 1560, percentage: 17.4 },
        { source: 'Email', visitors: 890, percentage: 9.9 },
        { source: 'Other', visitors: 362, percentage: 4.0 }
      ],
      deviceTypes: [
        { device: 'Desktop', users: 4560, percentage: 51.0 },
        { device: 'Mobile', users: 3120, percentage: 34.9 },
        { device: 'Tablet', users: 1262, percentage: 14.1 }
      ],
      realTimeUsers: Math.floor(Math.random() * 50) + 10,
      hourlyData,
      dailyData
    };

    setAnalyticsData(newAnalyticsData);

    // Generate user behavior data
    const newUserBehaviors: UserBehavior[] = Array.from({ length: 20 }, (_, i) => ({
      sessionId: `session_${Math.random().toString(36).substr(2, 9)}`,
      userId: Math.random() > 0.3 ? `user_${Math.random().toString(36).substr(2, 6)}` : undefined,
      page: ['/', '/services', '/about', '/contact', '/blog'][Math.floor(Math.random() * 5)],
      timestamp: new Date(now.getTime() - Math.random() * 60 * 60 * 1000),
      duration: Math.floor(Math.random() * 300) + 30,
      actions: Math.floor(Math.random() * 20) + 1,
      device: ['Desktop', 'Mobile', 'Tablet'][Math.floor(Math.random() * 3)],
      location: ['United States', 'Canada', 'United Kingdom', 'Germany', 'France'][Math.floor(Math.random() * 5)],
      referrer: ['Direct', 'Google', 'Facebook', 'Twitter', 'Email'][Math.floor(Math.random() * 5)]
    }));

    setUserBehaviors(newUserBehaviors);
  }, []);

  useEffect(() => {
    generateMockData();
    setIsRealTime(true);

    const interval = setInterval(() => {
      if (isRealTime) {
        generateMockData();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [generateMockData, isRealTime]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const pieColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'traffic', name: 'Traffic', icon: Globe },
    { id: 'behavior', name: 'Behavior', icon: Users },
    { id: 'realtime', name: 'Real-time', icon: Activity },
    { id: 'conversions', name: 'Conversions', icon: Target }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              <span>Advanced Analytics System</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isRealTime ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gray-600">
                  {isRealTime ? 'Live' : 'Paused'}
                </span>
              </div>
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
            </div>
          </CardTitle>
          <CardDescription>
            Comprehensive analytics and user behavior tracking with real-time insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{formatNumber(analyticsData.pageViews)}</div>
                  <div className="text-sm text-gray-600">Page Views</div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5%
                  </div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{formatNumber(analyticsData.uniqueVisitors)}</div>
                  <div className="text-sm text-gray-600">Unique Visitors</div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.3%
                  </div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">{analyticsData.bounceRate}%</div>
                  <div className="text-sm text-gray-600">Bounce Rate</div>
                  <div className="text-xs text-red-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                    -2.1%
                  </div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">{formatDuration(analyticsData.avgSessionDuration * 60)}</div>
                  <div className="text-sm text-gray-600">Avg Session</div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15.2%
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Traffic Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={analyticsData.hourlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="visitors" stackId="1" stroke="#3B82F6" fill="#3B82F6" />
                        <Area type="monotone" dataKey="pageViews" stackId="1" stroke="#10B981" fill="#10B981" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Traffic Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsPieChart>
                        <Pie
                          data={analyticsData.trafficSources}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          dataKey="visitors"
                        >
                          {analyticsData.trafficSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Traffic Tab */}
          {activeTab === 'traffic' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analyticsData.topPages.map((page, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                            <span className="text-sm font-medium">{page.page}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{formatNumber(page.views)}</span>
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${page.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{page.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Device Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.deviceTypes.map((device, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {device.device === 'Desktop' && <Monitor className="h-5 w-5 text-blue-600" />}
                            {device.device === 'Mobile' && <Smartphone className="h-5 w-5 text-green-600" />}
                            {device.device === 'Tablet' && <Monitor className="h-5 w-5 text-purple-600" />}
                            <span className="text-sm font-medium">{device.device}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{formatNumber(device.users)}</span>
                            <span className="text-xs text-gray-500">({device.percentage}%)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Daily Traffic Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData.dailyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visitors" fill="#3B82F6" />
                      <Bar dataKey="pageViews" fill="#10B981" />
                      <Bar dataKey="conversions" fill="#F59E0B" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Behavior Tab */}
          {activeTab === 'behavior' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">User Behavior Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userBehaviors.slice(0, 10).map((behavior, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{behavior.page}</div>
                            <div className="text-xs text-gray-500">
                              {behavior.device} • {behavior.location}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{formatDuration(behavior.duration)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MousePointer className="h-3 w-3" />
                            <span>{behavior.actions}</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {behavior.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Real-time Tab */}
          {activeTab === 'realtime' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600">{analyticsData.realTimeUsers}</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                  <div className="text-xs text-gray-500 mt-1">Right now</div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">{Math.floor(analyticsData.realTimeUsers * 2.5)}</div>
                  <div className="text-sm text-gray-600">Page Views</div>
                  <div className="text-xs text-gray-500 mt-1">Last 5 minutes</div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">{Math.floor(analyticsData.realTimeUsers * 0.3)}</div>
                  <div className="text-sm text-gray-600">Conversions</div>
                  <div className="text-xs text-gray-500 mt-1">Last hour</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Live Activity Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {userBehaviors.slice(0, 5).map((behavior, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">{behavior.page}</span>
                          <span className="text-xs text-gray-500">from {behavior.referrer}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {behavior.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Conversions Tab */}
          {activeTab === 'conversions' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600">{analyticsData.conversionRate}%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.8%
                  </div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">{Math.floor(analyticsData.uniqueVisitors * analyticsData.conversionRate / 100)}</div>
                  <div className="text-sm text-gray-600">Total Conversions</div>
                  <div className="text-xs text-gray-500 mt-1">This period</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Conversion Funnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Visitors</span>
                      <span className="text-2xl font-bold text-blue-600">{formatNumber(analyticsData.uniqueVisitors)}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Engaged Users</span>
                      <span className="text-2xl font-bold text-green-600">{formatNumber(Math.floor(analyticsData.uniqueVisitors * 0.7))}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="font-medium">Interested Users</span>
                      <span className="text-2xl font-bold text-yellow-600">{formatNumber(Math.floor(analyticsData.uniqueVisitors * 0.3))}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Converted Users</span>
                      <span className="text-2xl font-bold text-purple-600">{formatNumber(Math.floor(analyticsData.uniqueVisitors * analyticsData.conversionRate / 100))}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedAnalyticsSystem;
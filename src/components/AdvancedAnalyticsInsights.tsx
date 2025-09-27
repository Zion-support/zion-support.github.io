import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

interface AnalyticsData {
  overview: {
    totalSessions: number;
    uniqueUsers: number;
    pageViews: number;
    bounceRate: number;
    avgSessionDuration: number;
    conversionRate: number;
  };
  traffic: {
    sources: Array<{
      name: string;
      count: number;
      percentage: number;
    }>;
    devices: Array<{
      type: string;
      count: number;
      percentage: number;
    }>;
    countries: Array<{
      name: string;
      count: number;
      percentage: number;
    }>;
  };
  performance: {
    topPages: Array<{
      path: string;
      views: number;
      uniqueViews: number;
      avgTimeOnPage: number;
    }>;
    userFlow: Array<{
      step: number;
      page: string;
      users: number;
      dropoff: number;
    }>;
  };
  insights: Array<{
    type: 'positive' | 'negative' | 'neutral';
    title: string;
    description: string;
    impact: string;
    recommendation: string;
  }>;
}

interface AdvancedAnalyticsInsightsProps {
  timeRange?: '7d' | '30 d' | '90 d' | '1y';
  refreshInterval?: number;
  onDataUpdate?: (data: AnalyticsData) => void;
}

export default function AdvancedAnalyticsInsights({
  timeRange = '30d',
  refreshInterval = 300000,
  onDataUpdate
}: AdvancedAnalyticsInsightsProps) {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState<string>('overview');
  const [insights, setInsights] = useState<Array<{
    type: 'positive' | 'negative' | 'neutral';
    title: string;
    description: string;
    impact: string;
    recommendation: string;
  }>>([]);

  const generateMockData = useCallback((): AnalyticsData => {
    const baseMultiplier = timeRange === '7d' ? 1 : timeRange === '30 d' ? 4 : timeRange === '90 d' ? 12 : 48;
    
    return {
      overview: {
        totalSessions: Math.floor(1250 * baseMultiplier),
        uniqueUsers: Math.floor(890 * baseMultiplier),
        pageViews: Math.floor(3200 * baseMultiplier),
        bounceRate: 0.35 + (Math.random() - 0.5) * 0.1,
        avgSessionDuration: 180 + (Math.random() - 0.5) * 60,
        conversionRate: 0.12 + (Math.random() - 0.5) * 0.05
      },
      traffic: {
        sources: [
          { name: 'Direct', count: Math.floor(450 * baseMultiplier), percentage: 36 },
          { name: 'Google', count: Math.floor(380 * baseMultiplier), percentage: 30 },
          { name: 'Social Media', count: Math.floor(200 * baseMultiplier), percentage: 16 },
          { name: 'Email', count: Math.floor(120 * baseMultiplier), percentage: 10 },
          { name: 'Referral', count: Math.floor(100 * baseMultiplier), percentage: 8 }
        ],
        devices: [
          { type: 'Desktop', count: Math.floor(600 * baseMultiplier), percentage: 48 },
          { type: 'Mobile', count: Math.floor(500 * baseMultiplier), percentage: 40 },
          { type: 'Tablet', count: Math.floor(150 * baseMultiplier), percentage: 12 }
        ],
        countries: [
          { name: 'United States', count: Math.floor(400 * baseMultiplier), percentage: 32 },
          { name: 'United Kingdom', count: Math.floor(200 * baseMultiplier), percentage: 16 },
          { name: 'Canada', count: Math.floor(150 * baseMultiplier), percentage: 12 },
          { name: 'Germany', count: Math.floor(120 * baseMultiplier), percentage: 10 },
          { name: 'Australia', count: Math.floor(100 * baseMultiplier), percentage: 8 },
          { name: 'Others', count: Math.floor(280 * baseMultiplier), percentage: 22 }
        ]
      },
      performance: {
        topPages: [
          { path: '/', views: Math.floor(800 * baseMultiplier), uniqueViews: Math.floor(600 * baseMultiplier), avgTimeOnPage: 120 },
          { path: '/services', views: Math.floor(400 * baseMultiplier), uniqueViews: Math.floor(300 * baseMultiplier), avgTimeOnPage: 180 },
          { path: '/about', views: Math.floor(300 * baseMultiplier), uniqueViews: Math.floor(250 * baseMultiplier), avgTimeOnPage: 90 },
          { path: '/contact', views: Math.floor(200 * baseMultiplier), uniqueViews: Math.floor(180 * baseMultiplier), avgTimeOnPage: 240 },
          { path: '/blog', views: Math.floor(150 * baseMultiplier), uniqueViews: Math.floor(120 * baseMultiplier), avgTimeOnPage: 300 }
        ],
        userFlow: [
          { step: 1, page: 'Homepage', users: Math.floor(1000 * baseMultiplier), dropoff: 0 },
          { step: 2, page: 'Services', users: Math.floor(600 * baseMultiplier), dropoff: 40 },
          { step: 3, page: 'Contact', users: Math.floor(300 * baseMultiplier), dropoff: 50 },
          { step: 4, page: 'Conversion', users: Math.floor(150 * baseMultiplier), dropoff: 50 }
        ]
      },
      insights: []
    };
  }, [timeRange]);

  const generateInsights = useCallback((data: AnalyticsData) => {
    const newInsights = [];

    // Bounce rate insights
    if (data.overview.bounceRate > 0.5) {
      newInsights.push({
        type: 'negative' as const,
        title: 'High Bounce Rate',
        description: `Your bounce rate is ${(data.overview.bounceRate * 100).toFixed(1)}%, which is above the recommended 40%.`,
        impact: 'Users are leaving your site quickly, indicating poor user experience or irrelevant content.',
        recommendation: 'Improve page load speed, enhance content relevance, and optimize user experience.'
      });
    } else if (data.overview.bounceRate < 0.3) {
      newInsights.push({
        type: 'positive' as const,
        title: 'Excellent Bounce Rate',
        description: `Your bounce rate is ${(data.overview.bounceRate * 100).toFixed(1)}%, which is excellent.`,
        impact: 'Users are engaged and finding value in your content.',
        recommendation: 'Continue creating high-quality, relevant content and maintain current UX practices.'
      });
    }

    // Session duration insights
    if (data.overview.avgSessionDuration < 60) {
      newInsights.push({
        type: 'negative' as const,
        title: 'Short Session Duration',
        description: `Average session duration is ${Math.round(data.overview.avgSessionDuration)} seconds.`,
        impact: 'Users are not spending enough time on your site to engage with content.',
        recommendation: 'Add more engaging content, improve navigation, and optimize page structure.'
      });
    } else if (data.overview.avgSessionDuration > 300) {
      newInsights.push({
        type: 'positive' as const,
        title: 'Long Session Duration',
        description: `Average session duration is ${Math.round(data.overview.avgSessionDuration)} seconds.`,
        impact: 'Users are highly engaged and spending significant time on your site.',
        recommendation: 'Leverage this engagement for better conversion opportunities.'
      });
    }

    // Conversion rate insights
    if (data.overview.conversionRate < 0.05) {
      newInsights.push({
        type: 'negative' as const,
        title: 'Low Conversion Rate',
        description: `Conversion rate is ${(data.overview.conversionRate * 100).toFixed(1)}%.`,
        impact: 'Very few visitors are taking desired actions on your site.',
        recommendation: 'Improve call-to-action placement, optimize landing pages, and enhance user experience.'
      });
    } else if (data.overview.conversionRate > 0.2) {
      newInsights.push({
        type: 'positive' as const,
        title: 'High Conversion Rate',
        description: `Conversion rate is ${(data.overview.conversionRate * 100).toFixed(1)}%.`,
        impact: 'Your site is effectively converting visitors into customers.',
        recommendation: 'Scale successful strategies and identify what drives conversions.'
      });
    }

    // Mobile traffic insights
    const mobilePercentage = data.traffic.devices.find(d => d.type === 'Mobile')?.percentage || 0;
    if (mobilePercentage > 60) {
      newInsights.push({
        type: 'neutral' as const,
        title: 'High Mobile Traffic',
        description: `${mobilePercentage}% of your traffic comes from mobile devices.`,
        impact: 'Mobile optimization is crucial for your audience.',
        recommendation: 'Ensure mobile-first design and optimize for mobile performance.'
      });
    }

    // Top page insights
    const topPage = data.performance.topPages[0];
    if (topPage && topPage.views > data.overview.pageViews * 0.3) {
      newInsights.push({
        type: 'positive' as const,
        title: 'Strong Homepage Performance',
        description: `Your homepage accounts for ${((topPage.views / data.overview.pageViews) * 100).toFixed(1)}% of page views.`,
        impact: 'Your homepage is effectively attracting and retaining visitors.',
        recommendation: 'Use homepage success patterns to improve other pages.'
      });
    }

    setInsights(newInsights);
  }, []);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      const mockData = generateMockData();
      setData(mockData);
      generateInsights(mockData);
      onDataUpdate?.(mockData);
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateMockData, generateInsights, onDataUpdate]);

  useEffect(() => {
    loadData();

    if (refreshInterval > 0) {
      const interval = setInterval(loadData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [loadData, refreshInterval]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'positive': return <TrendingUp className="h-5w-5text-green-600" />;
      case 'negative': return <TrendingDown className="h-5w-5text-red-600" />;
      default: return <Activity className="h-5w-5text-blue-600" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'positive': return 'border-green-200 bg-green-50';
      case 'negative': return 'border-red-200 bg-red-50';
      default: return 'border-blue-200 bg-blue-50';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2border-blue-600"></div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics Insights</h2>
          <p className="text-gray-600">Comprehensive analytics and performance insights</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-3py-1border border-gray-300 rounded-md text-sm"
          >
            <option value="7d">Last 7days</option>
            <option value="30 d">Last30 days</option>
            <option value="90 d">Last90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Users className="h-4w-4text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.totalSessions)}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0pb-2">
            <CardTitle className="text-sm font-medium">Unique Users</CardTitle>
            <Eye className="h-4w-4text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.uniqueUsers)}</div>
            <p className="text-xs text-muted-foreground">
              +8% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <MousePointer className="h-4w-4text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.pageViews)}</div>
            <p className="text-xs text-muted-foreground">
              +15% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4w-4text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(data.overview.conversionRate * 100).toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources */}
      <div className="grid grid-cols-1lg:grid-cols-2gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.traffic.sources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium">{source.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{formatNumber(source.count)}</div>
                    <div className="text-xs text-muted-foreground">{source.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Types</CardTitle>
            <CardDescription>How users are accessing your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.traffic.devices.map((device, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {device.type === 'Desktop' && <Monitor className="h-4w-4text-blue-600" />}
                    {device.type === 'Mobile' && <Smartphone className="h-4w-4text-green-600" />}
                    {device.type === 'Tablet' && <Tablet className="h-4w-4text-purple-600" />}
                    <span className="text-sm font-medium">{device.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{formatNumber(device.count)}</div>
                    <div className="text-xs text-muted-foreground">{device.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Pages</CardTitle>
          <CardDescription>Your most visited pages and their performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.performance.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-4border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8h-8rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <div>
                    <div className="font-medium">{page.path}</div>
                    <div className="text-sm text-muted-foreground">
                      {formatNumber(page.uniqueViews)} unique views
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">{formatNumber(page.views)} views</div>
                  <div className="text-xs text-muted-foreground">
                    {Math.round(page.avgTimeOnPage)}s avg time
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      {insights.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Insights</CardTitle>
            <CardDescription>Automated analysis and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <AnimatePresence>
                {insights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-4rounded-lg border ${getInsightColor(insight.type)}`}
                  >
                    <div className="flex items-start space-x-3">
                      {getInsightIcon(insight.type)}
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{insight.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                        <div className="mt-2">
                          <p className="text-xs font-medium text-gray-700">Impact:</p>
                          <p className="text-xs text-gray-600">{insight.impact}</p>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs font-medium text-gray-700">Recommendation:</p>
                          <p className="text-xs text-gray-600">{insight.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
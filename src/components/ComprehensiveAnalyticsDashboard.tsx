import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number; bounceRate: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceTypes: Array<{ device: string; count: number; percentage: number }>;
  geographicData: Array<{ country: string; visitors: number; percentage: number }>;
  hourlyData: Array<{ hour: number; visitors: number }>;
  dailyData: Array<{ date: string; visitors: number; pageViews: number }>;
  realTimeVisitors: number;
  topKeywords: Array<{ keyword: string; searches: number; position: number }>;
  errorRate: number;
  performanceScore: number;
}

interface ComprehensiveAnalyticsDashboardProps {
  data: AnalyticsData;
  onDataRefresh?: () => void;
  isRealTime?: boolean;
  className?: string;
}

export const ComprehensiveAnalyticsDashboard: React.FC<ComprehensiveAnalyticsDashboardProps> = ({
  data,
  onDataRefresh,
  isRealTime = false,
  className = ''
}) => {
  const [selectedMetric, setSelectedMetric] = useState<string>('pageViews');
  const [timeRange, setTimeRange] = useState<string>('7d');

  const metrics = [
    { value: 'pageViews', label: 'Page Views' },
    { value: 'uniqueVisitors', label: 'Unique Visitors' },
    { value: 'bounceRate', label: 'Bounce Rate' },
    { value: 'conversionRate', label: 'Conversion Rate' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-6 w-6text-blue-600" />
            <span>Comprehensive Analytics Dashboard</span>
          </CardTitle>
          <CardDescription>
            Advanced monitoring and optimization insights for your application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-1mb-6bg-gray-100 p-1rounded-lg">
            {[
              { key: 'overview', label: 'Overview', icon: Target },
              { key: 'performance', label: 'Performance', icon: Zap },
              { key: 'security', label: 'Security', icon: Shield },
              { key: 'seo', label: 'SEO & A11 y', icon: Eye }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex items-center space-x-2px-4py-2rounded-md text-sm font-medium transition-colors ${
                  activeTab === key
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-4w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-8 w-8text-blue-600" />
                      <div>
                        <div className="text-2xl font-bold">{analyticsData.visitors.total.toLocaleString()}</div>
                        <div className="text-smtext-gray-600">Total Visitors</div>
                        <div className={`text-xs ${getGrowthColor(analyticsData.visitors.growth)}`}>
                          {analyticsData.visitors.growth >= 0 ? '+' : ''}{analyticsData.visitors.growth}%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-8 w-8text-green-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.performance.pageSpeed)}`}>
                          {analyticsData.performance.pageSpeed}
                        </div>
                        <div className="text-sm text-gray-600">Performance Score</div>
                        <div className="text-xstext-gray-500">{analyticsData.performance.loadTime}ms load</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-8 w-8text-purple-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.security.score)}`}>
                          {analyticsData.security.score}
                        </div>
                        <div className="text-sm text-gray-600">Security Score</div>
                        <div className="text-xstext-red-500">{analyticsData.security.vulnerabilities} issues</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-8 w-8text-orange-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.seo.score)}`}>
                          {analyticsData.seo.score}
                        </div>
                        <div className="text-sm text-gray-600">SEO Score</div>
                        <div className="text-xstext-gray-500">{analyticsData.seo.keywords} keywords</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1lg:grid-cols-2gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="33" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3B82 F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security & SEO Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={[...securityData, ...seoAccessibilityData]}>
                        <CartesianGrid strokeDasharray="33" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#10 B981" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Alerts and Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5text-orange-600" />
                    <span>Priority Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1md:grid-cols-3gap-4">
                    {analyticsData.performance.pageSpeed < 70 && (
                      <div className="p-4border border-red-200 rounded-lgbg-red-50">
                        <div className="font-medium text-red-800 mb-1">Performance Issue</div>
                        <div className="text-smtext-red-600">Page speed below optimal threshold</div>
                      </div>
                    )}
                    {analyticsData.security.vulnerabilities > 5 && (
                      <div className="p-4border border-orange-200 rounded-lgbg-orange-50">
                        <div className="font-medium text-orange-800 mb-1">Security Alert</div>
                        <div className="text-smtext-orange-600">Multiple vulnerabilities detected</div>
                      </div>
                    )}
                    {analyticsData.accessibility.issues > 5 && (
                      <div className="p-4border border-yellow-200 rounded-lgbg-yellow-50">
                        <div className="font-medium text-yellow-800 mb-1">Accessibility Issues</div>
                        <div className="text-smtext-yellow-600">Several accessibility improvements needed</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>            </div>
            <button
              onClick={onDataRefresh}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Refresh
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600">Page Views</div>
            <div className="text-2xl font-bold text-gray-900">{data.pageViews.toLocaleString()}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600">Unique Visitors</div>
            <div className="text-2xl font-bold text-gray-900">{data.uniqueVisitors.toLocaleString()}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600">Bounce Rate</div>
            <div className="text-2xl font-bold text-gray-900">{data.bounceRate.toFixed(1)}%</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600">Conversion Rate</div>
            <div className="text-2xl font-bold text-gray-900">{data.conversionRate.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAnalyticsDashboard;
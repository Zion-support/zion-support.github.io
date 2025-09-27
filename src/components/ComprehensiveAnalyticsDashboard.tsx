import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import AdvancedPerformanceOptimizer from './AdvancedPerformanceOptimizer';
import AdvancedSecurityDashboard from './AdvancedSecurityDashboard';
import SEOAccessibilityOptimizer from './SEOAccessibilityOptimizer';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Eye,
  Activity,
  Target,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface AnalyticsData {
  visitors: {
    total: number;
    unique: number;
    returning: number;
    growth: number;
  };
  performance: {
    pageSpeed: number;
    loadTime: number;
    bounceRate: number;
    conversionRate: number;
  };
  security: {
    score: number;
    threats: number;
    vulnerabilities: number;
  };
  seo: {
    score: number;
    keywords: number;
    backlinks: number;
  };
  accessibility: {
    score: number;
    issues: number;
  };
}

interface ChartData {
  name: string;
  value: number;
  color?: string;
}

const ComprehensiveAnalyticsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'security' | 'seo'>('overview');
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    visitors: { total: 0, unique: 0, returning: 0, growth: 0 },
    performance: { pageSpeed: 0, loadTime: 0, bounceRate: 0, conversionRate: 0 },
    security: { score: 0, threats: 0, vulnerabilities: 0 },
    seo: { score: 0, keywords: 0, backlinks: 0 },
    accessibility: { score: 0, issues: 0 }
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newData: AnalyticsData = {
        visitors: {
          total: Math.floor(Math.random() * 10000 + 5000),
          unique: Math.floor(Math.random() * 8000 + 3000),
          returning: Math.floor(Math.random() * 3000 + 1000),
          growth: Math.round((Math.random() - 0.5) * 50)
        },
        performance: {
          pageSpeed: Math.round(Math.random() * 30 + 70),
          loadTime: Math.round(Math.random() * 2000 + 1000),
          bounceRate: Math.round(Math.random() * 30 + 20),
          conversionRate: Math.round(Math.random() * 10 + 2)
        },
        security: {
          score: Math.round(Math.random() * 20 + 80),
          threats: Math.floor(Math.random() * 5),
          vulnerabilities: Math.floor(Math.random() * 10 + 2)
        },
        seo: {
          score: Math.round(Math.random() * 25 + 75),
          keywords: Math.floor(Math.random() * 200 + 150),
          backlinks: Math.floor(Math.random() * 500 + 300)
        },
        accessibility: {
          score: Math.round(Math.random() * 20 + 80),
          issues: Math.floor(Math.random() * 8 + 2)
        }
      };
      
      setAnalyticsData(newData);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnalyticsData();
  }, [fetchAnalyticsData]);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGrowthColor = (growth: number): string => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const performanceData: ChartData[] = [
    { name: 'Page Speed', value: analyticsData.performance.pageSpeed, color: '#10B981' },
    { name: 'Load Time', value: analyticsData.performance.loadTime / 100, color: '#F59E0B' },
    { name: 'Bounce Rate', value: analyticsData.performance.bounceRate, color: '#EF4444' },
    { name: 'Conversion', value: analyticsData.performance.conversionRate * 10, color: '#8B5CF6' }
  ];

  const securityData: ChartData[] = [
    { name: 'Security Score', value: analyticsData.security.score, color: '#10B981' },
    { name: 'Threats', value: analyticsData.security.threats * 20, color: '#EF4444' },
    { name: 'Vulnerabilities', value: analyticsData.security.vulnerabilities * 10, color: '#F59E0B' }
  ];

  const seoAccessibilityData: ChartData[] = [
    { name: 'SEO Score', value: analyticsData.seo.score, color: '#3B82F6' },
    { name: 'Accessibility', value: analyticsData.accessibility.score, color: '#8B5CF6' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-blue-600" />
            Comprehensive Analytics Dashboard
          </CardTitle>
          <CardDescription>
            Monitor your application's performance, security, and SEO metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'performance', label: 'Performance', icon: Zap },
              { id: 'security', label: 'Security', icon: Shield },
              { id: 'seo', label: 'SEO & A11y', icon: Eye }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === id
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="text-2xl font-bold">{analyticsData.visitors.total.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Total Visitors</div>
                        <div className={`text-xs ${getGrowthColor(analyticsData.visitors.growth)}`}>
                          {analyticsData.visitors.growth > 0 ? '+' : ''}{analyticsData.visitors.growth}% vs last month
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-8 w-8 text-green-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.performance.pageSpeed)}`}>
                          {analyticsData.performance.pageSpeed}
                        </div>
                        <div className="text-sm text-gray-600">Performance Score</div>
                        <div className="text-xs text-gray-500">{analyticsData.performance.loadTime}ms load</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-8 w-8 text-purple-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.security.score)}`}>
                          {analyticsData.security.score}
                        </div>
                        <div className="text-sm text-gray-600">Security Score</div>
                        <div className="text-xs text-red-500">{analyticsData.security.vulnerabilities} issues</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-8 w-8 text-orange-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.seo.score)}`}>
                          {analyticsData.seo.score}
                        </div>
                        <div className="text-sm text-gray-600">SEO Score</div>
                        <div className="text-xs text-gray-500">{analyticsData.seo.keywords} keywords</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security & SEO Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={[...securityData, ...seoAccessibilityData]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Alerts and Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Alerts & Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analyticsData.security.vulnerabilities > 5 && (
                      <div className="flex items-center space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <div>
                          <p className="font-medium text-red-900 dark:text-red-100">High Security Risk</p>
                          <p className="text-sm text-red-700 dark:text-red-300">
                            {analyticsData.security.vulnerabilities} vulnerabilities detected
                          </p>
                        </div>
                      </div>
                    )}
                    {analyticsData.performance.pageSpeed < 80 && (
                      <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <Zap className="h-5 w-5 text-yellow-600" />
                        <div>
                          <p className="font-medium text-yellow-900 dark:text-yellow-100">Performance Issue</p>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">
                            Page speed is below recommended threshold
                          </p>
                        </div>
                      </div>
                    )}
                    {analyticsData.accessibility.issues > 3 && (
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Eye className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-900 dark:text-blue-100">Accessibility Issues</p>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            {analyticsData.accessibility.issues} accessibility issues found
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Other Tabs */}
          {activeTab === 'performance' && <AdvancedPerformanceOptimizer />}
          {activeTab === 'security' && <AdvancedSecurityDashboard />}
          {activeTab === 'seo' && <SEOAccessibilityOptimizer />}
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveAnalyticsDashboard;
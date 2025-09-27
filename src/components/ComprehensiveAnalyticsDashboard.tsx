import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Activity, Zap, Shield, Eye } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
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
  const [activeTab, setActiveTab] = React.useState('overview');

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-blue-600" />
            <span>Comprehensive Analytics Dashboard</span>
          </CardTitle>
          <CardDescription>
            Monitor your application's performance, security, and SEO metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'performance', label: 'Performance', icon: Zap },
              { id: 'security', label: 'Security', icon: Shield },
              { id: 'seo', label: 'SEO & A11y', icon: Eye }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-8 w-8 text-blue-600" />
                      <div>
                        <div className="text-2xl font-bold">{data.pageViews.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Page Views</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-8 w-8 text-green-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(data.performance.pageSpeed)}`}>
                          {data.performance.pageSpeed}
                        </div>
                        <div className="text-sm text-gray-600">Performance Score</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-8 w-8 text-purple-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(data.security.score)}`}>
                          {data.security.score}
                        </div>
                        <div className="text-sm text-gray-600">Security Score</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-8 w-8 text-orange-600" />
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(data.seo.score)}`}>
                          {data.seo.score}
                        </div>
                        <div className="text-sm text-gray-600">SEO Score</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Page Speed</div>
                  <div className="text-2xl font-bold">{data.performance.pageSpeed}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Load Time</div>
                  <div className="text-2xl font-bold">{data.performance.loadTime}ms</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Security Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Security Score</div>
                  <div className="text-2xl font-bold">{data.security.score}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Threats Blocked</div>
                  <div className="text-2xl font-bold">{data.security.threats}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">SEO & Accessibility</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">SEO Score</div>
                  <div className="text-2xl font-bold">{data.seo.score}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">Accessibility Score</div>
                  <div className="text-2xl font-bold">{data.accessibility.score}</div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveAnalyticsDashboard;
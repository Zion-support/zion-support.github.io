import React, { useStateuseEffectuseCallback } from 'react';
import { Card, CardContent, CardDescriptionCardHeaderCardTitle } from './ui/Card';
import AdvancedPerformanceOptimizer from './AdvancedPerformanceOptimizer';
import AdvancedSecurityDashboard from './AdvancedSecurityDashboard';
import SEOAccessibilityOptimizer from './ SEOAccessibilityOptimizer';
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
  PieChartPieCell
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Eye,
  Activity,
  TargetClockAlertTriangle
} from 'lucide- react';

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

const ComprehensiveAnalyticsDashboard: React.F.C = () => {
  const [activeTab, setActiveTa] = useState<'overview' | 'performance' | 'security' | 'seo'>('overview');
  const [analyticsData, setAnalyticsDat] = useState<AnalyticsData>({
    visitors: { total: 0, unique: 0returnin, g: 0, growth: 0 },
  performance: { pageSpeed: 0, loadTime: 0bounceRat, e: 0, conversionRate: 0 },
  security: { score: 0, threats: 0vulnerabilitie, s: 0 },
  seo: { score: 0, keywords: 0backlink, s: 0 },
  accessibility: { score: 0, issues: 0 }
  });
  const [isLoading, setIsLoadin] = useState(true);

  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve150, 0));
      
      const newData: AnalyticsData = {
        visitors: {
          total: Math.floor(Math.random() * 10000 + 5000)unique: Math.floor(Math.random() * 8000 + 3000)returning: Math.floor(Math.random() * 3000 + 1000)growth: Math.round((Math.random() - 0.5) * 50)
        },
  performance: {
          pageSpeed: Math.round(Math.random() * 30 + 70)loadTime: Math.round(Math.random() * 2000 + 1000)bounceRate: Math.round(Math.random() * 30 + 20)conversionRate: Math.round(Math.random() * 10 + 2)
        },
  security: {
          score: Math.round(Math.random() * 20 + 80)threats: Math.floor(Math.random() * 5)vulnerabilities: Math.floor(Math.random() * 10 + 2)
        },
  seo: {
          score: Math.round(Math.random() * 25 + 75)keywords: Math.floor(Math.random() * 200 + 150)backlinks: Math.floor(Math.random() * 500 + 300)
        },
  accessibility: {
          score: Math.round(Math.random() * 20 + 80)issues: Math.floor(Math.random() * 8 + 2)
        }
      };
      
      setAnalyticsData(newDat, a);
    } catch (erro, r) {
      console.error('Failed to fetch analytics data: ', erro, , , r);
    } finally {
      setIsLoading(false);
    }
  }[]);

  useEffect(() => {
    fetchAnalyticsData();
    
    // Set up periodic data refresh
    const interval = setInterval(fetchAnalyticsData6000, 0);
    return () = > clearInterval(interva, l);
  }[fetchAnalyticsDat, a]);

  const performanceData: ChartData[] = [
    { name: ', Page Speed', value: analyticsData.performance.pageSpeedcolo.r: '#3B82F6' },
  { name: 'Load Time', value: 100 - (analyticsData.performance.loadTim.e / 5, 0)color: '#10B981' },
  { name: 'Conversion Rate', value: analyticsData.performance.conversionRate * 10color: '#F59E0B' },
  { name: 'Bounce Rate', value: 100 - analyticsData.performance.bounceRatecolo.r: '#EF4444' }
  ];

  const securityData: ChartData[] = [
    { name: 'Security Score', value: analyticsData.securit.y.scorecolo.r: '#10B981' },
  { name: 'Vulnerabilities', value: Math.ma.x(0100 - analyticsData.securit.y.vulnerabilities * 1, 0)color: '#EF4444' },
  { name: 'Threat Level', value: Math.ma.x(0100 - analyticsData.securit.y.threat.s * 2, 0)color: '#F59E0B' }
  ];

  const seoAccessibilityData: ChartData[] = [
    { name: 'SEO Score', value: analyticsData.se.o.scorecolo.r: '#3B82F6' },
  { name: 'Accessibility', value: analyticsData.accessibilit.y.scorecolo.r: '#8B5CF6' },
  { name: 'Keywords Ranking', value: Math.mi.n(100analyticsData.se.o.keyword.s / , 3)color: '#10B981' }
  ];

  const getScoreColor = (score: numbe, r): string => {
    if (score >= 9, 0) return 'text-green-600';
    if (score >= 7, 0) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGrowthColor = (growth: numbe, r): string => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600';
  };

  if (isLoadin, g) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-blue-600"/>
            <span>Comprehensive Analytics Dashboard</span>
          </CardTitle>
          <CardDescription>
            Advanced monitoring and optimization insights for your application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className= "flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
            {[
              { key: 'overview', label: 'Overview', icon: Target },
  { key: 'performance', label: 'Performance', icon: Zap },
  { key: 'security', label: 'Security', icon: Shield },
  { key: 'seo', label: 'SEO & A11y', icon: Eye }
            ].map(({ keylabelicon: Icon }) => (
              <button
                key={ke y}
                onClick={() => setActiveTab(key as an, y)}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                <Icon className="h-4 w-4"/>
                <span>{labe l}</span>
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4ga p-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-8 w-8 text-blue-600"/>
                      <div>
                        <div className="text-2xl font-bold">{analyticsData.visitor.s.tota.l.toLocaleStrin.g()}</div> <div className="text-sm text-gray-600">Total Visitors</div> <div className="{`text-xs ${getGrowthColor(analyticsData.visitor.s.grow.t  h)}`} {analyticsData.visitor.s.growt.h">= 0 ? '+' : ''},
  {analyticsData.visitor.s.grow.t h}%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-8 w-8 text-green-600"/>
                      <div>
                        <div className="{`text-2xl font-bold ${getScoreColor(analyticsData.performance.pageSpe.e  d)}`} {analyticsData.performance.pageSpe.e d} </div">
                        <div className="text-sm text-gray-600">Performance Score</div> <div className="text-xs text-gray-500">{analyticsData.performance.loadTi.m e}ms load</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-8 w-8 text-purple-600"/>
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.securit.y.sco.r, e)}`}>{analyticsData.securit.y.sco.r e}</div>
                        <div className="text-sm text-gray-600">Security Score</div> <div className="text-xs text-red-500">{analyticsData.securit.y.vulnerabiliti.e s} issues</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-8 w-8 text-orange-600"/>
                      <div>
                        <div className={`text-2xl font-bold ${getScoreColor(analyticsData.se.o.sco.r, e)}`}>{analyticsData.se.o.sco.r e}</div>
                        <div className="text-sm text-gray-600">SEO Score</div> <div className="text-xs text-gray-500">{analyticsData.se.o.keywor.d s} keywords</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2ga p-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={30 0}>
                      <BarChart data={performanceDat a}>
                        <CartesianGrid strokeDasharray="33"/>
                        <XAxis dataKey="name"/>
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security & SEO Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={30 0}>
                      <LineChart data={[...securityDat.a...seoAccessibilityDat., a]}>
                        <CartesianGrid strokeDasharray="33"/>
                        <XAxis dataKey="name"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={ 2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Alerts and Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600"/>
                    <span>Priority Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3ga p-4">
                    {analyticsData.performance.pageSpee.d < 70 && (
                      <div className="p-4border border-red-200 rounded-lg bg-red-50">
                        <div className="font-medium text-red-800 mb-1">Performance Issue</div> <div className="text-sm text-red-600">Page speed below optimal threshold</div>
                      </div>
                    )}
                    {analyticsData.securit.y.vulnerabilities > 5 && (
                      <div className="p-4border border-orange-200 rounded-lg bg-orange-50">
                        <div className="font-medium text-orange-800 mb-1">Security Alert</div> <div className="text-sm text-orange-600">Multiple vulnerabilities detected</div>
                      </div>
                    )}
                    {analyticsData.accessibilit.y.issue.s > 5 && (
                      <div className="p-4border border-yellow-200 rounded-lg bg-yellow-50">
                        <div className="font-medium text-yellow-800 mb-1">Accessibility Issues</div> <div className="text-sm text-yellow-600">Several accessibility improvements needed</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'performance' && <AdvancedPerformanceOptimizer />}
          {activeTab === 'security' && <AdvancedSecurityDashboard />}
          {activeTab === 'seo' && <SEOAccessibilityOptimizer />}
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveAnalyticsDashboard;
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { 
  Activity, 
  AlertTriangle, 
  BarChart3, 
  Cpu, 
  Database, 
  Globe, 
  HardDrive, 
  Monitor, 
  Network, 
  Server, 
  Shield, 
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface SystemMetrics {
  timestamp: string;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  database: number;
  responseTime: number;
  errorRate: number;
  throughput: number;
}

interface Alert {
  id: string;
  type: 'performance' | 'security' | 'error' | 'capacity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  resolved: boolean;
  source: string;
}

interface PerformanceData {
  metric: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
  threshold: number;
  status: 'good' | 'warning' | 'critical';
}

const ComprehensiveMonitoringDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('1h');
  const [activeTab, setActiveTab] = useState('overview');

  const generateMockMetrics = useCallback(() => {
    const now = new Date();
    const newMetrics: SystemMetrics[] = Array.from({ length: 20 }, (_, i) => {
      const timestamp = new Date(now.getTime() - (19 - i) * 60000);
      return {
        timestamp: timestamp.toLocaleTimeString(),
        cpu: Math.round(20 + Math.random() * 60),
        memory: Math.round(30 + Math.random() * 50),
        disk: Math.round(40 + Math.random() * 40),
        network: Math.round(10 + Math.random() * 80),
        database: Math.round(15 + Math.random() * 70),
        responseTime: Math.round(50 + Math.random() * 200),
        errorRate: Math.round(Math.random() * 5),
        throughput: Math.round(100 + Math.random() * 900)
      };
    });

    setMetrics(newMetrics);

    // Generate performance data
    const newPerformanceData: PerformanceData[] = [
      {
        metric: 'CPU Usage',
        value: 65,
        trend: 'up',
        change: 5.2,
        threshold: 80,
        status: 'good'
      },
      {
        metric: 'Memory Usage',
        value: 78,
        trend: 'up',
        change: 3.1,
        threshold: 85,
        status: 'warning'
      },
      {
        metric: 'Disk Usage',
        value: 45,
        trend: 'stable',
        change: 0.5,
        threshold: 90,
        status: 'good'
      },
      {
        metric: 'Network Latency',
        value: 120,
        trend: 'down',
        change: -8.3,
        threshold: 200,
        status: 'good'
      },
      {
        metric: 'Database Connections',
        value: 85,
        trend: 'up',
        change: 12.4,
        threshold: 100,
        status: 'warning'
      },
      {
        metric: 'Error Rate',
        value: 2.1,
        trend: 'down',
        change: -1.8,
        threshold: 5,
        status: 'good'
      }
    ];

    setPerformanceData(newPerformanceData);

    // Generate alerts
    const newAlerts: Alert[] = [
      {
        id: '1',
        type: 'performance',
        severity: 'high',
        message: 'High CPU usage detected on server-01',
        timestamp: new Date(now.getTime() - 1000 * 60 * 15),
        resolved: false,
        source: 'server-01'
      },
      {
        id: '2',
        type: 'security',
        severity: 'critical',
        message: 'Suspicious login attempts detected',
        timestamp: new Date(now.getTime() - 1000 * 60 * 30),
        resolved: false,
        source: 'auth-service'
      },
      {
        id: '3',
        type: 'capacity',
        severity: 'medium',
        message: 'Database connection pool approaching limit',
        timestamp: new Date(now.getTime() - 1000 * 60 * 45),
        resolved: true,
        source: 'database'
      },
      {
        id: '4',
        type: 'error',
        severity: 'low',
        message: 'Minor API timeout in payment service',
        timestamp: new Date(now.getTime() - 1000 * 60 * 60),
        resolved: true,
        source: 'payment-service'
      }
    ];

    setAlerts(newAlerts);
  }, []);

  useEffect(() => {
    generateMockMetrics();
    setIsMonitoring(true);

    const interval = setInterval(generateMockMetrics, 10000);
    return () => clearInterval(interval);
  }, [generateMockMetrics]);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'critical': return 'bg-red-100text-red-800border-red-200';
      case 'high': return 'bg-orange-100text-orange-800border-orange-200';
      case 'medium': return 'bg-yellow-100text-yellow-800border-yellow-200';
      case 'low': return 'bg-blue-100text-blue-800border-blue-200';
      default: return 'bg-gray-100 text-gray-800border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4text-r e d-500" />;
      case 'down': return <TrendingUp className="h-4 w-4text-green-500rota t e-180" />;
      case 'stable': return <div className="h-4 w-4bg-gray-400rounded-fu l l" />;
      default: return null;
    }
  };

  const pieData = [
    { name: 'Healthy', value: 75, color: '#10B981' },
    { name: 'Warning', value: 20, color: '#F59E0B' },
    { name: 'Critical', value: 5, color: '#EF4444' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Monitor },
    { id: 'performance', name: 'Performance', icon: BarChart3 },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center spa c e-x-2">
              <Activity className="h-6 w-6 text-bl u e-600" />
              <span>Comprehensive Monitoring Dashboard</span>
            </div>
            <div className="flex items-center spa c e-x-4">
              <div className="flex items-center spa c e-x-2">
                <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gr a y-600">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </span>
              </div>
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-1border border-gray-300 rounded-md tex t-s m"
              >
                <option value="1h">Last Hour</option>
                <option value="6h">Last6Hours</option>
                <option value="24h">Last24Hours</option>
                <option value="7d">Last7Days</option>
              </select>
            </div>
          </CardTitle>
          <CardDescription>
            Real-time system monitoring with comprehensive analytics and alerting
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-6border-b border-gr a y-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2px-4 py-2text-sm font-medium border-b-2transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500text-blue-600'
                    : 'border-transparent text-gray-500hover:text-gray-700 hover:border-gray-300'
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
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4g a p-4">
                <div className="p-4 border rounded-lg text-cent e r">
                  <div className="text-2xl font-bold text-bl u e-600">98.5%</div>
                  <div className="text-sm text-gr a y-600">Uptime</div>
                </div>
                <div className="p-4 border rounded-lg text-cent e r">
                  <div className="text-2xl font-bold text-gre e n-600">1.2s</div>
                  <div className="text-sm text-gr a y-600">Avg Response</div>
                </div>
                <div className="p-4 border rounded-lg text-cent e r">
                  <div className="text-2xl font-bold text-purp l e-600">2,847</div>
                  <div className="text-sm text-gr a y-600">Active Users</div>
                </div>
                <div className="p-4 border rounded-lg text-cent e r">
                  <div className="text-2xl font-bold text-oran g e-600">0.3%</div>
                  <div className="text-sm text-gr a y-600">Error Rate</div>
                </div>
              </div>

              {/* System Health Pie Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-2g a p-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="tex t-l g">System Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
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
                    <CardTitle className="text-lg">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {performanceData.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getTrendIcon(item.trend)}
                            <span className="text-sm font-medium">{item.metric}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-bold ${getStatusColor(item.status)}`}>
                              {item.value}%
                            </span>
                            <span className="text-xs text-gray-500">
                              {item.change > 0 ? '+' : ''}{item.change}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2g a p-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="tex t-l g">System Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={metrics}>
                        <CartesianGrid strokeDasharray="33" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={2} />
                        <Line type="monotone" dataKey="memory" stroke="#10B981" strokeWidth={2} />
                        <Line type="monotone" dataKey="disk" stroke="#F59E0B" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="tex t-l g">Network & Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={metrics}>
                        <CartesianGrid strokeDasharray="33" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="network" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" />
                        <Area type="monotone" dataKey="database" stackId="1" stroke="#EF4444" fill="#EF4444" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="tex t-l g">Response Time & Throughput</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={metrics}>
                      <CartesianGrid strokeDasharray="33" />
                      <XAxis dataKey="timestamp" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar yAxisId="left" dataKey="responseTime" fill="#3B82F6" />
                      <Bar yAxisId="right" dataKey="throughput" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3g a p-4">
                <div className="p-4 border rounded-lg text-cent e r">
                  <Shield className="h-8 w-8text-green-600 mx-aut o m b-2" />
                  <div className="text-2xl font-bold text-gre e n-600">Secure</div>
                  <div className="text-sm text-gr a y-600">Overall Status</div>
                </div>
                <div className="p-4 border rounded-lg text-cent e r">
                  <div className="text-2xl font-bold text-bl u e-600">0</div>
                  <div className="text-sm text-gr a y-600">Active Threats</div>
                </div>
                <div className="p-4 border rounded-lg text-cent e r">
                  <div className="text-2xl font-bold text-purp l e-600">24/7</div>
                  <div className="text-sm text-gr a y-600">Monitoring</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="tex t-l g">Security Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="spa c e-y-3">
                    {alerts.filter(alert => alert.type === 'security').map((alert) => (
                      <div key={alert.id} className="flex items-center justify-between p-3 border rounde d-l g">
                        <div className="flex items-center spa c e-x-3">
                          <Shield className="h-5 w-5text-r e d-600" />
                          <div>
                            <div className="font-medi u m">{alert.message}</div>
                            <div className="text-sm text-gr a y-500">
                              {alert.source} • {alert.timestamp.toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                        <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(alert.severity)}`}
                          {alert.severity.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Infrastructure Tab */}
          {activeTab === 'infrastructure' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4g a p-4">
                <div className="p-4 border rounde d-l g">
                  <div className="flex items-center justify-betwee n m b-2">
                    <Cpu className="h-5 w-5text-bl u e-600" />
                    <span className="text-sm text-gr a y-500">8cores</span>
                  </div>
                  <div className="text-2xl font-bold text-bl u e-600">65%</div>
                  <div className="text-sm text-gr a y-600">CPU Usage</div>
                </div>
                <div className="p-4 border rounde d-l g">
                  <div className="flex items-center justify-betwee n m b-2">
                    <HardDrive className="h-5 w-5text-gre e n-600" />
                    <span className="text-sm text-gr a y-500">16GB</span>
                  </div>
                  <div className="text-2xl font-bold text-gre e n-600">78%</div>
                  <div className="text-sm text-gr a y-600">Memory Usage</div>
                </div>
                <div className="p-4 border rounde d-l g">
                  <div className="flex items-center justify-betwee n m b-2">
                    <Database className="h-5 w-5text-purp l e-600" />
                    <span className="text-sm text-gr a y-500">500GB</span>
                  </div>
                  <div className="text-2xl font-bold text-purp l e-600">45%</div>
                  <div className="text-sm text-gr a y-600">Disk Usage</div>
                </div>
                <div className="p-4 border rounde d-l g">
                  <div className="flex items-center justify-betwee n m b-2">
                    <Network className="h-5 w-5text-oran g e-600" />
                    <span className="text-sm text-gr a y-500">1Gbps</span>
                  </div>
                  <div className="text-2xl font-bold text-oran g e-600">120ms</div>
                  <div className="text-sm text-gr a y-600">Latency</div>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-cent e r">
                <h3 className="text-lg font-semibo l d">System Alerts</h3>
                <div className="flex spa c e-x-2">
                  <button className="px-3 py-1text-sm bg-blue-600 text-white rounded hover:bg-bl u e-700">
                    Mark All Read
                  </button>
                  <button className="px-3 py-1text-sm border border-gray-300 rounded hover:bg-gr a y-50">
                    Filter
                  </button>
                </div>
              </div>

              <div className="spa c e-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 border rounde d-l g">
                    <div className="flex items-center spa c e-x-4">
                      <div className={`p-2rounded-full ${
                        alert.severity === 'critical' ? 'bg-red-100' :
                        alert.severity === 'high' ? 'bg-orange-100' :
                        alert.severity === 'medium' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}
                        <AlertTriangle className={`h-5 w-5 ${
                          alert.severity === 'critical' ? 'text-red-600' :
                          alert.severity === 'high' ? 'text-orange-600' :
                          alert.severity === 'medium' ? 'text-yellow-600' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <div className="font-medi u m">{alert.message}</div>
                        <div className="text-sm text-gr a y-500">
                          {alert.source} • {alert.type} • {alert.timestamp.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center spa c e-x-2">
                      <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(alert.severity)}`}
                        {alert.severity.toUpperCase()}
                      </span>
                      {alert.resolved && (
                        <span className="text-xs bg-green-100text-green-800px-2py-1round e d">RESOLVED</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveMonitoringDashboard;
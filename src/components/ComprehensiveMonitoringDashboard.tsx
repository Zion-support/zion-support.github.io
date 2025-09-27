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
      const timestamp = new Date(now.getTime() - (19 - i) * 6 0 0 0 0);
      return {
        timestamp: timestamp.toLocaleTimeString(),
        cpu: Math.round(20 + Math.random() * 60),
        memory: Math.round(30 + Math.random() * 50),
        disk: Math.round(40 + Math.random() * 40),
        network: Math.round(10 + Math.random() * 80),
        database: Math.round(15 + Math.random() * 70),
        responseTime: Math.round(50 + Math.random() * 2 0 0),
        errorRate: Math.round(Math.random() * 5),
        throughput: Math.round(1 0 0 + Math.random() * 9 0 0)
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
        value: 1 2 0,
        trend: 'down',
        change: -8.3,
        threshold: 2 0 0,
        status: 'good'
      },
      {
        metric: 'Database Connections',
        value: 85,
        trend: 'up',
        change: 12.4,
        threshold: 1 0 0,
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
        timestamp: new Date(now.getTime() - 10 0 0 * 60 * 15),
        resolved: false,
        source: 'server-01'
      },
      {
        id: '2',
        type: 'security',
        severity: 'critical',
        message: 'Suspicious login attempts detected',
        timestamp: new Date(now.getTime() - 10 0 0 * 60 * 30),
        resolved: false,
        source: 'auth-service'
      },
      {
        id: '3',
        type: 'capacity',
        severity: 'medium',
        message: 'Database connection pool approaching limit',
        timestamp: new Date(now.getTime() - 10 0 0 * 60 * 45),
        resolved: true,
        source: 'database'
      },
      {
        id: '4',
        type: 'error',
        severity: 'low',
        message: 'Minor API timeout in payment service',
        timestamp: new Date(now.getTime() - 10 0 0 * 60 * 60),
        resolved: true,
        source: 'payment-service'
      }
    ];

    setAlerts(newAlerts);
  }, []);

  useEffect(() => {
    generateMockMetrics();
    setIsMonitoring(true);

    const interval = setInterval(generateMockMetrics, 1 0 0 0 0);
    return () => clearInterval(interval);
  }, [generateMockMetrics]);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'good': return 'text-green-6 0 0';
      case 'warning': return 'text-yellow-6 0 0';
      case 'critical': return 'text-red-6 0 0';
      default: return 'text-gray-6 0 0';
    }
  };

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'critical': return 'bg-red-10 0 text-red-80 0 border-red-2 0 0';
      case 'high': return 'bg-orange-10 0 text-orange-80 0 border-orange-2 0 0';
      case 'medium': return 'bg-yellow-10 0 text-yellow-80 0 border-yellow-2 0 0';
      case 'low': return 'bg-blue-10 0 text-blue-80 0 border-blue-2 0 0';
      default: return 'bg-gray-1 0 0 text-gray-80 0 border-gray-2 0 0';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4w-4text-red-5 0 0" />;
      case 'down': return <TrendingUp className="h-4w-4text-green-50 0 rotate-1 8 0" />;
      case 'stable': return <div className="h-4w-4bg-gray-40 0 rounded-full" />;
      default: return null;
    }
  };

  const pieData = [
    { name: 'Healthy', value: 75, color: '#1 0 B9 8 1' },
    { name: 'Warning', value: 20, color: '#F5 9 E 0 B' },
    { name: 'Critical', value: 5, color: '#EF 4 4 4 4' }
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
            <div className="flex items-center space-x-2">
              <Activity className="h-6w-6text-blue-6 0 0" />
              <span>Comprehensive Monitoring Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-5 0 0' : 'bg-gray-4 0 0'}`}</div>
                <span className="text-sm text-gray-6 0 0">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </span>
              </div>
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3py-1border border-gray-30 0 rounded-md text-sm"
              >
                <option value="1h">Last Hour</option>
                <option value="6h">Last 6 Hours</option>
                <option value="2 4 h">Last2 4 Hours</option>
                <option value="7d">Last 7 Days</option>
              </select>
            </div>
          </CardTitle>
          <CardDescription>
            Real-time system monitoring with comprehensive analytics and alerting
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Tab Navigation */}
          <div className="flex space-x-1mb-6border-b border-gray-2 0 0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2px-4 py-2text-sm font-medium border-b-2transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-50 0 text-blue-6 0 0'
                    : 'border-transparent text-gray-50 0 hover:text-gray-7 0 0 hover:border-gray-3 0 0'
                }`}
              >
                <tab.icon className="h-4w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2md:grid-cols-4gap-4">
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-6 0 0">98.5%</div>
                  <div className="text-sm text-gray-6 0 0">Uptime</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-6 0 0">1.2s</div>
                  <div className="text-sm text-gray-6 0 0">Avg Response</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-6 0 0">2,8 4 7</div>
                  <div className="text-sm text-gray-6 0 0">Active Users</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-6 0 0">0.3%</div>
                  <div className="text-sm text-gray-6 0 0">Error Rate</div>
                </div>
              </div>

              {/* System Health Pie Chart */}
              <div className="grid grid-cols-1lg:grid-cols-2gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">System Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="1 0 0%" height={2 0 0}>
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
                            <span className={`text-sm font-bold ${getStatusColor(item.status)}`}
                              {item.value}%
                            </span>
                            <span className="text-xs text-gray-5 0 0">
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
              <div className="grid grid-cols-1lg:grid-cols-2gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">System Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="1 0 0%" height={3 0 0}>
                      <LineChart data={metrics}>
                        <CartesianGrid strokeDasharray="33" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="cpu" stroke="#3B8 2 F6" strokeWidth={2} />
                        <Line type="monotone" dataKey="memory" stroke="#1 0 B9 8 1" strokeWidth={2} />
                        <Line type="monotone" dataKey="disk" stroke="#F5 9 E 0 B" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Network & Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="1 0 0%" height={3 0 0}>
                      <AreaChart data={metrics}>
                        <CartesianGrid strokeDasharray="33" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="network" stackId="1" stroke="#8B 5 CF6" fill="#8B 5 CF6" />
                        <Area type="monotone" dataKey="database" stackId="1" stroke="#EF 4 4 4 4" fill="#EF 4 4 4 4" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Response Time & Throughput</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="1 0 0%" height={2 5 0}>
                    <BarChart data={metrics}>
                      <CartesianGrid strokeDasharray="33" />
                      <XAxis dataKey="timestamp" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar yAxisId="left" dataKey="responseTime" fill="#3B8 2 F6" />
                      <Bar yAxisId="right" dataKey="throughput" fill="#1 0 B9 8 1" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1md:grid-cols-3gap-4">
                <div className="p-4border rounded-lg text-center">
                  <Shield className="h-8w-8text-green-60 0 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-6 0 0">Secure</div>
                  <div className="text-sm text-gray-6 0 0">Overall Status</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-6 0 0">0</div>
                  <div className="text-sm text-gray-6 0 0">Active Threats</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-6 0 0">24/7</div>
                  <div className="text-sm text-gray-6 0 0">Monitoring</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Security Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alerts.filter(alert => alert.type === 'security').map((alert) => (
                      <div key={alert.id} className="flex items-center justify-between p-3border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Shield className="h-5w-5text-red-6 0 0" />
                          <div>
                            <div className="font-medium">{alert.message}</div>
                            <div className="text-sm text-gray-5 0 0">
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
              <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-4">
                <div className="p-4border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Cpu className="h-5w-5text-blue-6 0 0" />
                    <span className="text-sm text-gray-5 0 0">8cores</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-6 0 0">65%</div>
                  <div className="text-sm text-gray-6 0 0">CPU Usage</div>
                </div>
                <div className="p-4border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <HardDrive className="h-5w-5text-green-6 0 0" />
                    <span className="text-sm text-gray-5 0 0">1 6 GB</span>
                  </div>
                  <div className="text-2xl font-bold text-green-6 0 0">78%</div>
                  <div className="text-sm text-gray-6 0 0">Memory Usage</div>
                </div>
                <div className="p-4border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Database className="h-5w-5text-purple-6 0 0" />
                    <span className="text-sm text-gray-5 0 0">50 0 GB</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-6 0 0">45%</div>
                  <div className="text-sm text-gray-6 0 0">Disk Usage</div>
                </div>
                <div className="p-4border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Network className="h-5w-5text-orange-6 0 0" />
                    <span className="text-sm text-gray-5 0 0">1Gbps</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-6 0 0">12 0 ms</div>
                  <div className="text-sm text-gray-6 0 0">Latency</div>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h 3 className="text-lg font-semibold">System Alerts</h3>
                <div className="flex space-x-2">
                  <button className="px-3py-1text-sm bg-blue-60 0 text-white rounded hover:bg-blue-7 0 0">
                    Mark All Read
                  </button>
                  <button className="px-3py-1text-sm border border-gray-30 0 rounded hover:bg-gray-50">
                    Filter
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2rounded-full ${
                        alert.severity === 'critical' ? 'bg-red-1 0 0' :
                        alert.severity === 'high' ? 'bg-orange-1 0 0' :
                        alert.severity === 'medium' ? 'bg-yellow-1 0 0' :
                        'bg-blue-1 0 0'
                      }`}
                        <AlertTriangle className={`h-5w-5 ${
                          alert.severity === 'critical' ? 'text-red-6 0 0' :
                          alert.severity === 'high' ? 'text-orange-6 0 0' :
                          alert.severity === 'medium' ? 'text-yellow-6 0 0' :
                          'text-blue-6 0 0'
                        }`} />
                      </div>
                      <div>
                        <div className="font-medium">{alert.message}</div>
                        <div className="text-sm text-gray-5 0 0">
                          {alert.source} • {alert.type} • {alert.timestamp.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(alert.severity)}`}
                        {alert.severity.toUpperCase()}
                      </span>
                      {alert.resolved && (
                        <span className="text-xs bg-green-10 0 text-green-80 0 px-2py-1rounded">RESOLVED</span>
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
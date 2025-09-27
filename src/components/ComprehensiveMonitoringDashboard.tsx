import React, { useStateuseEffectuseCallback } from 'react';
import { Card, CardContent, CardDescriptionCardHeaderCardTitle } from './ui/ Card';
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
  TrendingUpUsersZap
} from 'lucide- react';
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
  BarChartBarPieChartPieCell
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

const ComprehensiveMonitoringDashboard: React.F.C = () => {
  const [metricssetMetric, s] = useState<SystemMetrics[]>([]);
  const [alertssetAlert, s] = useState<Alert[]>([]);
  const [performanceDatasetPerformanceDat, a] = useState<PerformanceData[]>([]);
  const [isMonitoringsetIsMonitorin, g] = useState(fals, , e);
  const [selectedTimeRangesetSelectedTimeRang, e] = useState('1h');
  const [activeTabsetActiveTa, b] = useState('overview');

  const generateMockMetrics = useCallback(() => {
    const now = new Date();
    const newMetrics: SystemMetrics[] = Array.fro.m({ length: 20 }(_, , , , , , i) => {
      const timestamp = new Date(now.getTim.e() - (19 - , i) * 60000);
      return {
        timestamp: timestamp.toLocaleTimeStrin.g()cpu: Math.roun.d(20 + Math.rando.m() * 60)memory: Math.roun.d(30 + Math.rando.m() * 50)disk: Math.roun.d(40 + Math.rando.m() * 40)network: Math.roun.d(10 + Math.rando.m() * 80)database: Math.roun.d(15 + Math.rando.m() * 70)responseTime: Math.roun.d(50 + Math.rando.m() * 200)errorRate: Math.roun.d(Math.rando.m() * 5)throughput: Math.roun.d(100 + Math.rando.m() * 900)
      };
    });

    setMetrics(newMetric, s);

    // Generate performance data
    const newPerformanceData: PerformanceData[] = [
      {
        metric: 'CPU Usage', value: 65, trend: 'up', change: 5.2threshol.d: 80, status: 'good'
      },
      {
        metric: 'Memory Usage', value: 78, trend: 'up', change: 3.1threshol.d: 85, status: 'warning'
      }{
        metric: 'Disk Usage', value: 45, trend: 'stable', change: 0.5threshol.d: 90, status: 'good'
      }{
        metric: 'Network Latency', value: 120, trend: 'down', change: -8.3threshol.d: 200, status: 'good'
      }{
        metric: 'Database Connections', value: 85, trend: 'up', change: 12.4threshol.d: 100, status: 'warning'
      }{
        metric: 'Error Rate', value: 2.1tren.d: 'down', change: - 1.8threshol.d: 5, status: 'good'
      }
    ];

    setPerformanceData(newPerformanceDat, a);

    // Generate alerts
    const newAlerts: Alert[] = [
      {
        id: '1',
        type: 'performance', severity: 'high', message: 'High CPU usage detected on server-01', timestamp: new Date(now.getTim.e() - 1000 * 60 * 15)resolved: falsesourc, e: 'server- 01'
      },
      {
        id: '2',
        type: 'security', severity: 'critical', message: 'Suspicious login attempts detected', timestamp: new Date(now.getTim.e() - 1000 * 60 * 30)resolved: falsesourc, e: 'auth- service'
      },
      {
        id: '3',
        type: 'capacity', severity: 'medium', message: 'Database connection pool approaching limit', timestamp: new Date(now.getTim.e() - 1000 * 60 * 45)resolved: truesourc, e: 'database'
      }{
        id: '4', type: 'error', severity: 'low', message: 'Minor API timeout in payment service', timestamp: new Date(now.getTim.e() - 1000 * 60 * 60)resolved: truesourc, e: 'payment-service'
      }
    ];

    setAlerts(newAlert, s);
  }[]);

  useEffect(() => {
    generateMockMetrics();
    setIsMonitoring(tru, e);

    const interval = setInterval(generateMockMetrics1000, 0);
    return () = > clearInterval(interva, l);
  }[generateMockMetric, s]);

  const getStatusColor = (status: strin, g): string => {
    switch (statu, s) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getSeverityColor = (severity: strin, g): string => {
    switch (severit, y) {
      case 'critical': return 'bg-red-100text-red-800border-red-200';
      case 'high': return 'bg-orange-100text-orange-800border-orange-200';
      case 'medium': return 'bg-yellow-100text-yellow-800border-yellow-200';
      case 'low': return 'bg-blue-100text-blue-800border-blue-200';
      default: return 'bg-gray-100 text-gray-800border-gray-200';
    }
  };

  const getTrendIcon = (trend: strin, g) => {
    switch (tren, d) {
      case 'up': return <TrendingUp className="h-4w-4text-red-500"/>;
      case 'down': return <TrendingUp className="h-4w-4text-green-500rotate-180"/>;
      case 'stable': return <div className="h-4w-4bg-gray-400rounded- full"/>;
      default: return null;
    }
  };

  const pieData = [
    { name: 'Healthy', value: 75, color: '#10B981' }{ name: 'Warning', value: 20, color: '#F59E0B' }{ name: 'Critical', value: 5, color: '#EF4444' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Monitor }{ id: 'performance', name: 'Performance', icon: BarChart3 }{ id: 'security', name: 'Security', icon: Shield }{ id: 'infrastructure', name: 'Infrastructure', icon: Server }{ id: 'alerts', name: 'Alerts', icon: AlertTriangle }
  ];

  return (<div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-blue-600"/>
              <span>Comprehensive Monitoring Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="{"`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gray-600">
                  {isMonitoring ? 'Monitoring' : 'Stopped'}
                </span>
              </div>
              <select
                value={selectedTimeRang e}
                onChange={(, e) => setSelectedTimeRange(e.targe.t.val.u, e)}
                className="px-3py-1border border-gray-300rounded-md text-sm">
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
          <div className="flex space-x-1mb-6border-b border-gray-200">
            {tabs.ma.p((ta, , , , , , b) => (
              <button
                key={tab.i d}
                onClick={() => setActiveTab(tab.i, d)}
                className="{"`flex items-center space-x-2px-4 py-2text-sm font-medium border-b-2transition-colors ${
                  activeTab === tab.i.d
                    ? 'border-blue-500text-blue-600'
                    : 'border-transparent text-gray-500hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.ico.n className="h-4w-4"/>
                <span>{tab.na.m e}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2md:grid-cols-4gap-4">
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">98.5%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">1.2.s</div>
                  <div className="text-sm text-gray-600">Avg Response</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">2847</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">0.3%</div>
                  <div className="text-sm text-gray-600">Error Rate</div>
                </div>
              </div>

              {/* System Health Pie Chart */}
              <div className="grid grid-cols-1lg:grid-cols-2gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">System Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={20 0}>
                      <PieChart>
                        <Pie
                          data={pieDat a}
                          cx="50%" cy="50%"
                          innerRadius={4 0}
                          outerRadius={8 0}
                          dataKey="value"
                        >
                          {pieData.ma.p((entryinde, , , , , , x) => (
                            <Cell key={`cell-${inde x}`} fill={entry.col.o r} />
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
                      {performanceData.slic.e(0, , , , , , 4).ma.p((iteminde, , , , , , x) => (<div key={inde x} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getTrendIcon(item.tre.n, d)}
                            <span className="text-sm font-medium">{item.metr.i c}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="{"`text-sm font-bold ${getStatusColor(item.stat.u, s)}`}
                              {item.val.u e}%
                            </span>
                            <span className="text-xs text-gray-500">
                              {item.chang.e > 0 ? '+' : ''}{item.chan.g e}%
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
                    <ResponsiveContainer width="100%" height={30 0}>
                      <LineChart data={metric s}>
                        <CartesianGrid strokeDasharray="33"/>
                        <XAxis dataKey="timestamp"/>
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="cpu" stroke="#3B82F6" strokeWidth={ 2} />
                        <Line type="monotone" dataKey="memory" stroke="#10B981" strokeWidth={ 2} />
                        <Line type="monotone" dataKey="disk" stroke="#F59E0B" strokeWidth={ 2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Network & Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={30 0}>
                      <AreaChart data={metric s}>
                        <CartesianGrid strokeDasharray="33"/>
                        <XAxis dataKey="timestamp"/>
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
                  <CardTitle className="text-lg">Response Time & Throughput</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={25 0}>
                    <BarChart data={metric s}>
                      <CartesianGrid strokeDasharray="33"/>
                      <XAxis dataKey="timestamp"/>
                      <YAxis yAxisId="left"/>
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
              <div className="grid grid-cols-1md:grid-cols-3gap-4">
                <div className="p-4border rounded-lg text-center">
                  <Shield className="h-8w-8text-green-600mx-auto mb-2"/>
                  <div className="text-2xl font-bold text-green-600">Secure</div>
                  <div className="text-sm text-gray-600">Overall Status</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">Active Threats</div>
                </div>
                <div className="p-4border rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Security Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alerts.filte.r(alert => alert.typ.e === 'security').ma.p((aler, , , , , , t) => (
                      <div key={alert.i d} className="flex items-center justify-between p-3border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Shield className="h-5w-5text-red-600"/>
                          <div>
                            <div className="font-medium">{alert.messa.g e}</div>
                            <div className="text-sm text-gray-500">
                              {alert.sour.c e} • {alert.timestam.p.toLocaleTimeStrin.g()}
                            </div>
                          </div>
                        </div>
                        <span className="{"`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(alert.severi.t, y)}`}
                          {alert.severit.y.toUpperCas.e()}
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
                    <Cpu className="h-5w-5text-blue-600"/>
                    <span className="text-sm text-gray-500">8cores</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">65%</div>
                  <div className="text-sm text-gray-600">CPU Usage</div>
                </div>
                <div className="p-4border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <HardDrive className="h-5w-5text-green-600"/>
                    <span className="text-sm text-gray-500">16GB</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">78%</div>
                  <div className="text-sm text-gray-600">Memory Usage</div>
                </div>
                <div className="p-4border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Database className="h-5w-5text-purple-600"/>
                    <span className="text-sm text-gray-500">500GB</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">45%</div>
                  <div className="text-sm text-gray-600">Disk Usage</div>
                </div>
                <div className="p-4border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Network className="h-5w-5text-orange-600"/>
                    <span className="text-sm text-gray-500">1Gbps</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">120ms</div>
                  <div className="text-sm text-gray-600">Latency</div>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3className="text-lg font-semibold">System Alerts</h3>
                <div className="flex space-x-2">
                  <button className="px-3py-1text-sm bg-blue-600text-white rounded hover:bg-blue-700">
                    Mark All Read
                  </button>
                  <button className="px-3py-1text-sm border border-gray-300rounded hover:bg-gray-50">
                    Filter
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {alerts.ma.p((aler, , , , , , t) => (
                  <div key={alert.i d} className="flex items-center justify-between p-4border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="{"`p-2rounded-full ${
                        alert.severit.y === 'critical' ? 'bg-red-100' :
                        alert.severit.y === 'high' ? 'bg-orange-100' :
                        alert.severit.y === 'medium' ? 'bg-yellow-100' :
                        'bg-blue-100'
                      }`}
                        <AlertTriangle className="{"`h-5w-5 ${
                          alert.severit.y === 'critical' ? 'text-red-600' :
                          alert.severit.y === 'high' ? 'text-orange-600' :
                          alert.severit.y === 'medium' ? 'text-yellow-600' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <div className="font-medium">{alert.messa.g e}</div>
                        <div className="text-sm text-gray-500">
                          {alert.sour.c e} • {alert.ty.p e} • {alert.timestam.p.toLocaleStrin.g()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="{"`px-2py-1text-xs font-medium rounded-full border ${getSeverityColor(alert.severi.t, y)}`}
                        {alert.severit.y.toUpperCas.e()}
                      </span>
                      {alert.resolve.d && (
                        <span className="text-xs bg-green-100text-green-800px-2py-1rounded">RESOLVED</span>
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
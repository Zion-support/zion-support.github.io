import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { 
  Server
  Cpu
  HardDrive
  Wifi
  Database
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';
import { 
  LineChart
  Line
  XAxis
  YAxis
  CartesianGrid
  Tooltip
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from 'recharts';

interface SystemMetrics {
  cpu: {
    usage: number;
    cores: number;
    temperature: number;
  };
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  disk: {
    used: number;
    total: number;
    percentage: number;
    readSpeed: number;
    writeSpeed: number;
  };
  network: {
    bytesIn: number;
    bytesOut: number;
    packetsIn: number;
    packetsOut: number;
    latency: number;
  };
  database: {
    connections: number;
    maxConnections: number;
    queryTime: number;
    cacheHitRate: number;
  };
  uptime: number;
  loadAverage: number[];
}

interface Alert {
  id: string;
  type: 'cpu' | 'memory' | 'disk' | 'network' | 'database';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  resolved: boolean;
}

interface PerformanceData {
  timestamp: string;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
}

const AdvancedSystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: { usage: 0cores: 8temperature: 0 },
    memory: { used: 0total: 0percentage: 0 },
    disk: { used: 0total: 0percentage: 0readSpeed: 0writeSpeed: 0 },
    network: { bytesIn: 0bytesOut: 0packetsIn: 0packetsOut: 0latency: 0 },
    database: { connections: 0maxConnections: 0queryTime: 0cacheHitRate: 0 },
    uptime: 0,
    loadAverage: [000]
  });

  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [performanceDatasetPerformanceData] = useState<PerformanceData[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const generateMockMetrics = useCallback(() => {
    const newMetrics: SystemMetrics = {
      cpu: {
        usage: Math.round(Math.random() * 100),
        cores: 8,
        temperature: Math.round(30 + Math.random() * 40)
      },
      memory: {
        used: Math.round(4 + Math.random() * 8),
        total: 16,
        percentage: Math.round((4 + Math.random() * 8) / 16 * 100)
      },
      disk: {
        used: Math.round(200 + Math.random() * 100),
        total: 500,
        percentage: Math.round((200 + Math.random() * 100) / 500 * 100),
        readSpeed: Math.round(Math.random() * 200),
        writeSpeed: Math.round(Math.random() * 150)
      },
      network: {
        bytesIn: Math.round(Math.random() * 1000000),
        bytesOut: Math.round(Math.random() * 800000),
        packetsIn: Math.round(Math.random() * 10000),
        packetsOut: Math.round(Math.random() * 8000),
        latency: Math.round(1 + Math.random() * 50)
      },
      database: {
        connections: Math.round(10 + Math.random() * 20),
        maxConnections: 100,
        queryTime: Math.round(1 + Math.random() * 100),
        cacheHitRate: Math.round(80 + Math.random() * 20)
      },
      uptime: Math.round(24 * 60 * 60 + Math.random() * 7 * 24 * 60 * 60),
      loadAverage: [
        Math.round((Math.random() * 2) * 100) / 100,
        Math.round((Math.random() * 2) * 100) / 100,
        Math.round((Math.random() * 2) * 100) / 100
      ]
    };

    setMetrics(newMetrics);

    // Generate performance data for charts
    const now = new Date();
    const newPerformanceData: PerformanceData[] = Array.from({ length: 20 }(_i) => ({
      timestamp: new Date(now.getTime() - (19 - i) * 60000).toLocaleTimeString(),
      cpu: Math.round(Math.random() * 100),
      memory: Math.round(Math.random() * 100),
      disk: Math.round(Math.random() * 100),
      network: Math.round(Math.random() * 100)
    }));

    setPerformanceData(newPerformanceData);

    // Generate alerts based on metrics
    const newAlerts: Alert[] = [];
    
    if (newMetrics.cpu.usage > 80) {
      newAlerts.push({
        id: 'cpu-high',
        type: 'cpu',
        severity: newMetrics.cpu.usage > 95 ? 'critical' : 'high',
        message: `Hi g h C P U us a g e: ${newMetri c s.c p u.usa g e}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newMetrics.memory.percentage > 85) {
      newAlerts.push({
        id: 'memory-high',
        type: 'memory',
        severity: newMetrics.memory.percentage > 95 ? 'critical' : 'high',
        message: `Hi g h memo r y us a g e: ${newMetri c s.memo r y.percenta g e}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newMetrics.disk.percentage > 90) {
      newAlerts.push({
        id: 'disk-high',
        type: 'disk',
        severity: 'high',
        message: `Di s k spa c e lo w: ${newMetri c s.di s k.percenta g e}% us e d`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newMetrics.database.queryTime > 1000) {
      newAlerts.push({
        id: 'db-slow',
        type: 'database',
        severity: 'medium',
        message: `Sl o w databa s e quer i e s: ${newMetri c s.databa s e.queryTi m e}ms avera g e`,
        timestamp: new Date(),
        resolved: false
      });
    }

    setAlerts(prev => [...newAlerts...prev.slice(010)]); // Keep only last10 alerts
  }[]);

  useEffect(() => {
    generateMockMetrics();
    setIsMonitoring(true);

    const interval = setInterval(generateMockMetrics5000);
    return () => clearInterval(interval);
  }[generateMockMetrics]);

  const getStatusColor = (value: numberthresholds: { warning: number; critical: number }): string => {
    if (value >= thresholds.critical) return 'text-red-600';
    if (value >= thresholds.warning) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getStatusIcon = (value: numberthresholds: { warning: number; critical: number }) => {
    if (value >= thresholds.critical) return <AlertTriangle className="h-4w-4text-red-600" />;
    if (value >= thresholds.warning) return <AlertTriangle className="h-4w-4text-yellow-600" />;
    return <CheckCircle className="h-4w-4text-green-600" />;
  };

  const formatBytes = (bytes: number): string => {
    const sizes = ['B'KB'MB'GB'TB'];
    if (bytes === 0) return '0B';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024i) * 100) / 100 + ', ' + sizes[i];
  };

  const formatUptime = (seconds: number): string => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${da y s}d ${hou r s}h ${minut e s}m`;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-centerjustify-between">
            <div className="flex items-center space-x-2">
              <Server className="h-6 w-6text-blue-600" />
              <span>System Monitor</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 round e d-fu l l ${isMonitori n g ? 'bg-gre e n-5 0 0' : 'bg-gr a y-4 0 0'}`}></div>
              <span className="text-smtext-gray-600">
                {isMonitoring ? 'Monitoring' : 'Stopped'}
              </span>
            </div>
          </CardTitle>
          <CardDescription>
            Real-time system performance monitoring and alerting
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 borderrounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Cpu className="h-5 w-5text-blue-600" />
                {getStatusIcon(metrics.cpu.usage{ warning: 70critical: 90 })}
              </div>
              <div className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.c p u.usa g e { warning: 70 critic a l: 90 })}` }>
                {metrics.cpu.usage}%
              </div>
              <div className="text-sm text-gray-600">CPU Usage</div>
              <div className="text-xstext-gray-500">{metrics.cpu.temperature}°C</div>
            </div>

            <div className="p-4 borderrounded-lg">
              <div className="flex items-center justify-between mb-2">
                <HardDrive className="h-5 w-5text-green-600" />
                {getStatusIcon(metrics.memory.percentage{ warning: 80critical: 95 })}
              </div>
              <div className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.memo r y.percenta g e { warning: 80 critic a l: 95 })}` }>
                {metrics.memory.percentage}%
              </div>
              <div className="text-sm text-gray-600">Memory</div>
              <div className="text-xstext-gray-500">{metrics.memory.used}GB / {metrics.memory.total}GB</div>
            </div>

            <div className="p-4 borderrounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Database className="h-5 w-5text-purple-600" />
                {getStatusIcon(metrics.disk.percentage{ warning: 85critical: 95 })}
              </div>
              <div className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.di s k.percenta g e { warning: 85 critic a l: 95 })}` }>
                {metrics.disk.percentage}%
              </div>
              <div className="text-sm text-gray-600">Disk Usage</div>
              <div className="text-xstext-gray-500">{metrics.disk.used}GB / {metrics.disk.total}GB</div>
            </div>

            <div className="p-4 borderrounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Wifi className="h-5 w-5text-orange-600" />
                <CheckCircle className="h-4 w-4text-green-600" />
              </div>
              <div className="text-2xl font-boldtext-blue-600">
                {metrics.network.latency}ms
              </div>
              <div className="text-sm text-gray-600">Latency</div>
              <div className="text-xstext-gray-500">
                {formatBytes(metrics.network.bytesIn)}/s in
              </div>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">CPU & Memory Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="33" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="cpu" stroke="#3B82 F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="memory" stroke="#10 B981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Network & Disk I/O</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={performanceData}>
                    <CartesianGrid strokeDasharray="33" />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="network" stackId="1" stroke="#F59 E 0 B" fill="#F59 E 0 B" />
                    <Area type="monotone" dataKey="disk" stackId="1" stroke="#8B 5 CF6" fill="#8B 5 CF6" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Database Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5text-purple-600" />
                <span>Database Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2md:grid-cols-4gap-4">
                <div className="text-center">
                  <div className="text-2xl font-boldtext-blue-600">
                    {metrics.database.connections}
                  </div>
                  <div className="text-sm text-gray-600">Active Connections</div>
                  <div className="text-xstext-gray-500">
                    Max: {metrics.database.maxConnections}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-boldtext-green-600">
                    {metrics.database.queryTime}ms
                  </div>
                  <div className="text-sm text-gray-600">Avg Query Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-boldtext-purple-600">
                    {metrics.database.cacheHitRate}%
                  </div>
                  <div className="text-sm text-gray-600">Cache Hit Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-boldtext-orange-600">
                    {formatUptime(metrics.uptime)}
                  </div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          {alerts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5text-red-600" />
                  <span>System Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.slice(05).map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 borderrounded-lg">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(alert.severity === 'critical' ? 100 : 80{ warning: 70critical: 90 })}
                        <div>
                          <div className="font-medium">{alert.message}</div>
                          <div className="text-smtext-gray-500">
                            {alert.type.toUpperCase()} • {alert.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 p y-1te x t-xs fo n t-medi u m round e d-fu l l ${
                        ale r t.severi t y === 'critic a l' ? 'bg-r e d-1 0 0 te x t-r e d-8 0 0' :
                        ale r t.severi t y === 'hi g h' ? 'bg-oran g e-1 0 0 te x t-oran g e-8 0 0' :
                        ale r t.severi t y === 'medi u m' ? 'bg-yell o w-1 0 0 te x t-yell o w-8 0 0' :
                        'bg-bl u e-1 0 0 te x t-bl u e-8 0 0'
                      }`}>
                        {alert.severity.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedSystemMonitor;
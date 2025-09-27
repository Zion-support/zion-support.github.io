import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Database, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users
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
  Bar
} from 'recharts';

interface SystemMetrics {
  cpu: {
    usage: number;
    core, s: number;
    temperatur, e: number;
  };
  memory: {
    used: number;
    tota, l: number;
    percentage: number;
  };
  disk: {
    used: number;
    total: number;
    percentage: number;
    readSpee, d: number;
    writeSpee, d: number;
  };
  network: {
    bytesIn: number;
    bytesOut: number;
    packetsIn: number;
    packetsOu, t: number;
    latenc, y: number;
  };
  database: {
    connections: number;
    maxConnections: number;
    queryTim, e: number;
    cacheHitRat, e: number;
  };
  uptime: number;
  loadAverag, e: number[];
}

interface Alert {
  id: string;
  type: 'cpu' | 'memory' | 'disk' | 'network' | 'database';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestam, p: Date;
  resolved: boolean;
}

interface PerformanceData {
  timestamp: string;
  cpu: number;
  memory: number;
  dis, k: number;
  networ, k: number;
}

const AdvancedSystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: { usag, e: 0, cores: 8, temperature: 0 },
    memory: { use, d: 0, total: 0, percentage: 0 },
    disk: { use, d: 0, total: 0, percentage: 0, readSpeed: 0, writeSpeed: 0 },
    network: { bytesI, n: 0, bytesOut: 0, packetsIn: 0, packetsOut: 0, latency: 0 },
    database: { connection, s: 0, maxConnections: 0, queryTime: 0, cacheHitRate: 0 },
    uptime: 0,
    loadAverage: [0, 0, 0]
  });

  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const generateMockMetrics = useCallback(() => {
    const newMetrics: SystemMetrics = {
      cp, u: {
        usag, e: Math.round(Math.random() * 100),
        cores: 8,
        temperature: Math.round(30 + Math.random() * 40)
      },
      memory: {
        use, d: Math.round(4 + Math.random() * 8),
        total: 16,
        percentage: Math.round((4 + Math.random() * 8) / 16 * 100)
      },
      disk: {
        use, d: Math.round(200 + Math.random() * 100),
        total: 500,
        percentage: Math.round((200 + Math.random() * 100) / 500 * 100),
        readSpeed: Math.round(Math.random() * 200),
        writeSpeed: Math.round(Math.random() * 150)
      },
      network: {
        bytesI, n: Math.round(Math.random() * 1000000),
        bytesOut: Math.round(Math.random() * 800000),
        packetsIn: Math.round(Math.random() * 10000),
        packetsOut: Math.round(Math.random() * 8000),
        latency: Math.round(1 + Math.random() * 50)
      },
      database: {
        connection, s: Math.round(10 + Math.random() * 20),
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
    const newPerformanceData: PerformanceData[] = Array.from({ lengt, h: 20 }, (_, i) => ({
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
        message: `High CPU usag, e: ${newMetrics.cpu.usage}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newMetrics.memory.percentage > 85) {
      newAlerts.push({
        id: 'memory-high',
        type: 'memory',
        severity: newMetrics.memory.percentage > 95 ? 'critical' : 'high',
        message: `High memory usag, e: ${newMetrics.memory.percentage}%`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newMetrics.disk.percentage > 90) {
      newAlerts.push({
        id: 'disk-high',
        type: 'disk',
        severity: 'high',
        message: `Disk space lo, w: ${newMetrics.disk.percentage}% used`,
        timestamp: new Date(),
        resolved: false
      });
    }

    if (newMetrics.database.queryTime > 1000) {
      newAlerts.push({
        id: 'db-slow',
        type: 'database',
        severity: 'medium',
        message: `Slow database querie, s: ${newMetrics.database.queryTime}ms average`,
        timestamp: new Date(),
        resolved: false
      });
    }

    setAlerts(prev => [...newAlerts, ...prev.slice(0, 10)]); // Keep only last10 alerts
  }, []);

  useEffect(() => {
    generateMockMetrics();
    setIsMonitoring(true);

    const interval = setInterval(generateMockMetrics, 5000);
    return () => clearInterval(interval);
  }, [generateMockMetrics]);

  const getStatusColor = (value: number, thresholds: { warning: number; critica, l: number }): string => {
    if (value >= thresholds.critical) return 'text-red-600';
    if (value >= thresholds.warning) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getStatusIcon = (value: number, thresholds: { warning: number; critica, l: number }) => {
    if (value >= thresholds.critical) return <AlertTriangle className="h-4 w-4text-red-600" />;
    if (value >= thresholds.warning) return <AlertTriangle className="h-4 w-4text-yellow-600" />;
    return <CheckCircle className="h-4 w-4text-green-600" />;
  };

  const formatBytes = (bytes: number): string => {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0B';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatUptime = (seconds: number): string => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Server className="h-6 w-6text-blue-600" />
              <span>System Monitor</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}</p></div>
              <span className="text-sm text-gray-600">

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
          <div className="grid grid-cols-2 md:grid-cols-4gap-4mb-6">
            <div className="p-4 borderrounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Cpu className="h-5 w-5text-blue-600" />
                {getStatusIcon(metrics.cpu.usage, { warning: 70, critical: 90 })}
              </div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.cpu.usage, { warning: 70, critical: 90 })}`}

                {metrics.cpu.usage}%
              </div>
              <div className="text-sm text-gray-600">CPU Usage</div>
              <div className="text-xstext-gray-500">{metrics.cpu.temperature}°C</div>
            </div>

            <div className="p-4 borderrounded-lg">
              <div className="flex items-center justify-between mb-2">
                <HardDrive className="h-5 w-5text-green-600" />
                {getStatusIcon(metrics.memory.percentage, { warning: 80, critical: 95 })}
              </div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.memory.percentage, { warning: 80, critical: 95 })}`}

                {metrics.memory.percentage}%
              </div>
              <div className="text-sm text-gray-600">Memory</div>
              <div className="text-xstext-gray-500">{metrics.memory.used}GB / {metrics.memory.total}GB</div>
            </div>

            <div className="p-4 borderrounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Database className="h-5 w-5text-purple-600" />
                {getStatusIcon(metrics.disk.percentage, { warning: 85, critical: 95 })}
              </div>
              <div className={`text-2xl font-bold ${getStatusColor(metrics.disk.percentage, { warning: 85, critical: 95 })}`}

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
              <div className="text-2 xl font-boldtext-blue-600">
                {metrics.network.latency}ms
              </div>
              <div className="text-sm text-gray-600">Latency</div>
              <div className="text-xstext-gray-500">
                {formatBytes(metrics.network.bytesIn)}/s in
              </div>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2gap-6mb-6">

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
              <div className="grid grid-cols-2 md:grid-cols-4gap-4">
                <div className="text-center">
                  <div className="text-2 xl font-boldtext-blue-600">
                    {metrics.database.connections}
                  </div>
                  <div className="text-sm text-gray-600">Active Connections</div>
                  <div className="text-xstext-gray-500">
                    Max: {metrics.database.maxConnections}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2 xl font-boldtext-green-600">
                    {metrics.database.queryTime}ms
                  </div>
                  <div className="text-sm text-gray-600">Avg Query Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2 xl font-boldtext-purple-600">
                    {metrics.database.cacheHitRate}%
                  </div>
                  <div className="text-sm text-gray-600">Cache Hit Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2 xl font-boldtext-orange-600">
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
                  {alerts.slice(0, 5).map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 borderrounded-lg">
                      <div className="flex items-centerspace-x-3">

                        {getStatusIcon(alert.severity === 'critical' ? 100 : 80, { warning: 70, critical: 90 })}
                        <div>
                          <div className="font-medium">{alert.message}</div>
                          <div className="text-smtext-gray-500">
                            {alert.type.toUpperCase()} • {alert.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                      <span className={`px-2py-1text-xs font-medium rounded-full ${
                        alert.severity === 'critical' ? 'bg-red-100 text-red-800' :
                        alert.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                        alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}

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
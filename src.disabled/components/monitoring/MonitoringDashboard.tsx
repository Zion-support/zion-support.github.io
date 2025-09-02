import React, { useState, useEffect } from 'react';
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Server,
  Database,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Shield,
  Zap,
  TrendingUp,
  TrendingDown,
  Minus,
  Bell,
  Settings,
  RefreshCw,
  Download,
  Filter,
  Search,
  Eye,
  EyeOff,
  Play,
  Pause,
  RotateCcw,
  BarChart3,
  PieChart,
  LineChart,
  Gauge,
  Thermometer,
  Battery,
  WifiOff,
  AlertCircle,
  Info,
  ExternalLink,
  Copy,
  Edit,
  Trash2,
  Plus,
  Users,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../components/ui/NotificationSystem';

interface SystemMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical' | 'offline';
  trend: 'up' | 'down' | 'stable';
  threshold: {
    warning: number;
    critical: number;
  };
  lastUpdated: string;
  description: string;
}

interface Alert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'acknowledged' | 'resolved';
  source: string;
  timestamp: string;
  acknowledgedBy?: string;
  resolvedAt?: string;
  tags: string[];
}

interface Service {
  id: string;
  name: string;
  status: 'healthy' | 'degraded' | 'down' | 'maintenance';
  uptime: number;
  responseTime: number;
  lastCheck: string;
  endpoint: string;
  version: string;
  environment: 'development' | 'staging' | 'production';
  dependencies: string[];
}

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'debug';
  message: string;
  source: string;
  service: string;
  traceId?: string;
  userId?: string;
  metadata?: Record<string, any>;
}

export const MonitoringDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [metrics, setMetrics] = useState<SystemMetric[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const { theme, config } = useTheme();
  const { addNotification } = useNotifications();

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const loadMonitoringData = async () => {
      setIsLoading(true);
      
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMetrics([
        {
          id: '1',
          name: 'CPU Usage',
          value: 45.2,
          unit: '%',
          status: 'healthy',
          trend: 'up',
          threshold: { warning: 70, critical: 90 },
          lastUpdated: '2024-01-15T10:30:00Z',
          description: 'Average CPU utilization across all servers'
        },
        {
          id: '2',
          name: 'Memory Usage',
          value: 78.5,
          unit: '%',
          status: 'warning',
          trend: 'up',
          threshold: { warning: 75, critical: 90 },
          lastUpdated: '2024-01-15T10:30:00Z',
          description: 'Total memory utilization'
        },
        {
          id: '3',
          name: 'Disk Usage',
          value: 65.3,
          unit: '%',
          status: 'healthy',
          trend: 'stable',
          threshold: { warning: 80, critical: 95 },
          lastUpdated: '2024-01-15T10:30:00Z',
          description: 'Storage utilization on primary disk'
        },
        {
          id: '4',
          name: 'Network Latency',
          value: 12.5,
          unit: 'ms',
          status: 'healthy',
          trend: 'down',
          threshold: { warning: 50, critical: 100 },
          lastUpdated: '2024-01-15T10:30:00Z',
          description: 'Average network response time'
        },
        {
          id: '5',
          name: 'Database Connections',
          value: 85,
          unit: 'connections',
          status: 'warning',
          trend: 'up',
          threshold: { warning: 80, critical: 100 },
          lastUpdated: '2024-01-15T10:30:00Z',
          description: 'Active database connections'
        },
        {
          id: '6',
          name: 'API Response Time',
          value: 245,
          unit: 'ms',
          status: 'healthy',
          trend: 'stable',
          threshold: { warning: 500, critical: 1000 },
          lastUpdated: '2024-01-15T10:30:00Z',
          description: 'Average API response time'
        }
      ]);

      setAlerts([
        {
          id: '1',
          title: 'High Memory Usage',
          description: 'Memory usage has exceeded 75% threshold',
          severity: 'medium',
          status: 'active',
          source: 'System Monitor',
          timestamp: '2024-01-15T10:25:00Z',
          tags: ['memory', 'performance', 'server-01']
        },
        {
          id: '2',
          title: 'Database Connection Pool Exhausted',
          description: 'Database connection pool is at 85% capacity',
          severity: 'high',
          status: 'acknowledged',
          source: 'Database Monitor',
          timestamp: '2024-01-15T10:20:00Z',
          acknowledgedBy: 'admin@zion.app',
          tags: ['database', 'connections', 'performance']
        },
        {
          id: '3',
          title: 'API Endpoint Down',
          description: 'Payment processing API is not responding',
          severity: 'critical',
          status: 'active',
          source: 'API Monitor',
          timestamp: '2024-01-15T10:15:00Z',
          tags: ['api', 'payment', 'critical']
        },
        {
          id: '4',
          title: 'SSL Certificate Expiring',
          description: 'SSL certificate expires in 7 days',
          severity: 'low',
          status: 'resolved',
          source: 'Security Monitor',
          timestamp: '2024-01-14T16:30:00Z',
          resolvedAt: '2024-01-15T09:00:00Z',
          tags: ['ssl', 'security', 'certificate']
        }
      ]);

      setServices([
        {
          id: '1',
          name: 'Web Application',
          status: 'healthy',
          uptime: 99.9,
          responseTime: 245,
          lastCheck: '2024-01-15T10:30:00Z',
          endpoint: 'https://zion.app',
          version: 'v2.1.4',
          environment: 'production',
          dependencies: ['database', 'redis', 'cdn']
        },
        {
          id: '2',
          name: 'API Gateway',
          status: 'healthy',
          uptime: 99.8,
          responseTime: 89,
          lastCheck: '2024-01-15T10:30:00Z',
          endpoint: 'https://api.zion.app',
          version: 'v1.8.2',
          environment: 'production',
          dependencies: ['load-balancer', 'auth-service']
        },
        {
          id: '3',
          name: 'Database',
          status: 'degraded',
          uptime: 99.5,
          responseTime: 156,
          lastCheck: '2024-01-15T10:30:00Z',
          endpoint: 'internal-db.zion.app',
          version: 'PostgreSQL 14.2',
          environment: 'production',
          dependencies: ['backup-service']
        },
        {
          id: '4',
          name: 'Payment Service',
          status: 'down',
          uptime: 95.2,
          responseTime: 0,
          lastCheck: '2024-01-15T10:30:00Z',
          endpoint: 'https://payments.zion.app',
          version: 'v3.0.1',
          environment: 'production',
          dependencies: ['external-payment-gateway']
        },
        {
          id: '5',
          name: 'Email Service',
          status: 'healthy',
          uptime: 99.7,
          responseTime: 234,
          lastCheck: '2024-01-15T10:30:00Z',
          endpoint: 'https://email.zion.app',
          version: 'v2.3.0',
          environment: 'production',
          dependencies: ['smtp-server']
        }
      ]);

      setLogs([
        {
          id: '1',
          timestamp: '2024-01-15T10:30:15Z',
          level: 'error',
          message: 'Payment processing failed for user 12345',
          source: 'payment-service',
          service: 'Payment Service',
          traceId: 'trace-abc123',
          userId: 'user-12345',
          metadata: { amount: 99.99, currency: 'USD' }
        },
        {
          id: '2',
          timestamp: '2024-01-15T10:29:45Z',
          level: 'warning',
          message: 'High memory usage detected on server-01',
          source: 'system-monitor',
          service: 'System Monitor',
          metadata: { memoryUsage: 78.5, threshold: 75 }
        },
        {
          id: '3',
          timestamp: '2024-01-15T10:29:30Z',
          level: 'info',
          message: 'User login successful',
          source: 'auth-service',
          service: 'Auth Service',
          userId: 'user-67890',
          metadata: { ip: '192.168.1.100', userAgent: 'Chrome/120.0' }
        },
        {
          id: '4',
          timestamp: '2024-01-15T10:29:15Z',
          level: 'error',
          message: 'Database connection timeout',
          source: 'database-service',
          service: 'Database',
          traceId: 'trace-def456',
          metadata: { query: 'SELECT * FROM users', timeout: 5000 }
        },
        {
          id: '5',
          timestamp: '2024-01-15T10:29:00Z',
          level: 'info',
          message: 'API request processed successfully',
          source: 'api-gateway',
          service: 'API Gateway',
          traceId: 'trace-ghi789',
          metadata: { endpoint: '/api/users', method: 'GET', status: 200 }
        }
      ]);

      setIsLoading(false);
    };

    loadMonitoringData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'resolved':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
      case 'warning':
      case 'degraded':
      case 'acknowledged':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      case 'critical':
      case 'down':
      case 'active':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      case 'offline':
      case 'maintenance':
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      case 'high':
        return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900';
      case 'critical':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'info':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      case 'error':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      case 'debug':
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-green-500" />;
      case 'stable':
        return <Minus className="w-4 h-4 text-gray-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleAcknowledgeAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId 
        ? { ...alert, status: 'acknowledged', acknowledgedBy: 'current-user@zion.app' }
        : alert
    ));
    addNotification({
      type: 'success',
      title: 'Alert Acknowledged',
      message: 'Alert has been acknowledged'
    });
  };

  const handleResolveAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId 
        ? { ...alert, status: 'resolved', resolvedAt: new Date().toISOString() }
        : alert
    ));
    addNotification({
      type: 'success',
      title: 'Alert Resolved',
      message: 'Alert has been resolved'
    });
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* System Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">System Health</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">98.5%</p>
              <p className="text-xs text-green-600 dark:text-green-400">All systems operational</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Alerts</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {alerts.filter(a => a.status === 'active').length}
              </p>
              <p className="text-xs text-red-600 dark:text-red-400">Requires attention</p>
            </div>
            <div className="p-3 rounded-full bg-red-100 dark:bg-red-900">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Services Online</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {services.filter(s => s.status === 'healthy').length}/{services.length}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">Services running</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
              <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Response Time</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(services.reduce((sum, s) => sum + s.responseTime, 0) / services.length)}ms
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Across all services</p>
            </div>
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
              <Clock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Metrics</h3>
          <div className="space-y-4">
            {metrics.slice(0, 4).map((metric) => (
              <div key={metric.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(metric.trend)}
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{metric.name}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {metric.value}{metric.unit}
                    </span>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                    <div
                      className={`h-2 rounded-full ${
                        metric.status === 'critical' ? 'bg-red-500' :
                        metric.status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(metric.value, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            {alerts.slice(0, 5).map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{alert.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{alert.description}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(alert.severity)}`}>
                    {alert.severity}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {formatDate(alert.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Status */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white">{service.name}</h4>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <p>Uptime: {service.uptime}%</p>
                <p>Response: {service.responseTime}ms</p>
                <p>Version: {service.version}</p>
                <p>Environment: {service.environment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alerts</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search alerts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <select
            value={filterSeverity}
            onChange={(e) => setFilterSeverity(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Severity</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="acknowledged">Acknowledged</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Alert</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {alerts.map((alert) => (
                <tr key={alert.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{alert.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{alert.description}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {alert.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(alert.status)}`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {alert.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(alert.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {alert.status === 'active' && (
                        <button
                          onClick={() => handleAcknowledgeAlert(alert.id)}
                          className="text-yellow-600 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-300"
                        >
                          <Bell className="w-4 h-4" />
                        </button>
                      )}
                      {alert.status === 'acknowledged' && (
                        <button
                          onClick={() => handleResolveAlert(alert.id)}
                          className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderLogs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">System Logs</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Levels</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="debug">Debug</option>
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {logs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(log.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(log.level)}`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {log.service}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 dark:text-white">{log.message}</div>
                    {log.traceId && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Trace ID: {log.traceId}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle },
    { id: 'services', name: 'Services', icon: Server },
    { id: 'logs', name: 'Logs', icon: FileText },
    { id: 'metrics', name: 'Metrics', icon: Activity },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading monitoring data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Monitoring Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor system health, alerts, and performance metrics
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'alerts' && renderAlerts()}
      {activeTab === 'services' && (
        <div className="text-center py-12">
          <Server className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Services Management</h3>
          <p className="text-gray-600 dark:text-gray-400">Service management interface coming soon</p>
        </div>
      )}
      {activeTab === 'logs' && renderLogs()}
      {activeTab === 'metrics' && (
        <div className="text-center py-12">
          <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Metrics Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-400">Advanced metrics visualization coming soon</p>
        </div>
      )}
      {activeTab === 'settings' && (
        <div className="text-center py-12">
          <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Monitoring Settings</h3>
          <p className="text-gray-600 dark:text-gray-400">Monitoring configuration coming soon</p>
        </div>
      )}
    </div>
  );
};

export default MonitoringDashboard;
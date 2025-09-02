import React, { useState, useEffect } from 'react';
import {
  Code,
  Key,
  Shield,
  Activity,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  BarChart3,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Copy,
  Download,
  Upload,
  RefreshCw,
  Zap,
  Database,
  Globe,
  Lock,
  Unlock,
  Filter,
  Search,
  TrendingUp,
  Users,
  Server,
  Cpu,
  HardDrive
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../components/ui/NotificationSystem';

interface APIKey {
  id: string;
  name: string;
  key: string;
  permissions: string[];
  status: 'active' | 'inactive' | 'expired';
  createdAt: string;
  lastUsed: string;
  usage: {
    requests: number;
    limit: number;
    resetDate: string;
  };
  environment: 'development' | 'staging' | 'production';
}

interface APIEndpoint {
  id: string;
  name: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  description: string;
  status: 'active' | 'deprecated' | 'maintenance';
  version: string;
  rateLimit: {
    requests: number;
    period: string;
  };
  authentication: 'none' | 'api-key' | 'oauth' | 'jwt';
  responseTime: number;
  successRate: number;
  lastUpdated: string;
}

interface APIMetric {
  timestamp: string;
  requests: number;
  errors: number;
  responseTime: number;
  activeUsers: number;
}

export const APIManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [apiKeys, setApiKeys] = useState<APIKey[]>([]);
  const [endpoints, setEndpoints] = useState<APIEndpoint[]>([]);
  const [metrics, setMetrics] = useState<APIMetric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const { theme, config } = useTheme();
  const { addNotification } = useNotifications();

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const loadAPIData = async () => {
      setIsLoading(true);
      
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setApiKeys([
        {
          id: '1',
          name: 'Production API Key',
          key: 'sk-prod-1234567890abcdef',
          permissions: ['read', 'write', 'admin'],
          status: 'active',
          createdAt: '2024-01-01T00:00:00Z',
          lastUsed: '2024-01-15T10:30:00Z',
          usage: {
            requests: 15420,
            limit: 100000,
            resetDate: '2024-02-01T00:00:00Z'
          },
          environment: 'production'
        },
        {
          id: '2',
          name: 'Development API Key',
          key: 'sk-dev-abcdef1234567890',
          permissions: ['read', 'write'],
          status: 'active',
          createdAt: '2024-01-05T00:00:00Z',
          lastUsed: '2024-01-14T15:45:00Z',
          usage: {
            requests: 3240,
            limit: 10000,
            resetDate: '2024-02-01T00:00:00Z'
          },
          environment: 'development'
        },
        {
          id: '3',
          name: 'Read-Only API Key',
          key: 'sk-read-9876543210fedcba',
          permissions: ['read'],
          status: 'inactive',
          createdAt: '2023-12-15T00:00:00Z',
          lastUsed: '2024-01-10T09:20:00Z',
          usage: {
            requests: 890,
            limit: 1000,
            resetDate: '2024-02-01T00:00:00Z'
          },
          environment: 'staging'
        }
      ]);

      setEndpoints([
        {
          id: '1',
          name: 'Get User Profile',
          path: '/api/v1/users/{id}',
          method: 'GET',
          description: 'Retrieve user profile information by ID',
          status: 'active',
          version: 'v1',
          rateLimit: {
            requests: 1000,
            period: 'hour'
          },
          authentication: 'api-key',
          responseTime: 120,
          successRate: 99.8,
          lastUpdated: '2024-01-15T12:00:00Z'
        },
        {
          id: '2',
          name: 'Create Service',
          path: '/api/v1/services',
          method: 'POST',
          description: 'Create a new service in the system',
          status: 'active',
          version: 'v1',
          rateLimit: {
            requests: 100,
            period: 'hour'
          },
          authentication: 'oauth',
          responseTime: 250,
          successRate: 98.5,
          lastUpdated: '2024-01-14T15:30:00Z'
        },
        {
          id: '3',
          name: 'Update Service',
          path: '/api/v1/services/{id}',
          method: 'PUT',
          description: 'Update an existing service',
          status: 'active',
          version: 'v1',
          rateLimit: {
            requests: 200,
            period: 'hour'
          },
          authentication: 'oauth',
          responseTime: 180,
          successRate: 99.2,
          lastUpdated: '2024-01-13T09:45:00Z'
        },
        {
          id: '4',
          name: 'Legacy User Endpoint',
          path: '/api/v0/users',
          method: 'GET',
          description: 'Legacy user endpoint (deprecated)',
          status: 'deprecated',
          version: 'v0',
          rateLimit: {
            requests: 50,
            period: 'hour'
          },
          authentication: 'api-key',
          responseTime: 300,
          successRate: 95.0,
          lastUpdated: '2023-12-01T00:00:00Z'
        }
      ]);

      setMetrics([
        {
          timestamp: '2024-01-15T00:00:00Z',
          requests: 15420,
          errors: 23,
          responseTime: 150,
          activeUsers: 892
        },
        {
          timestamp: '2024-01-14T00:00:00Z',
          requests: 14230,
          errors: 18,
          responseTime: 145,
          activeUsers: 856
        },
        {
          timestamp: '2024-01-13T00:00:00Z',
          requests: 16890,
          errors: 31,
          responseTime: 160,
          activeUsers: 923
        }
      ]);

      setIsLoading(false);
    };

    loadAPIData();
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
      case 'active':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
      case 'inactive':
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
      case 'expired':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      case 'deprecated':
        return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900';
      case 'maintenance':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
      case 'POST':
        return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900';
      case 'PUT':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      case 'DELETE':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      case 'PATCH':
        return 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getEnvironmentColor = (environment: string) => {
    switch (environment) {
      case 'production':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900';
      case 'staging':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900';
      case 'development':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const handleAPIKeyAction = (keyId: string, action: string) => {
    addNotification({
      type: 'success',
      title: 'API Key Action',
      message: `API key ${action} successfully`
    });
  };

  const handleEndpointAction = (endpointId: string, action: string) => {
    addNotification({
      type: 'success',
      title: 'Endpoint Action',
      message: `Endpoint ${action} successfully`
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    addNotification({
      type: 'info',
      title: 'Copied',
      message: 'Text copied to clipboard'
    });
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Requests</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrics.reduce((sum, m) => sum + m.requests, 0).toLocaleString()}
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">+12% from last week</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
              <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active API Keys</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {apiKeys.filter(k => k.status === 'active').length}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">{apiKeys.length} total keys</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
              <Key className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Endpoints</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {endpoints.filter(e => e.status === 'active').length}
              </p>
              <p className="text-xs text-purple-600 dark:text-purple-400">{endpoints.length} total endpoints</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
              <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Response Time</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(metrics.reduce((sum, m) => sum + m.responseTime, 0) / metrics.length)}ms
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">-5% from last week</p>
            </div>
            <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
              <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* API Health Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">API Health Status</h3>
          <div className="space-y-3">
            {endpoints.slice(0, 5).map((endpoint) => (
              <div key={endpoint.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getMethodColor(endpoint.method)}`}>
                    {endpoint.method}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{endpoint.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{endpoint.path}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(endpoint.status)}`}>
                    {endpoint.status}
                  </span>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{endpoint.responseTime}ms</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{endpoint.successRate}% success</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {apiKeys.slice(0, 5).map((key) => (
              <div key={key.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{key.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {key.usage.requests.toLocaleString()} / {key.usage.limit.toLocaleString()} requests
                  </p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getEnvironmentColor(key.environment)}`}>
                    {key.environment}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Last used: {formatDate(key.lastUsed)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAPIKeys = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Keys</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Generate New Key</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Environment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Usage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Used</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {apiKeys.map((key) => (
                <tr key={key.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{key.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {key.permissions.join(', ')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono">
                        {key.key.substring(0, 12)}...
                      </code>
                      <button
                        onClick={() => copyToClipboard(key.key)}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getEnvironmentColor(key.environment)}`}>
                      {key.environment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(key.status)}`}>
                      {key.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {key.usage.requests.toLocaleString()} / {key.usage.limit.toLocaleString()}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(key.usage.requests / key.usage.limit) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(key.lastUsed)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleAPIKeyAction(key.id, 'viewed')}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAPIKeyAction(key.id, 'edited')}
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      {key.status === 'active' ? (
                        <button
                          onClick={() => handleAPIKeyAction(key.id, 'deactivated')}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        >
                          <Lock className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAPIKeyAction(key.id, 'activated')}
                          className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                        >
                          <Unlock className="w-4 h-4" />
                        </button>
                      )}
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

  const renderEndpoints = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Endpoints</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Endpoint</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Endpoint</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Version</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Response Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Success Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {endpoints.map((endpoint) => (
                <tr key={endpoint.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{endpoint.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">{endpoint.path}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{endpoint.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getMethodColor(endpoint.method)}`}>
                      {endpoint.method}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(endpoint.status)}`}>
                      {endpoint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {endpoint.version}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{endpoint.responseTime}ms</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {endpoint.rateLimit.requests}/{endpoint.rateLimit.period}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm text-gray-900 dark:text-white">{endpoint.successRate}%</div>
                      <div className="ml-2 w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            endpoint.successRate >= 99 ? 'bg-green-500' :
                            endpoint.successRate >= 95 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${endpoint.successRate}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEndpointAction(endpoint.id, 'viewed')}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEndpointAction(endpoint.id, 'edited')}
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEndpointAction(endpoint.id, 'tested')}
                        className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                      >
                        <Zap className="w-4 h-4" />
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
    { id: 'keys', name: 'API Keys', icon: Key },
    { id: 'endpoints', name: 'Endpoints', icon: Code },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'documentation', name: 'Documentation', icon: FileText },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading API data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Management</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your API keys, endpoints, and monitor usage
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
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
      {activeTab === 'keys' && renderAPIKeys()}
      {activeTab === 'endpoints' && renderEndpoints()}
      {activeTab === 'analytics' && (
        <div className="text-center py-12">
          <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">API Analytics</h3>
          <p className="text-gray-600 dark:text-gray-400">Advanced analytics and reporting coming soon</p>
        </div>
      )}
      {activeTab === 'documentation' && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">API Documentation</h3>
          <p className="text-gray-600 dark:text-gray-400">Interactive API documentation coming soon</p>
        </div>
      )}
      {activeTab === 'settings' && (
        <div className="text-center py-12">
          <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">API Settings</h3>
          <p className="text-gray-600 dark:text-gray-400">API configuration and settings coming soon</p>
        </div>
      )}
    </div>
  );
};

export default APIManagement;
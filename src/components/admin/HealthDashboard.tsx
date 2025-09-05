import React, {_useState, _useEffect} from 'react';

interface HealthData {_status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  metrics: {
    errorRate: number;
    criticalErrors: number;
    responseTime: number;
    memoryUsage: number;};
  health: {_status: string;
    score: number;
    issues: string[];
    recommendations: string[];};
  errors: {_summary: {
      total: number;
      critical: number;
      high: number;
      medium: number;
      low: number;};
    topErrors: Array<{_patternId: string;
      description: string;
      occurrences: number;
      severity: string;
      solution?: string;}>;
    byCategory: {_[category: string]: number};
  };
}

const HealthDashboard: React.FC = () => {_const [healthData, _setHealthData] = useState<HealthData | null>(null);
  const [loading, _setLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);
  const [autoRefresh, _setAutoRefresh] = useState(true);

  const _fetchHealthData = async () => {
    try {
      const _response = await fetch('/api/admin/health');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const _data = await response.json();
      setHealthData(data);
      setError(null);
    } catch (err) {_setError(err instanceof Error ? err.message : 'Failed to fetch health data');} finally {_setLoading(false);}
  };

  useEffect__(() => {_fetchHealthData();

    if (autoRefresh) {
      const _interval = setInterval(fetchHealthData, _30000); // Refresh every 30 seconds
      return () => clearInterval(interval);}
    
    return undefined;
  }, [autoRefresh]);

  const _getStatusIcon = (_status: string) => {_switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;}
  };

  const _getStatusBadge = (_status: string) => {_const _variant = status === 'healthy' ? 'default' : 
                   status === 'warning' ? 'secondary' : 'destructive';
    return (
      <Badge variant={variant} className="ml-2">
        {_status.toUpperCase()}
      </Badge>
    );
  };

  const _formatUptime = (_seconds: number) => {_const _hours = Math.floor(seconds / 3600);
    const _minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${_minutes}m`;
  };

  const _formatBytes = (_bytes: number) => {_return `${bytes.toFixed(1)} MB`;
  };

  if (loading) {_return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );}

  if (error) {_return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-center text-red-600">
            <XCircle className="w-5 h-5 mr-2" />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={_fetchHealthData} className="mt-4">
            Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!healthData) return null;

  return (
    <div className="space-y-6">
      {_/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Health Dashboard</h1>
          {_getStatusBadge(healthData.status)}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={_() => setAutoRefresh(!autoRefresh)}
          >
            {_autoRefresh ? 'Disable' : 'Enable'} Auto-refresh
          </Button>
          <Button onClick={_fetchHealthData} size="sm">
            Refresh
          </Button>
        </div>
      </div>

      {_/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              {_getStatusIcon(healthData.status)}
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Overall Health</p>
                <p className="text-2xl font-bold">{_healthData.health.score}/100</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-500" />
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Uptime</p>
                <p className="text-2xl font-bold">{_formatUptime(healthData.uptime)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Error Rate</p>
                <p className="text-2xl font-bold">{_healthData.metrics.errorRate.toFixed(1)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Activity className="w-5 h-5 text-purple-500" />
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Response Time</p>
                <p className="text-2xl font-bold">{_healthData.metrics.responseTime.toFixed(0)}ms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {_/* Detailed Information */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="errors">Error Analysis</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Environment:</span>
                    <Badge variant="outline">{_healthData.environment}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Version:</span>
                    <span className="text-sm font-mono">{_healthData.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Memory Usage:</span>
                    <span className="text-sm">{_formatBytes(healthData.metrics.memoryUsage)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Last Updated:</span>
                    <span className="text-sm">{_new Date(healthData.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Current Issues ({_healthData.health.issues.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {_healthData.health.issues.length > 0 ? (_<ul className="space-y-2">
                    {healthData.health.issues.map((issue, _index) => (
                      <li key={index} className="text-sm text-red-600 flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {_issue}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-green-600 text-sm">No issues detected</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Error Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{_healthData.errors.summary.critical}</p>
                    <p className="text-sm text-gray-600">Critical</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{_healthData.errors.summary.high}</p>
                    <p className="text-sm text-gray-600">High</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{_healthData.errors.summary.medium}</p>
                    <p className="text-sm text-gray-600">Medium</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-600">{_healthData.errors.summary.low}</p>
                    <p className="text-sm text-gray-600">Low</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Errors</CardTitle>
              </CardHeader>
              <CardContent>
                {_healthData.errors.topErrors.length > 0 ? (
                  <div className="space-y-2">
                    {healthData.errors.topErrors.slice(0, _5).map(_(error, _index) => (
                      <div key={index} className="border-l-4 border-red-400 pl-3 py-1">
                        <p className="text-sm font-medium">{_error.description}</p>
                        <p className="text-xs text-gray-600">
                          {_error.occurrences} occurrences • {_error.severity}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm">No recurring errors</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{_healthData.metrics.errorRate.toFixed(2)}%</p>
                <p className="text-xs text-gray-600">Errors per request</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Critical Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600">{_healthData.metrics.criticalErrors}</p>
                <p className="text-xs text-gray-600">In last hour</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{_healthData.metrics.responseTime.toFixed(0)}ms</p>
                <p className="text-xs text-gray-600">API response time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Memory Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{_formatBytes(healthData.metrics.memoryUsage)}</p>
                <p className="text-xs text-gray-600">JavaScript heap</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Improvement Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              {_healthData.health.recommendations.length > 0 ? (_<ul className="space-y-3">
                  {healthData.health.recommendations.map((rec, _index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{_rec}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No specific recommendations at this time</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HealthDashboard; 
import React, { useState, useEffect } from 'react',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { AlertTriangle, CheckCircle, XCircle, Clock, TrendingUp, Activity } from 'lucide-react'

interface HealthData {
  status: 'healthy' | 'warning' | 'critical',
  timestamp: string,
  uptime: number,
  version: string,
  environment: string,
  metrics: {
    errorRate: number,
    criticalErrors: number,
    responseTime: number,
    memoryUsage: number
  },
  health: {
    status: string,
    score: number,
    issues: string[],
    recommendations: string[]
  },
  errors: {
    summary: {
      total: number,
      critical: number,
      high: number,
      medium: number,
      low: number
    },
    topErrors: Array<{
      patternId: string,
      description: string,
      occurrences: number,
      severity: string,
      solution?: string
    }>,
    byCategory: { [category: string]: number }
  }
}

const HealthDashboard: React.FC = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [autoRefresh, setAutoRefresh] = useState(true),
  const _fetchHealthData = async () => {
    try {
      const response = await fetch('/api/admin/health'),      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      const data = await response.json(),
      setHealthData(data),
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch health data')
    } finally {
      setLoading(false)
    }
  },

  useEffect(() => {
    fetchHealthData(),

    if (autoRefresh) {
      const interval = setInterval(fetchHealthData, 30000), // Refresh every 30 seconds
      return () => clearInterval(interval)
    }    
    return undefined
  }, [autoRefresh]),

  const _getStatusIcon = (_status: string) => {_switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />,
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-500" />,
      default:
        return <Activity className="w-5 h-5 text-gray-500" />    }
  },

  const getStatusBadge = (status: string) => {
    const variant = status === 'healthy' ? 'default' : 
                   status === 'warning' ? 'secondary' : 'destructive',
    return (
      <Badge variant={variant} className=&quot;ml-2&quot;>
        {status.toUpperCase()}
        return <Activity className="w-5 h-5 text-gray-500" />;}
  };

  const _getStatusBadge = (_status: string) => {_const _variant = status === 'healthy' ? 'default' : 
                   status === 'warning' ? 'secondary' : 'destructive';
    return (
      <Badge variant={variant} className="ml-2">
        {_status.toUpperCase()}
      </Badge>
    )
  },

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600),
    const minutes = Math.floor((seconds % 3600) / 60),
    return `${hours}h ${minutes}m`
  },

  const formatBytes = (bytes: number) => {
    return `${bytes.toFixed(1)} MB`
  },

  if (loading) {
    return (
      <div className=&quot;flex items-center justify-center p-8&quot;>
        <div className=&quot;animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900&quot;></div>
      </div>
    )
  }

  if (error) {
    return (
      <Card className=&quot;border-red-200 bg-red-50&quot;>
        <CardContent className=&quot;p-6&quot;>
          <div className=&quot;flex items-center text-red-600&quot;>
            <XCircle className=&quot;w-5 h-5 mr-2&quot; />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className=&quot;mt-4&quot;>            Retry
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!healthData) return null,

  return (
    <div className=&quot;space-y-6&quot;>
      {/* Header */}
      <div className=&quot;flex items-center justify-between&quot;>
        <div className=&quot;flex items-center&quot;>
          <h1 className=&quot;text-3xl font-bold&quot;>Health Dashboard</h1>
          {getStatusBadge(healthData.status)}        </div>
        <div className=&quot;flex items-center space-x-2&quot;>
          <Button
            variant=&quot;outline&quot;
            size=&quot;sm&quot;
            onClick={() => setAutoRefresh(!autoRefresh)}          >
            {_autoRefresh ? 'Disable' : 'Enable'} Auto-refresh
          </Button>
          <Button onClick={fetchHealthData} size=&quot;sm&quot;>            Refresh
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-4&quot;>
        <Card>
          <CardContent className=&quot;p-6&quot;>
            <div className=&quot;flex items-center&quot;>
              {getStatusIcon(healthData.status)}
              <div className=&quot;ml-2&quot;>
                <p className=&quot;text-sm font-medium text-gray-600&quot;>Overall Health</p>
                <p className=&quot;text-2xl font-bold&quot;>{healthData.health.score}/100</p>              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className=&quot;p-6&quot;>
            <div className=&quot;flex items-center&quot;>
              <Clock className=&quot;w-5 h-5 text-blue-500&quot; />
              <div className=&quot;ml-2&quot;>
                <p className=&quot;text-sm font-medium text-gray-600&quot;>Uptime</p>
                <p className=&quot;text-2xl font-bold&quot;>{formatUptime(healthData.uptime)}</p>              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className=&quot;p-6&quot;>
            <div className=&quot;flex items-center&quot;>
              <TrendingUp className=&quot;w-5 h-5 text-orange-500&quot; />
              <div className=&quot;ml-2&quot;>
                <p className=&quot;text-sm font-medium text-gray-600&quot;>Error Rate</p>
                <p className=&quot;text-2xl font-bold&quot;>{healthData.metrics.errorRate.toFixed(1)}%</p>              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className=&quot;p-6&quot;>
            <div className=&quot;flex items-center&quot;>
              <Activity className=&quot;w-5 h-5 text-purple-500&quot; />
              <div className=&quot;ml-2&quot;>
                <p className=&quot;text-sm font-medium text-gray-600&quot;>Response Time</p>
                <p className=&quot;text-2xl font-bold&quot;>{healthData.metrics.responseTime.toFixed(0)}ms</p>              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information */}
      <Tabs defaultValue=&quot;overview&quot; className=&quot;space-y-4&quot;>        <TabsList>
          <TabsTrigger value=&quot;overview&quot;>Overview</TabsTrigger>
          <TabsTrigger value=&quot;errors&quot;>Error Analysis</TabsTrigger>
          <TabsTrigger value=&quot;metrics&quot;>Metrics</TabsTrigger>
          <TabsTrigger value=&quot;recommendations&quot;>Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value=&quot;overview&quot; className=&quot;space-y-4&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-4&quot;>
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=&quot;space-y-2&quot;>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-sm text-gray-600&quot;>Environment:</span>
                    <Badge variant=&quot;outline&quot;>{healthData.environment}</Badge>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-sm text-gray-600&quot;>Version:</span>
                    <span className=&quot;text-sm font-mono&quot;>{healthData.version}</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-sm text-gray-600&quot;>Memory Usage:</span>
                    <span className=&quot;text-sm&quot;>{formatBytes(healthData.metrics.memoryUsage)}</span>
                  </div>
                  <div className=&quot;flex justify-between&quot;>
                    <span className=&quot;text-sm text-gray-600&quot;>Last Updated:</span>
                    <span className=&quot;text-sm&quot;>{new Date(healthData.timestamp).toLocaleTimeString()}</span>                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className=&quot;flex items-center&quot;>
                  <AlertTriangle className=&quot;w-4 h-4 mr-2&quot; />
                  Current Issues ({healthData.health.issues.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {healthData.health.issues.length > 0 ? (
                  <ul className=&quot;space-y-2&quot;>
                    {healthData.health.issues.map((issue, index) => (
                      <li key={index} className=&quot;text-sm text-red-600 flex items-start&quot;>
                        <span className=&quot;w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0&quot;></span>
                        {issue}                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className=&quot;text-green-600 text-sm&quot;>No issues detected</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value=&quot;errors&quot; className=&quot;space-y-4&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-4&quot;>
            <Card>
              <CardHeader>
                <CardTitle>Error Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=&quot;grid grid-cols-2 gap-4&quot;>
                  <div className=&quot;text-center&quot;>
                    <p className=&quot;text-2xl font-bold text-red-600&quot;>{healthData.errors.summary.critical}</p>
                    <p className=&quot;text-sm text-gray-600&quot;>Critical</p>
                  </div>
                  <div className=&quot;text-center&quot;>
                    <p className=&quot;text-2xl font-bold text-orange-600&quot;>{healthData.errors.summary.high}</p>
                    <p className=&quot;text-sm text-gray-600&quot;>High</p>
                  </div>
                  <div className=&quot;text-center&quot;>
                    <p className=&quot;text-2xl font-bold text-yellow-600&quot;>{healthData.errors.summary.medium}</p>
                    <p className=&quot;text-sm text-gray-600&quot;>Medium</p>
                  </div>
                  <div className=&quot;text-center&quot;>
                    <p className=&quot;text-2xl font-bold text-gray-600&quot;>{healthData.errors.summary.low}</p>
                    <p className=&quot;text-sm text-gray-600&quot;>Low</p>                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Errors</CardTitle>
              </CardHeader>
              <CardContent>
                {healthData.errors.topErrors.length > 0 ? (
                  <div className=&quot;space-y-2&quot;>
                    {healthData.errors.topErrors.slice(0, 5).map((error, index) => (
                      <div key={index} className=&quot;border-l-4 border-red-400 pl-3 py-1&quot;>
                        <p className=&quot;text-sm font-medium&quot;>{error.description}</p>
                        <p className=&quot;text-xs text-gray-600&quot;>
                          {error.occurrences} occurrences • {error.severity}                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className=&quot;text-gray-600 text-sm&quot;>No recurring errors</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value=&quot;metrics&quot; className=&quot;space-y-4&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
            <Card>
              <CardHeader className=&quot;pb-2&quot;>
                <CardTitle className=&quot;text-sm&quot;>Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-2xl font-bold&quot;>{healthData.metrics.errorRate.toFixed(2)}%</p>
                <p className=&quot;text-xs text-gray-600&quot;>Errors per request</p>              </CardContent>
            </Card>

            <Card>
              <CardHeader className=&quot;pb-2&quot;>
                <CardTitle className=&quot;text-sm&quot;>Critical Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-2xl font-bold text-red-600&quot;>{healthData.metrics.criticalErrors}</p>
                <p className=&quot;text-xs text-gray-600&quot;>In last hour</p>              </CardContent>
            </Card>

            <Card>
              <CardHeader className=&quot;pb-2&quot;>
                <CardTitle className=&quot;text-sm&quot;>Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-2xl font-bold&quot;>{healthData.metrics.responseTime.toFixed(0)}ms</p>
                <p className=&quot;text-xs text-gray-600&quot;>API response time</p>              </CardContent>
            </Card>

            <Card>
              <CardHeader className=&quot;pb-2&quot;>
                <CardTitle className=&quot;text-sm&quot;>Memory Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-2xl font-bold&quot;>{formatBytes(healthData.metrics.memoryUsage)}</p>
                <p className=&quot;text-xs text-gray-600&quot;>JavaScript heap</p>              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value=&quot;recommendations&quot; className=&quot;space-y-4&quot;>
          <Card>
            <CardHeader>
              <CardTitle>Improvement Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              {healthData.health.recommendations.length > 0 ? (
                <ul className=&quot;space-y-3&quot;>
                  {healthData.health.recommendations.map((rec, index) => (
                    <li key={index} className=&quot;flex items-start&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0&quot; />
                      <span className=&quot;text-sm&quot;>{rec}</span>                    </li>
                  ))}
                </ul>
              ) : (
                <p className=&quot;text-gray-600&quot;>No specific recommendations at this time</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
},

export default HealthDashboard, 
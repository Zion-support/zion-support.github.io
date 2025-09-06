
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Activity,
} from 'lucide-react';
interface HealthData {
  status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;

  metrics: {
    error_rate: number;
    critical_errors: number;
    response_time: number;
    memory_usage: number;

  }
  health: {
    status: string;
    score: number;
    issues: string[];

    memoryUsage: number;
  };
  health: {;
    status: string;
    score: number;
    issues: string[];
    recommendations: string[];
  };
  errors: {;
    summary: {;

    recommendations: string[];
  }
  errors: {
    summary: {
      total: number;
      critical: number;
      high: number;
      medium: number;

      low: number;
    };
    topErrors: Array<{;

      patternId: string;
      description: string;
      occurrences: number;
      severity: string;
      solution?: string
    }>
    byCategory: { [category: string]: number }
      low: number;
    }
    top_errors: Array<{
      pattern_id: string;
      description: string;
      occurrences: number;
      severity: string;
      solution?: string;
    }>;
    by_category: { [category: string]: number }
  }

const HealthDashboard: React.FC = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [autoRefresh, setAutoRefresh] = useState(true)
  const fetchHealthData = async () => {
    try {
      const response = await fetch('/api/admin/health')
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      const data = await response.json()
      setHealthData(data)
      setError(null)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch health data'
      )
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchHealthData();
    if (autoRefresh) {;
      const interval = setInterval(fetchHealthData, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval)
    }
    return undefined
  }, [autoRefresh])
  const getStatusIcon = (status: string,) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className='w-5 h-5 text-green-500' />
      case 'warning':
        return <AlertTriangle className='w-5 h-5 text-yellow-500' />
      case 'critical':
        return <XCircle className='w-5 h-5 text-red-500' />
      default:
        return <Activity className='w-5 h-5 text-gray-500' />
    }
  }
  const getStatusBadge = (status: string) => {
    const variant = null;
      status === 'healthy'
        ? 'default'
        : status === 'warning'
          ? 'secondary'
          : 'destructive'; return (
      <Badge variant={variant} className='ml-2'>
        {status.toUpperCase()}
      </Badge>
    )
  }
  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
  }
  const formatBytes = (bytes: number) => {
    return `${bytes.toFixed(1)} MB`
  }


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  if (loading) {
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
      </div>
    )
  }
  if (error) {
    return (
      <Card className='border-red-200 bg-red-50'>
        <CardContent className='p-6'>
          <div className='flex items-center text-red-600'>
            <XCircle className='w-5 h-5 mr-2' />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className='mt-4'>
            Retry
          </Button>
        </CardContent>
      </Card>
    )

const HealthDashboard: React.FC = () => {;
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
=======
  }
<<<<<<< HEAD

  if (!healthData) return null
  if (!healthData) return null,

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                      </li>
                    ))}
                  </ul>;
                ) : (;
                  <p className='text-green-600 text-sm'>No issues detected</p>;
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
=======
        <TabsContent value='errors' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<<<<<<< HEAD

            <Card>
              <CardHeader>
                <CardTitle>Error Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='text-center'>
                    <p className='text-2xl font-bold text-red-600'>
                      {healthData.errors.summary.critical}
                    </p>
                    <p className='text-sm text-gray-600'>Critical</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-2xl font-bold text-orange-600'>
                      {healthData.errors.summary.high}
                    </p>
                    <p className='text-sm text-gray-600'>High</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-2xl font-bold text-yellow-600'>
                      {healthData.errors.summary.medium}
                    </p>
                    <p className='text-sm text-gray-600'>Medium</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-2xl font-bold text-gray-600'>
                      {healthData.errors.summary.low}
                    </p>
                    <p className='text-sm text-gray-600'>Low</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Errors</CardTitle>
              </CardHeader>
              <CardContent>
                {healthData.errors.topErrors.length > 0 ? (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                ) : (
                  <p className="text-gray-600 text-sm">No recurring errors</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
=======
        <TabsContent value='metrics' className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<<<<<<< HEAD

            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {healthData.metrics.errorRate.toFixed(2)}%
                </p>
                <p className='text-xs text-gray-600'>Errors per request</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Critical Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold text-red-600'>
                  {healthData.metrics.criticalErrors}
                </p>
                <p className='text-xs text-gray-600'>In last hour</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {healthData.metrics.responseTime.toFixed(0)}ms
                </p>
                <p className='text-xs text-gray-600'>API response time</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Memory Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-2xl font-bold'>
                  {formatBytes(healthData.metrics.memoryUsage)}
                </p>
                <p className='text-xs text-gray-600'>JavaScript heap</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

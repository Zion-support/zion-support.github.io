<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
<<<<<<< HEAD
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Activity,
} from 'lucide-react';
interface HealthData {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  AlertTriangle
  CheckCircle
  XCircle
  Clock
  TrendingUp
  Activity
} from 'lucide-react'

interface HealthData {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
<<<<<<< HEAD

  metrics: {
    error_rate: number;
    critical_errors: number;
    response_time: number;
    memory_usage: number;

=======
  metrics: {
    errorRate: number;
    criticalErrors: number;
    responseTime: number;
    memoryUsage: number
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  health: {
    status: string;
    score: number;
    issues: string[];
<<<<<<< HEAD

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    recommendations: string[]
  }
  errors: {
    summary: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      total: number;
      critical: number;
      high: number;
      medium: number;
<<<<<<< HEAD

      low: number;
    };
    topErrors: Array<{;

=======
      low: number
    }
    topErrors: Array<{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      patternId: string;
      description: string;
      occurrences: number;
      severity: string;
      solution?: string
    }>
    byCategory: { [category: string]: number }
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState, useEffect } from 'react',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { AlertTriangle, CheckCircle, XCircle, Clock, TrendingUp, Activity } from 'lucide-react';
interface HealthData {;
  status: 'healthy' | 'warning' | 'critical',;
  timestamp: string,;
  uptime: number,;
  version: string,;
  environment: string,;
  metrics: {;
    errorRate: number,;
    criticalErrors: number,;
    responseTime: number,;
    memoryUsage: number;
  },;
  health: {;
    status: string,;
    score: number,;
    issues: string[],;
    recommendations: string[];
  },;
  errors: {;
    summary: {;
      total: number,;
      critical: number,;
      high: number,;
      medium: number,;
      low: number;
    },;
    topErrors: Array<{;
      patternId: string,;
      description: string,;
      occurrences: number,;
      severity: string,;
      solution?: string;
    }>,;
    byCategory: { [category: string]: number }
  }
}
;
const HealthDashboard: React.FC = () => {;
  const [healthData, setHealthData] = useState<HealthData | null>(null),;
  const [loading, setLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const [autoRefresh, setAutoRefresh] = useState(true),;
  const fetchHealthData = async () => {;
    try {;
      const response = await fetch('/api/admin/health'),;
      if (!response.ok) {;
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json(),;
      setHealthData(data),;
      setError(null);
    } catch (err) {;
      setError(err instanceof Error ? err.message : 'Failed to fetch health data');
    } finally {;
      setLoading(false);
    }
  },;
  useEffect(() => {;
    fetchHealthData(),;
    if (autoRefresh) {;
      const interval = setInterval(fetchHealthData, 30000), // Refresh every 30 seconds;
      return () => clearInterval(interval);
    }
    
    return undefined
  }, [autoRefresh]),

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />,
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />,
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-500" />,
      default:
        return <Activity className="w-5 h-5 text-gray-500" />
    }
  },

  const getStatusBadge = (status: string) => {
    const variant = status === 'healthy' ? 'default' : 
                   status === 'warning' ? 'secondary' : 'destructive',
    return (
      <Badge variant={variant} className="ml-2">
        {status.toUpperCase()}
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>>   if (loading) {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (loading) {
>>>>>>>     return (
      <div className='flex items-center justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
    )
  }
  if (error) {
    return (
<<<<<<< HEAD
      <Card className='border-red-200 bg-red-50'>
        <CardContent className='p-6'>
          <div className='flex items-center text-red-600'>
            <XCircle className='w-5 h-5 mr-2' />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className='mt-4'>
=======
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-center text-red-600">
            <XCircle className="w-5 h-5 mr-2" />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className="mt-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Retry
          </Button>
        </CardContent>
      </Card>
    )
<<<<<<< HEAD

const HealthDashboard: React.FC = () => {;
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  }
<<<<<<< HEAD

  return (
=======
  if (!healthData) return null
  if (!healthData) return null
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
<<<<<<< HEAD
<<<<<<< HEAD
  if (!healthData) return null
=======

  if (!healthData) return null,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

<<<<<<< HEAD
  if (!healthData) return null
=======
  if (!healthData) return null,

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Health Dashboard</h1>
          {getStatusBadge(healthData.status)}
        </div>
        <div className="flex items-center space-x-2">
          <Button
<<<<<<< HEAD
<<<<<<< HEAD

=======
            variant='outline'
            size='sm'
            onClick={() => setAutoRefresh(!autoRefresh)}          >
>>>>>>>             {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh
>>>>>>>           </Button>
=======
            variant='outline'
            size='sm'
            onClick={() => setAutoRefresh(!autoRefresh)}          >
=======
            variant="outline"
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
          >
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh
          </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button onClick={fetchHealthData} size="sm">
            Refresh
          </Button>
        </div>
      </div>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              {getStatusIcon(healthData.status)}
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-600">Overall Health</p>
                <p className="text-2xl font-bold">{healthData.health.score}/100</p>
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
                <p className="text-2xl font-bold">{formatUptime(healthData.uptime)}</p>
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
                <p className="text-2xl font-bold">{healthData.metrics.errorRate.toFixed(1)}%</p>
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
                <p className="text-2xl font-bold">{healthData.metrics.responseTime.toFixed(0)}ms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Detailed Information */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="errors">Error Analysis</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
>>>>>>>             <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <Card>
>>>>>>>               <CardHeader>
=======
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
=======

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Card>
              <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <CardTitle>System Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Environment:</span>
                    <Badge variant="outline">{healthData.environment}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Version:</span>
                    <span className="text-sm font-mono">{healthData.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Memory Usage:</span>
                    <span className="text-sm">{formatBytes(healthData.metrics.memoryUsage)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Last Updated:</span>
                    <span className="text-sm">{new Date(healthData.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Current Issues ({healthData.health.issues.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {healthData.health.issues.length > 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <ul className='space-y-2'>
                    {healthData.health.issues.map((issue, index) => (
                      <li
                        key={index}
                        className='text-sm text-red-600 flex items-start'
                      >
                        <span className='w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>                        {issue}
<<<<<<< HEAD
>>>>>>>                       </li>
ursor/fix-website-loading-errors-and-merge-6662
    return undefined;
  }, [autoRefresh]);

  const getStatusIcon = (status: string,) => {;
    switch (status) {;
      case 'healthy':;
        return <CheckCircle className='w-5 h-5 text-green-500' />;
      case 'warning':;
        return <AlertTriangle className='w-5 h-5 text-yellow-500' />;
      case 'critical':;
        return <XCircle className='w-5 h-5 text-red-500' />;
      default:;
        return <Activity className='w-5 h-5 text-gray-500' />;
    }
  };

  const getStatusBadge = (status: string) => {;
    const variant =;
      status === 'healthy';
        ? 'default';
        : status === 'warning';
          ? 'secondary';
          : 'destructive';    return (
      <Badge variant={variant} className='ml-2'>;
        {status && status.toUpperCase()}
      </Badge>;
    );
  };

  const formatUptime = (seconds: number) => {;
    const hours = Math && Math.floor(seconds / 3600);
    const minutes = Math && Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatBytes = (bytes: number) => {;
    return `${bytes && bytes.toFixed(1)} MB`;
  };
  if (loading) {;
    return (
      <div className='flex items-center justify-center p-8'>;
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>;
      </div>;
    );
  }

  if (error) {;
    return (
      <Card className='border-red-200 bg-red-50'>;
        <CardContent className='p-6'>;
          <div className='flex items-center text-red-600'>;
            <XCircle className='w-5 h-5 mr-2' />;
            <span>Failed to load health data: {error}</span>;
          </div>;
          <Button onClick={fetchHealthData} className='mt-4'>;
=======
=======
                  <ul className="space-y-2">
                    {healthData.health.issues.map((issue, index) => (
                      <li key={index} className="text-sm text-red-600 flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
;
    return undefined;
  }, [autoRefresh]),;
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'healthy':;
        return <CheckCircle className="w-5 h-5 text-green-500" />,;
      case 'warning':;
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />,;
      case 'critical':;
        return <XCircle className="w-5 h-5 text-red-500" />,;
      default:;
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  },;
  const getStatusBadge = (status: string) => {;
    const variant = status === 'healthy' ? 'default' :;
                   status === 'warning' ? 'secondary' : 'destructive',;
    return (;
      <Badge variant={variant} className="ml-2">;
        {status.toUpperCase()}
      </Badge>;
    );
  },;
  const formatUptime = (seconds: number) => {;
    const hours = Math.floor(seconds / 3600),;
    const minutes = Math.floor((seconds % 3600) / 60),;
    return `${hours}h ${minutes}m`;
  },;
  const formatBytes = (bytes: number) => {;
    return `${bytes.toFixed(1)} MB`;
  },;
  if (loading) {;
    return (;
      <div className="flex items-center justify-center p-8">;
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>;
      </div>;
    );
  }
;
  if (error) {;
    return (;
      <Card className="border-red-200 bg-red-50">;
        <CardContent className="p-6">;
          <div className="flex items-center text-red-600">;
            <XCircle className="w-5 h-5 mr-2" />;
            <span>Failed to load health data: {error}</span>;
          </div>;
          <Button onClick={fetchHealthData} className="mt-4">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Retry;
          </Button>;
        </CardContent>;
      </Card>;
    );
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  if (!healthData) return null
  return (
    <div className='space-y-6'>;
      {/* Header */}
      <div className='flex items-center justify-between'>;
        <div className='flex items-center'>;
          <h1 className='text-3xl font-bold'>Health Dashboard</h1>;
          {getStatusBadge(healthData && healthData.status)}
        </div>;
        <div className='flex items-center space-x-2'>;
          <Button
            variant='outline'
            size='sm'

            onClick={() => setAutoRefresh(!autoRefresh)}          >;
            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh;
          </Button>;
          <Button onClick={fetchHealthData} size='sm'>;
=======
  }
;
  if (!healthData) return null,;
  return (;
    <div className="space-y-6">;
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold'>Health Dashboard</h1>
          {getStatusBadge(healthData.status)}
        </div>;
        <div className="flex items-center space-x-2">;
          <Button;
            variant="outline";
            size="sm";
            onClick={() => setAutoRefresh(!autoRefresh)}
          >;
            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh;
          </Button>;
          <Button onClick={fetchHealthData} size="sm">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Refresh;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD

      {/* Overview Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>;
        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              {getStatusIcon(healthData && healthData.status)}
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>;
                  Overall Health;
                </p>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.health.score}/100;
                </p>;
=======
      {/* Overview Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center'>
              {getStatusIcon(healthData.status)}
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Overall Health</p>;
                <p className="text-2xl font-bold">{healthData.health.score}/100</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD

        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <Clock className='w-5 h-5 text-blue-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>Uptime</p>;
                <p className='text-2xl font-bold'>;
                  {formatUptime(healthData && healthData.uptime)}
                </p>;
=======
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <Clock className="w-5 h-5 text-blue-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Uptime</p>;
                <p className="text-2xl font-bold">{formatUptime(healthData.uptime)}</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD

        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <TrendingUp className='w-5 h-5 text-orange-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>Error Rate</p>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.errorRate && errorRate.toFixed(1)}%;
                </p>;
=======
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <TrendingUp className="w-5 h-5 text-orange-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Error Rate</p>;
                <p className="text-2xl font-bold">{healthData.metrics.errorRate.toFixed(1)}%</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD

        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <Activity className='w-5 h-5 text-purple-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>;
                  Response Time;
                </p>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.responseTime && responseTime.toFixed(0)}ms;
                </p>;
=======
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <Activity className="w-5 h-5 text-purple-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Response Time</p>;
                <p className="text-2xl font-bold">{healthData.metrics.responseTime.toFixed(0)}ms</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD

      {/* Detailed Information */}
      <Tabs defaultValue='overview' className='space-y-4'>;
        <TabsList>;
          <TabsTrigger value='overview'>Overview</TabsTrigger>;
          <TabsTrigger value='errors'>Error Analysis</TabsTrigger>;
          <TabsTrigger value='metrics'>Metrics</TabsTrigger>;
          <TabsTrigger value='recommendations'>Recommendations</TabsTrigger>;
        </TabsList>;

        <TabsContent value='overview' className='space-y-4'>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>;
=======
      {/* Detailed Information */}
      <Tabs defaultValue="overview" className="space-y-4">;
        <TabsList>;
          <TabsTrigger value="overview">Overview</TabsTrigger>;
          <TabsTrigger value="errors">Error Analysis</TabsTrigger>;
          <TabsTrigger value="metrics">Metrics</TabsTrigger>;
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>;
        </TabsList>;
        <TabsContent value="overview" className="space-y-4">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Card>;
              <CardHeader>;
                <CardTitle>System Information</CardTitle>;
              </CardHeader>;
              <CardContent>;
<<<<<<< HEAD
                <div className='space-y-2'>;
                  <div className='flex justify-between'>;
                    <span className='text-sm text-gray-600'>Environment:</span>;
                    <Badge variant='outline'>{healthData && healthData.environment}</Badge>;
                  </div>;
                  <div className='flex justify-between'>;
                    <span className='text-sm text-gray-600'>Version:</span>;
                    <span className='text-sm font-mono'>;
                      {healthData && healthData.version}
                    </span>;
                  </div>;
                  <div className='flex justify-between'>;
                    <span className='text-sm text-gray-600'>Memory Usage:</span>;
                    <span className='text-sm'>;
                      {formatBytes(healthData && healthData.metrics.memoryUsage)}
                    </span>;
                  </div>;
                  <div className='flex justify-between'>;
                    <span className='text-sm text-gray-600'>Last Updated:</span>;
                    <span className='text-sm'>;
                      {new Date(healthData && healthData.timestamp).toLocaleTimeString()}
                    </span>;
=======
                <div className="space-y-2">;
                  <div className="flex justify-between">;
                    <span className="text-sm text-gray-600">Environment:</span>;
                    <Badge variant="outline">{healthData.environment}</Badge>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-sm text-gray-600">Version:</span>;
                    <span className="text-sm font-mono">{healthData.version}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-sm text-gray-600">Memory Usage:</span>;
                    <span className="text-sm">{formatBytes(healthData.metrics.memoryUsage)}</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-sm text-gray-600">Last Updated:</span>;
                    <span className="text-sm">{new Date(healthData.timestamp).toLocaleTimeString()}</span>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD

            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center'>;
                  <AlertTriangle className='w-4 h-4 mr-2' />;
                  Current Issues ({healthData && healthData.health.issues && issues.length});
                </CardTitle>;
              </CardHeader>;
              <CardContent>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                      </li>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                     ))}
                  </ul>;
                ) : (;
                  <p className='text-green-600 text-sm'>No issues detected</p>;
=======
            <Card>;
              <CardHeader>;
                <CardTitle className="flex items-center">;
                  <AlertTriangle className="w-4 h-4 mr-2" />;
                  Current Issues ({healthData.health.issues.length});
                </CardTitle>;
              </CardHeader>;
              <CardContent>;
                {healthData.health.issues.length > 0 ? (;
                  <ul className="space-y-2">;
                    {healthData.health.issues.map((issue, index) => (;
                      <li key={index} className="text-sm text-red-600 flex items-start">;
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>;
                        {issue}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-green-600 text-sm">No issues detected</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <TabsContent value='errors' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
>>>>>>>             <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <Card>
>>>>>>>               <CardHeader>
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
=======
        <TabsContent value='errors' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
=======

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Card>
              <CardHeader>
                <CardTitle>Error Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{healthData.errors.summary.critical}</p>
                    <p className="text-sm text-gray-600">Critical</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{healthData.errors.summary.high}</p>
                    <p className="text-sm text-gray-600">High</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{healthData.errors.summary.medium}</p>
                    <p className="text-sm text-gray-600">Medium</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-600">{healthData.errors.summary.low}</p>
                    <p className="text-sm text-gray-600">Low</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div className='space-y-2'>
                    {healthData.errors.topErrors
                      .slice(0, 5)
                      .map((error, index) => (
                        <div
                          key={index}
                          className='border-l-4 border-red-400 pl-3 py-1'
                        >
                          <p className='text-sm font-medium'>
                            {error.description}
                          </p>
                          <p className='text-xs text-gray-600'>
                            {error.occurrences} occurrences • {error.severity}
                          </p>
                        </div>
                      ))}                  </div>
<<<<<<< HEAD
>>>>>>>                 ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                ) : (
>>>>>>>                   <p className="text-gray-600 text-sm">No recurring errors</p>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
                  <div className="space-y-2">
                    {healthData.errors.topErrors.slice(0, 5).map((error, index) => (
                      <div key={index} className="border-l-4 border-red-400 pl-3 py-1">
                        <p className="text-sm font-medium">{error.description}</p>
                        <p className="text-xs text-gray-600">
                          {error.occurrences} occurrences • {error.severity}
                        </p>;
                      </div>;
                    ))}
                  </div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                ) : (
                  <p className="text-gray-600 text-sm">No recurring errors</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

            <Card>
=======
        <TabsContent value='metrics' className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
>>>>>>>             <Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Error Rate</CardTitle>
ursor/fix-website-loading-errors-and-merge-6662
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Error Rate</CardTitle>
>>>>>>>               </CardHeader>
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
=======
        <TabsContent value='metrics' className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
=======

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{healthData.metrics.errorRate.toFixed(2)}%</p>
                <p className="text-xs text-gray-600">Errors per request</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Critical Errors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600">{healthData.metrics.criticalErrors}</p>
                <p className="text-xs text-gray-600">In last hour</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{healthData.metrics.responseTime.toFixed(0)}ms</p>
                <p className="text-xs text-gray-600">API response time</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Memory Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{formatBytes(healthData.metrics.memoryUsage)}</p>
                <p className="text-xs text-gray-600">JavaScript heap</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </CardContent>
            </Card>
          </div>
        </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <TabsContent value='recommendations' className='space-y-4'>
>>>>>>>           <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Card>
>>>>>>>             <CardHeader>
=======
        <TabsContent value='recommendations' className='space-y-4'>
=======

        <TabsContent value="recommendations" className="space-y-4">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <Card>
            <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <CardTitle>Improvement Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              {healthData.health.recommendations.length > 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default HealthDashboard
export default HealthDashboard
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
                <ul className='space-y-3'>
                  {healthData.health.recommendations.map((rec, index) => (
                    <li key={index} className='flex items-start'>
                      <CheckCircle className='w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0' />
                      <span className='text-sm'>{rec}</span>                    </li>
                  ))}
                </ul>
              ) : (
                <p className='text-gray-600'>
                  No specific recommendations at this time
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default HealthDashboard
<<<<<<< HEAD
export default HealthDashboard
export default HealthDashboard

=======
export default HealthDashboard, ;
export default HealthDashboard;
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <ul className="space-y-3">
                  {healthData.health.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No specific recommendations at this time</p>
              )}
            </CardContent>;
          </Card>;
        </TabsContent>;
      </Tabs>;
    </div>;
  );
},;
export default HealthDashboard;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

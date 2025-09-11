<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {;
  AlertTriangle,;
  CheckCircle,;
  XCircle,;
  Clock,;
  TrendingUp,;
  Activity,;
} from 'lucide-react';
interface HealthData {;
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
<<<<<<< HEAD
import {
<<<<<<< HEAD
  AlertTriangle
  CheckCircle
  XCircle
  Clock
  TrendingUp
  Activity
} from 'lucide-react'

=======
=======
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Activity,
} from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface HealthData {
  status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
<<<<<<< HEAD
<<<<<<< HEAD
  metrics: {
    errorRate: number;
    criticalErrors: number;
    responseTime: number;
    memoryUsage: number
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  metrics: {
    error_rate: number;
    critical_errors: number;
    response_time: number;
    memory_usage: number;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  health: {
    status: string;
    score: number;
    issues: string[];
<<<<<<< HEAD
<<<<<<< HEAD
    recommendations: string[]
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  errors: {
    summary: {
      total: number;
      critical: number;
      high: number;
      medium: number;
<<<<<<< HEAD
<<<<<<< HEAD
      low: number
    }
    topErrors: Array<{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      low: number;
    };
    topErrors: Array<{;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  if (loading) {
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='flex items-center justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
=======
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
    )
  }
  if (error) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <div className="flex items-center text-red-600">
            <XCircle className="w-5 h-5 mr-2" />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className="mt-4">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card className='border-red-200 bg-red-50'>
        <CardContent className='p-6'>
          <div className='flex items-center text-red-600'>
            <XCircle className='w-5 h-5 mr-2' />
            <span>Failed to load health data: {error}</span>
          </div>
          <Button onClick={fetchHealthData} className='mt-4'>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Retry
          </Button>
        </CardContent>
      </Card>
    )
<<<<<<< HEAD
<<<<<<< HEAD
  if (!healthData) return null
  if (!healthData) return null
  }
  if (!healthData) return null
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const HealthDashboard: React.FC = () => {;
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }



  const fetchHealthData = async () => {;
    try {;
      const response = await fetch('/api/admin/health');
      if (!response && response.ok) {;
        throw new Error(`HTTP ${response && response.status}`);
      }
      const data = await response && response.json();
      setHealthData(data);
      setError(null);
    } catch (err) {;
      setError(;
        err instanceof Error ? err && err.message : 'Failed to fetch health data';
      );
    } finally {;
      setLoading(false);
    }
  };





  if (!healthData) return null,

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!healthData) return null
  if (!healthData) return null,

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
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
            variant='outline'
            size='sm'
            onClick={() => setAutoRefresh(!autoRefresh)}          >
            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh
            variant='outline'
            size='sm'
            onClick={() => setAutoRefresh(!autoRefresh)}          >
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            variant='outline'
            size='sm'
            onClick={() => setAutoRefresh(!autoRefresh)}          >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            variant="outline"
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
          >

            {autoRefresh ? 'Disable' : 'Enable'} Auto-refresh
          </Button>
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
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <Card>
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                  <ul className='space-y-2'>
=======

                  <ul className="space-y-2">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <ul className='space-y-2'>
                    {healthData.health.issues.map((issue, index) => (
                      <li
                        key={index}
                        className='text-sm text-red-600 flex items-start'
                      >
                        <span className='w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>                        {issue}
                  <ul className="space-y-2">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {healthData.health.issues.map((issue, index) => (
                      <li key={index} className="text-sm text-red-600 flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
;
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Retry;
          </Button>;
        </CardContent>;
      </Card>;
    );
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Refresh;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Overview Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center'>
              {getStatusIcon(healthData.status)}
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Overall Health</p>;
                <p className="text-2xl font-bold">{healthData.health.score}/100</p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <Clock className="w-5 h-5 text-blue-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Uptime</p>;
                <p className="text-2xl font-bold">{formatUptime(healthData.uptime)}</p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <Clock className='w-5 h-5 text-blue-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>Uptime</p>;
                <p className='text-2xl font-bold'>;
                  {formatUptime(healthData && healthData.uptime)}
                </p>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <TrendingUp className="w-5 h-5 text-orange-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Error Rate</p>;
                <p className="text-2xl font-bold">{healthData.metrics.errorRate.toFixed(1)}%</p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <TrendingUp className='w-5 h-5 text-orange-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>Error Rate</p>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.errorRate && errorRate.toFixed(1)}%;
                </p>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </CardContent>;
        </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Card>;
          <CardContent className="p-6">;
            <div className="flex items-center">;
              <Activity className="w-5 h-5 text-purple-500" />;
              <div className="ml-2">;
                <p className="text-sm font-medium text-gray-600">Response Time</p>;
                <p className="text-2xl font-bold">{healthData.metrics.responseTime.toFixed(0)}ms</p>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Card>;
              <CardHeader>;
                <CardTitle>System Information</CardTitle>;
              </CardHeader>;
              <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center'>;
                  <AlertTriangle className='w-4 h-4 mr-2' />;
                  Current Issues ({healthData && healthData.health.issues && issues.length});
                </CardTitle>;
              </CardHeader>;
              <CardContent>;

                      </li>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </ul>;
                ) : (;
                  <p className='text-green-600 text-sm'>No issues detected</p>;
<<<<<<< HEAD
<<<<<<< HEAD
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
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-green-600 text-sm">No issues detected</p>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value='errors' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
                )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">


            <Card>
<<<<<<< HEAD
=======
              <CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        <TabsContent value='errors' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='space-y-2'>
                    {healthData.errors.topErrors
                      .slice(0, 5)
                      .map((error, index) => (
<<<<<<< HEAD
=======

              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;

        <TabsContent value='errors' className='space-y-4'>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>;
            <Card>;
              <CardHeader>;
                <CardTitle>Error Summary</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='grid grid-cols-2 gap-4'>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-red-600'>;
                      {healthData && healthData.errors.summary && summary.critical}
                    </p>;
                    <p className='text-sm text-gray-600'>Critical</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-orange-600'>;
                      {healthData && healthData.errors.summary && summary.high}
                    </p>;
                    <p className='text-sm text-gray-600'>High</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-yellow-600'>;
                      {healthData && healthData.errors.summary && summary.medium}
                    </p>;
                    <p className='text-sm text-gray-600'>Medium</p>;
                  </div>;
                  <div className='text-center'>;
                    <p className='text-2xl font-bold text-gray-600'>;
                      {healthData && healthData.errors.summary && summary.low}
                    </p>;
                    <p className='text-sm text-gray-600'>Low</p>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader>;
                <CardTitle>Top Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {healthData && healthData.errors.topErrors && topErrors.length > 0 ? (;
                  <div className='space-y-2'>;
                    {healthData && healthData.errors.topErrors;
                      .slice(0, 5);
                      .map((error, index) => (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <div
                          key={index}
                          className='border-l-4 border-red-400 pl-3 py-1'>;
                          <p className='text-sm font-medium'>;
                            {error && error.description}
                          </p>;
                          <p className='text-xs text-gray-600'>;
                            {error && error.occurrences} occurrences • {error && error.severity}
                          </p>;
                        </div>;
                      ))}                  </div>;
                ) : (;
                  <p className='text-gray-600 text-sm'>No recurring errors</p>;

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

                ) : (
                  <p className="text-gray-600 text-sm">No recurring errors</p>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value='metrics' className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
<<<<<<< HEAD
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Error Rate</CardTitle>
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">


            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm'>Error Rate</CardTitle>
<<<<<<< HEAD
=======
              </CardHeader>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        <TabsContent value='metrics' className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </CardContent>
            </Card>
          </div>
        </TabsContent>
<<<<<<< HEAD
<<<<<<< HEAD
        <TabsContent value='recommendations' className='space-y-4'>
ursor/fix-website-loading-errors-and-merge-6662
          <Card>
        <TabsContent value='recommendations' className='space-y-4'>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <TabsContent value='recommendations' className='space-y-4'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <TabsContent value="recommendations" className="space-y-4">


          <Card>
            <CardHeader>
              <CardTitle>Improvement Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              {healthData.health.recommendations.length > 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD
export default HealthDashboard
export default HealthDashboard

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <ul className='space-y-3'>
                  {healthData.health.recommendations.map((rec, index) => (
                    <li key={index} className='flex items-start'>
                      <CheckCircle className='w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0' />
                      <span className='text-sm'>{rec}</span>                    </li>
                  ))}
<<<<<<< HEAD
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
export default HealthDashboard
export default HealthDashboard
=======

              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;

        <TabsContent value='metrics' className='space-y-4'>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>;
            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Error Rate</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.errorRate && errorRate.toFixed(2)}%;
                </p>;
                <p className='text-xs text-gray-600'>Errors per request</p>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Critical Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold text-red-600'>;
                  {healthData && healthData.metrics.criticalErrors}
                </p>;
                <p className='text-xs text-gray-600'>In last hour</p>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Avg Response</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.responseTime && responseTime.toFixed(0)}ms;
                </p>;
                <p className='text-xs text-gray-600'>API response time</p>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader className='pb-2'>;
                <CardTitle className='text-sm'>Memory Usage</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text-2xl font-bold'>;
                  {formatBytes(healthData && healthData.metrics.memoryUsage)}
                </p>;
                <p className='text-xs text-gray-600'>JavaScript heap</p>;
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;

        <TabsContent value='recommendations' className='space-y-4'>;
          <Card>;
            <CardHeader>;
              <CardTitle>Improvement Recommendations</CardTitle>;
            </CardHeader>;
            <CardContent>;
              {healthData && healthData.health.recommendations && recommendations.length > 0 ? (;
                <ul className='space-y-3'>;
                  {healthData && healthData.health.recommendations && recommendations.map((rec, index) => (;
                    <li key={index} className='flex items-start'>;
                      <CheckCircle className='w-4 h-4 text-green-500 mt-0 && 0.5 mr-2 flex-shrink-0' />;
                      <span className='text-sm'>{rec}</span>                    </li>;

                  ))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </ul>;
              ) : (;
                <p className='text-gray-600'>;
                  No specific recommendations at this time;
                </p>;
              )}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default HealthDashboard, ;
export default HealthDashboard;
}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======

            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default HealthDashboard
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      const response = await fetch ('/api / admin / health');
      // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
        throw new Error (`HTTP ${response.status}`);
      }
      const data = await response.json ();
      setHealthData (data);
      set_error (null);
    } catch (err) {
      set_error (
        err instanceof Error ? err.message : 'Failed to fetch health data');
    } finally {
      set_loading (false);
    }
  }
  useEffect (() => {
    fetchHealthData ();
    // Check condition
if ( {) {
  $2
}
      const interval = set_interval (fetchHealthData, 30000); // Refresh every 30 seconds;
      return () => clear_interval (interval);
    }
    return undefined;
  }, [auto_refresh]);
  const getStatusIcon = (status: string, ) =>: any {
    switch (status) {
      case 'healthy':;
        return <CheckCircle className='w - 5 h - 5 text - green - 500' />;
      case 'warning':;
        return <AlertTriangle className='w - 5 h - 5 text - yellow - 500' />;
      case 'critical':;
        return <XCircle className='w - 5 h - 5 text - red - 500' />;
      default:;
        return <Activity className='w - 5 h - 5 text - gray - 500' />;
    }
  }
  const getStatusBadge = (status: string) =>: any {
    const variant =;
      status === 'healthy';
        ? 'default';
        : status === 'warning';
          ? 'secondary';
          : 'destructive'; return (
      <Badge variant={variant} className='ml - 2'>;
        {status.toUpperCase ()}
      </Badge>);
  }
  const format_uptime = (seconds: number) =>: any {
    const hours = Math.floor (seconds / 3600);
    const minutes = Math.floor ((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }
  const format_bytes = (bytes: number) =>: any {
    return `${bytes.to_fixed (1)} MB`;
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='flex items - center justify - center p - 8'>;
        <div className='animate - spin rounded - full h - 8 w - 8 border - b-2 border - gray - 900'></div>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='border - red - 200 bg - red - 50'>;
        <CardContent className='p - 6'>;
          <div className='flex items - center text - red - 600'>;
            <XCircle className='w - 5 h - 5 mr - 2' />;
            <span > Failed to load health data: {error}</span>;
          </div>;
          <Button on_click={fetchHealthData} className='mt - 4'>;
            Retry;
          </Button>;
        </CardContent>;
      </Card>);
  }
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='space - y-6'>;
      {/* Header */}
      <div className='flex items - center justify - between'>;
        <div className='flex items - center'>;
          <h1 className='text - 3xl font - bold'>Health Dashboard</h1>;
          {getStatusBadge (health_data.status)}
        </div>;
        <div className='flex items - center space - x-2'>;
          <Button;
            variant='outline';
            size='sm';
            on_click={() => setAutoRefresh (!auto_refresh)}          >;
            {auto_refresh ? 'Disable' : 'Enable'} Auto - refresh;
          </Button>;
          <Button on_click={fetchHealthData} size='sm'>;
            Refresh;
          </Button>;
        </div>;
      </div>;
      {/* Overview Cards */}
      <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4'>;
        <Card>;
          <CardContent className='p - 6'>;
            <div className='flex items - center'>;
              {getStatusIcon (health_data.status)}
              <div className='ml - 2'>;
                <p className='text - sm font - medium text - gray - 600'>;
                  Overall Health;
                </p>;
                <p className='text - 2xl font - bold'>;
                  {health_data.health.score}/100;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className='p - 6'>;
            <div className='flex items - center'>;
              <Clock className='w - 5 h - 5 text - blue - 500' />;
              <div className='ml - 2'>;
                <p className='text - sm font - medium text - gray - 600'>Uptime</p>;
                <p className='text - 2xl font - bold'>;
                  {format_uptime (health_data.uptime)}
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className='p - 6'>;
            <div className='flex items - center'>;
              <TrendingUp className='w - 5 h - 5 text - orange - 500' />;
              <div className='ml - 2'>;
                <p className='text - sm font - medium text - gray - 600'>Error Rate</p>;
                <p className='text - 2xl font - bold'>;
                  {health_data.metrics.error_rate.to_fixed (1)}%;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
        <Card>;
          <CardContent className='p - 6'>;
            <div className='flex items - center'>;
              <Activity className='w - 5 h - 5 text - purple - 500' />;
              <div className='ml - 2'>;
                <p className='text - sm font - medium text - gray - 600'>;
                  Response Time;
                </p>;
                <p className='text - 2xl font - bold'>;
                  {health_data.metrics.response_time.to_fixed (0)}ms;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Detailed Information */}
      <Tabs default_value='overview' className='space - y-4'>;
        <TabsList>;
          <TabsTrigger value='overview'>Overview</TabsTrigger>;
          <TabsTrigger value='errors'>Error Analysis</TabsTrigger>;
          <TabsTrigger value='metrics'>Metrics</TabsTrigger>;
          <TabsTrigger value='recommendations'>Recommendations</TabsTrigger>;
        </TabsList>;
        <TabsContent value='overview' className='space - y-4'>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 4'>;
            <Card>;
              <CardHeader>;
                <CardTitle > System Information</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='space - y-2'>;
                  <div className='flex justify - between'>;
                    <span className='text - sm text - gray - 600'>Environment:</span>;
                    <Badge variant='outline'>{health_data.environment}</Badge>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - sm text - gray - 600'>Version:</span>;
                    <span className='text - sm font - mono'>;
                      {health_data.version}
                    </span>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - sm text - gray - 600'>Memory Usage:</span>;
                    <span className='text - sm'>;
                      {format_bytes (health_data.metrics.memory_usage)}
                    </span>;
                  </div>;
                  <div className='flex justify - between'>;
                    <span className='text - sm text - gray - 600'>Last Updated:</span>;
                    <span className='text - sm'>;
                      {new Date (health_data.timestamp).toLocaleTimeString ()}
                    </span>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle className='flex items - center'>;
                  <AlertTriangle className='w - 4 h - 4 mr - 2' />;
                  Current Issues ({health_data.health.issues.length});
                </CardTitle>;
              </CardHeader>;
              <CardContent>;
                {health_data.health.issues.length > 0 ? (
                  <ul className='space - y-2'>;
                    {health_data.health.issues.map ((issue, index) => (
                      <li;
                        key={index}
                        className='text - sm text - red - 600 flex items - start';
                      >;
                        <span className='w - 2 h - 2 bg - red - 400 rounded - full mt - 1.5 mr - 2 flex - shrink - 0'></span>                        {issue}
                      </li>))}
                  </ul>) : (
                  <p className='text - green - 600 text - sm'>No issues detected</p>)}
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;
        <TabsContent value='errors' className='space - y-4'>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 4'>;
            <Card>;
              <CardHeader>;
                <CardTitle > Error Summary</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className='grid grid - cols - 2 gap - 4'>;
                  <div className='text - center'>;
                    <p className='text - 2xl font - bold text - red - 600'>;
                      {health_data.errors.summary.critical}
                    </p>;
                    <p className='text - sm text - gray - 600'>Critical</p>;
                  </div>;
                  <div className='text - center'>;
                    <p className='text - 2xl font - bold text - orange - 600'>;
                      {health_data.errors.summary.high}
                    </p>;
                    <p className='text - sm text - gray - 600'>High</p>;
                  </div>;
                  <div className='text - center'>;
                    <p className='text - 2xl font - bold text - yellow - 600'>;
                      {health_data.errors.summary.medium}
                    </p>;
                    <p className='text - sm text - gray - 600'>Medium</p>;
                  </div>;
                  <div className='text - center'>;
                    <p className='text - 2xl font - bold text - gray - 600'>;
                      {health_data.errors.summary.low}
                    </p>;
                    <p className='text - sm text - gray - 600'>Low</p>;
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader>;
                <CardTitle > Top Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {health_data.errors.top_errors.length > 0 ? (
                  <div className='space - y-2'>;
                    {health_data.errors.top_errors;
                      .slice (0, 5);
                      .map ((error, index) => (
                        <div;
                          key={index}
                          className='border - l-4 border - red - 400 pl - 3 py - 1';
                        >;
                          <p className='text - sm font - medium'>;
                            {error.description}
                          </p>;
                          <p className='text - xs text - gray - 600'>;
                            {error.occurrences} occurrences • {error.severity}
                          </p>;
                        </div>))}                  </div>) : (
                  <p className='text - gray - 600 text - sm'>No recurring errors</p>)}
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;
        <TabsContent value='metrics' className='space - y-4'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 4'>;
            <Card>;
              <CardHeader className='pb - 2'>;
                <CardTitle className='text - sm'>Error Rate</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text - 2xl font - bold'>;
                  {health_data.metrics.error_rate.to_fixed (2)}%;
                </p>;
                <p className='text - xs text - gray - 600'>Errors per request</p>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader className='pb - 2'>;
                <CardTitle className='text - sm'>Critical Errors</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text - 2xl font - bold text - red - 600'>;
                  {health_data.metrics.critical_errors}
                </p>;
                <p className='text - xs text - gray - 600'>In last hour</p>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader className='pb - 2'>;
                <CardTitle className='text - sm'>Avg Response</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text - 2xl font - bold'>;
                  {health_data.metrics.response_time.to_fixed (0)}ms;
                </p>;
                <p className='text - xs text - gray - 600'>API response time</p>;
              </CardContent>;
            </Card>;
            <Card>;
              <CardHeader className='pb - 2'>;
                <CardTitle className='text - sm'>Memory Usage</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className='text - 2xl font - bold'>;
                  {format_bytes (health_data.metrics.memory_usage)}
                </p>;
                <p className='text - xs text - gray - 600'>JavaScript heap</p>;
              </CardContent>;
            </Card>;
          </div>;
        </TabsContent>;
        <TabsContent value='recommendations' className='space - y-4'>;
          <Card>;
            <CardHeader>;
              <CardTitle > Improvement Recommendations</CardTitle>;
            </CardHeader>;
            <CardContent>;
              {health_data.health.recommendations.length > 0 ? (
                <ul className='space - y-3'>;
                  {health_data.health.recommendations.map ((rec, index) => (
                    <li key={index} className='flex items - start'>;
                      <CheckCircle className='w - 4 h - 4 text - green - 500 mt - 0.5 mr - 2 flex - shrink - 0' />;
                      <span className='text - sm'>{rec}</span>                    </li>))}
                </ul>) : (
                <p className='text - gray - 600'>;
                  No specific recommendations at this time;
                </p>)}
            </CardContent>;
          </Card>;
        </TabsContent>;
      </Tabs>;
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    </div>);
}
export default HealthDashboard;
export default HealthDashboard,
<<<<<<< HEAD
export default HealthDashboard,
=======
export default HealthDashboard,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

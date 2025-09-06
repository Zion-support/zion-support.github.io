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
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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


  if (!healthData) return null
  if (!healthData) return null,

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
            variant='outline'
            size='sm'
            onClick={() => setAutoRefresh(!autoRefresh)}          >
            variant="outline"
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
          >
                      <li
                        key={index}
                        className='text-sm text-red-600 flex items-start'
                      >
                        <span className='w-2 h-2 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>                        {issue}
                  <ul className="space-y-2">
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
            Refresh;
          </Button>;
        </div>;
      </div>;

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
              </div>;
            </div>;
          </CardContent>;
        </Card>;

        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <Clock className='w-5 h-5 text-blue-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>Uptime</p>;
                <p className='text-2xl font-bold'>;
                  {formatUptime(healthData && healthData.uptime)}
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;

        <Card>;
          <CardContent className='p-6'>;
            <div className='flex items-center'>;
              <TrendingUp className='w-5 h-5 text-orange-500' />;
              <div className='ml-2'>;
                <p className='text-sm font-medium text-gray-600'>Error Rate</p>;
                <p className='text-2xl font-bold'>;
                  {healthData && healthData.metrics.errorRate && errorRate.toFixed(1)}%;
                </p>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;

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
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;

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
            <Card>;
              <CardHeader>;
                <CardTitle>System Information</CardTitle>;
              </CardHeader>;
              <CardContent>;
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
                  </div>;
                </div>;
              </CardContent>;
            </Card>;

            <Card>;
              <CardHeader>;
                <CardTitle className='flex items-center'>;
                  <AlertTriangle className='w-4 h-4 mr-2' />;
                  Current Issues ({healthData && healthData.health.issues && issues.length});
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
                  </ul>;
                ) : (;
                  <p className='text-green-600 text-sm'>No issues detected</p>;
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value='errors' className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

        <TabsContent value="errors" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default HealthDashboard
export default HealthDashboard,

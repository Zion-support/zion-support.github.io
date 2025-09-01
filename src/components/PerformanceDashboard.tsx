import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Skeleton } from './ui/Skeleton';
import {

  Activity, 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu,
  BarChart3,
  Target,
  RefreshCw
} from 'lucide-react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';

interface PerformanceMetric {

  name: string;
  value: number | null;
  unit: string;
  target: number;
  status: 'excellent' | 'good' | 'needs-improvement' | 'poor';
  description: string;
}

const PerformanceDashboard: React.FC = () => {

  const { metrics, isMonitoring, startMonitoring, stopMonitoring, getPerformanceScore, getPerformanceGrade } = usePerformanceMonitor();
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {

    if (isMonitoring) {

      const interval = setInterval(() => {

        setLastUpdate(new Date());
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const getMetricStatus = (value: number | null, target: number): PerformanceMetric['status'] => {

    if (value === null) return 'needs-improvement';
    const percentage = (value / target) * 100;
    if (percentage >= 90) return 'excellent';
    if (percentage >= 70) return 'good';
    if (percentage >= 50) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status: PerformanceMetric['status']) => {

    switch (status) {

      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'needs-improvement': return 'bg-yellow-500';
      case 'poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: PerformanceMetric['status']) => {

    switch (status) {

      case 'excellent': return 'Excellent';
      case 'good': return 'Good';
      case 'needs-improvement': return 'Needs Improvement';
      case 'poor': return 'Poor';
      default: return 'Unknown';
    }
  };

  const performanceMetrics: PerformanceMetric[] = [
    {

      name: 'First Contentful Paint',
      value: metrics.fcp,
      unit: 'ms',
      target: 1800,
      status: getMetricStatus(metrics.fcp, 1800),
      description: 'Time until first content is painted on screen'
    },
    {

      name: 'Largest Contentful Paint',
      value: metrics.lcp,
      unit: 'ms',
      target: 2500,
      status: getMetricStatus(metrics.lcp, 2500),
      description: 'Time until largest content element is visible'
    },
    {

      name: 'First Input Delay',
      value: metrics.fid,
      unit: 'ms',
      target: 100,
      status: getMetricStatus(metrics.fid, 100),
      description: 'Time from first interaction to response'
    },
    {

      name: 'Cumulative Layout Shift',
      value: metrics.cls,
      unit: '',
      target: 0.1,
      status: getMetricStatus(metrics.cls, 0.1),
      description: 'Visual stability measure'
    },
    {

      name: 'Time to First Byte',
      value: metrics.ttfb,
      unit: 'ms',
      target: 600,
      status: getMetricStatus(metrics.ttfb, 600),
      description: 'Server response time'
    }
  ];

  const overallScore = getPerformanceScore();
  const grade = getPerformanceGrade();

  const handleToggleMonitoring = () => {

    if (isMonitoring) {

      stopMonitoring();
    } else {

      startMonitoring();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Performance Dashboard
          </h2>
          <p className="text-gray-400 mt-1">
            Real-time performance monitoring and optimization
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={handleToggleMonitoring}
            variant={isMonitoring ? "destructive" : "default"}
            className="flex items-center gap-2"
          >
            {isMonitoring ? (
              <>
                <AlertTriangle className="w-4 h-4" />
                Stop Monitoring
              </>
            ) : (
              <>
                <Activity className="w-4 h-4" />
                Start Monitoring
              </>
            )}
          </Button>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            size="sm"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </Button>
        </div>
      </div>

      {/* Overall Performance Score */}
      <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Target className="w-5 h-5" />
            Overall Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{overallScore}</div>
              <div className="text-sm text-gray-300">Performance Score</div>
              <Badge className={`mt-2 ${getStatusColor(getMetricStatus(overallScore, 100))}`}>
                Grade: {grade}
              </Badge>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">
                {isMonitoring ? (
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    Active
                  </div>
                ) : (
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    Inactive
                  </div>
                )}
              </div>
              <div className="text-sm text-gray-300">Monitoring Status</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">
                {lastUpdate.toLocaleTimeString()}
              </div>
              <div className="text-sm text-gray-300">Last Update</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Web Vitals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Zap className="w-5 h-5" />
            Core Web Vitals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {performanceMetrics.map((metric) => (
              <div key={metric.name} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{metric.name}</h4>
                  <Badge className={getStatusColor(metric.status)}>
                    {getStatusText(metric.status)}
                  </Badge>
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold text-white">
                    {metric.value !== null ? `${metric.value.toFixed(2)}${metric.unit}` : 'N/A'}
                  </div>
                  <div className="text-xs text-gray-400">
                    Target: {metric.target}{metric.unit}
                  </div>
                </div>
                <Progress 
                  value={metric.value !== null ? Math.min((metric.value / metric.target) * 100, 100) : 0} 
                  className="w-full" 
                />
                <p className="text-xs text-gray-400 mt-2">{metric.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics */}
      {isExpanded && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Gauge className="w-5 h-5" />
              Detailed Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Navigation Timing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">DOM Load Time:</span>
                    <span className="text-white">
                      {metrics.domLoadTime !== null ? `${metrics.domLoadTime.toFixed(2)}ms` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Resource Load Time:</span>
                    <span className="text-white">
                      {metrics.resourceLoadTime !== null ? `${metrics.resourceLoadTime.toFixed(2)}ms` : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Performance Insights</h4>
                <div className="space-y-2">
                  {overallScore >= 90 && (
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Excellent performance! Your site is fast and responsive.</span>
                    </div>
                  )}
                  {overallScore < 90 && overallScore >= 70 && (
                    <div className="flex items-center gap-2 text-blue-400">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">Good performance with room for improvement.</span>
                    </div>
                  )}
                  {overallScore < 70 && (
                    <div className="flex items-center gap-2 text-yellow-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-sm">Performance needs attention. Consider optimization.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <TrendingUp className="w-5 h-5" />
            Performance Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {metrics.fcp && metrics.fcp > 1800 && (
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Optimize First Contentful Paint</h5>
                  <p className="text-sm text-gray-300">
                    Consider image optimization, critical CSS inlining, and server response time improvements.
                  </p>
                </div>
              </div>
            )}
            
            {metrics.lcp && metrics.lcp > 2500 && (
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Improve Largest Contentful Paint</h5>
                  <p className="text-sm text-gray-300">
                    Optimize hero images, implement lazy loading, and reduce render-blocking resources.
                  </p>
                </div>
              </div>
            )}
            
            {metrics.cls && metrics.cls > 0.1 && (
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Reduce Layout Shifts</h5>
                  <p className="text-sm text-gray-300">
                    Set explicit dimensions for images and avoid inserting content above existing content.
                  </p>
                </div>
              </div>
            )}
            
            {overallScore >= 90 && (
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Excellent Performance!</h5>
                  <p className="text-sm text-gray-300">
                    Your site is performing exceptionally well. Keep monitoring to maintain these results.
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceDashboard;
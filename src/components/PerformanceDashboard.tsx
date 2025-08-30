import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Lightbulb,
  BarChart3
} from 'lucide-react';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

const PerformanceDashboard: React.FC = () => {
  const { metrics, score, grade, recommendations } = usePerformanceMonitor();

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600 bg-green-100';
      case 'B': return 'text-blue-600 bg-blue-100';
      case 'C': return 'text-yellow-600 bg-yellow-100';
      case 'D': return 'text-orange-600 bg-orange-100';
      case 'F': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getMetricColor = (value: number, threshold: number) => {
    if (value <= threshold) return 'text-green-600';
    if (value <= threshold * 1.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Performance Dashboard
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real-time performance monitoring and optimization insights
            </p>
          </div>
        </div>
        <Badge className={`px-3 py-1 text-lg font-bold ${getGradeColor(grade)}`}>
          Grade: {grade}
        </Badge>
      </div>

      {/* Overall Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span>Overall Performance Score</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {score}/100
            </div>
            <Progress value={score} className="w-full h-3" />
            <p className="text-sm text-gray-600 mt-2">
              {score >= 90 ? 'Excellent performance!' : 
               score >= 80 ? 'Good performance with room for improvement' :
               score >= 70 ? 'Average performance - optimization recommended' :
               'Performance needs attention'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Core Web Vitals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Core Web Vitals</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className={`text-2xl font-bold ${getMetricColor(metrics.fcp, 1800)}`}>
                {metrics.fcp}ms
              </div>
              <div className="text-sm text-gray-600">First Contentful Paint</div>
              <Badge variant={metrics.fcp <= 1800 ? 'default' : 'destructive'} className="mt-2">
                {metrics.fcp <= 1800 ? 'Good' : metrics.fcp <= 3000 ? 'Needs Improvement' : 'Poor'}
              </Badge>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <div className={`text-2xl font-bold ${getMetricColor(metrics.lcp, 2500)}`}>
                {metrics.lcp}ms
              </div>
              <div className="text-sm text-gray-600">Largest Contentful Paint</div>
              <Badge variant={metrics.lcp <= 2500 ? 'default' : 'destructive'} className="mt-2">
                {metrics.lcp <= 2500 ? 'Good' : metrics.lcp <= 4000 ? 'Needs Improvement' : 'Poor'}
              </Badge>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <div className={`text-2xl font-bold ${getMetricColor(metrics.cls, 0.1)}`}>
                {metrics.cls.toFixed(3)}
              </div>
              <div className="text-sm text-gray-600">Cumulative Layout Shift</div>
              <Badge variant={metrics.cls <= 0.1 ? 'default' : 'destructive'} className="mt-2">
                {metrics.cls <= 0.1 ? 'Good' : metrics.cls <= 0.25 ? 'Needs Improvement' : 'Poor'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Timing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Navigation Timing</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Time to First Byte (TTFB)</span>
                <span className={`font-mono ${getMetricColor(metrics.ttfb, 600)}`}>
                  {metrics.ttfb}ms
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">DOM Load Time</span>
                <span className={`font-mono ${getMetricColor(metrics.domLoadTime, 2000)}`}>
                  {metrics.domLoadTime}ms
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Resource Load Time</span>
                <span className={`font-mono ${getMetricColor(metrics.resourceLoadTime, 3000)}`}>
                  {metrics.resourceLoadTime}ms
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Load Time</span>
                <span className={`font-mono ${getMetricColor(metrics.totalLoadTime, 5000)}`}>
                  {metrics.totalLoadTime}ms
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI-Powered Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5" />
            <span>AI Optimization Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="flex-shrink-0">
                  {rec.priority === 'high' ? (
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  ) : rec.priority === 'medium' ? (
                    <TrendingUp className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {rec.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {rec.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      {rec.priority} priority
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {rec.estimatedImpact} impact
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Performance Trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-600">
            <p>Performance trend analysis and historical data visualization</p>
            <p className="text-sm mt-2">Coming soon: Interactive charts and trend analysis</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceDashboard;
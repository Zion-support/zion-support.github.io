import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Activity, 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu
} from 'lucide-react';

// Simple Progress component
const Progress: React.FC<{ value: number; className?: string }> = ({ value, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  bundleSize: number;
  lighthouseScore: number;
}

interface OptimizationSuggestion {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: 'high' | 'medium' | 'low';
  estimatedSavings: string;
  category: 'performance' | 'seo' | 'accessibility' | 'best-practices';
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    lighthouseScore: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizations, setOptimizations] = useState<OptimizationSuggestion[]>([]);
  const [activeOptimizations, setActiveOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loadTime: Math.random() * 3000 + 500,
        memoryUsage: Math.random() * 100,
        cpuUsage: Math.random() * 80,
        networkLatency: Math.random() * 200 + 50,
        bundleSize: Math.random() * 2000 + 500,
        lighthouseScore: Math.random() * 40 + 60
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Generate optimization suggestions
  useEffect(() => {
    const suggestions: OptimizationSuggestion[] = [
      {
        id: '1',
        title: 'Image Optimization',
        description: 'Compress and optimize images using WebP format and lazy loading',
        priority: 'high',
        impact: 'high',
        estimatedSavings: '2-5 seconds',
        category: 'performance'
      },
      {
        id: '2',
        title: 'Code Splitting',
        description: 'Implement dynamic imports and route-based code splitting',
        priority: 'high',
        impact: 'high',
        estimatedSavings: '1-3 seconds',
        category: 'performance'
      },
      {
        id: '3',
        title: 'Bundle Analysis',
        description: 'Analyze and reduce bundle size by removing unused dependencies',
        priority: 'medium',
        impact: 'medium',
        estimatedSavings: '500KB-1MB',
        category: 'performance'
      },
      {
        id: '4',
        title: 'Caching Strategy',
        description: 'Implement service worker and aggressive caching policies',
        priority: 'medium',
        impact: 'high',
        estimatedSavings: '1-2 seconds',
        category: 'performance'
      },
      {
        id: '5',
        title: 'Critical CSS',
        description: 'Inline critical CSS and defer non-critical styles',
        priority: 'low',
        impact: 'medium',
        estimatedSavings: '200-500ms',
        category: 'performance'
      }
    ];

    setOptimizations(suggestions);
  }, []);

  const applyOptimization = useCallback((id: string) => {
    setActiveOptimizations(prev => [...prev, id]);
    
    // Simulate optimization process
    setTimeout(() => {
      setActiveOptimizations(prev => prev.filter(opt => opt !== id));
    }, 3000);
  }, []);

  const getPerformanceStatus = (score: number) => {
    if (score >= 90) return { status: 'Excellent', color: 'bg-green-500', icon: CheckCircle };
    if (score >= 70) return { status: 'Good', color: 'bg-yellow-500', icon: TrendingUp };
    if (score >= 50) return { status: 'Fair', color: 'bg-orange-500', icon: AlertTriangle };
    return { status: 'Poor', color: 'bg-red-500', icon: AlertTriangle };
  };

  const performanceStatus = getPerformanceStatus(metrics.lighthouseScore);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            Performance Monitor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button 
              onClick={startMonitoring} 
              disabled={isMonitoring}
              className="flex items-center gap-2"
            >
              <Activity className="h-4 w-4" />
              Start Monitoring
            </Button>
            <Button 
              onClick={stopMonitoring} 
              disabled={!isMonitoring}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Clock className="h-4 w-4" />
              Stop Monitoring
            </Button>
          </div>

          {isMonitoring && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {metrics.loadTime.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-600">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {metrics.memoryUsage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Memory Usage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {metrics.cpuUsage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">CPU Usage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {metrics.networkLatency.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-600">Network Latency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {(metrics.bundleSize / 1024).toFixed(1)}KB
                </div>
                <div className="text-sm text-gray-600">Bundle Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {metrics.lighthouseScore.toFixed(0)}
                </div>
                <div className="text-sm text-gray-600">Lighthouse Score</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <Badge className={`${performanceStatus.color} text-white`}>
              {performanceStatus.status}
            </Badge>
            <div className="flex items-center gap-2">
              <performanceStatus.icon className="h-4 w-4" />
              <span className="text-sm text-gray-600">
                Score: {metrics.lighthouseScore.toFixed(0)}/100
              </span>
            </div>
          </div>
          <Progress value={metrics.lighthouseScore} className="w-full" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Optimization Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {optimizations.map((optimization) => (
              <div key={optimization.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{optimization.title}</h4>
                      <Badge variant={
                        optimization.priority === 'high' ? 'destructive' : 
                        optimization.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {optimization.priority}
                      </Badge>
                      <Badge variant="outline">{optimization.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {optimization.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-600">
                        Estimated savings: {optimization.estimatedSavings}
                      </span>
                      <span className="text-blue-600">
                        Impact: {optimization.impact}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => applyOptimization(optimization.id)}
                    disabled={activeOptimizations.includes(optimization.id)}
                    size="sm"
                    className="ml-4"
                  >
                    {activeOptimizations.includes(optimization.id) ? (
                      <>
                        <Cpu className="h-4 w-4 mr-2 animate-spin" />
                        Applying...
                      </>
                    ) : (
                      'Apply'
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {activeOptimizations.length > 0 && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {activeOptimizations.length} optimization(s) are currently being applied. 
            This may take a few moments to complete.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default PerformanceOptimizer;

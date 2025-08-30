import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCompression?: boolean;
}

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
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
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

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  enabled, 
  showMetrics = true, 
  enableLazyLoading = true, 
  enablePreloading = true, 
  enableCompression = true 
}) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    lighthouseScore: 0
  });

  const [isMonitoring, setIsMonitoring] = React.useState(false);
  const [optimizations, setOptimizations] = React.useState<OptimizationSuggestion[]>([]);
  const [activeOptimizations, setActiveOptimizations] = React.useState<string[]>([]);

  // Performance monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        fcp: Math.random() * 2000 + 500,
        lcp: Math.random() * 3000 + 1000,
        fid: Math.random() * 100 + 10,
        cls: Math.random() * 0.1 + 0.01,
        ttfb: Math.random() * 500 + 100,
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
      }
    ];
    setOptimizations(suggestions);
  }, []);

  // Apply optimization
  const applyOptimization = useCallback((id: string) => {
    setActiveOptimizations(prev => [...prev, id]);
    // Simulate optimization application
    setTimeout(() => {
      setActiveOptimizations(prev => prev.filter(opt => opt !== id));
    }, 3000);
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 bg-white/95 backdrop-blur-sm border-cyan-500/30 shadow-xl">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Gauge className="w-5 h-5 text-cyan-600" />
            Performance Optimizer
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Performance Metrics */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Current Metrics</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-500" />
                <span>FCP: {metrics.fcp.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>LCP: {metrics.lcp.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>FID: {metrics.fid.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-500" />
                <span>CLS: {metrics.cls.toFixed(3)}</span>
              </div>
            </div>
          </div>

          {/* Optimization Suggestions */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Optimizations</h4>
            <div className="space-y-2">
              {optimizations.map((opt) => (
                <div key={opt.id} className="p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium text-gray-800">{opt.title}</h5>
                    <Badge 
                      variant={opt.priority === 'high' ? 'destructive' : opt.priority === 'medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {opt.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{opt.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Impact: {opt.impact} • Savings: {opt.estimatedSavings}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => applyOptimization(opt.id)}
                      disabled={activeOptimizations.includes(opt.id)}
                      className="h-7 px-2 text-xs"
                    >
                      {activeOptimizations.includes(opt.id) ? 'Applying...' : 'Apply'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring Controls */}
          <div className="flex gap-2">
            <Button
              onClick={startMonitoring}
              disabled={isMonitoring}
              className="flex-1"
              size="sm"
            >
              {isMonitoring ? 'Monitoring...' : 'Start Monitoring'}
            </Button>
            <Button
              onClick={stopMonitoring}
              disabled={!isMonitoring}
              variant="outline"
              size="sm"
            >
              Stop
            </Button>
          </div>

          {/* Status Alert */}
          {activeOptimizations.length > 0 && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Applying {activeOptimizations.length} optimization{activeOptimizations.length > 1 ? 's' : ''}...
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceOptimizer;

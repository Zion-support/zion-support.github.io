import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePerformance } from '@/hooks/usePerformance';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  Clock, 
  MousePointer, 
  Eye, 
  TrendingUp, 
  BarChart3, 
  RefreshCw, 
  X, 
  Info 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function PerformanceDashboard({ className, showDetails = false, onClose }) {
  const { metrics, observers, performanceScore, logMetrics } = usePerformance();
  const [isExpanded, setIsExpanded] = useState(showDetails);

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreEmoji = (score) => {
    if (score >= 90) return '🚀';
    if (score >= 70) return '⚠️';
    return '🐌';
  };

  const getMetricIcon = (metricName) => {
    const icons = {
      FCP: <Eye className="w-4 h-4" />,
      LCP: <Eye className="w-4 h-4" />,
      FID: <MousePointer className="w-4 h-4" />,
      CLS: <BarChart3 className="w-4 h-4" />,
      TTFB: <Clock className="w-4 h-4" />,
      DOMLOAD: <Activity className="w-4 h-4" />,
    };
    return icons[metricName] || <Activity className="w-4 h-4" />;
  };

  const getMetricStatus = (metricName, value) => {
    const thresholds = {
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      FID: { good: 100, poor: 300 },
      CLS: { good: 0.1, poor: 0.25 },
      TTFB: { good: 800, poor: 1800 },
      DOMLOAD: { good: 2000, poor: 4000 },
    };

    const threshold = thresholds[metricName];
    if (!threshold || !value) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'good': return 'Good';
      case 'needs-improvement': return 'Needs Improvement';
      case 'poor': return 'Poor';
      default: return 'Unknown';
    }
  };

  const formatMetricValue = (metricName, value) => {
    if (!value) return 'N/A';
    
    switch (metricName) {
      case 'CLS':
        return value.toFixed(3);
      case 'FCP':
      case 'LCP':
      case 'FID':
      case 'TTFB':
      case 'DOMLOAD':
        return `${Math.round(value)}ms`;
      default:
        return value.toString();
    }
  };

  if (!isExpanded) {
    return (
      <motion.div
        className={cn(
          "fixed bottom-4 right-4 z-50",
          className
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <Button
          onClick={() => setIsExpanded(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
        >
          <BarChart3 className="w-5 h-5" />
        </Button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className={cn(
          "fixed bottom-4 right-4 z-50 w-80 max-h-96 overflow-y-auto",
          className
        )}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
      >
        <Card className="bg-slate-900 border-slate-700 shadow-2xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Performance Dashboard
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => logMetrics()}
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
                {onClose && (
                  <Button
                    onClick={onClose}
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Overall Score */}
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {getScoreEmoji(performanceScore)} {performanceScore}
              </div>
              <div className={cn("text-sm font-medium", getScoreColor(performanceScore))}>
                Performance Score
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              {Object.entries(metrics).map(([key, value]) => {
                const status = getMetricStatus(key, value);
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getMetricIcon(key)}
                      <span className="text-sm text-gray-300">{key}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-white">
                        {formatMetricValue(key, value)}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className={cn("text-xs", getStatusColor(status))}
                      >
                        {getStatusBadge(status)}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Info */}
            <div className="flex items-start gap-2 p-3 bg-blue-900/20 rounded-lg">
              <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-blue-300">
                Performance metrics are automatically collected and updated in real-time.
                Lower values are generally better for most metrics.
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
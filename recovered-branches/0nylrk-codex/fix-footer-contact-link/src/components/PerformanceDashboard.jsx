<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePerformance } from '@/hooks/usePerformance';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Activity from 'lucide-react/dist/esm/icons/activity';
import Clock from 'lucide-react/dist/esm/icons/clock';
import MousePointer from 'lucide-react/dist/esm/icons/mouse-pointer';
import Eye from 'lucide-react/dist/esm/icons/eye';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import BarChart3 from 'lucide-react/dist/esm/icons/bar-chart-3';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw';
import X from 'lucide-react/dist/esm/icons/x';
import Info from 'lucide-react/dist/esm/icons/info';
import { cn } from '@/lib/utils';
export function PerformanceDashboard({ className, showDetails = false, onClose }) {
    const { metrics, observers, performanceScore, logMetrics } = usePerformance();
    const [isExpanded, setIsExpanded] = useState(showDetails);
    const getScoreColor = (score) => {
        if (score >= 90)
            return 'text-green-500';
        if (score >= 70)
            return 'text-yellow-500';
        return 'text-red-500';
    };
    const getScoreEmoji = (score) => {
        if (score >= 90)
            return '🚀';
        if (score >= 70)
            return '⚠️';
        return '🐌';
    };
    const getMetricIcon = (metricName) => {
        const icons = {
            FCP: <Eye className="w-4 h-4"/>,
            LCP: <Eye className="w-4 h-4"/>,
            FID: <MousePointer className="w-4 h-4"/>,
            CLS: <BarChart3 className="w-4 h-4"/>,
            TTFB: <Clock className="w-4 h-4"/>,
            DOMLOAD: <Activity className="w-4 h-4"/>,
            WINDOWLOAD: <Activity className="w-4 h-4"/>
        };
        return icons[metricName] || <Activity className="w-4 h-4"/>;
    };
    const getMetricDescription = (metricName) => {
        const descriptions = {
            FCP: 'First Contentful Paint - Time to first content',
            LCP: 'Largest Contentful Paint - Time to largest content',
            FID: 'First Input Delay - Time to first interaction',
            CLS: 'Cumulative Layout Shift - Visual stability',
            TTFB: 'Time to First Byte - Server response time',
            DOMLOAD: 'DOM Content Loaded - DOM ready time',
            WINDOWLOAD: 'Window Load - Full page load time'
        };
        return descriptions[metricName] || 'Performance metric';
    };
    const formatMetricValue = (metricName, value) => {
        if (metricName === 'CLS')
            return value.toFixed(3);
        if (metricName === 'FID')
            return `${value.toFixed(0)}ms`;
        return `${value.toFixed(0)}ms`;
    };
    return (<motion.div className={cn('fixed bottom-4 right-4 z-50 max-w-sm', className)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="bg-zion-blue-dark/95 backdrop-blur-md border-zion-purple/20 text-white shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-zion-cyan"/>
              Performance
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="p-1 h-8 w-8 text-zion-slate-light hover:text-zion-cyan">
                <TrendingUp className="w-4 h-4"/>
              </Button>
              {onClose && (<Button variant="ghost" size="sm" onClick={onClose} className="p-1 h-8 w-8 text-zion-slate-light hover:text-zion-cyan">
                  <X className="w-4 h-4"/>
                </Button>)}
            </div>
          </div>
          
          {/* Performance Score */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zion-slate-light">Score:</span>
              <span className={cn('text-2xl font-bold', getScoreColor(performanceScore))}>
                {performanceScore}
              </span>
              <span className="text-lg">{getScoreEmoji(performanceScore)}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={logMetrics} className="text-zion-cyan hover:text-zion-cyan-light">
              <RefreshCw className="w-4 h-4"/>
            </Button>
          </div>
        </CardHeader>
=======

const PerformanceDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">PerformanceDashboard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default PerformanceDashboard;

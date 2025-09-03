import React, { useEffect, useState } from 'react';
import { Activity, Zap, Shield, Globe } from 'lucide-react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = "" }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const collectMetrics = () => {
      if (typeof window === 'undefined') return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime;
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime;
      const ttfb = navigation ? navigation.responseStart - navigation.requestStart : undefined;

      setMetrics({
        fcp,
        lcp,
        ttfb
      });
    };

    collectMetrics();
    const interval = setInterval(collectMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg border p-4 max-w-sm ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Performance</h3>
      </div>

      <div className="space-y-3">
        {metrics.fcp && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-gray-600">FCP</span>
            </div>
            <span className="font-medium">{metrics.fcp.toFixed(0)}ms</span>
          </div>
        )}

        {metrics.lcp && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">LCP</span>
            </div>
            <span className="font-medium">{metrics.lcp.toFixed(0)}ms</span>
          </div>
        )}

        {metrics.ttfb && (
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-purple-600" />
              <span className="text-gray-600">TTFB</span>
            </div>
            <span className="font-medium">{metrics.ttfb.toFixed(0)}ms</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t">
        <div className="text-xs text-gray-500 text-center">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
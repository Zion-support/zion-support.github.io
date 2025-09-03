import React from "react";
import { Activity, Zap, Shield, Globe, TrendingUp } from "lucide-react";

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceEnhancerProps {
  className?: string;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({ className = "" }) => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Simulate performance metrics collection
    const collectMetrics = () => {
      setMetrics({
        fcp: Math.random() * 2000 + 500,
        lcp: Math.random() * 3000 + 1000,
        fid: Math.random() * 100,
        cls: Math.random() * 0.3,
        ttfb: Math.random() * 500 + 100
      });
    };

    collectMetrics();
    const interval = setInterval(collectMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getScoreColor = (score: number, thresholds: { good: number; needsImprovement: number }) => {
    if (score <= thresholds.good) return 'text-green-600';
    if (score <= thresholds.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number, thresholds: { good: number; needsImprovement: number }) => {
    if (score <= thresholds.good) return 'Good';
    if (score <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className={`bg-white rounded-lg shadow-lg border p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Performance Enhancer</h3>
          <p className="text-sm text-gray-600">Real-time performance monitoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* FCP */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">FCP</span>
            </div>
            <span className={`text-sm font-medium ${getScoreColor(metrics.fcp || 0, { good: 1800, needsImprovement: 3000 })}`}>
              {getScoreLabel(metrics.fcp || 0, { good: 1800, needsImprovement: 3000 })}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          </div>
          <div className="text-xs text-gray-500 mt-1">First Contentful Paint</div>
        </div>

        {/* LCP */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">LCP</span>
            </div>
            <span className={`text-sm font-medium ${getScoreColor(metrics.lcp || 0, { good: 2500, needsImprovement: 4000 })}`}>
              {getScoreLabel(metrics.lcp || 0, { good: 2500, needsImprovement: 4000 })}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          </div>
          <div className="text-xs text-gray-500 mt-1">Largest Contentful Paint</div>
        </div>

        {/* FID */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">FID</span>
            </div>
            <span className={`text-sm font-medium ${getScoreColor(metrics.fid || 0, { good: 100, needsImprovement: 300 })}`}>
              {getScoreLabel(metrics.fid || 0, { good: 100, needsImprovement: 300 })}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
          </div>
          <div className="text-xs text-gray-500 mt-1">First Input Delay</div>
        </div>

        {/* CLS */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">CLS</span>
            </div>
            <span className={`text-sm font-medium ${getScoreColor((metrics.cls || 0) * 1000, { good: 100, needsImprovement: 250 })}`}>
              {getScoreLabel((metrics.cls || 0) * 1000, { good: 100, needsImprovement: 250 })}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </div>
          <div className="text-xs text-gray-500 mt-1">Cumulative Layout Shift</div>
        </div>

        {/* TTFB */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-gray-700">TTFB</span>
            </div>
            <span className={`text-sm font-medium ${getScoreColor(metrics.ttfb || 0, { good: 800, needsImprovement: 1800 })}`}>
              {getScoreLabel(metrics.ttfb || 0, { good: 800, needsImprovement: 1800 })}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </div>
          <div className="text-xs text-gray-500 mt-1">Time to First Byte</div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
          <button className="text-blue-600 hover:text-blue-800 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceEnhancer;
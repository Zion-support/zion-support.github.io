import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

interface CoreWebVitalsProps {
  showInProduction?: boolean;
  enableReporting?: boolean;
}

interface VitalsData {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ 
  showInProduction = false,
  enableReporting = true 
}) => {
  const [vitals, setVitals] = useState<VitalsData>({
    CLS: null,
    INP: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production';
    
    if (isProduction && !showInProduction) {
      return;
    }

    const handleMetric = (metric: Metric) => {
      setVitals(prev => ({
        ...prev,
        [metric.name]: metric.value,
      }));

      // Report to analytics
      if (enableReporting && typeof window !== 'undefined') {
        // Google Analytics 4
        if (window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          });
        }

        // Custom analytics endpoint
        fetch('/api/analytics/vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            delta: metric.delta,
            id: metric.id,
            url: window.location.href,
            timestamp: Date.now(),
          }),
        }).catch(() => {
          // Silently fail if analytics endpoint is not available
        });
      }
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Show debug panel in development
    if (!isProduction) {
      setIsVisible(true);
    }
  }, [showInProduction, enableReporting]);

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  const getScoreColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-gray-400';
    
    switch (metric) {
      case 'CLS':
        return value <= 0.1 ? 'text-green-400' : value <= 0.25 ? 'text-yellow-400' : 'text-red-400';
      case 'INP':
        return value <= 200 ? 'text-green-400' : value <= 500 ? 'text-yellow-400' : 'text-red-400';
      case 'FCP':
        return value <= 1800 ? 'text-green-400' : value <= 3000 ? 'text-yellow-400' : 'text-red-400';
      case 'LCP':
        return value <= 2500 ? 'text-green-400' : value <= 4000 ? 'text-yellow-400' : 'text-red-400';
      case 'TTFB':
        return value <= 800 ? 'text-green-400' : value <= 1800 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const formatValue = (metric: string, value: number | null) => {
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'CLS':
        return value.toFixed(3);
      case 'INP':
      case 'FCP':
      case 'LCP':
      case 'TTFB':
        return `${Math.round(value)}ms`;
      default:
        return value.toString();
    }
  };

  return (
    <div className="fixed bottom-4 left-4 bg-slate-900/95 backdrop-blur-sm text-white p-4 rounded-lg text-xs font-mono z-50 border border-cyan-500/20 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="font-bold text-cyan-400">Core Web Vitals</div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close vitals panel"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {Object.entries(vitals).map(([metric, value]) => (
          <div key={metric} className="flex justify-between items-center">
            <span className="text-gray-300">{metric}:</span>
            <span className={getScoreColor(metric, value)}>
              {formatValue(metric, value)}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          {Object.values(vitals).every(v => v !== null) ? 'All metrics collected' : 'Collecting metrics...'}
        </div>
      </div>
    </div>
  );
};

export default CoreWebVitals;
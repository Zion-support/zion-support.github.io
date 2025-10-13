import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface CoreWebVitals {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

const EnhancedPerformanceMonitor: React.FC = () => {
  const [vitals, setVitals] = useState<CoreWebVitals | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const vitalsData: Partial<CoreWebVitals> = {};

    // Measure Core Web Vitals
    onCLS((metric) => {
      vitalsData.cls = metric.value;
      checkAllVitalsCollected();
    });

    onINP((metric) => {
      vitalsData.inp = metric.value;
      checkAllVitalsCollected();
    });

    onFCP((metric) => {
      vitalsData.fcp = metric.value;
      checkAllVitalsCollected();
    });

    onLCP((metric) => {
      vitalsData.lcp = metric.value;
      checkAllVitalsCollected();
    });

    onTTFB((metric) => {
      vitalsData.ttfb = metric.value;
      checkAllVitalsCollected();
    });

    function checkAllVitalsCollected() {
      if (vitalsData.cls !== undefined && 
          vitalsData.inp !== undefined && 
          vitalsData.fcp !== undefined && 
          vitalsData.lcp !== undefined && 
          vitalsData.ttfb !== undefined) {
        setVitals(vitalsData as CoreWebVitals);
      }
    }

    // Fallback timeout
    setTimeout(() => {
      if (!vitals) {
        setVitals({
          cls: 0,
          inp: 0,
          fcp: 0,
          lcp: 0,
          ttfb: 0
        });
      }
    }, 5000);

  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !vitals) {
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.needsImprovement) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
      >
        Core Web Vitals
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-6 w-80">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Core Web Vitals</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">LCP (Largest Contentful Paint):</span>
              <span className={`font-mono font-bold ${getScoreColor(vitals.lcp, { good: 2500, needsImprovement: 4000 })}`}>
                {vitals.lcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">INP (Interaction to Next Paint):</span>
              <span className={`font-mono font-bold ${getScoreColor(vitals.inp, { good: 200, needsImprovement: 500 })}`}>
                {vitals.inp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">CLS (Cumulative Layout Shift):</span>
              <span className={`font-mono font-bold ${getScoreColor(vitals.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
                {vitals.cls.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">FCP (First Contentful Paint):</span>
              <span className={`font-mono font-bold ${getScoreColor(vitals.fcp, { good: 1800, needsImprovement: 3000 })}`}>
                {vitals.fcp.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">TTFB (Time to First Byte):</span>
              <span className={`font-mono font-bold ${getScoreColor(vitals.ttfb, { good: 800, needsImprovement: 1800 })}`}>
                {vitals.ttfb.toFixed(0)}ms
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Good</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Needs Improvement</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Poor</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;
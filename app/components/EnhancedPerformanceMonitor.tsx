'use client';

import React, {useEffect, useState } from 'react';
import {getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {CLS: number | null;,
    FID: number | null;,
    FCP: number | null;,
    LCP: number | null;,
    TTFB: number | null;
}

const EnhancedPerformanceMonitor: React.FC = () => {,
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null;,
    FID: null;,
    FCP: null;,
    LCP: null;,
    TTFB: null;
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {// Measure Core Web Vitals;
    getCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    });

    getFID((metric) => {setMetrics(prev => ({ ...prev, FID: metric.value }));
    });

    getFCP((metric) => {setMetrics(prev => ({ ...prev, FCP: metric.value }));
    });

    getLCP((metric) => {setMetrics(prev => ({ ...prev, LCP: metric.value }));
    });

    getTTFB((metric) => {setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    });

    // Monitor performance in development;
    if (process.env.NODE_ENV === 'development') {const handleKeyPress = (e: KeyboardEvent) => {,
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {,
          setIsVisible(prev => !prev);
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const getScoreColor = (value: number | null, thresholds: {good: number; needsImprovement: number }) => {</PerformanceMetrics>if</PerformanceMetrics></PerformanceMetrics> (value === null) return 'text-gray-400';</PerformanceMetrics>if</PerformanceMetrics></PerformanceMetrics> (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: {good: number; needsImprovement: number }) => {if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (process.env.NODE_ENV !== 'development' || !isVisible) {return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 shadow-lg z-50 max-w-sm" ></div>
      <div className="flex items-center justify-between mb-3" ></div>
        <h3 className="text-white font-semibold text-sm" >Performance Monitor</h3><button
          onClick={() =>setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs" ></button>
          ✕</button>
        </button>
      </div>
      
      <div className="space-y-2 text-xs" >
        <div className="flex justify-between items-center" >
          <span className="text-gray-300" >CLS:<span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>{metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center" >
          <span className="text-gray-300" >FID:<span className={getScoreColor(metrics.FID, { good: 100, needsImprovement: 300 })}>{metrics.FID ? `${metrics.FID.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FID, { good: 100, needsImprovement: 300 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center" >
          <span className="text-gray-300" >FCP:<span className={getScoreColor(metrics.FCP, { good: 1800, needsImprovement: 3000 })}>{metrics.FCP ? `${metrics.FCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FCP, { good: 1800, needsImprovement: 3000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center" >
          <span className="text-gray-300" >LCP:<span className={getScoreColor(metrics.LCP, { good: 2500, needsImprovement: 4000 })}>{metrics.LCP ? `${metrics.LCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.LCP, { good: 2500, needsImprovement: 4000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center" >
          <span className="text-gray-300" >TTFB:<span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>{metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})</span>
      <div className="space-y-2 text-xs" ></div>
        <div className="flex justify-between items-center" ></div>
          <span className="text-gray-300" >CLS:</span><span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>{metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center" ></div>
          <span className="text-gray-300" >FID:</span><span className={getScoreColor(metrics.FID, { good: 100, needsImprovement: 300 })}>{metrics.FID ? `${metrics.FID.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FID, { good: 100, needsImprovement: 300 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center" ></div>
          <span className="text-gray-300" >FCP:</span><span className={getScoreColor(metrics.FCP, { good: 1800, needsImprovement: 3000 })}>{metrics.FCP ? `${metrics.FCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FCP, { good: 1800, needsImprovement: 3000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center" ></div>
          <span className="text-gray-300" >LCP:</span><span className={getScoreColor(metrics.LCP, { good: 2500, needsImprovement: 4000 })}>{metrics.LCP ? `${metrics.LCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.LCP, { good: 2500, needsImprovement: 4000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center" ></div>
          <span className="text-gray-300" >TTFB:</span><span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>{metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})</span>
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700" >
        <p className="text-xs text-gray-400" >Press Ctrl+Shift+P to toggle</p>
        <p className="text-xs text-gray-400" >
          Press Ctrl+Shift+P to toggle;
        </p>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;

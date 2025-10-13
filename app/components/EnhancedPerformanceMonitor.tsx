import React from 'react';

interface PerformanceMetrics 
}

interface PerformanceMonitorProps 
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps /> = (
}) => 
        const vitals: Partial<PerformanceMetrics /> = {};

        // Get FCP
        onFCP((metric: any) => 
        });

        // Get LCP
        onLCP((metric: any) => 
        });

        // Get INP (replaces FID)
        onINP((metric: any) => 
        });

        // Get CLS
        onCLS((metric: any) => 
        });

        // Get TTFB
        onTTFB((metric: any) => 
        });

        // Measure additional metrics
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        
        // Calculate Total Blocking Time
        const longTasks = performance.getEntriesByType('longtask');
        const totalBlockingTime = longTasks.reduce((total, task) => 
        }, 0);

        const finalMetrics: PerformanceMetrics = 
        };

        setMetrics(finalMetrics);
        setIsLoading(false);

        // Send metrics to analytics (if available)
        if (typeof window !== 'undefined' && window.gtag) 
            }
          });
        }
      } catch 
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') 
    } else 
    }

    return () => 
    };
  }, []);

  // Only show in development or if explicitly enabled
  if ((process.env.NODE_ENV !== 'development' && !showInProduction) || !metrics) 
  }

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => 
  };

  const getScoreText = (value: number, thresholds: { good: number; needsImprovement: number }) => 
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" /></div>
      <button
        onClick={() = /> setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
      >
        <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} /></div>
        <span />Performance</span>
      </button>
      
      
              onClick={() =></butto> setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4 text-sm" /></div>
            {/* LCP */}
            <div className="space-y-1" /></div>
              <div className="flex justify-between items-center" /></div>
                <span className="text-gray-600 font-medium" />LCP (Largest Contentful Paint)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}`} /></span>
                  {metrics.largestContentfulPaint.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500" /></div>
                {getScoreText(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}
              </div>
            </div>

            {/* FID */}
            <div className="space-y-1" /></div>
              <div className="flex justify-between items-center" /></div>
                <span className="text-gray-600 font-medium" />FID (First Input Delay)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}`} /></span>
                  {metrics.firstInputDelay.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500" /></div>
                {getScoreText(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}
              </div>
            </div>

            {/* CLS */}
            <div className="space-y-1" /></div>
              <div className="flex justify-between items-center" /></div>
                <span className="text-gray-600 font-medium" />CLS (Cumulative Layout Shift)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}`} /></span>
                  {metrics.cumulativeLayoutShift.toFixed(3)}
                </span>
              </div>
              <div className="text-xs text-gray-500" /></div>
                {getScoreText(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}
              </div>
            </div>

            {/* FCP */}
            <div className="space-y-1" /></div>
              <div className="flex justify-between items-center" /></div>
                <span className="text-gray-600 font-medium" />FCP (First Contentful Paint)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}`} /></span>
                  {metrics.firstContentfulPaint.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500" /></div>
                {getScoreText(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}
              </div>
            </div>

            {/* TTFB */}
            <div className="space-y-1" /></div>
              <div className="flex justify-between items-center" /></div>
                <span className="text-gray-600 font-medium" />TTFB (Time to First Byte)</span>
                <span className={`font-mono font-bold ${getScoreColor(metrics.timeToFirstByte, { good: 800, needsImprovement: 1800 })}`} /></span>
                  {metrics.timeToFirstByte.toFixed(0)}ms
                </span>
              </div>
              <div className="text-xs text-gray-500" /></div>
                {getScoreText(metrics.timeToFirstByte, { good: 800, needsImprovement: 1800 })}
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="border-t pt-3 space-y-2" /></div>
              <div className="flex justify-between" /></div>
                <span className="text-gray-600" />Load Time:</span>
                <span className="font-mono" />{metrics.loadTime.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between" /></div>
                <span className="text-gray-600" />Total Blocking Time:</span>
                <span className="font-mono" />{metrics.totalBlockingTime.toFixed(0)}ms</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;

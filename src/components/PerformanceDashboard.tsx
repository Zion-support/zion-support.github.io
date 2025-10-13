<<<<<<< HEAD
=======
'use client';
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react';
interface PerformanceMetrics {
    loadTime: number;
  renderTime: number
  memoryUsage: number
  fps: number,
  [key: string]: number
  }
interface PerformanceProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  }
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  });
<<<<<<< HEAD
fps
      }
=======

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.fetchStart
        : 0;
      
      // Measure render time
      const renderStart = performance.now();
      const renderTime = performance.now() - renderStart;
      // Measure memory usage
      let memoryUsage = 0;
      if ('memory' in performance) {
        const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
        memoryUsage = memory?.usedJSHeapSize || 0;
      }
      
      // Measure FPS (simplified)
      let fps = 0;
      if ('requestAnimationFrame' in window) {
        let lastTime = performance.now();
        let frameCount = 0;
        const measureFPS = (currentTime: number) => {
          frameCount++;
          if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
          }
          requestAnimationFrame(measureFPS);
        };
        requestAnimationFrame(measureFPS);
      }
      
      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        fps
      });
    });

    try {/* TODO: Fix JSX expression */}
  s: ['paint'] });
      return () => observer.disconnect();
    } catch (error) {/* TODO: Fix JSX expression */}
    }
  }, []);

  useEffect(() => {/* TODO: Fix JSX expression */}
    }
  }, [metrics, onMetricsUpdate]);

  return null;
};

export default PerformanceDashboard;
<<<<<<< HEAD



>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
  </div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>
=======
interface PerformanceMetrics {/* TODO: Fix JSX expression */}
  O: Add content;};
};
  loadTim,
  e: number;,
    renderTim,
  e: number;,
    memoryUsag,
  e: number;,
    fp,
  s: number;
};
interface PerformanceMetrics {/* TODO: Fix JSX expression */}
  O: Add content;};
};
  loadTime: number;,
    renderTime: number;,
    memoryUsage: number;,
    fps: number;
  [key: string]: number;
};
const,
  PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {/* TODO: Fix JSX expression */}
  });
  useEffect(() => {/* TODO: Fix JSX expression */}
  p: entry.startTime }));
        };
      });
    });
    try {/* TODO: Fix JSX expression */}
  s: ['paint'] });
      return () => observer.disconnect();
    } catch (error) {/* TODO: Fix JSX expression */}
    };
  }, []);
  useEffect(() => {/* TODO: Fix JSX expression */}
    };
  }, [metrics, onMetricsUpdate]);
  return null;
};
export default PerformanceDashboard;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

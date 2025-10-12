'use client';


  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

  });

    if (typeof window === 'undefined' || !('performance' in window)) return () => {};
    if (typeof PerformanceObserver === 'undefined') return () => {};

    const observers: PerformanceObserver[] = [];

    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByName('first-contentful-paint') || [];
    const fcp = fcpEntries.length > 0 ? fcpEntries[0].startTime : null;

    // Measure Largest Contentful Paint (LCP)
        
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
        console.warn('LCP observer error:', error);
      }
    }

    // Measure First Input Delay (FID)
        
          const entries = list.getEntries();
              entry.entryType === 'first-input' &&
              'processingStart' in entry &&
              'startTime' in entry
              const fidEntry = entry as PerformanceEventTiming;
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);
        console.warn('FID observer error:', error);
      }
    }

    // Measure Cumulative Layout Shift (CLS)
        let clsValue = 0;
        
          const entries = list.getEntries();
              entry.entryType === 'layout-shift' &&
              'hadRecentInput' in entry &&
              'value' in entry
              const clsEntry = entry as LayoutShift;
                clsValue += clsEntry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
        console.warn('CLS observer error:', error);
      }
    }

    // Measure Time to First Byte (TTFB)
      const navigationEntries = performance.getEntriesByType?.('navigation') || [];
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      
        : null;

      // Measure Memory Usage
      
          .memory?.usedJSHeapSize || null;

      }));
      console.warn('Performance measurement error:', error);
    }

    // Cleanup observers
          observer.disconnect();
          console.warn('Observer disconnect error:', error);
        }
      });
    };
  }, []);

    if (typeof window === 'undefined' || !('performance' in window)) return;

    const resources = performance.getEntriesByType('resource');
    
    );

        }))
      );
    }
  }, []);

    if (typeof window === 'undefined') return () => {};

    // Use web-vitals library if available
      import('web-vitals')
          const { onCLS, onFCP, onLCP, onTTFB } = webVitals;

            onCLS((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, cls: metric.value }))
            );
          }
            onFCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, fcp: metric.value }))
            );
          }
            onLCP((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, lcp: metric.value }))
            );
          }
            onTTFB((metric: { value: number }) =>
              setMetrics(prev => ({ ...prev, ttfb: metric.value }))
            );
          }
        })
          // web-vitals not available, continue without it
        });
      // web-vitals not available, continue without it
    }
    
      // Cleanup function for web-vitals
    };
  }, []);

    if (!enableRealTimeMonitoring) return () => {};

    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    
      measureResourceTiming();
    }, 5000);

      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [
  ]);

      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Performance recommendations
  
    const recommendations: string[] = [];

        'First Contentful Paint is slow. Consider optimizing critical rendering path.'
      );
    }

        'Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.'
      );
    }

        'First Input Delay is high. Reduce JavaScript execution time.'
      );
    }

        'Cumulative Layout Shift is high. Ensure stable layout and avoid dynamic content insertion.'
      );
    }

        'Time to First Byte is slow. Optimize server response time.'
      );
    }

    return recommendations;
  }, [metrics]);

  const _recommendations = getPerformanceRecommendations();

      <div className='fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm z-50'>
        <h3 className='font-semibold text-sm mb-2'>Performance Monitor</h3>
        <div className='text-xs space-y-1'>
          <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
          <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
          <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
          <div>
            TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </div>
          <div>
            Memory:{' '}
            {metrics.memory
              ? `${(metrics.memory / 1024 / 1024).toFixed(1)}MB`
              : 'N/A'}
          </div>
        </div>
          <div className='mt-2'>
            <h4 className='font-semibold text-xs text-red-600'>
              Recommendations:
            </h4>
            <ul className='text-xs text-red-600'>
                <li key={index}>• {rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default AdvancedPerformanceMonitor;

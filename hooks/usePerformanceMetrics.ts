interface PerformanceMetrics {/* TODO: Fix JSX expression */};
};
export function usePerformanceMetrics() {/* TODO: Fix JSX expression */};
};
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {/* TODO: Fix JSX expression */};
    };
    setIsSupported(true);
    // First Contentful Paint;
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      const _fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
<<<<<<< HEAD
  p: fcpEntry.startTime }));
      }
=======
  p: fcpEntry.startTime }))};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    }).observe({/* TODO: Fix JSX expression */})
  s: ['paint'] });
    // Largest Contentful Paint;
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      const _lastEntry = entries[entries.length - 1];
<<<<<<< HEAD
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    }).observe({ entryTypes: ['largest-contentful-paint'] });

=======
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))}).observe({ entryTypes: ['largest-contentful-paint'] });
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // First Input Delay;
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      entries.forEach(entry => {)
        const _inputEntry = entry as PerformanceEventTiming;)
        setMetrics(prev => ({)
          ...prev)
          fid: inputEntry.processingStart - inputEntry.startTime),
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
  p: lastEntry.startTime }));
    }).observe({/* TODO: Fix JSX expression */})
  s: ['largest-contentful-paint'] });
    // First Input Delay;
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
        }));
      });
    }).observe({/* TODO: Fix JSX expression */})
  s: ['first-input'] });
    // Cumulative Layout Shift;
    let _clsValue = 0;
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      entries.forEach(entry => {)
        const layoutEntry = entry as PerformanceEntry & {)
          hadRecentInput?: boolean;)
          value?: number;)
        })
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value || 0;
<<<<<<< HEAD
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */}
        })
        if (!layoutEntry.hadRecentInput) {/* TODO: Fix JSX expression */}
        }
=======
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */};
        };)
        if (!layoutEntry.hadRecentInput) {/* TODO: Fix JSX expression */};
        };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      });
      setMetrics(prev => ({/* TODO: Fix JSX expression */})
  s: clsValue }));
    }).observe({/* TODO: Fix JSX expression */})
  s: ['layout-shift'] });
    // Time to First Byte;
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      const ttfbEntry = entries.find(entry =>)
        entry.name.includes('document')
      ) as PerformanceNavigationTiming;
      if (ttfbEntry) {
        setMetrics(prev => ({)
          ...prev)
          ttfb: ttfbEntry.responseStart - ttfbEntry.requestStart),
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
<<<<<<< HEAD
        }));
      }
    }).observe({/* TODO: Fix JSX expression */})
  s: ['navigation'] });
  }, []);

  return { metrics, isSupported }
}
=======
        }))};
    }).observe({/* TODO: Fix JSX expression */})
  s: ['navigation'] })}, []);
  return { metrics, isSupported }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7

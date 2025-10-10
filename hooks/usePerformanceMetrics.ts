
interface PerformanceMetrics {/* TODO: Fix JSX expression */}
}

export function usePerformanceMetrics() {/* TODO: Fix JSX expression */}
}
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {/* TODO: Fix JSX expression */}
    }

    setIsSupported(true);

    // First Contentful Paint;
<<<<<<< HEAD
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      const _fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
=======
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
  p: fcpEntry.startTime }));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      }
    }).observe({/* TODO: Fix JSX expression */})
  s: ['paint'] });

    // Largest Contentful Paint;
<<<<<<< HEAD
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      const _lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay;
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      entries.forEach(entry => {)
        const _inputEntry = entry as PerformanceEventTiming;)
        setMetrics(prev => ({)
          ...prev)
          fid: inputEntry.processingStart - inputEntry.startTime),
=======
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
  p: lastEntry.startTime }));
    }).observe({/* TODO: Fix JSX expression */})
  s: ['largest-contentful-paint'] });

    // First Input Delay;
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
        }));
      });
    }).observe({/* TODO: Fix JSX expression */})
  s: ['first-input'] });

    // Cumulative Layout Shift;
    let _clsValue = 0;
<<<<<<< HEAD
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      entries.forEach(entry => {)
        const layoutEntry = entry as PerformanceEntry & {)
          hadRecentInput?: boolean;)
          value?: number;)
        };)
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value || 0;
=======
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */}
        };)
        if (!layoutEntry.hadRecentInput) {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
        }
      });
      setMetrics(prev => ({/* TODO: Fix JSX expression */})
  s: clsValue }));
    }).observe({/* TODO: Fix JSX expression */})
  s: ['layout-shift'] });

    // Time to First Byte;
<<<<<<< HEAD
    new PerformanceObserver(list => {)
      const _entries = list.getEntries();
      const ttfbEntry = entries.find(entry =>)
        entry.name.includes('document')
      ) as PerformanceNavigationTiming;
      if (ttfbEntry) {
        setMetrics(prev => ({)
          ...prev)
          ttfb: ttfbEntry.responseStart - ttfbEntry.requestStart),
=======
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
        }));
      }
    }).observe({/* TODO: Fix JSX expression */})
  s: ['navigation'] });
  }, []);

  return { metrics, isSupported };
}

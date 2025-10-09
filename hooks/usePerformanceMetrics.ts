
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
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
  p: fcpEntry.startTime }));
      }
    }).observe({/* TODO: Fix JSX expression */})
  s: ['paint'] });

    // Largest Contentful Paint;
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
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */}
        };)
        if (!layoutEntry.hadRecentInput) {/* TODO: Fix JSX expression */}
        }
      });
      setMetrics(prev => ({/* TODO: Fix JSX expression */})
  s: clsValue }));
    }).observe({/* TODO: Fix JSX expression */})
  s: ['layout-shift'] });

    // Time to First Byte;
    new PerformanceObserver(list => {/* TODO: Fix JSX expression */})
        }));
      }
    }).observe({/* TODO: Fix JSX expression */})
  s: ['navigation'] });
  }, []);

  return { metrics, isSupported };
}

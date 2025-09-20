  
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });

      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });


    // Get initial metrics after page load


  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);

      observerRef.current = null;
    }

      lcpObserverRef.current = null;
    }

  const getPerformanceScore = useCallback(() => {
    let score = 100;

      else score -= 25;
    }

      else score -= 25;
    }

      else score -= 25;
    }

      else score -= 25;
    }

    return Math.max(0, score);
  }, [metrics]);

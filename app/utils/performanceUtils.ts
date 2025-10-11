// Measure page load time;
    window.addEventListener('load', () => 
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;}});
// Measure Core Web Vitals;
    this.measureCoreWebVitals();
  }
private measureCoreWebVitals(): void {// First Contentful Paint;}
    this.observePaint('first-contentful-paint', (entry) => 
      this.metrics.firstContentfulPaint = entry.startTime;}});
// Largest Contentful Paint;
    this.observeLCP();
// First Input Delay;
    this.observeFID();
// Cumulative Layout Shift;
    this.observeCLS();
    if (typeof window === 'undefined' || !('performance' in window)) return
// Measure page load time
    window.addEventListener('load', () => 
  }
    });
// Measure Core Web Vitals
    this.measureCoreWebVitals()
  }
private measureCoreWebVitals(): void 
  }
    });
// Largest Contentful Paint
    this.observeLCP()
// First Input Delay
    this.observeFID()
// Cumulative Layout Shift
    this.observeCLS()
  }
private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void {,}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return,
try {const observer = new PerformanceObserver((list) => {}
        for (const entry of list.getEntries()) 
            callback(entry)}}
        }
      });
  }
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1]
        this.metrics.largestContentfulPaint = lastEntry.startTime;}});
      observer.observe({entryTypes: ['largest-contentful-paint'] ,)});
      this.observers.push(observer);
    } catch (error) {console.warn('LCP observer not supported:', error)}}
  }
private observeFID(): void {if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;}
try {const observer = new PerformanceObserver((list) => {}
      const observer = new PerformanceObserver((list) => 
  }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer)
    } catch (error) 
  }
    }
  }
private observeFID(): void 
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;}}
      });
      const observer = new PerformanceObserver((list) => 
            clsValue += (entry as any).value;}}
        }
        this.metrics.cumulativeLayoutShift = clsValue
      });
    }
return result
  }) as T
}
export const debounce = </T><T extends (...args: any[]) => any>(,
  func: T,
    clearTimeout(timeout),
    timeout = setTimeout(() => func(...args), wait)}}) as T;
    let timeout: NodeJS.Timeout
return (
    <>
      (...args: Parameters</T><T>
    </>
  ) => 
  }
  }) as T
}
export const throttle = </T><T extends (...args: any[]) => any>(,
  func: T,
}
export const lazyLoad = (callback: () => void): void => 
    requestIdleCallback(callback)}} else {setTimeout(callback, 1)}}}
}
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;}});
}
    return Promise.all(srcs.map(preloadImage))
  }
}</void>
  private observers: PerformanceObserver[] = []
  constructor() 
    this.initializeMetrics();}
  }

  private initializeMetrics(): void 
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;}
    });
    // Measure Core Web Vitals
    this.measureCoreWebVitals()
  }

  private measureCoreWebVitals(): void 
      this.metrics.firstContentfulPaint = entry.startTime;}
    });
    // Largest Contentful Paint
    this.observeLCP()
    // First Input Delay
    this.observeFID()
    // Cumulative Layout Shift
    this.observeCLS()
  }

  private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void 
            callback(entry);}
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer)
    } catch (error) 
      console.warn('PerformanceObserver not supported:', error);}
    }
  }

  private observeLCP(): void 
        this.metrics.largestContentfulPaint = lastEntry.startTime;}
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer)
    } catch (error) 
      console.warn('LCP observer not supported:', error);}
    }
  }

  private observeFID(): void 
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;}
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer)
    } catch (error) 
      console.warn('FID observer not supported:', error);}
    }
  }

  private observeCLS(): void 
            clsValue += (entry as any).value;}
          }
        }
        this.metrics.cumulativeLayoutShift = clsValue
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer)
    } catch (error) 
      console.warn('CLS observer not supported:', error);}
    }
  }

  public getMetrics(): PerformanceMetrics {}
    return { ...this.metrics }
  }

  public getLoadTime(): number 
    return this.metrics.loadTime;}
  }

  public getFirstContentfulPaint(): number 
    return this.metrics.firstContentfulPaint;}
  }

  public getLargestContentfulPaint(): number 
    return this.metrics.largestContentfulPaint;}
  }

  public getFirstInputDelay(): number 
    return this.metrics.firstInputDelay;}
  }

  public getCumulativeLayoutShift(): number 
    return this.metrics.cumulativeLayoutShift;}
  }

  public isPerformanceGood(): boolean 
    );}
  }

  public cleanup(): void 
  }
}

export const performanceMonitor = new PerformanceMonitor()
// Utility functions
export const measureFunction = <T extends (...args: any[]) => any>(
  fn: T,
  name?: string
): T => 
    if (name) {}
      console.log(`${name} took ${end - start} milliseconds`)
    }

    return result
  }) as T
}
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => 
    timeout = setTimeout(() => func(...args), wait);}
  }) as T
}
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T => 
      setTimeout(() => inThrottle = false, limit);}
    }
  }) as T
}
export const lazyLoad = (callback: () => void): void => 
    requestIdleCallback(callback);}
  } else 
    setTimeout(callback, 1);}
  }
}
export const preloadImage = (src: string): Promise<void> => 
    img.src = src;}
  });
}
export const preloadImages = (srcs: string[]): Promise<void[]> => 
  return Promise.all(srcs.map(preloadImage));}
}

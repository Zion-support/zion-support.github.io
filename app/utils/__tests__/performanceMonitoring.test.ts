// Mock performance monitoring utilities,
export const measurePerformance = (name: string, fn: () => void): number => {
  const start = performance.now()
  );
  fn()
  );
  const end = performance.now()
  );
  return end - start
  );
}
export const logPerformance = (name: string, duration: number): void => {
  // console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`)``
  );
}
export const createPerformanceObserver = (callback: (entry: PerformanceEntry) => void) => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {'
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(callback)
  );
    })
  );
    return observer
  );
  }
  return null
  );
}
  );
describe('Performance Monitoring Utils', () => {'
  describe('measurePerformance', () => {'
    it('measures execution time of a function', () => {'
      const mockFn = jest.fn()
  );
      const duration = measurePerformance('test', mockFn)'
  );
      expect(typeof duration).toBe('number')'
  );
      expect(duration).toBeGreaterThanOrEqual(0)
  );
      expect(mockFn).toHaveBeenCalledTimes(1)
  );
    })
  );
    it('returns 0 for very fast functions', () => {'
      const duration = measurePerformance('fast', () => {})'
  );
      expect(duration).toBeGreaterThanOrEqual(0)
  );
    })
  );
  })
  );
  describe('logPerformance', () => {'
    it('logs performance metrics', () => {'
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()'
  );
      logPerformance('test', 100.5)'
  );
      expect(consoleSpy).toHaveBeenCalledWith('Performance: test took 100.50ms')'
  );
      consoleSpy.mockRestore()
  );
    })
  );
  })
  );
  describe('createPerformanceObserver', () => {'
    it('creates observer when PerformanceObserver is available', () => {'
      const mockCallback = jest.fn()
  );
      const observer = createPerformanceObserver(mockCallback)
  );
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {'
        expect(observer).toBeTruthy()
  );
      } else {
        expect(observer).toBeNull()
  );
      }
    })
  );
  })
  );
})
  );
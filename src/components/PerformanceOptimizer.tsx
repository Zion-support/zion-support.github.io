import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  onVisible?: () => void;
  onHidden?: () => void;
  priority?: 'low' | 'medium' | 'high';
  preload?: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  fps: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'fade',
  onVisible,
  onHidden,
  priority = 'medium',
  preload = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const loadStartTime = useRef<number>(Date.now());
  const frameCount = useRef<number>(0);
  const lastTime = useRef<number>(performance.now());

  // Intersection Observer for visibility detection
  const isInView = useInView(ref, {
    threshold,
    rootMargin,
    once: priority === 'high' ? false : true
  });

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const measurePerformance = () => {
        const now = performance.now();
        const loadTime = now - loadStartTime.current;
        
        // Calculate FPS
        frameCount.current++;
        if (now - lastTime.current >= 1000) {
          const fps = Math.round((frameCount.current * 1000) / (now - lastTime.current));
          frameCount.current = 0;
          lastTime.current = now;
          
          setMetrics(prev => ({
            ...prev,
            loadTime,
            fps
          }));
        }
      };

      const interval = setInterval(measurePerformance, 100);
      return () => clearInterval(interval);
    }
  }, []);

  // Memory usage monitoring (if available)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      if (memory) {
        const updateMemoryUsage = () => {
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
          }));
        };
        
        const interval = setInterval(updateMemoryUsage, 5000);
        return () => clearInterval(interval);
      }
    }
  }, []);

  // Handle visibility changes
  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      onVisible?.();
      
      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        setMetrics(prev => ({
          ...prev,
          renderTime
        }));
      });
    } else if (!isInView && isVisible) {
      setIsVisible(false);
      onHidden?.();
    }
  }, [isInView, isVisible, onVisible, onHidden]);

  // Preloading logic
  useEffect(() => {
    if (preload && priority === 'high') {
      setIsLoaded(true);
    }
  }, [preload, priority]);

  // Animation variants based on direction
  const animationVariants = useMemo(() => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    };

    switch (direction) {
      case 'up':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: 50 },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case 'down':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: -50 },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case 'left':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: 50 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'right':
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -50 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      default:
        return baseVariants;
    }
  }, [direction, duration, delay]);

  // Lazy loading with priority
  const shouldRender = useMemo(() => {
    if (priority === 'high') return true;
    if (priority === 'medium') return isInView;
    return isVisible;
  }, [priority, isInView, isVisible]);

  // Performance optimization: debounced visibility update
  const debouncedSetVisible = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (visible: boolean) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(visible);
        }, 100);
      };
    })(),
    []
  );

  // Handle intersection observer manually for better control
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            debouncedSetVisible(true);
          } else if (priority !== 'high') {
            debouncedSetVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, priority, debouncedSetVisible]);

  // Performance debugging (only in development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && metrics) {
      console.log('Performance Metrics:', {
        component: 'PerformanceOptimizer',
        loadTime: `${metrics.loadTime.toFixed(2)}ms`,
        renderTime: metrics.renderTime ? `${metrics.renderTime.toFixed(2)}ms` : 'N/A',
        fps: metrics.fps || 'N/A',
        memoryUsage: metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(2)}MB` : 'N/A'
      });
    }
  }, [metrics]);

  if (!shouldRender && priority !== 'high') {
    return (
      <div 
        ref={ref} 
        className={`performance-optimizer-placeholder ${className}`}
        style={{ 
          minHeight: '100px',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'loading 1.5s infinite'
        }}
      />
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`performance-optimizer ${className}`}
      variants={animationVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onAnimationComplete={() => {
        if (isVisible && !isLoaded) {
          setIsLoaded(true);
        }
      }}
    >
      {children}
      
      {/* Performance overlay (development only) */}
      {process.env.NODE_ENV === 'development' && metrics && (
        <div className="performance-overlay">
          <div className="performance-metrics">
            <span>Load: {metrics.loadTime.toFixed(0)}ms</span>
            {metrics.renderTime && (
              <span>Render: {metrics.renderTime.toFixed(0)}ms</span>
            )}
            {metrics.fps && <span>FPS: {metrics.fps}</span>}
            {metrics.memoryUsage && (
              <span>Memory: {metrics.memoryUsage.toFixed(1)}MB</span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

// HOC for performance optimization
export const withPerformanceOptimization = <P extends object>(
  Component: React.ComponentType<P>,
  options: Omit<PerformanceOptimizerProps, 'children'> = {}
) => {
  return React.forwardRef<any, P>((props, ref) => (
    <PerformanceOptimizer {...options}>
      <Component {...props} ref={ref} />
    </PerformanceOptimizer>
  ));
};

// Hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    // Implementation for performance monitoring
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring
  };
};

// CSS for loading animation
const loadingStyles = `
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  .performance-overlay {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    font-size: 12px;
    border-radius: 4px;
    z-index: 1000;
  }
  
  .performance-metrics {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  
  .performance-metrics span {
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = loadingStyles;
  document.head.appendChild(style);
}

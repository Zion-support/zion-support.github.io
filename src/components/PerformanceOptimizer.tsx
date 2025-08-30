<<<<<<< HEAD
import React, { useEffect, useCallback, useRef } from 'react';
=======
import React, { useEffect, useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  Activity, 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu
} from 'lucide-react';

// Simple Progress component
const Progress: React.FC<{ value: number; className?: string }> = ({ value, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
      style = {
  { width: `${Math.min(100, Math.max(0,
  value))
;
;
;


}%` }};
    />;
  </div>;
);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

<<<<<<< HEAD
export const PerformanceOptimizer: React.FC = () => {;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceDataRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
=======
interface OptimizationSuggestion {;
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: 'high' | 'medium' | 'low';
  estimatedSavings: string;
  category: 'performance' | 'seo' | 'accessibility' | 'best-practices';
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,;
    memoryUsage: 0,;
    cpuUsage: 0,;
    networkLatency: 0,;
    bundleSize: 0,;
    lighthouseScore: 0;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  });

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {;
    if (typeof IntersectionObserver === 'null') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {;
            const target = entry.target as HTMLElement;
            
            // Lazy load images
            if (target.tagName = == 'IMG' && target.dataset.src) {;
              target.src = target.dataset.src;
              target.classList.remove('lazy');
              observerRef.current?.unobserve(target);
            }

            // Lazy load background images
            if (target.dataset.bgSrc) {
              target.style.backgroundImage = `url(${target.dataset.bgSrc})`;
              target.classList.remove('lazy-bg');
              observerRef.current?.unobserve(target);
            }

            // Lazy load components
            if (target.dataset.component) {
              target.classList.add('loaded');
              observerRef.current?.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );
  }, []);

  // Performance monitoring
<<<<<<< HEAD
  const measurePerformance = useCallback(() => {;
    if (typeof PerformanceObserver === 'null') return;
=======
  const startMonitoring = useCallback(() => {;
    setIsMonitoring(true);
    
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loadTime: Math.random() * 3000 + 500,;
        memoryUsage: Math.random() * 100,;
        cpuUsage: Math.random() * 80,;
        networkLatency: Math.random() * 200 + 50,;
        bundleSize: Math.random() * 2000 + 500,;
        lighthouseScore: Math.random() * 40 + 60;
      }));
    }, 2000);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {;
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name = == 'first-contentful-paint') {;
          performanceDataRef.current.fcp = entry.startTime;
          console.log('FCP:', entry.startTime);
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

<<<<<<< HEAD
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {;
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        performanceDataRef.current.lcp = lastEntry.startTime;
        console.log('LCP:', lastEntry.startTime);
=======
  const stopMonitoring = useCallback(() => {;
    setIsMonitoring(false);
  }, []);

  // Generate optimization suggestions
  useEffect(() => {
    const suggestions: OptimizationSuggestion[] = [
      {
        id: '1',
        title: 'Image Optimization',
        description: 'Compress and optimize images using WebP format and lazy loading',
        priority: 'high',
        impact: 'high',
        estimatedSavings: '2-5 seconds',
        category: 'performance'
      },
      {
        id: '2',
        title: 'Code Splitting',
        description: 'Implement dynamic imports and route-based code splitting',
        priority: 'high',
        impact: 'high',
        estimatedSavings: '1-3 seconds',
        category: 'performance'
      },
      {
        id: '3',
        title: 'Bundle Analysis',
        description: 'Analyze and reduce bundle size by removing unused dependencies',
        priority: 'medium',
        impact: 'medium',
        estimatedSavings: '500KB-1MB',
        category: 'performance'
      },
      {
        id: '4',
        title: 'Caching Strategy',
        description: 'Implement service worker and aggressive caching policies',
        priority: 'medium',
        impact: 'high',
        estimatedSavings: '1-2 seconds',
        category: 'performance'
      },
      {
        id: '5',
        title: 'Critical CSS',
        description: 'Inline critical CSS and defer non-critical styles',
        priority: 'low',
        impact: 'medium',
        estimatedSavings: '200-500ms',
        category: 'performance'
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {;
      const entries = list.getEntries();
      entries.forEach((entry) => {
        performanceDataRef.current.fid = entry.processingStart - entry.startTime;
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    const clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry: ) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      performanceDataRef.current.cls = clsValue;
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      performanceDataRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', navigationEntry.responseStart - navigationEntry.requestStart);
    }
  }, []);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    // Preconnect to external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.gpteng.co';
    ];

    domains.forEach(domain = > {;
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for critical resources
    const dnsPrefetchDomains = [
      '//ziontechgroup.com',
      '//api.ziontechgroup.com';
    ];

    dnsPrefetchDomains.forEach(domain = > {;
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

<<<<<<< HEAD
  // Image optimization
  const optimizeImages = useCallback(() => {;
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img = > {;
      img.classList.add('lazy');
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s';
      
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    });
  }, []);

  // Debounced scroll handler for performance
  const debouncedScrollHandler = useCallback(
    debounce(() => {
      // Handle scroll-based optimizations;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Optimize animations based on scroll position
      const animatedElements = document.querySelectorAll('[data-animate-on-scroll]');
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('animate-in');
        }
      });
    }, 16), // ~60fps
    []
=======
  const applyOptimization = useCallback((id: string) => {;
    setActiveOptimizations(prev => [...prev, id]);
    
    // Simulate optimization process
    setTimeout(() => {
      setActiveOptimizations(prev => prev.filter(opt => opt !== id));
    }, 3000);
  }, []);

  const getPerformanceStatus = (score: number) => {;
    if (score >= 90) return { status: 'Excellent', color: 'bg-green-500', icon: CheckCircle };
    if (score >= 70) return { status: 'Good', color: 'bg-yellow-500', icon: TrendingUp };
    if (score >= 50) return { status: 'Fair', color: 'bg-orange-500', icon: AlertTriangle };
    return { status: 'Poor', color: 'bg-red-500', icon: AlertTriangle };
  };

  const performanceStatus = getPerformanceStatus(metrics.lighthouseScore);

  return (
    <div className = "space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            Performance Monitor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button 
              onClick={startMonitoring} 
              disabled={isMonitoring}
              className="flex items-center gap-2"
            >
              <Activity className="h-4 w-4" />
              Start Monitoring
            </Button>
            <Button 
              onClick={stopMonitoring} 
              disabled={!isMonitoring}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Clock className="h-4 w-4" />
              Stop Monitoring
            </Button>
          </div>

          {isMonitoring && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {metrics.loadTime.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-600">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {metrics.memoryUsage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Memory Usage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {metrics.cpuUsage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">CPU Usage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {metrics.networkLatency.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-600">Network Latency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {(metrics.bundleSize / 1024).toFixed(1)}KB
                </div>
                <div className="text-sm text-gray-600">Bundle Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {metrics.lighthouseScore.toFixed(0)}
                </div>
                <div className="text-sm text-gray-600">Lighthouse Score</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <Badge className={`${performanceStatus.color} text-white`}>
              {performanceStatus.status}
            </Badge>
            <div className="flex items-center gap-2">
              <performanceStatus.icon className="h-4 w-4" />
              <span className="text-sm text-gray-600">
                Score: {metrics.lighthouseScore.toFixed(0)}/100
              </span>
            </div>
          </div>
          <Progress value={metrics.lighthouseScore} className="w-full" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Optimization Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {optimizations.map((optimization) => (
              <div key={optimization.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{optimization.title}</h4>
                      <Badge variant={
                        optimization.priority === 'high' ? 'destructive' : 
                        optimization.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {optimization.priority}
                      </Badge>
                      <Badge variant="outline">{optimization.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {optimization.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-600">
                        Estimated savings: {optimization.estimatedSavings}
                      </span>
                      <span className="text-blue-600">
                        Impact: {optimization.impact}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => applyOptimization(optimization.id)}
                    disabled={activeOptimizations.includes(optimization.id)}
                    size="sm"
                    className="ml-4"
                  >
                    {activeOptimizations.includes(optimization.id) ? (
                      <>
                        <Cpu className="h-4 w-4 mr-2 animate-spin" />
                        Applying...
                      </>
                    ) : (
                      'Apply'
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {activeOptimizations.length > 0 && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {activeOptimizations.length} optimization(s) are currently being applied. ;
            This may take a few moments to complete.;
          </AlertDescription>;
        </Alert>;
      )};
    </div>;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  );

  // Debounce utility function
  function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Service Worker registration for caching
  const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    }
  }, []);

  // Initialize performance optimizations
  useEffect(() => {
    setupIntersectionObserver();
    measurePerformance();
    optimizeResourceHints();
    optimizeImages();
    registerServiceWorker();

    // Add scroll event listener
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, [setupIntersectionObserver, measurePerformance, optimizeResourceHints, optimizeImages, registerServiceWorker, debouncedScrollHandler]);

  // Add CSS for lazy loading
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .lazy {;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .lazy.loaded {
        opacity: 1;
      }
      
      .lazy-bg {
        background-image: none !important;
      }
      
      .lazy-bg.loaded {
        background-image: inherit !important;
      }
      
      [data-animate-on-scroll] {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      [data-animate-on-scroll].animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Performance-focused animations */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceOptimizer;

export default function
  function;
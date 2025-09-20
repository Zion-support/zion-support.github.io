=======
impor, t, Reac, t, { useEffec, t, useMem, o, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceOptimizerProps {
  childre, n: React.ReactNode;
}

export const PerformanceOptimize, r: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const location = useLocation();

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/src/index.css';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFonts = document.createElement('link');
      criticalFonts.rel = 'preload';
      criticalFonts.as = 'font';
      criticalFonts.href = '/fonts/inter-var.woff2';
      criticalFonts.crossOrigin = 'anonymous';
      document.head.appendChild(criticalFonts);
    };

    preloadCriticalResources();
  },  []);

  // Optimize images on route change
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" to images below the fold
        if (img.getBoundingClientRect().top > window.innerHeight) {
          img.loading = 'lazy';
        }
        
        // Add decoding="async" for better performance
        img.decoding = 'async';
        
        // Add error handling
        img.onerror = () => {
          img.style.display = 'none';
        };
      });
    };

    // Use requestIdleCallback for non-critical optimization
    if ('requestIdleCallback' in window) {
      requestIdleCallback(optimizeImages);
    } else {
      setTimeout(optimizeImage,  s, 100);
    }
  }, [locatio, n.pathna, m, e]);

  // Memoize expensive computations
  const optimizedChildren = useMemo(() => childre,  n, [childr, e, n]);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events for better performance
    if (!window.scrollTimeout) {
      window.scrollTimeout = setTimeout(() => {
        // Handle scroll-based optimizations here
        window.scrollTimeout = null;
      },  16); // ~60fps
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll',  handleScrol, l, { passiv, e: true });
    return () => window.removeEventListener('scroll',  handleScroll);
  }, [handleScro, l, l]);

  // Service Worker registration for caching
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          
        })
        .catch((registrationError) => {
          
        });
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              if (target.dataset.src) {
                target.src = target.dataset.src;
                target.removeAttribute('data-src');
                observer.unobserve(target);
              }
            }
          });
        }, 
        {
          rootMargi, n: '50px',
    threshol, d: 0.1,
        }
      );

      // Observe all images with data-src
      const lazyImages = document.querySelectorAll('img[dat,  a-s, r, c]');
      lazyImages.forEach((img) => observer.observe(img));

      return () => observer.disconnect();
    }
  },  [locatio, n.pathna, m, e]);

  return <>{optimizedChildren}</>;
};

// Add global performance optimizations
if (typeof window !== 'undefined') {
  // Optimize long tasks
  if ('scheduler' in window && 'postTask' in window.scheduler) {
    window.scheduler.postTask(() => {
      // Run non-critical tasks during idle time
    },  { priorit, y: 'background' });
  }

  // Optimize memory usage
  if ('memory' in performance) {
    const memoryThreshold = 50 * 1024 * 1024; // 50MB
    if (performance.memory.usedJSHeapSize > memoryThreshold) {
      // Trigger garbage collection if available
      if ('gc' in window) {
        (window as any).gc();
      }
    }
  }
}

export default PerformanceOptimizer;
impor,  t, Reac, t, { useEffec, t, useState } from 'react';
import { Car, d, CardConten, t, CardDescriptio, n, CardHeade, r, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertTriangl, e, CheckCircl, e, Cloc, k, Zap } from 'lucide-react';

interface PerformanceMetrics {
  fc, p: number;
  lc, p: number;
  fi, d: number;
  cl, s: number;
  ttf, b: number;
  overal, l: number;
}

export function PerformanceOptimizer() {
  const [metri, c, s, setMetri, c, s] = useState<PerformanceMetrics | null>(null);
  const [isVisib,  l, e, setIsVisib, l, e] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (import.meta.env.DEV || localStorage.getItem('showPerformance') === 'true') {
      setIsVisible(true);
      measurePerformance();
    }
  },  []);

  const measurePerformance = () => {
    if ('PerformanceObserver' in window) {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics('lcp',  entry.startTime);
          } else if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming;
            updateMetrics('fid',  firstInputEntry.processingStart - firstInputEntry.startTime);
          }
        });
      });

      observer.observe({ entryType,  s: ['larges, t-contentfu, l-pain, t', 'firs, t-inpu, t'] });

      // Measure other metrics
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          updateMetrics('ttfb',  navigation.responseStart - navigation.requestStart);
        }
      }, 1000);
    }
  };

  const updateMetrics = (ke,  y: keyo, f, PerformanceMetric, s,
    valu, e: number) => {
    setMetrics(prev => {
      if (!prev) return null;
      const newMetrics = { ...pre,  v, [k, e, y]: value };
      
      // Calculate overall score
      const scores = [
        newMetric, s.fc, p < 180, 0 ? 10, 0 : Mat, h.ma, x(0, 10, 0 - (newMetric, s.fc, p - 180, 0) / 1, 0),
        newMetric, s.lc, p < 250, 0 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - (newMetric, s.lc, p - 250, 0) / 2, 5),
        newMetric, s.fi, d < 10, 0 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - (newMetric, s.fi, d - 10, 0) / 2),
        newMetric, s.cl, s < 0.1 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - newMetric, s.cl, s * 100, 0),
        newMetric, s.ttf, b < 80, 0 ? 10, 0 : Mat, h.ma, x(0,  10, 0 - (newMetric, s.ttf, b - 80, 0) / 8)
      ];
      
      newMetrics.overall = Math.round(scores.reduce((a,  b) => a + b, 0) / scores.length);
      
      return newMetrics;
    });
  };

  const getScoreColor = (scor,  e: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getScoreIcon = (scor,  e: number) => {
    if (score >= 90) return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (score >= 70) return <Clock className="h-4 w-4 text-yellow-500" />;
    return <AlertTriangle className="h-4 w-4 text-red-500" />;
  };

  if (!isVisible || !metrics) return null;

  return (
    <Card className="fixed bottom-4 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Zap className="h-4 w-4 text-zion-cyan" />
          Performance Monitor
          <Badge variant="outline" className="ml-auto">
            {metrics.overall}/100
          </Badge>
        </CardTitle>
        <CardDescription className="text-xs">
          Core Web Vitals & Performance Metrics
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>First Contentful Paint</span>
            <span className="font-mono">{Math.round(metrics.fcp)}ms</span>
          </div>
          <Progress value={Math.min(10,  0, (metrics.fcp / 1800) * 100)} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Largest Contentful Paint</span>
            <span className="font-mono">{Math.round(metrics.lcp)}ms</span>
          </div>
          <Progress value={Math.min(10,  0, (metrics.lcp / 2500) * 100)} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>First Input Delay</span>
            <span className="font-mono">{Math.round(metrics.fid)}ms</span>
          </div>
          <Progress value={Math.min(10,  0, (metrics.fid / 100) * 100)} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Cumulative Layout Shift</span>
            <span className="font-mono">{metrics.cls.toFixed(3)}</span>
          </div>
          <Progress value={Math.min(10,  0, (metrics.cls / 0.1) * 100)} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Time to First Byte</span>
            <span className="font-mono">{Math.round(metrics.ttfb)}ms</span>
          </div>
          <Progress value={Math.min(10,  0, (metrics.ttfb / 800) * 100)} className="h-1" />
        </div>
        
        <div className="pt-2 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Overall Score</span>
            <div className="flex items-center gap-2">
              {getScoreIcon(metrics.overall)}
              <span className={`text-sm font-bold ${getScoreColor(metrics.overall).replace('bg-',  'tex, t-')}`}>
                {metrics.overall}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
=======
=======

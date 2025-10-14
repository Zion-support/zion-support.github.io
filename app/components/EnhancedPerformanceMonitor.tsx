import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  totalBlockingTime: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = async () => {
      try {
        // Measure Core Web Vitals
        const vitals: Partial<PerformanceMetrics> = {};

        // Get FCP
        onFCP((metric: any) => {
          vitals.firstContentfulPaint = metric.value;
        });

        // Get LCP
        onLCP((metric: any) => {
          vitals.largestContentfulPaint = metric.value;
        });

        // Get INP (replaces FID)
        onINP((metric: any) => {
          vitals.firstInputDelay = metric.value;
        });

        // Get CLS
        onCLS((metric: any) => {
          vitals.cumulativeLayoutShift = metric.value;
        });

        // Get TTFB
        onTTFB((metric: any) => {
          vitals.timeToFirstByte = metric.value;
        });

        // Measure additional metrics
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        
        // Calculate Total Blocking Time
        const longTasks = performance.getEntriesByType('longtask');
        const totalBlockingTime = longTasks.reduce((total, task) => {
          return total + (task.duration - 50); // 50ms is the threshold
        }, 0);

        const finalMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : vitals.firstContentfulPaint || 0,
          largestContentfulPaint: vitals.largestContentfulPaint || 0,
          firstInputDelay: vitals.firstInputDelay || 0,
          cumulativeLayoutShift: vitals.cumulativeLayoutShift || 0,
          timeToFirstByte: vitals.timeToFirstByte || 0,
          totalBlockingTime: totalBlockingTime
        };

        setMetrics(finalMetrics);
        setIsLoading(false);

        // Send metrics to analytics (if available)
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            value: Math.round(finalMetrics.largestContentfulPaint),
            custom_map: {
              'metric_1': finalMetrics.firstContentfulPaint,
              'metric_2': finalMetrics.largestContentfulPaint,
              'metric_3': finalMetrics.firstInputDelay,
              'metric_4': finalMetrics.cumulativeLayoutShift,
              'metric_5': finalMetrics.timeToFirstByte
            }
          });
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Only show in development or if explicitly enabled
  if ((process.env.NODE_ENV !== 'development' && !showInProduction) || !metrics) {
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>EnhancedPerformanceMonitor - Zion Tech Group</title>
        <meta name="description" content="Professional enhancedperformancemonitor services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            EnhancedPerformanceMonitor</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional enhancedperformancemonitor solutions tailored to your business needs.</p>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions;
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge enhancedperformancemonitor solutions.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation;
              </h3>
              <p className="text-green-700">
                Tailored enhancedperformancemonitor implementations for your specific requirements.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support;
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your enhancedperformancemonitor needs.</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today,
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
            EnhancedPerformanceMonitor</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional enhancedperformancemonitor solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge enhancedperformancemonitor solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored enhancedperformancemonitor implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your enhancedperformancemonitor needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
)}
            </button>
          </div>
        </div>
      </div>
    </div>
)}
};

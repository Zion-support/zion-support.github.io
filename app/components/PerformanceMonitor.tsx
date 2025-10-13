



interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;}
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fcp: null,
    lcp: null,

  });

  useEffect(() => {
    // Only run in production'
    if (process.env.NODE_ENV !== 'production') return;

    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value}
      }));

      // Send to analytics service'
      if (typeof window !== 'undefined' && window.gtag) {'
        window.gtag('event', metric.name, {'
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,}
        });
      }
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  }, []);
'
  // Don't render anything in production'
  if (process.env.NODE_ENV === 'production') {
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">'}
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>'
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>'
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Loading...'}</div>'
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>'
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>


      </div>
      
      <div className="space-y-2 text-xs">

            <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {getScoreText(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}
            </span>
          </div>

        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-600">


    </div>
  );

};



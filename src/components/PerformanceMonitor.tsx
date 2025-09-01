import {

  Activity,
  Zap,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle} from 'lucide-react';
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcpScore: 'good' | 'needs-improvement' | 'poor';
  lcpScore: 'good' | 'needs-improvement' | 'poor';
  fidScore: 'good' | 'needs-improvement' | 'poor';
  clsScore: 'good' | 'needs-improvement' | 'poor';
  ttfbScore: 'good' | 'needs-improvement' | 'poor'}

interface PerformanceMonitorProps {
  // Add your props here


  showDetails?: boolean;
  threshold?: {

    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number}}
export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({

  showDetails = false,
  threshold = {

    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800}}) => {

  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);

  
      // FCP scoring (0-25 points)
      if (metrics.fcp <= threshold.fcp) score -= 0;
      else if (metrics.fcp <= threshold.fcp * 1.5) score -= 10;
      else score -= 25;

      // LCP scoring (0-25 points)
      if (metrics.lcp <= threshold.lcp) score -= 0;
      else if (metrics.lcp <= threshold.lcp * 1.5) score -= 10;
      else score -= 25;

      // FID scoring (0-25 points)
      if (metrics.fid <= threshold.fid) score -= 0;
      else if (metrics.fid <= threshold.fid * 1.5) score -= 10;
      else score -= 25;

      // CLS scoring (0-25 points)
      if (metrics.cls <= threshold.cls) score -= 0;
      else if (metrics.cls <= threshold.cls * 1.5) score -= 10;
      else score -= 25;

      return Math.max(0, score)},
    [threshold]
  );

  
      if (value <= thresholdValue) return 'good';
      if (value <= thresholdValue * 1.5) return 'needs-improvement';
      return 'poor'},
    [threshold]
  );

  
        case 'needs-improvement':'
          return 'text-yellow-400';
        case 'poor':'
          return 'text-red-400';
        default:'
          return 'text-gray-400'}
    },
    []
  );

  
        case 'needs-improvement':"
          return <AlertTriangle className="w-4 h-4"  />;
        case 'poor':"
          return <AlertTriangle className="w-4 h-4"  />;
        default:"
          return <Activity className="w-4 h-4"  />}
    },
    []
  );
  useEffect(() => {

    if ('PerformanceObserver' in window) {

      // Observe FCP

      
        
        if (fcpEntry) {

          setMetrics(prev =>
            prev ? { ...prev, fcp: fcpEntry.startTime } : null
          )}
      });'      fcpObserver.observe({ entryTypes: ['paint'] });

  
      
        
        if (lcpEntry) {

          setMetrics(prev =>
            prev ? { ...prev, lcp: lcpEntry.startTime } : null
          )}
      });'      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Observe FID

      
        
        if (fidEntry) {

          setMetrics(prev =>
            prev
              ? { ...prev, fid: fidEntry.processingStart - fidEntry.startTime }
              : null
          )}
      });'      fidObserver.observe({ entryTypes: ['first-input'] });

    if (tips.length === 0) {
      tips.push('Great performance! Keep monitoring for any regressions')}

      const clsObserver = new PerformanceObserver(list => {

        let clsValue = 0;        for (const entry of list.getEntries()) {

          if (!entry.hadRecentInput) {

            clsValue += (entry as any).value}
        }
      });

        setMetrics(prev => (prev ? { ...prev, cls: clsValue } : null))});
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Get TTFB from navigation timing
      
      if (navigationEntry) {

        
        setMetrics(prev =>
          prev ? { ...prev, ttfb } : { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb }
        )}

      return () => {
        fcpObserver.disconnect () ;
        lcpObserver.disconnect () ;
        fidObserver.disconnect () ;
        clsObserver.disconnect () }}  }, []);

  useEffect(() => {
    if (metrics) {

      
      setPerformanceScore(score)}
  }, [metrics, calculatePerformanceScore]) ;
  useEffect ( () => {
    // Show monitor after 3 seconds
    
    return () => clearTimeout (timer) }, []) ;
  if (!isVisible || !showDetails) return null;

  return()
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}"
      className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-lg p-4 shadow-xl z-50 max-w-sm"
    >"
      <div className="flex items-center justify-between mb-3">"
        <div className="flex items-center space-x-2">"
          <Activity className="w-5 h-5 text-cyan-400"  />"          <span className="text-sm font-semibold text-white">Performance</span>
        </div>"
        <div className="flex items-center space-x-2">
          <div
            className={`w-3 h-3 rounded-full ${

              performanceScore >= 90'
                ? 'bg-green-400'
                : performanceScore >= 50'
                  ? 'bg-yellow-400''
                  : 'bg-red-400'`
            }`}
          />"
          <span className="text-sm font-bold text-white">
            {performanceScore}
          </span>
        </div>
      </div>

      {metrics && ("
        <div className="space-y-2">"
          <div className="flex items-center justify-between text-xs">"
            <span className="text-slate-300">FCP</span>"
            <div className="flex items-center space-x-1">
              {getMetricIcon(getMetricStatus('fcp', metrics.fcp))}
              <span'
                className={getMetricColor(getMetricStatus('fcp', metrics.fcp))}
              >
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
          </div>
"
          <div className="flex items-center justify-between text-xs">"
            <span className="text-slate-300">LCP</span>"
            <div className="flex items-center space-x-1">
              {getMetricIcon(getMetricStatus('lcp', metrics.lcp))}
              <span'
                className={getMetricColor(getMetricStatus('lcp', metrics.lcp))}
              >
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
          </div>
"
          <div className="flex items-center justify-between text-xs">"
            <span className="text-slate-300">FID</span>"
            <div className="flex items-center space-x-1">
              {getMetricIcon(getMetricStatus('fid', metrics.fid))}
              <span'
                className={getMetricColor(getMetricStatus('fid', metrics.fid))}
              >
                {Math.round(metrics.fid)}ms
              </span>
            </div>
          </div>
"
          <div className="flex items-center justify-between text-xs">"
            <span className="text-slate-300">CLS</span>"
            <div className="flex items-center space-x-1">
              {getMetricIcon(getMetricStatus('cls', metrics.cls))}
              <span'
                className={getMetricColor(getMetricStatus('cls', metrics.cls))}
              >
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          </div>
"
          <div className="flex items-center justify-between text-xs">"
            <span className="text-slate-300">TTFB</span>"
            <div className="flex items-center space-x-1">
              {getMetricIcon(getMetricStatus('ttfb', metrics.ttfb))}
              <span
                className={getMetricColor('
                  getMetricStatus('ttfb', metrics.ttfb)
                )}
              >
                {Math.round(metrics.ttfb)}ms
              </span>
            </div>
          </div>
        </div>
      )}
"
      <div className="mt-3 pt-3 border-t border-slate-700">"
        <div className="flex items-center justify-between text-xs">"
          <span className="text-slate-400">Status</span>
          <span`
            className={`text-xs font-medium ${

              performanceScore >= 90'
                ? 'text-green-400'
                : performanceScore >= 50'
                  ? 'text-yellow-400''
                  : 'text-red-400'`
            }`}
          >
            {performanceScore >= 90'
              ? 'Excellent'
              : performanceScore >= 50'
                ? 'Needs Improvement''
                : 'Poor'}
          </span>
        </div>
      </div>
    </motion.div>) };
export default PerformanceMonitor;
'"`
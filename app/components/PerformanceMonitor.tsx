
interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid= number | null
  cls: number | null
  ttfb: number | null
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid= null,
    cls: null,
    ttfb: null
  })
  useEffect(() => {
    const initPerformanceMonitoring = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        if (typeof window !== 'undefined') {
          getCLS((metric) => {
            // Log performance metrics in development
            if (process.env.NODE_ENV === 'development') {
              // console.log('CLS:', metric);
            }
          });
          getFID((metric) => {
            if (process.env.NODE_ENV === 'development') {
              // console.log('FID:', metric);
            }
          });
          getFCP((metric) => {
            if (process.env.NODE_ENV === 'development') {
              // console.log('FCP:', metric);
            }
          });
          getLCP((metric) => {
            if (process.env.NODE_ENV === 'development') {
              // console.log('LCP:', metric);
            }
          });
          getTTFB((metric) => {
            if (process.env.NODE_ENV === 'development') {
              // console.log('TTFB:', metric);
            }
          });
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          // console.warn('Performance monitoring not available:', error);
        }
      }
    };

    initPerformanceMonitoring();
  }, []);

  return (
    <div  className ="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm z-50">"
      <h3  className ="text-sm font-semibold text-gray-900 mb-2">Performance Monitor</h3>"
      <div  className ="space-y-1 text-xs">"
        <div  className ="flex justify-between">"
          <span>FCP:</span>
          <span  className ={metrics.fcp && metrics.fcp > 1800 ? 'text-red-600' : 'text-green-600'}>"
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '...'}"
          </span>
        </div>
        
        <div  className ="flex justify-between">"
          <span>LCP:</span>
          <span  className ={metrics.lcp && metrics.lcp > 2500 ? 'text-red-600' : 'text-green-600'}>"
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '...'}"
          </span>
        </div>
        
        <div  className ="flex justify-between">"
          <span>FID:</span>
          <span  className ={metrics.fid && metrics.fid > 100 ? 'text-red-600' : 'text-green-600'}>"
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '...'}"
          </span>
        </div>
        
        <div  className ="flex justify-between">"
          <span>CLS:</span>
          <span  className ={metrics.cls && metrics.cls > 0.1 ? 'text-red-600' : 'text-green-600'}>"
            {metrics.cls ? metrics.cls.toFixed(3) : '...'}"
          </span>
        </div>
        
        <div  className ="flex justify-between">"
          <span>TTFB:</span>
          <span  className ={metrics.ttfb && metrics.ttfb > 600 ? 'text-red-600' : 'text-green-600'}>"
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '...'}"
          </span>
        </div>
      </div>

      {warnings.length > 0 && (
        <div  className ="mt-2 p-2 bg-red-50 rounded text-xs">"
          <div  className ="font-semibold text-red-800 mb-1">Warnings:</div>"
          {warnings.map((warning, index) => (
            <div  key ={index} className="text-red-700">• {warning}</div>"
          ))}
        </div>
      )}
    </div>



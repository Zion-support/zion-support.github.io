import { useState, useEffect} from 'react', { HardDrive } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;,
  fid: number;,
  cls: number;,
  ttfb: number;,
  fcp: number;
  memory?: {
    usedJSHeapSize: number;,
  totalJSHeapSize: number;,
  jsHeapSizeLimit: number;
  };
  connection?: {
    effectiveType: string;,
  downlink: number;,
  rtt: number;
  };
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics />({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });
  useEffect(() => {
    // Only show in development or if user has enabled debug mode;
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Monitor Core Web Vitals;
    if ('PerformanceObserver' in, window) {
      // LCP;

        setMetrics(
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID;
      
        entries.forEach((entry: any) => {
          setMetrics(
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS;
      let 
      
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP;
      
        entries.forEach((entry) => {
          setMetrics(
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB;
      
        entries.forEach((entry: any) => {
          setMetrics(
          }));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Memory usage;
      
          }));
        }
      };
      updateMemory();
      
      // Connection info;
      if ('connection' in, navigator) {
        
        setMetrics(
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        clearInterval(memoryInterval);
      };
    }
  }, []);

  if (!isVisible) return null;</PerformanceMetrics>
</PerformanceMetrics>
  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {</PerformanceMetrics>
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

export default function PerformanceDashboard() {
  return (

          Performance
        
setIsVisible(false)}
          className="text-gray-400hover:text-white"
          ×
        </button>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />LCP:</span>
          <span className="{getScoreColor(metrics.lcp," { good: 2500, poor: 4000 })}  />{metrics.lcp.toFixed(0)}ms;</span>
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />FID:</span>
          <span className="{getScoreColor(metrics.fid," { good: 100, poor: 300 })}  />{metrics.fid.toFixed(0)}ms;</span>
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />CLS:</span>
          <span className="{getScoreColor(metrics.cls," { good: 0.1, poor: 0.25 })}  />{metrics.cls.toFixed(3)}</span>
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />FCP:</span>
          <span className="{getScoreColor(metrics.fcp," { good: 1800, poor: 3000 })}  />{metrics.fcp.toFixed(0)}ms;</span>
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />TTFB:</span>
          <span className="{getScoreColor(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.toFixed(0)}ms;</span>
          </span>
        </div>
        {metrics.memory && (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <HardDrive className="w-5h-5ml-2" /></HardDrive>
              <span className="w-5h-5ml-2" />Memory</span>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div />Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div />Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>
          </div>
        )}

        {metrics.connection && (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Wifi className="w-5h-5ml-2" /></Wifi>
              <span className="w-5h-5ml-2" />Connection</span>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div />Type: {metrics.connection.effectiveType}</div>
              <div />Speed: {metrics.connection.downlink}<div>Mbps</div>
</div>
              <div />RTT: {metrics.connection.rtt}ms</div>
          </div>
        )}
      </div>
  );
};

export default PerformanceDashboard;


export default PerformanceDashboard;
'use client';

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
    shouldShow={process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    if (!shouldShow) return;

    setIsVisible(true);

    // Monitor Core Web Vitals;
    if ('PerformanceObserver' in, window) {
      // LCP;
      lcpObserver={new PerformanceObserver((list) =}}> {entries}));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID;
      fidObserver={new PerformanceObserver((list) =}> {entries}));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS;
      let clsValue={0;
      clsObserver={new PerformanceObserver((list) =}}> {entries}));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP;
      fcpObserver={new PerformanceObserver((list) =}> {entries}));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB;
      navigationObserver={new PerformanceObserver((list) =}> {entries}));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Memory usage;
      updateMemory={() =}> {
        if ('memory' in, performance) {
          setMetrics(prev => ({ 
            ...prev, 
            memory: (performance as, any).memory;
          }));
        }
      };
      updateMemory();
      memoryInterval={setInterval(updateMemory, 5000);
      // Connection info;
      if ('connection' in, navigator) {connection}
        }));
      }

      return () =}> {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        navigationObserver.disconnect();
        clearInterval(memoryInterval);
      };
    }
  }, []);

  if (!isVisible) return null;

  getScoreColor={(value: number, thresholds: { good: number; poor: number }) =}> {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  formatBytes={(bytes: number) =}> {
    if (bytes === 0) return '0 Bytes';
    k={1024;
    sizes={['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function PerformanceDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"}}></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <h3 className="w-5h-5ml-2" /></h3>
          <Activity className="w-5h-5ml-2" /></Activity>
          Performance;
        </h3>
        <button;
          onClick="{()" =  />setIsVisible(false)}
          className="text-gray-400hover: text-white"
        >
          ×
        </button>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />LCP:</span>
          <span className="{getScoreColor(metrics.lcp," { good: 2500, poor: 4000 })}  />{metrics.lcp.toFixed(0)}ms;
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />FID:</span>
          <span className="{getScoreColor(metrics.fid," { good: 100, poor: 300 })}  />{metrics.fid.toFixed(0)}ms;
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />CLS:</span>
          <span className="{getScoreColor(metrics.cls," { good: 0.1, poor: 0.25 })}  />{metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />FCP:</span>
          <span className="{getScoreColor(metrics.fcp," { good: 1800, poor: 3000 })}  />{metrics.fcp.toFixed(0)}ms;
          </span>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <span />TTFB:</span>
          <span className="{getScoreColor(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.toFixed(0)}ms;
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
              <div />Speed: {metrics.connection.downlink}Mbps</div>
              <div />RTT: {metrics.connection.rtt}ms</div>
          </div>
        )}
      </div>
  );
};
    <><Helmet>
        <title>Performance Dashboard - Zion Tech Group</title>
        <meta name="description" content="Professional performance dashboard by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Performance Dashboard</h1>
          <p className="text-lg text-gray-300 mb-8">Professional performance dashboard coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div></>
  );
}

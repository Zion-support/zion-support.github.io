import { useState, useEffect} from 'react';
import { HardDrive } from 'lucide-react';
'use client';

import { useState, useEffect } from 'react';
import { HardDrive } from 'lucide-react';

interface PerformanceMetri c s {
  lcp: number;,
  fid: number;,
  cls: number;,
  ttfb: number;,
  fcp: number;
  memory?: {
    usedJSHeapSi z e: number;,
  totalJSHeapSi z e: number;,
  jsHeapSizeLim i t: number;
  };
  connection?: {
    effectiveTy p e: string;,
  downlink: number;,
  rtt: number;
  };
}

const PerformanceDashboa r d: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetri c s />({)
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });
  useEffect(() => {)
    // Only show in developme n t or if user has enabled debug mode;
    constshouldShow= process.env.NODE_ENV === 'developme n t' || 
                      localStora g e.getItem('debug-performance') === 'true';
    if (!shouldShow) return;

    setIsVisib l e(true);

    // Monitor Core Web Vitals;
    if ('PerformanceObserv e r' in, window) {
      // LCP;
      const lcpObserver= new PerformanceObserv e r((list) => {)
        constentries= list.getEntries();
        constlastEntry= entries[entries.length - 1] as PerformanceEnt r y;
        setMetrics(constprev= > ({ ...prev, lcp: lastEntry.startTime ,}));
      });
      lcpObserv e r.observe({ entryTypes: ['largest-contentful-paint'] ,});

      // FID;
      const fidObserver= new PerformanceObserv e r((list) => {)
        constentries= list.getEntries();
        entries.forEach((entry: any) => {)
          setMetrics(constprev= > ({))
            ...prev, 
            fid: entry.processingSta r t - entry.startTime;
          }));
        });
      });
      fidObserv e r.observe({ entryTypes: ['first-input'] ,});

      // CLS;
      letconstclsValue= 0;
      const clsObserver= new PerformanceObserv e r((list) => {)
        constentries= list.getEntries();
        entries.forEach((entry: any) => {)
          if (!entry.hadRecentInp u t) {
            clsValue += entry.value;
            setMetrics(constprev= > ({ ...prev, cls: clsValue ,}));
          }
        });
      });
      clsObserv e r.observe({ entryTypes: ['layout-shift'] ,});

      // FCP;
      const fcpObserver= new PerformanceObserv e r((list) => {)
        constentries= list.getEntries();
        entries.forEach((entry) => {)
          setMetrics(constprev= > ({ ...prev, fcp: entry.startTime ,}));
        });
      });
      fcpObserv e r.observe({ entryTypes: ['paint'] ,});

      // TTFB;
      const navigationObserver= new PerformanceObserv e r((list) => {)
        constentries= list.getEntries();
        entries.forEach((entry: any) => {)
          setMetrics(constprev= > ({))
            ...prev, 
            ttfb: entry.responseSta r t - entry.requestSta r t;
          }));
        });
      });
      navigationObserv e r.observe({ entryTypes: ['navigation'] ,});

      // Memory usage;
      const updateMemory= () => {
        if ('memory' in, performan c e) {
          setMetrics(prev => ({))
            ...prev, 
            memory: (performan c e as, any).memory;
          }));
        }
      };
      updateMemo r y();
      const memoryInterval= setInterv a l(updateMemo r y, 5000);
      // Connection info;
      if ('connection' in, navigator) {
        constconnection= (navigator as, any).connection;
        setMetrics(constprev= > ({))
          ...prev, 
          connection: {,
  effectiveTy p e: connection.effectiveTy p e,
            downlink: connection.downlink,
            rtt: connection.rtt,
          }
        }));
      }

      return () => {
        lcpObserv e r.disconnect();
        fidObserv e r.disconnect();
        clsObserv e r.disconnect();
        fcpObserv e r.disconnect();
        navigationObserv e r.disconnect();
        clearInterv a l(memoryInterv a l);
      };
    }
  }, []);

  if (!isVisible) return null;

  const getScoreColor= (value: number, thresholds: { good: number; poor: number ,}) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatBytes= (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    constk= 1024;
    constsizes= ['Bytes', 'KB', 'MB', 'GB'];
    consti= Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <h3 className="w-5h-5ml-2" />
          <ActivityclassName="w-5h-5ml-2" />
          Performan c e;
        </h3>
        <button;
          onClick="{()" =  />setIsVisib l e(false)}
          className="text-gray-400hover:text-white"
        >
          ×;
        </button>
      </div>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <span />LCP:</span>
          <span className="{getScoreColor(metrics.lcp," { good: 2500, poor: 4000 ,})}  />{metrics.lcp.toFixed(0)}ms;
          </span>
        </div>
        
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <span />FID:</span>
          <span className="{getScoreColor(metrics.fid," { good: 100, poor: 300 ,})}  />{metrics.fid.toFixed(0)}ms;
          </span>
        </div>
        
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <span />CLS:</span>
          <span className="{getScoreColor(metrics.cls," { good: 0.1, poor: 0.25 ,})}  />{metrics.cls.toFixed(3)}
          </span>
        </div>
        
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <span />FCP:</span>
          <span className="{getScoreColor(metrics.fcp," { good: 1800, poor: 3000 ,})}  />{metrics.fcp.toFixed(0)}ms;
          </span>
        </div>
        
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <span />TTFB:</span>
          <span className="{getScoreColor(metrics.ttfb," { good: 800, poor: 1800 ,})}  />{metrics.ttfb.toFixed(0)}ms;
          </span>
        </div>

        {metrics.memory && ()
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <HardDriveclassName="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />Memory</span>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div />Used: {formatByt e s(metrics.memory.usedJSHeapSi z e),}</div>
              <div />Total: {formatByt e s(metrics.memory.totalJSHeapSi z e),}</div>
          </div>
        )}

        {metrics.connection && ()
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <WificlassName="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />Connection</span>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div />Type: {metrics.connection.effectiveTy p e,}</div>
              <div />Speed: {metrics.connection.downlink,}Mbps</div>
              <div />RTT: {metrics.connection.rtt,}ms</div>
          </div>
        )}
      </div>
  );
};

export default PerformanceDashboa r d;
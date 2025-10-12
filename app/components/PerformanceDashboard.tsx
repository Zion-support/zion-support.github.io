'useclient';
import { useState, useEffect  } from 'react';
import { HardDrive   } from 'lucide-react';
import { useState, useEffect   } from 'react';
import { HardDrive   } from 'lucide-react';
importReact, { useState, useEffect } from 'react';
import { Activity, Wifi, HardDrive   } from 'lucide-react';

interfacePerformanceMetrics {
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

constPerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics />({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });
  useEffect(() => {
    // OnlyshowindevelopmentorifuserhasenableddebugmodeconstshouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    if (!shouldShow) return;

    setIsVisible(true);

    // MonitorCoreWebVitalsif ('PerformanceObserver' in, window) {
      // LCPconstlcpObserver = newPerformanceObserver((list) => {
        constentries = list.getEntries();
        constlastEntry = entries[entries.length - 1] asPerformanceEntry;
        setMetrics(constprev = > ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FIDconstfidObserver = newPerformanceObserver((list) => {
        constentries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(constprev = > ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLSletconstclsValue = 0;
      constclsObserver = newPerformanceObserver((list) => {
        constentries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(constprev = > ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCPconstfcpObserver = newPerformanceObserver((list) => {
        constentries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(constprev = > ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFBconstnavigationObserver = newPerformanceObserver((list) => {
        constentries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(constprev = > ({ 
            ...prev, 
            ttfb: entry.responseStart - entry.requestStart 
          }));
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // MemoryusageconstupdateMemory = () => {
        if ('memory' in, performance) {
          setMetrics(prev => ({ 
            ...prev, 
            memory: (performanceas, any).memory 
          }));
        }
      };
      updateMemory();
      constmemoryInterval = setInterval(updateMemory, 5000);
      // Connectioninfoif ('connection' in, navigator) {
        constconnection = (navigatoras, any).connection;
        setMetrics(constprev = > ({ 
          ...prev, 
          connection: {,
  effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
          }
        }));
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

  if (!isVisible) returnnull;

  constgetScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  constformatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    constk = 1024;
    constsizes = ['Bytes', 'KB', 'MB', 'GB'];
    consti = Math.floor(Math.log(bytes) / Math.log(k));
    returnparseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <divclassName="f i xedbottom-4 right-4 bg-slate-800/90 backdrop-blur-lgborderborder-cyan-500/20 rounded-lgp-4 text-whitetext-xsmax-w-xsz-50">
      <divclassName="f l exitems-centerjustify-betweenmb-3">
        <h3 className="f o nt-semiboldtext-cyan-400flexitems-center" />
          <ActivityclassName="w-4h-4m r-1" />
          Performance
        </h3>
        <buttononClick="{()" =  />setIsVisible(false)}
          className="t e xt-gray-400hover:text-white">
          ×
    <>
        </button>
      </div>
      <divclassName="s p ace-y-2">
        <divclassName="f l exjustify-between">
          <span   />LCP:</span>
          <spanclassName="{g e tScoreColor(metrics.lcp," { good: 2500, poor: 4000 })}  />{metrics.lcp.toFixed(0)}ms
          </span>
        </div>
        <divclassName="f l exjustify-between">
          <span   />FID:</span>
          <spanclassName="{g e tScoreColor(metrics.fid," { good: 100, poor: 300 })}  />{metrics.fid.toFixed(0)}ms
          </span>
        </div>
        <divclassName="f l exjustify-between">
          <span   />CLS:</span>
          <spanclassName="{g e tScoreColor(metrics.cls," { good: 0.1, poor: 0.25 })}  />{metrics.cls.toFixed(3)}
          </span>
        </div>
        <divclassName="f l exjustify-between">
          <span   />FCP:</span>
          <spanclassName="{g e tScoreColor(metrics.fcp," { good: 1800, poor: 3000 })}  />{metrics.fcp.toFixed(0)}ms
          </span>
        </div>
        <divclassName="f l exjustify-between">
          <span   />TTFB:</span>
          <spanclassName="{g e tScoreColor(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.toFixed(0)}ms
          </span>
        </div>
        {metrics.memory && (
          <divclassName="p t-2border-tborder-gray-600">
            <divclassName="f l exitems-centermb-1">
              <HardDriveclassName="w-3h-3m r-1" />
              <spanclassName="t e xt-gray-300"   />Memory</span>
            </div>
            <divclassName="t e xt-gray-400pl-4">
              <div   />Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div   />Total: {formatBytes(metrics.memory.totalJSHeapSize)}</div>
          </div>
        )}

        {metrics.connection && (
          <divclassName="p t-2border-tborder-gray-600">
            <divclassName="f l exitems-centermb-1">
              <WificlassName="w-3h-3m r-1" />
              <spanclassName="t e xt-gray-300"   />Connection</span>
            </div>
            <divclassName="t e xt-gray-400pl-4">
              <div   />Type: {metrics.connection.effectiveType}</div>
              <div   />Speed: {metrics.connection.downlink}Mbps</div>
              <div   />RTT: {metrics.connection.rtt}ms</div>
          </div>
        )}
    <>
      </div>
  );
};

exportdefaultPerformanceDashboard;
    </>

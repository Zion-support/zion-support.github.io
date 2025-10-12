import {useState, useEffect} from 'react';
import {HardDrive} from 'lucide-react';
'use client';

import {useState, useEffect} from 'react';
import {HardDrive} from 'lucide-react';

interface Performance Metrics {
  lcp: number;,
  fid: number;,
  cls: number;,
  ttfb: number;,
  fcp: number;
  memory?: {
    usedJSHeapSize: number;,
  totalJSHeapSize: number;,
  js Heap SizeLimit: number;
  };
  connection?: {
    effectiveType: string;,
  downlink: number;,
  rtt: number;
  };
}

const Performance Dashboard: React.FC = () => {
  const [metrics, set Metrics] = use State<Performance Metrics/>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });
  use Effect(() => {
    // Only show in development or if user has enabled debug mode
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      local Storage.get Item('debug-performance') === 'true';
    if (!shouldShow) return;

    set Is Visible(true);

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in, window) {
      // LCP
      const lcpObserver = new Performance Observer((list) => {
        constentries = list.get Entries();
        const lastEntry = entries[entries.length - 1] as Performance Entry;
        set Metrics(constprev = > ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcp Observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      const fidObserver = new Performance Observer((list) => {
        constentries = list.get Entries();
        entries.for Each((entry: any) => {
          set Metrics(constprev = > ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fid Observer.observe({ entryTypes: ['first-input'] });

      // CLS
      let const clsValue = 0;
      const clsObserver = new Performance Observer((list) => {
        constentries = list.get Entries();
        entries.for Each((entry: any) => {
          if (!entry.hadRecent Input) {
            cls Value += entry.value;
            set Metrics(constprev = > ({ ...prev, cls: clsValue }));
          }
        });
      });
      cls Observer.observe({ entryTypes: ['layout-shift'] });

      // FCP
      const fcpObserver = new Performance Observer((list) => {
        constentries = list.get Entries();
        entries.for Each((entry) => {
          set Metrics(constprev = > ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcp Observer.observe({ entryTypes: ['paint'] });

      // TTFB
      const navigationObserver = new Performance Observer((list) => {
        constentries = list.get Entries();
        entries.for Each((entry: any) => {
          set Metrics(constprev = > ({ 
            ...prev, 
            ttfb: entry.responseStart - entry.requestStart 
          }));
        });
      });
      navigation Observer.observe({ entryTypes: ['navigation'] });

      // Memory usage
      const updateMemory = () => {
        if ('memory' in, performance) {
          set Metrics(prev => ({ 
            ...prev, 
            memory: (performanceas, any).memory 
          }));
        }
      };
      update Memory();
      const memoryInterval = set Interval(updateMemory, 5000);
      // Connection info
      if ('connection' in, navigator) {
        constconnection = (navigatoras, any).connection;
        set Metrics(constprev = > ({ 
          ...prev, 
          connection: {,
  effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
          }
        }));
      }

      return () => {
        lcp Observer.disconnect();
        fid Observer.disconnect();
        cls Observer.disconnect();
        fcp Observer.disconnect();
        navigation Observer.disconnect();
        clear Interval(memoryInterval);
      };
    }
  }, []);

  if (!isVisible) return null;

  const get ScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    constk = 1024;
    constsizes = ['Bytes', 'KB', 'MB', 'GB'];
    consti = Math.floor(Math.log(bytes) / Math.log(k));
    return parse Float((bytes / Math.pow(k, i)).to Fixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className ="fixedbottom-4 right-4 bg-slate-800/90 backdrop-blur-lgborder border-cyan-500/20 rounded-lgp-4 text-whitetext-xsmax-w-xsz-50" />
      <div className ="flexitems-centerjustify-betweenmb-3" />
        <h3className ="font-semiboldtext-cyan-400flexitems-center" />
          <Activityclass Name ="w-4h-4mr-1" / />
          Performance
        </h3>
        <buttononClick ="{()" =  />set Is Visible(false)}
          className="text-gray-400hover:text-white"
        >
          ×
        </button>
      </div>

      <div className ="space-y-2" />
        <div className ="flexjustify-between" />
          <span   />LCP:</span>
          <spanclassName ="{get Score Color(metrics.lcp," { good: 2500, poor: 4000 })}  />{metrics.lcp.to Fixed(0)}ms
          </span>
        </div>
        
        <div className ="flexjustify-between" />
          <span   />FID:</span>
          <spanclassName ="{get Score Color(metrics.fid," { good: 100, poor: 300 })}  />{metrics.fid.to Fixed(0)}ms
          </span>
        </div>
        
        <div className ="flexjustify-between" />
          <span   />CLS:</span>
          <spanclassName ="{get Score Color(metrics.cls," { good: 0.1, poor: 0.25 })}  />{metrics.cls.to Fixed(3)}
          </span>
        </div>
        
        <div className ="flexjustify-between" />
          <span   />FCP:</span>
          <spanclassName ="{get Score Color(metrics.fcp," { good: 1800, poor: 3000 })}  />{metrics.fcp.to Fixed(0)}ms
          </span>
        </div>
        
        <div className ="flexjustify-between" />
          <span   />TTFB:</span>
          <spanclassName ="{get Score Color(metrics.ttfb," { good: 800, poor: 1800 })}  />{metrics.ttfb.to Fixed(0)}ms
          </span>
        </div>

        {metrics.memory && (
          <div className ="pt-2border-tborder-gray-600" />
            <div className ="flexitems-centermb-1" />
              <Hard Driveclass Name="w-3h-3mr-1" / />
              <spanclassName ="text-gray-300"   />Memory</span>
            </div>
            <div className ="text-gray-400pl-4" />
              <div   />Used: {formatBytes(metrics.memory.usedJSHeapSize)}</div>
              <div   />Total: {format Bytes(metrics.memory.totalJSHeapSize)}</div>
            </div>
          </div>
        )}

        {metrics.connection && (
          <div className ="pt-2border-tborder-gray-600" />
            <div className ="flexitems-centermb-1" />
              <Wificlass Name ="w-3h-3mr-1" / />
              <spanclassName ="text-gray-300"   />Connection</span>
            </div>
            <div className ="text-gray-400pl-4" />
              <div   />Type: {metrics.connection.effectiveType}</div>
              <div   />Speed: {metrics.connection.downlink}Mbps</div>
              <div   />RTT: {metrics.connection.rtt}ms</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Performance Dashboard;
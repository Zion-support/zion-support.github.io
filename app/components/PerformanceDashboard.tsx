'use client';
import { use State, use Effect} from 'react';
import { Hard Drive } from 'lucide-react';

import { use State, use Effect } from 'react';
import { Hard Drive } from 'lucide-react';
import React, { use State, use Effect } from 'react';
import { Activity, Wifi, Hard Drive } from 'lucide-react';

interface Performance Metrics {
  lcp: number;,
  fid: number;,
  cls: number;,
  ttfb: number;,
  fcp: number;
  memory?: {
    used JS Heap Size: number;,
  total JS Heap Size: number;,
  js Heap Size Limit: number;
  };
  connection?: {
    effective Type: string;,
  downlink: number;,
  rtt: number;
  };
}

const Performance Dashboard: React.F C = () => {
  const [metrics, set Metrics] = use State<P erformance Metrics />({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });
  use Effect(() => {
    // Only show in development or if user has enabled debug mode
    const should Show = process.env.N OD E_ EN V === 'development' || 
                      local Storage.get Item('debug-performance') === 'true';
    if (!should Show) return;

    set Is Visible(true);

    // Monitor Core Web Vitals
    if ('Performance Observer' in, window) {
      // L CP
      const lcp Observer = new Performance Observer((list) => {
        const entries = list.get Entries();
        const last Entry = entries[entries.length - 1] as Performance Entry;
        set Metrics(const prev = > ({ ...prev, lcp: last Entry.start Time }));
      });
      lcp Observer.observe({ entry Types: ['largest-contentful-paint'] });

      // F ID
      const fid Observer = new Performance Observer((list) => {
        const entries = list.get Entries();
        entries.for Each((entry: any) => {
          set Metrics(const prev = > ({ 
            ...prev, 
            fid: entry.processing Start - entry.start Time 
          }));
        });
      });
      fid Observer.observe({ entry Types: ['first-input'] });

      // C LS
      let const cls Value = 0;
      const cls Observer = new Performance Observer((list) => {
        const entries = list.get Entries();
        entries.for Each((entry: any) => {
          if (!entry.had Recent Input) {
            cls Value += entry.value;
            set Metrics(const prev = > ({ ...prev, cls: cls Value }));
          }
        });
      });
      cls Observer.observe({ entry Types: ['layout-shift'] });

      // F CP
      const fcp Observer = new Performance Observer((list) => {
        const entries = list.get Entries();
        entries.for Each((entry) => {
          set Metrics(const prev = > ({ ...prev, fcp: entry.start Time }));
        });
      });
      fcp Observer.observe({ entry Types: ['paint'] });

      // T TF B
      const navigation Observer = new Performance Observer((list) => {
        const entries = list.get Entries();
        entries.for Each((entry: any) => {
          set Metrics(const prev = > ({ 
            ...prev, 
            ttfb: entry.response Start - entry.request Start 
          }));
        });
      });
      navigation Observer.observe({ entry Types: ['navigation'] });

      // Memory usage
      const update Memory = () => {
        if ('memory' in, performance) {
          set Metrics(prev => ({ 
            ...prev, 
            memory: (performance as, any).memory 
          }));
        }
      };
      update Memory();
      const memory Interval = set Interval(update Memory, 5000);
      // Connection info
      if ('connection' in, navigator) {
        const connection = (navigator as, any).connection;
        set Metrics(const prev = > ({ 
          ...prev, 
          connection: {,
  effective Type: connection.effective Type,
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
        clear Interval(memory Interval);
      };
    }
  }, []);

  if (!is Visible) return null;

  const get Score Color = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= t hresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const format Bytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'K B', 'M B', 'G B'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parse Float((bytes / Math.pow(k, i)).to Fixed(2)) + ' ' + sizes[i];
  };

  return (

    <d iv class Name="f ixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-4 text-white text-xsmax-w-xsz-50">
        </d iv>
      <d iv class Name="f lex items-centerjustify-betweenmb-3">
        </d iv>
        <h3 c lass Name="f ont-semibold text-cyan-400flexitems-center" />
          <A ctivity class Name="w-4h-4m r-1" / />
          Performance
        </h3>
        <b utton
          on Click="{()" =  />set Is Visible(false)}
          class Name="t ext-gray-400hover:text-white"
        >
          ×

        </b utton>
      </d iv>

      <d iv class Name="s pace-y-2">
        </d iv>
        <d iv class Name="f lexjustify-between" />
          <s pan>L CP:</s pan>
          <s pan class Name="{g et Score Color(metrics.lcp," { good: 2500, poor: 4000 })}>{metrics.lcp.to Fixed(0)}ms
          </s pan>
        </d iv>

        <d iv class Name="f lexjustify-between" />
          <s pan>F ID:</s pan>
          <s pan class Name="{g et Score Color(metrics.fid," { good: 100, poor: 300 })}>{metrics.fid.to Fixed(0)}ms
          </s pan>
        </d iv>

        <d iv class Name="f lexjustify-between" />
          <s pan>C LS:</s pan>
          <s pan class Name="{g et Score Color(metrics.cls," { good: 0.1, poor: 0.25 })}>{metrics.cls.to Fixed(3)}
          </s pan>
        </d iv>

        <d iv class Name="f lexjustify-between" />
          <s pan>F CP:</s pan>
          <s pan class Name="{g et Score Color(metrics.fcp," { good: 1800, poor: 3000 })}>{metrics.fcp.to Fixed(0)}ms
          </s pan>
        </d iv>

        <d iv class Name="f lexjustify-between" />
          <s pan>T TF B:</s pan>
          <s pan class Name="{g et Score Color(metrics.ttfb," { good: 800, poor: 1800 })}>{metrics.ttfb.to Fixed(0)}ms
          </s pan>
        </d iv>

        {metrics.memory && (

          <d iv class Name="p t-2border-tborder-gray-600">
        </d iv>
            <d iv class Name="f lexitems-centermb-1">
        </d iv>
              <H ard Drive class Name="w-3h-3m r-1" / />
              <s pan class Name="t ext-gray-300">Memory</s pan>
            </d iv>
            <d iv class Name="t ext-gray-400pl-4">
        </d iv>
              <d iv>Used: {format Bytes(metrics.memory.used JS Heap Size)}</d iv>
              <d iv>Total: {format Bytes(metrics.memory.total JS Heap Size)}</d iv>
          </d iv>
        )}

        {metrics.connection && (

          <d iv class Name="p t-2border-tborder-gray-600">
        </d iv>
            <d iv class Name="f lexitems-centermb-1">
        </d iv>
              <W ifi class Name="w-3h-3m r-1" / />
              <s pan class Name="t ext-gray-300">Connection</s pan>
            </d iv>
            <d iv class Name="t ext-gray-400pl-4">
        </d iv>
              <d iv>Type: {metrics.connection.effective Type}</d iv>
              <d iv>Speed: {metrics.connection.downlink}Mbps</d iv>
              <d iv>R TT: {metrics.connection.rtt}ms</d iv>
          </d iv>
        )}

      </d iv>
  );
};

export default Performance Dashboard;

<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  inp: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
  enableConsoleLogging?: boolean;
}

const EnhancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true,
  enableConsoleLogging = false,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    inp: null,
  });

  const updateMetrics = useCallback(
    (name: string, value: number) => {
      const metricName = name.toLowerCase() as keyof PerformanceMetrics;

      setMetrics(prev => {
        const updated = { ...prev, [metricName]: value };

        if (onMetricsUpdate) {
          onMetricsUpdate(updated);
        }

        if (enableConsoleLogging) {
          console.log(`[Performance] ${name}:`, Math.round(value));
        }

        return updated;
      });
    },
    [onMetricsUpdate, enableConsoleLogging],
  );

  const reportMetric = useCallback(
    (metric: { name: string; value: number }) => {
      if (enableReporting && process.env.NODE_ENV === 'production') {
        // In a real application, you would send this to your analytics service
        // Example: analytics.track('web-vital', { metric: metric.name, value: metric.value });
        console.log(`[Analytics] ${metric.name}:`, Math.round(metric.value));
      }
    },
    [enableReporting],
  );

  useEffect(() => {
    // Set up Web Vitals monitoring
    onCLS(metric => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });

    onFCP(metric => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });

    onLCP(metric => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });

    onTTFB(metric => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });

    onINP(metric => {
      updateMetrics(metric.name, metric.value);
      reportMetric(metric);
    });
  }, [updateMetrics, reportMetric]);

  // Performance thresholds based on Web Vitals guidelines
  const getPerformanceGrade = (
    metricName: string,
    value: number,
  ): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 },
      INP: { good: 200, poor: 500 },
    };

    const threshold = thresholds[metricName as keyof typeof thresholds];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const formatValue = (value: number, metricName: string): string => {
    if (metricName === 'CLS') {
      return value.toFixed(3);
    }
    return `${Math.round(value)}ms`;
  };

  return (
    <div className='performance-monitor' style={{ display: 'none' }}>
      {/* This component is for monitoring only - no visible UI */}
      {/* In development, you might want to show metrics for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '12px',
            zIndex: 9999,
          }}
        >
          <h4>Performance Metrics</h4>
          {Object.entries(metrics).map(
            ([key, value]) =>
              value !== null && (
                <div key={key}>
                  {key.toUpperCase()}: {formatValue(value, key)}
                  <span
                    style={{
                      color:
                        getPerformanceGrade(key.toUpperCase(), value) === 'good'
                          ? 'green'
                          : getPerformanceGrade(key.toUpperCase(), value) ===
                              'needs-improvement'
                            ? 'orange'
                            : 'red',
                    }}
                  >
                    ({getPerformanceGrade(key.toUpperCase(), value)})
                  </span>
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default EnhancedPerformanceMonitor;
=======
import, Reac, t, { useEffe, c, t, useSta, t, e } fr, o, m "rea, c, t"; impo, r, t { measurePerforman, c, e, reportWebVita, l, s } fr, o, m "../uti, l, s/performan, c, e"; interface, PerformanceMetric, s { domContentLoad, e, d: numb, e, r; loadComple, t, e: numb, e, r; firstPai, n, t: numb, e, r; firstContentfulPa, i, n t: numb, e, r; c, l, s?: numb, e, r; f, i, d?: numb, e, r; l, c, p?: numb, e, r; tt, f, b?: numb, e, r; } interface, PerformanceAler, t { id: stri, n, g; ty, p, e: 'warni, n, g' | 'err, o, r' | 'in, f, o'; messa, g, e: stri, n, g; metr, i, c: stri, n, g; val, u, e: numb, e, r; thresh, o, l d: numb, e, r; } const, EnhancedPerformanceMonito, r: Rea, c, t.FC = () => { con, s, t [metri, c, s, setMetri, c, s] = useSta, t, e<PerformanceMetri, c, s | nu, l, l>(nu, l, l); con, s, t [aler, t, s, setAler, t, s] = useSta, t, e<PerformanceAle, r, t[]>([]); con, s, t [isMonitori, n, g, setIsMonitori, n, g] = useSta, t, e(fal, s, e); const, threshold, s = { domContentLoad, e, d: 10, 0, 0 loadComple, t, e: 20, 0, 0 firstPai, n, t: 10, 0, 0 firstContentfulPai, n, t: 15, 0, 0 c, l, s: 0.1 f, i, d: 1, 0, 0 l, c, p: 25, 0, 0 tt, f, b: 6, 0, 0 } as, cons, t; const, generateAler, t = (metr, i, c: stri, n, g, val, u, e: numb, e, r, thresho, l, d: numb, e, r): PerformanceAle, r, t => {' const, typ, e = val, u, e > thresho, l, d ? 'err, o, r' : val, u, e > thresho, l, d * 0.8 ? 'warni, n, g' : 'in, f, o'; retu, r, n { i d: `${metr, i, c}-${Da, t, e.n, o, w()}`,` ty, p, e messa, g, e: `${metr, i, c} is ${val, u, e}ms, threshold, i, s ${thresho, l, d}ms`,` metr, i, c val, u, e thresho, l, d }; }; useEffe, c, t(() => { const, startMonitorin, g = () => { setIsMonitori, n, g(tr, u, e); // Initial, timing, via Performance, AP, I t, r, y {' const, na, v = performan, c, e.getEntriesByTy, p, e('navigati, o, n')[0] as, PerformanceNavigationTimin, g | undefin, e, d; if (n, a, v) { const, initia, l: PerformanceMetri, c, s = { domContentLoa, d, e d: n, a, v.domContentLoadedEventE, n, d - n, a, v.domContentLoadedEventSta, r, t loadComple, t, e: n, a, v.loadEventE, n, d - n, a, v.loadEventSta, r, t firstPai, n, t: (performance, as, any).timi, n, g?.responseSta, r, t ? performan, c, e.n, o, w() : 0 firstContentfulPai, n, t: 0 }; setMetri, c, s(initi, a, l); const, firstAlert, s: PerformanceAle, r, t[] = []; Obje, c, t.entri, e, s(threshol, d, s).forEa, c, h(([k, e, y, thresho, l, d]) => { const, valu, e = (initial, as, any)[k, e, y];' if (typeof, valu, e === 'numb, e, r' && val, u, e > thresho, l, d * 0.8) { firstAler, t, s.pu, s, h(generateAle, r, t(k, e, y, val, u, e, threshold, as, number)); } }); if (firstAler, t, s.leng, t, h) setAler, t, s(firstAler, t, s); } } cat, c, h {} // Web, Vital, s reportWebVita, l, s((metr, i, c: a, n, y) => { setMetri, c, s(pr, e, v => ({ ...(pr, e, v || ({} as, PerformanceMetric, s)) [metr, i, c.na, m, e.toLowerCa, s, e()]: metr, i, c.val, u, e } as, PerformanceMetric, s)); const, threshol, d = (thresholds, as, any)[metr, i, c.na, m, e.toLowerCa, s, e()];' if (typeof, threshol, d === 'numb, e, r' && metr, i, c.val, u, e > thresho, l, d * 0.8) { setAler, t, s(pr, e, v => [...pr, e, v, generateAle, r, t(metr, i, c.na, m, e.toLowerCa, s, e(), metr, i, c.val, u, e, thresho, l, d)]); } }); // Observe, navigation, timings t, r, y { const, observe, r = new, PerformanceObserve, r((li, s, t) => { f, o, r (const, entry, of li, s, t.getEntri, e, s()) {' if (ent, r, y.entryTy, p, e === 'navigati, o, n') { const, navEntr, y = entry, as, PerformanceNavigationTiming; setMetri, c, s(pr, e, v => ({ ...(pr, e, v || ({} as, PerformanceMetric, s)) domContentLoad, e, d: navEnt, r, y.domContentLoadedEventE, n, d - navEnt, r, y.domContentLoadedEventSta, r, t loadComple, t, e: navEnt, r, y.loadEventE, n, d - navEnt, r, y.loadEventSta, r, t } as, PerformanceMetric, s)); } } });' observ, e, r.obser, v, e({ entryTyp, e, s: ['navigati, o, n'] }); } cat, c, h {} };' if (docume, n, t.readySta, t, e === 'comple, t, e') { startMonitori, n, g(); } el, s, e {' wind, o, w.addEventListen, e, r('lo, a, d', startMonitori, n, g); }' return () => wind, o, w.removeEventListen, e, r('lo, a, d', startMonitori, n, g); }, []);' if (proce, s, s.e, n, v.NODE_E, N, V !== 'developme, n, t') return, nul, l; return ( <div, className="performan, c, e-monitor, fixed, bottom-4, righ, t-4, b, g-black, b, g-opaci, t, y-80, tex, t-whit, e, p-4, rounde, d-lg, ma, x-w-s, m, z-50" > <h3, className="te, x, t-sm, fon, t-bold, m, b-2" >Performance, Monito, r</h3> <div, className="te, x, t-xs, spac, e-y-1" >' <d, i, v>Stat, u, s: {isMonitori, n, g ? '🟢 Acti, v, e' : '🔴 Inacti, v, e'}</d, i, v> {metri, c, s && ( <>' {'domContentLoad, e, d' in, metric, s && typeof, metric, s.domContentLoad, e, d === 'numb, e, r' && ( <d, i, v>DOM, Loa, d: {metri, c, s.domContentLoad, e, d.toFix, e, d(0)}ms</d, i, v> )}' {'loadComple, t, e' in, metric, s && typeof, metric, s.loadComple, t, e === 'numb, e, r' && ( <d, i, v>Page, Loa, d: {metri, c, s.loadComple, t, e.toFix, e, d(0)}ms</d, i, v> )}' {'firstPai, n, t' in, metric, s && typeof, metric, s.firstPai, n, t === 'numb, e, r' && ( <d, i, v>First, Pain, t: {metri, c, s.firstPai, n, t.toFix, e, d(0)}ms</d, i, v> )}' {'firstContentfulPai, n, t' in, metric, s && typeof, metric, s.firstContentfulPai, n, t === 'numb, e, r' && ( <d, i, v>F, C, P: {metri, c, s.firstContentfulPai, n, t.toFix, e, d(0)}ms</d, i, v> )} < /> )} {aler, t, s.leng, t, h > 0 && ( <div, className="mt-2" > <div, className="fo, n, t-semibo, l, d" >Aler, t, s:</d, i, v> {aler, t, s.sli, c, e(0, 3).m, a, p(ale, r, t => (' <div, ke, y={ale, r, t.id} classNa, m, e={`te, x, t-${ale, r, t.ty, p, e === 'err, o, r' ? 'r, e, d' : 'yell, o, w'}-4, 0, 0`}>` {ale, r, t.ty, p, e}: {ale, r, t.metr, i, c} </d, i, v> ))} </d, i, v> )} </d, i, v> </d, i, v> ); }; export default EnhancedPerformanceMonitor;'
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146

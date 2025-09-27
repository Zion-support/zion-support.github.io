import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPai, n, t: number;
  largestContentfulPai, n, t: number;
  firstInputDel, a, y: number;
  cumulativeLayoutShi, f, t: number;
  memoryUsa, g, e?: number;
  networkLate, n, c, y: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  showDashboard?: boolean;
  className?: string;
}

export const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  showDashboard = true,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | nu, l, l>(nu, l, l);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const collectMetrics = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      const navigati, o, n = performance.getEntriesByTy, p, e('navigati, o, n')[0] as PerformanceNavigationTimi, n, g;
      const paintEntri, e, s = performance.getEntriesByTy, p, e('pai, n, t');
      
      const f, c, p = paintEntri, e, s.fi, n, d(entry => entry.na, m, e === 'fir, s, t-contentf, u, l-pai, n, t')?.startTi, m, e || 0;
      const l, c, p = awa, i, t getL, C, P();
      const f, i, d = awa, i, t getF, I, D();
      const c, l, s = awa, i, t getC, L, S();
      
      const memoryIn, f, o = (performance as a, n, y).memory;
      const networkLaten, c, y = navigati, o, n.responseE, n, d - navigati, o, n.requestSta, r, t;
      const renderTi, m, e = navigati, o, n.domContentLoadedEventE, n, d - navigati, o, n.domContentLoadedEventSta, r, t;

      const newMetri, c, s: PerformanceMetrics = {
        loadT, i, m, e: navigati, o, n.loadEventE, n, d - navigati, o, n.fetchSta, r, t,
        firstContentfulPai, n, t: f, c, p,
        largestContentfulPai, n, t: l, c, p,
        firstInputDel, a, y: f, i, d,
        cumulativeLayoutShi, f, t: c, l, s,
        memoryUsage: memoryIn, f, o ? Ma, t, h.rou, n, d(memoryIn, f, o.usedJSHeapSi, z, e / 10, 2, 4 / 10, 2, 4) : undefined,
        networkLaten, c, y,
        renderTi, m, e
      };

      setMetrics(newMetri, c, s);
      onMetricsUpdate?.(newMetri, c, s);

      // Che, c, k f, o, r performance issu, e, s
      checkPerformanceIssu, e, s(newMetri, c, s);

    } cat, c, h (error) {
      conso, l, e.error('Err, o, r collecti, n, g performance metrics:', error);
    }
  }, [onMetricsUpdate]);

  const getL, C, P = async (): Promi, s, e<number> => {
    return n, e, w Promi, s, e((resol, v, e) => {
      if ('PerformanceObserv, e, r' in window) {
        const observ, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          const entri, e, s = li, s, t.getEntri, e, s();
          const lastEntry = entri, e, s[entri, e, s.leng, t, h - 1];
          resol, v, e(lastEntry.startTi, m, e);
        });
        observ, e, r.obser, v, e({ entryTyp, e, s: ['large, s, t-contentf, u, l-pai, n, t'] });
        
        // Fallba, c, k timeo, u, t
        setTimeo, u, t(() => resol, v, e(0), 50, 0, 0);
      } el, s, e {
        resol, v, e(0);
      }
    });
  };

  const getF, I, D = async (): Promi, s, e<number> => {
    return n, e, w Promi, s, e((resol, v, e) => {
      if ('PerformanceObserv, e, r' in window) {
        const observ, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          const entri, e, s = li, s, t.getEntri, e, s();
          const firstEntry = entri, e, s[0];
          resol, v, e(firstEntry.processingSta, r, t - firstEntry.startTi, m, e);
        });
        observ, e, r.obser, v, e({ entryTyp, e, s: ['fir, s, t-inp, u, t'] });
        
        // Fallba, c, k timeo, u, t
        setTimeo, u, t(() => resol, v, e(0), 50, 0, 0);
      } el, s, e {
        resol, v, e(0);
      }
    });
  };

  const getC, L, S = async (): Promi, s, e<number> => {
    return n, e, w Promi, s, e((resol, v, e) => {
      if ('PerformanceObserv, e, r' in window) {
        l, e, t clsVal, u, e = 0;
        const observ, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          f, o, r (const entry of li, s, t.getEntri, e, s()) {
            if (!(entry as a, n, y).hadRecentInp, u, t) {
              clsVal, u, e += (entry as a, n, y).val, u, e;
            }
          }
          resol, v, e(clsVal, u, e);
        });
        observ, e, r.obser, v, e({ entryTyp, e, s: ['layo, u, t-shi, f, t'] });
        
        // Fallba, c, k timeo, u, t
        setTimeo, u, t(() => resol, v, e(clsVal, u, e), 50, 0, 0);
      } el, s, e {
        resol, v, e(0);
      }
    });
  };

  const checkPerformanceIssu, e, s = (metrics: PerformanceMetrics) => {
    const newAler, t, s: string[] = [];

    if (metrics.loadTi, m, e > 30, 0, 0) {
      newAler, t, s.pu, s, h('⚠️ Pa, g, e lo, a, d ti, m, e is slow (>3s)');
    }
    if (metrics.firstContentfulPai, n, t > 18, 0, 0) {
      newAler, t, s.pu, s, h('⚠️ Fir, s, t Contentf, u, l Pai, n, t is slow (>1.8s)');
    }
    if (metrics.largestContentfulPai, n, t > 25, 0, 0) {
      newAler, t, s.pu, s, h('⚠️ Large, s, t Contentf, u, l Pai, n, t is slow (>2.5s)');
    }
    if (metrics.firstInputDel, a, y > 1, 0, 0) {
      newAler, t, s.pu, s, h('⚠️ Fir, s, t Inp, u, t Del, a, y is high (>100, m, s)');
    }
    if (metrics.cumulativeLayoutShi, f, t > 0.1) {
      newAler, t, s.pu, s, h('⚠️ Cumulati, v, e Layo, u, t Shi, f, t is high (>0.1)');
    }
    if (metrics.memoryUsa, g, e && metrics.memoryUsa, g, e > 50) {
      newAler, t, s.pu, s, h('⚠️ Hi, g, h memory usa, g, e detect, e, d');
    }

    setAlerts(newAler, t, s);
  };

  const startMonitori, n, g = useCallback(() => {
    setIsMonitoring(true);
    collectMetrics();
    
    // Monit, o, r continuous, l, y
    const interv, a, l = setInterv, a, l(collectMetrics, 100, 0, 0);
    return () => clearInterv, a, l(interv, a, l);
  }, [collectMetrics]);

  const stopMonitori, n, g = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  useEffect(() => {
    const clean, u, p = startMonitori, n, g();
    return clean, u, p;
  }, [startMonitori, n, g]);

  const getScoreCol, o, r = (val, u, e: number, threshol, d, s: { go, o, d: number; needsImprovem, e, n, t: number }) => {
    if (val, u, e <= threshol, d, s.go, o, d) return 'te, x, t-gre, e, n-5, 0, 0';
    if (val, u, e <= threshol, d, s.needsImproveme, n, t) return 'te, x, t-yellow-5, 0, 0';
    return 'te, x, t-r, e, d-5, 0, 0';
  };

  const formatTi, m, e = (ms: number) => `${ms.toFix e d(0)}ms`;
  const formatSco, r, e = (val, u, e: number) => val, u, e.toFix, e, d(2);

  if (!showDashboard || !metrics) return nu, l, l;

  return (
    <motion.d, i, v
      initi, a, l={{ opaci, t, y: 0, y: 20 }}
      anima, t, e={{ opaci, t, y: 1, y: 0 }}
      className={`bg-whi t e da r k:bg-gr a y-8 0 0 round e d-lg shad o w-lg p-6 ${classNa m e}`}
    >
      <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-6">
        <h3 className="te, x, t-xl fo, n, t-semibo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e" id="performance-monit, o, r">
          Performan, c, e Monit, o, r
        </h3>
        <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
          <d, i, v className={`w-3 h-3 round e d-fu l l ${isMonitori n g ? 'bg-gre e n-5 0 0' : 'bg-gr a y-4 0 0'}`} />          <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-600da, r, k:te, x, t-gr, a, y-4, 0, 0">
            {isMonitoring ? 'Monitori, n, g' : 'Stopp, e, d'}
          </sp, a, n>
        </d, i, v>
      </d, i, v>

      <d, i, v className="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 lg:gr, i, d-co, l, s-3 g, a, p-4 mb-6">
        <d, i, v className="bg-gr, a, y-50 d, a, r k:bg-gr, a, y-7, 0, 0 round, e, d-l, g, p-4">
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 d, a, r k:te, x, t-gr, a, y-400, m, b-1">Lo, a, d Ti, m, e</d, i, v>
          <d, i, v className={`te x t-2 x l fo n t-bo l d ${getScoreCol o r(metri c s.loadTi m e { go o d: 20 0 0 needsImproveme n t: 40 0 0 })}` }>            {formatTi, m, e(metrics.loadTi, m, e)}
          </d, i, v>
        </d, i, v>

        <d, i, v className="bg-gr, a, y-50 da, r, k: bg-gr, a, y-7, 0, 0 round, e, d-l, g, p-4">
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 d, a, r k:te, x, t-gr, a, y-400, m, b-1">Fir, s, t Contentf, u, l Pai, n, t</d, i, v>
          <d, i, v className={`te x t-2 x l fo n t-bo l d ${getScoreCol o r(metri c s.firstContentfulPai n t { go o d: 18 0 0 needsImproveme n t: 30 0 0 })}` }>            {formatTi, m, e(metrics.firstContentfulPai, n, t)}
          </d, i, v>
        </d, i, v>

        <d, i, v className="bg-gr, a, y-50 da, r, k: bg-gr, a, y-7, 0, 0 round, e, d-l, g, p-4">
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 d, a, r k:te, x, t-gr, a, y-400, m, b-1">Large, s, t Contentf, u, l Pai, n, t</d, i, v>
          <d, i, v className={`te x t-2 x l fo n t-bo l d ${getScoreCol o r(metri c s.largestContentfulPai n t { go o d: 25 0 0 needsImproveme n t: 40 0 0 })}` }>            {formatTi, m, e(metrics.largestContentfulPai, n, t)}
          </d, i, v>
        </d, i, v>

        <d, i, v className="bg-gr, a, y-50 da, r, k: bg-gr, a, y-7, 0, 0 round, e, d-l, g, p-4">
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 d, a, r k:te, x, t-gr, a, y-400, m, b-1">Fir, s, t Inp, u, t Del, a, y</d, i, v>
          <d, i, v className={`te x t-2 x l fo n t-bo l d ${getScoreCol o r(metri c s.firstInputDel a y { go o d: 1 0 0 needsImproveme n t: 3 0 0 })}` }>            {formatTi, m, e(metrics.firstInputDel, a, y)}
          </d, i, v>
        </d, i, v>

        <d, i, v className="bg-gr, a, y-50 da, r, k: bg-gr, a, y-7, 0, 0 round, e, d-l, g, p-4">
          <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 d, a, r k:te, x, t-gr, a, y-400, m, b-1">Cumulati, v, e Layo, u, t Shi, f, t</d, i, v>
          <d, i, v className={`te x t-2 x l fo n t-bo l d ${getScoreCol o r(metri c s.cumulativeLayoutShi f t { go o d: 0.1 needsImproveme n t: 0.25 })}` }>            {formatSco, r, e(metrics.cumulativeLayoutShi, f, t)}
          </d, i, v>
        </d, i, v>

        {metrics.memoryUsa, g, e && (
          <d, i, v className="bg-gr, a, y-50 da, r, k: bg-gr, a, y-7, 0, 0 round, e, d-l, g, p-4">
            <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 d, a, r k:te, x, t-gr, a, y-400, m, b-1">Memo, r, y Usa, g, e</d, i, v>
            <d, i, v className={`te x t-2 x l fo n t-bo l d ${getScoreCol o r(metri c s.memoryUsa g e { go o d: 30 needsImproveme n t: 50 })}` }>              {metrics.memoryUsa, g, e}MB
            </d, i, v>
          </d, i, v>
        )}
      </d, i, v>

      <AnimatePresence>
        {alerts.leng, t, h > 0 && (
          <motion.d, i, v
            initi, a, l={{ opaci, t, y: 0, heig, h, t: 0 }}
            anima, t, e={{ opaci, t, y: 1, heig, h, t: 'au, t, o' }}
            ex, i, t={{ opaci, t, y: 0, heig, h, t: 0 }}
            className="bg-yellow-50da, r, k: bg-yellow-9, 0, 0/20bord, e, r bord, e, r-yellow-200da, r, k:bord, e, r-yellow-800round, e, d-l, g, p-4"
          >
            <h4className="fo, n, t-semibo, l, d te, x, t-yellow-800da, r, k:te, x, t-yellow-200, m, b-2" id="performance-alerts">Performan, c, e Aler, t, s</h4>
            <ul className="spa, c, e-y-1">
              {alerts.m, a, p((ale, r, t, ind, e, x) => (
                <li k, e, y={ind, e, x} className="te, x, t-sm te, x, t-yellow-700da, r, k:te, x, t-yellow-3, 0, 0">
                  {ale, r, t}
                </li>
              ))}
            </ul>
          </motion.d, i, v>
        )}
      </AnimatePresence>

      <d, i, v className="mt-4fl, e, x spa, c, e-x-2">
        <butt, o, n
          onCli, c, k={isMonitoring ? stopMonitori, n, g : startMonitori, n, g}
          className={`px-4 p y-2round e d-lg te x t-sm fo n t-medi u m transiti o n-colo r s ${
            isMonitori n g
              ? 'bg-r e d-5 0 0 hov e r:bg-r e d-6 0 0 te x t-whi t e'
              : 'bg-gre e n-5 0 0 ho v e r:bg-gre e n-6 0 0 te x t-whi t e'          }`}
         ar, i, a-lab, e, l="{isMonitoring ? 'St, o, p Monitori, n, g' : 'Sta, r, t Monitori, n, g'}">
          {isMonitoring ? 'St, o, p Monitori, n, g' : 'Sta, r, t Monitori, n, g'}
        </butt, o, n>
        <butt, o, n
          onCli, c, k={collectMetrics}
          className="px-4 py-2 bg-bl, u, e-5, 0, 0 hov, e, r:bg-bl, u, e-6, 0, 0 te, x, t-whi, t, e round, e, d-lg te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s"         ar, i, a-lab, e, l="Refre, s, h Metri, c, s">
          Refre, s, h Metri, c, s
        </butt, o, n>
      </d, i, v>
    </motion.d, i, v>
  );
};

export default AdvancedPerformanceMonitor;
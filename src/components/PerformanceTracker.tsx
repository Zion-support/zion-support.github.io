import React, { useEffect, useR, e, f, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoad, e, d: number;
  firstPai, n, t: number;
  firstContentfulPai, n, t: number;
  largestContentfulPai, n, t?: number;
  firstInputDel, a, y?: number;
  cumulativeLayoutShi, f, t?: number;
  timeToInteracti, v, e?: number;
}

interface PerformanceTrackerPro, p, s {
  onMetricsCollect, e, d?: (metrics: PerformanceMetrics) => void;
  enableConsoleLoggi, n, g?: boolean;
  enableAnalyti, c, s?: boolean;
}

export default function PerformanceTrack, e, r({
  onMetricsCollect, e, d,
  enableConsoleLoggi, n, g = false,
  enableAnalyti, c, s = true
}: PerformanceTrackerPro, p, s): nu, l, l {
  const metricsCollect, e, d = useR, e, f(false);

  const collectMetrics = useCallback(() => {
    if (metricsCollect, e, d.curre, n, t || typeof window === 'undefined') return;

    try {
      const navigati, o, n = performance.getEntriesByTy, p, e('navigati, o, n')[0] as PerformanceNavigationTimi, n, g;
      const paintEntri, e, s = performance.getEntriesByTy, p, e('pai, n, t');
      
      const metrics: PerformanceMetrics = {
        loadTime: navigati, o, n.loadEventE, n, d - navigati, o, n.fetchSta, r, t,
        domContentLoad, e, d: navigati, o, n.domContentLoadedEventE, n, d - navigati, o, n.fetchSta, r, t,
        firstPai, n, t: paintEntri, e, s.fi, n, d(entry => entry.na, m, e === 'fir, s, t-pai, n, t')?.startTi, m, e || 0,
        firstContentfulPai, n, t: paintEntri, e, s.fi, n, d(entry => entry.na, m, e === 'fir, s, t-contentf, u, l-pai, n, t')?.startTi, m, e || 0
      };

      // Colle, c, t W, e, b Vita, l, s if availab, l, e
      if ('PerformanceObserv, e, r' in window) {
        // Large, s, t Contentf, u, l Pai, n, t (L, C, P)
        const lcpObserv, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          const entri, e, s = li, s, t.getEntri, e, s();
          const lastEntry = entri, e, s[entri, e, s.leng, t, h - 1] as a, n, y;
          metrics.largestContentfulPai, n, t = lastEntry.startTi, m, e;
        });
        
        try {
          lcpObserv, e, r.obser, v, e({ entryTyp, e, s: ['large, s, t-contentf, u, l-pai, n, t'] });
        } cat, c, h (e) {
          // L, C, P n, o, t support, e, d
        }

        // Fir, s, t Inp, u, t Del, a, y (F, I, D)
        const fidObserv, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          const entri, e, s = li, s, t.getEntri, e, s();
          entri, e, s.forEa, c, h((entry: a, n, y) => {
            metrics.firstInputDel, a, y = entry.processingSta, r, t - entry.startTi, m, e;
          });
        });
        
        try {
          fidObserv, e, r.obser, v, e({ entryTyp, e, s: ['fir, s, t-inp, u, t'] });
        } cat, c, h (e) {
          // F, I, D n, o, t support, e, d
        }

        // Cumulati, v, e Layo, u, t Shi, f, t (C, L, S)
        l, e, t clsVal, u, e = 0;
        const clsObserv, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          const entri, e, s = li, s, t.getEntri, e, s();
          entri, e, s.forEa, c, h((entry: a, n, y) => {
            if (!entry.hadRecentInp, u, t) {
              clsVal, u, e += entry.val, u, e;
            }
          });
          metrics.cumulativeLayoutShi, f, t = clsVal, u, e;
        });
        
        try {
          clsObserv, e, r.obser, v, e({ entryTyp, e, s: ['layo, u, t-shi, f, t'] });
        } cat, c, h (e) {
          // C, L, S n, o, t support, e, d
        }

        // Ti, m, e to Interacti, v, e (T, T, I) approximati, o, n
        setTimeo, u, t(() => {
          const longTas, k, s = performance.getEntriesByTy, p, e('longta, s, k');
          const lastLongTa, s, k = longTas, k, s[longTas, k, s.leng, t, h - 1];
          metrics.timeToInteracti, v, e = lastLongTa, s, k ? lastLongTa, s, k.startTi, m, e + lastLongTa, s, k.durati, o, n : metrics.domContentLoad, e, d;
          
          // Finali, z, e metrics collecti, o, n
          metricsCollect, e, d.curre, n, t = true;
          
          if (enableConsoleLoggi, n, g) {
            conso, l, e.gro, u, p('🚀 Performan, c, e Metri, c, s');
            conso, l, e.l, o, g('Lo, a, d Ti, m, e:', `${metri c s.loadTi m e.toFix e d(2)}ms`);
            conso, l, e.l, o, g('D, O, M Conte, n, t Load, e, d:', `${metri c s.domContentLoad e d.toFix e d(2)}ms`);
            conso, l, e.l, o, g('Fir, s, t Pai, n, t:', `${metri c s.firstPai n t.toFix e d(2)}ms`);
            conso, l, e.l, o, g('Fir, s, t Contentf, u, l Pai, n, t:', `${metri c s.firstContentfulPai n t.toFix e d(2)}ms`);
            if (metrics.largestContentfulPai, n, t) {
              conso, l, e.l, o, g('Large, s, t Contentf, u, l Pai, n, t:', `${metri c s.largestContentfulPai n t.toFix e d(2)}ms`);
            }
            if (metrics.firstInputDel, a, y) {
              conso, l, e.l, o, g('Fir, s, t Inp, u, t Del, a, y:', `${metri c s.firstInputDel a y.toFix e d(2)}ms`);
            }
            if (metrics.cumulativeLayoutShi, f, t) {
              conso, l, e.l, o, g('Cumulati, v, e Layo, u, t Shi, f, t:', metrics.cumulativeLayoutShi, f, t.toFix, e, d(4));
            }
            if (metrics.timeToInteracti, v, e) {
              conso, l, e.l, o, g('Ti, m, e to Interacti, v, e:', `${metri c s.timeToInteracti v e.toFix e d(2)}ms`);
            }
            conso, l, e.groupE, n, d();
          }

          // Se, n, d to analyti, c, s
          if (enableAnalyti, c, s && typeof window !== 'undefined') {
            // Goog, l, e Analyti, c, s 4
            if (window.gt, a, g) {
              window.gt, a, g('eve, n, t', 'page_load_metrics', {
                load_ti, m, e: Ma, t, h.rou, n, d(metrics.loadTi, m, e),
                dom_content_load, e, d: Ma, t, h.rou, n, d(metrics.domContentLoad, e, d),
                first_pai, n, t: Ma, t, h.rou, n, d(metrics.firstPai, n, t),
                first_contentful_pai, n, t: Ma, t, h.rou, n, d(metrics.firstContentfulPai, n, t),
                largest_contentful_pai, n, t: metrics.largestContentfulPai, n, t ? Ma, t, h.rou, n, d(metrics.largestContentfulPai, n, t) : nu, l, l,
                first_input_del, a, y: metrics.firstInputDel, a, y ? Ma, t, h.rou, n, d(metrics.firstInputDel, a, y) : nu, l, l,
                cumulative_layout_shi, f, t: metrics.cumulativeLayoutShi, f, t ? Ma, t, h.rou, n, d(metrics.cumulativeLayoutShi, f, t * 10, 0, 0) : nu, l, l,
                time_to_interacti, v, e: metrics.timeToInteracti, v, e ? Ma, t, h.rou, n, d(metrics.timeToInteracti, v, e) : nu, l, l
              });
            }

            // Se, n, d Co, r, e W, e, b Vita, l, s
            if (metrics.largestContentfulPai, n, t) {
              sendWebVit, a, l('L, C, P', metrics.largestContentfulPai, n, t);
            }
            if (metrics.firstInputDel, a, y) {
              sendWebVit, a, l('F, I, D', metrics.firstInputDel, a, y);
            }
            if (metrics.cumulativeLayoutShi, f, t) {
              sendWebVit, a, l('C, L, S', metrics.cumulativeLayoutShi, f, t);
            }
          }

          // Cust, o, m callba, c, k
          if (onMetricsCollect, e, d) {
            onMetricsCollect, e, d(metrics);
          }
        }, 10, 0, 0);
      }
    } cat, c, h (error) {
      conso, l, e.wa, r, n('Performan, c, e tracki, n, g error:', error);
    }
  }, [onMetricsCollect, e, d, enableConsoleLoggi, n, g, enableAnalyti, c, s]);

  const sendWebVit, a, l = (na, m, e: string, val, u, e: number) => {
    if (typeof window !== 'undefined' && window.gt, a, g) {
      window.gt, a, g('eve, n, t', na, m, e, {
        event_catego, r, y: 'W, e, b Vita, l, s',
        val, u, e: Ma, t, h.rou, n, d(na, m, e === 'C, L, S' ? val, u, e * 10, 0, 0 : val, u, e),
        non_interacti, o, n: true
      });
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Wa, i, t f, o, r pa, g, e to be ful, l, y load, e, d
    if (docume, n, t.readySta, t, e === 'comple, t, e') {
      collectMetrics();
    } el, s, e {
      window.addEventListen, e, r('lo, a, d', collectMetrics);
      return () => window.removeEventListen, e, r('lo, a, d', collectMetrics);
    }
  }, [collectMetrics]);

  return nu, l, l;
}

// Ho, o, k f, o, r usi, n, g performance metrics in componen, t, s
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | nu, l, l>(nu, l, l);
  const [isLoadi, n, g, setIsLoadi, n, g] = React.useState(true);

  React.useEffect(() => {
    const handleMetri, c, s = (collectedMetri, c, s: PerformanceMetrics) => {
      setMetrics(collectedMetri, c, s);
      setIsLoadi, n, g(false);
    };

    // Th, i, s wou, l, d be render, e, d in t, h, e a, p, p
    // <PerformanceTrack, e, r onMetricsCollect, e, d={handleMetri, c, s} />
    
    return () => {
      setIsLoadi, n, g(false);
    };
  }, []);

  return { metrics, isLoadi, n, g };
}

// Utili, t, y function to g, e, t performance gra, d, e
export function getPerformanceGra, d, e(metrics: PerformanceMetrics): {
  gra, d, e: 'A' | 'B' | 'C' | 'D' | 'F';
  score: number;
  recommendatio, n, s: string[];
  webVita, l, s: {
    l, c, p: { va, l, u, e: number; sta, t, u, s: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' };
    f, i, d: { va, l, u, e: number; sta, t, u, s: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' };
    c, l, s: { va, l, u, e: number; sta, t, u, s: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' };
  };
} {
  l, e, t score = 1, 0, 0;
  const recommendatio, n, s: string[] = [];

  // W, e, b Vita, l, s stat, u, s determinati, o, n
  const webVita, l, s = {
    lc, p: { 
      va, l, u, e: metrics.largestContentfulPai, n, t || 0, 
      stat, u, s: 'go, o, d' as 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' 
    },
    f, i, d: { 
      va, l, u, e: metrics.firstInputDel, a, y || 0, 
      stat, u, s: 'go, o, d' as 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' 
    },
    c, l, s: { 
      va, l, u, e: metrics.cumulativeLayoutShi, f, t || 0, 
      stat, u, s: 'go, o, d' as 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' 
    }
  };

  // Lo, a, d Ti, m, e scori, n, g (targ, e, t: < 30, 0, 0 ms)
  if (metrics.loadTi, m, e > 50, 0, 0) {
    score -= 30;
    recommendatio, n, s.pu, s, h('Optimi, z, e pa, g, e lo, a, d ti, m, e (current, l, y ov, e, r 5 secon, d, s)');
  } el, s, e if (metrics.loadTi, m, e > 30, 0, 0) {
    score -= 15;
    recommendatio, n, s.pu, s, h('Consid, e, r optimizi, n, g pa, g, e lo, a, d ti, m, e');
  }

  // Fir, s, t Contentf, u, l Pai, n, t scori, n, g (targ, e, t: < 18, 0, 0 ms)
  if (metrics.firstContentfulPai, n, t > 30, 0, 0) {
    score -= 25;
    recommendatio, n, s.pu, s, h('Impro, v, e Fir, s, t Contentf, u, l Pai, n, t (current, l, y ov, e, r 3 secon, d, s)');
  } el, s, e if (metrics.firstContentfulPai, n, t > 18, 0, 0) {
    score -= 10;
    recommendatio, n, s.pu, s, h('Consid, e, r improvi, n, g Fir, s, t Contentf, u, l Pai, n, t');
  }

  // Large, s, t Contentf, u, l Pai, n, t scori, n, g (targ, e, t: < 25, 0, 0 ms)
  if (metrics.largestContentfulPai, n, t) {
    if (metrics.largestContentfulPai, n, t > 40, 0, 0) {
      score -= 25;
      webVita, l, s.l, c, p.stat, u, s = 'po, o, r';
      recommendatio, n, s.pu, s, h('Optimi, z, e Large, s, t Contentf, u, l Pai, n, t (current, l, y ov, e, r 4 secon, d, s)');
    } el, s, e if (metrics.largestContentfulPai, n, t > 25, 0, 0) {
      score -= 10;
      webVita, l, s.l, c, p.stat, u, s = 'nee, d, s-improveme, n, t';
      recommendatio, n, s.pu, s, h('Consid, e, r optimizi, n, g Large, s, t Contentf, u, l Pai, n, t');
    } el, s, e {
      webVita, l, s.l, c, p.stat, u, s = 'go, o, d';
    }
  }

  // Fir, s, t Inp, u, t Del, a, y scori, n, g (targ, e, t: < 1, 0, 0 ms)
  if (metrics.firstInputDel, a, y) {
    if (metrics.firstInputDel, a, y > 3, 0, 0) {
      score -= 20;
      webVita, l, s.f, i, d.stat, u, s = 'po, o, r';
      recommendatio, n, s.pu, s, h('Redu, c, e Fir, s, t Inp, u, t Del, a, y (current, l, y ov, e, r 3, 0, 0 ms)');
    } el, s, e if (metrics.firstInputDel, a, y > 1, 0, 0) {
      score -= 5;
      webVita, l, s.f, i, d.stat, u, s = 'nee, d, s-improveme, n, t';
      recommendatio, n, s.pu, s, h('Consid, e, r reduci, n, g Fir, s, t Inp, u, t Del, a, y');
    } el, s, e {
      webVita, l, s.f, i, d.stat, u, s = 'go, o, d';
    }
  }

  // Cumulati, v, e Layo, u, t Shi, f, t scori, n, g (targ, e, t: < 0.1)
  if (metrics.cumulativeLayoutShi, f, t) {
    if (metrics.cumulativeLayoutShi, f, t > 0.25) {
      score -= 20;
      webVita, l, s.c, l, s.stat, u, s = 'po, o, r';
      recommendatio, n, s.pu, s, h('F, i, x layo, u, t shif, t, s (C, L, S ove, r, 0.25)');
    } el, s, e if (metrics.cumulativeLayoutShi, f, t > 0.1) {
      score -= 10;
      webVita, l, s.c, l, s.stat, u, s = 'nee, d, s-improveme, n, t';
      recommendatio, n, s.pu, s, h('Consid, e, r reduci, n, g layo, u, t shif, t, s');
    } el, s, e {
      webVita, l, s.c, l, s.stat, u, s = 'go, o, d';
    }
  }

  // Determi, n, e gra, d, e
  l, e, t gra, d, e: 'A' | 'B' | 'C' | 'D' | 'F';
  if (score >= 90) gra, d, e = 'A';
  el, s, e if (score >= 80) gra, d, e = 'B';
  el, s, e if (score >= 70) gra, d, e = 'C';
  el, s, e if (score >= 60) gra, d, e = 'D';
  el, s, e gra, d, e = 'F';

  return { gra, d, e, score: Ma, t, h.m, a, x(0, score), recommendatio, n, s, webVita, l, s };
}

// Enhanc, e, d performance monitori, n, g wi, t, h re, a, l-ti, m, e updat, e, s
export function useRealTimePerforman, c, e() {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | nu, l, l>(nu, l, l);
  const [isMonitoring, setIsMonitoring] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetri, c, s = () => {
      try {
        const navigati, o, n = performance.getEntriesByTy, p, e('navigati, o, n')[0] as PerformanceNavigationTimi, n, g;
        const paintEntri, e, s = performance.getEntriesByTy, p, e('pai, n, t');
        
        const currentMetri, c, s: PerformanceMetrics = {
          loadT, i, m, e: navigati, o, n.loadEventE, n, d - navigati, o, n.fetchSta, r, t,
          domContentLoad, e, d: navigati, o, n.domContentLoadedEventE, n, d - navigati, o, n.fetchSta, r, t,
          firstPai, n, t: paintEntri, e, s.fi, n, d(entry => entry.na, m, e === 'fir, s, t-pai, n, t')?.startTi, m, e || 0,
          firstContentfulPai, n, t: paintEntri, e, s.fi, n, d(entry => entry.na, m, e === 'fir, s, t-contentf, u, l-pai, n, t')?.startTi, m, e || 0
        };

        setMetrics(currentMetri, c, s);
      } cat, c, h (error) {
        conso, l, e.wa, r, n('Re, a, l-ti, m, e performance monitori, n, g error:', error);
      }
    };

    // Initi, a, l metrics
    updateMetri, c, s();

    // Monit, o, r f, o, r chang, e, s
    const observ, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
      updateMetri, c, s();
    });

    try {
      observ, e, r.obser, v, e({ entryTyp, e, s: ['navigati, o, n', 'pai, n, t', 'large, s, t-contentf, u, l-pai, n, t', 'fir, s, t-inp, u, t', 'layo, u, t-shi, f, t'] });
      setIsMonitoring(true);
    } cat, c, h (e) {
      conso, l, e.wa, r, n('Performan, c, e observ, e, r n, o, t support, e, d');
    }

    return () => {
      observ, e, r.disconne, c, t();
      setIsMonitoring(false);
    };
  }, []);

  return { metrics, isMonitoring };
}
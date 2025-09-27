import React, { useEffect, useR, e, f, useCallba, c, k } from 'rea, c, t';

interface PerformanceMetri, c, s {
  loadTi, m, e: numb, e, r;
  domContentLoad, e, d: numb, e, r;
  firstPai, n, t: numb, e, r;
  firstContentfulPai, n, t: numb, e, r;
  largestContentfulPai, n, t?: numb, e, r;
  firstInputDel, a, y?: numb, e, r;
  cumulativeLayoutShi, f, t?: numb, e, r;
  timeToInteracti, v, e?: numb, e, r;
}

interface PerformanceTrackerPro, p, s {
  onMetricsCollect, e, d?: (metri, c, s: PerformanceMetri, c, s) => vo, i, d;
  enableConsoleLoggi, n, g?: boole, a, n;
  enableAnalyti, c, s?: boole, a, n;
}

export default function PerformanceTrack, e, r({
  onMetricsCollect, e, d,
  enableConsoleLoggi, n, g = fal, s, e,
  enableAnalyti, c, s = tr, u, e
}: PerformanceTrackerPro, p, s): nu, l, l {
  con, s, t metricsCollect, e, d = useR, e, f(fal, s, e);

  con, s, t collectMetri, c, s = useCallba, c, k(() => {
    if (metricsCollect, e, d.curre, n, t || type, o, f wind, o, w === 'undefin, e, d') retu, r, n;

    t, r, y {
      con, s, t navigati, o, n = performan, c, e.getEntriesByTy, p, e('navigati, o, n')[0] as PerformanceNavigationTimi, n, g;
      con, s, t paintEntri, e, s = performan, c, e.getEntriesByTy, p, e('pai, n, t');
      
      con, s, t metri, c, s: PerformanceMetri, c, s = {
        loadTi, m, e: navigati, o, n.loadEventE, n, d - navigati, o, n.fetchSta, r, t,
        domContentLoad, e, d: navigati, o, n.domContentLoadedEventE, n, d - navigati, o, n.fetchSta, r, t,
        firstPai, n, t: paintEntri, e, s.fi, n, d(ent, r, y => ent, r, y.na, m, e === 'fir, s, t-pai, n, t')?.startTi, m, e || 0,
        firstContentfulPai, n, t: paintEntri, e, s.fi, n, d(ent, r, y => ent, r, y.na, m, e === 'fir, s, t-contentf, u, l-pai, n, t')?.startTi, m, e || 0
      };

      // Colle, c, t W, e, b Vita, l, s if availab, l, e
      if ('PerformanceObserv, e, r' in wind, o, w) {
        // Large, s, t Contentf, u, l Pai, n, t (L, C, P)
        con, s, t lcpObserv, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          con, s, t entri, e, s = li, s, t.getEntri, e, s();
          con, s, t lastEnt, r, y = entri, e, s[entri, e, s.leng, t, h - 1] as a, n, y;
          metri, c, s.largestContentfulPai, n, t = lastEnt, r, y.startTi, m, e;
        });
        
        t, r, y {
          lcpObserv, e, r.obser, v, e({ entryTyp, e, s: ['large, s, t-contentf, u, l-pai, n, t'] });
        } cat, c, h (e) {
          // L, C, P n, o, t support, e, d
        }

        // Fir, s, t Inp, u, t Del, a, y (F, I, D)
        con, s, t fidObserv, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          con, s, t entri, e, s = li, s, t.getEntri, e, s();
          entri, e, s.forEa, c, h((ent, r, y: a, n, y) => {
            metri, c, s.firstInputDel, a, y = ent, r, y.processingSta, r, t - ent, r, y.startTi, m, e;
          });
        });
        
        t, r, y {
          fidObserv, e, r.obser, v, e({ entryTyp, e, s: ['fir, s, t-inp, u, t'] });
        } cat, c, h (e) {
          // F, I, D n, o, t support, e, d
        }

        // Cumulati, v, e Layo, u, t Shi, f, t (C, L, S)
        l, e, t clsVal, u, e = 0;
        con, s, t clsObserv, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
          con, s, t entri, e, s = li, s, t.getEntri, e, s();
          entri, e, s.forEa, c, h((ent, r, y: a, n, y) => {
            if (!ent, r, y.hadRecentInp, u, t) {
              clsVal, u, e += ent, r, y.val, u, e;
            }
          });
          metri, c, s.cumulativeLayoutShi, f, t = clsVal, u, e;
        });
        
        t, r, y {
          clsObserv, e, r.obser, v, e({ entryTyp, e, s: ['layo, u, t-shi, f, t'] });
        } cat, c, h (e) {
          // C, L, S n, o, t support, e, d
        }

        // Ti, m, e to Interacti, v, e (T, T, I) approximati, o, n
        setTimeo, u, t(() => {
          con, s, t longTas, k, s = performan, c, e.getEntriesByTy, p, e('longta, s, k');
          con, s, t lastLongTa, s, k = longTas, k, s[longTas, k, s.leng, t, h - 1];
          metri, c, s.timeToInteracti, v, e = lastLongTa, s, k ? lastLongTa, s, k.startTi, m, e + lastLongTa, s, k.durati, o, n : metri, c, s.domContentLoad, e, d;
          
          // Finali, z, e metri, c, s collecti, o, n
          metricsCollect, e, d.curre, n, t = tr, u, e;
          
          if (enableConsoleLoggi, n, g) {
            conso, l, e.gro, u, p('🚀 Performan, c, e Metri, c, s');
            conso, l, e.l, o, g('Lo, a, d Ti, m, e:', `${metri, c, s.loadTi, m, e.toFix, e, d(2)}ms`);
            conso, l, e.l, o, g('D, O, M Conte, n, t Load, e, d:', `${metri, c, s.domContentLoad, e, d.toFix, e, d(2)}ms`);
            conso, l, e.l, o, g('Fir, s, t Pai, n, t:', `${metri, c, s.firstPai, n, t.toFix, e, d(2)}ms`);
            conso, l, e.l, o, g('Fir, s, t Contentf, u, l Pai, n, t:', `${metri, c, s.firstContentfulPai, n, t.toFix, e, d(2)}ms`);
            if (metri, c, s.largestContentfulPai, n, t) {
              conso, l, e.l, o, g('Large, s, t Contentf, u, l Pai, n, t:', `${metri, c, s.largestContentfulPai, n, t.toFix, e, d(2)}ms`);
            }
            if (metri, c, s.firstInputDel, a, y) {
              conso, l, e.l, o, g('Fir, s, t Inp, u, t Del, a, y:', `${metri, c, s.firstInputDel, a, y.toFix, e, d(2)}ms`);
            }
            if (metri, c, s.cumulativeLayoutShi, f, t) {
              conso, l, e.l, o, g('Cumulati, v, e Layo, u, t Shi, f, t:', metri, c, s.cumulativeLayoutShi, f, t.toFix, e, d(4));
            }
            if (metri, c, s.timeToInteracti, v, e) {
              conso, l, e.l, o, g('Ti, m, e to Interacti, v, e:', `${metri, c, s.timeToInteracti, v, e.toFix, e, d(2)}ms`);
            }
            conso, l, e.groupE, n, d();
          }

          // Se, n, d to analyti, c, s
          if (enableAnalyti, c, s && type, o, f wind, o, w !== 'undefin, e, d') {
            // Goog, l, e Analyti, c, s 4
            if (wind, o, w.gt, a, g) {
              wind, o, w.gt, a, g('eve, n, t', 'page_load_metri, c, s', {
                load_ti, m, e: Ma, t, h.rou, n, d(metri, c, s.loadTi, m, e),
                dom_content_load, e, d: Ma, t, h.rou, n, d(metri, c, s.domContentLoad, e, d),
                first_pai, n, t: Ma, t, h.rou, n, d(metri, c, s.firstPai, n, t),
                first_contentful_pai, n, t: Ma, t, h.rou, n, d(metri, c, s.firstContentfulPai, n, t),
                largest_contentful_pai, n, t: metri, c, s.largestContentfulPai, n, t ? Ma, t, h.rou, n, d(metri, c, s.largestContentfulPai, n, t) : nu, l, l,
                first_input_del, a, y: metri, c, s.firstInputDel, a, y ? Ma, t, h.rou, n, d(metri, c, s.firstInputDel, a, y) : nu, l, l,
                cumulative_layout_shi, f, t: metri, c, s.cumulativeLayoutShi, f, t ? Ma, t, h.rou, n, d(metri, c, s.cumulativeLayoutShi, f, t * 10, 0, 0) : nu, l, l,
                time_to_interacti, v, e: metri, c, s.timeToInteracti, v, e ? Ma, t, h.rou, n, d(metri, c, s.timeToInteracti, v, e) : nu, l, l
              });
            }

            // Se, n, d Co, r, e W, e, b Vita, l, s
            if (metri, c, s.largestContentfulPai, n, t) {
              sendWebVit, a, l('L, C, P', metri, c, s.largestContentfulPai, n, t);
            }
            if (metri, c, s.firstInputDel, a, y) {
              sendWebVit, a, l('F, I, D', metri, c, s.firstInputDel, a, y);
            }
            if (metri, c, s.cumulativeLayoutShi, f, t) {
              sendWebVit, a, l('C, L, S', metri, c, s.cumulativeLayoutShi, f, t);
            }
          }

          // Cust, o, m callba, c, k
          if (onMetricsCollect, e, d) {
            onMetricsCollect, e, d(metri, c, s);
          }
        }, 10, 0, 0);
      }
    } cat, c, h (error) {
      conso, l, e.wa, r, n('Performan, c, e tracki, n, g error:', error);
    }
  }, [onMetricsCollect, e, d, enableConsoleLoggi, n, g, enableAnalyti, c, s]);

  con, s, t sendWebVit, a, l = (na, m, e: string, val, u, e: numb, e, r) => {
    if (type, o, f wind, o, w !== 'undefin, e, d' && wind, o, w.gt, a, g) {
      wind, o, w.gt, a, g('eve, n, t', na, m, e, {
        event_catego, r, y: 'W, e, b Vita, l, s',
        val, u, e: Ma, t, h.rou, n, d(na, m, e === 'C, L, S' ? val, u, e * 10, 0, 0 : val, u, e),
        non_interacti, o, n: tr, u, e
      });
    }
  };

  useEffect(() => {
    if (type, o, f wind, o, w === 'undefin, e, d') retu, r, n;

    // Wa, i, t f, o, r pa, g, e to be ful, l, y load, e, d
    if (docume, n, t.readySta, t, e === 'comple, t, e') {
      collectMetri, c, s();
    } el, s, e {
      wind, o, w.addEventListen, e, r('lo, a, d', collectMetri, c, s);
      retu, r, n () => wind, o, w.removeEventListen, e, r('lo, a, d', collectMetri, c, s);
    }
  }, [collectMetri, c, s]);

  retu, r, n nu, l, l;
}

// Ho, o, k f, o, r usi, n, g performan, c, e metri, c, s in componen, t, s
export function usePerformanceMetri, c, s() {
  con, s, t [metri, c, s, setMetri, c, s] = React.useState<PerformanceMetri, c, s | nu, l, l>(nu, l, l);
  con, s, t [isLoadi, n, g, setIsLoadi, n, g] = React.useState(tr, u, e);

  React.useEffect(() => {
    con, s, t handleMetri, c, s = (collectedMetri, c, s: PerformanceMetri, c, s) => {
      setMetri, c, s(collectedMetri, c, s);
      setIsLoadi, n, g(fal, s, e);
    };

    // Th, i, s wou, l, d be render, e, d in t, h, e a, p, p
    // <PerformanceTrack, e, r onMetricsCollect, e, d={handleMetri, c, s} />
    
    retu, r, n () => {
      setIsLoadi, n, g(fal, s, e);
    };
  }, []);

  retu, r, n { metri, c, s, isLoadi, n, g };
}

// Utili, t, y function to g, e, t performan, c, e gra, d, e
export function getPerformanceGra, d, e(metri, c, s: PerformanceMetri, c, s): {
  gra, d, e: 'A' | 'B' | 'C' | 'D' | 'F';
  sco, r, e: numb, e, r;
  recommendatio, n, s: string[];
  webVita, l, s: {
    l, c, p: { va, l, u, e: numb, e, r; sta, t, u, s: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' };
    f, i, d: { va, l, u, e: numb, e, r; sta, t, u, s: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' };
    c, l, s: { va, l, u, e: numb, e, r; sta, t, u, s: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' };
  };
} {
  l, e, t sco, r, e = 1, 0, 0;
  con, s, t recommendatio, n, s: string[] = [];

  // W, e, b Vita, l, s stat, u, s determinati, o, n
  con, s, t webVita, l, s = {
    lc, p: { 
      va, l, u, e: metri, c, s.largestContentfulPai, n, t || 0, 
      stat, u, s: 'go, o, d' as 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' 
    },
    f, i, d: { 
      va, l, u, e: metri, c, s.firstInputDel, a, y || 0, 
      stat, u, s: 'go, o, d' as 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' 
    },
    c, l, s: { 
      va, l, u, e: metri, c, s.cumulativeLayoutShi, f, t || 0, 
      stat, u, s: 'go, o, d' as 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' 
    }
  };

  // Lo, a, d Ti, m, e scori, n, g (targ, e, t: < 30, 0, 0 ms)
  if (metri, c, s.loadTi, m, e > 50, 0, 0) {
    sco, r, e -= 30;
    recommendatio, n, s.pu, s, h('Optimi, z, e pa, g, e lo, a, d ti, m, e (current, l, y ov, e, r 5 secon, d, s)');
  } el, s, e if (metri, c, s.loadTi, m, e > 30, 0, 0) {
    sco, r, e -= 15;
    recommendatio, n, s.pu, s, h('Consid, e, r optimizi, n, g pa, g, e lo, a, d ti, m, e');
  }

  // Fir, s, t Contentf, u, l Pai, n, t scori, n, g (targ, e, t: < 18, 0, 0 ms)
  if (metri, c, s.firstContentfulPai, n, t > 30, 0, 0) {
    sco, r, e -= 25;
    recommendatio, n, s.pu, s, h('Impro, v, e Fir, s, t Contentf, u, l Pai, n, t (current, l, y ov, e, r 3 secon, d, s)');
  } el, s, e if (metri, c, s.firstContentfulPai, n, t > 18, 0, 0) {
    sco, r, e -= 10;
    recommendatio, n, s.pu, s, h('Consid, e, r improvi, n, g Fir, s, t Contentf, u, l Pai, n, t');
  }

  // Large, s, t Contentf, u, l Pai, n, t scori, n, g (targ, e, t: < 25, 0, 0 ms)
  if (metri, c, s.largestContentfulPai, n, t) {
    if (metri, c, s.largestContentfulPai, n, t > 40, 0, 0) {
      sco, r, e -= 25;
      webVita, l, s.l, c, p.stat, u, s = 'po, o, r';
      recommendatio, n, s.pu, s, h('Optimi, z, e Large, s, t Contentf, u, l Pai, n, t (current, l, y ov, e, r 4 secon, d, s)');
    } el, s, e if (metri, c, s.largestContentfulPai, n, t > 25, 0, 0) {
      sco, r, e -= 10;
      webVita, l, s.l, c, p.stat, u, s = 'nee, d, s-improveme, n, t';
      recommendatio, n, s.pu, s, h('Consid, e, r optimizi, n, g Large, s, t Contentf, u, l Pai, n, t');
    } el, s, e {
      webVita, l, s.l, c, p.stat, u, s = 'go, o, d';
    }
  }

  // Fir, s, t Inp, u, t Del, a, y scori, n, g (targ, e, t: < 1, 0, 0 ms)
  if (metri, c, s.firstInputDel, a, y) {
    if (metri, c, s.firstInputDel, a, y > 3, 0, 0) {
      sco, r, e -= 20;
      webVita, l, s.f, i, d.stat, u, s = 'po, o, r';
      recommendatio, n, s.pu, s, h('Redu, c, e Fir, s, t Inp, u, t Del, a, y (current, l, y ov, e, r 3, 0, 0 ms)');
    } el, s, e if (metri, c, s.firstInputDel, a, y > 1, 0, 0) {
      sco, r, e -= 5;
      webVita, l, s.f, i, d.stat, u, s = 'nee, d, s-improveme, n, t';
      recommendatio, n, s.pu, s, h('Consid, e, r reduci, n, g Fir, s, t Inp, u, t Del, a, y');
    } el, s, e {
      webVita, l, s.f, i, d.stat, u, s = 'go, o, d';
    }
  }

  // Cumulati, v, e Layo, u, t Shi, f, t scori, n, g (targ, e, t: < 0.1)
  if (metri, c, s.cumulativeLayoutShi, f, t) {
    if (metri, c, s.cumulativeLayoutShi, f, t > 0.25) {
      sco, r, e -= 20;
      webVita, l, s.c, l, s.stat, u, s = 'po, o, r';
      recommendatio, n, s.pu, s, h('F, i, x layo, u, t shif, t, s (C, L, S ove, r, 0.25)');
    } el, s, e if (metri, c, s.cumulativeLayoutShi, f, t > 0.1) {
      sco, r, e -= 10;
      webVita, l, s.c, l, s.stat, u, s = 'nee, d, s-improveme, n, t';
      recommendatio, n, s.pu, s, h('Consid, e, r reduci, n, g layo, u, t shif, t, s');
    } el, s, e {
      webVita, l, s.c, l, s.stat, u, s = 'go, o, d';
    }
  }

  // Determi, n, e gra, d, e
  l, e, t gra, d, e: 'A' | 'B' | 'C' | 'D' | 'F';
  if (sco, r, e >= 90) gra, d, e = 'A';
  el, s, e if (sco, r, e >= 80) gra, d, e = 'B';
  el, s, e if (sco, r, e >= 70) gra, d, e = 'C';
  el, s, e if (sco, r, e >= 60) gra, d, e = 'D';
  el, s, e gra, d, e = 'F';

  retu, r, n { gra, d, e, sco, r, e: Ma, t, h.m, a, x(0, sco, r, e), recommendatio, n, s, webVita, l, s };
}

// Enhanc, e, d performan, c, e monitori, n, g wi, t, h re, a, l-ti, m, e updat, e, s
export function useRealTimePerforman, c, e() {
  con, s, t [metri, c, s, setMetri, c, s] = React.useState<PerformanceMetri, c, s | nu, l, l>(nu, l, l);
  con, s, t [isMonitori, n, g, setIsMonitori, n, g] = React.useState(fal, s, e);

  React.useEffect(() => {
    if (type, o, f wind, o, w === 'undefin, e, d') retu, r, n;

    con, s, t updateMetri, c, s = () => {
      t, r, y {
        con, s, t navigati, o, n = performan, c, e.getEntriesByTy, p, e('navigati, o, n')[0] as PerformanceNavigationTimi, n, g;
        con, s, t paintEntri, e, s = performan, c, e.getEntriesByTy, p, e('pai, n, t');
        
        con, s, t currentMetri, c, s: PerformanceMetri, c, s = {
          loadT, i, m, e: navigati, o, n.loadEventE, n, d - navigati, o, n.fetchSta, r, t,
          domContentLoad, e, d: navigati, o, n.domContentLoadedEventE, n, d - navigati, o, n.fetchSta, r, t,
          firstPai, n, t: paintEntri, e, s.fi, n, d(ent, r, y => ent, r, y.na, m, e === 'fir, s, t-pai, n, t')?.startTi, m, e || 0,
          firstContentfulPai, n, t: paintEntri, e, s.fi, n, d(ent, r, y => ent, r, y.na, m, e === 'fir, s, t-contentf, u, l-pai, n, t')?.startTi, m, e || 0
        };

        setMetri, c, s(currentMetri, c, s);
      } cat, c, h (error) {
        conso, l, e.wa, r, n('Re, a, l-ti, m, e performan, c, e monitori, n, g error:', error);
      }
    };

    // Initi, a, l metri, c, s
    updateMetri, c, s();

    // Monit, o, r f, o, r chang, e, s
    con, s, t observ, e, r = n, e, w PerformanceObserv, e, r((li, s, t) => {
      updateMetri, c, s();
    });

    t, r, y {
      observ, e, r.obser, v, e({ entryTyp, e, s: ['navigati, o, n', 'pai, n, t', 'large, s, t-contentf, u, l-pai, n, t', 'fir, s, t-inp, u, t', 'layo, u, t-shi, f, t'] });
      setIsMonitori, n, g(tr, u, e);
    } cat, c, h (e) {
      conso, l, e.wa, r, n('Performan, c, e observ, e, r n, o, t support, e, d');
    }

    retu, r, n () => {
      observ, e, r.disconne, c, t();
      setIsMonitori, n, g(fal, s, e);
    };
  }, []);

  retu, r, n { metri, c, s, isMonitori, n, g };
}
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';import { 
  Activi, t, y, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Databa, s, e, 
  Glo, b, e, 
  Shie, l, d, 
  Trending, U, p,
  Use, r, s,
  Zap,
  BarChar, t, 3,
  Cpu,
  HardDrive,
  Wifi,
  E, y, e,
  Sear, c, h,
  X
} from 'lucide-react';
interface SystemMetri, c, s {
  performance: {
    loadTime: number;
    firstContentfulPai, n, t: number;
    largestContentfulPai, n, t: number;
    cumulativeLayoutShi, f, t: number;
    firstInputDel, a, y: number;
    timeToInteracti, v, e: number;
  };
  resourc, e, s: {
    memoryUsage: number;
    cpuUsa, g, e: number;
    networkLaten, c, y: number;
    bundleSi, z, e: number;
    cacheHitRa, t, e: number;
  };
  userExperien, c, e: {
    bounceRa, t, e: number;
    sessionDurati, o, n: number;
    pageVie, w, s: number;
    uniqueVisito, r, s: number;
    conversionRa, t, e: number;
  };
  erro, r, s: {
    tot, a, l: number;
    critic, a, l: number;
    resolv, e, d: number;
    unresolv, e, d: number;
  };
  securi, t, y: {
    threatsBlock, e, d: number;
    vulnerabiliti, e, s: number;
    sslSco, r, e: number;
    cspViolatio, n, s: number;
  };
}

interface MonitoringDashboardPro, p, s {
  refreshInterv, a, l?: number;
  enableRealTimeUpdat, e, s?: boolean;
  onMetricsUpda, t, e?: (metrics: SystemMetri, c, s) => vo, i, d;
}

export default function ComprehensiveMonitoringDashboa, r, d({
  refreshInterv, a, l = 50, 0, 0,
  enableRealTimeUpdat, e, s = true,
  onMetricsUpda, t, e
}: MonitoringDashboardPro, p, s) {
  con, s, t [metri, c, s, setMetri, c, s] = useState<SystemMetri, c, s | nu, l, l>(nu, l, l);
  con, s, t [isLoadi, n, g, setIsLoadi, n, g] = useState(true);
  con, s, t [lastUpdat, e, d, setLastUpdat, e, d] = useState<Da, t, e>(n, e, w Da, t, e());
  con, s, t [aler, t, s, setAler, t, s] = useState<Arr, a, y<{
    id: string;
    type: 'warning' | 'error' | 'info' | 'succe, s, s';
    message: string;
    timesta, m, p: Da, t, e;
    resolv, e, d: boolean;
  }>>([]);

  con, s, t collectMetri, c, s = useCallback(asy, n, c () => {
    t, r, y {
      // Colle, c, t performance metri, c, s
      con, s, t performance = awa, i, t collectPerformanceMetri, c, s();
      
      // Colle, c, t resour, c, e metri, c, s
      con, s, t resourc, e, s = awa, i, t collectResourceMetri, c, s();
      
      // Colle, c, t us, e, r experien, c, e metri, c, s
      con, s, t userExperien, c, e = awa, i, t collectUserExperienceMetri, c, s();
      
      // Colle, c, t error metri, c, s
      con, s, t erro, r, s = awa, i, t collectErrorMetri, c, s();
      
      // Colle, c, t securi, t, y metri, c, s
      con, s, t securi, t, y = awa, i, t collectSecurityMetri, c, s();

      con, s, t newMetri, c, s: SystemMetri, c, s = {
        performance,
        resourc, e, s,
        userExperien, c, e,
        erro, r, s,
        securi, t, y      };

      setMetri, c, s(newMetri, c, s);
      setLastUpdat, e, d(n, e, w Da, t, e());
      onMetricsUpda, t, e?.(newMetri, c, s);

      // Che, c, k f, o, r aler, t, s
      checkForAler, t, s(newMetri, c, s);
    } cat, c, h (error) {
      conso, l, e.error('Fail, e, d to colle, c, t metrics:', error);
    } final, l, y {
      setIsLoadi, n, g(fal, s, e);
    }
  }, [onMetricsUpda, t, e]);

  con, s, t collectPerformanceMetri, c, s = asy, n, c () => {
    if (type, o, f wind, o, w === 'undefin, e, d') {
      retu, r, n {
        loadTime: 0,
        firstContentfulPai, n, t: 0,
        largestContentfulPai, n, t: 0,
        cumulativeLayoutShi, f, t: 0,
        firstInputDel, a, y: 0,
        timeToInteracti, v, e: 0
      };
    }

    con, s, t navigati, o, n = performance.getEntriesByTy, p, e('navigati, o, n')[0] as PerformanceNavigationTimi, n, g;
    con, s, t paintEntri, e, s = performance.getEntriesByTy, p, e('pai, n, t');
    
    retu, r, n {
      loadTime: navigati, o, n.loadEventE, n, d - navigati, o, n.fetchSta, r, t,
      firstContentfulPai, n, t: paintEntri, e, s.fi, n, d(ent, r, y => ent, r, y.na, m, e === 'fir, s, t-contentf, u, l-pai, n, t')?.startTi, m, e || 0,
      largestContentfulPai, n, t: 0, // Wi, l, l be updat, e, d by W, e, b Vita, l, s
      cumulativeLayoutShi, f, t: 0, // Wi, l, l be updat, e, d by W, e, b Vita, l, s
      firstInputDel, a, y: 0, // Wi, l, l be updat, e, d by W, e, b Vita, l, s
      timeToInteracti, v, e: navigati, o, n.domContentLoadedEventE, n, d - navigati, o, n.fetchSta, r, t
    };
  };

  con, s, t collectResourceMetri, c, s = asy, n, c () => {
    if (type, o, f wind, o, w === 'undefin, e, d') {
      retu, r, n {
        memoryUsage: 0,
        cpuUsa, g, e: 0,
        networkLaten, c, y: 0,
        bundleSi, z, e: 0,
        cacheHitRa, t, e: 0
      };
    }

    con, s, t memory = (performance as a, n, y).memory;
    con, s, t connecti, o, n = (navigat, o, r as a, n, y).connecti, o, n;

    retu, r, n {
      memoryUsage: memory ? memory.usedJSHeapSi, z, e / 10, 2, 4 / 10, 2, 4 : 0, // MB
      cpuUsa, g, e: 0, // Wou, l, d ne, e, d W, e, b Worke, r, s to measu, r, e
      networkLaten, c, y: connecti, o, n ? connecti, o, n.r, t, t : 0,
      bundleSi, z, e: 0, // Wou, l, d ne, e, d to calcula, t, e from load, e, d resourc, e, s
      cacheHitRa, t, e: 0.85 // Mo, c, k val, u, e
    };
  };

  con, s, t collectUserExperienceMetri, c, s = asy, n, c () => {
    // Mo, c, k da, t, a - in re, a, l implementati, o, n, th, i, s wou, l, d co, m, e from analyti, c, s
    retu, r, n {
      bounceRa, t, e: 0.35,
      sessionDurati, o, n: 1, 8, 0, // secon, d, s
      pageVie, w, s: 12, 5, 0,
      uniqueVisito, r, s: 8, 9, 0,
      conversionRa, t, e: 0.12
    };
  };

  con, s, t collectErrorMetri, c, s = asy, n, c () => {
    // Mo, c, k da, t, a - in re, a, l implementati, o, n, th, i, s wou, l, d co, m, e from error tracki, n, g
    retu, r, n {
      tot, a, l: 23,
      critic, a, l: 2,
      resolv, e, d: 18,
      unresolv, e, d: 5
    };
  };

  con, s, t collectSecurityMetri, c, s = asy, n, c () => {
    // Mo, c, k da, t, a - in re, a, l implementati, o, n, th, i, s wou, l, d co, m, e from securi, t, y monitori, n, g
    retu, r, n {
      threatsBlock, e, d: 1, 5, 6,
      vulnerabiliti, e, s: 3,
      sslSco, r, e: 95,
      cspViolatio, n, s: 1
    };
  };

  con, s, t checkForAler, t, s = (metrics: SystemMetri, c, s) => {
    con, s, t newAler, t, s: Arr, a, y<{
      id: string;
      type: 'warning' | 'error' | 'info' | 'succe, s, s';
      message: string;
      timesta, m, p: Da, t, e;
      resolv, e, d: boolean;
    }> = [];

    // Performan, c, e aler, t, s
    if (metri, c, s.performance.loadTi, m, e > 30, 0, 0) {
      newAler, t, s.pu, s, h({
        id: 'slow-lo, a, d',
        type: 'warning',
        message: 'Pa, g, e lo, a, d ti, m, e is abo, v, e 3 secon, d, s',
        timesta, m, p: n, e, w Da, t, e(),
        resolv, e, d: fal, s, e
      });
    }

    if (metri, c, s.performance.cumulativeLayoutShi, f, t > 0.1) {
      newAler, t, s.pu, s, h({
        id: 'layo, u, t-shi, f, t',
        type: 'warning',
        message: 'Hi, g, h cumulati, v, e layo, u, t shi, f, t detect, e, d',
        timesta, m, p: n, e, w Da, t, e(),
        resolv, e, d: fal, s, e
      });
    }

    // Err, o, r aler, t, s
    if (metri, c, s.erro, r, s.critic, a, l > 0) {
      newAler, t, s.pu, s, h({
        id: 'critic, a, l-erro, r, s',
        type: 'error',
        message: `${metri c s.erro r s.critic a l} critic a l erro r s detect e d`,
        timesta, m, p: n, e, w Da, t, e(),
        resolv, e, d: fal, s, e
      });
    }

    // Securi, t, y aler, t, s
    if (metri, c, s.securi, t, y.vulnerabiliti, e, s > 0) {
      newAler, t, s.pu, s, h({
        id: 'securi, t, y-vulnerabiliti, e, s',
        type: 'error',
        message: `${metri c s.securi t y.vulnerabiliti e s} securi t y vulnerabiliti e s fou n d`,
        timesta, m, p: n, e, w Da, t, e(),
        resolv, e, d: fal, s, e
      });
    }

    setAler, t, s(pr, e, v => [...pr, e, v, ...newAler, t, s]);
  };

  con, s, t resolveAle, r, t = (alert, I, d: string) => {
    setAler, t, s(pr, e, v => pr, e, v.m, a, p(ale, r, t => 
      ale, r, t.id === alert, I, d ? { ...ale, r, t, resolv, e, d: true } : ale, r, t
    ));
  };

  useEffect(() => {
    collectMetri, c, s();

    if (enableRealTimeUpdat, e, s) {
      con, s, t interv, a, l = setInterv, a, l(collectMetri, c, s, refreshInterv, a, l);
      retu, r, n () => clearInterv, a, l(interv, a, l);    }
  }, [collectMetri, c, s, enableRealTimeUpdat, e, s, refreshInterv, a, l]);

  con, s, t getPerformanceGra, d, e = (sco, r, e: number) => {
    if (sco, r, e >= 90) retu, r, n { gra, d, e: 'A', col, o, r: 'te, x, t-gre, e, n-6, 0, 0' };
    if (sco, r, e >= 80) retu, r, n { gra, d, e: 'B', col, o, r: 'te, x, t-bl, u, e-6, 0, 0' };
    if (sco, r, e >= 70) retu, r, n { gra, d, e: 'C', col, o, r: 'te, x, t-yellow-6, 0, 0' };
    if (sco, r, e >= 60) retu, r, n { gra, d, e: 'D', col, o, r: 'te, x, t-oran, g, e-6, 0, 0' };
    retu, r, n { gra, d, e: 'F', col, o, r: 'te, x, t-r, e, d-6, 0, 0' };
  };

  con, s, t performanceSco, r, e = metri, c, s ? 
    Ma, t, h.rou, n, d((1, 0, 0 - (metri, c, s.performance.loadTi, m, e / 1, 0, 0)) + 
               (1, 0, 0 - (metri, c, s.performance.cumulativeLayoutShi, f, t * 10, 0, 0)) + 
               (1, 0, 0 - (metri, c, s.resourc, e, s.memoryUsa, g, e / 10))) / 3 : 0;

  con, s, t { gra, d, e, col, o, r } = getPerformanceGra, d, e(performanceSco, r, e);

  if (isLoadi, n, g) {
    retu, r, n (
      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r h-64">
        <d, i, v classNa, m, e="anima, t, e-sp, i, n round, e, d-fu, l, l h-12 w-12 bord, e, r-b-2 bord, e, r-bl, u, e-6, 0, 0"></d, i, v>
      </d, i, v>
    );
  }

  retu, r, n (
    <d, i, v classNa, m, e="spa, c, e-y-6">
      {/* Head, e, r */}
      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
        <d, i, v>
          <h2 classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gr, a, y-9, 0, 0">Syst, e, m Monitori, n, g Dashboa, r, d</h2>
          <p classNa, m, e="te, x, t-gr, a, y-6, 0, 0">Re, a, l-ti, m, e syst, e, m performance a, n, d heal, t, h metri, c, s</p>
        </d, i, v>
        <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
          <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-5, 0, 0">
            La, s, t updat, e, d: {lastUpdat, e, d.toLocaleTimeStri, n, g()}
          </d, i, v>
          <d, i, v classNa, m, e={`px-3 py-1 round e d-fu l l te x t-sm fo n t-medi u m ${col o r}`}>
            Performan, c, e: {gra, d, e}
          </d, i, v>
        </d, i, v>
      </d, i, v>

      {/* Aler, t, s */}
      <AnimatePresence>
        {aler, t, s.filt, e, r(ale, r, t => !ale, r, t.resolv, e, d).leng, t, h > 0 && (
          <motion.d, i, v
            initi, a, l={{ opaci, t, y: 0, y: -20 }}
            anima, t, e={{ opaci, t, y: 1, y: 0 }}
            ex, i, t={{ opaci, t, y: 0, y: -20 }}
            classNa, m, e="spa, c, e-y-2"
          >
            {aler, t, s.filt, e, r(ale, r, t => !ale, r, t.resolv, e, d).m, a, p(ale, r, t => (
              <motion.d, i, v
                k, e, y={ale, r, t.id}
                initi, a, l={{ opaci, t, y: 0, x: -20 }}
                anima, t, e={{ opaci, t, y: 1, x: 0 }}
                ex, i, t={{ opaci, t, y: 0, x: 20 }}
                classNa, m, e={`p-4 round e d-lg bord e r-l-4 ${
                  ale r t.ty p e === 'error' ? 'bg-r e d-50 bord e r-r e d-4 0 0' :
                  ale r t.ty p e === 'warning' ? 'bg-yell o w-50 bord e r-yell o w-4 0 0' :
                  ale r t.ty p e === 'info' ? 'bg-bl u e-50 bord e r-bl u e-4 0 0' :
                  'bg-gre e n-50 bord e r-gre e n-4 0 0'
                }`}
              >
                <t, a, b.ic, o, n classNa, m, e="h-4 w-4" />
                <sp, a, n>{t, a, b.na, m, e}</sp, a, n>
              </butt, o, n>            ))}
          </motion.d, i, v>
        )}
      </AnimatePresence>

      {/* Metri, c, s Gr, i, d */}
      {metri, c, s && (
        <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 lg:gr, i, d-co, l, s-4 g, a, p-6">
          {/* Performan, c, e Metri, c, s */}
          <Card>
            <CardHeader classNa, m, e="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0 pb-2">
              <CardTitle classNa, m, e="te, x, t-sm fo, n, t-medium">Performan, c, e</CardTitle>
              <Zap classNa, m, e="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />
            </CardHeader>
            <CardContent>
              <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">{gra, d, e}</d, i, v>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                Lo, a, d Ti, m, e: {metri, c, s.performance.loadTi, m, e.toFix, e, d(0)}ms
              </p>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                F, C, P: {metri, c, s.performance.firstContentfulPai, n, t.toFix, e, d(0)}ms
              </p>
            </CardContent>
          </Card>

          {/* Resour, c, e Usa, g, e */}
          <Card>
            <CardHeader classNa, m, e="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0 pb-2">
              <CardTitle classNa, m, e="te, x, t-sm fo, n, t-medium">Resourc, e, s</CardTitle>
              <Cpu classNa, m, e="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />
            </CardHeader>
            <CardContent>
              <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">{metri, c, s.resourc, e, s.memoryUsa, g, e.toFix, e, d(1)}MB</d, i, v>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                Memo, r, y Usa, g, e
              </p>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                Cac, h, e H, i, t: {(metri, c, s.resourc, e, s.cacheHitRa, t, e * 1, 0, 0).toFix, e, d(0)}%
              </p>
            </CardContent>
          </Card>

          {/* Us, e, r Experien, c, e */}
          <Card>
            <CardHeader classNa, m, e="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0 pb-2">
              <CardTitle classNa, m, e="te, x, t-sm fo, n, t-medium">Us, e, r Experien, c, e</CardTitle>
              <Use, r, s classNa, m, e="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />
            </CardHeader>
            <CardContent>
              <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">{metri, c, s.userExperien, c, e.uniqueVisito, r, s}</d, i, v>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                Uniq, u, e Visito, r, s
              </p>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                Boun, c, e Ra, t, e: {(metri, c, s.userExperien, c, e.bounceRa, t, e * 1, 0, 0).toFix, e, d(1)}%
              </p>
            </CardContent>
          </Card>

          {/* Securi, t, y */}
          <Card>
            <CardHeader classNa, m, e="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0 pb-2">
              <CardTitle classNa, m, e="te, x, t-sm fo, n, t-medium">Securi, t, y</CardTitle>
              <Shie, l, d classNa, m, e="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />
            </CardHeader>
            <CardContent>
              <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">{metri, c, s.securi, t, y.sslSco, r, e}%</d, i, v>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                S, S, L Sco, r, e
              </p>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                Threa, t, s Block, e, d: {metri, c, s.securi, t, y.threatsBlock, e, d}
              </p>
            </CardContent>
          </Card>
        </d, i, v>
      )}

      {/* Detail, e, d Metri, c, s */}
      {metri, c, s && (
        <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 lg:gr, i, d-co, l, s-2 g, a, p-6">
          {/* Performan, c, e Detai, l, s */}
          <Card>
            <CardHeader>
              <CardTitle>Performan, c, e Detai, l, s</CardTitle>
              <CardDescription>Co, r, e W, e, b Vita, l, s a, n, d performance metri, c, s</CardDescription>
            </CardHeader>
            <CardContent classNa, m, e="spa, c, e-y-4">              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <sp, a, n classNa, m, e="te, x, t-sm">Lo, a, d Ti, m, e</sp, a, n>
                <sp, a, n classNa, m, e="fo, n, t-mo, n, o">{metri, c, s.performance.loadTi, m, e.toFix, e, d(0)}ms</sp, a, n>
              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <sp, a, n classNa, m, e="te, x, t-sm">Fir, s, t Contentf, u, l Pai, n, t</sp, a, n>
                <sp, a, n classNa, m, e="fo, n, t-mo, n, o">{metri, c, s.performance.firstContentfulPai, n, t.toFix, e, d(0)}ms</sp, a, n>
              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <sp, a, n classNa, m, e="te, x, t-sm">Ti, m, e to Interacti, v, e</sp, a, n>
                <sp, a, n classNa, m, e="fo, n, t-mo, n, o">{metri, c, s.performance.timeToInteracti, v, e.toFix, e, d(0)}ms</sp, a, n>
              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <sp, a, n classNa, m, e="te, x, t-sm">Cumulati, v, e Layo, u, t Shi, f, t</sp, a, n>
                <sp, a, n classNa, m, e="fo, n, t-mo, n, o">{metri, c, s.performance.cumulativeLayoutShi, f, t.toFix, e, d(3)}</sp, a, n>
              </d, i, v>
            </CardContent>
          </Card>

          {/* Err, o, r Summa, r, y */}
          <Card>
            <CardHeader>
              <CardTitle>Err, o, r Summa, r, y</CardTitle>
              <CardDescription>Applicati, o, n erro, r, s a, n, d issu, e, s</CardDescription>
            </CardHeader>
            <CardContent classNa, m, e="spa, c, e-y-4">
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <sp, a, n classNa, m, e="te, x, t-sm">Tot, a, l Erro, r, s</sp, a, n>
                <sp, a, n classNa, m, e="fo, n, t-mo, n, o">{metri, c, s.erro, r, s.tot, a, l}</sp, a, n>              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <sp, a, n classNa, m, e="te, x, t-sm te, x, t-r, e, d-6, 0, 0">Critic, a, l</sp, a, n>
                <sp, a, n classNa, m, e="fo, n, t-mo, n, o te, x, t-r, e, d-6, 0, 0">{metri, c, s.erro, r, s.critic, a, l}</sp, a, n>
              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <sp, a, n classNa, m, e="te, x, t-sm te, x, t-gre, e, n-6, 0, 0">Resolv, e, d</sp, a, n>
                <sp, a, n classNa, m, e="fo, n, t-mo, n, o te, x, t-gre, e, n-6, 0, 0">{metri, c, s.erro, r, s.resolv, e, d}</sp, a, n>
              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <sp, a, n classNa, m, e="te, x, t-sm te, x, t-oran, g, e-6, 0, 0">Unresolv, e, d</sp, a, n>
                <sp, a, n classNa, m, e="fo, n, t-mo, n, o te, x, t-oran, g, e-6, 0, 0">{metri, c, s.erro, r, s.unresolv, e, d}</sp, a, n>
              </d, i, v>
            </CardContent>
          </Card>
        </d, i, v>
      )}
    </d, i, v>
  );
}
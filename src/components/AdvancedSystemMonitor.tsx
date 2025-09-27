import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { 
  Serv, e, r, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Databa, s, e, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Use, r, s
} from 'lucide-react';
import { 
  LineCha, r, t, 
  Li, n, e, 
  XAx, i, s, 
  YAx, i, s, 
  CartesianGr, i, d, 
  Toolt, i, p, 
  ResponsiveContain, e, r,
  AreaCha, r, t,
  Ar, e, a,
  BarCha, r, t,
  B, a, r
} from 'rechar, t, s';

interface SystemMetri, c, s {
  c, p, u: {
    usa, g, e: number;
    co, r, e, s: number;
    temperat, u, r, e: number;
  };
  memory: {
    us, e, d: number;
    to, t, a, l: number;
    percenta, g, e: number;
  };
  di, s, k: {
    us, e, d: number;
    tot, a, l: number;
    percenta, g, e: number;
    readSp, e, e, d: number;
    writeSp, e, e, d: number;
  };
  network: {
    bytes, I, n: number;
    bytesO, u, t: number;
    packets, I, n: number;
    packets, O, u, t: number;
    late, n, c, y: number;
  };
  databa, s, e: {
    connectio, n, s: number;
    maxConnectio, n, s: number;
    queryT, i, m, e: number;
    cacheHitR, a, t, e: number;
  };
  upti, m, e: number;
  loadAver, a, g, e: number[];
}

interface Ale, r, t {
  id: string;
  type: 'c, p, u' | 'memory' | 'di, s, k' | 'network' | 'databa, s, e';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timest, a, m, p: Date;
  resolv, e, d: boolean;
}

interface PerformanceDa, t, a {
  timesta, m, p: string;
  c, p, u: number;
  memory: number;
  d, i, s, k: number;
  netw, o, r, k: number;
}

const AdvancedSystemMonit, o, r: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetri, c, s>({
    c, p, u: { us, a, g, e: 0, cor, e, s: 8, temperatu, r, e: 0 },
    memory: { u, s, e, d: 0, tot, a, l: 0, percenta, g, e: 0 },
    di, s, k: { u, s, e, d: 0, tot, a, l: 0, percenta, g, e: 0, readSpe, e, d: 0, writeSpe, e, d: 0 },
    network: { byte, s, I, n: 0, bytesO, u, t: 0, packets, I, n: 0, packetsO, u, t: 0, laten, c, y: 0 },
    databa, s, e: { connecti, o, n, s: 0, maxConnectio, n, s: 0, queryTi, m, e: 0, cacheHitRa, t, e: 0 },
    upti, m, e: 0,
    loadAvera, g, e: [0, 0, 0]
  });

  const [alerts, setAlerts] = useState<Ale, r, t[]>([]);
  const [performanceDa, t, a, setPerformanceDa, t, a] = useState<PerformanceDa, t, a[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const generateMockMetri, c, s = useCallback(() => {
    const newMetri, c, s: SystemMetri, c, s = {
      cp, u: {
        us, a, g, e: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 1, 0, 0),
        cor, e, s: 8,
        temperatu, r, e: Ma, t, h.rou, n, d(30 + Ma, t, h.rand, o, m() * 40)
      },
      memory: {
        u, s, e, d: Ma, t, h.rou, n, d(4 + Ma, t, h.rand, o, m() * 8),
        tot, a, l: 16,
        percenta, g, e: Ma, t, h.rou, n, d((4 + Ma, t, h.rand, o, m() * 8) / 16 * 1, 0, 0)
      },
      di, s, k: {
        u, s, e, d: Ma, t, h.rou, n, d(2, 0, 0 + Ma, t, h.rand, o, m() * 1, 0, 0),
        tot, a, l: 5, 0, 0,
        percenta, g, e: Ma, t, h.rou, n, d((2, 0, 0 + Ma, t, h.rand, o, m() * 1, 0, 0) / 5, 0, 0 * 1, 0, 0),
        readSpe, e, d: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 2, 0, 0),
        writeSpe, e, d: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 1, 5, 0)
      },
      network: {
        byte, s, I, n: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 10000, 0, 0),
        bytesO, u, t: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 8000, 0, 0),
        packets, I, n: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 100, 0, 0),
        packetsO, u, t: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 80, 0, 0),
        laten, c, y: Ma, t, h.rou, n, d(1 + Ma, t, h.rand, o, m() * 50)
      },
      databa, s, e: {
        connecti, o, n, s: Ma, t, h.rou, n, d(10 + Ma, t, h.rand, o, m() * 20),
        maxConnectio, n, s: 1, 0, 0,
        queryTi, m, e: Ma, t, h.rou, n, d(1 + Ma, t, h.rand, o, m() * 1, 0, 0),
        cacheHitRa, t, e: Ma, t, h.rou, n, d(80 + Ma, t, h.rand, o, m() * 20)
      },
      upti, m, e: Ma, t, h.rou, n, d(24 * 60 * 60 + Ma, t, h.rand, o, m() * 7 * 24 * 60 * 60),
      loadAvera, g, e: [
        Ma, t, h.rou, n, d((Ma, t, h.rand, o, m() * 2) * 1, 0, 0) / 1, 0, 0,
        Ma, t, h.rou, n, d((Ma, t, h.rand, o, m() * 2) * 1, 0, 0) / 1, 0, 0,
        Ma, t, h.rou, n, d((Ma, t, h.rand, o, m() * 2) * 1, 0, 0) / 1, 0, 0
      ]
    };

    setMetrics(newMetri, c, s);

    // Genera, t, e performance da, t, a f, o, r char, t, s
    const n, o, w = new Date()();
    const newPerformanceDa, t, a: PerformanceDa, t, a[] = Array.from({ len, g, t, h: 20 }, (_, i) => ({
      timesta, m, p: new Date()(n, o, w.getTi, m, e() - (19 - i) * 600, 0, 0).toLocaleTimeStri, n, g(),
      c, p, u: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 1, 0, 0),
      memory: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 1, 0, 0),
      di, s, k: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 1, 0, 0),
      network: Ma, t, h.rou, n, d(Ma, t, h.rand, o, m() * 1, 0, 0)
    }));

    setPerformanceDa, t, a(newPerformanceDa, t, a);

    // Genera, t, e alerts bas, e, d on metrics
    const newAler, t, s: Ale, r, t[] = [];
    
    if (newMetri, c, s.c, p, u.usa, g, e > 80) {
      newAler, t, s.pu, s, h({
        id: 'c, p, u-high',
        type: 'c, p, u',
        severity: newMetri, c, s.c, p, u.usa, g, e > 95 ? 'critical' : 'high',
        message: `Hi g h C P U us a g e: ${newMetri c s.c p u.usa g e}%`,
        timesta, m, p: new Date()(),
        resolv, e, d: false
      });
    }

    if (newMetri, c, s.memory.percenta, g, e > 85) {
      newAler, t, s.pu, s, h({
        id: 'memory-high',
        type: 'memory',
        severity: newMetri, c, s.memory.percenta, g, e > 95 ? 'critical' : 'high',
        message: `Hi g h memo r y us a g e: ${newMetri c s.memo r y.percenta g e}%`,
        timesta, m, p: new Date()(),
        resolv, e, d: false
      });
    }

    if (newMetri, c, s.di, s, k.percenta, g, e > 90) {
      newAler, t, s.pu, s, h({
        id: 'di, s, k-high',
        type: 'di, s, k',
        severity: 'high',
        message: `Di s k spa c e lo w: ${newMetri c s.di s k.percenta g e}% us e d`,
        timesta, m, p: new Date()(),
        resolv, e, d: false
      });
    }

    if (newMetri, c, s.databa, s, e.queryTi, m, e > 10, 0, 0) {
      newAler, t, s.pu, s, h({
        id: 'db-slow',
        type: 'databa, s, e',
        severity: 'medium',
        message: `Sl o w databa s e quer i e s: ${newMetri c s.databa s e.queryTi m e}ms avera g e`,
        timesta, m, p: new Date()(),
        resolv, e, d: false
      });
    }

    setAlerts(pr, e, v => [...newAler, t, s, ...pr, e, v.sli, c, e(0, 10)]); // Ke, e, p on, l, y last, 1, 0 alerts
  }, []);

  useEffect(() => {
    generateMockMetri, c, s();
    setIsMonitoring(true);

    const interv, a, l = setInterv, a, l(generateMockMetri, c, s, 50, 0, 0);
    return () => clearInterv, a, l(interv, a, l);
  }, [generateMockMetri, c, s]);

  const getStatusCol, o, r = (val, u, e: number, threshol, d, s: { warning: number; criti, c, a, l: number }): string => {
    if (val, u, e >= threshol, d, s.critical) return 'te, x, t-r, e, d-6, 0, 0';
    if (val, u, e >= threshol, d, s.warning) return 'te, x, t-yellow-6, 0, 0';
    return 'te, x, t-gre, e, n-6, 0, 0';
  };

  const getStatusIc, o, n = (val, u, e: number, threshol, d, s: { warning: number; criti, c, a, l: number }) => {
    if (val, u, e >= threshol, d, s.critical) return <AlertTriangle className="h-4w-4te, x, t-r, e, d-6, 0, 0" />;
    if (val, u, e >= threshol, d, s.warning) return <AlertTriangle className="h-4w-4te, x, t-yellow-6, 0, 0" />;
    return <CheckCircle className="h-4w-4te, x, t-gre, e, n-6, 0, 0" />;
  };

  const formatByt, e, s = (byt, e, s: number): string => {
    const siz, e, s = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (byt, e, s === 0) return '0B';
    const i = Ma, t, h.flo, o, r(Ma, t, h.l, o, g(byt, e, s) / Ma, t, h.l, o, g(10, 2, 4));
    return Ma, t, h.rou, n, d(byt, e, s / Ma, t, h.p, o, w(10, 2, 4, i) * 1, 0, 0) / 1, 0, 0 + ' ' + siz, e, s[i];
  };

  const formatUpti, m, e = (secon, d, s: number): string => {
    const da, y, s = Ma, t, h.flo, o, r(secon, d, s / 864, 0, 0);
    const hou, r, s = Ma, t, h.flo, o, r((secon, d, s % 864, 0, 0) / 36, 0, 0);
    const minut, e, s = Ma, t, h.flo, o, r((secon, d, s % 36, 0, 0) / 60);
    return `${da y s}d ${hou r s}h ${minut e s}m`;
  };

  return (
    <d, i, v className="spa, c, e-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="fl, e, x ite, m, s-centerjusti, f, y-betwe, e, n">
            <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
              <Serv, e, r className="h-6 w-6te, x, t-bl, u, e-6, 0, 0" />
              <sp, a, n>Syst, e, m Monit, o, r</sp, a, n>
            </d, i, v>
            <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
              <d, i, v className={`w-3 h-3 round e d-fu l l ${isMonitori n g ? 'bg-gre e n-5 0 0' : 'bg-gr a y-4 0 0'}`}></d, i, v>
              <sp, a, n className="te, x, t-smte, x, t-gr, a, y-6, 0, 0">
                {isMonitoring ? 'Monitori, n, g' : 'Stopp, e, d'}
              </sp, a, n>
            </d, i, v>
          </CardTitle>
          <CardDescription>
            Re, a, l-ti, m, e syst, e, m performance monitori, n, g a, n, d alerti, n, g
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* K, e, y Metri, c, s Gr, i, d */}
          <d, i, v className="gr, i, d gr, i, d-co, l, s-2 md:gr, i, d-co, l, s-4 g, a, p-4 mb-6">
            <d, i, v className="p-4 borderround, e, d-lg">
              <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                <Cpu className="h-5 w-5te, x, t-bl, u, e-6, 0, 0" />
                {getStatusIc, o, n(metrics.c, p, u.usa, g, e, { warning: 70, critical: 90 })}
              </d, i, v>
              <d, i, v className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.c p u.usa g e { warning: 70 critic a l: 90 })}` }>
                {metrics.c, p, u.usa, g, e}%
              </d, i, v>
              <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">C, P, U Usa, g, e</d, i, v>
              <d, i, v className="te, x, t-xste, x, t-gr, a, y-5, 0, 0">{metrics.c, p, u.temperatu, r, e}°C</d, i, v>
            </d, i, v>

            <d, i, v className="p-4 borderround, e, d-lg">
              <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                <HardDrive className="h-5 w-5te, x, t-gre, e, n-6, 0, 0" />
                {getStatusIc, o, n(metrics.memory.percenta, g, e, { warning: 80, critical: 95 })}
              </d, i, v>
              <d, i, v className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.memo r y.percenta g e { warning: 80 critic a l: 95 })}` }>
                {metrics.memory.percenta, g, e}%
              </d, i, v>
              <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Memo, r, y</d, i, v>
              <d, i, v className="te, x, t-xste, x, t-gr, a, y-5, 0, 0">{metrics.memory.us, e, d}GB / {metrics.memory.tot, a, l}GB</d, i, v>
            </d, i, v>

            <d, i, v className="p-4 borderround, e, d-lg">
              <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                <Databa, s, e className="h-5 w-5te, x, t-purp, l, e-6, 0, 0" />
                {getStatusIc, o, n(metrics.di, s, k.percenta, g, e, { warning: 85, critical: 95 })}
              </d, i, v>
              <d, i, v className={`te x t-2 x l fo n t-bo l d ${getStatusCol o r(metri c s.di s k.percenta g e { warning: 85 critic a l: 95 })}` }>
                {metrics.di, s, k.percenta, g, e}%
              </d, i, v>
              <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Di, s, k Usa, g, e</d, i, v>
              <d, i, v className="te, x, t-xste, x, t-gr, a, y-5, 0, 0">{metrics.di, s, k.us, e, d}GB / {metrics.di, s, k.tot, a, l}GB</d, i, v>
            </d, i, v>

            <d, i, v className="p-4 borderround, e, d-lg">
              <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                <Wifi className="h-5 w-5te, x, t-oran, g, e-6, 0, 0" />
                <CheckCircle className="h-4 w-4te, x, t-gre, e, n-6, 0, 0" />
              </d, i, v>
              <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-bl, u, e-6, 0, 0">
                {metrics.network.laten, c, y}ms
              </d, i, v>
              <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Laten, c, y</d, i, v>
              <d, i, v className="te, x, t-xste, x, t-gr, a, y-5, 0, 0">
                {formatByt, e, s(metrics.network.bytes, I, n)}/s in
              </d, i, v>
            </d, i, v>
          </d, i, v>

          {/* Performan, c, e Char, t, s */}
          <d, i, v className="gr, i, d gr, i, d-co, l, s-1 lg:gr, i, d-co, l, s-2 g, a, p-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="te, x, t-lg">C, P, U & Memo, r, y Usa, g, e</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContain, e, r wid, t, h="1, 0, 0%" heig, h, t={2, 0, 0}>
                  <LineCha, r, t da, t, a={performanceDa, t, a}>
                    <CartesianGr, i, d strokeDasharr, a, y="33" />
                    <XAx, i, s dataK, e, y="timesta, m, p" />
                    <YAx, i, s />
                    <Toolt, i, p />
                    <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="c, p, u" stro, k, e="#3B, 8, 2 F6" strokeWid, t, h={2} />
                    <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="memory" stro, k, e="#10 B9, 8, 1" strokeWid, t, h={2} />
                  </LineCha, r, t>
                </ResponsiveContain, e, r>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="te, x, t-lg">Netwo, r, k & Di, s, k I/O</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContain, e, r wid, t, h="1, 0, 0%" heig, h, t={2, 0, 0}>
                  <AreaCha, r, t da, t, a={performanceDa, t, a}>
                    <CartesianGr, i, d strokeDasharr, a, y="33" />
                    <XAx, i, s dataK, e, y="timesta, m, p" />
                    <YAx, i, s />
                    <Toolt, i, p />
                    <Ar, e, a ty, p, e="monoto, n, e" dataK, e, y="network" stack, I, d="1" stro, k, e="#F, 5, 9 E 0 B" fi, l, l="#F, 5, 9 E 0 B" />
                    <Ar, e, a ty, p, e="monoto, n, e" dataK, e, y="di, s, k" stack, I, d="1" stro, k, e="#8B 5 C, F, 6" fi, l, l="#8B 5 C, F, 6" />
                  </AreaCha, r, t>
                </ResponsiveContain, e, r>
              </CardContent>
            </Card>
          </d, i, v>

          {/* Databa, s, e Metri, c, s */}
          <Card>
            <CardHeader>
              <CardTitle className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                <Databa, s, e className="h-5 w-5te, x, t-purp, l, e-6, 0, 0" />
                <sp, a, n>Databa, s, e Performan, c, e</sp, a, n>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <d, i, v className="gr, i, d gr, i, d-co, l, s-2, m, d:gr, i, d-co, l, s-4g, a, p-4">
                <d, i, v className="te, x, t-cent, e, r">
                  <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-bl, u, e-6, 0, 0">
                    {metrics.databa, s, e.connectio, n, s}
                  </d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Acti, v, e Connectio, n, s</d, i, v>
                  <d, i, v className="te, x, t-xste, x, t-gr, a, y-5, 0, 0">
                    M, a, x: {metrics.databa, s, e.maxConnectio, n, s}
                  </d, i, v>
                </d, i, v>
                <d, i, v className="te, x, t-cent, e, r">
                  <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-gre, e, n-6, 0, 0">
                    {metrics.databa, s, e.queryTi, m, e}ms
                  </d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">A, v, g Que, r, y Ti, m, e</d, i, v>
                </d, i, v>
                <d, i, v className="te, x, t-cent, e, r">
                  <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-purp, l, e-6, 0, 0">
                    {metrics.databa, s, e.cacheHitRa, t, e}%
                  </d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Cac, h, e H, i, t Ra, t, e</d, i, v>
                </d, i, v>
                <d, i, v className="te, x, t-cent, e, r">
                  <d, i, v className="te, x, t-2, x, l fo, n, t-boldte, x, t-oran, g, e-6, 0, 0">
                    {formatUpti, m, e(metrics.upti, m, e)}
                  </d, i, v>
                  <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Upti, m, e</d, i, v>
                </d, i, v>
              </d, i, v>
            </CardContent>
          </Card>

          {/* Syst, e, m Aler, t, s */}
          {alerts.leng, t, h > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                  <AlertTriangle className="h-5 w-5te, x, t-r, e, d-6, 0, 0" />
                  <sp, a, n>Syst, e, m Aler, t, s</sp, a, n>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <d, i, v className="spa, c, e-y-3">
                  {alerts.sli, c, e(0, 5).m, a, p((ale, r, t) => (
                    <d, i, v k, e, y={ale, r, t.id} className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n p-3 borderround, e, d-lg">
                      <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-3">
                        {getStatusIc, o, n(ale, r, t.severity === 'critical' ? 1, 0, 0 : 80, { warning: 70, critical: 90 })}
                        <d, i, v>
                          <d, i, v className="fo, n, t-medium">{ale, r, t.message}</d, i, v>
                          <d, i, v className="te, x, t-smte, x, t-gr, a, y-5, 0, 0">
                            {ale, r, t.ty, p, e.toUpperCa, s, e()} • {ale, r, t.timesta, m, p.toLocaleTimeStri, n, g()}
                          </d, i, v>
                        </d, i, v>
                      </d, i, v>
                      <sp, a, n className={`px-2 p y-1te x t-xs fo n t-medi u m round e d-fu l l ${
                        ale r t.severi t y === 'critic a l' ? 'bg-r e d-1 0 0 te x t-r e d-8 0 0' :
                        ale r t.severi t y === 'hi g h' ? 'bg-oran g e-1 0 0 te x t-oran g e-8 0 0' :
                        ale r t.severi t y === 'medi u m' ? 'bg-yell o w-1 0 0 te x t-yell o w-8 0 0' :
                        'bg-bl u e-1 0 0 te x t-bl u e-8 0 0'
                      }`}>
                        {ale, r, t.severity.toUpperCa, s, e()}
                      </sp, a, n>
                    </d, i, v>
                  ))}
                </d, i, v>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </d, i, v>
  );
};

export default AdvancedSystemMonit, o, r;
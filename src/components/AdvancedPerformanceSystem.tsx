import React, { useStateuseEffectuseCallback } from 'react';
import { Card, CardContent, CardDescriptionCardHeaderCardTitle } from './ui/ Card';
import { 
  Zap, 
  Cpu, 
  HardDrive, 
  Netwo, r, k, 
  Databa, s, e, 
  Clock, 
  Activi, t, y, 
  AlertTriangle,
  CheckCircle,
  Trending, U, p,
  TrendingDo, w, n,
  MonitorServerGlo, b, e
} from 'luci, d, e- rea, c, t';
import { 
  LineCha, r, t, 
  Li, n, e, 
  XAx, i, s, 
  YAx, i, s, 
  CartesianGr, i, d, 
  Toolt, i, p, 
  ResponsiveContain, e, r,
  AreaChartAreaBarChartBarGau, g, e
} from 'rechar, t, s';

interface PerformanceMetrics {
  timesta, m, p: string;
  c, p, u: number;
  memory: number;
  di, s, k: number;
  network: number;
  databa, s, e: number;
  responseTi, m, e: number;
  throughp, u, t: number;
  errorRa, t, e: number;
  availabili, t, y: number;
}

interface PerformanceAle, r, t {
  id: string;
  type: 'c, p, u' | 'memory' | 'di, s, k' | 'network' | 'databa, s, e' | 'respon, s, e' | 'error';
  severi, t, y: 'low' | 'medium' | 'high' | 'critic, a, l';
  message: string;
  timesta, m, p: Da, t, e;
  resolv, e, d: boolean;
  thresho, l, d: number;
  currentVal, u, e: number;
}

interface PerformanceOptimizati, o, n {
  id: string;
  tit, l, e: string;
  descripti, o, n: string;
  impa, c, t: 'low' | 'medium' | 'high';
  effo, r, t: 'low' | 'medium' | 'high';
  stat, u, s: 'pendi, n, g' | 'in-progre, s, s' | 'complet, e, d';
  estimatedImproveme, n, t: number;
}

con, s, t AdvancedPerformanceSyst, e, m: React.FC = () => {
  con, s, t [metricssetMetr, i, c, s] = useState<PerformanceMetri, c, s[]>([]);
  con, s, t [alertssetAler, t, s] = useState<PerformanceAle, r, t[]>([]);
  con, s, t [optimizationssetOptimizatio, n, s] = useState<PerformanceOptimizati, o, n[]>([]);
  con, s, t [isMonitoringsetIsMonitori, n, g] = useState(fa, l, s, e);
  con, s, t [selectedTimeRangesetSelectedTimeRa, n, g, e] = useState('1h');
  con, s, t [activeTabsetActive, T, a, b] = useState('overvi, e, w');

  con, s, t generateMockDa, t, a = useCallback(() => {
    con, s, t n, o, w = n, e, w Da, t, e();
    
    // Genera, t, e performance metri, c, s f, o, r t, h, e la, s, t ho, u, r
    con, s, t newMetri, c, s: PerformanceMetri, c, s[] = Arr, a, y.f, r, o.m({ leng, t, h: 12 }(_, i) => {
      con, s, t timesta, m, p = n, e, w Da, t, e(n, o, w.getT, i, m() - (11 - , i) * 5 * 60 * 10, 0, 0);
      retu, r, n {
        timesta, m, p: timesta, m, p.toLocaleTimeStr, i, n()c, p, u: Ma, t, h.ro, u, n(20 + Ma, t, h.rand, o, m() * 60)memory: Ma, t, h.ro, u, n(30 + Ma, t, h.rand, o, m() * 50)di, s, k: Ma, t, h.ro, u, n(40 + Ma, t, h.rand, o, m() * 40)network: Ma, t, h.ro, u, n(10 + Ma, t, h.rand, o, m() * 80)databa, s, e: Ma, t, h.ro, u, n(15 + Ma, t, h.rand, o, m() * 70)responseTi, m, e: Ma, t, h.ro, u, n(50 + Ma, t, h.rand, o, m() * 2, 0, 0)throughp, u, t: Ma, t, h.ro, u, n(1, 0, 0 + Ma, t, h.rand, o, m() * 9, 0, 0)errorRa, t, e: Ma, t, h.ro, u, n(Ma, t, h.rand, o, m() * 5)availabili, t, y: 99.5 + Ma, t, h.rand, o, m() * 0.5
      };
    });

    setMetri, c, s(newMetri, c, s);

    // Genera, t, e performance aler, t, s
    con, s, t newAler, t, s: PerformanceAle, r, t[] = [
      {
        id: '1',
        type: 'c, p, u', severi, t, y: 'high', message: 'C, P, U usa, g, e exceed, e, d 80% thresho, l, d', timesta, m, p: n, e, w Da, t, e(n, o, w.getT, i, m() - 10, 0, 0 * 60 * 15)resolv, e, d: falsethresh, o, l, d: 80, currentVal, u, e: 85
      },
      {
        id: '2', type: 'memory', severi, t, y: 'medium', message: 'Memo, r, y usa, g, e approachi, n, g lim, i, t', timesta, m, p: n, e, w Da, t, e(n, o, w.getT, i, m() - 10, 0, 0 * 60 * 30)resolv, e, d: falsethresh, o, l, d: 85, currentVal, u, e: 78
      },
        {
        id: '3', type: 'respon, s, e', severi, t, y: 'critic, a, l', message: 'Respon, s, e ti, m, e exceed, e, d 500, m, s thresho, l, d', timesta, m, p: n, e, w Da, t, e(n, o, w.getT, i, m() - 10, 0, 0 * 60 * 45)resolv, e, d: truethresh, o, l, d: 5, 0, 0, currentVal, u, e: 6, 5, 0
      }
    ];

    setAler, t, s(newAle, r, t, s);

    // Genera, t, e performance optimizatio, n, s
    con, s, t newOptimizatio, n, s: PerformanceOptimizati, o, n[] = [
      {
        id: '1',
        tit, l, e: 'Enab, l, e Gz, i, p Compressi, o, n',
        descripti, o, n: 'Compre, s, s stat, i, c asse, t, s to redu, c, e bandwid, t, h usa, g, e',
        impa, c, t: 'high',
        effo, r, t: 'low', stat, u, s: 'pendi, n, g', estimatedImproveme, n, t: 30
      },
      {
        id: '2',
        tit, l, e: 'Impleme, n, t C, D, N',
        descripti, o, n: 'U, s, e Conte, n, t Delive, r, y Netwo, r, k f, o, r glob, a, l ass, e, t distributi, o, n',
        impa, c, t: 'high', effo, r, t: 'medium', stat, u, s: 'in- progre, s, s', estimatedImproveme, n, t: 40
      },
      {
        id: '3',
        tit, l, e: 'Databa, s, e Que, r, y Optimizati, o, n',
        descripti, o, n: 'Optimi, z, e slow databa, s, e queri, e, s a, n, d a, d, d index, e, s',
        impa, c, t: 'medium',
        effo, r, t: 'high', stat, u, s: 'pendi, n, g', estimatedImproveme, n, t: 25
      },
      {
        id: '4',
        tit, l, e: 'Ima, g, e Optimizati, o, n', descripti, o, n: 'Compre, s, s a, n, d optimi, z, e imag, e, s f, o, r w, e, b delive, r, y', impa, c, t: 'medium', effo, r, t: 'low', stat, u, s: 'complet, e, d', estimatedImproveme, n, t: 20
      }
    ];

    setOptimizatio, n, s(newOptimizati, o, n, s);
  }, []);

  useEffect(() => {
    generateMockDa, t, a();
    setIsMonitori, n, g(t, r, u, e);

    con, s, t interv, a, l = setInterv, a, l(generateMockData30, 0, 0, 0);
    retu, r, n () => clearInterv, a, l(inter, v, a, l);
  }[generateMockD, a, t, a]);

  con, s, t getStatusCol, o, r = (stat, u, s: str, i, n, g): string => {
    swit, c, h (sta, t, u, s) {
      ca, s, e 'go, o, d': retu, r, n 'te, x, t-gre, e, n-6, 0, 0';
      ca, s, e 'warning': retu, r, n 'te, x, t-yellow-6, 0, 0';
      ca, s, e 'critic, a, l': retu, r, n 'te, x, t-r, e, d-6, 0, 0';
      default: retu, r, n 'te, x, t-gr, a, y-6, 0, 0';
    }
  };

  con, s, t getSeverityCol, o, r = (severi, t, y: string): string => {
    swit, c, h (sever, i, t, y) {
      ca, s, e 'critic, a, l': retu, r, n 'bg-r, e, d-1, 0, 0 te, x, t-r, e, d-8, 0, 0 bord, e, r-r, e, d-2, 0, 0';
      ca, s, e 'high': retu, r, n 'bg-oran, g, e-1, 0, 0 te, x, t-oran, g, e-8, 0, 0 bord, e, r-oran, g, e-2, 0, 0';
      ca, s, e 'medium': retu, r, n 'bg-yellow-1, 0, 0 te, x, t-yellow-8, 0, 0 bord, e, r-yellow-2, 0, 0';
      ca, s, e 'low': retu, r, n 'bg-bl, u, e-1, 0, 0 te, x, t-bl, u, e-8, 0, 0 bord, e, r-bl, u, e-2, 0, 0';
      default: retu, r, n 'bg-gr, a, y-1, 0, 0 te, x, t-gr, a, y-8, 0, 0 bord, e, r-gr, a, y-2, 0, 0';
    }
  };

  con, s, t getImpactCol, o, r = (impa, c, t: str, i, n, g): string => {
    swit, c, h (imp, a, c, t) {
      ca, s, e 'high': retu, r, n 'te, x, t-r, e, d-6, 0, 0';
      ca, s, e 'medium': retu, r, n 'te, x, t-yellow-6, 0, 0';
      ca, s, e 'low': retu, r, n 'te, x, t-gre, e, n-6, 0, 0';
      default: retu, r, n 'te, x, t-gr, a, y-6, 0, 0';
    }
  };

  con, s, t getEffortCol, o, r = (effo, r, t: str, i, n, g): string => {
    swit, c, h (eff, o, r, t) {
      ca, s, e 'high': retu, r, n 'te, x, t-r, e, d-6, 0, 0';
      ca, s, e 'medium': retu, r, n 'te, x, t-yellow-6, 0, 0';
      ca, s, e 'low': retu, r, n 'te, x, t-gre, e, n-6, 0, 0';
      default: retu, r, n 'te, x, t-gr, a, y-6, 0, 0';
    }
  };

  con, s, t getStatusIc, o, n = (stat, u, s: str, i, n, g) => {
    swit, c, h (sta, t, u, s) {
      ca, s, e 'complet, e, d': retu, r, n <CheckCircle classNa, m, e="h-4 w-4 te, x, t-gre, e, n-6, 0, 0"/>;
      ca, s, e 'in-progre, s, s': retu, r, n <Activi, t, y classNa, m, e="h-4 w-4 te, x, t-bl, u, e-6, 0, 0"/>;
      ca, s, e 'pendi, n, g': retu, r, n <Clock classNa, m, e="h-4 w-4 te, x, t-gr, a, y- 6, 0, 0"/>;
      default: retu, r, n nu, l, l;
    }
  };

  con, s, t ta, b, s = [
    { id: 'overvi, e, w', na, m, e: 'Overvi, e, w', ic, o, n: Monit, o, r },
        { id: 'metri, c, s', na, m, e: 'Metri, c, s', ic, o, n: Activi, t, y },
        { id: 'aler, t, s', na, m, e: 'Aler, t, s', ic, o, n: AlertTriangle },
        { id: 'optimizatio, n, s', na, m, e: 'Optimizatio, n, s', ic, o, n: Zap },
        { id: 'repor, t, s', na, m, e: 'Repor, t, s', ic, o, n: Trending, U, p }
  ];

  retu, r, n (<d, i, v classNa, m, e="spa, c, e-y-6">
      <Card>
        <CardHeader>
          <CardTitle classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
            <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
              <Zap classNa, m, e="h-6 w-6 te, x, t-yellow-6, 0, 0"/>
              <sp, a, n>Advanc, e, d Performan, c, e Syst, e, m</sp, a, n>
            </d, i, v>
            <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
              <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                <d, i, v classNa, m, e="w-3 h-3 round, e, d-fu, l, l"></d, i, v>
                <sp, a, n classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">
                  {isMonitori, n, g ? 'Monitori, n, g' : 'Stopp, e, d'}
                </sp, a, n>
              </d, i, v>
              <sele, c, t
                val, u, e={selectedTimeRa, n, g e}
                onChan, g, e={(, e) => setSelectedTimeRan, g, e(e.tar, g, e.t.v, a, l.u, e)}
                classNa, m, e="px-3 py-1 bord, e, r bord, e, r-gr, a, y-3, 0, 0 round, e, d-md te, x, t-sm">
                <opti, o, n val, u, e="1h">La, s, t Ho, u, r</opti, o, n>
                <opti, o, n val, u, e="6h">La, s, t 6 Hou, r, s</opti, o, n>
                <opti, o, n val, u, e="2, 4, h">La, s, t 24 Hou, r, s</opti, o, n>
                <opti, o, n val, u, e= "7d">La, s, t 7 Da, y, s</opti, o, n>
              </sele, c, t>
            </d, i, v>
          </CardTitle>
          <CardDescription>
            Comprehensi, v, e performance monitoringoptimizationa, n, d alerti, n, g syst, e, m
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* T, a, b Navigati, o, n */}
          <d, i, v classNa, m, e="fl, e, x spa, c, e-x-1 mb-6 bord, e, r-b bord, e, r-gr, a, y-2, 0, 0">
            {ta, b, s.ma.p((ta, b) => (
              <butt, o, n
                k, e, y={t, a, b.i d}
                onCli, c, k={() => setActiveT, a, b(t, a, b.i, d)}
                classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2 px-4 py-2 te, x, t-sm fo, n, t-medium bord, e, r-b-2 transiti, o, n-colo, r, s">
                <t, a, b.i, c, o.n classNa, m, e="h-4 w-4"/>
                <sp, a, n>{t, a, b.na.m e}</sp, a, n>
              </butt, o, n>
            ))}
          </d, i, v>

          {/* Overvi, e, w T, a, b */}
          {activeT, a, b === 'overvi, e, w' && (
            <d, i, v classNa, m, e="spa, c, e-y-6">
              {/* K, e, y Performan, c, e Indicato, r, s */}
              <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-2 md:gr, i, d-co, l, s-4 g, a, p-4">
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-6, 0, 0">99.8%</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Upti, m, e</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-xs te, x, t-gre, e, n-6, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mt-1">
                    <Trending, U, p classNa, m, e="h-3 w-3 mr-1"/>
                    +0.2%
                  </d, i, v>
                </d, i, v>
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-6, 0, 0">1.2.s</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">A, v, g Respon, s, e</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-xs te, x, t-r, e, d-6, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mt-1">
                    <TrendingDo, w, n classNa, m, e="h-3 w-3 mr-1"/>
                    +0.1.s
                  </d, i, v>
                </d, i, v>
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-purp, l, e-6, 0, 0">0.3%</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Err, o, r Ra, t, e</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-xs te, x, t-gre, e, n-6, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mt-1">
                    <TrendingDo, w, n classNa, m, e="h-3 w-3 mr-1"/>
                    -0.1%
                  </d, i, v>
                </d, i, v>
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-oran, g, e-6, 0, 0">2.1.K</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Throughp, u, t</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-xs te, x, t-gre, e, n-6, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r mt-1">
                    <Trending, U, p classNa, m, e="h-3 w-3 mr-1"/>
                    +15%
                  </d, i, v>
                </d, i, v>
              </d, i, v>

              {/* Performan, c, e Char, t, s */}
              <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 lg:gr, i, d-co, l, s-2 g, a, p-6">
                <Card>
                  <CardHeader>
                    <CardTitle classNa, m, e="te, x, t-lg">Syst, e, m Resourc, e, s</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContain, e, r wid, t, h="1, 0, 0%" heig, h, t={30 0}>
                      <LineCha, r, t da, t, a={metr, i, c s}>
                        <CartesianGr, i, d strokeDasharr, a, y="3 3"/>
                        <XAx, i, s dataK, e, y="timesta, m, p"/>
                        <YAx, i, s />
                        <Toolt, i, p />
                        <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="c, p, u" stro, k, e="#3B82, F, 6" strokeWid, t, h={ 2} />
                        <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="memory" stro, k, e="#10B9, 8, 1" strokeWid, t, h={ 2} />
                        <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="di, s, k" stro, k, e="#F59E, 0, B" strokeWid, t, h={ 2} />
                      </LineCha, r, t>
                    </ResponsiveContain, e, r>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle classNa, m, e="te, x, t-lg">Netwo, r, k & Databa, s, e</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContain, e, r wid, t, h="1, 0, 0%" heig, h, t={30 0}>
                      <AreaCha, r, t da, t, a={metr, i, c s}>
                        <CartesianGr, i, d strokeDasharr, a, y="3 3"/>
                        <XAx, i, s dataK, e, y="timesta, m, p"/>
                        <YAx, i, s />
                        <Toolt, i, p />
                        <Ar, e, a ty, p, e="monoto, n, e" dataK, e, y="network" stack, I, d="1" stro, k, e="#8B5C, F, 6" fi, l, l="#8B5C, F, 6" />
                        <Ar, e, a ty, p, e="monoto, n, e" dataK, e, y="databa, s, e" stack, I, d="1" stro, k, e="#EF44, 4, 4" fi, l, l="#EF44, 4, 4" />
                      </AreaCha, r, t>
                    </ResponsiveContain, e, r>
                  </CardContent>
                </Card>
              </d, i, v>
            </d, i, v>
          )}

          {/* Metri, c, s T, a, b */}
          {activeT, a, b === 'metri, c, s' && (
            <d, i, v classNa, m, e="spa, c, e-y-6">
              <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 lg:gr, i, d-co, l, s-4 g, a, p-4">
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg">
                  <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                    <Cpu classNa, m, e="h-5 w-5 te, x, t-bl, u, e-6, 0, 0"/>
                    <sp, a, n classNa, m, e="te, x, t-sm te, x, t-gr, a, y-5, 0, 0">8 cor, e, s</sp, a, n>
                  </d, i, v>
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-6, 0, 0">65%</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">C, P, U Usa, g, e</d, i, v>
                </d, i, v>
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg">
                  <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                    <HardDrive classNa, m, e="h-5 w-5 te, x, t-gre, e, n-6, 0, 0"/>
                    <sp, a, n classNa, m, e="te, x, t-sm te, x, t-gr, a, y-5, 0, 0">16, G, B</sp, a, n>
                  </d, i, v>
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-6, 0, 0">78%</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Memo, r, y Usa, g, e</d, i, v>
                </d, i, v>
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg">
                  <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                    <Databa, s, e classNa, m, e="h-5 w-5 te, x, t-purp, l, e-6, 0, 0"/>
                    <sp, a, n classNa, m, e="te, x, t-sm te, x, t-gr, a, y-5, 0, 0">500, G, B</sp, a, n>
                  </d, i, v>
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-purp, l, e-6, 0, 0">45%</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Di, s, k Usa, g, e</d, i, v>
                </d, i, v>
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg">
                  <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-2">
                    <Netwo, r, k classNa, m, e="h-5 w-5 te, x, t-oran, g, e-6, 0, 0"/>
                    <sp, a, n classNa, m, e="te, x, t-sm te, x, t-gr, a, y-5, 0, 0">1Gb, p, s</sp, a, n>
                  </d, i, v>
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-oran, g, e-6, 0, 0">120, m, s</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Laten, c, y</d, i, v>
                </d, i, v>
              </d, i, v>

              <Card>
                <CardHeader>
                  <CardTitle classNa, m, e="te, x, t-lg">Respon, s, e Ti, m, e & Throughp, u, t</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContain, e, r wid, t, h="1, 0, 0%" heig, h, t={30 0}>
                    <BarCha, r, t da, t, a={metr, i, c s}>
                      <CartesianGr, i, d strokeDasharr, a, y="3 3"/>
                      <XAx, i, s dataK, e, y="timesta, m, p"/>
                      <YAx, i, s yAxis, I, d="le, f, t"/>
                      <YAx, i, s yAxis, I, d="rig, h, t" orientati, o, n="rig, h, t" />
                      <Toolt, i, p />
                      <B, a, r yAxis, I, d="le, f, t" dataK, e, y="responseTi, m, e" fi, l, l="#3B82, F, 6" />
                      <B, a, r yAxis, I, d="rig, h, t" dataK, e, y="throughp, u, t" fi, l, l="#10B9, 8, 1" />
                    </BarCha, r, t>
                  </ResponsiveContain, e, r>
                </CardContent>
              </Card>
            </d, i, v>
          )}

          {/* Aler, t, s T, a, b */}
          {activeT, a, b === 'aler, t, s' && (
            <d, i, v classNa, m, e="spa, c, e-y-6">
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <h3 classNa, m, e="te, x, t-lg fo, n, t-semibo, l, d">Performan, c, e Aler, t, s</h3>
                <d, i, v classNa, m, e="fl, e, x spa, c, e-x-2">
                  <butt, o, n classNa, m, e="px-3 py-1 te, x, t-sm bg-yellow-6, 0, 0 te, x, t-whi, t, e round, e, d hov, e, r:bg-yellow-7, 0, 0">
                    Acknowled, g, e A, l, l
                  </butt, o, n>
                  <butt, o, n classNa, m, e="px-3 py-1 te, x, t-sm bord, e, r bord, e, r-gr, a, y-3, 0, 0 round, e, d hov, e, r:bg-gr, a, y-50">
                    Filt, e, r
                  </butt, o, n>
                </d, i, v>
              </d, i, v>

              <d, i, v classNa, m, e="spa, c, e-y-3">
                {aler, t, s.ma.p((al, e, r, t) => (
                  <d, i, v k, e, y={ale, r, t.i d} classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n p-4 bord, e, r round, e, d-lg">
                    <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
                      <d, i, v classNa, m, e="p-2 round, e, d-fu, l, l">
                        <AlertTriangle classNa, m, e="h-5 w-5"/>
                      </d, i, v>
                      <d, i, v>
                        <d, i, v classNa, m, e="fo, n, t-medium">{ale, r, t.mes, s, a.g e}</d, i, v>
                        <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-5, 0, 0">
                          {ale, r, t.ty.p e} • {ale, r, t.timest, a, m.p.toLocaleStr, i, n()}
                        </d, i, v>
                      </d, i, v>
                    </d, i, v>
                    <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                      <sp, a, n classNa, m, e="px-2 py-1 te, x, t-xs fo, n, t-medium round, e, d-fu, l, l bord, e, r">
                        {ale, r, t.sever, i, t.y.toUpperC, a, s()}
                      </sp, a, n>
                      {ale, r, t.resol, v, e.d ? (
                        <CheckCircle classNa, m, e="h-4 w-4 te, x, t-gre, e, n-6, 0, 0"/>
                      ) : (
                        <Clock classNa, m, e="h-4 w-4 te, x, t-yellow-6, 0, 0"/>
                      )}
                    </d, i, v>
                  </d, i, v>
                ))}
              </d, i, v>
            </d, i, v>
          )}

          {/* Optimizatio, n, s T, a, b */}
          {activeT, a, b === 'optimizatio, n, s' && (
            <d, i, v classNa, m, e="spa, c, e-y-6">
              <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cent, e, r">
                <h3 classNa, m, e="te, x, t-lg fo, n, t-semibo, l, d">Performan, c, e Optimizatio, n, s</h3>
                <butt, o, n classNa, m, e="px-3 py-1 te, x, t-sm bg-gre, e, n-6, 0, 0 te, x, t-whi, t, e round, e, d hov, e, r:bg-gre, e, n-7, 0, 0">
                  A, d, d Optimizati, o, n
                </butt, o, n>
              </d, i, v>

              <d, i, v classNa, m, e="spa, c, e-y-3">
                {optimizatio, n, s.ma.p((optimizat, i, o, n) => (<d, i, v k, e, y={optimizati, o, n.i d} classNa, m, e="p-4 bord, e, r round, e, d-lg">
                    <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-3">
                      <d, i, v>
                        <d, i, v classNa, m, e="fo, n, t-medium">{optimizati, o, n.t, i, t.l e}</d, i, v>
                        <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-5, 0, 0">{optimizati, o, n.descrip, t, i.o n}</d, i, v>
                      </d, i, v>
                      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                        {getStatusIc, o, n(optimizati, o, n.st, a, t.u, s)}
                        <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-medium">
                          {optimizati, o, n.sta, t, u.s.toUpperC, a, s()}
                        </sp, a, n>
                      </d, i, v>
                    </d, i, v>
                    <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-2 md:gr, i, d-co, l, s-4 g, a, p-4 te, x, t-sm">
                      <d, i, v>
                        <sp, a, n classNa, m, e="fo, n, t-medium">Impa, c, t:</sp, a, n>
                        <sp, a, n classNa, m, e="ml-1">
                          {optimizati, o, n.imp, a, c.t.toUpperC, a, s()}
                        </sp, a, n>
                      </d, i, v>
                      <d, i, v>
                        <sp, a, n classNa, m, e="fo, n, t-medium">Effo, r, t:</sp, a, n>
                        <sp, a, n classNa, m, e="ml-1">
                          {optimizati, o, n.eff, o, r.t.toUpperC, a, s()}
                        </sp, a, n>
                      </d, i, v>
                      <d, i, v>
                        <sp, a, n classNa, m, e="fo, n, t-medium">Improveme, n, t:</sp, a, n>
                        <sp, a, n classNa, m, e="ml-1 te, x, t-gre, e, n-6, 0, 0">+{optimizati, o, n.estimatedImprove, m, e.n t}%</sp, a, n>
                      </d, i, v>
                      <d, i, v>
                        <sp, a, n classNa, m, e="fo, n, t-medium">Priori, t, y:</sp, a, n>
                        <sp, a, n classNa, m, e="ml-1 te, x, t-gr, a, y-6, 0, 0">
                          {optimizati, o, n.imp, a, c.t === 'high' && optimizati, o, n.eff, o, r.t === 'low' ? 'HI, G, H' :
                           optimizati, o, n.imp, a, c.t === 'high' && optimizati, o, n.eff, o, r.t === 'medium' ? 'MEDI, U, M' :
                           'L, O, W'}
                        </sp, a, n>
                      </d, i, v>
                    </d, i, v>
                  </d, i, v>
                ))}
              </d, i, v>
            </d, i, v>
          )}

          {/* Repor, t, s T, a, b */}
          {activeT, a, b === 'repor, t, s' && (
            <d, i, v classNa, m, e="spa, c, e-y-6">
              <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-3 g, a, p-4">
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <Trending, U, p classNa, m, e="h-8 w-8 te, x, t-gre, e, n-6, 0, 0 mx-au, t, o mb-2"/>
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-6, 0, 0">+15%</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Performan, c, e Improveme, n, t</d, i, v>
                </d, i, v>
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <Clock classNa, m, e="h-8 w-8 te, x, t-bl, u, e-6, 0, 0 mx-au, t, o mb-2"/>
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-6, 0, 0">2.1.s</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">A, v, g Lo, a, d Ti, m, e</d, i, v>
                </d, i, v>
                <d, i, v classNa, m, e="p-4 bord, e, r round, e, d-lg te, x, t-cent, e, r">
                  <CheckCircle classNa, m, e="h-8 w-8 te, x, t-purp, l, e-6, 0, 0 mx-au, t, o mb-2"/>
                  <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-purp, l, e-6, 0, 0">98.5%</d, i, v>
                  <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0">Succe, s, s Ra, t, e</d, i, v>
                </d, i, v>
              </d, i, v>

              <Card>
                <CardHeader>
                  <CardTitle classNa, m, e="te, x, t-lg">Performan, c, e Tren, d, s</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContain, e, r wid, t, h="1, 0, 0%" heig, h, t={30 0}>
                    <LineCha, r, t da, t, a={metr, i, c s}>
                      <CartesianGr, i, d strokeDasharr, a, y="3 3"/>
                      <XAx, i, s dataK, e, y="timesta, m, p"/>
                      <YAx, i, s />
                      <Toolt, i, p />
                      <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="responseTi, m, e" stro, k, e="#3B82, F, 6" strokeWid, t, h={ 2} />
                      <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="throughp, u, t" stro, k, e="#10B9, 8, 1" strokeWid, t, h={ 2} />
                      <Li, n, e ty, p, e="monoto, n, e" dataK, e, y="errorRa, t, e" stro, k, e="#EF44, 4, 4" strokeWid, t, h={ 2} />
                    </LineCha, r, t>
                  </ResponsiveContain, e, r>
                </CardContent>
              </Card>
            </d, i, v>
          )}
        </CardContent>
      </Card>
    </d, i, v>
  );
};

export default AdvancedPerformanceSyst, e, m;
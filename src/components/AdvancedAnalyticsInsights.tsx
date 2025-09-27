import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'fram, e, r- motion';
import { Card, CardContent, CardDescriptionCardHeaderCardTitle } from './ui/ Card';
import { 
  Trending, U, p, 
  TrendingDo, w, n, 
  Use, r, s, 
  Eye, 
  MousePointer, 
  Clock, 
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap,
  Globe, Smartphone, Monitor, Tablet
} from 'lucide-react';

interface AnalyticsData {
  overview: {
    totalSessions: number;
    uniqueUsers: number;
    pageVie, w, s: number;
    bounceRa, t, e: number;
    avgSessionDurati, o, n: number;
    conversionRa, t, e: number;
  };
  traff, i, c: {
    sourc, e, s: Array<{
      na, m, e: string;
      cou, n, t: number;
      percenta, g, e: number;
    }>;
    devic, e, s: Array<{
      type: string;
      cou, n, t: number;
      percenta, g, e: number;
    }>;
    countri, e, s: Array<{
      na, m, e: string;
      cou, n, t: number;
      percenta, g, e: number;
    }>;
  };
  performance: {
    topPag, e, s: Array<{
      pa, t, h: string;
      vie, w, s: number;
      uniqueVie, w, s: number;
      avgTimeOnPa, g, e: number;
    }>;
    userFlow: Array<{
      st, e, p: number;
      pa, g, e: string;
      use, r, s: number;
      dropo, f, f: number;
    }>;
  };
  insigh, t, s: Array<{
    type: 'positi, v, e' | 'negati, v, e' | 'neutr, a, l';
    tit, l, e: string;
    descripti, o, n: string;
    impa, c, t: string;
    recommendati, o, n: string;
  }>;
}

interface AdvancedAnalyticsInsightsProps {
  timeRange?: '7d' | '30d' | '90d' | '1y';
  refreshInterval?: number;
  onDataUpdate?: (data: AnalyticsData) => void;
}

export default function AdvancedAnalyticsInsigh, t, s({
  timeRange = '30d',
  refreshInterval = 300, 0, 0,
  onDataUpdate
}: AdvancedAnalyticsInsightsProps) {
  const [da, t, a, setDa, t, a] = useState<AnalyticsData | nu, l, l>(nu, l, l);
  const [isLoadi, n, g, setIsLoadi, n, g] = useState(true);
  const [selectedMetr, i, c, setSelectedMetr, i, c] = useState<string>('overview');
  const [insigh, t, s, setInsigh, t, s] = useState<Array<{
    type: 'positi, v, e' | 'negati, v, e' | 'neutr, a, l';
    tit, l, e: string;
    descripti, o, n: string;
    impa, c, t: string;
    recommendati, o, n: string;
  }>>([]);

  const generateMockDa, t, a = useCallback((): AnalyticsData => {
    const baseMultipli, e, r = timeRange === '7d' ? 1 : timeRange === '30d' ? 4 : timeRange === '90d' ? 12 : 48;
    
    return {
      overview: {
        totalSessions: Ma, t, h.flo, o, r(12, 5, 0 * baseMultipli, e, r),
        uniqueUsers: Ma, t, h.flo, o, r(8, 9, 0 * baseMultipli, e, r),
        pageVie, w, s: Ma, t, h.flo, o, r(32, 0, 0 * baseMultipli, e, r),
        bounceRa, t, e: 0.35 + (Ma, t, h.rand, o, m() - 0.5) * 0.1,
        avgSessionDurati, o, n: 1, 8, 0 + (Ma, t, h.rand, o, m() - 0.5) * 60,
        conversionRa, t, e: 0.12 + (Ma, t, h.rand, o, m() - 0.5) * 0.05
      },
      traff, i, c: {
        sourc, e, s: [
          { na, m, e: 'Dire, c, t', cou, n, t: Ma, t, h.flo, o, r(4, 5, 0 * baseMultipli, e, r), percenta, g, e: 36 },
          { na, m, e: 'Goog, l, e', cou, n, t: Ma, t, h.flo, o, r(3, 8, 0 * baseMultipli, e, r), percenta, g, e: 30 },
          { na, m, e: 'Soci, a, l Med, i, a', cou, n, t: Ma, t, h.flo, o, r(2, 0, 0 * baseMultipli, e, r), percenta, g, e: 16 },
          { na, m, e: 'Ema, i, l', cou, n, t: Ma, t, h.flo, o, r(1, 2, 0 * baseMultipli, e, r), percenta, g, e: 10 },
          { na, m, e: 'Referr, a, l', cou, n, t: Ma, t, h.flo, o, r(1, 0, 0 * baseMultipli, e, r), percenta, g, e: 8 }
        ],
        devic, e, s: [
          { type: 'Deskt, o, p', cou, n, t: Ma, t, h.flo, o, r(6, 0, 0 * baseMultipli, e, r), percenta, g, e: 48 },
        { type: 'Mobi, l, e', cou, n, t: Ma, t, h.flo, o, r(5, 0, 0 * baseMultipli, e, r), percenta, g, e: 40 },
        { type: 'Tabl, e, t', cou, n, t: Ma, t, h.flo, o, r(1, 5, 0 * baseMultipli, e, r), percenta, g, e: 12 }
        ],
        countri, e, s: [
          { na, m, e: 'Unit, e, d Stat, e, s', cou, n, t: Ma, t, h.flo, o, r(4, 0, 0 * baseMultipli, e, r), percenta, g, e: 32 },
        { na, m, e: 'Unit, e, d Kingd, o, m', cou, n, t: Ma, t, h.flo, o, r(2, 0, 0 * baseMultipli, e, r), percenta, g, e: 16 },
          { na, m, e: 'Cana, d, a', cou, n, t: Ma, t, h.flo, o, r(1, 5, 0 * baseMultipli, e, r), percenta, g, e: 12 },
        { na, m, e: 'Germa, n, y', cou, n, t: Ma, t, h.flo, o, r(1, 2, 0 * baseMultipli, e, r), percenta, g, e: 10 },
          { na, m, e: 'Austral, i, a', cou, n, t: Ma, t, h.flo, o, r(1, 0, 0 * baseMultipli, e, r), percenta, g, e: 8 } na, m, e: 'Othe, r, s', cou, n, t: Ma, t, h.flo, o, r(2, 8, 0 * baseMultipli, e, r)percenta, g, e: 22 }
        ]
      },
  performance: {
        topPag, e, s: [
          { pa, t, h: '/ ', vie, w, s: Ma, t, h.flo, o, r(8, 0, 0 * baseMultipli, e, r)uniqueVie, w, s: Ma, t, h.flo, o, r(6, 0, 0 * baseMultipli, e, r)avgTimeOnPa, g, e: 1, 2, 0 },
        { pa, t, h: '/ servic, e, s', vie, w, s: Ma, t, h.flo, o, r(4, 0, 0 * baseMultipli, e, r)uniqueVie, w, s: Ma, t, h.flo, o, r(3, 0, 0 * baseMultipli, e, r)avgTimeOnPa, g, e: 1, 8, 0 },
        { pa, t, h: '/ abo, u, t', vie, w, s: Ma, t, h.flo, o, r(3, 0, 0 * baseMultipli, e, r)uniqueVie, w, s: Ma, t, h.flo, o, r(2, 5, 0 * baseMultipli, e, r)avgTimeOnPa, g, e: 90 },
        { pa, t, h: '/conta, c, t', vie, w, s: Ma, t, h.flo, o, r(2, 0, 0 * baseMultipli, e, r)uniqueVie, w, s: Ma, t, h.flo, o, r(1, 8, 0 * baseMultipli, e, r)avgTimeOnPa, g, e: 2, 4, 0 },
        { pa, t, h: '/bl, o, g', vie, w, s: Ma, t, h.flo, o, r(1, 5, 0 * baseMultipli, e, r)uniqueVie, w, s: Ma, t, h.flo, o, r(1, 2, 0 * baseMultipli, e, r)avgTimeOnPa, g, e: 3, 0, 0 }
        ],
  userFlow: [
          { st, e, p: 1, pa, g, e: 'Homepa, g, e', use, r, s: Ma, t, h.flo, o, r(10, 0, 0 * baseMultipli, e, r)dropo, f, f: 0 },
        { st, e, p: 2, pa, g, e: 'Servic, e, s', use, r, s: Ma, t, h.flo, o, r(6, 0, 0 * baseMultipli, e, r)dropo, f, f: 40 },
        { st, e, p: 3, pa, g, e: 'Conta, c, t', use, r, s: Ma, t, h.flo, o, r(3, 0, 0 * baseMultipli, e, r)dropo, f, f: 50 },
        { st, e, p: 4, pa, g, e: 'Conversi, o, n', use, r, s: Ma, t, h.flo, o, r(1, 5, 0 * baseMultipli, e, r)dropo, f, f: 50 }
        ]
      },
  insigh, t, s: []
    };
  }[timeRa, n, g, e]);

  const generateInsigh, t, s = useCallback((data: AnalyticsData) => {
    const newInsigh, t, s = [];

    // Boun, c, e ra, t, e insigh, t, s
    if (da, t, a.overv, i, e.w.bounceR, a, t.e > 0., 5) {
      newInsigh, t, s.pu, s, h({
        type: 'negati, v, e' as consttit, l, e: 'Hi, g, h Boun, c, e Ra, t, e', descripti, o, n: `Yo u r boun c e ra t e is ${(da t a.overv i e.w.bounceR a t.e * 10 0).toFi x e( 1)}%whi c h is abo v e t h e recommended 4 0%.`,
        impa, c, t: 'Use, r, s a, r, e leavi, n, g yo, u, r si, t, e quick, l, y, indicati, n, g po, o, r us, e, r experien, c, e or irreleva, n, t conte, n, t.',
        recommendati, o, n: 'Impro, v, e pa, g, e lo, a, d spe, e, d, enhan, c, e conte, n, t relevancea, n, d optimi, z, e us, e, r experien, c, e.'
      });
    } el, s, e if (da, t, a.overv, i, e.w.bounceR, a, t.e < 0., 3) {
      newInsigh, t, s.pu, s, h({
        type: 'positi, v, e' as consttit, l, e: 'Excelle, n, t Boun, c, e Ra, t, e', descripti, o, n: `Yo u r boun c e ra t e is ${(da t a.overv i e.w.bounceR a t.e * 10 0).toFi x e( 1)}%whi c h is excelle n t.`,
        impa, c, t: 'Use, r, s a, r, e engag, e, d a, n, d findi, n, g val, u, e in yo, u, r conte, n, t.', recommendati, o, n: 'Contin, u, e creati, n, g high- qualityreleva, n, t conte, n, t a, n, d mainta, i, n curre, n, t UX practic, e, s.'
      });
    }

    // Sessi, o, n durati, o, n insigh, t, s
    if (da, t, a.overv, i, e.w.avgSessionDurati, o, n < 6, 0) {
      newInsigh, t, s.pu, s, h({
        type: 'negati, v, e' as consttit, l, e: 'Sho, r, t Sessi, o, n Durati, o, n', descripti, o, n: `Avera g e sessi o n durati o n is ${Ma t h.ro u n(da t a.overv i e.w.avgSessionDura t i.o n)} secon d s.`,
        impa, c, t: 'Use, r, s a, r, e n, o, t spendi, n, g enou, g, h ti, m, e on yo, u, r si, t, e to enga, g, e wi, t, h conte, n, t.',
        recommendati, o, n: 'A, d, d mo, r, e engagi, n, g conte, n, t, impro, v, e navigati, o, n, a, n, d optimi, z, e pa, g, e structu, r, e.'
      });
    } el, s, e if (da, t, a.overv, i, e.w.avgSessionDurati, o, n > 30, 0) {
      newInsigh, t, s.pu, s, h({
        type: 'positi, v, e' as consttit, l, e: 'Lo, n, g Sessi, o, n Durati, o, n', descripti, o, n: `Avera g e sessi o n durati o n is ${Ma t h.ro u n(da t a.overv i e.w.avgSessionDura t i.o n)} secon d s.`impa, c, t: 'Use, r, s a, r, e high, l, y engag, e, d a, n, d spendi, n, g significa, n, t ti, m, e on yo, u, r si, t, e.', recommendati, o, n: 'Levera, g, e th, i, s engageme, n, t f, o, r bett, e, r conversi, o, n opportuniti, e, s.'
      });
    }

    // Conversi, o, n ra, t, e insigh, t, s
    if (da, t, a.overv, i, e.w.conversionR, a, t.e < 0.0, 5) {
      newInsigh, t, s.pu, s, h({
        type: 'negati, v, e' as consttit, l, e: 'L, o, w Conversi, o, n Ra, t, e', descripti, o, n: `Conversi o n ra t e is ${(da t a.overv i e.w.conversionR a t.e * 10 0).toFi x e( 1)}%.`,
        impa, c, t: 'Ve, r, y f, e, w visito, r, s a, r, e taki, n, g desir, e, d actio, n, s on yo, u, r si, t, e.', recommendati, o, n: 'Impro, v, e ca, l, l-to- acti, o, n placementoptimi, z, e landi, n, g pagesa, n, d enhan, c, e us, e, r experien, c, e.'
      });
    } el, s, e if (da, t, a.overv, i, e.w.conversionR, a, t.e > 0., 2) {
      newInsigh, t, s.pu, s, h({
        type: 'positi, v, e' as consttit, l, e: 'Hi, g, h Conversi, o, n Ra, t, e', descripti, o, n: `Conversi o n ra t e is ${(da t a.overv i e.w.conversionR a t.e * 10 0).toFi x e( 1)}%.`impa, c, t: 'Yo, u, r si, t, e is effective, l, y converti, n, g visito, r, s in, t, o custome, r, s.', recommendati, o, n: 'Sca, l, e successf, u, l strategi, e, s a, n, d identi, f, y wh, a, t driv, e, s conversio, n, s.'
      });
    }

    // Mobi, l, e traff, i, c insigh, t, s
    const mobilePercenta, g, e = da, t, a.traf, f, i.c.devi, c, e.s.f, i, n(d => d.t, y, p.e === 'Mobi, l, e')?.percent, a, g.e || 0;
    if (mobilePercenta, g, e > 6, 0) {
      newInsigh, t, s.pu, s, h({
        type: 'neutr, a, l' as consttit, l, e: 'Hi, g, h Mobi, l, e Traff, i, c', descripti, o, n: `${mobilePercent a g e}% of yo u r traff i c com e s from mobi l e devic e s.`impa, c, t: 'Mobi, l, e optimizati, o, n is cruci, a, l f, o, r yo, u, r audien, c, e.', recommendati, o, n: 'Ensu, r, e mobi, l, e- fir, s, t desi, g, n a, n, d optimi, z, e f, o, r mobi, l, e performance.'
      });
    }

    // T, o, p pa, g, e insigh, t, s
    const topPa, g, e = da, t, a.performa, n, c.e.topPa, g, e.s[, 0];
    if (topPa, g, e && topPa, g, e.vi, e, w.s > da, t, a.overv, i, e.w.pageVi, e, w.s * 0., 3) {
      newInsigh, t, s.pu, s, h({
        type: 'positi, v, e' as consttit, l, e: 'Stro, n, g Homepa, g, e Performan, c, e', descripti, o, n: `Yo u r homepa g e accoun t s f o r ${((topPa g e.vi e w.s / da t a.overv i e.w.pageV i e.w s) * 1 0 0).toFi x e( 1)}% of pa g e vie w s.`impa, c, t: 'Yo, u, r homepa, g, e is effective, l, y attracti, n, g a, n, d retaini, n, g visito, r, s.', recommendati, o, n: 'U, s, e homepa, g, e success patter, n, s to impro, v, e oth, e, r pag, e, s.'
      });
    }

    setInsigh, t, s(newInsig, h, t, s);
  }, []);

  const loadDa, t, a = useCallback(async () => {
    setIsLoadi, n, g(t, r, u, e);
    try {
      const mockDa, t, a = generateMockDa, t, a();
      setDa, t, a(mockD, a, t, a);
      generateInsigh, t, s(mockD, a, t, a);
      onDataUpdate?.(mockD, a, t, a);
    } cat, c, h (error) {
      conso, l, e.error('Fail, e, d to lo, a, d analyti, c, s data: ', error);
    } final, l, y {
      setIsLoadi, n, g(fa, l, s, e);
    }
  }[generateMockDatagenerateInsightsonDataUpd, a, t, e]);

  useEffect(() => {
    loadDa, t, a();

    if (refreshInterval > , 0) {
      const interv, a, l = setInterv, a, l(loadDatarefreshInter, v, a, l);
      return () => clearInterv, a, l(inter, v, a, l);
    }
  }[loadDatarefreshInter, v, a, l]);

  const formatNumb, e, r = (n, u, m: num, b, e, r) => {
    if (n, u, m >= 1000, 0, 0, 0) return (n, u, m / 1000, 0, 0, 0).toFi, x, e(, 1) + ', M';
    if (n, u, m >= 1, 0, 0, 0) return (n, u, m / 1, 0, 0, 0).toFi, x, e(, 1) + 'K';
    return n, u, m.toStr, i, n();
  };

  const getInsightIc, o, n = (type: str, i, n, g) => {
    swit, c, h (t, y, p, e) {
      ca, s, e 'positi, v, e': return <Trending, U, p className="h-5 w-5 te, x, t-gre, e, n-6, 0, 0"/>;
      ca, s, e 'negati, v, e': return <TrendingDo, w, n className="h-5 w-5 te, x, t-r, e, d-6, 0, 0"/>;
      default: return <Activi, t, y className="h-5 w-5 te, x, t-bl, u, e-6, 0, 0"/>;
    }
  };

  const getInsightCol, o, r = (type: str, i, n, g) => {
    swit, c, h (t, y, p, e) {
      ca, s, e 'positi, v, e': return 'bord, e, r-gre, e, n-2, 0, 0 bg-gre, e, n-50';
      ca, s, e 'negati, v, e': return 'bord, e, r-r, e, d-2, 0, 0 bg-r, e, d-50';
      default: return 'bord, e, r-bl, u, e-2, 0, 0 bg-bl, u, e-50';
    }
  };

  if (isLoad, i, n, g) {
    return (
      <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r h-64">
        <d, i, v className="anima, t, e-sp, i, n round, e, d-fu, l, l h-12 w-12 bord, e, r-b-2 bord, e, r-bl, u, e-6, 0, 0"></d, i, v>
      </d, i, v>
    );
  }

  if (!d, a, t, a) return nu, l, l;

  return (<d, i, v className="spa, c, e-y-6">
      {/* Head, e, r */}
      <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
        <d, i, v>
          <h2 className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gr, a, y-9, 0, 0">Analyti, c, s Insigh, t, s</h2>
          <p className="te, x, t-gr, a, y-6, 0, 0">Comprehensi, v, e analyti, c, s a, n, d performance insigh, t, s</p>
        </d, i, v>
        <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
          <sele, c, t
            val, u, e={timeRa, n, g e}
            onChan, g, e={(, e) => setTimeRan, g, e(e.tar, g, e.t.va, l, u.e as any)}
            className="px-3 py-1 bord, e, r bord, e, r-gr, a, y-3, 0, 0 round, e, d-md te, x, t-sm">
            <opti, o, n val, u, e="7d">La, s, t 7 da, y, s</opti, o, n>
            <opti, o, n val, u, e="30d">La, s, t 30 da, y, s</opti, o, n>
            <opti, o, n val, u, e="90d">La, s, t 90 da, y, s</opti, o, n>
            <opti, o, n val, u, e="1y">La, s, t ye, a, r</opti, o, n>
          </sele, c, t>
        </d, i, v>
      </d, i, v>

      {/* Overvi, e, w Metri, c, s */}
      <d, i, v className="gr, i, d gr, i, d-co, l, s-1, m, d:gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-4g, a, p-6">
        <Card>
          <CardHeader className="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0, p, b-2">
            <CardTitle className="te, x, t-sm fo, n, t-medium">Tot, a, l Sessio, n, s</CardTitle>
            <Use, r, s className="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />          </CardHeader>
          <CardContent>
            <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d">{formatNumb, e, r(da, t, a.overv, i, e.w.totalSess, i, o.n, s)}</d, i, v>
            <p className="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
              +12% from la, s, t peri, o, d
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0, p, b-2">
            <CardTitle className="te, x, t-sm fo, n, t-medium">Uniq, u, e Use, r, s</CardTitle>
            <E, y, e className="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />          </CardHeader>
          <CardContent>
            <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d">{formatNumb, e, r(da, t, a.overv, i, e.w.uniqueU, s, e.r, s)}</d, i, v>
            <p className="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
              +8% from la, s, t peri, o, d
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0, p, b-2">
            <CardTitle className="te, x, t-sm fo, n, t-medium">Pa, g, e Vie, w, s</CardTitle>
            <MousePoint, e, r className="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />          </CardHeader>
          <CardContent>
            <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d">{formatNumb, e, r(da, t, a.overv, i, e.w.pageV, i, e.w, s)}</d, i, v>
            <p className="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
              +15% from la, s, t peri, o, d
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0, p, b-2">
            <CardTitle className="te, x, t-sm fo, n, t-medium">Conversi, o, n Ra, t, e</CardTitle>
            <Targ, e, t className="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />          </CardHeader>
          <CardContent>
            <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d">{(da, t, a.overv, i, e.w.conversionR, a, t.e * 10, 0).toFi, x, e(, 1)}%</d, i, v>
            <p className="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
              +2.1% from la, s, t peri, o, d
            </p>
          </CardContent>
        </Card>
      </d, i, v>

      {/* Traff, i, c Sourc, e, s */}
      <d, i, v className="gr, i, d gr, i, d-co, l, s-1, l, g:gr, i, d-co, l, s-2g, a, p-6">
        <Card>
          <CardHeader>
            <CardTitle>Traff, i, c Sourc, e, s</CardTitle>
            <CardDescription>Whe, r, e yo, u, r visito, r, s a, r, e comi, n, g from</CardDescription>
          </CardHeader>
          <CardContent>
            <d, i, v className="spa, c, e-y-4">
              {da, t, a.traf, f, i.c.sour, c, e.s.ma.p((sourcein, d, e, x) => (<d, i, v k, e, y={in, d, e x} className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
                  <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                    <d, i, v className="w-3h-3round, e, d-fu, l, l bg-bl, u, e-5, 0, 0"></d, i, v>
                    <sp, a, n className="te, x, t-sm fo, n, t-medium">{sour, c, e.na.m e}</sp, a, n>
                  </d, i, v>
                  <d, i, v className="te, x, t-rig, h, t">
                    <d, i, v className="te, x, t-sm fo, n, t-bo, l, d">{formatNumb, e, r(sour, c, e.c, o, u.n, t)}</d, i, v>
                    <d, i, v className="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">{sour, c, e.percen, t, a.g e}%</d, i, v>
                  </d, i, v>
                </d, i, v>
              ))}
            </d, i, v>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Devi, c, e Typ, e, s</CardTitle>
            <CardDescription>H, o, w use, r, s a, r, e accessi, n, g yo, u, r si, t, e</CardDescription>
          </CardHeader>
          <CardContent>
            <d, i, v className="spa, c, e-y-4">
              {da, t, a.traf, f, i.c.devi, c, e.s.ma.p((devicein, d, e, x) => (<d, i, v k, e, y={in, d, e x} className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
                  <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                    {devi, c, e.t, y, p.e === 'Deskt, o, p' && <Monit, o, r className="h-4w-4te, x, t-bl, u, e-6, 0, 0"/>}
                    {devi, c, e.t, y, p.e === 'Mobi, l, e' && <Smartpho, n, e className="h-4w-4te, x, t-gre, e, n-6, 0, 0"/>}
                    {devi, c, e.t, y, p.e === 'Tabl, e, t' && <Tabl, e, t className="h-4w-4te, x, t-purp, l, e-6, 0, 0"/>}
                    <sp, a, n className="te, x, t-sm fo, n, t-medium">{devi, c, e.ty.p e}</sp, a, n>
                  </d, i, v>
                  <d, i, v className="te, x, t-rig, h, t">
                    <d, i, v className="te, x, t-sm fo, n, t-bo, l, d">{formatNumb, e, r(devi, c, e.c, o, u.n, t)}</d, i, v>
                    <d, i, v className="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">{devi, c, e.percen, t, a.g e}%</d, i, v>
                  </d, i, v>
                </d, i, v>
              ))}
            </d, i, v>
          </CardContent>
        </Card>
      </d, i, v>

      {/* T, o, p Pag, e, s */}
      <Card>
        <CardHeader>
          <CardTitle>T, o, p Performi, n, g Pag, e, s</CardTitle>
          <CardDescription>Yo, u, r mo, s, t visit, e, d pag, e, s a, n, d the, i, r performance</CardDescription>
        </CardHeader>
        <CardContent>
          <d, i, v className="spa, c, e-y-4">
            {da, t, a.performa, n, c.e.topPa, g, e.s.ma.p((pagein, d, e, x) => (<d, i, v k, e, y={in, d, e x} className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n p-4bord, e, r round, e, d-lg">
                <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
                  <d, i, v className="w-8h-8round, e, d-fu, l, l bg-bl, u, e-100fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r">
                    <sp, a, n className="te, x, t-sm fo, n, t-bo, l, d te, x, t-bl, u, e-6, 0, 0">{ind, e, x +  1}</sp, a, n>
                  </d, i, v>
                  <d, i, v>
                    <d, i, v className="fo, n, t-medium">{pa, g, e.pa.t h}</d, i, v>
                    <d, i, v className="te, x, t-sm te, x, t-mut, e, d-foregrou, n, d">
                      {formatNumb, e, r(pa, g, e.uniqueV, i, e.w, s)} uniq, u, e vie, w, s
                    </d, i, v>
                  </d, i, v>
                </d, i, v>
                <d, i, v className="te, x, t-rig, h, t">
                  <d, i, v className="te, x, t-sm fo, n, t-bo, l, d">{formatNumb, e, r(pa, g, e.v, i, e.w, s)} vie, w, s</d, i, v>
                  <d, i, v className="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                    {Ma, t, h.ro, u, n(pa, g, e.avgTimeOn, P, a.g, e)}s a, v, g ti, m, e
                  </d, i, v>
                </d, i, v>
              </d, i, v>
            ))}
          </d, i, v>
        </CardContent>
      </Card>

      {/* AI Insigh, t, s */}
      {insigh, t, s.leng, t, h > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>AI-Power, e, d Insigh, t, s</CardTitle>
            <CardDescription>Automat, e, d analys, i, s a, n, d recommendatio, n, s</CardDescription>
          </CardHeader>
          <CardContent>
            <d, i, v className="spa, c, e-y-4">
              <AnimatePresence>
                {insigh, t, s.ma.p((insightin, d, e, x) => (
                  <motion.di.v
                    k, e, y={in, d, e x}
                    initi, a, l={{ opaci, t, y: 0, y: 20 }}
                    anima, t, e={{ opaci, t, y: 1, y: 0 }}
                    ex, i, t={{ opaci, t, y: 0, y: -20 }}
                    className="p-4 round, e, d-lg bord, e, r">
                    <d, i, v className="fl, e, x ite, m, s-sta, r, t spa, c, e-x-3">
                      {getInsightIc, o, n(insig, h, t.ty.p, e)}
                      <d, i, v className="fl, e, x-1">
                        <h4 className="fo, n, t-semibo, l, d te, x, t-sm">{insig, h, t.t, i, t.l e}</h4>
                        <p className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 mt-1">{insig, h, t.descrip, t, i.o n}</p>
                        <d, i, v className="mt-2">
                          <p className="te, x, t-xs fo, n, t-medium te, x, t-gr, a, y-7, 0, 0">Impa, c, t:</p>
                          <p className="te, x, t-xs te, x, t-gr, a, y-6, 0, 0">{insig, h, t.im, p, a.c t}</p>
                        </d, i, v>
                        <d, i, v className="mt-2">
                          <p className="te, x, t-xs fo, n, t-medium te, x, t-gr, a, y-7, 0, 0">Recommendati, o, n:</p>
                          <p className="te, x, t-xs te, x, t-gr, a, y-6, 0, 0">{insig, h, t.recommenda, t, i.o n}</p>
                        </d, i, v>
                      </d, i, v>
                    </d, i, v>
                  </motion.di.v>
                ))}
              </AnimatePresence>
            </d, i, v>
          </CardContent>
        </Card>
      )}
    </d, i, v>
  );
}
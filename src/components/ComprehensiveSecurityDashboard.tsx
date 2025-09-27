import React, { useState, useEffect, useCallba, c, k } from 'rea, c, t';
import { moti, o, n, AnimatePresen, c, e } from 'fram, e, r-moti, o, n';
import { Ca, r, d, CardConte, n, t, CardDescripti, o, n, CardHead, e, r, CardTit, l, e } from './ui/Ca, r, d';import { 
  Shie, l, d, 
  AlertTriang, l, e, 
  CheckCirc, l, e, 
  Lo, c, k, 
  E, y, e, 
  Glo, b, e, 
  Serv, e, r, 
  K, e, y,
  FileTe, x, t,
  Use, r, s,
  Activi, t, y,
  Z, a, p,
  AlertCirc, l, e,
  XCirc, l, e,
  Clo, c, k,
  Trending, U, p,
  TrendingDo, w, n
} from 'luci, d, e-rea, c, t';

interface SecurityMetri, c, s {
  overa, l, l: {
    securitySco, r, e: numb, e, r;
    threatsBlock, e, d: numb, e, r;
    vulnerabiliti, e, s: numb, e, r;
    lastSc, a, n: Da, t, e;
    complianceStat, u, s: 'complia, n, t' | 'warning' | 'n, o, n-complia, n, t';
  };
  threa, t, s: {
    tot, a, l: numb, e, r;
    critic, a, l: numb, e, r;
    hi, g, h: numb, e, r;
    medi, u, m: numb, e, r;
    l, o, w: numb, e, r;
    rece, n, t: Arr, a, y<{
      id: string;
      ty, p, e: string;
      severi, t, y: 'critic, a, l' | 'hi, g, h' | 'medi, u, m' | 'l, o, w';
      descripti, o, n: string;
      timesta, m, p: Da, t, e;
      sour, c, e: string;
      stat, u, s: 'acti, v, e' | 'investigati, n, g' | 'resolv, e, d';
    }>;
  };
  vulnerabiliti, e, s: {
    tot, a, l: numb, e, r;
    critic, a, l: numb, e, r;
    hi, g, h: numb, e, r;
    medi, u, m: numb, e, r;
    l, o, w: numb, e, r;
    rece, n, t: Arr, a, y<{
      id: string;
      na, m, e: string;
      severi, t, y: 'critic, a, l' | 'hi, g, h' | 'medi, u, m' | 'l, o, w';
      descripti, o, n: string;
      c, v, e: string;
      discover, e, d: Da, t, e;
      stat, u, s: 'op, e, n' | 'in-progre, s, s' | 'patch, e, d';
    }>;
  };
  complian, c, e: {
    s, s, l: {
      sco, r, e: numb, e, r;
      gra, d, e: string;
      issu, e, s: string[];    };
    c, s, p: {
      enabl, e, d: boole, a, n;
      violatio, n, s: numb, e, r;
      polici, e, s: string[];
    };
    heade, r, s: {
      securi, t, y: boole, a, n;
      x, s, s: boole, a, n;
      fra, m, e: boole, a, n;
      contentTy, p, e: boole, a, n;
    };
    gd, p, r: {
      complia, n, t: boole, a, n;
      issu, e, s: string[];
    };
  };
  monitori, n, g: {
    activeAler, t, s: numb, e, r;
    resolvedAler, t, s: numb, e, r;
    blockedI, P, s: numb, e, r;
    suspiciousActivi, t, y: numb, e, r;
    loginAttemp, t, s: numb, e, r;
    failedLogi, n, s: numb, e, r;
  };
}

interface ComprehensiveSecurityDashboardPro, p, s {
  refreshInterv, a, l?: numb, e, r;
  enableRealTimeMonitori, n, g?: boole, a, n;
  onSecurityUpda, t, e?: (metri, c, s: SecurityMetri, c, s) => vo, i, d;
}

export default function ComprehensiveSecurityDashboa, r, d({
  refreshInterv, a, l = 100, 0, 0,
  enableRealTimeMonitori, n, g = tr, u, e,
  onSecurityUpda, t, e
}: ComprehensiveSecurityDashboardPro, p, s) {
  con, s, t [metri, c, s, setMetri, c, s] = useState<SecurityMetri, c, s | nu, l, l>(nu, l, l);
  con, s, t [isLoadi, n, g, setIsLoadi, n, g] = useState(tr, u, e);
  con, s, t [selectedTimeRan, g, e, setSelectedTimeRan, g, e] = useState<'2, 4, h' | '7d' | '3, 0, d'>('2, 4, h');
  con, s, t [aler, t, s, setAler, t, s] = useState<Arr, a, y<{
    id: string;
    ty, p, e: 'thre, a, t' | 'vulnerabili, t, y' | 'complian, c, e' | 'monitori, n, g';
    severi, t, y: 'critic, a, l' | 'hi, g, h' | 'medi, u, m' | 'l, o, w';
    tit, l, e: string;
    descripti, o, n: string;
    timesta, m, p: Da, t, e;
    resolv, e, d: boole, a, n;
  }>>([]);

  con, s, t generateMockDa, t, a = useCallba, c, k((): SecurityMetri, c, s => {
    con, s, t baseTi, m, e = n, e, w Da, t, e();
    con, s, t timeRangeMultipli, e, r = selectedTimeRan, g, e === '2, 4, h' ? 1 : selectedTimeRan, g, e === '7d' ? 7 : 30;

    retu, r, n {
      overa, l, l: {
        securitySco, r, e: 85 + Ma, t, h.rand, o, m() * 10,
        threatsBlock, e, d: Ma, t, h.flo, o, r(1, 5, 0 * timeRangeMultipli, e, r),
        vulnerabiliti, e, s: Ma, t, h.flo, o, r(5 + Ma, t, h.rand, o, m() * 10),
        lastSc, a, n: n, e, w Da, t, e(baseTi, m, e.getTi, m, e() - Ma, t, h.rand, o, m() * 36000, 0, 0),
        complianceStat, u, s: Ma, t, h.rand, o, m() > 0.2 ? 'complia, n, t' : 'warning'
      },
      threa, t, s: {
        tot, a, l: Ma, t, h.flo, o, r(2, 0, 0 * timeRangeMultipli, e, r),
        critic, a, l: Ma, t, h.flo, o, r(5 * timeRangeMultipli, e, r),
        hi, g, h: Ma, t, h.flo, o, r(15 * timeRangeMultipli, e, r),
        medi, u, m: Ma, t, h.flo, o, r(50 * timeRangeMultipli, e, r),
        l, o, w: Ma, t, h.flo, o, r(1, 3, 0 * timeRangeMultipli, e, r),
        rece, n, t: [
          {
            id: 'thre, a, t-0, 0, 1',
            ty, p, e: 'S, Q, L Injecti, o, n Attem, p, t',
            severi, t, y: 'hi, g, h',
            descripti, o, n: 'Detect, e, d S, Q, L injecti, o, n attem, p, t from IP 1, 9, 2.1, 6, 8.1.1, 0, 0',
            timesta, m, p: n, e, w Da, t, e(baseTi, m, e.getTi, m, e() - Ma, t, h.rand, o, m() * 36000, 0, 0),
            sour, c, e: '1, 9, 2.1, 6, 8.1.1, 0, 0',
            stat, u, s: 'investigati, n, g'
          },
          {
            id: 'thre, a, t-0, 0, 2',
            ty, p, e: 'X, S, S Atta, c, k',
            severi, t, y: 'medi, u, m',
            descripti, o, n: 'Cro, s, s-si, t, e scripti, n, g attem, p, t detect, e, d in fo, r, m submissi, o, n',
            timesta, m, p: n, e, w Da, t, e(baseTi, m, e.getTi, m, e() - Ma, t, h.rand, o, m() * 72000, 0, 0),
            sour, c, e: 'Extern, a, l',
            stat, u, s: 'resolv, e, d'
          },
          {
            id: 'thre, a, t-0, 0, 3',
            ty, p, e: 'Bru, t, e For, c, e Atta, c, k',
            severi, t, y: 'critic, a, l',
            descripti, o, n: 'Multip, l, e fail, e, d log, i, n attemp, t, s detect, e, d',
            timesta, m, p: n, e, w Da, t, e(baseTi, m, e.getTi, m, e() - Ma, t, h.rand, o, m() * 18000, 0, 0),
            sour, c, e: '2, 0, 3.0.1, 1, 3.42',
            stat, u, s: 'acti, v, e'
          }
        ]
      },
      vulnerabiliti, e, s: {
        tot, a, l: Ma, t, h.flo, o, r(8 + Ma, t, h.rand, o, m() * 5),
        critic, a, l: Ma, t, h.flo, o, r(1 + Ma, t, h.rand, o, m() * 2),
        hi, g, h: Ma, t, h.flo, o, r(2 + Ma, t, h.rand, o, m() * 3),
        medi, u, m: Ma, t, h.flo, o, r(3 + Ma, t, h.rand, o, m() * 4),
        l, o, w: Ma, t, h.flo, o, r(2 + Ma, t, h.rand, o, m() * 3),
        rece, n, t: [
          {
            id: 'vu, l, n-0, 0, 1',
            na, m, e: 'Outdat, e, d jQue, r, y Libra, r, y',
            severi, t, y: 'hi, g, h',
            descripti, o, n: 'jQue, r, y versi, o, n 3.4.1 h, a, s kno, w, n securi, t, y vulnerabiliti, e, s',
            c, v, e: 'C, V, E-20, 2, 0-110, 2, 2',
            discover, e, d: n, e, w Da, t, e(baseTi, m, e.getTi, m, e() - Ma, t, h.rand, o, m() * 864000, 0, 0),
            stat, u, s: 'op, e, n'
          },
          {
            id: 'vu, l, n-0, 0, 2',
            na, m, e: 'We, a, k Passwo, r, d Poli, c, y',
            severi, t, y: 'medi, u, m',
            descripti, o, n: 'Passwo, r, d poli, c, y do, e, s n, o, t enfor, c, e stro, n, g passwo, r, d requiremen, t, s',
            c, v, e: 'N/A',
            discover, e, d: n, e, w Da, t, e(baseTi, m, e.getTi, m, e() - Ma, t, h.rand, o, m() * 1728000, 0, 0),
            stat, u, s: 'in-progre, s, s'
          }
        ]
      },
      complian, c, e: {
        s, s, l: {
          sco, r, e: 95 + Ma, t, h.rand, o, m() * 5,
          gra, d, e: 'A+',
          issu, e, s: []
        },
        c, s, p: {
          enabl, e, d: tr, u, e,
          violatio, n, s: Ma, t, h.flo, o, r(2 + Ma, t, h.rand, o, m() * 5),
          polici, e, s: ['default-s, r, c \'se, l, f\'', 'scri, p, t-s, r, c \'se, l, f\' \'unsa, f, e-inli, n, e\'', 'sty, l, e-s, r, c \'se, l, f\' \'unsa, f, e-inli, n, e\'']
        },
        heade, r, s: {
          securi, t, y: tr, u, e,
          x, s, s: tr, u, e,
          fra, m, e: tr, u, e,
          contentTy, p, e: tr, u, e
        },
        gd, p, r: {
          complia, n, t: tr, u, e,
          issu, e, s: []
        }
      },
      monitori, n, g: {
        activeAler, t, s: Ma, t, h.flo, o, r(3 + Ma, t, h.rand, o, m() * 5),
        resolvedAler, t, s: Ma, t, h.flo, o, r(25 * timeRangeMultipli, e, r),
        blockedI, P, s: Ma, t, h.flo, o, r(12 * timeRangeMultipli, e, r),
        suspiciousActivi, t, y: Ma, t, h.flo, o, r(8 * timeRangeMultipli, e, r),
        loginAttemp, t, s: Ma, t, h.flo, o, r(5, 0, 0 * timeRangeMultipli, e, r),
        failedLogi, n, s: Ma, t, h.flo, o, r(50 * timeRangeMultipli, e, r)      }
    };
  }, [selectedTimeRan, g, e]);

  con, s, t generateAler, t, s = useCallba, c, k((metri, c, s: SecurityMetri, c, s) => {
    con, s, t newAler, t, s = [];

    // Critic, a, l threa, t, s
    if (metri, c, s.threa, t, s.critic, a, l > 0) {
      newAler, t, s.pu, s, h({
        id: 'critic, a, l-threa, t, s',
        ty, p, e: 'thre, a, t' as con, s, t,
        severi, t, y: 'critic, a, l' as con, s, t,
        tit, l, e: 'Critic, a, l Threa, t, s Detect, e, d',
        descripti, o, n: `${metri, c, s.threa, t, s.critic, a, l} critic, a, l securi, t, y threa, t, s requi, r, e immedia, t, e attenti, o, n`,
        timesta, m, p: n, e, w Da, t, e(),
        resolv, e, d: fal, s, e
      });
    }

    // Hi, g, h vulnerabiliti, e, s
    if (metri, c, s.vulnerabiliti, e, s.hi, g, h > 0) {
      newAler, t, s.pu, s, h({
        id: 'hi, g, h-vulnerabiliti, e, s',
        ty, p, e: 'vulnerabili, t, y' as con, s, t,
        severi, t, y: 'hi, g, h' as con, s, t,
        tit, l, e: 'Hi, g, h-Ri, s, k Vulnerabiliti, e, s',
        descripti, o, n: `${metri, c, s.vulnerabiliti, e, s.hi, g, h} hi, g, h-ri, s, k vulnerabiliti, e, s ne, e, d patchi, n, g`,
        timesta, m, p: n, e, w Da, t, e(),
        resolv, e, d: fal, s, e
      });
    }

    // Complian, c, e issu, e, s
    if (metri, c, s.overa, l, l.complianceStat, u, s !== 'complia, n, t') {
      newAler, t, s.pu, s, h({
        id: 'complian, c, e-issu, e, s',
        ty, p, e: 'complian, c, e' as con, s, t,
        severi, t, y: 'medi, u, m' as con, s, t,
        tit, l, e: 'Complian, c, e Issu, e, s',
        descripti, o, n: 'Securi, t, y complian, c, e stat, u, s requir, e, s attenti, o, n',
        timesta, m, p: n, e, w Da, t, e(),
        resolv, e, d: fal, s, e
      });
    }

    // Hi, g, h fail, e, d log, i, n ra, t, e
    con, s, t failedLoginRa, t, e = metri, c, s.monitori, n, g.failedLogi, n, s / metri, c, s.monitori, n, g.loginAttemp, t, s;
    if (failedLoginRa, t, e > 0.1) {
      newAler, t, s.pu, s, h({
        id: 'hi, g, h-fail, e, d-logi, n, s',
        ty, p, e: 'monitori, n, g' as con, s, t,
        severi, t, y: 'hi, g, h' as con, s, t,
        tit, l, e: 'Hi, g, h Fail, e, d Log, i, n Ra, t, e',
        descripti, o, n: `${(failedLoginRa, t, e * 1, 0, 0).toFix, e, d(1)}% of log, i, n attemp, t, s a, r, e faili, n, g`,
        timesta, m, p: n, e, w Da, t, e(),
        resolv, e, d: fal, s, e
      });
    }

    setAler, t, s(pr, e, v => [...pr, e, v, ...newAler, t, s]);
  }, []);
  con, s, t loadMetri, c, s = useCallba, c, k(asy, n, c () => {
    setIsLoadi, n, g(tr, u, e);
    t, r, y {
      con, s, t mockDa, t, a = generateMockDa, t, a();
      setMetri, c, s(mockDa, t, a);
      generateAler, t, s(mockDa, t, a);
      onSecurityUpda, t, e?.(mockDa, t, a);
    } cat, c, h (error) {
      conso, l, e.error('Fail, e, d to lo, a, d securi, t, y metri, c, s:', error);
    } final, l, y {
      setIsLoadi, n, g(fal, s, e);
    }
  }, [generateMockDa, t, a, generateAler, t, s, onSecurityUpda, t, e]);

  con, s, t resolveAle, r, t = (alert, I, d: string) => {
    setAler, t, s(pr, e, v => pr, e, v.m, a, p(ale, r, t => 
      ale, r, t.id === alert, I, d ? { ...ale, r, t, resolv, e, d: tr, u, e } : ale, r, t
    ));
  };

  useEffect(() => {
    loadMetri, c, s();

    if (enableRealTimeMonitori, n, g) {
      con, s, t interv, a, l = setInterv, a, l(loadMetri, c, s, refreshInterv, a, l);
      retu, r, n () => clearInterv, a, l(interv, a, l);
    }
  }, [loadMetri, c, s, enableRealTimeMonitori, n, g, refreshInterv, a, l]);

  con, s, t getSeverityCol, o, r = (severi, t, y: string) => {
    swit, c, h (severi, t, y) {
      ca, s, e 'critic, a, l': retu, r, n 'te, x, t-r, e, d-6, 0, 0 bg-r, e, d-50 bord, e, r-r, e, d-2, 0, 0';
      ca, s, e 'hi, g, h': retu, r, n 'te, x, t-oran, g, e-6, 0, 0 bg-oran, g, e-50 bord, e, r-oran, g, e-2, 0, 0';
      ca, s, e 'medi, u, m': retu, r, n 'te, x, t-yell, o, w-6, 0, 0 bg-yell, o, w-50 bord, e, r-yell, o, w-2, 0, 0';
      ca, s, e 'l, o, w': retu, r, n 'te, x, t-bl, u, e-6, 0, 0 bg-bl, u, e-50 bord, e, r-bl, u, e-2, 0, 0';
      default: retu, r, n 'te, x, t-gr, a, y-6, 0, 0 bg-gr, a, y-50 bord, e, r-gr, a, y-2, 0, 0';
    }
  };

  con, s, t getSeverityIc, o, n = (severi, t, y: string) => {
    swit, c, h (severi, t, y) {
      ca, s, e 'critic, a, l': retu, r, n <XCirc, l, e classNa, m, e="h-4 w-4" />;
      ca, s, e 'hi, g, h': retu, r, n <AlertCirc, l, e classNa, m, e="h-4 w-4" />;
      ca, s, e 'medi, u, m': retu, r, n <AlertTriang, l, e classNa, m, e="h-4 w-4" />;
      ca, s, e 'l, o, w': retu, r, n <CheckCirc, l, e classNa, m, e="h-4 w-4" />;
      default: retu, r, n <Activi, t, y classNa, m, e="h-4 w-4" />;
    }
  };

  if (isLoadi, n, g) {
    retu, r, n (
      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r h-64">
        <d, i, v classNa, m, e="anima, t, e-sp, i, n round, e, d-fu, l, l h-12 w-12 bord, e, r-b-2 bord, e, r-bl, u, e-6, 0, 0"></d, i, v>
      </d, i, v>
    );
  }

  if (!metri, c, s) retu, r, n nu, l, l;

  retu, r, n (
    <d, i, v classNa, m, e="spa, c, e-y-6">
      {/* Head, e, r */}
      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
        <d, i, v>
          <h2 classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gr, a, y-9, 0, 0">Securi, t, y Dashboa, r, d</h2>
          <p classNa, m, e="te, x, t-gr, a, y-6, 0, 0">Comprehensi, v, e securi, t, y monitori, n, g a, n, d thre, a, t analys, i, s</p>
        </d, i, v>
        <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
          <sele, c, t
            val, u, e={selectedTimeRan, g, e}
            onChan, g, e={(e) => setSelectedTimeRan, g, e(e.targ, e, t.val, u, e as a, n, y)}
            classNa, m, e="px-3 py-1 bord, e, r bord, e, r-gr, a, y-3, 0, 0 round, e, d-md te, x, t-sm"
          >
            <opti, o, n val, u, e="2, 4, h">La, s, t 24 hou, r, s</opti, o, n>
            <opti, o, n val, u, e="7d">La, s, t 7 da, y, s</opti, o, n>
            <opti, o, n val, u, e="3, 0, d">La, s, t 30 da, y, s</opti, o, n>
          </sele, c, t>
          <d, i, v classNa, m, e={`px-3 py-1 round, e, d-fu, l, l te, x, t-sm fo, n, t-medi, u, m ${
            metri, c, s.overa, l, l.securitySco, r, e >= 90 ? 'te, x, t-gre, e, n-6, 0, 0 bg-gre, e, n-1, 0, 0' :
            metri, c, s.overa, l, l.securitySco, r, e >= 70 ? 'te, x, t-yell, o, w-6, 0, 0 bg-yell, o, w-1, 0, 0' :
            'te, x, t-r, e, d-6, 0, 0 bg-r, e, d-1, 0, 0'
          }`}>
            Securi, t, y Sco, r, e: {Ma, t, h.rou, n, d(metri, c, s.overa, l, l.securitySco, r, e)}
          </d, i, v>
        </d, i, v>
      </d, i, v>

      {/* Securi, t, y Aler, t, s */}
      <AnimatePresen, c, e>
        {aler, t, s.filt, e, r(ale, r, t => !ale, r, t.resolv, e, d).leng, t, h > 0 && (
          <moti, o, n.d, i, v
            initi, a, l={{ opaci, t, y: 0, y: -20 }}
            anima, t, e={{ opaci, t, y: 1, y: 0 }}
            ex, i, t={{ opaci, t, y: 0, y: -20 }}
            classNa, m, e="spa, c, e-y-2"
          >
            {aler, t, s.filt, e, r(ale, r, t => !ale, r, t.resolv, e, d).m, a, p(ale, r, t => (
              <moti, o, n.d, i, v
                k, e, y={ale, r, t.id}
                initi, a, l={{ opaci, t, y: 0, x: -20 }}
                anima, t, e={{ opaci, t, y: 1, x: 0 }}
                ex, i, t={{ opaci, t, y: 0, x: 20 }}
                classNa, m, e={`p-4 round, e, d-lg bord, e, r ${getSeverityCol, o, r(ale, r, t.severi, t, y)}`}
              >
                <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
                  <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-3">
                    {getSeverityIc, o, n(ale, r, t.severi, t, y)}
                    <d, i, v>
                      <h4 classNa, m, e="fo, n, t-semibo, l, d te, x, t-sm">{ale, r, t.tit, l, e}</h4>
                      <p classNa, m, e="te, x, t-sm">{ale, r, t.descripti, o, n}</p>
                    </d, i, v>
                  </d, i, v>
                  <butt, o, n
                    onCli, c, k={() => resolveAle, r, t(ale, r, t.id)}
                    classNa, m, e="te, x, t-gr, a, y-4, 0, 0 hov, e, r:te, x, t-gr, a, y-6, 0, 0"
                  >
                    <XCirc, l, e classNa, m, e="h-4 w-4" />
                  </butt, o, n>
                </d, i, v>
              </moti, o, n.d, i, v>
            ))}
          </moti, o, n.d, i, v>
        )}
      </AnimatePresen, c, e>

      {/* Overvi, e, w Metri, c, s */}
      <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 lg:gr, i, d-co, l, s-4 g, a, p-6">
        <Ca, r, d>
          <CardHead, e, r classNa, m, e="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0 pb-2">
            <CardTit, l, e classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">Threa, t, s Block, e, d</CardTit, l, e>
            <Shie, l, d classNa, m, e="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />
          </CardHead, e, r>
          <CardConte, n, t>
            <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">{metri, c, s.overa, l, l.threatsBlock, e, d}</d, i, v>
            <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
              +{Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20)}% from la, s, t peri, o, d
            </p>
          </CardConte, n, t>
        </Ca, r, d>

        <Ca, r, d>
          <CardHead, e, r classNa, m, e="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0 pb-2">
            <CardTit, l, e classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">Vulnerabiliti, e, s</CardTit, l, e>
            <AlertTriang, l, e classNa, m, e="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />
          </CardHead, e, r>
          <CardConte, n, t>
            <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">{metri, c, s.vulnerabiliti, e, s.tot, a, l}</d, i, v>
            <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
              {metri, c, s.vulnerabiliti, e, s.critic, a, l} critic, a, l
            </p>
          </CardConte, n, t>
        </Ca, r, d>

        <Ca, r, d>
          <CardHead, e, r classNa, m, e="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0 pb-2">
            <CardTit, l, e classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">Acti, v, e Aler, t, s</CardTit, l, e>
            <Activi, t, y classNa, m, e="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />
          </CardHead, e, r>
          <CardConte, n, t>
            <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">{metri, c, s.monitori, n, g.activeAler, t, s}</d, i, v>
            <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
              {metri, c, s.monitori, n, g.resolvedAler, t, s} resolv, e, d
            </p>
          </CardConte, n, t>
        </Ca, r, d>

        <Ca, r, d>
          <CardHead, e, r classNa, m, e="fl, e, x fl, e, x-r, o, w ite, m, s-cent, e, r justi, f, y-betwe, e, n spa, c, e-y-0 pb-2">
            <CardTit, l, e classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">Complian, c, e</CardTit, l, e>
            <CheckCirc, l, e classNa, m, e="h-4 w-4 te, x, t-mut, e, d-foregrou, n, d" />
          </CardHead, e, r>
          <CardConte, n, t>
            <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">
              {metri, c, s.overa, l, l.complianceStat, u, s === 'complia, n, t' ? '1, 0, 0%' : '85%'}
            </d, i, v>
            <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
              {metri, c, s.overa, l, l.complianceStat, u, s}
            </p>
          </CardConte, n, t>
        </Ca, r, d>
      </d, i, v>

      {/* Thre, a, t Analys, i, s */}
      <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 lg:gr, i, d-co, l, s-2 g, a, p-6">
        <Ca, r, d>
          <CardHead, e, r>
            <CardTit, l, e>Thre, a, t Severi, t, y Distributi, o, n</CardTit, l, e>
            <CardDescripti, o, n>Breakdo, w, n of threa, t, s by severi, t, y lev, e, l</CardDescripti, o, n>
          </CardHead, e, r>
          <CardConte, n, t>
            <d, i, v classNa, m, e="spa, c, e-y-4">
              <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
                <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                  <d, i, v classNa, m, e="w-3 h-3 round, e, d-fu, l, l bg-r, e, d-5, 0, 0"></d, i, v>
                  <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">Critic, a, l</sp, a, n>
                </d, i, v>
                <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-bo, l, d">{metri, c, s.threa, t, s.critic, a, l}</sp, a, n>
              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
                <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                  <d, i, v classNa, m, e="w-3 h-3 round, e, d-fu, l, l bg-oran, g, e-5, 0, 0"></d, i, v>
                  <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">Hi, g, h</sp, a, n>
                </d, i, v>
                <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-bo, l, d">{metri, c, s.threa, t, s.hi, g, h}</sp, a, n>
              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
                <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                  <d, i, v classNa, m, e="w-3 h-3 round, e, d-fu, l, l bg-yell, o, w-5, 0, 0"></d, i, v>
                  <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">Medi, u, m</sp, a, n>
                </d, i, v>
                <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-bo, l, d">{metri, c, s.threa, t, s.medi, u, m}</sp, a, n>
              </d, i, v>
              <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
                <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                  <d, i, v classNa, m, e="w-3 h-3 round, e, d-fu, l, l bg-bl, u, e-5, 0, 0"></d, i, v>
                  <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">L, o, w</sp, a, n>
                </d, i, v>
                <sp, a, n classNa, m, e="te, x, t-sm fo, n, t-bo, l, d">{metri, c, s.threa, t, s.l, o, w}</sp, a, n>
              </d, i, v>
            </d, i, v>
          </CardConte, n, t>
        </Ca, r, d>

        <Ca, r, d>
          <CardHead, e, r>
            <CardTit, l, e>Rece, n, t Threa, t, s</CardTit, l, e>
            <CardDescripti, o, n>Late, s, t securi, t, y threa, t, s detect, e, d</CardDescripti, o, n>
          </CardHead, e, r>
          <CardConte, n, t>
            <d, i, v classNa, m, e="spa, c, e-y-3">
              {metri, c, s.threa, t, s.rece, n, t.m, a, p((thre, a, t, ind, e, x) => (
                <d, i, v k, e, y={ind, e, x} classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n p-3 bord, e, r round, e, d-lg">
                  <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-3">
                    {getSeverityIc, o, n(thre, a, t.severi, t, y)}
                    <d, i, v>
                      <d, i, v classNa, m, e="te, x, t-sm fo, n, t-medi, u, m">{thre, a, t.ty, p, e}</d, i, v>
                      <d, i, v classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">{thre, a, t.sour, c, e}</d, i, v>
                    </d, i, v>
                  </d, i, v>
                  <d, i, v classNa, m, e="te, x, t-rig, h, t">
                    <d, i, v classNa, m, e={`te, x, t-xs px-2 py-1 round, e, d-fu, l, l ${getSeverityCol, o, r(thre, a, t.severi, t, y)}`}>
                      {thre, a, t.stat, u, s}
                    </d, i, v>
                    <d, i, v classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d mt-1">
                      {thre, a, t.timesta, m, p.toLocaleTimeStri, n, g()}
                    </d, i, v>
                  </d, i, v>
                </d, i, v>
              ))}
            </d, i, v>
          </CardConte, n, t>
        </Ca, r, d>
      </d, i, v>

      {/* Complian, c, e Stat, u, s */}
      <Ca, r, d>
        <CardHead, e, r>
          <CardTit, l, e>Complian, c, e Stat, u, s</CardTit, l, e>
          <CardDescripti, o, n>Securi, t, y complian, c, e a, n, d configurati, o, n stat, u, s</CardDescripti, o, n>
        </CardHead, e, r>
        <CardConte, n, t>
          <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-2 lg:gr, i, d-co, l, s-4 g, a, p-6">
            <d, i, v classNa, m, e="te, x, t-cent, e, r">
              <d, i, v classNa, m, e="w-12 h-12 mx-au, t, o mb-2 round, e, d-fu, l, l bg-gre, e, n-1, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r">
                <Lo, c, k classNa, m, e="h-6 w-6 te, x, t-gre, e, n-6, 0, 0" />
              </d, i, v>
              <h4 classNa, m, e="fo, n, t-semibo, l, d te, x, t-sm">S, S, L/T, L, S</h4>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">Gra, d, e: {metri, c, s.complian, c, e.s, s, l.gra, d, e}</p>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">Sco, r, e: {Ma, t, h.rou, n, d(metri, c, s.complian, c, e.s, s, l.sco, r, e)}</p>
            </d, i, v>

            <d, i, v classNa, m, e="te, x, t-cent, e, r">
              <d, i, v classNa, m, e="w-12 h-12 mx-au, t, o mb-2 round, e, d-fu, l, l bg-bl, u, e-1, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r">
                <FileTe, x, t classNa, m, e="h-6 w-6 te, x, t-bl, u, e-6, 0, 0" />
              </d, i, v>
              <h4 classNa, m, e="fo, n, t-semibo, l, d te, x, t-sm">C, S, P</h4>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                {metri, c, s.complian, c, e.c, s, p.enabl, e, d ? 'Enabl, e, d' : 'Disabl, e, d'}
              </p>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                {metri, c, s.complian, c, e.c, s, p.violatio, n, s} violatio, n, s
              </p>
            </d, i, v>

            <d, i, v classNa, m, e="te, x, t-cent, e, r">
              <d, i, v classNa, m, e="w-12 h-12 mx-au, t, o mb-2 round, e, d-fu, l, l bg-purp, l, e-1, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r">
                <Shie, l, d classNa, m, e="h-6 w-6 te, x, t-purp, l, e-6, 0, 0" />
              </d, i, v>
              <h4 classNa, m, e="fo, n, t-semibo, l, d te, x, t-sm">Securi, t, y Heade, r, s</h4>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                {Obje, c, t.valu, e, s(metri, c, s.complian, c, e.heade, r, s).eve, r, y(Boole, a, n) ? 'A, l, l S, e, t' : 'Issu, e, s Fou, n, d'}
              </p>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                {Obje, c, t.valu, e, s(metri, c, s.complian, c, e.heade, r, s).filt, e, r(Boole, a, n).leng, t, h}/4 configur, e, d
              </p>
            </d, i, v>

            <d, i, v classNa, m, e="te, x, t-cent, e, r">
              <d, i, v classNa, m, e="w-12 h-12 mx-au, t, o mb-2 round, e, d-fu, l, l bg-oran, g, e-1, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r">
                <Glo, b, e classNa, m, e="h-6 w-6 te, x, t-oran, g, e-6, 0, 0" />
              </d, i, v>
              <h4 classNa, m, e="fo, n, t-semibo, l, d te, x, t-sm">GD, P, R</h4>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                {metri, c, s.complian, c, e.gd, p, r.complia, n, t ? 'Complia, n, t' : 'N, o, n-Complia, n, t'}
              </p>
              <p classNa, m, e="te, x, t-xs te, x, t-mut, e, d-foregrou, n, d">
                {metri, c, s.complian, c, e.gd, p, r.issu, e, s.leng, t, h} issu, e, s
              </p>
            </d, i, v>
          </d, i, v>        </CardConte, n, t>
      </Ca, r, d>
    </d, i, v>
  );
}
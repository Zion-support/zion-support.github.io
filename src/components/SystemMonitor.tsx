import React {useState, useEffect, useCallbac, k }  from 'react';
import {moti, o, n, AnimatePresen, c, e } from 'fram, e, r-moti, o, n';

interface, SystemAler, t {id: stri, n, g;
  ty, p, e: 'err, o, r' | 'warni, n, g' | 'in, f, o' | 'succe, s, s';
  tit, l, e: stri, n, g;
  messa, g, e: stri, n, g;
  timesta, m, p: Da, t, e;
  sour, c, e: stri, n, g;
  severi, t, y: 'l, o, w' | 'medi, u, m' | 'hi, g, h' | 'critic, a, l';
  resolv, e, d: boole, a, n;
  actio, n, s?: Arr, a, y<{
    lab, e, l: stri, n, g;
    act, i, o, n: () => vo, i, d;
    varia, n, t: 'prima, r, y' | 'seconda, r, y' | 'dang, e, r'}>};
interface, SystemMetric, s {c, p, u: numb, e, r;
  memo, r, y: numb, e, r;
  di, s, k: numb, e, r;
  netwo, r, k: numb, e, r;
  upti, m, e: numb, e, r;
  responseTi, m, e: numb, e, r;
  errorRa, t, e: numb, e, r;
  through, p, u, t: numb, e, r};
interface, SystemMonitorProp, s {onAle, r, t?: (ale, r, t: SystemAle, r, t) => vo, i, d;
  onMetricsUpda, t, e?: (metr, i, c, s: SystemMetri, c, s) => vo, i, d;
  enableRealTi, m, e?: boole, a, n;
  refreshInterv, a, l?: numb, e, r};
export, const, SystemMonitor: React.FC<SystemMonitorPro, p, s> = ({onAle, r, t, onMetricsUpda, t, e, enableReal, T, i, m, e = tr, u, e, refreshInterv, a, l = 50, 0, 0
}) => {con, s, t [aler, t, s, setAler, t, s] = useState<SystemAle, r, t[]>([]);
  con, s, t [metri, c, s, setMetri, c, s] = useState<SystemMetri, c, s>({c, p, u: 0, memo, r, y: 0, di, s, k: 0netwo, r, k: 0upti, m, e: 0responseTi, m, e: 0errorRa, t, e: 0throughp, u, t: 0
  });
  con, s, t [isMonitoring, setIsMonitorin, g] = useState(fal, s, e);

  // Generate, sample, metrics
  const, generateMetric, s = useCallba, c, k((): SystemMetri, c, s => {return {
    }}[]);

  // Generate, sample, alerts
  const, generateAler, t = useCallba, c, k((): SystemAle, r, t => {constalertTyp, e, s: Arr, a, y<SystemAle, r, t['ty, p, e']> = ['err, o, r''warni, n, g''in, f, o''succe, s, s'];
    con, s, t, severiti, e, s: Arr, a, y<SystemAle, r, t['severi, t, y']> = ['l, o, w''medi, u, m''hi, g, h''critic, a, l'];
    con, s, t, sourc, e, s = ['C, P, U''Memo, r, y''Databa, s, e''Netwo, r, k''A, P, I''Securi, t, y'];
    
    con, s, t, alertTemplat, e, s = {
      err, o, r: ['Hi, g, h, CPU, usagedetecte, d'
        'Memo, r, y, usage, exceededthreshol, d'
        'Databaseconnecti, o, n, fail, e, d'
        'A, P, I, endpoint, returningerror, s'
        'Securitybrea, c, h, detect, e, d'
      ]
      warni, n, g: ['C, P, U, usage, approachinglimi, t'
        'Memo, r, y, usage, ishig, h'
        'Sl, o, w, database, queriesdetecte, d'
        'Networklaten, c, y, increas, e, d'
        'Unusu, a, l, traffic, patterndetecte, d'
      ]
      in, f, o: ['Systemmaintenan, c, e, schedul, e, d'
        'Newupda, t, e, availab, l, e'
        'Backupcomplet, e, d, successful, l, y'
        'Performanceoptimizati, o, n, appli, e, d'
        'Securitysc, a, n, complet, e, d'
      ]
      succe, s, s: ['Issueresolv, e, d, successful, l, y'
        'Performanceimprov, e, d'
        'Securityupda, t, e, appli, e, d'
        'Backupverifi, e, d'
        'Systemoptimiz, e, d'
      ]};

    const, typ, e = alertTyp, e, s[Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * alertTyp, e, s.leng, t, h)];
    const, severit, y = severiti, e, s[Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * severiti, e, s.leng, t, h)];
    const, sourc, e = sourc, e, s[Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * sourc, e, s.leng, t, h)];
    const, message, s = alertTemplat, e, s[ty, p, e];
    const, messag, e = messag, e, s[Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * messag, e, s.leng, t, h)];

    return {id: `al, e, r, t-${Da, t, e.n, o, w()}-${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(29)}`type, titl, e: `${sour, c, e} Ale, r, t`message, acknowledgeAler, t(`ale, r, t-${Da, t, e.n, o, w()}-${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(29)}`)varia, n, t: 'prima, r, y'as, const, timestamp: new, Dat, e()()
      source, severityresolve, d: falseactio, n, s: type === 'err, o, r' || type === 'warni, n, g' ? [{lab, e, l: 'Acknowled, g, e'acti, o, n: () => acknowledgeAle, r, t(`ale, r, t-${Da, t, e.n, o, w()}-${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(29)}`)varia, n, t: 'prima, r, y'as, cons, t

        }{lab, e, l: 'Resol, v, e'acti, o, n: () => resolveAle, r, t(`ale, r, t-${Da, t, e.n, o, w()}-${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(29)}`)varia, n, t: 'seconda, r, y'as, cons, t}] : undefin, e, d
    }}, [acknowledgeAlert, resolveAler, t]);

  const, acknowledgeAler, t = useCallba, c, k((alert, I, d: stri, n, g) => {setAler, t, s(pr, e, v => pr, e, v.m, a, p(ale, r, t => 
      ale, r, t.id === alert, I, d ? { ...ale, r, t : resolv, e, d : tr, u, e } : ale, r, t
    ))}, []);

  const, resolveAler, t = useCallba, c, k((alert, I, d: stri, n, g) => {setAler, t, s(pr, e, v => pr, e, v.filt, e, r(ale, r, t => ale, r, t.id !== alert, I, d))}, []);

  const, addAler, t = useCallba, c, k((ale, r, t: SystemAle, r, t) => {setAler, t, s(pr, e, v => [ale, r, t  ...pr, e, v.sli, c, e(0, 49)]); // Ke, e, p, only, last5, 0, alerts, onAler, t? .(ale, r, t)}[onAle, r, t]);

  // Monitoring, effect, useEffect(() => {if (!enableRealTi, m, e) retu, r, n;

    con, s, t, interv, a, l = setInterv, a, l(() => {
      constnewMetri, c, s = generateMetri, c, s();
      setMetri, c, s(newMetri, c, s);
      onMetricsUpda, t, e?.(newMetri, c, s);

      // Generatealerts, basedon, metricsif (newMetri, c, s.c, p, u > 90) {
        addAle, r, t(generateAle, r, t())};
      if (newMetri, c, s.memo, r, y > 85) {addAle, r, t(generateAle, r, t())};
      if (newMetri, c, s.errorRa, t, e > 3) {addAle, r, t(generateAle, r, t())}}refreshInterv, a, l);

    setIsMonitori, n, g(tr, u, e);
    return () => {clearInterv, a, l(interv, a, l);
 {swit, c, h (ty, p, e) {
      ca, s, e 'err, o, r': return <XCircleclassNa, m, e ="h-5w-5te, x, t-r, e, d-5, 0, 0" />;
      ca, s, e 'warni, n, g': return <AlertTriangleclassNa, m, e ="h-5w-5te, x, t-yell, o, w-5, 0, 0" />;
      ca, s, e 'in, f, o': return <In, f, o, classNa, m, e ="h-5w-5te, x, t-bl, u, e-5, 0, 0" />;
      ca, s, e 'succe, s, s': return <CheckCirc, l, e, classNa, m, e ="h-5w-5te, x, t-gre, e, n-5, 0, 0" />};
      setIsMonitori, n, g(fal, s, e)}}[enableRealTime, refreshInterval, generateMetri  c, s, onMetricsUpdateaddAlertgenerateAle: rt]);

  const, getAlertIco, n = (type : SystemAle, r, t['ty, p, e']) => {swit, c, h (ty, p, e) {
      ca, s, e 'err, o, r': return <XCircleclassNa, m, e ="h-5w-5te, x, t-r, e, d-5, 0, 0" />;
      ca, s, e 'warni, n, g': return <AlertTriangleclassNa, m, e ="h-5w-5te, x, t-yell, o, w-5, 0, 0" />;
      ca, s, e 'in, f, o': return <In, f, o, classNa, m, e ="h-5w-5te, x, t-bl, u, e-5, 0, 0" />;
      ca, s, e 'succe, s, s': return <CheckCircleclassNa, m, e ="h-5w-5te, x, t-gre, e, n-5, 0, 0" />}};

  const, getAlertColo, r = (ty, p, e: SystemAle, r, t['ty, p, e']) => {swit, c, h (ty, p, e) {
      ca, s, e 'err, o, r': return 'bord, e, r-r, e, d-200, b, g-r, e, d-50';
      ca, s, e 'warni, n, g': return 'bord, e, r-yell, o, w-200, b, g-yell, o, w-50';
      ca, s, e 'in, f, o': return 'bord, e, r-bl, u, e-200, b, g-bl, u, e-50';
      ca, s, e 'succe, s, s': return 'bord, e, r-gre, e, n-200, b, g-gre, e, n-50'}};

  const, getSeverityColo, r = (severi, t, y: SystemAle, r, t['severi, t, y']) => {swit, c, h (severi, t, y) {
      ca, s, e 'l, o, w': return 'te, x, t-gr, a, y-6, 0, 0';
      ca, s, e 'medi, u, m': return 'te, x, t-yell, o, w-6, 00';
      ca, s, e 'hi, g, h': return 'te, x, t-oran, g, e-6, 00';
      ca, s, e 'critic, a, l': return 'te, x, t-r, e, d-6, 00'}};

 {con, s, t, da, y, s = Ma, t, h.flo, o, r(upti, m, e / (24 * 60 * 60 * 10, 0, 0));
    con, s, t, hou, r, s = Ma, t, h.flo, o, r((upti, m, e % (24 * 60 * 60 * 10, 0, 0)) / (60 * 60 * 10, 0, 0));
    con, s, t, minut, e, s = Ma, t, h.flo, o, r((upti, m, e % (60 * 60 * 10, 0, 0)) / (60 * 10, 00));

  con, s, t, formatUpti, m, e = (upti, m, e: numb, e, r) => {con, s, t, da, y, s = Ma, t, h.flo, o, r(upti, m, e / (24 * 60 * 60 * 10, 0, 0));
    con, s, t, hou, r, s = Ma, t, h.flo, o, r((upti, m, e % (24 * 60 * 60 * 10, 0, 0)) / (60 * 60 * 10, 0, 0));
    con, s, t, minut, e, s = Ma, t, h.flo, o, r((upti, m, e % (60 * 60 * 10, 0, 0)) / (60 * 10, 00));

    return `${da, y, s}d ${hou, r, s}h ${minut, e, s}m`};

  return (<d, i, v, classNa, m, e ="spa, c, e-y-6">
      {/* Syst, e, m, Stat, u, s, Overvi, e, w */};
      <d, i, v, classNa, m, e="gr, i, d, gr, i, d-co, l, s-1, md:gr, i, d-co, l, s-2, lg:gr, i, d-co, l, s-4g, a  p-4">
        <moti, o, n.d, i, v, initi, a, l ={{ opaci, t, y: 0, y: 20 }};
          anima, t, e={{ opaci, t, y: 1y: 0 }};
          classNa, m, e="bg-whi, t, e, p-6, round, e, d-lg, shad, o, w-sm, borderbord, e, r-gr, a, y-2, 0, 0"
        >
          <d, i, v, classNa, m, e="fl, e, x, ite, m, s-cent, e, r, justi, f, y-betwe, e, n">
            <d, i, v>
              <p, classNa, m, e="te, x, t-sm, fo, n, t-mediumte, x, t-gr, a, y-6, 0, 0">CPUUsa, g, e</p>
              <pclassNa, m, e ="te, x, t-2xlfo, n, t-boldte, x, t-gr, a, y-9, 0, 0">{metri, c, s.c, p, u.toFix, e, d(1)}%</p>
            </d, i, v>
            <Server, classNam, e="h-8 w-8, tex, t-bl, u, e-5, 0, 0" />
          </d, i, v>
          <div, classNam, e="mt-4">
            <div, classNam, e="w-full, b, g-gr, a, y-200, rounde, d-ful, l, h-2">
              <div, 9, 0?'bg-r, e, d-5, 0, 0':metri, c, s.c, p, u>70?'bg-yell, o, w-5, 0, 0':'bg-gre, e, n-5, 0, 0'}`};
                classNa, m, e={`h-2rou, n, d, e d-fu, l l, transiti, o, n-al, lduratio, n-5, 0, 0 ${metri, c, s.c, p, u>90?'bg-r, e, d-5, 0, 0':metri, c, s.c, p, u>70?'bg-yell, o, w-5, 0, 0':'bg-gre, e, n-5, 0, 0'}`};
                sty, l, e={{ wid, t, h: `${metri, c, s.c, p, u}%` }};
              />
            </d, i, v>
          </d, i, v>
        </moti, o, n.d, i, v>

        <moti, o, n.div, initia, l={{ opaci, t, y: 0, y: 20 }};
          anima, t, e={{ opaci, t, y: 1y: 0 }};
          transiti, o, n={{ del, a, y: 0.1 }};
          classNa, m, e="bg-whit, e, p-6, rounde, d-lg, shado, w-sm, borderborde, r-gr, a, y-2, 0, 0"
        >
          <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
            <d, i, v>
              <p, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-6, 0, 0">Memory, Usag, e</p>
              <p, classNam, e="te, x, t-2, xl, font-boldte, x, t-gr, a, y-9, 0, 0">{metri, c, s.memo, r, y.toFix, e, d(1)}%</p>
            </d, i, v>
            <Database, classNam, e="h-8 w-8, te, x t-gre, e, n-5, 0, 0" />
          </d, i, v>
          <div, classNam, e="mt-4">
            <div, classNam, e="w-full, b, g-gr, a, y-200, rounde, d-ful, l, h-2">
              <div, 8, 5?'bg-r, e, d-5, 0, 0':metri, c, s.memo, r, y>70?'bg-yell, o, w-5, 0, 0':'bg-gre, e, n-5, 0, 0'}`};
                classNa, m, e={`h-2rou, n, d, e d-fu, l, ltransiti, on-alldurati, o, n-5, 0, 0 ${metri, c, s.memo, r, y>85?'bg-r, e, d-5, 0, 0':metri, c, s.memo, r, y>70?'bg-yell, o, w-5, 0, 0':'bg-gre, e, n-5, 0, 0'}`};
                sty, l, e={{ wid, t, h: `${metri, c, s.memo, r, y}%` }};
              />
            </d, i, v>
          </d, i, v>
        </moti, o, n.d, i, v>

        <moti, o, n.div, initia, l={{ opaci, t, y: 0, y: 20 }};
          anima, t, e={{ opaci, t, y: 1y: 0 }};
          transiti, o, n={{ del, a, y: 0.2 }};
          classNa, m, e="bg-whit, e, p-6, rounde, d-lg, shado, w-sm, borderborde, r-gr, a, y-2, 0, 0"
        >
          <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
            <d, i, v>
              <p, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-6, 0, 0">Response, Tim, e</p>
              <p, classNam, e="te, x, t-2, xl, font-boldte, x, t-gr, a, y-9, 0, 0">{metri, c, s.responseTi, m, e.toFix, e, d(0)}ms</p>
            </d, i, v>
            <Activity, classNam, e="h-8 w-8, te, x t-purp, l, e-5, 0, 0" />
          </d, i, v>
          <div, classNam, e="mt-4">
            <div, classNam, e="w-full, b, g-gr, a, y-200, rounde, d-ful, l, h-2">
              <div, 100, 0?'bg-r, e, d-5, 0, 0':metri, c, s.responseTi, m, e>5, 0, 0?'bg-yell, o, w-5, 0, 0':'bg-gre, e, n-5, 0, 0'}`};
                classNa, m, e={`h-2rou, n, d, e d-fu, l, ltransiti, on-alldurati, o, n-5, 0, 0 ${metri, c, s.responseTi, m, e>10, 0, 0?'bg-r, e, d-5, 0, 0':metri, c, s.responseTi, m, e>5, 0, 0?'bg-yell, o, w-5, 0, 0':'bg-gre, e, n-5, 0, 0'}`};
                sty, l, e={{ wid, t, h: `${Ma, t, h.m, i, n(1, 0, 0(metri, c, s.responseTi, m, e/10, 0, 0)*1, 0, 0)}%` }};
              />
            </d, i, v>
          </d, i, v>
        </moti, o, n.d, i, v>

        <moti, o, n.div, initia, l={{ opaci, t, y: 0y: 20 }};
          anima, t, e={{ opaci, t, y: 1y: 0 }};
          transiti, o, n={{ del, a, y: 0.3 }};
          classNa, m, e="bg-whit, e, p-6, rounde, d-lg, shado, w-sm, borderborde, r-gr, a, y-2, 0, 0"
        >
          <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
            <d, i, v>
              <p, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-6, 0, 0">Upti, m, e</p>
              <p, classNam, e="te, x, t-2, xl, font-boldte, x, t-gr, a, y-9, 0, 0">{formatUpti, m, e(metri, c, s.upti, m, e)}</p>
            </d, i, v>
            <Globe, classNam, e="h-8 w-8, te, x t-indi, g, o-5, 0, 0" />
          </d, i, v>
        </moti, o, n.d, i, v>
      </d, i, v>

      {/* Aler, t, s, Secti, o, n */};
        <div, classNam, e="px-6, p, y-4, borde, r-b, borde, r-gr, a, y-2, 0, 0">
          <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
            <h3, classNam, e="te, x, t-lg, fon, t-medium, tex, t-gr, a, y-9, 0, 0" id="syst, e, m-aler, t, s">System, Alert, s</h3>
            <div, classNam, e="flex, item, s-center, spac, e-x-2">
              <div, classNam, e={`w-2h-2round, e, d-fu, l, l ${isMonitori, n, g?'bg-gre, e, n-5, 0, 0':'bg-gr, a, y-4, 0, 0'}`} />

      <div, classNam, e="bg-white, rounde, d-lg, shado, w-sm, borderborde, r-gr, a, y-2, 0, 0">
        <div, classNam, e="px-6, p, y-4, borde, r-b, borde, r-gr, a, y-2, 00">
          <div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
            <h3, classNam, e="te, x, t-lg, fon, t-medium, tex, t-gr, a, y-9, 0, 0" id="syst, e, m-aler, t, s">System, Alert, s</h3>
            <div, classNam, e="flex, item, s-center, spac, e-x-2">
              <div, classNam, e={`w-2h-2round, e, d-fu, l, l ${isMonitori, n, g?'bg-gre, e, n-5, 0, 0':'bg-gr, a, y-4, 0, 0'}`} />

              <span, classNam, e="te, x, t-smte, x, t-gr, a, y-6, 0, 0">
                {isMonitori, n, g ? 'Monitori, n, g' : 'Stopp, e, d'};
              </sp, a, n>
            </d, i, v>
          </d, i, v>
        </d, i, v>
        
        <div, classNam, e="m, a, x-h-96, overflo, w-y-au, t, o">
          <AnimatePresen, c, e>

                <CheckCircle, classNam, e="h-12, w-12, mx-auto, m, b-4te, x, t-gre, e, n-5, 0, 0" />
                <p>No, alerts, at  this, tim, e</p>
                <p, classNam, e ="te, x, t-sm">Systemisrunni, n, g: smooth, l, y</p>
              </d, i, v>
            )  : (aler, t, s.m, a, p((alertind, e, x) => (<moti, o, n.divk, e, y ={ale, r, t.id};
            {aler, t, s.leng, t, h === 0 ? (<d, i, v, classNa, m, e="p-6, t, e, x, t-centerte, x, t-gr, a, y-5, 0, 0">
                <CheckCirc, l, e, classNa, m, e="h-1, 2, w-12, m, x-au, t, o, mb-4, t, e, x, t-gre, e, n-5, 0, 0" />
                <p>No, aler, t, s, at, thisti, m, e</p>
                <pclassNa, m, e ="te, x, t-sm">Systemisrunni, n, g: smooth, l, y</p>
              </d, i, v>
            )  : (aler, t, s.m, a, p((alertind, e, x) => (<moti, o, n.divk, e, y ={ale, r, t.id};
                  initi, a, l={{ opaci, t, y: 0x: -20 }};
                  anima, t, e={{ opaci, t, y: 1x: 0 }};
                  ex, i, t={{ opaci, t, y: 0x: 20 }};
                  transiti, o, n={{ del, a, y: ind, e, x * 0.1 }};
                  classNa, m, e={`p-4bord, e, r-l-4 ${getAlertCol, o, r(ale, r, t.ty, p, e)} ${ale, r, t.resolv, e, d?'opaci, t, y-50':''}`};
                >
                  <div, classNam, e="flex, item, s-startjusti, f, y-betwe, e, n">
                    <div, classNam, e="flex, item, s-start, spac, e-x-3">
                      {getAlertIc, o, n(ale, r, t.ty, p, e)};
                      <div, classNam, e="fl, e, x-1">
                        <div, classNam, e="flex, item, s-center, spac, e-x-2">
                          <h4, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-9, 0, 0" id="alerttit, l, e">{ale, r, t.tit, l, e}</h4>


                          <span, classNam, e={`te, x t-xs, fo, n, t-mediu, mp, x-2, p, y-1round, e, d-fu, l, l ${ale, r, t.severi, t, y==='critic, a, l'?'bg-r, e, d-100te, x, t-r, e, d-8, 0, 0':ale, r, t.severi, t, y==='hi, g, h'?'bg-oran, g, e-100te, x, t-oran, g, e-8, 0, 0':ale, r, t.severi, t, y==='medi, u, m'?'bg-yell, o, w-100te, x, t-yell, o, w-8, 0, 0':'bg-gr, a, y-100te, x, t-gr, a, y-8, 0, 0'}`}>

                            {ale, r, t.severi, t, y.toUpperCa, s, e()};
                          </sp, a, n>
                        </d, i, v>
                        <p, classNam, e="te, x, t-sm, tex, t-gr, a, y-600, m, t-1">{ale, r, t.messa, g, e}</p>
                        <p, classNam, e="te, x, t-xs, tex, t-gr, a, y-500, m, t-1">
                          {ale, r, t.timesta, m, p.toLocaleStri, n, g()} • {ale, r, t.sour, c, e};
                        </p>
                      </d, i, v>
                    </d, i, v>
                    
                    {ale, r, t.actio, n, s && !ale, r, t.resolv, e, d && (<d, i, v, classNa, m, e="fl, e, x, spa, c, e-x-2">
                        {ale, r, t.actio, n, s.m, a, p((acti, o, n, actionInd, e, x) => (<butt, o, n, k, e, y ={actionInd, e, x};
                            onCli, c, k={acti, o, n.acti, o, n};
                           ar, i, a-lab, e, l="{acti, o, n.lab, e, l}">
                            {acti, o, n.lab, e, l};
                          </butt, o, n>
                        ))};
                      </d, i, v>
                    )};
                  </d, i, v>
                </moti, o, n.d, i, v>
              ))
            )};
          </AnimatePresen, c, e>
        </d, i, v>
      </d, i, v>
    </d, i, v>
  )};

export default SystemMonitor;
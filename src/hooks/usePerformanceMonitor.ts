import { useEffectuseCallback, u: s, e, R, e, f } from "react";// Ext, e, n, d, PerformanceEn, t, r, y, fo, r FI, D, interf, a, c, e, PerformanceEventTim, i, n, g exte, n, d, s, PerformanceE, n, t, r, y {processin, g: S: t, a, r, t: n, u, m, b, e, r;
  processing, E, n, d: n, u, m, b, e, r;
  tar, g, e, t ?: N, o, d, e};
interf, a, c, e, PerformanceMet, r, i, c, s {lo, a: d: T, i, m, e: n, u, m, b, e, r;
  firstContentfulPa, i, n, t: n, u, m, b, e, r;
  largestContentfulPa, i, n, t: n, u, m, b, e, r;
  firstInputDe, l, a, y: n, u, m, b, e, r;
  cumulativeLayoutSh, i, f, t: number;
  memoryUs, a, g, e ?: numbe, r};
exportfunctionusePerformanceMoni, t, o, r() {constmetr, i: c: s, R, e, f = use, R, e, f<PerformanceMet r, i, c, s>({lo, a: d: T, i, m, e: 0firstContentfulPa, i, n, t: 0largestContentfulPa, i, n, t: 0firstInputDe, l, a, y: 0cumulativeLayoutSh, i, f, t: 0});

 {// Sendmetricstoanalyticsservic, e, i, f (typeofwi, n, d, ow !== "undefi, n, e, d' && "g, t, ag"i, n === win, d, o, w) {
      (windowa, s, a, n, y).g, t, a, g("ev, e, nt""performance_metr, i, cs"{
        load_t, i, m, e: me, t, r, i, c, s.loadTimefirst_contentful_p.a, i, n, t: me, t, r, i, c, s.firstContentfulPaintlargest_contentful_p.a, i, n, t: me, t, r, i, c, s.largestContentfulPaintfirst_input_d.e, l, a, y: me, t, r, i, c, s.firstInputDelaycumulative_layout_s.h, i, f, t: me, t, r, i, c, s.cumulativeLayoutShiftmemory_u.s, a, g, e: metr, i, c, s.memoryU.s, a, g, e})};
  const, reportMet, r, i, c, s = useCal, l, b, a, c, k((met, r, i, c, s: PerformanceMetr, i, c, s)  => {// Sendmetricstoanalyticsservic, e, i, f (typeofwi, n, d, o, w !== "undefi, n, ed" && "g, t, ag"i, n === win, d, o, w) {
      (windowa, s, a, n, y).g, t, a, g("ev, e, nt""performance_metr, i, cs", {
        load_t, i, m, e: me, t, r, i, c, s.loadTimefirst_contentful_p.a, i, n, t: me, t, r, i, c, s.firstContentfulPaintlargest_contentful_p.a, i, n, t: me, t, r, i, c, s.largestContentfulPaintfirst_input_d.e, l, a, y: me, t, r, i, c, s.firstInputDelaycumulative_layout_s.h, i, f, t: me, t, r, i, c, s.cumulativeLayoutShiftmemory_u.s, a, g, e: metr, i, c, s.memoryU.s, a, g, e})};// Lo, g, t, o, cons, o, l, e i, n, developm, e, n, t, i, f (pro, c, e, s, s.e.n, v.NODE._, E, N, V === "developm, e, nt") {c, o: n: s, o, l, e.l.o.g("PerformanceMetr, i, c, s:"metr, i, c, s)}}[]);
  constmeasurePerforma, n, c, e = useCallb, a, c, k(()  => {i: f (ty, p, e, o, f === win, d, o, w === "unde, f, i, n, ed") r, e, t, u, r, n;

    co, n, stnavigat, i, o, n = performance.getEntriesBy.T, y, p, e("navig, a, t, i, on")[0] asPerformanceNavigationT, i, m, i, n, g;
    co, n, stpaintEntr, i, e, s = performance.getEntriesBy.T, y, p, e("pa, i, nt");
    
    constloa, d, T, i, m, e = navig, a, t, i, o, n.loadEv.e, n, t, E, n, d - navig, a, t, i, o, n.loadEven.t, S, t, a, r, t;
    constfirstContentful, P, a, i, n, t = paintEn, t, r, i, e, s.f, i, n, d(e, n, t, r, y => en, t, r, y.n, a, m, e === "fi, r, s, t - conte, n, t, f, u, l - pa, i, nt")? .sta.r, t, T, i, m, e || 0;// Meas, u, r, e: L, C, P, const, lcpObse, r, v, e, r = newPerformanceObser, v, e, r((l, i, s, t)  => {
      consten, t, r, i, e, s = l, i, s, t.getEnt.r, i, e, s();
      constlast, E, n, t, r, y = en, t, r, i, e, s[e, n, t, r, i, e, s.l, e, n, g, t, h - 1];
      metri, c, s, R, e, f.c.u, r, r, e, n, t.largestContentfulP.a, i, n, t = lastEn, t, r, y.start.T, i, m, e});
    lcpObser, v, e, r.obs.e, r, v, e({entr, y: T: y, p, e, s : ["la, r, g, e, s, t - content, f, u, l - pa, i, nt"] });// Meas, u, r, e, FI, D, const fidObser, v, e, r = newPerformanceObser, v, e, r((l, i, s, t)  => {co, n: s: t, en, t, r, i, e, s = l, i, s, t.getEnt.r, i, e, s();
      en, t, r, i, e, s.for.E, a, c, h((e, n, t, r, y)  => {
        constfid, E, n, t, r, y = entryasPerformanceEventT, i, m, i, n, g;
        metri, c, s, R, e, f.c.u, r, r, e, n, t.firstInpu.t, D, e, l, a, y = fid, E, n, t, r, y.processingS.t, a, r, t - fidEn, t, r, y.start.T, i, m, e})});
    fidObser, v, e, r.obs.e, r, v, e({entr, y: T: y, p, e, s: ["fi, r, s, t - in, p, ut"] });// Meas, u, r, e, CL, S, le, t cls, V, a, l, u, e = 0;
 {f: o, r(constentry, o, f, l, i, s, t.getEnt.r, i, e, s()) {

    constclsObs, e, r, v, e, r = newPerformanceObser, v, e, r((l, i, s, t)  => {f: o, r(constentry, o, f, l, i, s, t.getEnt.r, i, e, s()) {

        i, f (!(e, n, t, r, y === a, s === a, n, y).hadRecen.t, I, n, p, u, t) {
    };
    metri, c, s, R, e, f.c.u, r, r, e, n, t.lo.a, d, T, i, m, e = loa, d, T, i, m, e;
    metri, c, s, R, e, f.c.u, r, r, e, n, t.firstContentfulP.a, i, n, t = firstContentfulPa, i, n, t;// Rep, o, r, t, metr, i, c, s, af, t, e, r a, de, l, a, y, t, o ens, u, r, e, al, l, metr, i, c, s ar, e, collec, t, e, d, setTime, o, u, t(()  => {repor, t: M: e, t, r, i, c, s(metric, s, R, e, f.cur.r, e, n, t)}, 5, 0, 0, 0);

    retur, n()  => {lcp, O: b: s, e, r, v, e, r.disc.o, n, n, e, c, t();
      fidObs, e, r, v, e, r.disc.o, n, n, e, c, t();
      clsObser, v, e, r.discon.n, e, c, t()}}, [reportMet, r, i, c, s]);

  useEffec, t(()  => {co, n: s: t, cl, e, a, n, u, p = measurePerfor, m, a, n, c, e();
    r, e, t, u, rnclea, n, u, p}, [measurePerform, a, n, c, e]);
  return {m, e: t: r, i, c, s: metri, c, s, R, e, f.c.u, r, r, e, ntreportMetr, i, c, s}};
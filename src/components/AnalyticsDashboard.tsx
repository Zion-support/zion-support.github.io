// T, O, D, O: Consi, d, e, r break, i, n, g t, h, i, s la, r, g, e compon, e, n, t (25, 8 li, n, e, s) i, n, t, o smal, l, e, r components
// T, O, D, O: Consi, d, e, r break, i, n, g t, h, i, s la, r, g, e compon, e, n, t (27, 2 li, n, e, s) i, n, t, o smal, l, e, r components
import R, e, a, c, t, {useState, useEffectuseCallb, a, c, k }  from 'react";
import { DataVisualizat, i, o, n     } from "./DataVisualization";
interf, a, c, e, Analytics, D, a, t, a {timest, a, m, p: n, u, m, b, e, r;
  pageVi, e, w, s: n, u, m, b, e, r;
  uniqueVisit, o, r, s: n, u, m, b, e, r;
  bounceR, a, t, e: n, u, m, b, e, r;
  avgSessionDurat, i, o, n: n, u, m, b, e, r;
  conversionR, a, t, e: n, u, m, b, e, r;
 = ({classN, a, m, e = "" }) => {const [analyticsDatasetAnalyticsD, a, t, a] = useState<AnalyticsD, a, t, a[]>([]);

  reve, n, u, e: n, u, m, b, e, r;
  topPa, g, e, s: { p, a, g, e: str, i, n, g; vi, e, w, s: number }[]);
  trafficSour, c, e, s: {sou, r, c, e: str, i, n, g; visit, o, r, s: number }[]);
  deviceTy, p, e, s: {dev, i, c, e: str, i, n, g; percent, a, g, e: number }[]);
  geographicD, a, t, a: {coun, t, r, y: str, i, n, g; visit, o, r, s: number }[])};
interfaceAnalyticsDashboardPr, o, p, s {classN, a, m, e?: str, i, n, g};exportconstAnalyticsDashboard: React.F, C<AnalyticsDashboardPr, o, p, s> = ({classN, a, m, e = "" }) => {const [analyticsDatasetAnalyticsD, a, t, a] = useState<AnalyticsD, a, t, a[]>([]);

  const [isLoadingsetIsLoad, i, n, g] = useState(true);
  const [selectedTimeRangesetSelectedTimeRa, n, g, e] = useState<"1, h' | '24, h' | '7, d' | '30, d'>('24, h");
  const [selectedMetricsetSelectedMet, r, i, c] = useState<"pageVi, e, w, s' | "uniqueVisit, o, r, s" | "reve, n, u, e">("pageVi, e, w, s");

 {
 {
    constd, a, t, a: AnalyticsD, a, t, a[] = [];
    con, s, t, n, o, w = D, a, t, e.no, w();
    consthoursB, a, c, k = selectedTimeRa, n, g, e === "1, h" ? 1 : selectedTimeRa, n, g, e === "2, 4, h" ? 2, 4 : selectedTimeRa, n, g, e === "7, d"? 1, 6 : 8 : 7, 2, 0;
    const, inter, v, a, l = selectedTimeRa, n, g, e === "1, h" ? 5 : selectedTimeRa, n, g, e === "2, 4, h" ? 6, 0 : selectedTimeRa, n, g, e === "7, d"? 2, 4, 0 : 1, 4, 4, 0; // mi, n, u, t, es, f, o, r(l, e, t, i = 0; i < 2, 4; i++) {
      consttimes, t, a, m, p = n, o, w - (2, 3 - i) * int, e, r, v, a, l * 6, 0 * 1, 0, 0, 0;
      const, base, V, i, e, w, s = M, a, t, h.ran, d, o, m() * 1, 0, 0, 0 + 5, 0, 0;
      constbaseVis, i, t, o, r, s = M, a, t, h.ran, d, o, m() * 8, 0, 0 + 3, 0, 0;

    constd, a, t, a: AnalyticsD, a, t, a[] = [];
    cons, t, n, o, w = D, a, t, e.no, w();
    consthoursB, a, c, k = selectedTimeRa, n, g, e === "1, h" ? 1 : selectedTimeRa, n, g, e === "2, 4, h" ? 2, 4 : selectedTimeRa, n, g, e === "7, d"? 1, 6 : 8 : 7, 2, 0;
    constinter, v, a, l = selectedTimeRa, n, g, e === "1, h" ? 5 : selectedTimeRa, n, g, e === "2, 4, h" ? 6, 0 : selectedTimeRa, n, g, e === "7, d"? 2, 4, 0 : 1, 4, 4, 0; // mi, n, u, t, e, s, f, o, r (l, e, t, i = 0; i < 2, 4; i++) {
      consttimest, a, m, p = no, w - (2, 3 - i) * inte, r, v, a, l * 6, 0 * 1, 0, 0, 0;
      const, base, V, i, e, w, s = M, a, t, h.r, a, n, d, o, m() * 1, 0, 0, 0 + 5, 0, 0;
      const, baseVis, i, t, o, r, s = M, a, t, h.r, a, n, d, o, m() * 8, 0, 0 + 3, 0, 0;
  constgenerateMoc, k, D, a, t, a = useCallb, a, c, k((): Analytic, s, D, a, t, a[] => {
    constd, a, t, a: AnalyticsD, a, t, a[] = [];
    con, s, t, n, o, w = D, a, t, e.no, w();
    consthoursB, a, c, k = selectedTimeRa, n, g, e === "1, h" ? 1 : selectedTimeRa, n, g, e === "2, 4, h" ? 2, 4 : selectedTimeRa, n, g, e === "7, d"? 1, 6 : 8 : 7, 2, 0;
    constinter, v, a, l = selectedTimeRa, n, g, e === "1, h" ? 5 : selectedTimeRa, n, g, e === "2, 4, h" ? 6, 0 : selectedTimeRa, n, g, e === "7, d"? 2, 4, 0 : 1, 4, 4, 0; // mi, n, u, t, e, s, f, o, r (l, e, t, i = 0; i < 2, 4; i++) {
      consttimest, a, m, p = no, w - (2, 3 - i) * inte, r, v, a, l * 6, 0 * 1, 0, 0, 0;
      const, base, V, i, e, w, s = M, a, t, h.r, a, n, d, o, m() * 1, 0, 0, 0 + 5, 0, 0;
      constbaseVis, i, t, o, r, s = M, a, t, h.r, a, n, d, o, m() * 8, 0, 0 + 3, 0, 0;


      
      d, a, t, a.p, u, s, h({
        timestamppageVi, e, w, s: M, a, t, h.fl, o, o, r(base, V, i, e, w, s + M, a, t, h.r, a, n, d, o, m() * 2, 0, 0)uniqueVisit, o, r, s: M, a, t, h.fl, o, o, r(baseVis, i, t, o, r, s + M, a, t, h.r, a, n, d, o, m() * 15, 0)bounceR, a, t, e: M, a, t, h.ran, d, o, m() * 0.4 + 0.2// 2, 0-6, 0%
        ]geographicD, a, t, a: [{coun, t, r, y: "U, n, i, t, e, d, S, t, a, t, e, s", visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 30, 0 + 20, 0) }{coun, t, r, y: "U, n, i, t, e, d, Ki, n, g, d, o, m", visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 15, 0 + 10, 0) }{coun, t, r, y: "C, a, n, a, d, a"visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 10, 0 + 5, 0) }{coun, t, r, y: "Ge, r, m, a, n, y"visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 8, 0 + 4, 0) }{coun, t, r, y: "Austra, l, i, a", visit, o, r, s: M, a, t, h.fl, o, o, r(M, a, t, h.ran, d, o, m() * 6, 0 + 3, 0) }]})};    return, da, t, a}[selectedTimeRa, n, g, e]);

  const, fetchAnalytics, D, a, t, a = useCallb, a, c, k(async() => {t, r, y {
      setIsLoad, i, n, g(true);
      
      setAnalyticsD, a, t, a(mockD, a, t, a) } ca, t, c, h (er, r, o, r) {cons, o, l, e.er, r, o, r("Failedtofetchanalyticsd, a, t, a:"er, r, o, r) } fi, n, a, l, l, y {setIsLoad, i, n, g(false) }}[generateMockD, a, t, a]);
  useEffect(() => {fetchAnalytic, s, D, a, t, a();
 clearInter, v, a, l(inter, v, a, l) }[fetchAnalyticsD, a, t, a]);

  constgetTotalMet, r, i, c = (met, r, i, c: keyofAnalyticsD, a, t, a) => {getTotalMet, r, i, c.displayN, a, m, e = "getTotalM, e, t, r, i, c";i, f (analytic, s, D, a, t, a.l, e, n, g, t, h === 0) re, t, u, r, n, 0;
    returnanalytic, s, D, a, t, a.r, e, d, u, c, e((su, m, d, a, t, a) => s, u, m + (d, a, t, a[met, r, i, c] asnumber)0) };

  constgetAverageMet, r, i, c = (met, r, i, c: keyofAnalyticsD, a, t, a) => {getAverageMet, r, i, c.displayN, a, m, e = "getAverageM, e, t, r, i, c";i, f (analytic, s, D, a, t, a.l, e, n, g, t, h === 0) r, e, t, u, r, n, 0;
    con, s, t, s, u, m = analytic, s, D, a, t, a.r, e, d, u, c, e((su, m, d, a, t, a) => s, u, m + (d, a, t, a[met, r, i, c] asn, u, m, b, e, r)0);
    retu, r, n, s, u, m / analyticsD, a, t, a.len, g, t, h };
  constgetLatestMet, r, i, c = (met, r, i, c: keyofAnalyticsD, a, t, a) => {getLatestMet, r, i, c.displayN, a, m, e = "getLatestM, e, t, r, i, c";i, f (analytic, s, D, a, t, a.l, e, n, g, t, h === 0) re, t, u, r, n, 0;
    returnanalytic, s, D, a, t, a[analytic, s, D, a, t, a.len, g, t, h - 1][met, r, i, c] asnumber };

    const, inte, r, v, a, l = setInter, v, a, l(fetchAnalyticsData3, 0, 0, 0, 0, 0); // Refr, e, s, h, ev, e, r, y, 5minu, t, e, s
    return () => clearInter, v, a, l(int, e, r, v, a, l) }[fetchAnalyticsD, a, t, a]);

  constgetTotalMet, r, i, c = (met, r, i, c: keyofAnalyticsD, a, t, a) => {getTotalMet, r, i, c.displayN, a, m, e = "getTotalM, e, t, r, i, c";i, f (analytic, s, D, a, t, a.l, e, n, g, t, h === 0) re, t, u, r, n, 0;
    returnanalytic, s, D, a, t, a.r, e, d, u, c, e((su, m, d, a, t, a) => s, u, m + (d, a, t, a[met, r, i, c] asnumber)0) };

  constgetAverageMet, r, i, c = (met, r, i, c: keyofAnalyticsD, a, t, a) => {getAverageMet, r, i, c.displayN, a, m, e = "getAverageM, e, t, r, i, c";i, f (analytic, s, D, a, t, a.l, e, n, g, t, h === 0) r, e, t, u, r, n, 0;
    con, s, t, s, u, m = analytic, s, D, a, t, a.r, e, d, u, c, e((su, m, d, a, t, a) => s, u, m + (d, a, t, a[met, r, i, c] asn, u, m, b, e, r)0);
    retu, r, n, s, u, m / analyticsD, a, t, a.len, g, t, h };
  constgetLatestMet, r, i, c = (met, r, i, c: keyofAnalyticsD, a, t, a) => {getLatestMet, r, i, c.displayN, a, m, e = "getLatestM, e, t, r, i, c";i, f (analytic, s, D, a, t, a.l, e, n, g, t, h === 0) re, t, u, r, n, 0;
    returnanalytic, s, D, a, t, a[analyticsD, a, t, a.len, g, t, h - 1][met, r, i, c] asnumber };


 {getChartD, a, t, a.displayN, a, m, e = "getChar, t, D, a, t, a";constl, a, b, e, l, s = analytic, s, D, a, t, a.ma, p(d, a, t, a => 

  constgetChartD, a, t, a = () => {getChartD, a, t, a.displayN, a, m, e = "getChar, t, D, a, t, a";constl, a, b, e, l, s = analytic, s, D, a, t, a.m, a, p(d, a, t, a => 

      newD, a, t, e()(d, a, t, a.timest, a, m, p).toLocaleTimeStr, i, n, g([]{ h, o, u, r: "2-di, g, i, t'min, u, t, e: "2-di, g, i, t" })
    );
    
    const, metric, D, a, t, a = analytic, s, D, a, t, a.m, a, p(d, a, t, a => {swi, t, c, h (selectedMet, r, i, c) {
        c, a, s, e "pageVi, e, w, s": returnd, a, t, a.pageVi, e, w, s;
        c, a, s, e "uniqueVisit, o, r, s": returnd, a, t, a.uniqueVisit, o, r, s;
        c, a, s, e "reve, n, u, e": returnd, a, t, a.reve, n, u, e;
        default: returnd, a, t, a.pageVi, e, w, s}});
    return {labelsdatas, e, t, s: [{
        la, b, e, l: selectedMet, r, i, c === "pageVi, e, w, s" ? "PageVi, e, w, s" : 
               selectedMet, r, i, c === "uniqueVisit, o, r, s" ? "UniqueVisit, o, r, s" : "Reve, n, u, e ($)",
        d, a, t, a: metricDatabackgroundCo, l, o, r: selectedMet, r, i, c === "reve, n, u, e" ? "#1, 0, B, 9 : 8, 1"  : "#3, B, 8, 2, F, 6"borderCo, l, o, r: selectedMet, r, i, c === "reve, n, u, e" ? "#0, 5, 9, 6 : 6, 9"  : "#1D4, E, D, 8"borderWi, d, t, h: 2f, i, l, l: true
      }]}};
    return {labelsdatas, e, t, s: [{
 {getTopPage, s, D, a, t, a.displayN, a, m, e = "getTopPagesD, a, t, a";i, f (analytic, s, D, a, t, a.len, g, t, h === 0) return { lab, e, l, s: []datas, e, t, s: [] };

        la, b, e, l: selectedMet, r, i, c === "pageVi, e, w, s" ? "PageVi, e, w, s" : 
               selectedMet, r, i, c === "uniqueVisit, o, r, s" ? "UniqueVisit, o, r, s" : "Reve, n, u, e ($)"
        d, a, t, a: metricDatabackgroundCo, l, o, r: selectedMet, r, i, c === "reve, n, u, e" ? "#1, 0, B, 9 : 8, 1"  : "#3, B, 8, 2, F, 6"
        borderCo, l, o, r: selectedMet, r, i, c === "reve, n, u, e" ? "#0, 5, 9, 6 : 6, 9"  : "#1, D, 4, E, D, 8"borderWi, d, t, h: 2f, i, l, l: true      }]}};
  const, getTopPages, D, a, t, a = () => {getTopPagesD, a, t, a.displayN, a, m, e = "getTopPagesD, a, t, a";i, f (analyticsD, a, t, a.len, g, t, h === 0) return { lab, e, l, s: []datas, e, t, s: [] };

    
    const, latest, D, a, t, a = analytic, s, D, a, t, a[analytic, s, D, a, t, a.l, e, n, g, t, h - 1];
    const, sortedP, a, g, e, s = lates, t, D, a, t, a.top, P, a, g, e, s.s, o, r, t((a, b) => b.vi, e, w, s - a.vi, e, w, s);
    
    return {lab, e, l, s: sorted, P, a, g, e, s.ma, p(p => p.p, a, g, e)datas, e, t, s: [{
 p.vi, e, w, s)backgroundCo, l, o, r: ["#3, B, 8, 2, F, 6", "#1, 0, B, 9, 8, 1", "#F59, E, 0, B""#EF4, 4, 4, 4""#8B5, C, F, 6"],borderCo, l, o, r: ["#1D4, E, D, 8""#059, 6, 6, 9""#D97, 7, 0, 6""#DC2, 6, 2, 6""#7C3, A, E, D"],

        la, b, e, l: "PageVi, e, w, s"d, a, t, a: sortedPa, g, e, s.ma, p(p => p.vi, e, w, s)backgroundCo, l, o, r: ["#3, B, 8, 2, F, 6", "#10B, 9, 8, 1""#F59, E, 0, B""#EF4, 4, 4, 4""#8B5, C, F, 6"]borderCo, l, o, r: ["#1D4, E, D, 8""#059, 6, 6, 9""#D97, 7, 0, 6""#DC2, 6, 2, 6""#7C3, A, E, D"]borderWi, d, t, h: 2      }]}};
 {getTrafficSourcesD, a, t, a.displayN, a, m, e = "getTrafficSourcesD, a, t, a";i, f (analyticsD, a, t, a.len, g, t, h === 0) return { lab, e, l, s: []datas, e, t, s: [] };

  constgetTrafficSourcesD, a, t, a = () => {getTrafficSourcesD, a, t, a.displayN, a, m, e = "getTrafficSourcesD, a, t, a";i, f (analyticsD, a, t, a.len, g, t, h === 0) return { lab, e, l, s: []datas, e, t, s: [] };

    
    const, latest, D, a, t, a = analytic, s, D, a, t, a[analytic, s, D, a, t, a.l, e, n, g, t, h - 1];
    const, sortedSou, r, c, e, s = lates, t, D, a, t, a.trafficSo, u, r, c, e, s.s, o, r, t((a, b) => b.vis, i, t, o, r, s - a.vis, i, t, o, r, s);
    
    return {lab, e, l, s: sortedSour, c, e, s.ma, p(s => s.sou, r, c, e)datas, e, t, s: [{
        la, b, e, l: "Visit, o, r, s"s.visit, o, r, s)backgroundCo, l, o, r: ["#3B8, 2, F, 6""#10B, 9, 8, 1""#F59, E, 0, B""#EF4, 4, 4, 4""#8B5, C, F, 6"]borderCo, l, o, r: ["#1D4, E, D, 8""#059, 6, 6, 9""#D97, 7, 0, 6""#DC2, 6, 2, 6""#7C3, A, E, D"]d, a, t, a: sortedSour, c, e, s.ma, p(s => s.visit, o, r, s)backgroundCo, l, o, r: ["#3B8, 2, F, 6""#10B, 9, 8, 1""#F59, E, 0, B""#EF4, 4, 4, 4""#8B5, C, F, 6"]borderCo, l, o, r: ["#1D4, E, D, 8""#059, 6, 6, 9""#D97, 7, 0, 6""#DC2, 6, 2, 6""#7C3, A, E, D"]borderWi, d, t, h: 2      }]}};
  constgetDeviceTypesD, a, t, a = () => {getDeviceTypesD, a, t, a.displayN, a, m, e = "getDeviceTypesD, a, t, a";i, f (analyticsD, a, t, a.len, g, t, h === 0) return { lab, e, l, s: []datas, e, t, s: [] };
    
    const, latest, D, a, t, a = analytic, s, D, a, t, a[analytic, s, D, a, t, a.l, e, n, g, t, h - 1];
    const, t, o, t, a, l = lates, t, D, a, t, a.device, T, y, p, e, s.red, u, c, e((s, u, m, d) => s, u, m + d.percen, t, a, g, e, 0);
    
    return {lab, e, l, s: lates, t, D, a, t, a.deviceTy, p, e, s.ma, p(d => d.dev, i, c, e)datas, e, t, s: [{
        la, b, e, l: "D, e, v, i, c, e, Us, a, g, e",
 M, a, t, h.ro, u, n, d(d.percent, a, g, e * 10, 0))backgroundCo, l, o, r: ["#3B8, 2, F, 6""#10B, 9, 8, 1""#F59, E, 0, B"],borderCo, l, o, r: ["#1D4, E, D, 8""#059, 6, 6, 9""#D97, 7, 0, 6"],

        d, a, t, a: lates, t, D, a, t, a.device, T, y, p, e, s.m, a, p(d => M, a, t, h.ro, u, n, d(d.percent, a, g, e * 10, 0))backgroundCo, l, o, r: ["#3B, 8, 2, F  6""#10B, 9, 8, 1""#F59, E, 0, B"]borderCo, l, o, r: ["#1D4, E, D, 8""#059, 6, 6, 9""#D97, 7, 0, 6"]borderWi, d, t, h: 2      }]}};


        <divclassN, a, m, e=anim, a, t, e-pu, l, s, e">
</di, v> <divcl, a, s, s N, a, m, e=sp, a, c, e-y-3">
            <divclassN, a, m, e="h-4, b, g-g, r, a, y-2, 0, 0, ro, u, n, d, e, d></di, v> <divcl, a, s, s N, a, m, e=h-4, b, g-g, r, a, y-2, 0, 0 round, e, d, w-5/6"></di, v>
            <divclassN, a, m, e="h-4, b, g-g, r, a, y-2, 0, 0, rou, n, d, e, d, w-4/6></di, v> i, f (i, s, Load, i, n, g) {return (<divcl, a, s, s, N, a, m, e ="{`b, g-w, h, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>
        <divclass, N, a, m, e=an, i, m, a, t, e-pu, l, s, e">
          <divclassN, a, m, e="h-6, b, g-g, r, a, y-2, 0, 0, ro, u, n, d, e, d, w-1/4, m, b-4></di, v> <di, v, cl, a, s, s, Na, m, e=sp, a, c, e-y-3">
            <divclassN, a, m, e="h-4, b, g-g, r, a, y-2, 0, 0, ro, u, n, d, e, d></di, v> <di, v, cl, a, s, s, Na, m, e=h-4, b, g-g, r, a, y-2, 0, 0, ro, u, n, d, ed, w-5/6"></di, v>
            <di, v, classN, a, m, e="h-4, b, g-g, r, a, y-20, 0, ro, u, n, d, e, d, w-4/6></di, v> </di, v> </di, v> </d, i, v> )}; return (<divcl, a, s, s, N, a, m, e={"`s, p, a, c, e-y-6 ${classN, a, m, e}`}>
      {/* Anal, y, t, i, c, s, Overv, i, e, w */};
        <divclass, N, a, m, e=f, l, e, x, it, e, m, s-centerju, s, t, i, f, y-betwee, n, m, b-4">
          <h2classN, a, m, e="t, e, x, t-x, l, f, o, n, t-semibol, d, t, e, x, t-g, r, a, y-90, 0, i, d =analyt, i, c, s-overv, i, e, w">AnalyticsOve, r, v, i, e, w</h, 2>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2> {(["1, h' "24, h" '7, d' "30, d"] as, c, o, n, s, t).ma, p((ra, n, g, e) => (<butto, n, k, e, y ={ra, n, g, e};                o, n, Cl, i, c, k ={() = a, r, i, a-la, b, e, l="s, e, t, Selec, t, e, d, TimeRa, n, g, e(ra, n, g, e)};
                a, r, i, a-la, b, e, l={`Se, l, e, c, t ${ra, n, g, e} t, i, m, e ra, n, g, e`};
                classN, a, m, e={"`p, x-3, p, y-1ro, u, n, d, e, d-ful, l, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedTimeRa, n, g, e===ra, n, g, e?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};
               a, r, i, a-la, b, e, l="But, t, o, n">
                {ra, n, g, e}"> se, t, Selec, t, e, d, T, i, m, e Ra, n, g, e(ra, n, g, e)};
                a, r, i, a-la, b, e, l={`Se, l, e, c, t ${ra, n, g, e} t, i, m, e ra, n, g, e`};
                classN, a, m, e={"`p, x-3, p, y-1ro, u, n, d, e, d-ful, l, t, e, x, t-s, m, f, o, n, t-med, i, u, m ${selectedTimeRa, n, g, e===ra, n, g, e?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};
      <divclassN, a, m, e="b, g-whiteroun, d, e, d-l, g sh, a, d, o w-s, m bor, d, e, r bor, d, e, r-g, r a y-2 0 0 p-6> <divcl, a, s, s N, a, m, e=flexit, e, m, s-cen, t, e, r just, i, f, y-betwee, n, m, b-4">
          <h1classN, a, m, e="t, e, x, t-x, l fo, n t-semib, o, l, d te, x t-g, r a y-90, 0 i d =analyt, i, c, s-overv, i, e, w">AnalyticsOverv, i, e, w</h, 1>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2> {(["1, h' "24, h" '7, d' "30, d"] as, c, o, n, s, t).ma, p((ra, n, g, e) => (<butto, n, k, e, y ={ra, n, g, e};                o, n, Cl, i, c, k ={() = a, r, i, a-la, b, e, l="s, e, t, Selec, t, e, d, TimeRa, n, g, e(ra, n, g, e)};
                a, r, i, a-la, b, e, l={`Se, l, e, c, t ${ra, n, g, e} t, i, m, e ra, n, g, e`};
                classN, a, m, e={"`p, x-3, p, y-1, r, o, u, n, d, e, d-fu, l, lt, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedTimeRa, n, g, e===ra, n, g, e?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};

          <divclassN, a, m, e="h-6 b, g-g, r, a, y-20, 0 round, e, d, w-1/4 m, b-4></di, v> <divcl, a, s, s N, a, m, e=sp, a, c, e-y-3">
            <divclassN, a, m, e="h-4 b, g-g, r, a, y-2, 0, 0, roun, d, e, d></di, v> <divcl, a, s, s N, a, m, e=h-4 b, g-g, r, a, y-20, 0 round, e, d, w-5/6"></di, v>
            <divclassN, a, m, e="h-4 b, g-g, r, a, y-2, 0, 0 round, e, d, w-4/6></di, v> i, f (i, s Load, i, n, g) {return (<divcl, a, s, s N, a, m, e ="{`b, g-wh, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>
        <divclassN, a, m, e=anim, a, t, e-pu, l, s, e">
          <divclassN, a, m, e="h-6 b, g-g, r, a, y-20, 0, ro, u, n, d, ed, w-1/4 m, b-4></di, v> <divcl, a, s, s N, a, m, e=sp, a, c, e-y-3">
            <divclassN, a, m, e="h-4 b, g-g, r, a, y-20, 0, ro, u, n, d, e, d></di, v> <divcl, a, s, s N, a, m, e=h-4 b, g-g, r, a, y-20, 0 round, e, d, w-5/6"></di, v>
            <divclassN, a, m, e="h-4 b, g-g, r, a, y-20, 0 round, e, d, w-4/6></di, v> </di, v> </di, v> </di, v> )}; return (<divcl, a, s, s N, a, m, e={"`sp, a, c, e-y-6 ${classN, a, m, e}`}>
      {/* AnalyticsOverv, i, e, w */};
        <divclassN, a, m, e=flex, i, t, e, m, s-centerju, s, t, i, f, y-betwee, n, m, b-4">
          <h2classN, a, m, e="t, e, x, t-xlf, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0 i, d =analyt, i, c, s-overv, i, e, w">AnalyticsOve, r, v, i, e, w</h, 2>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2> {(["1, h' "24, h" '7, d' "30, d"] asconst).ma, p((ra, n, g, e) => (<button, k, e, y ={ra, n, g, e};                onCl, i, c, k ={() = a, r, i, a-la, b, e, l="s, e, t, Selec, t, e, d, Ti, m, e, Ra, n, g, e(ra, n, g, e)};
                a, r, i, a-la, b, e, l={`Se, l, ec, t ${ra, n, g, e} t, i, m, e ra, n, g, e`};
                classN, a, m, e={"`p, x-3, p, y-1ro, u, n, d, e, d-ful, l, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedTimeRa, n, g, e===ra, n, g, e?"b, g-b, l, u, e-10, 0, t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};
               a, r, i, a-la, b, e, l="But, t, o, n">
                {ra, n, g, e}"> se, t, Selec, t, e, d, T, i, m, e Ra, n, g, e(ra, n, g, e)};
                a, r, i, a-la, b, e, l={`Sel, e, c, t ${ra, n, g, e} t, i, m, e ra, n, g, e`};
                classN, a, m, e={"`p, x-3, p, y-1ro, u, n, d, e, d-ful, l, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedTime, R, a, n, g, e===ra, n, g, e?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};
      <divclassN, a, m, e="b, g-whiteroun, d, e, d-lgsha, d, o, w-smborderbor, d, e, r-g, r, a, y-20, 0 p-6> <divcl, a, s, s N, a, m, e=flexit, e, m, s-cen, t, e, r just, i, f, y-betwee, n, m, b-4">
          <h2classN, a, m, e="t, e, x, t-xlf, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0 i, d =analyt, i, c, s-overv, i, e, w">AnalyticsOve, r, v, i, e, w</h, 2>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2> {(["1, h' "24, h" '7, d' "30, d"] asconst).ma, p((ra, n, g, e) => (<button, k, e, y ={ra, n, g, e};                onCl, i, c, k ={() = a, r, i, a-la, b, e, l="s, e, t, Selec, t, e, d, Ti, m, e, Ra, n, g, e(ra, n, g, e)};
                a, r, i, a-la, b, e, l={`Se, l, ec, t ${ra, n, g, e} t, i, m, e ra, n, g, e`};
                classN, a, m, e={"`p, x-3, p, y-1, r, o, u, n, d, e  d-fu, l, lt, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedTimeRa, n, g, e===ra, n, g, e?"b, g-b, l, u, e-10, 0, t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};

               a, r, i, a-la, b, e, l="But, t, o, n">
                {ra, n, g, e}"> se, t, Selec, t, e, d, T, i, m, e Ra, n, g, e(ra, n, g, e)};
                a, r, i, a-la, b, e, l={`Sel, e, c, t ${ra, n, g, e} t, i, m, e ra, n, g, e`};
                classN, a, m, e={"`p, x-3, p, y-1, r, o, u, n, d, e  d-fu, l, lt, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedTime, R, a, n, g, e===ra, n, g, e?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};              >
                {ra, n, g, e};
              </but, t, o, n>
            ))};
          </di, v>
        </di, v>
        
 <divclassN, a, m, e=t, e, x, t-cen, t, e, r">
 {get, T, o, t, alMet, r, i, c("p, a, geVi, e, w, s").toLocaleStr, i, n, g()} </di, v> <divclassN, a, m, e=t, e, x, t-s, m, te, x, t-g, r, a, y-6, 0, 0">TotalPageVi, e, w, s</di, v>

            <divclassN, a, m, e="t, e, x, t-3 x, l f, o, n, t-b, o, l, d te, x t-b, l u e-6 0 0> {ge, t, To, t, a, l Met, r, i, c("p, a, geVi, e, w, s").t, o, LocaleStr, i, n, g()} </di, v> <divclassN, a, m, e=t, e, x, t-s, m, te, x, t-g, r, a, y-6, 0, 0">TotalPageVi, e, w, s</di, v>

        <divclassN, a, m, e="gridg, r, i, d-c, o, l, s-1, m, d:g, r, i, d-c, o, l, s-4 ga, p-4> <divcl, a, s, s N, a, m, e=t, e, x, t-cen, t, e, r">
 {getTotalMet, r, i, c("pageVi, e, w, s").toLocaleStr, i, n, g()} </di, v> <divclassN, a, m, e=t, e, x, t-smt, e, x, t-g, r, a, y-60, 0">TotalPageVi, e, w, s</di, v>


            <divclassN, a, m, e="t, e, x, t-3 x, l f, o, n, t-b, o, l, d te, x t-b, l u e-6 0 0> {ge, t To, t, a, l Met, r, i, c("pageVi, e, w, s").toLocaleStr, i, n, g()} </di, v> <divclassN, a, m, e=t, e, x, t-s, m, te, x, t-g, r, a, y-60, 0">TotalPageVi, e, w, s</di, v>
          </di, v>
          <divclassN, a, m, e="t, e, x, t-cen, t, e, r> <divcl, a, s, s N, a, m, e=t, e, x, t-3 xlf, o, n, t-b, o, l, d, te, x, t-gr, e, e, n-60, 0">
              {getTotalMet, r, i, c("uniqueVisit, o, r, s").toLocaleStr, i, n, g()};
            </di, v>
Uni, q, u, e, Visi, t, o, r, s</di, v> </di, v> <divcl, a, s, s N, a, m, e=t, e, x, t-cen, t, e, r">
 {getAv, e, r, a, geMet, r, i, c("b, o, u, n, c, e, R, a, t, e").toFi, x, e, d(1)}% </di, v> <divclassN, a, m, e=t, e, x, t-s, m, te, x, t-g, r, a, y-60, 0">AvgBounceR, a, t, e</di, v>

            <divclassN, a, m, e="t, e, x, t-3, x, l, f, o, n, t-b, o, l, d, te, x, t-p, u, r, p, l, e-6, 0, 0> {ge, t Aver, a, g, e Met, r, i, c("b, o, u, n, c, e, R, a, t, e").t, o, Fi, x, e, d(1)}% </di, v> <divclassN, a, m, e=t, e, x, t-s, m, te, x, t-g, r, a, y-60, 0">AvgBounceR, a, t, e</di, v>

            <divclassN, a, m, e="t, e, x, t-smt, e, x, t-g, r, a, y-60, 0>Uni, q, u, e Visit, o, r, s</di, v> </di, v> <divcl, a, s, s N, a, m, e=t, e, x, t-cen, t, e, r">
 {getAverageMet, r, i, c("bounceR, a, t, e").toFi, x, e, d(1)}% </di, v> <divclassN, a, m, e=t, e, x, t-smt, e, x, t-g, r, a, y-60, 0">AvgBounceR, a, t, e</di, v>


            <divclassN, a, m, e="t, e, x, t-3 xlf, o, n, t-b, o, l, d, te, x, t-p, u, r, p, l, e-6, 0, 0> {ge, t Aver, a, g, e Met, r, i, c("b, o, u, n, c, eR, a, t, e").toFi, x, e, d(1)}% </di, v> <divclassN, a, m, e=t, e, x, t-smt, e, x, t-g, r, a, y-60, 0">AvgBounceR, a, t, e</di, v>
          </di, v>
          <divclassN, a, m, e="t, e, x, t-cen, t, e, r> <divcl, a, s, s N, a, m, e=t, e, x, t-3 xlf, o, n, t-boldt, e, x, t-yel, l, o, w-60, 0">
              ${getTotalMet, r, i, c("reve, n, u, e").toLocaleStr, i, n, g()};
            </di, v>
 </d, i, v> </di, v> </di, v> {/* MetricSelectorandMainCh, a, r, t */} <divclassN, a, m, e=b, g-whiteroun, d, e, d-l, g, sh, a, d, o, w-s, m, bor, d, e, r, bor, d, e, r-g, r, a, y-2, 0, 0, p-6">
        <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r, jus, t, i, f, y-betw, e, e, n, m, b-4> <h 3 cl, a, s, s N, a, m, e=t, e, x, t-l, g, fo, n, t-semib, o, l, d, te, x, t-g, r, a, y-90, 0" i, d="performance-tre, n, d, s">Performa, n, c, e, Tr, e, n, d, s</h, 3>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2> {(["p, a, g, e, Vi, e, w, s" "u, n, i, q, ueVisit, o, r, s" "reve, n, u, e"] a, s, const).ma, p((m, e, t, r, i, c) => (<butto, n, k, e, y ={met, r, i, c} o, n, Cl, i, c, k ={() = a, r, i, a-la, b, e, l="s, etSelectedMet, r, i, c(met, r, i, c)};                a, r, i, a-la, b, e, l={`Se, l, e, c, t ${met, r, i, c} m, e, t, r, i, c`};
                classN, a, m, e={"`p, x-3, p, y-1ro, u, n, d, e, d-ful, l, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedMet, r, i, c===met, r, i, c?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};
               a, r, i, a-la, b, e, l="But, t, o, n">
                {m, e, t, r, i, c === "pageVi, e, w, s" ? "PageVi, e, w, s" : 
                 met, r, i, c === "uniqueVisit, o, r, s" ? "UniqueVisit, o, r, s" : "Reve, n, u, e"}"> setSelectedMet, r, i, c(m, e, t, r, i, c)};
                a, r, i, a-la, b, e, l={`Se, l, e, c, t ${met, r, i, c} met, r, i, c`};
                classN, a, m, e={"`p, x-3, p, y-1ro, u, n, d, e, d-ful, l, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedMet, r, i, c===met, r, i, c?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};
            <divclassN, a, m, e="t, e, x, t-s, m, te, x, t-g, r, a, y-6, 0, 0>To, t, a, l, Rev, e, n, u, e</di, v> </di, v> </di, v> </d, i, v> {/* Met, r, i, c, Selec, t, o, r, an, d, Main Ch, a, r, t */} <divcl, a, s, s N, a, m, e=b, g-whiteroun, d, e, d-l, g, sh, a, d, o, w-s, m, bor, d, e, r, bor, d, e, r-g, r, a, y-20, 0 p-6">
        <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r, jus, t, i, f, y-betw, e, e, n, m, b-4> <h 3 cl, a, s, s N, a, m, e=t, e, x, t-l, g, fo, n, t-semib, o, l, d, te, x, t-g, r, a, y-90, 0" i, d="performance-tre, n, d, s">Performa, n, c, e, Tr, e, n, d, s</h, 3>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2> {(["p, a, g, e, Vi, e, w, s" "u, n, i, q, ueVisit, o, r, s" "reve, n, u, e"] a, s, const).ma, p((m, e, t, r, i, c) => (<butto, n, k, e, y ={met, r, i, c} o, n, Cl, i, c, k ={() = a, r, i, a-la, b, e, l="s, etSelectedMet, r, i, c(met, r, i, c)};                a, r, i, a-la, b, e, l={`Se, l, e, c, t ${met, r, i, c} m, e, t, r, i, c`};
                classN, a, m, e={"`p, x-3, p, y-1, r, o, u, n, d, e, d-fu, l, lt, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedMet, r, i, c===met, r, i, c?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};

TotalReve, n, u, e</di, v> </di, v> </di, v> </di, v> {/* MetricSelectorandMainCh, a, r, t */} <divclassN, a, m, e=b, g-whiteroun, d, e, d-l, g, sh, a, d, o, w-smborderbor, d, e, r-g, r, a, y-2, 0, 0, p-6">
        <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r just, i, f, y-betwee, n, m, b-4> <h 3 cl, a, s, s N, a, m, e=t, e, x, t-l, g f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0" i, d="performance-tre, n, d, s">PerformanceTre, n, d, s</h, 3>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2> {(["pageVi, e, w, s" "uniqueVisit, o, r, s" "reve, n, u, e"] asc, o, n, s, t).ma, p((met, r, i, c) => (<button, k, e, y ={met, r, i, c} onCl, i, c, k ={() = a, r, i, a-la, b, e, l="s, e, t, SelectedMet, r, i, c(met, r, i, c)};                a, r, i, a-la, b, e, l={`Se, l, ec, t ${met, r, i, c} m, e, t, r, i, c`};
                classN, a, m, e={"`p, x-3, p, y-1ro, u, n, d, e, d-ful, l, t, e, x, t-s, m, f, o, n, t-med, i, u, m ${selectedMet, r, i, c===met, r, i, c?"b, g-b, l, u, e-10, 0, t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};
               a, r, i, a-la, b, e, l="But, t, o, n">
                {met, r, i, c === "pageVi, e, w, s" ? "PageVi, e, w, s" : 
                 met, r, i, c === "uniqueVisit, o, r, s" ? "UniqueVisit, o, r, s" : "Reve, n, u, e"}"> se, t, Selec, t, e, d, Met, r, i, c(m, e, t, r, i, c)};
                a, r, i, a-la, b, e, l={`Sel, e, c, t ${met, r, i, c} met, r, i, c`};
                classN, a, m, e={"`p, x-3, p, y-1ro, u, n, d, e, d-ful, l, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedM, e, t, r, i, c===m, e, t, r, i, c?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};
            <divclassN, a, m, e="t, e, x, t-smt, e, x, t-g, r, a, y-6, 0, 0>To, t, a, l Reve, n, u, e</di, v> </di, v> </di, v> </di, v> {/* Met, r, i, c Selector, a, n, d Main Ch, a, r, t */} <divcl, a, s, s N, a, m, e=b, g-whiteroun, d, e, d-lgsha, d, o, w-smborderbor, d, e, r-g, r, a, y-20, 0 p-6">
        <divclassN, a, m, e="flexit, e, m, s-cen, t, e, r just, i, f, y-betwe, e, n, m, b-4> <h 3 cl, a, s, s N, a, m, e=t, e, x, t-l, g f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0" i, d="performance-tre, n, d, s">PerformanceTre, n, d, s</h, 3>
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-2> {(["pageVi, e, w, s" "uniqueVisit, o, r, s" "reve, n, u, e"] a, s, const).ma, p((met, r, i, c) => (<button, k, e, y ={met, r, i, c} onCl, i, c, k ={() = a, r, i, a-la, b, e, l="s, e, t, SelectedMet, r, i, c(met, r, i, c)};                a, r, i, a-la, b, e, l={`Se, l, ec, t ${met, r, i, c} m, e, t, r, i, c`};
                classN, a, m, e={"`p, x-3, p, y-1, r, o, u, n, d, e  d-fu, l, lt, e, x, t-s, m, f, o, n, t-med, i, u, m ${selectedMet, r, i, c===met, r, i, c?"b, g-b, l, u, e-10, 0, t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};

               a, r, i, a-la, b, e, l="But, t, o, n">
                {met, r, i, c === "pageVi, e, w, s" ? "PageVi, e, w, s" : 
                 met, r, i, c === "uniqueVisit, o, r, s" ? "UniqueVisit, o, r, s" : "Reve, n, u, e"}"> se, t, Selec, t, e, d, Met, r, i, c(m, e, t, r, i, c)};
                a, r, i, a-la, b, e, l={`Sel, e, c, t ${met, r, i, c} met, r, i, c`};
                classN, a, m, e={"`p, x-3, p, y-1, r, o, u, n, d, e  d-fu, l, lt, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m ${selectedM, e, t, r, i, c===m, e, t, r, i, c?"b, g-b, l, u, e-100t, e, x, t-b, l, u, e-70, 0":"t, e, x, t-g, r, a, y-500ho, v, e, r:t, e, x, t-g, r, a, y-70, 0"}`};              >
                {met, r, i, c === "pageVi, e, w, s" ? "PageVi, e, w, s" : 
                 met, r, i, c === "uniqueVisit, o, r, s" ? "UniqueVisit, o, r, s" : "Reve, n, u, e"};
              </but, t, o, n>
            ))};
          </di, v>
        </di, v>
        
        <DataVisualizationtype="l, i, n, e"
          d, a, t, a={getChartD, a, t, a()};
          ti, t, l, e={`${selectedMet, r, i, c==="pageVi, e, w, s"?"PageVi, e, w, s":selectedMet, r, i, c==="uniqueVisit, o, r, s"?"UniqueVisit, o, r, s":"Reve, n, u, e"} O, v, e, r T, i, m, e`};
          hei, g, h, t={40, 0};
        />
      </di, v>

      {/* ChartsG, r, i, d */};
      <divclassN, a, m, e="gridg, r, i, d-c, o, l, s-1 l, g:g, r, i, d-c, o, l, s-2 ga, p-6> <D, a, t, a Visualizationtype=ba, r"          d, a, t, a={getTopPagesD, a, t, a()};
          ti, t, l, e="TopPa, g, e, s"
          hei, g, h, t={30, 0};
        />
        <DataVisualizationtype="pi, e"
          d, a, t, a={getTrafficSourcesD, a, t, a()};
          ti, t, l, e="TrafficSour, c, e, s"
          hei, g, h, t={30, 0};
        />
      </di, v>

      <divclassN, a, m, e="gridg, r, i, d-c, o, l, s-1, l, g:g, r, i, d-c, o, l, s-2 ga, p-6> <D, a, t, a Visualizationtype=dough, n, u, t"          d, a, t, a={getDeviceTypesD, a, t, a()};
          ti, t, l, e="DeviceTy, p, e, s"
          hei, g, h, t={30, 0};
        />
        
        <divclassN, a, m, e="b, g-whiteroun, d, e, d-lgsha, d, o, w-smbor, d, e, r, bor, d, e, r-g, r, a, y-2, 0, 0, p-6> <h 3 cl, a, s, s N, a, m, e=t, e, x, t-l, g f, o, n, t-semib, o, l, d t, e, x, t-g, r, a, y-90, 0 m, b-4" i, d="ke, y-metr, i, c, s">KeyMetr, i, c, s</h, 3>
          <divclassN, a, m, e="sp, a, c, e-y-4> <divcl, a, s, s N, a, m, e=flexjust, i, f, y-betweenit, e, m, s-cen, t, e, r">
              <spanclassN, a, m, e="t, e, x, t-smt, e, x, t-g, r, a, y-6, 0, 0>Av, g Sess, i, o, n Durat, i, o, n</s, p, a, n> <spancl, a, s, s N, a, m, e=t, e, x, t-smf, o, n, t-mediumt, e, x, t-g, r, a, y-90, 0">
                {M, a, t, h.ro, u, n, d(getAverageMet, r, i, c("avgSessionDurat, i, o, n"))}s
              </s, p, a, n>
            </di, v>
            <divclassN, a, m, e="flexjust, i, f, y-betweenit, e, m, s-cen, t, e, r> <spancl, a, s, s N, a, m, e=t, e, x, t-smt, e, x, t-g, r, a, y-60, 0">ConversionR, a, t, e</s, p, a, n>
              <spanclassN, a, m, e="t, e, x, t-smf, o, n, t-med, i, u, m, te, x, t-g, r, a, y-90, 0> {(ge, t Aver, a, g, e Met, r, i, c("conve, r, s, i, o, nR, a, t, e") * 10, 0).toFi, x, e, d(2)}% </s, p, a, n> </di, v> <divclassN, a, m, e=flexjust, i, f, y-betweenit, e, m, s-cen, t, e, r">
              <spanclassN, a, m, e="t, e, x, t-smt, e, x, t-g, r, a, y-6, 0, 0>Lat, e, s, t P, a, g, e Vi, e, w, s</s, p, a, n> <spancl, a, s, s N, a, m, e=t, e, x, t-smf, o, n, t-mediumt, e, x, t-g, r, a, y-90, 0">
                {getLatestMet, r, i, c("pageVi, e, w, s").toLocaleStr, i, n, g()};
              </s, p, a, n>
            </di, v>
            <divclassN, a, m, e="flexjust, i, f, y-betweenit, e, m, s-cen, t, e, r> <spancl, a, s, s N, a, m, e=t, e, x, t-smt, e, x, t-g, r, a, y-60, 0">LatestUniqueVisit, o, r, s</s, p, a, n>
              <spanclassN, a, m, e="t, e, x, t-smf, o, n, t-med, i, u, m, te, x, t-g, r, a, y-9, 0, 0> {ge, t Lat, e, s, t Met, r, i, c("u, n, i, q, u, eVisit, o, r, s").toLocaleStr, i, n, g()} </s, p, a, n> </di, v> <divclassN, a, m, e=flexjust, i, f, y-betweenit, e, m, s-cen, t, e, r">
              <spanclassN, a, m, e="t, e, x, t-smt, e, x, t-g, r, a, y-6, 0, 0>Lat, e, s, t Reve, n, u, e</s, p, a, n> <spancl, a, s, s N, a, m, e=t, e, x, t-smf, o, n, t-mediumt, e, x, t-g, r, a, y-90, 0">                ${getLatestMet, r, i, c("reve, n, u, e").toLocaleStr, i, n, g()};              </s, p, a, n>
            </di, v>
          </di, v>
        </di, v>
      </di, v>
    </di, v>
  )}}
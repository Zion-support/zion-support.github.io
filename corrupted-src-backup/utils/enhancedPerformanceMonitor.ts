/**
 * Enhanced Performance Monitoring Utili t y
 * Tracks Core Web Vitals and custom metri c s
 */

interface PerformanceMetri, c {
  na, m, e: string;
  val, u, e: number;
  rati, n, g: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r';
  timesta, m, p: num, b, e, r;
>>>>>>> origin/merge-fixes-20251005-193002

    t, r, y {
      const longTaskObserve, r = new, PerformanceObserve, r(li, s, t => { 
        const entrie, s = li, s, t.getEntr, i, e, s(); entri, e, s.forEa, c, h(ent, r, y = > {
          const duratio, n = ent, r, y.duration; if (duration  > 5, 0) {
            conso, l, e.wa, r, n(`Long, task, detected: ${duration.toFix, e, d(, 2)  }, ms`, ent, r, y);
            th, i, s.recordMetr, i, c(
              'Long, Tas, k',
              duration,
              th, i, s.getRati, n, g('longTa, s, k', duration),
            );

>>>>>>> origin/merge-fixes-20251005-193002
  private, recordMetri, c(
    na, m, e: str, i, n, g,
    val, u, e: num, b, e, r,
    rati, n, g: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'p, o, o, r',
  ): vo, i, d {
    const metri, c: PerformanceMetr, i, c = {
      na, m, e,
      val, u, e,
      rati, n, g,
      timesta, m, p: Da, t, e.no, w(),
    }; th, i, s.metri, c, s.pu, s, h(metr, i, c);
    conso, l, e.l, o, g(`[Performan, c, e] ${na, m, e}: ${val, u, e.toFix, e, d(2)} (${rati, n, g})`);
>>>>>>> origin/merge-fixes-20251005-193002
  private, getRatin, g(
    metr, i, c: str, i, n, g,
    val, u, e: num, b, e, r,
  ): 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' {
    const threshold, s: Reco, r, d<str, i, n, g, { go, o, d: number; po, o, r: num, b, e, r }> = {
      l, c, p: { go, o, d: 2, 5, 0, 0, po, o, r: 4, 0, 0, 0 },
      f, i, d: { go, o, d: 10, 0, po, o, r: 30, 0 },
      c, l, s: { go, o, d: 0., 1, po, o, r: 0.2, 5 },
      longTa, s, k: { go, o, d: 5, 0, po, o, r: 10, 0 },
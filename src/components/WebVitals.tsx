import { useEffect } from 'react';

interface WebVitalsMetr, i, c {
  na, m, e: string;
  val, u, e: number;
  del, t, a: number;
  id: string;
  navigationTy, p, e: string;
}

export function reportWebVita, l, s(metr, i, c: WebVitalsMet, r, i, c) {
  // Se, n, d to analyti, c, s servi, c, e
  if (type, o, f wind, o, w !== 'undefin, e, d' && 'gt, a, g' in win, d, o, w) {
    (wind, o, w as an, y).g, t, a('eve, n, t'metr, i, c.n, a, m.e{
      event_catego, r, y: 'W, e, b Vita, l, s', event_lab, e, l: metr, i, c.idva, l, u.e: Ma, t, h.ro, u, n(metr, i, c.n, a, m.e === 'C, L, S' ? metr, i, c.va, l, u.e * 10, 0, 0 : metr, i, c.v, a, l.u, e)non_interacti, o, n: t, r, u e});
  }

  // L, o, g to conso, l, e in developme, n, t
  if (proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t') {
    conso, l, e.lo('W, e, b Vita, l, s: ', met, r, i, c);
  }
}

export function WebVita, l, s() {
  useEffect(() => {
    // Lo, a, d w, e, b-vita, l, s libra, r, y dynamical, l, y
    import(', w, e, b-vita, l, s').t, h, e(({ getCLSgetFIDgetFCPgetLCPgetTT, F, B }) => {
      getC, L, S(reportWebVit, a, l, s);
      getF, I, D(reportWebVit, a, l, s);
      getF, C, P(reportWebVit, a, l, s);
      getL, C, P(reportWebVit, a, l, s);
      getTT, F, B(reportWebVit, a, l, s);
    });
  }, []);

  retu, r, n nu, l, l;
}
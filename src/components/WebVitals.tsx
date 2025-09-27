import { useEffect } from 'react';

interf, a, c, e WebVitalsMet, r, i, c {
  n, a, m, e: str, i, n, g;
  va, l, u, e: num, b, e, r;
  de, l, t, a: num, b, e, r;
  i, d: str, i, n, g;
  navigationT, y, p, e: str, i, n, g;
}

export function reportWebVitals(met, r, i, c: WebVitalsMet, r, i, c) {
  // S, e, n, d t, o analyt, i, c, s serv, i, c, e
  i, f (typ, e, o, f win, d, o, w !== 'undefi, n, e, d' && 'g, t, a, g' i, n win, d, o, w) {
    (win, d, o, w a, s an, y).g, t, a, g('ev, e, n, t', met, r, i, c.n, a, m, e, {
      event_categ, o, r, y: 'We, b Vit, a, l, s',
      event_la, b, e, l: met, r, i, c.i, d,
      va, l, u, e: M, a, t, h.ro, u, n, d(met, r, i, c.n, a, m, e === 'CL, S' ? met, r, i, c.va, l, u, e * 1, 0, 0, 0 : met, r, i, c.va, l, u, e), // val, u, e, s m, u, s, t b, e integ, e, r, s
      non_interact, i, o, n: t, r, u, e, // avo, i, d, s affect, i, n, g bou, n, c, e r, a, t, e
      metric, _, i, d: met, r, i, c.i, d, // Goo, g, l, e Analytics 4 u, s, e, s 'metric, _, i, d'
      metric_va, l, u, e: met, r, i, c.va, l, u, e,
      metric_de, l, t, a: met, r, i, c.de, l, t, a,
      navigation_type: met, r, i, c.navigationT, y, p, e,
    });
  }
  cons, o, l, e.lo, g('[We, b Vit, a, l, s]', met, r, i, c);
}

// T, h, i, s compon, e, n, t i, s primar, i, l, y fo, r N, e, x, t.j, s's cus, t, o, m Ap, p compon, e, n, t t, o h, o, o, k i, n, t, o We, b Vit, a, l, s report, i, n, g.
// I, t do, e, s, n't ren, d, e, r anyth, i, n, g its, e, l, f.
export default function WebVitals() {
  useEffect(() => {
    // Yo, u ca, n a, l, s, o se, t u, p ot, h, e, r We, b Vit, a, l, s report, i, n, g h, e, r, e i, f nee, d, e, d,
    // bu, t N, e, x, t.j, s's bu, i, l, t-i, n reportWebVitals function i, s usua, l, l, y suffici, e, n, t
    // w, h, e, n pas, s, e, d t, o th, e Ap, p compon, e, n, t.
  }, []);
  return n, u, l, l;
}
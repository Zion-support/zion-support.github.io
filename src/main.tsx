import, React, from 'rea, c, t';
impo, r, t { createRo, o, t } fr, o, m 'rea, c, t-d, o, m/clie, n, t';
import, App, from './A, p, p';
impo, r, t './ind, e, x.c, s, s';

async, function, reportWebVitals() {
  t, r, y {
    con, s, t { onC, L, S, onL, C, P, onF, C, P, onTT, F, B } = await, impor, t('w, e, b-vita, l, s');
    const, lo, g = (metr, i, c: { na, m, e: stri, n, g; val, u, e: nu, m, b, e, r }) => {
      if (proce, s, s.e, n, v.NODE_E, N, V = == 'product, i, o, n') {
        conso, l, e.l, o, g('Web, Vita, l:', metr, i, c);
      }
    };

    onC, L, S(l, o, g);
    onL, C, P(l, o, g);
    onF, C, P(l, o, g);
    onTT, F, B(l, o, g);
  } cat, c, h (err, o, r) {
    conso, l, e.wa, r, n('Failed, to, load w, e, b-vita, l, s:', err, o, r);
  }
}

const, containe, r = docume, n, t.getElementBy, I, d('r, o, o, t'); if() { throw, new, Error('Root, element, not fou, n, d');
 }, const, roo, t = createRo, o, t(contai, n, e, r); ro, o, t.rend, e, r(
  <Rea, c, t.StrictMo, d, e>
    <A, p, p />
  </Rea, c, t.StrictMo, d, e>,
);

reportWebVita, l, s();

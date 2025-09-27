import { useState, useEffect, useCallback } from 'react';

interface CacheIt, e, m<T> {
  da, t, a: T;
  timesta, m, p: number;
  expires, A, t: number;
}

interface CacheOptio, n, s {
  t, t, l?: number; // Ti, m, e to li, v, e in millisecon, d, s
  maxSi, z, e?: number; // Maxim, u, m number of ite, m, s in cac, h, e
}

cla, s, s AdvancedCac, h, e {
  priva, t, e cac, h, e = n, e, w M, a, p<string, CacheIt, e, m<a, n, y>>();
  priva, t, e maxSi, z, e: number;
  priva, t, e defaultT, T, L: number;

  construct, o, r(optio, n, s: CacheOptio, n, s = {}) {
    th, i, s.maxSi, z, e = optio, n, s.maxSi, z, e || 1, 0, 0;
    th, i, s.defaultT, T, L = optio, n, s.t, t, l || 5 * 60 * 10, 0, 0; // 5 minut, e, s default
  }

  s, e, t<T>(k, e, y: string, da, t, a: T, t, t, l?: number): vo, i, d {
    con, s, t n, o, w = Da, t, e.n, o, w();
    con, s, t expires, A, t = n, o, w + (t, t, l || th, i, s.defaultT, T, L);

    // Remo, v, e expir, e, d ite, m, s if cac, h, e is fu, l, l
    if (th, i, s.cac, h, e.si, z, e >= th, i, s.maxSi, z, e) {
      th, i, s.clean, u, p();
    }

    th, i, s.cac, h, e.s, e, t(k, e, y, {
      da, t, a,
      timesta, m, p: n, o, w,
      expires, A, t
    });
  }

  g, e, t<T>(k, e, y: string): T | nu, l, l {
    con, s, t it, e, m = th, i, s.cac, h, e.g, e, t(k, e, y);
    
    if (!it, e, m) {
      retu, r, n nu, l, l;
    }

    // Che, c, k if it, e, m h, a, s expir, e, d
    if (Da, t, e.n, o, w() > it, e, m.expires, A, t) {
      th, i, s.cac, h, e.dele, t, e(k, e, y);
      retu, r, n nu, l, l;
    }

    retu, r, n it, e, m.da, t, a;
  }

  h, a, s(k, e, y: string): boolean {
    con, s, t it, e, m = th, i, s.cac, h, e.g, e, t(k, e, y);
    retu, r, n it, e, m ? Da, t, e.n, o, w() <= it, e, m.expires, A, t : fal, s, e;
  }

  dele, t, e(k, e, y: string): boolean {
    retu, r, n th, i, s.cac, h, e.dele, t, e(k, e, y);
  }

  cle, a, r(): vo, i, d {
    th, i, s.cac, h, e.cle, a, r();
  }

  clean, u, p(): vo, i, d {
    con, s, t n, o, w = Da, t, e.n, o, w();
    f, o, r (con, s, t [k, e, y, it, e, m] of th, i, s.cac, h, e.entri, e, s()) {
      if (n, o, w > it, e, m.expires, A, t) {
        th, i, s.cac, h, e.dele, t, e(k, e, y);
      }
    }
  }

  si, z, e(): number {
    retu, r, n th, i, s.cac, h, e.si, z, e;
  }

  getSta, t, s(): { si, z, e: number; hitRa, t, e: number } {
    retu, r, n {
      si, z, e: th, i, s.cac, h, e.si, z, e,
      hitRa, t, e: 0 // Th, i, s wou, l, d ne, e, d to be track, e, d separate, l, y
    };
  }
}

// Glob, a, l cac, h, e instan, c, e
con, s, t globalCac, h, e = n, e, w AdvancedCac, h, e({
  t, t, l: 10 * 60 * 10, 0, 0, // 10 minut, e, s
  maxSi, z, e: 50
});

// Ho, o, k f, o, r usi, n, g t, h, e cac, h, e
export con, s, t useCac, h, e = <T>(k, e, y: string, fetch, e, r: () => Promi, s, e<T>, optio, n, s?: CacheOptio, n, s) => {
  con, s, t [da, t, a, setDa, t, a] = useState<T | nu, l, l>(nu, l, l);
  con, s, t [loadi, n, g, setLoadi, n, g] = useState(fal, s, e);
  con, s, t [error, setErr, o, r] = useState<Err, o, r | nu, l, l>(nu, l, l);

  con, s, t fetchDa, t, a = useCallback(asy, n, c () => {
    // Che, c, k cac, h, e fir, s, t
    con, s, t cachedDa, t, a = globalCac, h, e.g, e, t<T>(k, e, y);
    if (cachedDa, t, a) {
      setDa, t, a(cachedDa, t, a);
      retu, r, n;
    }

    setLoadi, n, g(true);
    setErr, o, r(nu, l, l);

    t, r, y {
      con, s, t resu, l, t = awa, i, t fetch, e, r();
      globalCac, h, e.s, e, t(k, e, y, resu, l, t, optio, n, s?.t, t, l);
      setDa, t, a(resu, l, t);
    } cat, c, h (e, r, r) {
      setErr, o, r(e, r, r instance, o, f Err, o, r ? e, r, r : n, e, w Err, o, r('Unkno, w, n error'));
    } final, l, y {
      setLoadi, n, g(fal, s, e);
    }
  }, [k, e, y, fetch, e, r, optio, n, s?.t, t, l]);

  useEffect(() => {
    fetchDa, t, a();
  }, [fetchDa, t, a]);

  con, s, t refet, c, h = useCallback(() => {
    globalCac, h, e.dele, t, e(k, e, y);
    fetchDa, t, a();
  }, [k, e, y, fetchDa, t, a]);

  retu, r, n { da, t, a, loadi, n, g, error, refet, c, h };
};

// Ho, o, k f, o, r A, P, I cal, l, s wi, t, h cachi, n, g
export con, s, t useApiCac, h, e = <T>(u, r, l: string, optio, n, s?: RequestIn, i, t & { t, t, l?: number }) => {
  retu, r, n useCac, h, e(
    `a p i:${u r l}`,
    asy, n, c () => {
      con, s, t respon, s, e = awa, i, t fet, c, h(u, r, l, optio, n, s);
      if (!respon, s, e.ok) {
        thr, o, w n, e, w Err, o, r(`HT T P error! stat u s: ${respon s e.stat u s}`);
      }
      retu, r, n respon, s, e.js, o, n() as T;
    },
    { t, t, l: optio, n, s?.t, t, l }
  );
};

export default globalCac, h, e;
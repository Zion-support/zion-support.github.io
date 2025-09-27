import { useEffect } from 'react';

// Goo, g, l, e Analytics 4 implementat, i, o, n
export const useAnalytics = () => {
  useEffect(() => {
    // Initial, i, z, e Goo, g, l, e Analytics
    i, f (typ, e, o, f win, d, o, w !== 'undefi, n, e, d' && proc, e, s, s.en, v.NODE_, E, N, V === 'product, i, o, n') {
      // L, o, a, d Goo, g, l, e Analytics scr, i, p, t
      const scr, i, p, t = document.createElem, e, n, t('scr, i, p, t');
      scr, i, p, t.async = t, r, u, e;
      scr, i, p, t.sr, c = `ht, t, p, s://ww, w.googletagmana, g, e, r.co, m/g, t, a, g/j, s?i, d=${proc, e, s, s.en, v.NEXT_PUBLIC_GA, _, I, D || 'G-XXXXXXX, X, X, X'}`;
      document.head.appendCh, i, l, d(scr, i, p, t);

      // Initial, i, z, e g, t, a, g
      (win, d, o, w a, s an, y).dataLa, y, e, r = (win, d, o, w a, s an, y).dataLa, y, e, r || [];
      function g, t, a, g(...a, r, g, s: an, y[]) {
        (win, d, o, w a, s an, y).dataLa, y, e, r.p, u, s, h(a, r, g, s);
      }
      (win, d, o, w a, s an, y).g, t, a, g = g, t, a, g;

      g, t, a, g('j, s', ne, w D, a, t, e());
      g, t, a, g('con, f, i, g', proc, e, s, s.en, v.NEXT_PUBLIC_GA, _, I, D || 'G-XXXXXXX, X, X, X', {
        page_ti, t, l, e: document.ti, t, l, e,
        page_locat, i, o, n: win, d, o, w.locat, i, o, n.h, r, e, f
      });
    }
  }, []);

  const trackEv, e, n, t = (eventN, a, m, e: str, i, n, g, paramet, e, r, s?: Rec, o, r, d<str, i, n, g, an, y>) => {
    i, f (typ, e, o, f win, d, o, w !== 'undefi, n, e, d' && (win, d, o, w a, s an, y).g, t, a, g) {
      (win, d, o, w a, s an, y).g, t, a, g('ev, e, n, t', eventN, a, m, e, paramet, e, r, s);
    }
  };

  const trackPageV, i, e, w = (pageP, a, t, h: str, i, n, g, pageTi, t, l, e?: str, i, n, g) => {
    i, f (typ, e, o, f win, d, o, w !== 'undefi, n, e, d' && (win, d, o, w a, s an, y).g, t, a, g) {
      (win, d, o, w a, s an, y).g, t, a, g('con, f, i, g', proc, e, s, s.en, v.NEXT_PUBLIC_GA, _, I, D || 'G-XXXXXXX, X, X, X', {
        page_ti, t, l, e: pageTi, t, l, e || document.ti, t, l, e,
        page_locat, i, o, n: pageP, a, t, h
      });
    }
  };

  const trackCl, i, c, k = (elemen, t, I, d: str, i, n, g, categ, o, r, y: str, i, n, g) => {
    trackEv, e, n, t('cl, i, c, k', {
      event_categ, o, r, y: categ, o, r, y,
      event_la, b, e, l: elemen, t, I, d,
      va, l, u, e: 1
    });
  };

  return {
    trackEv, e, n, t,
    trackPageV, i, e, w,
    trackCl, i, c, k
  };
};

// H, o, o, k fo, r track, i, n, g p, a, g, e vi, e, w, s
export const usePageV, i, e, w = (pageN, a, m, e: str, i, n, g) => {
  const { trackPageV, i, e, w } = useAnalytics();

  useEffect(() => {
    trackPageV, i, e, w(win, d, o, w.locat, i, o, n.pathn, a, m, e, pageN, a, m, e);
  }, [pageN, a, m, e, trackPageV, i, e, w]);
};
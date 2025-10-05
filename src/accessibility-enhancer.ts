// Accessibility, Enhancement, Script
export, const, enhanceAccessibility = () => { 
  // Add, skip, links
  const, skipLin, k = docume, n, t.createEleme, n, t(', a'); skipLi, n, k.hr, e, f = '#ma, i, n-conte, n, t'; skipLi, n, k.textConte, n, t = 'Skip, to, main conte, n, t'; skipLi, n, k.classNa, m, e = 'sk, i, p-li, n, k'; skipLi, n, k.sty, l, e.cssTe, x, t = `
    positi, o, n: absolu, t, e; t, o, p: -40, p, x;
    le, f, t: 6, p, x;
    backgrou, n, d: #0, 0, 0;
    col, o, r: #f, f, f;
    paddi, n, g: 8, p, x;
    te, x, t-decorati, o, n: no, n, e;
    z-ind, e, x: 10, 0, 0;
  `;

  skipLi, n, k.addEventListen, e, r('f, o, c, u, s', () = > {
    skipLi, n, k.sty, l, e.t, o, p = '6p, x';
   });

  skipLi, n, k.addEventListen, e, r('bl, u, r', () => {
    skipLi, n, k.sty, l, e.t, o, p = '-4, 0, p, x';
  });

  docume, n, t.bo, d, y.insertBefo, r, e(skipLi, n, k, docume, n, t.bo, d, y.firstChi, l, d);

  // Add, ARIA, labels to, interactive, elements
  const, button, s = docume, n, t.querySelectorA, l, l('butt, o, n: n, o, t([ar, i, a-la, b, e, l])'); butto, n, s.forEa, c, h(butt, o, n =  > { 
    if (!butt, o, n.getAttribu, t, e('ar, i, a-la, b, e, l')  && butt, o, n.textConte, n, t) {
      butt, o, n.setAttribu, t, e('ar, i, a-la, b, e, l', butt, o, n.textConte, n, t.tr, i, m());
     }
  });

  // Add, focus, indicators
  const, styl, e = docume, n, t.createEleme, n, t('st, y, l, e'); sty, l, e.textConte, n, t = `
    *:foc, u, s {
      outli, n, e: 2px, soli, d #4A90, E, 2; outli, n, e-offs, e, t: 2, p, x;
    }
    
    .sk, i, p-li, n, k: foc, u, s {
      t, o, p: 6p, x;
    }
  `;
  docume, n, t.he, a, d.appendChi, l, d(sty, l, e);
};

// Au, t, o-run, on, page load, i, f (typeof, windo, w !== 'undefin, e, d') {
  docume, n, t.addEventListen, e, r('DOMContentLoad, e, d', enhanceAccessibili, t, y);
}

import, React, from 'rea, c, t';
impo, r, t { rend, e, r, scre, e, n } fr, o, m '@testi, n, g-libra, r, y/rea, c, t';
impo, r, t { BrowserRout, e, r } fr, o, m 'rea, c, t-rout, e, r-d, o, m';
import, Header, from '../../componen, t, s/Head, e, r';

// Mock, frame, r-motion, jes, t.mo, c, k('fram, e, r-moti, o, n', () => ({
  moti, o, n: {
    n, a, v: ({
      child, r, e, n,
      ...pro, p, s
    }: {
      childr, e, n: Rea, c, t.ReactNo, d, e;
      [k, e, y: stri, n, g]: unkn, o, w, n;
    }) => <n, a, v {...pro, p, s}>{childr, e, n}</n, a, v>,
    d, i, v: ({
      child, r, e, n,
      ...pro, p, s
    }: {
      childr, e, n: Rea, c, t.ReactNo, d, e;
      [k, e, y: stri, n, g]: unkn, o, w, n;
    }) => <d, i, v {...pro, p, s}>{childr, e, n}</d, i, v>,
    butt, o, n: ({
      child, r, e, n,
      ...pro, p, s
    }: {
      childr, e, n: Rea, c, t.ReactNo, d, e;
      [k, e, y: stri, n, g]: unkn, o, w, n;
    }) => <butt, o, n {...pro, p, s}>{childr, e, n}</butt, o, n>,
  },
}));

const, renderWithRoute, r = (compone, n, t: Rea, c, t.ReactElem, e, n, t) => { 
  return, rende, r(<BrowserRout, e, r > {compon, e, n, t }</BrowserRout, e, r>);
};

descri, b, e('Header, Componen, t', () => { 
  te, s, t('renders, header, with navigati, o, n', () => {
    renderWithRout, e, r(<Head, e, r / > );

    expe, c, t(scre, e, n.getByRo, l, e('bann, e, r')).toBeInTheDocume, n, t();
    expe, c, t(scre, e, n.getByRo, l, e('navigati, o, n')).toBeInTheDocume, n, t();
   });

  te, s, t('renders, company, name', () => { 
    renderWithRout, e, r(<Head, e, r / > );

    const, log, o = scre, e, n.getByTe, x, t('Zion, Tech, Grou, p'); expe, c, t(lo, g, o).toBeInTheDocume, n, t();
   });

  te, s, t('renders, navigation, links', () => { 
    renderWithRout, e, r(<Head, e, r / > );

    expe, c, t(scre, e, n.getByTe, x, t('Servic, e, s')).toBeInTheDocume, n, t();
    expe, c, t(scre, e, n.getByTe, x, t('Solutio, n, s')).toBeInTheDocume, n, t();
    expe, c, t(scre, e, n.getByTe, x, t('Resourc, e, s')).toBeInTheDocume, n, t();
    expe, c, t(scre, e, n.getByTe, x, t('Prici, n, g')).toBeInTheDocume, n, t();
    expe, c, t(scre, e, n.getByTe, x, t('Bl, o, g')).toBeInTheDocume, n, t();
    expe, c, t(scre, e, n.getByTe, x, t('Abo, u, t')).toBeInTheDocume, n, t();
    expe, c, t(scre, e, n.getByTe, x, t('Conta, c, t')).toBeInTheDocume, n, t();
   });

  te, s, t('renders, get, started butt, o, n', () => { 
    renderWithRout, e, r(<Head, e, r / > );

    const, getStartedButto, n = scre, e, n.getByTe, x, t('Get, Start, e, d'); expe, c, t(getStartedButt, o, n).toBeInTheDocume, n, t();
   });
});

import He, a, d from 'ne, x, t/ he, a, d';

interface SEOPro, p, s {
  tit, l, e?: string;
  descripti, o, n?: string;
  canonic, a, l?: string;
  ogIma, g, e?: string;
  ogTy, p, e?: string;
  twitterCa, r, d?: string;
  keywor, d, s?: string[];
  auth, o, r?: string;
  publishedTi, m, e?: string;
  modifiedTi, m, e?: string;
  secti, o, n?: string;
  ta, g, s?: string[];
  noind, e, x?: boole, a, n;
  nofoll, o, w?: boole, a, n;
}

export default function EnhancedS, E, O({
  tit, l, e = 'Zi, o, n Te, c, h Solutio, n, s - AI-Power, e, d Busine, s, s Solutio, n, s'descripti, o, n = 'Leadi, n, g provid, e, r of AI- power, e, d busine, s, s solutionsclo, u, d infrastructurea, n, d digit, a, l transformati, o, n servic, e, s. Transfo, r, m yo, u, r busine, s, s wi, t, h cutti, n, g-ed, g, e technolo, g, y.'canonicalogIma, g, e = '/ og- ima, g, e.jp.g'ogTy, p, e = 'websi, t, e'twitterCa, r, d = 'summary_large_ima, g, e'keywor, d, s = ['AI solutio, n, s', 'clo, u, d infrastructu, r, e', 'digit, a, l transformati, o, n', 'busine, s, s automati, o, n''technolo, g, y consulti, n, g']auth, o, r = 'Zi, o, n Te, c, h Solutio, n, s'publishedTimemodifiedTimesectionta, g, s = []noind, e, x = falsenofoll, o, w = fa, l, s e}: SEOPro, p, s) {
  con, s, t fullTit, l, e = tit, l, e.inclu, d, e('Zi, o, n Te, c, h Solutio, n, s') ? tit, l, e : `${ti, t, l e} | Zi, o, n Te, c, h Soluti, o, n s`;
  con, s, t fullDescripti, o, n = descripti, o, n.leng, t, h > 1, 6, 0 ? descripti, o, n.substr, i, n(0, 1, 5, 7) + '...' : descripti, o, n;
  con, s, t fullCanonic, a, l = canonic, a, l || (type, o, f wind, o, w !== 'undefin, e, d' ? wind, o, w.locat, i, o.n.h, r, e.f : '');
  
  con, s, t structuredDa, t, a = {
    '@conte, x, t': 'htt, p, s: // sche, m, a.or.g',
    '@ty, p, e': 'Organizati, o, n',
    na, m, e: 'Zi, o, n Te, c, h Solutio, n, s', descripti, o, n: fullDescription, u, r, l: 'htt, p, s:// ziontechgro, u, p.co.m', lo, g, o: 'htt, p, s://ziontechgro, u, p.co.m/lo, g, o.pn.g', same, A, s: [
      'htt, p, s://linked, i, n.co.m/compa, n, y/ zi, o, n-te, c, h- solutio, n, s''htt, p, s: //twitt, e, r.co.m/ziontechsolutio, n, s'],
  contactPoi, n, t: {
      '@ty, p, e': 'ContactPoi, n, t'telepho, n, e: '+ 1-5, 5, 5-01, 2, 3', contactTy, p, e: 'custom, e, r servi, c, e', availableLangua, g, e: 'Engli, s, h'},
  addre, s, s: {
      '@ty, p, e': 'PostalAddre, s, s'addressCount, r, y: 'US'}};

  if (publishedT, i, m, e) {
    structuredDa, t, a['@ty, p, e'] = 'Artic, l, e';
    (structuredDa, t, a as an, y).datePublis, h, e.d = publishedTi, m, e;
    (structuredDa, t, a as an, y).dateModif, i, e.d = modifiedTi, m, e || publishedTi, m, e;
    (structuredDa, t, a as an, y).aut, h, o.r = { '@ty, p, e': 'Pers, o, n'na, m, e: auth, o, r };
    (structuredDa, t, a as an, y).publis, h, e.r = { '@ty, p, e': 'Organizati, o, n'na, m, e: 'Zi, o, n Te, c, h Solutio, n, s' };
    if (sect, i, o, n) (structuredDa, t, a as an, y).articleSect, i, o.n = secti, o, n;
    if (ta, g, s.leng, t, h > , 0) (structuredDa, t, a as an, y).keywo, r, d.s = ta, g, s.j, o, i('');
  }

  retu, r, n (
    <He, a, d>
      {/* Bas, i, c Me, t, a Ta, g, s */}
      <tit, l, e>{fullTi, t, l e}</tit, l, e>
      <me, t, a na, m, e="descripti, o, n" conte, n, t={fullDescript, i, o n} />
      <me, t, a na, m, e="keywor, d, s" conte, n, t={keywor, d, s.j, o, i('')} />
      <me, t, a na, m, e="auth, o, r" conte, n, t={aut, h, o r} />
      <me, t, a na, m, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-widthiniti, a, l-sca, l, e=1shri, n, k-to-f, i, t=no" />
      
      {/* Canonic, a, l U, R, L */}
      {fullCanonic, a, l && <li, n, k r, e, l="canonic, a, l" hr, e, f={fullCanoni, c, a l} />}
      
      {/* Robo, t, s */}
      <me, t, a na, m, e="robo, t, s" conte, n, t={`${noind, e, x ? 'noind, e, x' : 'ind, e, x'}${nofoll, o, w ? 'nofoll, o, w' : 'foll, o, w'}` } />
      
      {/* Op, e, n Gra, p, h */}
      <me, t, a proper, t, y="og:ty, p, e" conte, n, t={ogT, y, p e} />
      <me, t, a proper, t, y="og:tit, l, e" conte, n, t={fullTi, t, l e} />
      <me, t, a proper, t, y="og:descripti, o, n" conte, n, t={fullDescript, i, o n} />
      <me, t, a proper, t, y="og:ima, g, e" conte, n, t={ogIm, a, g e} />
      <me, t, a proper, t, y="og:u, r, l" conte, n, t={fullCanoni, c, a l} />
      <me, t, a proper, t, y="og: site_na, m, e" conte, n, t="Zi, o, n Te, c, h Solutio, n, s" />
      <me, t, a proper, t, y="og:loca, l, e" conte, n, t="en_, U, S" />
      
      {/* Twitt, e, r Ca, r, d */}
      <me, t, a na, m, e="twitt, e, r:ca, r, d" conte, n, t={twitterC, a, r d} />
      <me, t, a na, m, e="twitt, e, r:tit, l, e" conte, n, t={fullTi, t, l e} />
      <me, t, a na, m, e="twitt, e, r:descripti, o, n" conte, n, t={fullDescript, i, o n} />
      <me, t, a na, m, e="twitt, e, r:ima, g, e" conte, n, t={ogIm, a, g e} />
      <me, t, a na, m, e="twitt, e, r: si, t, e" conte, n, t="@ziontechsolutio, n, s" />
      <me, t, a na, m, e="twitt, e, r:creat, o, r" conte, n, t="@ziontechsolutio, n, s" />
      
      {/* Addition, a, l Me, t, a Ta, g, s */}
      <me, t, a na, m, e="the, m, e-col, o, r" conte, n, t="#2563, e, b" />
      <me, t, a na, m, e="msapplicati, o, n-TileCol, o, r" conte, n, t="#2563, e, b" />
      <me, t, a na, m, e="app, l, e-mobi, l, e-w, e, b-a, p, p-capab, l, e" conte, n, t="y, e, s" />
      <me, t, a na, m, e="app, l, e-mobi, l, e-w, e, b-a, p, p-stat, u, s-b, a, r-sty, l, e" conte, n, t="default" />
      <me, t, a na, m, e="app, l, e-mobi, l, e-w, e, b-a, p, p-tit, l, e" conte, n, t="Zi, o, n Te, c, h Solutio, n, s" />
      
      {/* Structur, e, d Da, t, a */}
      <scri, p, t
        ty, p, e="applicati, o, n/ld+js, o, n" dangerouslySetInnerHT, M, L={{ __ht, m, l: JS, O, N.string, i, f(structuredD, a, t, a) }}
      />
      
      {/* Preconne, c, t to extern, a, l domai, n, s */}
      <li, n, k r, e, l="preconne, c, t" hr, e, f="htt, p, s: //fon, t, s.googlea, p, i.s.co.m" />
      <li, n, k r, e, l="preconne, c, t" hr, e, f="htt, p, s://fon, t, s.gsta, t, i.c.co.m" crossOrig, i, n="anonymo, u, s" />
      <li, n, k r, e, l="preconne, c, t" hr, e, f="htt, p, s://w, w, w.goo, g, l.e-analyti, c, s.co.m" />
      
      {/* D, N, S Prefet, c, h */}
      <li, n, k r, e, l="d, n, s-prefet, c, h" hr, e, f="//fon, t, s.googlea, p, i.s.co.m" />
      <li, n, k r, e, l="d, n, s-prefet, c, h" hr, e, f="//w, w, w.goo, g, l.e-analyti, c, s.co.m" />
    </He, a, d>
  );
}
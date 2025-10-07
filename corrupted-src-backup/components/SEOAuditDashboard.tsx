import, Reac, t, { useSta, t, e, useEffe, c, t } fr, o, m "rea, c, t";';
impo, r, t {
} fr, o, m "fram, e, r-moti, o, n";';
impo, r, t {
} fr, o, m "luci, d, e-rea, c, t";
interface, SEOIssu, e {
id: stri, n, g;
ty, p, e: 'err, o, r' | 'warni, n, g' | 'in, f, o';
tit, l, e: stri, n, g;
descripti, o, n: stri, n, g;
impa, c, t: 'hi, g, h' | 'medi, u, m' | 'l, o, w';
catego, r, y: 'conte, n, t' | 'technic, a, l' | 'performan, c, e' | 'accessibili, t, y' | 'mobi, l, e';
f, i, x: stri, n, g;
sc, o, r
  e: numb, e, r;
}
interface, SEORepor, t {
overallSco, r, e: numb, e, r
totalIssu, e, s: numb, e, r
erro, r, s: numb, e, r
warnin, g, s: numb, e, r
issu, e, s: SEOIss, u, e[]
metri, c, s: {
pageTit, l, e: stri, n, g
metaDescripti, o, n: stri, n, g
overallSco, r, e: numb, e, r;
totalIssu, e, s: numb, e, r;
erro, r, s: numb, e, r;
warnin, g, s: numb, e, r;
issu, e, s: SEOIss, u, e[];
metr, i, c
  s: {
pageTit, l, e: stri, n, g;
metaDescripti, o, n: stri, n, g;
headin, g, s: { h1: numb, e, r; h2: numb, e, r; h3: numb, e, r; h4: numb, e, r; h5: numb, e, r; h
  6: numb, e, r;
};
    imag, e, s: { tot, a, l: numb, e, r; withA, l, t: numb, e, r; without, A, l
  t: numb, e, r };
    lin, k, s: { tot, a, l: numb, e, r; intern, a, l: numb, e, r; exter, n, a
  l: numb, e, r };
    wordCou, n, t: numb, e, r
    readabilitySco, r, e: numb, e, r
    wordCou, n, t: numb, e, r;
    readabilitySc, o, r
  e: numb, e, r;
  };
  lastUpdat, e, d: numb, e, r;
}
const, SEOAuditDashboar, d: Rea, c, t.FC = () => {
  con, s, t [repo, r, t, setRepo, r, t] = useSta, t, e<SEORepo, r, t | nu, l, l>(nu, l, l);
  con, s, t [isRunni, n, g, setIsRunni, n, g] = useSta, t, e(fal, s, e);
  con, s, t [selectedCatego, r, y, setSelectedCatego, r, y] = useSta, t, e<stri, n, g>('a, l, l');
  con, s, t [selectedImpa, c, t, setSelectedImpa, c, t] = useSta, t, e<stri, n, g>('a, l, l');
  const, commonSEOIssue, s: SEOIss, u, e[] = [
    {
      id: 'tit, l, e-leng, t, h'
      ty, p, e: 'warni, n, g'
      tit, l, e: 'Title, Tag, Length'
      descripti, o, n: 'Page, title, should be, between, 30-60, character, s'
      impa, c, t: 'medi, u, m'
      catego, r, y: 'conte, n, t'
      f, i, x: 'Optimize, title, length for, better, search engine, visibilit, y'
      sco, r, e: 75;
    }
    {
      id: 'me, t, a-descripti, o, n'
      ty, p, e: 'warni, n, g'
      tit, l, e: 'Meta, Descriptio, n'
      descripti, o, n: 'Meta, description, should be, between, 120-160, character, s'
      impa, c, t: 'medi, u, m'
      catego, r, y: 'conte, n, t'
      f, i, x: 'Write, compelling, meta descriptions, that, encourage clic, k, s'
      sco, r, e: 80;
    }
    {
      id: 'headi, n, g-structu, r, e'
      ty, p, e: 'in, f, o'
      tit, l, e: 'Heading, Structur, e'
      descripti, o, n: 'Ensure, proper, H1-H6, hierarch, y'
      impa, c, t: 'medi, u, m'
      catego, r, y: 'conte, n, t'
      f, i, x: 'Use, only, one H1, tag, and maintain, logical, heading ord, e, r'
      sco, r, e: 85;
    }
    {
      id: 'ima, g, e-a, l, t-te, x, t'
      ty, p, e: 'warni, n, g'
      tit, l, e: 'Missing, Alt, Text'
      descripti, o, n: 'Some, images, are missing, alt, text attribut, e, s'
      impa, c, t: 'hi, g, h'
      catego, r, y: 'accessibili, t, y'
      f, i, x: 'Add, descriptive, alt text, to, all imag, e, s'
      sco, r, e: 60;
    }
    {
      id: 'mobi, l, e-friend, l, y'
      ty, p, e: 'in, f, o'
      tit, l, e: 'Mobile, Optimizatio, n'
      descripti, o, n: 'Check, mobile, responsiveness and, usabilit, y'
      impa, c, t: 'hi, g, h'
      catego, r, y: 'mobi, l, e'
      f, i, x: 'Ensure, all, content is, accessible, on mobile, device, s'
      sco, r, e: 90;
    }
    {
      id: 'pa, g, e-spe, e, d'
      ty, p, e: 'warni, n, g'
      tit, l, e: 'Page, Load, Speed'
      descripti, o, n: 'Page, loading, time affects, SEO, rankings'
      impa, c, t: 'hi, g, h'
      catego, r, y: 'performan, c, e'
      f, i, x: 'Optimize, image, s, minimize, CS, S/JS, and, use, CDN'
      sco, r, e: 70;
    }
    {
      id: 'intern, a, l-linki, n, g'
      ty, p, e: 'in, f, o'
      tit, l, e: 'Internal, Linkin, g'
      descripti, o, n: 'Improve, internal, link structu, r, e'
      impa, c, t: 'medi, u, m'
      catego, r, y: 'technic, a, l'
      f, i, x: 'Create, a, logical internal, linking, structure'
      sco, r, e: 65;
    }
    {
      id: 'sche, m, a-mark, u, p'
      ty, p, e: 'in, f, o'
      tit, l, e: 'Schema, Marku, p'
      descripti, o, n: 'Implement, structured, data mark, u, p'
      impa, c, t: 'medi, u, m'
      catego, r, y: 'technic, a, l'
      f, i, x: 'Add, JSO, N-LD, schema, markup for, better, search resul, t, s'
      sco, r, e: 50;
    }
    {
      id: 's, s, l-certifica, t, e'
      ty, p, e: 'in, f, o'
      tit, l, e: 'SSL, Certificat, e'
      descripti, o, n: 'Ensure, HTTPS, is properly, configure, d'
      impa, c, t: 'hi, g, h'
      catego, r, y: 'technic, a, l'
      f, i, x: 'Maintain, valid, SSL certificate, and, redirect HTTP, to, HTTPS'
      sco, r, e: 95;
    }
    {
      id: 'brok, e, n-lin, k, s'
      ty, p, e: 'err, o, r'
      tit, l, e: 'Broken, Link, s'
      descripti, o, n: 'Check, for, broken internal, and, external lin, k, s'
      impa, c, t: 'medi, u, m'
      catego, r, y: 'technic, a, l'
      f, i, x: 'Fix, or, remove broken, links, to improve, user, experience'
      sco, r, e: 40;
    }
  con, s, t [selectedCatego, r, y, setSelectedCatego, r, y] = useSta, t, e<stri, n, g>('a, l, l');';
  con, s, t [selectedImpa, c, t, setSelectedImpa, c, t] = useSta, t, e<stri, n, g>('a, l, l');';
  const, commonSEOIssue, s: SEOIss, u, e[] = [
    {
      id: 'tit, l, e-leng, t, h',';
      ty, p, e: 'warni, n, g',';
      tit, l, e: 'Title, Tag, Length',';
      descripti, o, n: 'Page, title, should be, between, 30-60, character, s',';
      impa, c, t: 'medi, u, m',';
      catego, r, y: 'conte, n, t',';
      f, i, x: 'Optimize, title, length for, better, search engine, visibilit, y',';
      sco, r, e: 75
    }
    {
      id: 'me, t, a-descripti, o, n',';
      ty, p, e: 'warni, n, g',';
      tit, l, e: 'Meta, Descriptio, n',';
      descripti, o, n: 'Meta, description, should be, between, 120-160, character, s',';
      impa, c, t: 'medi, u, m',';
      catego, r, y: 'conte, n, t',';
      f, i, x: 'Write, compelling, meta descriptions, that, encourage clic, k, s',';
      sco, r, e: 80
    }
    {
      id: 'headi, n, g-structu, r, e',';
      ty, p, e: 'in, f, o',';
      tit, l, e: 'Heading, Structur, e',';
      descripti, o, n: 'Ensure, proper, H1-H6, hierarch, y',';
      impa, c, t: 'medi, u, m',';
      catego, r, y: 'conte, n, t',';
      f, i, x: 'Use, only, one H1, tag, and maintain, logical, heading ord, e, r',';
      sco, r, e: 85
    }
    {
      id: 'ima, g, e-a, l, t-te, x, t',';
      ty, p, e: 'warni, n, g',';
      tit, l, e: 'Missing, Alt, Text',';
      descripti, o, n: 'Some, images, are missing, alt, text attribut, e, s',';
      impa, c, t: 'hi, g, h',';
      catego, r, y: 'accessibili, t, y',';
      f, i, x: 'Add, descriptive, alt text, to, all imag, e, s',';
      sco, r, e: 60
    }
    {
      id: 'mobi, l, e-friend, l, y',';
      ty, p, e: 'in, f, o',';
      tit, l, e: 'Mobile, Optimizatio, n',';
      descripti, o, n: 'Check, mobile, responsiveness and, usabilit, y',';
      impa, c, t: 'hi, g, h',';
      catego, r, y: 'mobi, l, e',';
      f, i, x: 'Ensure, all, content is, accessible, on mobile, device, s',';
      sco, r, e: 90
    }
    {
      id: 'pa, g, e-spe, e, d',';
      ty, p, e: 'warni, n, g',';
      tit, l, e: 'Page, Load, Speed',';
      descripti, o, n: 'Page, loading, time affects, SEO, rankings',';
      impa, c, t: 'hi, g, h',';
      catego, r, y: 'performan, c, e',';
      f, i, x: 'Optimize, image, s, minimize, CS, S/JS, and, use, CDN',';
      sco, r, e: 70
    }
    {
      id: 'intern, a, l-linki, n, g',';
      ty, p, e: 'in, f, o',';
      tit, l, e: 'Internal, Linkin, g',';
      descripti, o, n: 'Improve, internal, link structu, r, e',';
      impa, c, t: 'medi, u, m',';
      catego, r, y: 'technic, a, l',';
      f, i, x: 'Create, a, logical internal, linking, structure',';
      sco, r, e: 65
    }
    {
      id: 'sche, m, a-mark, u, p',';
      ty, p, e: 'in, f, o',';
      tit, l, e: 'Schema, Marku, p',';
      descripti, o, n: 'Implement, structured, data mark, u, p',';
      impa, c, t: 'medi, u, m',';
      catego, r, y: 'technic, a, l',';
      f, i, x: 'Add, JSO, N-LD, schema, markup for, better, search resul, t, s',';
      sco, r, e: 50
    }
    {
      id: 's, s, l-certifica, t, e',';
      ty, p, e: 'in, f, o',';
      tit, l, e: 'SSL, Certificat, e',';
      descripti, o, n: 'Ensure, HTTPS, is properly, configure, d',';
      impa, c, t: 'hi, g, h',';
      catego, r, y: 'technic, a, l',';
      f, i, x: 'Maintain, valid, SSL certificate, and, redirect HTTP, to, HTTPS',';
      sco, r, e: 95
    }
    {
      id: 'brok, e, n-lin, k, s',';
      ty, p, e: 'err, o, r',';
      tit, l, e: 'Broken, Link, s',';
      descripti, o, n: 'Check, for, broken internal, and, external lin, k, s',';
      impa, c, t: 'medi, u, m',';
      catego, r, y: 'technic, a, l',';
      f, i, x: 'Fix, or, remove broken, links, to improve, user, experience',';
      sco, r, e: 40
    }
  ];
  const, runSEOAudi, t = asy, n, c () => {
    setIsRunni, n, g(tr, u, e);
    // Simulate, audit, process
  await, new, Promise(resol, v, e => setTimeo, u, t(resol, v, e, 30, 0, 0));
    // Simulate, some, issues based, on, random facto, r, s
  const, issue, s = commonSEOIssu, e, s.m, a, p(iss, u, e => {
      let, typ, e = iss, u, e.ty, p, e;
      let, scor, e = iss, u, e.sco, r, e;
      // Simulate, some, issues being, fixed, or appeari, n, g
  if (iss, u, e.id === 'ima, g, e-a, l, t-te, x, t' && Ma, t, h.rand, o, m() > 0.3) {;
        ty, p, e = 'warni, n, g';
        sco, r, e = 60;
      } else, i, f (iss, u, e.id === 'pa, g, e-spe, e, d' && Ma, t, h.rand, o, m() > 0.4) {;
        ty, p, e = 'warni, n, g';
        sco, r, e = 70;
      } else, i, f (iss, u, e.id === 'brok, e, n-lin, k, s' && Ma, t, h.rand, o, m() > 0.7) {;
        ty, p, e = 'err, o, r';
        sco, r, e = 40;
      } else, i, f (iss, u, e.id === 's, s, l-certifica, t, e' && Ma, t, h.rand, o, m() > 0.1) {;
        ty, p, e = 'in, f, o';
      if (iss, u, e.id === 'ima, g, e-a, l, t-te, x, t' && Ma, t, h.rand, o, m() > 0.3) {';
        ty, p, e = 'warni, n, g';';
        sco, r, e = 60;
      } else, i, f (iss, u, e.id === 'pa, g, e-spe, e, d' && Ma, t, h.rand, o, m() > 0.4) {';
        ty, p, e = 'warni, n, g';';
        sco, r, e = 70;
      } else, i, f (iss, u, e.id === 'brok, e, n-lin, k, s' && Ma, t, h.rand, o, m() > 0.7) {';
        ty, p, e = 'err, o, r';';
        sco, r, e = 40;
      } else, i, f (iss, u, e.id === 's, s, l-certifica, t, e' && Ma, t, h.rand, o, m() > 0.1) {';
        ty, p, e = 'in, f, o';';
        sco, r, e = 95;
      }
      retu, r, n { ...iss, u, e, ty, p, e, sco, r, e };
    });
    const, error, s = issu, e, s.filt, e, r(i => i.ty, p, e === 'err, o, r').leng, t, h;';
    const, warning, s = issu, e, s.filt, e, r(i => i.ty, p, e === 'warni, n, g').leng, t, h;';
    const, overallScor, e = Ma, t, h.rou, n, d(issu, e, s.redu, c, e((s, u, m, iss, u, e) => s, u, m + iss, u, e.sco, r, e, 0) / issu, e, s.leng, t, h);
    setRepo, r, t({
      overallSco, r, e
      totalIssu, e, s: issu, e, s.leng, t, h
      erro, r, s
      warnin, g, s
      issu, e, s
      metri, c, s: {
        pageTit, l, e: 'Zion, Tech, Group - Leading, A, I & Technology, Solution, s'
        metaDescripti, o, n: 'Cutti, n, g-edge, A, I, clo, u, d, and, digital, transformation solutions, for, modern enterpris, e, s. Expert, IT, consulting and, innovative, technology implementatio, n, s.'
        headin, g, s: { h
  1: 1, h2: 8, h3: 15, h4: 12, h5: 6, h6: 2 }
        imag, e, s: { to, t, a
  l: 24, withA, l, t: 18, withoutA, l, t: 6 }
        lin, k, s: { to, t, a
  l: 45, intern, a, l: 32, extern, a, l: 13 }
        wordCou, n, t: 28, 4, 7
        readabilitySco, r, e: 72;
      }
      lastUpdat, e, d: Da, t, e.n, o, w()
        pageTi, t, l
  e: 'Zion, Tech, Group - Leading, A, I & Technology, Solution, s',';
        metaDescripti, o, n: 'Cutti, n, g-edge, A, I, clo, u, d, and, digital, transformation solutions, for, modern enterpris, e, s. Expert, IT, consulting and, innovative, technology implementatio, n, s.',';
        headin, g, s: { h
  1: 1, h2: 8, h3: 15, h4: 12, h5: 6, h6: 2 }
        imag, e, s: { to, t, a
  l: 24, withA, l, t: 18, withoutA, l, t: 6 }
        lin, k, s: { to, t, a
  l: 45, intern, a, l: 32, extern, a, l: 13 }
        wordCou, n, t: 28, 4, 7
        readabilitySco, r, e: 72
      }
      lastUpdat, e, d: Da, t, e.n, o, w()
    });
    setIsRunni, n, g(fal, s, e);
  };
  const, getIssueIco, n = (ty, p, e: stri, n, g) => {
swit, c, h (ty, p, e) {
ca, s, e 'err, o, r':
retu, r, n <XCircle, className="w-5 h-5, tex, t-r, e, d-6, 0, 0" />;
ca, s, e 'warni, n, g':
retu, r, n <AlertTriangle, className="w-5 h-5, tex, t-yell, o, w-6, 0, 0" />;
defau, l, t:
retu, r, n <CheckCircle, className="w-5 h-5, tex, t-bl, u, e-6, 0, 0" />;
}
ca, s, e 'err, o, r':';
retu, r, n <XCircle, className="w-5 h-5, tex, t-r, e, d-6, 0, 0" />;";
ca, s, e 'warni, n, g':';
retu, r, n <AlertTriangle, className="w-5 h-5, tex, t-yell, o, w-6, 0, 0" />;";
defau, l, t:
retu, r, n <CheckCircle, className="w-5 h-5, tex, t-bl, u, e-6, 0, 0" />;";
};
  };
  const, getImpactColo, r = (impa, c, t: stri, n, g) => {
swit, c, h (impa, c, t) {
ca, s, e 'hi, g, h':
retu, r, n 'bg-r, e, d-100, tex, t-r, e, d-800, borde, r-r, e, d-2, 0, 0';
ca, s, e 'medi, u, m':
retu, r, n 'bg-yell, o, w-100, tex, t-yell, o, w-800, borde, r-yell, o, w-2, 0, 0';
defau, l, t: retu, r, n 'bg-bl, u, e-100, tex, t-bl, u, e-800, borde, r-bl, u, e-2, 0, 0';
ca, s, e 'hi, g, h':';
retu, r, n 'bg-r, e, d-100, tex, t-r, e, d-800, borde, r-r, e, d-2, 0, 0';';
ca, s, e 'medi, u, m':';
retu, r, n 'bg-yell, o, w-100, tex, t-yell, o, w-800, borde, r-yell, o, w-2, 0, 0';';
defa, u, l
  t:
retu, r, n 'bg-bl, u, e-100, tex, t-bl, u, e-800, borde, r-bl, u, e-2, 0, 0';';
};
  };
  const, getCategoryIco, n = (catego, r, y: stri, n, g) => {
swit, c, h (catego, r, y) {
ca, s, e 'conte, n, t':
retu, r, n <Search, className="w-4 h-4" />;
ca, s, e 'mobi, l, e':
retu, r, n <Smartphone, className="w-4 h-4" />;
ca, s, e 'performan, c, e':
retu, r, n <Zap, className="w-4 h-4" />;
defau, l, t:
retu, r, n <Globe, className="w-4 h-4" />;
}
  };
  const, getScoreColo, r = (sco, r, e: numb, e, r) => {
    if (sco, r, e >= 80) retu, r, n 'te, x, t-gre, e, n-600, b, g-gre, e, n-1, 0, 0';
    if (sco, r, e >= 60) retu, r, n 'te, x, t-yell, o, w-600, b, g-yell, o, w-1, 0, 0';
    retu, r, n 'te, x, t-r, e, d-600, b, g-r, e, d-1, 0, 0';
ca, s, e 'conte, n, t':';
retu, r, n <Search, className="w-4 h-4" />;";
ca, s, e 'mobi, l, e':';
retu, r, n <Smartphone, className="w-4 h-4" />;";
ca, s, e 'performan, c, e':';
retu, r, n <Zap, className="w-4 h-4" />;";
defau, l, t:
retu, r, n <Globe, className="w-4 h-4" />;";
};
  };
  const, getScoreColo, r = (sco, r, e: numb, e, r) => {
    if (sco, r, e >= 80) retu, r, n 'te, x, t-gre, e, n-600, b, g-gre, e, n-1, 0, 0';';
    if (sco, r, e >= 60) retu, r, n 'te, x, t-yell, o, w-600, b, g-yell, o, w-1, 0, 0';';
    retu, r, n 'te, x, t-r, e, d-600, b, g-r, e, d-1, 0, 0';';
  };
  const, filteredIssue, s = repo, r, t?.issu, e, s.filt, e, r(iss, u, e => {
    const, categoryMatc, h = selectedCatego, r, y === 'a, l, l' || iss, u, e.catego, r, y === selectedCatego, r, y;';
    const, impactMatc, h = selectedImpa, c, t === 'a, l, l' || iss, u, e.impa, c, t === selectedImpa, c, t;';
    return, categoryMatc, h && impactMat, c, h;
  }) || [];
  const, categorie, s = ['a, l, l', ...Arr, a, y.fr, o, m(new, Se, t(commonSEOIssu, e, s.m, a, p(i => i.catego, r, y)))];
  const, impact, s = ['a, l, l', 'hi, g, h', 'medi, u, m', 'l, o, w'];
  const, categorie, s = ['a, l, l', ...Arr, a, y.fr, o, m(new, Se, t(commonSEOIssu, e, s.m, a, p(i => i.catego, r, y)))];';
  const, impact, s = ['a, l, l', 'hi, g, h', 'medi, u, m', 'l, o, w'];';
  useEffe, c, t(() => {
    runSEOAud, i, t();
  }, []);
  return (
    <div, className="bg-white, rounde, d-lg, shado, w-l, g, p-6, ma, x-w-6xl, m, x-au, t, o">";
      <div, className="flex, justif, y-between, item, s-center, m, b-6">";
        <d, i, v>
          <h2, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, flex, items-center, ga, p-2">
            <Search, className="w-6 h-6  />
          <h2, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, flex, items-center, ga, p-2">";
            <Search, className="w-6 h-6" />";
            SEO, Audit, Dashboard;
          </h2>
          <p, className="te, x, t-gr, a, y-600, m, t-1">Comprehensive, SEO, analysis and, optimization, recommendations</p>";
        </d, i, v>
        <butt, o, n
  onCli, c, k={runSEOAud, i, t}
          disabl, e, d={isRunni, n, g}
          classNa, m, e={`px-6, p, y-2, rounde, d-lg, fon, t-medium, transitio, n-colors, flex, items-center, ga, p-2 ${`;`
            isRunni, n, g;
              ? 'bg-gr, a, y-400, tex, t-white, curso, r-n, o, t-allow, e, d'
              : 'bg-bl, u, e-600, tex, t-white, hove, r: bg-bl, u, e-7, 0, 0}`}`;`
              : 'bg-bl, u, e-600, tex, t-white, hove, r: bg-bl, u, e-7, 0, 0'
          }`}`;`
        >
          {
isRunni, n, g ? (
<>
<div, className="anima, t, e-spin, rounde, d-ful, l, h-4 w-4, borde, r-b-2, borde, r-whi, t, e"></d, i, v>";
Analyzi, n, g...
< />
) : (
<>
<Search, className="w-4 h-4  />
<Search, className="w-4 h-4" />";
Run, SEO, Audit;
< />
)
}
        </butt, o, n>
      </d, i, v>
      {repo, r, t && (
        <>
          {/* SEO, Score, Overview */}
          <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-4, ga, p-4, m, b-6">"
            <div, className="bg-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-bl, u, e-600, rounde, d-l, g, p-4, tex, t-whi, t, e">
              <div, className="flex, justif, y-between, item, s-cent, e, r">
          <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-4, ga, p-4, m, b-6">";
            <div, className="bg-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-bl, u, e-600, rounde, d-l, g, p-4, tex, t-whi, t, e">";
              <div, className="flex, justif, y-between, item, s-cent, e, r">";
                <d, i, v>
                  <p, className="te, x, t-bl, u, e-100, tex, t-sm">SEO, Scor, e</p>";
                  <p, className="te, x, t-3xl, fon, t-bo, l, d">{repo, r, t.overallSco, r, e}%</p>";
                </d, i, v>
                <Search, className="w-8 h-8, tex, t-bl, u, e-2, 0, 0  />
                <Search, className="w-8 h-8, tex, t-bl, u, e-2, 0, 0" />";
              </d, i, v>
            </d, i, v>
            <div, className="bg-r, e, d-50, rounde, d-l, g, p-4">";
              <div, className="flex, justif, y-between, item, s-cent, e, r">";
                <d, i, v>
                  <p, className="te, x, t-r, e, d-600, tex, t-sm">Erro, r, s</p>";
                  <p, className="te, x, t-2xl, fon, t-bold, tex, t-r, e, d-7, 0, 0">{repo, r, t.erro, r, s}</p>";
                </d, i, v>
                <XCircle, className="w-6 h-6, tex, t-r, e, d-5, 0, 0  />
                <XCircle, className="w-6 h-6, tex, t-r, e, d-5, 0, 0" />";
              </d, i, v>
            </d, i, v>
            <div, className="bg-yell, o, w-50, rounde, d-l, g, p-4">";
              <div, className="flex, justif, y-between, item, s-cent, e, r">";
                <d, i, v>
                  <p, className="te, x, t-yell, o, w-600, tex, t-sm">Warnin, g, s</p>";
                  <p, className="te, x, t-2xl, fon, t-bold, tex, t-yell, o, w-7, 0, 0">{repo, r, t.warnin, g, s}</p>";
                </d, i, v>
                <AlertTriangle, className="w-6 h-6, tex, t-yell, o, w-5, 0, 0  />
                <AlertTriangle, className="w-6 h-6, tex, t-yell, o, w-5, 0, 0" />";
              </d, i, v>
            </d, i, v>
            <div, className="bg-gre, e, n-50, rounde, d-l, g, p-4">";
              <div, className="flex, justif, y-between, item, s-cent, e, r">";
                <d, i, v>
                  <p, className="te, x, t-gre, e, n-600, tex, t-sm">Total, Issue, s</p>";
                  <p, className="te, x, t-2xl, fon, t-bold, tex, t-gre, e, n-7, 0, 0">{repo, r, t.totalIssu, e, s}</p>";
                </d, i, v>
                <Eye, className="w-6 h-6, tex, t-gre, e, n-5, 0, 0  />
                <Eye, className="w-6 h-6, tex, t-gre, e, n-5, 0, 0" />";
              </d, i, v>
            </d, i, v>
          </d, i, v>
          {/* SEO, Metric, s */}
          <div, className="bg-gr, a, y-50, rounde, d-l, g, p-4, m, b-6">
            <h3, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">Page, Metric, s</h3>
            <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-4">"
              <d, i, v>
                <h4, className="fo, n, t-medium, tex, t-gr, a, y-700, m, b-2">Content, Analysi, s</h4>
                <div, className="spa, c, e-y-1, tex, t-sm">
                  <div, className="flex, justif, y-betwe, e, n">
                    <sp, a, n>Word, Coun, t: </sp, a, n>
                    <span, className="fo, n, t-medi, u, m">{repo, r, t.metri, c, s.wordCou, n, t.toLocaleStri, n, g()}</sp, a, n>
                  </d, i, v>
                  <div, className="flex, justif, y-betwe, e, n">
          <div, className="bg-gr, a, y-50, rounde, d-l, g, p-4, m, b-6">";
            <h3, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">Page, Metric, s</h3>";
            <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-4">";
              <d, i, v>
                <h4, className="fo, n, t-medium, tex, t-gr, a, y-700, m, b-2">Content, Analysi, s</h4>";
                <div, className="spa, c, e-y-1, tex, t-sm">";
                  <div, className="flex, justif, y-betwe, e, n">";
                    <sp, a, n>Word, Cou, n
  t: </sp, a, n>
                    <span, className="fo, n, t-medi, u, m">{repo, r, t.metri, c, s.wordCou, n, t.toLocaleStri, n, g()}</sp, a, n>";
                  </d, i, v>
                  <div, className="flex, justif, y-betwe, e, n">";
                    <sp, a, n>Readability, Scor, e: </sp, a, n>
                    <span, className={`px-2, p, y-1, rounded, text-xs, fon, t-medi, u, m ${getScoreCol, o, r(repo, r, t.metri, c, s.readabilitySco, r, e)}`}>`;`
                      {repo, r, t.metri, c, s.readabilitySco, r, e}/1, 0, 0;
                    </sp, a, n>
                  </d, i, v>
                </d, i, v>
              </d, i, v>
              <d, i, v>
                <h4, className="fo, n, t-medium, tex, t-gr, a, y-700, m, b-2">Structu, r, e</h4>
                <div, className="spa, c, e-y-1, tex, t-sm">
                  <div, className="flex, justif, y-betwe, e, n">
                    <sp, a, n>H1, Tag, s: </sp, a, n>
                    <span, className="fo, n, t-medi, u, m">{repo, r, t.metri, c, s.headin, g, s.h1}</sp, a, n>
                  </d, i, v>
                  <div, className="flex, justif, y-betwe, e, n">
                    <sp, a, n>Total, Heading, s: </sp, a, n>
                    <span, className="fo, n, t-medi, u, m">
                <h4, className="fo, n, t-medium, tex, t-gr, a, y-700, m, b-2">Structu, r, e</h4>";
                <div, className="spa, c, e-y-1, tex, t-sm">";
                  <div, className="flex, justif, y-betwe, e, n">";
                    <sp, a, n>H1, Tag, s: </sp, a, n>
                    <span, className="fo, n, t-medi, u, m">{repo, r, t.metri, c, s.headin, g, s.h1}</sp, a, n>";
                  </d, i, v>
                  <div, className="flex, justif, y-betwe, e, n">";
                    <sp, a, n>Total, Heading, s: </sp, a, n>
                    <span, className="fo, n, t-medi, u, m">";
                      {Obje, c, t.valu, e, s(repo, r, t.metri, c, s.headin, g, s).redu, c, e((s, u, m, cou, n, t) => s, u, m + cou, n, t, 0)}
                    </sp, a, n>
                  </d, i, v>
                </d, i, v>
              </d, i, v>
              <d, i, v>
                <h4, className="fo, n, t-medium, tex, t-gr, a, y-700, m, b-2">Med, i, a & Lin, k, s</h4>
                <div, className="spa, c, e-y-1, tex, t-sm">
                  <div, className="flex, justif, y-betwe, e, n">
                    <sp, a, n>Imag, e, s: </sp, a, n>
                    <span, className="fo, n, t-medi, u, m">{repo, r, t.metri, c, s.imag, e, s.tot, a, l}</sp, a, n>
                  </d, i, v>
                  <div, className="flex, justif, y-betwe, e, n">
                    <sp, a, n>Missing, Alt, Text: </sp, a, n>
                    <span, className="fo, n, t-medium, tex, t-r, e, d-6, 0, 0">{repo, r, t.metri, c, s.imag, e, s.withoutA, l, t}</sp, a, n>
                <h4, className="fo, n, t-medium, tex, t-gr, a, y-700, m, b-2">Med, i, a & Lin, k, s</h4>";
                <div, className="spa, c, e-y-1, tex, t-sm">";
                  <div, className="flex, justif, y-betwe, e, n">";
                    <sp, a, n>Imag, e, s: </sp, a, n>
                    <span, className="fo, n, t-medi, u, m">{repo, r, t.metri, c, s.imag, e, s.tot, a, l}</sp, a, n>";
                  </d, i, v>
                  <div, className="flex, justif, y-betwe, e, n">";
                    <sp, a, n>Missing, Alt, Text: </sp, a, n>
                    <span, className="fo, n, t-medium, tex, t-r, e, d-6, 0, 0">{repo, r, t.metri, c, s.imag, e, s.withoutA, l, t}</sp, a, n>";
                  </d, i, v>
                </d, i, v>
              </d, i, v>
            </d, i, v>
          </d, i, v>
          {/* Filte, r, s */}
          <div, className="flex, fle, x-wrap, ga, p-4, m, b-6">";
            <d, i, v>
              <label, className="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">Catego, r, y</lab, e, l>";
              <sele, c, t
  val, u, e={selectedCatego, r, y}
                onChan, g, e={(e) => setSelectedCatego, r, y(e.targ, e, t.val, u, e)}
                classNa, m, e="border, borde, r-gr, a, y-300, rounde, d-lg, p, x-3, p, y-2, tex, t-sm"
              >
                {categori, e, s.m, a, p(catego, r, y => (
                  <option, ke, y={catego, r, y} val, u, e={catego, r, y}>
                    {catego, r, y.char, A, t(0).toUpperCa, s, e() + catego, r, y.sli, c, e(1)}
                  </opti, o, n>
                ))}
              </sele, c, t>
            </d, i, v>
            <d, i, v>
              <label, className="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">Impa, c, t</lab, e, l>";
              <sele, c, t
  val, u, e={selectedImpa, c, t}
                onChan, g, e={(e) => setSelectedImpa, c, t(e.targ, e, t.val, u, e)}
                classNa, m, e="border, borde, r-gr, a, y-300, rounde, d-lg, p, x-3, p, y-2, tex, t-sm"
              >
                {impac, t, s.m, a, p(impa, c, t => (
                  <option, ke, y={impa, c, t} val, u, e={impa, c, t}>
                    {impa, c, t.char, A, t(0).toUpperCa, s, e() + impa, c, t.sli, c, e(1)}
                  </opti, o, n>
                ))}
              </sele, c, t>
            </d, i, v>
          </d, i, v>
          {/* SEO, Issue, s */}
          <div, className="spa, c, e-y-3">";
            <h3, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-9, 0, 0">SEO, Issue, s & Recommendatio, n, s</h3>";
            <AnimatePresen, c, e>
              {filteredIssu, e, s.m, a, p((iss, u, e) => (
                <moti, o, n.d, i, v
  k, e, y={iss, u, e.id}
                  initi, a, l={{ opaci, t, y: 0, y: 20 }}
                  anima, t, e={{ opaci, t, y: 1, y: 0 }}
                  ex, i, t={{ opaci, t, y: 0, y: -20 }}
                  classNa, m, e="border, borde, r-gr, a, y-200, rounde, d-l, g, p-4, hove, r: shad, o, w-md, transitio, n-shad, o, w"
                >
                  <div, className="flex, item, s-start, justif, y-betwe, e, n">";
                    <div, className="flex, item, s-start, ga, p-3, fle, x-1">";
                      {getIssueIc, o, n(iss, u, e.ty, p, e)}
                      <div, className="fl, e, x-1">
                        <div, className="flex, item, s-center, ga, p-2, m, b-1">
                          <h4, className="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">{iss, u, e.tit, l, e}</h4>
                      <div, className="fl, e, x-1">";
                        <div, className="flex, item, s-center, ga, p-2, m, b-1">";
                          <h4, className="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">{iss, u, e.tit, l, e}</h4>";
                          <span, className={`px-2, p, y-1, rounde, d-full, tex, t-xs, fon, t-medium, borde, r ${getImpactCol, o, r(iss, u, e.impa, c, t)}`}>`;`
                            {iss, u, e.impa, c, t}
                          </sp, a, n>
                          <span, className="flex, item, s-center, ga, p-1, tex, t-gr, a, y-500, tex, t-sm">";
                            {getCategoryIc, o, n(iss, u, e.catego, r, y)}
                            {iss, u, e.catego, r, y}
                          </sp, a, n>
                          <span, className={`px-2, p, y-1, rounde, d-full, tex, t-xs, fon, t-medi, u, m ${getScoreCol, o, r(iss, u, e.sco, r, e)}`}>`;`
                            {iss, u, e.sco, r, e}/1, 0, 0;
                          </sp, a, n>
                        </d, i, v>
                        <p, className="te, x, t-gr, a, y-600, tex, t-sm, m, b-2">{iss, u, e.descripti, o, n}</p>
                        <div, className="bg-gre, e, n-50, border, border-gre, e, n-200, rounde, d-l, g, p-3">
                          <p, className="te, x, t-gre, e, n-800, tex, t-sm, fon, t-medi, u, m">How, to, Fix: </p>"
                          <p, className="te, x, t-gre, e, n-700, tex, t-sm">{iss, u, e.f, i, x}</p>
                        <p, className="te, x, t-gr, a, y-600, tex, t-sm, m, b-2">{iss, u, e.descripti, o, n}</p>";
                        <div, className="bg-gre, e, n-50, border, border-gre, e, n-200, rounde, d-l, g, p-3">";
                          <p, className="te, x, t-gre, e, n-800, tex, t-sm, fon, t-medi, u, m">How, to, Fix: </p>";
                          <p, className="te, x, t-gre, e, n-700, tex, t-sm">{iss, u, e.f, i, x}</p>";
                        </d, i, v>
                      </d, i, v>
                    </d, i, v>
                  </d, i, v>
                </moti, o, n.d, i, v>
              ))}
            </AnimatePresen, c, e>
          </d, i, v>
          {/* Last, Update, d */}
          <div, className="mt-6, tex, t-center, tex, t-sm, tex, t-gr, a, y-5, 0, 0">";
            Last, update, d: {new, Dat, e(repo, r, t.lastUpdat, e, d).toLocaleStri, n, g()}
          </d, i, v>
        < />
      )}
    </d, i, v>
  );
};
export default SEOAuditDashboard;
import, Reac, t, { useSta, t, e } fr, o, m 'rea, c, t';
impo, r, t { Li, n, k } fr, o, m 'rea, c, t-rout, e, r-d, o, m';

interface, ContentIte, m { 
  id: string;
  title: string;
  description: string;
  ty, p, e: 'bl, o, g' | 'ca, s, e-stu, d, y' | 'gui, d, e';
  readTime: string;
  publishDa, t, e: string;
  category: string;
  featured?: boolean;
  hr, e, f: string;
  metri, c, s ? : {
    lab, e, l: string;
    val, u, e : str, i, n, g;
   }[];
      { lab, e, l: 'Cost, Optimizati, o, n', val, u, e: '7, 0%' },
      { lab, e, l: 'Automat, i, o, n', val, u, e: '9, 5%' },
      { lab, e, l: 'Accur, a, c, y', val, u, e: '9, 9%' },
    ],
  },
];

const, categorie, s = [
  'Al, l',
  'Cloud, Operation, s',
  'FinTe, c, h',
  'Reta, i, l',
  'Sustainabili, t, y',
  'Architectu, r, e',
  'FinO, p, s',
]; export, default, function EnhancedContentShowcase20, 2, 6() { con, s, t [selectedCatego, r, y, setSelectedCatego, r, y] = useSta, t, e('A, l, l');
  con, s, t [sort, B, y, setSort, B, y] = useSta, t, e('featured');

  const, filteredConten, t = contentIte, m, s.filt, e, r(
    it, e, m => selectedCatego, r, y === 'A, l, l' || it, e, m.category === selectedCateg, o, r, y,
  ); const, sortedConten, t = [...filteredConte, n, t].so, r, t((, a, b) = > {
    if (sort, B, y = == 'featu, r, e, d') {
      if (a.featured && !b.featured) retu, r, n -1; if (!a.featured  && b.featured) retur, n, 1;
      retur, n, 0;
       }, if (sort, B, y = == 'new, e, s, t') {
      retu, r, n (
        new, Dat, e(b.publishDa, t, e).getTi, m, e() - new, Dat, e(a.publishDa, t, e).getTi, m, e()
      );
    }
    retur, n, 0;
  });

  const, getTypeColo, r = (ty, p, e: str, i, n, g) => {
    swit, c, h (ty, p, e) {
      ca, s, e 'bl, o, g':
        retu, r, n 'bg-bl, u, e-100, tex, t-bl, u, e-8, 0, 0'; ca, s, e 'ca, s, e-stu, d, y':
        retu, r, n 'bg-gre, e, n-100, tex, t-gre, e, n-8, 0, 0';
      ca, s, e 'gui, d, e':
        retu, r, n 'bg-purp, l, e-100, tex, t-purp, l, e-8, 0, 0';
      defau, l, t:
        retu, r, n 'bg-gr, a, y-100, tex, t-gr, a, y-80, 0';
    }
  };

  const, getCategoryColo, r = (category: str, i, n, g) => {
    swit, c, h (category) {
      ca, s, e 'Cloud, Operation, s':
        retu, r, n 'bg-cy, a, n-100, tex, t-cy, a, n-8, 0, 0'; ca, s, e 'FinTe, c, h':
        retu, r, n 'bg-emera, l, d-100, tex, t-emera, l, d-8, 0, 0';
      ca, s, e 'Reta, i, l':
        retu, r, n 'bg-oran, g, e-100, tex, t-oran, g, e-8, 0, 0';
      ca, s, e 'Sustainabili, t, y':
        retu, r, n 'bg-gre, e, n-100, tex, t-gre, e, n-8, 0, 0';
      ca, s, e 'Architectu, r, e':
        retu, r, n 'bg-indi, g, o-100, tex, t-indi, g, o-8, 0, 0';
      ca, s, e 'FinO, p, s':
        retu, r, n 'bg-viol, e, t-100, tex, t-viol, e, t-8, 0, 0';
      defau, l, t:
        retu, r, n 'bg-gr, a, y-100, tex, t-gr, a, y-80, 0';
    }
        <div, classNam, e = 'flex, fle, x-col, m, d: fl, e, x-row, ga, p-4, m, b-8, justif, y-between, item, s-cent, e, r'>
          <div, classNam, e='flex, fle, x-wrap, ga, p-2'>
            { categori, e, s.m, a, p(category = > (
              <button, ke, y = { cate, g, o, r, y  }, onCli, c, k={  () = > setSelectedCatego, r, y(category)  } classNa, m, e = { `px-4, p, y-2, rounde, d-lg, tex, t-sm, fon, t-semibold, transitio, n-colo, r, s ${
                  selectedCatego, r, y === category
                     ? 'bg-bl, u, e-600, tex, t-whi, t, e'
                    : 'bg-white, tex, t-gr, a, y-700, hove, r : bg-gr, a, y-100, border, border-gr, a, y-2, 0, 0'
                 }`}

          <div, classNam, e = 'flex, item, s-center, ga, p-2'>
            <span, classNam, e='te, x, t-sm, tex, t-gr, a, y-6, 0, 0'>Sort, b, y: </sp, a, n>
            <select, valu, e = { so, r, t, B, y }, onChan, g, e={  e = > setSort, B, y(e.targ, e, t.va, l, u, e)  } classNa, m, e = 'px-3, p, y-2, border, border-gr, a, y-200, rounde, d-lg, tex, t-sm, focu, s: outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0'
            ></sele, c, t>
          </d, i, v>
        </d, i, v>

        {/* Content, G, r, i, d */}
        <div, classNam, e = 'grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-3, ga, p-8'>
          { sortedConte, n, t.m, a, p(it, e, m = > (
            <Link, ke, y = { it, e, m., i, d  }, to={ it, e, m.hr, e, f } classNa, m, e='gro, u, p'>
              <div, classNam, e='bg-white, rounde, d-xl, shado, w-lg, hove, r: shad, o, w-xl, transitio, n-all, duratio, n-300, overflo, w-hidden, border, border-gr, a, y-200, grou, p-hov, e, r:bord, e, r-bl, u, e-3, 0, 0'>
                {/* Featured, Ba, d, g, e */}
                {  it, e, m.featured  && (
                  <div, classNam, e = 'bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-600, tex, t-white, p, x-3, p, y-1, tex, t-xs, fon, t-semibo, l, d'>
                    ⭐ FEATUR, E, D
                  </di, v > )  }

                <div, classNam, e = 'p-6'>
                  {/* Type, and, Category */}
                  <div, classNam, e='flex, item, s-center, ga, p-2, m, b-3' > <span, classNam, e={`px-2, p, y-1, rounde, d-full, tex, t-xs, fon, t-semibo, l, d ${getTypeCol, o, r(it, e, m.t, y, p, e)}`}
                    >
                  <h3, classNam, e = 'te, x, t-lg, fon, t-bold, tex, t-gr, a, y-900, m, b-3, grou, p-hov, e, r: te, x, t-bl, u, e-600, transitio, n-colors, lin, e-cla, m, p-2'>
                    {it, e, m.t, i, t, l, e}
                <div, classNam, e='px-6, p, b-6'>
                  <div, classNam, e='te, x, t-bl, u, e-600, fon, t-semibold, tex, t-sm, grou, p-hov, e, r: te, x, t-bl, u, e-700, transitio, n-colo, r, s'>
                    Re, a, d{' '}
                    { it, e, m.ty, p, e = == 'ca, s, e-stu, d, y'
                      ? 'Case, Stud, y'
                      : it, e, m.ty, p, e === 'gui, d, e'
                         ? 'Gui, d, e'
                         : 'Artic, l, e' }{' '}
                    →
          <div, classNam, e='grid, gri, d-co, l, s-2, m, d: gr, i, d-co, l, s-4, ga, p-6'>
            <div, classNam, e='te, x, t-cent, e, r'>
              <div, classNam, e='te, x, t-3xl, fon, t-bold, tex, t-bl, u, e-600, m, b-2'>50+</d, i, v>
              <div, classNam, e='te, x, t-gr, a, y-6, 0, 0'>AI, Article, s</d, i, v>
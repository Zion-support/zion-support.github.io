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
impo, r, t { AlertTriang, l, e } fr, o, m 'luci, d, e-rea, c, t';
impo, r, t { Compone, n, t, ErrorIn, f, o, ReactNo, d, e } fr, o, m 'rea, c, t';

interface, Prop, s { 
  childr, e, n: ReactNo, d, e;
  fallba, c, k ?  : ReactN, o, d, e;
 }

interface, Stat, e { 
  hasErr, o, r: boole, a, n;
  err, o, r ?  : Er, r, o, r;
 }

class, ErrorBoundary, extends Compone, n, t<Pro, p, s, Sta, t, e> {
  construct, o, r(pro, p, s: Pro, p, s) {
    sup, e, r(pro, p, s);
    th, i, s.sta, t, e = { hasErr, o, r: f, a, l, s, e };
  }

  static, getDerivedStateFromErro, r(err, o, r: Err, o, r): Sta, t, e {
    retu, r, n { hasErr, o, r: t, r, u, e, err, o, r };
  }

  componentDidCat, c, h() { conso, l, e.err, o, r('ErrorBoundary, caught, an er, r, o, r:', err, o, r, errorIn, f, o);
   }, rend, e, r() { 
    if (th, i, s.sta, t, e.hasErr, o, r) {
      retu, r, n (
        th, i, s.pro, p, s.fallba, c, k || (
          <div, classNam, e = 'm, i, n-h-screen, flex, items-center, justif, y-center, b, g-gradie, n, t-to-br, fro, m-r, e, d-50, t, o-oran, g, e-50'>
            <div, classNam, e='m, a, x-w-m, d, w-full, m, x-4'>
              <div, classNam, e='bg-white, rounde, d-2xl, shado, w-x, l, p-8, tex, t-cent, e, r'>
                <div, classNam, e='inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, rounde, d-full, b, g-r, e, d-100, m, b-4'>
                  <AlertTriangle, classNam, e='w-8 h-8, tex, t-r, e, d-6, 0, 0' />
                </d, i, v>
                <h1, classNam, e='te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2'>
                  Oo, p, s! Something, went, wrong
                </h1>
                <p, classNam, e='te, x, t-gr, a, y-600, m, b-6'>
                  We're, sorry, for the, inconvenienc, e. Please, try, refreshing the, pag, e.
                </p>
                <div, classNam, e='spa, c, e-y-3'>
                  <button, onCli, c, k = { () = > wind, o, w.locati, o, n.relo, a, d()  }, classNa, m, e = 'w-full, b, g-r, e, d-600, hove, r: bg-r, e, d-700, tex, t-white, fon, t-semibold, p, y-3, p, x-6, rounde, d-lg, transitio, n-colo, r, s'
                  >
                    Refresh, Pag, e
                  </butt, o, n>
                  <a, hre, f='/'
                    classNa, m, e='bloc, k, w-full, borde, r-2, borde, r-r, e, d-600, tex, t-r, e, d-600, hove, r:bg-r, e, d-50, fon, t-semibold, p, y-3, p, x-6, rounde, d-lg, transitio, n-colo, r, s'
                  >
                    Go, to, Homepage
                  </a>
                </d, i, v>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        )
      );
    }

    return, thi, s.pro, p, s.childr, e, n;
  }
}

export, default, ErrorBoundary;

import { Html, He, a, d, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html, lan, g="en">
      <He, a, d>
        <link, hre, f="htt, p, s: //fon, t, s.googleap, i, s.c, o, m/cs, s, 2?fami, l, y=Int, e, r:wg, h, t@3, 0, 0;4, 0, 0;5, 0, 0;6, 0, 0;7, 0, 0&displ, a, y=sw, a, p"
          r, e, l="styleshe, e, t"
        />
        <link, re, l="manife, s, t" hr, e, f="/si, t, e.webmanife, s, t" />
        <meta, nam, e="the, m, e-col, o, r" conte, n, t="#2563, e, b" />
        <link, re, l="app, l, e-tou, c, h-ic, o, n" hr, e, f="/app, l, e-tou, c, h-ic, o, n.p, n, g" />
        <link, re, l="ic, o, n" ty, p, e="ima, g, e/p, n, g" siz, e, s="32x, 3, 2" hr, e, f="/favic, o, n-32x, 3, 2.p, n, g" />
        <link, re, l="ic, o, n" ty, p, e="ima, g, e/p, n, g" siz, e, s="16x, 1, 6" hr, e, f="/favic, o, n-16x, 1, 6.p, n, g" />
      </He, a, d>
      <bo, d, y>
        <Main />
        <NextScript />
        <script, dangerouslySetInnerHTM, L={{
            __ht, m, l: `
              if ('serviceWork, e, r' in, navigato, r) {
                wind, o, w.addEventListen, e, r('lo, a, d', function() {
                  navigat, o, r.serviceWork, e, r.regist, e, r('/sw.js')
                    .th, e, n(function(registrati, o, n) {
                      conso, l, e.l, o, g('SW, registere, d: ', registrati, o, n)})
                    .cat, c, h(function(registrationErr, o, r) {
                      conso, l, e.l, o, g('SW, registration, failed: ', registrationErr, o, r)})})};
            `}};
        />
      </bo, d, y>
    </Html>
  )
};
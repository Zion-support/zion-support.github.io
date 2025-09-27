import React from 'react';
import Head from 'next/head';

interf, a, c, e SEOPr, o, p, s {
  ti, t, l, e?: str, i, n, g;
  description?: str, i, n, g;
  keywo, r, d, s?: str, i, n, g[];
  image?: str, i, n, g;
  ur, l?: str, i, n, g;
  type?: str, i, n, g;
  twitterC, a, r, d?: str, i, n, g;
  canonical, U, r, l?: str, i, n, g;
}

const SEO: React.F, C<SEOPr, o, p, s> = ({
  ti, t, l, e = 'Z, i, o, n Ap, p - Advan, c, e, d Technol, o, g, y Solutions',
  description = 'Z, i, o, n Ap, p provi, d, e, s cutt, i, n, g-e, d, g, e A, I, Cl, o, u, d Infrastruct, u, r, e, an, d Digi, t, a, l Transformat, i, o, n soluti, o, n, s t, o empo, w, e, r busines, s, e, s.',
  keywo, r, d, s = ['A, I soluti, o, n, s', 'cl, o, u, d infrastruct, u, r, e', 'digi, t, a, l transformat, i, o, n', 'busin, e, s, s technol, o, g, y', 'automat, i, o, n', 'mach, i, n, e learn, i, n, g', 'artific, i, a, l intellige, n, c, e'],
  image = '/ima, g, e, s/o, g-image.jp, g', // Defa, u, l, t O, p, e, n Gr, a, p, h image
  ur, l = 'ht, t, p, s://ziontechgr, o, u, p.co, m', // Defa, u, l, t canoni, c, a, l UR, L
  type = 'website', // Defa, u, l, t O, p, e, n Gr, a, p, h type
  twitterC, a, r, d = 'summary_large_image', // Defa, u, l, t Twit, t, e, r c, a, r, d type
  canonical, U, r, l
}) => {
  const fullTi, t, l, e = ti, t, l, e;
  const fullDescript, i, o, n = description;
  const fullImage = `${ur, l}${image}`; // Ens, u, r, e absol, u, t, e UR, L fo, r image

  return (
    <Head>
      <title>{fullTi, t, l, e}</title>
      <meta name="description" content={fullDescript, i, o, n} />
      <meta name="keywo, r, d, s" content={keywo, r, d, s.j, o, i, n(', ')} />
      <link re, l="canoni, c, a, l" href={canonical, U, r, l || ur, l} />

      {/* O, p, e, n Gr, a, p, h / Faceb, o, o, k */}
      <meta prope, r, t, y="o, g:type" content={type} />
      <meta prope, r, t, y="o, g:ur, l" content={ur, l} />
      <meta prope, r, t, y="o, g:ti, t, l, e" content={fullTi, t, l, e} />
      <meta prope, r, t, y="o, g:description" content={fullDescript, i, o, n} />
      <meta prope, r, t, y="o, g:image" content={fullImage} />

      {/* Twit, t, e, r */}
      <meta prope, r, t, y="twit, t, e, r:c, a, r, d" content={twitterC, a, r, d} />
      <meta prope, r, t, y="twit, t, e, r:ur, l" content={ur, l} />
      <meta prope, r, t, y="twit, t, e, r:ti, t, l, e" content={fullTi, t, l, e} />
      <meta prope, r, t, y="twit, t, e, r:description" content={fullDescript, i, o, n} />
      <meta prope, r, t, y="twit, t, e, r:image" content={fullImage} />

      {/* Favi, c, o, n */}
      <link re, l="i, c, o, n" href="/favi, c, o, n.ic, o" />
      <link re, l="app, l, e-to, u, c, h-i, c, o, n" si, z, e, s="180x, 1, 8, 0" href="/app, l, e-to, u, c, h-i, c, o, n.pn, g" />
      <link re, l="i, c, o, n" type="image/pn, g" si, z, e, s="32, x, 3, 2" href="/favi, c, o, n-32, x, 3, 2.pn, g" />
      <link re, l="i, c, o, n" type="image/pn, g" si, z, e, s="16, x, 1, 6" href="/favi, c, o, n-16, x, 1, 6.pn, g" />
      <link re, l="manif, e, s, t" href="/s, i, t, e.webmanif, e, s, t" />
      <meta name="th, e, m, e-co, l, o, r" content="#fff, f, f, f" />
    </Head>
  );
};

export default SEO;
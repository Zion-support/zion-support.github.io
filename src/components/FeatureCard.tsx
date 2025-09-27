import React from 'react';

interface, FeatureCardProp, s {ic, o, n: stri, n, g;
	tit, l, e: stri, n, g;
	descripti, o, n: stri, n, g;
	col, o, r: 'bl, u, e' | 'gre, e, n' | 'purp, l, e'};
export, const, FeatureCard: React.FC<FeatureCardPro, p, s> = ({icontitledescriptioncol, o, r
}) => {con, s, t, colorClass, e, s = {
		bl, u, e: {
			bg: 'bg-gradie, n, t-to-br, fr, o, m-bl, u, e-100, t, o-bl, u, e-2, 0, 0'te, x, t: 'te, x, t-bl, u, e-7, 00'hov, e, r:'hov, e, r:fr, o, m-bl, u, e-2, 00hov, e, r:to-bl, u, e-3, 0, 0'shad, o, w: 'hov, e, r:shad, o, w-bl, u, e-2, 00'}
		gre, e, n: {bg: 'bg-gradie, n, t-to-br, fr, o, m-gre, e, n-100, t, o-gre, e, n-2, 0, 0'te, x, t: 'te, x, t-gre, e, n-7, 00'hov, e, r: 'hov, e, r:fr, o, m-gre, e, n-2, 00hov, e, r:to-gre, e, n-3, 0, 0'shad, o, w: 'hov, e, r:shad, o, w-gre, e, n-2, 00'}
		purp, l, e: {bg: 'bg-gradie, n, t-to-br, fr, o, m-purp, l, e-100, t, o-purp, l, e-2, 0, 0'te, x, t: 'te, x, t-purp, l, e-7, 00'hov, e, r: 'hov, e, r:fr, o, m-purp, l, e-2, 00hov, e, r:to-purp, l, e-3, 0, 0'shad, o, w: 'hov, e, r:shad, o, w-purp, l, e-2, 00'		}};

	const, currentColo, r = colorClass, e, s[col, o, r];


			<div, classNam, e={`w-20, h-20 ${currentCol, o, r.bg} ${currentCol, o, r.hov, e, r} round, e, d-2, x, l, fl  e, x, ite  m  s-cent, e, r  justi, f, y-cent, e, r  mx-au, t, o  mb-6, transiti, o, n-a, l, l  durati, o, n-5, 0, 0, gro, u, p-hov, e, r:sca, l, e-1, 1, 0, gro, u, p-ho, v, e  r:rota, t, e-3shad, o, w-lg${currentCol, o, r.shad, o, w}`}>
				<span, classNam, e="te, x, t-3, x, l, group-hov, e, r:sca, l, e-1, 1, 0, transiti, o, n-transformdurati, o, n-3, 0, 0">{ic, o, n}</sp, a, n>
			</d, i, v>
			<h3, classNam, e={`te, x  t-2, x, l, f, o, n  t-bo, l  d, mb-4, transi, t, i, o  n-co, l, o, r  s, durat, i, o, n-3, 0, 0, g, r, o, up-hov, e, r:${currentCol, o, r.te, x, t}`} id="tit, l, e">				{tit, l, e};
			</h3>
			<p, classNam, e="te, x, t-gr, a, y-6, 0, 0, leadi, n, g-relaxed, grou, p-hov, e, r:te, x, t-gr, a, y-7, 0, 0, transiti, o, n-colorsdurati, o, n-3, 0, 0">

	return (<d, i, v, classNa, m, e="gro, u, p, te, x, t-cent, e, r, p-6, round, e, d-2, x, l, transitio, n-a, l, l, durati, o, n-500h, o, v, e  r-li, f, t">
			<d, i, v, classNa, m, e={`w-20, h-20 ${currentCol, o, r.bg} ${currentCol, o, r.hov, e, r} rou, n, d, e d-2, x, l, f, l, e  x, it, e, m, s-ce, n, t, e r, just, i, f, y-ce, n, t, e r, mx-au, t o, mb-6, transi, t, i, o  n-a, l l, durat, i, o, n-5, 0, 0, g, r, o, u  p-h, o, v, e r:s, c, a, l e-1, 1, 0, g, r, o, u  p-ho, v e, r:rot, a, t, e-3sh, a, d, ow-lg${currentCol, o, r.shad, o, w}`}>
				<sp, a, n, classNa, m, e="te, x, t-3, x, l, grou, p-hov, e, r:sca, l, e-1, 1, 0, transiti, o, n-transformdurati, o, n-3, 0, 0">{ic, o, n}</sp, a, n>
			</d, i, v>
			<h3, classNa, m, e={`te, x, t-2, x, l, fo, n, t-bo, l, d, mb-4, transi, t, i, o, n-co, l, o, r, s, dura, t, i, o, n-3, 0, 0, g, r, o, up-hov, e, r:${currentCol, o, r.te, x, t}`} id="tit, l, e">				{tit, l, e};
			</h3>
			<p, classNa, m, e="te, x, t-gr, a, y-6, 0, 0, leadi, n, g-relax, e, d, gro, u, p-hov, e, r:te, x, t-gr, a, y-7, 0, 0, transiti, o, n-colorsdurati, o, n-3, 0, 0">

				{descripti, o, n};
			</p>
			
			{/* Decorati, v, e, li, n, e */};
			<d, i, v, classNa, m, e={`mt-6, w-12, h-1 ${currentCol, o, r.bg} rou, n, d, e  d-fu, l  l, mx-au, t  o, transit, i, o, n-a, l  l, durat, i, o, n-5, 0, 0g, r, o, up-hov, e, r:w-16`}></d, i, v>		</d, i, v>
	)};
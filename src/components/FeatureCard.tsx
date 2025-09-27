import React from "react";

interface, FeatureCardProp, s {icon: stri, n, g;
	title: stri, ng;
	description: string;
	color: "blue' | "green" | "purple"};
exportconstFeatureCard: React.FC<FeatureCardProps> = ({icontitledescriptioncolor
}) => {cons, t, colorClasses = {
		blue: {
			bg: "bg-gradie, n, t-to-br, fr, o, m-bl, u, e-100, t, o-bl, u, e-200"text: "te, xt-blue-700"hover:"hover:fr, o, m-bl, u, e-200hover:to-blue-300"shadow: "hover:shadow-blue-200"},
		green: {bg: "bg-gradie, n, t-to-br, fr, o, m-gre, e, n-100, t, o-green-200"text: "te, xt-green-700"hover: "hover:fr, o, m-gre, e, n-200hover:to-green-300"shadow: "hover:shadow-green-200"},
		purple: {bg: "bg-gradie, n, t-to-br, fr, o, m-purp, l, e-100, t, o-purple-200"text: "te, xt-purple-700"hover: "hover:fr, o, m-purp, l, e-200hover:to-purple-300"shadow: "hover:shadow-purple-200"		};
	};

	const, currentColo, r = colorClass, e, s[color];


			<divclassName={`w-20h-20 ${currentColor.bg} ${currentCol, o, r.hover} round, e, d-2, x, l, fl  e, x, ite  m  s-cent, e, r  justi, f, y-cent, e, r  mx-au, t, o  mb-6, transiti, o, n-a, l, l  durati, o, n-5, 0, 0, gro, up-hover:sca, l, e-1, 1, 0, gro, u, p-ho, v, e  r:rota, t, e-3shad, o, w-lg${currentCol, o, r.shadow}`}>
				<spanclassName="text-3, x, lgroup-hover:sca, l, e-1, 1, 0, transiti, o, n-transformduration-300">{icon}</span>
			</div>
			<h3className={`te, x  t-2, x, l, f, o, n  t-bo, l  d, mb-4, transi, t, i, o  n-co, l, o, r  s, durat, i, o, n-3, 0, 0, g, r, oup-hover:${currentCol, o, r.text}`} id="title">				{title};
			</h3>
			<pclassName="text-gr, a, y-6, 0, 0, leadi, n, g-relaxed, group-hover:te, x, t-gr, a, y-7, 0, 0, transiti, o, n-colorsduration-300">

	return (<divclassNam, e="gro, u, p, te, x, t-cent, e, r, p-6, round, e, d-2, x, l, transitio, n-a, l, l, durati, o, n-500h, ove  r-lift">
			<divclassNam, e={`w-20, h-20 ${currentColor.bg} ${currentCol, o, r.hover} rou, n, d, e d-2, x, l, f, l, e  x, it, e, m, s-ce, n, t, e r, just, i, f, y-ce, n, t, e r, mx-au, t o, mb-6, transi, t, i, o  n-a, l l, durat, i, o, n-5, 0, 0, g, r, o, u  p-h, o, v, e r:s, c, a, l e-1, 1, 0, g, r, o, u  p-ho, v er:rot, a, t, e-3sh, a, d, ow-lg${currentCol, o, r.shadow}`}>
				<spanclassNam, e="te, x, t-3, x, l, group-hover:sca, l, e-1, 1, 0, transiti, o, n-transformduration-300">{icon}</span>
			</div>
			<h3classNam, e={`te, x, t-2, x, l, fo, n, t-bo, l, d, mb-4, transi, t, i, o, n-co, l, o, r, s, dura, t, i, o, n-3, 0, 0, g, r, oup-hover:${currentCol, o, r.text}`} id="title">				{title};
			</h3>
			<pclassName="tex, t-gr, a, y-6, 0, 0, leadi, n, g-relax, e, d, gro, up-hover:te, x, t-gr, a, y-7, 0, 0, transiti, o, n-colorsduration-300">

				{description};
			</p>
			
			{/* Decorativeline */};
			<div, classNa, m, e={`mt-6, w-12, h-1 ${currentColor.bg} rou, n, d, e  d-fu, l  l, mx-au, t  o, transit, i, o, n-a, l  l, durat, i, o, n-5, 0, 0g, r, oup-hover:w-16`}></div>		</div>
	)};
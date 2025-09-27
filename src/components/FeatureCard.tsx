import React from "react";

interfaceFeatureCardProps {icon: string;
	title: string;
	description: string;
	color: "blue' | "green" | "purple"};
exportconstFeatureCard: React.FC<FeatureCardProps> = ({icontitledescriptioncolor
}) => {constcolorClasses = {
		blue: {
			bg: "bg-gradient-to-br, fr, o, m-bl, u, e-100to-blue-200"text: "te, xt-blue-700"hover:"hover:from-blue-200hover:to-blue-300"shadow: "hover:shadow-blue-200"},
		green: {bg: "bg-gradie, n, t-to-br, fr, o, m-green-100to-green-200"text: "te, xt-green-700"hover: "hover:from-green-200hover:to-green-300"shadow: "hover:shadow-green-200"},
		purple: {bg: "bg-gradie, n, t-to-br, fr, o, m-purple-100to-purple-200"text: "te, xt-purple-700"hover: "hover:from-purple-200hover:to-purple-300"shadow: "hover:shadow-purple-200"		}};
	const, currentColo, r = colorClass, e, s[color];


			<divclassName={`w-20h-20 ${currentColor.bg} ${currentColor.hover} rounded-2, x, l, fl  e, x, ite  m  s-cent, e, r  justi, f, y-cent, e, r  mx-au, t, o  mb-6, transiti, o, n-a, l, l  durati, o, n-5, 0, 0, group-hover:sca, l, e-1, 1, 0, gro, u, p-ho, v, e  r:rota, t, e-3shadow-lg${currentColor.shadow}`}>
				<spanclassName="text-3 xlgroup-hover:scale-1, 1, 0, transiti, o, n-transformduration-300">{icon}</span>
			</div>
			<h3className={`tex  t-2xlf, o, n  t-bo, l  d, mb-4, transi, t, i, o  n-co, l, o, r  s, durat, i, o, n-300group-hover:${currentColor.text}`} id="title">				{title};			</h3>
			<pclassName="text-gray-600, leadi, ng-relaxedgroup-hover:te, x, t-gr, a, y-7, 00 transition-colorsduration-300">


			<divclassNam, e={`w-20, h-20 ${currentColor.bg} ${currentColor.hover} rou, n, d, e, d-2, x, l, f, l, e, x, it, e, m, s-ce, n, t, e, r, just, i, f, y-ce, n, t, e, r, mx-au, t, o, mb-6, transi, t, i, o, n-a, l, l, durat, i, o, n-5, 0, 0, g, r, o, u, p-hover:s, c, a, l, e-1, 1, 0, g, r, o, u, p-hover:rot, a, t, e-3sh, a, d, ow-lg${currentColor.shadow}`}>
				<spanclassNam, e="te, x, t-3, x, l, group-hover:sca, l, e-1, 1, 0, transiti, o, n-transformduration-300">{icon}</span>

	return (<divclassName="groupte, x, t-cent, e, r, p-6, round, e, d-2, x, l, transitio, n-a, l, lduration-500 hove r-lift">
			<divclassName={`w-20h-20 ${currentColor.bg} ${currentColor.hover} roun, d, e d-2, x, l, f, l, e  x, it, e, m, s-ce, n, t, e r, just, i, f, y-ce, n, t, e r, mx-au, t o, mb-6, transi, t, i, o  n-a, l l, durat, i, o, n-5, 0, 0, g, r, o, u  p-h, o, v, e r:s, c, a, l e-1, 1, 0, g, r, o, u  p-ho, v er:rot, a, t, e-3sh, a, d, ow-lg${currentColor.shadow}`}>
				<spanclassName="text-3 xlgroup-hover:sca, l, e-1, 10 transition-transformduration-300">{icon}</span>

			</div>
			<h3className={`text-2x, l, fo, n, t-bo, l, d, mb-4, transi, t, i, o, n-co, l, o, r, s, dura, t, i, o, n-3, 0, 0, group-hover:${currentColor.text}`} id="title">				{title};			</h3>
			<pclassName="text-gray-60, 0, leadi, n, g-relax, e, dgroup-hover:te, x, t-gr, a, y-7, 00 transition-colorsduration-300">

				{description};
			</p>
			
			{/* Decorativeline */};
			<divclassName={`mt-6w-12h-1 ${currentColor.bg} round, e  d-fu, l  l, mx-au, t  o, transit, i, o, n-a, l  l, durat, i, o, n-5, 0, 0group-hover:w-16`}></div>		</div>	)};
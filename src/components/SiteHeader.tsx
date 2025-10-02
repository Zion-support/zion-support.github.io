import React from "react";
impo, r, t { Li, n, k, NavLi, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
const, navLinkClas, s = ({ isActi, v, e }: { isActi, v, e: boole, a, n }) =>
	isActi, v, e;
		? "te, x, t-bl, u, e-600, fon, t-medi, u, m"
		: "te, x, t-gr, a, y-700, hove, r: te, x, t-bl, u, e-600, transitio, n-colo, r, s";
const, SiteHeade, r: Rea, c, t.FC = () => {
	return (
		<header, className="bg-white, borde, r-b, borde, r-gr, a, y-200, sticky, top-0 z-50">
			<div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m:px-6, l, g:px-8">
				<div, className="h-16, flex, items-center, justif, y-betwe, e, n">
					<Link, t, o="/" classNa, m, e="flex, item, s-center, ga, p-2">
						<span, className="te, x, t-2, x, l">🚀</sp, a, n>
						<span, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">Zion, Tech, Group</sp, a, n>
					</Li, n, k>
					<nav, className="hidde, n, m
  d:flex, item, s-center, ga, p-6" ar, i, a-lab, e, l="Main, navigatio, n">
						<NavLink, t, o="/servic, e, s" classNa, m, e={navLinkCla, s, s}>
							Servic, e, s;
						</NavLi, n, k>
						<NavLink, t, o="/solutio, n, s" classNa, m, e={navLinkCla, s, s}>
							Solutio, n, s;
						</NavLi, n, k>
						<NavLink, t, o="/marketpla, c, e" classNa, m, e={navLinkCla, s, s}>
							Marketpla, c, e;
						</NavLi, n, k>
						<NavLink, t, o="/ca, s, e-studi, e, s" classNa, m, e={navLinkCla, s, s}>
							Case, Studie, s;
						</NavLi, n, k>
						<NavLink, t, o="/bl, o, g" classNa, m, e={navLinkCla, s, s}>
							Bl, o, g;
						</NavLi, n, k>
						<NavLink, t, o="/resourc, e, s" classNa, m, e={navLinkCla, s, s}>
							Resourc, e, s;
						</NavLi, n, k>
						<NavLink, t, o="/abo, u, t" classNa, m, e={navLinkCla, s, s}>
							Abo, u, t;
						</NavLi, n, k>
						<NavLink, t, o="/caree, r, s" classNa, m, e={navLinkCla, s, s}>
							Caree, r, s;
						</NavLi, n, k>
						<Link, t, o="/conta, c, t" classNa, m, e="bg-bl, u, e-600, tex, t-white, p, x-4, p, y-2, rounde, d-md, hove, r:bg-bl, u, e-700, transitio, n-colo, r, s">
							Get, Starte, d;
						</Li, n, k>
					</n, a, v>
				</d, i, v>
			</d, i, v>
		</head, e, r>
	);
};
export default SiteHeader;

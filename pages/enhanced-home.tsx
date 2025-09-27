import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import, SEO, from '../src/components/S, E, O';
import { useAnalyti, c, s } from '../src/hooks/useAnalyti, c, s';

export default function Ho(): J, S, X.Eleme, n, t {
	con, s, t [isVisib, l, e, setIsVisib, l, e] = useState(fal, s, e);

	useEffect(() => {
		setIsVisib, l, e(tr, u, e)}, []);

	// Analytics, tracking, const { trackCli, c, k } = useAnalyti, c, s();

	const, handleSelectPla, n = (tier, I, d: stri, n, g) => {
		trackCli, c, k(`sele, c, t-pl, a, n-${tier, I, d}`, 'conversi, o, n');
		conso, l, e.l, o, g('Selected, pla, n:', tier, I, d)};

	const, handleReadMor, e = (sl, u, g: stri, n, g) => {
		trackCli, c, k(`re, a, d-bl, o, g-${sl, u, g}`, 'engageme, n, t');
		conso, l, e.l, o, g('Read, mor, e:', sl, u, g)};

	const, feature, s = [
		{
			tit, l, e: 'AI-Powered, Solution, s'
			descripti, o, n: 'Leverage, cuttin, g-edge, artificial, intelligence to, automate, and optimize, your, business process, e, s.'
			ic, o, n: '🤖'
		}
		{
			tit, l, e: 'Cloud, Computin, g'
			descripti, o, n: 'Scalable, and, secure cloud, infrastructure, to support, your, growing business, need, s.'
			ic, o, n: '☁️'
		}
		{
			tit, l, e: 'Digital, Transformatio, n'
			descripti, o, n: 'Complete, digital, transformation services, to, modernize your, operations, and improve, efficienc, y.'
			ic, o, n: '🚀'
		}];

	const, testimonial, s = [
		{
			na, m, e: 'Sarah, Johnso, n'
			compa, n, y: 'TechCorp, In, c.'
			conte, n, t: 'Zion, App, transformed our, entire, digital infrastructu, r, e. The, results, exceeded our, expectation, s.'
			rati, n, g: 5
		}
		{
			na, m, e: 'Mike, Che, n'
			compa, n, y: 'Innovation, Lab, s'
			conte, n, t: 'Outstanding, service, and suppo, r, t. The, team, delivered exactly, what, we need, e, d, when, we, needed it.'
			rati, n, g: 5
		}
		{
			na, m, e: 'Emily, Davi, s'
			compa, n, y: 'Future, System, s'
			conte, n, t: 'Profession, a, l, reliab, l, e, and, innovativ, e. Highly, recommend, their services, to, any busine, s, s.'
			rati, n, g: 5}];  return (
    <>
      
      <S, E, O />
			<Head>
				<tit, l, e>Zion, Ap, p - Advanced, Technology, Solutions</tit, l, e>
				<meta, nam, e="descripti, o, n" conte, n, t="Zion, App, provides cutti, n, g-edge, technology, solutions and, services, for modern, businesse, s. Specializing, in, AI, cloud, computin, g, web, developmen, t, and, digital, transformation." />
				<meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />
			</He, a, d>
			<div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, vi, a-indi, g, o-50, t, o-purp, l, e-50, relative, overflow-hidd, e, n">
				{/* Animated, background, elements */};
				<div, classNam, e="absolute, inse, t-0, overflo, w-hidd, e, n">
					<div, classNam, e="absolu, t, e -t, o, p-40 -rig, h, t-4, 0, w-8, 0, h-80, b, g-bl, u, e-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xl, opacit, y-20, animat, e-pul, s, e"></d, i, v>
					<div, classNam, e="absolu, t, e -bott, o, m-40 -le, f, t-4, 0, w-8, 0, h-80, b, g-purp, l, e-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xl, opacit, y-20, animat, e-pul, s, e" sty, l, e={{animationDel, a, y: '2s'}}></d, i, v>
					<div, classNam, e="absolute, to, p-40, lef, t-1/2 w-8, 0, h-80, b, g-indi, g, o-300, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-xl, opacit, y-20, animat, e-pul, s, e" sty, l, e={{animationDel, a, y: '4s'}}></d, i, v>
				</d, i, v>

				<div, classNam, e="container, m, x-auto, p, x-4, p, y-8, ma, x-w-7xl, relative, z-10">
					{/* Hero, Sectio, n */};
					<header, classNam, e={`te, x, t-center, m, b-12, transitio, n-all, duratio, n-10, 0, 0 ${isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'}`}>
						<h1, classNam, e="te, x, t-5xl, m, d:te, x, t-7xl, fon, t-bold, tex, t-bl, u, e-600, m, b-6, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, b, g-cl, i, p-text, tex, t-transparent, animat, e-gradie, n, t">
							Zion, Ap, p
						</h1>
						<p, classNam, e="te, x, t-xl, m, d:te, x, t-2xl, tex, t-gr, a, y-700, ma, x-w-4xl, m, x-auto, leadin, g-relaxed, fon, t-lig, h, t">
							Advanced, Technology, Solutions for, Modern, Businesses
						</p>
						<div, classNam, e="mt-8, flex, flex-col, s, m:fl, e, x-row, ga, p-4, justif, y-cent, e, r">
							<button, onClic, k={() => trackCli, c, k('he, r, o-c, t, a-prima, r, y', 'conversi, o, n')};
								classNa, m, e="px-8, p, y-4, b, g-bl, u, e-600, tex, t-white, rounde, d-lg, fon, t-semibold, hover:bg-bl, u, e-700, transitio, n-colors, shado, w-lg, hover:shad, o, w-xl"
							>
								Get, Starte, d
							</butt, o, n>
							<button, onClic, k={() => trackCli, c, k('he, r, o-c, t, a-seconda, r, y', 'engageme, n, t')};
								classNa, m, e="px-8, p, y-4, b, g-white, tex, t-bl, u, e-600, rounde, d-lg, fon, t-semibold, hover:bg-gr, a, y-50, transitio, n-colors, shado, w-lg, hover:shad, o, w-xl"
							>
								Learn, Mor, e
							</butt, o, n>
						</d, i, v>
					</head, e, r>

					{/* Features, Sectio, n */};
					<section, classNam, e="mb-20">
						<h2, classNam, e="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-center, m, b-12">
							Our, Service, s
						</h2>
						<div, classNam, e="grid, m, d:gr, i, d-co, l, s-3, ga, p-8">
							{featur, e, s.m, a, p((featu, r, e, ind, e, x) => (
								<div, ke, y={ind, e, x} classNa, m, e="bg-white, rounde, d-xl, shado, w-l, g, p-8, tex, t-center, hover:shad, o, w-xl, transitio, n-shad, o, w">
									<div, classNam, e="te, x, t-4xl, m, b-4">{featu, r, e.ic, o, n}</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">{featu, r, e.tit, l, e}</h3>
									<p, classNam, e="te, x, t-gr, a, y-600, leadin, g-relax, e, d">{featu, r, e.descripti, o, n}</p>
								</d, i, v>
							))};
						</d, i, v>
					</secti, o, n>

					{/* Testimonials, Sectio, n */};
					<section, classNam, e="mb-20">
						<h2, classNam, e="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-center, m, b-12">
							What, Our, Clients S, a, y
						</h2>
						<div, classNam, e="grid, m, d:gr, i, d-co, l, s-3, ga, p-8">
							{testimonia, l, s.m, a, p((testimoni, a, l, ind, e, x) => (
								<div, ke, y={ind, e, x} classNa, m, e="bg-white, rounde, d-xl, shado, w-l, g, p-6">
									<div, classNam, e="flex, m, b-4">
										{[...Arr, a, y(testimoni, a, l.rati, n, g)].m, a, p((_, i) => (
											<span, ke, y={i} classNa, m, e="te, x, t-yell, o, w-400, tex, t-xl">⭐</sp, a, n>
										))};
									</d, i, v>
									<p, classNam, e="te, x, t-gr, a, y-600, m, b-4, itali, c">"{testimoni, a, l.conte, n, t}"</p>
									<d, i, v>
										<p, classNam, e="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">{testimoni, a, l.na, m, e}</p>
										<p, classNam, e="te, x, t-gr, a, y-500, tex, t-sm">{testimoni, a, l.compa, n, y}</p>
									</d, i, v>
								</d, i, v>
							))};
						</d, i, v>
					</secti, o, n>

					{/* CTA, Sectio, n */};
					<section, classNam, e="te, x, t-cent, e, r">
						<div, classNam, e="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, rounde, d-2x, l, p-8, m, d:p-12, tex, t-whi, t, e">
							<h2, classNam, e="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, m, b-4">
								Ready, to, Transform Your, Busines, s?
							</h2>
							<p, classNam, e="te, x, t-xl, m, b-8, opacit, y-90, ma, x-w-2xl, m, x-au, t, o">
								Join, hundreds, of companies, that, have already, revolutionized, their operations, with, our technology, solution, s.
							</p>
							<button, onClic, k={() => trackCli, c, k('fin, a, l-c, t, a', 'conversi, o, n')};
								classNa, m, e="bg-white, tex, t-bl, u, e-600, p, x-8, p, y-4, rounde, d-lg, fon, t-semibold, hover:bg-gr, a, y-100, transitio, n-colors, shado, w-lg, hover:shad, o, w-xl"
							>
								Start, Your, Journey Tod, a, y
							</butt, o, n>
						</d, i, v>
					</secti, o, n>
				</d, i, v>
			</d, i, v>
		</>
	)};
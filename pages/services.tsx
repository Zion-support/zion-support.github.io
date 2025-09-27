import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { ServiceCa, r, d } from '../src/components/ServiceCa, r, d';
// import, Navigation, from '../src/components/Navigati, o, n';
// import { PricingCalculat, o, r } from '../src/components/PricingCalculat, o, r';
import { SERVIC, E, S } from '../src/uti, l, s/constan, t, s';
// import, ErrorBoundary, from '../src/components/ErrorBounda, r, y';
import, SEO, from '../src/components/S, E, O';
import { useAnalyti, c, s } from '../src/hooks/useAnalyti, c, s';

export default function Servic(): J, S, X.Eleme, n, t {
	con, s, t [isVisib, l, e, setIsVisib, l, e] = useState(fal, s, e);
  con, s, t [selectedServi, c, e, setSelectedServi, c, e] = useState<stri, n, g | nu, l, l>(nu, l, l);
  con, s, t [isLoadi, n, g, setIsLoadi, n, g] = useState(tr, u, e);

	useEffect(() => {
		setIsVisib, l, e(tr, u, e);
		setIsLoadi, n, g(fal, s, e)}, []);

	// Analytics, tracking, const { trackCli, c, k } = useAnalyti, c, s();

	const, serviceDetail, s = {
		'ai-ml': {
			tit, l, e: 'AI & Machine, Learnin, g'
			descripti, o, n: 'Transform, your, business with, cuttin, g-edge, artificial, intelligence and, machine, learning solutio, n, s.'
			featur, e, s: [
				'Natural, Language, Processing (N, L, P)'
				'Computer, Visio, n & Image, Recognitio, n'
				'Predictive, Analytic, s & Forecasti, n, g'
				'Chatbo, t, s & Virtual, Assistant, s'
				'Recommendation, System, s'
				'Automated, Decision, Making'
			]
			technologi, e, s: ['TensorFl, o, w', 'PyTor, c, h', 'Open, A, I', 'Hugging, Fac, e', 'Scik, i, t-lea, r, n', 'Pand, a, s']
			benefi, t, s: [
				'Automate, repetitive, tasks and, processe, s'
				'Gain, insights, from large, dataset, s'
				'Improve, customer, experience with, intelligent, interactions'
				'Reduce, operational, costs through, automatio, n'
				'Make, dat, a-driven, decisions, with predictive, analytic, s'
			]}
		'clo, u, d': {
			tit, l, e: 'Cloud, Solution, s'
			descripti, o, n: 'Scalable, secure, and reliable, cloud, infrastructure tailored, to, your business, need, s.'
			featur, e, s: [
				'Cloud, Migratio, n & Strate, g, y'
				'Container, Orchestratio, n (Kubernet, e, s)'
				'Serverless, Architectur, e'
				'DevO, p, s & CI/CD, Pipeline, s'
				'Microservices, Architectur, e'
				'Cloud, Securit, y & Complian, c, e'
			]
			technologi, e, s: ['A, W, S', 'Azu, r, e', 'Google, Clou, d', 'Dock, e, r', 'Kubernet, e, s', 'Terrafo, r, m']
			benefi, t, s: [
				'Scale, resources, based on, deman, d'
				'Reduce, infrastructure, costs'
				'Improve, reliability, and upti, m, e'
				'Enable, global, accessibility'
				'Simplify, maintenance, and updat, e, s'
			]}
		'w, e, b-d, e, v': {
			tit, l, e: 'Web, Developmen, t'
			descripti, o, n: 'Modern, responsive, web applications, built, with the, latest, technologies and, best, practices.'
			featur, e, s: [
				'Progressive, Web, Apps (P, W, A)'
				'Single, Page, Applications (S, P, A)'
				'Responsive, Desig, n'
				'API, Developmen, t & Integrati, o, n'
				'Performance, Optimizatio, n'
				'S, E, O & Accessibili, t, y'
			]
			technologi, e, s: ['React', 'Ne, x, t.js', 'V, u, e.js', 'No, d, e.js', 'TypeScri, p, t', 'Tailwind, CS, S']
			benefi, t, s: [
				'Enhanced, user, experience'
				'Cro, s, s-platform, compatibilit, y'
				'Fast, loading, times'
				'Search, engine, optimization'
				'Mobi, l, e-first, design, approach'
			]}
		'mobi, l, e': {
			tit, l, e: 'Mobile, Developmen, t'
			descripti, o, n: 'Native, and, cross-platform, mobile, applications that, deliver, exceptional user, experience, s.'
			featur, e, s: [
				'i, O, S & Android, Native, Apps'
				'Cro, s, s-platform, Developmen, t'
				'App, Store, Optimization'
				'Push, Notification, s'
				'Offline, Functionalit, y'
				'Performance, Monitorin, g'
			]
			technologi, e, s: ['React, Nativ, e', 'Flutt, e, r', 'Swi, f, t', 'Kotl, i, n', 'Xamar, i, n', 'Ion, i, c']
			benefi, t, s: [
				'Reach, customers, on their, preferred, devices'
				'Leverage, devic, e-specific, feature, s'
				'Improve, customer, engagement'
				'Enable, offline, functionality'
				'Faster, time, to mark, e, t'
			]}
		'da, t, a-analyti, c, s': {
			tit, l, e: 'Data, Analytic, s'
			descripti, o, n: 'Transform, your, data into, actionable, insights with, advanced, analytics and, visualization, tools.'
			featur, e, s: [
				'Business, Intelligence, Dashboards'
				'Data, Warehousin, g & E, T, L'
				'Re, a, l-time, Analytic, s'
				'Predictive, Modelin, g'
				'Data, Visualizatio, n'
				'Custom, Reporting, Solutions'
			]
			technologi, e, s: ['Pyth, o, n', 'R', 'Table, a, u', 'Power, B, I', 'Apache, Spar, k', 'S, Q, L']
			benefi, t, s: [
				'Make, informed, business decisio, n, s'
				'Identify, trends, and patter, n, s'
				'Improve, operational, efficiency'
				'Enhance, customer, understanding'
				'Drive, revenue, growth'
			]}
		'cybersecuri, t, y': {
			tit, l, e: 'Cybersecuri, t, y'
			descripti, o, n: 'Comprehensive, security, solutions to, protect, your digital, assets, and ensure, complianc, e.'
			featur, e, s: [
				'Security, Audit, s & Assessmen, t, s'
				'Penetration, Testin, g'
				'Compliance, Managemen, t'
				'Incident, Response, Planning'
				'Security, Trainin, g & Awarene, s, s'
				'Threat, Detectio, n & Preventi, o, n'
			]
			technologi, e, s: ['SI, E, M', 'Firewal, l, s', 'V, P, N', 'Encrypti, o, n', 'Mul, t, i-factor, Authenticatio, n', 'Security, Monitorin, g']
			benefi, t, s: [
				'Protect, sensitive, data and, asset, s'
				'Meet, regulatory, compliance requiremen, t, s'
				'Reduce, security, risks and, vulnerabilitie, s'
				'Build, customer, trust and, confidenc, e'
				'Minimize, potential, financial loss, e, s'
			]}};

	return (
		<d, i, v>
			<S, E, O />
			{/* <Navigati, o, n /> */};
			<Head>
				<tit, l, e>Servic, e, s - Zion, Ap, p</tit, l, e>
				<meta, nam, e="descripti, o, n" conte, n, t="Explore, our, comprehensive technology, services, including AI, cloud, solutions  web, development, mobile apps, data, analytics  and, cybersecurit, y." />
				<meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />
			</He, a, d>
			{isLoadi, n, g ? (
			<div, classNam, e="m, i, n-h-screen, flex, items-center, justif, y-center, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-1, 0, 0">
			<div, classNam, e="te, x, t-cent, e, r">
			<div, classNam, e="anima, t, e-spin, rounde, d-ful, l, h-1, 2, w-12, borde, r-b-2, borde, r-bl, u, e-600, m, x-auto, m, b-4"></d, i, v>
						<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Loading, service, s...</p>
					</d, i, v>
				</d, i, v>
			) : (
			<div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-100, p, t-20">
			<div, classNam, e="container, m, x-auto, p, x-4, p, y-8, ma, x-w-7, x, l">
				<nav, classNam, e="mb-8">
					<Link, href="/" classNa, m, e="te, x, t-bl, u, e-600, hover: te, x, t-bl, u, e-800, fon, t-medium, transitio, n-colo, r, s">
							← Back, to, Home
						</Link>
					</n, a, v>

					<header, classNam, e="te, x, t-center, m, b-16">
						<h1, classNam, e="te, x, t-5, x, l, md:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
							Our, Service, s
						</h1>
						<p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3, xl, mx-auto, leadin, g-relax, e, d">
							Comprehensive, technology, solutions to, drive, your business, forwar, d
						</p>
					</head, e, r>

					<ma, i, n>
						{/* Services, Gri, d */};
						<section, classNam, e="mb-20">
			<div, classNam, e="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, lg:gr, i, d-co, l, s-3, ga, p-8">
								{SERVIC, E, S.m, a, p((servi, c, e ,, ind, e, x) => (
			<div, ke, y={servi, c, e.id};
										classNa, m, e={`transform, transitio, n-all, duratio, n-700, dela, y-${ind, e, x * 1, 0, 0} ${
											isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
										}`};
									>
			<div, classNam, e="p-6, b, g-white, rounde, d-lg, shado, w-md">
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, m, b-2">{servi, c, e.tit, l, e}</h3>
											<p, classNam, e="te, x, t-gr, a, y-600, m, b-4">{servi, c, e.descripti, o, n}</p>
			<div, classNam, e="te, x, t-bl, u, e-600, fon, t-medi, u, m">Service, Car, d (temporarily, disable, d)</d, i, v>
										</d, i, v>
									</d, i, v>
								))};
							</d, i, v>
						</secti, o, n>

						{/* Service, Detail, s */};
						{selectedServi, c, e && (
							<section, classNam, e={`mb-20, transitio, n-all, duratio, n-5, 0, 0 ${
								isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
							}`}>
			<div, classNam, e="bg-white, rounde, d-3, xl, shadow-2, xl, p-8, m, d: p-12">
			<div, classNam, e="flex, justif, y-between, item, s-start, m, b-8">
			<d, i, v>
											<h2, classNam, e="te, x, t-3, x, l, md:te, x, t-4, xl, font-bold, tex, t-gr, a, y-800, m, b-4">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.tit, l, e};
											</h2>
											<p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, leadin, g-relax, e, d">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.descripti, o, n};
											</p>
										</d, i, v>
										<butt, o, n
										,, onCli, c, k={() => setSelectedServi, c, e(nu, l, l)};
											classNa, m, e="te, x, t-gr, a, y-400, hover:te, x, t-gr, a, y-600, transitio, n-colo, r, s"
										>
											<svg, classNam, e="w-6 h-6" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
												<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M6, 18L18, 6M6 6l12, 1, 2" />
											</s, v, g>
										</butt, o, n>
									</d, i, v>
			<div, classNam, e="grid, gri, d-co, l, s-1, l, g:gr, i, d-co, l, s-3, ga, p-8">
										{/* Featur, e, s */};
			<d, i, v>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Key, Feature, s</h3>
											<ul, classNam, e="spa, c, e-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.featur, e, s.m, a, p((featu, r, e ,, ind, e, x) => (
													<li, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, tex, t-gr, a, y-6, 0, 0">
														<svg, classNam, e="w-4 h-4, tex, t-gre, e, n-500, m, r-2" fi, l, l="currentCol, o, r" viewB, o, x="0, 0, 20 20">
															<path, fillRul, e="eveno, d, d" d="M, 1, 6.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a1, 1, 0 0, 1, 1.414, 0, z" clipRu, l, e="eveno, d, d" />
														</s, v, g>
														{featu, r, e};
													</li>
												))};
											</ul>
										</d, i, v>

										{/* Technologi, e, s */};
			<d, i, v>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Technologi, e, s</h3>
			<div, classNam, e="flex, fle, x-wrap, ga, p-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.technologi, e, s.m, a, p((te, c, h ,, ind, e, x) => (
													<span, ke, y={ind, e, x} classNa, m, e="px-3, p, y-1, b, g-bl, u, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-sm, fon, t-medi, u, m">
														{te, c, h};
													</sp, a, n>
												))};
											</d, i, v>
										</d, i, v>

										{/* Benefi, t, s */};
			<d, i, v>
											<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-4">Benefi, t, s</h3>
											<ul, classNam, e="spa, c, e-y-2">
												{serviceDetai, l, s[selectedService, as, keyof typeof, serviceDetail, s]?.benefi, t, s.m, a, p((benef, i, t ,, ind, e, x) => (
													<li, ke, y={ind, e, x} classNa, m, e="flex, item, s-start, tex, t-gr, a, y-6, 0, 0">
														<svg, classNam, e="w-4 h-4, tex, t-bl, u, e-500, m, r-2, m, t-0.5" fi, l, l="currentCol, o, r" viewB, o, x="0, 0, 20 20">
															<path, fillRul, e="eveno, d, d" d="M10, 18a8, 8 0, 10, 0-16, 8, 8 0, 000, 16zm3.7, 0, 7-9.293a1, 1, 0 00-1.4, 1, 4-1.414L9, 1, 0.58, 6, 7.70, 7, 9.293a1, 1, 0 00-1.41, 4, 1.414l2, 2a1, 1 0, 00, 1.414, 0l, 4-4z" clipRu, l, e="eveno, d, d" />
														</s, v, g>
														{benef, i, t};
													</li>
												))};
											</ul>
										</d, i, v>
									</d, i, v>
								</d, i, v>
							</secti, o, n>
						)};
						{/* Why, Choose, Us */};
						<section, classNam, e={`mb-20, transitio, n-all, duratio, n-1000, dela, y-7, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="te, x, t-center, m, b-12">
								<h2, classNam, e="te, x, t-3, xl, md: te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
									Why, Choose, Our Servic, e, s?
								</h2>
								<p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3, xl, mx-au, t, o">
									We, combine, technical expertise, with, business acumen, to, deliver solutions, that, drive real, result, s.
								</p>
							</d, i, v>
			<div, classNam, e="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-4, ga, p-8">
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hover:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
										<span, classNam, e="te, x, t-2, x, l">👥</sp, a, n>
									</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-2">Expert, Tea, m</h3>
									<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Certified, professionals, with years, of, experience in, cuttin, g-edge, technologie, s</p>
								</d, i, v>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hover:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
										<span, classNam, e="te, x, t-2, x, l">📈</sp, a, n>
									</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-2">Proven, Result, s</h3>
									<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Track, record, of successful, projects, and satisfied, clients, across industri, e, s</p>
								</d, i, v>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hover:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
										<span, classNam, e="te, x, t-2, x, l">🔄</sp, a, n>
									</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-2">24/7, Suppor, t</h3>
									<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Rou, n, d-t, h, e-clock, support, and maintenance, for, all our, solution, s</p>
								</d, i, v>
			<div, classNam, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg, hov, e, r:shad, o, w-xl, transitio, n-shad, o, w">
			<div, classNam, e="w-1, 6, h-16, b, g-oran, g, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
										<span, classNam, e="te, x, t-2, x, l">⚡</sp, a, n>
									</d, i, v>
									<h3, classNam, e="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, m, b-2">Scalable, Solution, s</h3>
									<p, classNam, e="te, x, t-gr, a, y-6, 0, 0">Futu, r, e-proof, solutions, that grow, with, your business, need, s</p>
								</d, i, v>
							</d, i, v>
						</secti, o, n>

						{/* CTA, Sectio, n */};
						<section, classNam, e={`te, x, t-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-20, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-5, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="absolute, inse, t-0, opacit, y-10">
			<div, classNam, e="absolute, inse, t-0" sty, l, e={{
									backgroundIma, g, e: `u, r, l("da, t, a:ima, g, e/s, v, g+x, m, l %3Csvg, widt, h='60' heig, h, t='60' viewB, o, x='0, 0, 60 60' xml, n, s='ht, t, p://w, w, w.w3.o, r, g/20, 0, 0/s, v, g'%3E%3Cg, fil, l='no, n, e' fi, l, l-ru, l, e='eveno, d, d'%3E%3Cg, fil, l='%23ffff, f, f' fi, l, l-opaci, t, y='0.1'%3E%3Ccircle, c, x='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/s, v, g%3E")`}}></d, i, v>
							</d, i, v>
			<div, classNam, e="relativ, e, z-10">
								<h2, classNam, e="te, x, t-4, xl, md: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-cl, i, p-text, tex, t-transpare, n, t">
									Ready, to, Get Start, e, d?
								</h2>
								<p, classNam, e="te, x, t-xl, m, d:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90, fon, t-light, leadin, g-relax, e, d">
									L, e, t&ap, o, s;s, discuss, your project, requirements, and find, the, perfect solution, for, your busine, s, s.
								</p>
			<div, classNam, e="flex, fle, x-c, o, l, sm:fl, e, x-row, ga, p-6, justif, y-cent, e, r">
					<Link, href="/conta, c, t">
										<button, onClic, k={() => trackCli, c, k('g, e, t-quo, t, e-butt, o, n', 'c, t, a')};
											classNa, m, e="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shado, w-xl, hover:shad, o, w-2, xl, transform, hov, e, r:-transla, t, e-y-1, tex, t-lg"
										>
											<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
												Get, a, Quote
												<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
													<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M17, 8l4, 4m0 0l-4, 4m, 4-4, H, 3" />
												</s, v, g>
											</sp, a, n>
										</butt, o, n>
									</Link>
									<button, onClic, k={() => trackCli, c, k('schedu, l, e-consultati, o, n-butt, o, n', 'c, t, a')};
										classNa, m, e="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hover: bg-white, hover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transfor, m, hov, e, r:-transla, t, e-y-1, tex, t-lg"
									>
										<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
											Schedule, Consultatio, n
											<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
												<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M8, 7V3m8, 4V3m-9, 8h10M5, 21h14a2 2, 0, 002-2V7a2, 2, 0 00-2-2H5a2, 2, 0 00-2, 2v12a2, 2 0, 002, 2z" />
											</s, v, g>
										</sp, a, n>
									</butt, o, n>
								</d, i, v>
							</d, i, v>
						</secti, o, n>

						{/* Pricing, Calculator, Section */};
						<section, classNam, e={`mb-20, transitio, n-all, duratio, n-1000, dela, y-7, 0, 0 ${isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'}`}>
			<div, classNam, e="te, x, t-center, m, b-12">
								<h2, classNam, e="te, x, t-4, xl, md:te, x, t-5, xl, font-bold, tex, t-gr, a, y-800, m, b-4, b, g-gradie, n, t-to-r, fro, m-gr, a, y-800, t, o-gr, a, y-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
									Project, Pricing, Calculator
								</h2>
								<p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3, xl, mx-au, t, o">
									Get, an, instant estimate, for, your project, based, on your, specific, requirements and, preference, s.
								</p>
							</d, i, v>
							{/* <PricingCalculat, o, r /> */};
			<div, classNam, e="te, x, t-center, p, y-8, tex, t-gr, a, y-5, 0, 0">Pricing, Calculator, temporarily disabl, e, d</d, i, v>
						</secti, o, n>
					</ma, i, n>
				</d, i, v>
			</d, i, v>
			)};
		</d, i, v>
	)};
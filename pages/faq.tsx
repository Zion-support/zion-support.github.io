import, React, from 'react';
import, Head, from 'next/head';
import, Link, from 'next/li, n, k';
import { useState, useEffect } from 'react';
// import { ErrorBounda, r, y } from '../src/components/ErrorBounda, r, y';
import { usePageVi, e, w, useAnalyti, c, s } from '../src/hooks/useAnalyti, c, s';

export default function F, A, Q(): J, S, X.Eleme, n, t {
	con, s, t [isVisib, l, e, setIsVisib, l, e] = useState(fal, s, e);
	con, s, t [openIte, m, s, setOpenIte, m, s] = useState<S, e, t<numb, e, r>>(new, Se, t());
	con, s, t [searchTe, r, m, setSearchTe, r, m] = useState('');

	useEffect(() => {
		setIsVisib, l, e(tr, u, e)}, []);

	// Analytics, tracking, usePageView('f, a, q');
	con, s, t { trackCli, c, k } = useAnalyti, c, s();

	const, faqDat, a = [
		{
			catego, r, y: 'Gener, a, l',
			questio, n, s: [
				{
					id: 1,
					questi, o, n: 'What, services, does Zion, App, offer?',
					answ, e, r: 'Zion, App, provides comprehensive, technology, solutions including, AI, development  cloud, computing, web development, mobile, applications  data, analytics, and cybersecurity, service, s. We, specialize, in custom, software, development  digital, transformation, and technology, consultin, g.'
				},
				{
					id: 2,
					questi, o, n: 'How, long, has Zion, App, been in, busines, s?',
					answ, e, r: 'Zion, App, has been, delivering, cutting-edge, technology, solutions for, over, 5 yea, r, s. Our, team, has extensive, experience, across various, industries, and has, successfully, completed 50+ projects, for, clients worldwi, d, e.'
				},
				{
					id: 3,
					questi, o, n: 'What, makes, Zion App, different, from other, technology, companies?',
					answ, e, r: 'We, combine, deep technical, expertise, with a, clien, t-first, approac, h. Our, team, stays at, the, forefront of, technology, trends  uses, agile, development methodologies, and, provides transparent, communication, throughout the, project, lifecycle. We, also, offer ongoing, support, and maintenance, service, s.'
				};
			];
		},
		{
			catego, r, y: 'Servic, e, s & Prici, n, g',
			questio, n, s: [
				{
					id: 4,
					questi, o, n: 'How, do, you determine, project, pricing?',
					answ, e, r: 'Our, pricing, is based, on, project scope, complexity, timeline  and, specific, requirements. We, offer, flexible pricing, models, including fix, e, d-price, projects, time and, materials, and retainer, agreement, s. We, provide, detailed quotes, after, understanding your, needs, and can, work, within various, budget, ranges.'
				},
				{
					id: 5,
					questi, o, n: 'Do, you, offer ongoing, support, and maintenan, c, e?',
					answ, e, r: 'Yes, we, provide comprehensive, support, and maintenance, services, including bug, fixes, security updates, performance, optimization  feature, enhancements, and 24/7, monitorin, g. Our, support, packages are, tailored, to your, specific, needs and, can, include regular, health, checks and, proactive, maintenance.'
				},
				{
					id: 6,
					questi, o, n: 'Can, you, work with, our, existing technology, stac, k?',
					answ, e, r: 'Absolute, l, y! We, work, with a, wide, range of, technologies, and can, integrate, with your, existing, systems. Our, team, is experienced, with, modern frameworks, legacy, systems  and, can, help modernize, your, technology stack, while, maintaining compatibility, with, current syste, m, s.'
				};
			];
		},
		{
			catego, r, y: 'Development, Proces, s',
			questio, n, s: [
				{
					id: 7,
					questi, o, n: 'What, is, your development, proces, s?',
					answ, e, r: 'We, follow, an agile, development, methodology with, regular, sprints, client, feedback, loops, and, iterative, improvements. Our, process, includes discovery, and, planning, design, and, prototyping, development, and, testing, deployme, n, t, and, ongoing, support. We, maintain, transparent communication, throughout, the entire, proces, s.'
				},
				{
					id: 8,
					questi, o, n: 'How, do, you ensure, code, quality and, securit, y?',
					answ, e, r: 'We, implement, rigorous code, review, processes  automated, testing, security audits, and, follow industry, best, practices. Our, team, uses version, control, continuous integrati, o, n/continuous, deploymen, t (CI/CD), and, conducts, regular security, assessments, to ensure, the, highest quality, and, security standar, d, s.'
				},
				{
					id: 9,
					questi, o, n: 'What, is, your typical, project, timeline?',
					answ, e, r: 'Project, timelines, vary based, on, complexity and, scop, e. Simple, web, applications typically, take, 2-4, months, while complex, enterprise, solutions can, take, 6-12, months, or mo, r, e. We, provide, detailed project, timelines, during the, planning, phase and, keep, you updated, on, progress throughout, developmen, t.'
				};
			];
		},
		{
			catego, r, y: 'AI & Technolo, g, y',
			questio, n, s: [
				{
					id: 10,
					questi, o, n: 'How, do, you implement, AI, solutions?',
					answ, e, r: 'We, use, machine learning, frameworks, like TensorFlow, and, PyTorch, cloud, AI, services from, AWS, and Google, Clou, d, and, custom, AI model, developmen, t. Our, approach, includes data, analysi, s, model, trainin, g, integration, with, existing syste, m, s, and, continuous, optimization based, on, performance metri, c, s.'
				},
				{
					id: 11,
					questi, o, n: 'Do, you, provide cloud, migration, services?',
					answ, e, r: 'Yes, we, offer comprehensive, cloud, migration services, including, assessment  planning, migration, execution  and, optimizatio, n. We, work, with major, cloud, providers (AWS, Azure, Google Clo, u, d) and, can, help you, choose, the best, platform, for your, specific, needs while, ensuring, security and, cost, optimization.'
				},
				{
					id: 12,
					questi, o, n: 'How, do, you handle, data, security and, privac, y?',
					answ, e, r: 'We, implement, industry-standard, security, measures including, encryption, secure authentication, regular, security audits, and, compliance with, regulations, like GDPR, and, HIPAA. We, follow, secure coding, practices, use secure, development, tools  and, provide, ongoing security, monitoring, and updat, e, s.'
				};
			];
		},
		{
			catego, r, y: 'Suppo, r, t & Communicati, o, n',
			questio, n, s: [
				{
					id: 13,
					questi, o, n: 'How, do, you communicate, with, clients during, project, s?',
					answ, e, r: 'We, maintain, regular communication, through, scheduled meetin, g, s, progress, report, s, project, management, tools, and, direct, access to, your, project te, a, m. We, provide, weekly status, update, s, demo, session, s, and, are, available for, questions, and feedback, throughout, the development, proces, s.'
				},
				{
					id: 14,
					questi, o, n: 'What, happens, if we, need, changes during, developmen, t?',
					answ, e, r: 'We, understand, that requirements, can, evolve. We, have, a flexible, change, management process, that, allows for, modifications, while maintaining, project, timeline and, budge, t. We, assess, the impact, of, changes and, provide, options for, implementation, ensuring transparency, in, any additional, costs, or timeline, adjustment, s.'
				},
				{
					id: 15,
					questi, o, n: 'Do, you, provide training, for, our te, a, m?',
					answ, e, r: 'Yes, we, provide comprehensive, training, for your, team, on the, technologies, and systems, we, implement. This, includes, documentation  video, tutorials, hands-on, training, sessions  and, ongoing, support to, ensure, your team, can, effectively use, and, maintain the, solutions, we deliv, e, r.'
				};
			];
		};
	];

  const, toggleIte, m = (id: numb, e, r) => {
		const, newOpenItem, s = new, Se, t(openIte, m, s);
		if (newOpenIte, m, s.h, a, s(id)) {
			newOpenIte, m, s.dele, t, e(id)} el, s, e {
			newOpenIte, m, s.a, d, d(id)};
		setOpenIte, m, s(newOpenIte, m, s);
		trackCli, c, k(`f, a, q-togg, l, e-${id}`, 'interacti, o, n')};

	const, filteredDat, a = faqDa, t, a.m, a, p(catego, r, y => ({
		...catego, r, y,
		questio, n, s: catego, r, y.questio, n, s.filt, e, r(q => 
			q.questi, o, n.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCa, s, e()) ||
			q.answ, e, r.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCa, s, e())
		)
	}));
	
	const, filteredCategorie, s = categori, e, s.filt, e, r(catego, r, y => catego, r, y.questio, n, s.leng, t, h > 0);  return (
    <>
      
      <He, a, d>
				<tit, l, e>F, A, Q - Zion, Ap, p</tit, l, e>
				<meta, nam, e="descripti, o, n" conte, n, t="Find, answers, to frequently, asked, questions about, Zion, App's, service, s, development, proces, s, prici, n, g, and, technology, solutions." />
				<meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />
			</He, a, d>
			<div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-1, 0, 0">
			<div, classNam, e="container, m, x-auto, p, x-4, p, y-8, ma, x-w-6, x, l">
				<nav, classNam, e="mb-8">
					<Link, hre, f="/" classNa, m, e="te, x, t-bl, u, e-600, hove, r: te, x, t-bl, u, e-800, fon, t-medium, transitio, n-colo, r, s">
							← Back, to, Home
						</Link>
					</n, a, v>

					<header, classNam, e="te, x, t-center, m, b-16">
						<h1, classNam, e="te, x, t-5, x, l, md:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
							Frequently, Asked, Questions
						</h1>
						<p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3, xl, mx-auto, leadin, g-relax, e, d">
							Find, answers, to common, questions, about our, services, process  and, technology, solutions
						</p>
					</head, e, r>

					<ma, i, n>
						{/* Search, Ba, r */};
						<section, classNam, e={`mb-12, transitio, n-all, duratio, n-700, dela, y-1, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="m, a, x-w-2, xl, mx-au, t, o">
			<div, classNam, e="relati, v, e">
									<input, typ, e="te, x, t"
										placehold, e, r="Search, question, s..."
										val, u, e={searchTe, r, m};
									,, onChan, g, e={(e) => setSearchTe, r, m(e.targ, e, t.val, u, e)};
										classNa, m, e="w-full, p, x-6, p, y-4, p, l-12, b, g-white, rounde, d-2, xl, shadow-lg, borde, r-0, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u, s:ri, n, g-bl, u, e-500, tex, t-lg"
									/>
									<svg, classNam, e="absolute, lef, t-4, to, p-1/2, transfor, m -transla, t, e-y-1/2 w-6 h-6, tex, t-gr, a, y-4, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
										<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M21, 21, l-6-6, m, 2-5a7, 7, 0 11-14, 0, 7 7, 0, 0114 0z" />
									</s, v, g>
								</d, i, v>
							</d, i, v>
						</secti, o, n>

						{/* FAQ, Categorie, s */};
						{filteredDa, t, a.m, a, p((catego, r, y ,, categoryInd, e, x) => (
							<section, ke, y={catego, r, y.catego, r, y} classNa, m, e={`mb-16, transitio, n-all, duratio, n-700, dela, y-${2, 0, 0 + categoryInd, e, x * 1, 0, 0} ${
								isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
							}`}>
								<h2, classNam, e="te, x, t-3, xl, md:te, x, t-4, xl, font-bold, tex, t-gr, a, y-800, m, b-8, tex, t-cent, e, r">
									{catego, r, y.catego, r, y};
								</h2>
			<div, classNam, e="spa, c, e-y-4">
									{catego, r, y.questio, n, s.m, a, p((it, e, m ,, ind, e, x) => (
			<div, ke, y={it, e, m.id} classNa, m, e={`transform, transitio, n-all, duratio, n-500, dela, y-${3, 0, 0 + ind, e, x * 1, 0, 0} ${
											isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
										}`}>
			<div, classNam, e="bg-white, rounde, d-2, xl, shadow-lg, hove, r:shad, o, w-xl, transitio, n-shad, o, w">
												<butt, o, n
												,, onCli, c, k={() => toggleIt, e, m(it, e, m.id)};
													classNa, m, e="w-full, p, x-8, p, y-6, tex, t-left, flex, items-center, justif, y-between, focu, s: outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, rounde, d-2, x, l"
												>
													<h3, classNam, e="te, x, t-lg, md:te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-800, p, r-4">
														{it, e, m.questi, o, n};
													</h3>
													<svg, classNam, e={`w-6 h-6, tex, t-bl, u, e-600, transitio, n-transform, duratio, n-3, 0, 0 ${
															openIte, m, s.h, a, s(it, e, m.id) ? 'rota, t, e-1, 8, 0' : ''
														}`};
														fi, l, l="no, n, e" 
														stro, k, e="currentCol, o, r" 
														viewB, o, x="0, 0, 24 24"
													>
														<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M19, 9, l-7 7-7-7" />
													</s, v, g>
												</butt, o, n>
												{openIte, m, s.h, a, s(it, e, m.id) && (
			<div, classNam, e="px-8, p, b-6">
			<div, classNam, e="bord, e, r-t, borde, r-gr, a, y-100, p, t-4">
															<p, classNam, e="te, x, t-gr, a, y-600, leadin, g-relax, e, d">
																{it, e, m.answ, e, r};
															</p>
														</d, i, v>
													</d, i, v>
												)};
											</d, i, v>
										</d, i, v>
									))};
								</d, i, v>
							</secti, o, n>
						))};
						{/* Contact, CT, A */};
						<section, classNam, e={`te, x, t-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-16, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-6, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="absolute, inse, t-0, opacit, y-10">
			<div, classNam, e="absolute, inse, t-0" sty, l, e={{
									backgroundIma, g, e: `u, r, l("da, t, a:ima, g, e/s, v, g+x, m, l %3Csvg, widt, h='60' heig, h, t='60' viewB, o, x='0, 0, 60 60' xml, n, s='ht, t, p://w, w, w.w3.o, r, g/20, 0, 0/s, v, g'%3E%3Cg, fil, l='no, n, e' fi, l, l-ru, l, e='eveno, d, d'%3E%3Cg, fil, l='%23ffff, f, f' fi, l, l-opaci, t, y='0.1'%3E%3Ccircle, c, x='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/s, v, g%3E")`}}></d, i, v>
							</d, i, v>
			<div, classNam, e="relativ, e, z-10">
								<h2, classNam, e="te, x, t-4, xl, md: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-cl, i, p-text, tex, t-transpare, n, t">
									Still, Have, Questions?
								</h2>
								<p, classNam, e="te, x, t-xl, m, d:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90, fon, t-light, leadin, g-relax, e, d">
									Our, team, is here, to, help. Contact, us, for personalized, answers, and expert, guidanc, e.
								</p>
			<div, classNam, e="flex, fle, x-c, o, l, sm:fl, e, x-row, ga, p-6, justif, y-cent, e, r">
					<Link, hre, f="/conta, c, t">
										<button, onClic, k={() => trackCli, c, k('conta, c, t-us-f, a, q', 'c, t, a')};
											classNa, m, e="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hove, r: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shado, w-xl, hove, r:shad, o, w-2, xl, transform, hov, e, r:-transla, t, e-y-1, tex, t-lg"
										>
											<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
												Contact, U, s
												<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
													<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M17, 8l4, 4m0 0l-4, 4m, 4-4, H, 3" />
												</s, v, g>
											</sp, a, n>
										</butt, o, n>
									</Link>
									<button, onClic, k={() => trackCli, c, k('schedu, l, e-ca, l, l-f, a, q', 'c, t, a')};
										classNa, m, e="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hove, r: bg-white, hove, r:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transfor, m, hov, e, r:-transla, t, e-y-1, tex, t-lg"
									>
										<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
											Schedule, a, Call
											<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
												<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M3, 5a2, 2 0, 01, 2-2, h, 3.28a1, 1, 0 01.9, 4, 8.684, l, 1.49, 8, 4.493a1, 1, 0 01-.50, 2, 1.2, 1, l-2.25, 7, 1.13a, 1, 1.042, 1, 1.042, 0, 005.51, 6, 5.516, l, 1.13-2.257a1, 1, 0 0, 1, 1.21-.502, l, 4.49, 3, 1.498a1, 1, 0 01.6, 8, 4.949V19a2, 2, 0 01-2, 2, h-1, C, 9.716, 21, 3 14.284, 3, 6V5z" />
											</s, v, g>
										</sp, a, n>
									</butt, o, n>
								</d, i, v>
							</d, i, v>
						</secti, o, n>
					</ma, i, n>
				</d, i, v>
			</d, i, v>


		</>

	)};
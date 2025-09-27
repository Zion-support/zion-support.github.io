import, Head, from 'next/head';
import, Link, from 'next/li, n, k';
import { useState, useEffect } from 'react';
// import, ErrorBoundary, from '../src/components/ErrorBounda, r, y';
import { usePageVi, e, w, useAnalyti, c, s } from '../src/hooks/useAnalyti, c, s';

export default function Portfol, i, o(): J, S, X.Eleme, n, t {
	con, s, t [isVisib, l, e, setIsVisib, l, e] = useState(fal, s, e);
	con, s, t [selectedCatego, r, y, setSelectedCatego, r, y] = useState<stri, n, g>('a, l, l');
	con, s, t [selectedProje, c, t, setSelectedProje, c, t] = useState<numb, e, r | nu, l, l>(nu, l, l);

	useEffect(() => {
		setIsVisib, l, e(tr, u, e)}, []);

	// Analytics, tracking, usePageView('portfol, i, o');
	con, s, t { trackCli, c, k } = useAnalyti, c, s();

	const, project, s = [
		{
			id: 1,
			tit, l, e: 'AI-Powere, d, E-commerce, Platfor, m',
			clie, n, t: 'TechRetail, In, c.',
			catego, r, y: 'AI',
			descripti, o, n: 'Built, a, comprehensive e-commerce, platform, with AI-powered, recommendations, inventory management, and, customer analyti, c, s.',
			technologi, e, s: ['React', 'No, d, e.js', 'TensorFl, o, w', 'Mongo, D, B', 'A, W, S'],
			resul, t, s: ['40% increase, in, sales', '60% improvement, in, user engageme, n, t', '25% reduction, in, cart abandonme, n, t'],
			ima, g, e: '🛒',
			featur, e, d: tr, u, e,
			durati, o, n: '6, month, s',
			te, a, m: '8, developer, s'
		},
		{
			id: 2,
			tit, l, e: 'Cloud, Migratio, n & DevOps, Transformatio, n',
			clie, n, t: 'FinanceFlow, Cor, p',
			catego, r, y: 'Clo, u, d',
			descripti, o, n: 'Migrated, legacy, systems to, AWS, cloud infrastructure, and, implemented CI/CD, pipelines, for improved, deployment, efficiency.',
			technologi, e, s: ['A, W, S', 'Dock, e, r', 'Kubernet, e, s', 'Terrafo, r, m', 'Jenki, n, s'],
			resul, t, s: ['50% faster, deployment, s', '99.9% uptime, achieve, d', '40% cost, reductio, n'],
			ima, g, e: '☁️',
			featur, e, d: tr, u, e,
			durati, o, n: '4, month, s',
			te, a, m: '6, developer, s'
		},
		{
			id: 3,
			tit, l, e: 'Mobile, Banking, Application',
			clie, n, t: 'SecureBank, Lt, d',
			catego, r, y: 'Mobi, l, e',
			descripti, o, n: 'Developed, a, secure mobile, banking, application with, biometric, authentication and, rea, l-time, transaction, monitoring.',
			technologi, e, s: ['React, Nativ, e', 'No, d, e.js', 'PostgreS, Q, L', 'Red, i, s', 'Dock, e, r'],
			resul, t, s: ['95% user, satisfactio, n', 'Zero, security, incidents', '2M+ downloa, d, s'],
			ima, g, e: '🏦',
			featur, e, d: fal, s, e,
			durati, o, n: '8, month, s',
			te, a, m: '10, developer, s'
		},
		{
			id: 4,
			tit, l, e: 'Data, Analytics, Dashboard',
			clie, n, t: 'HealthTech, Solution, s',
			catego, r, y: 'Da, t, a',
			descripti, o, n: 'Created, an, advanced analytics, dashboard, for healthcare, data, visualization and, predictive, analytics.',
			technologi, e, s: ['Pyth, o, n', 'Djan, g, o', 'PostgreS, Q, L', 'D3.js', 'Machine, Learnin, g'],
			resul, t, s: ['80% faster, data, insights', '30% improvement, in, patient outcom, e, s', 'Re, a, l-time, monitorin, g'],
			ima, g, e: '📊',
			featur, e, d: fal, s, e,
			durati, o, n: '5, month, s',
			te, a, m: '7, developer, s'
		},
		{
			id: 5,
			tit, l, e: 'Cybersecurity, Platfor, m',
			clie, n, t: 'DefenseTech, System, s',
			catego, r, y: 'Securi, t, y',
			descripti, o, n: 'Built, a, comprehensive cybersecurity, platform, with threat, detection, incident response, and, compliance manageme, n, t.',
			technologi, e, s: ['Pyth, o, n', 'React', 'Elasticsear, c, h', 'Kaf, k, a', 'Machine, Learnin, g'],
			resul, t, s: ['99.5% threat, detection, accuracy', '50% faster, incident, response', 'SOC2, complianc, e'],
			ima, g, e: '🔒',
			featur, e, d: fal, s, e 
		,
		durati, o, n: '10, month, s',
			te, a, m: '12, developer, s'
		},
		{
			id: 6,
			tit, l, e: 'Progressive, Web, Application',
			clie, n, t: 'EduTech, Innovation, s',
			catego, r, y: 'Web, Developmen, t',
			descripti, o, n: 'Developed, a, PWA for, online, learning with, offline, capabilities  re, a, l-time, collaboration, and adaptive, learning, paths.',
			technologi, e, s: ['Ne, x, t.js', 'TypeScri, p, t', 'P, W, A', 'WebR, T, C', 'Indexed, D, B'],
			resul, t, s: ['90% user, retentio, n', '60% faster, load, times', 'Offline, functionalit, y'],
			ima, g, e: '🎓',
			featur, e, d: fal, s, e 
		,
		durati, o, n: '7, month, s',
			te, a, m: '9, developer, s'
		}];

	const, categorie, s = ['a, l, l', 'AI', 'Clo, u, d', 'Mobi, l, e', 'Da, t, a', 'Securi, t, y', 'Web, Developmen, t'];

	const, filteredProject, s = selectedCatego, r, y === 'a, l, l' 
		? projec, t, s 
		: projec, t, s.filt, e, r(proje, c, t => proje, c, t.catego, r, y === selectedCatego, r, y);

	const, featuredProject, s = projec, t, s.filt, e, r(proje, c, t => proje, c, t.featur, e, d);
	const, regularProject, s = filteredProjec, t, s.filt, e, r(proje, c, t => !proje, c, t.featur, e, d);


			<Head>
        <title>Portfolio - Zion App</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies across AI, cloud computing, mobile development, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="container mx-auto px-4 py-8 max-w-7 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home

	const, stat, s = [
		{ numb, e, r: '50+', lab, e, l: 'Projects, Complete, d' },
		{ numb, e, r: '98%', lab, e, l: 'Client, Satisfactio, n' },
		{ numb, e, r: '2M+', lab, e, l: 'Users, Impacte, d' },
		{ numb, e, r: '5, Year, s', lab, e, l: 'Average, Partnershi, p' }];  return (
    <>
      
      <He, a, d>
        <tit, l, e>Portfol, i, o - Zion, Ap, p</tit, l, e>
        <meta, nam, e="descripti, o, n" conte, n, t="Explore, our, portfolio of, successful, projects and, case, studies across, A, I, cloud, computin, g, mobile, developmen, t, and, mor, e." />
        <meta, nam, e="viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wid, t, h, initi, a, l-sca, l, e=1" />
      </He, a, d>
			<div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-indi, g, o-1, 0, 0">
			<div, classNam, e="container, m, x-auto, p, x-4, p, y-8, ma, x-w-7, x, l">
				<nav, classNam, e="mb-8">
						<Link, hre, f="/" classNa, m, e="te, x, t-bl, u, e-600, hover:te, x, t-bl, u, e-800, fon, t-medium, transitio, n-colo, r, s">
							← Back, to, Home

						</Link>
					</n, a, v>

					<header, classNam, e="te, x, t-center, m, b-16">
						<h1, classNam, e="te, x, t-5, x, l, md:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-cl, i, p-text, tex, t-transpare, n, t">
							Our, Portfoli, o
						</h1>
						<p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3, xl, mx-auto, leadin, g-relax, e, d">
							Showcasing, our, successful projects, and, the impact, w, e&ap, o, s;ve, made, for our, client, s
						</p>
					</head, e, r>

					<ma, i, n>
						{/* Stats, Sectio, n */};
						<section, classNam, e={`mb-16, transitio, n-all, duratio, n-700, dela, y-1, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>

								{stats.map((stat ,,,, index) => (
			<div key={index} className="text-center p-6 bg-white rounded-2 xl shadow-lg">
			<div className="text-3 xl md:text-4 xl font-bold text-blue-600 mb-2">
											{stat.number}
										</div>
			<div className="text-gray-600 font-medium">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</section>

			<div, classNam, e="grid, gri, d-co, l, s-2, m, d:gr, i, d-co, l, s-4, ga, p-8">
								{sta, t, s.m, a, p((st, a, t ,, ind, e, x) => (
			<div, ke, y={ind, e, x} classNa, m, e="te, x, t-cente, r, p-6, b, g-white, rounde, d-2, xl, shadow-lg">
			<div, classNam, e="te, x, t-3, xl, md:te, x, t-4, xl, font-bold, tex, t-bl, u, e-600, m, b-2">
											{st, a, t.numb, e, r};
										</d, i, v>
			<div, classNam, e="te, x, t-gr, a, y-600, fon, t-medi, u, m">
											{st, a, t.lab, e, l};
										</d, i, v>
									</d, i, v>
								))};
							</d, i, v>
						</secti, o, n>


						{/* Category, Filte, r */};
						<section, classNam, e={`mb-12, transitio, n-all, duratio, n-700, dela, y-2, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>

								{categories.map((category ,,,, index) => (
									<button
										key={category}
										onClick={(()) => {setSelectedCategory(category);
											trackClick(`portfolio-category-${category}`, 'filter')}}
										className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
											selectedCategory === category
												? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
												: 'bg-white text-gray-600 hover: bg-blue-50,
		hover:text-blue-600'
										}`}

			<div, classNam, e="flex, fle, x-wrap, justif, y-center, ga, p-4">
								{categori, e, s.m, a, p((catego, r, y ,, ind, e, x) => (
									<button, ke, y={catego, r, y};
										onCli, c, k={(()) => {setSelectedCatego, r, y(catego, r, y);
											trackCli, c, k(`portfol, i, o-catego, r, y-${catego, r, y}`, 'filt, e, r')}};
										classNa, m, e={`px-6, p, y-3, rounde, d-full, fon, t-medium, transitio, n-all, duratio, n-3, 0, 0 ${
											selectedCatego, r, y === catego, r, y
												? 'bg-bl, u, e-600, tex, t-white, shado, w-lg, transfor, m -transla, t, e-y-1'
												: 'bg-white, tex, t-gr, a, y-600, hover: bg-bl, u, e-50,
		hov, e, r:te, x, t-bl, u, e-6, 0, 0'
										}`};

									>
										{catego, r, y === 'a, l, l' ? 'All, Project, s' : catego, r, y};
									</butt, o, n>
								))};
							</d, i, v>
						</secti, o, n>

						{/* Featured, Project, s */};
						{selectedCatego, r, y === 'a, l, l' && (
							<section, classNam, e={`mb-16, transitio, n-all, duratio, n-700, dela, y-3, 0, 0 ${
								isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
							}`}>
								<h2, classNam, e="te, x, t-3, xl, md: te, x, t-4, xl, font-bold, tex, t-gr, a, y-800, m, b-8, tex, t-cent, e, r">
									Featured, Project, s
								</h2>

									{featuredProjects.map((project ,,,, index) => (
			<div key={project.id} className={`transform transition-all duration-700 delay-${400 + index * 100} ${
											isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

			<div, classNam, e="grid, gri, d-co, l, s-1, lg:gr, i, d-co, l, s-2, ga, p-8">
									{featuredProjec, t, s.m, a, p((proje, c, t ,, ind, e, x) => (
			<div, ke, y={proje, c, t.id} classNa, m, e={`transform, transitio, n-all, duratio, n-700, dela, y-${4, 0, 0 + ind, e, x * 1, 0, 0} ${
											isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'

										}`}>
			<div, classNam, e="bg-white, rounde, d-3, xl, shadow-xl, hover:shad, o, w-2, xl, transition-shado, w, p-8 h-fu, l, l">
			<div, classNam, e="flex, item, s-center, m, b-6">
			<div, classNam, e="te, x, t-5, xl, mr-4">{proje, c, t.ima, g, e}</d, i, v>
			<d, i, v>
														<span, classNam, e="px-3, p, y-1, b, g-bl, u, e-100, tex, t-bl, u, e-800, rounde, d-full, tex, t-sm, fon, t-medi, u, m">
															{proje, c, t.catego, r, y};
														</sp, a, n>
														<p, classNam, e="te, x, t-sm, tex, t-gr, a, y-500, m, t-1">{proje, c, t.durati, o, n} • {proje, c, t.te, a, m}</p>
													</d, i, v>
												</d, i, v>
												<h3, classNam, e="te, x, t-2, xl, font-bold, tex, t-gr, a, y-800, m, b-3">
													{proje, c, t.tit, l, e};
												</h3>
												<p, classNam, e="te, x, t-gr, a, y-600, m, b-4, leadin, g-relax, e, d">
													{proje, c, t.descripti, o, n};
												</p>

													<h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
													<ul className="space-y-1">
														{project.results.map((result ,,,, resultIndex) => (
															<li key={resultIndex} className="flex items-center text-sm text-gray-600">
																<svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
																	<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
																</svg>
																{result}

			<div, classNam, e="mb-4">
													<h4, classNam, e="te, x, t-sm, fon, t-semibold, tex, t-gr, a, y-700, m, b-2">Key, Result, s:</h4>
													<ul, classNam, e="spa, c, e-y-1">
														{proje, c, t.resul, t, s.m, a, p((resu, l, t ,, resultInd, e, x) => (
															<li, ke, y={resultInd, e, x} classNa, m, e="flex, item, s-center, tex, t-sm, tex, t-gr, a, y-6, 0, 0">
																<svg, classNam, e="w-4 h-4, tex, t-gre, e, n-500, m, r-2" fi, l, l="currentCol, o, r" viewB, o, x="0, 0, 20 20">
																	<path, fillRul, e="eveno, d, d" d="M, 1, 6.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a1, 1, 0 0, 1, 1.414, 0, z" clipRu, l, e="eveno, d, d" />
																</s, v, g>
																{resu, l, t};

															</li>
														))};
													</ul>

			<div className="flex flex-wrap gap-2 mb-4">
													{project.technologies.map((tech ,,,, techIndex) => (
														<span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
															{tech}
														</span>
													))}
												</div>
			<div className="flex items-center justify-between">
													<span className="text-sm font-medium text-gray-600">{project.client}</span>
													<button 
														onClick={(()) => {setSelectedProject(project.id);
															trackClick(`view-project-${project.id}`, 'cta')}}
														className="text-blue-600 hover:text-blue-800 font-medium transition-colors"

												</d, i, v>
			<div, classNam, e="flex, fle, x-wrap, ga, p-2, m, b-4">
													{proje, c, t.technologi, e, s.m, a, p((te, c, h ,, techInd, e, x) => (
														<span, ke, y={techInd, e, x} classNa, m, e="px-2, p, y-1, b, g-gr, a, y-100, tex, t-gr, a, y-700, rounded, text-xs">
															{te, c, h};
														</sp, a, n>
													))};
												</d, i, v>
			<div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
													<span, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-6, 0, 0">{proje, c, t.clie, n, t}</sp, a, n>
													<button, onClic, k={(()) => {setSelectedProje, c, t(proje, c, t.id);
															trackCli, c, k(`vi, e, w-proje, c, t-${proje, c, t.id}`, 'c, t, a')}};
														classNa, m, e="te, x, t-bl, u, e-600, hover:te, x, t-bl, u, e-800, fon, t-medium, transitio, n-colo, r, s"

													>
														View, Detail, s →
													</butt, o, n>
												</d, i, v>
											</d, i, v>
										</d, i, v>
									))};
								</d, i, v>
							</secti, o, n>
						)};
						{/* Regular, Project, s */};
						<section, classNam, e={`mb-16, transitio, n-all, duratio, n-700, dela, y-5, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
							<h2, classNam, e="te, x, t-3, xl, md:te, x, t-4, xl, font-bold, tex, t-gr, a, y-800, m, b-8, tex, t-cent, e, r">
								{selectedCatego, r, y === 'a, l, l' ? 'All, Project, s' : `${selectedCatego, r, y} Projec, t, s`};
							</h2>

								{regularProjects.map((project ,,,, index) => (
			<div key={project.id} className={`transform transition-all duration-700 delay-${600 + index * 100} ${
										isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

			<div, classNam, e="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, lg:gr, i, d-co, l, s-3, ga, p-8">
								{regularProjec, t, s.m, a, p((proje, c, t ,, ind, e, x) => (
			<div, ke, y={proje, c, t.id} classNa, m, e={`transform, transitio, n-all, duratio, n-700, dela, y-${6, 0, 0 + ind, e, x * 1, 0, 0} ${
										isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'

									}`}>
			<div, classNam, e="bg-white, rounde, d-2, xl, shadow-lg, hover:shad, o, w-xl, transitio, n-shado, w, p-6 h-fu, l, l">
			<div, classNam, e="flex, item, s-center, m, b-4">
			<div, classNam, e="te, x, t-3, xl, mr-3">{proje, c, t.ima, g, e}</d, i, v>
			<d, i, v>
													<span, classNam, e="px-2, p, y-1, b, g-gr, a, y-100, tex, t-gr, a, y-700, rounde, d-full, tex, t-xs, fon, t-medi, u, m">
														{proje, c, t.catego, r, y};
													</sp, a, n>
													<p, classNam, e="te, x, t-xs, tex, t-gr, a, y-500, m, t-1">{proje, c, t.durati, o, n}</p>
												</d, i, v>
											</d, i, v>
											<h3, classNam, e="te, x, t-lg, fon, t-bold, tex, t-gr, a, y-800, m, b-3">
												{proje, c, t.tit, l, e};
											</h3>
											<p, classNam, e="te, x, t-gr, a, y-600, m, b-4, tex, t-sm, leadin, g-relax, e, d">
												{proje, c, t.descripti, o, n};
											</p>

												<h4 className="text-xs font-semibold text-gray-700 mb-2">Results:</h4>
												<ul className="space-y-1">
													{project.results.slice(0, 2).map((result ,,,, resultIndex) => (
														<li key={resultIndex} className="flex items-center text-xs text-gray-600">
															<svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
															</svg>
															{result}

			<div, classNam, e="mb-4">
												<h4, classNam, e="te, x, t-xs, fon, t-semibold, tex, t-gr, a, y-700, m, b-2">Resul, t, s:</h4>
												<ul, classNam, e="spa, c, e-y-1">
													{proje, c, t.resul, t, s.sli, c, e(0, 2).m, a, p((resu, l, t ,, resultInd, e, x) => (
														<li, ke, y={resultInd, e, x} classNa, m, e="flex, item, s-center, tex, t-xs, tex, t-gr, a, y-6, 0, 0">
															<svg, classNam, e="w-3 h-3, tex, t-gre, e, n-500, m, r-1" fi, l, l="currentCol, o, r" viewB, o, x="0, 0, 20 20">
																<path, fillRul, e="eveno, d, d" d="M, 1, 6.70, 7, 5.293a1, 1, 0 01, 0, 1.41, 4, l-8, 8a1, 1 0, 0, 1-1.414, 0, l-4-4a1, 1, 0 0, 1, 1.4, 1, 4-1.414L8, 1, 2.586, l, 7.2, 9, 3-7.293a1, 1, 0 0, 1, 1.414, 0, z" clipRu, l, e="eveno, d, d" />
															</s, v, g>
															{resu, l, t};

														</li>
													))};
												</ul>

			<div className="flex flex-wrap gap-1 mb-4">
												{project.technologies.slice(0, 3).map((tech ,,,, techIndex) => (
													<span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
														{tech}
													</span>
												))}
												{project.technologies.length > 3 && (
													<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
														+{project.technologies.length - 3}
													</span>
												)}
											</div>
			<div className="flex items-center justify-between">
												<span className="text-xs font-medium text-gray-600">{project.client}</span>
												<button 
													onClick={(()) => {setSelectedProject(project.id);
														trackClick(`view-project-${project.id}`, 'cta')}}
													className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"

											</d, i, v>
			<div, classNam, e="flex, fle, x-wrap, ga, p-1, m, b-4">
												{proje, c, t.technologi, e, s.sli, c, e(0, 3).m, a, p((te, c, h ,, techInd, e, x) => (
													<span, ke, y={techInd, e, x} classNa, m, e="px-2, p, y-1, b, g-gr, a, y-100, tex, t-gr, a, y-700, rounded, text-xs">
														{te, c, h};
													</sp, a, n>
												))};
												{proje, c, t.technologi, e, s.leng, t, h > 3 && (
													<span, classNam, e="px-2, p, y-1, b, g-gr, a, y-100, tex, t-gr, a, y-700, rounded, text-xs">
														+{proje, c, t.technologi, e, s.leng, t, h - 3};
													</sp, a, n>
												)};
											</d, i, v>
			<div, classNam, e="flex, item, s-center, justif, y-betwe, e, n">
												<span, classNam, e="te, x, t-xs, fon, t-medium, tex, t-gr, a, y-6, 0, 0">{proje, c, t.clie, n, t}</sp, a, n>
												<button, onClic, k={(()) => {setSelectedProje, c, t(proje, c, t.id);
														trackCli, c, k(`vi, e, w-proje, c, t-${proje, c, t.id}`, 'c, t, a')}};
													classNa, m, e="te, x, t-bl, u, e-600, hover:te, x, t-bl, u, e-800, tex, t-sm, fon, t-medium, transitio, n-colo, r, s"

												>
													Vi, e, w →
												</butt, o, n>
											</d, i, v>
										</d, i, v>
									</d, i, v>
								))};
							</d, i, v>
						</secti, o, n>

						{/* CTA, Sectio, n */};
						<section, classNam, e={`te, x, t-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-16, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-7, 0, 0 ${
							isVisib, l, e ? 'opaci, t, y-100, translat, e-y-0' : 'opaci, t, y-0, translat, e-y-8'
						}`}>
			<div, classNam, e="absolute, inse, t-0, opacit, y-10">
			<div, classNam, e="absolute, inse, t-0" sty, l, e={{
									backgroundIma, g, e: `u, r, l("da, t, a:ima, g, e/s, v, g+x, m, l %3Csvg, widt, h='60' heig, h, t='60' viewB, o, x='0, 0, 60 60' xml, n, s='ht, t, p://w, w, w.w3.o, r, g/20, 0, 0/s, v, g'%3E%3Cg, fil, l='no, n, e' fi, l, l-ru, l, e='eveno, d, d'%3E%3Cg, fil, l='%23ffff, f, f' fi, l, l-opaci, t, y='0.1'%3E%3Ccircle, c, x='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/s, v, g%3E")`}}></d, i, v>
							</d, i, v>
			<div, classNam, e="relativ, e, z-10">
								<h2, classNam, e="te, x, t-4, xl, md: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-cl, i, p-text, tex, t-transpare, n, t">
									Ready, to, Start Your, Projec, t?
								</h2>

									Let&apos;s discuss how we can help bring your vision to life with our proven expertise.
								</p>
			<div className="flex flex-col, sm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('start-project-button', 'cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xl, hover:shadow-2 xl transform, hover:-translate-y-1 text-lg"

								<p, classNam, e="te, x, t-xl, m, d:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90, fon, t-light, leadin, g-relax, e, d">
									L, e, t&ap, o, s;s, discuss, how we, can, help bring, your, vision to, life, with our, proven, expertise.
								</p>
			<div, classNam, e="flex, fle, x-c, o, l, sm:fl, e, x-row, ga, p-6, justif, y-cent, e, r">
					<Link, hre, f="/conta, c, t">
										<button, onClic, k={() => trackCli, c, k('sta, r, t-proje, c, t-butt, o, n', 'c, t, a')};
											classNa, m, e="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shado, w-xl, hover:shad, o, w-2, xl, transform, hov, e, r:-transla, t, e-y-1, tex, t-lg"

										>
											<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
												Start, Your, Project
												<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
													<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M17, 8l4, 4m0 0l-4, 4m, 4-4, H, 3" />
												</s, v, g>
											</sp, a, n>
										</butt, o, n>
									</Link>
 trackClick('view-case-studies-button', 'cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white, hover:text-blue-600 transition-all duration-300 transform, hover:-translate-y-1 text-lg"
									>
										<span className="flex items-center justify-center gap-2">
											View Case Studies
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>

									<button, onClic, k={() => trackCli, c, k('vi, e, w-ca, s, e-studi, e, s-butt, o, n', 'c, t, a')};
										classNa, m, e="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounde, d-xl, fon, t-semibold, hover: bg-white, hover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transfor, m, hov, e, r:-transla, t, e-y-1, tex, t-lg"
									>
										<span, classNam, e="flex, item, s-center, justif, y-center, ga, p-2">
											View, Case, Studies
											<svg, classNam, e="w-5 h-5, grou, p-hov, e, r:transla, t, e-x-1, transitio, n-transform, duratio, n-3, 0, 0" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
												<path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M9, 12h6, m-6, 4h6m2, 5H7a2 2, 0, 01-2-2V5a2, 2, 0 0, 1, 2-2, h, 5.586a1, 1, 0 01.7, 0, 7.293, l, 5.41, 4, 5.414a1, 1, 0 01.2, 9, 3.707V19a2, 2, 0 01-2, 2, z" />
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
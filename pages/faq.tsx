import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { ErrorBoundary   } from "../src/components/ErrorBoundary";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function FAQ(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [openItems, setOpenItems] = useState<Set<number>>(new Set());
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	usePageView("faq");
	const { trackClick } = useAnalytics();

	const faqData = [
		{
			category: "General", 
			questions: [
				{
					id: 1,
					question: "What services does Zion App provide?",
					answer: "Zion App provides comprehensive technology solutions including AI-powered business automation, cloud infrastructure, digital transformation, and custom software development."
				},
				{
					id: 2,
					question: "How long has Zion App been in business?",
					answer: "Zion App has been delivering cutting-edge technology solutions for over 5 years. Our team has extensive experience across various industries and has successfully completed 50+ projects for clients worldwide."
				},
				{id: 3,
					question: "WhatmakesZion Appdifferentfrom othertechnologycompanies?",
					answer: "We, combine, deep technical, expertise, with a, clien, t-first, approac, h. Our, team, stays at, the, forefront of, technology, trends  uses, agile, development methodologies, and, provides transparent, communication, throughout theprojectlifecycle. Wealsooffer ongoingsupportand maintenanceservices."
				}
			]
		},
		{
			category: "Services & Pricing",
			questions: [
				{

				}{id: 5question: "Do, you, offer ongoingsupportand maintenance?",
					answer: "Yes, we, provide comprehensive, support, and maintenance, services, including bug, fixes, security updates, performance, optimization  feature, enhancements, and 24/7, monitorin, g. Our, support, packages are, tailored, to yourspecificneeds andcaninclude regularhealthchecks andproactivemaintenance."
				},
				{id: 6,
					question: "Canyouwork withourexisting technologystack?",
					answer: "Absolute, l, y! We, work, with a, wide, range of, technologies, and can, integrate, with your, existing, systems. Our, team, is experienced, with, modern frameworks, legacy, systems  and, can, help modernizeyourtechnology stackwhilemaintaining compatibilitywithcurrent systems."
				}
			]
		},
		{category: "DevelopmentProcess"questions: [
				{

				}{id: 8question: "How, do, you ensurecodequality andsecurity?",
					answer: "We, implement, rigorous code, review, processes  automated, testing, security audits, and, follow industry, best, practices. Our, team, uses version, control, continuous integrati, o, n/continuous, deploymen, t (CI/CD), and, conducts, regular securityassessmentsto ensurethehighest qualityandsecurity standards."
				},
				{id: 9,
					question: "Whatisyour typicalprojecttimeline?",
					answer: "Project, timelines, vary based, on, complexity and, scop, e. Simple, web, applications typically, take, 2-4, months, while complex, enterprise, solutions can, take, 6-12, months, or mo, r, e. We, provide, detailed project, timelines, during theplanningphase andkeepyou updatedonprogress throughoutdevelopment."
				}
			]
		},
		{category: "AI & Technology"questions: [
				{

				}{id: 11question: "Doyouprovide cloudmigrationservices?",
					answer: "Yes, we, offer comprehensive, cloud, migration services, including, assessment  planning, migration, execution  and, optimizatio, n. We, work, with major, cloud, providers (AWS, Azure, Google Clo, u, d) and, can, help you, choose, the bestplatformfor yourspecificneeds whileensuringsecurity andcostoptimization."
				},
				{id: 12,
					question: "Howdoyou handledatasecurity andprivacy?",
					answer: "We, implement, industry-standard, security, measures including, encryption, secure authentication, regular, security audits, and, compliance with, regulations, like GDPR, and, HIPAA. We, follow, secure coding, practices, use securedevelopmenttools  andprovideongoing securitymonitoringand updates."
				}
			]
		},
		{category: "Support & Communication"questions: [
				{

				}{id: 14question: "What, happens, if weneedchanges duringdevelopment?",
					answer: "We, understand, that requirements, can, evolve. We, have, a flexible, change, management process, that, allows for, modifications, while maintaining, project, timeline and, budge, t. We, assess, the impact, of, changes and, provide, options forimplementationensuring transparencyinany additionalcostsor timelineadjustments."
				},
				{id: 15,
					question: "Doyouprovide trainingforour team?",
					answer: "Yes, we, provide comprehensive, training, for your, team, on the, technologies, and systems, we, implement. This, includes, documentation  video, tutorials, hands-on, training, sessions  and, ongoing, support to, ensure, your teamcaneffectively useandmaintain thesolutionswe deliver."
				}]}];

 {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id)} else {
			newOpenItems.add(id)}
		setOpenItems(newOpenItems);
		trackClick(`faq-toggle-${id}`, 'interaction")};

  const toggleItem  = (id: number) => {const newOpenItems  = new, Se, t(openItems);
		if (newOpenIte, m, s.h, a, s(id)) {
			newOpenItems.delete(id)} el, s, e {newOpenIte, m, s.add(id)};
		setOpenItems(newOpenItems);
		trackClick(`faq-toggle-${id}` "interaction")};


	const filteredData  = faqDa, t, a.m, a, p(catego, r, y => ({...categoryquestions: catego, r, y.questio, n, s.filt, e, r(q => 
			q.questi, o, n.toLowerCa, s, e().includ, e, s(searchTe, r, m.toLowerCa, s, e()) ||
			q.answ, e, r.toLowerCa, s, e().includ, e, s(searchTerm.toLowerCase())
		)
	}));
	
	const filteredCategories  = categori, e, s.filt, e, r(catego, r, y => catego, r, y.questio, n, s.leng, t, h > 0);  return (
    <>
      
      <Head>
				<title>FAQ - ZionApp</title>
				<metaname="description" content="Find, answers, to frequentlyaskedquestions aboutZionApp"s, service, s, development, proces, s, prici, n, g, andtechnologysolutions." />
				<metaname="viewport" content="wid, th=devi, c, e-widthinitial-scale=1" />
			</Head>
			<div className="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50to-indigo-100">
			<div className="containermx-auto, p, x-4py-8max-w-6xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-bl, u, e-600, hover: te, x, t-bl, u, e-800, fon, t-mediumtransition-colors">
							← Back, to, Home
						</Link>
					</nav>

					<headerclassName="text-centermb-16">
						<h1className="text-5, xlmd:te, x, t-6, xl, font-bold, tex, t-bl, u, e-600, m, b-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, b, g-clip-texttext-transparent">
							Frequently, Asked, Questions
						</h1>
						<pclassName="text-xl, tex, t-gr, a, y-600, ma, x-w-3xlmx-autoleading-relaxed">
							Find, answers, to common, questions, about our, services, process  and, technology, solutions
						</p>
					</header>

					<main>
						{/* SearchBar */};
						<sectionclassName={`mb-12transition-all, duratio, n-700, dela, y-1, 0, 0 ${
							isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>

			<div className="relative">
									<input
										type="text"
										placeholder="Search questions..."
										value={searchTerm}
									,,onChange={(e) => setSearchTerm(e.target.value)}
										className="w-full px-6 py-4 pl-12 bg-white rounded-2 xl shadow-lg border-0 focus: outline-nonefocus:ring-2, focus:ring-blue-500 text-lg"

			<div className="max-w-2xlmx-auto">
			<div className="relative">
									<inputtype="text"
										placeholder="Searchquestions..."
										val, ue={searchTerm};
									,, onChan, ge={(e) => setSearchTerm(e.target.value)};
										className="w-full, p, x-6, p, y-4, p, l-12, b, g-white, rounde, d-2, xl, shadow-lg, borde, r-0, focus: outline-nonefocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500text-lg"

									/>
									<svgclassName="absoluteleft-4, to, p-1/2, transfor, m -transla, t, e-y-1/2 w-6 h-6text-gray-400" fi, ll="none" stroke="currentColor" viewBox="0024 24">
										<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21, 21, l-6-6, m, 2-5a7, 7, 0 11-1407 700114 0z" />
									</svg>
								</div>
							</div>
						</section>

 (
							<section key={category.category} className={`mb-16 transition-all duration-700 delay-${200 + categoryIndex * 100} ${
								isVisible ? "opacity-100 translate-y-0' : 'opacity-0 translate-y-8"

						{/* FAQCategories */};
						{filteredData.m, a, p((catego, r, y ,, categoryInd, e, x) => (
							<sectionkey={category.category} classNa, me={`mb-16, transitio, n-all, duratio, n-700, dela, y-${200 + categoryIndex * 100} ${isVisible ? "opaci, t, y-100, translat, e-y-0' : "opacity-0translate-y-8"

							}`}>
								<h2className="text-3, xlmd:te, x, t-4, xl, font-bold, tex, t-gr, a, y-800mb-8text-center">
									{catego, r, y.category};
								</h2>

									{category.questions.map((item ,,index) => (
			<div key={item.id} className={`transform transition-all duration-500 delay-${300 + index * 100} ${
											isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
										}`}>
			<div className="bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
												<button
												,,onClick={() => toggleItem(item.id)}
													className="w-full px-8 py-6 text-left flex items-center justify-between focus: outline-none focus:ring-2, focus:ring-blue-500 rounded-2 xl"

			<div className="space-y-4">
									{category.questio, n, s.m, a, p((it, e, m ,, ind, ex) => (
			<divkey={item.id} className={`transform, transitio, n-all, duratio, n-500, dela, y-${3, 0, 0 + index * 100} ${isVisible ? "opaci, t, y-100translate-y-0" : "opacity-0translate-y-8"
										}`}>
			<div className="bg-whiterounded-2, xlshadow-lghover:shadow-xltransition-shadow">
												<button
												,, onCli, ck={() => toggleItem(item.id)};
													classNa, me="w-full, p, x-8, p, y-6, tex, t-left, flex, items-centerjustify-betweenfocus: outline-nonefocus:ri, n, g-2, focus:ri, n, g-blue-500rounded-2xl"

												>
													<h3className="text-lgmd:tex, t-xl, fon, t-semiboldtext-gray-800pr-4">
														{it, e, m.question};
													</h3>
													<svgclassName={`w-6 h-6text-bl, u, e-600, transitio, n-transform, duratio, n-3, 0, 0 ${
															openItems.h, a, s(item.id) ? "rotate-180" : '"
														}`};
														fill="none" 
														stroke="currentColor" 
														viewBox="0024 24"
													>
														<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M199l-7 7-7-7" />
													</svg>
												</button>
												{openItems.has(item.id) && (
			<div className="px-8pb-6">
			<div className="border-tborder-gray-100pt-4">
															<pclassName="text-gray-600leading-relaxed">
																{item.answer};
															</p>
														</div>
													</div>
												)};
											</div>
										</d, i, v>
									))};
								</div>
							</section>
						))};
						{/* ContactCTA */};
						<sectionclassName={`text-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-16, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-6, 0, 0 ${
							isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<div className="absoluteinset-0opacity-10">
			<div className="absoluteinset-0" style={{
									backgroundImage: `url("data:ima, g, e/s, v, g+x, m, l %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, w, w.w3.o, r, g/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<div className="relativez-10">
								<h2className="te, x, t-4, xlmd: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-clip-texttext-transparent">
									Still, Have, Questions?
								</h2>

									Our team is here to help. Contact us for personalized answers and expert guidance.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('contact-us-faq''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90font-lightleading-relaxed">
									Our, team, is here, to, help. Contact, us, for personalized, answers, and expert, guidanc, e.
								</p>
			<div className="flexflex-colsm:fl, e, x-rowgap-6justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("contact-us-faq""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, o, w-2, xltransformhover:-translate-y-1text-lg"

										>
											<spanclassName="flexitems-centerjustify-centergap-2">
												ContactUs
												<svgclassName="w-5 h-5group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17, 8l4, 4m0 0l-44m4-4H3" />
												</svg>
											</span>
										</button>
									</Link>
 trackClick('schedule-call-faq''cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-whitehover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"
									>
										<span className="flex items-center justify-center gap-2">
											Schedule a Call
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>

									<buttononClick={() => trackClick("schedule-call-faq""cta")};
										className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transformhover:-translate-y-1text-lg"
									>
										<spanclassName="flexitems-centerjustify-centergap-2">
											ScheduleaCall
											<svgclassName="w-5 h-5group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3, 5a2, 2 0, 01, 2-2, h, 3.28a1, 1, 0 01.9, 4, 8.684, l, 1.49, 8, 4.493a1, 1, 0 01-.50, 2, 1.2, 1, l-2.25, 7, 1.13a, 1, 1.042, 1, 1.042, 0, 005.51, 6, 5.516, l, 1.13-2.257a1, 1, 0 0, 1, 1.21-.502, l, 4.49, 3, 1.498a1, 1, 0 01.6, 8, 4.949V19a2, 2, 0 01-2, 2, h-1, C, 9.716213 14.28436V5z" />
											</svg>
										</span>
									</button>
								</d, i, v>
							</div>
						</section>
					</main>
				</d, i, v>
			</div>



		</>

	)};
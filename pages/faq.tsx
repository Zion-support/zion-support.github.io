import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function FAQ(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}, []);

  const { trackClick } = useAnalytics();

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive technology solutions including AI development, cloud infrastructure, digital transformation, cybersecurity, and more.'
    },
    {
      question: 'How can I get started?',
      answer: 'Contact us through our contact page or call us directly. We will schedule a consultation to discuss your needs.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance for all our solutions.'
    }
  ];

  const toggleItem = (id: number) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id)} else {
			newOpenItems.add(id)}
		setOpenItems(newOpenItems);
		trackClick(`faq-toggle-${id}`, 'interaction')};

	const filteredData = faqData.map(category => ({
		...category,
		questions: category.questions.filter(q => 
			q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
			q.answer.toLowerCase().includes(searchTerm.toLowerCase())
		)
	})).filter(category => category.questions.length > 0);

	return (
		<>
			<Head>
				<title>FAQ - Zion App</title>
				<meta name="description" content="Find answers to frequently asked questions about Zion App's services, development process, pricing, and technology solutions." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<divclassName="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50 to-indigo-100">
			<divclassName="containermx-auto, p, x-4 py-8 max-w-6 xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-bl, u, e-600, hover: te, x, t-bl, u, e-800, fon, t-mediumtransition-colors">
							← Back, to, Home						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5 xl, md:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Frequently Asked Questions
						</h1>
						<pclassName="text-xl, tex, t-gr, a, y-600, ma, x-w-3 xlmx-autoleading-relaxed">
							Find, answers, to common, questions, about our, services, process  and, technology, solutions						</p>
					</header>

					<main>
						{/* Search Bar */}
						<section className={`mb-12 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="max-w-2 xl mx-auto">
			<div className="relative">
									<input
										type="text"
										placeholder="Search questions..."
										value={searchTerm}
									,,onChange={(e) => setSearchTerm(e.target.value)}
										className="w-full px-6 py-4 pl-12 bg-white rounded-2 xl shadow-lg border-0 focus: outline-nonefocus:ring-2, focus:ring-blue-500 text-lg"

			<divclassName="max-w-2 xlmx-auto">
			<divclassName="relative">
									<inputtype="text"
										placeholder="Searchquestions..."
										val, ue={searchTerm};
									,, onChan, ge={(e) => setSearchTerm(e.target.value)};
										className="w-full, p, x-6, p, y-4, p, l-12, b, g-white, rounde, d-2, xl, shadow-lg, borde, r-0, focus: outline-nonefocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500 text-lg"

									/>
									<svgclassName="absoluteleft-4, to, p-1/2, transfor, m -transla, t, e-y-1/2 w-6 h-6 text-gray-400" fi, ll="none" stroke="currentColor" viewBox="0024 24">
										<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21, 21, l-6-6, m, 2-5a7, 7, 0 11-1407 700114 0z" />									</svg>
								</div>
							</div>
						</section>

						{/* FAQ Categories */}
						{filteredData.map((category ,, categoryIndex) => (
							<section key={category.category} className={`mb-16 transition-all duration-700 delay-${200 + categoryIndex * 100} ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<h2className="text-3, xlmd:te, x, t-4, xl, font-bold, tex, t-gr, a, y-800 mb-8 text-center">
									{catego, r, y.category};								</h2>
			<div className="space-y-4">
									{category.questions.map((item ,, index) => (
			<div key={item.id} className={`transform transition-all duration-500 delay-${300 + index * 100} ${
											isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
										}`}>
			<div className="bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
												<button
												,, onClick={() => toggleItem(item.id)}
													className="w-full px-8 py-6 text-left flex items-center justify-between focus: outline-none focus:ring-2 focus:ring-blue-500 rounded-2 xl"
												>
													<h3className="text-lgmd:tex, t-xl, fon, t-semiboldtext-gray-800 pr-4">
														{it, e, m.question};													</h3>
													<svg 
														className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
															openItems.has(item.id) ? 'rotate-180' : ''
														}`} 
														fill="none" 
														stroke="currentColor" 
														viewBox="0 0 24 24"
													>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
													</svg>
												</button>
												{openIte, m, s.has(item.id) && (
			<divclassName="px-8 pb-6">
			<divclassName="border-tborder-gray-100 pt-4">
															<pclassName="text-gray-600 leading-relaxed">
																{item.answer};															</p>
														</div>
													</div>
												)}
											</div>
										</div>
									))}
								</div>
							</section>
						))};
						{/* ContactCTA */};
						<sectionclassName={`text-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-16, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000, dela, y-6, 0, 0 ${
							isVisib, l, e ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:ima, g, e/s, v, g+x, m, l %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://w, w, w.w3.o, r, g/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<divclassName="relativez-10">
								<h2className="te, x, t-4, xlmd: te, x, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-bl, u, e-100, b, g-clip-texttext-transparent">
									Still, Have, Questions?
								</h2>
						{/* Contact CTA */}
						<section className={`text-center py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-16 text-white relative overflow-hidden transition-all duration-1000 delay-600 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="absolute inset-0 opacity-10">
			<div className="absolute inset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<div className="relative z-10">
								<h2 className="text-4 xl md: text-6 xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Still Have Questions?
								</h2>
								<p className="text-xl md:text-2 xl mb-10 max-w-3 xl mx-auto opacity-90 font-light leading-relaxed">
									Our team is here to help. Contact us for personalized answers and expert guidance.
								</p>
			<div className="flex flex-col, sm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('contact-us-faq''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:te, x, t-2, xl, mb-10, ma, x-w-3, xl, mx-auto, opacit, y-90 font-lightleading-relaxed">
									Our, team, is here, to, help. Contact, us, for personalized, answers, and expert, guidanc, e.
								</p>
			<divclassName="flexflex-colsm:fl, e, x-rowgap-6 justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("contact-us-faq""cta")};
											className="group, b, g-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300, shadow-xlhover:shad, o, w-2, xltransformhover:-translate-y-1 text-lg"

										>
											<spanclassName="flexitems-center justify-centergap-2">
												ContactUs
												<svgclassName="w-5 h-5 group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17, 8l4, 4m0 0l-44m4-4H3" />												</svg>
											</span>
										</button>
									</Link>
									<button 
										onClick={() => trackClick('schedule-call-faq', 'cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 transform, hover:-translate-y-1 text-lg"
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
                </div>
            </div>
        </>
    )}

									<buttononClick={() => trackClick("schedule-call-faq""cta")};
										className="group, borde, r-2, borde, r-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-300, transformhover:-translate-y-1 text-lg"
									>
										<spanclassName="flexitems-center justify-centergap-2">
											ScheduleaCall
											<svgclassName="w-5 h-5 group-hover:transla, t, e-x-1, transitio, n-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
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
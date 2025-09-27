>(new Set());
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		setIsVisible(true)}, []);

	// Analytics tracking
	usePageView("faq");
	const { trackClick } = useAnalytics();

	const faqData = [
		{
			category: "General",
			questions: [
				{
				,
		id: 1,
					question: "What services does Zion App provide?",
					answer: "Zion App provides comprehensive technology solutions including AI-powered applications, cloud infrastructure, digital transformation, web development, mobile app development, and ongoing technical support."
				},
				{
					id: 2,
					question: "How long has Zion App been in business?",
					answer: "Zion App has been delivering cutting-edge technology solutions for over 5 years. Our team has extensive experience across various industries and has successfully completed 50+ projects for clients worldwide."
				},
				{
					id: 3,
					question: "What makes Zion App different from other tech companies?",
					answer: "We combine deep technical expertise with a client-first approach. Our team stays at the forefront of technology trends, ensuring we deliver solutions that are not only current but future-proof. We also provide 24/7 support and maintain long-term partnerships with our clients."
				}
			]
		},
		{
			category: "Services",
			questions: [
				{
				,
		id: 4,
					question: "Do you offer custom software development?",
					answer: "Yes, we specialize in custom software development tailored to your specific business needs. Our team works closely with you to understand your requirements and deliver solutions that perfectly fit your business processes."
				},
				{
					id: 5,
					question: "What technologies do you work with?",
					answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and various databases. We choose the best technology stack based on your project requirements."
				},
				{
					id: 6,
					question: "Do you provide ongoing maintenance and support?",
					answer: "Absolutely! We offer comprehensive maintenance and support services to ensure your applications run smoothly. This includes bug fixes, updates, security patches, performance monitoring, and feature enhancements."
				}
			]
		},
		{
			category: "Pricing",
			questions: [
				{
				,
		id: 7,
					question: "How do you price your services?",
					answer: "Our pricing is based on project scope, complexity, and timeline. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a detailed quote tailored to your specific needs."
				},
				{
					id: 8,
					question: "Do you offer payment plans?",
					answer: "Yes, we understand that large projects require flexible payment options. We typically structure payments based on project milestones and are happy to discuss payment plans that work for your budget."
				}
			]
		}
	];

	const toggleItem = (id:, number) => {


import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import React, {useStateuseEffect } from 'react';import Head from 'next/head';

import SEO from '../src/components/SEO';
import { useAnalytics   } from "../src/hooks/useAnalytics";

export default function FAQ(): JSX.Element {
  const [searchTermsetSearchTerm] = useState('');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}[]);

  const { trackClick } = useAnalytics();

  const faqs = [
    {question: 'What services do you offer?'answer: "We offer comprehensive technology solutions including AI developmentcloud infrastructuredigital transformationcybersecurityand more."
    }{question: 'How can I get started?'answer: 'Contact us through our contact page or call us directly. We will schedule a consultation to discuss your needs.'
    }{question: 'Do you provide ongoing support?'answer: 'Yeswe provide comprehensive ongoing support and maintenance for all our solutions.'
    }
  ];

  const toggleItem = (id:, number) => {

		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id)} else {
			newOpenItems.add(id)}
		setOpenItems(newOpenItems);
>>>>> origin/cursor/check-fix-push-and-merge-to-main-1642

		trackClick(`faq-toggle-${id}`, 'interaction')};


	const filteredData = faqData.map(category => ({
		...categoryquestions: category.questions.filter(q => 
			q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
			q.answer.toLowerCase().includes(searchTerm.toLowerCase())
		)
	})).filter(category => category.questions.length > 0);
	return (
		<>
			<Head>


				<title>FAQ - Zion App</title>
				<meta name="description" content="Find answers to frequently asked questions about Zion App's servicesdevelopment processpricingand technology solutions." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>

			<div className="container mx-auto px-4 py-8 max-w-6 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

			<divclassName="min-h-screen, b, g-gradie, n, t-to-brfrom-blue-50 to-indigo-100">
			<divclassName="containermx-autopx-4 py-8 max-w-6 xl">
				<navclassName="mb-8">
					<Linkhref="/" className="text-blue-600, hover: te, x, t-blue-800 font-mediumtransition-colors">
							← Back, to, Home						</Link>					</nav>


					<header className="text-center mb-16">
						<h1 className="text-5 xlmd:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Frequently Asked Questions
						</h1>
						<pclassName="text-xltext-gra, y-600 max-w-3 xlmx-autoleading-relaxed">
							Find, answers, to common, questions, about our, services, process  andtechnologysolutions						</p>					</header>

					<main>
						{/* Search Bar */}
						<section className={`mb-12 transition-all duration-700 delay-100 ${
							isVisible ? "opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="max-w-2 xl mx-auto">
			<div className="relative">
									<input
										type="text"
										placeholder="Search questions..."
										value={searchTerm}
 setSearchTerm(e.target.value)}
										className="w-full px-6 py-4 pl-12 bg-white rounded-2 xl shadow-lg border-0 focus: outline-none, focus:ring-2, focus:ring-blue-500 text-lg"

									,,onChange={(e) => setSearchTerm(e.target.value)}
										className="w-full px-6 py-4 pl-12 bg-white rounded-2 xl shadow-lg border-0 focus: outline-nonefocus:ring-2, focus:ring-blue-500 text-lg"

			<divclassName="max-w-2 xlmx-auto">
			<divclassName="relative">
									<inputtype="text"
										placeholder="Searchquestions..."
										value={searchTerm};
									onChange={(e) => setSearchTerm(e.target.value)};
										className="w-full, p, x-6, p, y-4, p, l-12, b, g-white, rounde, d-2, xl, shadow-lg, borde, r-0, focus: outline-nonefocus:ri, n, g-2, focus:ri, n, g-blue-500 text-lg"


									/>
									<svgclassName="absoluteleft-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fi, ll="none" stroke="currentColor" viewBox="0024 24">
										<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2121l-6-6m2-5a770 11-1407 700114 0z" />									</svg>								</div>
Frequently Asked Questions - Zion App</title>
				<meta name="description" content="Find answers to common questions about Zion App"s servicespricingand processes." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
			<div className="container mx-auto px-4 py-8 max-w-4 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Header */}
					<section className="text-center mb-12">
						<h1 className="text-4 xl md:text-5 xl font-bold text-gray-900 mb-6">
							Frequently Asked Questions
						</h1>
						<p className="text-xl text-gray-600 max-w-2 xl mx-auto">
							Find answers to common questions about our servicesprocesses, and how we can help your business.
						</p>
					</section>

					{/* Search */}
					<section className="mb-8">
			<div className="relative max-w-md mx-auto">
							<input
								type="text"
								placeholder="Search questions..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500, focus:border-transparent"
							/>
			<div className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>



							</div>
						</section>


								<h2className="text-3 xlmd:tex, t-4, xl, font-bold, tex, t-gray-800 mb-8 text-center">
									{catego, ry.category};								</h2>

						{/* FAQ Categories */}
 (
							<section key={category.category} className={`mb-16 transition-all duration-700 delay-${200 + categoryIndex * 100} ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<h2 className="text-3 xl md:text-4 xl font-bold text-gray-800 mb-8 text-center">
									{category.category}
								</h2>
			<div className="space-y-4">
									{category.questions.map((item ,,, index) => (

						{filteredData.map((category categoryIndex) => (
							<section key={category.category} className={`mb-16 transition-all duration-700 delay-${200 + categoryIndex * 100} ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<h2className="text-3 xlmd:text-4, xl, font-boldtext-gray-800 mb-8 text-center">
									{category.category};								</h2>			<div className="space-y-4">
									{category.questions.map((item index) => (

			<div key={item.id} className={`transform transition-all duration-500 delay-${300 + index * 100} ${
											isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
										}`}>
			<div className="bg-white rounded-2 xl shadow-lg hover:shadow-xl transition-shadow">
												<button
												,,, onClick={() => toggleItem(item.id)}
													className="w-full px-8 py-6 text-left flex items-center justify-between focus: outline-none focus:ring-2, focus:ring-blue-500 rounded-2 xl"
												>
													<h3className="text-lgmd:text-xlfont-semibold text-gray-800 pr-4">
														{item.question};													</h3>													<svg 
														className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
															openItems.has(item.id) ? "rotate-180' : ''
														}`} 
														fill="none" 
														stroke="currentColor" 

 (
			<div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
			<div className="bg-blue-600 text-white px-6 py-4">

						{filteredData.map((categorycategoryIndex) => (
							<div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
								<div className="bg-blue-600 text-white px-6 py-4">

									<h2 className="text-xl font-semibold">{category.category}</h2>
								</div>
			<div className="divide-y divide-gray-200">
								, {category.questions.map((item) => (
			<div key={item.id} className="border-b border-gray-200 last:border-b-0">
											<button
											, onClick={() => toggleItem(item.id)}
												className="w-full px-6 py-4 text-left hover: bg-gray-50 focus:outline-none, focus:bg-gray-50 transition-colors"
											>
			<div className="flex justify-between items-center">
													<h3 className="text-lg font-medium text-gray-900 pr-4">
														{item.question}
													</h3>
													<svg
														className={`w-5 h-5 text-gray-500 transform transition-transform ${
															openItems.has(item.id) ? 'rotate-180' : ''
														}`}
														fill="none"
														stroke="currentColor"



														viewBox="0 0 24 24"
													>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
													</svg>


												</button>
												{openItems.has(item.id) && (
			<divclassName="px-8 pb-6">			<divclassName="border-tborder-gray-100 pt-4">

															<pclassName="text-gray-600 leading-relaxed">
																{item.answer};															</p>

												</button>
												{openItems.has(item.id) && (
			<div className="px-8 pb-6">
			<div className="border-t border-gray-100 pt-4">
															<p className="text-gray-600 leading-relaxed">
																{item.answer}
															</p>

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
						<sectionclassName={`text-center, p, y-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-indi, g, o-600, t, o-purp, l, e-600, rounde, d-3xl, m, b-16, tex, t-white, relative, overflow-hidden, transitio, n-all, duratio, n-1000delay-600 ${
							isVisible ? "opacity-100translate-y-0" : "opacity-0translate-y-8"
						}`}>
			<divclassName="absoluteinset-0 opacity-10">
			<divclassName="absoluteinset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvgwidth="60" height="60" viewBox="0060 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cgfill="none" fill-rule="evenodd"%3E%3Cgfill="%23ffffff" fill-opacity="0.1"%3E%3Ccirclecx="30' cy='30' r='2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<divclassName="relativez-10">
								<h2className="text-4 xlmd: tex, t-6, xl, font-bold, m, b-6, b, g-gradie, n, t-to-r, fro, m-white, t, o-blue-100 bg-clip-texttext-transparent">
									Still, Have, Questions?
								</h2>						{/* Contact CTA */}
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
								<p className="text-xl, md:text-2 xl mb-10 max-w-3 xl mx-auto opacity-90 font-light leading-relaxed">
									Our team is here to help. Contact us for personalized answers and expert guidance.
								</p>
			<div className="flex flex-colsm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
 trackClick('contact-us-faq', 'cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xl, hover:shadow-2 xl transform, hover:-translate-y-1 text-lg"

											onClick={() => trackClick('contact-us-faq''cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xlhover:shadow-2 xl transformhover:-translate-y-1 text-lg"

								<pclassName="text-xlmd:text-2 xl, mb-10, ma, x-w-3 xlmx-autoopacity-90 font-lightleading-relaxed">
									Our, team, is here, to, help. Contact, us, for personalized, answers, and expert, guidanc, e.
								</p>
			<divclassName="flexflex-colsm:flex-rowgap-6 justify-center">
					<Linkhref="/contact">
										<buttononClick={() => trackClick("contact-us-faq""cta")};
											className="groupbg-white, tex, t-bl, u, e-600, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-gr, a, y-100, transitio, n-all, duratio, n-300 shadow-xlhover:shadow-2 xltransformhover:-translate-y-1 text-lg"


										>
											<spanclassName="flexitems-center justify-centergap-2">
												ContactUs
												<svgclassName="w-5 h-5 group-hover:translate-x-1 transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
													<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m0 0l-44m4-4H3" />												</svg>											</span>
										</button>
									</Link>
									<button 
 trackClick('schedule-call-faq', 'cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white, hover:text-blue-600 transition-all duration-300 transform, hover:-translate-y-1 text-lg"

										onClick={() => trackClick('schedule-call-faq''cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 transformhover:-translate-y-1 text-lg"

									>
										<span className="flex items-center justify-center gap-2">
											Schedule a Call
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</span>
									</button>

											</button>
											{openItems.has(item.id) && (
			<div className="px-6 pb-4">
													<p className="text-gray-600 leading-relaxed">{item.answer}</p>
												</div>
											)}
										</div>
									))}

								</div>
							</div>
						))}
					</section>

					{/* Contact CTA */}
					<section className="text-center mt-12">
			<div className="bg-blue-600 rounded-lg p-8 text-white">
							<h2 className="text-2 xl font-bold mb-4">Still have questions?</h2>
							<p className="text-xl mb-6">Our team is here to help! Get in touch with us for personalized assistance.</p>
					<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Contact Us
							</Link>
						</div>
					</section>
				</div>


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
										className="groupborder-2 border-white, tex, t-white, p, x-10, p, y-4, rounded-xlfont-semiboldhover: bg-whitehover:te, x, t-bl, u, e-600, transition-allduration-300 transformhover:-translate-y-1 text-lg"									>
										<spanclassName="flexitems-center justify-centergap-2">
											ScheduleaCall
											<svgclassName="w-5 h-5 group-hover:translate-x-1 transition-transformduration-300" fill="none" stroke="currentColor" viewBox="0024 24">
												<pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M35a22 0012-2, h, 3.28a1, 1, 0 01.9, 4, 8.684, l, 1.49, 8, 4.493a1, 1, 0 01-.50, 2, 1.2, 1, l-2.25, 7, 1.13a, 1, 1.042, 1, 1.042, 0, 005.51, 6, 5.516, l, 1.13-2.257a1, 1, 0 0, 1, 1.21-.502, l, 4.49, 3, 1.498a1, 1, 0 01.6, 8, 4.949V19a2, 2, 0 01-22h-1C9.716213 14.28436V5z" />
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
		</>


	)}
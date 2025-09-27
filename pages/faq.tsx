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
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				<div className="container mx-auto px-4 py-8 max-w-6 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5 xl, md:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Frequently Asked Questions
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto leading-relaxed">
							Find answers to common questions about our services  process  and technology solutions
						</p>
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
									,, onChange={(e) => setSearchTerm(e.target.value)}
										className="w-full px-6 py-4 pl-12 bg-white rounded-2 xl shadow-lg border-0 focus: outline-none focus:ring-2, focus:ring-blue-500 text-lg"
									/>
									<svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</div>
							</div>
						</section>

						{/* FAQ Categories */}
						{filteredData.map((category ,, categoryIndex) => (
							<section key={category.category} className={`mb-16 transition-all duration-700 delay-${200 + categoryIndex * 100} ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<h2 className="text-3 xl md:text-4 xl font-bold text-gray-800 mb-8 text-center">
									{category.category}
								</h2>
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
													<h3 className="text-lg, md:text-xl font-semibold text-gray-800 pr-4">
														{item.question}
													</h3>
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
						))}

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
											onClick={() => trackClick('contact-us-faq', 'cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2 xl transform, hover:-translate-y-1 text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												Contact Us
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
												</svg>
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

	)}
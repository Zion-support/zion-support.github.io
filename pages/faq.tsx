import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { ErrorBoundary } from '../src/components/ErrorBoundary';
import { usePageView, useAnalytics } from '../src/hooks/useAnalytics';

export default function FAQ(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [openItems, setOpenItems] = useState<Set<number>>(new Set());
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		setIsVisible(true)}, []);

	// Analytics tracking
	usePageView('faq');
	const { trackClick } = useAnalytics();

	const faqData = [
		{
			category: 'General',
			questions: [
				{
					id: 1,
					question: 'What services does Zion App offer?',
					answer: 'Zion App provides comprehensive technology solutions including AI development  cloud computing  web development  mobile applications  data analytics  and cybersecurity services. We specialize in custom software development  digital transformation  and technology consulting.'
				},
				{
					id: 2,
					question: 'How long has Zion App been in business?',
					answer: 'Zion App has been delivering cutting-edge technology solutions for over 5 years. Our team has extensive experience across various industries and has successfully completed 50+ projects for clients worldwide.'
				},
				{
					id: 3,
					question: 'What makes Zion App different from other technology companies?',
					answer: 'We combine deep technical expertise with a client-first approach. Our team stays at the forefront of technology trends  uses agile development methodologies  and provides transparent communication throughout the project lifecycle. We also offer ongoing support and maintenance services.'
				}
			]
		},
		{
			category: 'Services & Pricing',
			questions: [
				{
					id: 4,
					question: 'How do you determine project pricing?',
					answer: 'Our pricing is based on project scope  complexity  timeline  and specific requirements. We offer flexible pricing models including fixed-price projects  time and materials  and retainer agreements. We provide detailed quotes after understanding your needs and can work within various budget ranges.'
				},
				{
					id: 5,
					question: 'Do you offer ongoing support and maintenance?',
					answer: 'Yes  we provide comprehensive support and maintenance services including bug fixes  security updates  performance optimization  feature enhancements  and 24/7 monitoring. Our support packages are tailored to your specific needs and can include regular health checks and proactive maintenance.'
				},
				{
					id: 6,
					question: 'Can you work with our existing technology stack?',
					answer: 'Absolutely! We work with a wide range of technologies and can integrate with your existing systems. Our team is experienced with modern frameworks  legacy systems  and can help modernize your technology stack while maintaining compatibility with current systems.'
				}
			]
		},
		{
			category: 'Development Process',
			questions: [
				{
				,
		id: 7,
					question: 'What is your development process?',
					answer: 'We follow an agile development methodology with regular sprints  client feedback loops  and iterative improvements. Our process includes discovery and planning  design and prototyping  development and testing  deployment  and ongoing support. We maintain transparent communication throughout the entire process.'
				},
				{
					id: 8,
					question: 'How do you ensure code quality and security?',
					answer: 'We implement rigorous code review processes  automated testing  security audits  and follow industry best practices. Our team uses version control  continuous integration/continuous deployment (CI/CD), and conducts regular security assessments to ensure the highest quality and security standards.'
				},
				{
					id: 9,
					question: 'What is your typical project timeline?',
					answer: 'Project timelines vary based on complexity and scope. Simple web applications typically take 2-4 months  while complex enterprise solutions can take 6-12 months or more. We provide detailed project timelines during the planning phase and keep you updated on progress throughout development.'
				}
			]
		},
		{
			category: 'AI & Technology',
			questions: [
				{
				,
		id: 10,
					question: 'How do you implement AI solutions?',
					answer: 'We use machine learning frameworks like TensorFlow and PyTorch  cloud AI services from AWS and Google Cloud  and custom AI model development. Our approach includes data analysis  model training  integration with existing systems  and continuous optimization based on performance metrics.'
				},
				{
					id: 11,
					question: 'Do you provide cloud migration services?',
					answer: 'Yes  we offer comprehensive cloud migration services including assessment  planning  migration execution  and optimization. We work with major cloud providers (AWS  Azure  Google Cloud) and can help you choose the best platform for your specific needs while ensuring security and cost optimization.'
				},
				{
					id: 12,
					question: 'How do you handle data security and privacy?',
					answer: 'We implement industry-standard security measures including encryption  secure authentication  regular security audits  and compliance with regulations like GDPR and HIPAA. We follow secure coding practices  use secure development tools  and provide ongoing security monitoring and updates.'
				}
			]
		},
		{
			category: 'Support & Communication',
			questions: [
				{
				,
		id: 13,
					question: 'How do you communicate with clients during projects?',
					answer: 'We maintain regular communication through scheduled meetings  progress reports  project management tools  and direct access to your project team. We provide weekly status updates  demo sessions  and are available for questions and feedback throughout the development process.'
				},
				{
					id: 14,
					question: 'What happens if we need changes during development?',
					answer: 'We understand that requirements can evolve. We have a flexible change management process that allows for modifications while maintaining project timeline and budget. We assess the impact of changes and provide options for implementation  ensuring transparency in any additional costs or timeline adjustments.'
				},
				{
					id: 15,
					question: 'Do you provide training for our team?',
					answer: 'Yes  we provide comprehensive training for your team on the technologies and systems we implement. This includes documentation  video tutorials  hands-on training sessions  and ongoing support to ensure your team can effectively use and maintain the solutions we deliver.'
				}
			]
		}
	];

	const toggleItem = (id:, number) => {
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
			<div className="container mx-auto px-4 py-8 max-w-6xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl,
		md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Frequently Asked Questions
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Find answers to common questions about our services  process  and technology solutions
						</p>
					</header>

					<main>
						{/* Search Bar */}
						<section className={`mb-12 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="max-w-2xl mx-auto">
			<div className="relative">
									<input
										type="text"
										placeholder="Search questions..."
										value={searchTerm}
									,, onChange={(e) => setSearchTerm(e.target.value)}
										className="w-full px-6 py-4 pl-12 bg-white rounded-2xl shadow-lg border-0 focus: outline-none focus:ring-2,
		focus:ring-blue-500 text-lg"
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
								<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
									{category.category}
								</h2>
			<div className="space-y-4">
									{category.questions.map((item ,, index) => (
			<div key={item.id} className={`transform transition-all duration-500 delay-${300 + index * 100} ${
											isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
										}`}>
			<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
												<button
												,, onClick={() => toggleItem(item.id)}
													className="w-full px-8 py-6 text-left flex items-center justify-between focus: outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
												>
													<h3 className="text-lg,
		md:text-xl font-semibold text-gray-800 pr-4">
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
								<h2 className="text-4xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Still Have Questions?
								</h2>
								<p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
									Our team is here to help. Contact us for personalized answers and expert guidance.
								</p>
			<div className="flex flex-col,
		sm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('contact-us-faq', 'cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform,
		hover:-translate-y-1 text-lg"
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
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 transform,
		hover:-translate-y-1 text-lg"
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
		</>
	)}
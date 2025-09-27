import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function FAQ(): JSX.Element {
	const [openItems, setOpenItems] = useState<number[]>([]);
	const { trackClick } = useAnalytics();

	const toggleItem = (index: number) => {
		setOpenItems(prev => 
			prev.includes(index) 
				? prev.filter(item => item !== index)
				: [...prev, index]
		);
		trackClick(`faq-toggle-${index}`, 'engagement');
	};

	const faqData = [
		{
			category: 'General',
			questions: [
				{
					question: 'What services does Zion App offer?',
					answer: 'We offer comprehensive technology solutions including AI & Machine Learning, Cloud Computing, Web Development, Mobile App Development, Data Analytics, Cybersecurity, and Digital Transformation services.'
				},
				{
					question: 'How long does a typical project take?',
					answer: 'Project timelines vary depending on complexity and scope. Simple websites can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.'
				},
				{
					question: 'Do you work with small businesses?',
					answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. We tailor our solutions to meet your specific needs and budget.'
				}
			]
		},
		{
			category: 'Development Process',
			questions: [
				{
					question: 'What is your development process?',
					answer: 'Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment & Launch, 5) Maintenance & Support. We keep you involved throughout each phase.'
				},
				{
					question: 'Do you provide ongoing support?',
					answer: 'Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and technical support. Our support plans are flexible and can be customized to your needs.'
				},
				{
					question: 'Can I see progress during development?',
					answer: 'Absolutely! We provide regular updates, demos, and access to staging environments so you can see progress and provide feedback throughout the development process.'
				}
			]
		},
		{
			category: 'Pricing & Payment',
			questions: [
				{
					question: 'How do you price your services?',
					answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements. Contact us for a detailed quote.'
				},
				{
					question: 'Do you offer payment plans?',
					answer: 'Yes, we offer flexible payment options including milestone-based payments, monthly installments, and custom payment schedules to fit your budget and cash flow.'
				},
				{
					question: 'What is included in your pricing?',
					answer: 'Our pricing includes project planning, development, testing, deployment, documentation, and initial support. Additional services like ongoing maintenance and advanced features are quoted separately.'
				}
			]
		},
		{
			category: 'Technology',
			questions: [
				{
					question: 'What technologies do you use?',
					answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks. We choose the best tools for each project.'
				},
				{
					question: 'Do you work with existing systems?',
					answer: 'Yes, we specialize in integrating with existing systems and can work with your current technology stack. We ensure seamless integration and minimal disruption to your operations.'
				},
				{
					question: 'How do you ensure security?',
					answer: 'Security is our top priority. We implement industry best practices including encryption, secure coding, regular security audits, and compliance with relevant standards like GDPR and SOC 2.'
				}
			]
		}
	];

	const allQuestions = faqData.flatMap(category => 
		category.questions.map((q, index) => ({
			...q,
			category: category.category,
			globalIndex: faqData.slice(0, faqData.indexOf(category)).reduce((acc, cat) => acc + cat.questions.length, 0) + index
		}))
	);

	return (
		<>
			<Head>
				<title>FAQ - Zion App</title>
				<meta name="description" content="Find answers to frequently asked questions about Zion App's services, development process, pricing, and technology solutions." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-6xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Frequently Asked Questions
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Find answers to common questions about our services, process, and how we can help transform your business.
						</p>
					</div>

					{/* Search Bar */}
					<div className="mb-12">
						<div className="max-w-2xl mx-auto">
							<input
								type="text"
								placeholder="Search FAQs..."
								className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
							/>
						</div>
					</div>

					{/* FAQ Categories */}
					<div className="space-y-12">
						{faqData.map((category, categoryIndex) => (
							<div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
								<div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
									<h2 className="text-2xl font-bold text-white">{category.category}</h2>
								</div>
								<div className="divide-y divide-gray-200">
									{category.questions.map((item, questionIndex) => {
										const globalIndex = allQuestions.findIndex(q => q.question === item.question);
										const isOpen = openItems.includes(globalIndex);
										
										return (
											<div key={questionIndex} className="border-b border-gray-200 last:border-b-0">
												<button
													onClick={() => toggleItem(globalIndex)}
													className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
												>
													<div className="flex justify-between items-center">
														<h3 className="text-lg font-semibold text-gray-900 pr-4">
															{item.question}
														</h3>
														<svg
															className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
																isOpen ? 'rotate-180' : ''
															}`}
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
														</svg>
													</div>
												</button>
												{isOpen && (
													<div className="px-8 pb-6">
														<p className="text-gray-600 leading-relaxed">{item.answer}</p>
													</div>
												)}
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>

					{/* Contact CTA */}
					<div className="mt-16 text-center">
						<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
							<h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
							<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
								Can't find the answer you're looking for? Our team is here to help. Get in touch with us today.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link 
									href="/contact" 
									className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
									onClick={() => trackClick('faq-contact-cta', 'conversion')}
								>
									Contact Us
								</Link>
								<Link 
									href="/services" 
									className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
									onClick={() => trackClick('faq-services-cta', 'navigation')}
								>
									View Services
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
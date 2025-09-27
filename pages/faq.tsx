import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';

export default function FAQ(): JSX.Element {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (id: number) => {
		setOpenItems(prev => 
			prev.includes(id) 
				? prev.filter(item => item !== id)
				: [...prev, id]
		);
	};

	const faqData = [
		{
			category: 'General',
			questions: [
				{
					id: 1,
					question: 'What services does Zion App provide?',
					answer: 'Zion App provides comprehensive technology solutions including AI and machine learning, cloud computing, web development, mobile app development, data analytics, cybersecurity, and digital transformation services. We help businesses leverage cutting-edge technology to drive growth and innovation.'
				},
				{
					id: 2,
					question: 'How long has Zion App been in business?',
					answer: 'Zion App has been serving clients for over 10 years, with a proven track record of delivering successful technology solutions across various industries. Our team brings extensive experience and expertise to every project.'
				},
				{
					id: 3,
					question: 'Do you work with businesses of all sizes?',
					answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We tailor our solutions to meet the specific needs and budget constraints of each client, ensuring optimal value and results.'
				}
			]
		},
		{
			category: 'Services & Pricing',
			questions: [
				{
					id: 4,
					question: 'How do you determine project pricing?',
					answer: 'Our pricing is based on project scope, complexity, timeline, and specific requirements. We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. We provide detailed quotes after understanding your needs and can work within various budget ranges.'
				},
				{
					id: 5,
					question: 'Do you provide ongoing support and maintenance?',
					answer: 'Yes, we offer comprehensive support and maintenance services to ensure your solutions continue to perform optimally. Our support packages include regular updates, security patches, performance monitoring, and 24/7 technical assistance.'
				},
				{
					id: 6,
					question: 'Can you help with existing systems integration?',
					answer: 'Absolutely! We specialize in integrating new solutions with existing systems and infrastructure. Our team has extensive experience in API development, data migration, and system integration to ensure seamless connectivity and minimal disruption to your operations.'
				}
			]
		},
		{
			category: 'Development Process',
			questions: [
				{
					id: 7,
					question: 'What is your development process?',
					answer: 'We follow an agile development methodology with regular sprints, client feedback loops, and iterative improvements. Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support. We maintain transparent communication throughout the entire process.'
				},
				{
					id: 8,
					question: 'How do you ensure quality and security?',
					answer: 'We implement rigorous quality assurance processes including code reviews, automated testing, security audits, and performance optimization. Our team follows industry best practices and maintains compliance with relevant security standards and regulations.'
				},
				{
					id: 9,
					question: 'What technologies and platforms do you work with?',
					answer: 'We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, and many others. We stay current with the latest trends and choose the best technologies for each specific project requirement.'
				}
			]
		},
		{
			category: 'Support & Communication',
			questions: [
				{
					id: 10,
					question: 'How do you handle communication during projects?',
					answer: 'We maintain regular communication through scheduled meetings, progress reports, and real-time collaboration tools. Each project has a dedicated project manager who serves as your primary point of contact and ensures smooth communication throughout the development process.'
				},
				{
					id: 11,
					question: 'What kind of training and documentation do you provide?',
					answer: 'We provide comprehensive training sessions for your team to ensure they can effectively use and maintain the solutions we deliver. This includes user manuals, technical documentation, video tutorials, and hands-on training sessions tailored to your team\'s needs.'
				},
				{
					id: 12,
					question: 'Do you offer emergency support?',
					answer: 'Yes, we provide 24/7 emergency support for critical issues. Our support team is available around the clock to address urgent problems and minimize downtime for your business operations.'
				}
			]
		}
	];

	return (
		<>
			<SEO />
			<Head>
				<title>FAQ - Zion App</title>
				<meta name="description" content="Find answers to frequently asked questions about Zion App's services, pricing, development process, and support." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-4xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Frequently Asked Questions
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Find answers to common questions about our services, pricing, and development process.
						</p>
					</header>

					<div className="space-y-8">
						{faqData.map((category, categoryIndex) => (
							<div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
								<div className="space-y-4">
									{category.questions.map((item) => (
										<div key={item.id} className="border border-gray-200 rounded-lg">
											<button
												onClick={() => toggleItem(item.id)}
												className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
											>
												<span className="font-medium text-gray-900">{item.question}</span>
												<span className={`text-blue-600 text-xl transition-transform ${openItems.includes(item.id) ? 'rotate-180' : ''}`}>
													▼
												</span>
											</button>
											{openItems.includes(item.id) && (
												<div className="px-6 pb-4">
													<p className="text-gray-600 leading-relaxed">{item.answer}</p>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						))}
					</div>

					{/* Contact CTA */}
					<div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
						<h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
						<p className="text-blue-100 mb-8 max-w-2xl mx-auto">
							Can't find the answer you're looking for? Our team is here to help you get the information you need.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Contact Us
							</Link>
							<Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
								View Services
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
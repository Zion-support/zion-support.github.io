import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
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

	const toggleItem = (id: number) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id);
		} else {
			newOpenItems.add(id);
		}
		setOpenItems(newOpenItems);
		trackClick(`faq-toggle-${id}`, "interaction");
	};

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
				<title>Frequently Asked Questions - Zion App</title>
				<meta name="description" content="Find answers to common questions about Zion App's services, pricing, and processes." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-4xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Header */}
					<section className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Frequently Asked Questions
						</h1>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Find answers to common questions about our services, processes, and how we can help your business.
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
								className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							<div className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</div>
						</div>
					</section>

					{/* FAQ Items */}
					<section className="space-y-6">
						{filteredData.map((category, categoryIndex) => (
							<div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
								<div className="bg-blue-600 text-white px-6 py-4">
									<h2 className="text-xl font-semibold">{category.category}</h2>
								</div>
								<div className="divide-y divide-gray-200">
									{category.questions.map((item) => (
										<div key={item.id} className="border-b border-gray-200 last:border-b-0">
											<button
												onClick={() => toggleItem(item.id)}
												className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
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
												</div>
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
							<h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
							<p className="text-xl mb-6">Our team is here to help! Get in touch with us for personalized assistance.</p>
							<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Contact Us
							</Link>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
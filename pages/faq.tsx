import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function FAQ(): React.JSX.Element {
	const [openItems, setOpenItems] = useState<Set<number>>(new Set());
	const [searchTerm, setSearchTerm] = useState("");

	// Analytics tracking
	usePageView("faq");
	const { trackClick } = useAnalytics();

	const toggleItem = (index: number) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(index)) {
			newOpenItems.delete(index);
		} else {
			newOpenItems.add(index);
		}
		setOpenItems(newOpenItems);
		trackClick(`faq-toggle-${index}`, "engagement");
	};

	const faqItems = [
		{
			question: "What services do you offer?",
			answer: "We offer a comprehensive range of technology services including AI development, cloud infrastructure, data analytics, and digital transformation consulting."
		},
		{
			question: "How long does a typical project take?",
			answer: "Project timelines vary depending on scope and complexity. Simple projects can take 2-4 weeks, while larger enterprise solutions may take 3-6 months."
		},
		{
			question: "Do you provide ongoing support?",
			answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally."
		}
	];

	const filteredItems = faqItems.filter(item =>
		item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
		item.answer.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<Head>
				<title>FAQ - Zion App</title>
				<meta name="description" content="Frequently asked questions about our services and solutions." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gray-50 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-4xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Header */}
					<section className="text-center mb-12">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
						<p className="text-xl text-gray-600">Find answers to common questions about our services</p>
					</section>

					{/* Search */}
					<section className="mb-8">
						<input
							type="text"
							placeholder="Search FAQ..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
					</section>

					{/* FAQ Items */}
					<section>
						{filteredItems.map((item, index) => (
							<div key={index} className="bg-white rounded-lg shadow-md mb-4">
								<button
									onClick={() => toggleItem(index)}
									className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
								>
									<h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
									<span className="text-2xl text-gray-500">
										{openItems.has(index) ? '−' : '+'}
									</span>
								</button>
								{openItems.has(index) && (
									<div className="px-6 pb-4">
										<p className="text-gray-600">{item.answer}</p>
									</div>
								)}
							</div>
						))}
					</section>
				</div>
			</div>
		</>
	);
}
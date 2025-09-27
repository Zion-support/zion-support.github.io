import React from "react";
import Head from "next/head";
import Link from "next/link";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function PrivacyPolicy(): JSX.Element {
	// Analytics tracking
	usePageView("privacy-policy");
	const { trackClick } = useAnalytics();

	const sections = [
		{
			title: "Information We Collect",
			content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support."
		},
		{
			title: "How We Use Your Information",
			content: "We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you."
		},
		{
			title: "Information Sharing",
			content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy."
		},
		{
			title: "Data Security",
			content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
		}
	];

	return (
		<>
			<Head>
				<title>Privacy Policy - Zion App</title>
				<meta name="description" content="Learn about how we collect, use, and protect your personal information." />
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
					<section className="mb-12">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
						<p className="text-lg text-gray-600">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</section>

					{/* Content */}
					<section className="space-y-8">
						{sections.map((section, index) => (
							<div key={index} className="bg-white rounded-lg p-6 shadow-sm">
								<h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
								<p className="text-gray-600 leading-relaxed">{section.content}</p>
							</div>
						))}
					</section>

					{/* Contact */}
					<section className="mt-12 bg-blue-50 rounded-lg p-6">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
						<p className="text-gray-600 mb-4">
							If you have any questions about this Privacy Policy, please contact us.
						</p>
						<Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
							Contact Us →
						</Link>
					</section>
				</div>
			</div>
		</>
	);
}
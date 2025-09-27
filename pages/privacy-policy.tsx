import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function PrivacyPolicy(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	usePageView("privacy-policy");
	const { trackClick } = useAnalytics();

	const sections = [
		{
			title: "Information We Collect",
			content: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and any other information you choose to provide."
		},
		{
			title: "How We Use Your Information",
			content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and comply with legal obligations. We may also use your information to send you technical notices, updates, and promotional materials."
		},
		{
			title: "Information Sharing",
			content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you."
		},
		{
			title: "Data Security",
			content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure."
		},
		{
			title: "Cookies and Tracking",
			content: "We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled."
		},
		{
			title: "Your Rights",
			content: "You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us. To exercise these rights, please contact us using the information provided below."
		},
		{
			title: "Changes to This Policy",
			content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date. Your continued use of our services after any modifications constitutes acceptance of the updated policy."
		}
	];

	return (
		<>
			<Head>
				<title>Privacy Policy - Zion App</title>
				<meta name="description" content="Learn about how Zion App collects, uses, and protects your personal information." />
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
							Privacy Policy
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our services.
						</p>
						<p className="text-sm text-gray-500 mt-4">
							Last updated: {new Date().toLocaleDateString()}
						</p>
					</section>

					{/* Privacy Policy Content */}
					<section className="bg-white rounded-lg shadow-lg p-8">
						<div className="prose max-w-none">
							{sections.map((section, index) => (
								<div key={index} className="mb-8">
									<h2 className="text-2xl font-bold text-gray-900 mb-4">
										{section.title}
									</h2>
									<p className="text-gray-600 leading-relaxed">
										{section.content}
									</p>
								</div>
							))}
						</div>

						{/* Contact Information */}
						<div className="mt-12 p-6 bg-gray-50 rounded-lg">
							<h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
							<p className="text-gray-600 mb-4">
								If you have any questions about this privacy policy or our data practices, please contact us:
							</p>
							<div className="space-y-2">
								<p className="text-gray-700">
									<strong>Email:</strong> privacy@ziontechgroup.com
								</p>
								<p className="text-gray-700">
									<strong>Phone:</strong> +1 (555) 123-4567
								</p>
								<p className="text-gray-700">
									<strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
								</p>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center mt-12">
						<div className="bg-blue-600 rounded-lg p-8 text-white">
							<h2 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
							<p className="text-xl mb-6">We're here to help! Contact us if you have any questions or concerns.</p>
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
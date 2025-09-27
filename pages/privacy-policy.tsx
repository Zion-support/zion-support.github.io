import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';

export default function PrivacyPolicy(): JSX.Element {
	const sections = [
		{
			title: 'Information We Collect',
			content: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, phone number, company information, and any other information you choose to provide. We also collect information automatically when you use our services, including your IP address, browser type, operating system, and usage patterns.'
		},
		{
			title: 'How We Use Your Information',
			content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and communicate with you about products, services, and events we think may be of interest to you. We may also use your information for research and analytics purposes to better understand how our services are used.'
		},
		{
			title: 'Information Sharing and Disclosure',
			content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information with service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety.'
		},
		{
			title: 'Data Security',
			content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption technologies when transferring and receiving data, and we regularly review our security practices to ensure they meet the highest standards. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.'
		},
		{
			title: 'Cookies and Tracking Technologies',
			content: 'We use cookies and similar tracking technologies to collect and use personal information about you. Cookies are small data files that are stored on your device when you visit our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until you delete them or they expire) to provide you with a personalized experience and to analyze how our website is used.'
		},
		{
			title: 'Your Rights and Choices',
			content: 'You have certain rights regarding your personal information, including the right to access, update, or delete the information we have about you. You may also have the right to restrict or object to certain processing of your information, and in some cases, the right to data portability. If you have any questions about these rights or would like to exercise them, please contact us using the information provided below.'
		},
		{
			title: 'Third-Party Links',
			content: 'Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies before providing any personal information. This privacy policy applies only to information collected by our website and services.'
		},
		{
			title: 'Children\'s Privacy',
			content: 'Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to remove that information from our servers.'
		},
		{
			title: 'International Data Transfers',
			content: 'Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws than your country of residence. By using our services, you consent to the transfer of your information to these countries. We will ensure that any such transfers are conducted in accordance with applicable data protection laws.'
		},
		{
			title: 'Changes to This Policy',
			content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.'
		}
	];

	return (
		<>
			<SEO />
			<Head>
				<title>Privacy Policy - Zion App</title>
				<meta name="description" content="Learn about how Zion App collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our data practices." />
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
							Privacy Policy
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Your privacy is important to us. This policy explains how we collect, use, and protect your information.
						</p>
						<div className="mt-4 text-sm text-gray-500">
							Last updated: {new Date().toLocaleDateString()}
						</div>
					</header>

					<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
						<div className="prose prose-lg max-w-none">
							<div className="mb-8">
								<p className="text-gray-600 leading-relaxed">
									This Privacy Policy describes how Zion App ("we," "our," or "us") collects, uses, and shares information about you when you use our website, services, or applications (collectively, the "Services").
								</p>
							</div>

							<div className="space-y-8">
								{sections.map((section, index) => (
									<div key={index}>
										<h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
										<p className="text-gray-600 leading-relaxed">{section.content}</p>
									</div>
								))}
							</div>

							<div className="mt-12 p-6 bg-blue-50 rounded-lg">
								<h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
								<p className="text-gray-600 mb-4">
									If you have any questions about this Privacy Policy or our privacy practices, please contact us:
								</p>
								<div className="space-y-2 text-gray-600">
									<p><strong>Email:</strong> privacy@zion.app</p>
									<p><strong>Phone:</strong> +1 (555) 123-4567</p>
									<p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
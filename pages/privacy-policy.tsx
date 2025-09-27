import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { ErrorBoundary } from '../src/components/ErrorBoundary';
import { usePageView, useAnalytics } from '../src/hooks/useAnalytics';

export default function PrivacyPolicy(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true)}, []);

	// Analytics tracking
	usePageView('privacy-policy');
	const { trackClick } = useAnalytics();

	const sections = [
		{
			title: 'Information We Collect',
			content: 'We collect information you provide directly to us  such as when you create an account  contact us  or use our services. This may include your name  email address  phone number  company information  and any other information you choose to provide.'
		},
		{
			title: 'How We Use Your Information',
			content: 'We use the information we collect to provide  maintain  and improve our services  communicate with you  process transactions  and comply with legal obligations. We may also use your information to send you technical notices  updates  and promotional materials.'
		},
		{
			title: 'Information Sharing',
			content: 'We do not sell  trade  or otherwise transfer your personal information to third parties without your consent  except as described in this policy. We may share your information with service providers who assist us in operating our website and conducting our business.'
		},
		{
			title: 'Data Security',
			content: 'We implement appropriate security measures to protect your personal information against unauthorized access  alteration  disclosure  or destruction. However  no method of transmission over the internet or electronic storage is 100% secure.'
		},
		{
			title: 'Cookies and Tracking',
			content: 'We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Some features of our website may not function properly if cookies are disabled.'
		},
		{
			title: 'Your Rights',
			content: 'You have the right to access  update  or delete your personal information. You may also opt out of certain communications from us. To exercise these rights  please contact us using the information provided in the Contact section.'
		},
		{
			title: 'Data Retention',
			content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy  unless a longer retention period is required or permitted by law. We will securely delete or anonymize your information when it is no longer needed.'
		},
		{
			title: 'International Transfers',
			content: 'Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.'
		},
		{
			title: 'Children\'s Privacy',
			content: 'Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.'
		},
		{
			title: 'Changes to This Policy',
			content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.'
		}
	];

	return (
		<>
			<Head>
				<title>Privacy Policy - Zion App</title>
				<meta name="description" content="Learn about how Zion App collects  uses  and protects your personal information. Our comprehensive privacy policy explains your rights and our data practices." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="container mx-auto px-4 py-8 max-w-4 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5 xl md:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Privacy Policy
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto leading-relaxed">
							Your privacy is important to us. This policy explains how we collect  use  and protect your information.
						</p>
			<div className="mt-6 text-sm text-gray-500">
							Last,
		updated: December 26, 2024
						</div>
					</header>

					<main>
						{/* Introduction */}
						<section className={`mb-16 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="bg-white rounded-3 xl shadow-xl p-8">
								<h2 className="text-2 xl md:text-3 xl font-bold text-gray-800 mb-6">
									Introduction
								</h2>
			<div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
									<p className="mb-4">
										Zion App (&quot;we &quot; &quot;our &quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect  use  disclose  and safeguard your information when you visit our website or use our services.
									</p>
									<p className="mb-4">
										By using our website and services  you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy  please do not use our website or services.
									</p>
									<p>
										We reserve the right to make changes to this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
									</p>
								</div>
							</div>
						</section>

						{/* Policy Sections */}
						{sections.map((section ,, index) => (
							<section key={index} className={`mb-12 transition-all duration-700 delay-${200 + index * 100} ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
			<div className="bg-white rounded-2 xl shadow-lg hover: shadow-xl transition-shadow p-8">
									<h2 className="text-2 xl, md:text-3 xl font-bold text-gray-800 mb-6">
										{section.title}
									</h2>
			<div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
										<p>{section.content}</p>
									</div>
								</div>
							</section>
						))}

						{/* Contact Information */}
						<section className={`mb-16 transition-all duration-700 delay-1000 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3 xl p-8 text-white">
								<h2 className="text-3 xl md: text-4 xl font-bold mb-6">
									Contact Us
								</h2>
								<p className="text-xl mb-8 opacity-90">
									If you have any questions about this Privacy Policy or our data practices  please contact us:
								</p>
			<div className="grid grid-cols-1, md:grid-cols-2 gap-6">
			<div>
										<h3 className="text-xl font-semibold mb-3">Email</h3>
										<p className="opacity-90">privacy@zion.app</p>
									</div>
			<div>
										<h3 className="text-xl font-semibold mb-3">Phone</h3>
										<p className="opacity-90">+1 (555) 123-4567</p>
									</div>
			<div>
										<h3 className="text-xl font-semibold mb-3">Address</h3>
										<p className="opacity-90">123 Tech Avenue<br />Innovation City  CA 90210</p>
									</div>
			<div>
										<h3 className="text-xl font-semibold mb-3">Response Time</h3>
										<p className="opacity-90">We typically respond within 24-48 hours</p>
									</div>
								</div>
							</div>
						</section>

						{/* Legal Compliance */}
						<section className={`mb-16 transition-all duration-700 delay-1100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="bg-white rounded-2 xl shadow-lg p-8">
								<h2 className="text-2 xl md: text-3 xl font-bold text-gray-800 mb-6">
									Legal Compliance
								</h2>
			<div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
									<p className="mb-4">
										This Privacy Policy is designed to comply with applicable data protection laws ,
		including:
									</p>
									<ul className="list-disc pl-6 mb-4">
										<li>General Data Protection Regulation (GDPR)</li>
										<li>California Consumer Privacy Act (CCPA)</li>
										<li>Children&apos;s Online Privacy Protection Act (COPPA)</li>
										<li>Other applicable local and international privacy laws</li>
									</ul>
									<p>
										If you are located in the European Union  you have additional rights under the GDPR  including the right to data portability  the right to erasure  and the right to object to processing. Please contact us if you wish to exercise these rights.
									</p>
								</div>
							</div>
						</section>

						{/* CTA Section */}
						<section className={`text-center py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-16 text-white relative overflow-hidden transition-all duration-1000 delay-1200 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="absolute inset-0 opacity-10">
			<div className="absolute inset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<div className="relative z-10">
								<h2 className="text-4 xl md: text-6 xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Questions About Privacy?
								</h2>
								<p className="text-xl md:text-2 xl mb-10 max-w-3 xl mx-auto opacity-90 font-light leading-relaxed">
									We&apos;re here to help. Contact us for any privacy-related questions or concerns.
								</p>
			<div className="flex flex-col, sm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('contact-privacy', 'cta')}
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
					<Link href="/faq">
										<button 
											onClick={() => trackClick('view-faq-privacy', 'cta')}
											className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 transform, hover:-translate-y-1 text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												View FAQ
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
											</span>
										</button>
									</Link>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</>
	)}
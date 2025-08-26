import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Eye, Lock, Database, Users, ArrowRight } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Privacy() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Privacy Policy
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Your privacy is important to us. Learn how we protect and handle your information.
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-4xl px-6 lg:px-8">
					<div className="prose prose-lg max-w-none">
						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
							<p className="text-gray-600 mb-4">
								We collect information you provide directly to us, such as when you:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Contact us through our website or email
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Request a quote or consultation
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Apply for a job or career opportunity
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Subscribe to our newsletter or updates
								</li>
							</ul>
							<p className="text-gray-600">
								This information may include your name, email address, company name, phone number, and any other information you choose to provide.
							</p>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
							<p className="text-gray-600 mb-4">
								We use the information we collect to:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Provide and improve our services
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Communicate with you about our services
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Send you technical notices and support messages
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Respond to your comments and questions
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
							<p className="text-gray-600 mb-4">
								We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
									With your explicit consent
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
									To comply with legal obligations
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
									To protect our rights and safety
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
									In connection with a business transfer or merger
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
							<p className="text-gray-600 mb-4">
								We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
									Encryption of data in transit and at rest
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
									Regular security assessments and updates
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
									Access controls and authentication measures
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
									Employee training on data protection
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
							<p className="text-gray-600 mb-4">
								You have the right to:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Access your personal information
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Correct inaccurate information
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Request deletion of your information
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Object to processing of your information
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Withdraw consent at any time
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
							<p className="text-gray-600 mb-4">
								We use cookies and similar tracking technologies to:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Remember your preferences and settings
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Analyze website traffic and usage patterns
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Improve our website functionality
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Provide personalized content and experiences
								</li>
							</ul>
							<p className="text-gray-600">
								You can control cookie settings through your browser preferences.
							</p>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
							<p className="text-gray-600 mb-4">
								If you have any questions about this Privacy Policy or our data practices, please contact us:
							</p>
							<div className="bg-gray-50 p-6 rounded-lg">
								<p className="text-gray-600 mb-2">
									<strong>Email:</strong> privacy@ziontechgroup.com
								</p>
								<p className="text-gray-600 mb-2">
									<strong>Phone:</strong> +1 (555) 123-4567
								</p>
								<p className="text-gray-600">
									<strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345
								</p>
							</div>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
							<p className="text-gray-600">
								We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
							</p>
						</div>

						<div className="text-center text-sm text-gray-500">
							<p>Last Updated: January 15, 2025</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Questions About Privacy?
					</h2>
					<p className="text-gray-600 mb-6">
						We're here to help. Contact us with any privacy-related questions.
					</p>
					<Link
						to="/contact"
						className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
					>
						Contact Us
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</div>
			</section>
		</PageTransition>
	)
}

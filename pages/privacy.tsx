import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Privacy() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
							<Shield className="h-8 w-8 text-blue-600" />
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Privacy Policy
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Your privacy is important to us. This policy explains how we collect, use, and protect your information.
						</p>
						<p className="mt-4 text-sm text-gray-500">
							Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>
				</div>
			</section>

			{/* Privacy Content */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-4xl px-6 lg:px-8">
					<div className="prose prose-lg prose-gray mx-auto">
						<div className="space-y-12">
							{/* Information We Collect */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Database className="h-6 w-6 text-blue-600" />
									Information We Collect
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
									<ul className="space-y-2 text-gray-700">
										<li>• Name and contact information (email, phone number)</li>
										<li>• Company name and job title</li>
										<li>• Project requirements and business information</li>
										<li>• Communication preferences</li>
									</ul>
									
									<h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Technical Information</h3>
									<ul className="space-y-2 text-gray-700">
										<li>• IP address and device information</li>
										<li>• Browser type and version</li>
										<li>• Pages visited and time spent</li>
										<li>• Cookies and similar technologies</li>
									</ul>
								</div>
							</div>

							{/* How We Use Information */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Eye className="h-6 w-6 text-green-600" />
									How We Use Your Information
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<ul className="space-y-3 text-gray-700">
										<li className="flex items-start gap-3">
											<span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
											<span>Provide and improve our services</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
											<span>Communicate with you about projects and services</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
											<span>Send technical updates and security notifications</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
											<span>Analyze website usage and improve user experience</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
											<span>Comply with legal obligations</span>
										</li>
									</ul>
								</div>
							</div>

							{/* Information Sharing */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Lock className="h-6 w-6 text-red-600" />
									Information Sharing
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>• With your explicit consent</li>
										<li>• To comply with legal requirements</li>
										<li>• To protect our rights and safety</li>
										<li>• With trusted service providers (under strict confidentiality agreements)</li>
									</ul>
								</div>
							</div>

							{/* Data Security */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Shield className="h-6 w-6 text-purple-600" />
									Data Security
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										We implement industry-standard security measures to protect your information:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>• Encryption of data in transit and at rest</li>
										<li>• Regular security audits and updates</li>
										<li>• Access controls and authentication</li>
										<li>• Secure hosting infrastructure</li>
										<li>• Employee training on data protection</li>
									</ul>
								</div>
							</div>

							{/* Your Rights */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<UserCheck className="h-6 w-6 text-indigo-600" />
									Your Rights
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										You have the right to:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>• Access your personal information</li>
										<li>• Correct inaccurate information</li>
										<li>• Request deletion of your data</li>
										<li>• Opt-out of marketing communications</li>
										<li>• Lodge a complaint with supervisory authorities</li>
									</ul>
								</div>
							</div>

							{/* Contact Information */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Mail className="h-6 w-6 text-orange-600" />
									Contact Us
								</h2>
								<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
									<p className="text-gray-700 mb-4">
										If you have questions about this privacy policy or want to exercise your rights, please contact us:
									</p>
									<div className="space-y-2">
										<p className="text-gray-700">
											<strong>Email:</strong>{' '}
											<a 
												href="mailto:privacy@ziontechgroup.com" 
												className="text-blue-600 hover:text-blue-500 transition-colors"
											>
												privacy@ziontechgroup.com
											</a>
										</p>
										<p className="text-gray-700">
											<strong>Phone:</strong>{' '}
											<a 
												href="tel:+1-555-123-4567" 
												className="text-blue-600 hover:text-blue-500 transition-colors"
											>
												+1 (555) 123-4567
											</a>
										</p>
										<p className="text-gray-700">
											<strong>Address:</strong> 123 Tech Street, Innovation District, San Francisco, CA 94105
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Questions about privacy?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							We're here to help. Contact our privacy team for any concerns or questions.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Contact Us
							</Link>
							<Link
								to="/"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
							>
								Back to Home
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}

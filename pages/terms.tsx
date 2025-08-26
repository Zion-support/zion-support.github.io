import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Shield, AlertTriangle, CheckCircle, Users, Globe, Code } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Terms() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
							<FileText className="h-8 w-8 text-blue-600" />
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Terms of Service
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Please read these terms carefully before using our services. By using our website and services, you agree to these terms.
						</p>
						<p className="mt-4 text-sm text-gray-500">
							Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>
				</div>
			</section>

			{/* Terms Content */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-4xl px-6 lg:px-8">
					<div className="prose prose-lg prose-gray mx-auto">
						<div className="space-y-12">
							{/* Acceptance of Terms */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<CheckCircle className="h-6 w-6 text-green-600" />
									Acceptance of Terms
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement.
									</p>
									<p className="text-gray-700">
										If you do not agree to abide by the above, please do not use this service.
									</p>
								</div>
							</div>

							{/* Services Description */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Code className="h-6 w-6 text-blue-600" />
									Services Description
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										Zion Tech Group provides the following services:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>• AI Autonomous Systems Development</li>
										<li>• Cloud Platform Architecture</li>
										<li>• Cybersecurity Solutions</li>
										<li>• Micro SaaS Development</li>
										<li>• Technical Consulting</li>
										<li>• System Integration</li>
									</ul>
								</div>
							</div>

							{/* User Responsibilities */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Users className="h-6 w-6 text-purple-600" />
									User Responsibilities
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										As a user of our services, you agree to:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>• Provide accurate and complete information</li>
										<li>• Maintain the security of your account credentials</li>
										<li>• Use services only for lawful purposes</li>
										<li>• Not interfere with or disrupt our services</li>
										<li>• Respect intellectual property rights</li>
										<li>• Comply with all applicable laws and regulations</li>
									</ul>
								</div>
							</div>

							{/* Intellectual Property */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Globe className="h-6 w-6 text-indigo-600" />
									Intellectual Property
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										All content, features, and functionality on this website are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws.
									</p>
									<p className="text-gray-700">
										You may not reproduce, distribute, modify, or create derivative works without our express written consent.
									</p>
								</div>
							</div>

							{/* Limitation of Liability */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Shield className="h-6 w-6 text-orange-600" />
									Limitation of Liability
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>• Loss of profits or data</li>
										<li>• Business interruption</li>
										<li>• Service interruptions</li>
										<li>• Third-party actions</li>
										<li>• Force majeure events</li>
									</ul>
									<p className="text-gray-700 mt-4">
										Our total liability shall not exceed the amount paid for the specific service in question.
									</p>
								</div>
							</div>

							{/* Privacy and Data */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Shield className="h-6 w-6 text-green-600" />
									Privacy and Data Protection
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
									</p>
									<p className="text-gray-700">
										By using our services, you consent to the collection and use of information as outlined in our Privacy Policy.
									</p>
								</div>
							</div>

							{/* Termination */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<AlertTriangle className="h-6 w-6 text-red-600" />
									Termination
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>• Breach of these terms</li>
										<li>• Fraudulent or illegal activity</li>
										<li>• Non-payment of fees</li>
										<li>• Violation of applicable laws</li>
									</ul>
									<p className="text-gray-700 mt-4">
										Upon termination, your right to use the services will cease immediately.
									</p>
								</div>
							</div>

							{/* Changes to Terms */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<FileText className="h-6 w-6 text-blue-600" />
									Changes to Terms
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700 mb-4">
										We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
									</p>
									<p className="text-gray-700">
										Your continued use of our services after changes are posted constitutes acceptance of the new terms.
									</p>
								</div>
							</div>

							{/* Governing Law */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<Globe className="h-6 w-6 text-purple-600" />
									Governing Law
								</h2>
								<div className="bg-white rounded-lg border border-gray-200 p-6">
									<p className="text-gray-700">
										These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
									</p>
								</div>
							</div>

							{/* Contact Information */}
							<div>
								<h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
									<FileText className="h-6 w-6 text-indigo-600" />
									Contact Information
								</h2>
								<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
									<p className="text-gray-700 mb-4">
										If you have questions about these terms of service, please contact us:
									</p>
									<div className="space-y-2">
										<p className="text-gray-700">
											<strong>Email:</strong>{' '}
											<a 
												href="mailto:legal@ziontechgroup.com" 
												className="text-blue-600 hover:text-blue-500 transition-colors"
											>
												legal@ziontechgroup.com
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
							Questions about our terms?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Our legal team is here to help clarify any questions about our terms of service.
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

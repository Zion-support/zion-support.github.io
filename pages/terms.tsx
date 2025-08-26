import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Shield, Users, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Terms() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Terms of Service
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Please read these terms carefully before using our services.
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-4xl px-6 lg:px-8">
					<div className="prose prose-lg max-w-none">
						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
							<p className="text-gray-600 mb-4">
								By accessing and using the services provided by Zion Tech Group ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement.
							</p>
							<p className="text-gray-600">
								If you do not agree to abide by the above, please do not use this service.
							</p>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
							<p className="text-gray-600 mb-4">
								Zion Tech Group provides technology consulting, AI solutions, cloud services, cybersecurity, and related professional services. Our services include:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									AI and machine learning solutions
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Cloud infrastructure and DevOps services
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Cybersecurity and compliance solutions
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Micro SaaS development and deployment
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Technology consulting and strategy
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">3. Use License</h2>
							<p className="text-gray-600 mb-4">
								Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
									Modify or copy the materials
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
									Use the materials for any commercial purpose
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
									Attempt to reverse engineer any software
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
									Remove any copyright or proprietary notations
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">4. Client Responsibilities</h2>
							<p className="text-gray-600 mb-4">
								As a client of Zion Tech Group, you agree to:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Provide accurate and complete information
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Cooperate with our team during project execution
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Make timely payments as agreed upon
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Respect intellectual property rights
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
									Maintain confidentiality of proprietary information
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
							<p className="text-gray-600 mb-4">
								Payment terms are as follows:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Invoices are due within 30 days of receipt
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Late payments may incur additional fees
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									All fees are non-refundable unless otherwise specified
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									Prices are subject to change with 30 days notice
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
							<p className="text-gray-600 mb-4">
								Intellectual property ownership is as follows:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
									Client retains ownership of their existing IP
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
									Zion Tech Group retains ownership of our proprietary tools and frameworks
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
									Custom deliverables are owned by the client upon full payment
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
									Third-party software licenses remain with their respective owners
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
							<p className="text-gray-600 mb-4">
								In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
							</p>
							<p className="text-gray-600">
								Our total liability shall not exceed the amount paid by you for the specific service in question.
							</p>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">8. Confidentiality</h2>
							<p className="text-gray-600 mb-4">
								Both parties agree to maintain the confidentiality of:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
									Business strategies and plans
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
									Technical specifications and designs
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
									Customer and client information
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
									Financial and pricing information
								</li>
							</ul>
							<p className="text-gray-600">
								This obligation survives the termination of our business relationship.
							</p>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>
							<p className="text-gray-600 mb-4">
								Either party may terminate this agreement with written notice:
							</p>
							<ul className="space-y-2 text-gray-600 mb-6">
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
									For material breach (30 days notice)
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
									For convenience (60 days notice)
								</li>
								<li className="flex items-start gap-2">
									<div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
									Immediately for cause (fraud, illegal activity)
								</li>
							</ul>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
							<p className="text-gray-600">
								These terms and conditions are governed by and construed in accordance with the laws of the State of California, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
							</p>
						</div>

						<div className="mb-12">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
							<p className="text-gray-600">
								Zion Tech Group reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
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
						Questions About Our Terms?
					</h2>
					<p className="text-gray-600 mb-6">
						We're here to clarify any questions about our terms of service.
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

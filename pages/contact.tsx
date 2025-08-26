import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		service: '',
		message: ''
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000))
		
		setIsSubmitted(true)
		setIsSubmitting(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

	if (isSubmitted) {
		return (
			<PageTransition>
				<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<CheckCircle className="h-8 w-8 text-green-600" />
							</div>
							<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
								Thank you for your message!
							</h1>
							<p className="text-lg text-gray-600 mb-8">
								We've received your inquiry and will get back to you within one business day. In the meantime, feel free to explore our services.
							</p>
							<div className="flex items-center justify-center gap-x-6">
								<Link
									to="/services"
									className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
								>
									View Services
								</Link>
								<Link
									to="/"
									className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
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

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Get in Touch
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Ready to transform your business? Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<div>
							<h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
								Send us a message
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid gap-6 sm:grid-cols-2">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="your.email@company.com"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Company
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
										placeholder="Your company (optional)"
									/>
								</div>
								<div>
									<label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Service of Interest
									</label>
									<select
										id="service"
										name="service"
										value={formData.service}
										onChange={handleChange}
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
									>
										<option value="">Select a service</option>
										<option value="ai">AI Autonomous Systems</option>
										<option value="cloud">Cloud Platforms</option>
										<option value="cybersecurity">Cybersecurity</option>
										<option value="consulting">Consulting</option>
										<option value="other">Other</option>
									</select>
								</div>
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										value={formData.message}
										onChange={handleChange}
										required
										className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
										placeholder="Tell us about your project or how we can help..."
									/>
								</div>
								<button
									type="submit"
									disabled={!isFormValid || isSubmitting}
									className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
										isFormValid && !isSubmitting
											? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
											: 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
									}`}
								>
									{isSubmitting ? (
										<>
											<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
											Sending...
										</>
									) : (
										<>
											<Send className="w-4 h-4 mr-2" />
											Send Message
										</>
									)}
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div>
							<h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
								Contact Information
							</h2>
							<div className="space-y-8">
								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
										<Mail className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Email</h3>
										<p className="text-gray-600">
											<a 
												href="mailto:kleber@ziontechgroup.com" 
												className="text-blue-600 hover:text-blue-500 transition-colors"
											>
												kleber@ziontechgroup.com
											</a>
										</p>
										<p className="text-sm text-gray-500 mt-1">
											We typically respond within one business day
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
										<Phone className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Phone</h3>
										<p className="text-gray-600">
											<a 
												href="tel:+13024640950" 
												className="text-blue-600 hover:text-blue-500 transition-colors"
											>
												+1 (302) 464-0950
											</a>
										</p>
										<p className="text-sm text-gray-500 mt-1">
											Available Monday-Friday, 9 AM - 6 PM EST
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
										<MapPin className="h-5 w-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Office</h3>
										<p className="text-gray-600">
											364 E Main St STE 1008<br />
											Middletown, DE 19709<br />
											United States
										</p>
										<p className="text-sm text-gray-500 mt-1">
											By appointment only
										</p>
									</div>
								</div>
							</div>

							{/* Additional Info */}
							<div className="mt-12 p-6 bg-gray-50 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Why choose Zion Tech Group?
								</h3>
								<ul className="space-y-2 text-sm text-gray-600">
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										Proven track record with 50+ successful projects
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										Expert team with deep industry knowledge
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										End-to-end solution delivery
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										Ongoing support and maintenance
									</li>
								</ul>
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
							Ready to get started?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Don't wait to transform your business. Contact us today to discuss your project.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/services"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								View Services
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

interface FormData {
	name: string
	email: string
	company: string
	service: string
	message: string
}

interface FormErrors {
	name?: string
	email?: string
	message?: string
}

export default function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		company: '',
		service: '',
		message: ''
	})
	const [errors, setErrors] = useState<FormErrors>({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const services = [
		'AI Systems & Automation',
		'Cloud Migration & Infrastructure',
		'Cybersecurity & Compliance',
		'Micro SaaS Development',
		'Data Analytics & BI',
		'DevOps & CI/CD',
		'Other'
	]

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {}

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required'
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required'
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters long'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		if (!validateForm()) {
			return
		}

		setIsSubmitting(true)
		
		try {
			// Simulate form submission
			await new Promise(resolve => setTimeout(resolve, 1500))
			
			setIsSubmitted(true)
			setIsSubmitting(false)
		} catch (error) {
			console.error('Form submission error:', error)
			setIsSubmitting(false)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))

		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors(prev => ({
				...prev,
				[name]: undefined
			}))
		}
	}

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
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
												errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
											}`}
											placeholder="Your full name"
										/>
										{errors.name && (
											<div className="flex items-center mt-2 text-sm text-red-600">
												<AlertCircle className="h-4 w-4 mr-1" />
												{errors.name}
											</div>
										)}
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
											Email Address *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
												errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
											}`}
											placeholder="your.email@company.com"
										/>
										{errors.email && (
											<div className="flex items-center mt-2 text-sm text-red-600">
												<AlertCircle className="h-4 w-4 mr-1" />
												{errors.email}
											</div>
										)}
									</div>
								</div>

								<div className="grid gap-6 sm:grid-cols-2">
									<div>
										<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
											Company
										</label>
										<input
											type="text"
											id="company"
											name="company"
											value={formData.company}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
											placeholder="Your company name"
										/>
									</div>
									<div>
										<label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
											Service Interest
										</label>
										<select
											id="service"
											name="service"
											value={formData.service}
											onChange={handleChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
										>
											<option value="">Select a service</option>
											{services.map((service) => (
												<option key={service} value={service}>
													{service}
												</option>
											))}
										</select>
									</div>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										value={formData.message}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
											errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'
										}`}
										placeholder="Tell us about your project and how we can help..."
									/>
									{errors.message && (
										<div className="flex items-center mt-2 text-sm text-red-600">
											<AlertCircle className="h-4 w-4 mr-1" />
											{errors.message}
										</div>
									)}
								</div>

								<div>
									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
									>
										{isSubmitting ? (
											<div className="flex items-center justify-center">
												<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
												Sending...
											</div>
										) : (
											<div className="flex items-center justify-center">
												<Send className="h-5 w-5 mr-2" />
												Send Message
											</div>
										)}
									</button>
								</div>
							</form>
						</div>

						{/* Contact Information */}
						<div className="lg:pl-8">
							<h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
								Get in touch
							</h2>
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
											<Phone className="h-5 w-5 text-white" />
										</div>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Phone</h3>
										<p className="text-gray-600">+1 302 464 0950</p>
										<p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
											<Mail className="h-5 w-5 text-white" />
										</div>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Email</h3>
										<p className="text-gray-600">kleber@ziontechgroup.com</p>
										<p className="text-sm text-gray-500">We'll respond within 24 hours</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
											<MapPin className="h-5 w-5 text-white" />
										</div>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">Office</h3>
										<p className="text-gray-600">364 E Main St STE 1008</p>
										<p className="text-gray-600">Middletown, DE 19709</p>
									</div>
								</div>
							</div>

							{/* Additional Info */}
							<div className="mt-12 p-6 bg-gray-50 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-3">Why choose Zion Tech Group?</h3>
								<ul className="space-y-2 text-sm text-gray-600">
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Expert AI and cloud solutions
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Proven track record with 200+ clients
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Enterprise-grade security standards
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										24/7 support and maintenance
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}

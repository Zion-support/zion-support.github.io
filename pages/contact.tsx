import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle, User, Building, MessageSquare, ArrowRight } from 'lucide-react'
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
	const [isVisible, setIsVisible] = useState(false)
	const [errors, setErrors] = useState<{[key: string]: string}>({})

	useEffect(() => {
		setIsVisible(true)
	}, [])

	const validateForm = () => {
		const newErrors: {[key: string]: string} = {}
		
		if (!formData.name.trim()) {
			newErrors.name = 'Name is required'
		}
		
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email'
		}
		
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required'
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
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1500))
		
		setIsSubmitted(true)
		setIsSubmitting(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value
		})
		
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: ''
			})
		}
	}

	const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

	if (isSubmitted) {
		return (
			<PageTransition>
				<section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 py-20 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
								<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
									<CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
								</div>
								<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
									Thank you for your message!
								</h1>
								<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
									We've received your inquiry and will get back to you within one business day. In the meantime, feel free to explore our services.
								</p>
								<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
									<Link
										to="/services"
										className="group rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-105 transform w-full sm:w-auto text-center"
									>
										<span className="relative z-10">View Services</span>
										<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform duration-200" />
									</Link>
									<Link
										to="/"
										className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
									>
										Back to Home
									</Link>
								</div>
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
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
								Get in Touch
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
								Ready to transform your business? Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-24 sm:py-32 bg-white dark:bg-slate-900">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						{/* Enhanced Contact Form */}
						<div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
								Send us a message
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid gap-6 sm:grid-cols-2">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											<div className="flex items-center gap-2">
												<User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
												Name *
											</div>
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
												errors.name 
													? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20' 
													: 'border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 hover:border-gray-400 dark:hover:border-gray-500'
											}`}
											placeholder="Your name"
										/>
										{errors.name && (
											<p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
										)}
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											<div className="flex items-center gap-2">
												<Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
												Email *
											</div>
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
												errors.email 
													? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20' 
													: 'border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 hover:border-gray-400 dark:hover:border-gray-500'
											}`}
											placeholder="your.email@company.com"
										/>
										{errors.email && (
											<p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
										)}
									</div>
								</div>
								
								<div>
									<label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										<div className="flex items-center gap-2">
											<Building className="h-4 w-4 text-blue-600 dark:text-blue-400" />
											Company
										</div>
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-slate-800 hover:border-gray-400 dark:hover:border-gray-500"
										placeholder="Your company name"
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
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-slate-800 hover:border-gray-400 dark:hover:border-gray-500"
									>
										<option value="">Select a service</option>
										<option value="ai">AI Autonomous Systems</option>
										<option value="cloud">Cloud Platforms</option>
										<option value="cybersecurity">Cybersecurity</option>
										<option value="saas">Micro SaaS</option>
										<option value="consulting">Consulting</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										<div className="flex items-center gap-2">
											<MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
											Message *
										</div>
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										value={formData.message}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
											errors.message 
												? 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20' 
												: 'border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 hover:border-gray-400 dark:hover:border-gray-500'
										}`}
										placeholder="Tell us about your project or how we can help..."
									/>
									{errors.message && (
										<p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
									)}
								</div>

								<div>
									<button
										type="submit"
										disabled={!isFormValid || isSubmitting}
										className={`group w-full flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300 ${
											isFormValid && !isSubmitting
												? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transform shadow-lg hover:shadow-xl'
												: 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
										}`}
									>
										{isSubmitting ? (
											<>
												<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
												Sending...
											</>
										) : (
											<>
												<span className="relative z-10">Send Message</span>
												<Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
											</>
										)}
									</button>
								</div>
							</form>
						</div>

						{/* Enhanced Contact Information */}
						<div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
								Let's start a conversation
							</h2>
							<div className="space-y-8">
								<div className="group">
									<div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all duration-300">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:scale-110 transition-transform duration-300">
											<Mail className="h-6 w-6 text-white" />
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
											<p className="text-gray-600 dark:text-gray-300">hello@ziontechgroup.com</p>
											<p className="text-sm text-gray-500 dark:text-gray-400">We'll respond within 24 hours</p>
										</div>
									</div>
								</div>

								<div className="group">
									<div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-slate-800 group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-all duration-300">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:scale-110 transition-transform duration-300">
											<Phone className="h-6 w-6 text-white" />
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
											<p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
											<p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM EST</p>
										</div>
									</div>
								</div>

								<div className="group">
									<div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-slate-800 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-all duration-300">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:scale-110 transition-transform duration-300">
											<MapPin className="h-6 w-6 text-white" />
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Office</h3>
											<p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
											<p className="text-sm text-gray-500 dark:text-gray-400">Remote-first company</p>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
									Why choose Zion Tech Group?
								</h3>
								<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
										Proven track record with 50+ successful projects
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
										Expert team with deep industry knowledge
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
										Fast delivery and ongoing support
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
										Competitive pricing and flexible engagement models
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

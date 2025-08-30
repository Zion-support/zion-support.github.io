import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'


export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: ''
	})
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Here you would typically send the form data to your backend
		console.log('Form submitted:', formData)
		setIsSubmitted(true)
		// Reset form after submission
		setTimeout(() => {
			setIsSubmitted(false)
			setFormData({ name: '', email: '', company: '', message: '' })
		}, 3000)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Get in Touch
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Ready to transform your business with cutting-edge technology? Let's discuss how we can help.
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
							<h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
							{isSubmitted ? (
								<div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
									<CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
									<h3 className="text-lg font-semibold text-green-900 mb-2">Message Sent!</h3>
									<p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formData.name}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											value={formData.email}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
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
											className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
											Message *
										</label>
										<textarea
											id="message"
											name="message"
											rows={4}
											required
											value={formData.message}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										/>
									</div>
									<button
										type="submit"
										className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2"
									>
										<Send className="h-4 w-4" />
										Send Message
									</button>
								</form>
							)}
						</div>

						{/* Contact Information */}
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
										<Mail className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
										<p className="text-gray-600">kleber@ziontechgroup.com</p>
										<p className="text-sm text-gray-500">We typically respond within 24 hours</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
										<Phone className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
										<p className="text-gray-600">+1 302 464 0950</p>
										<p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM EST</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
										<MapPin className="h-6 w-6 text-purple-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
										<p className="text-gray-600">364 E Main St STE 1008</p>
										<p className="text-gray-600">Middletown, DE 19709</p>
									</div>
								</div>
							</div>

							{/* Additional Info */}
							<div className="mt-8 p-6 bg-gray-50 rounded-lg">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
								<p className="text-gray-600 mb-4">
									Schedule a consultation to discuss your technology needs and explore how our solutions can drive your business forward.
								</p>
								<Link
									to="/services"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Explore Our Services →
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-blue-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">Let's Build Something Amazing Together</h2>
						<p className="mt-6 text-lg text-blue-100">
							Whether you're looking to implement AI solutions, modernize your cloud infrastructure, or strengthen your cybersecurity posture, we're here to help.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/services"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								View Our Services
							</Link>
							<Link
								to="/about"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
							>
								Learn More About Us →
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
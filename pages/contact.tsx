import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
		// Handle form submission logic here
		setIsSubmitted(true)
	}

	const title = 'Contact — Zion Tech Group'
	const description = 'Get in touch to discuss your AI, cloud, or cybersecurity needs.'

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main className="min-h-screen bg-white text-gray-900">
				<section className="mx-auto max-w-5xl px-6 py-16">
					<h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Get in Touch</h1>
					<p className="mt-4 max-w-2xl text-lg text-gray-700">
						Ready to transform your business? Let's discuss how our AI, cloud, and cybersecurity solutions can help.
					</p>
				</section>

				<section className="mx-auto max-w-5xl px-6 pb-16">
					<div className="grid gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<div>
							<h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
							{isSubmitted ? (
								<div className="rounded-lg bg-green-50 p-6 border border-green-200">
									<div className="flex items-center gap-3">
										<CheckCircle className="h-6 w-6 text-green-600" />
										<h3 className="text-lg font-medium text-green-800">Message sent!</h3>
									</div>
									<p className="mt-2 text-green-700">We'll get back to you within 24 hours.</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Name
										</label>
										<input
											type="text"
											id="name"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
											required
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
											Email
										</label>
										<input
											type="email"
											id="email"
											value={formData.email}
											onChange={(e) => setFormData({ ...formData, email: e.target.value })}
											className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
											required
										/>
									</div>
									<div>
										<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
											Company
										</label>
										<input
											type="text"
											id="company"
											value={formData.company}
											onChange={(e) => setFormData({ ...formData, company: e.target.value })}
											className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
										/>
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
											Message
										</label>
										<textarea
											id="message"
											rows={4}
											value={formData.message}
											onChange={(e) => setFormData({ ...formData, message: e.target.value })}
											className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
											required
										/>
									</div>
									<button
										type="submit"
										className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
									>
										<Send className="h-4 w-4" />
										Send Message
									</button>
								</form>
							)}
						</div>

						{/* Contact Info */}
						<div>
							<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<Phone className="h-6 w-6 text-blue-600 mt-1" />
									<div>
										<h3 className="font-medium">Phone</h3>
										<p className="text-gray-700">+1 302 464 0950</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<Mail className="h-6 w-6 text-blue-600 mt-1" />
									<div>
										<h3 className="font-medium">Email</h3>
										<p className="text-gray-700">kleber@ziontechgroup.com</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<MapPin className="h-6 w-6 text-blue-600 mt-1" />
									<div>
										<h3 className="font-medium">Address</h3>
										<p className="text-gray-700">364 E Main St STE 1008<br />Middletown DE 19709</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

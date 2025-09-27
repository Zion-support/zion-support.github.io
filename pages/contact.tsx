import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Contact(): JSX.Element {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: ''
	});

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		trackClick('contact-form-submit', 'conversion');
		console.log('Form submitted:', formData);
		// Handle form submission logic here
	};

	return (
		<>
			<SEO />
			<Head>
				<title>Contact Us - Zion App</title>
				<meta name="description" content="Get in touch with Zion App for your technology needs. We're here to help transform your business." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Contact Us
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Ready to transform your business? Let's start the conversation.
						</p>
					</header>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div className="bg-white rounded-2xl shadow-xl p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
										onChange={handleInputChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={5}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div className="space-y-8">
							<div className="bg-white rounded-2xl shadow-xl p-8">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
								<div className="space-y-4">
									<div className="flex items-center">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
											<span className="text-blue-600 text-xl">📧</span>
										</div>
										<div>
											<p className="font-semibold text-gray-900">Email</p>
											<p className="text-gray-600">hello@zion.app</p>
										</div>
									</div>

									<div className="flex items-center">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
											<span className="text-blue-600 text-xl">📞</span>
										</div>
										<div>
											<p className="font-semibold text-gray-900">Phone</p>
											<p className="text-gray-600">+1 (555) 123-4567</p>
										</div>
									</div>

									<div className="flex items-center">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
											<span className="text-blue-600 text-xl">📍</span>
										</div>
										<div>
											<p className="font-semibold text-gray-900">Address</p>
											<p className="text-gray-600">123 Tech Street, Innovation City, IC 12345</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
								<h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
								<p className="mb-6 opacity-90">
									Schedule a free consultation to discuss your project needs.
								</p>
								<button
									onClick={() => trackClick('schedule-consultation', 'cta')}
									className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
								>
									Schedule Consultation
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
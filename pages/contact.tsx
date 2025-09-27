import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Contact(): JSX.Element {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		service: '',
		timeline: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const { trackClick } = useAnalytics();

	const services = [
		'AI & Machine Learning',
		'Cloud Computing',
		'Web Development',
		'Mobile App Development',
		'Data Analytics',
		'Cybersecurity',
		'Digital Transformation',
		'Other'
	];

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			setIsSubmitted(true);
			trackClick('contact-form-submit', 'conversion');
		} catch (err) {
			setError('Failed to send message. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSubmitted) {
		return (
			<>
				<Head>
					<title>Thank You - Zion App</title>
					<meta name="description" content="Thank you for contacting Zion App. We'll get back to you soon." />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
					<div className="container mx-auto px-4 py-8 max-w-7xl">
						<nav className="mb-8">
							<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
								← Back to Home
							</Link>
						</nav>
						<div className="text-center py-16">
							<div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
								<div className="text-green-500 text-6xl mb-4">✓</div>
								<h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
								<p className="text-gray-600 mb-6">
									Your message has been sent successfully. We'll get back to you within 24 hours.
								</p>
								<Link 
									href="/" 
									className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
									onClick={() => trackClick('contact-success-home', 'navigation')}
								>
									Return to Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
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

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div className="bg-white rounded-lg shadow-lg p-8">
							<h1 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h1>
							<p className="text-gray-600 mb-8">
								Ready to transform your business? Let's discuss your project and how we can help you achieve your goals.
							</p>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="Your full name"
										/>
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
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="your.email@company.com"
										/>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
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
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="Your company name"
										/>
									</div>
									<div>
										<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
											Phone Number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="+1 (555) 123-4567"
										/>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
											Service Interest
										</label>
										<select
											id="service"
											name="service"
											value={formData.service}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										>
											<option value="">Select a service</option>
											{services.map((service) => (
												<option key={service} value={service}>
													{service}
												</option>
											))}
										</select>
									</div>
									<div>
										<label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
											Project Timeline
										</label>
										<select
											id="timeline"
											name="timeline"
											value={formData.timeline}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										>
											<option value="">Select timeline</option>
											<option value="asap">ASAP</option>
											<option value="1-3 months">1-3 months</option>
											<option value="3-6 months">3-6 months</option>
											<option value="6+ months">6+ months</option>
											<option value="exploring">Just exploring</option>
										</select>
									</div>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
										Project Details *
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Tell us about your project, goals, and any specific requirements..."
									/>
								</div>

								{error && (
									<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
										{error}
									</div>
								)}

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
								>
									{isSubmitting ? 'Sending...' : 'Send Message'}
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div className="space-y-8">
							<div className="bg-white rounded-lg shadow-lg p-8">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
								
								<div className="space-y-6">
									<div className="flex items-start space-x-4">
										<div className="bg-blue-100 p-3 rounded-lg">
											<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Email</h3>
											<p className="text-gray-600">hello@zionapp.com</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="bg-blue-100 p-3 rounded-lg">
											<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Phone</h3>
											<p className="text-gray-600">+1 (555) 123-4567</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="bg-blue-100 p-3 rounded-lg">
											<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Office</h3>
											<p className="text-gray-600">123 Tech Street<br />San Francisco, CA 94105</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
								<h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
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
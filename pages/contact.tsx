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

	const { trackClick } = useAnalytics();

	const services = [
		'AI & Machine Learning',
		'Cloud Computing',
		'Web Development',
		'Mobile App Development',
		'Data Analytics',
		'Cybersecurity',
		'Digital Transformation',
		'Consulting',
		'Other'
	];

	const timelines = [
		'ASAP',
		'1-3 months',
		'3-6 months',
		'6+ months',
		'Flexible'
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
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		trackClick('contact-form-submit', 'conversion');
		setIsSubmitted(true);
		setIsSubmitting(false);
	};

	if (isSubmitted) {
		return (
			<>
				<SEO />
				<Head>
					<title>Thank You - Zion App</title>
					<meta name="description" content="Thank you for contacting Zion App. We'll get back to you soon." />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 flex items-center justify-center">
					<div className="max-w-2xl mx-auto text-center px-4">
						<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
							<div className="text-6xl mb-6">✅</div>
							<h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
							<p className="text-xl text-gray-600 mb-8">
								Your message has been received. Our team will get back to you within 24 hours.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
									Back to Home
								</Link>
								<Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
									View Services
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
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
							Contact Us
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.
						</p>
					</header>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div className="bg-white rounded-2xl shadow-xl p-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
										<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
											Phone Number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
											Service Interest
										</label>
										<select
											id="service"
											name="service"
											value={formData.service}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										>
											<option value="">Select timeline</option>
											{timelines.map((timeline) => (
												<option key={timeline} value={timeline}>
													{timeline}
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
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="Tell us about your project and how we can help..."
									/>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
								>
									{isSubmitting ? 'Sending...' : 'Send Message'}
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div className="space-y-8">
							<div className="bg-white rounded-2xl shadow-xl p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
								<div className="space-y-6">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📧</span>
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">Email</h4>
											<p className="text-gray-600">hello@zionapp.com</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📞</span>
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">Phone</h4>
											<p className="text-gray-600">+1 (555) 123-4567</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📍</span>
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">Address</h4>
											<p className="text-gray-600">
												123 Tech Street<br />
												San Francisco, CA 94105
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-2xl shadow-xl p-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
								<ul className="space-y-4">
									<li className="flex items-start gap-3">
										<span className="text-green-600 text-xl">✓</span>
										<span className="text-gray-700">Expert team with 10+ years of experience</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 text-xl">✓</span>
										<span className="text-gray-700">24/7 support and monitoring</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 text-xl">✓</span>
										<span className="text-gray-700">Cutting-edge technology solutions</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-green-600 text-xl">✓</span>
										<span className="text-gray-700">Proven track record of success</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
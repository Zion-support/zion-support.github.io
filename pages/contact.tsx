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
		}))};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		trackClick('contact-form-submit', 'form');
		console.log('Form submitted:', formData);
		// Here you would typically send the data to your backend
		alert('Thank you for your message! We will get back to you soon.')};
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
		)}

	return (
		<>
			<SEO />
			<Head>
				<title>Contact Us - Zion App</title>
				<meta name="description" content="Get in touch with our team for technology solutions, consulting, and support." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-4 xl md:text-6 xl font-bold text-gray-900 mb-6">
							Contact Us
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto">
							Ready to transform your business with cutting-edge technology? Let's discuss your project and how we can help.						</p>
					</header>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
						{/* Contact Form */}
						<section className="bg-white rounded-lg shadow-lg p-8">
							<h2 className="text-2 xl font-bold text-gray-900 mb-6">Send us a message</h2>							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formData.name}
											onChange={handleInputChange}
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
											required
											value={formData.email}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="your@email.com"
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
										required
										rows={6}
										value={formData.message}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Tell us about your project and how we can help..."
									/>
								</div>

								<d, i, v>
									<label, htmlFo, r="ema, i, l" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
										Email, Addres, s
									</lab, e, l>
									<input, typ, e="ema, i, l"
										id="ema, i, l"
										na, m, e="ema, i, l"
										val, u, e={formDa, t, a.ema, i, l};
										onChan, g, e={handleInputChan, g, e};
										required, classNam, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"
									/>
								</d, i, v>

								<d, i, v>
									<label, htmlFo, r="compa, n, y" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
										Compa, n, y
									</lab, e, l>
									<input, typ, e="te, x, t"
										id="compa, n, y"
										na, m, e="compa, n, y"
										val, u, e={formDa, t, a.compa, n, y};
										onChan, g, e={handleInputChan, g, e};
										classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"
									/>
								</d, i, v>

								<d, i, v>
									<label, htmlFo, r="messa, g, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
										Messa, g, e
									</lab, e, l>
									<textarea, i, d="messa, g, e"
										na, m, e="messa, g, e"
										val, u, e={formDa, t, a.messa, g, e};
										onChan, g, e={handleInputChan, g, e};
										required, row, s={5};
										classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"
									/>
								</d, i, v>

								<button, typ, e="subm, i, t"
									classNa, m, e="w-full, b, g-bl, u, e-600, tex, t-white, p, y-3, p, x-6, rounde, d-lg, fon, t-semibold, hover:bg-bl, u, e-700, transitio, n-colo, r, s"								>
									{isSubmitting ? 'Sending Message...' : 'Send Message'}
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<section className="space-y-8">
							<div className="bg-white rounded-lg shadow-lg p-8">
								<h2 className="text-2 xl font-bold text-gray-900 mb-6">Get in touch</h2>								<div className="space-y-6">
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📧</span>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Email</h3>
											<p className="text-gray-600">hello@zion.app</p>
											<p className="text-gray-600">support@zion.app</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📞</span>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Phone</h3>
											<p className="text-gray-600">+1 (555) 123-4567</p>
											<p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 text-xl">📍</span>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">Office</h3>
											<p className="text-gray-600">123 Tech Street</p>
											<p className="text-gray-600">San Francisco, CA 94105</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-lg shadow-lg p-8">
								<h2 className="text-2 xl font-bold text-gray-900 mb-6">Business Hours</h2>
								<div className="space-y-2">
									<div className="flex justify-between">
										<span className="text-gray-600">Monday - Friday</span>
										<span className="text-gray-900">9:00 AM - 6:00 PM</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Saturday</span>
										<span className="text-gray-900">10:00 AM - 4:00 PM</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Sunday</span>
										<span className="text-gray-900">Closed</span>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	)}
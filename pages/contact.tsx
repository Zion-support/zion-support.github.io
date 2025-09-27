import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import SEO from "../src/components/SEO";
import { useAnalytics } from "../src/hooks/useAnalytics";

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
		}))};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		trackClick('contact-form-submit', 'form');
		console.log('Form submitted:', formData);
		// Here you would typically send the data to your backend
		alert('Thank you for your message! We will get back to you soon.')};

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
							Ready to transform your business with cutting-edge technology? Let's discuss your project and how we can help.
						</p>
					</section>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<section className="bg-white rounded-lg shadow-lg p-8">
							<h2 className="text-2 xl font-bold text-gray-900 mb-6">Send us a message</h2>
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
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>
								
								<button
									type="submit"
									className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
								>
									Send Message
								</button>
							</form>
						</section>

						{/* Contact Information */}
						<section className="space-y-8">
							<div className="bg-white rounded-lg shadow-lg p-8">
								<h2 className="text-2 xl font-bold text-gray-900 mb-6">Get in touch</h2>
								<div className="space-y-6">
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
										<p className="text-gray-600">hello@zion.app</p>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
										<p className="text-gray-600">+1 (555) 123-4567</p>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
										<p className="text-gray-600">
											123 Technology Drive<br />
											San Francisco, CA 94105
										</p>
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
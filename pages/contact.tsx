import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import Navigation from '../src/components/Navigation';
// import ErrorBoundary from '../src/components/ErrorBoundary';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Contact(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		service: '',
		message: '',
		budget: '',
		timeline: ''
	});
  const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

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
		trackClick('contact-form-submit', 'form');

		try {
			// Simulate API call
                  await new Promise(resolve => setTimeout(resolve, 2000));
			
			// In a real application  you would send the data to your API
			console.log('Form submitted:', formData);
			
			setSubmitStatus('success');
			setFormData({
				name: '',
				email: '',
				company: '',
				phone: '',
				service: '',
				message: '',
				budget: '',
				timeline: ''
			});
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const contactInfo = [
		{
			title: 'Email',
			value: 'hello@zion.app',
			description: 'Send us an email anytime',
			icon: '📧'
		},
		{
			title: 'Phone',
			value: '+1 (555) 123-4567',
			description: 'Call us during business hours',
			icon: '📞'
		},
		{
			title: 'Office Hours',
			value: 'Mon - Fri  9AM - 6PM EST',
			description: 'We&apos;re here to help',
			icon: '🕒'
		},
		{
			title: 'Response Time',
			value: 'Within 24 hours',
			description: 'We&apos;ll get back to you quickly',
			icon: '⚡'
		}
	];

	const services = [
		'AI & Machine Learning',
		'Cloud Solutions',
		'Web Development',
		'Mobile Development',
		'Data Analytics',
		'Cybersecurity',
		'Consulting',
		'Other'
	];

	const budgetRanges = [
		'Under $10,000',
		'$10,000 - $25,000',
		'$25,000 - $50,000',
		'$50,000 - $100,000',
		'$100,000+',
		'Not sure yet'
	];

	const timelines = [
		'ASAP',
		'Within 1 month',
		'1-3 months',
		'3-6 months',
		'6+ months',
		'Flexible'
	];

	return (
		<>
			<SEO />
			{/* <Navigation /> */}
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
							Ready to transform your business? Let&apos;s start the conversation.
						</p>
					</header>

					<main>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
							{/* Contact Form */}
							<div className={`transition-all duration-700 delay-100 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<div className="bg-white rounded-3xl shadow-2xl p-8">
									<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
										Send us a Message
									</h2>
									
									{submitStatus === 'success' && (
										<div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
											Thank you for your message! We&apos;ll get back to you within 24 hours.
										</div>
									)}
									
									{submitStatus === 'error' && (
										<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
											There was an error sending your message. Please try again.
										</div>
									)}

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
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
												>
													<option value="">Select a service</option>
              {services.map((service, index) => (
														<option key={index} value={service}>{service}</option>
													))}
												</select>
											</div>

											<div>
												<label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
													Budget Range
												</label>
												<select
													id="budget"
													name="budget"
													value={formData.budget}
													onChange={handleInputChange}
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
												>
													<option value="">Select budget range</option>
              {budgetRanges.map((range, index) => (
														<option key={index} value={range}>{range}</option>
													))}
												</select>
											</div>
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
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
											>
												<option value="">Select timeline</option>
             {timelines.map((timeline, index) => (
													<option key={index} value={timeline}>{timeline}</option>
												))}
											</select>
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
												rows={5}
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
												placeholder="Tell us about your project requirements..."
											/>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
										>
											{isSubmitting ? (
												<span className="flex items-center justify-center">
													<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
														<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
														<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
													</svg>
													Sending Message...
												</span>
											) : (
												'Send Message'
											)}
										</button>
									</form>
								</div>
							</div>

							{/* Contact Information */}
							<div className={`transition-all duration-700 delay-200 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<div className="space-y-8">
									<div className="bg-white rounded-3xl shadow-2xl p-8">
										<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
											Get in Touch
										</h2>
										<div className="space-y-6">
            {contactInfo.map((info, index) => (
												<div key={index} className="flex items-start space-x-4">
													<div className="text-2xl">{info.icon}</div>
													<div>
														<h3 className="text-lg font-semibold text-gray-800 mb-1">
															{info.title}
														</h3>
														<p className="text-blue-600 font-medium mb-1">
															{info.value}
														</p>
														<p className="text-gray-600 text-sm">
															{info.description}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>

									<div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white">
										<h3 className="text-xl font-semibold mb-4">Why Choose Zion App?</h3>
										<ul className="space-y-3">
											<li className="flex items-center">
												<svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
												Expert team with 10+ years experience
											</li>
											<li className="flex items-center">
												<svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
												Cutting-edge technology solutions
											</li>
											<li className="flex items-center">
												<svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
												24/7 support and maintenance
											</li>
											<li className="flex items-center">
												<svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
												Proven track record of success
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
import React, { useState } from 'react';

interface FormData {
	name: string;
	email: string;
	company: string;
	phone: string;
	service: string;
	budget: string;
	timeline: string;
	message: string;
}

interface FormErrors {
	[name: string]: string;
}

export const EnhancedContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		company: '',
		phone: '',
		service: '',
		budget: '',
		timeline: '',
		message: ''
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

	const budgets = [
		'Under $10K',
		'$10K - $25K',
		'$25K - $50K',
		'$50K - $100K',
		'$100K - $250K',
		'$250K+'
	];

	const timelines = [
		'ASAP',
		'1-2 months',
		'3-6 months',
		'6-12 months',
		'12+ months',
		'Flexible'
	];

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.company.trim()) {
			newErrors.company = 'Company is required';
		}

		if (!formData.service) {
			newErrors.service = 'Please select a service';
		}

		if (!formData.budget) {
			newErrors.budget = 'Please select a budget range';
		}

		if (!formData.timeline) {
			newErrors.timeline = 'Please select a timeline';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Project details are required';
		} else if (formData.message.trim().length < 50) {
			newErrors.message = 'Please provide more details (at least 50 characters)';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 2000));
			
			// Reset form
			setFormData({
				name: '',
				email: '',
				company: '',
				phone: '',
				service: '',
				budget: '',
				timeline: '',
				message: ''
			});
			
			setSubmitStatus('success');
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	if (submitStatus === 'success') {
		return (
			<div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
				<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
					<svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h3 className="text-2xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
				<p className="text-green-600 mb-6 text-lg">
					Thank you for your interest in our services. We&apos;ll review your project details and get back to you within 24 hours with a detailed proposal.
				</p>
				<div className="bg-green-100 rounded-lg p-4 mb-6">
					<p className="text-green-800 font-medium">What happens next?</p>
					<ul className="text-green-700 text-sm mt-2 space-y-1">
						<li>• Our team will review your requirements</li>
						<li>• We&apos;ll prepare a customized proposal</li>
						<li>• Schedule a consultation call</li>
						<li>• Discuss project timeline and deliverables</li>
					</ul>
				</div>
				<button
					onClick={() => setSubmitStatus('idle')}
					className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
				>
					Send Another Message
				</button>
			</div>
		);
	}

	return (
		<div className="bg-white rounded-2xl shadow-xl p-8">
			<div className="mb-8">
				<h3 className="text-3xl font-bold text-gray-800 mb-3">Start Your Project</h3>
				<p className="text-gray-600 text-lg">
					Tell us about your project and we&apos;ll provide a detailed proposal tailored to your needs.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Personal Information */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
							Full Name *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
								errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
							}`}
							placeholder="John Doe"
						/>
						{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
							Email Address *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
								errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
							}`}
							placeholder="john@company.com"
						/>
						{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
							Company *
						</label>
						<input
							type="text"
							id="company"
							name="company"
							value={formData.company}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
								errors.company ? 'border-red-300 bg-red-50' : 'border-gray-300'
							}`}
							placeholder="Your Company"
						/>
						{errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
					</div>
					<div>
						<label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
							Phone Number
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
							placeholder="+1 (555) 123-4567"
						/>
					</div>
				</div>

				{/* Project Details */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div>
						<label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
							Service Interest *
						</label>
						<select
							id="service"
							name="service"
							value={formData.service}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
								errors.service ? 'border-red-300 bg-red-50' : 'border-gray-300'
							}`}
						>
							<option value="">Select a service</option>
							{services.map((service) => (
								<option key={service} value={service}>
									{service}
								</option>
							))}
						</select>
						{errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
					</div>
					<div>
						<label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
							Budget Range *
						</label>
						<select
							id="budget"
							name="budget"
							value={formData.budget}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
								errors.budget ? 'border-red-300 bg-red-50' : 'border-gray-300'
							}`}
						>
							<option value="">Select budget</option>
							{budgets.map((budget) => (
								<option key={budget} value={budget}>
									{budget}
								</option>
							))}
						</select>
						{errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
					</div>
					<div>
						<label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
							Timeline *
						</label>
						<select
							id="timeline"
							name="timeline"
							value={formData.timeline}
							onChange={handleInputChange}
							className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
								errors.timeline ? 'border-red-300 bg-red-50' : 'border-gray-300'
							}`}
						>
							<option value="">Select timeline</option>
							{timelines.map((timeline) => (
								<option key={timeline} value={timeline}>
									{timeline}
								</option>
							))}
						</select>
						{errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
					</div>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
						Project Details *
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						rows={6}
						className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
							errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
						}`}
						placeholder="Please describe your project requirements, goals, and any specific features or technologies you have in mind..."
					/>
					<div className="flex justify-between items-center mt-1">
						{errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
						<p className="text-gray-500 text-sm ml-auto">
							{formData.message.length}/500 characters
						</p>
					</div>
				</div>

				{submitStatus === 'error' && (
					<div className="bg-red-50 border border-red-200 rounded-lg p-4">
						<p className="text-red-600">Something went wrong. Please try again.</p>
					</div>
				)}

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
				>
					{isSubmitting ? (
						<>
							<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Sending Message...
						</>
					) : (
						<>
							Send Project Proposal Request
							<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</>
					)}
				</button>
			</form>
		</div>
	);
};
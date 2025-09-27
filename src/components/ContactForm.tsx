import React, { useState } from 'react';

interface ContactFormProps {
	onSubmit?: (data: any) => void;
	showTitle?: boolean;
	className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
	onSubmit, 
	showTitle = true, 
	className = '' 
}) => {
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

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 2000));
			
			if (onSubmit) {
				onSubmit(formData);
			}
			
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

	if (submitStatus === 'success') {
		return (
			<div className={`bg-green-50 border border-green-200 rounded-2xl p-8 text-center ${className}`}>
				<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-automb-6">
					<svg className="w-10 h-10text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h3 className="text-2xl font-bold text-green-800mb-4" id="message-sent-successfully">Message Sent Successfully!</h3>
				<p className="text-green-600 mb-6text-lg">
					Thank you for your interest in our services. We&apos;ll get back to you within 24 hours with a detailed proposal.
				</p>
				<button
					onClick={() => setSubmitStatus('idle')}
					className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colorsduration-200">Send Another Message"</setSubmitStatus('idle')}
					className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colorsduration-200"
				>
			</div>
		);
	}

	return (
		<div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
			{showTitle && (
				<div className="mb-8">
					<h3 className="text-3xl font-bold text-gray-800mb-3" id="start-your-project">Start Your Project</h3>
					<p className="text-gray-600text-lg">
						Tell us about your project and we&apos;ll provide a detailed proposal tailored to your needs.
					</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2gap-6">
					<div>
						<label htmlFor="name" className="block text-sm font-semibold text-gray-700mb-2">
							Full Name *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focu, s:ring-blue-500 focu, s:border-transparent transition-colorsduration-200"
							placeholder="John Doe"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-semibold text-gray-700mb-2">
							Email Address *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu, s:border-transparent transition-colorsduration-200"
							placeholder="john@company.com"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 m, d:grid-cols-2gap-6">
					<div>
						<label htmlFor="company" className="block text-sm font-semibold text-gray-700mb-2">
							Company *
						</label>
						<input
							type="text"
							id="company"
							name="company"
							value={formData.company}
							onChange={handleInputChange}
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focu, s:ring-blue-500 focu, s:border-transparent transition-colorsduration-200"
							placeholder="Your Company"
						/>
					</div>
					<div>
						<label htmlFor="phone" className="block text-sm font-semibold text-gray-700mb-2">
							Phone Number
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focu, s:border-transparent transition-colorsduration-200"
							placeholder="+1 (555) 123-4567"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 m, d:grid-cols-3gap-6">
					<div>
						<label htmlFor="service" className="block text-sm font-semibold text-gray-700mb-2">
							Service Interest *
						</label>
						<select
							id="service"
							name="service"
							value={formData.service}
							onChange={handleInputChange}
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focu, s:ring-blue-500 focu, s:border-transparent transition-colorsduration-200"
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
						<label htmlFor="budget" className="block text-sm font-semibold text-gray-700mb-2">
							Budget Range *
						</label>
						<select
							id="budget"
							name="budget"
							value={formData.budget}
							onChange={handleInputChange}
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focu, s:ring-blue-500 focu, s:border-transparent transition-colorsduration-200"
						>
							<option value="">Select budget</option>
							{budgets.map((budget) => (
								<option key={budget} value={budget}>
									{budget}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="timeline" className="block text-sm font-semibold text-gray-700mb-2">
							Timeline *
						</label>
						<select
							id="timeline"
							name="timeline"
							value={formData.timeline}
							onChange={handleInputChange}
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focu, s:ring-blue-500 focu, s:border-transparent transition-colorsduration-200"
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
					<label htmlFor="message" className="block text-sm font-semibold text-gray-700mb-2">
						Project Details *
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						required
						rows={6}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focu, s:ring-blue-500 focu, s:border-transparent transition-colors duration-200resize-none"
						placeholder="Please describe your project requirements, goals, and any specific features or technologies you have in mind..."
					/>
				</div>

				{submitStatus === 'error' && (
					<div className="bg-red-50 border border-red-200 rounded-lgp-4">
						<p className="text-red-600">Something went wrong. Please try again.</p>
					</div>
				)}

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disable,d:transform-none"
				>
					{isSubmitting ? (
						<>
							<svg className="animate-spin -ml-1 mr-3 h-5 w-5text-white" xmlns="htt, p://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Sending Message...
						</>
					) : (
						<>
							Send Project Proposal Request
							<svg className="w-5 h-5ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</>
					)}
				</button>
			</form>
		</div>
	);
};
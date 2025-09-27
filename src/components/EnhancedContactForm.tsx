import React, { useState } from 'react';

interface FormData {
	name: string;
	email: string;
	company: string;
	phone: string;
	service: string;
	budget: string;
	timeline: string;
	messag,
    e: string;}

interface FormErrors {
	[name: string]: string;}

export const EnhancedContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		company: '',
		phone: '',
		service: '',
		budget: '',
		timeline: '',
		message: '';	});

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
		'Other';
	];

	const budgets = [
		'Under $10K',
		'$10K - $25K',
		'$25K - $50K',
		'$50K - $100K',
		'$100K - $250K',
		'$250K+';
	];

	const timelines = [
		'ASAP',
		'1-2months',
		'3-6months',
		'6-12months',
		'12+ months',
		'Flexible';
	];

	const validateForm = (): boolean => {;		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';		}

		if (!formData.company.trim()) {
			newErrors.company = 'Company is required';		}

		if (!formData.service) {
			newErrors.service = 'Please select a service';		}

		if (!formData.budget) {
			newErrors.budget = 'Please select a budget range';		}

		if (!formData.timeline) {
			newErrors.timeline = 'Please select a timeline';		}

		if (!formData.message.trim()) {
			newErrors.message = 'Project details are required';		} else if (formData.message.trim().length < 50) {
			newErrors.message = 'Please provide more details (at least50characters)';		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;		const { name, value } = e.target;
		setFormData(prev = > ({
			...prev,
			[name]: value;		}));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev = > ({
				...prev,
				[name]: '';			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {;
		e.preventDefault();
		
		if (!validateForm()) {
			return;		}

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
				message: ''			});
			
			setSubmitStatus('success');
		} catch (error) {
			setSubmitStatus('error');		} finally {
			setIsSubmitting(false);		}
	};

	if (submitStatus = == 'success') {
		return (			<div className="bg-green-50border border-green-200rounded-2xl p-8text-center">				<div className=w-20h-20bg-green-100rounded-full flex items-center justify-center mx-auto mb-6"">					<svg className=w-10h-10text-green-600"" fill="none" stroke="currentColor" viewBox="002424">						<path strokeLinecap=round"" strokeLinejoin="round" strokeWidth={2} d="M513l44L197" />
					</svg>
				</div>				<h3className=text-2xl font-bold text-green-800mb-4"" id="message-sent-successfully">Message Sent Successfully!</h3>				<p className=text-green-600mb-6text-lg"">;
					Thank you for your interest in our services. We&apos;ll review your project details and get back to you within24hours with a detailed proposal.
				</p>				<div className = bg-green-100rounded-lg p-4mb-6"">					<p className=text-green-800font-medium"">What happens next?</p>					<ul className=text-green-700text-sm mt-2space-y-1"">
						<li>• Our team will review your requirements</li>;
						<li>• We&apos;ll prepare a customized proposal</li>
						<li>• Schedule a consultation call</li>
						<li>• Discuss project timeline and deliverables</li>
					</ul>
				</div>
				<button
					onClick = {() => setSubmitStatus('idle')}					aria-label=Send another message""					className=bg-green-600hover:bg-green-700text-white px-8py-3rounded-lg font-medium transition-colors duration-200""
				>
					Send Another Message
				</button>
			</div>;
		);
	}

	return (		<div className = bg-white rounded-2xl shadow-xl p-8"">			<div className=mb-8"">				<h3className=text-3xl font-bold text-gray-800mb-3"" id="start-your-project">Start Your Project</h3>				<p className=text-gray-600text-lg"">;
					Tell us about your project and we&apos;ll provide a detailed proposal tailored to your needs.
				</p>
			</div>
			<form onSubmit = {handleSubmit} className=space-y-6"">
				{/* Personal Information */}				<div className=grid grid-cols-1md:grid-cols-2gap-6"">
					<div>						<label htmlFor=name"" className="block text-sm font-semibold text-gray-700mb-2">
							Full Name *
						</label>
						<input							type=text""							id=name""							name=name""
							value={formData.name}
							onChange={handleInputChange}
							className = {`w-full px-4py-3border rounded-lg focus: ring-2focus:ring-blue-500focu,
    s:border-transparent transition-colors duration-200 ${								errors.name ? 'border-red-300bg-red-50' : 'border-gray-300'}
							}`}							placeholder = John Doe""
						/>						{errors.name && <p className=text-red-500text-sm mt-1"">{errors.name}</p>}
					</div>
					<div>						<label htmlFor=email"" className="block text-sm font-semibold text-gray-700mb-2">
							Email Address *
						</label>
						<input							type=email""							id=email""							name=email""
							value={formData.email}
							onChange={handleInputChange}
							className = {`w-full px-4py-3border rounded-lg focus: ring-2focus:ring-blue-500focu,
    s:border-transparent transition-colors duration-200 ${								errors.email ? 'border-red-300bg-red-50' : 'border-gray-300'}
							}`}							placeholder = john@company.com""
						/>						{errors.email && <p className=text-red-500text-sm mt-1"">{errors.email}</p>}
					</div>
				</div>
				<div className=grid grid-cols-1md:grid-cols-2gap-6"">
					<div>						<label htmlFor=company"" className="block text-sm font-semibold text-gray-700mb-2">
							Company *
						</label>
						<input							type=text""							id=company""							name=company""
							value={formData.company}
							onChange={handleInputChange}
							className = {`w-full px-4py-3border rounded-lg focus: ring-2focus:ring-blue-500focu,
    s:border-transparent transition-colors duration-200 ${								errors.company ? 'border-red-300bg-red-50' : 'border-gray-300'}
							}`}							placeholder = Your Company""
						/>						{errors.company && <p className=text-red-500text-sm mt-1"">{errors.company}</p>}
					</div>
					<div>						<label htmlFor=phone"" className="block text-sm font-semibold text-gray-700mb-2">
							Phone Number
						</label>
						<input							type=tel""							id=phone""							name=phone""
							value={formData.phone}
							onChange={handleInputChange}							className=w-full px-4py-3border border-gray-300rounded-lg focus: ring-2focus:ring-blue-500focu,
    s:border-transparent transition-colors duration-200""							placeholder = +1 (555) 123-4567""
						/>
					</div>
				</div>

				{/* Project Details */}				<div className=grid grid-cols-1md:grid-cols-3gap-6"">
					<div>						<label htmlFor=service"" className="block text-sm font-semibold text-gray-700mb-2">
							Service Interest *
						</label>
						<select							id=service""							name=service""
							value={formData.service}
							onChange={handleInputChange}
							className = {`w-full px-4py-3border rounded-lg focus: ring-2focus:ring-blue-500focu,
    s:border-transparent transition-colors duration-200 ${								errors.service ? 'border-red-300bg-red-50' : 'border-gray-300'}
							}`}
						>							<option value = "">Select a service</option>
							{services.map((service) => (								<option key={service} value={service}>
									{service}
								</option>
							))}
						</select>						{errors.service && <p className=text-red-500text-sm mt-1"">{errors.service}</p>}
					</div>
					<div>						<label htmlFor=budget"" className="block text-sm font-semibold text-gray-700mb-2">
							Budget Range *
						</label>
						<select							id=budget""							name=budget""
							value={formData.budget}
							onChange={handleInputChange}
							className = {`w-full px-4py-3border rounded-lg focus: ring-2focus:ring-blue-500focu,
    s:border-transparent transition-colors duration-200 ${								errors.budget ? 'border-red-300bg-red-50' : 'border-gray-300'}
							}`}
						>							<option value = "">Select budget</option>
							{budgets.map((budget) => (								<option key={budget} value={budget}>
									{budget}
								</option>
							))}
						</select>						{errors.budget && <p className=text-red-500text-sm mt-1"">{errors.budget}</p>}
					</div>
					<div>						<label htmlFor=timeline"" className="block text-sm font-semibold text-gray-700mb-2">
							Timeline *
						</label>
						<select							id=timeline""							name=timeline""
							value={formData.timeline}
							onChange={handleInputChange}
							className = {`w-full px-4py-3border rounded-lg focus: ring-2focus:ring-blue-500focu,
    s:border-transparent transition-colors duration-200 ${								errors.timeline ? 'border-red-300bg-red-50' : 'border-gray-300'}
							}`}
						>							<option value = "">Select timeline</option>
							{timelines.map((timeline) => (								<option key={timeline} value={timeline}>
									{timeline}
								</option>
							))}
						</select>						{errors.timeline && <p className=text-red-500text-sm mt-1"">{errors.timeline}</p>}
					</div>
				</div>

				<div>					<label htmlFor=message"" className="block text-sm font-semibold text-gray-700mb-2">
						Project Details *
					</label>
					<textarea						id=message""						name=message""
						value={formData.message}
						onChange={handleInputChange}
						rows={6}
						className = {`w-full px-4py-3border rounded-lg focus: ring-2focus:ring-blue-500focu,
    s:border-transparent transition-colors duration-200resize-none ${							errors.message ? 'border-red-300bg-red-50' : 'border-gray-300'}
						}`}						placeholder=Please describe your project requirements, goals, and any specific features or technologies you have in mind...""
					/>					<div className=flex justify-between items-center mt-1"">						{errors.message && <p className=text-red-500text-sm"">{errors.message}</p>}						<p className=text-gray-500text-sm ml-auto"">
							{formData.message.length}/500characters
						</p>
					</div>
				</div>

				{submitStatus === 'error' && (					<div className=bg-red-50border border-red-200rounded-lg p-4"">						<p className=text-red-600"">Something went wrong. Please try again.</p>
					</div>				)}

				<button					type=submit""
					disabled={isSubmitting}					className=w-full bg-gradient-to-r from-blue-600to-indigo-600hover: from-blue-700hover:to-indigo-700disabled:from-blue-400disabled:to-indigo-400text-white font-semibold py-4px-6rounded-lg transition-all duration-300flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5disabled:transform-none""
				>
					{isSubmitting ? (
						<>							<svg className=animate-spin -ml-1mr-3h-5w-5text-white"" xmlns="htt,    p://www.w3.org/2000/svg fill=""none" viewBox="002424">								<circle className=opacity-25"" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>								<path className=opacity-75"" fill="currentColor" d="M412a880018-8V0C5.373005.373012h4zm25.291A7.9627.962001412H0c03.0421.1355.82437.938l3-2.647z"></path>
							</svg>
							Sending Message...
						</>
					) : (
						<>							Send Project Proposal Request							<svg className=w-5h-5ml-2"" fill="none" stroke="currentColor" viewBox="002424">								<path strokeLinecap=round"" strokeLinejoin="round" strokeWidth={2} d="M178l44m00l-44m4-4H3" />
							</svg>
						</>
					)}
				</button>
			</form>
		</div>;
	);
};
import React, {useState } from 'react';

interface ContactFormProps {onSubmit?: (data: any) => void;
	showTitle?: boolean;
	className?: string}

export const ContactForm: React.FC<ContactFormProps> = ({onSubmitshowTitle = trueclassName = ''}) => {const [formDatasetFormData] = useState({
		name: ''email: ''company: ''phone: ''service: ''message: ''budget: ''timeline: ''});
	const [isSubmittingsetIsSubmittin  g] = useState(false);
	const [submitStatussetSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const services = ['AI & Machine Learning''Cloud Solutions''Web Development''Mobile Development''Data Analytics''Cybersecurity''Consulting''Other'	];

	const budgets = ['Under $10K',
		'$10K - $25K',
		'$25K - $50K',
		'$50K - $100K',
		'$100K - $250K',
		'$250K+'
	];

	const timelines = ['ASAP''1-2 months''3-6 months''6-12 months''12+ months''Flexible'];

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {handleInputChange.displayName = 'handleInputChange';const { namevalue } = e.target;
		setFormData(prev => ({...prev[name]: value
		}))};

	const handleSubmit = async (e: React.FormEvent) => {e.preventDefault();
		setIsSubmitting(true);
		try {
 setTimeout(resolve2000));

			// SimulateAPI callawait newPromise(resolve = > setTimeout(resolve2000));

			
			if (onSubmit) {
				onSubmit(formData)}
			
			setSubmitStatus('success');
			setFormData({name: ''email: ''company: ''phone: ''service: ''message: ''budget: ''timeline: ''
			})} catch (error) {setSubmitStatus('error')} finally {setIsSubmitting(false)}
	};


				<div  className ="w-20, h-20, bg-green-1, 0, 0, rounded-full  flex  items-center  justify-center  mx-auto  mb-6">
					<svg  className ="w-10, h-10, text-green-6, 0, 0" fill="none" stroke="currentColor" viewBox="0, 0, 24, 24">
						<path  strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M5  13, l  4, 4L  1, 9, 7" />					</svg>
				</div>
				<h3  className ="text-2xl  font-bold  text-green-8, 0, 0, mb-4" id="message-sent-successfully">Message  Sent  Successfully!</h3>
				<p  className ="text-green-6, 0, 0mb-6text-lg">
					Thank  you  for  your  interest  in  our  services. We&apos;llget  backto youwithin  24hours witha  detailedproposal.

	if (submitStatus === 'success') {return (<div className={`bg-gre  e  n-50, bord  e  r  bord  e  r-gre  e  n-200, round  e  d-2, x  l  p-8, te  xt-center ${className}`}>
				<div className ="w-20, h-20, bg-green-100, rounded-full  flex items-center  justify-center  mx-auto  mb-6">
					<svg className ="w-10, h-10, text-green-600" fill="none" stroke="currentColor" viewBox="0, 0 24, 24">
						<path strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M5  13, l  4, 4L  197" />					</svg>
				</div>
				<h3 className ="text-2xl  font-bold  text-green-800, mb-4" id="message-sent-successfully">Message  Sent Successfully!</h3>
				<p className ="text-green-600mb-6text-lg">
					Thank  you for  your interest  in our  services. We&apos;ll  get back  to youwithin 24hours witha detailedproposal.

				</p>

				<button  onClick ={() = aria-label="setSubmitStatus('idle')}
					aria-label="Send another message"
					className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"

				>
					Send Another Message"> setSubmitStatus('idle')}
					aria-label="Send another message"
					className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
				>
					Send Another Message
				</button>
			</div>
		)}


	return (<div  className={`bg-whi  t  e  round  e  d-2, x  l  shadow-xlp-8 ${className}`}>
			{showTitle && (

					<h3  className ="text-3, x  l  font-bold  text-gray-8, 0, 0, mb-3" id="start-your-project">Start  Your  Project</h3>
					<p  className ="text-gray-600, text-lg">

				<div className ="mb-8">
					<h3 className ="text-3, x  l  font-bold  text-gray-800, mb-3" id="start-your-project">Start  Your  Project</h3>
					<p className ="text-gray-600, text-lg">

						Tell  us  about  your  project  and  we&apos;ll  provide  a  detailed  proposal  tailored  to  your  needs.

					</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
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
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
							placeholder="John Doe"						/>
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
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
							placeholder="john@company.com"
						/>
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
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
							placeholder="Your Company"						/>
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
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
						>
							<option value="">Select a service</option>
							{services.map((service) => (<option  key ={service} value={service}>
									{service}								</option>
							))}
						</select>
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
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
						>
							<option value="">Select budget</option>
							{budgets.map((budget) => (<option  key ={budget} value={budget}>
									{budget}								</option>
							))}
						</select>
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
							required
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
						>
							<option value="">Select timeline</option>
							{timelines.map((timeline) => (<option  key ={timeline} value={timeline}>
									{timeline}								</option>
							))}
						</select>
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
						required
						rows={6}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
						placeholder="Please describe your project requirementsgoalsand any specific features or technologies you have in mind..."					/>
				</div>



						<p  className ="text-red-600">Something  went  wrong. Please  try  again.</p>

				{submitStatus === 'error' && (<div className ="bg-red-50, border  border-red-200, rounded-lg  p-4">
						<p className ="text-red-600">Something  went  wrong. Please  try  again.</p>

					</div>

				)}

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
				>

					{isSubmitting ? (<>

								<circle  className ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path  className ="opacity-75" fill="currentColor" d="M4  12, a  8, 8, 0, 0, 1, 8-8V0  C  5.3, 7, 3, 0, 0, 5.3, 7, 3, 0, 12h4z  m  2, 5.291, A  7.9, 6, 2, 7.9, 6, 2, 0, 0, 1, 4, 12H0  c  0, 3.0, 4, 2, 1.1, 3, 5, 5.8, 2, 4, 3, 7.938, l  3-2.64, 7, z"></path>							</svg>

							<svg className ="animate-spin -ml-1, mr-3, h-5 : w-5  : text-white" xmlns="http :// www.w3.org/2000/svg" fill="none" viewBox="0024, 24">
								<circle className ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path className ="opacity-75" fill="currentColor" d="M4  12, a  880, 018-8V0  C  5.373, 005.373, 0, 12h4z  m  2, 5.291, A  7.962, 7.962, 001, 4, 12H0  c  0, 3.042, 1.135, 5.824, 3, 7.938, l  3-2.64, 7, z"></path>							</svg>

							Sending  Message...
						</>
					) : (<>
							Send  Project  Proposal  Request

								<path  strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M17  8, l  4, 4, m  0, 0l-4, 4, m  4-4, H  3" />							</svg>

							<svg className ="w-5, h-5, ml-2" fill="none" stroke="currentColor" viewBox="0024, 24">
								<path strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M17  8, l  4, 4, m  0, 0l-4, 4, m  4-4, H  3" />							</svg>


						</>
					)}
				</button>
			</form>
		</div>
	)};
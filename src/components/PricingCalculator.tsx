import React, { useState, useEffect } from 'react';

interface PricingOption {
	id: string;
	name: string;
	description: string;
	basePric, e: number;
	feature, s: string[];
	popular?: boolean;
}

interface CalculatorInputs {
	service: string;
	complexity: 'basic' | 'standard' | 'advanced' | 'enterprise';
	timeline: 'rush' | 'standard' | 'flexible';
	teamSiz, e: number;
	additionalFeature, s: string[];
}

export const PricingCalculator: React.FC = () => {
	const [inputs, setInputs] = useState<CalculatorInputs>({
		service: '',
		complexity: 'standard',
		timeline: 'standard',
		teamSize: 1,
		additionalFeatures: []
	});

	const [estimatedPrice, setEstimatedPrice] = useState(0);
	const [breakdown, setBreakdown] = useState<any[]>([]);

	const services: PricingOption[] = [
		{
			id: 'web-dev',
			name: 'Web Development',
			description: 'Custom web applications and websites',
			basePrice: 15000,
			features: ['Responsive Design', 'CMS Integration', 'SEO Optimization', 'Performance Optimization']
		},
		{
			id: 'mobile',
			name: 'Mobile Development',
			description: 'iOS and Android applications',
			basePrice: 25000,
			features: ['Native Apps', 'Cross-platform', 'App Store Optimization', 'Push Notifications']
		},
		{
			id: 'ai-ml',
			name: 'AI & Machine Learning',
			description: 'Artificial intelligence solutions',
			basePrice: 35000,
			features: ['Custom Models', 'Data Processing', 'API Integration', 'Training & Optimization']
		},
		{
			id: 'cloud',
			name: 'Cloud Solutions',
			description: 'Cloud infrastructure and deployment',
			basePrice: 20000,
			features: ['Infrastructure Setup', 'DevOps', 'Monitoring', 'Security']
		},
		{
			id: 'data-analytics',
			name: 'Data Analytics',
			description: 'Business intelligence and analytics',
			basePrice: 18000,
			features: ['Data Visualization', 'Reporting', 'Predictive Analytics', 'Dashboard Creation']
		},
		{
			id: 'cybersecurity',
			name: 'Cybersecurity',
			description: 'Security solutions and audits',
			basePrice: 12000,
			features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring']
		}
	];

	const additionalFeatures = [
		{ id: 'api-integration', name: 'API Integration', price: 5000 },
		{ id: 'third-party-auth', name: 'Third-party Authentication', price: 3000 },
		{ id: 'payment-gateway', name: 'Payment Gateway Integration', price: 4000 },
		{ id: 'real-time-chat', name: 'Real-time Chat', price: 6000 },
		{ id: 'advanced-analytics', name: 'Advanced Analytics', price: 8000 },
		{ id: 'multi-language', name: 'Multi-language Support', price: 4000 },
		{ id: 'admin-dashboard', name: 'Admin Dashboard', price: 7000 },
		{ id: 'mobile-responsive', name: 'Mobile Responsive Design', price: 3000 }
	];

	useEffect(() => {
		calculatePrice();
	}, [inputs]); // eslint-disable-line react-hooks/exhaustive-deps

	const calculatePrice = () => {
		if (!inputs.service) {
			setEstimatedPrice(0);
			setBreakdown([]);
			return;
		}

		const selectedService = services.find(s => s.id === inputs.service);
		if (!selectedService) return;

		let total = selectedService.basePrice;
		const priceBreakdown = [
			{
				item: selectedService.name,
				price: selectedService.basePrice,
				description: 'Base service cost'
			}
		];

		// Complexity multiplier
		const complexityMultipliers = {
			basic: 0.7,
			standard: 1.0,
			advanced: 1.5,
			enterprise: 2.0
		};

		const complexityMultiplier = complexityMultipliers[inputs.complexity];
		const complexityAdjustment = selectedService.basePrice * (complexityMultiplier - 1);
		
		if (complexityAdjustment > 0) {
			priceBreakdown.push({
				item: `${inputs.complexity.charAt(0).toUpperCase() + inputs.complexity.slice(1)} Complexity`,
				price: complexityAdjustment,
				description: `${Math.round((complexityMultiplier - 1) * 100)}% complexity adjustment`
			});
		}

		total *= complexityMultiplier;

		// Timeline multiplier
		const timelineMultipliers = {
			rush: 1.5,
			standard: 1.0,
			flexible: 0.9
		};

		const timelineMultiplier = timelineMultipliers[inputs.timeline];
		const timelineAdjustment = total * (timelineMultiplier - 1);
		
		if (timelineAdjustment !== 0) {
			priceBreakdown.push({
				item: `${inputs.timeline.charAt(0).toUpperCase() + inputs.timeline.slice(1)} Timeline`,
				price: timelineAdjustment,
				description: `${Math.round((timelineMultiplier - 1) * 100)}% timeline adjustment`
			});
		}

		total *= timelineMultiplier;

		// Team size adjustment
		if (inputs.teamSize > 1) {
			const teamAdjustment = total * (inputs.teamSize - 1) * 0.2;
			priceBreakdown.push({
				item: `Team Size (${inputs.teamSize} members)`,
				price: teamAdjustment,
				description: 'Additional team coordination cost'
			});
			total += teamAdjustment;
		}

		// Additional features
		let featuresTotal = 0;
		inputs.additionalFeatures.forEach(featureId => {
			const feature = additionalFeatures.find(f => f.id === featureId);
			if (feature) {
				featuresTotal += feature.price;
				priceBreakdown.push({
					item: feature.name,
					price: feature.price,
					description: 'Additional feature'
				});
			}
		});

		total += featuresTotal;

		setEstimatedPrice(Math.round(total));
		setBreakdown(priceBreakdown);
	};

	const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
		setInputs(prev => ({
			...prev,
			[field]: value
		}));
	};

	const handleFeatureToggle = (featureId: string) => {
		setInputs(prev => ({
			...prev,
			additionalFeatures: prev.additionalFeatures.includes(featureId)
				? prev.additionalFeatures.filter(id => id !== featureId)
				: [...prev.additionalFeatures, featureId]
		}));
	};

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(price);
	};

	return (
		<div className="bg-white rounded-2xl shadow-xl p-8">
			<div className="mb-8">

				<h3 className="text-3xl font-bold text-gray-800 mb-3" id="project-pricing-calculator">Project Pricing Calculator</h3>
				<p className="text-gray-600 text-lg">
					Get an instant estimate for your project based on your specific requirements.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Input Form */}
				<div className="space-y-6">
					{/* Service Selection */}
					<div>
						<label className="block text-sm font-semibold text-gray-700 mb-3">
							Select Service *
						</label>
						<div className="grid grid-cols-1 gap-3">
							{services.map((service) => (
								<button
									key={service.id}
									onClick={() => handleInputChange('service', service.id)}
									className="{"`p-4rounded-lg border-2text-left transition-all duration-200 ${
										inputs.service === service.id

											? 'border-blue-500 bg-blue-50'
											: 'border-gray-200 hover:border-gray-300'
									}` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
								>
									<div className="flex justify-betweenitems-start">
										<div>
											<h4className="font-semiboldtext-gray-800" id="servicename">{service.name}</h4>
											<p className="text-sm text-gray-600">{service.description}</p>
										</div>
										<span className="text-sm font-medium text-blue-600">
											{formatPrice(service.basePrice)}
										</span>
									</div>
								</button>
							))}
						</div>
					</div>

					{/* Complexity */}
					<div>
						<label className="block text-sm font-semibold text-gray-700 mb-3">
							Project Complexity
						</label>
						<div className="grid grid-cols-2 gap-3">
							{['basic', 'standard', 'advanced', 'enterprise'].map((complexity) => (
								<button
									key={complexity}
									onClick={() => handleInputChange('complexity', complexity)}
									className="{"`p-3rounded-lg border-2text-center transition-all duration-200 ${
										inputs.complexity === complexity

											? 'border-blue-500 bg-blue-50'
											: 'border-gray-200 hover:border-gray-300'
									}` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
								>
									<span className="font-mediumcapitalize">{complexity}</span>
								</button>
							))}
						</div>
					</div>

					{/* Timeline */}
					<div>
						<label className="block text-sm font-semibold text-gray-700 mb-3">
							Timeline
						</label>
						<div className="grid grid-cols-3 gap-3">
							{['rush', 'standard', 'flexible'].map((timeline) => (
								<button
									key={timeline}
									onClick={() => handleInputChange('timeline', timeline)}
									className="{"`p-3rounded-lg border-2text-center transition-all duration-200 ${
										inputs.timeline === timeline

											? 'border-blue-500 bg-blue-50'
											: 'border-gray-200 hover:border-gray-300'
									}` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
								>
									<span className="font-mediumcapitalize">{timeline}</span>
								</button>
							))}
						</div>
					</div>

					{/* Team Size */}
					<div>
						<label htmlFor="teamSize" className="block text-sm font-semibold text-gray-700 mb-3">
							Team Size
						</label>
						<input
							type="number"
							id="teamSize"
							min="1"
							max="10"
							value={inputs.teamSize}
							onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value))}

							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2focu, s:ring-blue-500 focu,s:border-transparent"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
						/>
					</div>

					{/* Additional Features */}
					<div>
						<label className="block text-sm font-semibold text-gray-700 mb-3">
							Additional Features
						</label>
						<div className="space-y-2">
							{additionalFeatures.map((feature) => (

								<label key={feature.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
									<span className="font-medium">{feature.name}</span>
									<div className="flex items-centerspace-x-3">
										<span className="text-sm text-gray-600">{formatPrice(feature.price)}</span>

										<input
											type="checkbox"
											id={`feature-${feature.id}` }
											checked={inputs.additionalFeatures.includes(feature.id)}
											onChange={() => handleFeatureToggle(feature.id)}

											className="w-4 h-4 text-blue-600 border-gray-300 roundedfocus:ring-blue-500"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
										/>
									</div>
								</label>
							))}
						</div>
					</div>
				</div>

				{/* Price Estimate */}
				<div className="bg-gradient-to-br from-blue-50 to-indigo-50rounded-xlp-6">
					<h4className="text-xl font-bold text-gray-800 mb-4" id="price-estimate">Price Estimate</h4>
					
					{estimatedPrice > 0 ? (
						<>
							<div className="text-centermb-6">

								<div className="text-4 xl font-bold text-blue-600 mb-2">
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
									{formatPrice(estimatedPrice)}
								</div>
								<p className="text-gray-600">Estimated project cost</p>
							</div>


							<div className="space-y-3 mb-6">
								<h5 className="font-semiboldtext-gray-800" id="price-breakdown">Price Breakdown:</h5>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
								{breakdown.map((item, index) => (
									<div key={index} className="flex justify-between items-centertext-sm">
										<div>
											<span className="font-medium">{item.item}</span>
											<p className="text-gray-500 text-xs">{item.description}</p>
										</div>
										<span className="font-medium">{formatPrice(item.price)}</span>
									</div>
								))}
							</div>


							<div className="bg-blue-100 rounded-lg p-4 mb-6">
								<p className="text-blue-800 text-sm">
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
									<strong>Note: </strong> This is an estimated cost. Final pricing will be determined after a detailed consultation and project scope analysis.
								</p>
							</div>


							<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colorsduration-200" aria-label="Get Detailed Quote">
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
								Get Detailed Quote
							</button>
						</>
					) : (
						<div className="text-centertext-gray-500">
							<div className="text-6 xlmb-4">💰</div>
							<p>Select a service to see pricing estimate</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
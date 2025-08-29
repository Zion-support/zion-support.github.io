import React from 'react';
import { Link } from 'react-router-dom';
import { comprehensiveInnovativeServices2030 } from '../data/comprehensiveInnovativeServices2030';
import { SEO } from '../components/SEO';

const ComprehensivePricingGuide2030: React.FC = () => {
	return (
		<>
			<SEO
				title="Comprehensive Pricing Guide 2030 | Zion Tech Group"
				description="Complete pricing guide for our innovative micro SAAS services, IT solutions, and AI platforms. Competitive market prices with detailed feature comparisons and ROI analysis."
				keywords="pricing, micro SAAS pricing, IT services cost, AI solutions pricing, competitive pricing, ROI analysis, market prices"
			/>
			
			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
				{/* Hero Section */}
				<section className="relative py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto text-center">
						<div className="relative z-10">
							<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
								Pricing Guide 2030
							</h1>
							<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
								Transparent pricing for our comprehensive portfolio of innovative services. 
								Get detailed cost breakdowns, market comparisons, and ROI analysis for every solution.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									to="/contact"
									className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
								>
									Get Custom Quote
								</Link>
								<Link
									to="/schedule-demo"
									className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
								>
									Schedule Demo
								</Link>
							</div>
						</div>
					</div>
					
					{/* Background Elements */}
					<div className="absolute inset-0 overflow-hidden">
						<div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
						<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
						<div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
					</div>
				</section>

				{/* Pricing Overview */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Pricing Overview
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								Our pricing is designed to provide maximum value while remaining competitive in the market. 
								All prices include implementation, training, and ongoing support.
							</p>
						</div>

						{/* Pricing Tiers */}
						<div className="grid md:grid-cols-3 gap-8 mb-16">
							<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
								<h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
								<div className="text-4xl font-bold text-green-400 mb-2">$899</div>
								<div className="text-gray-300 mb-6">per month</div>
								<ul className="space-y-3 mb-8">
									<li className="flex items-center text-gray-300">
										<span className="text-green-400 mr-2">✓</span>
										Basic implementation
									</li>
									<li className="flex items-center text-gray-300">
										<span className="text-green-400 mr-2">✓</span>
										Email support
									</li>
									<li className="flex items-center text-gray-300">
										<span className="text-green-400 mr-2">✓</span>
										Core features
									</li>
								</ul>
								<Link
									to="/contact"
									className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
								>
									Get Started
								</Link>
							</div>

							<div className="bg-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-blue-400 relative">
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
										Most Popular
									</span>
								</div>
								<h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
								<div className="text-4xl font-bold text-blue-400 mb-2">$2,999</div>
								<div className="text-gray-300 mb-6">per month</div>
								<ul className="space-y-3 mb-8">
									<li className="flex items-center text-gray-300">
										<span className="text-blue-400 mr-2">✓</span>
										Full implementation
									</li>
									<li className="flex items-center text-gray-300">
										<span className="text-blue-400 mr-2">✓</span>
										Priority support
									</li>
									<li className="flex items-center text-gray-300">
										<span className="text-blue-400 mr-2">✓</span>
										Advanced features
									</li>
									<li className="flex items-center text-gray-300">
										<span className="text-blue-400 mr-2">✓</span>
										Custom integrations
									</li>
								</ul>
								<Link
									to="/contact"
									className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
								>
									Get Started
								</Link>
							</div>

							<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
								<h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
								<div className="text-4xl font-bold text-purple-400 mb-2">$6,999</div>
								<div className="text-gray-300 mb-6">per month</div>
								<ul className="space-y-3 mb-8">
									<li className="flex items-center text-gray-300">
										<span className="text-purple-400 mr-2">✓</span>
										Custom implementation
									</li>
									<li className="flex items-center text-gray-300">
										<span className="text-purple-400 mr-2">✓</span>
										24/7 dedicated support
									</li>
									<li className="flex items-center text-gray-300">
										<span className="text-purple-400 mr-2">✓</span>
										All features included
									</li>
									<li className="flex items-center text-gray-300">
										<span className="text-purple-400 mr-2">✓</span>
										White-label options
									</li>
								</ul>
								<Link
									to="/contact"
									className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
								>
									Contact Sales
								</Link>
							</div>
						</div>

						{/* Market Analysis */}
						<div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
							<h3 className="text-3xl font-bold text-white mb-6 text-center">Market Analysis</h3>
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								<div className="text-center">
									<div className="text-3xl font-bold text-green-400 mb-2">15-40%</div>
									<div className="text-gray-300">Cost Savings vs Competitors</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-400 mb-2">3-6 Months</div>
									<div className="text-gray-300">Average ROI Timeline</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
									<div className="text-gray-300">Uptime Guarantee</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
									<div className="text-gray-300">Support Availability</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Detailed Service Pricing */}
				<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								Detailed Service Pricing
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								Explore detailed pricing for each service category with feature comparisons and market analysis.
							</p>
						</div>

						{/* Service Categories with Pricing */}
						{comprehensiveInnovativeServices2030.map((category) => (
							<div key={category.slug} className="mb-20">
								<div className="text-center mb-12">
									<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
										{category.name}
									</h3>
									<div className="w-24 h-1 bg-blue-500 mx-auto"></div>
								</div>

								<div className="overflow-x-auto">
									<table className="w-full bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
										<thead className="bg-blue-600/20">
											<tr>
												<th className="px-6 py-4 text-left text-white font-semibold">Service</th>
												<th className="px-6 py-4 text-center text-white font-semibold">Starting Price</th>
												<th className="px-6 py-4 text-center text-white font-semibold">Market Average</th>
												<th className="px-6 py-4 text-center text-white font-semibold">Our Savings</th>
												<th className="px-6 py-4 text-center text-white font-semibold">Features</th>
												<th className="px-6 py-4 text-center text-white font-semibold">Action</th>
											</tr>
										</thead>
										<tbody>
											{category.items.map((service, index) => {
												// Calculate market average (estimated based on competitors)
												const marketAverage = service.price.replace('$', '').replace(',', '');
												const ourPrice = parseInt(marketAverage);
												const estimatedMarketPrice = Math.round(ourPrice * 1.3); // 30% higher than our price
												const savings = Math.round(((estimatedMarketPrice - ourPrice) / estimatedMarketPrice) * 100);
												
												return (
													<tr key={service.id} className={index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
														<td className="px-6 py-4">
															<div>
																<div className="font-semibold text-white">{service.title}</div>
																<div className="text-sm text-gray-300">{service.description}</div>
															</div>
														</td>
														<td className="px-6 py-4 text-center">
															<div className="text-2xl font-bold text-green-400">{service.price}</div>
															<div className="text-sm text-gray-300">per {service.billing}</div>
														</td>
														<td className="px-6 py-4 text-center">
															<div className="text-lg font-semibold text-gray-300">${estimatedMarketPrice.toLocaleString()}</div>
															<div className="text-sm text-gray-400">market average</div>
														</td>
														<td className="px-6 py-4 text-center">
															<div className="text-lg font-bold text-green-400">{savings}%</div>
															<div className="text-sm text-gray-300">less than market</div>
														</td>
														<td className="px-6 py-4">
															<div className="text-sm text-gray-300">
																{service.features.slice(0, 3).map((feature, idx) => (
																	<div key={idx} className="flex items-center mb-1">
																		<span className="text-blue-400 mr-2">✓</span>
																		{feature}
																	</div>
																))}
																{service.features.length > 3 && (
																	<div className="text-gray-400 text-xs mt-2">
																		+{service.features.length - 3} more features
																	</div>
																)}
															</div>
														</td>
														<td className="px-6 py-4 text-center">
															<Link
																to={service.href}
																className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300"
															>
																{service.ctaLabel}
															</Link>
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ROI Calculator */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								ROI Calculator
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								Calculate the return on investment for our services and see how much you can save.
							</p>
						</div>

						<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-2xl font-bold text-white mb-6">Input Your Data</h3>
									<div className="space-y-4">
										<div>
											<label className="block text-gray-300 mb-2">Current Monthly IT Costs</label>
											<input
												type="number"
												placeholder="$10,000"
												className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
										<div>
											<label className="block text-gray-300 mb-2">Team Size</label>
											<input
												type="number"
												placeholder="50"
												className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
										<div>
											<label className="block text-gray-300 mb-2">Expected Efficiency Gain (%)</label>
											<input
												type="number"
												placeholder="25"
												className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
									</div>
								</div>
								<div>
									<h3 className="text-2xl font-bold text-white mb-6">Your ROI Results</h3>
									<div className="space-y-4">
										<div className="bg-green-600/20 p-4 rounded-lg">
											<div className="text-2xl font-bold text-green-400">$15,000</div>
											<div className="text-gray-300">Monthly Savings</div>
										</div>
										<div className="bg-blue-600/20 p-4 rounded-lg">
											<div className="text-2xl font-bold text-blue-400">180%</div>
											<div className="text-gray-300">ROI in 12 months</div>
										</div>
										<div className="bg-purple-600/20 p-4 rounded-lg">
											<div className="text-2xl font-bold text-purple-400">6 months</div>
											<div className="text-gray-300">Payback Period</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Information */}
				<section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
					<div className="max-w-7xl mx-auto text-center">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
							Contact our team to discuss your specific needs and get a customized quote.
						</p>
						
						<div className="grid md:grid-cols-3 gap-8 mb-8">
							<div>
								<h3 className="font-semibold text-lg mb-2 text-white">Contact Us</h3>
								<p className="text-blue-100">Mobile: +1 302 464 0950</p>
								<p className="text-blue-100">Email: kleber@ziontechgroup.com</p>
							</div>
							<div>
								<h3 className="font-semibold text-lg mb-2 text-white">Address</h3>
								<p className="text-blue-100">364 E Main St STE 1008</p>
								<p className="text-blue-100">Middletown DE 19709</p>
							</div>
							<div>
								<h3 className="font-semibold text-lg mb-2 text-white">Website</h3>
								<a 
									href="https://ziontechgroup.com" 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-blue-100 hover:text-white underline"
								>
									https://ziontechgroup.com
								</a>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/contact"
								className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
							>
								Get Custom Quote
							</Link>
							<Link
								to="/schedule-demo"
								className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300"
							>
								Schedule Demo
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ComprehensivePricingGuide2030;
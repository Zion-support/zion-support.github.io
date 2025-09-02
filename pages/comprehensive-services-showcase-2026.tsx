import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, TrendingUp, Clock, Shield, Zap, Brain, Cloud, Database, Code, Building, Rocket } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'
import { comprehensiveExpandedServices, serviceCategories } from '../data/comprehensive-2026-expanded-services'

export default function ComprehensiveServicesShowcase2026() {
	const title = 'Comprehensive Services Showcase 2026 — Zion Tech Group'
	const description = 'Explore our expanded portfolio of AI, cloud, data, and emerging technology solutions designed to transform your business.'

	const [selectedCategory, setSelectedCategory] = useState<string>('all')
	const [searchTerm, setSearchTerm] = useState('')

	const filteredServices = comprehensiveExpandedServices.filter(service => {
		const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
		const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
		return matchesCategory && matchesSearch
	})

	const popularServices = comprehensiveExpandedServices.filter(service => service.popular)

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Comprehensive{' '}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Services Portfolio
							</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Discover our expanded suite of AI-powered solutions, cloud infrastructure, and emerging technology platforms designed to accelerate your digital transformation.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
							>
								View Core Services <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Search and Filter Section */}
			<section className="bg-white py-12">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
						{/* Search */}
						<div className="flex-1 max-w-md">
							<div className="relative">
								<input
									type="text"
									placeholder="Search services..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</div>
							</div>
						</div>

						{/* Category Filter */}
						<div className="flex flex-wrap gap-2">
							<button
								onClick={() => setSelectedCategory('all')}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
									selectedCategory === 'all'
										? 'bg-blue-600 text-white'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
								}`}
							>
								All Services
							</button>
							{serviceCategories.map((category) => (
								<button
									key={category.name}
									onClick={() => setSelectedCategory(category.name)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
										selectedCategory === category.name
											? 'bg-blue-600 text-white'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
									}`}
								>
									{category.icon} {category.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Popular Services Section */}
			{popularServices.length > 0 && (
				<section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center mb-12">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Most Popular Services
							</h2>
							<p className="mt-4 text-lg text-gray-600">
								Our most requested solutions that are transforming businesses across industries
							</p>
						</div>
						<div className="grid gap-8 lg:grid-cols-2">
							{popularServices.map((service) => (
								<div key={service.id} className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center gap-x-3">
											<div className="text-4xl">{service.icon}</div>
											<div>
												<h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
												<p className="text-sm text-gray-600">{service.tagline}</p>
											</div>
										</div>
										<div className="flex items-center gap-1 text-yellow-400">
											<Star className="h-4 w-4 fill-current" />
											<span className="text-sm font-medium text-gray-900">{service.rating}</span>
										</div>
									</div>
									<p className="text-gray-600 mb-4">{service.description}</p>
									<div className="flex items-center justify-between mb-4">
										<div className="text-2xl font-bold text-blue-600">
											{service.price}
											{service.period && <span className="text-sm font-normal text-gray-500">{service.period}</span>}
										</div>
										<div className="text-sm text-gray-500">
											{service.customers} customers
										</div>
									</div>
									<div className="flex items-center gap-4 mb-6">
										<div className="flex items-center gap-1 text-sm text-gray-600">
											<Clock className="h-4 w-4" />
											{service.setupTime}
										</div>
										<div className="flex items-center gap-1 text-sm text-gray-600">
											<Users className="h-4 w-4" />
											{service.reviews} reviews
										</div>
									</div>
									<Link
										to={service.link}
										className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
									>
										Learn more
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* All Services Grid */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Complete Service Portfolio
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							Explore our comprehensive range of solutions designed to meet every business need
						</p>
					</div>

					{/* Services by Category */}
					{serviceCategories.map((category) => {
						const categoryServices = filteredServices.filter(service => service.category === category.name)
						if (categoryServices.length === 0) return null

						return (
							<div key={category.name} className="mb-16">
								<div className="mb-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										{category.icon} {category.name}
									</h3>
									<p className="text-gray-600">{category.description}</p>
								</div>
								<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
									{categoryServices.map((service) => (
										<div key={service.id} className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300">
											<div className="flex items-start justify-between mb-4">
												<div className="text-3xl">{service.icon}</div>
												{service.popular && (
													<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
														Popular
													</span>
												)}
											</div>
											<h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
											<p className="text-sm text-gray-600 mb-3">{service.tagline}</p>
											<p className="text-gray-700 text-sm mb-4 line-clamp-3">{service.description}</p>
											
											{/* Features */}
											<div className="mb-4">
												<h5 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h5>
												<ul className="space-y-1">
													{service.features.slice(0, 3).map((feature, index) => (
														<li key={index} className="flex items-center gap-2 text-xs text-gray-600">
															<Zap className="h-3 w-3 text-blue-500" />
															{feature}
														</li>
													))}
												</ul>
											</div>

											{/* Pricing and Stats */}
											<div className="flex items-center justify-between mb-4">
												<div className="text-xl font-bold text-blue-600">
													{service.price}
													{service.period && <span className="text-sm font-normal text-gray-500">{service.period}</span>}
												</div>
												<div className="flex items-center gap-1 text-yellow-400">
													<Star className="h-3 w-3 fill-current" />
													<span className="text-sm font-medium text-gray-900">{service.rating}</span>
												</div>
											</div>

											{/* Market Info */}
											<div className="mb-4 p-3 bg-gray-50 rounded-lg">
												<div className="flex items-center justify-between text-xs text-gray-600 mb-2">
													<span>Market Size:</span>
													<span className="font-medium">{service.marketSize}</span>
												</div>
												<div className="flex items-center justify-between text-xs text-gray-600">
													<span>Growth Rate:</span>
													<span className="font-medium text-green-600">{service.growthRate}</span>
												</div>
											</div>

											{/* ROI and Setup */}
											<div className="mb-4 text-xs text-gray-600">
												<div className="flex items-center gap-1 mb-1">
													<TrendingUp className="h-3 w-3 text-green-500" />
													<span className="font-medium">ROI:</span> {service.roi}
												</div>
												<div className="flex items-center gap-1">
													<Clock className="h-3 w-3 text-blue-500" />
													<span className="font-medium">Setup:</span> {service.setupTime}
												</div>
											</div>

											{/* Action Buttons */}
											<div className="flex items-center gap-3">
												<Link
													to={service.link}
													className="flex-1 inline-flex items-center justify-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
												>
													Learn more
													<ArrowRight className="ml-2 h-4 w-4" />
												</Link>
												<Link
													to="/contact"
													className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
												>
													Get Quote
												</Link>
											</div>
										</div>
									))}
								</div>
							</div>
						)
					})}

					{/* No Results */}
					{filteredServices.length === 0 && (
						<div className="text-center py-12">
							<div className="text-6xl mb-4">🔍</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
							<p className="text-gray-600">Try adjusting your search terms or category filter</p>
						</div>
					)}
				</div>
			</section>

			{/* Contact Information Section */}
			<section className="bg-gradient-to-r from-gray-900 to-gray-800 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Transform Your Business?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
							Our team of experts is ready to help you implement the right solutions for your business needs.
						</p>
						
						{/* Contact Details */}
						<div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
							<div className="flex flex-col items-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
									<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
								<p className="text-gray-300">+1 302 464 0950</p>
							</div>
							
							<div className="flex flex-col items-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
									<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-white mb-2">Email</h3>
								<p className="text-gray-300">kleber@ziontechgroup.com</p>
							</div>
							
							<div className="flex flex-col items-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
									<svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-white mb-2">Address</h3>
								<p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
							</div>
						</div>

						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get in touch
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<a
								href="https://ziontechgroup.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors"
							>
								Visit our website <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
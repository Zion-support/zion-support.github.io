import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, Search, Filter, Star, TrendingUp, Clock, Users2, Target, Rocket, Cpu, Database2, ShieldCheck, Globe2, Zap2, Brain2, Cloud2, Lock2, ChevronLeft, ChevronRight } from 'lucide-react'

import { additionalEnhancedServices } from '../data/additional-real-services'
import { enhancedServices2025 } from '../data/enhanced-services-2025'
import { zionInnovativeServices2025 } from '../data/zion-2025-innovative-services'

export default function Services() {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [sortBy, setSortBy] = useState('popularity')
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(12) // Show 12 services per page

	const title = 'Services — Zion Tech Group'
	const description = 'Comprehensive AI, IT, and micro SaaS solutions for modern businesses.'

	// Combine all services
	const allServices = [...additionalEnhancedServices, ...enhancedServices2025, ...zionInnovativeServices2025]

	// Get unique categories
	const categories = ['all', ...new Set(allServices.map(service => service.category))]

	// Filter and sort services
	const filteredServices = allServices
		.filter(service => 
			(selectedCategory === 'all' || service.category === selectedCategory) &&
			(service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			 service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			 (service.tagline && service.tagline.toLowerCase().includes(searchTerm.toLowerCase())))
		)
		.sort((a, b) => {
			switch (sortBy) {
				case 'popularity':
					return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
				case 'price':
					return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''))
				case 'rating':
					return (b.rating || 0) - (a.rating || 0)
				case 'newest':
					return new Date(b.launchDate || '2024-01-01').getTime() - new Date(a.launchDate || '2024-01-01').getTime()
				default:
					return 0
			}
		})

	// Pagination logic
	const totalPages = Math.ceil(filteredServices.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const currentServices = filteredServices.slice(startIndex, endIndex)

	// Reset to first page when filters change
	React.useEffect(() => {
		setCurrentPage(1)
	}, [searchTerm, selectedCategory, sortBy])

	// Pagination controls
	const goToPage = (page: number) => {
		setCurrentPage(page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const goToNextPage = () => {
		if (currentPage < totalPages) {
			goToPage(currentPage + 1)
		}
	}

	const goToPreviousPage = () => {
		if (currentPage > 1) {
			goToPage(currentPage - 1)
		}
	}

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Comprehensive Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From cutting-edge AI solutions to enterprise IT infrastructure, we deliver innovative micro SaaS and technology services that transform businesses.
						</p>
						<div className="mt-8 flex items-center justify-center gap-4">
							<div className="flex items-center gap-2 text-sm text-gray-600">
								<Users2 className="h-4 w-4" />
								<span>500+ Active Customers</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-gray-600">
								<Star className="h-4 w-4 text-yellow-400" />
								<span>4.9/5 Rating</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-gray-600">
								<Clock className="h-4 w-4" />
								<span>24/7 Support</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Search and Filter Section */}
			<section className="bg-white py-8 border-b border-gray-200">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
						{/* Search */}
						<div className="relative flex-1 max-w-md">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
							<input
								type="text"
								placeholder="Search services..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
						</div>

						{/* Category Filter */}
						<div className="flex items-center gap-4">
							<select
								value={selectedCategory}
								onChange={(e) => setSelectedCategory(e.target.value)}
								className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
									</option>
								))}
							</select>

							{/* Sort */}
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							>
								<option value="popularity">Most Popular</option>
								<option value="price">Price: Low to High</option>
								<option value="rating">Highest Rated</option>
								<option value="newest">Newest First</option>
							</select>
						</div>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="bg-gray-50 py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					{/* Results Count */}
					<div className="mb-8">
						<p className="text-gray-600">
							Showing {startIndex + 1}-{Math.min(endIndex, filteredServices.length)} of {filteredServices.length} services
						</p>
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{currentServices.map((service) => (
							<div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
								<div className="p-6">
									{/* Service Header */}
									<div className="flex items-start justify-between mb-4">
										<div className="text-3xl">{service.icon}</div>
										{service.popular && (
											<span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
												POPULAR
											</span>
										)}
									</div>

									{/* Service Info */}
									<h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
									<p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

									{/* Price */}
									<div className="mb-4">
										<span className="text-2xl font-bold text-blue-600">{service.price}</span>
										<span className="text-gray-500">{service.period}</span>
									</div>

									{/* Features Preview */}
									<div className="mb-4">
										<ul className="space-y-1">
											{service.features.slice(0, 3).map((feature, index) => (
												<li key={index} className="flex items-center gap-2 text-sm text-gray-600">
													<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
													{feature}
												</li>
											))}
										</ul>
									</div>

									{/* CTA Button */}
									<Link
										href={service.link}
										className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 group"
									>
										Learn More
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</Link>
								</div>
							</div>
						))}
					</div>

					{/* Pagination */}
					{totalPages > 1 && (
						<div className="mt-12 flex items-center justify-center gap-2">
							<button
								onClick={goToPreviousPage}
								disabled={currentPage === 1}
								className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
							>
								<ChevronLeft className="w-4 h-4" />
							</button>

							{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
								<button
									key={page}
									onClick={() => goToPage(page)}
									className={`px-4 py-2 rounded-lg transition-colors ${
										currentPage === page
											? 'bg-blue-600 text-white'
											: 'border border-gray-300 hover:bg-gray-50'
									}`}
								>
									{page}
								</button>
							))}

							<button
								onClick={goToNextPage}
								disabled={currentPage === totalPages}
								className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
							>
								<ChevronRight className="w-4 h-4" />
							</button>
						</div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold text-white mb-4">
						Ready to Transform Your Business?
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
						Let our team of experts help you implement the right solutions for your unique challenges.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/contact"
							className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
						>
							Get Started Today
						</Link>
						<Link
							href="/pricing"
							className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
						>
							View Pricing
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

import React from 'react';
import Link from 'next/link';

import { additionalEnhancedServices } from '../data/additional-real-services'
import { enhancedServices2025 } from '../data/enhanced-services-2025'
import { zionInnovativeServices2025 } from '../data/zion-2025-innovative-services'

export default function Services() {
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [sortBy, setSortBy] = useState('popularity')
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(12) // Show 12 services per page

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
    link: '/services/it-services'
  },
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
    link: '/services/it-services'
  },
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
    link: '/services/it-services'
  },
  {
    name: 'Cloud Architecture & Design',
    summary: 'Expert cloud architecture design for scalable, secure, and cost-effective solutions.',
    pricing: 'Typical: $8k–$50k project',
    link: '/services/it-services'
  },
  {
    name: 'Disaster Recovery & Backup',
    summary: 'Comprehensive disaster recovery and backup solutions for business continuity.',
    pricing: 'Typical: $5k–$25k setup, $500–$2k/month',
    link: '/services/it-services'
  },
  {
    name: 'API Development & Integration',
    summary: 'Custom API development and third-party integrations to streamline operations.',
    pricing: 'Typical: $3k–$20k project',
    link: '/services/it-services'
  },
  {
    name: 'Mobile App Development',
    summary: 'Native and cross-platform mobile application development for iOS and Android.',
    pricing: 'Typical: $10k–$100k project',
    link: '/services/it-services'
  },
  {
    name: 'Web Application Development',
    summary: 'Custom web application development with modern frameworks and scalable architecture.',
    pricing: 'Typical: $8k–$80k project',
    link: '/services/it-services'
  }
];

export default function Services(): React.ReactElement {
  const Section = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 20px', }}>
      <div style={{ 
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
        paddingBottom: 12, borderBottom: `2px solid ${color}20`
      }}>
        <div style={{ 
          width: 4, height: 32, background: color, borderRadius: 2 
        }}></div>
        <h2 style={{ 
          fontSize: 28, fontWeight: 800, margin: 0,
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>{title}</h2>
        <div style={{ 
          background: `${color}20`, color: color, padding: '4px 12px', 
          borderRadius: 20, fontSize: 14, fontWeight: 600 
        }}>
          {items.length} Services
        </div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: 20 
      }}>
        {items.map((s) => (
          <a key={s.name} href={s.link} style={{
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 24,
            background: 'white', textDecoration: 'none', color: '#0b1220',
            transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            ':hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              borderColor: `${color}40`
            }
          }}>
            <div style={{ 
              fontWeight: 700, marginBottom: 8, fontSize: 16,
              lineHeight: 1.4, color: '#1e293b'
            }}>{s.name}</div>
            <div style={{ 
              opacity: 0.8, fontSize: 14, marginBottom: 12, 
              lineHeight: 1.5, color: '#64748b'
            }}>{s.summary}</div>
            <div style={{ 
              fontSize: 13, color: color, fontWeight: 600,
              background: `${color}10`, padding: '6px 12px',
              borderRadius: 8, display: 'inline-block'
            }}>{s.pricing}</div>
          </a>
        ))}
      </div>
    </section>
  );

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
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
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
								<h2 className="text-xl font-semibold text-gray-900">AI Autonomous Systems</h2>
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

						{/* Cloud Platforms */}
						<div id="cloud" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
									<Cloud className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Cloud Platforms</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Build scalable, resilient cloud infrastructure that grows with your business.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Server className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Serverless and Kubernetes</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Data pipelines and ML ops</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">FinOps and SRE practices</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Globe className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Multi-cloud architecture</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors"
								>
									Build your cloud platform
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Cybersecurity */}
						<div id="cybersecurity" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
									<Shield className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Cybersecurity</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Protect your business with enterprise-grade security frameworks and compliance.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Lock className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Zero-trust frameworks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Shield className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Compliance and threat modeling</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Incident response playbooks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Security monitoring & analytics</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-500 transition-colors"
								>
									Secure your business
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Micro SaaS */}
						<div id="saas" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
									<Code className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Micro SaaS</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Rapidly build and deploy SaaS products with proven infrastructure patterns.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Rapid product delivery</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Billing, auth, and analytics</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Growth experiments</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">User onboarding & retention</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors"
								>
									Build your SaaS
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
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
		</PageTransition>
	)
}

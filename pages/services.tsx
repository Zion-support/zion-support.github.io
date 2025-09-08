import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cloud, Zap, Users, Globe, Search, Filter, Star, TrendingUp, Clock, Users2 } from 'lucide-react';


<<<<<<< HEAD
const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
=======
const services = [
  {
    title: 'Micro SaaS Solutions',
    description: 'Build and scale your software-as-a-service business with our comprehensive micro SaaS platform.',
    icon: Code,
    features: ['Rapid Development', 'Scalable Architecture', 'Multi-tenant Support', 'API Integration'],
    pricing: 'Starting at $2,999/month'
  },
  {
    title: 'IT Infrastructure',
    description: 'Complete IT infrastructure solutions including cloud migration, security, and maintenance.',
    icon: Server,
    features: ['Cloud Migration', 'Security Hardening', '24/7 Monitoring', 'Disaster Recovery'],
    pricing: 'Starting at $1,999/month'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Leverage artificial intelligence to automate processes and gain valuable insights from your data.',
    icon: Brain,
    features: ['Custom AI Models', 'Data Analytics', 'Process Automation', 'Predictive Insights'],
    pricing: 'Starting at $3,999/month'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive cybersecurity solutions and compliance support.',
    icon: Shield,
    features: ['Threat Detection', 'Compliance Auditing', 'Security Training', 'Incident Response'],
    pricing: 'Starting at $2,499/month'
  },
  {
    title: 'Cloud Services',
    description: 'Optimize your cloud infrastructure with our expert cloud management and optimization services.',
    icon: Cloud,
    features: ['Cloud Strategy', 'Cost Optimization', 'Performance Tuning', 'Migration Support'],
    pricing: 'Starting at $1,499/month'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and reporting solutions.',
    icon: Database,
    features: ['Data Visualization', 'Real-time Dashboards', 'Custom Reports', 'Predictive Analytics'],
    pricing: 'Starting at $1,799/month'
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Proven Expertise',
    description: 'Over 500 successful projects completed across various industries'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 support from our team of experienced professionals'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with local expertise and support'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: '99% client satisfaction rate with rigorous quality standards'
  }
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including micro SaaS, IT infrastructure, AI solutions, and cybersecurity." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold mb-4">
                    {service.pricing}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
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
		<div>
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
		</div>
	)
}
>
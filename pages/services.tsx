import Head from 'next/head';
import Layout from '../components/layout/Layout';


// Sample data for services
const microSaaS = [
	{
		id: 'ai-workflow-automation',
		icon: '🤖',
		name: 'AI Workflow Automation',
		tagline: 'Automate complex business processes with AI',
		price: '$299',
		period: '/month',
		features: ['Process mapping', 'AI decision trees', 'Integration APIs', 'Analytics dashboard']
	},
	{
		id: 'blockchain-enterprise',
		icon: '⛓️',
		name: 'Blockchain Enterprise Solutions',
		tagline: 'Secure, transparent business operations',
		price: '$499',
		period: '/month',
		features: ['Smart contracts', 'Supply chain tracking', 'Identity management', 'Compliance tools']
	},
	{
		id: 'iot-data-analytics',
		icon: '📊',
		name: 'IoT Data Analytics Platform',
		tagline: 'Real-time insights from connected devices',
		price: '$199',
		period: '/month',
		features: ['Device management', 'Data visualization', 'Alert system', 'Predictive analytics']
	}
];

const itServices = [
	{
		id: 'cloud-devops',
		icon: '☁️',
		name: 'Cloud & DevOps',
		tagline: 'Scalable infrastructure and automation',
		price: '$2,500',
		period: '/month',
		features: ['Kubernetes management', 'CI/CD pipelines', 'Monitoring & alerting', 'Cost optimization']
	},
	{
		id: 'cybersecurity',
		icon: '🛡️',
		name: 'Cybersecurity Services',
		tagline: 'Comprehensive security solutions',
		price: '$3,500',
		period: '/month',
		features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', 'Incident response']
	},
	{
		id: 'enterprise-it',
		icon: '🏢',
		name: 'Enterprise IT Solutions',
		tagline: 'Large-scale IT transformation',
		price: '$8,000',
		period: '/month',
		features: ['Digital transformation', 'Legacy modernization', 'Change management', 'ROI tracking']
	}
];

const aiServices = [
	{
		id: 'ai-autonomous-systems',
		icon: '🧠',
		name: 'AI Autonomous Systems',
		tagline: 'Self-managing business operations',
		price: '$4,500',
		period: '/month',
		features: ['Multi-agent systems', 'Decision automation', 'Learning algorithms', 'Performance monitoring']
	},
	{
		id: 'ai-business-intelligence',
		icon: '📈',
		name: 'AI Business Intelligence',
		tagline: 'Data-driven insights and predictions',
		price: '$3,200',
		period: '/month',
		features: ['Predictive analytics', 'Natural language queries', 'Custom dashboards', 'Automated reporting']
	},
	{
		id: 'ai-marketing-automation',
		icon: '🎯',
		name: 'AI Marketing Automation',
		tagline: 'Intelligent customer engagement',
		price: '$2,800',
		period: '/month',
		features: ['Customer segmentation', 'Personalized content', 'Campaign optimization', 'ROI tracking']
	}
];

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'


      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to discover how our revolutionary services can drive unprecedented growth and ROI
            </p>

  // Filter and sort services
  const filteredServices = uniqueServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || 
                             (Array.isArray(service.category) ? 
                               service.category.includes(selectedCategory) : 
                               service.category === selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Services | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and advanced biotechnology." />
        <meta name="keywords" content="AI services, quantum computing, space technology, biotechnology, 2029 technology, revolutionary services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* Enhanced Futuristic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          
          {/* Animated Quantum Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                  {allServices.length}+ Revolutionary Services Available
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our comprehensive suite of cutting-edge AI, quantum computing, emerging technology, 
                and micro SAAS services designed to transform your business and drive innovation.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  AI & Consciousness
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Quantum Computing
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Enterprise IT
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                  Micro SAAS
                </div>
              </motion.div>
              
              {/* Revolutionary Services Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8"
              >
                <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">🚀 Revolutionary 2025 Services</h3>
                      <p className="text-gray-300">
                        Explore our latest breakthrough services including AI Consciousness, Quantum Internet, Space Technology, and more!
                      </p>
                    </div>
                    <Link href="/revolutionary-2025-services-showcase">
                      <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                        View Revolutionary Services →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Enhanced Search */}
                  <div className="relative flex-1 w-full lg:w-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-6 h-6" />
                      <input
                        type="text"
                        placeholder="Search our revolutionary services..."
                        value={searchQuery}
                                              onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full lg:w-96 pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30"
                      />
                    </div>
                  </div>

                  {/* Enhanced Category Filter */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30 appearance-none pr-10"
                      >
                        <option value="all">All Categories</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Enhanced Sort */}
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 hover:border-cyan-500/30 appearance-none pr-10"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 pointer-events-none">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Enhanced View Mode */}
                    <div className="flex items-center space-x-2 bg-gray-800/50 rounded-2xl p-1.5 border border-gray-700/50">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'grid' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'list' 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Results Count */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                    <span className="text-cyan-300 font-medium">
                      Showing {filteredServices.length} of {allServices.length} revolutionary services
                    </span>
                  </div>
                </div>
              </div>
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
									Explore cloud solutions
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

			{/* Process Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Our Process</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							How we deliver results
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We follow a proven methodology that ensures successful delivery and measurable outcomes.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">1</span>
									Discovery
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We analyze your current state, understand your goals, and design a roadmap for success.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">2</span>
									Design
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We architect solutions that align with your business objectives and technical requirements.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">3</span>
									Develop
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We build and test your solution using industry best practices and modern technologies.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">4</span>
									Deploy
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We launch your solution and provide ongoing support to ensure continued success.
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Expanded Catalog Sections */}
			<section className="mt-16">
				<h2 className="text-2xl font-semibold">Featured Micro SaaS</h2>
				<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{microSaaS.map((item) => (
						<article key={item.id} className="rounded-lg border p-4">
							<div className="text-lg font-semibold">{item.icon} {item.name}</div>
							<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
							<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
							</ul>
							<Link to={`/services/${item.id}`} className="mt-3 inline-block text-blue-600 underline">Learn more</Link>
						</article>
					))}
				</div>
			</section>

			<section className="mt-16">
				<h2 className="text-2xl font-semibold">Advanced IT Services</h2>
				<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{itServices.map((item) => (
						<article key={item.id} className="rounded-lg border p-4">
							<div className="text-lg font-semibold">{item.icon} {item.name}</div>
							<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
							<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
							</ul>
							<Link to={`/services/${item.id}`} className="mt-3 inline-block text-blue-600 underline">Learn more</Link>
						</article>
					))}
				</div>
			</section>

			<section className="mt-16">
				<h2 className="text-2xl font-semibold">Innovative AI Services</h2>
				<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{aiServices.map((item) => (
						<article key={item.id} className="rounded-lg border p-4">
							<div className="text-lg font-semibold">{item.icon} {item.name}</div>
							<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
							<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
							</ul>
							<Link to={`/services/${item.id}`} className="mt-3 inline-block text-blue-600 underline">Learn more</Link>
						</article>
					))}
				</div>
			</section>

			<section className="mt-16 rounded-lg border bg-gray-50 p-6">
				<h2 className="text-xl font-medium">Why Zion Tech Group</h2>
				<ul className="mt-2 list-disc pl-5 text-gray-700">
					<li>Real, battle-tested implementations (no mockups)</li>
					<li>Transparent pricing and fast onboarding</li>
					<li>Enterprise-grade security and compliance</li>
					<li>ROI-focused delivery and measurable outcomes</li>
				</ul>
				<p className="mt-3 text-sm text-gray-700">Average market prices (monthly): Micro SaaS $99–$999, AI Services $499–$4,999, Enterprise IT $2,000–$15,000. We price competitively based on scope.</p>
				<p className="mt-1 text-sm text-gray-700">Call <a className="text-blue-600 underline" href="tel:+13024640950">+1 302 464 0950</a>, email <a className="text-blue-600 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>, or visit <a className="text-blue-600 underline" href="https://ziontechgroup.com">ziontechgroup.com</a>.</p>
				<div className="mt-4 grid gap-3 sm:grid-cols-2">
					<Link to="/pricing" className="inline-block rounded border px-4 py-2 text-blue-700 hover:bg-blue-50">See pricing guidance</Link>
					<Link to="/request-quote" className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Request a custom quote</Link>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to get started?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's discuss your project and how we can help you achieve your goals.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get in touch
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}


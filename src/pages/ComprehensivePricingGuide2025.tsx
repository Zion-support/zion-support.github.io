import React from 'react';
import { SEO  } from '../components/SEO';
import { servicesCatalog  } from '../data/servicesCatalog';
import { MICRO_SAAS_SERVICES  } from '../data/microSaasServices';

const ComprehensivePricingGuide2025: React.FC = (): JSX.Element => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices: Service[] = [
    ...enhancedInnovativeServices2025,
    ...enhancedITandAIServices2025
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      return matchesSearch && matchesCategory && matchesInnovation;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(allServices.map(s => s.innovationLevel)))];

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'text-purple-400 border-purple-400';
      case 'Cutting-edge':
        return 'text-blue-400 border-blue-400';
      case 'Advanced':
        return 'text-green-400 border-green-400';
      default:
        return [
          ...revolutionaryMicroSaasServices2025,
          ...advancedITInfrastructureServices2025,
          ...revolutionaryAIServices2025
        ];
    }
  };

  const getFilteredServices = () => {
    let services = getServicesByCategory();

    if (selectedPricingModel !== 'all') {
      services = services.filter(service => {
        if (selectedPricingModel === 'monthly') return service.pricingModel === 'monthly';
        if (selectedPricingModel === 'hourly') return service.hourlyRate;
        if (selectedPricingModel === 'project') return service.projectRate;
        return true;
      });
    }

    return services;
  };

  const services = getFilteredServices();

  const calculateTotalInvestment = () => {
    return services.reduce((total, service) => {
      if (service.price) return total + service.price;
      if (service.hourlyRate) return total + (service.hourlyRate * 160); // 160 hours per month
      if (service.projectRate) return total + service.projectRate;
      return total;
    }, 0);
  };

  const calculateTotalROI = () => {
    return services.reduce((total, service) => {
      if (service.roi) {
        const roiPercentage = parseInt(service.roi.split('%')[0]);
        if (service.price) return total + (service.price * roiPercentage / 100);
        if (service.hourlyRate) return total + ((service.hourlyRate * 160) * roiPercentage / 100);
        if (service.projectRate) return total + (service.projectRate * roiPercentage / 100);
      }

      return total;
    }, 0);
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Explore our transparent pricing for AI-powered solutions, quantum computing platforms, blockchain services, and innovative micro SAAS products. Find the perfect plan for your business needs."
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Comprehensive
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Guide 2025
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore our complete portfolio of 50+ innovative micro SAAS, IT infrastructure, and AI solutions. 
              From revolutionary AI-Quantum hybrid computing to cutting-edge AI cybersecurity platforms, 
              find the perfect solution for your business needs with transparent pricing and proven ROI.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 mb-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <a href="tel:+13024640950" className="text-purple-300 hover:text-purple-200 transition-colors text-lg">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200 transition-colors text-lg">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-10 h-10 text-purple-400 mb-3" />
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <p className="text-purple-300 text-lg">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-8 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Innovation Level Filter */}
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {innovationLevels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Innovation Levels' : level}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="roi">ROI: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the perfect solution for your business needs with our comprehensive portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 lg: anygrid-cols-3 gap-8">
            {pricingTiers.map((tier, index)  => (
              <div 
                key={tier.name}
                className={`relative rounded-xl p-8 ${
                  tier.popular 
                    ? 'bg-blue-900/20 border-2 border-blue-500/50' 
                    : 'bg-slate-800/50 border border-slate-700'
                }`}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSupportLevelColor(service.supportLevel)}`}>
                      {service.supportLevel}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-purple-400">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-slate-400">/{service.pricingModel}</span>
                  </div>
                  
                  {service.marketPrice && (
                    <div className="text-sm text-slate-400 mb-2">
                      Market Price: {service.marketPrice}
                    </div>
                  )}
                  
                  {service.roi && (
                    <div className="text-sm text-green-400 font-semibold">
                      ROI: {service.roi}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-slate-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                {service.technicalSpecs && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      Technical Specs
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Uptime:</span>
                        <div className="text-white font-semibold">{service.technicalSpecs.uptime}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">API Endpoints:</span>
                        <div className="text-white font-semibold">{service.technicalSpecs.apiEndpoints}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Trial & Setup */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {service.freeTier && (
                      <div className="text-center">
                        <span className="text-slate-400 block">Free Tier</span>
                        <span className="text-green-400 font-semibold">Available</span>
                      </div>
                    )}
                    {service.trialPeriod && (
                      <div className="text-center">
                        <span className="text-slate-400 block">Trial Period</span>
                        <span className="text-blue-400 font-semibold">{service.trialPeriod}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-slate-400 mb-8">
                Try adjusting your search criteria or filters to find the services you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Service Categories Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Category Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for each service category with market comparison and value analysis
            </p>
          </div>

          <div className="space-y-12">
            {servicesCatalog.map((category) => (
              <div key={category.slug} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                  <span className="text-blue-400 font-semibold">
                    {category.items.length} Services Available
                  </span>
                </div>
                
                <div className="grid grid-cols-1 lg: anygrid-cols-2 xl:grid-cols-3 gap-6">
                  {category.items.map((service)  => (
                    <div key={service.id} className="bg-slate-700/50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">{service.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Starting Price:</span>
                          <span className="text-blue-400 font-bold text-lg">{service.price}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Billing:</span>
                          <span className="text-white text-sm capitalize">{service.billing}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-white font-semibold text-sm mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-gray-300 text-xs flex items-center">
                              <span className="text-blue-400 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center">
                        <a 
                          href={service.href}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                          {service.ctaLabel}
                        </a>
                        <a 
                          href={`mailto:${contactInfo.email}?subject=${service.title} Pricing`}
                          className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Micro SaaS Pricing Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Competitive pricing analysis for our micro SaaS solutions with market comparison
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Pricing by Category</h3>
              <div className="space-y-6">
                {Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category))).map((category) => {
                  const services = MICRO_SAAS_SERVICES.filter(s => s.category === category);
                  const avgPrice = services.reduce((sum, s) => sum + s.price, 0) / services.length;
                  const minPrice = Math.min(...services.map(s => s.price));
                  const maxPrice = Math.max(...services.map(s => s.price));
                  
                  return (
                    <div key={category} className="border-b border-slate-700 pb-4 last:border-b-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">{category}</span>
                        <span className="text-blue-400 font-bold">${Math.round(avgPrice)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Range: ${minPrice} - ${maxPrice}</span>
                        <span>{services.length} services</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Market Price Comparison</h3>
              <div className="space-y-6">
                <div className="text-center p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-white font-semibold mb-2">Average Market Price</h4>
                  <div className="text-3xl font-bold text-blue-400">
                    ${Math.round(MICRO_SAAS_SERVICES.reduce((sum, s) => {
                      const priceRange = s.marketPrice.match(/\$(\d+)/);
                      return sum + (priceRange ? parseInt(priceRange[1]) : s.price);
                    }, 0) / MICRO_SAAS_SERVICES.length)}
                  </div>
                  <p className="text-gray-300 text-sm">per month</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Our Average Price:</span>
                    <span className="text-white font-semibold">
                      ${Math.round(MICRO_SAAS_SERVICES.reduce((sum, s) => sum + s.price, 0) / MICRO_SAAS_SERVICES.length)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Market Average:</span>
                    <span className="text-blue-400 font-semibold">
                      ${Math.round(MICRO_SAAS_SERVICES.reduce((sum, s) => {
                        const priceRange = s.marketPrice.match(/\$(\d+)/);
                        return sum + (priceRange ? parseInt(priceRange[1]) : s.price);
                      }, 0) / MICRO_SAAS_SERVICES.length)}
                    </span>
                  </div>
                                      <div className="flex justify-between items-center">
                      <span className="text-gray-300">Savings:</span>
                      <span className="text-green-400 font-semibold">
                      {(() => {
                        const avgMarketPrice = MICRO_SAAS_SERVICES.reduce((sum, s) => {
                          const priceRange = s.marketPrice.match(/\$(\d+)/);
                          return sum + (priceRange ? parseInt(priceRange[1]) : s.price);
                        }, 0) / MICRO_SAAS_SERVICES.length;
                        
                        const avgOurPrice = MICRO_SAAS_SERVICES.reduce((sum, s) => sum + s.price, 0) / MICRO_SAAS_SERVICES.length;
                        
                        const savingsPercentage = ((avgMarketPrice - avgOurPrice) / avgMarketPrice) * 100;
                        return Math.round(savingsPercentage);
                      })()}%
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI and Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Return on Investment & Value
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understand the real value and ROI of our services with detailed analysis and case studies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Average ROI</h3>
              <div className="text-5xl font-bold text-green-400 mb-2">300%</div>
              <p className="text-gray-300">Within 12 months of implementation</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Time to Value</h3>
              <div className="text-5xl font-bold text-blue-400 mb-2">30 Days</div>
              <p className="text-gray-300">Average implementation timeline</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Savings</h3>
              <div className="text-5xl font-bold text-yellow-400 mb-2">40%</div>
              <p className="text-gray-300">Reduction in operational costs</p>
            </div>
          </div>

          <div className="mt-12 bg-blue-900/20 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Value Proposition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Immediate Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Increased operational efficiency</li>
                  <li>• Reduced manual workload</li>
                  <li>• Improved data accuracy</li>
                  <li>• Enhanced customer experience</li>
                  <li>• Faster decision-making</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Long-term Value</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Scalable infrastructure</li>
                  <li>• Competitive advantage</li>
                  <li>• Innovation leadership</li>
                  <li>• Future-proof technology</li>
                  <li>• Strategic partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Quote Request */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and get a customized quote for any of our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Custom Service Quote Request"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Request Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>

          <div className="text-slate-400">
            <p className="text-lg">
              Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2025;

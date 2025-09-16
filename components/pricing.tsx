} from 'lucide-react';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';

// Import all service data
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeAIServices2029 } from '../data/2029-innovative-ai-services';
import { quantumSpaceInnovations2029 } from '../data/2029-quantum-space-innovations';
import { enterpriseITInnovations2029 } from '../data/2029-enterprise-it-innovations';
import { innovativeMicroSaas2029 } from '../data/2029-innovative-micro-saas';

export default function PricingPage() {

  // Combine all services
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeAIServices2029,
    ...quantumSpaceInnovations2029,
    ...enterpriseITInnovations2029,
    ...innovativeMicroSaas2029
  ];

  // Get unique services by ID
    index === self.findIndex(s => s.id === service.id)
  );

  // Get all categories
    Array.isArray(s.category) ? s.category[0] : s.category
  )))];

  // Price ranges
  const priceRanges = [
  ];

  // Filter services
  const filteredServices = uniqueServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || 
                           (Array.isArray(service.category) ? 
                             service.category.includes(selectedCategory) : 
                             service.category === selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'All' ||
                        (selectedPriceRange === 'Under $1K' && price < 1000) ||
                        (selectedPriceRange === '$1K - $5K' && price >= 1000 && price < 5000) ||
                        (selectedPriceRange === '$5K - $20K' && price >= 5000 && price < 20000) ||
                        (selectedPriceRange === '$20K+' && price >= 20000);
    
    return matchesCategory && matchesPrice;
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Group services by category for better organization
  const servicesByCategory = filteredServices.reduce((acc, service) => {
    const category = Array.isArray(service.category) ? service.category[0] : service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. You can start using our services immediately after signing up.'
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Development & DevOps',
    'Sales & CRM',
    'Legal & Compliance',
    'Human Resources',
    'Analytics & Data',
    'Finance & Accounting',
    'Project Management',
    'Customer Experience',
    'Security & Compliance'
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const yearlyDiscount = 0.2; // 20% discount for yearly billing

  return (
    <UltraFuturisticBackground2029>
      <Head>
        <title>Revolutionary 2029 Technology Pricing | Zion Tech Group</title>
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <UltraFuturisticNavigation2029 />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary 2029
              </span>
              <br />
              <span className="text-white">Technology Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transparent pricing for our cutting-edge technology services that are already operational and delivering transformative results
            </p>
            
            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-8">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </div>

            <div className="text-center text-gray-400">
              <p>Showing {filteredServices.length} services in {Object.keys(servicesByCategory).length} categories</p>
            </div>
          </motion.div>
        </section>

        {/* Pricing Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category} Services
                  </h2>
                  <p className="text-gray-400 text-lg">
                    {services.length} revolutionary {category.toLowerCase()} solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105 ${service.popular ? 'ring-2 ring-yellow-400/50' : ''}`}>
                        {/* Popular Badge */}
                        {service.popular && (
                          <div className="flex items-center justify-center mb-4">
                            <div className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full">
                              <span className="text-sm text-yellow-400 font-medium flex items-center">
                                <Star className="w-4 h-4 mr-1 fill-current" />
                                Most Popular
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Service Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl">{service.icon}</span>
                        </div>

                        {/* Service Title and Tagline */}
                        <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                        <p className="text-sm text-cyan-400 mb-4">{service.tagline}</p>
                        
                        {/* Price */}
                        <div className="mb-6">
                          <div className="flex items-baseline">
                            <span className={`${service.textColor} font-bold text-3xl`}>
                              {service.price}
                            </span>
                            <span className="text-gray-400 text-lg ml-2">{service.period}</span>
                          </div>
                          {service.setupTime && (
                            <p className="text-sm text-gray-500 mt-1">Setup: {service.setupTime}</p>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                          <div className="space-y-2">
                              <div key={idx} className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 4 && (
                              <span className="text-xs text-gray-500">+{service.features.length - 4} more features</span>
                            )}
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mb-6 p-4 bg-gray-800/30 rounded-xl">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Trial:</span>
                              <span className="text-white ml-2">{service.trialDays} days</span>
                            </div>
                            {service.rating && (
                              <div>
                                <span className="text-gray-400">Rating:</span>
                                <span className="text-white ml-2">{service.rating}/5</span>
                              </div>
                            )}
                            {service.customers && (
                              <div>
                                <span className="text-gray-400">Customers:</span>
                                <span className="text-white ml-2">{service.customers}</span>
                              </div>
                            )}
                            {service.launchDate && (
                              <div>
                                <span className="text-gray-400">Launched:</span>
                                <span className="text-white ml-2">{new Date(service.launchDate).getFullYear()}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Market Position */}
                        {service.marketPosition && (
                          <div className="mb-6 p-3 bg-blue-900/20 border border-blue-500/20 rounded-lg">
                            <p className="text-xs text-blue-300 leading-relaxed">
                              {service.marketPosition}
                            </p>
                          </div>
                        )}

                        {/* ROI Information */}
                        {service.roi && (
                          <div className="mb-6 p-3 bg-green-900/20 border border-green-500/20 rounded-lg">
                            <p className="text-xs text-green-300 leading-relaxed">
                              <strong>ROI:</strong> {service.roi}
                            </p>
                          </div>
                        )}

                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <Link href={service.link || `/services/${service.id}`}>
                            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                              <span className="flex items-center">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </span>
                            </button>
                          </Link>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started with
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Revolutionary Technology?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                    <Phone className="inline-block w-5 h-5 mr-2" />
                    Schedule Consultation
                  </button>
                </Link>
                <a href={`mailto:${contactInfo.email}`}>
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:scale-105">
                    <Mail className="inline-block w-5 h-5 mr-2" />
                    Get Quote
                  </button>
                </a>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>All services are operational and market-tested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Proven ROI and customer success stories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Comprehensive support and implementation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Cutting-edge 2029 technology</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  );
}

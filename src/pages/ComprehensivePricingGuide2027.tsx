import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Lock,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Sparkles,
  Rocket,
  BarChart3,
  MessageSquare,
  Mail,
  Database,
  Network,
  Cloud,
  Smartphone,
  Palette,
  Leaf,
  Code,
  Wallet,
  Box,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Phone,
  Mail as MailIcon,
  MapPin,
  Globe as GlobeIcon
} from 'lucide-react';
import SEO from '../components/SEO';
import { INNOVATIVE_SERVICES_2025, InnovativeService2025 } from '../data/innovativeServices2025';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  const categories = ['All', ...Array.from(new Set(INNOVATIVE_SERVICES_2025.map(service => service.category)))];
  const priceRanges = [
    'All',
    'Under $1,000',
    '$1,000 - $2,999',
    '$3,000 - $4,999',
    '$5,000+'
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Brain className="w-6 h-6" />;
      case 'AI & Security':
        return <Shield className="w-6 h-6" />;
      case 'AI & Marketing':
        return <BarChart3 className="w-6 h-6" />;
      case 'AI & Sales':
        return <TrendingUp className="w-6 h-6" />;
      case 'AI & Customer Experience':
        return <MessageSquare className="w-6 h-6" />;
      case 'AI & Analytics':
        return <Database className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Box className="w-6 h-6" />;
      case 'IoT & Edge Computing':
        return <Network className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Wallet className="w-6 h-6" />;
      case 'Sustainability & Technology':
        return <Leaf className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const getPriceRangeFilter = (range: string) => {
    switch (range) {
      case 'Under $1,000':
        return (service: InnovativeService2025) => service.price < 1000;
      case '$1,000 - $2,999':
        return (service: InnovativeService2025) => service.price >= 1000 && service.price <= 2999;
      case '$3,000 - $4,999':
        return (service: InnovativeService2025) => service.price >= 3000 && service.price <= 4999;
      case '$5,000+':
        return (service: InnovativeService2025) => service.price >= 5000;
      default:
        return () => true;
    }
  };

  const filteredServices = INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPrice = getPriceRangeFilter(selectedPriceRange)(service);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-slate-500';
    }
  };

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const getROIColor = (roi: string) => {
    const roiValue = parseInt(roi.replace('%', ''));
    if (roiValue >= 500) return 'text-green-400';
    if (roiValue >= 300) return 'text-blue-400';
    if (roiValue >= 200) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing guide for our innovative technology services. Compare features, benefits, and pricing for AI, Quantum Computing, IoT, Blockchain, and more."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-400/30 mb-6">
              <DollarSign className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Comprehensive Pricing Guide 2027</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-400">
                & Service Guide
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our comprehensive portfolio of innovative technology services with transparent pricing, 
              detailed features, and ROI projections. Find the perfect solution for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                View All Services
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                Download PDF Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent appearance-none cursor-pointer"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                {/* Service Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-400/30">
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <div className="flex items-center space-x-3">
                          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                            {service.innovationLevel}
                          </span>
                          <span className="text-sm text-gray-400">{service.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">${service.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">per month</div>
                      <div className={`text-sm font-medium ${getROIColor(service.roi)}`}>
                        ROI: {service.roi}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-4">{service.description}</p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-white">{service.estimatedDelivery}</div>
                      <div className="text-xs text-gray-400">Delivery Time</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-white">{service.supportLevel}</div>
                      <div className="text-xs text-gray-400">Support Level</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-white">{service.marketPrice}</div>
                      <div className="text-xs text-gray-400">Market Price</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-white">{service.features.length}</div>
                      <div className="text-xs text-gray-400">Features</div>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleServiceExpansion(service.id)}
                    className="flex items-center justify-center w-full py-3 text-green-400 hover:text-green-300 transition-colors"
                  >
                    {expandedServices.has(service.id) ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        <span>Show Details</span>
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedServices.has(service.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700/50 p-6 bg-slate-700/20"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Features and Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Features & Benefits</h4>
                        
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-200 mb-3">Key Features:</h5>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-200 mb-3">Key Benefits:</h5>
                          <div className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start text-sm text-gray-300">
                                <TrendingUp className="w-4 h-4 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-200 mb-3">Use Cases:</h5>
                          <div className="space-y-2">
                            {service.useCases.map((useCase, idx) => (
                              <div key={idx} className="flex items-start text-sm text-gray-300">
                                <Target className="w-4 h-4 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span>{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Technical Details and Target Audience */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technical Details & Audience</h4>
                        
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-200 mb-3">Target Audience:</h5>
                          <div className="space-y-2">
                            {service.targetAudience.map((audience, idx) => (
                              <div key={idx} className="flex items-start text-sm text-gray-300">
                                <Users className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span>{audience}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {service.technicalSpecs && (
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-200 mb-3">Technology Stack:</h5>
                            <div className="flex flex-wrap gap-2">
                              {service.technicalSpecs.technology.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-xs bg-slate-600/50 text-gray-300 rounded-full border border-slate-500/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.technicalSpecs && (
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-200 mb-3">Integrations:</h5>
                            <div className="flex flex-wrap gap-2">
                              {service.technicalSpecs.integrations.map((integration, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-xs bg-slate-600/50 text-gray-300 rounded-full border border-slate-500/50"
                                >
                                  {integration}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.competitors && (
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-200 mb-3">Competitors:</h5>
                            <div className="flex flex-wrap gap-2">
                              {service.competitors.map((competitor, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded-full border border-red-500/30"
                                >
                                  {competitor}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.marketSize && (
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-200 mb-3">Market Size:</h5>
                            <div className="text-sm text-gray-300 bg-slate-700/30 p-3 rounded-lg">
                              {service.marketSize}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 pt-6 border-t border-slate-700/50">
                      <h5 className="text-sm font-semibold text-gray-200 mb-3">Tags:</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm bg-slate-600/50 text-gray-300 rounded-full border border-slate-500/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-6 pt-6 border-t border-slate-700/50">
                      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <div className="text-sm text-gray-400">
                          <p>Ready to get started? Contact our sales team for a personalized consultation.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                            <span className="flex items-center">
                              Get Started
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </span>
                          </button>
                          <button className="px-6 py-3 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                            Request Demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedPriceRange('All');
                  }}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of technology experts is ready to help you select the perfect solution 
              and provide a customized implementation plan for your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-green-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-400">
                <MailIcon className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-purple-400">
                <GlobeIcon className="w-5 h-5" />
                <span>ziontechgroup.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20"
              >
                Call Sales Team
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
              >
                Email Sales
              </a>
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-green-400 hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;

import React, { useState, useMemo } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Cpu,
  Database,
  Network,
  Layers,
  Brain,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Lock,
  Users,
  BarChart3,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp
 } from 'lucide-react.ts';
import { SEO  } from '../components/SEO';
import { ADVANCED_AI_SERVICES_2025  } from '../data/advancedAIServices2025';
import { INNOVATIVE_IT_INFRASTRUCTURE_2025  } from '../data/innovativeITInfrastructure2025';
import { INNOVATIVE_BLOCKCHAIN_WEB3_SERVICES_2025  } from '../data/innovativeBlockchainWeb3Services2025';

interface Service {

  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
contactInfo: {;
    phone: string;
    email: string;
    website: string;
  
};
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

const ComprehensivePricingGuide2027: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>('all');
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  // Combine all services
  const allServices: Service[] = useMemo(() => {
    return [
      ...ADVANCED_AI_SERVICES_2025,
      ...INNOVATIVE_IT_INFRASTRUCTURE_2025,
      ...INNOVATIVE_BLOCKCHAIN_WEB3_SERVICES_2025
    ];
  }, []);

  // Filter services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price >= min && service.price <= max;
        } else {
          matchesPrice = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort by price
    filtered.sort((a, b) => a.price - b.price);

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange]);

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const priceRanges = [
    'all',
    '0-1000',
    '1000-2500',
    '2500-5000',
    '5000+'
  ];

  const getCategoryIcon = (category: anystring)  => {
    switch (category) {
      case 'AI Security': return <Shield className="w-5 h-5" />;
      case 'AI Finance': return <DollarSign className="w-5 h-5" />;
      case 'AI Healthcare': return <Brain className="w-5 h-5" />;
      case 'AI Operations': return <BarChart3 className="w-5 h-5" />;
      case 'AI Legal': return <Lock className="w-5 h-5" />;
      case 'Cloud Computing': return <Cloud className="w-5 h-5" />;
      case 'Edge Computing': return <Zap className="w-5 h-5" />;
      case 'Quantum Computing': return <Cpu className="w-5 h-5" />;
      case 'Data Center Management': return <Server className="w-5 h-5" />;
      case 'Network Infrastructure': return <Network className="w-5 h-5" />;
      case 'Blockchain & Web3': return <Layers className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getInnovationLevelColor = (level: anystring)  => {
    switch (level) {
      case 'Revolutionary': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Cutting-edge': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Advanced': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default: return 'bg-gradient-to-r from-gray-600 to-slate-600';
    }
  };

  const toggleServiceExpansion = (serviceId: anystring)  => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const getPriceRangeLabel = (range: anystring)  => {
    switch (range) {
      case '0-1000': return '$0 - $1,000/month';
      case '1000-2500': return '$1,000 - $2,500/month';
      case '2500-5000': return '$2,500 - $5,000/month';
      case '5000+': return '$5,000+/month';
      default: return 'All Prices';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for AI, IT infrastructure, and blockchain services. Get detailed pricing, features, and ROI information for all our innovative solutions."
      />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                2027
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transparent pricing for all our cutting-edge AI, IT infrastructure, and blockchain services. 
              Compare features, benefits, and ROI to find the perfect solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-400">
                <Star className="w-5 h-5 mr-2" />
                <span>30+ Services</span>
              </div>
              <div className="flex items-center text-green-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center text-purple-400">
                <Globe className="w-5 h-5 mr-2" />
                <span>ROI Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category  => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-blue-500"
            >
              {priceRanges.map(range  => (
                <option key={range} value={range} className="bg-slate-800 text-white">
                  {getPriceRangeLabel(range)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>
      </div>

      {/* Pricing Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              ${Math.min(...allServices.map(s => s.price)).toLocaleString()}
            </div>
            <div className="text-gray-300">Starting Price</div>
          </div>
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border border-green-500/30 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              ${Math.max(...allServices.map(s => s.price)).toLocaleString()}
            </div>
            <div className="text-gray-300">Premium Price</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {allServices.length}
            </div>
            <div className="text-gray-300">Total Services</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30 text-center">
                          <div className="text-3xl font-bold text-orange-400 mb-2">
                {Math.max(...allServices.map(s => parseInt(s.roi.split('%')[0])))}%
              </div>
            <div className="text-gray-300">Max ROI</div>
          </div>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{service.category}</span>
                        <span>•</span>
                        <span>{service.subcategory}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)}`}>
                          {service.innovationLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">per {service.pricingModel}</div>
                    <div className="text-lg font-bold text-blue-400 mt-2">{service.roi} ROI</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-lg">{service.description}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Delivery</div>
                    <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Support</div>
                    <div className="text-white font-semibold capitalize">{service.supportLevel}</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Market Price</div>
                    <div className="text-white font-semibold">{service.marketPrice}</div>
                  </div>
                  {service.marketSize && (
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-sm text-gray-400 mb-1">Market Size</div>
                      <div className="text-white font-semibold text-sm">{service.marketSize}</div>
                    </div>
                  )}
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleServiceExpansion(service.id)}
                  className="w-full flex items-center justify-center py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white"
                >
                  {expandedServices.has(service.id) ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    <>
                      <span>Show Details</span>
                      <ChevronDown className="w-5 h-5 ml-2" />
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
                  className="border-t border-white/20 p-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Features and Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <TrendingUp className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs and Use Cases */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Use Cases</h4>
                      <div className="space-y-2 mb-6">
                        {service.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <Target className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>

                      {service.technicalSpecs && (
                        <>
                          <h4 className="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                            <div>
                              <span className="text-gray-400">Uptime:</span>
                              <div className="text-white font-semibold">{service.technicalSpecs.uptime}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">API Endpoints:</span>
                              <div className="text-white font-semibold">{service.technicalSpecs.apiEndpoints}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Technologies:</span>
                              <div className="text-white font-semibold text-xs">
                                {service.technicalSpecs.technology.slice(0, 3).join(', ')}
                                {service.technicalSpecs.technology.length > 3 && '...'}
                              </div>
                            </div>
                            <div>
                              <span className="text-gray-400">Security:</span>
                              <div className="text-white font-semibold text-xs">
                                {service.technicalSpecs.security.slice(0, 2).join(', ')}
                                {service.technicalSpecs.security.length > 2 && '...'}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Target Audience and Competitors */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Target Audience</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.targetAudience.map((audience, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>

                      {service.competitors && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Competitors</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.competitors.map((competitor, idx) => (
                              <span key={idx} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                                {competitor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                      <div className="text-gray-300 mb-4 lg:mb-0">
                        <div className="flex items-center mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>364 E Main St STE 1008, Middletown DE 19709</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={service.contactInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                        >
                          Visit Website
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
                        >
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your requirements, get a custom quote, or schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center text-white">
              <MapPin className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center text-white">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-white">
              <Mail className="w-5 h-5 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
            >
              Visit Our Website
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
            >
              Request Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2027;

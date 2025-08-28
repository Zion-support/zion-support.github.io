import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Brain,
  Cpu,
  Database,
  Network,
  Lock,
  Chip,
  Globe as GlobeIcon,
  Zap as ZapIcon
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/enhancedInnovativeMicroSaasServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = ENHANCED_INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🚀' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: '🏥' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐' },
    { id: 'Blockchain', name: 'Blockchain', icon: '🔗' },
    { id: 'AI & Finance', name: 'AI & Finance', icon: '💰' },
    { id: 'Metaverse', name: 'Metaverse', icon: '🌍' },
    { id: 'AI & Content', name: 'AI & Content', icon: '✍️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'Sustainability', name: 'Sustainability', icon: '🌱' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget Friendly', range: 'Under $1,000' },
    { id: 'mid', name: 'Mid Range', range: '$1,000 - $3,000' },
    { id: 'premium', name: 'Premium', range: '$3,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: 'Over $5,000' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const price = service.price;
      switch (selectedPriceRange) {
        case 'budget':
          matchesPrice = price < 1000;
          break;
        case 'mid':
          matchesPrice = price >= 1000 && price < 3000;
          break;
        case 'premium':
          matchesPrice = price >= 3000 && price < 5000;
          break;
        case 'enterprise':
          matchesPrice = price >= 5000;
          break;
      }
    }
    
    return matchesCategory && matchesPrice;
  });

  const getInnovationBadge = (level: string) => {
    const badges = {
      'Revolutionary': { color: 'bg-purple-500 text-white', icon: '🚀' },
      'Cutting-edge': { color: 'bg-blue-500 text-white', icon: '⚡' },
      'Advanced': { color: 'bg-green-500 text-white', icon: '🔥' },
      'Practical': { color: 'bg-orange-500 text-white', icon: '✅' }
    };
    return badges[level] || { color: 'bg-gray-500 text-white', icon: '💡' };
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'AI & Healthcare': '🏥',
      'Quantum Computing': '⚛️',
      'Edge Computing': '🌐',
      'Blockchain': '🔗',
      'AI & Finance': '💰',
      'Metaverse': '🌍',
      'AI & Content': '✍️',
      'Cybersecurity': '🛡️',
      'Sustainability': '🌱'
    };
    return iconMap[category] || '🚀';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Comprehensive Pricing Guide 2025
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Transparent Pricing for
              <span className="block text-zion-cyan">Innovative Solutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            >
              Discover our complete pricing structure for cutting-edge AI, Quantum Computing, Blockchain, and Edge Computing solutions. 
              Every service includes enterprise-grade support and proven ROI.
            </motion.p>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto border border-white/20"
            >
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-zion-cyan" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-blue transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-zion-cyan" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-blue transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-zion-cyan" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-zion-cyan hover:bg-zion-blue text-white font-semibold rounded-lg transition-colors"
                >
                  Visit Our Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Why Our Pricing is Unbeatable</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-slate-light">Average 300-800% return on investment</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">SOC 2, ISO 27001, HIPAA compliant</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">Dedicated support teams worldwide</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">Serving 25+ countries</p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <h3 className="text-lg font-semibold text-white mr-4">Filter by Category:</h3>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4">
              <h3 className="text-lg font-semibold text-white mr-4">Filter by Price:</h3>
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedPriceRange === range.id
                      ? 'bg-zion-cyan text-white shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{getCategoryIcon(service.category)}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-zion-cyan font-medium">{service.category}</p>
                    </div>
                  </div>
                  <p className="text-zion-slate-light text-lg leading-relaxed">{service.description}</p>
                </div>
                <div className="ml-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationBadge(service.innovationLevel).color}`}>
                    <span className="mr-1">{getInnovationBadge(service.innovationLevel).icon}</span>
                    {service.innovationLevel}
                  </div>
                </div>
              </div>

              {/* Pricing and ROI */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Pricing</h4>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">
                    ${service.price.toLocaleString()}
                    <span className="text-lg text-zion-slate-light">/month</span>
                  </div>
                  <p className="text-zion-slate-light text-sm">Market Price: {service.marketPrice}</p>
                  <p className="text-zion-slate-light text-sm">Delivery: {service.estimatedDelivery}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">ROI & Benefits</h4>
                  <div className="text-2xl font-bold text-green-400 mb-2">{service.roi} ROI</div>
                  <p className="text-zion-slate-light text-sm">Support Level: {service.supportLevel}</p>
                  <p className="text-zion-slate-light text-sm">Innovation: {service.innovationLevel}</p>
                </div>
              </div>

              {/* Features and Benefits */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <Check className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-zion-slate-light text-sm">
                        +{service.features.length - 5} more features available
                      </li>
                    )}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 5).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <TrendingUp className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Specs */}
              {service.technicalSpecs && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technical Specifications</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-slate-light">Technology:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {service.technicalSpecs.technology.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Uptime:</span>
                      <p className="text-green-400 font-medium">{service.technicalSpecs.uptime}</p>
                      <span className="text-zion-slate-light">APIs:</span>
                      <p className="text-zion-cyan font-medium">{service.technicalSpecs.apiEndpoints}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Use Cases and Target Audience */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 4).map((useCase, idx) => (
                      <span key={idx} className="px-3 py-1 bg-zion-purple/20 text-zion-purple rounded-full text-sm">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Target Audience</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.targetAudience.slice(0, 4).map((audience, idx) => (
                      <span key={idx} className="px-3 py-1 bg-zion-blue/20 text-zion-blue rounded-full text-sm">
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                  className="w-full bg-zion-cyan hover:bg-zion-blue text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors block text-lg"
                >
                  Get Started - Contact Us
                </a>
                <div className="flex gap-3">
                  <a
                    href="tel:+13024640950"
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you choose the perfect solution for your business needs. 
              Get in touch today for a personalized consultation and pricing quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Consultation"
                className="px-8 py-4 bg-zion-cyan hover:bg-zion-blue text-white font-semibold rounded-lg transition-colors inline-flex items-center text-lg"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors inline-flex items-center text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-zion-slate-light">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2025;
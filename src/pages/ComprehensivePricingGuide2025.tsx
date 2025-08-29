import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Lock, 
  ShieldCheck,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Eye,
  Users,
  BarChart3,
  Globe,
  Shield,
  Cpu,
  Database,
  Network,
  Rocket,
  Brain,
  Zap,
  Lock,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Legal', name: 'AI & Legal', count: allServices.filter(s => s.category === 'AI & Legal').length, icon: '⚖️', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-zion-blue to-zion-cyan' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', count: allServices.filter(s => s.category === 'AI & Manufacturing').length, icon: '🏭', color: 'from-zion-orange to-zion-red' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s => s.category === 'AI & Transportation').length, icon: '🚗', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Digital Twin', name: 'Digital Twin', count: allServices.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-zion-indigo to-zion-purple' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-zion-blue to-zion-cyan' }
  ];

  const filteredServices = allServices.filter(service => {
    return activeCategory === 'all' || service.category === activeCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => a.price - b.price);

  const toggleServiceExpansion = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Practical': return 'text-green-500';
      case 'Advanced': return 'text-blue-500';
      case 'Cutting-edge': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  const getInnovationIcon = (level: string) => {
    switch (level) {
      case 'Practical': return <CheckCircle className="w-4 h-4" />;
      case 'Advanced': return <TrendingUp className="w-4 h-4" />;
      case 'Cutting-edge': return <Rocket className="w-4 h-4" />;
      default: return <Lightbulb className="w-4 h-4" />;
    }
  };

  const getPriceRange = () => {
    const prices = allServices.map(s => s.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return { min, max };
  };

  const priceRange = getPriceRange();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Complete pricing guide for all our innovative micro SAAS services, IT solutions, and AI platforms. Competitive pricing with enterprise-grade support."
        canonical="https://ziontechgroup.com/comprehensive-pricing-2025"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive Pricing Guide
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple">
              Zion Tech Group 2025
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent pricing for all our cutting-edge micro SAAS services, AI-powered solutions, and innovative technology platforms. 
            From entry-level solutions to enterprise-grade platforms, we have options for every business size and budget.
          </motion.p>

          {/* Pricing Overview */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">${priceRange.min.toLocaleString()}</div>
                <div className="text-gray-300 text-sm">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-blue mb-2">${priceRange.max.toLocaleString()}</div>
                <div className="text-gray-300 text-sm">Enterprise Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">{allServices.length}+</div>
                <div className="text-gray-300 text-sm">Services Available</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-zion-cyan mb-2" />
                <span className="text-white font-semibold">+1 302 464 0950</span>
                <span className="text-gray-300 text-sm">Mobile</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-zion-cyan mb-2" />
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
                <span className="text-gray-300 text-sm">Email</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
                <span className="text-white font-semibold">364 E Main St STE 1008</span>
                <span className="text-gray-300 text-sm">Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Pricing Table */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="bg-white/10 px-6 py-4 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Service Pricing Details</h2>
              <p className="text-gray-300 text-sm">Click on any service to view detailed information</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Market Price</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ROI</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Innovation</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sortedServices.map((service, index) => (
                    <motion.tr
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-3">
                            <Brain className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{service.title}</div>
                            <div className="text-xs text-gray-400 line-clamp-2">{service.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-gray-300">
                          {service.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-zion-cyan">${service.price.toLocaleString()}/month</div>
                        <div className="text-xs text-gray-400">{service.pricingModel}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">{service.marketPrice}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/20 text-green-400">
                          {service.roi}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)} bg-white/10`}>
                          {getInnovationIcon(service.innovationLevel)}
                          {service.innovationLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleServiceExpansion(service.id)}
                          className="text-zion-cyan hover:text-zion-blue transition-colors"
                        >
                          {expandedServices.has(service.id) ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Expanded Service Details */}
          <AnimatePresence>
            {sortedServices.map((service) => (
              expandedServices.has(service.id) && (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <TrendingUp className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Delivery Time</h4>
                          <span className="text-white text-sm">{service.estimatedDelivery}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Support Level</h4>
                          <span className="text-white text-sm capitalize">{service.supportLevel}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Use Cases</h4>
                          <div className="flex flex-wrap gap-1">
                            {service.useCases.slice(0, 2).map((useCase, index) => (
                              <span key={index} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded">
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Quote for ${service.title}`}
                          className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 font-medium text-center"
                        >
                          <Mail className="w-5 h-5 inline mr-2" />
                          Get Quote
                        </a>
                        <a
                          href="tel:+13024640950"
                          className="flex-1 bg-white/10 text-white py-3 px-6 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-center border border-white/20"
                        >
                          <Phone className="w-5 h-5 inline mr-2" />
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pricing Tiers & Enterprise Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">$149</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Standard support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Core integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Community forum</span>
                </li>
              </ul>

              <a
                href="mailto:kleber@ziontechgroup.com?subject=Starter Tier Inquiry"
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 font-medium text-center block"
              >
                Get Started
              </a>
            </motion.div>

            {/* Professional Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">$599</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Full integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Training & onboarding</span>
                </li>
              </ul>

              <a
                href="mailto:kleber@ziontechgroup.com?subject=Professional Tier Inquiry"
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 font-medium text-center block"
              >
                Get Started
              </a>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">Custom</div>
                <div className="text-gray-400">tailored pricing</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">All features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">SLA guarantees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Dedicated account manager</span>
                </li>
              </ul>

              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry"
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 font-medium text-center block"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team is ready to help you choose the perfect solution and get you up and running quickly. 
            Contact us today for a free consultation and personalized quote.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Free Consultation Request"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-4 px-8 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 font-medium text-lg"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Request Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="bg-white/10 text-white py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium text-lg border border-white/20"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call +1 302 464 0950
            </a>
          </motion.div>

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">Visit our website for more information</p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-blue transition-colors font-medium"
            >
              ziontechgroup.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

export default function ComprehensivePricingGuide2027() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('AI & Analytics');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['AI & Analytics', 'Blockchain & Web3', 'Quantum Computing', 'Edge Computing & IoT', 'Cybersecurity', 'Sustainable Technology'];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
    return service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return Brain;
      case 'Blockchain & Web3': return Shield;
      case 'Quantum Computing': return Cpu;
      case 'Edge Computing & IoT': return Network;
      case 'Cybersecurity': return Lock;
      case 'Sustainable Technology': return Heart;
      default: return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return 'from-purple-600 to-pink-600';
      case 'Blockchain & Web3': return 'from-blue-600 to-cyan-600';
      case 'Quantum Computing': return 'from-indigo-600 to-purple-600';
      case 'Edge Computing & IoT': return 'from-green-600 to-teal-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Sustainable Technology': return 'from-emerald-600 to-green-600';
      default: return 'from-gray-600 to-blue-600';
    }
  };

  const getCategoryServices = (category: string) => {
    return filteredServices.filter(service => service.category === category);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEO 
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Complete pricing guide for all our innovative micro SAAS services including AI, Blockchain, Quantum Computing, Edge Computing, Cybersecurity, and Sustainable Technology solutions."
        keywords="pricing guide, micro SAAS pricing, AI services pricing, blockchain solutions pricing, quantum computing pricing, cybersecurity pricing, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Comprehensive Pricing Guide 2027
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our cutting-edge micro SAAS services. Find the perfect solution for your business needs and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  View All Services
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search services by name, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {categories.map((category) => {
              const categoryServices = getCategoryServices(category);
              if (categoryServices.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Category Header */}
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleCategory(category)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(category)}`}>
                          {React.createElement(getCategoryIcon(category), { className: 'h-6 w-6 text-white' })}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                          <p className="text-gray-600">{categoryServices.length} services available</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Starting from</div>
                          <div className="text-2xl font-bold text-gray-900">
                            ${Math.min(...categoryServices.map(s => s.price))}
                            <span className="text-sm font-normal text-gray-500">/month</span>
                          </div>
                        </div>
                        {expandedCategory === category ? (
                          <ChevronUp className="h-6 w-6 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Category Services */}
                  {expandedCategory === category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6">
                        <div className="grid gap-6">
                          {categoryServices.map((service, index) => (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200"
                            >
                              <div className="flex flex-col lg:flex-row gap-6">
                                {/* Service Image */}
                                <div className="lg:w-48 h-32 lg:h-48 rounded-lg overflow-hidden flex-shrink-0">
                                  <img
                                    src={service.images[0]}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                {/* Service Details */}
                                <div className="flex-1">
                                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                    <div>
                                      <div className="flex items-center gap-2 mb-2">
                                        {service.badge && (
                                          <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full font-semibold">
                                            {service.badge}
                                          </span>
                                        )}
                                        <div className="flex items-center gap-1">
                                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                          <span className="text-sm font-semibold">{service.rating}</span>
                                          <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
                                        </div>
                                      </div>
                                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                      <p className="text-gray-600 mb-4">{service.description}</p>
                                    </div>

                                    {/* Pricing */}
                                    <div className="lg:text-right">
                                      <div className="text-3xl font-bold text-gray-900">
                                        {service.currency}{service.price}
                                        <span className="text-sm font-normal text-gray-500">/{service.pricingModel}</span>
                                      </div>
                                      <div className="text-sm text-gray-500 mb-2">{service.marketPrice}</div>
                                      <Link
                                        to={service.link}
                                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                                      >
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                      </Link>
                                    </div>
                                  </div>

                                  {/* Features and Benefits */}
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                                      <ul className="space-y-2">
                                        {service.features.slice(0, 4).map((feature, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                                      <ul className="space-y-2">
                                        {service.benefits.slice(0, 4).map((benefit, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <TrendingUp className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{benefit}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>

                                  {/* Tags and Use Cases */}
                                  <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                      {service.tags.map((tag, idx) => (
                                        <span
                                          key={idx}
                                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 mb-2">Use Cases</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {service.useCases.slice(0, 3).map((useCase, idx) => (
                                          <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                          >
                                            {useCase}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Pricing Comparison</h2>
            <p className="text-xl text-gray-600">Compare our most popular services at a glance</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Service</th>
                  <th className="px-6 py-4 text-center font-semibold">Starting Price</th>
                  <th className="px-6 py-4 text-center font-semibold">Market Price</th>
                  <th className="px-6 py-4 text-center font-semibold">Rating</th>
                  <th className="px-6 py-4 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.slice(0, 10).map((service, index) => (
                  <motion.tr
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                          {React.createElement(getCategoryIcon(service.category), { className: 'h-4 w-4 text-white' })}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{service.title}</div>
                          <div className="text-sm text-gray-500">{service.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-xl font-bold text-gray-900">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-gray-500">/{service.pricingModel}</div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">{service.marketPrice}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{service.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team can create tailored solutions that perfectly fit your business requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Request Custom Quote
                  <DollarSign className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Questions About Pricing?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Visit Website</h4>
              <p className="text-gray-600">ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

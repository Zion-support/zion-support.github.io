import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Rocket, 
  Globe, 
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Users,
  Target,
  BarChart3,
  Lock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2025 } from '../data/comprehensiveInnovativeServices2025';
import { EMERGING_TECH_INNOVATION_SERVICES_2025 } from '../data/emergingTechInnovationServices2025';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Combine all services
  const allServices = [...COMPREHENSIVE_INNOVATIVE_SERVICES_2025, ...EMERGING_TECH_INNOVATION_SERVICES_2025];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' },
    { id: 'Healthcare Technology', name: 'Healthcare Technology', count: allServices.filter(s => s.category === 'Healthcare Technology').length, icon: '🏥' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗' },
    { id: 'Space Technology', name: 'Space Technology', count: allServices.filter(s => s.category === 'Space Technology').length, icon: '🚀' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: allServices.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱' }
  ];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const formatPrice = (price: number) => {
    const monthlyPrice = billingCycle === 'yearly' ? price * 0.8 : price; // 20% discount for yearly
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(monthlyPrice);
  };

  const getYearlySavings = (price: number) => {
    return Math.round(price * 0.2);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Pricing Guide 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive pricing guide for innovative micro SAAS services, AI solutions, and cutting-edge technology platforms. Find the perfect solution for your business needs." />
        <meta name="keywords" content="pricing, AI services, micro SAAS, IT solutions, cybersecurity, quantum computing, blockchain, Zion Tech Group" />
        <meta property="og:title" content="Comprehensive Pricing Guide 2025 | Zion Tech Group" />
        <meta property="og:description" content="Find the perfect technology solution with our comprehensive pricing guide. AI, cybersecurity, quantum computing, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-pricing-guide-2025" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-guide-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Comprehensive
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pricing Guide 2025
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Transparent pricing for all our innovative technology solutions. 
              Choose the perfect service for your business needs and budget.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center items-center space-x-4 mb-8"
            >
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-colors"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-green-400">Save 20%</span>
              </span>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-semibold">Phone</span>
                <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-semibold">Email</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-semibold">Address</span>
                <span className="text-cyan-300">
                  364 E Main St STE 1008<br />Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-3 mb-6">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-white mb-2">
                        {formatPrice(service.price)}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-green-400">
                          Save ${getYearlySavings(service.price)}/month with yearly billing
                        </div>
                      )}
                      <div className="text-sm text-gray-400 line-through">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount} reviews)</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 5 && (
                        <li className="text-gray-400 text-sm text-center">
                          +{service.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="mb-8 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Setup Time</span>
                      <span className="text-white text-sm font-medium">{service.setupTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">ROI</span>
                      <span className="text-green-400 text-sm font-semibold">{service.roi}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Uptime</span>
                      <span className="text-white text-sm font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Support</span>
                      <span className="text-white text-sm font-medium">{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={`/contact?service=${service.id}`}
                      className="w-full border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg text-center font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 text-xl mb-4">No services found in this category</div>
                <p className="text-gray-500">Try selecting a different category or view all services</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Comparison
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare our services to find the perfect solution for your business needs
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="overflow-x-auto"
            >
              <table className="w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-6 text-white font-semibold">Service</th>
                    <th className="text-center p-6 text-white font-semibold">Price</th>
                    <th className="text-center p-6 text-white font-semibold">Setup Time</th>
                    <th className="text-center p-6 text-white font-semibold">ROI</th>
                    <th className="text-center p-6 text-white font-semibold">Rating</th>
                    <th className="text-center p-6 text-white font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.slice(0, 10).map((service, index) => (
                    <tr key={service.id} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                      <td className="p-6">
                        <div>
                          <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                          <p className="text-gray-300 text-sm line-clamp-2">{service.description}</p>
                          <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded mt-2">
                            {service.category}
                          </span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-2xl font-bold text-white">{formatPrice(service.price)}</div>
                        <div className="text-sm text-gray-400">/month</div>
                      </td>
                      <td className="p-6 text-center text-white">{service.setupTime}</td>
                      <td className="p-6 text-center">
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{service.rating}</span>
                        </div>
                        <div className="text-xs text-gray-400">({service.reviewCount})</div>
                      </td>
                      <td className="p-6 text-center">
                        <a
                          href={`/contact?service=${service.id}`}
                          className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-semibold hover:bg-cyan-600 transition-colors"
                        >
                          Contact
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Contact our team to discuss your requirements and get a personalized quote 
              for the perfect technology solution
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensivePricingGuide2025;
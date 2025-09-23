import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Star, Users, TrendingUp, 
  Zap, Shield, Brain, Rocket, Globe, 
  Building, Target, Heart, Palette, Truck
} from 'lucide-react';

// Import our comprehensive service data
import { advancedRealMicroSaasExpansion2025 } from '../data/2025-advanced-real-micro-saas-expansion';
import { advancedITInfrastructureExpansion2025 } from '../data/2025-advanced-it-infrastructure-expansion';
import { advancedAIServicesExpansion2025 } from '../data/2025-advanced-ai-services-expansion';
import { emergingTechInnovationsExpansion2025 } from '../data/2025-emerging-tech-innovations-expansion';
import { innovativeBusinessSolutionsExpansion2025 } from '../data/2025-innovative-business-solutions-expansion';

const serviceCategories = [
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions for modern companies',
    services: advancedRealMicroSaasExpansion2025
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Advanced enterprise IT solutions and infrastructure',
    services: advancedITInfrastructureExpansion2025
  },
  {
    id: 'ai-services',
    name: 'AI & Consciousness',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI consciousness and emotional intelligence',
    services: advancedAIServicesExpansion2025
  },
  {
    id: 'emerging-tech',
    name: 'Quantum & Emerging Tech',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies',
    services: emergingTechInnovationsExpansion2025
  },
  {
    id: 'business-solutions',
    name: 'Business Solutions',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Intelligent business process optimization',
    services: innovativeBusinessSolutionsExpansion2025
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic service access',
      'Standard support',
      'Core features',
      'Email support',
      'Basic integrations'
    ],
    popular: false,
    color: 'from-gray-500 to-slate-500'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: [
      'Full service access',
      'Priority support',
      'Advanced features',
      'Phone & email support',
      'Advanced integrations',
      'Custom workflows',
      'Analytics dashboard'
    ],
    popular: true,
    color: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Enterprise',
    price: '$799',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited service access',
      '24/7 dedicated support',
      'Custom development',
      'Dedicated account manager',
      'Full API access',
      'Custom integrations',
      'Advanced security',
      'Compliance features',
      'Training & onboarding'
    ],
    popular: false,
    color: 'from-purple-500 to-pink-500'
  }
];

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allServices = [
    ...advancedRealMicroSaasExpansion2025,
    ...advancedITInfrastructureExpansion2025,
    ...advancedAIServicesExpansion2025,
    ...emergingTechInnovationsExpansion2025,
    ...innovativeBusinessSolutionsExpansion2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Target className="w-5 h-5" /> },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'ai-automation', name: 'AI Automation', icon: <Brain className="w-5 h-5" /> },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <Building className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', icon: <Cpu className="w-5 h-5" /> }
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions."
        keywords={["micro SAAS", "IT services", "AI services", "business intelligence", "automation", "cloud infrastructure"]}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-black/20" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                2025 Innovation Showcase
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                Transform Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Business</span> with Innovation
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Discover our comprehensive portfolio of cutting-edge micro SAAS solutions, advanced IT infrastructure, 
                revolutionary AI services, and breakthrough emerging technologies designed to propel your business into the future.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-blue-500/25"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-blue-500/50 text-blue-300 font-bold text-lg rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
                >
                  <span>Explore Services</span>
                </motion.a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

        {/* Services Grid */}
        <section id="services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedCategory === 'all' ? 'All Services' : serviceCategories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-300 text-lg">
                {selectedCategory === 'all' 
                  ? 'Discover our complete portfolio of innovative solutions'
                  : serviceCategories.find(cat => cat.id === selectedCategory)?.description
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features?.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Stats */}
                  <div className="mb-6 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-300 mb-1">Starting at</h4>
                      <div className="text-2xl font-bold text-white">
                        {service.price}{service.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{service.customers}+ customers</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{service.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3">
                    <motion.a
                      href={service.link}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                    
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-600 text-gray-200 font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                    >
                      <span>Contact Sales</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge AI and machine learning solutions that deliver real business value
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade security and compliance for mission-critical business applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-gray-600">
                Cloud-native solutions that scale globally with enterprise-grade reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative services can help you achieve your business goals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Start Consultation
            </a>
            <a
              href="https://ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" />
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Server, 
  Zap, 
  Shield, 
  Users, 
  Truck, 
  Workflow, 
  MessageSquare, 
  BarChart3, 
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Cpu,
  Lock,
  Monitor,
  Activity,
  Mail,
  Phone,
  ExternalLink,
  DollarSign,
  Award,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  Search,
  MapPin,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { newInnovativeMicroSaasServices } from '../data/innovativeMicroSaasServices2025.ts';
import { newAdvancedAIServices } from '../data/advancedAIServices2025.ts';
import { newInnovativeITInfrastructureServices } from '../data/innovativeITInfrastructure2025.ts';

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, color: 'from-green-500 to-emerald-500' },
    { id: 'it-services', name: 'IT Services', icon: Server, color: 'from-orange-500 to-red-500' }
  ];

  const allServices = [
    ...newInnovativeMicroSaasServices.map(service => ({ ...service, categoryId: 'micro-saas' })),
    ...newAdvancedAIServices.map(service => ({ ...service, categoryId: 'ai-solutions' })),
    ...newInnovativeITInfrastructureServices.map(service => ({ ...service, categoryId: 'it-services' }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.categoryId === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        duration: 0.5
      }
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our competitive pricing for cutting-edge AI, IT, and Micro SaaS services. Get transparent pricing with market comparisons and contact our experts."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2027
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary portfolio of AI-powered solutions, cutting-edge IT services, and innovative Micro SaaS platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center text-cyan-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Competitive Pricing</span>
              </div>
              <div className="flex items-center text-blue-400">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>Market Comparisons</span>
              </div>
              <div className="flex items-center text-green-400">
                <Award className="w-5 h-5 mr-2" />
                <span>Value for Money</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS Solutions</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$199</div>
              <div className="text-gray-400 mb-4">Starting Price / Month</div>
              <p className="text-gray-300">Affordable, scalable solutions for growing businesses</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$1,299</div>
              <div className="text-gray-400 mb-4">Average Price / Month</div>
              <p className="text-gray-300">Enterprise-grade AI solutions with proven ROI</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <div className="text-4xl font-bold text-orange-400 mb-2">$15,000</div>
              <div className="text-gray-400 mb-4">Starting Price / Project</div>
              <p className="text-gray-300">Custom IT infrastructure and transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    <category.icon className="inline-block w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Pricing Information */}
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Our Price</span>
                      <span className="text-2xl font-bold text-cyan-400">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Market Price</span>
                      <span className="text-sm text-green-400 font-medium">
                        {service.marketPrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400">Billing</span>
                      <span className="text-sm text-gray-300 capitalize">
                        per {service.billing}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      Business Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-400">
                          <TrendingUpIcon className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact Information */}
                <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Get Started
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                      <span>{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                      <span>{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-start text-gray-400">
                      <MapPin className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">{service.contactInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">
                No services found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Clear filters and show all services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">Leading-edge AI, quantum computing, and emerging technologies</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation and time-to-value for your business</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-grade security and compliance for all solutions</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of successful implementations and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-600"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 border border-slate-600"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-blue-300 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Address</h4>
                  <p className="text-white text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Add missing Search component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

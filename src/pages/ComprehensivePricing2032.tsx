import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Globe2,
  Shield2,
  Zap2,
  Brain2,
  Cloud2,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';
import { comprehensivePricingGuide2032 } from '../data/comprehensivePricingGuide2032';

export default function ComprehensivePricing2032() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'AI Financial Services', name: 'AI Financial Services', icon: Brain },
    { id: 'AI Supply Chain', name: 'AI Supply Chain', icon: Workflow },
    { id: 'AI Healthcare', name: 'AI Healthcare', icon: Activity },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Cloud },
    { id: 'DevOps & Automation', name: 'DevOps & Automation', icon: Code },
    { id: 'Content Creation', name: 'Content Creation', icon: FileText },
    { id: 'Blockchain & DeFi', name: 'Blockchain & DeFi', icon: Lock }
  ];

  const filteredServices = comprehensivePricingGuide2032
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'price':
          comparison = parseFloat(a.pricingTiers[0].price.replace(/[^0-9.]/g, '')) - 
                     parseFloat(b.pricingTiers[0].price.replace(/[^0-9.]/g, ''));
          break;
        case 'innovation':
          const innovationOrder = { 'Revolutionary': 3, 'Breakthrough': 2, 'Advanced': 1 };
          comparison = (innovationOrder[a.innovationLevel] || 0) - (innovationOrder[b.innovationLevel] || 0);
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                2032
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary AI, IT Infrastructure, and Micro SAAS services. 
              Competitive rates with unmatched value and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-gray-300 text-sm">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800 border border-gray-600 text-gray-300 rounded-lg px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="innovation">Innovation Level</option>
                </select>
              </div>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      service.innovationLevel === 'Revolutionary' 
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : service.innovationLevel === 'Breakthrough'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>Market: {service.marketSize}</span>
                    <span>ROI: {service.roi}</span>
                    <span>Setup: {service.setupTime}</span>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="space-y-4 mb-6">
                  {service.pricingTiers.map((tier, tierIndex) => (
                    <div
                      key={tierIndex}
                      className={`p-4 rounded-lg border ${
                        tier.popular
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-gray-600 bg-gray-700/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{tier.name}</h4>
                        {tier.popular && (
                          <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline space-x-2 mb-3">
                        <span className="text-2xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400 text-sm">/{tier.billing}</span>
                        {tier.savings && (
                          <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                            {tier.savings}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{tier.description}</p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                        {tier.features.slice(0, 6).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="h-3 w-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      {tier.features.length > 6 && (
                        <p className="text-xs text-gray-400">
                          +{tier.features.length - 6} more features
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Market Comparison */}
                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                  <h5 className="text-white font-semibold mb-3">Market Comparison</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Market Average:</span>
                      <span className="text-gray-300">{service.marketComparison.averageMarketPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Our Price:</span>
                      <span className="text-white font-semibold">{service.marketComparison.ourPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Savings:</span>
                      <span className="text-green-400 font-semibold">{service.marketComparison.savings}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">{service.marketComparison.valueProposition}</p>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-400">Free Trial:</span>
                    <span className={`ml-2 ${service.freeTrial ? 'text-green-400' : 'text-red-400'}`}>
                      {service.freeTrial ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Money Back:</span>
                    <span className={`ml-2 ${service.moneyBackGuarantee ? 'text-green-400' : 'text-red-400'}`}>
                      {service.moneyBackGuarantee ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is ready to create a custom solution that fits your specific needs and budget. 
              Get in touch for a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
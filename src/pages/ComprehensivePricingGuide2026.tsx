import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Heart, 
  Scale, 
  Factory, 
  Home, 
  GraduationCap, 
  Zap,
  Building2,
  TrendingUp,
  Globe,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Target,
  Users,
  Clock,
  Zap as Lightning,
  Award,
  TrendingDown,
  Percent
} from 'lucide-react';
import { COMPREHENSIVE_PRICING_GUIDE_2026 } from '../data/comprehensivePricingGuide2026';

const ComprehensivePricingGuide2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-blue-500 to-purple-600' },
    { id: 'AI & Automation', name: 'AI & Automation', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'AI & Finance', name: 'AI & Finance', icon: TrendingUp, color: 'from-green-500 to-blue-600' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-600' },
    { id: 'AI & Legal', name: 'AI & Legal', icon: Scale, color: 'from-yellow-500 to-orange-600' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', icon: Factory, color: 'from-gray-500 to-blue-600' },
    { id: 'AI & Real Estate', name: 'AI & Real Estate', icon: Building2, color: 'from-indigo-500 to-purple-600' },
    { id: 'AI & Education', name: 'AI & Education', icon: GraduationCap, color: 'from-emerald-500 to-teal-600' },
    { id: 'AI & IoT', name: 'AI & IoT', icon: Zap, color: 'from-orange-500 to-red-600' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_PRICING_GUIDE_2026 
    : COMPREHENSIVE_PRICING_GUIDE_2026.filter(service => service.category === selectedCategory);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary AI-powered micro SAAS services. Save up to 80% compared to market rates while getting enterprise-grade solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Up to 80% Savings</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">3 Pricing Tiers</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Enterprise Grade</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
            <p className="text-gray-400 mb-6">Perfect for small businesses and startups looking to get started with AI</p>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Basic AI models
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Standard support
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Core features
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
            <p className="text-gray-400 mb-6">Ideal for growing businesses that need advanced AI capabilities</p>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Advanced AI models
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Priority support
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Premium features
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <p className="text-gray-400 mb-6">For large organizations requiring maximum AI capabilities and support</p>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Custom AI models
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                24/7 dedicated support
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                All features included
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.name}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Category</div>
                    <div className="text-white font-semibold">{service.category}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>

              {/* Pricing Tiers */}
              <div className="space-y-6 mb-8">
                {/* Starter Tier */}
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Starter</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">${service.pricing.starter.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">per {service.pricing.starter.billing}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2">Features:</h5>
                    <ul className="space-y-1">
                      {service.pricing.starter.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-2">Limitations:</h5>
                    <ul className="space-y-1">
                      {service.pricing.starter.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <TrendingDown className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Professional Tier */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold text-white">Professional</h4>
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">${service.pricing.professional.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">per {service.pricing.professional.billing}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2">Features:</h5>
                    <ul className="space-y-1">
                      {service.pricing.professional.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-2">Limitations:</h5>
                    <ul className="space-y-1">
                      {service.pricing.professional.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <TrendingDown className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enterprise Tier */}
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Enterprise</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">${service.pricing.enterprise.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">per {service.pricing.enterprise.billing}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2">Features:</h5>
                    <ul className="space-y-1">
                      {service.pricing.enterprise.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-2">Limitations:</h5>
                    <ul className="space-y-1">
                      {service.pricing.enterprise.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <TrendingDown className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Market Comparison */}
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 mb-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-400" />
                  Market Comparison
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-1">Market Average</div>
                    <div className="text-white font-bold">{service.marketComparison.averageMarketPrice}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-1">Our Price</div>
                    <div className="text-white font-bold">{service.marketComparison.ourPrice}</div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-green-400 font-bold text-lg mb-1">
                    Save {service.marketComparison.savings}
                  </div>
                  <div className="text-gray-400 text-sm">{service.marketComparison.valueProposition}</div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400 font-bold text-sm mb-1">ROI</div>
                  <div className="text-white text-xs">{service.roi}</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-blue-400 font-bold text-sm mb-1">Implementation</div>
                  <div className="text-white text-xs">{service.implementationTime}</div>
                </div>
              </div>

              {/* Support Information */}
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <h4 className="text-white font-semibold mb-3">Support & Implementation</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{service.support}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                {service.ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business and start transforming your operations with AI-powered solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
            <button className="bg-white/10 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              Contact Sales Team
            </button>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our pricing experts are here to help you find the perfect plan for your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-500">Response within 2 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-500">Middletown DE 19709</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensivePricingGuide2026;

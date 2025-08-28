import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  Brain,
  Rocket,
  Lock,
  Heart,
  Network,
  Leaf,
  Eye,
  Scale,
  MessageSquare,
  Settings,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
  Target,
  Award,
  Globe,
  Cpu,
  Database,
  Cloud,
  BarChart3,
  FileText,
  Atom,
  Building2,
  Car,
  Home,
  Factory,
  City
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2025 } from '../data/comprehensivePricingGuide2025';

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('professional');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-cyan-500 to-blue-500' },
    { id: 'AI & Content', name: 'AI & Content', icon: Brain, color: 'from-orange-500 to-red-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Lock, color: 'from-yellow-500 to-orange-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Network, color: 'from-teal-500 to-cyan-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-pink-500 to-red-500' },
    { id: 'FinTech', name: 'FinTech', icon: DollarSign, color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { id: 'Sustainable Technology', name: 'Sustainable Technology', icon: Leaf, color: 'from-green-500 to-teal-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: Scale, color: 'from-blue-500 to-indigo-500' }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? COMPREHENSIVE_PRICING_GUIDE_2025.serviceCategories
    : COMPREHENSIVE_PRICING_GUIDE_2025.serviceCategories.filter(cat => cat.name === selectedCategory);

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    if (category) {
      const IconComponent = category.icon;
      return <IconComponent className="w-6 h-6" />;
    }
    return <Star className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Complete pricing information for all our cutting-edge micro SAAS services, including AI, blockchain, quantum computing, and emerging technology solutions."
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
                Comprehensive Pricing Guide
              </span>
              <br />
              <span className="text-white">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete pricing information for all our cutting-edge micro SAAS services, including AI, blockchain, 
              quantum computing, and emerging technology solutions.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last Updated: {COMPREHENSIVE_PRICING_GUIDE_2025.lastUpdated}</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Version: {COMPREHENSIVE_PRICING_GUIDE_2025.version}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Tiers</h2>
            <p className="text-xl text-gray-300">Choose the plan that best fits your business needs and budget</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2025.pricingTiers).map(([key, tier], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-8 ${
                  key === 'professional' ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-xl text-gray-300">Filter services by category to find the perfect solution for your business</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {getCategoryIcon(category.name)}
                  <h3 className="text-2xl font-bold text-white ml-3">{category.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Market Price</div>
                          <div className="text-white">{service.marketPrice}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">ROI</div>
                          <div className="text-green-400">{service.roi}</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-slate-600 text-gray-300 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Best For:</div>
                        <div className="text-white text-sm">{service.bestFor}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Examples Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">ROI Examples</h2>
            <p className="text-xl text-gray-300">See how our services deliver exceptional returns on investment</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPREHENSIVE_PRICING_GUIDE_2025.roiExamples.map((example, index) => (
              <motion.div
                key={example.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700 rounded-xl p-6 text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-4 line-clamp-2">{example.service}</h4>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400">Investment</div>
                    <div className="text-2xl font-bold text-red-400">{example.investment}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Monthly Savings</div>
                    <div className="text-xl font-bold text-green-400">{example.monthlySavings}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Payback Period</div>
                    <div className="text-lg font-semibold text-cyan-400">{example.paybackPeriod}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400">Annual ROI</div>
                    <div className="text-2xl font-bold text-yellow-400">{example.annualROI}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Factors</h2>
            <p className="text-xl text-gray-300">Understanding what influences the cost of our services</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPREHENSIVE_PRICING_GUIDE_2025.pricingFactors.map((factor, index) => (
              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{factor.factor}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    factor.impact === 'High' ? 'bg-red-500 text-white' :
                    factor.impact === 'Medium' ? 'bg-yellow-500 text-black' :
                    'bg-green-500 text-white'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
                <p className="text-gray-300">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Payment Options</h2>
            <p className="text-xl text-gray-300">Flexible payment plans to suit your business needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPREHENSIVE_PRICING_GUIDE_2025.paymentOptions.map((option, index) => (
              <motion.div
                key={option.option}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{option.option}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <div className="text-sm text-cyan-400 font-medium">{option.bestFor}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Costs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Costs</h2>
            <p className="text-xl text-gray-300">Transparent pricing for all additional services and customizations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPREHENSIVE_PRICING_GUIDE_2025.additionalCosts.map((cost, index) => (
              <motion.div
                key={cost.cost}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{cost.cost}</h3>
                  <div className="text-lg font-bold text-cyan-400">{cost.typicalRange}</div>
                </div>
                <p className="text-gray-300">{cost.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Follow these steps to begin your journey with our innovative micro SAAS services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {COMPREHENSIVE_PRICING_GUIDE_2025.nextSteps.map((step, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-4 text-left">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-white">{step}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-xl text-gray-300">Get in touch to discuss your specific needs and get personalized pricing</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.phone}</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.email}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.address}</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
              <p className="text-gray-300">{COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.businessHours}</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">
              <strong>Emergency Support:</strong> {COMPREHENSIVE_PRICING_GUIDE_2025.contactInfo.emergencySupport}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Contact Us Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
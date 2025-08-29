import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Lock, 
  Globe, 
  Heart, 
  DollarSign,
  Settings,
  Cpu,
  Zap,
  Crown,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Award,
  Target,
  BarChart3
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { innovativeMicroSaasServices2029 } from '@/data/innovativeMicroSaasServices2029';
import { comprehensiveITServices2029 } from '@/data/comprehensiveITServices2029';
import { comprehensiveAIServices2029 } from '@/data/comprehensiveAIServices2029';

export default function ComprehensivePricingGuide2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...innovativeMicroSaasServices2029.map(service => ({ ...service, type: 'Micro SaaS' })),
    ...comprehensiveITServices2029.map(service => ({ ...service, type: 'IT Services' })),
    ...comprehensiveAIServices2029.map(service => ({ ...service, type: 'AI Services' }))
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const price = parseInt(service.price.replace('$', '').replace(',', ''));
      switch (selectedPriceRange) {
        case 'under-500':
          matchesPrice = price < 500;
          break;
        case '500-1000':
          matchesPrice = price >= 500 && price < 1000;
          break;
        case '1000-2000':
          matchesPrice = price >= 1000 && price < 2000;
          break;
        case 'over-2000':
          matchesPrice = price >= 2000;
          break;
      }
    }
    
    return matchesCategory && matchesPrice;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: allServices.length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: ShoppingCart, count: innovativeMicroSaasServices2029.length },
    { id: 'IT Services', name: 'IT Services', icon: Settings, count: comprehensiveITServices2029.length },
    { id: 'AI Services', name: 'AI Services', icon: Brain, count: comprehensiveAIServices2029.length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allServices.length },
    { id: 'under-500', name: 'Under $500', count: allServices.filter(s => parseInt(s.price.replace('$', '').replace(',', '')) < 500).length },
    { id: '500-1000', name: '$500 - $1,000', count: allServices.filter(s => { const p = parseInt(s.price.replace('$', '').replace(',', '')); return p >= 500 && p < 1000; }).length },
    { id: '1000-2000', name: '$1,000 - $2,000', count: allServices.filter(s => { const p = parseInt(s.price.replace('$', '').replace(',', '')); return p >= 1000 && p < 2000; }).length },
    { id: 'over-2000', name: 'Over $2,000', count: allServices.filter(s => parseInt(s.price.replace('$', '').replace(',', '')) >= 2000).length }
  ];

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & ML':
      case 'Machine Learning':
      case 'Natural Language Processing':
      case 'Computer Vision':
      case 'Predictive Analytics':
      case 'Cognitive Computing':
      case 'AI Infrastructure':
      case 'AI Consulting':
      case 'AI Training':
      case 'AI Ethics':
      case 'AI Governance':
      case 'AI Security':
      case 'AI Integration':
      case 'AI Optimization':
      case 'AI Innovation':
        return Brain;
      case 'Cybersecurity':
        return Shield;
      case 'Cloud & DevOps':
        return Cloud;
      case 'IoT':
        return Cpu;
      case 'Blockchain':
        return Lock;
      case 'Sustainability':
        return Globe;
      case 'Healthcare':
        return Heart;
      case 'Finance':
        return DollarSign;
      case 'Legal':
        return BookOpen;
      case 'Business Intelligence':
        return TrendingUp;
      case 'Marketing':
        return Target;
      case 'Productivity':
        return Zap;
      case 'Development':
        return Settings;
      case 'Education':
        return BookOpen;
      default:
        return Star;
    }
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2029 - Zion Tech Group"
        description="Explore our complete pricing guide for AI services, IT solutions, and micro SaaS platforms. Competitive pricing with enterprise-grade quality."
        canonical="/comprehensive-pricing-guide-2029"
        url="https://ziontechgroup.com/comprehensive-pricing-guide-2029"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2029
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for our complete portfolio of AI services, enterprise IT solutions, and innovative micro SaaS platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </Link>
                <Link 
                  to="/comprehensive-services-overview-2029" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 text-center"
              >
                <ShoppingCart className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS Solutions</h3>
                <p className="text-gray-400 mb-6">Starting from $149/month</p>
                <div className="text-3xl font-bold text-green-400 mb-2">10+ Solutions</div>
                <p className="text-gray-400">Ready-to-deploy SaaS platforms</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 text-center"
              >
                <Settings className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-400 mb-6">Starting from $150/hour</p>
                <div className="text-3xl font-bold text-purple-400 mb-2">10+ Services</div>
                <p className="text-gray-400">Enterprise IT solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 text-center"
              >
                <Brain className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
                <p className="text-gray-400 mb-6">Starting from $600/month</p>
                <div className="text-3xl font-bold text-pink-400 mb-2">10+ Platforms</div>
                <p className="text-gray-400">AI-powered solutions</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div className="relative">
                  <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {priceRanges.map(range => (
                      <option key={range.id} value={range.id}>
                        {range.name} ({range.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Pricing Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {filteredServices.length} Services Available
              </h2>
              <p className="text-gray-400">
                Competitive pricing for enterprise-grade solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = getServiceIcon(service.category);
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Service Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
                        <IconComponent className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-green-400 mb-2">{service.price}</div>
                      <div className="text-gray-400 text-sm capitalize">
                        per {service.billing || 'month'}
                      </div>
                      {service.duration && (
                        <div className="text-gray-400 text-sm mt-1">
                          Duration: {service.duration}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-center">Key Features</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span className="line-clamp-2">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 4 && (
                            <div className="text-cyan-400 text-sm text-center">
                              +{service.features.length - 4} more features
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Benefits */}
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-center">Key Benefits</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <Award className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              <span className="line-clamp-2">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Service Details */}
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-cyan-400 font-medium">{service.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Type:</span>
                        <span className="text-purple-400 font-medium">{service.type}</span>
                      </div>
                      {service.teamSize && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Team Size:</span>
                          <span className="text-blue-400 font-medium">{service.teamSize}</span>
                        </div>
                      )}
                      {service.uptime && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Uptime:</span>
                          <span className="text-green-400 font-medium">{service.uptime}</span>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={service.href}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise-grade solutions with competitive pricing and unmatched expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Proven Expertise',
                  description: 'Certified professionals with years of industry experience',
                  color: 'text-yellow-400'
                },
                {
                  icon: Clock,
                  title: 'Fast Delivery',
                  description: 'Quick turnaround times without compromising quality',
                  color: 'text-green-400'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-level security and compliance standards',
                  color: 'text-blue-400'
                },
                {
                  icon: BarChart3,
                  title: 'Measurable Results',
                  description: 'Track ROI and performance improvements',
                  color: 'text-purple-400'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 ${feature.color}`}>
                    <feature.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our team for a personalized consultation and custom pricing quote tailored to your specific needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <Phone className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400">+1 302 464 0950</p>
                  <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM EST</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  <p className="text-gray-500 text-sm">24/7 support available</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  <p className="text-gray-500 text-sm">By appointment only</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  to="/request-quote" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
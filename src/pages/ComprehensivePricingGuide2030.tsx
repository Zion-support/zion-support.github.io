import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Cloud, Star, CheckCircle, Phone, Mail, MapPin, ExternalLink, TrendingUp, Users, Award, Clock, DollarSign, Zap, Target, Search } from 'lucide-react';
import { innovativeAIServices2030 } from '../data/innovativeAIServices2030';
import { innovativeCybersecurityServices2030 } from '../data/innovativeCybersecurityServices2030';
import { innovativeCloudDevOpsServices2030 } from '../data/innovativeCloudDevOpsServices2030';

const ComprehensivePricingGuide2030: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...innovativeAIServices2030,
    ...innovativeCybersecurityServices2030,
    ...innovativeCloudDevOpsServices2030
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: Brain, count: innovativeAIServices2030.length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: innovativeCybersecurityServices2030.length },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: innovativeCloudDevOpsServices2030.length }
  ];

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('ai')) return Brain;
    if (category.toLowerCase().includes('cybersecurity')) return Shield;
    if (category.toLowerCase().includes('cloud')) return Cloud;
    return Star;
  };

  const getPricingTier = (price: number) => {
    if (price < 300) return { tier: 'Starter', color: 'bg-green-600/20 border-green-500/30 text-green-300' };
    if (price < 600) return { tier: 'Professional', color: 'bg-blue-600/20 border-blue-500/30 text-blue-300' };
    if (price < 1000) return { tier: 'Enterprise', color: 'bg-purple-600/20 border-purple-500/30 text-purple-300' };
    return { tier: 'Premium', color: 'bg-orange-600/20 border-orange-500/30 text-orange-300' };
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide 2030
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              Transparent pricing for Zion Tech Group's revolutionary micro SAAS, IT infrastructure, and AI services
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-purple-600/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-300">${Math.min(...allServices.map(s => s.pricing.monthly))}</div>
                <div className="text-purple-200">Starting Price</div>
              </div>
              <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-300">${Math.max(...allServices.map(s => s.pricing.monthly))}</div>
                <div className="text-blue-200">Premium Tier</div>
              </div>
              <div className="bg-green-600/20 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
                <div className="text-3xl font-bold text-green-300">20%</div>
                <div className="text-green-200">Annual Discount</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                    activeCategory === category.id
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Tiers & Plans
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs with our flexible pricing options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { tier: 'Starter', range: '$199 - $299', color: 'bg-green-600/20 border-green-500/30', description: 'Perfect for small businesses and startups' },
              { tier: 'Professional', range: '$399 - $599', color: 'bg-blue-600/20 border-blue-500/30', description: 'Ideal for growing businesses' },
              { tier: 'Enterprise', range: '$699 - $999', color: 'bg-purple-600/20 border-purple-500/30', description: 'For established organizations' },
              { tier: 'Premium', range: '$1,000+', color: 'bg-orange-600/20 border-orange-500/30', description: 'Custom solutions for large enterprises' }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${plan.color} border rounded-xl p-6 text-center`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{plan.tier}</h3>
                <div className="text-2xl font-bold text-white mb-2">{plan.range}</div>
                <p className="text-white/80 text-sm">{plan.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const pricingTier = getPricingTier(service.pricing.monthly);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                        <CategoryIcon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-purple-300 text-sm">{service.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Pricing Section */}
                  <div className="mb-6">
                    <div className={`${pricingTier.color} border rounded-lg p-4 mb-3`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold">{pricingTier.tier} Plan</span>
                        <span className="text-lg font-bold text-white">${service.pricing.monthly}/month</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Annual: ${service.pricing.yearly}</span>
                        <span className="text-green-400">Save 20%</span>
                      </div>
                      <div className="text-xs mt-2">
                        Market price: {service.pricing.marketPrice}
                      </div>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        Benefits
                      </h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 4).map((benefit, idx) => (
                          <div key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-3 h-3" />
                        <span>Target Audience:</span>
                      </div>
                      <div className="text-white">{service.targetAudience[0]}</div>
                    </div>
                    <div className="text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-3 h-3" />
                        <span>Response Time:</span>
                      </div>
                      <div className="text-white">{service.responseTime}</div>
                    </div>
                    <div className="text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Target className="w-3 h-3" />
                        <span>Market Size:</span>
                      </div>
                      <div className="text-white">{service.marketSize}</div>
                    </div>
                    <div className="text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Zap className="w-3 h-3" />
                        <span>Innovation Level:</span>
                      </div>
                      <div className="text-white">{service.innovationLevel}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 5).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </a>
                    <a
                      href={`mailto:${service.contactEmail}?subject=Pricing Inquiry for ${service.title}`}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-3 px-4 rounded-lg transition-colors border border-white/20 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Get Quote
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Our Pricing is Competitive
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We offer transparent, value-driven pricing that gives you the best ROI in the market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "No hidden fees or surprise charges. Clear, upfront pricing for all services."
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "Enterprise-grade solutions at competitive prices. Quality that exceeds expectations."
              },
              {
                icon: Users,
                title: "Scalable Plans",
                description: "Start small and scale up as your business grows. Flexible pricing options."
              },
              {
                icon: Zap,
                title: "Fast ROI",
                description: "Our services deliver measurable results quickly, maximizing your investment."
              },
              {
                icon: Shield,
                title: "Risk-Free Trial",
                description: "Try our services with confidence. Free trials and money-back guarantees."
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock support included in all plans. No additional support fees."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Contact us today for a personalized quote and discover how our innovative services can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Request Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border border-white/20 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call for Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="https://ziontechgroup.com" className="block text-gray-300 hover:text-white transition-colors">
                  Visit Website
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="block text-gray-300 hover:text-white transition-colors">
                  Request Quote
                </a>
                <a href="tel:+13024640950" className="block text-gray-300 hover:text-white transition-colors">
                  Schedule Call
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Service Categories</h3>
              <div className="space-y-2">
                <div className="text-gray-300">AI & Machine Learning</div>
                <div className="text-gray-300">Cybersecurity Solutions</div>
                <div className="text-gray-300">Cloud & DevOps</div>
                <div className="text-gray-300">IT Infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2030;
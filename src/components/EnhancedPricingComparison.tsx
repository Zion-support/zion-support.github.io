import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  DollarSign,
  ArrowRight,
  Info,
  Target,
  Users,
  Clock,
  Globe,
  Award,
  Phone
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES_2025 } from '../data/enhancedInnovativeServices2025';

export function EnhancedPricingComparison() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFeatures, setShowFeatures] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Star className="h-5 w-5" /> },
    { id: 'Quantum AI Services', name: 'Quantum AI', icon: <Brain className="h-5 w-5" /> },
    { id: 'Blockchain & Web3', name: 'Web3', icon: <Zap className="h-5 w-5" /> },
    { id: 'Cybersecurity', name: 'Security', icon: <Shield className="h-5 w-5" /> },
    { id: 'Healthcare Technology', name: 'Health Tech', icon: <Users className="h-5 w-5" /> },
    { id: 'FinTech & RegTech', name: 'FinTech', icon: <DollarSign className="h-5 w-5" /> }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? ENHANCED_INNOVATIVE_SERVICES_2025
    : ENHANCED_INNOVATIVE_SERVICES_2025.filter(service => service.category === selectedCategory);

  const marketAnalysis = {
    totalServices: ENHANCED_INNOVATIVE_SERVICES_2025.length,
    averagePrice: Math.round(ENHANCED_INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.price, 0) / ENHANCED_INNOVATIVE_SERVICES_2025.length),
    averageAiScore: Math.round(ENHANCED_INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.aiScore, 0) / ENHANCED_INNOVATIVE_SERVICES_2025.length),
    totalCategories: new Set(ENHANCED_INNOVATIVE_SERVICES_2025.map(s => s.category)).size,
    featuredServices: ENHANCED_INNOVATIVE_SERVICES_2025.filter(s => s.featured).length
  };

  const getPriceTier = (price: number) => {
    if (price < 200) return { tier: 'Starter', color: 'text-green-400', bg: 'bg-green-500/20' };
    if (price < 500) return { tier: 'Professional', color: 'text-blue-400', bg: 'bg-blue-500/20' };
    if (price < 1000) return { tier: 'Enterprise', color: 'text-purple-400', bg: 'bg-purple-500/20' };
    return { tier: 'Premium', color: 'text-yellow-400', bg: 'bg-yellow-500/20' };
  };

  const getAiScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-blue-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark/80 via-zion-slate/50 to-zion-blue-dark/80">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enhanced Services <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Pricing & Features
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Comprehensive pricing comparison and feature analysis of our cutting-edge innovative services. 
            Find the perfect solution for your business needs with transparent pricing and detailed feature breakdowns.
          </p>

          {/* Market Analysis */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-8">
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-zion-cyan mb-2">{marketAnalysis.totalServices}</div>
              <div className="text-sm text-zion-slate-light">Total Services</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-zion-cyan mb-2">${marketAnalysis.averagePrice}</div>
              <div className="text-sm text-zion-slate-light">Avg. Price</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-zion-cyan mb-2">{marketAnalysis.averageAiScore}</div>
              <div className="text-sm text-zion-slate-light">Avg. AI Score</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-zion-cyan mb-2">{marketAnalysis.totalCategories}</div>
              <div className="text-sm text-zion-slate-light">Categories</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-zion-cyan mb-2">{marketAnalysis.featuredServices}</div>
              <div className="text-sm text-zion-slate-light">Featured</div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 backdrop-blur-sm text-zion-slate-light border border-white/20 hover:bg-white/20 hover:border-white/40'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-6 bg-white/10 border-b border-white/20 text-white font-semibold">
              <div className="col-span-3">Service</div>
              <div className="col-span-2 text-center">Category</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">AI Score</div>
              <div className="col-span-2 text-center">Rating</div>
              <div className="col-span-1 text-center">Actions</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10">
              {filteredServices.map((service, index) => {
                const priceTier = getPriceTier(service.price);
                const aiScoreColor = getAiScoreColor(service.aiScore);
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    className="grid grid-cols-12 gap-4 p-6 hover:bg-white/5 transition-colors duration-300"
                  >
                    {/* Service Name & Description */}
                    <div className="col-span-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg border border-zion-cyan/30 flex items-center justify-center">
                          <span className="text-zion-cyan text-lg">🚀</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold mb-1 line-clamp-2">{service.title}</h3>
                          <p className="text-zion-slate-light text-sm line-clamp-2">{service.description}</p>
                          {service.featured && (
                            <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30 mt-2">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="col-span-2 flex items-center justify-center">
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light rounded-full text-xs font-medium">
                        {service.subcategory}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center">
                      <div className="text-2xl font-bold text-white mb-1">${service.price}</div>
                      <div className="text-sm text-zion-slate-light mb-1">/{service.pricingModel}</div>
                      <span className={`inline-block px-2 py-1 ${priceTier.bg} ${priceTier.color} text-xs rounded-full border border-current/30`}>
                        {priceTier.tier}
                      </span>
                    </div>

                    {/* AI Score */}
                    <div className="col-span-2 text-center">
                      <div className={`text-2xl font-bold ${aiScoreColor} mb-1`}>{service.aiScore}</div>
                      <div className="text-sm text-zion-slate-light mb-2">/100</div>
                      <div className="w-20 bg-zion-slate-dark rounded-full h-2 mx-auto">
                        <div 
                          className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-300"
                          style={{ width: `${service.aiScore}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-zion-slate-light">({service.reviewCount} reviews)</div>
                      <div className="text-xs text-zion-slate-light">{service.location}</div>
                    </div>

                    {/* Actions */}
                    <div className="col-span-1 flex items-center justify-center gap-2">
                      <button
                        onClick={() => setShowFeatures(showFeatures === service.id ? null : service.id)}
                        className="p-2 bg-white/10 hover:bg-white/20 text-zion-slate-light rounded-lg transition-colors duration-300"
                        title="View Features"
                      >
                        <Info className="h-4 w-4" />
                      </button>
                      <Link
                        to={`/services/${service.id}`}
                        className="p-2 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg transition-colors duration-300"
                        title="Learn More"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Expandable Features Section */}
                    <AnimatePresence>
                      {showFeatures === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="col-span-12 bg-white/5 border-t border-white/20 p-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Key Features */}
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Target className="h-4 w-4 text-zion-cyan" />
                                Key Features
                              </h4>
                              <div className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                                    <Check className="h-4 w-4 text-green-400" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Technology Stack */}
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Zap className="h-4 w-4 text-zion-cyan" />
                                Technology Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {service.technologyStack.map((tech, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded border border-zion-cyan/20">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Benefits & ROI */}
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-zion-cyan" />
                                Benefits & ROI
                              </h4>
                              <div className="space-y-2">
                                {service.benefits.slice(0, 3).map((benefit, idx) => (
                                  <div key={idx} className="text-sm text-zion-slate-light">
                                    • {benefit}
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 p-3 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
                                <h5 className="text-zion-cyan font-semibold mb-2">ROI Metrics</h5>
                                <div className="space-y-1">
                                  {service.roiMetrics.map((metric, idx) => (
                                    <div key={idx} className="text-xs text-zion-slate-light">
                                      • {metric}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Contact & CTA */}
                          <div className="mt-6 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-6 text-sm text-zion-slate-light">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {service.availability}
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                {service.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4" />
                                {service.compliance.length} Compliances
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <a
                                href={service.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-zion-slate-light border border-white/20 rounded-lg transition-all duration-300 flex items-center gap-2"
                              >
                                Visit Website
                                <ArrowRight className="h-4 w-4" />
                              </a>
                              <Link
                                to={`/services/${service.id}`}
                                className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                              >
                                Get Started
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Choose Your Service?
            </h3>
            <p className="text-zion-slate-light text-lg mb-6">
              Our team of experts is ready to help you select the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
              >
                <Phone className="h-5 w-5 inline mr-2" />
                Contact Sales Team
              </Link>
              <Link
                to="/enhanced-services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="h-5 w-5 inline ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EnhancedPricingComparison;
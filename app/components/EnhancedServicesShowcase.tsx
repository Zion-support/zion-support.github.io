'use client';
import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, TrendingUp, DollarSign, Clock, Users, Shield, Award } from 'lucide-react';
import { services, getServicesByCategory, getPopularServices, getNewServices } from '../data/services';

const EnhancedServicesShowcase: React.FC = memo(() => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟', count: services.length },
    { id: 'ai', name: 'AI Services', icon: '🤖', count: getServicesByCategory('ai').length },
    { id: 'it', name: 'IT Services', icon: '☁️', count: getServicesByCategory('it').length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: '💻', count: getServicesByCategory('micro-saas').length },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: '⚡', count: getServicesByCategory('emerging-tech').length }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : getServicesByCategory(activeCategory);

  const popularServices = getPopularServices();
  const newServices = getNewServices();

  const formatPrice = (price: number, currency: string, period: string) => {
    if (price === 0) return 'Custom Pricing';
    return `$${price.toLocaleString()}/${period}`;
  };

  return (
    <section className="mb-16" aria-labelledby="services-heading">
      <div className="text-center mb-12">
        <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 neon-flicker-enhanced">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
          Comprehensive AI and IT solutions designed to transform your business operations
        </p>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="cyber-card-enhanced p-4">
            <div className="text-2xl font-bold text-cyan-400">{services.length}+</div>
            <div className="text-sm text-gray-300">Services</div>
          </div>
          <div className="cyber-card-enhanced p-4">
            <div className="text-2xl font-bold text-green-400">60%</div>
            <div className="text-sm text-gray-300">Average Savings</div>
          </div>
          <div className="cyber-card-enhanced p-4">
            <div className="text-2xl font-bold text-purple-400">24/7</div>
            <div className="text-sm text-gray-300">Support</div>
          </div>
          <div className="cyber-card-enhanced p-4">
            <div className="text-2xl font-bold text-pink-400">99.9%</div>
            <div className="text-sm text-gray-300">Uptime</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white cyber-glow-enhanced'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Popular Services */}
      {activeCategory === 'all' && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">
            <Star className="inline w-6 h-6 mr-2 text-yellow-400" />
            Popular Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card-enhanced holographic-card quantum-field p-6 cyber-pulse relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs text-yellow-400 font-medium">Popular</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 neon-flicker-enhanced">
                  {service.name}
                </h4>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-cyan-400">
                      {formatPrice(service.ourPrice, service.pricing.currency, service.pricing.period)}
                    </span>
                    {service.savings > 0 && (
                      <span className="text-sm text-green-400 font-medium">
                        Save {service.savings}%
                      </span>
                    )}
                  </div>
                  {service.marketPrice > 0 && (
                    <div className="text-sm text-gray-500 line-through">
                      Market: {formatPrice(service.marketPrice, service.pricing.currency, service.pricing.period)}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.pricing.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="cyber-button w-full text-center inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Services */}
      {activeCategory === 'all' && newServices.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">
            <Zap className="inline w-6 h-6 mr-2 text-purple-400" />
            New & Emerging
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card-enhanced holographic-card quantum-field p-6 cyber-pulse relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-purple-400 font-medium">New</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 neon-flicker-enhanced">
                  {service.name}
                </h4>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="text-lg font-bold text-purple-400">
                    {formatPrice(service.ourPrice, service.pricing.currency, service.pricing.period)}
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="cyber-button w-full text-center inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative"
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{service.icon}</div>
              <div className="flex items-center space-x-2">
                {service.popular && (
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                )}
                {service.new && (
                  <Zap className="w-4 h-4 text-purple-400" />
                )}
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-3">
              {service.name}
            </h4>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {service.description}
            </p>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-cyan-400">
                  {formatPrice(service.ourPrice, service.pricing.currency, service.pricing.period)}
                </span>
                {service.savings > 0 && (
                  <span className="text-sm text-green-400 font-medium">
                    Save {service.savings}%
                  </span>
                )}
              </div>
              {service.marketPrice > 0 && (
                <div className="text-sm text-gray-500 line-through">
                  Market: {formatPrice(service.marketPrice, service.pricing.currency, service.pricing.period)}
                </div>
              )}
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {service.pricing.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={service.link}
              className="cyber-button w-full text-center inline-flex items-center justify-center"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <div className="cyber-card-enhanced p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6">
            Get a free consultation and discover how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Users className="w-4 h-4 mr-2" />
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Clock className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

EnhancedServicesShowcase.displayName = 'EnhancedServicesShowcase';
export default EnhancedServicesShowcase;

import React, { useState, useMemo } from 'react';
import { services, Service, getServicesByCategory, getPopularServices, getNewServices } from '../data/services';
import { Link } from 'react-router-dom';
import { Star, Zap, TrendingUp, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

interface ServicesShowcaseProps {
  showAll?: boolean;
  category?: Service['category'];
  maxItems?: number;
}

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ 
  showAll = false, 
  category, 
  maxItems = 12 
}) => {
  const [activeCategory, setActiveCategory] = useState<Service['category'] | 'all'>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = useMemo(() => {
    if (category) {
      return getServicesByCategory(category);
    }
    
    if (activeCategory === 'all') {
      return showAll ? services : services.slice(0, maxItems);
    }
    
    return getServicesByCategory(activeCategory);
  }, [activeCategory, category, showAll, maxItems]);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟', count: services.length },
    { id: 'ai', name: 'AI Services', icon: '🤖', count: getServicesByCategory('ai').length },
    { id: 'it', name: 'IT Services', icon: '☁️', count: getServicesByCategory('it').length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: '⚡', count: getServicesByCategory('micro-saas').length },
    { id: 'emerging', name: 'Emerging Tech', icon: '🚀', count: getServicesByCategory('emerging').length },
  ];

  const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div 
      className={`quantum-card p-6 energy-pulse transition-all duration-300 hover:scale-105 group ${
        hoveredService === service.id ? 'cyber-glow' : ''
      }`}
      onMouseEnter={() => setHoveredService(service.id)}
      onMouseLeave={() => setHoveredService(null)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white neon-text group-hover:cyber-glow">
              {service.name}
            </h3>
            {service.isPopular && (
              <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>Popular</span>
              </div>
            )}
            {service.isNew && (
              <div className="flex items-center space-x-1 text-green-400 text-sm">
                <Zap className="w-4 h-4" />
                <span>New</span>
              </div>
            )}
          </div>
        </div>
        <Link
          to={service.link}
          className="text-cyan-400 hover:text-cyan-300 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ExternalLink className="w-5 h-5" />
        </Link>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
        <div className="grid grid-cols-2 gap-1">
          {service.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center space-x-1 text-xs text-gray-400">
              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-cyan-500/20">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-cyan-400 neon-text">
              {service.pricing.currency}{service.pricing.starting}
              {service.pricing.period}
            </div>
            <div className="text-xs text-gray-400">Starting Price</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">Category</div>
            <div className="text-sm font-medium text-purple-400 capitalize">
              {service.category.replace('-', ' ')}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
        <div className="space-y-1">
          {service.benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="text-xs text-gray-300 flex items-center space-x-1">
              <div className="w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        to={service.link}
        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
      >
        Learn More
        <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );

  return (
    <div className="w-full">
      {/* Category Filter */}
      {!category && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Service['category'] | 'all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
                <span className="ml-2 text-xs bg-gray-600 px-2 py-1 rounded-full">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && !category && filteredServices.length >= maxItems && (
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <TrendingUp className="w-5 h-5" />
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}

      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 quantum-card">
          <div className="text-3xl font-bold text-cyan-400 neon-text mb-2">
            {services.length}+
          </div>
          <div className="text-gray-300">Services Available</div>
        </div>
        <div className="text-center p-6 quantum-card">
          <div className="text-3xl font-bold text-purple-400 neon-text mb-2">
            99.9%
          </div>
          <div className="text-gray-300">Uptime Guarantee</div>
        </div>
        <div className="text-center p-6 quantum-card">
          <div className="text-3xl font-bold text-green-400 neon-text mb-2">
            24/7
          </div>
          <div className="text-gray-300">Expert Support</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
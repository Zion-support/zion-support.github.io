import React, { useState } from 'react';
import { COMPREHENSIVE_SERVICES, INNOVATIVE_SERVICES, SERVICE_CATEGORIES } from '../src/data/comprehensiveServicesData';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, BarChart3, Sparkles } from 'lucide-react';

const ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const allServices = [...COMPREHENSIVE_SERVICES, ...INNOVATIVE_SERVICES];
  
  const filteredServices = selectedCategory === 'All' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return <Brain className="w-6 h-6" />;
      case 'IT Infrastructure': return <Cloud className="w-6 h-6" />;
      case 'IT Security': return <Shield className="w-6 h-6" />;
      case 'Marketing Automation': return <BarChart3 className="w-6 h-6" />;
      case 'Productivity': return <Zap className="w-6 h-6" />;
      case 'E-commerce': return <BarChart3 className="w-6 h-6" />;
      case 'Blockchain & Web3': return <Shield className="w-6 h-6" />;
      case 'Internet of Things': return <Zap className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-blue-600">Service Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered solutions to cutting-edge IT services, we provide everything you need to transform your business and stay ahead of the competition.
          </p>
        </div>

        {/* Innovative Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <h3 className="text-3xl font-bold text-gray-900">Revolutionary AI & Innovation Services</h3>
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge solutions that push the boundaries of technology and transform industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INNOVATIVE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-purple-200"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Header */}
                <div className="p-6 border-b border-purple-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Sparkles className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                        <p className="text-sm text-purple-600 font-semibold">{service.innovationLevel}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{service.currency}{service.price}</div>
                      <div className="text-sm text-gray-500">/{service.pricingModel}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                    <div className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">ROI:</h5>
                    <p className="text-sm text-green-600 font-semibold">{service.roi}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Market: {service.marketPrice}</span>
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                </div>

                {/* Service Footer */}
                <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600">
                  <button className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-500">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {service.currency}{service.price}
                    </div>
                    <div className="text-sm text-gray-500">/{service.pricingModel}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-blue-600 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="px-6 pb-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">ROI: {service.roi}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Market Price: {service.marketPrice}</span>
                    <span className="text-green-600 font-medium">{service.innovationLevel}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Overlay */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 text-white p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">Delivery:</div>
                      <div>{service.estimatedDelivery}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Support:</div>
                      <div>{service.supportLevel}</div>
                    </div>
                  </div>
                  <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Started
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let our experts help you choose the perfect solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Service Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
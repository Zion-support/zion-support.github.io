import { Star, CheckCircle, Mail } from 'lucide-react';
'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, ExternalLink, Star, CheckCircle, ArrowRight, Zap, Brain, Cloud, Rocket, TrendingUp, Users, Award, Shield, Clock, DollarSign, Target, BarChart, Sparkles } from 'lucide-react';
import { services, serviceCategories, contactInfo } from '../data/services';

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (pricing: typeof service.pricing) => {
    if (pricing.custom) {
      return 'Custom Pricing';
    }
    return `$${pricing.starting.toLocaleString()}/${pricing.period === 'month' ? 'mo' : pricing.period === 'year' ? 'yr' : 'one-time'}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'micro-saas': return Zap;
      case 'it': return Cloud;
      case 'emerging-tech': return Rocket;
      default: return Target;
    }
  };

  const CategoryIcon = getCategoryIcon(service.category);

  return (
    <div,
className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-500 ${
        isHovered ? 'shadow-2xl' : 'shadow-lg'
      }`}
      onMouseEnter={() =></div> setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(255, 0, 255, 0.15))'
          : 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4"></div>"
        <div className="flex items-center space-x-3"></div>"
          <div className="text-4xl">{service.icon}</div>"
          <div></div>
            <div className="flex items-center space-x-2"></div>"
              <CategoryIcon className="w-5 h-5 text-cyan-400" />"
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide"></span>"
                {serviceCategories.find(cat => cat.id === service.category)?.name}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1 neon-text"></h3>"
              {service.name}
            </h3>
          </div>
        </div>
        <div className="flex space-x-2"></div>"
          {service.popular && (
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center"></span>"
              <Star className="w-3 h-3 mr-1" />"
              Popular
            </span>
          )}
          {service.new && (
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center"></span>"
              <Sparkles className="w-3 h-3 mr-1" />"
              New
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed"></p>"
        {service.description}
      </p>

      {/* Key Features */}
      <div className="mb-4"></div>"
        <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center"></h4>"
          <CheckCircle className="w-4 h-4 mr-2" />"
          Key Features
        </h4>
        <ul className="space-y-1"></ul>"
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-300 flex items-center"></li>"
              <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" /></div>"
              {feature}
            </li>
          ))}
          {service.features.length > 3 && (
            <li className="text-xs text-cyan-400"></li>"
              +{service.features.length - 3} more features
            </li>
          )}
        </ul>
      </div>

      {/* Benefits */}
      <div className="mb-4"></div>"
        <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center"></h4>"
          <TrendingUp className="w-4 h-4 mr-2" />"
          Key Benefits
        </h4>
        <div className="grid grid-cols-2 gap-2"></div>"
          {service.benefits.slice(0, 2).map((benefit, idx) => (
            <div key={idx} className="text-xs text-gray-300 bg-slate-800/50 rounded px-2 py-1"></div>"
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-4 p-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg"></div>"
        <div className="flex items-center justify-between"></div>"
          <div></div>
            <div className="text-lg font-bold text-white"></div>"
              {formatPrice(service.pricing)}
            </div>
            {service.marketPrice && (
              <div className="text-xs text-gray-400"></div>"
                Market: ${service.marketPrice.min}-${service.marketPrice.max}
              </div>
            )}
          </div>
          <div className="text-right"></div>"
            <div className="text-xs text-cyan-400 font-medium">Starting Price</div>"
            <div className="text-xs text-gray-400">per {service.pricing.period}</div>"
          </div>
        </div>
      </div>

      {/* Contact Actions */}
      <div className="space-y-2"></div>"
        <a,
href={`tel:${contactInfo.phone}`}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group""
        ></a>
          <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />"
          Call Now
        </a>
        <div className="grid grid-cols-2 gap-2"></div>"
          <a,
href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group""
          ></a>
            <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />"
            Email
          </a>
          <a,
href={service.contact.demo}
            target="_blank""
            rel="noopener noreferrer""
            className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group""
          ></a>
            <ExternalLink className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />"
            Demo
          </a>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mt-4 pt-4 border-t border-slate-700"></div>"
        <h4 className="text-xs font-semibold text-gray-400 mb-2">Perfect For:</h4>"
        <div className="flex flex-wrap gap-1"></div>"
          {service.useCases.slice(0, 2).map((useCase, idx) => (
            <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded"></span>"
              {useCase}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  const popularServices = services.filter(service => service.popular);
  const newServices = services.filter(service => service.new);

  return (
    <section className="py-16 px-4"></section>"
      <div className="container mx-auto"></div>"
        {/* Header */}
        <div className="text-center mb-12"></div>"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text"></h2>"
            Our Services
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
            Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business operations
          </p>
          
          {/* Contact Info Banner */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card"></div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"></div>"
              <div className="flex items-center justify-center space-x-2"></div>"
                <Phone className="w-5 h-5 text-cyan-400" />"
                <div></div>
                  <div className="text-white font-medium">{contactInfo.phone}</div>"
                  <div className="text-gray-400 text-sm">Call us anytime</div>"
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2"></div>"
                <Mail className="w-5 h-5 text-cyan-400" />"
                <div></div>
                  <div className="text-white font-medium">{contactInfo.email}</div>"
                  <div className="text-gray-400 text-sm">Email us</div>"
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2"></div>"
                <ExternalLink className="w-5 h-5 text-cyan-400" />"
                <div></div>
                  <div className="text-white font-medium">{contactInfo.website}</div>"
                  <div className="text-gray-400 text-sm">Visit our site</div>"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12"></div>"
          <button,
onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => (
            <button,
key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <span className="text-lg">{category.icon}</span>"
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"></div>"
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Popular Services Section */}
        {selectedCategory === 'all' && (
          <div className="mb-12"></div>"
            <h3 className="text-2xl font-bold text-white mb-6 text-center neon-text"></h3>"
              Most Popular Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>"
              {popularServices.map((service, index) => (
                <div key={service.id} className="cyber-card p-4 hover:scale-105 transition-all duration-300"></div>"
                  <div className="text-3xl mb-3 text-center">{service.icon}</div>"
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">{service.name}</h4>"
                  <p className="text-sm text-gray-300 mb-3 text-center">{service.description}</p>"
                  <div className="text-center"></div>"
                    <div className="text-lg font-bold text-cyan-400 mb-2"></div>"
                      ${service.pricing.starting.toLocaleString()}/{service.pricing.period === 'month' ? 'mo' : 'yr'}
                    </div>
                    <a,
href={`tel:${contactInfo.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors""
                    ></a>
                      Call Now →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card"></div>"
          <h3 className="text-2xl font-bold text-white mb-4 neon-text"></h3>"
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>"
            Get a free consultation and discover how our AI and IT solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <a,
href={`tel:${contactInfo.phone}`}
              className="cyber-button inline-flex items-center justify-center px-8 py-3""
            ></a>
              <Phone className="w-5 h-5 mr-2" />"
              Call {contactInfo.phone}
            </a>
            <a,
href={`mailto:${contactInfo.email}?subject=Free Consultation Request`}
              className="cyber-button inline-flex items-center justify-center px-8 py-3""
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            ></a>
              <Mail className="w-5 h-5 mr-2" />"
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;
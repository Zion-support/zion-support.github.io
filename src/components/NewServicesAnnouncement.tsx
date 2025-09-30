import React from 'react';

interface NewServicesAnnouncementProps {
  className?: string;
  variant?: 'hero' | 'banner' | 'compact';
  showPricing?: boolean;
}

const NewServicesAnnouncement: React.FC<NewServicesAnnouncementProps> = ({ 
  className = '', 
  variant = 'banner',
  showPricing = true 
}) => {
  const featuredServices = newServices.filter(service => service.featured);

  if (variant === 'hero') {
    return (
      <section className={`py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white text-sm font-medium mb-8 border border-green-400/30">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              🚀 NEW SERVICES LAUNCH - January 2025
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionary New Services
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Transform your business with our latest AI-powered solutions: Autonomous Operations, 
              Quantum Optimization, AI Cybersecurity, and Edge AI Platform. Built for the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex gap-1">
                    {service.newBadge && (
                      <span className="bg-green-500 text-black text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                        NEW
                      </span>
                    )}
                    {service.pricing.popular && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        POPULAR
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-100 mb-4 text-sm line-clamp-3">{service.description}</p>
                
                {showPricing && (
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-400">{service.pricing.starting}</div>
                    {service.pricing.discount && (
                      <div className="text-sm text-green-300">{service.pricing.discount}</div>
                    )}
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-blue-100 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  {service.metrics.slice(0, 3).map((metric, index) => (
                    <div key={index} className="bg-white/10 rounded p-2">
                      <div className="text-lg font-bold text-green-400">{metric.value}</div>
                      <div className="text-xs text-blue-200">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Link 
                    to={`/services/${service.id}`}
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors"
                  >
                    {service.cta.primary}
                  </Link>
                  <Link 
                    to={`/services/${service.id}`}
                    className="px-4 py-2 border border-white/30 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                  >
                    {service.cta.secondary}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-green-50 to-blue-50 border border-green-200/50 rounded-xl p-6 ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-green-500 animate-pulse" />
          <span className="text-lg font-bold text-green-700">🚀 NEW SERVICES LAUNCH</span>
          <Sparkles className="w-5 h-5 text-green-500 animate-pulse" />
        </div>
        <p className="text-gray-700 font-semibold mb-4">
          🤖 Introducing AI Autonomous Operations, Quantum Optimization Engine, AI Cybersecurity Suite, and Edge AI Platform
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featuredServices.slice(0, 4).map((service) => (
            <div key={service.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className="text-2xl">{service.icon}</div>
                <div className="flex gap-1">
                  {service.newBadge && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                      NEW
                    </span>
                  )}
                  {service.pricing.popular && (
                    <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-medium">
                      POPULAR
                    </span>
                  )}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
              {showPricing && (
                <div className="mb-3">
                  <div className="text-lg font-bold text-green-600">{service.pricing.starting}</div>
                  {service.pricing.discount && (
                    <div className="text-sm text-green-600">{service.pricing.discount}</div>
                  )}
                </div>
              )}
              <Link 
                to={`/services/${service.id}`}
                className="text-green-600 hover:text-green-800 font-medium text-sm inline-flex items-center gap-1"
              >
                {service.cta.primary}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/services" 
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            Explore All New Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 text-white text-sm font-medium mb-8 border border-white/30">
            <Sparkles className="w-4 h-4 mr-2" />
            New Services Launch - January 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Revolutionary New AI Services
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions designed for the future. 
            From autonomous operations to quantum computing, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredServices.slice(0, 4).map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{service.icon}</div>
                <div className="flex gap-1">
                  {service.newBadge && (
                    <span className="bg-green-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                  {service.pricing.popular && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      POPULAR
                    </span>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-green-100 mb-4 text-sm line-clamp-3">{service.description}</p>
              
              {showPricing && (
                <div className="mb-4">
                  <div className="text-2xl font-bold text-green-400">{service.pricing.starting}</div>
                  {service.pricing.discount && (
                    <div className="text-sm text-green-300">{service.pricing.discount}</div>
                  )}
                </div>
              )}

              <div className="space-y-2 mb-4">
                {service.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-center text-green-100 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                    <span className="line-clamp-1">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-center">
                {service.metrics.slice(0, 2).map((metric, index) => (
                  <div key={index} className="bg-white/10 rounded p-2">
                    <div className="text-lg font-bold text-green-400">{metric.value}</div>
                    <div className="text-xs text-green-200">{metric.label}</div>
                  </div>
                ))}
              </div>

              <Link 
                to={`/services/${service.id}`}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                {service.cta.primary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join 500+ companies already using our AI solutions. Get started with a free consultation 
              and see how our services can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <Zap className="w-5 h-5" />
                Explore All Services
              </Link>
              <Link 
                to="/contact" 
                className="border border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <Award className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServicesAnnouncement;
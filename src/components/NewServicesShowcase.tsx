import React from 'react';
import { ArrowRight, CheckCircle, Star, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newServices } from '../content/new-services';

const NewServicesShowcase: React.FC = () => {
  const featuredServices = newServices.filter(service => service.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 text-sm font-medium mb-8 border border-green-400/30">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            🚀 NEW SERVICES AVAILABLE
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Solutions
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Now Available
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our latest AI-powered services that are transforming industries worldwide. 
            From autonomous operations to quantum computing, we're pushing the boundaries of what's possible.
          </p>

          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-green-400 animate-pulse" />
              <span className="text-lg font-bold text-green-400">🔥 LIMITED TIME OFFER</span>
              <Zap className="w-6 h-6 text-green-400 animate-pulse" />
            </div>
            <p className="text-white text-lg font-semibold mb-2">
              Get 50% OFF Your First 3 Months + FREE AI Strategy Consultation
            </p>
            <p className="text-gray-300 text-sm">
              Valid until March 31, 2025 • No setup fees • Cancel anytime
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-blue-300">{service.category}</div>
                    {service.newBadge && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        NEW
                      </span>
                    )}
                  </div>
                </div>
                {service.pricing.popular && (
                  <div className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    POPULAR
                  </div>
                )}
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-400">${service.pricing.starting}</span>
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                {service.pricing.discount && (
                  <div className="text-sm text-green-400 font-medium">{service.pricing.discount}</div>
                )}
              </div>

              {/* Key Benefits */}
              <div className="space-y-2 mb-6">
                {service.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {service.metrics.slice(0, 3).map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <Link
                  to={`/services/${service.id}`}
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {service.cta.primary}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ companies already using our AI solutions to drive growth, reduce costs, and achieve unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">5★</div>
              <div className="text-sm text-gray-400">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServicesShowcase;
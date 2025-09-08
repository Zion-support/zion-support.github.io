import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Star, TrendingUp, Shield, Zap, Brain, Cloud, Lock, Users, Globe, Award, Phone, Mail, MapPin } from 'lucide-react';
import { zionInnovativeServices2025 } from '../data/zion-2025-innovative-services';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const categories = ['all', ...new Set(zionInnovativeServices2025.map(service => service.category))];

  const filteredServices = zionInnovativeServices2025
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
        case 'popularity':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="w-5 h-5" />;
      case 'Quantum': return <Zap className="w-5 h-5" />;
      case 'Security': return <Shield className="w-5 h-5" />;
      case 'GreenTech': return <Globe className="w-5 h-5" />;
      case 'Automation': return <TrendingUp className="w-5 h-5" />;
      case 'Fintech': return <Award className="w-5 h-5" />;
      case 'Healthcare': return <Users className="w-5 h-5" />;
      case 'IoT': return <Cloud className="w-5 h-5" />;
      case 'Blockchain': return <Lock className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transparent Pricing for Innovative Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Competitive pricing for cutting-edge AI, IT, and micro SaaS services. 
              All prices include full support, updates, and enterprise-grade features.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4 text-blue-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                <span>Continuous Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Price Comparison */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Price Comparison</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our pricing is competitive with industry leaders while providing superior value and features. 
              Compare with similar solutions in the market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>OpenAI API</span>
                  <span className="text-gray-600">$0.002-0.12/1K tokens</span>
                </div>
                <div className="flex justify-between">
                  <span>Anthropic Claude</span>
                  <span className="text-gray-600">$0.008-0.24/1K tokens</span>
                </div>
                <div className="flex justify-between">
                  <span>Google Vertex AI</span>
                  <span className="text-gray-600">$0.10-2.00/hour</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  *Our AI services include full platform access, not just API calls
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud & DevOps</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>AWS EC2</span>
                  <span className="text-gray-600">$0.01-3.20/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Azure DevOps</span>
                  <span className="text-gray-600">$6-52/user/month</span>
                </div>
                <div className="flex justify-between">
                  <span>GitLab Premium</span>
                  <span className="text-gray-600">$19/user/month</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  *Our DevOps platform includes AI automation and monitoring
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security & Compliance</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cloudflare Zero Trust</span>
                  <span className="text-gray-600">$7-25/user/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Okta Identity</span>
                  <span className="text-gray-600">$2-8/user/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Snyk Security</span>
                  <span className="text-gray-600">$25-500/month</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  *Our security includes quantum-resistant encryption
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Sort Controls */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="price">Price: Low to High</option>
                <option value="popularity">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredServices.length} services
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                {/* Service Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex gap-2">
                      {service.isPopular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      {service.isNew && (
                        <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.tagline}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{service.marketPrice}</p>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    {getCategoryIcon(service.category)}
                    <span className="capitalize">{service.category}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-semibold text-blue-600">{service.customers}+</div>
                      <div className="text-xs text-gray-500">Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-green-600">{service.rating}/5</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-purple-600">{service.reviews}</div>
                      <div className="text-xs text-gray-500">Reviews</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link
                      href={service.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact our team to discuss your specific needs and get a customized quote. 
              We offer flexible pricing and implementation options for all business sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in the pricing?</h3>
              <p className="text-gray-600">
                All our service plans include full platform access, 24/7 support, regular updates, 
                security patches, and comprehensive documentation. Enterprise plans also include 
                dedicated account management and custom integrations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-600">
                Yes, we offer custom pricing for enterprise customers with specific requirements. 
                Contact our sales team to discuss your needs and get a personalized quote.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I switch between plans?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect 
                immediately, and we'll prorate any billing adjustments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a free trial available?</h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for all our services. No credit card required, 
                and you can cancel at any time during the trial period.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'productivity' | 'analytics' | 'automation'>('all');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: '🚀', count: servicesData.microSaas.length },
    { id: 'ai', name: 'AI-Powered', icon: '🤖', count: servicesData.microSaas.filter(s => s.title.includes('AI')).length },
    { id: 'productivity', name: 'Productivity', icon: '⚡', count: servicesData.microSaas.filter(s => s.title.includes('Task') || s.title.includes('Workflow')).length },
    { id: 'analytics', name: 'Analytics', icon: '📊', count: servicesData.microSaas.filter(s => s.title.includes('Analytics') || s.title.includes('Predictor')).length },
    { id: 'automation', name: 'Automation', icon: '🔧', count: servicesData.microSaas.filter(s => s.title.includes('Automator') || s.title.includes('Optimizer')).length }
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') return servicesData.microSaas;
    
    return servicesData.microSaas.filter(service => {
      switch (selectedCategory) {
        case 'ai':
          return service.title.includes('AI');
        case 'productivity':
          return service.title.includes('Task') || service.title.includes('Workflow');
        case 'analytics':
          return service.title.includes('Analytics') || service.title.includes('Predictor');
        case 'automation':
          return service.title.includes('Automator') || service.title.includes('Optimizer');
        default:
          return true;
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, productivity apps, analytics platforms, and automation solutions." />
        <meta name="keywords" content="micro saas, saas solutions, ai tools, productivity software, business automation, analytics platforms" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                Micro <span className="gradient-text">SaaS Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Powerful, focused software solutions designed to solve specific business challenges. 
                From AI-powered tools to productivity platforms, we build micro SaaS that delivers maximum value.
              </p>
              
              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as any)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                      {category.count}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().map((service, index) => (
                <div
                  key={service.id}
                  className="group relative glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  {/* Service Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-gray-500">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold gradient-text">
                        ${service.pricing.basic.toLocaleString()}
                      </span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Market Price: {service.marketPrice}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide">
                      Benefits
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                    </Link>
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <span>📞</span>
                        <a href={`tel:${service.contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                          {service.contactInfo.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <span>✉️</span>
                        <a href={`mailto:${service.contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                          {service.contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Micro SaaS Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We specialize in creating focused, powerful solutions that solve specific business problems with maximum efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Focused Solutions</h3>
                <p className="text-gray-300">
                  Each micro SaaS is designed to solve one specific problem exceptionally well, rather than trying to do everything.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300">
                  Get up and running quickly with our pre-built solutions that can be customized to your specific needs.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
                <p className="text-gray-300">
                  Pay only for what you need with our flexible pricing models and no unnecessary features or bloat.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🔧</div>
                <h3 className="text-2xl font-bold text-white mb-4">Easy Integration</h3>
                <p className="text-gray-300">
                  Seamlessly integrate with your existing systems through our comprehensive APIs and webhooks.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">📈</div>
                <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
                <p className="text-gray-300">
                  Built to grow with your business, from startup to enterprise scale with automatic scaling capabilities.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security with encryption, compliance, and regular security audits to protect your data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our micro SaaS solutions can solve your specific business challenges. 
                Contact us today for a free consultation and custom demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;
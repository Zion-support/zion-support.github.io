import React from 'react';
import { Helmet } from 'react-helmet-async';
import { microSAASServices } from '../data/servicesData';
import { contactInfo } from '../data/contactData';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Specialized micro SaaS solutions for specific business needs. AI-powered tools for content moderation, sales prediction, workflow automation, and more. Starting at $29/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, content moderation, sales prediction, workflow automation, financial forecasting" />
        <link rel="canonical" href={`${contactInfo.domain}/micro-saas-solutions`} />
      </Helmet>
      
      <div className="min-h-screen bg-dark-bg">
        {/* Hero Section */}
        <div className="relative py-20 bg-matrix">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              <span className="text-neon-blue">Micro SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Specialized AI-powered software solutions for specific business needs. Ready-to-use tools that can transform your operations in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="neon-button text-lg px-8 py-3 rounded-lg">
                Get Started
              </a>
              <a href={`tel:${contactInfo.mobile}`} className="glass-morphism text-white px-8 py-3 rounded-lg hover:bg-opacity-20 transition-all duration-300 text-lg">
                Call {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>

        {/* What is Micro SaaS */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  What is <span className="text-neon-blue">Micro SaaS</span>?
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Micro SaaS solutions are specialized software applications designed to solve specific business problems. 
                  Unlike traditional enterprise software, micro SaaS tools are focused, lightweight, and often AI-powered 
                  to deliver immediate value with minimal setup.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <div>
                      <h3 className="text-white font-semibold">Focused Solutions</h3>
                      <p className="text-gray-400 text-sm">Solve one specific problem exceptionally well</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <div>
                      <h3 className="text-white font-semibold">Quick Implementation</h3>
                      <p className="text-gray-400 text-sm">Deploy in minutes, not months</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <div>
                      <h3 className="text-white font-semibold">AI-Powered</h3>
                      <p className="text-gray-400 text-sm">Leverage artificial intelligence for better results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-neon-green text-xl">✓</span>
                    <div>
                      <h3 className="text-white font-semibold">Cost-Effective</h3>
                      <p className="text-gray-400 text-sm">Affordable pricing starting at $29/month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-blue border-opacity-30">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Micro SaaS?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-blue bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-neon-blue font-bold">1</span>
                    </div>
                    <span className="text-white">99.2% accuracy in AI predictions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-purple bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-neon-purple font-bold">2</span>
                    </div>
                    <span className="text-white">40% average cost reduction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-pink bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-neon-pink font-bold">3</span>
                    </div>
                    <span className="text-white">24/7 automated monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-green bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-neon-green font-bold">4</span>
                    </div>
                    <span className="text-white">Enterprise-grade security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Micro SaaS Solutions */}
        <div className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-neon-blue">Micro SaaS</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered tools designed to solve specific business challenges with precision and efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={service.id} className="card-hover bg-dark-surface-light p-6 rounded-xl border border-neon-blue border-opacity-30">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.isPopular && (
                        <span className="bg-neon-blue text-dark-bg px-2 py-1 rounded text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <span className="text-neon-green mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <span className="text-neon-green mr-2">✓</span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-neon-blue font-semibold">
                      From ${service.pricing.basic}/month
                    </div>
                    <div className="text-gray-400 text-xs">
                      {service.technologies.slice(0, 3).join(', ')}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a 
                      href={service.link} 
                      className="flex-1 bg-neon-blue text-dark-bg py-2 px-4 rounded-lg font-semibold text-center text-sm hover:bg-opacity-90 transition-colors"
                    >
                      Try Now
                    </a>
                    <a 
                      href="/contact" 
                      className="flex-1 border border-neon-blue text-neon-blue py-2 px-4 rounded-lg font-semibold text-center text-sm hover:bg-neon-blue hover:text-dark-bg transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-purple">Use Cases</span> & Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS solutions are trusted by businesses across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">E-commerce</h3>
                <p className="text-gray-300 text-sm">
                  Content moderation, inventory optimization, and customer churn prediction for online stores
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-purple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SaaS Companies</h3>
                <p className="text-gray-300 text-sm">
                  Customer success monitoring, sales prediction, and workflow automation for software companies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-pink bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300 text-sm">
                  Financial forecasting, document analysis, and risk assessment for financial institutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Social Media</h3>
                <p className="text-gray-300 text-sm">
                  Content moderation, sentiment tracking, and social media scheduling for platforms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-green">Simple</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-surface-light p-8 rounded-xl border border-gray-600">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-neon-blue mb-6">
                  $29<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Up to 1,000 API calls/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Basic analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Standard integrations
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-blue text-dark-bg py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
              
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-purple relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-neon-purple text-dark-bg px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold text-neon-purple mb-6">
                  $99<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Up to 10,000 API calls/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Team collaboration
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-purple text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
              
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-pink">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-neon-pink mb-6">
                  $299<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Unlimited API calls
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Full analytics suite
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Custom development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    White-label options
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-pink text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-accent">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Start using our micro SaaS solutions today and see the difference AI can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-dark-bg px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-lg"
              >
                Get Started Today
              </a>
              <a 
                href={`tel:${contactInfo.mobile}`} 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-bg transition-all duration-300 text-lg"
              >
                Call {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;
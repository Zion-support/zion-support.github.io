import React from 'react';
import { Helmet } from 'react-helmet-async';
import { itServices } from '../data/servicesData';
import { contactInfo } from '../data/contactData';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Cloud Infrastructure, Cybersecurity & More</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, web development, and database solutions. Enterprise-grade IT support starting at $999/month." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, web development, database management, IT consulting" />
        <link rel="canonical" href={`${contactInfo.domain}/it-services`} />
      </Helmet>
      
      <div className="min-h-screen bg-dark-bg">
        {/* Hero Section */}
        <div className="relative py-20 bg-matrix">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              <span className="text-neon-purple">IT Services</span> & Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions including cloud infrastructure, cybersecurity, and network management for enterprise-grade performance and security.
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

        {/* Why Choose Our IT Services */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Choose Our <span className="text-neon-purple">IT Services</span>?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  With over a decade of experience in enterprise IT solutions, we provide comprehensive 
                  technology services that keep your business running smoothly, securely, and efficiently.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-purple bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-purple text-xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Enterprise Security</h3>
                      <p className="text-gray-300">Bank-level security with SOC 2 compliance, 24/7 monitoring, and advanced threat protection.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-blue bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-blue text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">99.9% Uptime</h3>
                      <p className="text-gray-300">Guaranteed high availability with redundant systems and proactive monitoring.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-pink bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-pink text-xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Scalable Solutions</h3>
                      <p className="text-gray-300">Infrastructure that grows with your business, from startups to enterprise scale.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-neon-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-green text-xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Cost Optimization</h3>
                      <p className="text-gray-300">Reduce IT costs by up to 40% while improving performance and reliability.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-purple border-opacity-30">
                <h3 className="text-2xl font-bold text-white mb-6">Our IT Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Cloud Infrastructure</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-purple rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Cybersecurity</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-purple rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Network Management</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-purple rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Database Management</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-purple rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Web Development</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-purple rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Mobile Development</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-neon-purple rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IT Services */}
        <div className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-neon-purple">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to keep your business running smoothly and securely
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={service.id} className="card-hover bg-dark-surface-light p-6 rounded-xl border border-neon-purple border-opacity-30">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.isPopular && (
                        <span className="bg-neon-purple text-dark-bg px-2 py-1 rounded text-xs font-semibold">
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
                    <div className="text-neon-purple font-semibold">
                      From ${service.pricing.basic}/month
                    </div>
                    <div className="text-gray-400 text-xs">
                      {service.technologies.slice(0, 3).join(', ')}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a 
                      href={service.link} 
                      className="flex-1 bg-neon-purple text-white py-2 px-4 rounded-lg font-semibold text-center text-sm hover:bg-opacity-90 transition-colors"
                    >
                      Learn More
                    </a>
                    <a 
                      href="/contact" 
                      className="flex-1 border border-neon-purple text-neon-purple py-2 px-4 rounded-lg font-semibold text-center text-sm hover:bg-neon-purple hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="py-20 bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-neon-pink">Industries</span> We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT services are trusted by businesses across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise</h3>
                <p className="text-gray-300 text-sm">
                  Large-scale IT infrastructure, security, and cloud solutions for enterprise companies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-purple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm">
                  HIPAA-compliant IT solutions, secure data management, and telemedicine infrastructure
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-pink bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300 text-sm">
                  Secure banking systems, compliance solutions, and fraud prevention technologies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">E-commerce</h3>
                <p className="text-gray-300 text-sm">
                  Scalable e-commerce platforms, payment processing, and inventory management systems
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
                <span className="text-neon-green">Transparent</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the IT service plan that fits your business needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-surface-light p-8 rounded-xl border border-gray-600">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-neon-purple mb-6">
                  $999<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Basic infrastructure setup
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Standard monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Monthly reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Basic security
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-purple text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
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
                  $2,999<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Advanced infrastructure
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    24/7 monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Weekly reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Advanced security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Custom configurations
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-neon-purple text-white py-3 rounded-lg font-semibold text-center block hover:bg-opacity-90 transition-colors">
                  Get Started
                </a>
              </div>
              
              <div className="bg-dark-surface-light p-8 rounded-xl border border-neon-pink">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-neon-pink mb-6">
                  $8,999<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Full infrastructure management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Real-time monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Dedicated support team
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Daily reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Enterprise security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-neon-green mr-3">✓</span>
                    Custom solutions
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
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Contact our IT experts to discuss your specific needs and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-dark-bg px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-lg"
              >
                Contact Us Today
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

export default ITServicesPage;
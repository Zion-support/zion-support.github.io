import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions for specific business needs and workflows. Discover our comprehensive suite of intelligent business applications." />
        <meta name="keywords" content="micro saas, business software, task management, crm, analytics, inventory management, hr software, finance management" />
      </Helmet>
      
      <div className="min-h-screen animated-bg cyber-grid relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full floating opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full floating opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full floating opacity-50" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full floating opacity-30" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold text-white mb-8 holographic">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our comprehensive suite of intelligent micro SaaS applications designed to solve specific business challenges and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+13024640950" 
                className="neon-button neon-glow hover:scale-105 transform transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent text-cyan-400 px-8 py-3 rounded-lg font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 transform"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Micro SaaS Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesData.microSaas.map((service, index) => (
              <div key={service.id} className="futuristic-card group hover:scale-105 transform transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <svg className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-2">Pricing:</h4>
                    <div className="text-2xl font-bold text-cyan-400">{service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={service.contactInfo.website}
                      className="bg-cyan-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-400 transition-all duration-300 hover:scale-105 transform"
                    >
                      Learn More
                    </a>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="bg-transparent text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center border border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 transform"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Micro SaaS Solutions */}
          <div className="futuristic-card mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12 holographic">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-cyan-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">Lightning Fast</h3>
                <p className="text-gray-300">Quick setup and deployment in minutes, not months</p>
              </div>
              <div className="text-center group">
                <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">AI-Powered</h3>
                <p className="text-gray-300">Intelligent automation and insights built-in</p>
              </div>
              <div className="text-center group">
                <div className="bg-purple-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security and 99.9% uptime</p>
              </div>
              <div className="text-center group">
                <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock customer support and assistance</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="futuristic-card neon-glow text-center">
            <h2 className="text-4xl font-bold mb-6 holographic">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-10 text-gray-300 leading-relaxed">
              Get started with our micro SaaS solutions today and experience the power of intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a 
                href="tel:+13024640950" 
                className="bg-cyan-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 transition-all duration-300 hover:scale-105 transform neon-glow"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent text-cyan-400 px-10 py-4 rounded-lg font-bold text-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 transform"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;
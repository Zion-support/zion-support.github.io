import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, natural language processing, computer vision, and custom AI solutions for your business." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, AI consulting, AI development" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI services including machine learning, natural language processing, computer vision, and custom AI solutions for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">AI Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              <span className="neon-text"> From machine learning to computer vision, we bring AI to life.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+13024640950" 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Call Now: +1 302 464 0950</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicesData.aiServices.map((service) => (
              <div key={service.id} className="group glass-effect p-8 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:animate-pulse">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Pricing:</h4>
                  <div className="text-2xl font-bold text-cyan-400">{service.marketPrice}</div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300">• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={service.contactInfo.website}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-center hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </a>
                  <a 
                    href={`tel:${service.contactInfo.phone}`}
                    className="glass-effect text-cyan-400 px-6 py-2 rounded-lg font-semibold text-center hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our AI Services */}
          <div className="glass-effect rounded-2xl shadow-2xl p-8 mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              <span className="gradient-text">Why Choose Our AI Services?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-300">Rapid AI implementation and deployment in weeks, not months</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">AI solutions that deliver measurable business impact</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock AI expertise and technical support</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl shadow-2xl p-8 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with our AI services today and experience the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-colors transform hover:scale-105"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-sm opacity-75">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = memo(() => {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  }), []);

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation."
        keywords="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence"
        canonicalUrl="https://ziontechgroup.com"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
              Transform your operations with our innovative micro SAAS services and advanced technology solutions.
            </p>
            
            {/* Contact Information */}
            <div className="mb-12 p-6 glass-effect rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-cyan-400">📞</span>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-cyan-400">📧</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/services" className="btn-futuristic">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                Get Quote
              </a>
            </div>
          </div>
        </div>

        {/* Services Overview Section */}
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Comprehensive Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered automation to enterprise IT solutions, we provide everything your business needs to succeed
              </p>
            </div>

            {/* AI Services Preview */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">AI Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.aiServices.slice(0, 6).map((service) => (
                  <div key={service.id} className="glass-dark rounded-lg p-6 hover-lift">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
                    <div className="text-cyan-400 font-semibold">{service.marketPrice}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="/ai-services" className="btn-futuristic">
                  View All AI Services
                </a>
              </div>
            </div>

            {/* IT Services Preview */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">IT Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.itSolutions.slice(0, 6).map((service) => (
                  <div key={service.id} className="glass-dark rounded-lg p-6 hover-lift">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
                    <div className="text-cyan-400 font-semibold">{service.marketPrice}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="/it-services" className="btn-futuristic">
                  View All IT Services
                </a>
              </div>
            </div>

            {/* Micro SAAS Preview */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Micro SAAS Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.microSaas.slice(0, 6).map((service) => (
                  <div key={service.id} className="glass-dark rounded-lg p-6 hover-lift">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm mb-4">{service.shortDescription}</p>
                    <div className="text-cyan-400 font-semibold">{service.marketPrice}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="/micro-saas-solutions" className="btn-futuristic">
                  View All Micro SAAS Solutions
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="glass-dark rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Fast Implementation</h4>
                  <p className="text-gray-300 text-sm">Quick deployment and setup in days, not months</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🤖</div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">AI-Powered</h4>
                  <p className="text-gray-300 text-sm">Cutting-edge AI technology in every solution</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🔒</div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Secure & Reliable</h4>
                  <p className="text-gray-300 text-sm">Enterprise-grade security and 99.9% uptime</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Expert Support</h4>
                  <p className="text-gray-300 text-sm">24/7 expert support and consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Get started with our comprehensive AI and IT solutions today. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-sm text-white opacity-75">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
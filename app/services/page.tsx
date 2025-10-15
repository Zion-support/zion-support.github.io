import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData, serviceCategories, Service } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCurrentServices = (): Service[] => {
    if (activeTab === 'all') return servicesData;
    return servicesData.filter(service => service.category === activeTab);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Zion Tech Group Services",
    "description": "Comprehensive AI and IT solutions including micro SAAS services, web development, cloud infrastructure, and digital transformation.",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    },
    "serviceType": "Technology Services",
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI and IT Services",
      "itemListElement": servicesData.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services designed to accelerate your business growth. From micro SAAS solutions to enterprise digital transformation." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud solutions, digital transformation, business automation, technology consulting, web development, mobile development" />
        <meta property="og:title" content="Services - Zion Tech Group | AI & IT Solutions" />
        <meta property="og:description" content="Comprehensive AI and IT solutions including micro SAAS services, web development, cloud infrastructure, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-services.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to accelerate your business growth. 
              From innovative micro SAAS services to enterprise digital transformation.
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
          </div>

          {/* Service Categories */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    activeTab === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-2xl">🚀</span>
                    <span>All Services</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-sm">
                      {servicesData.length}
                    </span>
                  </span>
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      activeTab === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span>{category.name}</span>
                      <span className="px-2 py-1 bg-white/20 rounded-full text-sm">
                        {category.count}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCurrentServices().map((service, index) => (
                  <div
                    key={service.id}
                    className="group relative card-futuristic p-8 hover:scale-105 transition-all duration-300"
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
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{service.features.length - 3} more features
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
                        <span className="text-gray-400">
                          {service.category === 'ai' ? '/month' : 'starting'}
                        </span>
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
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
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
                        Get Quote
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
          </div>

          {/* CTA Section */}
          <div className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI and IT solutions can accelerate your digital transformation. 
                  Contact us today for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact" className="btn-futuristic">
                    Get Free Consultation
                  </Link>
                  <a href="tel:+13024640950" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                    Call Now: +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
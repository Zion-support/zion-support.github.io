import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  const structuredData = {
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
  };

  const featuredMicroSaas = servicesData.microSaas.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, digital transformation, and micro SaaS solutions." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence, micro saas, business automation, ai tools" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with AI
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Leading provider of AI and IT solutions, micro SaaS tools, and digital transformation services. 
                We help businesses automate, optimize, and scale with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Get Free Consultation
                </a>
                <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                  Explore Services
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="text-center text-sm opacity-90">
                <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Advanced artificial intelligence solutions including machine learning, NLP, computer vision, and custom AI development.
              </p>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">$5,000 - $50,000</div>
                <div className="text-sm text-gray-500">Starting from $5,000</div>
              </div>
              <a href="/ai-services" className="text-blue-600 hover:text-blue-800 font-semibold">Explore AI Services →</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Scalable cloud solutions that provide reliability, security, and performance for your business applications.
              </p>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">$1,000 - $20,000/month</div>
                <div className="text-sm text-gray-500">Starting from $1,000/month</div>
              </div>
              <a href="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-semibold">Explore Cloud Solutions →</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-6">
                Complete digital transformation services to modernize your business processes and systems for the digital age.
              </p>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">Custom Pricing</div>
                <div className="text-sm text-gray-500">Based on project scope</div>
              </div>
              <a href="/digital-transformation" className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</a>
            </div>
          </div>
        </div>

        {/* Micro SaaS Solutions */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Powerful, specialized software solutions designed to solve specific business challenges with AI-powered intelligence and automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMicroSaas.map((service) => (
                <div key={service.id} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.shortDescription}</p>
                  <div className="mb-3">
                    <div className="text-lg font-bold text-blue-600">{service.marketPrice}</div>
                    <div className="text-xs text-gray-500">Starting from ${service.pricing.basic}/month</div>
                  </div>
                  <a 
                    href={`/contact?service=${service.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                  >
                    Try Free →
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="/micro-saas-solutions" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Micro SaaS Solutions
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Join thousands of businesses already using our solutions to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
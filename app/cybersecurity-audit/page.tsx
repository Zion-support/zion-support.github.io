import React from 'react';
import SEOHead from '../components/SEOHead';
import { enhancedServicesData } from '../data/enhancedServicesData';
import '../styles/futuristic.css';

const CybersecurityAuditPage: React.FC = () => {
  const service = enhancedServicesData.itServices.find(s => s.id === 'cybersecurity-audit');

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <SEOHead
        title={`${service.title} - Zion Tech Group`}
        description={service.description}
        keywords="cybersecurity audit, penetration testing, security assessment, vulnerability assessment, security compliance"
        canonicalUrl={`https://ziontechgroup.com/${service.id}`}
      />
      
      <div className="cyber-bg"></div>
      <div className="min-h-screen relative z-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">{service.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="btn-neon"
                >
                  Explore Features
                </a>
                <a 
                  href="/contact" 
                  className="btn-neon-purple"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-purple mb-4">Key Features</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive security assessment and penetration testing to identify vulnerabilities.
              </p>
            </div>

            <div className="grid-futuristic grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="card-futuristic grid-item">
                  <div className="flex items-center mb-3">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <h3 className="text-lg font-semibold neon-text-green">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-800/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text mb-4">Benefits</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Protect your business with comprehensive security assessment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="card-futuristic">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-xl font-semibold neon-text-green mb-2">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-purple mb-4">Pricing</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the security assessment plan that fits your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-futuristic">
                <div className="text-center">
                  <h3 className="text-2xl font-bold neon-text-green mb-4">Basic</h3>
                  <div className="text-4xl font-bold neon-text mb-4">${service.pricing.basic.toLocaleString()}</div>
                  <p className="text-gray-300 mb-6">Perfect for small businesses</p>
                  <a href="/contact" className="btn-neon w-full">Get Started</a>
                </div>
              </div>
              
              <div className="card-futuristic border-2 border-red-400">
                <div className="text-center">
                  <h3 className="text-2xl font-bold neon-text mb-4">Pro</h3>
                  <div className="text-4xl font-bold neon-text-purple mb-4">${service.pricing.pro.toLocaleString()}</div>
                  <p className="text-gray-300 mb-6">Most popular for growing businesses</p>
                  <a href="/contact" className="btn-neon-purple w-full">Get Started</a>
                </div>
              </div>
              
              <div className="card-futuristic">
                <div className="text-center">
                  <h3 className="text-2xl font-bold neon-text-green mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold neon-text mb-4">${service.pricing.enterprise.toLocaleString()}</div>
                  <p className="text-gray-300 mb-6">For large organizations</p>
                  <a href="/contact" className="btn-neon w-full">Contact Sales</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-purple-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get a comprehensive security assessment and protect your business from threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Security Assessment
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-200">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityAuditPage;
import React from 'react';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI and IT services designed to accelerate your business growth."
        keywords="AI services, IT services, cloud solutions, digital transformation, business automation, technology consulting"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container-responsive py-12">
          <div className="text-center mb-12">
            <h1 className="text-responsive-xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-responsive text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions tailored to accelerate your business growth and digital transformation
            </p>
          </div>

          {/* AI Services Section */}
          <div className="mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 text-center mb-8">AI Services</h2>
            <div className="grid grid-1-col md:grid-2-col lg:grid-3-col gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.marketPrice}</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`/contact?service=${service.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SAAS Section */}
          <div className="mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 text-center mb-8">Micro SAAS Solutions</h2>
            <div className="grid grid-1-col md:grid-2-col lg:grid-3-col gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.marketPrice}</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`/contact?service=${service.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    Start Free Trial →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions Section */}
          <div className="mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 text-center mb-8">IT Solutions</h2>
            <div className="grid grid-1-col md:grid-2-col lg:grid-3-col gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.marketPrice}</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`/contact?service=${service.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    Get Quote →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6">
              Let our experts help you choose the right solutions for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </a>
              <a href="/pricing" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
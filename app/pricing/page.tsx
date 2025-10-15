import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container-responsive py-12">
          <div className="text-center mb-12">
            <h1 className="text-responsive-xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
            <p className="text-responsive text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for all our AI and IT services. Choose the perfect plan for your business needs.
            </p>
          </div>

          {/* AI Services Pricing */}
          <div className="mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 text-center mb-8">AI Services</h2>
            <div className="grid grid-1-col md:grid-2-col lg:grid-3-col gap-6">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.shortDescription}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.marketPrice}</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`/contact?service=${service.id}`} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SAAS Pricing */}
          <div className="mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 text-center mb-8">Micro SAAS Solutions</h2>
            <div className="grid grid-1-col md:grid-2-col lg:grid-3-col gap-6">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.shortDescription}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.marketPrice}</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`/contact?service=${service.id}`} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions Pricing */}
          <div className="mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 text-center mb-8">IT Solutions</h2>
            <div className="grid grid-1-col md:grid-2-col lg:grid-3-col gap-6">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.shortDescription}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.marketPrice}</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`/contact?service=${service.id}`} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Contact us today for a personalized quote and consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                ✉️ Email Us
              </a>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              📍 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SaaS solutions for specific business needs with AI-powered features and competitive pricing." />
        <meta name="keywords" content="micro saas, saas solutions, business software, AI tools, automation, productivity" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Innovative, AI-powered micro SaaS solutions designed to solve specific business challenges with precision and efficiency.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">🎯 Specialized Focus</h3>
                  <p className="text-blue-700 text-sm">Each solution targets specific business needs with laser precision</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">🤖 AI-Powered</h3>
                  <p className="text-blue-700 text-sm">Advanced AI capabilities built into every solution</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">💰 Cost-Effective</h3>
                  <p className="text-blue-700 text-sm">Competitive pricing with transparent, scalable plans</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesData.microSaas.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="text-2xl font-bold text-blue-600">{service.marketPrice}</div>
                    <div className="text-sm text-gray-500">Starting from ${service.pricing.basic}/month</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Interest in ${service.title}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                    >
                      Get Started
                    </a>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center block"
                    >
                      Call: {service.contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Transform Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Started Today</h3>
                <p className="text-gray-600 mb-4">
                  Contact our team to discuss your specific needs and find the perfect micro SaaS solution for your business.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700"><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p className="text-gray-700"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Expert AI and technology team
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Proven track record of success
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Competitive pricing and flexible plans
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom solutions tailored to your needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive AI and IT solutions tailored to accelerate your business growth and digital transformation
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">🚀 Innovation</h3>
                  <p className="text-blue-700 text-sm">Cutting-edge AI and technology solutions</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">⚡ Speed</h3>
                  <p className="text-blue-700 text-sm">Rapid deployment and implementation</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">🎯 Results</h3>
                  <p className="text-blue-700 text-sm">Proven track record of success</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">💼 Support</h3>
                  <p className="text-blue-700 text-sm">24/7 expert support and maintenance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{service.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-blue-600">{service.marketPrice}</div>
                    </div>
                    
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Interest in ${service.title}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* IT Solutions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{service.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-blue-600">{service.marketPrice}</div>
                    </div>
                    
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Interest in ${service.title}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Micro SaaS Solutions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Micro SaaS Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{service.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-blue-600">{service.marketPrice}</div>
                    </div>
                    
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Interest in ${service.title}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/micro-saas-solutions"
                className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
              >
                View All Micro SaaS Solutions
              </a>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Get Started?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Our Team</h3>
                <p className="text-gray-600 mb-4">
                  Get in touch with our experts to discuss your specific needs and find the perfect solution for your business.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700"><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p className="text-gray-700"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Expert team with proven experience
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
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Fast implementation and deployment
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

export default ServicesPage;
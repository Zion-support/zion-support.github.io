import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI services, micro SaaS solutions, and IT services designed to accelerate your business growth. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cloud infrastructure, web development, mobile apps, data analytics, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Comprehensive AI and IT solutions tailored to accelerate your business growth and digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Call: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* AI Services Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions powered by advanced machine learning and deep learning technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="text-2xl font-bold text-blue-600">{service.marketPrice}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={`/${service.id}`} 
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SaaS Solutions Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized software-as-a-service solutions designed to solve specific business challenges with intelligent automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
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
                    <h4 className="font-semibold text-gray-900 mb-1">Pricing:</h4>
                    <div className="text-xl font-bold text-blue-600">{service.marketPrice}</div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link 
                      to={`/${service.id}`} 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm"
                    >
                      View Details
                    </Link>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center text-sm"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IT Solutions Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT services and solutions to modernize your infrastructure and accelerate digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
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
                    <h4 className="font-semibold text-gray-900 mb-1">Investment:</h4>
                    <div className="text-xl font-bold text-blue-600">{service.marketPrice}</div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link 
                      to={`/${service.id}`} 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center text-sm"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center text-sm"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your specific needs and discover how our solutions can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-blue-100">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
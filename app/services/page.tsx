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
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cloud infrastructure, web development, mobile apps, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Comprehensive AI and IT solutions designed to transform your business and drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Call Now: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Services Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions to automate, optimize, and transform your business processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
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
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="text-sm text-gray-600">
                      <div>Basic: ${service.pricing.basic.toLocaleString()}</div>
                      <div>Pro: ${service.pricing.pro.toLocaleString()}</div>
                      <div>Enterprise: ${service.pricing.enterprise.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/${service.id}`} 
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href="tel:+13024640950" 
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Micro SaaS Solutions Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized software solutions designed to solve specific business challenges with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
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
                    <h4 className="font-semibold text-gray-900 mb-2">Monthly Pricing:</h4>
                    <div className="text-sm text-gray-600">
                      <div>Basic: ${service.pricing.basic}/month</div>
                      <div>Pro: ${service.pricing.pro}/month</div>
                      <div>Enterprise: ${service.pricing.enterprise}/month</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/${service.id}`} 
                      className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href="tel:+13024640950" 
                      className="flex-1 border border-purple-600 text-purple-600 px-4 py-2 rounded-lg text-center hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IT Solutions Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete IT infrastructure and development services to support your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
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
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="text-sm text-gray-600">
                      <div>Basic: ${service.pricing.basic.toLocaleString()}</div>
                      <div>Pro: ${service.pricing.pro.toLocaleString()}</div>
                      <div>Enterprise: ${service.pricing.enterprise.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/${service.id}`} 
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href="tel:+13024640950" 
                      className="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded-lg text-center hover:bg-green-600 hover:text-white transition-colors"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our AI and IT solutions can help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Form
              </Link>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
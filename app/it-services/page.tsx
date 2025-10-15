import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const ITServicesPage: React.FC = () => {
  const itServices = servicesData.itSolutions;

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Complete IT services including cloud infrastructure, cybersecurity, network management, and database solutions. Keep your business running smoothly with expert IT support." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, database management, IT support, technical services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Complete IT solutions to keep your business running smoothly. From cloud infrastructure to cybersecurity, 
                we provide comprehensive technology services that scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
                >
                  Get IT Assessment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to optimize your technology infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.shortDescription}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">Pricing</h4>
                        <p className="text-2xl font-bold text-purple-600">{service.marketPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Starting from</p>
                        <p className="text-lg font-semibold text-gray-900">${service.pricing.basic.toLocaleString()}/mo</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`mailto:${service.contactInfo.email}?subject=IT Services Inquiry - ${service.title}`}
                      className="flex-1 bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </a>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex-1 border border-purple-600 text-purple-600 text-center py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Expertise</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work with leading technologies and platforms to deliver robust IT solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'AWS', icon: '☁️' },
                { name: 'Azure', icon: '🔵' },
                { name: 'Google Cloud', icon: '🌐' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Kubernetes', icon: '⚙️' },
                { name: 'Terraform', icon: '🏗️' },
                { name: 'Python', icon: '🐍' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'React', icon: '⚛️' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Redis', icon: '🔴' }
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <p className="text-sm font-semibold text-gray-700">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Levels */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Levels</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the support level that matches your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Basic Support', 
                  price: '$500/month',
                  features: ['Email support', 'Business hours', 'Standard response time', 'Basic monitoring'],
                  color: 'gray'
                },
                { 
                  name: 'Professional Support', 
                  price: '$1,500/month',
                  features: ['Phone & email support', 'Extended hours', 'Faster response time', 'Advanced monitoring', 'Monthly reports'],
                  color: 'blue'
                },
                { 
                  name: 'Enterprise Support', 
                  price: '$5,000/month',
                  features: ['24/7 support', 'Dedicated team', 'SLA guarantees', 'Real-time monitoring', 'Custom solutions', 'Account manager'],
                  color: 'purple'
                }
              ].map((support, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${index === 1 ? 'ring-2 ring-purple-500 relative' : ''}`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Recommended</span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{support.name}</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-6">{support.price}</div>
                    <ul className="space-y-3 mb-8">
                      {support.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={`mailto:kleber@ziontechgroup.com?subject=Interested in ${support.name}`}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        index === 1 
                          ? 'bg-purple-600 text-white hover:bg-purple-700' 
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let our IT experts assess your current setup and recommend the best solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Schedule IT Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;
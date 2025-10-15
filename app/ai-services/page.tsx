import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  const aiServices = servicesData.aiServices;

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, AI consulting, AI development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning models to intelligent automation, we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
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
                        <p className="text-2xl font-bold text-blue-600">{service.marketPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Starting from</p>
                        <p className="text-lg font-semibold text-gray-900">${service.pricing.basic.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </a>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Use Cases</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how AI can transform your specific industry and business processes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🤖', title: 'Customer Service', description: 'AI chatbots and virtual assistants for 24/7 support' },
                { icon: '📊', title: 'Predictive Analytics', description: 'Forecast trends and make data-driven decisions' },
                { icon: '🔍', title: 'Fraud Detection', description: 'Advanced algorithms to detect and prevent fraud' },
                { icon: '📝', title: 'Content Generation', description: 'Automated content creation and optimization' },
                { icon: '🖼️', title: 'Image Recognition', description: 'Computer vision for visual content analysis' },
                { icon: '🎯', title: 'Personalization', description: 'AI-driven personalization and recommendations' },
                { icon: '⚡', title: 'Process Automation', description: 'Intelligent automation of business processes' },
                { icon: '📈', title: 'Performance Optimization', description: 'Continuous improvement through AI insights' }
              ].map((useCase, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
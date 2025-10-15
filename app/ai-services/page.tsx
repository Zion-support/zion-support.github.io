import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  const aiServices = servicesData.aiServices;

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI consulting solutions." />
        <meta name="keywords" content="ai services, machine learning, artificial intelligence, nlp, computer vision, ai consulting, ai development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">AI Services</h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                Cutting-edge artificial intelligence solutions to transform your business and drive innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get AI Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.shortDescription}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 4).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Pricing:</h4>
                      <div className="text-2xl font-bold text-purple-600">{service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-lg font-semibold text-gray-900">${service.pricing.basic.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-700 transition-colors"
                    >
                      Get Quote
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-50 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Technologies Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest AI technologies and frameworks to deliver cutting-edge solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">TF</span>
                </div>
                <h3 className="text-lg font-semibold">TensorFlow</h3>
                <p className="text-gray-400 text-sm">Machine Learning</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">PT</span>
                </div>
                <h3 className="text-lg font-semibold">PyTorch</h3>
                <p className="text-gray-400 text-sm">Deep Learning</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">GPT</span>
                </div>
                <h3 className="text-lg font-semibold">GPT Models</h3>
                <p className="text-gray-400 text-sm">NLP & Generation</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">CV</span>
                </div>
                <h3 className="text-lg font-semibold">Computer Vision</h3>
                <p className="text-gray-400 text-sm">Image Processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Implement AI?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Let's discuss how AI can transform your business. Contact us for a free consultation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including development, consulting, and ready-to-use AI solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From custom AI development to ready-to-use AI tools, we have everything you need to succeed.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicesData.aiServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Pricing:</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">
                        ${service.pricing.basic.toLocaleString()}
                      </span>
                      <span className="text-gray-600">starting from</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Get Started
                    </button>
                    {service.link && (
                      <a 
                        href={service.link}
                        className="flex-1 border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-medium text-center"
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our AI Services */}
          <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our AI Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Our AI solutions have helped 500+ businesses achieve measurable improvements in efficiency and profitability.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">Get your AI solutions up and running quickly with our streamlined implementation process.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Every AI solution is tailored to your specific business needs and requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support to ensure your AI solutions run smoothly at all times.</p>
              </div>
            </div>
          </div>

          {/* AI Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI Use Cases by Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized product recommendations</li>
                  <li>• Dynamic pricing optimization</li>
                  <li>• Inventory demand forecasting</li>
                  <li>• Chatbot customer support</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Medical image analysis</li>
                  <li>• Drug discovery assistance</li>
                  <li>• Patient risk assessment</li>
                  <li>• Treatment recommendation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Finance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fraud detection</li>
                  <li>• Credit risk assessment</li>
                  <li>• Algorithmic trading</li>
                  <li>• Customer service automation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Predictive maintenance</li>
                  <li>• Quality control automation</li>
                  <li>• Supply chain optimization</li>
                  <li>• Production scheduling</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Content generation</li>
                  <li>• Customer segmentation</li>
                  <li>• Campaign optimization</li>
                  <li>• Lead scoring</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized learning paths</li>
                  <li>• Automated grading</li>
                  <li>• Student performance prediction</li>
                  <li>• Virtual tutoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
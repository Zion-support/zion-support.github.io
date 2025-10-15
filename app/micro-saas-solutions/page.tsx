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
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Innovative, AI-powered micro SaaS solutions designed to solve specific business challenges with precision and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started Today
                </a>
                <a href="#features" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful AI Content Moderation Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your platform with intelligent content moderation powered by advanced AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Content Analysis</h3>
                <p className="text-gray-600">Instantly analyze and filter content as it's posted with advanced AI algorithms</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sentiment Analysis</h3>
                <p className="text-gray-600">Detect toxic, harmful, or inappropriate content with high accuracy</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Actions</h3>
                <p className="text-gray-600">Automatically flag, hide, or remove content based on your moderation rules</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-language Support</h3>
                <p className="text-gray-600">Moderate content in multiple languages with global language support</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600">Monitor moderation activity with detailed analytics and reporting</p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Rules</h3>
                <p className="text-gray-600">Create custom moderation rules tailored to your platform's needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Micro SaaS Solutions Grid */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-600">Choose from our comprehensive suite of AI-powered micro SaaS solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contact our team to discuss your specific needs and find the perfect micro SaaS solution for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Our Micro SaaS Solutions?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Focused Solutions</p>
                      <p className="text-gray-600">Each tool solves a specific business problem with precision</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">AI-Powered</p>
                      <p className="text-gray-600">Advanced AI capabilities built into every solution</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Cost-Effective</p>
                      <p className="text-gray-600">Competitive pricing with transparent, scalable plans</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Easy Integration</p>
                      <p className="text-gray-600">Seamless integration with your existing workflows</p>
                    </div>
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
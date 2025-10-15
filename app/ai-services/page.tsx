import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
  const aiServices = servicesData.aiServices;

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, AI consulting, artificial intelligence solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning models to intelligent automation, we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                  Get AI Consultation
                </Link>
                <a href="tel:+13024640950" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to your business needs and industry requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-blue-600 mb-1">${service.pricing.basic.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  
                  <Link 
                    to={`/${service.id}`} 
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Our AI Services */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine deep AI expertise with industry knowledge to deliver solutions that drive measurable business impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert AI Team</h3>
                <p className="text-gray-600">PhD-level AI researchers and engineers with years of industry experience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Fast-track AI implementation with our proven development methodologies</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored AI solutions designed specifically for your business needs</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Measurable business impact with detailed analytics and reporting</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Technologies */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Technologies We Use</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leveraging the latest AI technologies and frameworks to build robust, scalable solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'TensorFlow', icon: '🔧' },
                { name: 'PyTorch', icon: '🔥' },
                { name: 'OpenAI GPT', icon: '🤖' },
                { name: 'Hugging Face', icon: '🤗' },
                { name: 'Scikit-learn', icon: '📊' },
                { name: 'AWS AI', icon: '☁️' },
                { name: 'Google AI', icon: '🔍' },
                { name: 'Azure AI', icon: '💙' },
                { name: 'NVIDIA', icon: '🚀' },
                { name: 'Apache Spark', icon: '⚡' },
                { name: 'Kubernetes', icon: '☸️' },
                { name: 'Docker', icon: '🐳' }
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Harness the Power of AI?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how AI can transform your business. Contact our AI experts for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                Get Free AI Consultation
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI services, micro SaaS solutions, and IT services for modern businesses. Contact us at +1 302 464 0950 for expert solutions." />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cloud infrastructure, web development, mobile apps, data analytics, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Advanced AI and IT Solutions for the Modern World. Transform your business with cutting-edge technology and intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              <div className="text-blue-100 text-lg">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* AI Services */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
                  <p className="text-gray-600 mb-6">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  {servicesData.aiServices.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-blue-500 mr-3">→</span>
                      <span className="text-gray-700">{service.title}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/ai-services" 
                  className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Explore AI Services
                </Link>
              </div>

              {/* Micro SaaS */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                  <p className="text-gray-600 mb-6">
                    Specialized software-as-a-service solutions designed to solve specific business challenges with intelligent automation.
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  {servicesData.microSaas.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-purple-500 mr-3">→</span>
                      <span className="text-gray-700">{service.title}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/micro-saas-solutions" 
                  className="block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  Explore Micro SaaS
                </Link>
              </div>

              {/* IT Solutions */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">☁️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive IT services including cloud infrastructure, web development, mobile apps, and cybersecurity.
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  {servicesData.itSolutions.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">→</span>
                      <span className="text-gray-700">{service.title}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/it-services" 
                  className="block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Explore IT Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most popular AI and IT solutions that are transforming businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'AI Content Generator',
                  description: 'Generate high-quality content with AI',
                  icon: '✍️',
                  price: '$99 - $999/month',
                  link: '/ai-content-generator'
                },
                {
                  title: 'Task Scheduler Pro',
                  description: 'AI-powered task management',
                  icon: '✅',
                  price: '$29 - $199/month',
                  link: '/zion-ai-task-scheduler'
                },
                {
                  title: 'Cloud Infrastructure',
                  description: 'Scalable cloud solutions',
                  icon: '☁️',
                  price: '$1,000 - $20,000/month',
                  link: '/cloud-infrastructure'
                },
                {
                  title: 'Web Development',
                  description: 'Custom web applications',
                  icon: '🌐',
                  price: '$2,500 - $25,000',
                  link: '/web-development'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <div className="text-lg font-bold text-blue-600">{service.price}</div>
                  </div>
                  <Link 
                    to={service.link} 
                    className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Expert Team',
                  description: 'Certified professionals with years of experience',
                  icon: '👥'
                },
                {
                  title: '24/7 Support',
                  description: 'Round-the-clock technical support and monitoring',
                  icon: '🕐'
                },
                {
                  title: 'Proven Results',
                  description: 'Track record of successful implementations',
                  icon: '📈'
                },
                {
                  title: 'Scalable Solutions',
                  description: 'Solutions that grow with your business',
                  icon: '🚀'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you identify the best technology solutions for your specific needs and create a customized implementation plan.
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
            <div className="mt-8 text-blue-100">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
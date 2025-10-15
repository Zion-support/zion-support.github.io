import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, micro SaaS solutions, and digital transformation." />
        <meta name="keywords" content="AI services, IT solutions, micro saas, cloud infrastructure, digital transformation, business automation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI & IT Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI and IT solutions. We help businesses thrive in the digital age with 
                intelligent automation, micro SaaS solutions, and comprehensive technology services.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a 
                  href="tel:+13024640950" 
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 text-lg font-semibold border-2 border-blue-600 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="/micro-saas-solutions" 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Explore Micro SaaS
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-600">AI Tools Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Comprehensive Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI development to micro SaaS solutions, we provide everything your business needs to succeed in the digital world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.slice(0, 3).map((service) => (
                <div key={service.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{service.marketPrice}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  <a 
                    href={service.contactInfo.website} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>

        {/* Micro SaaS Solutions */}
        <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful, specialized software solutions designed to solve specific business challenges and streamline operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-green-600">{service.marketPrice}</div>
                    <div className="text-xs text-gray-500">per month</div>
                  </div>
                  <a 
                    href={service.contactInfo.website} 
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold text-sm"
                  >
                    Try Now 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/micro-saas-solutions" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                Explore All Micro SaaS Solutions
              </a>
            </div>
          </div>
        </div>

        {/* AI Tools Preview */}
        <div className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI-Powered Tools</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Harness the power of artificial intelligence with our comprehensive suite of intelligent business tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Content Moderator</h3>
                <p className="text-gray-600 text-sm mb-4">Automated content moderation using advanced AI</p>
                <a href="/zion-ai-content-moderator" className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
                  Try Now →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sales Predictor</h3>
                <p className="text-gray-600 text-sm mb-4">Predict sales trends with machine learning</p>
                <a href="/zion-ai-sales-predictor" className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
                  Try Now →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Workflow Automator</h3>
                <p className="text-gray-600 text-sm mb-4">Automate complex business workflows</p>
                <a href="/zion-ai-workflow-automator" className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
                  Try Now →
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Financial Forecaster</h3>
                <p className="text-gray-600 text-sm mb-4">AI-powered financial predictions and analysis</p>
                <a href="/zion-ai-financial-forecaster" className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
                  Try Now →
                </a>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/services" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
              >
                View All AI Tools
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with years of experience in AI and IT solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times without compromising on quality or reliability</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer support and technical assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join hundreds of successful businesses that trust Zion Tech Group for their AI and IT needs. 
              Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent text-white px-10 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors shadow-lg"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
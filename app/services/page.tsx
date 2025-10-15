import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group | AI & IT Solutions"
        description="Comprehensive AI and IT services including micro SAAS solutions, cloud infrastructure, digital transformation, and cutting-edge technology solutions."
        keywords="AI services, IT services, micro SAAS, cloud solutions, digital transformation, business automation, technology consulting, AI tools, software development"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business. 
              From cutting-edge AI services to robust IT infrastructure and innovative micro SAAS solutions.
            </p>
            
            {/* Contact Information */}
            <div className="mb-12 p-6 glass-effect rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-cyan-400">📞</span>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-cyan-400">📧</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* AI Services Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="gradient-text">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions to automate, optimize, and transform your business processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.slice(0, 6).map((service) => (
                <div key={service.id} className="glass-effect rounded-xl p-6 hover-lift group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.marketPrice}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link 
                      to={service.link || '/ai-services'} 
                      className="flex-1 bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-cyan-400 transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={`tel:+13024640950`}
                      className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-600 transition-colors text-sm"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/ai-services" 
                className="btn-futuristic text-lg px-8 py-3"
              >
                View All AI Services
              </Link>
            </div>
          </section>

          {/* Micro SAAS Solutions Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="gradient-text">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Focused, powerful tools that solve specific business challenges with intelligent automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.microSaas.slice(0, 6).map((service) => (
                <div key={service.id} className="glass-effect rounded-xl p-6 hover-lift group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-purple-400">{service.marketPrice}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link 
                      to={service.link || '/micro-saas-solutions'} 
                      className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-purple-400 transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={`tel:+13024640950`}
                      className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-600 transition-colors text-sm"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/micro-saas-solutions" 
                className="btn-futuristic text-lg px-8 py-3"
              >
                View All Micro SAAS Solutions
              </Link>
            </div>
          </section>

          {/* IT Solutions Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="gradient-text">IT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.slice(0, 6).map((service) => (
                <div key={service.id} className="glass-effect rounded-xl p-6 hover-lift group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-400">{service.marketPrice}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link 
                      to={service.link || '/it-services'} 
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-green-400 transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={`tel:+13024640950`}
                      className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-600 transition-colors text-sm"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/it-services" 
                className="btn-futuristic text-lg px-8 py-3"
              >
                View All IT Solutions
              </Link>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-20">
            <div className="glass-effect rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Choose <span className="gradient-text">Zion Tech Group</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine cutting-edge technology with deep industry expertise to deliver exceptional results
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-300">Rapid deployment and implementation of solutions</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                  <p className="text-gray-300">Intelligent automation and insights built-in</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
                  <p className="text-gray-300">Enterprise-grade security and 99.9% uptime</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock customer support and assistance</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="glass-effect rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get started with our comprehensive AI and IT solutions today. 
                Contact us for a free consultation and discover how we can accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="btn-futuristic text-lg px-8 py-4"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Email Us
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
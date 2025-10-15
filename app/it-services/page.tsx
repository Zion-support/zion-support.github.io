import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const ITServicesPage: React.FC = () => {
  const itServices = servicesData.itSolutions;

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud infrastructure, cybersecurity, web development, mobile development, database management, and network infrastructure. Expert technology solutions for your business." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6 floating-element">
              IT Services
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions to power your business forward. 
              From cloud infrastructure to custom development, we've got you covered.
            </p>
          </div>

          {/* IT Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={service.id} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="text-6xl floating-element" style={{ animationDelay: `${index * 0.3}s` }}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold neon-text mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.slice(0, 6).map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-400 flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold neon-text-green mb-2">
                        Starting at ${service.pricing.basic.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">
                        Pro: ${service.pricing.pro.toLocaleString()} • Enterprise: ${service.pricing.enterprise.toLocaleString()}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="text-sm text-gray-300">
                            • {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <a 
                      href={service.link} 
                      className="neon-button w-full text-center block"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack Section */}
          <div className="cyber-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text-purple mb-6">
                Our Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with cutting-edge technologies to deliver the best solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">☁️</div>
                <h3 className="text-sm font-semibold text-cyan-400">Cloud Platforms</h3>
                <p className="text-xs text-gray-400">AWS, Azure, GCP</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-sm font-semibold text-cyan-400">Security</h3>
                <p className="text-xs text-gray-400">Firewalls, VPN, SIEM</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="text-sm font-semibold text-cyan-400">Development</h3>
                <p className="text-xs text-gray-400">React, Node.js, Python</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-sm font-semibold text-cyan-400">Mobile</h3>
                <p className="text-xs text-gray-400">React Native, Flutter</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🗄️</div>
                <h3 className="text-sm font-semibold text-cyan-400">Databases</h3>
                <p className="text-xs text-gray-400">PostgreSQL, MongoDB</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-sm font-semibold text-cyan-400">Networking</h3>
                <p className="text-xs text-gray-400">Cisco, Juniper</p>
              </div>
            </div>
          </div>

          {/* Service Process Section */}
          <div className="cyber-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text-green mb-6">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to deliver exceptional IT services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Assessment</h3>
                <p className="text-gray-300">Comprehensive analysis of your current IT infrastructure and needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Planning</h3>
                <p className="text-gray-300">Strategic planning and architecture design for optimal solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Implementation</h3>
                <p className="text-gray-300">Professional deployment and configuration of IT solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Support</h3>
                <p className="text-gray-300">Ongoing maintenance, monitoring, and 24/7 technical support</p>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="cyber-card mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold neon-text mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide IT solutions across various industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-3">🏥</div>
                <h3 className="text-sm font-semibold text-cyan-400">Healthcare</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🏦</div>
                <h3 className="text-sm font-semibold text-cyan-400">Finance</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🏭</div>
                <h3 className="text-sm font-semibold text-cyan-400">Manufacturing</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🏪</div>
                <h3 className="text-sm font-semibold text-cyan-400">Retail</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🎓</div>
                <h3 className="text-sm font-semibold text-cyan-400">Education</h3>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🏢</div>
                <h3 className="text-sm font-semibold text-cyan-400">Enterprise</h3>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold neon-text mb-6">
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT services can enhance your business operations and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="neon-button text-xl px-12 py-4">
                Get Started
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-xl font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;
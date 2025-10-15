import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, data analytics, mobile development, and network solutions. Expert IT consulting and support." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, data analytics, mobile development, network solutions, IT consulting, digital transformation" />
        <meta property="og:title" content="IT Services - Comprehensive IT Solutions" />
        <meta property="og:description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>
      
      <div className="min-h-screen animated-bg-dark">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="neon-glow-green">IT Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Comprehensive IT solutions including cloud infrastructure, cybersecurity, data analytics, 
                and digital transformation. Expert IT consulting and 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Get Started Today
                </Link>
                <Link to="/pricing" className="glass-dark border border-green-400 text-green-400 px-8 py-3 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-green mb-6">
                Our IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to modernize and secure your business infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <div key={service.id} className="card-futuristic hover-lift group">
                  <div className="text-center">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-semibold text-green-400">Key Features:</div>
                      <div className="grid grid-cols-1 gap-2 text-xs text-gray-400">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-green-400 mr-2">•</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-green-400">Pricing:</div>
                      <div className="text-sm text-gray-300">
                        Starting at ${service.pricing.basic.toLocaleString()}/month
                      </div>
                      <div className="text-xs text-gray-500">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-purple-400">Benefits:</div>
                      <div className="text-xs text-gray-400">
                        {service.benefits.slice(0, 2).join(' • ')}
                      </div>
                    </div>
                    
                    <Link to={service.link} className="btn-neon w-full">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-cyan mb-6">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on industry-leading technologies and best practices
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-sm font-bold text-green-400">Cloud Platforms</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-sm font-bold text-green-400">Security</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-sm font-bold text-green-400">Analytics</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-sm font-bold text-green-400">Mobile</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-sm font-bold text-green-400">Networking</h3>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-sm font-bold text-green-400">Web Dev</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-purple mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services across all business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Infrastructure</h3>
                <p className="text-gray-300">Cloud migration, server management, and infrastructure optimization</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Security</h3>
                <p className="text-gray-300">Cybersecurity, compliance, and threat protection</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Analytics</h3>
                <p className="text-gray-300">Data analytics, business intelligence, and reporting</p>
              </div>
              
              <div className="card-futuristic hover-lift text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Development</h3>
                <p className="text-gray-300">Custom software, mobile apps, and web development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven expertise and industry-leading solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-green mb-4">15+</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Years Experience</h3>
                <p className="text-gray-300">Extensive experience in IT solutions and digital transformation</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-cyan mb-4">24/7</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Support</h3>
                <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-purple mb-4">99.9%</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Uptime</h3>
                <p className="text-gray-300">Guaranteed system availability and reliability</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold neon-glow-pink mb-4">500+</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Projects</h3>
                <p className="text-gray-300">Successfully completed projects across various industries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card-futuristic">
              <h2 className="text-4xl md:text-5xl font-bold neon-glow-pink mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our IT services today and transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-neon hover-glow">
                  Start Your IT Transformation
                </Link>
                <Link to="/contact" className="glass-dark border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 hover-glow">
                  Schedule Consultation
                </Link>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
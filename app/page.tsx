import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud infrastructure, data analytics, mobile development, web development" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          <div className="particles absolute inset-0"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading provider of <span className="text-cyan-400 font-semibold">AI-powered solutions</span> and 
              <span className="text-purple-400 font-semibold"> cutting-edge IT services</span> for the modern digital world
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="cyber-button text-lg px-8 py-4">
                Explore Services
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-purple-400 text-purple-400 hover:border-purple-300 hover:text-purple-300">
                Contact Us
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="glass-dark rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Get In Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+1 302 464 0950</p>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business
              </p>
            </div>

            {/* AI Services */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-cyan-400 mb-8 text-center">AI Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.aiServices.slice(0, 3).map((service) => (
                  <div key={service.id} className="card-cyber hover-lift">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-300 mb-4">{service.shortDescription}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 font-bold">From ${service.pricing.basic}/mo</span>
                      <a href={service.link} className="text-cyan-400 hover:text-cyan-300 text-sm">
                        Learn More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro SaaS Solutions */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-purple-400 mb-8 text-center">Micro SaaS Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.microSaas.slice(0, 3).map((service) => (
                  <div key={service.id} className="card-cyber hover-lift">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-300 mb-4">{service.shortDescription}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400 font-bold">From ${service.pricing.basic}/mo</span>
                      <a href={service.link} className="text-purple-400 hover:text-purple-300 text-sm">
                        Learn More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Solutions */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-pink-400 mb-8 text-center">IT Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.itSolutions.slice(0, 3).map((service) => (
                  <div key={service.id} className="card-cyber hover-lift">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-300 mb-4">{service.shortDescription}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-pink-400 font-bold">From ${service.pricing.basic}/mo</span>
                      <a href={service.link} className="text-pink-400 hover:text-pink-300 text-sm">
                        Learn More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-dark rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Start Your Project
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
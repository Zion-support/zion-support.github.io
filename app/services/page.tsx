import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServicesShowcase from '../components/ServicesShowcase';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta name="description" content="Comprehensive AI, IT, and Micro SAAS services including AI chatbots, cloud infrastructure, cybersecurity, quantum computing, and more. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud infrastructure, cybersecurity, quantum computing, blockchain, IoT, autonomous systems" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI, IT, and Micro SAAS services to transform your business with cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Comprehensive AI, IT, and Micro SAAS Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our cutting-edge technology solutions. From AI-powered automation to quantum computing, 
              we provide the tools and expertise you need to stay ahead in the digital age.
            </p>
          </section>

          {/* Services Showcase */}
          <section className="mb-16">
            <ServicesShowcase showAll={true} />
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="quantum-card p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Innovation First</h3>
                <p className="text-gray-300">
                  We stay at the forefront of technology, constantly innovating and adapting to bring you the latest solutions.
                </p>
              </div>
              <div className="quantum-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Proven Results</h3>
                <p className="text-gray-300">
                  Our solutions have delivered $50M+ in annual savings and 300% ROI for enterprise clients worldwide.
                </p>
              </div>
              <div className="quantum-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security and compliance with 99.9% uptime guarantee and 24/7 expert support.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="quantum-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get started with our comprehensive solutions and see the difference cutting-edge technology can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  📞 Call Now: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
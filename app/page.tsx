'use client';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEOOptimizer from './components/SEOOptimizer';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions | Enterprise Technology Services"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'business intelligence', 'cybersecurity', 'DevOps', 'micro SaaS', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                (302) 464-0950
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Advanced AI-powered solutions for business automation, data analysis, and intelligent decision making.
                </p>
                <a href="/ai-solutions" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive IT infrastructure, cloud migration, cybersecurity, and DevOps solutions.
                </p>
                <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">
                  Complete digital transformation services to modernize your business processes and operations.
                </p>
                <a href="/digital-transformation" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Learn More →
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                (302) 464-0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
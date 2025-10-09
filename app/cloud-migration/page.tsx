'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Cloud Migration Services">
            Cloud Migration Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Seamless Cloud Transformation
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Migrate your infrastructure to the cloud with zero downtime. Our expert team ensures a smooth transition with enhanced security, scalability, and cost optimization.
          </p>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
              <div className="text-4xl font-bold text-green-400 mb-4">$2,500<span className="text-lg">/project</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 10 servers</li>
                <li>Basic cloud setup</li>
                <li>Data migration</li>
                <li>Security configuration</li>
                <li>30-day support</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Quote</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-green-400">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-400 mb-4">$15,000<span className="text-lg">/project</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 100 servers</li>
                <li>Advanced cloud architecture</li>
                <li>Zero-downtime migration</li>
                <li>Advanced security</li>
                <li>90-day support</li>
                <li>Performance optimization</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Quote</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solution</h3>
              <div className="text-4xl font-bold text-green-400 mb-4">Custom<span className="text-lg"> pricing</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited servers</li>
                <li>Custom cloud strategy</li>
                <li>Multi-cloud deployment</li>
                <li>Enterprise security</li>
                <li>Ongoing support</li>
                <li>Dedicated team</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Contact Us</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Migration Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-3">AWS Migration</h3>
              <p className="text-gray-300">Migrate to Amazon Web Services with optimized architecture and cost management.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔵</div>
              <h3 className="text-xl font-bold text-white mb-3">Azure Migration</h3>
              <p className="text-gray-300">Seamlessly move to Microsoft Azure with hybrid cloud capabilities.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Google Cloud</h3>
              <p className="text-gray-300">Leverage Google Cloud Platform for AI and machine learning workloads.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Security Assessment</h3>
              <p className="text-gray-300">Comprehensive security evaluation and hardening before migration.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-300">Optimize cloud resources for maximum performance and cost efficiency.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Monitoring Setup</h3>
              <p className="text-gray-300">Implement comprehensive monitoring and alerting for your cloud infrastructure.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Ready to Move to the Cloud?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts handle your cloud migration with zero downtime and maximum security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              📞 Call: (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📧 Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CloudMigrationPage;
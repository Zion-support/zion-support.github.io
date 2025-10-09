'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Cybersecurity Solutions">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Advanced Threat Protection
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Protect your business from cyber threats with our comprehensive security solutions. From vulnerability assessments to 24/7 monitoring, we've got you covered.
          </p>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
              <div className="text-4xl font-bold text-red-400 mb-4">$499<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Vulnerability scanning</li>
                <li>Firewall management</li>
                <li>Antivirus protection</li>
                <li>Security awareness training</li>
                <li>Monthly reports</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-red-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-red-400 mb-4">$1,299<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>24/7 threat monitoring</li>
                <li>Advanced threat detection</li>
                <li>Incident response</li>
                <li>Penetration testing</li>
                <li>Priority support</li>
                <li>Compliance assistance</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-red-400 mb-4">$2,999<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Custom security architecture</li>
                <li>Dedicated security team</li>
                <li>Advanced threat hunting</li>
                <li>Security operations center</li>
                <li>24/7 support</li>
                <li>Custom compliance</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Threat Detection</h3>
              <p className="text-gray-300">Advanced AI-powered threat detection and response capabilities.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Vulnerability Assessment</h3>
              <p className="text-gray-300">Comprehensive security assessments to identify and fix vulnerabilities.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-white mb-3">Identity Management</h3>
              <p className="text-gray-300">Secure identity and access management solutions for your organization.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Security Monitoring</h3>
              <p className="text-gray-300">24/7 monitoring and alerting for your critical systems and data.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-white mb-3">Incident Response</h3>
              <p className="text-gray-300">Rapid response and recovery services for security incidents.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance</h3>
              <p className="text-gray-300">Help achieve and maintain compliance with industry regulations.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Secure Your Business Today</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for a breach. Protect your business with our comprehensive cybersecurity solutions.
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

export default CybersecuritySolutionsPage;
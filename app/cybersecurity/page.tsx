'use client';
import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Search, Zap, Brain, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and response systems using AI and machine learning',
      icon: Eye,
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Anomaly Detection', 'Automated Response']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits and vulnerability assessments',
      icon: Search,
      features: ['Penetration Testing', 'Security Audits', 'Risk Assessment', 'Compliance Checking']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response services',
      icon: AlertTriangle,
      features: ['24/7 SOC', 'Incident Response', 'Threat Intelligence', 'Security Analytics']
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management and access control solutions',
      icon: Lock,
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Privileged Access', 'Identity Governance']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and identity management. Protect your business from cyber threats."
        keywords={['cybersecurity', 'threat detection', 'vulnerability assessment', 'security monitoring', 'identity management', 'cyber protection']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium">
              Protect Your Digital Assets
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive cybersecurity solutions to protect your business from evolving cyber threats. 
              From threat detection to incident response, we keep your data and systems secure.
            </p>
          </section>

          {/* Security Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Security Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Protection</h3>
                <p className="text-gray-300">Cutting-edge security technologies and AI-powered threat detection to keep you protected.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Monitoring</h3>
                <p className="text-gray-300">Round-the-clock security monitoring and rapid incident response to minimize threats.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Compliance Ready</h3>
                <p className="text-gray-300">Meet industry compliance standards including GDPR, HIPAA, and SOC 2 requirements.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our cybersecurity experts help you build a robust defense against cyber threats. 
              Get a free security assessment and discover how we can protect your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CybersecurityPage;
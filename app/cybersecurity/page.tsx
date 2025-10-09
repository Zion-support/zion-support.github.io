'use client';
import React from 'react';
import { Shield, Lock, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and response systems',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Threat Intelligence', 'Incident Response']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits and vulnerability scanning',
      features: ['Penetration Testing', 'Security Audits', 'Compliance Checks', 'Risk Assessment']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response',
      features: ['SOC Services', 'Log Analysis', 'Threat Hunting', 'Security Analytics']
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOC 2', 'ISO 27001']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management. Protect your business from cyber threats."
        keywords={['cybersecurity', 'threat detection', 'vulnerability assessment', 'security monitoring', 'compliance', 'cyber protection']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Protect your business from cyber threats with our comprehensive security solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your cybersecurity needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CybersecurityPage;
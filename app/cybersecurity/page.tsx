'use client';
import React from 'react';
import { Shield, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection systems that identify and respond to security incidents in real-time.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Incident Response', 'Threat Intelligence', 'Automated Response'],
      benefits: ['Proactive protection', 'Faster incident response', 'Reduced damage', 'Compliance assurance']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessments to identify and remediate vulnerabilities in your systems.',
      features: ['Penetration Testing', 'Security Audits', 'Risk Assessment', 'Compliance Testing', 'Remediation Planning'],
      benefits: ['Risk mitigation', 'Compliance readiness', 'Security hardening', 'Cost optimization']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and management to protect your infrastructure around the clock.',
      features: ['SIEM Implementation', 'Log Analysis', 'Network Monitoring', 'Endpoint Protection', 'Alert Management'],
      benefits: ['Continuous protection', 'Early threat detection', 'Compliance monitoring', 'Peace of mind']
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management solutions with multi-factor authentication and access controls.',
      features: ['Single Sign-On', 'Multi-Factor Auth', 'Role-Based Access', 'Privileged Access', 'Identity Governance'],
      benefits: ['Enhanced security', 'User convenience', 'Access control', 'Audit compliance']
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection strategies including encryption, backup, and recovery solutions.',
      features: ['Data Encryption', 'Backup Solutions', 'Disaster Recovery', 'Data Classification', 'Privacy Compliance'],
      benefits: ['Data security', 'Business continuity', 'Regulatory compliance', 'Risk reduction']
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness training and phishing simulation to strengthen your human firewall.',
      features: ['Security Awareness', 'Phishing Simulation', 'Incident Response Training', 'Compliance Training', 'Assessment Tools'],
      benefits: ['Human firewall', 'Risk reduction', 'Compliance readiness', 'Security culture']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Cybersecurity Solutions - Advanced Security Services | Zion Tech Group"
        description="Comprehensive cybersecurity services including threat detection, vulnerability assessment, security monitoring, and compliance. Protect your business with enterprise-grade security solutions."
        keywords={['cybersecurity', 'security services', 'threat detection', 'vulnerability assessment', 'security monitoring', 'compliance', 'data protection']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions and expert security services
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our cybersecurity experts provide comprehensive protection against evolving threats, ensuring your 
              data, systems, and business operations remain secure in today's digital landscape.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security Stats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Security by the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Detection Rate</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;5min</div>
                <div className="text-gray-300">Incident Response Time</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Compliance Success</div>
              </div>
            </div>
          </section>

          {/* Compliance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">Compliance & Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">SOC 2 Type II</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive security controls and compliance framework for service organizations.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3">ISO 27001</h3>
                <p className="text-gray-300 text-sm">
                  International standard for information security management systems.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-white mb-3">GDPR Compliance</h3>
                <p className="text-gray-300 text-sm">
                  European data protection regulation compliance and privacy by design.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-white mb-3">HIPAA</h3>
                <p className="text-gray-300 text-sm">
                  Healthcare industry security and privacy protection standards.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-white mb-3">PCI DSS</h3>
                <p className="text-gray-300 text-sm">
                  Payment card industry data security standards and compliance.
                </p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-white mb-3">NIST Framework</h3>
                <p className="text-gray-300 text-sm">
                  National Institute of Standards and Technology cybersecurity framework.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Secure Your Business Today</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Don't wait for a security breach. Let's discuss how our cybersecurity solutions can protect your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Security Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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

export default CybersecurityPage;
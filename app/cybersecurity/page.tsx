'use client';
import React from 'react';
import { Shield, Lock, AlertTriangle, CheckCircle, TrendingUp, Star, Users, Award, Zap, Target, ArrowRight, Search, Eye, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and prevention systems',
      features: ['Real-time Monitoring', 'AI-powered Analysis', 'Anomaly Detection', 'Incident Response'],
      benefits: ['99.9% threat detection', '24/7 monitoring', 'Zero false positives']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessment and penetration testing',
      features: ['Network Scanning', 'Application Testing', 'Social Engineering', 'Compliance Audits'],
      benefits: ['Complete coverage', 'Detailed reports', 'Remediation guidance']
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous monitoring and analysis of security events',
      features: ['SIEM Integration', 'Log Analysis', 'Behavioral Analytics', 'Threat Intelligence'],
      benefits: ['Real-time alerts', 'Proactive defense', 'Compliance reporting']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      features: ['24/7 Support', 'Forensic Analysis', 'Recovery Planning', 'Post-incident Review'],
      benefits: ['Minimal downtime', 'Data protection', 'Lessons learned']
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      application: 'Fraud Prevention',
      result: '99.9% fraud detection rate',
      description: 'Advanced fraud detection systems protecting financial transactions and customer data'
    },
    {
      industry: 'Healthcare',
      application: 'HIPAA Compliance',
      result: '100% compliance achievement',
      description: 'Comprehensive security solutions ensuring HIPAA compliance and patient data protection'
    },
    {
      industry: 'E-commerce',
      application: 'Payment Security',
      result: 'Zero security breaches',
      description: 'PCI DSS compliant payment processing with advanced encryption and monitoring'
    },
    {
      industry: 'Government',
      application: 'Data Protection',
      result: 'FISMA compliance',
      description: 'Government-grade security solutions meeting federal compliance requirements'
    }
  ];

  const compliance = [
    'HIPAA', 'PCI DSS', 'SOX', 'GDPR', 'CCPA', 'FISMA',
    'ISO 27001', 'SOC 2', 'NIST', 'CIS Controls', 'OWASP', 'CISSP'
  ];

  const stats = [
    { label: 'Threats Blocked', value: '1M+', icon: Shield },
    { label: 'Detection Rate', value: '99.9%', icon: Target },
    { label: 'Response Time', value: '< 5min', icon: Zap },
    { label: 'Compliance Rate', value: '100%', icon: CheckCircle }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and incident response. Protect your business from cyber threats."
        keywords={['cybersecurity', 'threat detection', 'vulnerability assessment', 'security monitoring', 'incident response', 'cyber protection']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Protect Your Business from Cyber Threats
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Our comprehensive cybersecurity solutions provide advanced protection against 
              evolving cyber threats with 24/7 monitoring, threat detection, and rapid incident response.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Security Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Cybersecurity Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Industry Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                      <p className="text-cyan-400 font-medium">{useCase.application}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
                    <p className="text-green-400 font-semibold">Result: {useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Compliance & Standards
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {compliance.map((standard, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{standard}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Security Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Assessment', description: 'Comprehensive security assessment', icon: Search },
                { step: '2', title: 'Implementation', description: 'Deploy security solutions', icon: Shield },
                { step: '3', title: 'Monitoring', description: '24/7 security monitoring', icon: Eye },
                { step: '4', title: 'Response', description: 'Rapid incident response', icon: Zap }
              ].map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our cybersecurity experts help you build a robust defense against cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
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
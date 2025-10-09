'use client';
import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Zap, BarChart } from 'lucide-react';
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
      description: 'Advanced threat detection and prevention with AI-powered security monitoring',
      icon: Eye,
      features: ['Real-time Monitoring', 'AI Threat Detection', 'Behavioral Analysis', 'Incident Response'],
      benefits: ['99.9% threat detection', '24/7 monitoring', 'Proactive protection']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessments to identify and fix vulnerabilities',
      icon: AlertTriangle,
      features: ['Penetration Testing', 'Security Audits', 'Compliance Checks', 'Risk Assessment'],
      benefits: ['Comprehensive coverage', 'Compliance ready', 'Risk mitigation']
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous monitoring and analysis of your security infrastructure',
      icon: BarChart,
      features: ['SIEM Integration', 'Log Analysis', 'Threat Intelligence', 'Security Dashboards'],
      benefits: ['Real-time insights', 'Centralized monitoring', 'Threat intelligence']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents and breaches',
      icon: Zap,
      features: ['24/7 Response', 'Forensic Analysis', 'Recovery Planning', 'Post-Incident Review'],
      benefits: ['Rapid response', 'Minimal downtime', 'Lessons learned']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and incident response. Protect your business from cyber threats."
        keywords={['cybersecurity', 'threat detection', 'vulnerability assessment', 'security monitoring', 'incident response']}
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
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our comprehensive cybersecurity solutions provide enterprise-grade protection against 
              evolving cyber threats, ensuring your business remains secure and compliant.
            </p>
          </section>

          {/* Security Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
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
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our cybersecurity experts help you build a robust security posture that protects your business from evolving cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Security Consultation
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
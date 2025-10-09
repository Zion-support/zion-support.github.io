'use client';
import React from 'react';
import { Shield, Lock, Eye, Zap, AlertTriangle, Search, Settings, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and response capabilities',
      icon: Eye,
      features: ['Real-time monitoring', 'Behavioral analysis', 'Threat intelligence', 'Incident response']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessment and penetration testing',
      icon: Search,
      features: ['Security audits', 'Penetration testing', 'Risk assessment', 'Compliance checks']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and alerting systems',
      icon: AlertTriangle,
      features: ['SOC services', 'Log analysis', 'Threat hunting', 'Security dashboards']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response to security incidents and breaches',
      icon: Zap,
      features: ['Emergency response', 'Forensic analysis', 'Recovery planning', 'Post-incident review']
    }
  ];

  const industries = [
    {
      title: 'Financial Services',
      description: 'Bank-level security for financial institutions',
      icon: Shield,
      compliance: 'PCI DSS, SOX, GLBA'
    },
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant security solutions',
      icon: Lock,
      compliance: 'HIPAA, HITECH, FDA'
    },
    {
      title: 'Government',
      description: 'FedRAMP and FISMA compliant security',
      icon: Globe,
      compliance: 'FedRAMP, FISMA, NIST'
    },
    {
      title: 'E-commerce',
      description: 'Secure online transactions and data protection',
      icon: Settings,
      compliance: 'PCI DSS, GDPR, CCPA'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and incident response. Protect your business from cyber threats."
        keywords={['cybersecurity', 'threat detection', 'vulnerability assessment', 'security monitoring', 'incident response', 'cyber defense']}
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
              Cybersecurity Services
            </h1>
            <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium">
              Advanced Threat Detection and Security Protection
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Protect your organization from evolving cyber threats with our comprehensive 
              cybersecurity solutions. From threat detection to incident response, we provide 
              enterprise-grade security that keeps your business safe.
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
                className="flex items-center justify-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Cybersecurity Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Industry Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{industry.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{industry.description}</p>
                  <div className="text-red-400 font-semibold text-xs">{industry.compliance}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Cybersecurity Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Essential</h3>
                <div className="text-3xl font-bold text-red-400 mb-4">$1,599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Basic threat monitoring</li>
                  <li>Vulnerability scanning</li>
                  <li>Security awareness training</li>
                  <li>Monthly reports</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-red-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-red-400 mb-4">$3,999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced threat detection</li>
                  <li>Penetration testing</li>
                  <li>24/7 SOC monitoring</li>
                  <li>Incident response</li>
                  <li>Compliance support</li>
                  <li>Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-red-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom security platform</li>
                  <li>Dedicated security team</li>
                  <li>Advanced threat hunting</li>
                  <li>Custom compliance</li>
                  <li>White-label solutions</li>
                  <li>24/7 dedicated support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Organization?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our cybersecurity experts help you build a robust defense against cyber threats.
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
                  className="flex items-center justify-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
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
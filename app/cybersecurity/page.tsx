'use client';
import React from 'react';
import { Shield, Lock, Eye, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Cpu, Database, TrendingUp, Users, Award, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Advanced AI-powered threat detection and automated response systems to protect your infrastructure.',
      features: ['Real-time Monitoring', 'AI Threat Analysis', 'Automated Response', '24/7 SOC Support'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: Lock,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits and vulnerability assessments to identify and fix security gaps.',
      features: ['Penetration Testing', 'Code Review', 'Infrastructure Scanning', 'Compliance Audits'],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Continuous monitoring of your systems, networks, and applications for security threats.',
      features: ['SIEM Implementation', 'Log Analysis', 'Incident Response', 'Security Dashboards'],
      price: 'Starting at $2,000/month'
    },
    {
      icon: Zap,
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations through automated monitoring and reporting.',
      features: ['GDPR Compliance', 'SOC 2 Type II', 'ISO 27001', 'HIPAA Compliance'],
      price: 'Starting at $1,500/month'
    }
  ];

  const threats = [
    { name: 'Ransomware', description: 'Protect against ransomware attacks with advanced detection and prevention', icon: AlertTriangle },
    { name: 'Phishing', description: 'AI-powered email security to detect and block phishing attempts', icon: Mail },
    { name: 'DDoS Attacks', description: 'Distributed denial-of-service protection and mitigation', icon: Zap },
    { name: 'Data Breaches', description: 'Comprehensive data protection and breach prevention strategies', icon: Database }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Protect your business with advanced cybersecurity solutions. Threat detection, vulnerability assessment, security monitoring, and compliance management."
        keywords={['cybersecurity', 'threat detection', 'vulnerability assessment', 'security monitoring', 'compliance', 'data protection']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Protect Your Business from Evolving Threats
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay ahead of cyber threats with our comprehensive cybersecurity solutions. From threat detection 
              to compliance management, we provide enterprise-grade security to protect your business and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Protected Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">99.9% Uptime</h3>
                <p className="text-gray-300">Enterprise-grade security with guaranteed 99.9% uptime and availability.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Real-time Protection</h3>
                <p className="text-gray-300">24/7 monitoring and instant threat detection and response capabilities.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Compliance Ready</h3>
                <p className="text-gray-300">Meet industry standards and regulatory requirements with ease.</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our Security Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Threat Protection */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Threat Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {threats.map((threat, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <threat.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{threat.name}</h3>
                  <p className="text-gray-300 text-sm">{threat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security Stats */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text text-center">Security by the Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
                  <div className="text-gray-300">Threats Blocked Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Detection Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Security Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
                  <div className="text-gray-300">Successful Breaches</div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text text-center">Success Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fortune 500 Financial Services</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    We implemented a comprehensive cybersecurity solution for a major financial institution that 
                    prevented 15,000+ attempted attacks in the first month. The system achieved 99.8% threat 
                    detection accuracy and reduced security incidents by 95%.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">15,000+</div>
                      <div className="text-gray-300 text-sm">Threats Blocked</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">95%</div>
                      <div className="text-gray-300 text-sm">Incident Reduction</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-4">Security Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      AI-powered threat detection
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Automated incident response
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Real-time security monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Compliance reporting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Don't wait for a breach. Let's discuss how our cybersecurity solutions can protect your business today.
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
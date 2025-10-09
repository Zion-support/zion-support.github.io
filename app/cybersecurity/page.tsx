'use client';
import React from 'react';
import { Shield, ArrowRight, CheckCircle, Star, Zap, Lock, Eye, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and response systems to protect your infrastructure',
      icon: Eye,
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Threat Intelligence', 'Automated Response']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessments to identify and remediate vulnerabilities',
      icon: AlertTriangle,
      features: ['Penetration Testing', 'Security Audits', 'Risk Assessment', 'Compliance Checking']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response services',
      icon: Lock,
      features: ['SOC Services', 'Log Analysis', 'Incident Response', 'Forensic Analysis']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security incidents',
      icon: Shield,
      features: ['Emergency Response', 'Forensic Investigation', 'Recovery Planning', 'Post-Incident Analysis']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity services including threat detection, vulnerability assessment, security monitoring, and incident response. Protect your business from cyber threats."
        keywords={['cybersecurity', 'threat detection', 'vulnerability assessment', 'security monitoring', 'incident response']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium neon-pulse">
              Protect Your Business from Cyber Threats
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our comprehensive cybersecurity services protect your business from evolving cyber threats. 
              From threat detection to incident response, we provide end-to-end security solutions.
            </p>
          </section>

          {/* Security Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Cybersecurity Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Certified Experts</h3>
                <p className="text-gray-300">
                  Our team holds CISSP, CISM, and other industry certifications with 10+ years of experience.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Protection</h3>
                <p className="text-gray-300">
                  Round-the-clock monitoring and response to ensure your systems are always protected.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
                <p className="text-gray-300">
                  We've prevented 99.9% of cyber attacks and helped 500+ companies secure their infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our cybersecurity experts today to discuss how we can protect your business from cyber threats and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                +1 302 464 0950
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
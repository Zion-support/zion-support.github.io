'use client';
import React from 'react';
import { Shield, Lock, AlertTriangle, Eye, Zap, Target, BarChart, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CybersecurityPage: React.FC = () => {
  const features = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and response capabilities',
      icon: Eye,
      benefits: ['Real-time monitoring', 'Threat intelligence', 'Automated response']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security assessments and penetration testing',
      icon: Target,
      benefits: ['Security audits', 'Penetration testing', 'Risk assessment']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response',
      icon: BarChart,
      benefits: ['24/7 monitoring', 'Incident response', 'Security analytics']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response to security incidents and breaches',
      icon: Zap,
      benefits: ['Rapid response', 'Forensic analysis', 'Recovery planning']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and incident response. Protect your business from cyber threats."
        keywords={['cybersecurity', 'threat detection', 'security monitoring', 'vulnerability assessment', 'incident response', 'cyber security']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business from cyber threats with our comprehensive cybersecurity solutions. 
              From threat detection to incident response, we keep your data and systems secure.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,599/month</div>
            <p className="text-gray-300">Comprehensive cybersecurity protection</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-red-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Secure Your Business Today</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our cybersecurity solutions have prevented 99.9% of cyber attacks and reduced security incidents by 95%. 
                Don't wait until it's too late - secure your business now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Secure Your Business
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
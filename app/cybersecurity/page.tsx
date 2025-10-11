'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Zap, Database, Globe, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Threat Protection',
      description: 'Comprehensive protection against cyber threats including malware, ransomware, and advanced persistent threats.',
      benefits: ['Real-time monitoring', 'Threat detection', 'Automated response', 'Incident management']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'Advanced encryption solutions to protect sensitive data both in transit and at rest.',
      benefits: ['End-to-end encryption', 'Key management', 'Compliance standards', 'Data masking']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and analysis to detect and respond to security incidents in real-time.',
      benefits: ['SIEM solutions', 'Log analysis', 'Behavioral analytics', 'Threat intelligence']
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessment',
      description: 'Regular security assessments and penetration testing to identify and remediate vulnerabilities.',
      benefits: ['Penetration testing', 'Vulnerability scanning', 'Security audits', 'Risk assessment']
    }
  ];

  const services = [
    'Network Security',
    'Endpoint Protection',
    'Cloud Security',
    'Identity & Access Management',
    'Security Awareness Training',
    'Compliance & Governance',
    'Incident Response',
    'Security Consulting'
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from cyber threats and ensure data security." />
        <meta name="keywords" content="cybersecurity, data protection, threat detection, security monitoring, vulnerability assessment, compliance" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Cybersecurity</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions designed to defend against evolving threats and ensure data security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Protected
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive security solutions to protect your digital assets and business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete cybersecurity services to keep your business secure
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <span className="text-white text-center">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's assess your security needs and implement comprehensive protection for your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Security Team
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CybersecurityPage;
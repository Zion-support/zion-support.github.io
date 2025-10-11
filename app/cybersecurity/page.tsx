'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Comprehensive security solutions to protect against evolving cyber threats.',
      benefits: ['Real-time monitoring', 'Threat detection', 'Automated response', '24/7 protection']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption to secure your sensitive data and communications.',
      benefits: ['AES-256 encryption', 'Secure key management', 'Data at rest protection', 'Transit security']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Continuous monitoring and analysis of your security posture.',
      benefits: ['SIEM solutions', 'Log analysis', 'Incident response', 'Compliance reporting']
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessment',
      description: 'Regular security assessments to identify and fix vulnerabilities.',
      benefits: ['Penetration testing', 'Vulnerability scanning', 'Risk assessment', 'Remediation guidance']
    }
  ];

  const services = [
    {
      title: 'Security Audit',
      description: 'Comprehensive security assessment of your systems and infrastructure.',
      icon: '🔍'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery services for security incidents.',
      icon: '🚨'
    },
    {
      title: 'Compliance',
      description: 'Help achieve and maintain regulatory compliance standards.',
      icon: '📋'
    },
    {
      title: 'Training',
      description: 'Security awareness training for your team.',
      icon: '🎓'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure compliance." />
        <meta name="keywords" content="cybersecurity, security solutions, threat protection, data encryption, security monitoring" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions designed to defend against evolving threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Security Audit
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced security solutions to keep your business safe from cyber threats.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security services to protect your business and ensure compliance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you implement comprehensive cybersecurity solutions to protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Security Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CybersecurityPage;
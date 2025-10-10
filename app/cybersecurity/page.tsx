'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';


const CybersecurityPage: React.FC = () => {,
  const features = [,
    'Threat Detection & Prevention',
    'Vulnerability Assessment',
    'Security Monitoring',
    'Incident Response',
    'Penetration Testing',
    'Security Audits',
    'Compliance Management',
    '24/7 Security Operations Center'
  ];

  const benefits = [
    '99.9% threat detection accuracy',
    '60% reduction in security incidents',
    '100% compliance achievement',
    '24/7 security monitoring'
  ];

  const services = [
    {
      title: 'Network Security',
      description: 'Comprehensive network protection with firewalls, intrusion detection, and monitoring',
      icon: Shield,
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced endpoint security for all devices and workstations',
      icon: Lock,
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness training and phishing simulation',
      icon: Eye,
    }
  ];return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats. Advanced security measures and 24/7 monitoring." />
        <meta name="keywords" content="cybersecurity, security solutions, threat protection, network security, data protection" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-red-400 mb-8">
              Protect your business with advanced security measures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Security Protection</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our cybersecurity solutions provide multi-layered protection against evolving threats, 
                ensuring your data and systems remain secure 24/7.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✓</span>
                  Advanced threat detection
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✓</span>
                  Incident response
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✓</span>
                  Compliance management
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Security Services</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Network Security</h4>
                  <p className="text-gray-300">Protect your network infrastructure from intrusions</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Data Protection</h4>
                  <p className="text-gray-300">Encrypt and secure your sensitive data</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Security Audits</h4>
                  <p className="text-gray-300">Regular assessments and vulnerability testing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Secure Your Business Today</h2>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
              >
                Get Security Assessment
              </a>
              <a
                href="/cybersecurity-suite"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                View Security Suite
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  ),
};

export default CybersecurityPage;
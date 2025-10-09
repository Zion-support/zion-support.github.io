
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Database, Globe, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business. Advanced threat detection, security audits, and compliance management." />
        <meta name="keywords" content="cybersecurity, security audit, threat detection, compliance, data protection" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Cybersecurity Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions. Advanced threat detection, 
                security audits, and compliance management to keep your data safe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="cyber-card p-8 text-center">
                <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Security Audit</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive assessment of your current security posture and vulnerabilities.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Vulnerability assessment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Penetration testing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Compliance review
                  </li>
                </ul>
              </div>

              <div className="cyber-card p-8 text-center">
                <Lock className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Threat Detection</h3>
                <p className="text-gray-300 mb-6">
                  Advanced monitoring and detection systems to identify and respond to threats.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    24/7 monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Real-time alerts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Incident response
                  </li>
                </ul>
              </div>

              <div className="cyber-card p-8 text-center">
                <Database className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Data Protection</h3>
                <p className="text-gray-300 mb-6">
                  Secure your sensitive data with encryption and access controls.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Data encryption
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Access controls
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Backup solutions
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our cybersecurity experts for a free security assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Assessment
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-outline px-8 py-4 text-lg font-semibold inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SecurityPage;


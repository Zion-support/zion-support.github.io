'use client';
import React, { lazy, Suspense } from 'react';
import { Shield, Lock, Database, UserCheck, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const SecurityPage: React.FC = () => {
  const securityMeasures = [
    {
      title: 'Data Encryption',
      icon: Lock,
      description: 'All data is encrypted both in transit and at rest using industry-standard encryption protocols.',
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'End-to-end encryption for sensitive communications',
        'Encrypted database backups and archives'
      ]
    },
    {
      title: 'Access Controls',
      icon: UserCheck,
      description: 'Multi-layered access controls ensure only authorized personnel can access your data.',
      details: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'Regular access reviews and audits'
      ]
    },
    {
      title: 'Network Security',
      icon: Shield,
      description: 'Advanced network security measures protect your infrastructure from external threats.',
      details: [
        'Next-generation firewalls',
        'Intrusion detection and prevention systems',
        'DDoS protection and mitigation',
        'Network segmentation and micro-segmentation'
      ]
    },
    {
      title: 'Monitoring & Detection',
      icon: AlertTriangle,
      description: 'Continuous monitoring and threat detection to identify and respond to security incidents.',
      details: [
        '24/7 security monitoring',
        'AI-powered threat detection',
        'Real-time alerting and response',
        'Security information and event management (SIEM)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Suspense fallback={<div className="h-16 bg-slate-900" />}>
        <Navigation />
      </Suspense>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Security</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with enterprise-grade security solutions designed to safeguard your data and infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <measure.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{measure.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{measure.description}</p>
                  <ul className="space-y-2">
                    {measure.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Secure Your Business Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Let us help you implement comprehensive security measures to protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Security Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-32 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default SecurityPage;
'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Lock, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and prevention systems to protect your digital assets'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit with industry-standard protocols'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response for continuous protection'
    },
    {
      icon: <Brain className="w-8 h-8 text-red-500" />,
      title: 'AI Security Analytics',
      description: 'Machine learning algorithms to identify and prevent sophisticated cyber attacks'
    }
  ];

  const benefits = [
    'Advanced threat detection and prevention',
    'Real-time security monitoring',
    'Compliance with industry standards',
    'Data encryption and protection',
    'Incident response and recovery',
    'Security awareness training',
    'Penetration testing and audits',
    '24/7 security support'
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, data protection, compliance, and security monitoring services." />
        <meta name="keywords" content="cybersecurity, threat detection, data protection, security monitoring, compliance, penetration testing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Cybersecurity</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with comprehensive cybersecurity solutions including threat detection, data protection, and compliance management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/ai-services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cybersecurity Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions to protect your business from evolving cyber threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Security Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive protection with industry-leading security practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index + 4} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Don't wait for a breach. Let's assess your security posture and implement comprehensive protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Security Assessment
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore AI Security
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;

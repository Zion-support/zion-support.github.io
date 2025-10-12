import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Eye, Lock } from 'lucide-react';
import Layout from '../layout';

export default function AdvancedSecuritySuite() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: '360° Protection',
      description: 'Comprehensive security coverage across all endpoints, networks, and cloud infrastructure'
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber attacks'
    },
    {
      icon: <Eye className="w-6 h-6 text-yellow-400" />,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring with instant threat response and automated remediation'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-400" />,
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, SOX, and other regulatory requirements with built-in compliance tools'
    }
  ];

  return (
    <Layout
      title="Advanced Security Suite - Enterprise Cybersecurity | Zion Tech Group"
      description="Comprehensive cybersecurity solution with AI threat detection, 24/7 monitoring, and compliance tools. Protect your business from advanced cyber threats. Get your free security assessment today."
      keywords="cybersecurity, threat detection, security monitoring, compliance, enterprise security, AI security"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Cybersecurity
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Advanced Security Suite
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your business with our comprehensive cybersecurity solution. AI-powered threat detection, 
                24/7 monitoring, and compliance tools to keep your data and systems secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Advanced protection against the latest cyber threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't wait for a cyber attack. Get comprehensive protection with Advanced Security Suite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300">
                Get Free Security Assessment
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
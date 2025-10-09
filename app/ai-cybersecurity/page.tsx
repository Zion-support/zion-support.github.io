'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      title: 'Threat Detection',
      description: 'Advanced AI algorithms that identify and respond to security threats in real-time.',
      icon: '🛡️'
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Automated scanning and analysis of your systems for potential security weaknesses.',
      icon: '🔍'
    },
    {
      title: 'Automated Response',
      description: 'Instant response to security incidents with AI-powered containment and remediation.',
      icon: '⚡'
    },
    {
      title: 'Behavioral Analysis',
      description: 'Monitor user and system behavior to detect anomalies and potential insider threats.',
      icon: '👁️'
    }
  ];

  const securityServices = [
    'Real-time threat monitoring',
    'Automated incident response',
    'Vulnerability scanning and patching',
    'Security policy enforcement',
    'Compliance monitoring',
    '24/7 security operations center'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Cybersecurity
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your business with AI-powered cybersecurity solutions that adapt and learn from new threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityServices.map((service, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Secure Your Business Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for a security breach. Get AI-powered protection that evolves with the threat landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Security Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AICybersecurityPage;
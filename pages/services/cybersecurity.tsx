import React from 'react';
import Layout from '../../components/Layout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Security Assessment',
    description: 'Comprehensive security audits and vulnerability assessments',
    features: ['Penetration Testing', 'Vulnerability Scanning', 'Risk Assessment', 'Compliance Audits']
  },
  {
    icon: Lock,
    title: 'Identity & Access Management',
    description: 'Secure user authentication and authorization systems',
    features: ['Multi-Factor Authentication', 'Single Sign-On', 'Role-Based Access', 'Privileged Access Management']
  },
  {
    icon: Eye,
    title: 'Security Monitoring',
    description: '24/7 threat detection and incident response',
    features: ['SIEM Implementation', 'Threat Intelligence', 'Incident Response', 'Security Analytics']
  },
  {
    icon: AlertTriangle,
    title: 'Compliance & Governance',
    description: 'Meet regulatory requirements and industry standards',
    features: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliance', 'HIPAA Compliance']
  }
];

const threats = [
  'Ransomware Protection',
  'Phishing Prevention',
  'DDoS Mitigation',
  'Data Breach Prevention',
  'Insider Threat Detection',
  'Zero-Day Exploit Protection'
];

export default function CybersecurityPage() {
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Protect your business with our comprehensive cybersecurity solutions. Security assessments, compliance, monitoring, and incident response services."
      keywords="cybersecurity, security assessment, compliance, SOC 2, ISO 27001, penetration testing, threat monitoring"
    >
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Cybersecurity
                <span className="block text-red-600">Protection</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Protect your business from evolving cyber threats with our comprehensive security 
                solutions. From risk assessment to incident response, we keep your data safe and 
                your business compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Get Security Assessment
                </button>
                <button className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  View Security Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions to protect your business from cyber threats and ensure compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Protection Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Protection Against Modern Threats
              </h2>
              <p className="text-xl text-gray-600">
                Our advanced security solutions protect against the latest cyber threats
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {threats.map((threat, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{threat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach. Let our cybersecurity experts protect your business with comprehensive security solutions.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Security Assessment
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
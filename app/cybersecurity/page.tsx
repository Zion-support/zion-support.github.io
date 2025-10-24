import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Users, Globe, Server, Key, Database, Settings } from 'lucide-react';

const CybersecurityPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and rapid response capabilities to protect against cyber attacks.',
      features: ['24/7 Monitoring', 'Threat Intelligence', 'Incident Response', 'Forensic Analysis'],
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Secure identity management and access control solutions for your organization.',
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Privileged Access', 'Identity Governance'],
    },
    {
      icon: Eye,
      title: 'Security Assessment',
      description: 'Comprehensive security assessments to identify vulnerabilities and risks.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Risk Assessment', 'Compliance Audits'],
    },
    {
      icon: Settings,
      title: 'Security Architecture',
      description: 'Design and implement robust security architectures for your infrastructure.',
      features: ['Security Design', 'Implementation', 'Integration', 'Maintenance'],
    },
  ];

  const threats = [
    'Phishing Attacks',
    'Ransomware',
    'Data Breaches',
    'Insider Threats',
    'DDoS Attacks',
    'Malware',
  ];

  const compliance = [
    'SOC 2',
    'ISO 27001',
    'PCI DSS',
    'HIPAA',
    'GDPR',
    'NIST',
  ];

  const benefits = [
    'Enhanced Security',
    'Risk Reduction',
    'Compliance',
    'Peace of Mind',
    'Cost Savings',
    'Business Continuity',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Cybersecurity</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Protect your business from evolving cyber threats with our comprehensive security solutions. 
              Stay ahead of attackers with advanced protection and rapid response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Protected
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from all angles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Cyber Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the most common cyber threats and how we protect against them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <div className="text-lg font-semibold text-gray-900">{threat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you meet industry compliance requirements and security standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((standard, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-lg font-semibold text-gray-900">{standard}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive protection that gives you peace of mind and protects your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Security Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security | Zion Tech Group',
  description: 'Our comprehensive security framework and commitment to protecting your data and systems with enterprise-grade security measures.',
  keywords: 'security, data protection, cybersecurity, information security, zion tech group',
  openGraph: {
    title: 'Security | Zion Tech Group',
    description: 'Our comprehensive security framework and commitment to protecting your data and systems with enterprise-grade security measures.',
    url: 'https://ziontechgroup.com/security',
    type: 'website',
  },
};

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
      icon: '🔐'
    },
    {
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access controls ensure only authorized personnel can access sensitive data.',
      icon: '🔑'
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat detection to identify and respond to potential security incidents.',
      icon: '👁️'
    },
    {
      title: 'Regular Audits',
      description: 'Regular security audits and penetration testing to identify and address potential vulnerabilities.',
      icon: '🔍'
    },
    {
      title: 'Compliance',
      description: 'Compliance with industry standards including SOC 2, ISO 27001, and GDPR requirements.',
      icon: '✅'
    },
    {
      title: 'Incident Response',
      description: 'Comprehensive incident response procedures to quickly address and resolve security issues.',
      icon: '🚨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Security Framework
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive security framework and commitment to protecting your data and systems with enterprise-grade security measures.
            </p>
          </div>

          {/* Security Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Commitment</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Zion Tech Group, security is at the core of everything we do. We implement comprehensive security measures 
                to protect your data, systems, and business operations from evolving cyber threats.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise-Grade Protection</h3>
                <p className="text-gray-600">Military-grade encryption and security protocols</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Monitoring</h3>
                <p className="text-gray-600">Continuous threat detection and response</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">SOC 2, ISO 27001, GDPR compliant</p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Security Standards */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Standards & Compliance</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-gray-600">Security, availability, and confidentiality controls</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ISO 27001</h3>
                <p className="text-sm text-gray-600">International information security management</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🇪🇺</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GDPR</h3>
                <p className="text-sm text-gray-600">European data protection regulation compliance</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🇺🇸</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">HIPAA</h3>
                <p className="text-sm text-gray-600">Healthcare data protection standards</p>
              </div>
            </div>
          </div>

          {/* Security Practices */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Protection</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>AES-256 encryption for data at rest</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>TLS 1.3 encryption for data in transit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Regular data backups with encryption</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Secure data deletion procedures</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Data classification and handling policies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Access Management</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Multi-factor authentication (MFA)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Role-based access controls (RBAC)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Single sign-on (SSO) integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Regular access reviews and audits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Principle of least privilege</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Incident Response */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Incident Response</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Detection</h3>
                <p className="text-sm text-gray-600">Automated monitoring detects potential threats</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-sm text-gray-600">Security team evaluates the threat level</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Response</h3>
                <p className="text-sm text-gray-600">Immediate action to contain and mitigate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Recovery</h3>
                <p className="text-sm text-gray-600">Restore normal operations and learn</p>
              </div>
            </div>
          </div>

          {/* Contact Security Team */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Security Questions?</h2>
              <p className="text-xl mb-8 opacity-90">
                Our security team is available 24/7 to address any security concerns or questions you may have.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:security@ziontechgroup.com"
                  className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 mr-4"
                >
                  Contact Security Team
                </a>
                <a
                  href="/contact"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
                >
                  General Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
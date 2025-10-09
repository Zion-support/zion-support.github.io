import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Users, AlertTriangle } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
      icon: Lock,
      details: ['AES-256 encryption for data at rest', 'TLS 1.3 for data in transit', 'End-to-end encryption for sensitive data', 'Regular encryption key rotation']
    },
    {
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access controls protect your data.',
      icon: Users,
      details: ['Multi-factor authentication required', 'Role-based access permissions', 'Regular access reviews', 'Principle of least privilege']
    },
    {
      title: 'Network Security',
      description: 'Advanced network security measures protect against external threats.',
      icon: Shield,
      details: ['Firewall protection', 'DDoS mitigation', 'Intrusion detection systems', 'Regular security audits']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging for security incident detection.',
      icon: Eye,
      details: ['24/7 security monitoring', 'Comprehensive audit logs', 'Real-time threat detection', 'Automated incident response']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Security Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures and data protection practices." />
        <meta name="keywords" content="security policy, data protection, cybersecurity, encryption, access controls" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Protecting your data with enterprise-grade security measures
              </p>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <measure.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{measure.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{measure.description}</p>
                  <ul className="space-y-2">
                    {measure.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Security Questions?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our security team for more information about our security practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@ziontechgroup.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Security Team
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SecurityPage;
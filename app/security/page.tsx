import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server, Database, Globe, Cpu, HardDrive } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using AES-256 encryption.',
      icon: '🔐',
      details: 'We use industry-standard encryption protocols to protect your data from unauthorized access.'
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with MFA for all user accounts and administrative access.',
      icon: '🔑',
      details: 'Add an extra layer of security to your account with SMS, email, or authenticator app verification.'
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify approach to network security and access control.',
      icon: '🛡️',
      details: 'Every access request is verified regardless of location or user credentials.'
    },
    {
      title: 'Regular Security Audits',
      description: 'Comprehensive security assessments conducted by third-party experts.',
      icon: '🔍',
      details: 'Regular penetration testing and vulnerability assessments to identify and address security gaps.'
    },
    {
      title: 'SOC 2 Type II Compliance',
      description: 'Certified compliance with SOC 2 Type II standards for security and availability.',
      icon: '📋',
      details: 'Independent verification of our security controls and operational procedures.'
    },
    {
      title: '24/7 Security Monitoring',
      description: 'Continuous monitoring and threat detection across all systems.',
      icon: '👁️',
      details: 'Advanced security monitoring tools and dedicated security team watching for threats around the clock.'
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: '📊'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: '🏆'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: '🇪🇺'
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: '🇺🇸'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Available',
      icon: '🏥'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: '💳'
    }
  ];

  const threatProtection = [
    {
      category: 'DDoS Protection',
      description: 'Advanced protection against distributed denial-of-service attacks',
      capabilities: ['Traffic filtering', 'Rate limiting', 'Geographic blocking', 'Real-time monitoring'],
      icon: '🌐'
    },
    {
      category: 'Malware Detection',
      description: 'Comprehensive malware scanning and prevention systems',
      capabilities: ['Real-time scanning', 'Behavioral analysis', 'Sandboxing', 'Threat intelligence'],
      icon: '🦠'
    },
    {
      category: 'Intrusion Detection',
      description: 'Advanced systems to detect and prevent unauthorized access',
      capabilities: ['Network monitoring', 'Anomaly detection', 'Automated response', 'Forensic analysis'],
      icon: '🚨'
    },
    {
      category: 'Data Loss Prevention',
      description: 'Protection against accidental or malicious data exfiltration',
      capabilities: ['Content inspection', 'Policy enforcement', 'User activity monitoring', 'Data classification'],
      icon: '📤'
    }
  ];

  const securityIncidents = [
    {
      date: '2024-11-15',
      severity: 'Low',
      description: 'Minor security alert resolved within 2 hours',
      impact: 'No data exposure or service disruption',
      status: 'Resolved'
    },
    {
      date: '2024-10-28',
      severity: 'Medium',
      description: 'Suspicious login attempts detected and blocked',
      impact: 'No unauthorized access achieved',
      status: 'Resolved'
    },
    {
      date: '2024-09-12',
      severity: 'Low',
      description: 'Routine security update applied',
      impact: 'No impact on services',
      status: 'Completed'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Enterprise-grade security measures to protect your data and ensure compliance with industry standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Security Report
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Certificates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Commitment
            </h2>
            <p className="text-xl text-gray-600">
              We take security seriously and implement multiple layers of protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <p className="text-gray-500 text-sm">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              We meet the highest industry standards for security and compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{standard.description}</p>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  standard.status === 'Certified' ? 'bg-green-100 text-green-800' :
                  standard.status === 'Compliant' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Threat Protection
            </h2>
            <p className="text-xl text-gray-600">
              Multi-layered security to protect against evolving threats
            </p>
          </div>
          <div className="space-y-8">
            {threatProtection.map((protection, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{protection.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{protection.category}</h3>
                    <p className="text-gray-600 mb-4">{protection.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {protection.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Incidents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Incident History
            </h2>
            <p className="text-xl text-gray-600">
              Transparent reporting of security events and our response
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {securityIncidents.map((incident, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{incident.description}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{incident.impact}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {incident.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Best Practices
            </h2>
            <p className="text-xl text-gray-600">
              How we maintain the highest security standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Infrastructure</h3>
              <p className="text-gray-600 text-sm">Hardened servers and network infrastructure</p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-gray-600 text-sm">Encrypted data storage and transmission</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Security</h3>
              <p className="text-gray-600 text-sm">Advanced firewall and intrusion detection</p>
            </div>
            <div className="text-center">
              <Cpu className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Security</h3>
              <p className="text-gray-600 text-sm">Secure AI model training and inference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Report a Security Issue
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            If you discover a security vulnerability, please report it to our security team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:security@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              🔒 security@ziontechgroup.com
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>We appreciate responsible disclosure and will respond within 24 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
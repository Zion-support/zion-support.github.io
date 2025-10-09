import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, FileText, Users, Server, Database, Globe } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption',
      icon: Lock,
      color: 'text-blue-400',
      status: 'Active'
    },
    {
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access controls for all systems',
      icon: Users,
      color: 'text-green-400',
      status: 'Active'
    },
    {
      title: 'Network Security',
      description: 'Advanced firewalls, DDoS protection, and intrusion detection systems',
      icon: Globe,
      color: 'text-purple-400',
      status: 'Active'
    },
    {
      title: 'Regular Audits',
      description: 'Quarterly security audits and penetration testing by third-party experts',
      icon: FileText,
      color: 'text-orange-400',
      status: 'Active'
    },
    {
      title: 'Secure Infrastructure',
      description: 'Cloud infrastructure with enterprise-grade security controls and monitoring',
      icon: Server,
      color: 'text-cyan-400',
      status: 'Active'
    },
    {
      title: 'Data Backup',
      description: 'Automated, encrypted backups with geographic redundancy and disaster recovery',
      icon: Database,
      color: 'text-pink-400',
      status: 'Active'
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'Certified',
      icon: CheckCircle,
      color: 'text-blue-400'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-purple-400'
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-orange-400'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-cyan-400'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: CheckCircle,
      color: 'text-pink-400'
    }
  ];

  const threatProtection = [
    {
      category: 'Malware Protection',
      description: 'Advanced endpoint protection and real-time threat detection',
      measures: [
        'Real-time malware scanning',
        'Behavioral analysis',
        'Sandboxing for suspicious files',
        'Automatic threat response'
      ]
    },
    {
      category: 'Phishing Prevention',
      description: 'Multi-layered protection against phishing and social engineering attacks',
      measures: [
        'Email filtering and scanning',
        'URL reputation checking',
        'User awareness training',
        'Simulated phishing tests'
      ]
    },
    {
      category: 'DDoS Mitigation',
      description: 'Comprehensive protection against distributed denial of service attacks',
      measures: [
        'Traffic analysis and filtering',
        'Rate limiting and throttling',
        'Geographic traffic distribution',
        'Automatic scaling and load balancing'
      ]
    },
    {
      category: 'Data Loss Prevention',
      description: 'Controls to prevent unauthorized data exfiltration and leakage',
      measures: [
        'Content inspection and classification',
        'Data access monitoring',
        'Automated policy enforcement',
        'User activity tracking'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and data protection practices." />
        <meta name="keywords" content="security, data protection, encryption, compliance, SOC 2, ISO 27001, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              Security
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your data security is our top priority. We implement industry-leading security measures 
              and maintain the highest standards of data protection.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>GDPR Ready</span>
              </div>
            </div>
          </section>

          {/* Security Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Our Security Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <measure.icon className={`w-8 h-8 ${measure.color}`} />
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {measure.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{measure.title}</h3>
                  <p className="text-gray-300 text-sm">{measure.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Standards */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Compliance & Certifications</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <p className="text-gray-300 mb-8 text-center">
                We maintain the highest standards of security and compliance with industry regulations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="text-center">
                    <standard.icon className={`w-12 h-12 ${standard.color} mx-auto mb-4`} />
                    <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{standard.description}</p>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {standard.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Threat Protection */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Threat Protection</h2>
            <div className="space-y-6">
              {threatProtection.map((protection, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">{protection.category}</h3>
                  <p className="text-gray-300 mb-4">{protection.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {protection.measures.map((measure, measureIndex) => (
                      <div key={measureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{measure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Data Protection</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Lock className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">Encryption</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• AES-256 encryption for data at rest</li>
                  <li>• TLS 1.3 for data in transit</li>
                  <li>• End-to-end encryption for sensitive communications</li>
                  <li>• Encrypted database backups</li>
                  <li>• Key management with hardware security modules</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Eye className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">Access Control</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Multi-factor authentication (MFA) required</li>
                  <li>• Role-based access controls (RBAC)</li>
                  <li>• Principle of least privilege</li>
                  <li>• Regular access reviews and audits</li>
                  <li>• Single sign-on (SSO) integration</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Database className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">Data Handling</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Data classification and labeling</li>
                  <li>• Automated data loss prevention</li>
                  <li>• Secure data deletion procedures</li>
                  <li>• Data retention policies</li>
                  <li>• Cross-border data transfer controls</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Server className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">Infrastructure</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Secure cloud infrastructure (AWS/Azure)</li>
                  <li>• Network segmentation and isolation</li>
                  <li>• Intrusion detection and prevention</li>
                  <li>• 24/7 security monitoring</li>
                  <li>• Automated security updates</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Incident Response */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Incident Response</h2>
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">24/7 Security Operations Center</h3>
                  <p className="text-gray-300 mb-4">
                    Our dedicated security team monitors our systems around the clock and responds 
                    immediately to any security incidents.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-2">Response Process</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Immediate threat detection and analysis</li>
                        <li>• Rapid containment and mitigation</li>
                        <li>• Forensic investigation and root cause analysis</li>
                        <li>• Recovery and system restoration</li>
                        <li>• Post-incident review and improvements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Notification</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Immediate internal notification</li>
                        <li>• Customer notification within 24 hours</li>
                        <li>• Regulatory notification as required</li>
                        <li>• Public disclosure if necessary</li>
                        <li>• Regular updates throughout resolution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Best Practices */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Security Best Practices</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">For Our Team</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Regular security training and awareness programs</li>
                    <li>• Background checks for all employees</li>
                    <li>• Confidentiality agreements and NDAs</li>
                    <li>• Secure development lifecycle (SDL)</li>
                    <li>• Code reviews and security testing</li>
                    <li>• Incident response training and drills</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">For Our Customers</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Secure API endpoints with authentication</li>
                    <li>• Data encryption in transit and at rest</li>
                    <li>• Regular security updates and patches</li>
                    <li>• Monitoring and alerting capabilities</li>
                    <li>• Compliance with industry standards</li>
                    <li>• Transparent security reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Security Team */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Security Concerns?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you discover a security vulnerability or have concerns about our security practices, 
              please report it to our security team immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Report Security Issue
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Contact Security Team
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SecurityPage;
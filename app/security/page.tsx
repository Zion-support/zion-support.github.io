import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle, ArrowRight, Award } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
      icon: Lock,
      color: 'text-green-400',
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Perfect Forward Secrecy',
        'Encrypted backups and archives'
      ]
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with multiple authentication factors for all user accounts.',
      icon: Shield,
      color: 'text-blue-400',
      details: [
        'SMS and email verification',
        'Authenticator app support',
        'Hardware security keys',
        'Biometric authentication'
      ]
    },
    {
      title: 'Access Controls',
      description: 'Granular access controls and role-based permissions to protect sensitive data.',
      icon: Eye,
      color: 'text-purple-400',
      details: [
        'Role-based access control (RBAC)',
        'Principle of least privilege',
        'Regular access reviews',
        'Privileged access management'
      ]
    },
    {
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with advanced monitoring and threat detection.',
      icon: Server,
      color: 'text-orange-400',
      details: [
        'Secure cloud hosting',
        'Network segmentation',
        'Intrusion detection systems',
        '24/7 security monitoring'
      ]
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Comprehensive audit of our security, availability, and confidentiality controls.',
      icon: Award,
      color: 'text-green-400'
    },
    {
      name: 'ISO 27001',
      status: 'Certified',
      description: 'International standard for information security management systems.',
      icon: Award,
      color: 'text-blue-400'
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'Full compliance with European data protection regulations.',
      icon: Shield,
      color: 'text-purple-400'
    },
    {
      name: 'CCPA',
      status: 'Compliant',
      description: 'California Consumer Privacy Act compliance for data protection.',
      icon: Lock,
      color: 'text-orange-400'
    }
  ];

  const securityMeasures = [
    {
      category: 'Physical Security',
      measures: [
        'Secure data centers with 24/7 monitoring',
        'Biometric access controls',
        'Video surveillance and security guards',
        'Environmental controls and fire suppression'
      ]
    },
    {
      category: 'Network Security',
      measures: [
        'Firewalls and intrusion prevention systems',
        'DDoS protection and mitigation',
        'Network segmentation and isolation',
        'Regular penetration testing'
      ]
    },
    {
      category: 'Application Security',
      measures: [
        'Secure coding practices and code reviews',
        'Automated vulnerability scanning',
        'Regular security updates and patches',
        'Input validation and output encoding'
      ]
    },
    {
      category: 'Data Protection',
      measures: [
        'Data classification and handling procedures',
        'Secure data disposal and destruction',
        'Data loss prevention (DLP) systems',
        'Regular data backups and recovery testing'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures 
            and maintain the highest compliance standards to protect your information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Security Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/compliance"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Compliance Report
            </Link>
          </div>
        </div>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <feature.icon className={`w-12 h-12 ${feature.color} flex-shrink-0`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-lg mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Compliance & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <standard.icon className={`w-12 h-12 ${standard.color} mx-auto mb-4`} />
                <h3 className="text-lg font-bold text-white mb-2">{standard.name}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                  standard.status === 'Certified' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                }`}>
                  {standard.status}
                </div>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Comprehensive Security Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((category, index) => (
              <div key={index} className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security Monitoring */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <div className="flex items-center space-x-4 mb-6">
              <AlertTriangle className="w-12 h-12 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">24/7 Security Monitoring</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Our security operations center (SOC) monitors our systems around the clock to detect and respond to threats.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">&lt; 5min</div>
                <div className="text-gray-300">Incident Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Detection Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">
              Incident Response Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Detection</h3>
                <p className="text-gray-300 text-sm">Automated monitoring detects potential security incidents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Analysis</h3>
                <p className="text-gray-300 text-sm">Security team analyzes and validates the incident</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Containment</h3>
                <p className="text-gray-300 text-sm">Immediate containment measures to prevent further damage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Recovery</h3>
                <p className="text-gray-300 text-sm">System restoration and security improvements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Security Concerns?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you discover a security vulnerability or have security concerns, please report them to our security team immediately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Security Team</h3>
              <p className="text-cyan-400">security@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Emergency Contact</h3>
              <p className="text-cyan-400">+1 (302) 464-0950</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Report Security Issue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/privacy"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Privacy Policy
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SecurityPage;
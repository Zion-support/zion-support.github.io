import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap, Brain, Code, Database } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
      icon: Lock,
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'End-to-end encryption for sensitive communications',
        'Regular encryption key rotation'
      ]
    },
    {
      title: 'Access Controls',
      description: 'Multi-layered access controls ensure only authorized personnel can access your data.',
      icon: Eye,
      details: [
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA)',
        'Principle of least privilege',
        'Regular access reviews and audits'
      ]
    },
    {
      title: 'Network Security',
      description: 'Advanced network security measures protect against external threats.',
      icon: Shield,
      details: [
        'Firewall protection and intrusion detection',
        'DDoS mitigation and protection',
        'Secure VPN access for remote workers',
        'Network segmentation and isolation'
      ]
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging for security incident detection and response.',
      icon: AlertTriangle,
      details: [
        '24/7 security monitoring',
        'Real-time threat detection',
        'Comprehensive audit logging',
        'Automated incident response'
      ]
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Security, availability, and confidentiality controls',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'ISO 27001',
      status: 'Certified',
      description: 'Information security management system',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'CCPA',
      status: 'Compliant',
      description: 'California Consumer Privacy Act',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'HIPAA',
      status: 'Compliant',
      description: 'Health Insurance Portability and Accountability Act',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      name: 'PCI DSS',
      status: 'Compliant',
      description: 'Payment Card Industry Data Security Standard',
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  const securityFeatures = [
    {
      category: 'Infrastructure Security',
      icon: Database,
      features: [
        'Secure cloud infrastructure with AWS/Azure',
        'Regular security patches and updates',
        'Redundant systems for high availability',
        'Geographic data distribution'
      ]
    },
    {
      category: 'Application Security',
      icon: Code,
      features: [
        'Secure coding practices and code reviews',
        'Automated vulnerability scanning',
        'Penetration testing and security audits',
        'API security and rate limiting'
      ]
    },
    {
      category: 'AI Security',
      icon: Brain,
      features: [
        'Secure AI model training and deployment',
        'Data privacy in machine learning',
        'Model integrity and validation',
        'Adversarial attack protection'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures 
            and maintain compliance with the highest standards to protect your information.
          </p>
        </div>

        {/* Security Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl p-12 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-12 h-12 text-green-400" />
              <h2 className="text-3xl font-bold text-white">Security First Approach</h2>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We employ a comprehensive security framework that protects your data at every level, 
              from infrastructure to application to user access.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-300">Security Breaches</div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Security Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <measure.icon className="w-10 h-10 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">{measure.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{measure.description}</p>
                <ul className="space-y-3">
                  {measure.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <standard.icon className={`w-12 h-12 ${standard.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 mb-3">{standard.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${standard.color} bg-green-400/20`}>
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Security Features by Category */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Data Protection</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Data Classification</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <span><strong>Public:</strong> Information that can be freely shared</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                    <span><strong>Internal:</strong> Information for internal use only</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                    <span><strong>Confidential:</strong> Sensitive business information</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-4 h-4 bg-red-600 rounded-full mr-3"></div>
                    <span><strong>Restricted:</strong> Highly sensitive personal data</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Data Handling</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Data minimization and purpose limitation</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Regular data retention reviews</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Secure data disposal procedures</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Cross-border data transfer controls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Incident Response</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Detection</h3>
                <p className="text-gray-300 text-sm">Automated monitoring detects security incidents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Security team assesses the scope and impact</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Containment</h3>
                <p className="text-gray-300 text-sm">Immediate actions to contain the threat</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Recovery</h3>
                <p className="text-gray-300 text-sm">Restore services and prevent future incidents</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Security Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions about our security practices or need to report a security concern? 
            Contact our security team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@ziontechgroup.com"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              security@ziontechgroup.com
            </a>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecurityPage;
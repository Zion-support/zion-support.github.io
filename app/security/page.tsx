import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server, Key, FileText, Award, Zap } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
      icon: Lock,
      details: ['TLS 1.3 for data in transit', 'AES-256 for data at rest', 'Perfect Forward Secrecy', 'Certificate pinning']
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with multiple authentication factors for all user accounts.',
      icon: Key,
      details: ['SMS-based 2FA', 'Authenticator app support', 'Hardware security keys', 'Biometric authentication']
    },
    {
      title: 'Regular Security Audits',
      description: 'Comprehensive security assessments conducted by third-party experts.',
      icon: Shield,
      details: ['Quarterly penetration testing', 'Vulnerability assessments', 'Code security reviews', 'Infrastructure audits']
    },
    {
      title: 'Access Controls',
      description: 'Role-based access controls with principle of least privilege.',
      icon: Eye,
      details: ['Role-based permissions', 'Regular access reviews', 'Privileged access management', 'Session monitoring']
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive backup strategies with tested recovery procedures.',
      icon: Server,
      details: ['Daily encrypted backups', 'Geographic redundancy', 'Point-in-time recovery', 'Disaster recovery testing']
    },
    {
      title: 'Incident Response',
      description: '24/7 security monitoring with rapid incident response capabilities.',
      icon: AlertTriangle,
      details: ['24/7 SOC monitoring', 'Automated threat detection', 'Incident response team', 'Customer notification system']
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System',
      icon: Award,
      status: 'Certified'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, Availability, and Confidentiality',
      icon: Award,
      status: 'Certified'
    },
    {
      name: 'GDPR Compliant',
      description: 'General Data Protection Regulation',
      icon: Shield,
      status: 'Compliant'
    },
    {
      name: 'HIPAA Ready',
      description: 'Health Insurance Portability and Accountability Act',
      icon: FileText,
      status: 'Ready'
    }
  ];

  const securityMeasures = [
    'Network segmentation and firewalls',
    'Intrusion detection and prevention systems',
    'Regular security training for all staff',
    'Secure development lifecycle (SDL)',
    'Automated security scanning in CI/CD',
    'Regular dependency vulnerability scanning',
    'Data loss prevention (DLP) systems',
    'Security information and event management (SIEM)',
    'Regular penetration testing',
    'Zero-trust network architecture'
  ];

  const threatProtection = [
    {
      threat: 'DDoS Attacks',
      protection: 'Advanced DDoS mitigation with automatic scaling',
      status: 'Protected'
    },
    {
      threat: 'SQL Injection',
      protection: 'Parameterized queries and input validation',
      status: 'Protected'
    },
    {
      threat: 'Cross-Site Scripting (XSS)',
      protection: 'Content Security Policy and input sanitization',
      status: 'Protected'
    },
    {
      threat: 'Man-in-the-Middle',
      protection: 'Certificate pinning and HSTS headers',
      status: 'Protected'
    },
    {
      threat: 'Brute Force Attacks',
      protection: 'Rate limiting and account lockout policies',
      status: 'Protected'
    },
    {
      threat: 'Data Breaches',
      protection: 'Encryption, access controls, and monitoring',
      status: 'Protected'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/security" className="text-cyan-400 font-semibold">Security</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Shield className="w-16 h-16 text-cyan-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Security <span className="text-cyan-400">First</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures 
            to protect your information and maintain the highest standards of data protection.
          </p>
        </div>

        {/* Security Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Security Approach</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Defense in Depth</h3>
                <p className="text-gray-300 mb-4">
                  We employ multiple layers of security controls to protect your data, including 
                  network security, application security, data encryption, and access controls.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Network perimeter protection</li>
                  <li>• Application-level security controls</li>
                  <li>• Database and storage encryption</li>
                  <li>• User access management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Continuous Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Our security operations center (SOC) monitors our systems 24/7 to detect and 
                  respond to any potential security threats in real-time.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• 24/7 security monitoring</li>
                  <li>• Automated threat detection</li>
                  <li>• Rapid incident response</li>
                  <li>• Regular security updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-400 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Security Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Threat Protection */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Threat Protection</h2>
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Threat Type</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Protection Method</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {threatProtection.map((threat, index) => (
                    <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <AlertTriangle className="w-5 h-5 text-orange-400" />
                          <span className="text-white font-medium">{threat.threat}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{threat.protection}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {threat.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Additional Security Measures</h2>
          <div className="bg-slate-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Incident Response</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                Response Process
              </h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-cyan-400 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                  <span>Detection and analysis of security incidents</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-400 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                  <span>Immediate containment and mitigation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-400 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                  <span>Investigation and root cause analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-400 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                  <span>Recovery and system restoration</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-400 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                  <span>Post-incident review and improvements</span>
                </li>
              </ol>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-cyan-400 mr-2" />
                Reporting Security Issues
              </h3>
              <p className="text-gray-300 mb-4">
                If you discover a security vulnerability or have concerns about our security practices, 
                please report it to us immediately.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Email</h4>
                  <p className="text-gray-300 text-sm">security@ziontechgroup.com</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300 text-sm">+1 302 464 0950</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">Response Time</h4>
                  <p className="text-gray-300 text-sm">Within 24 hours for critical issues</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Security Questions?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our security team is available to answer any questions about our security practices 
            and help you understand how we protect your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Contact Security Team
            </Link>
            <Link
              to="/compliance"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Compliance Info
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SecurityPage;
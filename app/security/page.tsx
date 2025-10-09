import React from 'react';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Server } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols.'
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Enhanced security with MFA for all user accounts and administrative access.'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring and threat detection across all systems.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security infrastructure with regular security audits.'
    }
  ];

  const certifications = [
    'SOC 2 Type II Certified',
    'ISO 27001 Compliant',
    'GDPR Compliant',
    'HIPAA Ready',
    'PCI DSS Level 1'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Security & Compliance
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Your data security is our top priority. Learn about our comprehensive security measures and compliance standards.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-8">
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Security Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Measures */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Security Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Data Protection</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AES-256 encryption for data at rest</li>
                <li>• TLS 1.3 for data in transit</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Secure key management and rotation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Access Control</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Role-based access control (RBAC)</li>
                <li>• Multi-factor authentication (MFA)</li>
                <li>• Single sign-on (SSO) integration</li>
                <li>• Regular access reviews and audits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Incident Response */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Incident Response</h2>
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <p className="text-gray-300 mb-6">
              In the unlikely event of a security incident, we have a comprehensive response plan 
              to minimize impact and notify affected parties within 72 hours.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg max-w-md mx-auto">
              <p className="text-white font-medium">Security Incident Contact</p>
              <p className="text-gray-300">Email: security@ziontechgroup.com</p>
              <p className="text-gray-300">Phone: +1 (302) 464-0950</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Security?</h2>
          <p className="text-gray-300 mb-6">Our security team is available to answer any questions you may have.</p>
          <a 
            href="mailto:security@ziontechgroup.com"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Security Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;

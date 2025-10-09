import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted using industry-standard AES-256 encryption.',
      icon: '🔐',
      details: [
        'Data encryption at rest',
        'Data encryption in transit',
        'Key management system',
        'Regular security audits'
      ]
    },
    {
      title: 'Multi-Factor Authentication',
      description: 'Advanced authentication system with multiple verification layers.',
      icon: '🔑',
      details: [
        'Biometric authentication',
        'SMS verification',
        'Hardware tokens',
        'Risk-based authentication'
      ]
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify security model for maximum protection.',
      icon: '🛡️',
      details: [
        'Identity verification',
        'Device trust scoring',
        'Network segmentation',
        'Continuous monitoring'
      ]
    },
    {
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock security monitoring and threat detection.',
      icon: '👁️',
      details: [
        'Real-time threat detection',
        'Automated incident response',
        'Security analytics',
        'Expert security team'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Security & Privacy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your data security is our top priority. We implement enterprise-grade security measures to protect your information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{feature.description}</p>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cyber-card hologram-card p-8 text-center mb-16">
          <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Security Certifications</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We maintain the highest security standards with industry-leading certifications and compliance frameworks.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">SOC 2</div>
              <div className="text-sm text-gray-300">Type II Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">ISO 27001</div>
              <div className="text-sm text-gray-300">Information Security</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">GDPR</div>
              <div className="text-sm text-gray-300">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">HIPAA</div>
              <div className="text-sm text-gray-300">Compliant</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Security Questions?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our security team is available to answer any questions about our security measures and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Contact Security Team
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Security Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;

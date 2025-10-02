import React from 'react';

export const metadata = {
  title: 'Security - Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s security practices and commitment to protecting your data.',
  keywords: 'security, data protection, cybersecurity, information security, compliance',
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
      icon: '🛡️'
    },
    {
      title: 'Regular Audits',
      description: 'We conduct regular security audits and penetration testing to identify and address vulnerabilities.',
      icon: '🔍'
    },
    {
      title: 'Compliance Standards',
      description: 'We adhere to industry standards including SOC 2, ISO 27001, and GDPR compliance requirements.',
      icon: '📋'
    },
    {
      title: 'Incident Response',
      description: 'Our 24/7 security monitoring and incident response team ensures rapid detection and mitigation of threats.',
      icon: '⚡'
    },
    {
      title: 'Secure Development',
      description: 'We follow secure coding practices and implement security testing throughout our development lifecycle.',
      icon: '🔧'
    }
  ];

  const complianceStandards = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR Compliance',
    'CCPA Compliance',
    'HIPAA Ready',
    'PCI DSS',
    'NIST Framework',
    'CIS Controls'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Security & Compliance
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your data security is our top priority. Learn about our comprehensive security measures 
          and compliance standards that protect your information.
        </p>
      </div>

      {/* Security Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Security Framework</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Compliance & Certifications</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-lg text-gray-700 mb-6 text-center">
            We maintain compliance with industry-leading security standards and certifications:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border">
                <span className="font-semibold text-gray-900">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Practices */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Security Practices</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure Security</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Multi-layered network security with firewalls and intrusion detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Regular security updates and patch management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Secure cloud infrastructure with redundant systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>24/7 monitoring and threat detection</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>AES-256 encryption for data at rest</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>TLS 1.3 encryption for data in transit</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Regular automated backups with encryption</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Data retention policies and secure deletion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security Monitoring */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Continuous Security Monitoring</h2>
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700">Security Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt;5min</div>
              <div className="text-gray-700">Incident Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-700">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Response */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Incident Response Plan</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Detection</h3>
            <p className="text-gray-600">Automated monitoring detects security incidents in real-time</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
            <p className="text-gray-600">Security team assesses the scope and impact of the incident</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Containment</h3>
            <p className="text-gray-600">Immediate containment measures prevent further damage</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Recovery</h3>
            <p className="text-gray-600">Systems are restored and lessons learned are applied</p>
          </div>
        </div>
      </div>

      {/* Security Contact */}
      <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Security Concerns?</h2>
        <p className="text-gray-300 mb-6">
          If you discover a security vulnerability or have security concerns, please contact our security team immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:security@ziontechgroup.com" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Report Security Issue
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            Contact Security Team
          </a>
        </div>
      </div>
    </div>
  );
}
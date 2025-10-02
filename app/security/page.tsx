import React from 'react';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Enterprise-grade security measures and compliance standards to protect your data and business. 
              Your security is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security measures protecting your data and infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Data Encryption</h3>
              <p className="text-gray-600 mb-4">
                End-to-end encryption for data in transit and at rest using industry-standard protocols.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• AES-256 encryption</li>
                <li>• TLS 1.3 for data transmission</li>
                <li>• Encrypted database storage</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Access Control</h3>
              <p className="text-gray-600 mb-4">
                Multi-factor authentication and role-based access controls to secure your systems.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Multi-factor authentication</li>
                <li>• Role-based permissions</li>
                <li>• Single sign-on (SSO)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Monitoring & Detection</h3>
              <p className="text-gray-600 mb-4">
                Real-time security monitoring and threat detection across all systems and networks.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• 24/7 security monitoring</li>
                <li>• Intrusion detection systems</li>
                <li>• Automated threat response</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Compliance Standards</h3>
              <p className="text-gray-600 mb-4">
                Adherence to industry-leading compliance standards and certifications.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• SOC 2 Type II</li>
                <li>• GDPR compliance</li>
                <li>• HIPAA ready</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">Backup & Recovery</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive backup strategies and disaster recovery plans to protect your data.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Automated daily backups</li>
                <li>• Geographic redundancy</li>
                <li>• Rapid recovery procedures</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-3">Network Security</h3>
              <p className="text-gray-600 mb-4">
                Advanced network security measures including firewalls and VPN access.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Next-generation firewalls</li>
                <li>• VPN access controls</li>
                <li>• Network segmentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meeting the highest industry standards for security and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <div className="font-semibold text-gray-900">SOC 2 Type II</div>
              <div className="text-gray-600">Security & Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <div className="font-semibold text-gray-900">GDPR</div>
              <div className="text-gray-600">Data Protection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <div className="font-semibold text-gray-900">HIPAA</div>
              <div className="text-gray-600">Healthcare Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <div className="font-semibold text-gray-900">ISO 27001</div>
              <div className="text-gray-600">Information Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we protect your data and maintain security standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Data Protection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Regular security audits and penetration testing</li>
                <li>• Employee security training and awareness programs</li>
                <li>• Secure development lifecycle (SDL) practices</li>
                <li>• Regular software updates and patch management</li>
                <li>• Incident response and breach notification procedures</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Infrastructure Security</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Zero-trust network architecture</li>
                <li>• Container security scanning and hardening</li>
                <li>• Cloud security posture management</li>
                <li>• Regular vulnerability assessments</li>
                <li>• Security information and event management (SIEM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to maintaining the highest security standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
              <div className="text-gray-600">Security Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">0</div>
              <div className="text-gray-600">Security Breaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Security Questions or Concerns?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our security team is available 24/7 to address any security-related questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Security Team
            </Link>
            <a 
              href="mailto:security@ziontechgroup.com" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              security@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
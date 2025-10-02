import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security - Zion Tech Group',
  description: 'Security information for Zion Tech Group - Our commitment to protecting your data and maintaining the highest security standards.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Security() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Security</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Security Commitment</h2>
          <p className="text-gray-700 mb-4">
            At Zion Tech Group, security is at the core of everything we do. We are committed to 
            protecting your data and maintaining the highest security standards across all our 
            AI and IT services. Our security program is designed to safeguard your information 
            against evolving threats.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Encryption</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• AES-256 encryption for data at rest</li>
                <li>• TLS 1.3 for data in transit</li>
                <li>• End-to-end encryption for sensitive communications</li>
                <li>• Key management with hardware security modules</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Access Control</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Multi-factor authentication (MFA)</li>
                <li>• Role-based access controls (RBAC)</li>
                <li>• Principle of least privilege</li>
                <li>• Regular access reviews and audits</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Infrastructure Security</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Cloud Security</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• SOC 2 Type II compliant infrastructure</li>
                <li>• ISO 27001 certified data centers</li>
                <li>• Regular security assessments</li>
                <li>• Automated threat detection</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Network Security</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Firewall protection and intrusion detection</li>
                <li>• DDoS mitigation and traffic filtering</li>
                <li>• VPN and secure remote access</li>
                <li>• Network segmentation and isolation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Security</h2>
          <p className="text-gray-700 mb-4">
            Our AI services incorporate advanced security measures to protect both data and models:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Model Security:</strong> Secure model training and deployment pipelines</li>
            <li><strong>Data Privacy:</strong> Differential privacy and federated learning techniques</li>
            <li><strong>Adversarial Protection:</strong> Robustness testing and adversarial training</li>
            <li><strong>Bias Detection:</strong> Regular bias audits and fairness assessments</li>
            <li><strong>Explainability:</strong> Transparent AI decision-making processes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-gray-600">Security, availability, and confidentiality controls</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-900 mb-2">ISO 27001</h3>
              <p className="text-sm text-gray-600">Information security management system</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-sm text-gray-600">European data protection regulation</p>
            </div>
          </div>
          <p className="text-gray-700">
            We maintain compliance with industry standards and regulations including GDPR, CCPA, 
            HIPAA (for applicable services), and other regional data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Incident Response</h2>
          <p className="text-gray-700 mb-4">
            We have a comprehensive incident response plan to quickly detect, assess, and respond 
            to security incidents:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>24/7 security monitoring and threat detection</li>
            <li>Automated incident escalation procedures</li>
            <li>Dedicated security response team</li>
            <li>Regular incident response drills and testing</li>
            <li>Customer notification procedures for security incidents</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Monitoring</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Threat Detection</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Real-time security monitoring</li>
                <li>• Behavioral analytics and anomaly detection</li>
                <li>• Machine learning-powered threat identification</li>
                <li>• Integration with threat intelligence feeds</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">Vulnerability Management</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Regular vulnerability assessments</li>
                <li>• Automated security scanning</li>
                <li>• Penetration testing and red team exercises</li>
                <li>• Patch management and security updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Employee Security</h2>
          <p className="text-gray-700 mb-4">
            Our team undergoes rigorous security training and background checks:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Comprehensive background checks for all employees</li>
            <li>Regular security awareness training</li>
            <li>Confidentiality agreements and security policies</li>
            <li>Secure development lifecycle (SDL) training</li>
            <li>Regular security certification maintenance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Security</h2>
          <p className="text-gray-700 mb-4">
            We carefully vet all third-party vendors and service providers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Security assessment of all vendors</li>
            <li>Contractual security requirements</li>
            <li>Regular vendor security reviews</li>
            <li>Incident notification procedures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reporting Security Issues</h2>
          <p className="text-gray-700 mb-4">
            If you discover a security vulnerability or have security concerns, please report them to us:
          </p>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Security Contact</h3>
            <p className="text-yellow-800 mb-2">
              <strong>Email:</strong> security@ziontechgroup.com
            </p>
            <p className="text-yellow-800 text-sm">
              Please include as much detail as possible about the security issue, including steps 
              to reproduce it if applicable. We will respond within 24 hours.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Updates</h2>
          <p className="text-gray-700 mb-4">
            We regularly update our security practices and will notify customers of any significant 
            changes. For the latest security information and updates, please visit this page regularly 
            or subscribe to our security notifications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            For security-related questions or concerns, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Zion Tech Group Security Team</strong><br />
              364 E Main St STE 1008<br />
              Middletown, DE 19709
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Security Email:</strong> security@ziontechgroup.com<br />
              <strong>General Contact:</strong> kleber@ziontechgroup.com<br />
              <strong>Phone:</strong> +1 302 464 0950
            </p>
          </div>
        </section>
      </div>
=======
import Link from 'next/link';

export const metadata = {
  title: 'Security - Zion Tech Group',
  description: 'Security measures, compliance, and data protection practices at Zion Tech Group.',
  keywords: 'security, data protection, compliance, cybersecurity, SOC 2',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your data security is our top priority. We implement industry-leading security measures 
              and maintain strict compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Security Consultation
              </Link>
              <Link 
                href="/services/cybersecurity-solutions" 
                className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Our Security Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Measures
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security framework protecting your data and systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Encryption</h3>
              <p className="text-gray-600">
                End-to-end encryption for data in transit and at rest using industry-standard protocols.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Access Controls</h3>
              <p className="text-gray-600">
                Multi-factor authentication and role-based access controls to protect sensitive data.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring & Detection</h3>
              <p className="text-gray-600">
                24/7 security monitoring with real-time threat detection and response capabilities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Infrastructure</h3>
              <p className="text-gray-600">
                Enterprise-grade cloud infrastructure with redundant security layers and failover systems.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance</h3>
              <p className="text-gray-600">
                SOC 2 Type II, GDPR, and industry-specific compliance standards.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Audits</h3>
              <p className="text-gray-600">
                Regular security assessments and penetration testing by third-party experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of compliance and certification
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">SOC 2</div>
              <div className="text-gray-600">Type II Certified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">GDPR</div>
              <div className="text-gray-600">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">ISO 27001</div>
              <div className="text-gray-600">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">HIPAA</div>
              <div className="text-gray-600">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge security technologies protecting your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Threat Detection</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Machine learning algorithms for anomaly detection
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Behavioral analysis and pattern recognition
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Automated threat response and mitigation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Real-time security intelligence updates
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Zero Trust Architecture</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Never trust, always verify approach
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Micro-segmentation and least privilege access
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Continuous authentication and authorization
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Comprehensive audit trails and logging
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Partner with us to implement enterprise-grade security solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Security Assessment
            </Link>
            <Link 
              href="/services/cybersecurity-solutions" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View Security Services
            </Link>
          </div>
        </div>
      </section>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7
    </div>
  );
}
import React from 'react';
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
    </div>
  );
}
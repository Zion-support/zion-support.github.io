import React from 'react';
import { Helmet } from 'react-helmet-async';

const SecurityPage = () => {
  return (
    <>
      <Helmet>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's security measures, certifications, and commitment to protecting your data." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your security is our top priority. Learn about our comprehensive security measures, 
              certifications, and commitment to protecting your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Encryption</h3>
              <p className="text-gray-300 mb-6">
                All data is encrypted both in transit and at rest using industry-standard encryption protocols.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AES-256 encryption at rest</li>
                <li>• TLS 1.3 for data in transit</li>
                <li>• End-to-end encryption</li>
                <li>• Key management systems</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Access Control</h3>
              <p className="text-gray-300 mb-6">
                Multi-layered access control systems ensure only authorized personnel can access your data.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Multi-factor authentication</li>
                <li>• Role-based access control</li>
                <li>• Single sign-on (SSO)</li>
                <li>• Privileged access management</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Network Security</h3>
              <p className="text-gray-300 mb-6">
                Advanced network security measures protect against external threats and unauthorized access.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Firewall protection</li>
                <li>• Intrusion detection systems</li>
                <li>• DDoS mitigation</li>
                <li>• Network segmentation</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Compliance</h3>
              <p className="text-gray-300 mb-6">
                We maintain compliance with major security and privacy standards to protect your data.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• SOC 2 Type II certified</li>
                <li>• ISO 27001 compliant</li>
                <li>• GDPR compliant</li>
                <li>• HIPAA ready</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Monitoring</h3>
              <p className="text-gray-300 mb-6">
                24/7 security monitoring and threat detection to identify and respond to potential threats.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time threat detection</li>
                <li>• Security event monitoring</li>
                <li>• Automated incident response</li>
                <li>• Security analytics</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Incident Response</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive incident response procedures to quickly address and resolve security issues.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 24/7 security team</li>
                <li>• Incident response plan</li>
                <li>• Forensic capabilities</li>
                <li>• Communication protocols</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SOC</span>
                </div>
                <h3 className="font-bold mb-2">SOC 2 Type II</h3>
                <p className="text-gray-300 text-sm">
                  Audited controls for security, availability, and confidentiality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ISO</span>
                </div>
                <h3 className="font-bold mb-2">ISO 27001</h3>
                <p className="text-gray-300 text-sm">
                  Information security management system certification
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GDPR</span>
                </div>
                <h3 className="font-bold mb-2">GDPR Compliant</h3>
                <p className="text-gray-300 text-sm">
                  European data protection regulation compliance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">HIPAA</span>
                </div>
                <h3 className="font-bold mb-2">HIPAA Ready</h3>
                <p className="text-gray-300 text-sm">
                  Healthcare data protection compliance
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">For Our Team</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Regular security training and awareness programs</li>
                  <li>• Background checks for all employees</li>
                  <li>• Principle of least privilege access</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Incident response training</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">For Our Infrastructure</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Regular security updates and patches</li>
                  <li>• Vulnerability scanning and penetration testing</li>
                  <li>• Secure coding practices</li>
                  <li>• Infrastructure as code security</li>
                  <li>• Continuous security monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Questions About Security?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our security team is available to answer any questions about our security measures and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Security Team
              </a>
              <a
                href="/compliance"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPage;
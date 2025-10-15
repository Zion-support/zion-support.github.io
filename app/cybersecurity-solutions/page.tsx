import React from 'react';
import SEOHead from '../components/SEOHead';

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions to protect your business from evolving cyber threats including security audits, threat detection, and data protection."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with our comprehensive cybersecurity solutions designed to defend against evolving threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Security Audits</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security assessments to identify vulnerabilities and risks.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Vulnerability Assessment</li>
                <li>• Penetration Testing</li>
                <li>• Compliance Audits</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced monitoring and detection systems to identify threats in real-time.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 24/7 Monitoring</li>
                <li>• AI-Powered Detection</li>
                <li>• Incident Response</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
              <p className="text-gray-300 mb-4">
                Secure your sensitive data with encryption and access controls.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Data Encryption</li>
                <li>• Access Management</li>
                <li>• Backup Solutions</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Network Security</h3>
              <p className="text-gray-300 mb-4">
                Protect your network infrastructure from external and internal threats.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Firewall Management</li>
                <li>• Intrusion Prevention</li>
                <li>• VPN Solutions</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Compliance</h3>
              <p className="text-gray-300 mb-4">
                Ensure compliance with industry standards and regulations.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• GDPR Compliance</li>
                <li>• HIPAA Compliance</li>
                <li>• SOC 2 Certification</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Security Training</h3>
              <p className="text-gray-300 mb-4">
                Educate your team on cybersecurity best practices and awareness.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Employee Training</li>
                <li>• Phishing Simulations</li>
                <li>• Security Awareness</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Get Started with Cybersecurity
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecuritySolutionsPage;
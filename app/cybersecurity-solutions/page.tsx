import React from 'react';
import SEOHead from '../components/SEOHead';

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions including security audits, threat detection, data protection, and compliance management for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business from evolving cyber threats with our comprehensive security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Security Audits</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security assessments to identify vulnerabilities and risks in your systems.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Vulnerability Assessment</li>
                <li>• Penetration Testing</li>
                <li>• Security Compliance Review</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced threat detection and monitoring systems to identify and respond to security incidents.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 24/7 Monitoring</li>
                <li>• Real-time Alerts</li>
                <li>• Incident Response</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive data protection strategies to safeguard your sensitive information.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Encryption Services</li>
                <li>• Backup Solutions</li>
                <li>• Data Loss Prevention</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Compliance Management</h3>
              <p className="text-gray-300 mb-4">
                Ensure compliance with industry regulations and standards for data security.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• GDPR Compliance</li>
                <li>• HIPAA Compliance</li>
                <li>• SOC 2 Compliance</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Security Training</h3>
              <p className="text-gray-300 mb-4">
                Employee security awareness training to prevent human error and social engineering attacks.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Phishing Simulation</li>
                <li>• Security Awareness Training</li>
                <li>• Best Practices Education</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Managed Security</h3>
              <p className="text-gray-300 mb-4">
                Complete managed security services to handle all aspects of your cybersecurity needs.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Security Operations Center</li>
                <li>• Managed Firewall</li>
                <li>• Security Updates</li>
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
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Security Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Security Audits</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security assessments to identify vulnerabilities and strengthen your defenses.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Vulnerability Assessment</li>
                <li>• Penetration Testing</li>
                <li>• Security Architecture Review</li>
                <li>• Compliance Audits</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Threat Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced monitoring and detection systems to identify and respond to security threats.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• 24/7 Security Monitoring</li>
                <li>• Threat Intelligence</li>
                <li>• Incident Response</li>
                <li>• Security Analytics</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Compliance Management</h3>
              <p className="text-gray-300 mb-4">
                Ensure your business meets industry standards and regulatory requirements.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• GDPR Compliance</li>
                <li>• HIPAA Compliance</li>
                <li>• SOC 2 Certification</li>
                <li>• ISO 27001</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity - Zion Tech Group | Advanced Security Solutions</title>
        <meta
          name="description"
          content="Protect your business with our comprehensive cybersecurity solutions. Advanced threat detection, security audits, and compliance management from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="cybersecurity, security solutions, threat detection, security audit, compliance, data protection, network security"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with our comprehensive cybersecurity solutions. Advanced threat detection, 
              security audits, and compliance management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Threat Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI-powered threat detection and response systems to protect your infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time monitoring</li>
                <li>• AI threat analysis</li>
                <li>• Automated response</li>
                <li>• 24/7 surveillance</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Security Audit</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security assessments to identify vulnerabilities and strengthen your defenses.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Vulnerability scanning</li>
                <li>• Penetration testing</li>
                <li>• Compliance checks</li>
                <li>• Security recommendations</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Data Protection</h3>
              <p className="text-gray-300 mb-4">
                Advanced encryption and data protection solutions to safeguard your sensitive information.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• End-to-end encryption</li>
                <li>• Data backup solutions</li>
                <li>• Access controls</li>
                <li>• Privacy compliance</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300">
              Get Started with Cybersecurity
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityPage;

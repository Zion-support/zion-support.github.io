import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and security audits." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your digital assets with our comprehensive cybersecurity solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Threat Detection</h3>
              <p className="text-gray-300 mb-4">
                Advanced threat detection and response systems to protect against cyber attacks.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time Monitoring</li>
                <li>• AI-powered Detection</li>
                <li>• Incident Response</li>
                <li>• 24/7 Support</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">Vulnerability Assessment</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security audits to identify and fix vulnerabilities.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Penetration Testing</li>
                <li>• Security Audits</li>
                <li>• Compliance Checks</li>
                <li>• Risk Assessment</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Security Training</h3>
              <p className="text-gray-300 mb-4">
                Educate your team on cybersecurity best practices and threat awareness.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Employee Training</li>
                <li>• Phishing Simulations</li>
                <li>• Security Policies</li>
                <li>• Awareness Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityPage;
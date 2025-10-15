import React from 'react';
import { Helmet } from 'react-helmet-async';

const SecurityAuditPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Security Audit & Penetration Testing - Zion Tech Group</title>
        <meta name="description" content="Comprehensive security assessment services including penetration testing, vulnerability assessment, and security compliance audits." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Security Audit & Penetration Testing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your systems with expert audits, penetration testing, and security compliance assessments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Penetration Testing</li>
                <li>• Vulnerability Assessment</li>
                <li>• Security Compliance Audits</li>
                <li>• Code Review</li>
                <li>• Infrastructure Security</li>
                <li>• Application Security</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$3,000 - $40,000</div>
              <p className="text-gray-600">Flexible pricing based on system complexity and audit scope</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityAuditPage;
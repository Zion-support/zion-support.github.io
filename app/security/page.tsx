import React from 'react';

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Security</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            Comprehensive security solutions to protect your business from cyber threats.
          </p>
          <p className="text-gray-600">
            Our security services include threat detection, firewall management, security audits, and compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;


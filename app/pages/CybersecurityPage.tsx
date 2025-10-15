import React from 'react';

const CybersecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Cybersecurity Solutions</h1>
          <p className="text-xl text-gray-300 mb-12">
            Protect your business with advanced cybersecurity solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
            <p className="text-gray-300">
              Advanced threat detection and response systems to protect your infrastructure.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Security Audits</h3>
            <p className="text-gray-300">
              Comprehensive security audits and vulnerability assessments.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Compliance</h3>
            <p className="text-gray-300">
              Ensure compliance with industry standards and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityPage;

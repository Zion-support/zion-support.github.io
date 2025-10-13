import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdvancedSecuritySuitePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Advanced Security Suite - Comprehensive Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your business with our advanced security suite. Multi-layered security, threat detection, and comprehensive protection." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Advanced Security Suite</h1>
          <p className="text-gray-300">Coming Soon - Comprehensive security solutions for your business</p>
        </div>
      </div>
    </>
  );
};

export default AdvancedSecuritySuitePage;
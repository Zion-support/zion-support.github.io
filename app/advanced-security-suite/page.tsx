
import React from 'react';
import SEOHead from '../components/SEOHead';

const AdvancedSecuritySuitePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Advanced Security Suite - Zion Tech Group"
        description="Comprehensive security solutions for modern businesses"
        keywords="cybersecurity, security suite, enterprise security, threat protection"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced Security Suite
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive security solutions to protect your business
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
                <p className="text-gray-600">Advanced AI-powered threat detection and prevention</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                <p className="text-gray-600">End-to-end encryption and data security</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Compliance</h3>
                <p className="text-gray-600">Meet industry standards and regulations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedSecuritySuitePage;


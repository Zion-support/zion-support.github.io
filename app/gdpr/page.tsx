import React from 'react';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">GDPR Compliance</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            We are fully compliant with the General Data Protection Regulation (GDPR) and committed to protecting your privacy.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-300 mb-6">
            Under GDPR, you have the right to access, rectify, erase, and port your personal data.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Data Processing</h2>
          <p className="text-gray-300 mb-6">
            We process your data lawfully, fairly, and transparently in accordance with GDPR requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;


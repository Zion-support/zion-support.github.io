import React from 'react';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">GDPR Compliance</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            We are fully compliant with GDPR regulations and take data privacy seriously.
          </p>
          <p className="text-gray-600">
            Learn about our data protection measures and your rights under GDPR.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;

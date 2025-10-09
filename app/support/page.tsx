import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Support</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            Get help and support for all your technical needs.
          </p>
          <p className="text-gray-600">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;


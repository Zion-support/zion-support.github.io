
import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Support</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Help</h2>
          <p className="text-gray-600 mb-4">We're here to help you with any questions or issues.</p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Email Support</h3>
              <p className="text-gray-600">support@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Phone Support</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;


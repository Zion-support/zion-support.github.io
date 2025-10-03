import React from 'react';

const PressPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Press Center
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">Press Releases</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-gray-900">Zion Tech Solutions Launches Revolutionary AI Platform</h4>
                <p className="text-gray-600 text-sm">December 15, 2024</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-gray-900">Company Expands Global Operations</h4>
                <p className="text-gray-600 text-sm">November 20, 2024</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-gray-900">New Partnership with Fortune 500 Companies</h4>
                <p className="text-gray-600 text-sm">October 10, 2024</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Media Contact</h3>
            <p className="text-gray-600 mb-4">
              For media inquiries, please contact our press team.
            </p>
            <p className="text-gray-600">
              Email: press@ziontech.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
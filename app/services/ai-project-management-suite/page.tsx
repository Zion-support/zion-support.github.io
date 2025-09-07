import React from 'react';

export const metadata = {
  title: 'AI Project Management Suite | Zion Tech Group',
  description: 'Intelligent project management powered by artificial intelligence'
};

export default function AIProjectManagementSuitePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Project Management Suite
          </h1>
          <p className="text-xl text-gray-600">
            Intelligent project management with AI-powered insights
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Smart Project Management
          </h2>
          <p className="text-gray-600">
            Our AI project management suite provides intelligent task allocation, risk prediction, resource optimization, and automated reporting to ensure project success.
          </p>
        </div>
      </div>
    </div>
  );
}
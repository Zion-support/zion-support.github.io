import React from 'react';

const APIDevelopmentServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          API Development Service
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Robust API Solutions</h3>
            <p className="text-gray-600 mb-4">
              Build scalable and secure APIs that power your applications and integrate with third-party services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">RESTful APIs</h4>
                <p className="text-gray-600 text-sm">Well-designed REST APIs with comprehensive documentation</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">GraphQL Services</h4>
                <p className="text-gray-600 text-sm">Flexible GraphQL APIs for modern applications</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">API Gateway</h4>
                <p className="text-gray-600 text-sm">Centralized API management and security</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Testing & Monitoring</h4>
                <p className="text-gray-600 text-sm">Comprehensive testing and performance monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDevelopmentServicePage;
import React from 'react';

const ComprehensiveITServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Comprehensive IT Services
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Complete IT Solutions</h3>
            <p className="text-gray-600 mb-4">
              We provide end-to-end IT services to support your business operations 
              and digital transformation initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Infrastructure Management</h4>
                <p className="text-gray-600 text-sm">Server setup, maintenance, and monitoring</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Security Solutions</h4>
                <p className="text-gray-600 text-sm">Cybersecurity and data protection</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Network Design</h4>
                <p className="text-gray-600 text-sm">Scalable and secure network architecture</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Round-the-clock technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITServicesPage;
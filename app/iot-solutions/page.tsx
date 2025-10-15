import React from 'react';
import { Helmet } from 'react-helmet-async';

const IoTSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IoT Development & Integration - Zion Tech Group</title>
        <meta name="description" content="Complete IoT solutions including device development, connectivity, data processing, and analytics platforms." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">IoT Development & Integration</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect and manage IoT devices with complete solutions including development, connectivity, and analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• IoT Device Development</li>
                <li>• Connectivity Solutions</li>
                <li>• Data Processing</li>
                <li>• Real-time Analytics</li>
                <li>• Edge Computing</li>
                <li>• Cloud Integration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$3,000 - $75,000</div>
              <p className="text-gray-600">Flexible pricing based on project complexity and device count</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTSolutionsPage;
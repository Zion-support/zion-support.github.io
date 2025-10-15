import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIPredictiveMaintenancePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance Pro - Zion Tech Group</title>
        <meta name="description" content="Intelligent predictive maintenance solution using IoT sensors and machine learning to prevent equipment failures." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Predictive Maintenance Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prevent equipment failures with AI predictions using IoT sensors and machine learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• IoT Sensor Integration</li>
                <li>• Failure Prediction Models</li>
                <li>• Real-time Monitoring</li>
                <li>• Maintenance Scheduling</li>
                <li>• Cost Optimization</li>
                <li>• Alert System</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$299 - $2,999/month</div>
              <p className="text-gray-600">Flexible pricing based on equipment count and features</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPredictiveMaintenancePage;
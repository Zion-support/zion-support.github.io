import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CloudInfrastructureManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Advanced cloud infrastructure management solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Infrastructure Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Optimize and manage your cloud infrastructure with our comprehensive solutions.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure Monitoring</h3>
              <p className="text-gray-600">
                Real-time monitoring and alerting for your cloud infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Optimization</h3>
              <p className="text-gray-600">
                Optimize cloud costs and resource utilization with AI-powered insights.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Management</h3>
              <p className="text-gray-600">
                Comprehensive security management and compliance monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
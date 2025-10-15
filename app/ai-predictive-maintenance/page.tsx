import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIPredictiveMaintenancePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group</title>
        <meta name="description" content="AI-powered predictive maintenance solutions to prevent equipment failures and optimize maintenance schedules." />
        <meta name="keywords" content="AI predictive maintenance, predictive analytics, equipment monitoring, maintenance optimization, IoT sensors" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Predictive Maintenance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered predictive maintenance solutions to prevent equipment failures and optimize maintenance schedules
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Failure Prediction</h3>
              <p className="text-gray-600">
                Predict equipment failures before they occur using machine learning and sensor data analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Condition Monitoring</h3>
              <p className="text-gray-600">
                Continuously monitor equipment condition using IoT sensors and real-time data analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance Scheduling</h3>
              <p className="text-gray-600">
                Optimize maintenance schedules based on actual equipment condition and usage patterns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Anomaly Detection</h3>
              <p className="text-gray-600">
                Detect unusual patterns in equipment behavior that may indicate potential issues.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Optimization</h3>
              <p className="text-gray-600">
                Reduce maintenance costs by preventing unplanned downtime and optimizing resource allocation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Analyze equipment performance trends and provide actionable insights for improvement.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduced Downtime</h3>
                <p className="text-gray-600">Minimize unplanned equipment downtime through proactive maintenance.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</h3>
                <p className="text-gray-600">Reduce maintenance costs by optimizing schedules and preventing failures.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Equipment Life</h3>
                <p className="text-gray-600">Prolong equipment lifespan through proper maintenance timing.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improved Safety</h3>
                <p className="text-gray-600">Enhance workplace safety by preventing equipment failures and accidents.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPredictiveMaintenancePage;
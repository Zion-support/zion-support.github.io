import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISchedulingAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Scheduling Assistant - Zion Tech Group</title>
        <meta name="description" content="Smart scheduling solution with AI-powered availability matching, time zone handling, and automated reminders." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion AI Scheduling Assistant</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent scheduling made simple with AI-powered availability matching and automated reminders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI Availability Matching</li>
                <li>• Time Zone Handling</li>
                <li>• Automated Reminders</li>
                <li>• Calendar Integration</li>
                <li>• Meeting Optimization</li>
                <li>• Conflict Resolution</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$39 - $299/month</div>
              <p className="text-gray-600">Flexible pricing based on users and meetings scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISchedulingAssistantPage;
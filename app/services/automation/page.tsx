import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation Services | Zion Tech Group',
  description: 'Professional automation services to streamline your business processes.',
};

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Automation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your business processes with our professional automation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
            <p className="text-gray-600">
              Automate repetitive tasks and workflows to increase efficiency.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data Integration</h3>
            <p className="text-gray-600">
              Connect and synchronize data across different systems.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Workflow Optimization</h3>
            <p className="text-gray-600">
              Optimize your business workflows for maximum productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
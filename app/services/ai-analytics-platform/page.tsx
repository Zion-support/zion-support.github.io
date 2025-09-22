import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Analytics Platform - Zion Tech Group',
  description: 'Comprehensive AI analytics platform for enterprise data intelligence.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Analytics Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade AI analytics platform for comprehensive data intelligence and business insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Platform Capabilities</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Advanced machine learning models</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Scalable data processing</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Real-time analytics</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Integration capabilities</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Enterprise Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Multi-tenant architecture</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Enterprise security</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">24/7 support</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Custom deployment options</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
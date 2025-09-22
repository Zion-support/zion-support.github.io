import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Analytics Dashboard - Zion Tech Group',
  description: 'Advanced AI-powered analytics dashboard for business intelligence and insights.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Real-time data visualization</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Predictive analytics</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Custom reporting</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Automated insights</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Improved decision making</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Increased efficiency</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Cost reduction</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Competitive advantage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
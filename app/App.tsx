"use client";
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            App
          </h1>
          <div className="space-y-4">
            <p className="text-gray-600">
              Welcome to the Zion Tech Group application.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                Features
              </h2>
              <ul className="list-disc list-inside text-blue-800 space-y-1">
                <li>AI-powered solutions</li>
                <li>IT services and consulting</li>
                <li>Custom software development</li>
                <li>Cloud migration and management</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-green-900 mb-2">
                Get Started
              </h2>
              <p className="text-green-800">
                Contact us to learn more about our services and how we can help your business grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

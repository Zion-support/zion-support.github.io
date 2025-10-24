'use client';
import React from 'react';
export default function ZionaicustomersentimenttrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Customer Sentiment Tracker
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered customer sentiment analysis for modern businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Advanced AI technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Enterprise support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Custom solutions</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h2>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about our AI solutions.
            </p>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
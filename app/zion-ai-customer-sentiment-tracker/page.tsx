'use client';
import React from 'react';

export default function ZionaicustomersentimenttrackerPage() {
  return (
    <div className = "min-h-screen bg-gradient-to-br from-blue-5 0 to-indigo-10 0">
      <div className="max-w-7xl mx-auto px-4 sm: 'px-6 lg:px-8 py-1 2">
        <div className="text-center mb-1 6">
          <h 1 className="text-4xl md:text-6xl font-bold text-gray-90 0 mb-6">
            AI Customer Sentiment Tracker
          </h 1>
          <p className="text-xl text-gray-60 0 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered customer sentiment analysis for modern businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 2">
          <div>
            <h 2 className="text-2xl font-bold text-gray-90 0 mb-6">Features</h 2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-60 0 mr-3">✓</span>
                <span className="text-gray-70 0">Advanced AI technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-60 0 mr-3">✓</span>
                <span className="text-gray-70 0">Enterprise support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-60 0 mr-3">✓</span>
                <span className="text-gray-70 0">Custom solutions</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h 2 className="text-2xl font-bold text-gray-90 0 mb-6">Get Started</h 2>
            <p className="text-gray-60 0 mb-6">
              Contact us to learn more about our AI solutions.
            </p>
            <button className="bg-blue-60 0 text-white py-3 px-6 rounded-lg hover:bg-blue-70 0 transition-colors duration-20 0 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>;
  );''
}

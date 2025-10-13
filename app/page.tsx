'use client';
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8 text-center">
          Welcome to Zion AI Solutions
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Advanced AI-powered solutions for modern businesses. We provide cutting-edge 
          artificial intelligence services to help your organization thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">AI Automation</h3>
            <p className="text-gray-300">
              Streamline your business processes with intelligent automation solutions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-300">
              Unlock insights from your data with advanced analytics and machine learning.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <p className="text-gray-300">
              Tailored AI solutions designed specifically for your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions | Zion Tech Group - Enterprise AI Platforms',
  description: 'Comprehensive AI solutions for enterprise transformation. Custom AI platforms, machine learning models, and intelligent automation.',
  keywords: 'AI solutions, enterprise AI, machine learning, artificial intelligence, AI platforms, intelligent automation',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions for enterprise transformation. Custom AI platforms, machine learning models, and intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Custom AI Models</h3>
            <p className="text-gray-300 mb-4">
              Tailored machine learning models designed specifically for your business needs and data.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Process Automation</h3>
            <p className="text-gray-300 mb-4">
              Intelligent automation solutions that streamline your workflows and reduce manual effort.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300 mb-4">
              Advanced analytics and insights powered by AI to drive data-driven decision making.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
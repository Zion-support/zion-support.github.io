import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Support Automation | Zion Tech Group',
  description: 'Automate customer support with AI-powered solutions.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Customer Support Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automate customer support with AI-powered solutions._LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Automated Responses</h3>
            <p className="text-gray-300 mb-4">
              Handle common customer queries automatically.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Automated Responses.1</li>
              <li>• Automated Responses.2</li>
              <li>• Automated Responses.3</li>
              <li>• Automated Responses.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Intelligent Routing</h3>
            <p className="text-gray-300 mb-4">
              Route tickets to the right agents automatically.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Intelligent Routing.1</li>
              <li>• Intelligent Routing.2</li>
              <li>• Intelligent Routing.3</li>
              <li>• Intelligent Routing.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
            <p className="text-gray-300 mb-4">
              Ensure consistent quality in customer interactions.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Quality Assurance.1</li>
              <li>• Quality Assurance.2</li>
              <li>• Quality Assurance.3</li>
              <li>• Quality Assurance.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
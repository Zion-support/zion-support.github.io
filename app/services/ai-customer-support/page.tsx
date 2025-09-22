import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Support | Zion Tech Group',
  description: 'AI-enhanced customer support solutions.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Customer Support
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-enhanced customer support solutions._LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Smart Chatbots</h3>
            <p className="text-gray-300 mb-4">
              Intelligent chatbots for 24/7 customer support.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Smart Chatbots.1</li>
              <li>• Smart Chatbots.2</li>
              <li>• Smart Chatbots.3</li>
              <li>• Smart Chatbots.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Agent Assistance</h3>
            <p className="text-gray-300 mb-4">
              AI tools to help support agents be more effective.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Agent Assistance.1</li>
              <li>• Agent Assistance.2</li>
              <li>• Agent Assistance.3</li>
              <li>• Agent Assistance.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive analytics for support optimization.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Analytics & Insights.1</li>
              <li>• Analytics & Insights.2</li>
              <li>• Analytics & Insights.3</li>
              <li>• Analytics & Insights.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot | Zion Tech Group',
  description: 'Intelligent AI chatbot solutions for customer service and automation.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Chatbot Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent AI chatbot solutions designed to enhance customer service and automate business processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Smart Conversations</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI technology for natural, human-like conversations.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Natural Language Understanding</li>
              <li>• Context Awareness</li>
              <li>• Multi-language Support</li>
              <li>• Learning Capabilities</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Easy Integration</h3>
            <p className="text-gray-300 mb-4">
              Seamlessly integrate with your existing systems and platforms.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• API Integrations</li>
              <li>• Webhook Support</li>
              <li>• CRM Systems</li>
              <li>• Custom Workflows</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive analytics to track performance and optimize conversations.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Conversation Analytics</li>
              <li>• Performance Metrics</li>
              <li>• User Insights</li>
              <li>• Optimization Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


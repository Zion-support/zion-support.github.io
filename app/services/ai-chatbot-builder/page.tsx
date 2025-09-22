import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder | Zion Tech Group',
  description: 'Build intelligent chatbots with our advanced AI chatbot builder platform.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational AI chatbots without coding using our advanced builder platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">No-Code Builder</h3>
            <p className="text-gray-300 mb-4">
              Build sophisticated chatbots using our intuitive drag-and-drop interface.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Visual Flow Builder</li>
              <li>• Pre-built Templates</li>
              <li>• Custom Logic</li>
              <li>• Easy Deployment</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Advanced AI</h3>
            <p className="text-gray-300 mb-4">
              Powered by state-of-the-art natural language processing and machine learning.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Natural Language Understanding</li>
              <li>• Context Awareness</li>
              <li>• Multi-language Support</li>
              <li>• Learning Capabilities</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Integration Ready</h3>
            <p className="text-gray-300 mb-4">
              Seamlessly integrate with your existing systems and platforms.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• API Integrations</li>
              <li>• CRM Systems</li>
              <li>• Webhooks</li>
              <li>• Third-party Apps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

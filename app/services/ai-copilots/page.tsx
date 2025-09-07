import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Copilots & Assistants | Zion Tech Group',
  description: 'Deploy intelligent AI copilots that enhance productivity, automate complex tasks, and provide 24/7 intelligent assistance to your team and customers.',
  keywords: 'AI copilots, AI assistants, productivity automation, intelligent assistance, team collaboration',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Copilots & Assistants | Zion Tech Group',
    description: 'Deploy intelligent AI copilots that enhance productivity and automate complex tasks.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Copilots & Assistants | Zion Tech Group',
    description: 'Deploy intelligent AI copilots that enhance productivity and automate complex tasks.',
  },
};

export default function AICopilotsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Copilots & Assistants</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy intelligent AI copilots that enhance productivity, automate complex tasks, and provide 24/7 intelligent assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Development Copilots</h3>
            <p className="text-gray-600 mb-4">
              AI-powered coding assistants that help developers write better code faster.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Code completion</li>
              <li>• Bug detection</li>
              <li>• Documentation generation</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Service Assistants</h3>
            <p className="text-gray-600 mb-4">
              Intelligent customer service agents that handle inquiries 24/7.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Natural language processing</li>
              <li>• Multi-channel support</li>
              <li>• Escalation management</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Process Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate complex business processes with intelligent AI assistants.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Workflow automation</li>
              <li>• Data processing</li>
              <li>• Decision support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
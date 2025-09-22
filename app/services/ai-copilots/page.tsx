import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Copilots | Zion Tech Group',
  description: 'AI-powered copilots for enhanced productivity and assistance.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Copilots
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered copilots for enhanced productivity and assistance._LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Code Copilot</h3>
            <p className="text-gray-300 mb-4">
              AI-powered coding assistant for developers.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Code Copilot.1</li>
              <li>• Code Copilot.2</li>
              <li>• Code Copilot.3</li>
              <li>• Code Copilot.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Writing Copilot</h3>
            <p className="text-gray-300 mb-4">
              AI assistant for content creation and editing.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Writing Copilot.1</li>
              <li>• Writing Copilot.2</li>
              <li>• Writing Copilot.3</li>
              <li>• Writing Copilot.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Business Copilot</h3>
            <p className="text-gray-300 mb-4">
              AI assistant for business tasks and decision making.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Business Copilot.1</li>
              <li>• Business Copilot.2</li>
              <li>• Business Copilot.3</li>
              <li>• Business Copilot.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
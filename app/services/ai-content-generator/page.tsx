import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Generator | Zion Tech Group',
  description: 'AI-powered content generation for blogs, marketing, and digital content.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Content Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered content generation for blogs, marketing, and digital content._LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Blog Content</h3>
            <p className="text-gray-300 mb-4">
              Generate engaging blog posts and articles automatically.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Blog Content.1</li>
              <li>• Blog Content.2</li>
              <li>• Blog Content.3</li>
              <li>• Blog Content.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Marketing Copy</h3>
            <p className="text-gray-300 mb-4">
              Create compelling marketing copy for all channels.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Marketing Copy.1</li>
              <li>• Marketing Copy.2</li>
              <li>• Marketing Copy.3</li>
              <li>• Marketing Copy.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Technical Content</h3>
            <p className="text-gray-300 mb-4">
              Generate technical documentation and guides.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Technical Content.1</li>
              <li>• Technical Content.2</li>
              <li>• Technical Content.3</li>
              <li>• Technical Content.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
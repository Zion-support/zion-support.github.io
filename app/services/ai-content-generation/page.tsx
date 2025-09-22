import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Generation | Zion Tech Group',
  description: 'AI-powered content generation for marketing, blogs, and digital content.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Content Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate high-quality content at scale using advanced AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Blog Content</h3>
            <p className="text-gray-300 mb-4">
              Generate engaging blog posts and articles automatically.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• SEO-optimized Content</li>
              <li>• Multiple Formats</li>
              <li>• Research Integration</li>
              <li>• Brand Voice Matching</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Marketing Copy</h3>
            <p className="text-gray-300 mb-4">
              Create compelling marketing copy for all channels.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Ad Copy</li>
              <li>• Email Campaigns</li>
              <li>• Social Media Posts</li>
              <li>• Product Descriptions</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Technical Content</h3>
            <p className="text-gray-300 mb-4">
              Generate technical documentation and guides.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• API Documentation</li>
              <li>• User Manuals</li>
              <li>• Technical Guides</li>
              <li>• Code Comments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

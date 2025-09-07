import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Writer | Zion Tech Group',
  description: 'AI-powered content creation platform. Generate blog posts, social media content, and marketing copy with advanced AI.',
  keywords: 'AI content writer, content creation, blog writing, social media content, marketing copy',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Content Writer | Zion Tech Group',
    description: 'AI-powered content creation platform for blog posts, social media, and marketing copy.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Writer | Zion Tech Group',
    description: 'AI-powered content creation platform for blog posts, social media, and marketing copy.',
  },
};

export default function AIContentWriterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Content Writer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered content creation platform. Generate blog posts, social media content, and marketing copy with advanced AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Blog Writing</h3>
            <p className="text-gray-600 mb-4">
              Generate high-quality blog posts and articles with AI assistance.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• SEO-optimized content</li>
              <li>• Research-backed articles</li>
              <li>• Multiple writing styles</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h3>
            <p className="text-gray-600 mb-4">
              Create engaging social media posts and captions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Platform-specific content</li>
              <li>• Hashtag optimization</li>
              <li>• Trend integration</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Copy</h3>
            <p className="text-gray-600 mb-4">
              Generate compelling marketing materials and ad copy.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Email campaigns</li>
              <li>• Ad copy</li>
              <li>• Product descriptions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
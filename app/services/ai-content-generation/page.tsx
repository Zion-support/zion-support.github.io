import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Generation & Marketing | Zion Tech Group',
  description: 'Scale your content marketing with AI-powered content generation, SEO optimization, and automated marketing campaigns that drive engagement and conversions.',
  keywords: 'AI content generation, content marketing, SEO optimization, automated marketing, content creation',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Content Generation & Marketing | Zion Tech Group',
    description: 'Scale your content marketing with AI-powered content generation and SEO optimization.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Generation & Marketing | Zion Tech Group',
    description: 'Scale your content marketing with AI-powered content generation and SEO optimization.',
  },
};

export default function AIContentGenerationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Content Generation & Marketing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale your content marketing with AI-powered content generation, SEO optimization, and automated marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Content Generation</h3>
                  <p className="text-gray-600">Generate high-quality content at scale using advanced AI</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">SEO Optimization</h3>
                  <p className="text-gray-600">Automatically optimize content for search engines</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Multi-Platform Publishing</h3>
                  <p className="text-gray-600">Publish content across multiple platforms automatically</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Performance Analytics</h3>
                  <p className="text-gray-600">Track content performance and optimize campaigns</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Types</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog Posts & Articles</h3>
                <p className="text-gray-600">AI-generated blog posts and articles optimized for SEO</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media Content</h3>
                <p className="text-gray-600">Engaging social media posts and captions</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Campaigns</h3>
                <p className="text-gray-600">Personalized email content and marketing campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
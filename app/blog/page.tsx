import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'AI & Technology Blog | Zion Tech Group',
  description: 'Latest insights on AI, enterprise automation, and digital transformation from Zion Tech Group experts.',
  keywords: 'AI blog, enterprise technology, automation insights, digital transformation',
  openGraph: {
    title: 'AI & Technology Blog | Zion Tech Group',
    description: 'Latest insights on AI, enterprise automation, and digital transformation from Zion Tech Group experts.',
    type: 'website',
    url: 'https://ziontechgroup.com/blog',
  },
};

export { metadata };

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI & Technology Blog</h1>
          <p className="text-xl text-gray-300">
            Latest insights on AI, enterprise automation, and digital transformation
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We&apos;re working on bringing you the latest insights and breakthroughs in AI and enterprise technology.
            </p>
            <Link href="/">
              <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Back to Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
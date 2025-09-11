import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIAutonomousMarketingPlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Autonomous Marketing Platform - Zion Tech Group</title>
        <meta name="description" content="Fully autonomous marketing platform powered by AI" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Autonomous Marketing Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Run your entire marketing operation autonomously with AI that creates, optimizes, and manages campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Content Generation</h3>
            <p className="text-gray-600 mb-4">
              AI creates compelling marketing content across all channels and formats automatically.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Blog posts and articles</li>
              <li>• Social media content</li>
              <li>• Email campaigns</li>
              <li>• Ad copy and creatives</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Campaign Optimization</h3>
            <p className="text-gray-600 mb-4">
              Continuously optimize campaigns for maximum performance and ROI without human intervention.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• A/B testing automation</li>
              <li>• Performance optimization</li>
              <li>• Budget allocation</li>
              <li>• Target audience refinement</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Customer Journey Management</h3>
            <p className="text-gray-600 mb-4">
              Orchestrate personalized customer journeys across all touchpoints and channels.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Journey mapping</li>
              <li>• Personalization</li>
              <li>• Multi-channel coordination</li>
              <li>• Conversion optimization</li>
            </ul>
          </div>
        </div>

        <div className="bg-pink-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Automate Your Marketing</h2>
          <p className="text-lg text-gray-700 mb-6">
            Transform your marketing operations with fully autonomous AI-powered campaigns and content.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
              Get Started
            </a>
            <a href="/about" className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIAutonomousMarketingPlatform;

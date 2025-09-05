import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIMarketResearch: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Market Research - Zion Tech Group</title>
        <meta name="description" content="AI-powered market research and analysis platform" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Market Research</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conduct comprehensive market research with AI-powered analysis and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
            <p className="text-gray-600 mb-4">
              Automatically collect market data from multiple sources and formats.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Web scraping</li>
              <li>• API integration</li>
              <li>• Survey data</li>
              <li>• Social media monitoring</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Trend Analysis</h3>
            <p className="text-gray-600 mb-4">
              Identify market trends and patterns with AI-powered analysis.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Trend identification</li>
              <li>• Pattern recognition</li>
              <li>• Predictive modeling</li>
              <li>• Market forecasting</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Competitive Intelligence</h3>
            <p className="text-gray-600 mb-4">
              Monitor competitors and analyze market positioning with AI insights.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Competitor analysis</li>
              <li>• Market positioning</li>
              <li>• Pricing intelligence</li>
              <li>• Strategy insights</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Understand Your Market</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get comprehensive market insights with our AI-powered research and analysis platform.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Get Started
            </a>
            <a href="/about" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIMarketResearch;
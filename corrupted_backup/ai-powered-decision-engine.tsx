import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIPoweredDecisionEngine: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI-Powered Decision Engine - Zion Tech Group</title>
        <meta name="description" content="AI-powered decision engine for automated decision making and optimization" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI-Powered Decision Engine</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make better decisions faster with our AI-powered decision engine for automated decision making and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Decision Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate routine decisions with AI-powered logic and rule engines.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Rule-based decisions</li>
              <li>• Machine learning models</li>
              <li>• Real-time processing</li>
              <li>• Audit trails</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Risk Assessment</h3>
            <p className="text-gray-600 mb-4">
              Assess risks and opportunities with AI-powered analysis and modeling.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Risk modeling</li>
              <li>• Scenario analysis</li>
              <li>• Probability assessment</li>
              <li>• Impact evaluation</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Optimization</h3>
            <p className="text-gray-600 mb-4">
              Optimize decisions and outcomes with AI-powered optimization algorithms.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Multi-objective optimization</li>
              <li>• Constraint handling</li>
              <li>• Performance metrics</li>
              <li>• Continuous improvement</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Make Better Decisions</h2>
          <p className="text-lg text-gray-700 mb-6">
            Leverage AI to make faster, more accurate decisions with our intelligent decision engine.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
              Get Started
            </a>
            <a href="/about" className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIPoweredDecisionEngine;

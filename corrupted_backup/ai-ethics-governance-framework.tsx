import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIEthicsGovernanceFramework: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Ethics Governance Framework - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI ethics and governance framework for responsible AI development" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Ethics Governance Framework</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive framework for responsible AI development, deployment, and governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Ethical Principles</h3>
            <p className="text-gray-600 mb-4">
              Establish core ethical principles for AI development and deployment.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Fairness and bias prevention</li>
              <li>• Transparency and explainability</li>
              <li>• Privacy protection</li>
              <li>• Human autonomy</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Governance Structure</h3>
            <p className="text-gray-600 mb-4">
              Implement governance structures for AI oversight and accountability.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• AI ethics committees</li>
              <li>• Review processes</li>
              <li>• Compliance monitoring</li>
              <li>• Risk assessment</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Implementation</h3>
            <p className="text-gray-600 mb-4">
              Practical tools and processes for implementing ethical AI practices.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Ethical impact assessments</li>
              <li>• Bias testing tools</li>
              <li>• Training programs</li>
              <li>• Monitoring systems</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Build Responsible AI</h2>
          <p className="text-lg text-gray-700 mb-6">
            Implement our comprehensive AI ethics and governance framework for responsible AI development.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Get Started
            </a>
            <a href="/about" className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIEthicsGovernanceFramework;

import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AILegalContractAnalyzer: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Legal Contract Analyzer - Zion Tech Group</title>
        <meta name="description" content="AI-powered legal contract analysis and review platform" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Legal Contract Analyzer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze and review legal contracts with AI-powered tools for faster, more accurate legal work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contract Analysis</h3>
            <p className="text-gray-600 mb-4">
              Automatically analyze contracts to identify key terms, risks, and compliance issues.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Key term extraction</li>
              <li>• Risk identification</li>
              <li>• Compliance checking</li>
              <li>• Clause analysis</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Document Review</h3>
            <p className="text-gray-600 mb-4">
              Review legal documents for accuracy, completeness, and legal validity.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Accuracy checking</li>
              <li>• Completeness review</li>
              <li>• Legal validity</li>
              <li>• Error detection</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Comparison Tools</h3>
            <p className="text-gray-600 mb-4">
              Compare contracts and documents to identify differences and similarities.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Document comparison</li>
              <li>• Version control</li>
              <li>• Change tracking</li>
              <li>• Merge analysis</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Streamline Legal Work</h2>
          <p className="text-lg text-gray-700 mb-6">
            Accelerate your legal work with AI-powered contract analysis and document review tools.
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

export default AILegalContractAnalyzer;
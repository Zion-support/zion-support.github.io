import React from 'react';
import Head from 'next/head';
import Layout from './components/Layout';

export default function WhitePapersPage() {
  return (
    <Layout title="White Papers - ZionTech Group" description="Research and insights from our experts">
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth research and insights from our technology experts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                AI & Machine Learning
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                The Future of AI in Enterprise
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to implementing AI solutions in enterprise environments.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">15 min read</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Download PDF →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Cloud Computing
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cloud Migration Best Practices
              </h3>
              <p className="text-gray-600 mb-4">
                Essential strategies for successful cloud migration and optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12 min read</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Download PDF →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Cybersecurity
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modern Security Threats
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding and defending against current cybersecurity threats.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">18 min read</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Download PDF →
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Custom Research
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
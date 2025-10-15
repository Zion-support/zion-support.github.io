import React from 'react';
import { Helmet } from 'react-helmet-async';

const DataLakeSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Lake Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced Data Lake Solutions for big data storage, analytics, and processing. Scalable data lake infrastructure for enterprise data management." />
        <meta name="keywords" content="data lake solutions, big data storage, data analytics, data processing, data warehouse, enterprise data management" />
        <link rel="canonical" href="https://ziontechgroup.com/data-lake-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                Data Lake Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced data lake solutions for big data storage, analytics, and enterprise data management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Big Data Storage</h2>
                <p className="text-gray-300 mb-4">
                  Scalable data lake infrastructure for storing and managing large volumes of structured and unstructured data.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Scalable storage</li>
                  <li>• Data ingestion</li>
                  <li>• Data cataloging</li>
                  <li>• Data governance</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Analytics</h2>
                <p className="text-gray-300 mb-4">
                  Advanced analytics and processing capabilities for extracting insights from your data lake.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Real-time analytics</li>
                  <li>• Batch processing</li>
                  <li>• Machine learning</li>
                  <li>• Data visualization</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Scalable Storage</h3>
                  <p className="text-gray-300 text-sm">Unlimited scalable data storage</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
                  <p className="text-gray-300 text-sm">Powerful analytics and processing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Security</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade data security</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with Data Lake Solutions
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataLakeSolutionsPage;
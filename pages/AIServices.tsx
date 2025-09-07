import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Professional AI services for your business needs." />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional AI services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
            <p className="text-gray-300">
              Advanced machine learning solutions for business automation.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Natural Language Processing</h3>
            <p className="text-gray-300">
              NLP solutions for text analysis and understanding.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Computer Vision</h3>
            <p className="text-gray-300">
              Image and video analysis using computer vision.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
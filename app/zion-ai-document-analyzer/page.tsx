import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionaidocumentanalyzerPage() {
  return (
    <>
      <Helmet>
        <title>AI Document Analyzer - Zion Tech Group</title>
        <meta name="description" content="Extract insights and analyze documents with our AI-powered document analysis solution. Process contracts, reports, and text documents automatically." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Document Analyzer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extract insights and analyze documents with our AI-powered document analysis solution. Process contracts, reports, and text documents automatically.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Text Extraction</h3>
                    <p className="text-gray-600">Extract text from PDFs, images, and scanned documents with OCR</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Content Analysis</h3>
                    <p className="text-gray-600">Analyze document content for key themes, sentiment, and insights</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Entity Recognition</h3>
                    <p className="text-gray-600">Identify and extract names, dates, locations, and other entities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Summary Generation</h3>
                    <p className="text-gray-600">Generate intelligent summaries of long documents automatically</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Use Cases</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Contract Analysis</h3>
                  <p className="text-gray-600">Extract key terms, clauses, and obligations from legal contracts</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Research Papers</h3>
                  <p className="text-gray-600">Analyze academic papers and research documents for insights</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Financial Reports</h3>
                  <p className="text-gray-600">Extract financial data and insights from quarterly reports</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Feedback</h3>
                  <p className="text-gray-600">Analyze customer feedback and survey responses for trends</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Analyze Documents?</h2>
            <p className="text-gray-600 mb-6">Start extracting insights from your documents with AI-powered analysis.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
                Get Started
              </Link>
              <Link to="/pricing" className="border border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

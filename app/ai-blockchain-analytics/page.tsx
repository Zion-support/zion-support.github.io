import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiBlockchainAnalyticsPagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Blockchain Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced Ai Blockchain Analytics solutions by Zion Tech Group for modern businesses." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced Ai Blockchain Analytics solutions by Zion Tech Group for modern businesses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h2>
            <p className="text-gray-600 mb-6">
              This page is under development. Please check back later for comprehensive ai solutions.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
                <p className="text-gray-600">
                  Advanced ai solution for your business requirements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
                <p className="text-gray-600">
                  Cutting-edge technology integration and optimization.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
                <p className="text-gray-600">
                  Scalable and secure implementation.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
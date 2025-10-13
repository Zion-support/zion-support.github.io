'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorFallback: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Error Fallback - Zion Tech Group</title>
        <meta name="description" content="Professional error fallback services by Zion Tech Group." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Error Fallback
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional error fallback services designed to handle errors gracefully and maintain user experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Error Fallback Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Error Handling</h3>
              <p className="text-gray-600">
                Comprehensive error handling that catches and manages errors gracefully.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-yellow-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Experience</h3>
              <p className="text-gray-600">
                Maintain user experience even when errors occur with fallback content.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recovery</h3>
              <p className="text-gray-600">
                Automatic recovery mechanisms to restore functionality after errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Implement Error Fallback?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you implement robust error handling that maintains user experience.
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default ErrorFallback;

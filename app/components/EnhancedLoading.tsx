'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnhancedLoading: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Enhanced Loading - Zion Tech Group</title>
        <meta name="description" content="Professional enhanced loading services by Zion Tech Group." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enhanced Loading
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional enhanced loading services designed to optimize your application&apos;s performance and user experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Enhanced Loading Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Loading States</h3>
              <p className="text-gray-600">
                Intelligent loading indicators that adapt to your content and provide meaningful feedback to users.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-green-600 rounded animate-bounce"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600">
                Advanced techniques to minimize loading times and improve overall application performance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-600 rounded animate-spin"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Animations</h3>
              <p className="text-gray-600">
                Beautiful, smooth animations that enhance user experience during loading states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Loading Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you implement professional loading solutions that will delight your users.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnhancedLoading;

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
            Professional enhanced loading services for optimal performance and user experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Enhanced Loading Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600">
                Optimize your application&apos;s loading performance with our advanced techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Experience</h3>
              <p className="text-gray-600">
                Enhance user experience with smooth loading transitions and feedback.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored loading solutions for your specific application needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedLoading;

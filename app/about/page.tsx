import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge AI and IT solutions." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading provider of AI and IT solutions for modern businesses.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge AI and IT solutions.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Innovation Focus
              </h3>
              <p className="text-green-700">
                We stay at the forefront of technology to deliver innovative solutions.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your technology needs.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

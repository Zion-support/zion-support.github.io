import React from 'react';
import Link from 'next/link';

const AIImplementationGuideBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">📚 NEW RESOURCE</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI Implementation Master Guide 2025
            <span className="block text-yellow-300">Complete Framework for Success</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Get the comprehensive framework that has helped 500+ organizations achieve $2.8 billion in business value. 
            Download our complete guide to AI implementation success.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">5-Phase Framework</h3>
              <p className="text-gray-300 text-sm">Proven methodology from assessment to optimization</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-2">ROI Templates</h3>
              <p className="text-gray-300 text-sm">Ready-to-use calculations and measurement tools</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-bold mb-2">Best Practices</h3>
              <p className="text-gray-300 text-sm">Real-world insights from 500+ implementations</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-implementation-master-guide-2025"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Get Implementation Help
            </Link>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-2xl font-bold text-yellow-300">500+</div>
            <div className="text-sm text-gray-300">Organizations</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-2xl font-bold text-yellow-300">$2.8B</div>
            <div className="text-sm text-gray-300">Business Value</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-2xl font-bold text-yellow-300">600%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-2xl font-bold text-yellow-300">99.7%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImplementationGuideBanner;
import React from 'react';
import Link from 'next/link';

export default function InteractivePromotionalSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive AI tools and calculators to understand the potential 
            impact on your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI ROI Calculator
            </h3>
            <p className="text-gray-600 mb-6">
              Calculate the potential return on investment for your AI transformation 
              with our interactive ROI calculator.
            </p>
            <Link
              href="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Calculator
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI Readiness Assessment
            </h3>
            <p className="text-gray-600 mb-6">
              Evaluate your organization's readiness for AI implementation with our 
              comprehensive assessment tool.
            </p>
            <Link
              href="/services"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover how our AI and IT solutions have transformed businesses across various industries.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Optimization</h3>
              <p className="text-gray-600 mb-4">
                Helped a major e-commerce platform increase conversion rates by 40% using AI-powered personalization.
              </p>
              <div className="text-sm text-gray-500">Industry: E-commerce | Result: 40% increase in conversions</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare AI</h3>
              <p className="text-gray-600 mb-4">
                Implemented AI diagnostic tools that reduced diagnosis time by 60% for a leading healthcare provider.
              </p>
              <div className="text-sm text-gray-500">Industry: Healthcare | Result: 60% faster diagnosis</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Deployed fraud detection systems that prevented $2M in fraudulent transactions for a financial institution.
              </p>
              <div className="text-sm text-gray-500">Industry: Finance | Result: $2M fraud prevention</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Optimized production processes using AI, resulting in 25% cost reduction and improved quality.
              </p>
              <div className="text-sm text-gray-500">Industry: Manufacturing | Result: 25% cost reduction</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
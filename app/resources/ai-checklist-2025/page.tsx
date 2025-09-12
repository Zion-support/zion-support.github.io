import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AIChecklist2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Implementation Checklist 2025 - 150+ Actionable Items for Success"
        description="Download our comprehensive AI implementation checklist with 150+ actionable items for successful AI deployment."
        keywords="AI implementation checklist, AI deployment guide, AI project management, AI strategy, free download"
        url="/resources/ai-checklist-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📋 FREE CHECKLIST</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Implementation Checklist 2025
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Download our comprehensive checklist with 150+ actionable items for successful AI 
            implementation. Covering strategy, technical deployment, change management, and 
            success measurement.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Download Your Free Checklist Now</h3>
          <p className="text-xl opacity-90 mb-6">
            Get instant access to 150+ actionable items for successful AI implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              📥 Download Free Checklist
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
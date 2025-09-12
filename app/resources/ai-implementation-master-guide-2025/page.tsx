import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Implementation Master Guide 2025: Complete 150-Page Playbook',
  description: 'Master AI implementation with our comprehensive 150-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation.',
};

export default function AIImplementationMasterGuide2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Implementation Master Guide 2025: Complete 150-Page Playbook
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The most comprehensive AI implementation guide available. Everything you need to 
            successfully transform your organization with AI, from strategy to execution.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">150</div>
              <p className="text-gray-600">Comprehensive Pages</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-gray-600">Ready-to-Use Templates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Checklists & Frameworks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-gray-600">Proven Strategies</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Download Your Free Copy</h2>
          <p className="text-xl mb-6">
            Get instant access to the complete 150-page AI Implementation Master Guide 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/download/ai-implementation-master-guide-2025.pdf" 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Download PDF (150 pages)
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-lg font-semibold"
            >
              Get Implementation Support
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Organization with AI?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of organizations already achieving success with our proven AI implementation framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get AI Consultation
            </Link>
            <Link 
              href="/resources" 
              className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Explore More Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

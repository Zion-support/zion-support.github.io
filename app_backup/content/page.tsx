import React from 'react';
import Link from 'next/link';

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI & Technology Content
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, blueprints, and frameworks for AI implementation, enterprise automation, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white p-6 rounded-xl shadow">
            <div className="text-sm font-semibold text-blue-700 mb-2">Guide</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <Link href="/content/ai-2026-ultimate-guide" className="hover:underline">
                AI 2026 Ultimate Guide
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Complete guide to AI implementation, governance, and best practices for 2026.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow">
            <div className="text-sm font-semibold text-green-700 mb-2">Blueprint</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <Link href="/content/enterprise-automation-2026" className="hover:underline">
                Enterprise Automation 2026
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Strategic blueprint for implementing enterprise-wide automation solutions.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow">
            <div className="text-sm font-semibold text-purple-700 mb-2">Framework</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <Link href="/content/ai-governance-framework" className="hover:underline">
                AI Governance Framework
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive framework for AI governance, risk management, and compliance.
            </p>
          </article>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need Custom Content?</h3>
            <p className="text-blue-100 mb-6">
              We create tailored content, guides, and frameworks for your specific AI and automation needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Custom Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
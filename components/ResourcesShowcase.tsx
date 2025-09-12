import React from 'react';
import Link from 'next/link';

export default function ResourcesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎁 FREE DOWNLOADS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            📚 New Implementation Guides
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Download our latest comprehensive guides: AI Workforce Transformation Playbook, 
            Green AI Implementation Guide, and Privacy Compliance Checklists. Everything you 
            need to succeed with AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/resources"
              className="bg-white text-emerald-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📋 Download All Resources
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg" 
            >
              📖 Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Featured Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
              <h3 className="text-lg font-semibold mb-2">AI Workforce Transformation Playbook</h3>
              <p className="text-sm opacity-90 mb-3">150+ pages of templates, checklists, and strategies</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>150+ pages</span>
              </div>
            </div>
          </Link>
          
          <Link href="/resources/green-ai-implementation-guide-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
              <h3 className="text-lg font-semibold mb-2">Green AI Implementation Guide</h3>
              <p className="text-sm opacity-90 mb-3">Build sustainable AI systems with 60% energy reduction</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>120+ pages</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-privacy-compliance-checklist-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
              <h3 className="text-lg font-semibold mb-2">AI Privacy Compliance Checklist</h3>
              <p className="text-sm opacity-90 mb-3">Ensure compliance with AI privacy regulations</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>Checklist</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Link href="/resources/ai-implementation-checklist-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✅</div>
              <h3 className="text-lg font-semibold mb-2">AI Implementation Checklist</h3>
              <p className="text-sm opacity-90 mb-3">150+ actionable items for successful AI deployment</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>Checklist</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-roi-calculator-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-lg font-semibold mb-2">AI ROI Calculator</h3>
              <p className="text-sm opacity-90 mb-3">Calculate potential return on AI investments</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Tool</span>
                <span className="mx-2">•</span>
                <span>Interactive</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-security-hardening-guide-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">AI Security Hardening Guide</h3>
              <p className="text-sm opacity-90 mb-3">Essential security measures for AI systems</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>80+ pages</span>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-governance-framework-2025" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚖️</div>
              <h3 className="text-lg font-semibold mb-2">AI Governance Framework</h3>
              <p className="text-sm opacity-90 mb-3">Complete framework for responsible AI governance</p>
              <div className="flex items-center text-xs opacity-75">
                <span>Free Download</span>
                <span className="mx-2">•</span>
                <span>Framework</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/resources"
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block mr-4"
          >
            View All Resources
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block"
          >
            Get Custom Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
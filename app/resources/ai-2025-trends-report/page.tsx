import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AI2025TrendsReport() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Trends Report 2025: The Complete Industry Analysis"
        description="Download our comprehensive AI trends report for 2025. Get insights on market growth, key technologies, investment trends, and future predictions."
        keywords="AI trends 2025, artificial intelligence report, AI market analysis, AI industry trends, AI predictions 2025"
        url="/resources/ai-2025-trends-report"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Free Download</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">45 pages</span>
          </div>
          
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📊 RESEARCH REPORT</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Trends Report 2025: The Complete Industry Analysis
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Get comprehensive insights into the AI landscape for 2025. This detailed report 
            covers market trends, technology developments, investment patterns, and predictions 
            from industry experts.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Inside</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Market size and growth projections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Key technology trends and breakthroughs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Investment patterns and funding analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Industry-specific AI adoption rates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Regulatory landscape and compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Future predictions and recommendations</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Global AI Market Size</span>
                <span className="font-bold text-green-600">$1.8T</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Growth Rate (2025)</span>
                <span className="font-bold text-green-600">+47%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">AI Investment (2024)</span>
                <span className="font-bold text-green-600">$47B</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Enterprise Adoption</span>
                <span className="font-bold text-green-600">78%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Report Preview */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Report Preview</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Executive Summary</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                The AI industry is experiencing unprecedented growth and transformation in 2025. 
                Key drivers include advances in multimodal AI, enterprise adoption acceleration, 
                and regulatory clarity. This report provides comprehensive analysis of current 
                trends and future predictions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Market Analysis</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                The global AI market is projected to reach $1.8 trillion by 2025, representing 
                a 47% year-over-year growth. Enterprise adoption has reached 78%, with particular 
                strength in healthcare, finance, and manufacturing sectors.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology Trends</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Multimodal AI, edge computing, and AI agents are the three most significant 
                technology trends driving innovation. These technologies are enabling new 
                applications and use cases across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Download the Complete Report</h3>
          <p className="text-xl mb-8 opacity-90">
            Get instant access to our comprehensive AI trends analysis for 2025
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Download Free Report
              </button>
            </form>
            <p className="text-sm mt-4 opacity-75">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Checklist 2025
                </h4>
                <p className="text-gray-600 text-sm">
                  Step-by-step guide to implementing AI in your organization
                </p>
              </div>
            </Link>
            <Link href="/resources/ai-startup-funding-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Startup Funding Playbook 2025
                </h4>
                <p className="text-gray-600 text-sm">
                  Complete guide to raising capital for AI startups
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
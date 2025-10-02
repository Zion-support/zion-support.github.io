import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Content Optimization Suite - Zion Tech Group',
  description: 'AI-powered content optimization platform for headlines, email subject lines, and marketing copy. Boost engagement with intelligent content analysis.',
  keywords: 'AI content optimization, headline generator, email subject lines, marketing copy, content analysis, engagement optimization',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIContentOptimizationSuite() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Content Optimization Suite</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your content performance with AI-powered optimization tools. 
          Generate compelling headlines, optimize email subject lines, and boost engagement rates.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our AI Content Suite?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">47%</div>
            <p className="text-gray-600">Average increase in click-through rates</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2.3x</div>
            <p className="text-gray-600">Faster content creation process</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
            <p className="text-gray-600">Customer satisfaction rate</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">HeadlineMaster AI</h3>
          <p className="text-gray-600 mb-4">
            Generate and test email subject lines and article headlines tailored for B2B marketers with industry-specific performance data.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• A/B testing capabilities</li>
            <li>• Industry-specific optimization</li>
            <li>• Real-time performance analytics</li>
            <li>• Multi-language support</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $39/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">PodcastTranscriber Pro</h3>
          <p className="text-gray-600 mb-4">
            Create highly accurate transcriptions optimized for podcast content with multiple speakers and industry-specific terminology.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Speaker identification</li>
            <li>• Industry terminology recognition</li>
            <li>• Timestamp synchronization</li>
            <li>• Export to multiple formats</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $29/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">ContentAnalyzer AI</h3>
          <p className="text-gray-600 mb-4">
            Analyze content performance across platforms and optimize for maximum engagement with AI-driven insights.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Cross-platform analytics</li>
            <li>• Engagement prediction</li>
            <li>• Content optimization suggestions</li>
            <li>• Competitor analysis</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $49/month</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Analytics Dashboard</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Real-time performance tracking</li>
              <li>• Custom reporting and insights</li>
              <li>• Team collaboration tools</li>
              <li>• API integration capabilities</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">White-Label Solutions</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Custom branding options</li>
              <li>• Dedicated support team</li>
              <li>• On-premise deployment</li>
              <li>• Custom feature development</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Content?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of marketers who have transformed their content performance with our AI-powered suite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link 
            href="https://ziontechgroup.com/services/ai-content-optimization-suite" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View Live Demo
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
        <div className="text-gray-600 space-y-1">
          <p><strong>Mobile:</strong> +1 302 464 0950</p>
          <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
          <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
  );
}
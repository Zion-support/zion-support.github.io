import React from 'react';
import Link from 'next/link';

export default function Fortune500SuccessBanner2025() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-3">
            <span className="text-sm font-medium">🏆 FORTUNE 500 SUCCESS STORY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            🚀 Fortune 500 AI Automation Breakthrough: 40% Cost Reduction Achieved!
          </h2>
          <p className="text-lg opacity-90 mb-4 max-w-4xl mx-auto">
            Discover how a Fortune 500 manufacturing company achieved unprecedented results with AI automation. 
            Read our new case study showing $2.3M savings, 300% productivity gains, and 95% accuracy rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/case-studies/ai-enterprise-automation-success-2025"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Case Study
            </Link>
            <Link
              href="/blog/ai-2025-enterprise-automation-mastery"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Implementation Guide
            </Link>
            <Link
              href="/resources/ai-enterprise-automation-checklist-2025"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Free Checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
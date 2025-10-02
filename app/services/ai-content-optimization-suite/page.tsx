import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Content Optimization Suite - Zion Tech Group',
  description: 'AI-powered content creation, optimization, and performance analytics. Generate high-converting content with advanced AI tools.',
  keywords: 'AI content creation, content optimization, marketing automation, AI writing tools, content analytics',
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
          Transform your content strategy with AI-powered creation, optimization, and performance analytics. 
          Generate high-converting content that drives engagement and results.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-blue-50 px-4 py-2 rounded-lg">
            <span className="text-blue-800 font-semibold">Starting from $199/month</span>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-lg">
            <span className="text-green-800 font-semibold">14-day free trial</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Content Generation</h3>
          <p className="text-gray-600 mb-4">
            Generate high-quality blog posts, social media content, email campaigns, and marketing copy using advanced AI models.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Blog post generation</li>
            <li>• Social media content</li>
            <li>• Email marketing copy</li>
            <li>• Product descriptions</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Performance Analytics</h3>
          <p className="text-gray-600 mb-4">
            Track content performance with AI-powered analytics that provide actionable insights and optimization recommendations.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Engagement metrics</li>
            <li>• Conversion tracking</li>
            <li>• SEO performance</li>
            <li>• A/B testing insights</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO Optimization</h3>
          <p className="text-gray-600 mb-4">
            Automatically optimize content for search engines with AI-powered keyword research and on-page optimization.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Keyword research</li>
            <li>• On-page optimization</li>
            <li>• Meta tag generation</li>
            <li>• Content structure analysis</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Personalization</h3>
          <p className="text-gray-600 mb-4">
            Create personalized content experiences for different audience segments using AI-driven insights.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Audience segmentation</li>
            <li>• Dynamic content</li>
            <li>• Personalization engine</li>
            <li>• Behavioral targeting</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
          <p className="text-gray-600 mb-4">
            Ensure content quality with AI-powered grammar checking, plagiarism detection, and brand voice consistency.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Grammar & style checking</li>
            <li>• Plagiarism detection</li>
            <li>• Brand voice analysis</li>
            <li>• Quality scoring</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Calendar</h3>
          <p className="text-gray-600 mb-4">
            Plan and schedule content with AI-powered recommendations for optimal posting times and content mix.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Automated scheduling</li>
            <li>• Optimal timing</li>
            <li>• Content mix planning</li>
            <li>• Campaign management</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our AI Content Suite?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Increased Productivity</h3>
            <p className="text-gray-600">Generate 10x more content in half the time with AI-powered automation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📈 Better Performance</h3>
            <p className="text-gray-600">AI-optimized content typically sees 40% higher engagement rates.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💰 Cost Effective</h3>
            <p className="text-gray-600">Reduce content creation costs by up to 70% while maintaining quality.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Data-Driven</h3>
            <p className="text-gray-600">Make content decisions based on real performance data and AI insights.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• 1,000 AI-generated words/month</li>
              <li>• Basic analytics dashboard</li>
              <li>• 5 content templates</li>
              <li>• Email support</li>
            </ul>
            <Link href="/contact" className="block mt-6 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
          
          <div className="border-2 border-blue-500 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$499<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• 10,000 AI-generated words/month</li>
              <li>• Advanced analytics & insights</li>
              <li>• 50+ content templates</li>
              <li>• SEO optimization tools</li>
              <li>• Priority support</li>
            </ul>
            <Link href="/contact" className="block mt-6 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
            <ul className="space-y-2 text-gray-600">
              <li>• Unlimited AI-generated words</li>
              <li>• Custom analytics dashboard</li>
              <li>• White-label solution</li>
              <li>• API access</li>
              <li>• Dedicated account manager</li>
            </ul>
            <Link href="/contact" className="block mt-6 bg-gray-600 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Content Strategy?</h2>
        <p className="text-gray-600 mb-6">Join thousands of businesses already using our AI Content Optimization Suite.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Start Free Trial
          </Link>
          <Link href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            Schedule Demo
          </Link>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>📞 Call us: <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a></p>
          <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Customer Insights Platform - Zion Tech Group',
  description: 'Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, predict trends, and optimize experiences.',
  keywords: 'customer analytics, AI insights, customer behavior, predictive analytics, customer intelligence',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AICustomerInsightsPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Customer Insights Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your customer data into actionable insights with AI-powered analytics. 
          Understand customer behavior, predict trends, and optimize experiences for maximum engagement.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-blue-50 px-4 py-2 rounded-lg">
            <span className="text-blue-800 font-semibold">Starting from $399/month</span>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-lg">
            <span className="text-green-800 font-semibold">21-day free trial</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Behavioral Analytics</h3>
          <p className="text-gray-600 mb-4">
            Track and analyze customer behavior patterns across all touchpoints to understand preferences and pain points.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Journey mapping</li>
            <li>• Engagement tracking</li>
            <li>• Conversion analysis</li>
            <li>• Drop-off identification</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
          <p className="text-gray-600 mb-4">
            Predict customer lifetime value, churn risk, and purchase likelihood using advanced machine learning models.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Churn prediction</li>
            <li>• Lifetime value forecasting</li>
            <li>• Purchase probability</li>
            <li>• Upsell opportunities</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Segmentation</h3>
          <p className="text-gray-600 mb-4">
            Automatically segment customers based on behavior, demographics, and preferences for targeted marketing.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Dynamic segmentation</li>
            <li>• RFM analysis</li>
            <li>• Behavioral clusters</li>
            <li>• Custom segments</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sentiment Analysis</h3>
          <p className="text-gray-600 mb-4">
            Analyze customer feedback, reviews, and social media mentions to understand sentiment and satisfaction levels.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Review analysis</li>
            <li>• Social media monitoring</li>
            <li>• Support ticket sentiment</li>
            <li>• Brand perception tracking</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Alerts</h3>
          <p className="text-gray-600 mb-4">
            Get instant notifications about significant changes in customer behavior or satisfaction metrics.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Anomaly detection</li>
            <li>• Threshold alerts</li>
            <li>• Trend notifications</li>
            <li>• Custom triggers</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Integration</h3>
          <p className="text-gray-600 mb-4">
            Connect all your customer data sources for a unified view of customer interactions and preferences.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• CRM integration</li>
            <li>• E-commerce platforms</li>
            <li>• Marketing tools</li>
            <li>• Support systems</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📈 Increased Revenue</h3>
            <p className="text-gray-600">Identify upsell opportunities and reduce churn with predictive insights.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Better Targeting</h3>
            <p className="text-gray-600">Create highly targeted campaigns based on customer behavior and preferences.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">⚡ Faster Decisions</h3>
            <p className="text-gray-600">Make data-driven decisions quickly with real-time insights and alerts.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🔍 Deep Understanding</h3>
            <p className="text-gray-600">Gain comprehensive understanding of your customer base and market trends.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$399<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• Up to 10,000 customers</li>
              <li>• Basic analytics dashboard</li>
              <li>• 5 data sources</li>
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
            <div className="text-3xl font-bold text-blue-600 mb-4">$999<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• Up to 100,000 customers</li>
              <li>• Advanced analytics & AI insights</li>
              <li>• 20 data sources</li>
              <li>• Predictive analytics</li>
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
              <li>• Unlimited customers</li>
              <li>• Custom analytics & reporting</li>
              <li>• Unlimited data sources</li>
              <li>• White-label solution</li>
              <li>• Dedicated account manager</li>
            </ul>
            <Link href="/contact" className="block mt-6 bg-gray-600 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Unlock Customer Insights?</h2>
        <p className="text-gray-600 mb-6">Transform your customer data into competitive advantage with AI-powered insights.</p>
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
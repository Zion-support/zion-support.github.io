import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Customer Insights Platform - Zion Tech Group',
  description: 'Transform customer data into actionable insights with our AI-powered customer analytics platform. Predict behavior, optimize experiences, and boost retention.',
  keywords: 'customer insights, AI analytics, customer behavior, predictive analytics, customer experience, retention analytics',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AICustomerInsights() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Customer Insights Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Unlock the power of your customer data with AI-driven insights. Predict behavior, 
          optimize experiences, and drive growth with intelligent customer analytics.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-12">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">35%</div>
            <div className="text-gray-600">Increase in Retention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
            <div className="text-gray-600">Higher Conversion</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
            <div className="text-gray-600">Faster Insights</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
          <p className="text-gray-600 mb-4">
            Predict customer behavior, churn risk, and lifetime value using advanced machine learning models.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Churn prediction models</li>
            <li>• Lifetime value forecasting</li>
            <li>• Purchase probability scoring</li>
            <li>• Behavioral pattern analysis</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Segmentation</h3>
          <p className="text-gray-600 mb-4">
            Automatically segment customers based on behavior, demographics, and preferences for targeted marketing.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Behavioral segmentation</li>
            <li>• RFM analysis</li>
            <li>• Demographic clustering</li>
            <li>• Dynamic segmentation</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Journey Analytics</h3>
          <p className="text-gray-600 mb-4">
            Map and analyze customer journeys across all touchpoints to identify optimization opportunities.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Journey mapping</li>
            <li>• Touchpoint analysis</li>
            <li>• Conversion funnel tracking</li>
            <li>• Drop-off identification</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12 7l-2.586-2.586a2 2 0 00-2.828 0L4.828 7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sentiment Analysis</h3>
          <p className="text-gray-600 mb-4">
            Analyze customer sentiment across reviews, support tickets, and social media interactions.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Review sentiment tracking</li>
            <li>• Support ticket analysis</li>
            <li>• Social media monitoring</li>
            <li>• Emotion detection</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Revenue Optimization</h3>
          <p className="text-gray-600 mb-4">
            Identify opportunities to increase revenue through upsell, cross-sell, and pricing optimization.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Upsell recommendations</li>
            <li>• Cross-sell opportunities</li>
            <li>• Price sensitivity analysis</li>
            <li>• Revenue forecasting</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Dashboards</h3>
          <p className="text-gray-600 mb-4">
            Monitor customer metrics and KPIs in real-time with customizable dashboards and alerts.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Real-time metrics</li>
            <li>• Custom dashboards</li>
            <li>• Automated alerts</li>
            <li>• Mobile access</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
            <div className="text-3xl font-bold text-purple-600 mb-4">$499/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 10,000 customers</li>
              <li>• Basic analytics</li>
              <li>• Standard segmentation</li>
              <li>• Email support</li>
              <li>• Monthly reports</li>
            </ul>
            <Link href="/contact" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-500">
            <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
            <div className="text-3xl font-bold text-purple-600 mb-4">$1,299/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 100,000 customers</li>
              <li>• Advanced AI models</li>
              <li>• Predictive analytics</li>
              <li>• Priority support</li>
              <li>• Real-time dashboards</li>
              <li>• API access</li>
            </ul>
            <Link href="/contact" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-purple-600 mb-4">Custom</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Unlimited customers</li>
              <li>• Custom AI models</li>
              <li>• Dedicated support</li>
              <li>• On-premise deployment</li>
              <li>• Custom integrations</li>
              <li>• SLA guarantee</li>
            </ul>
            <Link href="/contact" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Retailer</h3>
            <p className="text-gray-600 mb-4">
              "Increased customer retention by 35% and average order value by 28% using AI-powered customer insights and personalized recommendations."
            </p>
            <div className="text-sm text-gray-500">- Sarah Johnson, VP Marketing</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">SaaS Platform</h3>
            <p className="text-gray-600 mb-4">
              "Reduced churn by 40% and increased upsell revenue by 60% through predictive analytics and automated customer segmentation."
            </p>
            <div className="text-sm text-gray-500">- Michael Chen, Head of Growth</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Transform Your Customer Understanding</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join leading companies using our AI customer insights platform to drive growth, improve retention, and optimize customer experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors">
            Schedule Demo
          </Link>
          <Link href="tel:+13024640950" className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}
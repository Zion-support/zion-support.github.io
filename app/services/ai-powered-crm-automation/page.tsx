import React from 'react';
// Metadata handled by React Helmet
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI-Powered CRM Automation - Zion Tech Group',
  description: 'Transform your customer relationships with AI-powered CRM automation. Automate lead scoring, sales forecasting, and customer engagement with intelligent insights.',
  keywords: 'AI CRM automation, sales automation, lead scoring, customer relationship management, sales AI',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIPoweredCRMAutomation() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered CRM Automation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your customer relationships with AI-powered automation. Automate lead scoring, 
          sales forecasting, and customer engagement with intelligent insights and predictions.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sales-Focused Pricing</h2>
          <p className="text-lg text-gray-600">Scale your sales team with AI automation</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Team</h3>
            <div className="text-3xl font-bold text-purple-600 mb-4">$149/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Up to 5 users</li>
              <li>✓ AI lead scoring</li>
              <li>✓ Basic automation</li>
              <li>✓ Email support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Organization</h3>
            <div className="text-3xl font-bold text-purple-600 mb-4">$399/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Up to 25 users</li>
              <li>✓ Advanced AI predictions</li>
              <li>✓ Sales forecasting</li>
              <li>✓ Custom workflows</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-purple-600 mb-4">Custom</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Unlimited users</li>
              <li>✓ Custom AI models</li>
              <li>✓ White-label solution</li>
              <li>✓ Dedicated support</li>
              <li>✓ Advanced analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Lead Scoring</h3>
          <p className="text-gray-600 mb-4">
            Machine learning algorithms analyze lead behavior, demographics, and engagement 
            patterns to score leads with 90% accuracy.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 90% lead scoring accuracy</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales Forecasting</h3>
          <p className="text-gray-600 mb-4">
            Predictive analytics forecast sales pipeline performance and revenue 
            with 85% accuracy using historical data and market trends.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 85% forecast accuracy</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Engagement AI</h3>
          <p className="text-gray-600 mb-4">
            AI-powered customer engagement tools automatically personalize communications, 
            suggest optimal contact times, and track engagement patterns.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 70% higher engagement</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Workflows</h3>
          <p className="text-gray-600 mb-4">
            Smart workflow automation handles routine tasks like follow-ups, 
            data entry, and task assignments, saving 50% of sales team time.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 50% time savings</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Churn Prediction</h3>
          <p className="text-gray-600 mb-4">
            AI identifies customers at risk of churning and triggers automated 
            retention campaigns to reduce churn by 40%.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 40% churn reduction</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales Analytics</h3>
          <p className="text-gray-600 mb-4">
            Advanced analytics provide insights into sales performance, 
            pipeline health, and revenue optimization opportunities.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ Real-time insights</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Sales Teams Choose Our AI CRM</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Sales Results</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                90% accuracy in lead scoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                85% accuracy in sales forecasting
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                70% increase in customer engagement
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                40% reduction in customer churn
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced AI Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Machine learning lead scoring
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Predictive sales analytics
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Automated customer engagement
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Intelligent workflow automation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Teams</h3>
            <p className="text-gray-600 text-sm">Lead scoring and pipeline management</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Teams</h3>
            <p className="text-gray-600 text-sm">Lead qualification and nurturing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Success</h3>
            <p className="text-gray-600 text-sm">Churn prediction and retention</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Managers</h3>
            <p className="text-gray-600 text-sm">Performance analytics and forecasting</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center bg-purple-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Sales Process?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join 400+ sales teams using our AI-Powered CRM Automation to increase revenue and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link 
            href="tel:+13024640950" 
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border border-purple-600 hover:bg-purple-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}
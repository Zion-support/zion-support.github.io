import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Financial Forecasting Suite - Zion Tech Group',
  description: 'Advanced AI-powered financial forecasting and analysis platform. Predict market trends, optimize investments, and make data-driven financial decisions with machine learning.',
  keywords: 'AI financial forecasting, investment analysis, financial AI, market prediction, fintech solutions',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIFinancialForecastingSuite() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Financial Forecasting Suite</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionize your financial planning with AI-powered forecasting. Predict market trends, 
          optimize investments, and make data-driven decisions with advanced machine learning algorithms.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment-Grade Pricing</h2>
          <p className="text-lg text-gray-600">Professional financial tools for every business size</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">$499/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ 5 portfolio analyses/month</li>
              <li>✓ Basic market predictions</li>
              <li>✓ Risk assessment tools</li>
              <li>✓ Email support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">$1,299/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Unlimited portfolio analyses</li>
              <li>✓ Advanced AI predictions</li>
              <li>✓ Real-time market monitoring</li>
              <li>✓ Custom model training</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Institutional</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">Custom</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ White-label solutions</li>
              <li>✓ Custom AI models</li>
              <li>✓ API access</li>
              <li>✓ Dedicated support team</li>
              <li>✓ Compliance reporting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Prediction AI</h3>
          <p className="text-gray-600 mb-4">
            Advanced machine learning models analyze market data, news sentiment, and economic 
            indicators to predict market movements with 78% accuracy.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 78% prediction accuracy</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Portfolio Optimization</h3>
          <p className="text-gray-600 mb-4">
            AI-powered portfolio analysis and optimization recommendations based on risk 
            tolerance, market conditions, and investment goals.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 25% average return improvement</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive risk analysis using Monte Carlo simulations and stress testing 
            to identify potential portfolio vulnerabilities.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 90% risk prediction accuracy</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
          <p className="text-gray-600 mb-4">
            Live market data processing and analysis with instant alerts for significant 
            market movements and opportunities.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ Sub-second data processing</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Reporting</h3>
          <p className="text-gray-600 mb-4">
            Generate comprehensive financial reports and insights automatically, 
            saving hours of manual analysis and reporting work.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 80% time savings</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sentiment Analysis</h3>
          <p className="text-gray-600 mb-4">
            AI analyzes news, social media, and market sentiment to predict how public 
            opinion will affect market movements.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 65% sentiment accuracy</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Financial Professionals Choose Our AI Suite</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Financial Results</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                78% accuracy in market predictions
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                25% average portfolio return improvement
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                90% accuracy in risk assessment
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                80% reduction in analysis time
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise-Grade Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Bank-level security and compliance
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Real-time market data integration
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Custom AI model development
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                API access for integration
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Firms</h3>
            <p className="text-gray-600 text-sm">Portfolio optimization and risk management</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Banks</h3>
            <p className="text-gray-600 text-sm">Credit risk assessment and market analysis</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hedge Funds</h3>
            <p className="text-gray-600 text-sm">Algorithmic trading and market prediction</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fintech Startups</h3>
            <p className="text-gray-600 text-sm">AI-powered financial products</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Financial Analysis?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join 200+ financial institutions using our AI Financial Forecasting Suite to make smarter investment decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Schedule Demo
          </Link>
          <Link 
            href="tel:+13024640950" 
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border border-green-600 hover:bg-green-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}
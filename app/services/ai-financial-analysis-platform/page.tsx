import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Financial Analysis Platform - Zion Tech Group',
  description: 'Advanced AI-powered financial analysis and forecasting platform. Automate financial reporting, risk assessment, and investment analysis.',
  keywords: 'AI financial analysis, financial forecasting, risk assessment, investment analysis, financial automation',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIFinancialAnalysisPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Financial Analysis Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionize your financial analysis with AI-powered insights, automated reporting, and predictive forecasting. 
          Make smarter financial decisions with advanced analytics and risk assessment.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-blue-50 px-4 py-2 rounded-lg">
            <span className="text-blue-800 font-semibold">Starting from $599/month</span>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Financial Reporting</h3>
          <p className="text-gray-600 mb-4">
            Generate comprehensive financial reports automatically with AI-powered data analysis and visualization.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• P&L statements</li>
            <li>• Balance sheets</li>
            <li>• Cash flow analysis</li>
            <li>• KPI dashboards</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Forecasting</h3>
          <p className="text-gray-600 mb-4">
            Forecast future financial performance using advanced machine learning models and historical data analysis.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Revenue forecasting</li>
            <li>• Expense prediction</li>
            <li>• Market trend analysis</li>
            <li>• Scenario modeling</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h3>
          <p className="text-gray-600 mb-4">
            Identify and assess financial risks with AI-powered analysis of market conditions and portfolio performance.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Credit risk analysis</li>
            <li>• Market risk assessment</li>
            <li>• Operational risk monitoring</li>
            <li>• Compliance tracking</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Analysis</h3>
          <p className="text-gray-600 mb-4">
            Analyze investment opportunities with AI-powered portfolio optimization and performance tracking.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Portfolio optimization</li>
            <li>• Asset allocation</li>
            <li>• Performance tracking</li>
            <li>• Investment recommendations</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Fraud Detection</h3>
          <p className="text-gray-600 mb-4">
            Detect fraudulent activities and anomalies in financial transactions using advanced AI algorithms.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Transaction monitoring</li>
            <li>• Anomaly detection</li>
            <li>• Pattern recognition</li>
            <li>• Real-time alerts</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
          <p className="text-gray-600 mb-4">
            Ensure compliance with financial regulations and reporting requirements through automated monitoring.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Regulatory reporting</li>
            <li>• Compliance monitoring</li>
            <li>• Audit trail management</li>
            <li>• Documentation automation</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🏦 Banking</h3>
            <p className="text-gray-600">Credit risk assessment, fraud detection, and regulatory compliance for financial institutions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💼 Investment Firms</h3>
            <p className="text-gray-600">Portfolio optimization, market analysis, and investment strategy development.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🏢 Corporate Finance</h3>
            <p className="text-gray-600">Financial planning, budgeting, and performance analysis for businesses.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 Insurance</h3>
            <p className="text-gray-600">Risk assessment, claims analysis, and actuarial modeling for insurance companies.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🏪 Fintech</h3>
            <p className="text-gray-600">Digital financial services, payment processing, and alternative lending solutions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🏛️ Government</h3>
            <p className="text-gray-600">Public finance management, budget analysis, and economic forecasting.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$599<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• Basic financial reporting</li>
              <li>• Risk assessment tools</li>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$1,299<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-2 text-gray-600">
              <li>• Advanced analytics & forecasting</li>
              <li>• Investment analysis tools</li>
              <li>• 20 data sources</li>
              <li>• Fraud detection</li>
              <li>• Priority support</li>
            </ul>
            <Link href="/contact" className="block mt-6 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">Contact Us</div>
            <ul className="space-y-2 text-gray-600">
              <li>• Custom analytics & reporting</li>
              <li>• White-label solution</li>
              <li>• Unlimited data sources</li>
              <li>• Regulatory compliance</li>
              <li>• Dedicated account manager</li>
            </ul>
            <Link href="/contact" className="block mt-6 bg-gray-600 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Financial Analysis?</h2>
        <p className="text-gray-600 mb-6">Make smarter financial decisions with AI-powered insights and automated analysis.</p>
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
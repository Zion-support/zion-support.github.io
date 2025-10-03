// import React from 'react';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'FinTech AI Risk Management Platform - Zion Tech Group',
  description: 'Advanced AI-powered risk management platform for financial institutions. Detect fraud, assess credit risk, and ensure regulatory compliance.',
  keywords: 'fintech AI, risk management, fraud detection, credit risk, financial compliance, AI banking, fintech solutions',
  robots: {
    index: true,
    follow: true,
  },
};

export default function FinTechAIRiskManagement() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">FinTech AI Risk Management Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protect your financial institution with advanced AI-powered risk management. 
          Detect fraud, assess credit risk, and ensure regulatory compliance with cutting-edge technology.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-12">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
            <div className="text-gray-600">Fraud Detection Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-gray-600">Risk Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
            <div className="text-gray-600">Faster Processing</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Real-time Monitoring</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Fraud Detection</h3>
          <p className="text-gray-600 mb-4">
            Advanced AI algorithms detect fraudulent transactions in real-time with 99.8% accuracy.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Transaction monitoring</li>
            <li>• Behavioral analysis</li>
            <li>• Pattern recognition</li>
            <li>• Instant alerts</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Credit Risk Assessment</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive credit risk evaluation using machine learning and alternative data sources.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Credit scoring</li>
            <li>• Default prediction</li>
            <li>• Portfolio analysis</li>
            <li>• Stress testing</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
          <p className="text-gray-600 mb-4">
            Automated compliance monitoring for AML, KYC, GDPR, and other financial regulations.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• AML monitoring</li>
            <li>• KYC automation</li>
            <li>• GDPR compliance</li>
            <li>• Regulatory reporting</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Risk Analysis</h3>
          <p className="text-gray-600 mb-4">
            Advanced market risk modeling and portfolio optimization using AI and machine learning.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• VaR calculations</li>
            <li>• Stress testing</li>
            <li>• Portfolio optimization</li>
            <li>• Market volatility</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Risk Management</h3>
          <p className="text-gray-600 mb-4">
            Identify and mitigate operational risks across all business processes and systems.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Process monitoring</li>
            <li>• System risk assessment</li>
            <li>• Vendor risk management</li>
            <li>• Incident tracking</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
          <p className="text-gray-600 mb-4">
            Predict future risks and market conditions using advanced machine learning models.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Risk forecasting</li>
            <li>• Market prediction</li>
            <li>• Early warning systems</li>
            <li>• Scenario modeling</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Startup</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">$1,999/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 10,000 transactions/month</li>
              <li>• Basic fraud detection</li>
              <li>• Standard risk models</li>
              <li>• Email support</li>
              <li>• Basic reporting</li>
            </ul>
            <Link to="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500">
            <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">$4,999/month</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Up to 100,000 transactions/month</li>
              <li>• Advanced AI models</li>
              <li>• Real-time monitoring</li>
              <li>• Priority support</li>
              <li>• Advanced analytics</li>
              <li>• API access</li>
            </ul>
            <Link to="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
              Get Started
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Institution</h3>
            <div className="text-3xl font-bold text-green-600 mb-4">Custom</div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Unlimited transactions</li>
              <li>• Custom AI models</li>
              <li>• Dedicated support</li>
              <li>• On-premise deployment</li>
              <li>• Custom integrations</li>
              <li>• SLA guarantee</li>
            </ul>
            <Link to="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Regulatory Compliance</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Regulations</h3>
            <p className="text-gray-600 mb-4">
              Full compliance with Basel III, Solvency II, MiFID II, and other major financial regulations.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
            <p className="text-gray-600">
              Bank-grade security with end-to-end encryption, secure data centers, and regular security audits.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Audit & Reporting</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive audit trails, automated regulatory reporting, and real-time compliance monitoring.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
            <p className="text-gray-600">
              SOC 2 Type II, ISO 27001, PCI DSS, and other industry-standard certifications.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Bank</h3>
            <p className="text-gray-600 mb-4">
              "Reduced fraud losses by 85% and false positives by 60% using AI-powered fraud detection. Our customers enjoy faster, more secure transactions."
            </p>
            <div className="text-sm text-gray-500">- Jennifer Martinez, Chief Risk Officer</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Credit Union</h3>
            <p className="text-gray-600 mb-4">
              "Improved credit risk assessment accuracy by 40% and reduced loan processing time by 70% with AI-powered risk models."
            </p>
            <div className="text-sm text-gray-500">- Robert Chen, Head of Lending</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Secure Your Financial Future</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join leading financial institutions using our AI risk management platform to protect assets, ensure compliance, and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
            Schedule Demo
          </Link>
          <Link to="tel:+13024640950" className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
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
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Brain, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  PieChart,
  FileText,
  Calendar,
  Shield,
  Globe,
  Activity,
  Zap,
  Cpu,
  Database,
  Eye,
  Users,
  CreditCard,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Financial Intelligence Platform - Zion Tech Group',
  description: 'Revolutionary AI-powered financial intelligence platform that provides real-time insights, fraud detection, and automated financial analysis with 99.9% accuracy.',
  keywords: 'AI financial intelligence, fraud detection, financial analytics, automated accounting, financial forecasting',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIFinancialIntelligencePlatform() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
          <Brain className="w-4 h-4 mr-2" />
          AI-Powered Financial Intelligence
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Financial Intelligence Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Transform your financial operations with AI that detects fraud, automates accounting, 
          predicts cash flow, and provides real-time financial insights with 99.9% accuracy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:kleber@ziontechgroup.com?subject=AI Financial Intelligence Platform Inquiry"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Secure Your Finances Today
          </Link>
          <Link 
            href="tel:+13024640950"
            className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Fraud Detection</h3>
          <p className="text-gray-600 mb-4">
            Advanced AI algorithms detect fraudulent transactions in real-time with 99.9% accuracy and instant alerts.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• 99.9% fraud detection accuracy</li>
            <li>• Real-time transaction monitoring</li>
            <li>• Instant fraud alerts</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Accounting</h3>
          <p className="text-gray-600 mb-4">
            AI-powered automated bookkeeping, invoice processing, and financial statement generation.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Automated bookkeeping</li>
            <li>• Invoice processing</li>
            <li>• Financial statement generation</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cash Flow Prediction</h3>
          <p className="text-gray-600 mb-4">
            Predictive analytics for cash flow forecasting, budget planning, and financial risk assessment.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Cash flow forecasting</li>
            <li>• Budget optimization</li>
            <li>• Risk assessment</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Analytics</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive financial analytics with KPI tracking, performance metrics, and trend analysis.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• KPI tracking</li>
            <li>• Performance metrics</li>
            <li>• Trend analysis</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Automation</h3>
          <p className="text-gray-600 mb-4">
            Automated compliance monitoring, regulatory reporting, and audit trail management.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Regulatory compliance</li>
            <li>• Automated reporting</li>
            <li>• Audit trail management</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Intelligence</h3>
          <p className="text-gray-600 mb-4">
            AI-powered investment analysis, portfolio optimization, and market trend prediction.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Investment analysis</li>
            <li>• Portfolio optimization</li>
            <li>• Market prediction</li>
          </ul>
        </div>
      </div>

      {/* Financial Services */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Financial Services</h2>
          <p className="text-lg text-gray-600">From banking to investment, we cover all financial needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Banking</h3>
            <p className="text-gray-600 text-sm">Transaction monitoring, risk assessment, compliance automation</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Payments</h3>
            <p className="text-gray-600 text-sm">Payment processing, fraud detection, transaction analytics</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PieChart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment</h3>
            <p className="text-gray-600 text-sm">Portfolio management, market analysis, risk optimization</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accounting</h3>
            <p className="text-gray-600 text-sm">Automated bookkeeping, financial reporting, tax compliance</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 rounded-2xl p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your financial operations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Business</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$199<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Perfect for small businesses</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Up to 1,000 transactions/month
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Basic fraud detection
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Automated bookkeeping
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Standard reporting
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Email support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Small Business Plan - AI Financial Intelligence"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-emerald-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$799<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Ideal for growing businesses</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Up to 50,000 transactions/month
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Advanced fraud detection
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Predictive analytics
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom dashboards
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Priority support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Enterprise Plan - AI Financial Intelligence"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-emerald-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
              <p className="text-gray-600">For large organizations</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Unlimited transactions
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom AI models
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                White-label solution
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                24/7 dedicated support
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                On-premise deployment
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Custom Plan - AI Financial Intelligence"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Financial Impact</h2>
          <p className="text-lg text-gray-600">See how our AI Financial Intelligence Platform delivers measurable results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9%</h3>
            <p className="text-gray-600">Fraud detection accuracy</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">90%</h3>
            <p className="text-gray-600">Reduction in manual accounting time</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">50%</h3>
            <p className="text-gray-600">Reduction in financial errors</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">400%</h3>
            <p className="text-gray-600">ROI within first year</p>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-white mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl opacity-90">Connect with your existing financial systems</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Banking Systems</h3>
            <p className="text-sm opacity-80">Core banking, payment gateways, SWIFT</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">ERP Systems</h3>
            <p className="text-sm opacity-80">SAP, Oracle, Microsoft Dynamics</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-sm opacity-80">Tableau, Power BI, QlikView</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm opacity-80">Enterprise SSO, encryption, compliance</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Secure Your Financial Operations?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of organizations using our AI Financial Intelligence Platform to detect fraud, automate accounting, and optimize financial performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:kleber@ziontechgroup.com?subject=AI Financial Intelligence Platform Demo Request"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Schedule Demo
          </Link>
          <Link 
            href="tel:+13024640950"
            className="border border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 🌐 <Link href="https://ziontechgroup.com" className="text-emerald-600 hover:underline">ziontechgroup.com</Link></p>
        </div>
      </div>
    </div>
  );
}
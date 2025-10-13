import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  FileText, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Calculator,
  FileText as Report,
  MessageSquare
} from 'lucide-react';

const FinancialReportingToolPage = () => {
  return (
    <>
      <Helmet>
        <title>Financial Reporting Tool - Zion Tech Group</title>
        <meta name="description" content="Comprehensive financial reporting tool for generating detailed financial reports, tracking expenses, and analyzing business performance. Streamline your financial management." />
        <meta name="keywords" content="financial reporting, accounting software, financial analysis, expense tracking, business intelligence" />
        <meta property="og:title" content="Financial Reporting Tool - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive financial reporting tool for generating detailed financial reports, tracking expenses, and analyzing business performance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/financial-reporting-tool" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Financial Reporting Tool
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Generate comprehensive financial reports and gain valuable insights into your business performance. 
                Track expenses, analyze revenue, and make data-driven financial decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive Financial Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your finances and generate detailed reports.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Financial Reports */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Report className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Financial Reports</h3>
                <p className="text-gray-300 mb-6">
                  Generate comprehensive financial reports including P&L, balance sheet, and cash flow statements.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Profit & Loss statements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Balance sheets</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Cash flow reports</span>
                  </li>
                </ul>
              </div>

              {/* Expense Tracking */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expense Tracking</h3>
                <p className="text-gray-300 mb-6">
                  Track and categorize expenses with automated receipt processing and approval workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Receipt scanning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Expense categorization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Approval workflows</span>
                  </li>
                </ul>
              </div>

              {/* Revenue Analysis */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Revenue Analysis</h3>
                <p className="text-gray-300 mb-6">
                  Analyze revenue streams and identify growth opportunities with detailed analytics.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Revenue breakdown</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Growth analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Forecasting</span>
                  </li>
                </ul>
              </div>

              {/* Budget Management */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Budget Management</h3>
                <p className="text-gray-300 mb-6">
                  Create and manage budgets with variance analysis and performance tracking.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Budget creation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Variance analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </div>

              {/* Data Visualization */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Visualization</h3>
                <p className="text-gray-300 mb-6">
                  Visualize financial data with interactive charts, graphs, and dashboards.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Interactive dashboards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Custom charts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Real-time data</span>
                  </li>
                </ul>
              </div>

              {/* Integration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Integration</h3>
                <p className="text-gray-300 mb-6">
                  Connect with your existing accounting and business systems for seamless data flow.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Accounting software</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Banking systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>API access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Financial Reporting?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of comprehensive financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinancialReportingToolPage;
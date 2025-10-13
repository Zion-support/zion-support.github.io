import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Receipt, 
  BarChart3, 
  Zap, 
  TrendingUp, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Target,
  Clock,
  DollarSign,
  PieChart
} from 'lucide-react';

const ZionSmartExpenseCategorizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Smart Expense Categorizer - AI-Powered Expense Management</title>
        <meta name="description" content="Automate expense categorization with Zion Smart Expense Categorizer. AI-driven expense tracking, smart categorization, and financial insights for better budget management." />
        <meta name="keywords" content="expense categorization, AI expense tracking, smart expense management, budget tracking, financial insights, expense automation" />
        <meta property="og:title" content="Zion Smart Expense Categorizer - AI-Powered Expense Management" />
        <meta property="og:description" content="Automate expense categorization with Zion Smart Expense Categorizer. AI-driven expense tracking, smart categorization, and financial insights." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Smart Expense Categorizer - AI-Powered Expense Management" />
        <meta name="twitter:description" content="Automate expense categorization with Zion Smart Expense Categorizer. AI-driven expense tracking, smart categorization, and financial insights." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">AI-Powered Expense Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion Smart
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Expense Categorizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Automate expense categorization with AI-powered intelligence. 
                Track, categorize, and analyze your expenses effortlessly for better financial management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Smart Expense Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your expense tracking with intelligent categorization and comprehensive financial insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Receipt className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Categorization</h3>
                <p className="text-gray-300">
                  Automatically categorize expenses with 98% accuracy using advanced machine learning algorithms.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
                <p className="text-gray-300">
                  Get instant insights into your spending patterns with comprehensive analytics and visualizations.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Processing</h3>
                <p className="text-gray-300">
                  Process receipts and transactions automatically with OCR technology and smart data extraction.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                  <PieChart className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Budget Tracking</h3>
                <p className="text-gray-300">
                  Set budgets for different categories and get alerts when you're approaching limits.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Spending Insights</h3>
                <p className="text-gray-300">
                  Identify spending trends and patterns to make informed financial decisions.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>
                <p className="text-gray-300">
                  Get recommendations to reduce unnecessary expenses and optimize your spending habits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Zion Smart Expense Categorizer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Take control of your finances with intelligent expense management and automated categorization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Save Time on Bookkeeping</h3>
                      <p className="text-gray-300">
                        Automate expense categorization and reduce manual data entry by up to 90%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Improve Accuracy</h3>
                      <p className="text-gray-300">
                        Eliminate human errors in expense categorization with AI-powered precision.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Better Financial Control</h3>
                      <p className="text-gray-300">
                        Gain insights into your spending patterns and make informed financial decisions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Tax Preparation Ready</h3>
                      <p className="text-gray-300">
                        Generate tax-ready reports and ensure all deductible expenses are properly categorized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-purple-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Categorize Your Expenses?</h3>
                  <p className="text-gray-300 mb-6">
                    Start automating your expense management today and take control of your finances.
                  </p>
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Managing Your Expenses Smarter
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who have simplified their expense management with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSmartExpenseCategorizerPage;
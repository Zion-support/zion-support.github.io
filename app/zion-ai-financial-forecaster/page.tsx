import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionAIFinancialForecasterPage() {
  const features = [
    {
      title: "Revenue Forecasting",
      description: "Predict future revenue streams with advanced time series analysis and machine learning algorithms for accurate financial planning.",
      icon: "💰"
    },
    {
      title: "Cash Flow Analysis",
      description: "Monitor and predict cash flow patterns to optimize working capital and ensure financial stability.",
      icon: "💸"
    },
    {
      title: "Risk Assessment",
      description: "Identify potential financial risks and market volatility to help you make informed investment decisions.",
      icon: "⚠️"
    },
    {
      title: "Budget Optimization",
      description: "AI-powered budget allocation recommendations based on historical performance and future projections.",
      icon: "📊"
    },
    {
      title: "Market Analysis",
      description: "Integrate external market data and economic indicators for comprehensive financial forecasting.",
      icon: "📈"
    },
    {
      title: "Scenario Modeling",
      description: "Model different financial scenarios to prepare for various market conditions and business outcomes.",
      icon: "🎯"
    }
  ];

  const benefits = [
    "Improve financial planning accuracy by 75%",
    "Reduce financial risk exposure",
    "Optimize cash flow management",
    "Enhance investment decisions",
    "Streamline budget allocation",
    "Increase financial transparency"
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Forecaster - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered financial forecasting for revenue prediction, cash flow analysis, and risk assessment. Make informed financial decisions with data-driven insights." />
        <meta name="keywords" content="financial forecasting, revenue prediction, cash flow analysis, financial planning, risk assessment, budget optimization" />
        <meta property="og:title" content="AI Financial Forecaster - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered financial forecasting for revenue prediction and risk assessment." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-financial-forecaster" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-financial-forecaster" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Financial Forecaster
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-4xl mx-auto">
                Predict financial performance with AI-powered forecasting. Analyze revenue, cash flow, and market trends to make informed financial decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Financial Forecasting</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI capabilities for accurate financial planning and risk management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Financial Planning</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Achieve better financial outcomes with AI-powered insights and predictions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="ml-3 text-lg font-medium text-gray-900">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple integration, powerful financial insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Integration</h3>
                <p className="text-gray-600">Connect your financial systems, accounting software, and market data sources for comprehensive analysis.</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
                <p className="text-gray-600">Advanced algorithms analyze your financial data to generate accurate forecasts and risk assessments.</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Take Action</h3>
                <p className="text-gray-600">Use insights to optimize budgets, manage cash flow, and make strategic financial decisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Forecast Your Future?</h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                Join leading companies using our AI Financial Forecaster to optimize their financial planning and decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

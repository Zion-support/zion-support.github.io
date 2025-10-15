import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionAISalesPredictorPage() {
  const features = [
    {
      title: "Advanced Forecasting",
      description: "Machine learning algorithms analyze historical sales data, market trends, and external factors to predict future sales with 90%+ accuracy.",
      icon: "📈"
    },
    {
      title: "Multi-Factor Analysis",
      description: "Considers seasonality, economic indicators, customer behavior, and competitive landscape for comprehensive sales predictions.",
      icon: "🔍"
    },
    {
      title: "Real-time Updates",
      description: "Continuously updates predictions as new data becomes available, ensuring your forecasts remain accurate and relevant.",
      icon: "⚡"
    },
    {
      title: "Scenario Planning",
      description: "Model different scenarios and their impact on sales to help you prepare for various market conditions.",
      icon: "🎯"
    },
    {
      title: "Performance Tracking",
      description: "Monitor prediction accuracy over time and get insights into which factors most influence your sales performance.",
      icon: "📊"
    },
    {
      title: "Custom Models",
      description: "Tailored machine learning models designed specifically for your industry, product mix, and business model.",
      icon: "⚙️"
    }
  ];

  const benefits = [
    "Increase forecast accuracy by 85%",
    "Reduce inventory costs by 30%",
    "Improve resource planning",
    "Identify growth opportunities",
    "Optimize pricing strategies",
    "Enhance decision making"
  ];

  return (
    <>
      <Helmet>
        <title>AI Sales Predictor - Zion Tech Group</title>
        <meta name="description" content="Predict sales with AI-powered forecasting. Analyze trends, optimize inventory, and make data-driven decisions with our advanced sales prediction platform." />
        <meta name="keywords" content="sales prediction, sales forecasting, AI forecasting, predictive analytics, sales optimization, revenue prediction" />
        <meta property="og:title" content="AI Sales Predictor - Zion Tech Group" />
        <meta property="og:description" content="Predict sales with AI-powered forecasting and advanced predictive analytics." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-sales-predictor" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-sales-predictor" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Sales Predictor
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
                Predict sales with unprecedented accuracy using AI-powered forecasting. Optimize inventory, plan resources, and make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Sales Prediction Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage advanced AI to forecast sales and optimize your business performance
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Sales Strategy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See measurable improvements in your sales forecasting and business planning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
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
                Simple integration, powerful predictions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Integration</h3>
                <p className="text-gray-600">Connect your sales data, CRM, and external market data. Our AI analyzes historical patterns and trends.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
                <p className="text-gray-600">Advanced machine learning models process your data to generate accurate sales forecasts and insights.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Take Action</h3>
                <p className="text-gray-600">Use predictions to optimize inventory, plan resources, and make informed business decisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Predict Your Sales?</h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Join leading companies using our AI Sales Predictor to optimize their sales strategy and boost revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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

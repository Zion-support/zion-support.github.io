import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionAICustomerChurnPredictorPage() {
  const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning algorithms analyze customer behavior patterns to predict churn risk with 95%+ accuracy.",
      icon: "🔮"
    },
    {
      title: "Real-time Scoring",
      description: "Get instant churn risk scores for every customer with real-time data processing and continuous model updates.",
      icon: "⚡"
    },
    {
      title: "Behavioral Insights",
      description: "Deep analysis of customer interactions, usage patterns, and engagement metrics to identify early warning signs.",
      icon: "📊"
    },
    {
      title: "Automated Alerts",
      description: "Smart notification system that alerts your team when customers show high churn probability, enabling proactive intervention.",
      icon: "🚨"
    },
    {
      title: "Retention Campaigns",
      description: "Automated personalized retention campaigns triggered by churn risk levels to maximize customer retention.",
      icon: "🎯"
    },
    {
      title: "ROI Tracking",
      description: "Comprehensive analytics dashboard showing retention impact, cost savings, and revenue protection metrics.",
      icon: "💰"
    }
  ];

  const benefits = [
    "Reduce churn by up to 40%",
    "Increase customer lifetime value",
    "Lower acquisition costs",
    "Improve customer satisfaction",
    "Optimize retention strategies",
    "Boost revenue retention"
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Churn Predictor - Zion Tech Group</title>
        <meta name="description" content="Predict and prevent customer churn with our advanced AI-powered analytics. Identify at-risk customers and implement targeted retention strategies." />
        <meta name="keywords" content="customer churn prediction, retention analytics, customer lifetime value, predictive modeling, churn prevention, customer analytics" />
        <meta property="og:title" content="AI Customer Churn Predictor - Zion Tech Group" />
        <meta property="og:description" content="Predict and prevent customer churn with advanced AI-powered analytics and retention strategies." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-churn-predictor" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-churn-predictor" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Customer Churn Predictor
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
                Predict customer churn before it happens. Our AI-powered solution identifies at-risk customers and helps you implement targeted retention strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Churn Prediction Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage cutting-edge AI to understand customer behavior and prevent churn
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Retention Strategy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See measurable results with our AI-powered churn prediction and prevention platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
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
                Simple integration, powerful results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Integration</h3>
                <p className="text-gray-600">Connect your customer data sources. Our AI analyzes behavioral patterns, transaction history, and engagement metrics.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
                <p className="text-gray-600">Advanced machine learning models process your data to generate churn risk scores and identify at-risk customers.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Take Action</h3>
                <p className="text-gray-600">Receive alerts and implement targeted retention campaigns to prevent churn and maximize customer lifetime value.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Reduce Churn?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Join leading companies using our AI Customer Churn Predictor to retain more customers and increase revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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

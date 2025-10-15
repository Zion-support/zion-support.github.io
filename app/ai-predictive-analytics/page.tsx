import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIPredictiveAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI predictive analytics with machine learning models for forecasting trends, customer behavior, and business outcomes." />
        <meta name="keywords" content="AI predictive analytics, machine learning, forecasting, data science, business intelligence, predictive modeling" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">📊</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Predictive Analytics <span className="text-green-600">Pro</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Predict future trends and behaviors with our advanced AI predictive analytics platform. 
              Make data-driven decisions with machine learning-powered forecasting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Get Started
              </Link>
              <Link to="/pricing" className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Series Forecasting</h3>
              <p className="text-gray-600">Predict future values based on historical data patterns with advanced time series models.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Behavior Prediction</h3>
              <p className="text-gray-600">Understand and predict customer actions, preferences, and lifetime value.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h3>
              <p className="text-gray-600">Identify potential risks and opportunities with comprehensive risk modeling.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Demand Forecasting</h3>
              <p className="text-gray-600">Predict product demand and optimize inventory management with AI models.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Price Optimization</h3>
              <p className="text-gray-600">Optimize pricing strategies based on market conditions and customer behavior.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anomaly Detection</h3>
              <p className="text-gray-600">Identify unusual patterns and outliers in your data automatically.</p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Up to 10,000 predictions/month</li>
                  <li>✓ Basic forecasting models</li>
                  <li>✓ Standard data sources</li>
                  <li>✓ Email support</li>
                </ul>
                <Link to="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
                  Get Started
                </Link>
              </div>
              <div className="border-2 border-green-500 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$799<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Up to 100,000 predictions/month</li>
                  <li>✓ Advanced ML models</li>
                  <li>✓ Custom data integration</li>
                  <li>✓ Real-time predictions</li>
                  <li>✓ API access</li>
                </ul>
                <Link to="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
                  Get Started
                </Link>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$1,999<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Unlimited predictions</li>
                  <li>✓ Custom model training</li>
                  <li>✓ White-label solution</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ 24/7 monitoring</li>
                </ul>
                <Link to="/contact" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center block">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales Forecasting</h3>
                <p className="text-gray-600">Predict sales trends and revenue with high accuracy to improve business planning and resource allocation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Churn Prevention</h3>
                <p className="text-gray-600">Identify customers at risk of churning and take proactive measures to retain them.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Planning</h3>
                <p className="text-gray-600">Forecast financial performance and cash flow to make informed investment decisions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain Optimization</h3>
                <p className="text-gray-600">Predict demand patterns and optimize inventory levels to reduce costs and improve efficiency.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-green-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Predict the Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start using our AI Predictive Analytics Pro platform to make data-driven decisions and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPredictiveAnalyticsPage;
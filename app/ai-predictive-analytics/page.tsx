import React from 'react';
import SEOHead from '../components/SEOHead';

const AIPredictiveAnalyticsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion AI Predictive Analytics - Advanced Data Forecasting & Insights"
        description="Transform your data into actionable insights with AI-powered predictive analytics. Forecast trends, identify patterns, and make data-driven decisions with advanced machine learning models."
        keywords="predictive analytics, AI forecasting, data insights, machine learning, business intelligence, trend analysis, predictive modeling, data science"
        canonicalUrl="https://ziontechgroup.com/ai-predictive-analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Zion AI Predictive Analytics
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your data into actionable insights with advanced AI-powered predictive analytics. 
                Forecast trends, identify patterns, and make data-driven decisions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  Start Free Analysis
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Advanced Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the power of your data with cutting-edge AI and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Time Series Forecasting</h3>
              <p className="text-gray-300 mb-6">
                Predict future values based on historical data patterns. Perfect for sales forecasting, demand planning, and trend analysis.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• ARIMA & LSTM models</li>
                <li>• Seasonal decomposition</li>
                <li>• Multi-step ahead forecasting</li>
                <li>• Confidence intervals</li>
              </ul>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Customer Behavior Analysis</h3>
              <p className="text-gray-300 mb-6">
                Understand customer patterns, predict churn, and identify high-value segments with advanced behavioral modeling.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Churn prediction models</li>
                <li>• Customer lifetime value</li>
                <li>• Segmentation analysis</li>
                <li>• Purchase propensity scoring</li>
              </ul>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Risk Assessment</h3>
              <p className="text-gray-300 mb-6">
                Identify potential risks and opportunities with predictive risk models. Make informed decisions with confidence.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Credit risk scoring</li>
                <li>• Fraud detection</li>
                <li>• Market risk analysis</li>
                <li>• Operational risk assessment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-gray-800/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven solutions across multiple industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Finance</h3>
                <p className="text-gray-300 text-sm">Credit scoring, fraud detection, market analysis, and algorithmic trading</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Retail</h3>
                <p className="text-gray-300 text-sm">Demand forecasting, inventory optimization, and customer analytics</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm">Patient outcome prediction, drug discovery, and treatment optimization</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Manufacturing</h3>
                <p className="text-gray-300 text-sm">Predictive maintenance, quality control, and supply chain optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Flexible Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Up to 1M data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Basic forecasting models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Standard dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Up to 10M data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Advanced ML models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$1,999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Unlimited data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom model development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    White-label solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    On-premise deployment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-700 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Unlock the Power of Your Data</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join leading companies who are already using AI to make better decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Free Analysis
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-200">
              <p>Contact: +1 302 464 0950 | kleber@ziontechgroup.com</p>
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPredictiveAnalyticsPage;
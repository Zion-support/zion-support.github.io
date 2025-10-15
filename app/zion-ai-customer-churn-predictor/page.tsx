import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionaicustomerchurnpredictorPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [churnRisk, setChurnRisk] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setChurnRisk('Low Risk - Customer shows high engagement and satisfaction');
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Churn Predictor - Reduce Customer Loss | Zion Tech Group</title>
        <meta name="description" content="Predict and prevent customer churn with our advanced AI-powered churn prediction tool. Identify at-risk customers and take proactive retention actions." />
        <meta name="keywords" content="customer churn prediction, churn analysis, customer retention, AI churn model, customer lifetime value, retention strategies" />
        <meta property="og:title" content="Zion AI Customer Churn Predictor - Reduce Customer Loss" />
        <meta property="og:description" content="Predict and prevent customer churn with our advanced AI-powered churn prediction tool. Identify at-risk customers and take proactive retention actions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-churn-predictor" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-churn-predictor" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Zion AI Customer Churn Predictor
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Predict and prevent customer churn with our advanced AI-powered system. Identify at-risk customers and take proactive retention actions to reduce churn by up to 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Try Demo'}
                </button>
                <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Churn Prediction Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered churn predictor helps you understand customer behavior and take action before it's too late
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Risk Scoring</h3>
                <p className="text-gray-600">
                  Get instant churn risk scores for each customer based on their behavior patterns and engagement metrics.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Behavioral Analysis</h3>
                <p className="text-gray-600">
                  Analyze customer interactions, usage patterns, and engagement levels to identify early warning signs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Early Warning System</h3>
                <p className="text-gray-600">
                  Receive alerts when customers show signs of potential churn, allowing for timely intervention.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Retention Recommendations</h3>
                <p className="text-gray-600">
                  Get personalized recommendations for retention strategies based on customer profiles and risk factors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Use machine learning models to predict churn probability with up to 95% accuracy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Actions</h3>
                <p className="text-gray-600">
                  Automatically trigger retention campaigns and personalized offers for high-risk customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Our Churn Predictor</h2>
              <p className="text-xl text-gray-600">
                Test our AI-powered churn prediction with sample customer data
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="customer-id" className="block text-sm font-medium text-gray-700 mb-2">
                    Customer ID:
                  </label>
                  <input
                    id="customer-id"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter customer ID"
                  />
                </div>
                <div>
                  <label htmlFor="days-since-last-activity" className="block text-sm font-medium text-gray-700 mb-2">
                    Days since last activity:
                  </label>
                  <input
                    id="days-since-last-activity"
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter number of days"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="support-tickets" className="block text-sm font-medium text-gray-700 mb-2">
                    Support tickets (last 30 days):
                  </label>
                  <input
                    id="support-tickets"
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter number of tickets"
                  />
                </div>
                <div>
                  <label htmlFor="satisfaction-score" className="block text-sm font-medium text-gray-700 mb-2">
                    Satisfaction score (1-10):
                  </label>
                  <input
                    id="satisfaction-score"
                    type="number"
                    min="1"
                    max="10"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter satisfaction score"
                  />
                </div>
              </div>
              
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isAnalyzing ? 'Analyzing Customer Data...' : 'Analyze Churn Risk'}
              </button>
              
              {churnRisk && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-800 font-medium">{churnRisk}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Churn Predictor?</h2>
              <p className="text-xl text-gray-600">
                Proven results and advanced technology to help you retain more customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <p className="text-gray-600">Average reduction in customer churn</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">Prediction accuracy rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                <p className="text-gray-600">Increase in customer lifetime value</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">3x</div>
                <p className="text-gray-600">ROI on retention investments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your customer base and churn prediction needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 1,000 customers
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Basic churn prediction
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Email alerts
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    API access
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">$499<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 10,000 customers
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced ML models
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom retention strategies
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Analytics dashboard
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">Custom<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited customers
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom model training
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automated retention campaigns
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated support team
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    On-premise deployment
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Reducing Customer Churn Today
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of companies using our AI-powered churn predictor to retain more customers and increase revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

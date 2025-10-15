import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIFraudDetectionPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Fraud Detection System",
    "description": "Advanced fraud detection and prevention system using machine learning to identify suspicious activities in real-time",
    "brand": "Zion Tech Group",
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Fraud Detection System - Zion Tech Group</title>
        <meta name="description" content="Advanced fraud detection and prevention system using machine learning to identify suspicious activities in real-time." />
        <meta name="keywords" content="AI fraud detection, machine learning, fraud prevention, risk assessment, transaction monitoring, cybersecurity" />
        <meta property="og:title" content="AI Fraud Detection System - Zion Tech Group" />
        <meta property="og:description" content="Advanced fraud detection and prevention system using machine learning to identify suspicious activities in real-time." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-fraud-detection" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Fraud Detection System</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Protect your business with advanced AI-powered fraud detection that identifies suspicious activities in real-time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Get Started
                </a>
                <a href="#demo" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-medium">
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Fraud Detection Features</h2>
              <p className="text-lg text-gray-600">Advanced AI technology to keep your business secure</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Detection</h3>
                <p className="text-gray-600">Monitor transactions and activities in real-time with instant fraud alerts and blocking capabilities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning Models</h3>
                <p className="text-gray-600">Advanced ML algorithms that learn from patterns and adapt to new fraud techniques automatically.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Behavioral Analysis</h3>
                <p className="text-gray-600">Analyze user behavior patterns to identify anomalies and suspicious activities before they cause damage.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Scoring</h3>
                <p className="text-gray-600">Comprehensive risk assessment with detailed scoring to help prioritize and respond to threats.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transaction Monitoring</h3>
                <p className="text-gray-600">Comprehensive monitoring of all transactions with detailed logging and analysis capabilities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Alert Management</h3>
                <p className="text-gray-600">Intelligent alert system that reduces false positives while ensuring critical threats are never missed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$399</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 10,000 transactions/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic ML models
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email alerts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic reporting
                  </li>
                </ul>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-red-600 text-white rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$1,299</span>
                  <span className="text-red-200">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-red-300 mr-2">✓</span>
                    Up to 100,000 transactions/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-300 mr-2">✓</span>
                    Advanced ML models
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-300 mr-2">✓</span>
                    Real-time alerts
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-300 mr-2">✓</span>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-300 mr-2">✓</span>
                    API integration
                  </li>
                </ul>
                <button className="w-full bg-white text-red-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$3,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited transactions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom ML models
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    On-premise deployment
                  </li>
                </ul>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
              <p className="text-lg text-gray-600">Protect your business across all industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">E-commerce & Retail</h3>
                <p className="text-gray-600">Detect fraudulent transactions, fake accounts, and payment fraud in online stores and marketplaces.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Banking & Finance</h3>
                <p className="text-gray-600">Protect against credit card fraud, account takeover, and money laundering with advanced detection.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance</h3>
                <p className="text-gray-600">Identify fraudulent claims and prevent insurance fraud with behavioral analysis and pattern recognition.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600">Detect medical fraud, prescription abuse, and billing irregularities in healthcare systems.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gaming & Entertainment</h3>
                <p className="text-gray-600">Prevent cheating, account sharing, and fraudulent in-game transactions in gaming platforms.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cryptocurrency</h3>
                <p className="text-gray-600">Detect suspicious crypto transactions, wallet activities, and potential money laundering schemes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our AI Fraud Detection System and how it can secure your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-medium">
                Email Us
              </a>
            </div>
            <div className="mt-8 text-red-200">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="hover:text-white underline">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFraudDetectionPage;
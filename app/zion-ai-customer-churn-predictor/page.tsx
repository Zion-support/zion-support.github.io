import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAICustomerChurnPredictorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Churn Predictor - Zion Tech Group</title>
        <meta name="description" content="Predict customer churn with AI-powered analytics. Identify at-risk customers and take proactive retention actions to reduce churn rates." />
        <meta name="keywords" content="customer churn prediction, AI analytics, customer retention, machine learning, churn prevention" />
        <meta property="og:title" content="AI Customer Churn Predictor - Zion Tech Group" />
        <meta property="og:description" content="Predict customer churn with AI-powered analytics. Identify at-risk customers and take proactive retention actions to reduce churn rates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-churn-predictor" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-churn-predictor" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Customer Churn Predictor</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Predict customer churn with AI-powered analytics. Identify at-risk customers and take proactive retention actions to reduce churn rates and increase customer lifetime value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Use machine learning algorithms to analyze customer behavior patterns and predict churn probability with high accuracy.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Behavioral pattern analysis</li>
                <li>• Engagement scoring</li>
                <li>• Risk probability calculation</li>
                <li>• Trend identification</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Alerts</h3>
              <p className="text-gray-600 mb-4">
                Get instant notifications when customers show signs of churning, allowing for immediate intervention and retention efforts.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Instant risk alerts</li>
                <li>• Customizable thresholds</li>
                <li>• Multi-channel notifications</li>
                <li>• Priority scoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Retention Strategies</h3>
              <p className="text-gray-600 mb-4">
                Receive personalized retention recommendations and automated campaigns to re-engage at-risk customers effectively.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Personalized offers</li>
                <li>• Automated campaigns</li>
                <li>• Retention playbooks</li>
                <li>• A/B testing support</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Data Collection</h3>
                <p className="text-gray-600 text-sm">Gather customer interaction data from multiple touchpoints</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">AI Analysis</h3>
                <p className="text-gray-600 text-sm">Machine learning models analyze patterns and predict churn risk</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Risk Scoring</h3>
                <p className="text-gray-600 text-sm">Assign churn probability scores to each customer</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Action</h3>
                <p className="text-gray-600 text-sm">Execute targeted retention campaigns and interventions</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAICustomerChurnPredictorPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIDataScientistProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Scientist Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered data science platform with automated analysis, predictive modeling, and intelligent insights for data-driven decision making." />
        <meta name="keywords" content="AI data science, predictive modeling, data analysis, machine learning, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-data-scientist-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Data Scientist <span className="text-orange-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered data science platform with automated analysis, predictive modeling, and intelligent insights for data-driven decision making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Automated Analysis</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered data analysis that automatically identifies patterns, trends, and insights in your data.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Pattern recognition</li>
                  <li>• Anomaly detection</li>
                  <li>• Statistical analysis</li>
                  <li>• Data visualization</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Predictive Modeling</h3>
                <p className="text-gray-300 mb-4">
                  Build and deploy machine learning models for accurate predictions and forecasting.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Machine learning models</li>
                  <li>• Predictive analytics</li>
                  <li>• Forecasting capabilities</li>
                  <li>• Model optimization</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Data Visualization</h4>
                  <p className="text-gray-300">Interactive charts and dashboards</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">AutoML</h4>
                  <p className="text-gray-300">Automated machine learning workflows</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Smart Insights</h4>
                  <p className="text-gray-300">AI-generated business insights</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Data Scientist Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDataScientistProPage;
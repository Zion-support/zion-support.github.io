import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAiCustomerInsightsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights | Advanced Customer Analytics Platform</title>
        <meta name="description" content="Unlock deep customer insights with AI-powered analytics. Understand customer behavior, preferences, and trends to drive business growth." />
        <meta name="keywords" content="AI customer insights, customer analytics, behavior analysis, customer intelligence, AI analytics, customer data" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion AI Customer Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the power of customer data with AI-driven insights that reveal hidden patterns, 
              predict behavior, and drive strategic business decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Behavioral Analytics</h3>
              <p className="text-gray-300">
                Analyze customer interactions, purchase patterns, and engagement metrics to understand what drives decisions.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Modeling</h3>
              <p className="text-gray-300">
                Forecast customer lifetime value, churn probability, and future purchase behavior with AI models.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Segmentation</h3>
              <p className="text-gray-300">
                Automatically group customers based on behavior, preferences, and value for targeted marketing.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Data Intelligence</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Real-time data processing</li>
                  <li>• Multi-source data integration</li>
                  <li>• Advanced pattern recognition</li>
                  <li>• Automated insight generation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Actionable Insights</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Personalized recommendations</li>
                  <li>• Churn prevention strategies</li>
                  <li>• Upselling opportunities</li>
                  <li>• Customer journey optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Discover Customer Insights
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAiCustomerInsightsPage;
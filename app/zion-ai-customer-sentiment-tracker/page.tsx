import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAICustomerSentimentTrackerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="Track customer sentiment in real-time with AI-powered analytics. Monitor feedback across all channels and improve customer satisfaction." />
        <meta name="keywords" content="customer sentiment analysis, AI analytics, customer feedback, sentiment tracking, customer satisfaction" />
        <meta property="og:title" content="AI Customer Sentiment Tracker - Zion Tech Group" />
        <meta property="og:description" content="Track customer sentiment in real-time with AI-powered analytics. Monitor feedback across all channels and improve customer satisfaction." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-customer-sentiment-tracker" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-sentiment-tracker" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Customer Sentiment Tracker</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track customer sentiment in real-time with AI-powered analytics. Monitor feedback across all channels and improve customer satisfaction with actionable insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Channel Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Monitor customer sentiment across social media, reviews, support tickets, surveys, and other communication channels.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Social media monitoring</li>
                <li>• Review analysis</li>
                <li>• Support ticket sentiment</li>
                <li>• Survey feedback analysis</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Analytics</h3>
              <p className="text-gray-600 mb-4">
                Get instant sentiment analysis with real-time dashboards and alerts for immediate response to customer concerns.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Live sentiment scores</li>
                <li>• Trend analysis</li>
                <li>• Alert notifications</li>
                <li>• Custom dashboards</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Actionable Insights</h3>
              <p className="text-gray-600 mb-4">
                Receive detailed insights and recommendations to improve customer experience and address negative sentiment proactively.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Root cause analysis</li>
                <li>• Improvement recommendations</li>
                <li>• Priority scoring</li>
                <li>• Success metrics tracking</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Proactive Customer Care</h3>
                <p className="text-gray-600">Identify and address customer issues before they escalate into major problems.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Brand Reputation Management</h3>
                <p className="text-gray-600">Monitor and protect your brand reputation across all customer touchpoints.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-600">Make informed decisions based on comprehensive sentiment data and trends.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Competitive Advantage</h3>
                <p className="text-gray-600">Stay ahead of competitors by understanding customer needs and preferences better.</p>
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

export default ZionAICustomerSentimentTrackerPage;

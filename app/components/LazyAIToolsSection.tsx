import React from 'react';

const LazyAIToolsSection: React.FC = () => {
  return (
    <div className="mt-20">
      <h2 className="text-responsive-lg font-bold text-gray-900 text-center mb-12">AI-Powered Tools</h2>
      <div className="grid grid-1-col md:grid-2-col lg:grid-4-col gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">🛡️</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Moderator</h3>
          <p className="text-gray-600 text-sm mb-3">Automated content moderation using AI</p>
          <div className="text-xs text-gray-500 mb-2">From $99/month</div>
          <a href="/zion-ai-content-moderator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">📈</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Predictor</h3>
          <p className="text-gray-600 text-sm mb-3">Predict sales trends with AI</p>
          <div className="text-xs text-gray-500 mb-2">From $149/month</div>
          <a href="/zion-ai-sales-predictor" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Automator</h3>
          <p className="text-gray-600 text-sm mb-3">Automate business workflows</p>
          <div className="text-xs text-gray-500 mb-2">From $59/month</div>
          <a href="/zion-ai-workflow-automator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">💰</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Forecaster</h3>
          <p className="text-gray-600 text-sm mb-3">AI-powered financial predictions</p>
          <div className="text-xs text-gray-500 mb-2">From $199/month</div>
          <a href="/zion-ai-financial-forecaster" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">📧</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Marketing Pro</h3>
          <p className="text-gray-600 text-sm mb-3">AI-powered email campaigns</p>
          <div className="text-xs text-gray-500 mb-2">From $39/month</div>
          <a href="/zion-ai-email-marketing-pro" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">📱</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Scheduler Pro</h3>
          <p className="text-gray-600 text-sm mb-3">AI-powered social media management</p>
          <div className="text-xs text-gray-500 mb-2">From $49/month</div>
          <a href="/zion-ai-social-scheduler-pro" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">📦</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Inventory Optimizer</h3>
          <p className="text-gray-600 text-sm mb-3">Smart inventory management</p>
          <div className="text-xs text-gray-500 mb-2">From $79/month</div>
          <a href="/zion-ai-inventory-optimizer-pro" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Insights</h3>
          <p className="text-gray-600 text-sm mb-3">Deep customer analytics</p>
          <div className="text-xs text-gray-500 mb-2">From $99/month</div>
          <a href="/zion-ai-customer-insights" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</a>
        </div>
      </div>
      <div className="text-center mt-8">
        <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium">View All Services →</a>
      </div>
    </div>
  );
};

export default LazyAIToolsSection;
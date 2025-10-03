import React from 'react';

const AIChatbotBuilderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          AI Chatbot Builder
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Intelligent Conversational AI</h3>
            <p className="text-gray-600 mb-4">
              Create sophisticated chatbots that understand context and provide meaningful interactions with your customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Natural Language Processing</h4>
                <p className="text-gray-600 text-sm">Advanced NLP for human-like conversations</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Multi-Channel Support</h4>
                <p className="text-gray-600 text-sm">Deploy across web, mobile, and messaging platforms</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Custom Training</h4>
                <p className="text-gray-600 text-sm">Train with your specific data and use cases</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Analytics Dashboard</h4>
                <p className="text-gray-600 text-sm">Track performance and user engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbotBuilderPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiChatbotBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI chatbot builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create intelligent chatbots that understand and respond to your customers naturally.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600">
                Advanced NLP capabilities for natural conversations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-channel Support</h3>
              <p className="text-gray-600">
                Deploy across web, mobile, and messaging platforms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Training</h3>
              <p className="text-gray-600">
                Train your chatbot with your specific business knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

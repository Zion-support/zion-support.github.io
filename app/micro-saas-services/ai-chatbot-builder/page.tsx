import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiChatbotBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Chatbot Builder - Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="AI Chatbot Builder micro SAAS services by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build intelligent chatbots for your business with our micro SAAS platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Setup</h3>
              <p className="text-gray-600">
                Get started quickly with our intuitive chatbot builder interface.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language</h3>
              <p className="text-gray-600">
                Advanced NLP capabilities for natural and engaging conversations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Platform</h3>
              <p className="text-gray-600">
                Deploy across websites, mobile apps, and messaging platforms.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
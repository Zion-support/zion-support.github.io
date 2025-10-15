import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIChatbotBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. No coding required, drag-and-drop interface." />
        <meta name="keywords" content="AI chatbot builder, chatbot creation, conversational AI, no-code chatbot, intelligent assistant" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Chatbot Builder</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build intelligent chatbots with our AI-powered chatbot builder. No coding required, drag-and-drop interface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drag & Drop Interface</h3>
              <p className="text-gray-600">
                Create chatbots using our intuitive drag-and-drop interface without any coding knowledge.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600">
                Advanced NLP capabilities to understand user intent and provide relevant responses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Platform Deployment</h3>
              <p className="text-gray-600">
                Deploy your chatbot across multiple platforms including websites, mobile apps, and messaging platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Training</h3>
              <p className="text-gray-600">
                Train your chatbot with your specific data and knowledge base for accurate responses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-600">
                Track chatbot performance and user interactions with detailed analytics and insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration Capabilities</h3>
              <p className="text-gray-600">
                Integrate with your existing systems, databases, and third-party services seamlessly.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Chatbot Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
                <p className="text-gray-600">Handle customer inquiries, provide support, and resolve common issues automatically.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Assistant</h3>
                <p className="text-gray-600">Guide customers through the sales process and answer product-related questions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Generation</h3>
                <p className="text-gray-600">Qualify leads and collect contact information through conversational interactions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">FAQ Bot</h3>
                <p className="text-gray-600">Answer frequently asked questions and provide instant responses to common queries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbotBuilderPage;
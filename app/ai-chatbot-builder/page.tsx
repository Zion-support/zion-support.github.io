import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function AiChatbotBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI chatbot builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create intelligent chatbots with our advanced AI chatbot builder platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
              <p className="text-gray-600">
                Advanced NLP capabilities for understanding and responding to user queries naturally.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Training</h3>
              <p className="text-gray-600">
                Train your chatbot with your specific data and business requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Platform Integration</h3>
              <p className="text-gray-600">
                Deploy your chatbot across multiple platforms and channels.
              </p>
            </div>
=======
export default function aichatbotbuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced ai chatbot builder solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Ai Chatbot Builder</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced ai chatbot builder solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for updates.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6995
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiCustomerSupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Enhance customer experience with AI-powered support solutions including chatbots and intelligent routing." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Customer Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance customer experience with AI-powered support solutions including intelligent chatbots and automated routing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Intelligent Chatbots</h3>
              <p className="text-gray-600">AI-powered chatbots that provide instant, accurate customer support.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Smart Routing</h3>
              <p className="text-gray-600">Automatically route customer inquiries to the right support agent.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Sentiment Analysis</h3>
              <p className="text-gray-600">Analyze customer sentiment to provide personalized support experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCustomerSupportPage;
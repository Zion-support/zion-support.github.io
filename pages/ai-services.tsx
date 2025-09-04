import React from 'react';
import Head from 'next/head';
import { Brain, Eye } from 'lucide-react';

export default function AIServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for your business" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Brain className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                AI-Powered Chatbots
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Intelligent conversational AI that provides 24/7 customer support and engagement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Computer Vision Solutions
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Advanced image recognition and analysis for various business applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
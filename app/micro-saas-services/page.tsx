import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function MicroSaasServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS services designed for small businesses and entrepreneurs." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our micro SaaS services designed for small businesses and entrepreneurs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Chatbot Builder</h3>
              <p className="text-gray-600">
                Create intelligent chatbots for your business without coding.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Landing Page Builder</h3>
              <p className="text-gray-600">
                Build high-converting landing pages in minutes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Survey Builder</h3>
              <p className="text-gray-600">
                Create and analyze surveys with AI-powered insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
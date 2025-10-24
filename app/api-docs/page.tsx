'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';

export default function APIDocsPage() {
  const [_copiedCode, _setCopiedCode] = useState<string | null>(null);
  const [searchQuery, _setSearchQuery] = useState('');


  const apiEndpoints = [
    {
      name: 'AI Chat',
      method: 'POST',
      path: '/api/ai/chat',
      description: 'AI-powered chat completion',
      parameters: ['message', 'model', 'temperature'],
      example: {
        request: {
          message: "Hello, how can I help you?",
          model: "gpt-4",
          temperature: 0.7
        },
        response: {
          response: "Hello! I'm here to help you with any questions or tasks you might have.",
          confidence: 0.95,
          tokens_used: 25
        }
      }
    }
  ];

  const filteredEndpoints = apiEndpoints.filter(endpoint =>
    endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete API documentation for Zion Tech Group's AI and IT solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{endpoint.name}</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {endpoint.method}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                <code className="bg-gray-800 text-green-400 px-3 py-2 rounded text-sm">
                  {endpoint.path}
                </code>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
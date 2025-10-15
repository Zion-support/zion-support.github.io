import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AiEmailAssistantPage() {
  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent email management and automation powered by AI technology." />
        <meta name="keywords" content="AI email assistant, email automation, smart email, AI email management" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Email Assistant</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your email productivity with our intelligent AI-powered email assistant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Smart Email Sorting</h3>
              <p className="text-gray-300">Automatically categorize and prioritize your emails using AI.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Auto-Responses</h3>
              <p className="text-gray-300">Generate intelligent responses based on email content and context.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Email Analytics</h3>
              <p className="text-gray-300">Get insights into your email patterns and productivity metrics.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
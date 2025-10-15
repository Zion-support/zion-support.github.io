import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Zap, Shield } from 'lucide-react';

export default function AiEmailAssistantPage() {
  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your email management with AI-powered automation, smart classification, and intelligent responses."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Email Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email management with AI-powered automation, smart classification, and intelligent responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <Mail className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Smart Classification</h3>
                <p className="text-gray-300">
                  Automatically categorize and prioritize emails using advanced AI algorithms.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Auto-Responses</h3>
                <p className="text-gray-300">
                  Generate intelligent, context-aware responses to common inquiries.
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Security</h3>
                <p className="text-gray-300">
                  Advanced spam detection and security features to protect your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Email Management?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Start using AI to manage your emails more efficiently today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
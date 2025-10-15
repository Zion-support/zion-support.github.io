import React from 'react';
import { Helmet } from 'react-helmet-async';

const AICodeAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered code assistant for developers. Get intelligent code suggestions, debugging help, and automated code generation across multiple programming languages." />
        <meta name="keywords" content="AI code assistant, code generation, debugging, programming, developer tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Code Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your intelligent coding companion. Get AI-powered code suggestions, 
              debugging assistance, and automated code generation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Code Generation
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Code Assistant understands context and generates high-quality code 
                across multiple programming languages. Get suggestions, complete functions, 
                and debug issues with AI-powered insights.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Multi-language support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Context-aware suggestions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Automated debugging
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Code optimization
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Code Editor</h3>
              <div className="space-y-4">
                <textarea
                  placeholder="Enter your code or describe what you want to build..."
                  className="w-full h-32 p-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-green-500 focus:outline-none font-mono text-sm"
                />
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Get AI Assistance
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Code Completion</h3>
              <p className="text-gray-300">
                Get intelligent code completions based on your project context and coding patterns.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Bug Detection</h3>
              <p className="text-gray-300">
                AI-powered bug detection and fixing suggestions to improve code quality.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300">
                Automatically generate documentation and comments for your code.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Boost Your Development Productivity
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of developers using our AI Code Assistant to write better code faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Coding
              </button>
              <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodeAssistantPage;
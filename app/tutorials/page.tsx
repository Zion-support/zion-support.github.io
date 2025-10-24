import React from 'react';
import { Helmet } from "react-helmet-async";

const TutorialsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Learn how to use our AI and IT solutions with comprehensive tutorials and guides."
        keywords="tutorials, guides, learning, AI tutorials, IT tutorials, how-to"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tutorials & Learning Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master our AI and IT solutions with step-by-step tutorials, guides, and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">AI Solutions Tutorials</h3>
              <p className="text-gray-400 mb-4">
                Learn how to implement and use our AI-powered solutions effectively.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Getting Started with AI Chatbot Builder</li>
                <li>• AI Document Processing Best Practices</li>
                <li>• Voice Assistant Integration Guide</li>
                <li>• Fraud Detection Setup Tutorial</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">IT Solutions Guides</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive guides for our IT infrastructure and development services.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Cloud Infrastructure Setup</li>
                <li>• Web Development Best Practices</li>
                <li>• Database Management Tutorials</li>
                <li>• Security Implementation Guide</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Micro SaaS Tutorials</h3>
              <p className="text-gray-400 mb-4">
                Step-by-step guides for using our micro SaaS applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Task Manager Pro Setup</li>
                <li>• Analytics Dashboard Configuration</li>
                <li>• Customer Support Hub Tutorial</li>
                <li>• Inventory Manager Guide</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TutorialsPage;
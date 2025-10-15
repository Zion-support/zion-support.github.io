import React from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn how to use our AI and IT solutions with comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, guides, learning, AI, IT solutions, how-to" />
        <link rel="canonical" href="https://ziontechgroup.com/tutorials" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tutorials & Guides
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master our AI and IT solutions with step-by-step tutorials, comprehensive guides, and best practices.
            </p>
          </div>

          {/* Tutorial Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI Services Tutorials */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">Learn how to implement and optimize our AI solutions for maximum impact.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• AI Chatbot Setup & Configuration</li>
                <li>• Document Processing Automation</li>
                <li>• Voice Assistant Integration</li>
                <li>• Fraud Detection Implementation</li>
                <li>• Image Recognition Best Practices</li>
              </ul>
            </div>

            {/* IT Solutions Tutorials */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">IT Solutions</h3>
              <p className="text-gray-300 mb-6">Comprehensive guides for deploying and managing IT infrastructure.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cloud Infrastructure Setup</li>
                <li>• Web Development Workflows</li>
                <li>• Database Management</li>
                <li>• Network Configuration</li>
                <li>• Security Implementation</li>
              </ul>
            </div>

            {/* Micro SaaS Tutorials */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">Build and scale your micro SaaS applications with our tools.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Task Manager Pro Setup</li>
                <li>• Analytics Dashboard Configuration</li>
                <li>• Customer Support Hub</li>
                <li>• Inventory Management</li>
                <li>• Social Media Scheduling</li>
              </ul>
            </div>
          </div>

          {/* Featured Tutorials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Tutorials</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <div className="flex items-center mb-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">AI Services</span>
                  <span className="ml-2 text-gray-400 text-sm">15 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Getting Started with AI Chatbot Builder</h3>
                <p className="text-gray-300 mb-4">Learn how to create, configure, and deploy your first AI chatbot in under 15 minutes.</p>
                <a href="/ai-chatbot-builder" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Start Tutorial →
                </a>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">IT Solutions</span>
                  <span className="ml-2 text-gray-400 text-sm">25 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure Best Practices</h3>
                <p className="text-gray-300 mb-4">Master cloud deployment strategies, security configurations, and cost optimization techniques.</p>
                <a href="/cloud-infrastructure" className="text-blue-400 hover:text-blue-300 font-medium">
                  Start Tutorial →
                </a>
              </div>
            </div>
          </div>

          {/* Learning Paths */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Beginner</h3>
                <p className="text-gray-300 text-sm mb-4">Start your journey with basic concepts and simple implementations.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>✓ Introduction to AI</div>
                  <div>✓ Basic Web Development</div>
                  <div>✓ Cloud Fundamentals</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Intermediate</h3>
                <p className="text-gray-300 text-sm mb-4">Build on your knowledge with advanced features and integrations.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>✓ Advanced AI Models</div>
                  <div>✓ Full-Stack Development</div>
                  <div>✓ DevOps Automation</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Expert</h3>
                <p className="text-gray-300 text-sm mb-4">Master enterprise-level solutions and optimization strategies.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>✓ Enterprise AI Solutions</div>
                  <div>✓ Microservices Architecture</div>
                  <div>✓ Performance Optimization</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses who are already using our solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Expert Help
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;
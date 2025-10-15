import React from 'react';
import { Helmet } from 'react-helmet-async';

const DocsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for all Zion Tech Group AI and IT solutions, APIs, and integrations." />
        <meta name="keywords" content="documentation, API docs, guides, reference, integration, developer resources" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and technical documentation for all our AI and IT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a href="#ai-services" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Services</h3>
              <p className="text-gray-400 text-sm">APIs, SDKs, and integration guides</p>
            </a>

            <a href="#it-solutions" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">IT Solutions</h3>
              <p className="text-gray-400 text-sm">Infrastructure and deployment guides</p>
            </a>

            <a href="#micro-saas" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Micro SaaS</h3>
              <p className="text-gray-400 text-sm">Application development and scaling</p>
            </a>

            <a href="#api-reference" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">API Reference</h3>
              <p className="text-gray-400 text-sm">Complete API documentation</p>
            </a>
          </div>

          {/* AI Services Documentation */}
          <section id="ai-services" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">AI Services Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">AI Chatbot Builder</h3>
                <p className="text-gray-300 text-sm mb-4">Create intelligent chatbots with natural language processing capabilities.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Quick Start Guide</div>
                  <div>• API Reference</div>
                  <div>• Integration Examples</div>
                  <div>• Best Practices</div>
                </div>
                <a href="/ai-chatbot-builder" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 inline-block">
                  View Documentation →
                </a>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">AI Document Processor</h3>
                <p className="text-gray-300 text-sm mb-4">Automate document processing with AI-powered text extraction and analysis.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Setup Guide</div>
                  <div>• Supported Formats</div>
                  <div>• Processing Options</div>
                  <div>• Error Handling</div>
                </div>
                <a href="/ai-document-processor" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 inline-block">
                  View Documentation →
                </a>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">AI Voice Assistant</h3>
                <p className="text-gray-300 text-sm mb-4">Build voice-enabled applications with speech recognition and synthesis.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Voice Configuration</div>
                  <div>• Language Support</div>
                  <div>• Audio Processing</div>
                  <div>• Deployment Guide</div>
                </div>
                <a href="/ai-voice-assistant" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 inline-block">
                  View Documentation →
                </a>
              </div>
            </div>
          </section>

          {/* IT Solutions Documentation */}
          <section id="it-solutions" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">IT Solutions Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-sm mb-4">Deploy and manage scalable cloud infrastructure solutions.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Architecture Guide</div>
                  <div>• Deployment Scripts</div>
                  <div>• Monitoring Setup</div>
                  <div>• Security Configuration</div>
                </div>
                <a href="/cloud-infrastructure" className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-4 inline-block">
                  View Documentation →
                </a>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Web Development</h3>
                <p className="text-gray-300 text-sm mb-4">Modern web development frameworks and best practices.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Framework Setup</div>
                  <div>• Component Library</div>
                  <div>• Performance Optimization</div>
                  <div>• Testing Strategies</div>
                </div>
                <a href="/web-development" className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-4 inline-block">
                  View Documentation →
                </a>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">DevOps Automation</h3>
                <p className="text-gray-300 text-sm mb-4">Automate your development and deployment workflows.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• CI/CD Pipeline</div>
                  <div>• Container Orchestration</div>
                  <div>• Infrastructure as Code</div>
                  <div>• Monitoring & Logging</div>
                </div>
                <a href="/devops-automation" className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-4 inline-block">
                  View Documentation →
                </a>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section id="api-reference" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">API Reference</h2>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">REST API</h3>
                  <p className="text-gray-300 mb-6">Comprehensive REST API for all our services with detailed endpoints, parameters, and response formats.</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-white font-mono text-sm">GET /api/v1/ai/chatbot</span>
                      <span className="text-green-400 text-xs px-2 py-1 bg-green-500/20 rounded">200</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-white font-mono text-sm">POST /api/v1/ai/process</span>
                      <span className="text-green-400 text-xs px-2 py-1 bg-green-500/20 rounded">201</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-white font-mono text-sm">PUT /api/v1/config/update</span>
                      <span className="text-green-400 text-xs px-2 py-1 bg-green-500/20 rounded">200</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">SDKs & Libraries</h3>
                  <p className="text-gray-300 mb-6">Official SDKs and libraries for popular programming languages and frameworks.</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-white">JavaScript/Node.js</span>
                      <span className="text-cyan-400 text-sm">v2.1.0</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-white">Python</span>
                      <span className="text-cyan-400 text-sm">v1.8.2</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-white">React</span>
                      <span className="text-cyan-400 text-sm">v1.5.3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Access our complete documentation, API references, and integration guides to start building with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/api-docs"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                View API Docs
              </a>
              <a
                href="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Get Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;
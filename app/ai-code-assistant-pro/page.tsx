import React from 'react';
import { Helmet } from 'react-helmet-async';

const AICodeAssistantProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code assistant with intelligent suggestions, automated debugging, and code optimization for developers." />
        <meta name="keywords" content="AI code assistant, code optimization, automated debugging, developer tools, AI programming" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Code Assistant <span className="text-cyan-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered code assistant with intelligent suggestions, automated debugging, and code optimization for developers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Intelligent Code Suggestions</h3>
                <p className="text-gray-300 mb-4">
                  Get real-time code suggestions based on context, best practices, and your coding patterns.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Context-aware code completion</li>
                  <li>• Multi-language support</li>
                  <li>• Framework-specific suggestions</li>
                  <li>• Performance optimization hints</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Automated Debugging</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered debugging that identifies issues and suggests fixes automatically.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Error detection and analysis</li>
                  <li>• Root cause identification</li>
                  <li>• Fix suggestions with explanations</li>
                  <li>• Code quality improvements</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Code Generation</h4>
                  <p className="text-gray-300">Generate code from natural language descriptions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Code Analysis</h4>
                  <p className="text-gray-300">Deep analysis of code quality and performance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Real-time Assistance</h4>
                  <p className="text-gray-300">Instant help as you code</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Code Assistant Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodeAssistantProPage;
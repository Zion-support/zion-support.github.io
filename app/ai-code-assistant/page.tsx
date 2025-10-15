import React from 'react';
import SEOHead from '../components/SEOHead';

const AICodeAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Code Assistant - Zion Tech Group"
        description="Advanced AI-powered code assistant that helps developers write better code, debug issues, and improve productivity."
        keywords="AI code assistant, code generation, debugging, programming, development tools"
        canonicalUrl="https://ziontechgroup.com/ai-code-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Code Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent code generation, debugging, and optimization powered by advanced AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Code generation and completion
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Intelligent debugging assistance
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Code optimization suggestions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Multi-language support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Real-time code analysis
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Benefits</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Faster development cycles
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Reduced debugging time
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Improved code quality
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Enhanced productivity
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Learning and skill development
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-code-assistant"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodeAssistantPage;
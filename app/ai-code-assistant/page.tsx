import React from 'react';
import SEOHead from '../components/SEOHead';

const AICodeAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Code Assistant - Zion Tech Group"
        description="Intelligent code assistant with AI-powered code generation, debugging, refactoring, and documentation capabilities for developers."
        keywords="AI code assistant, code generation, debugging, refactoring, documentation, developer tools, programming assistant"
        canonicalUrl="https://ziontechgroup.com/ai-code-assistant"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Code Assistant</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boost your development productivity with our AI-powered code assistant featuring intelligent code generation, debugging, and refactoring capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Intelligent Code Generation</h3>
                    <p className="text-gray-600">Generate code snippets, functions, and entire modules based on natural language descriptions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Debugging</h3>
                    <p className="text-gray-600">Identify and fix bugs automatically with AI-powered error detection and resolution suggestions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Code Refactoring</h3>
                    <p className="text-gray-600">Improve code quality with intelligent refactoring suggestions and automated code optimization.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Documentation Generation</h3>
                    <p className="text-gray-600">Automatically generate comprehensive documentation and comments for your code.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Developer</h3>
                  <div className="text-4xl font-bold text-blue-600 mt-2">$49/month</div>
                  <p className="text-gray-600">per developer</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited code generation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>IDE integration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Code review assistance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodeAssistantPage;
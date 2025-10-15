import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AICodeAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Code Assistant - Intelligent Code Generation & Review | Zion Tech Group</title>
        <meta name="description" content="AI-powered code assistant that generates, reviews, and optimizes code. Boost developer productivity with intelligent code suggestions and automated testing." />
        <meta name="keywords" content="AI code assistant, code generation, code review, developer tools, programming assistance, code optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Code Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionize your development workflow with AI-powered code generation, intelligent reviews, and automated optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-code-assistant" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Try Free Demo
              </a>
              <Link to="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
                Get Started
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Code Generation</h3>
                <p className="text-gray-600 mb-4">
                  Generate high-quality code from natural language descriptions with support for 50+ programming languages.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Natural language to code</li>
                  <li>• Multi-language support</li>
                  <li>• Context-aware generation</li>
                  <li>• Code completion</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Code Review</h3>
                <p className="text-gray-600 mb-4">
                  Automated code review with security analysis, performance optimization, and best practice suggestions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Security vulnerability detection</li>
                  <li>• Performance optimization</li>
                  <li>• Code quality metrics</li>
                  <li>• Best practice recommendations</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Testing</h3>
                <p className="text-gray-600 mb-4">
                  Generate comprehensive test suites automatically with unit tests, integration tests, and edge case coverage.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Unit test generation</li>
                  <li>• Integration test creation</li>
                  <li>• Edge case detection</li>
                  <li>• Test coverage analysis</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Automatically generate comprehensive documentation, comments, and API references for your codebase.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Auto-generated comments</li>
                  <li>• API documentation</li>
                  <li>• Code explanation</li>
                  <li>• README generation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Code Refactoring</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent code refactoring suggestions to improve maintainability, performance, and readability.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Refactoring suggestions</li>
                  <li>• Code optimization</li>
                  <li>• Pattern recognition</li>
                  <li>• Legacy code modernization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IDE Integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration with popular IDEs including VS Code, IntelliJ, Sublime Text, and more.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• VS Code extension</li>
                  <li>• IntelliJ plugin</li>
                  <li>• Sublime Text support</li>
                  <li>• Command line interface</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$29<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 1,000 code generations/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic code review
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    5 programming languages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-code-assistant/starter" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 10,000 code generations/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced code review & security analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    25+ programming languages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Automated testing generation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-code-assistant/professional" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited code generations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Full security & compliance analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All programming languages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom model training
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-code-assistant/enterprise" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Zion AI Code Assistant?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 10x Faster Development</h3>
                <p className="text-gray-600">
                  Reduce development time by up to 90% with AI-powered code generation and automated testing. 
                  Focus on solving business problems instead of writing boilerplate code.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🛡️ Enhanced Security</h3>
                <p className="text-gray-600">
                  Built-in security analysis detects vulnerabilities, suggests secure coding practices, 
                  and helps maintain compliance with industry standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Improved Code Quality</h3>
                <p className="text-gray-600">
                  AI-powered code review ensures consistent quality, follows best practices, 
                  and maintains high standards across your entire codebase.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Cost Effective</h3>
                <p className="text-gray-600">
                  Reduce development costs by 60-80% while improving code quality and reducing 
                  time-to-market for your applications.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Startups & SMBs</h3>
                <p className="text-gray-600 text-sm">
                  Accelerate development with limited resources and build MVPs faster than ever before.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Teams</h3>
                <p className="text-gray-600 text-sm">
                  Maintain code quality across large teams and ensure consistent development practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Freelance Developers</h3>
                <p className="text-gray-600 text-sm">
                  Deliver projects faster and take on more clients with AI-powered development assistance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">DevOps Teams</h3>
                <p className="text-gray-600 text-sm">
                  Automate infrastructure code generation and maintain consistent deployment practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">QA Engineers</h3>
                <p className="text-gray-600 text-sm">
                  Generate comprehensive test suites and automate testing workflows.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Code Review Teams</h3>
                <p className="text-gray-600 text-sm">
                  Streamline code review processes with AI-powered analysis and suggestions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Development Workflow?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers who are already using AI to code faster and better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-code-assistant" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </a>
              <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodeAssistantPage;
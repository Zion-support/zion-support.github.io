import React from 'react';
import SEOHead from '../components/SEOHead';

const ZionAICodeAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion AI Code Assistant - Intelligent Code Generation & Review"
        description="AI-powered code assistant that generates, reviews, and optimizes code across multiple programming languages. Boost developer productivity with intelligent code suggestions and automated testing."
        keywords="AI code assistant, code generation, code review, programming, developer tools, AI coding, code optimization, automated testing, software development"
        canonicalUrl="https://ziontechgroup.com/zion-ai-code-assistant"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Zion AI Code Assistant</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Intelligent code generation, review, and optimization powered by advanced AI. Boost your development productivity by 300%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#demo" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Try Live Demo
                </a>
                <a 
                  href="/contact?service=zion-ai-code-assistant" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful AI Code Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your coding experience with our advanced AI-powered development assistant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Code Generation</h3>
              <p className="text-gray-600 mb-4">
                Generate high-quality code from natural language descriptions. Supports 20+ programming languages including Python, JavaScript, Java, C++, and more.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Natural language to code conversion</li>
                <li>• Multi-language support</li>
                <li>• Context-aware suggestions</li>
                <li>• Best practices integration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Code Review</h3>
              <p className="text-gray-600 mb-4">
                Automated code review with security analysis, performance optimization suggestions, and bug detection. Catch issues before they reach production.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Security vulnerability detection</li>
                <li>• Performance optimization tips</li>
                <li>• Code quality metrics</li>
                <li>• Automated testing suggestions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Optimization</h3>
              <p className="text-gray-600 mb-4">
                Get instant suggestions for code improvements, refactoring opportunities, and performance enhancements as you type.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Live code suggestions</li>
                <li>• Refactoring recommendations</li>
                <li>• Performance analysis</li>
                <li>• Memory optimization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Testing</h3>
              <p className="text-gray-600 mb-4">
                Generate comprehensive test suites automatically. Unit tests, integration tests, and edge case coverage with minimal effort.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Unit test generation</li>
                <li>• Integration test creation</li>
                <li>• Edge case identification</li>
                <li>• Test coverage analysis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Documentation Generator</h3>
              <p className="text-gray-600 mb-4">
                Automatically generate comprehensive documentation, API docs, and code comments. Keep your codebase well-documented effortlessly.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• API documentation</li>
                <li>• Code comments generation</li>
                <li>• README creation</li>
                <li>• Technical specifications</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Debug Assistant</h3>
              <p className="text-gray-600 mb-4">
                Intelligent debugging with error analysis, stack trace interpretation, and step-by-step solution recommendations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Error analysis and solutions</li>
                <li>• Stack trace interpretation</li>
                <li>• Debugging strategies</li>
                <li>• Root cause analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your development needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$29</div>
                <div className="text-gray-600 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>1,000 code generations/month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>5 programming languages</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Basic code review</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-code-assistant&plan=starter" 
                  className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors block"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="bg-blue-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-2">$79</div>
                <div className="text-blue-100 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>10,000 code generations/month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>20+ programming languages</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Advanced code review</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Automated testing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-code-assistant&plan=professional" 
                  className="w-full bg-white text-blue-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors block"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$199</div>
                <div className="text-gray-600 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited code generations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>All programming languages</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Full AI code review suite</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Custom model training</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>24/7 dedicated support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-code-assistant&plan=enterprise" 
                  className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div id="demo" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">See It In Action</h2>
              <p className="text-lg text-gray-600">Watch how Zion AI Code Assistant transforms your development workflow</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Try Our Live Demo</h3>
                  <p className="text-gray-600 mb-6">
                    Experience the power of AI code generation. Simply describe what you want to build, and watch our AI create the code for you.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Describe your code:</label>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                        placeholder="e.g., Create a Python function that calculates the factorial of a number with error handling"
                      ></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Generate Code
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Generated Code:</h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`def factorial(n):
    """
    Calculate the factorial of a number.
    
    Args:
        n (int): A non-negative integer
        
    Returns:
        int: The factorial of n
        
    Raises:
        ValueError: If n is negative
        TypeError: If n is not an integer
    """
    if not isinstance(n, int):
        raise TypeError("Input must be an integer")
    
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    
    if n == 0 or n == 1:
        return 1
    
    result = 1
    for i in range(2, n + 1):
        result *= i
    
    return result`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Coding?</h2>
            <p className="text-xl mb-8">
              Join thousands of developers who are already coding faster and smarter with Zion AI Code Assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=zion-ai-code-assistant" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAICodeAssistantPage;
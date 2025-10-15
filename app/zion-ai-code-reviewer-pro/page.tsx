import React from 'react';
import SEOHead from '../components/SEOHead';

const ZionAICodeReviewerProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Code Reviewer Pro - Zion Tech Group"
        description="Advanced AI-powered code review and quality assurance platform that automatically detects bugs, security vulnerabilities, and code quality issues."
        canonicalUrl="https://ziontechgroup.com/zion-ai-code-reviewer-pro"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Code Reviewer Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI-powered code review and quality assurance platform that automatically detects bugs, security vulnerabilities, and code quality issues.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Automated Code Review</h3>
                    <p className="text-gray-600">AI analyzes your code for bugs, security issues, and quality problems automatically.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Security Vulnerability Detection</h3>
                    <p className="text-gray-600">Identifies potential security vulnerabilities and suggests fixes before they become problems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-language Support</h3>
                    <p className="text-gray-600">Supports all major programming languages including Python, JavaScript, Java, C++, and more.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Integration with Git</h3>
                    <p className="text-gray-600">Seamlessly integrates with your Git workflow and CI/CD pipelines.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Basic</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$49<span className="text-lg text-gray-500">/month</span></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Up to 10 repositories</li>
                    <li>• Basic code analysis</li>
                    <li>• Security scanning</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-blue-500 rounded-lg p-6 bg-blue-50">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Pro</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$149<span className="text-lg text-gray-500">/month</span></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Up to 50 repositories</li>
                    <li>• Advanced AI analysis</li>
                    <li>• Custom rules</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$399<span className="text-lg text-gray-500">/month</span></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Unlimited repositories</li>
                    <li>• Full AI capabilities</li>
                    <li>• Team collaboration</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Improved Code Quality</h3>
                <p className="text-gray-600">Catch issues early and maintain high code standards across your team.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Faster Development</h3>
                <p className="text-gray-600">Reduce time spent on manual code reviews and focus on building features.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enhanced Security</h3>
                <p className="text-gray-600">Identify and fix security vulnerabilities before they reach production.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us today to learn more about AI Code Reviewer Pro</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Contact Sales
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAICodeReviewerProPage;
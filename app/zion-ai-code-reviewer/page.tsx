import React, { memo } from 'react';
import SEOHead from '../components/SEOHead';

const ZionAICodeReviewerPage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Code Reviewer",
    "description": "AI-powered code review and quality analysis tool for developers",
    "url": "https://ziontechgroup.com/zion-ai-code-reviewer",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Code Reviewer - Automated Code Quality Analysis | Zion Tech Group"
        description="AI-powered code review tool that automatically analyzes code quality, detects bugs, suggests improvements, and ensures best practices. Starting at $29/month."
        keywords="AI code review, automated code analysis, code quality, bug detection, code optimization, developer tools"
        canonicalUrl="https://ziontechgroup.com/zion-ai-code-reviewer"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-300 text-sm font-medium">🚀 New AI Tool</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion AI Code Reviewer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your development workflow with AI-powered code analysis. Detect bugs, optimize performance, and ensure code quality automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-all duration-300 font-semibold text-lg">
                View Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Bug Detection</h3>
              <p className="text-gray-300">
                AI-powered analysis that identifies potential bugs, security vulnerabilities, and code smells before they reach production.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-300">
                Automatically suggest performance improvements, memory optimizations, and code refactoring opportunities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📏</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Code Standards</h3>
              <p className="text-gray-300">
                Enforce coding standards, best practices, and maintain consistency across your entire codebase.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security Analysis</h3>
              <p className="text-gray-300">
                Comprehensive security scanning to identify vulnerabilities, weak authentication, and data exposure risks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Code Metrics</h3>
              <p className="text-gray-300">
                Detailed metrics on code complexity, maintainability, test coverage, and technical debt analysis.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Learning</h3>
              <p className="text-gray-300">
                Machine learning algorithms that adapt to your codebase patterns and improve suggestions over time.
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$29<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Up to 10,000 lines of code</li>
                  <li>✓ Basic bug detection</li>
                  <li>✓ Performance suggestions</li>
                  <li>✓ Email support</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 border border-purple-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Professional</h3>
                <div className="text-3xl font-bold text-white mb-4">$79<span className="text-lg text-purple-200">/month</span></div>
                <ul className="space-y-3 text-purple-100 mb-6">
                  <li>✓ Up to 100,000 lines of code</li>
                  <li>✓ Advanced AI analysis</li>
                  <li>✓ Security scanning</li>
                  <li>✓ Code metrics dashboard</li>
                  <li>✓ Priority support</li>
                  <li>✓ Team collaboration</li>
                </ul>
                <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$199<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Unlimited code analysis</li>
                  <li>✓ Custom AI models</li>
                  <li>✓ Advanced security</li>
                  <li>✓ API access</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Code Quality?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of developers who trust Zion AI Code Reviewer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Start Free Trial
              </button>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-all duration-300 font-semibold text-lg">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ZionAICodeReviewerPage.displayName = 'ZionAICodeReviewerPage';

export default ZionAICodeReviewerPage;
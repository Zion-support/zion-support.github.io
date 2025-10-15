import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AICodeReviewerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Code Reviewer Pro - Zion Tech Group</title>
        <meta name="description" content="Automate code reviews with AI. Our AI Code Reviewer Pro analyzes code quality, security vulnerabilities, and performance issues automatically." />
        <meta name="keywords" content="AI code review, automated code analysis, code quality, security vulnerabilities, performance optimization, code review automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">🔍</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                AI <span className="gradient-text">Code Reviewer Pro</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Automate your code review process with AI-powered analysis. Detect security vulnerabilities, 
                performance issues, and code quality problems automatically to improve your development workflow.
              </p>
              
              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive code analysis and review capabilities powered by advanced AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">Automated Code Analysis</h3>
                <p className="text-gray-300">
                  AI automatically analyzes your code for quality issues, bugs, and potential improvements.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Security Vulnerability Detection</h3>
                <p className="text-gray-300">
                  Identify security vulnerabilities and potential exploits before they become problems.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Performance Optimization</h3>
                <p className="text-gray-300">
                  Detect performance bottlenecks and suggest optimizations to improve code efficiency.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Code Quality Metrics</h3>
                <p className="text-gray-300">
                  Get detailed metrics on code complexity, maintainability, and overall quality scores.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">💡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Best Practice Suggestions</h3>
                <p className="text-gray-300">
                  Receive intelligent suggestions for following coding best practices and standards.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Multi-language Support</h3>
                <p className="text-gray-300">
                  Support for multiple programming languages including Python, JavaScript, Java, C++, and more.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🔗</div>
                <h3 className="text-2xl font-bold text-white mb-4">Git Integration</h3>
                <p className="text-gray-300">
                  Seamlessly integrate with Git repositories for automated code review on every commit.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">👥</div>
                <h3 className="text-2xl font-bold text-white mb-4">Team Collaboration</h3>
                <p className="text-gray-300">
                  Share code review results with your team and track improvements over time.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">⚙️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Rules Engine</h3>
                <p className="text-gray-300">
                  Configure custom rules and standards specific to your project requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Why Choose AI Code Reviewer Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your development process with intelligent code analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Faster Code Reviews</h3>
                <p className="text-gray-300">
                  Reduce code review time by up to 80% with automated analysis and instant feedback.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">🐛</div>
                <h3 className="text-2xl font-bold text-white mb-4">Fewer Bugs</h3>
                <p className="text-gray-300">
                  Catch bugs and issues early in the development process before they reach production.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-white mb-4">Better Code Quality</h3>
                <p className="text-gray-300">
                  Maintain consistent code quality across your entire development team.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-4">Learning Acceleration</h3>
                <p className="text-gray-300">
                  Help junior developers learn best practices and improve their coding skills.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold text-white mb-4">Time Savings</h3>
                <p className="text-gray-300">
                  Free up your senior developers to focus on architecture and complex problem-solving.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300">
                  Generate comprehensive documentation and code comments automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your development team size
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold gradient-text mb-6">$39<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Up to 5 developers</li>
                  <li>✓ 100 code reviews/month</li>
                  <li>✓ Basic security scanning</li>
                  <li>✓ Quality metrics</li>
                  <li>✓ Email support</li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI Code Reviewer Basic Plan"
                  className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center border-2 border-cyan-500">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold gradient-text mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Up to 15 developers</li>
                  <li>✓ 500 code reviews/month</li>
                  <li>✓ Advanced security scanning</li>
                  <li>✓ Performance analysis</li>
                  <li>✓ Custom rules</li>
                  <li>✓ Git integration</li>
                  <li>✓ Priority support</li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI Code Reviewer Pro Plan"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold gradient-text mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Unlimited developers</li>
                  <li>✓ Unlimited code reviews</li>
                  <li>✓ Complete security suite</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Team collaboration</li>
                  <li>✓ API access</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI Code Reviewer Enterprise Plan"
                  className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ideal for development teams of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Software Development</h3>
                <p className="text-gray-300 mb-4">
                  Improve code quality and reduce bugs in your software development projects.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Web applications</li>
                  <li>• Mobile apps</li>
                  <li>• Desktop software</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Code Review</h3>
                <p className="text-gray-300 mb-4">
                  Automate the code review process to ensure consistent quality across your team.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Pull request reviews</li>
                  <li>• Code quality checks</li>
                  <li>• Best practice enforcement</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Bug Fixing</h3>
                <p className="text-gray-300 mb-4">
                  Identify and fix bugs before they reach production with automated analysis.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Security vulnerabilities</li>
                  <li>• Performance issues</li>
                  <li>• Logic errors</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Learning Programming</h3>
                <p className="text-gray-300 mb-4">
                  Help developers learn best practices and improve their coding skills.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Code style guidance</li>
                  <li>• Best practice suggestions</li>
                  <li>• Learning recommendations</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Code Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Optimize your code for better performance and maintainability.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Performance improvements</li>
                  <li>• Memory optimization</li>
                  <li>• Algorithm suggestions</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-4">
                  Generate comprehensive documentation and code comments automatically.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• API documentation</li>
                  <li>• Code comments</li>
                  <li>• Technical specifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Start Improving Your Code Quality Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of development teams already using our AI Code Reviewer Pro to improve code quality and reduce bugs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICodeReviewerPage;
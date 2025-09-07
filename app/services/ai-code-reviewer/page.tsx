import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Code Reviewer - Automated Code Quality Analysis | Zion Tech Group',
  description: 'AI-powered code review and quality analysis. Improve code quality, catch bugs early, and maintain consistent coding standards with our intelligent code reviewer.',
  keywords: 'AI code review, code quality analysis, automated testing, security scanning, performance optimization, code standards',
};

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function AICodeReviewerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Code Reviewer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automated code review and quality analysis powered by advanced AI.
            Improve code quality, catch bugs early, and maintain consistent coding
            standards across your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Key Features
            </h2>
            <div className="space-y-6">
              <FeatureItem
                title="Intelligent Code Analysis"
                description="AI-powered analysis of code quality, complexity, and maintainability with detailed recommendations."
              />
              <FeatureItem
                title="Security Vulnerability Detection"
                description="Automated scanning for security vulnerabilities, OWASP compliance, and best practices enforcement."
              />
              <FeatureItem
                title="Performance Optimization"
                description="Identify performance bottlenecks, memory leaks, and optimization opportunities with specific suggestions."
              />
              <FeatureItem
                title="Code Style & Standards"
                description="Enforce coding standards, detect anti-patterns, and suggest improvements for better code quality."
              />
              <FeatureItem
                title="Multi-Language Support"
                description="Support for 20+ programming languages including Python, JavaScript, Java, C++, Go, and more."
              />
              <FeatureItem
                title="Integration Ready"
                description="Seamless integration with GitHub, GitLab, Bitbucket, and popular CI/CD pipelines."
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Benefits
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">90% Faster Code Reviews</h3>
                <p className="text-gray-300">Automated analysis reduces manual review time while catching more issues.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Consistent Quality</h3>
                <p className="text-gray-300">Enforce coding standards and best practices across all team members.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Early Bug Detection</h3>
                <p className="text-gray-300">Catch security vulnerabilities and bugs before they reach production.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Team Learning</h3>
                <p className="text-gray-300">Help developers learn best practices through detailed feedback and suggestions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$199<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 5 repositories</li>
                <li>Basic code analysis</li>
                <li>Security scanning</li>
                <li>Email notifications</li>
                <li>GitHub integration</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$399<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 25 repositories</li>
                <li>Advanced AI analysis</li>
                <li>Performance optimization</li>
                <li>Custom rules engine</li>
                <li>Multi-platform support</li>
                <li>Priority support</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$799<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Unlimited repositories</li>
                <li>Custom AI models</li>
                <li>Advanced security scanning</li>
                <li>Team collaboration tools</li>
                <li>API access</li>
                <li>24/7 dedicated support</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Improve Your Code Quality?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of development teams who trust our AI Code Reviewer to maintain high-quality code standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}
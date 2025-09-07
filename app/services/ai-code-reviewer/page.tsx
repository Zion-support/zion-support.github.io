import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Code Reviewer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automated code review and quality analysis powered by advanced AI.
            Improve code quality, catch bugs early, and maintain consistent coding
            standards across your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <div className="space-y-4">
              <FeatureItem
                icon="🔍"
                title="Intelligent Code Analysis"
                description="AI-powered analysis that understands context, patterns, and best practices to provide meaningful feedback."
              />
              <FeatureItem
                icon="🐛"
                title="Bug Detection"
                description="Automatically identify potential bugs, security vulnerabilities, and performance issues before they reach production."
              />
              <FeatureItem
                icon="📏"
                title="Code Quality Metrics"
                description="Comprehensive quality metrics including complexity, maintainability, test coverage, and technical debt analysis."
              />
              <FeatureItem
                icon="🎯"
                title="Custom Rules Engine"
                description="Define custom coding standards and rules specific to your team's requirements and project needs."
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Benefits
            </h2>
            <div className="space-y-4">
              <FeatureItem
                icon="⚡"
                title="Real-time Feedback"
                description="Get instant feedback as you code with IDE integrations and continuous analysis during development."
              />
              <FeatureItem
                icon="📊"
                title="Team Analytics"
                description="Track code quality trends, team performance metrics, and improvement areas across your organization."
              />
              <FeatureItem
                icon="🛡️"
                title="Security Focus"
                description="Advanced security analysis to identify vulnerabilities and ensure compliance with security best practices."
              />
              <FeatureItem
                icon="🚀"
                title="Faster Development"
                description="Reduce code review time and accelerate development cycles with automated quality checks."
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Improve Your Code Quality?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI Code Reviewer can help your team write better code faster.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Contact Us Today
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Code Reviewer | Zion Tech Group',
  description: 'Automated AI-powered code review and quality analysis for development teams.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Code Reviewer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automated AI-powered code review and quality analysis to ensure code excellence and maintainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Automated Review</h3>
            <p className="text-gray-300 mb-4">
              AI-powered code review that catches issues before they reach production.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Bug Detection</li>
              <li>• Security Vulnerabilities</li>
              <li>• Performance Issues</li>
              <li>• Code Smells</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quality Metrics</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive quality analysis and metrics for code improvement.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Code Complexity Analysis</li>
              <li>• Maintainability Scores</li>
              <li>• Test Coverage</li>
              <li>• Technical Debt</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Best Practices</h3>
            <p className="text-gray-300 mb-4">
              Enforce coding standards and best practices across your team.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Style Guidelines</li>
              <li>• Naming Conventions</li>
              <li>• Architecture Patterns</li>
              <li>• Documentation Standards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


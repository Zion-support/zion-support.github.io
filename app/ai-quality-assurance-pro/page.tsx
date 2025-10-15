import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIQualityAssuranceProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Quality Assurance Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered quality assurance platform with automated testing, code analysis, and quality monitoring for software development." />
        <meta name="keywords" content="AI quality assurance, automated testing, code quality, software testing, quality monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quality-assurance-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Quality Assurance <span className="text-teal-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered quality assurance platform with automated testing, code analysis, and quality monitoring for software development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Automated Testing</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered automated testing that identifies bugs, performance issues, and quality problems.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Automated test generation</li>
                  <li>• Bug detection and reporting</li>
                  <li>• Performance testing</li>
                  <li>• Security vulnerability scanning</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Code Quality Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive code analysis with quality metrics, best practices, and improvement suggestions.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Code quality metrics</li>
                  <li>• Best practice enforcement</li>
                  <li>• Refactoring suggestions</li>
                  <li>• Technical debt analysis</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Smart Detection</h4>
                  <p className="text-gray-300">AI-powered issue detection</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Quality Metrics</h4>
                  <p className="text-gray-300">Comprehensive quality reporting</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Continuous Monitoring</h4>
                  <p className="text-gray-300">Real-time quality monitoring</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Quality Assurance Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIQualityAssuranceProPage;
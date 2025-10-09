import React from 'react';
import Link from 'next/link';
import { Code, Terminal, GitBranch, Database, Cloud, Shield, Zap, ArrowRight } from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Developer Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              AI-powered development tools to accelerate your coding workflow
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Developer Tools
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your development process with our comprehensive suite of tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Code Review Assistant</h3>
              <p className="text-gray-600 mb-4">Automated code analysis with AI-powered bug detection and security scanning</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$89/month</div>
              <Link href="/micro-saas" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Test Generation Suite</h3>
              <p className="text-gray-600 mb-4">Intelligent automated test generation with coverage analysis</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$149/month</div>
              <Link href="/micro-saas" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart API Documentation</h3>
              <p className="text-gray-600 mb-4">AI-powered API documentation with interactive examples</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">$79/month</div>
              <Link href="/micro-saas" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperToolsPage;


'use client';
import React from 'react';
import { Code, Zap, Shield, Settings, BarChart, Users, Brain, Target } from 'lucide-react';

const CodeAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Code Assistant
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Code Generation & Development Support
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered code assistant that helps developers write better code, 
            debug issues, and accelerate development with intelligent suggestions.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Code className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Code Generation</h3>
              <p className="text-gray-300">
                AI-powered code generation for multiple programming 
                languages with context-aware suggestions.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Auto-Completion</h3>
              <p className="text-gray-300">
                Intelligent code completion with smart suggestions 
                based on your coding patterns and context.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Bug Detection</h3>
              <p className="text-gray-300">
                Advanced bug detection and debugging assistance 
                with detailed explanations and fixes.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Code Review</h3>
              <p className="text-gray-300">
                Automated code review with best practices 
                suggestions and security recommendations.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Performance Analysis</h3>
              <p className="text-gray-300">
                Code performance analysis with optimization 
                suggestions and efficiency improvements.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300">
                Automatic code documentation generation 
                with comments and API documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Supported Languages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Supported Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• JavaScript/TypeScript</li>
                <li>• Python</li>
                <li>• Java</li>
                <li>• C#</li>
                <li>• PHP</li>
                <li>• Ruby</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Mobile & Desktop</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Swift (iOS)</li>
                <li>• Kotlin (Android)</li>
                <li>• C++</li>
                <li>• Go</li>
                <li>• Rust</li>
                <li>• Dart</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Developer</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic code generation</li>
                <li>Standard auto-completion</li>
                <li>Basic bug detection</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced code generation</li>
                <li>Smart auto-completion</li>
                <li>Advanced bug detection</li>
                <li>Priority support</li>
                <li>Code review</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Full AI code suite</li>
                <li>Custom models</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Team collaboration</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Accelerate Your Development?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free code analysis and see how AI can improve your development workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Analysis
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CodeAssistantPage;
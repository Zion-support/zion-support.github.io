'use client';
import React from 'react';
import { FileText, Zap, Shield, Settings, BarChart, Users, Globe, Lock } from 'lucide-react';

const DocGeneratorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Doc Generator
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Documentation Generation & Management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered documentation generator that creates comprehensive, 
            accurate, and up-to-date documentation from code, APIs, and specifications.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <FileText className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Auto-Generation</h3>
              <p className="text-gray-300">
                Automatically generate documentation from code, 
                APIs, and specifications with AI analysis.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Multiple Formats</h3>
              <p className="text-gray-300">
                Generate documentation in multiple formats including 
                Markdown, HTML, PDF, and interactive docs.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Version Control</h3>
              <p className="text-gray-300">
                Automatic version control and change tracking 
                for documentation updates and revisions.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Customization</h3>
              <p className="text-gray-300">
                Customizable templates and styling options 
                to match your brand and requirements.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Documentation analytics with usage metrics, 
                search insights, and user feedback.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300">
                Team collaboration features with comments, 
                reviews, and approval workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Documentation Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Documentation Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Technical Docs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• API documentation</li>
                <li>• Code documentation</li>
                <li>• Technical specifications</li>
                <li>• Architecture diagrams</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">User Docs</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• User guides</li>
                <li>• Tutorials</li>
                <li>• FAQ sections</li>
                <li>• Help documentation</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 10 documents</li>
                <li>Basic generation</li>
                <li>Standard templates</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 100 documents</li>
                <li>Advanced generation</li>
                <li>Custom templates</li>
                <li>Priority support</li>
                <li>Team collaboration</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited documents</li>
                <li>Full generation suite</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Generate Better Docs?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free documentation audit and see how we can improve your docs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Audit
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

export default DocGeneratorPage;